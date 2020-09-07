import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/components/App.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Search />

      <Categories>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;