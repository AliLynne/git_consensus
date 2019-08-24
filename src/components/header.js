import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const Header = ({ siteTitle, description }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography align="center" variant="h6">{siteTitle}</Typography>
      <Typography align="right" variant="body1">{description}</Typography>
    </Toolbar>
  </AppBar>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  description: ``
}

export default Header
