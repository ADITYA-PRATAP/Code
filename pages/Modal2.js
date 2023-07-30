import React from 'react';
import ReactDOM from 'react-dom';
import styles from '@/styles/Modal.module.css';

const Modal = ({ children, onClose }) => {
  if (typeof window === 'undefined') {
    return null; // Render nothing during server-side rendering
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles['modal-overlay1']} />
      <div className={styles['modal-content1']}>
        <button className={styles['modal-close1']} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  );
};

export default Modal;
