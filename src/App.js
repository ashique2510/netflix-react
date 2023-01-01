import React from 'react';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import {orginals,action,horror,comedy,romance} from './urls'
import RowPoster from './components/RowPoster/RowPoster';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPoster url = {orginals} title = 'Netflix Orginals' />
      <RowPoster url = {action}  title = 'Action' isSmall/>
      <RowPoster url = {horror}  title = 'Horror' isSmall/>
      <RowPoster url = {comedy}  title = 'Comedy' isSmall/>
      <RowPoster url = {romance}  title = 'Romance' isSmall/>
    </div>
  );
}

export default App;
