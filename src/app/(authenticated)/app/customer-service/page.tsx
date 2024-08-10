'use client'

import { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  Row,
  Col,
  Space,
  Spin,
} from 'antd'
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CustomerServicePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCheckingIn, setIsCheckingIn] = useState(false)

  const { mutateAsync: createAppointment } =
    Api.appointment.create.useMutation()
  const { mutateAsync: checkIn } = Api.checkIn.create.useMutation()

  const onFinish = async (values: any) => {
    setIsSubmitting(true)
    try {
      const appointmentData = {
        userId: user.id,
        date: values.date.format('YYYY-MM-DD'),
        time: values.time.format('HH:mm'),
      }
      await createAppointment({ data: appointmentData })
      enqueueSnackbar('Appointment created successfully', {
        variant: 'success',
      })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to create appointment', { variant: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCheckIn = async () => {
    setIsCheckingIn(true)
    try {
      await checkIn({
        data: { userId: user.id, timestamp: new Date().toISOString() },
      })
      enqueueSnackbar('Checked in successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to check in', { variant: 'error' })
    } finally {
      setIsCheckingIn(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2}>Customer Service Registration</Title>
            <Paragraph>
              As a customer of the organization, you can register for a
              time-slotted customer service so that you can receive assistance
              at a convenient time.
            </Paragraph>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="date"
                label="Select Date"
                rules={[{ required: true, message: 'Please select a date' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                name="time"
                label="Select Time"
                rules={[{ required: true, message: 'Please select a time' }]}
              >
                <TimePicker style={{ width: '100%' }} format="HH:mm" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isSubmitting}
                  icon={<ClockCircleOutlined />}
                >
                  Register for Service
                </Button>
              </Form.Item>
            </Form>
            <Title level={2}>Proximity Check-In</Title>
            <Paragraph>
              As a customer of the organization, you can perform a proximity
              check-in so that you can notify the organization of your arrival.
            </Paragraph>
            <Button
              type="primary"
              onClick={handleCheckIn}
              loading={isCheckingIn}
              icon={<CheckCircleOutlined />}
            >
              Check In
            </Button>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
