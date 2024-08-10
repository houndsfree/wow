'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Form, Select, Button, Spin, Row, Col } from 'antd'
import { UserOutlined, FileAddOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function WorkOrdersPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()
  const [organizationMembers, setOrganizationMembers] = useState<
    Prisma.OrganizationMemberGetPayload<{ include: { user: true } }>[]
  >([])
  const [workOrders, setWorkOrders] = useState<
    Prisma.WorkOrderGetPayload<{ include: { assignedTo: true } }>[]
  >([])
  const [isLoading, setIsLoading] = useState(true)

  const { data: membersData, refetch: refetchMembers } =
    Api.organizationMember.findMany.useQuery({
      where: { organizationId: params.organizationId },
      include: { user: true },
    })

  const { data: workOrdersData, refetch: refetchWorkOrders } =
    Api.workOrder.findMany.useQuery({
      where: { organizationId: params.organizationId },
      include: { assignedTo: true },
    })

  const { mutateAsync: updateWorkOrder } = Api.workOrder.update.useMutation()

  useEffect(() => {
    if (membersData) {
      setOrganizationMembers(membersData)
    }
    if (workOrdersData) {
      setWorkOrders(workOrdersData)
    }
    setIsLoading(false)
  }, [membersData, workOrdersData])

  const handleAssignWorkOrder = async (values: {
    workOrderId: string
    assignedToId: string
  }) => {
    try {
      await updateWorkOrder({
        where: { id: values.workOrderId },
        data: { assignedToId: values.assignedToId },
      })
      enqueueSnackbar('Work order assigned successfully', {
        variant: 'success',
      })
      refetchWorkOrders()
    } catch (error) {
      enqueueSnackbar('Failed to assign work order', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Assign Work Orders</Title>
          <Text>
            As an organization member, you can assign work orders to other
            members to efficiently distribute work and reduce downtime.
          </Text>
          <Form
            form={form}
            onFinish={handleAssignWorkOrder}
            layout="vertical"
            style={{ marginTop: '20px' }}
          >
            <Form.Item
              name="workOrderId"
              label="Work Order"
              rules={[
                { required: true, message: 'Please select a work order' },
              ]}
            >
              <Select placeholder="Select a work order">
                {workOrders?.map(workOrder => (
                  <Option key={workOrder.id} value={workOrder.id}>
                    {workOrder.description}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="assignedToId"
              label="Assign To"
              rules={[{ required: true, message: 'Please select a member' }]}
            >
              <Select placeholder="Select a member">
                {organizationMembers?.map(member => (
                  <Option key={member.id} value={member.userId}>
                    {member.user?.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<FileAddOutlined />}
              >
                Assign Work Order
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
