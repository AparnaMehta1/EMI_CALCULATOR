import React, {useState} from 'react';
import  {
  Button, Modal, ModalFooter,
  ModalHeader, ModalBody
} from "reactstrap";


const Detail = (props) => {
 
  return (
 
    <Modal isOpen={props.modal}
                toggle={props.toggle}
                modalTransition={{ timeout: 2000 }}>
                <ModalBody>
                    Simple Modal with just ModalBody...
                </ModalBody>
            </Modal>

  )
}

export default Detail;