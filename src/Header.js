import React ,{useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import {useDispatch} from "react-redux"
import {auth} from "./firebase"

import {logout} from "./features/userSlice"
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InsertCommentRoundedIcon from '@material-ui/icons/InsertCommentRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import DialogTitle from '@material-ui/core/DialogTitle';
function Header() {
  
  const dispatch= useDispatch();
  const logoutofApp=()=>{
    dispatch(logout());
    auth.signOut();
  }
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="header">
      <div className="header__left">
      <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>
        <div className="header__search">
          <SearchIcon color="action" fontSize="small" />
          <input placeholder="Search " />
        
        </div>
      </div>
      <div className="header__right">
          <HeaderOption Icon ={HomeIcon} title="Home" />
          <HeaderOption Icon ={SupervisorAccountIcon} title="My Network"/>
          <HeaderOption Icon ={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon ={InsertCommentRoundedIcon} title="Message"/>
          <HeaderOption Icon ={NotificationsIcon} title="Notifications"/>
        <HeaderOption  avatar ={true} title='me' onClick={handleClickOpen} />
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you want to signout?"}</DialogTitle>
        
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={logoutofApp} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      
      </div>
    </div>
  );
}

export default Header;
