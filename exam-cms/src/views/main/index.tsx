import * as React from "react";
import Header from "../../container/main/header";
import Content from "../../container/main/content";
import Slid from "../../container/main/slid";

class Main extends React.Component{
  public render() {
    return (
      <div>
        <Header />
        <div>
          <Slid />
          <Content />
        </div>
      </div>
    );
  }
}

export default Main;
