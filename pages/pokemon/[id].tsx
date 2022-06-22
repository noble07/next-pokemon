import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import type { Pokemon } from '../../interfaces'

import { pokeApi } from '../../api'

import { Layout } from '../../components/layout'

interface PokemonPageProps {
  pokemon: Pokemon
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  return (
    <Layout title="Algun pokémon">
      <h1>{ pokemon.name }</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons151 = [...Array(151)].map((_, i) => `${i+1}`)

  return {
    paths: pokemons151.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string }

  const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage