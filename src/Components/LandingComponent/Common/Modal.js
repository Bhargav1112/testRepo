import React from 'react'
import ReactDOM from 'react-dom';
import CloseIcon from "../../../assets/images/closeIcon.png"

const BackDrop = (props) => {
  return <div className='fixed inset-0 z-[20] bg-[#000000bf]' onClick={props.onClose} ></div>
}

const ModalOverlay = ({ title = "Test", children, onClose }) => {
  return (
    <div className="fixed top-[20vh] px-[25px] py-[17px] left-[50%] z-[30] -translate-x-[50%] w-full max-w-[845px] bg-[#FFFFFF] h-[400px] ">
      <div className="relative text-center ">
        <h2 className='text-[30px] leading-[52px] font-[400] color-[#000000] '>{title}</h2>
        <button className='absolute top-[50%] right-[2%] -translate-y-[50%]' onClick={onClose}>
          <img src={CloseIcon} alt="closeIcon" />
        </button>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlay-root');

const Modal = ({ open, onClose, children }) => {
  if (!open) return
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay onClose={onClose} >{children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal