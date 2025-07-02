'use client'
import React from 'react'
import { ToastContainer, toast as showToast, Bounce } from 'react-toastify';
export default function ToastSucess() {
  React.useEffect(() => {
    showToast.success('Sukses Update Kendaraaan', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }, []);

  return <ToastContainer />;
}
