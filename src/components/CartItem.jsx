import { Button, HStack, Img, Text, VStack, Stack } from '@chakra-ui/react';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const CartItem = ({
  id,
  image,
  title,
  price,
  qty,
  increment,
  decrement,
  deleteHandler,
}) => {
  return (
    <Stack
      width={'full'}
      minH={'200px'}
      direction={['column', 'column', 'row']}
      justifyContent={'space-between'}
      border={'1px solid #e0e0e0'}
      margin={'20px'}
      boxShadow={'lg'}
      borderRadius={'10px'}
      padding={'20px'}
      grid={'1fr 2fr 1fr 1fr'}
    >
      <Stack
        width={['100%', '100%', '70%']}
        direction={['column', 'row']}
        alignItems="center"
      >
        <Img src={image} alt={'product-image'} width={'100px'} />
        <VStack alignItems={[ 'center' , 'start']}>
          <Text fontSize={'15px'} fontWeight={'bold'}>
            {title}
          </Text>
          <Text fontSize={'15px'} fontWeight={'bold'}>
            ${price}
          </Text>
        </VStack>
      </Stack>
      <Stack direction={ 'row'} width={['100%','100%', '30%']} alignItems={'center'} justifyContent={'space-between'}>
        <HStack>
          <Button onClick={() => decrement(id)}>-</Button>
          <Text>{qty}</Text>
          <Button onClick={() => increment(id)}>+</Button>
        </HStack>
        <AiFillDelete
          cursor={'pointer'}
          color={'red'}
          size={'25px'}
          onClick={() => deleteHandler(id)}
        />
      </Stack>
    </Stack>
  );
};

export default CartItem;
