/* eslint-env browser */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { default as cn } from './NUIScratcherClasses';
import brush from './brush';

require('./NUIScratcher.styl');

class NUIScratcher extends Component {

  static displayName = 'NUIScratcher';

  static propTypes = {
    image: PropTypes.object.isRequired,
    canvasWidth: PropTypes.number,
    canvasHeight: PropTypes.number,
  };

  static defaultProps = {
    image: {},
    canvasWidth: 375,
    canvasHeight: 265,
  };

  constructor(props) {
    super(props);
    this.state = {
      previewImageLoaded: false,
      largeImageLoaded: false,
      disableCanvas: false,
    };
  }

  componentWillMount() {
    this.isDrawing = false;
  }

  componentDidMount() {
    this.setImageInCanvas();
    this.setBrushInCanvas();
  }

  setImageInCanvas() {
    const { image } = this.props;
    const { canvasWidth, canvasHeight } = this.state;
    const img = new Image(canvasWidth, canvasHeight);
    this.ctx = this.canvas.getContext('2d');
    img.onload = () => this.ctx.drawImage(img, 0, 0, 375, 265);
    img.crossOrigin = 'anonymous';
    img.src = image.assets.default;
  }

  setBrushInCanvas() {
    this.brush = new Image();
    this.brush.src = brush;
  }

  getMousePosition(e, canvas) {
    let offsetX = 0;
    let offsetY = 0;
    let c = canvas;
    if (c.offsetParent !== undefined) {
      do {
        offsetX += c.offsetLeft;
        offsetY += c.offsetTop;
      } while ((c = c.offsetParent) !== null);
    }
    return {
      x: (e.pageX || e.touches[0].clientX) - offsetX,
      y: (e.pageY || e.touches[0].clientY) - offsetY,
    };
  }

  getDistanceBetween2Points(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  getAngleBetween2Points(p1, p2) {
    return Math.atan2(p2.x - p1.x, p2.y - p1.y);
  }

  getBlurForPreload(percent) {
    return (100 - (percent * 100)) / 5;
  }

  getFilledInPixels(stride) {
    const { canvasWidth, canvasHeight } = this.props;
    const strd = !stride || stride < 1 ? 1 : stride;
    const pixels = this.ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const pdata = pixels.data;
    const l = pdata.length;
    const total = l / stride;
    let count = 0;
    for (let i = count = 0; i < l; i += strd) {
      if (parseInt(pdata[i], 10) === 0) {
        count++;
      }
    }
    return Math.round((count / total) * 100);
  }

  handleMouseDown(e) {
    this.isDrawing = true;
    this.lastPoint = this.getMousePosition(e, this.canvas);
    // console.log('>>> last point:', this.lastPoint);
  }

  handleMouseMove(e) {
    if (!this.isDrawing) return;
    e.preventDefault();
    const currentPoint = this.getMousePosition(e, this.canvas);
    const dist = this.getDistanceBetween2Points(this.lastPoint, currentPoint);
    const angle = this.getAngleBetween2Points(this.lastPoint, currentPoint);
    let x;
    let y;
    for (let i = 0; i < dist; i++) {
      x = (this.lastPoint.x + (Math.sin(angle) * i)) - 10;
      y = (this.lastPoint.y + (Math.cos(angle) * i)) - 10;
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.drawImage(this.brush, x, y, 20, 20);
    }
    this.lastPoint = currentPoint;
    this.handlePercentage(this.getFilledInPixels(32));
  }

  handleMouseUp() {
    this.isDrawing = false;
  }

  handlePercentage(filledInPixels) {
    const fip = filledInPixels || 0;
    console.log(`${fip}%`);
    if (fip > 50) {
      this.setState({ disableCanvas: true });
    }
  }

  hasImageData() {
    return Object.keys(this.props.image).length > 0;
  }

  render() {
    const { canvasWidth, canvasHeight } = this.props;
    const { assets } = this.props.image;
    const { previewImageLoaded, largeImageLoaded, disableCanvas } = this.state;
    return (
      <div className={classNames(cn.NUIScratcher)}>
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
                    style={{ filter: `blur(${this.getBlurForPreload(1)}px)` }}
                  /> :
                  null
                }
              </div>
            </div>
          </div> :
          null
        }
        <div className={classNames(cn.NUICanvasLayer)}>
          {disableCanvas ?
            null :
            <canvas
              ref={(c) => { this.canvas = c; }}
              className={classNames(cn.NUICanvas)}
              width={canvasWidth}
              height={canvasHeight}
              onMouseDown={::this.handleMouseDown}
              onTouchStart={::this.handleMouseDown}
              onMouseMove={::this.handleMouseMove}
              onTouchMove={::this.handleMouseMove}
              onMouseUp={::this.handleMouseUp}
              onTouchEnd={::this.handleMouseUp}
            />
          }
        </div>
      </div>
    );
  }
}

export default NUIScratcher;
