import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['Home', 'About', 'My Work', 'Resume', 'Contact'];
  return (
    <div className='tabs is-centered is-medium'>
      <ul>
        {tabs.map(tab => (
          <li className={
            props.currentPage === tab ? 'is-active' : 'nav-link'
          } key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.setCurrentPage(tab)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavTabs;
