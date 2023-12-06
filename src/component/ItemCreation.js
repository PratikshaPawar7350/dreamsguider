// ItemCreation.js
import React from 'react';

const ItemCreation = ({ handleItemClick }) => {
  return (
    <div className="section item-creation">
      <h2>Create Items</h2>
      <ul className="item-links">
    <li><a href="#" onClick={() => handleItemClick('A')}>A</a></li>
    <li><a href="#" onClick={() => handleItemClick('B')}>B</a></li>
    <li><a href="#" onClick={() => handleItemClick('C')}>C</a></li>
  </ul>
    </div>
  );
};



////////////////////////////////
// App.js
import React, { useState, useEffect } from 'react';
import './css/style.css';
import './css/ContentDisplay.css';
import ImageDisplay from './component/ImageDisplay.js';
import ContentDisplay from './component/ContentDisplay.js';

const App = () => {
  const [selectedItem, setSelectedItem] = useState('A');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#3e7ddb'); // Set initial background color

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const index = Math.floor(scrollPosition / 50);
    setSelectedItem(items[index] || 'G');

    // Update background color smoothly based on the selected item
    switch (items[index]) {
      case 'A':
        setBackgroundColor('#3e7ddb');
        
        break;
      case 'B':
        setBackgroundColor('#28ab28');
        break;
      case 'C':
        setBackgroundColor('#3e7ddb');
        break;
      case 'D':
        setBackgroundColor('#351ba8');
        break;
      case 'E':
        setBackgroundColor('#9e2828');
        break;
      case 'F':
        setBackgroundColor('#451ad6');
        break;
      case 'G':
        setBackgroundColor('#f26224');
        break;
      default:
        setBackgroundColor('#54b8d6');
    }
  }, [scrollPosition]);

  const handleItemClick = (item) => {
    setSelectedItem(item);

    // Update background color smoothly based on the selected item
    switch (item) {
      case 'A':
        setBackgroundColor('#3e7ddb');
        
        break;
      case 'B':
        setBackgroundColor('#28ab28');
        break;
      case 'C':
        setBackgroundColor('#3e7ddb');
        break;
      case 'D':
        setBackgroundColor('#351ba8');
        break;
      case 'E':
        setBackgroundColor('#9e2828');
        break;
      case 'F':
        setBackgroundColor('#451ad6');
        break;
      case 'G':
        setBackgroundColor('#f26224');
        break;
      default:
        setBackgroundColor('#54b8d6');
    }
  };

  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      <div style={{ backgroundColor, padding: '20px', transition: 'background-color 0.3s' }}>
        <h1 style={{ color: 'white' }}>Our Strategic IT solutions Deliver -</h1>
        <div className="item-links">
          <a
            href="#"
            onClick={() => handleItemClick('A')}
            className={selectedItem === 'A' ? 'bg-blue' : ''}
            
          >
            Web Applications
          </a>
          <br />
          <a
            href="#"
            onClick={() => handleItemClick('B')}
            className={selectedItem === 'B' ? 'selected' : ''}
          >
            Web Designing
          </a>
          <br />
          <a
            href="#"
            onClick={() => handleItemClick('C')}
            className={selectedItem === 'C' ? 'selected' : ''}
          >
            E-Commerce Website
          </a>
          <br />
          <a
            href="#"
            onClick={() => handleItemClick('D')}
            className={selectedItem === 'D' ? 'selected' : ''}
          >
            Mobile App Development
          </a>
          <br />
          <a
            href="#"
            onClick={() => handleItemClick('E')}
            className={selectedItem === 'E' ? 'selected' : ''}
          >
            Desktop Application
          </a>
          <br />
          <a
            href="#"
            onClick={() => handleItemClick('F')}
            className={selectedItem === 'F' ? 'selected' : ''}
          >
            Search Engine Optimization
          </a>
          <br />
          <a
            href="#"
            onClick={() => handleItemClick('G')}
            className={selectedItem === 'G' ? 'selected' : ''}
          >
            Social Media Marketing
          </a>
          <br />
        </div>
      </div>

      <ImageDisplay selectedItem={selectedItem} backgroundColor={backgroundColor} />
      <ContentDisplay selectedItem={selectedItem} backgroundColor={backgroundColor} />
    </div>
  );
};

export default App;
/////////////////////////////////////


/////////////////////
import React, { useEffect, useState, useRef } from 'react';

const ContentDisplay = ({ selectedItem }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const listItems = document.querySelectorAll('.custom-list li');
      const contentOffset = contentRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Check if the content section is visible
      if (scrollPosition > contentOffset && !visibleSections.includes('content')) {
        setVisibleSections(['content']);
      }

      // Check if individual list items are visible
      listItems.forEach((item, index) => {
        const itemOffset = item.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition > itemOffset && !visibleSections.includes(`item${index}`)) {
          setVisibleSections((prevSections) => [...prevSections, `item${index}`]);

          // Scroll smoothly to the next section when a list item becomes visible
          if (index < listItems.length - 1) {
            const nextItemOffset = listItems[index + 1].getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: nextItemOffset,
              behavior: 'smooth',
            });
          } else {
            // If it's the last list item, scroll to the end of the content
            const contentHeight = contentRef.current.clientHeight;
            window.scrollTo({
              top: contentOffset + contentHeight - window.innerHeight,
              behavior: 'smooth',
            });
          }
        }
      });
    };

    // Attach event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSections]);

  return (
    <div className="section content-display" ref={contentRef}>
      {selectedItem === 'A' && (
        <div>
          <h2 className="w3-center w3-animate-top" style={{ display: 'inline' }}>
            Building next-gen <b>Web Applications </b>while seamlessly integrating all facets of your business
          </h2>
          <ul className="custom-list">
            <div className="w3-container w3-center w3-animate-bottom" style={{ display: 'inline'}}>
              <li>E-commerce website</li>
              <li>Mobile App Development</li>
              <li>Desktop Applications</li>
            </div>
          </ul>
          <br></br>
          <h2><b>Clients</b></h2>
        </div>
      )}

      {selectedItem === 'B' && (
        <div>
          <h2 className="w3-center w3-animate-top" style={{ display: 'inline' }}>
            Creating industry-specific <b>Web Designs </b>by strategically blending brand storytelling and User Experience
          </h2>
          <ul className="custom-list">
            <div className="w3-container w3-center w3-animate-bottom" style={{ display: 'inline'}}>
            <li >Appealing Visuals & Innovative Designs</li>
            <li>High Accessibility & Adaptability</li>
            <li>Consistent Branding with Clear CTAs</li>
            </div>
          </ul>
          <br></br>
          <h2><b>Clients</b></h2>
        </div>
      )}

      {selectedItem === 'C' && (
        <div>
          <h2 className="w3-center w3-animate-top" style={{ display: 'inline' }}>
            Developing simple, intuitive, high-performance <b>E-commerce Websites</b> for taking your business to the next level
          </h2>
          <ul className="custom-list">
          <div className="w3-container w3-center w3-animate-bottom">
            <li>Responsive & Interactive Sites</li>
            <li>Secure & Streamlined Payments</li>
            <li>Enhanced Shopping Experience</li>
            </div>
          </ul>
          <br></br>
          <h2><b>Clients</b></h2>
        </div>
      )}

      {selectedItem === 'D' && (
        <div>
          <h2 className="w3-center w3-animate-top" style={{ display: 'inline' }}>
            Serving unique experiences and solving business challenges through intelligent<b> Mobile Apps</b>
          </h2>
          <ul className="custom-list">
          <div className="w3-container w3-center w3-animate-bottom">
            <li>Ease of use & simplified integration</li>
            <li>Improved Productivity & Security</li>
            <li>Customized for Scalability & Flexibility</li>
            </div>
          </ul>
          <br></br>
          <h2><b>Clients</b></h2>
        </div>
      )}
      {selectedItem === 'E' && (
        <div>
          <h2 className="w3-center w3-animate-top" style={{ display: 'inline' }}>
          Providing a competitive edge with customized <b>Desktop Applications</b> that accelerate business processes  </h2>
          <ul className="custom-list">
          <div className="w3-container w3-center w3-animate-bottom">
            <li>Ease of use & simplified integration</li>
            <li>Improved Productivity & Security</li>
            <li>Customized for Scalability & Flexibility</li>
            </div>
          </ul>
          <br></br>
          <h2><b>Clients</b></h2>
        </div>
      )}
      {selectedItem === 'G' && (
        <div>
          <h2 className="w3-center w3-animate-top" style={{ display: 'inline' }}>
          Unlocking your Business' true potential & revamping it through smart<b> Digital Marketing</b></h2>
          <ul className="custom-list">
          <div className="w3-container w3-center w3-animate-bottom">
            <li>Global Reach & Increased Awareness
</li>
            <li>Effective Targeting & Measurable Results</li>
            <li>Improved Engagement & Conversions</li>
            </div>
          </ul>
          <br></br>
          <h2><b>Clients</b></h2>
        </div>
      )}
      {selectedItem === 'F' && (
        <div>
          <h2 className="w3-center w3-animate-top" style={{ display: 'inline' }}>
          Outdoing your competition with Increased website traffic through <b> Search Engine Optimization</b> for impactful ranking  </h2>
          <ul className="custom-list">
          <div className="w3-container w3-center w3-animate-bottom" style={{ display: 'inline'}}>
            <li>Boost your Visibility - 10x your business</li>
            <li>Generate more Leads - Increase your Sales</li>
            <li>Get more Customers - Improve your ROI</li>
            </div>
          </ul>
          <br></br>
          <h2><b>Clients</b></h2>
        </div>
      )}
    </div>
  );
};

export default ContentDisplay;
//////////////////////////////////////////
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
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-46%)', }}
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
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-46%)', }}
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
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-46%)', }}
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
            style={{ ...topImageAnimation, position: 'absolute', top: '-6px', left: '28%', transform: 'translateX(-46%)', }}
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
