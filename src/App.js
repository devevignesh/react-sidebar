import React, { Fragment, useState } from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import { FaBars } from "react-icons/fa";
import Sidebar from './components/Sidebar';

import './App.css';

const App = () => {
    const [toggleState, setToggleState] = useState(false);

    const toggle = () => {
        setToggleState(toggleState === false ? true : false )
    }

  return (
      <Fragment>
          <Navbar className="nav-bar">
              <NavbarBrand href="#" />
              <FaBars className="sidebar__toggle" onClick={toggle}/>
          </Navbar>
          <Sidebar toggle={toggle} isOpen={toggleState} />
          <h1 className="text-center">Toggle Sidebar using hooks</h1>
      </Fragment>
  );
}

export default App;
