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
         <div className="w3-center">
         <h2 className="responsive-heading w3-animate-top">
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
        <div className="w3-center">
        <h2 className="responsive-heading w3-animate-top">
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
        <div className="w3-center">
        <h2 className="responsive-heading w3-animate-top">
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
        <div className="w3-center">
        <h2 className="responsive-heading w3-animate-top">
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
        <div className="w3-center">
        <h2 className="responsive-heading w3-animate-top">
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
        <div className="w3-center">
        <h2 className="responsive-heading w3-animate-top">
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
       <div className="w3-center">
       <h2 className="responsive-heading w3-animate-top">  Outdoing your competition with Increased website traffic through <b> Search Engine Optimization</b> for impactful ranking  </h2>
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
