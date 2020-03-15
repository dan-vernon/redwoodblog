import { Container } from '@material-ui/core'

import { NavBar } from 'src/components/NavBar'

const MasterLayout = ({ children }) => {
  return (
    <Container maxWidth="md">
      <NavBar />
      <main>{children}</main>
    </Container>
  )
}

export default MasterLayout
