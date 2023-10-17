import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Sidebar>
            <h1>WiseMinde</h1>
            <Menu
                menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                            backgroundColor: '#13395e',
                            color: '#b6c8d9',
                        },
                    },
                }}
            >
                <MenuItem component={<Link to="/artists" />}> The Artists </MenuItem>
                <MenuItem component={<Link to="/about" />}> The Vision </MenuItem>
                <MenuItem component={<Link to="/projects" />}> The Projects </MenuItem>
                <MenuItem component={<Link to="/contact" />}> Contact </MenuItem>
                <MenuItem component={<Link to="/" />}> Home </MenuItem>
                <MenuItem component={<Link to="/artists/artist" />}> Test</MenuItem>
            </Menu>
        </Sidebar>
    )
}