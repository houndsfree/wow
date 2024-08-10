'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Row,
  Col,
  Button,
  Table,
  Input,
  InputNumber,
  Space,
  Spin,
} from 'antd'
import {
  ScanOutlined,
  FileExcelOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function StockManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [stockItems, setStockItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [imei, setImei] = useState('')

  const { data: stockData, refetch } = Api.stockItem.findMany.useQuery({
    include: { warehouse: true, masterTemplate: true },
  })

  const { mutateAsync: updateStockItem } = Api.stockItem.update.useMutation()
  const { mutateAsync: createStockItem } = Api.stockItem.create.useMutation()

  useEffect(() => {
    if (stockData) {
      setStockItems(stockData)
      setIsLoading(false)
    }
  }, [stockData])

  const handleScanImei = async () => {
    try {
      const newItem = await createStockItem({ data: { imei, quantity: 1 } })
      setStockItems([...stockItems, newItem])
      enqueueSnackbar('IMEI scanned and item added to stock', {
        variant: 'success',
      })
      setImei('')
    } catch (error) {
      enqueueSnackbar('Error scanning IMEI', { variant: 'error' })
    }
  }

  const handleStockTaking = async (id, quantity) => {
    try {
      await updateStockItem({ where: { id }, data: { quantity } })
      refetch()
      enqueueSnackbar('Stock updated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Error updating stock', { variant: 'error' })
    }
  }

  const columns = [
    { title: 'IMEI', dataIndex: 'imei', key: 'imei' },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text, record) => (
        <InputNumber
          min={0}
          defaultValue={record.quantity}
          onBlur={e => handleStockTaking(record.id, e.target.value)}
        />
      ),
    },
    { title: 'Warehouse', dataIndex: ['warehouse', 'name'], key: 'warehouse' },
    {
      title: 'Template',
      dataIndex: ['masterTemplate', 'name'],
      key: 'template',
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col>
          <Title level={2}>Stock Management</Title>
          <Paragraph>
            Manage your stock efficiently by scanning IMEI, performing
            stock-taking, and optimizing inventory.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
          <Space direction="vertical">
            <Input
              placeholder="Scan IMEI"
              prefix={<ScanOutlined />}
              value={imei}
              onChange={e => setImei(e.target.value)}
              onPressEnter={handleScanImei}
            />
            <Button
              type="primary"
              icon={<CheckCircleOutlined />}
              onClick={handleScanImei}
            >
              Add IMEI to Stock
            </Button>
          </Space>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            <Table dataSource={stockItems} columns={columns} rowKey="id" />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
