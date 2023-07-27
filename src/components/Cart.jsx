import { Text, Heading, Stack, VStack, Container } from '@chakra-ui/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, subtotal, shipping, total } = useSelector(
    state => state.cart
  );
  const dispatch = useDispatch();

  const increment = id => {
    dispatch({
      type: 'addToCart',
      payload: { id },
    });
    dispatch({ type: 'priceCalculation' });
  };
  const decrement = id => {
    dispatch({
      type: 'decrement',
      payload: id,
    });
    dispatch({ type: 'priceCalculation' });
  };
  const deleteHandler = id => {
    dispatch({
      type: 'deleteFromCart',
      payload: id,
    });
    dispatch({ type: 'priceCalculation' });
  };

  return (
    <Container maxW={'container.xl'} minH={'78vh'}>
      <Stack direction={['column', 'column', 'column', 'row']}>
        <VStack w={['100%', '100%', '100%', '75%']}>
          {cartItems.length > 0 ? (
            cartItems.map(i => (
              <CartItem
                key={i.id}
                id={i.id}
                image={i.image}
                title={i.title}
                price={i.price}
                qty={i.qty}
                increment={increment}
                decrement={decrement}
                deleteHandler={deleteHandler}
              />
            ))
          ) : (
            <Heading> Oops ! Your Shoppping Cart is Empty .</Heading>
          )}
        </VStack>
        <VStack alignItems={['center', 'center', 'start']} margin={'20px'}>
          <Text fontSize={'20px'} fontWeight={'bold'}>
            Subtotal : $ {subtotal}
          </Text>
          <Text fontSize={'20px'} fontWeight={'bold'}>
            Shipping : $ {shipping}
          </Text>
          <Text fontSize={'20px'} fontWeight={'bold'}>
            Total : $ {total}
          </Text>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Cart;
