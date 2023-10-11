import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function Navbar() {
    return (
        <Sidebar>
            <Menu>
                <MenuItem> The Vision </MenuItem>
                <SubMenu label="The Artists">
                    <MenuItem> Pie charts </MenuItem>
                </SubMenu>
                <MenuItem> The Projects </MenuItem>
                <MenuItem> The Contact </MenuItem>
            </Menu>
        </Sidebar>
    )
}