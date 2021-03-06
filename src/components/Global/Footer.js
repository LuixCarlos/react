import React, {Component} from 'react';
import './css/Footer.css'
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  }
  render() {
    const {
      copyright = "&copy; Estudo React 2017"
    } = this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{
          __html: copyright
        }}/>
      </div>
    );
  }
}

export default Footer;
