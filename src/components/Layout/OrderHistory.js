import styled from "@emotion/styled";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { style } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import classes from "./OrderHistory.module.css";
const OrderHistory = () => {
  const orderedItem = useSelector((state) => state.cart.orderedList);
  const Orderamount = useSelector((state) => state.cart.OrderAmount);
  
  let totalAmount ;
  var total = 0;
  let item = Object.values(Orderamount);
  item.map((item1) => {
    totalAmount= item1.amount;
  });
  console.log(totalAmount);

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#147662",
      color: "white",
      fontSize: "1.5rem",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 20,
    },
  }));
  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "rgb(224 224 224)",
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div className={classes.orderHistory}>
      <span> Your Order</span>
      {orderedItem.map((item, i) => (
        <div className={classes.container} key={i}>
          <TableContainer component={Paper} aria-label="customized table">
            <Table sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={3}>
                    Details
                  </StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell>Item Name</StyledTableCell>
                  <StyledTableCell align="right">Qty.</StyledTableCell>
                  <StyledTableCell align="right">
                    Price(1 Item)(₹)
                  </StyledTableCell>
                  <StyledTableCell align="right">SubTotal(₹)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.price.toFixed(2)}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.totalPrice.toFixed(2)}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}

                <StyledTableRow>
                  <StyledTableCell colSpan={3} align="right">
                    Total
                  </StyledTableCell>
                  <StyledTableCell align="right">{totalAmount}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
