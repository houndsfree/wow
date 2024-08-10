'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Form, Input, Button, Row, Col, List, Modal } from 'antd'
import { PlusOutlined, UserAddOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function OrganizationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: organizations,
    isLoading: isLoadingOrganizations,
    refetch: refetchOrganizations,
  } = Api.organization.findMany.useQuery({
    where: { ownerId: user?.id },
    include: { organizationMembers: true },
  })

  const { mutateAsync: createOrganization } =
    Api.organization.create.useMutation()
  const { mutateAsync: inviteMember } =
    Api.organizationMember.create.useMutation()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOrganization, setSelectedOrganization] =
    useState<Prisma.OrganizationGetPayload<{
      include: { organizationMembers: true }
    }> | null>(null)

  const handleCreateOrganization = async (values: { name: string }) => {
    try {
      await createOrganization({ data: { ...values, ownerId: user?.id } })
      enqueueSnackbar('Organization created successfully', {
        variant: 'success',
      })
      refetchOrganizations()
    } catch (error) {
      enqueueSnackbar('Failed to create organization', { variant: 'error' })
    }
  }

  const handleInviteMember = async (values: { email: string }) => {
    if (!selectedOrganization) return

    try {
      await inviteMember({
        data: {
          email: values.email,
          organizationId: selectedOrganization.id,
        },
      })
      enqueueSnackbar('Member invited successfully', { variant: 'success' })
      refetchOrganizations()
      setIsModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to invite member', { variant: 'error' })
    }
  }

  const showInviteModal = (
    organization: Prisma.OrganizationGetPayload<{
      include: { organizationMembers: true }
    }>,
  ) => {
    setSelectedOrganization(organization)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setSelectedOrganization(null)
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
          <Title level={2}>Manage Your Organizations</Title>
          <Text>
            Create and manage your organizations to collaborate on inventory
            management.
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12}>
          <Form layout="vertical" onFinish={handleCreateOrganization}>
            <Form.Item
              name="name"
              label="Organization Name"
              rules={[
                {
                  required: true,
                  message: 'Please input the organization name!',
                },
              ]}
            >
              <Input placeholder="Enter organization name" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                Create Organization
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={12}>
          <List
            header={<div>Your Organizations</div>}
            bordered
            dataSource={organizations}
            renderItem={organization => (
              <List.Item
                actions={[
                  <Button
                    type="link"
                    icon={<UserAddOutlined />}
                    onClick={() => showInviteModal(organization)}
                  >
                    Invite Member
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={organization.name}
                  description={`Members: ${organization.organizationMembers?.length || 0}`}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Modal
        title="Invite Member"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleInviteMember}>
          <Form.Item
            name="email"
            label="Member Email"
            rules={[
              { required: true, message: 'Please input the member email!' },
            ]}
          >
            <Input placeholder="Enter member email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Invite
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
