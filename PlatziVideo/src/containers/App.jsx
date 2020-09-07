import React from 'react';
import Header from '../components/Header';
import '../assets/styles/components/App.scss';
import Search from '../components/Search';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Search />
    </div>
  );
};

export default App;
