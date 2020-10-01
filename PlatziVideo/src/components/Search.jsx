import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getSearchRequest } from '../actions';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, search, getSearchRequest }) => {
  const hasSearch = Object.keys(search).length > 0;
  const inputStyle = classNames('input', {
    isHome,
  });
  const handleSearch = (event) => {
    getSearchRequest(event.target.value);
  };

  return (
    <>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>

        <input
          name='search'
          type='text'
          className={inputStyle}
          placeholder='Buscar...'
          onChange={handleSearch}
        />
      </section>
      {hasSearch ? (
        <Categories title='Resultados' isSearch>
          <Carousel>
            {search.map((item) => (
              <CarouselItem
                key={item.id}
                id={item.id}
                cover={item.cover}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
              />
            ))}
          </Carousel>
        </Categories>
      ) : null}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
const mapDispatchToProp = {
  getSearchRequest,
};

export default connect(mapStateToProps, mapDispatchToProp)(Search);
