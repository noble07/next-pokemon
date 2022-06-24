import { Container, Image, Text } from '@nextui-org/react'

const NoFavorites = () => {
  return (
    <Container
      display="flex"
      direction="column"
      justify="center"
      alignItems="center"
      css={{
        height: 'calc(100vh - 100px)',
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
        alt="No hay favoritos"
        width={250}
        height={250}
      />
    </Container>
  )
}

export default NoFavorites