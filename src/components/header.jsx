import Link from '@mui/material/Link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchBar from './searchBar';

function Header(){
    return (
    <div className="Header">
        <h1>Exclusive</h1>
        <div className="pages-buttons" style={{display:'flex', justifyContent:"space-evenly", width:"30%"}}>
            <Link href="#" underline='none' color="black">Home</Link>
            <Link href="#" underline='none' color="black">Contact</Link>
            <Link href="#" underline='none' color="black">About</Link>
            <Link href="#" underline='none' color="black">Sign Up</Link>
        </div>
        <div style={{display:'flex', gap:"20px"}}>
            <SearchBar />
            <Link className="likes-button" href="#" underline='none' color="black">
                <FavoriteBorderOutlinedIcon />
            </Link>
            <Link className="cart-button" href="#" underline='none' color="black">
                <ShoppingCartOutlinedIcon />
            </Link>
        </div>
    </div>)
}

export default Header