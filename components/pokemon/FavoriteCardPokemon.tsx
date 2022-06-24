import { useRouter } from 'next/router'
import { Card, Grid } from '@nextui-org/react'

interface FavoriteCardPokemonProps {
  pokemonId: number
}

const FavoriteCardPokemon = ({pokemonId}: FavoriteCardPokemonProps) => {

  const router = useRouter()

  const onFavoriteClick = () => {
    router.push(`/pokemon/${pokemonId}`)
  }

  return (
    <Grid
      xs={6}
      sm={3}
      md={2}
      xl={1}
    >
      <Card
        hoverable
        clickable
        css={{ padding: 10 }}
        onClick={onFavoriteClick}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  )
}

export default FavoriteCardPokemon