import * as React from 'react';

import { Link } from 'react-router-dom';
const styles = {
  show: {
    transform: 'translateX(0px)',

    transitionDuration: '1s'
  },
  hidden: {
    transform: 'translateX(-120px)',

    transitionDuration: '1s'
  },
  showContent: {
    display: 'block',
    marginTop: 10
  },
  hiddenContent: {
    display: 'none',
    marginTop: 10
  }
};
class Header extends React.Component {
  state = { render: false, first: false, second: false };

  changeState = () => {
    this.setState({ render: !this.state.render });
  };
  changeFirstState = () => {
    if (this.state.first && this.state.second) {
      this.setState({ first: !this.state.first });
      this.setState({ second: !this.state.second });
    }
    this.setState({ first: !this.state.first });
  };
  changeSecondState = () => {
    this.setState({ second: !this.state.second });
  };

  render() {
    return (
      <div id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-1">
              <div className="sidebar_icon">
                <img
                  onClick={() => this.changeState()}
                  src="https://cdn3.iconfinder.com/data/icons/e-commerce-8/91/hamburger-128.png"
                />
                <div
                  className="option_list"
                  style={this.state.render ? styles.show : styles.hidden}
                >
                  <ul>
                    <li>
                      home<span
                        className="caret"
                        onClick={() => this.changeFirstState()}
                      />
                      <div
                        style={
                          this.state.first
                            ? styles.showContent
                            : styles.hiddenContent
                        }
                      >
                        <ul className="data_ul">
                          <li className="data">dropdown</li>
                          <li className="data">dropdown</li>
                          <li
                            className="data"
                            onClick={() => this.changeSecondState()}
                          >
                            new<span className="caret" />
                            <div
                              style={
                                this.state.second
                                  ? styles.showContent
                                  : styles.hiddenContent
                              }
                            >
                              <ul className="data_ul">
                                <li className="data">dropdown</li>
                                <li className="data">dropdown</li>
                                <li className="data">Dropdown</li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <span>view</span>
                    </li>
                    <li>
                      <span>setting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="drop_list">
                <ul>
                  <li>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                      >
                        Content1
                        <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/content1">page1</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                      >
                        Content2
                        <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/content2">page2</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                      >
                        Content3
                        <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/">homePage</Link>
                        </li>
                      </ul>
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

export default Header;
