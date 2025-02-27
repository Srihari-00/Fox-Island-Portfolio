import { useState } from 'react';

export const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const showAlert = ({ message, type }) => {
    setAlert({ show: true, message, type });
  };

  const hideAlert = () => {
    setAlert({ show: false, message: '', type: '' });
  };

  return { alert, showAlert, hideAlert };
};
