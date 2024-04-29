import Background from '../components/background'
import './global.css'
import { StyledComponentsRegistry } from './registry'
import { ResponsiveAppBar } from '../components/AppBar'
import { navigationData } from '../Variables/navigation.variables'

export const metadata = {
  title: 'Helix Ai',
  description:
    'Helix Ai is a powerful SaaS platform designed for businesses and content creators, offering a unified solution for interconnectivity and analytics. With Helix Ai, you can streamline your workflow, enhance productivity, and gain valuable insights to drive your success. Sign up now to experience the future of connectivity.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Background $image="/images/helix/Background.png" />
        <ResponsiveAppBar pages={navigationData.pages} logo={navigationData.logo} />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
