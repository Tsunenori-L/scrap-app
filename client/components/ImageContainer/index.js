import React from 'react';

import NewImage from './Image';

const ImageContainer = props => {
  return (
    <div>
      Images:
      <NewImage />
      <button id="add-new-image">Scrap pile!</button>
    </div>
  );
};

export default ImageContainer;
