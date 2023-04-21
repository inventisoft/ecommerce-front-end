import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";


const navArrayLinks = [
  {
    title: "Home",
    path: "/",
    icon: <InboxIcon />
  },
  {
    title: "Login",
    path: "/login",
    icon: <DraftsIcon />
  },
  {
    title: "Registrar",
    path: "/register",
    icon: <InboxIcon />
  },
];

export default function app() {
  
  return (
    <>
        <Navbar navArrayLinks={navArrayLinks}/>
        <Container sx={{mt: 5}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
    </>
  )

}
