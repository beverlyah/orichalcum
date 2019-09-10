import React from 'react';

const ImageSlide = ({ url }) => {
  const styles = {
    background: `url(${url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% 0%',
    display: 'inline-block',
    height: '100%',
    width: '100%',
    cursor: 'zoom-in',
};

return <div id="image-slide" style={styles}></div>
}

export default ImageSlide;