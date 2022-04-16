import React, { useState ,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { addUsers, getSingleUsers } from "../Redux/action";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));
export default function Edit() {
  const classes = useStyles();
  const [state, setState] = useState({
    country: "",
  });
  const [err, setErr] = useState("");
  let {id}=useParams()
  const {user}=useSelector(state=>state.data)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { country, value } = state;
  const handleInputChange = (e) => {
    let { country } = e.target;
    setState({ ...state, [country]: value });
  };


  useEffect(()=>{
    dispatch(getSingleUsers(id))
  },[])
  // useEffect(()=>{
  //   dispatch(getSingleUsers(id))
  // },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country) {
      setErr("Add new country of your choice");
    } else {
      dispatch(addUsers(state));
      navigate("/");
      setErr("");
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{ width: "100px", marginTop: "20px" }}
        onClick={() => navigate("/")}
      >
        Go back
      </Button>

      <h2>Edit country</h2>
      {err && <h3 style={{ color: "red" }}>{err}</h3>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
        id="standard-basic"
          label="Enter country"
          type="text"
          value={country}
          name="country"

          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          value={country}
          type="submit"
          style={{ width: "100px" }}
        >
         Update
        </Button>
      </form>
    </div>
  );
}
