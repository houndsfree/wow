import { useUserContext } from '@/core/context'
import { UserOutlined } from '@ant-design/icons'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { useDesignSystem } from '../../provider'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const { user, authenticationStatus: isLoggedIn } = useUserContext()

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  let itemsLeftbar = [
    {
      key: '/home',
      label: 'Home',
      onClick: () => goTo('/home'),
    },

    {
      key: '/app/master-templates',
      label: 'Master Templates',
      onClick: () => goTo('/app/master-templates'),
    },

    {
      key: '/app/warehouses',
      label: 'Warehouses',
      onClick: () => goTo('/app/warehouses'),
    },

    {
      key: '/app/purchase-orders',
      label: 'Purchase Orders',
      onClick: () => goTo('/app/purchase-orders'),
    },

    {
      key: '/app/stock-management',
      label: 'Stock Management',
      onClick: () => goTo('/app/stock-management'),
    },

    {
      key: '/app/customer-service',
      label: 'Customer Service',
      onClick: () => goTo('/app/customer-service'),
    },

    {
      key: '/app',
      label: 'Main Dashboard',
      onClick: () => goTo('/app'),
    },

    {
      key: '/app/work-orders',
      label: 'Work Orders',
      onClick: () => goTo('/app/work-orders'),
    },

    {
      key: '/app/chat',
      label: 'Chat',
      onClick: () => goTo('/app/chat'),
    },
  ]

  let itemsTopbar = []

  let itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  let itemsLeftBarBottom = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
  ]

  let itemsProfile = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsBottom={itemsLeftBarBottom}
                logo={<Logo height={40} />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              itemsMobile={itemsMobile}
              isLoggedIn={isLoggedIn === 'authenticated'}
              items={itemsTopbar}
              itemsProfile={itemsProfile}
              logo={!isLeftbar && <Logo height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
