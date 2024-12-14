import React from 'react'
import "./Navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav>
            <div className="wrapper">
                <div className="left">
                    <span>EN</span>
                    <div className="search">
                        <input />
                        <SearchIcon style={{ color: 'gray' }} />
                    </div>
                </div>
                <div className="center">
                    <div class="wrapperr">
                        <svg>
                            <text x="50%" y="50%" dy=".35em" text-anchor="middle" onClick={()=>{navigate("/")}}>
                                Lumia.
                            </text>
                        </svg>
                    </div>                </div>
                <div className="right">
                    <div className="menuItem" onClick={()=>{navigate("/Register")}}>
                    Register
                </div>
                <div className="menuItem" onClick={()=>{navigate("/Login")}}>
                    LogIn
                </div>
                <div className="menuItem" onClick={()=>{navigate("/Cart")}}>
                    <Badge badgeContent={4} color="success">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </div>
            </div>
        </div>
        </nav >
    )
}
