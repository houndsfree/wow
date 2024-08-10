'use client'

import { Typography, Row, Col, Card, Spin } from 'antd'
import { NotificationOutlined, LineChartOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function MainDashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: userData, isLoading } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: {
      organizationsAsOwner: {
        include: {
          organizationMembers: true,
          masterTemplates: true,
          warehouses: true,
          purchaseOrders: true,
          workOrders: true,
        },
      },
      organizationMembers: {
        include: { organization: true },
      },
      workOrdersAsAssignedTo: {
        include: { organization: true },
      },
    },
  })

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Main Dashboard</Title>
      <Paragraph>
        Welcome to your dashboard. Here you can get an overview of your work
        orders and organizational performance.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Work Order Notifications"
            bordered={false}
            hoverable
            onClick={() => router.push('/app/work-orders')}
            style={{ textAlign: 'center' }}
          >
            <NotificationOutlined style={{ fontSize: '2rem' }} />
            <Paragraph>
              You have {userData?.workOrdersAsAssignedTo?.length.toString()}{' '}
              work orders assigned to you.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Organizational Performance"
            bordered={false}
            hoverable
            onClick={() => router.push('/app')}
            style={{ textAlign: 'center' }}
          >
            <LineChartOutlined style={{ fontSize: '2rem' }} />
            <Paragraph>Review the performance of your organization.</Paragraph>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
