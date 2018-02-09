import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BoxRoot, FullContent } from 'modules/common/styles/styles';
import { colors } from 'modules/common/styles';
import { METHODS } from 'modules/engage/constants';

const boxSize = 320;

const Box = BoxRoot.extend`
  width: ${boxSize}px;
  padding: 40px;

  &:last-of-type {
    margin-right: 0;
  }

  span {
    font-weight: 500;
  }

  ${props => {
    if (props.selected) {
      return `
        border: 1px solid ${colors.colorSecondary};
      `;
    }
  }};

  p {
    margin: 10px 0 0;
    font-size: 12px;
    color: ${colors.colorCoreLightGray};
  }
`;

const propTypes = {
  changeMethod: PropTypes.func,
  method: PropTypes.string
};

class Step1 extends Component {
  renderBox(name, image, desc) {
    return (
      <Box
        selected={this.props.method === name}
        onClick={() => this.props.changeMethod('method', name)}
      >
        <img src={image} alt={name} />
        <span>{name}</span>
        <p>{desc}</p>
      </Box>
    );
  }
  render() {
    return (
      <FullContent center>
        {this.renderBox(
          METHODS.EMAIL,
          '/images/icons/erxes-07.svg',
          'Delivered to a user s email inbox Customize with your own templates'
        )}
        {this.renderBox(
          METHODS.MESSENGER,
          '/images/icons/erxes-08.svg',
          'Delivered inside your app Reach active users'
        )}
      </FullContent>
    );
  }
}

Step1.propTypes = propTypes;

export default Step1;
