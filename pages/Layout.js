import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Your existing layout code */}
      {children}
      <div id="modal-root" />
    </div>
  );
};

export default Layout;
