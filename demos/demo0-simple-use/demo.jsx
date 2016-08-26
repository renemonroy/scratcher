import React from 'react';
import NUIScratcher from '../../src/NUIScratcher';

const myImage = {
  assets: {
    preload: 'https://firebasestorage.googleapis.com/v0/b/nike-proto.appspot.com/o/preload.jpg?alt=media&token=63a63e02-1aa9-48a1-9185-5a2096dcde28',
    default: 'https://firebasestorage.googleapis.com/v0/b/nike-proto.appspot.com/o/normal.jpg?alt=media&token=07274c0e-7005-485a-81bf-895cb1475a3c',
    mask: 'https://firebasestorage.googleapis.com/v0/b/nike-proto.appspot.com/o/colored.png?alt=media&token=317f21a4-03d6-4b1c-ad28-c8217c23b6f3',
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
