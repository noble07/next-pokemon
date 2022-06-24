import { Grid } from '@nextui-org/react'
import { FavoriteCardPokemon } from './'

interface FavoritePokemonsProps {
  pokemons: number[]
}

const FavoritePokemons = ({ pokemons }: FavoritePokemonsProps) => {
  return (
    <Grid.Container
      gap={2}
      direction="row"
      justify="flex-start"
    >
      {
        pokemons.map(id => (
          <FavoriteCardPokemon key={id} pokemonId={id} />
        ))
      }
    </Grid.Container>
  )
}

export default FavoritePokemons