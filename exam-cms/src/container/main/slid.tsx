import * as React from "react";
import { Menu, Icon} from 'antd';
import {inject, observer} from 'mobx-react'
const { SubMenu } = Menu;

@inject('question')
@observer
class Slid extends React.Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  public render() {
    console.log(this.props)
    return (
      <div style={{ width: 256 }}>

      </div>
    );
  }
}

export default Slid;




