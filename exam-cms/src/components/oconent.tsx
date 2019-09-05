import * as React from 'react';
import { Layout} from "antd";
const { Content} = Layout;
import RouterView from "../router/routerView";
class Oconent extends React.Component {
    public render(){
      const routes=this.props['routes']
        return(
            <Content
              style={{
                background: '#fff',
                margin: 0,
                minHeight: 280,
                padding: 24,
              }}
            >
               <RouterView routes={routes} />
          </Content>
        )
    }
}
export default Oconent
