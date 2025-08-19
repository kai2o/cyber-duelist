import React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`layout ${className}`}>
      {children}
    </div>
  );
};

export default Layout;