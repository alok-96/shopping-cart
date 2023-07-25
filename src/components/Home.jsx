import { HStack, Container, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Error from './Error';
import ProductCard from './ProductCard';

const Home = () => {
  const [storeData, SetStoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json();
        SetStoreData(data);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    };

    fetchStoreData();
  });

    const Handler = options => {
    };


  if (error) return <Error />;
  return (
    <Container maxW={'container.xl'} bgColor={''}>
      {loading ? (
        <div
          style={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner size={'xl'} color={'#a4a6a6'} alignContent={'center'} />
        </div>
      ) : (
        <>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {storeData.map(i => (
              <ProductCard
                key={i.id}
                title={i.title}
                description={i.description}
                image={i.image}
                price={i.price}
                handler={Handler}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Home;
