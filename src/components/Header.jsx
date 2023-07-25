import React from "react";
import { HStack, Img } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {AiOutlineShopping} from 'react-icons/ai'

const Header = () => {
  return (
    <HStack
      justifyContent={'space-between'}
      bgColor={'#e0e0e0'}
      h={['8vh', '9vh', '9vh']}
      paddingInline={'15px'}
    >
      <Img src={logo} alt={'logo'} w={'50px'} />
      <HStack gap={['15px', '15px', '20px']} alignItems={'center'}>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          Home
        </Link>
        <Link to={'/cart'} style={{ textDecoration: 'none' }}>
          <AiOutlineShopping color="black" size={'30px'} />
        </Link>
      </HStack>
    </HStack>
  );
};

export default Header;
