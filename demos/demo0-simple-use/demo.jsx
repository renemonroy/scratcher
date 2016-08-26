import React from 'react';
import NUIScratcher from '../../src/NUIScratcher';

const myImage = {
  assets: {
    preload: 'https://cloud.githubusercontent.com/assets/106011/17034209/417b9778-4f47-11e6-8ed0-79586edf415f.jpg',
    default: 'https://cloud.githubusercontent.com/assets/106011/15694823/9bdb1dfa-2766-11e6-8d02-80fb57912f46.jpg',
  },
};

const Demo = function Demo() {
  return (
    <div id="demo0-simple-use">
      <p>Demo 0 - Simple Use</p>
      <NUIScratcher image={myImage} />
    </div>
  );
};

export default Demo;
