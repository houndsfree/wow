'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function MasterTemplatesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [labels, setLabels] = useState<string[]>([])

  const { mutateAsync: createMasterTemplate } =
    Api.masterTemplate.create.useMutation()

  const handleAddLabel = (label: string) => {
    setLabels([...labels, label])
  }

  const handleSubmit = async (values: any) => {
    const canCreate = user?.attributes?.some(attr => attr.key === 'canCreateMasterTemplate')
    if (!canCreate) {
      enqueueSnackbar('You are not authorized to create a master template', {
        variant: 'error',
      })
      return
    }

    setLoading(true)
    try {
      await createMasterTemplate({
        data: {
          name: values.name,
          description: values.description,
          organizationId: user?.organizationMembers?.[0]?.organizationId,
          templateLabels: {
            create: labels.map(label => ({ label })),
          },
        },
      })
      enqueueSnackbar('Master template created successfully', {
        variant: 'success',
      })
      router.push('/app/master-templates')
    } catch (error) {
      enqueueSnackbar('Failed to create master template', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Title level={2}>Create New Master Template</Title>
        <Text>
          Create a new master template to standardize item information
        </Text>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <Form.Item
          name="name"
          label="Template Name"
          rules={[
            { required: true, message: 'Please enter the template name' },
          ]}
        >
          <Input placeholder="Enter template name" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter the description' }]}
        >
          <Input.TextArea placeholder="Enter description" />
        </Form.Item>
        <Form.Item name="labels" label="Labels">
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Add labels"
            onChange={setLabels}
            tokenSeparators={[',']}
          >
            {labels.map(label => (
              <Option key={label}>{label}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            icon={<PlusOutlined />}
          >
            Create Template
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
