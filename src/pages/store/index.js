import Menu from '../../components/Menu'
import { PageContainer } from '../../components/styles/CommonStyles'
import SearchBar from '../../components/SearchBar'

export default function Store() {
  const handleSearch = (searchTerm) => {
    // TODO: 검색어 처리
    console.log(searchTerm)
  }

  return (
    <PageContainer>
      <Menu />
      <SearchBar onSearch={handleSearch} />
    </PageContainer>
  )
}
