import React from 'react';

import ImageContainer from './ImageContainer/index.js';
import Navbar from './Navbar/index.js';

const App = props => {
  return (
    <div id="main-container">
      <Navbar />
      Hi, I'm App!
      <ImageContainer />
    </div>
  );
};

export default App;
