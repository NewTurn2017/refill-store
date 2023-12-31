import Menu from '../components/Menu'
import styled from 'styled-components'
import { PageContainer } from '@/components/styles/CommonStyles'

export default function Home() {
  return (
    <PageContainer>
      <Menu />
      <h1>Welcome to My Refill Store</h1>
      <p>This is the home page.</p>
    </PageContainer>
  )
}
