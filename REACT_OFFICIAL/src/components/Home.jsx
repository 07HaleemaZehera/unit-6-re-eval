import React from "react";
import { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useSelector, useDispatch } from "react-redux";
import { deleteUsers, loadUsers } from "../Redux/action";
import {useNavigate} from "react-router-dom"
const useButtonStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, Country, City, Population) {
  return { id, Country, City, Population };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 800,
  },
});



export default function Home() {
  const classes = useStyles();
  const buttonStyles=useButtonStyles()
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);


  const handledelete=(id)=>{
    if(window.confirm("Are you sure ,you want to delete?")){
      dispatch(deleteUsers(id))
    }
    }
  return (
    <div>

      <div className={buttonStyles.root}>
      <Button variant="contained" color="primary" onClick={()=>navigate("/addCountry")}>
Add Country
      </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">id</StyledTableCell>
              <StyledTableCell align="center">Country&nbsp;</StyledTableCell>
              <StyledTableCell align="center">City&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Population&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  {/* <StyledTableCell align="center">{user.id}</StyledTableCell> */}
                  <StyledTableCell align="center">
                    {user.Country}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.City}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.Population}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                      <div className={buttonStyles.root}>
                    <ButtonGroup
                      variant="contained"
                      aria-label="contained primary button group"
                    >
                     
                      <Button  color="secondary" onClick={()=>navigate(`/editCountry/${user.id}`) } >EDIT</Button>
                      <Button    color="primary" onClick={()=>handledelete(user.id)}>DELETE</Button>  
                    </ButtonGroup>
                   </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
