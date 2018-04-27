import * as React from 'react';

class Recent extends React.Component {
  render() {
    return (
      <div className="recent">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="list">
                <div
                  className="heading"
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold'
                  }}
                >
                  Recent models
                </div>
                <span style={{ fontSize: 11, color: 'gray' }}>
                  View some recent models
                </span>
                <ul>
                  <li>
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
                    <div>
                      <span>Model name</span>
                      <br />
                      <span>27june </span>
                      <br />
                      <span>500kb</span>
                    </div>
                  </li>
                  <li>
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
                    <div>
                      <span>Model name</span>
                      <br />
                      <span>27june </span>
                      <br />
                      <span>500kb</span>
                    </div>
                  </li>
                  <li>
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
                    <div>
                      <span>Model name</span>
                      <br />
                      <span>27june </span>
                      <br />
                      <span>500kb</span>
                    </div>
                  </li>
                  <li>
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
                    <div>
                      <span>Model name</span>
                      <br />
                      <span>27june </span>
                      <br />
                      <span>500kb</span>
                    </div>
                  </li>
                  <li>
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
                    <div>
                      <span>Model name</span>
                      <br />
                      <span>27june </span>
                      <br />
                      <span>500kb</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Recent;
