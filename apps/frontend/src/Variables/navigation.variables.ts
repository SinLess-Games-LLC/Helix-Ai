import { AppBarProps, NavPageType } from '../components/AppBar'

const aboutPage: NavPageType = {
  title: 'About',
  url: '/about',
}

const contactPage: NavPageType = {
  title: 'Contact',
  url: '/contact',
}

const technologiesPage: NavPageType = {
  title: 'Technologies',
  url: '/technologies',
}

export const navigationData: AppBarProps = {
  pages: [aboutPage, technologiesPage, contactPage],
  logo: '/images/helix/Favicon-01.png',
}
