import * as React from "react";
class Classify extends React.Component {
  public render() {
    return (
      <div className="classbox">
        <h2 className="tit">试题分类</h2>
        <div className="show">
          <button>+添加类型</button>
          <table>
            <thead>
              <th>类型ID</th>
              <th>类型名称</th>
              <th>操作</th>
            </thead>
            <tbody>
              <tr>
                <td>774318-730z8m</td>
                <td>简答题</td>
                <td></td>
              </tr>
              <tr>
                <td>br9d6s-wh46i</td>
                <td>代码阅读题</td>
                <td></td>
              </tr>
              <tr>
                <td>fwf0t-wla1q</td>
                <td>代码补全</td>
                <td></td>
              </tr>
              <tr>
                <td>n66k4n-i9zpen</td>
                <td>修改bug</td>
                <td></td>
              </tr>
              <tr>
                <td>v8i73-r8oai</td>
                <td>手写代码</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Classify;
