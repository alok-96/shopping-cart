import React from 'react';
import { HStack, Img, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Header = () => {

  const {cartItems} = useSelector(state => state.cart);

  return (
    <HStack
      justifyContent={'space-between'}
      bgColor={'#cccccc'}
      h={['8vh', '9vh', '9vh']}
      paddingInline={'15px'}
    >
      <Img src={logo} alt={'logo'} w={'50px'} />
      <HStack gap={['15px', '15px', '20px']} alignItems={'center'}>
        <Link to={'/'} style={{ textDecoration: 'none' }} >
          Home
        </Link>
        <Link to={'/cart'} style={{ textDecoration: 'none' }}>
          <AiOutlineShopping color="black" size={'35px'} />
          <Text
            w={'20px'}
            bgColor={'white'}
            textAlign={'center'}
            borderRadius={'5px'}
            position={'absolute'}
            right={'10px'}
            top={'35px'}
          >
            {cartItems.length}
          </Text>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Header;
