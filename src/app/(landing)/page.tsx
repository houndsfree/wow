'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  BarcodeOutlined,
  TeamOutlined,
  FileSearchOutlined,
  SyncOutlined,
  CalendarOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Automated SKU Management',
      description:
        'Handle diverse SKU formats from various suppliers effortlessly.',
      icon: <BarcodeOutlined />,
    },
    {
      heading: 'Team Collaboration',
      description:
        'Invite team members to collaborate seamlessly within a single organization.',
      icon: <TeamOutlined />,
    },
    {
      heading: 'Customizable Inventory',
      description:
        'Create master templates, assign custom types and labels to items.',
      icon: <EditOutlined />,
    },
    {
      heading: 'Efficient Warehousing',
      description:
        'Manage warehouses, generate and process purchase orders, and scan IMEI numbers to update stock.',
      icon: <FileSearchOutlined />,
    },
    {
      heading: 'Stock Optimization',
      description:
        'Move stock between warehouses, take stock, and optimize inventory and spending.',
      icon: <SyncOutlined />,
    },
    {
      heading: 'Enhanced Customer Service',
      description:
        'Offer time-slotted service registrations and proximity check-ins.',
      icon: <CalendarOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Owner, TechStore',
      content:
        'Imp has revolutionized our inventory management. We save hours every week and our stock levels are always optimized.',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Manager, PhoneFix',
      content:
        'The automation features in Imp have reduced our errors significantly. Our team collaboration has never been better.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Brown',
      designation: 'CEO, MobileHub',
      content:
        'Imp’s customizable inventory management has made our operations smoother and more efficient.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Davis',
      designation: 'Owner, RepairPro',
      content:
        'Our customer service has improved drastically with Imp’s time-slotted service registrations.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Chris Wilson',
      designation: 'Manager, GadgetFix',
      content:
        'Imp’s stock optimization features have helped us reduce costs and improve efficiency.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sophia Lee',
      designation: 'Owner, PhoneCare',
      content:
        'The proximity check-ins have enhanced our customer interactions significantly.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'Testimonials',
      link: '#testimonials',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'For small businesses',
      monthly: 9,
      yearly: 69,
      features: ['Automated SKU Management', 'Team Collaboration'],
    },
    {
      title: 'Pro',
      description: 'For growing businesses',
      monthly: 29,
      yearly: 249,
      features: [
        'All Basic features',
        'Customizable Inventory',
        'Efficient Warehousing',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'For large enterprises',
      monthly: 49,
      yearly: 399,
      features: [
        'All Pro features',
        'Stock Optimization',
        'Enhanced Customer Service',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'What is Imp?',
      answer:
        'Imp is a comprehensive inventory management and point-of-sales system designed specifically for smartphone retailers and repair service businesses.',
    },
    {
      question: 'How does Imp help with inventory management?',
      answer:
        'Imp automates inventory processes, reduces human error, and ensures that stock levels are optimized.',
    },
    {
      question: 'Can I collaborate with my team on Imp?',
      answer:
        'Yes, you can create a single organization within Imp and invite team members to collaborate seamlessly.',
    },
    {
      question: 'What are the pricing plans?',
      answer:
        'Imp offers three pricing plans: Basic, Pro, and Enterprise, catering to different business needs.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create your account and set up your organization.',
    },
    {
      heading: 'Add Inventory',
      description: 'Import your inventory and customize item templates.',
    },
    {
      heading: 'Collaborate',
      description:
        'Invite team members and start managing your inventory together.',
    },
    {
      heading: 'Optimize',
      description:
        'Use Imp’s tools to optimize stock levels and improve efficiency.',
    },
  ]

  const painPoints = [
    {
      emoji: '😖',
      title: 'Manual Inventory Tracking',
    },
    {
      emoji: '📉',
      title: 'Stock Level Errors',
    },
    {
      emoji: '⏳',
      title: 'Time-Consuming Processes',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Revolutionize Your Inventory Management"
        subtitle="Effortlessly manage your smartphone retail and repair business with Imp."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/oMOxbf-imp-64EP"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy customers"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Trusted by Leading Businesses" />
      <LandingPainPoints title="The Struggle is Real" painPoints={painPoints} />
      <LandingHowItWorks title="How Imp Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Seamless Inventory Management"
        subtitle="Discover how Imp can transform your business operations."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="Hear from our satisfied customers."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose Your Plan"
        subtitle="Find the perfect plan to suit your business needs."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We have answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Business?"
        subtitle="Join thousands of satisfied customers using Imp."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
