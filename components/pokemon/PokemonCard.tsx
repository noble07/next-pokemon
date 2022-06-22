import { useRouter } from 'next/router'
import { Card, Grid, Row, Text } from '@nextui-org/react'

import { SmallPokemon } from '../../interfaces'

interface PokemonCardProps {
  pokemon: SmallPokemon
}

const PokemonCard = ({pokemon}: PokemonCardProps) => {

  const router = useRouter()

  const handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
      <Card
        hoverable
        clickable
        onClick={handleClick}
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.img}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default PokemonCard