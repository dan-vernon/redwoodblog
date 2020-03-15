import { AppBar, Button } from '@material-ui/core'
import { Link, routes } from '@redwoodjs/router'

export const NavBar = () => {
  return (
    <AppBar color="transparent" position="static">
      <Button color="inherit">
        <Link to={routes.home()}>Example blog</Link>
      </Button>
      <Button color="inherit">
        <Link to={routes.about()}>About</Link>
      </Button>
    </AppBar>
  )
}
