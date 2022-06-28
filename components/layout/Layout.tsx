import Head from 'next/head'
import { Navbar } from '../ui'

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout = ({ title = 'PokemonApp', children }: LayoutProps) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Juan Camilo M." />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokémon, pokédex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0px 20px'
        }}
      >
        {children}
      </main>
    </>
  )
}