import { Heading, VStack, Text, Img, Button } from '@chakra-ui/react';
import React from 'react';

const ProductCard = ({ id, image, price, title, handler }) => {
  return (
    <VStack
      w={'300px'}
      h={'400px'}
      border={'1px solid #e0e0e0'}
      borderRadius={'10px'}
      margin={'20px'}
      paddingBlock={'15px'}
      alignItems={'center'}
      justifyContent={'space-between'}
      boxShadow={'lg'}
      transition={'all 0.5s'}
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Img src={image} alt={'product-image'} h={'150px'} />
      <Heading>${price}</Heading>
      <Text
        fontSize={'15px'}
        fontWeight={'bold'}
        textAlign={'center'}
        paddingInline={'4'}
      >
        {title}
      </Text>
      <Button
        colorScheme={'orange'}
        onClick={() => handler({ id, title, price, image, qty: 1 })}
      >
        Add to Cart
      </Button>
    </VStack>
  );
};

export default ProductCard;
