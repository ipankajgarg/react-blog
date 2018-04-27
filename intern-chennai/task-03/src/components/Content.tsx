import * as React from 'react';
import Recent from './Recent';

class Content extends React.Component {
  render() {
    return (
      <div id="content" style={{ marginTop: 30 }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12" style={{ marginLeft: 100 }}>
              <div className="create">
                <div
                  className="heading"
                  style={{
                    fontSize: 21,
                    fontWeight: 'bold'
                  }}
                >
                  Create new model from the following
                </div>
                <span style={{ fontSize: 12, color: 'gray' }}>
                  you can create a following model by the following
                </span>
                <ul>
                  <li>
                    <div>
                      <img src="https://www.materialui.co/materialIcons/image/edit_grey_192x192.png" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Recent />
      </div>
    );
  }
}
export default Content;
