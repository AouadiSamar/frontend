import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="content-area">
        <div className="main-content">
          <div className="dashboard-main-content">
            {children} {/* Home or other content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboard;
