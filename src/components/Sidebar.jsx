import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import NavItem from "./NavItem";

const Sidebar = props => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-lg btn-primary drawer-button lg:hidden btn-circle m-4">
                        <MenuIcon className="w-10 h-10" />
                    </label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <NavItem text="Hero Slice"  />
                        <NavItem text="Campaign Slice" />
                    </ul>

                </div>
        </div>
    );
};

Sidebar.propTypes = {

};

export default Sidebar;