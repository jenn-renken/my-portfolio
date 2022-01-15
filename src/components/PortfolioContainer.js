import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import MyWork from './pages/MyWork';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

function Portfolio() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, setCurrentPage] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'My Work':
        return <MyWork />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <div className='content-container'> 
        <Footer className="footer--pin"></Footer>
      </div>
    </div>
  );
}

export default Portfolio;
