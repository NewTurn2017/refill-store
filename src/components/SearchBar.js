import { useForm } from 'react-hook-form'
import { TextField, Button, Grid } from '@mui/material'
import styled from 'styled-components'

const SearchBarContainer = styled(Grid)`
  height: 100vh;
`

export default function SearchBar({ onSearch }) {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    onSearch(data.searchTerm)
  }

  return (
    <SearchBarContainer
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={9}>
            <TextField
              variant="outlined"
              placeholder="Enter your zipcode or city..."
              {...register('searchTerm', { required: true })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </SearchBarContainer>
  )
}
