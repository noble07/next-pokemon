import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { Layout } from '../../components/layout'

interface PokemonPageProps {
  // pokemon: any
  id: string
  name: string
}

const PokemonPage: NextPage<PokemonPageProps> = ({ id, name }) => {

  const router = useRouter()
  console.log(router.query)

  return (
    <Layout title="Algun pokémon">
      <h1>{id} - {name}</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')
  return {
    paths: [
      {
        params: {
          id: '1'
        }
      },
      {
        params: {
          id: '2'
        }
      },
      {
        params: {
          id: '3'
        }
      },
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {

  // const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')
  return {
    props: {
      id: 1,
      name: 'Bulbasaur'
    }
  }
}

export default PokemonPage