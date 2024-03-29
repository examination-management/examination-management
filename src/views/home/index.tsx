import { Layout } from "antd";
import "antd/dist/antd.css";
import * as React from "react";
import Osider from "../../components/osider";
import Oheader from "../../components/oheader";
import Oconent from "../../components/oconent";
import "./css/index.css"
class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className="box">
        <Layout>
          <Oheader></Oheader>
          <Layout>
            <Osider></Osider>
            <Layout>
              <Oconent {...this.props}></Oconent>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Home;
