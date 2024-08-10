'use client'

import { useState, useEffect } from 'react'
import { Typography, Input, Button, List, Avatar, Row, Col, Spin } from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ChatPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<any[]>([])

  const {
    data: chatMessages,
    isLoading,
    refetch,
  } = Api.chatMessage.findMany.useQuery({
    where: { organizationId: params.organizationId },
    include: { user: true },
  })

  const { mutateAsync: sendMessage } = Api.chatMessage.create.useMutation()

  useEffect(() => {
    if (chatMessages) {
      setMessages(chatMessages)
    }
  }, [chatMessages])

  const handleSendMessage = async () => {
    if (message.trim() === '') {
      enqueueSnackbar('Message cannot be empty', { variant: 'error' })
      return
    }

    try {
      await sendMessage({
        data: {
          content: message,
          userId: user.id,
          organizationId: params.organizationId,
        },
      })
      setMessage('')
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to send message', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ textAlign: 'center' }}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Warehouse Chat</Title>
          <Text>Coordinate with other members instantaneously</Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={20} md={16} lg={12}>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={messages}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.user.pictureUrl} />}
                    title={item.user.name}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Input
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type your message..."
            onPressEnter={handleSendMessage}
            suffix={
              <Button
                type="primary"
                icon={<SendOutlined />}
                onClick={handleSendMessage}
              />
            }
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
