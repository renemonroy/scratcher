/* eslint-env browser */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { default as cn } from './NUIScratcherClasses';

require('./NUIScratcher.styl');

class NUIScratcher extends Component {

  static displayName = 'NUIScratcher';

  static propTypes = {
    image: PropTypes.object.isRequired,
  };

  static defaultProps = {
    image: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      previewImageLoaded: false,
      largeImageLoaded: false,
    };
  }

  componentDidMount() {
    this.setImageInCanvas();
  }

  setImageInCanvas() {
    const { image } = this.props;
    const img = new Image(375, 265);
    const ctx = this.canvas.getContext('2d');
    img.onload = () => ctx.drawImage(img, 0, 0, 375, 265);
    img.src = image.assets.default;
  }

  getBlurValue(percent) {
    return (100 - (percent * 100)) / 5;
  }

  hasImageData() {
    return Object.keys(this.props.image).length > 0;
  }

  render() {
    const { assets } = this.props.image;
    const { previewImageLoaded, largeImageLoaded } = this.state;
    return (
      <div className={classNames(cn.NUIScratcher)}>
        <div className={classNames(cn.NUICanvasLayer)}>
          <canvas
            ref={(c) => { this.canvas = c; }}
            className={classNames(cn.NUICanvas)}
            width="375"
            height="265"
          />
        </div>
        {this.hasImageData() ?
          <div className={classNames(cn.NUIImageLayer)}>
            <div className={classNames(cn.NUIImageRowWrapper)}>
              <div className={classNames(cn.NUIImageRow)}>
                <img
                  src={assets.preload}
                  role="presentation"
                  onLoad={() => this.setState({ previewImageLoaded: true })}
                  className={classNames(cn.NUIPreviewImage, previewImageLoaded ? 'loaded' : null)}
                />
                {previewImageLoaded ?
                  <img
                    src={assets.mask}
                    role="presentation"
                    onLoad={() => this.setState({ largeImageLoaded: true })}
                    className={classNames(cn.NUIDefaultImage, largeImageLoaded ? 'loaded' : null)}
                    style={{ filter: `blur(${this.getBlurValue(1)}px)` }}
                  /> :
                  null
                }
              </div>
            </div>
          </div> :
          null
        }
      </div>
    );
  }
}

export default NUIScratcher;
