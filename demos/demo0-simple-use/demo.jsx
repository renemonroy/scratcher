import React from 'react';
import NUIScratcher from '../../src/NUIScratcher';

const myImage = {
  assets: {
    preload: 'https://storage.googleapis.com/nike-protos-141821.appspot.com/snkrs/preload.jpg',
    default: 'https://storage.googleapis.com/nike-protos-141821.appspot.com/snkrs/normal.jpg',
    mask: 'https://storage.googleapis.com/nike-protos-141821.appspot.com/snkrs/colored.jpg',
  },
};

const Demo = function Demo() {
  const img = myImage.assets;
  return (
    <div id="demo0-simple-use">
      <div className="header bg-black prl4-sm pt3-sm pb3-sm">
        <h3 className="ncss-brand text-color-white">Demo 0 - Simple Use</h3>
      </div>
      <NUIScratcher preloader={img.preload} mask={img.mask} image={img.default} />
    </div>
  );
};

export default Demo;
