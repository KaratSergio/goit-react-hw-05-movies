import React, { useState, useEffect } from 'react';

const ErrorCheck = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children;
};

export default ErrorCheck;
