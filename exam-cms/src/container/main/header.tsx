import * as React from "react";
import { Avatar } from 'antd';
class Header extends React.Component {
  public render() {
    return (
      <div className='header'>
          <div className='header-left'>

          </div>
          <div className='header-right'>
            <Avatar size={30} icon="user" />
          </div>
      </div>
    );
  }
}

export default Header;