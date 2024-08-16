import React from 'react';

interface AlertMessageProps {
  variant: string;
  message: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ variant, message }) => {
  return (
    <div className={`alert alert-${variant}`} role="alert">
      {message}
    </div>
  );
};

export default AlertMessage;