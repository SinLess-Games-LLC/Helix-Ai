'use client'
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'

export type NavPageType = {
  title: string
  url: string
}

export interface AppBarProps {
  pages: NavPageType[]
  logo: string
}

export const ResponsiveAppBar: React.FC<AppBarProps> = ({ pages, logo }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'rgba(246, 6, 151, 0.5)',
            borderRadius: '0 0 50px 50px',
            boxShadow: '0 0 2px 2px rgba(1, 27, 146, 0.6)',
          }}
        >
          <Container>
            <Toolbar disableGutters>
              {/** Left section */}
              <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                {/** Logo */}
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  <Image src={logo} alt="Helix Ai" width={50} height={40} />
                </Typography>
                {/** Title */}
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'RGB(255, 255, 255)',
                    textDecoration: 'none',
                  }}
                >
                  Helix Ai
                </Typography>
              </Box>

              {/** Center-aligned section (empty) */}
              <Box sx={{ flexGrow: 1 }} />

              {/** Right section */}
              <Box sx={{ display: 'flex', alignItems: 'right' }}>
                {/** Pages */}
                <Box
                  sx={{
                    display: isCollapsed ? 'none' : { xs: 'none', md: 'flex' },
                  }}
                >
                  {pages.map(page => (
                    <Button
                      key={page.title}
                      href={page.url}
                      sx={{ mx: 1, color: 'RGB(255,255,255)' }}
                    >
                      {page.title}
                    </Button>
                  ))}
                </Box>
                {/** Menu icon (for mobile) */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map(page => (
                      <a href={page.url} key={page.title} style={{ textDecoration: 'none' }}>
                        <MenuItem key={page.title}>
                          <Typography textAlign="center">{page.title}</Typography>
                        </MenuItem>
                      </a>
                    ))}
                  </Menu>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </Grid>
  )
}
