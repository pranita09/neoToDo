import React, { useRef } from 'react'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import './Modal.scss'
import { IconButton } from '@mui/material'
const Modal = ({ children }) => {
  const dialogRef = useRef()
  function handleOpen() {
    dialogRef.current.showModal()
  }
  function handleClose() {
    dialogRef.current.close()
  }
  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <dialog ref={dialogRef}>
        <span role="button" onClick={handleClose}>
          <IconButton label={<CloseOutlinedIcon />} />
        </span>
        {children}
      </dialog>
    </>
  )
}

export default Modal
