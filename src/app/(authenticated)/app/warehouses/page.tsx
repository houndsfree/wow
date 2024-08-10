'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  List,
  Spin,
} from 'antd'
import { PlusOutlined, SwapOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function WarehousesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>(
    null,
  )
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const {
    data: warehouses,
    isLoading: isLoadingWarehouses,
    refetch: refetchWarehouses,
  } = Api.warehouse.findMany.useQuery({})
  const {
    data: stockItems,
    isLoading: isLoadingStockItems,
    refetch: refetchStockItems,
  } = Api.stockItem.findMany.useQuery({ include: { warehouse: true } })

  const { mutateAsync: createWarehouse } = Api.warehouse.create.useMutation()
  const { mutateAsync: updateStockItem } = Api.stockItem.update.useMutation()

  const handleCreateWarehouse = async (values: {
    name: string
    location: string
  }) => {
    try {
      await createWarehouse({ data: values })
      enqueueSnackbar('Warehouse created successfully', { variant: 'success' })
      refetchWarehouses()
    } catch (error) {
      enqueueSnackbar('Failed to create warehouse', { variant: 'error' })
    }
  }

  const handleMoveItem = async () => {
    if (!selectedWarehouse || !selectedItem) {
      enqueueSnackbar('Please select both item and warehouse', {
        variant: 'error',
      })
      return
    }

    try {
      await updateStockItem({
        where: { id: selectedItem },
        data: { warehouseId: selectedWarehouse },
      })
      enqueueSnackbar('Item moved successfully', { variant: 'success' })
      refetchStockItems()
    } catch (error) {
      enqueueSnackbar('Failed to move item', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title>Manage Warehouses</Title>
          <Paragraph>
            Create and manage your warehouses and inventory distribution.
          </Paragraph>

          <Form layout="vertical" onFinish={handleCreateWarehouse}>
            <Form.Item
              label="Warehouse Name"
              name="name"
              rules={[
                { required: true, message: 'Please input the warehouse name!' },
              ]}
            >
              <Input placeholder="Warehouse Name" />
            </Form.Item>
            <Form.Item
              label="Location"
              name="location"
              rules={[
                {
                  required: true,
                  message: 'Please input the warehouse location!',
                },
              ]}
            >
              <Input placeholder="Location" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                Create Warehouse
              </Button>
            </Form.Item>
          </Form>

          <Title level={2}>Move Items</Title>
          <Form layout="vertical">
            <Form.Item label="Select Item">
              <Select
                placeholder="Select an item"
                onChange={value => setSelectedItem(value)}
              >
                {stockItems?.map(item => (
                  <Option key={item.id} value={item.id}>
                    {item.imei} - {item.quantity?.toString()}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Select Warehouse">
              <Select
                placeholder="Select a warehouse"
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
              <Button
                type="primary"
                onClick={handleMoveItem}
                icon={<SwapOutlined />}
              >
                Move Item
              </Button>
            </Form.Item>
          </Form>

          <Title level={2}>Warehouses List</Title>
          {isLoadingWarehouses ? (
            <Spin />
          ) : (
            <List
              bordered
              dataSource={warehouses}
              renderItem={warehouse => (
                <List.Item key={warehouse.id}>
                  <List.Item.Meta
                    title={warehouse.name}
                    description={warehouse.location}
                  />
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
