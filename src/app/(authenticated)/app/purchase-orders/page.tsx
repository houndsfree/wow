'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Select,
  Table,
  Space,
  Spin,
} from 'antd'
import { PlusOutlined, PrinterOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PurchaseOrdersPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()
  const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>(
    null,
  )
  const [purchaseOrders, setPurchaseOrders] = useState<
    Prisma.PurchaseOrderGetPayload<{ include: { warehouse: true } }>[] | null
  >(null)

  const { data: warehouses, isLoading: isLoadingWarehouses } =
    Api.warehouse.findMany.useQuery({})
  const {
    data: purchaseOrdersData,
    isLoading: isLoadingPurchaseOrders,
    refetch: refetchPurchaseOrders,
  } = Api.purchaseOrder.findMany.useQuery({
    include: { warehouse: true },
  })

  const { mutateAsync: createPurchaseOrder } =
    Api.purchaseOrder.create.useMutation()

  const handleCreatePurchaseOrder = async (values: any) => {
    try {
      await createPurchaseOrder({
        data: {
          warehouseId: values.warehouseId,
          status: 'Pending',
        },
      })
      enqueueSnackbar('Purchase order created successfully', {
        variant: 'success',
      })
      refetchPurchaseOrders()
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to create purchase order', { variant: 'error' })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Purchase Orders</Title>
      <Text>
        Create and manage your purchase orders for specific warehouses.
      </Text>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreatePurchaseOrder}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <Form.Item
            name="warehouseId"
            label="Select Warehouse"
            rules={[{ required: true, message: 'Please select a warehouse' }]}
          >
            <Select
              placeholder="Select a warehouse"
              loading={isLoadingWarehouses}
              onChange={value => setSelectedWarehouse(value)}
            >
              {warehouses?.map(warehouse => (
                <Option key={warehouse.id} value={warehouse.id}>
                  {warehouse.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
              Create Purchase Order
            </Button>
          </Form.Item>
        </Form>

        <Button type="default" icon={<PrinterOutlined />} onClick={handlePrint}>
          Print Purchase Orders
        </Button>

        {isLoadingPurchaseOrders ? (
          <Spin />
        ) : (
          <Table
            dataSource={purchaseOrdersData}
            rowKey="id"
            columns={[
              {
                title: 'Warehouse',
                dataIndex: ['warehouse', 'name'],
                key: 'warehouse',
              },
              {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
              },
              {
                title: 'Date Created',
                dataIndex: 'dateCreated',
                key: 'dateCreated',
                render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
              },
            ]}
          />
        )}
      </Space>
    </PageLayout>
  )
}
