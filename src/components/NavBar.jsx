import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Container, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <div className='navBar'>
      <Container maxW='90%'>
        <Flex alignItems='center'>


          <Link to='/'>
            <Flex alignItems='center'>
              Tony's Player one
                <g>
                  <g>
                    <polygon points="392.326,200.43 325.083,200.43 423.691,0 280.813,0 133.933,298.54 210.513,298.54 115.151,538.842   " />
                  </g>
                </g>
                          </Flex>

          </Link>


          <Spacer />

          <Menu>
            <MenuButton >
              <Text fontSize='xl'>Categorias</Text>
            </MenuButton>
            <MenuList color={'black'}>
              <MenuItem>
                <Link to='/category/Playstation'>
                  <Text fontSize='md'>Playstation</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/category/Nintendo'>
                  <Text fontSize='md'>Nintendo</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/category/Juegos'>
                  <Text fontSize='md'>Juegos</Text>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>

          <Spacer />

          <Box p='4' >
            <CartWidget />
          </Box>
        </Flex>
      </Container>
    </div>
  )
}

export default NavBar