import React from 'react';
import "./App.css";
import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";
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
                    <Table
      style={{ width: "100%", border: "2px solid #ccc"  }}
      aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="ETableCellText"> <strong>Loan Amount</strong></TableCell>
          <TableCell className="ETableCellText"> <strong>Rs.</strong> {props.pAmount}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText"> <strong>Interest %</strong></TableCell>
          <TableCell className="ETableCellText">{props.interest}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText"> <strong> Tenure (Months)</strong></TableCell>
          <TableCell className="ETableCellText">{props.duration}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText"> <strong>EMI (Monthly)</strong></TableCell>
          <TableCell className="ETableCellText"> <strong>Rs.</strong> {props.emi}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText"> <strong>Total Interest</strong></TableCell>
          <TableCell className="ETableCellText"> <strong>Rs.</strong> {props.TotalAmountOfInterest}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText"> <strong>Total Payment</strong> <br/> (Loan Amount + Interest)</TableCell>
          <TableCell className="ETableCellText"> <strong>Rs.</strong> {props.totalAmount}</TableCell>
        
        </TableRow>
        
      </TableHead>
    </Table>
                </ModalBody>
            </Modal>

  )
}

export default Detail;