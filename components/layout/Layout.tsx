import Head from 'next/head'
import { Navbar } from '../ui'

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

export const Layout = ({ title = 'PokemonApp', children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Juan Camilo M." />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokémon, pokédex`} />
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