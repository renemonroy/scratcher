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

  getBlurValue(percent) {
    return (100 - (percent * 100)) / 5;
  }

  hasImageData() {
    return Object.keys(this.props.image).length > 0;
  }

  renderImageLayer() {
    const { assets } = this.props.image;
    const { previewImageLoaded, largeImageLoaded } = this.state;
    return (
      <div className={classNames(cn.NUIScratcherImageLayer)}>
        <div className={classNames(cn.NUIScratcherImageRowWrapper)}>
          <div className={classNames(cn.NUIScratcherImageRow)}>
            <img
              src={assets.preload}
              role="presentation"
              onLoad={() => this.setState({ previewImageLoaded: true })}
              className={classNames(
                cn.NUIScratcherPreviewImage,
                previewImageLoaded ? 'loaded' : null
              )}
            />
            {previewImageLoaded ?
              <img
                src={assets.default}
                role="presentation"
                onLoad={() => this.setState({ largeImageLoaded: true })}
                className={classNames(
                  cn.NUIScratcherDefaultImage,
                  largeImageLoaded ? 'loaded' : null
                )}
                style={{ filter: `blur(${this.getBlurValue(1)}px)` }}
              /> :
              null
            }
          </div>
        </div>
      </div>
    );
  }

  renderCanvasLayer() {
    return (
      <div className={classNames(cn.NUIScratcherCanvasLayer)} />
    );
  }

  render() {
    return (
      <div className="nui-scratcher">
        {this.hasImageData() ? this.renderImageLayer() : null }
        {this.renderCanvasLayer()}
      </div>
    );
  }
}

export default NUIScratcher;
