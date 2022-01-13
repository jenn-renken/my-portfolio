import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['Home', 'About', 'Blog', 'Contact'];
  return (
    <div className='tabs is-centered is-medium'>
      <ul>
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'is-active' : 'nav-link'
              }
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
