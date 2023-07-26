import Menu from '../../components/Menu'
import styled from 'styled-components'
import { PageContainer } from '@/components/styles/CommonStyles'

export default function Blog() {
  return (
    <PageContainer>
      <Menu />
      <h1>Blog</h1>
      <p>This is the blog page.</p>
    </PageContainer>
  )
}
