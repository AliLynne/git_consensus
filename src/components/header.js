// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/logo.png'

import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const Header = ({ siteTitle, description }) => (
  <AppBar position="static">
    <Toolbar>
      <Avatar src={logo} alt="logo" />
      <Typography align="center" variant="h6">{siteTitle}</Typography>
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
