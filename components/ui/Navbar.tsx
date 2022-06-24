import Image from 'next/image'
import NextLink from 'next/link'
import { Link, Text, useTheme } from '@nextui-org/react'

const Navbar = () => {

  const { theme } = useTheme()

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 15px',
        backgroundColor: theme?.colors.gray50.value
      }}
    >
      <NextLink href="/" passHref>
        <Link css={{ alignItems: 'center' }}>
          <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icono de la app"
            width={70}
            height={70}
          />
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okémon</Text>
        </Link>
      </NextLink>

      <NextLink href="/favorites">
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}

export default Navbar