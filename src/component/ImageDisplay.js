import React from 'react';
import { useSpring, animated,config } from 'react-spring';

const ImageDisplay = ({ selectedItem }) => {
  const topImageAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 1, transform: 'translateY(-20px)' },
  });

  const bottomImageAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 1, transform: 'translateY(20px)' },
  });

  return (
    
    <div className="section image-display">
      {selectedItem === 'A' && (
        <div style={{ position: 'relative' }}>
          <animated.img
            src="img/3.png" // Adjust the path accordingly
            alt="Image 1"
            className="w3-animate-top"
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-43%)', }}
          />
          <animated.img
            src="img/4.png" // Adjust the path accordingly
            alt="Image 2"
            className="w3-animate-top"
            style={{
             
              position: 'absolute',
              top: '100%', // Set the top property to be below the first image
              left: '28%',
              transform: 'translateY(55%)',
            }}
          />
                </div>
      )}

{selectedItem === 'B' && (
        <div style={{ position: 'relative' }}>
          <animated.img
            src="img/4.png" // Adjust the path accordingly
            alt="Image 1"
            className="w3-animate-top"
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-43%)', }}
          />
          <animated.img
            src="img/5.png" // Adjust the path accordingly
            alt="Image 2"
            className="w3-animate-top"
            style={{
              
              position: 'absolute',
              top: '100%', // Set the top property to be below the first image
              left: '28%',
              transform: 'translateY(55%)',
            }}
          />


          
        </div>
      )}

{selectedItem === 'C' && (
        <div style={{ position: 'relative' }}>
          <animated.img
            src="img/10.png" // Adjust the path accordingly
            alt="Image 1"
            className="w3-animate-top"
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-43%)', }}
          />
          <animated.img
            src="img/11.png" // Adjust the path accordingly
            alt="Image 2"
            className="w3-animate-top"
            style={{
             ...bottomImageAnimation,
              position: 'absolute',
              top: '100%', // Set the top property to be below the first image
              left: '28%',
              transform: 'translateY(55%)',
            }}
          />


          
        </div>
      )}

{selectedItem === 'D' && (
        <div style={{ position: 'relative' }}>
          <animated.img
            src="img/7.png" // Adjust the path accordingly
            alt="Image 1"
            className="w3-animate-top"
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-43%)', }}
          />
          <animated.img
            src="img/8.png" // Adjust the path accordingly
            alt="Image 2"
            className="w3-animate-top"
            style={{
             
              position: 'absolute',
              top: '100%', // Set the top property to be below the first image
              left: '28%',
              transform: 'translateY(55%)',
            }}
          />
              </div>
      )}
      {selectedItem === 'E' && (
        <div style={{ position: 'relative' }}>
          <animated.img
            src="img/9.png" // Adjust the path accordingly
            alt="Image 1"
            className="w3-animate-top"
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-30%)', }}
          />
          


          
        </div>
      )}
      {/* Similar blocks for other items... */}
    </div>
  );
};

export default ImageDisplay;
