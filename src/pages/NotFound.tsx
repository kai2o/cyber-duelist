import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-accent-cyan)' }}>404</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Oops! Page not found</p>
          <Button variant="primary" onClick={() => window.location.href = '/'}>
            Return to Home
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
