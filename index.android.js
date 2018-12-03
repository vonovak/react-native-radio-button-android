import React from 'react';
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  requireNativeComponent,
  ViewPropTypes
} from 'react-native';

class RadioButton extends React.Component {

  _onChange = (event) => {
    this.props.onChange && this.props.onChange(event);
    this.props.onValueChange && this.props.onValueChange(event.nativeEvent.event);
  }

  render() {
    return (
      <RCTRadioButton
        style={[styles.radioButton, this.props.style]}
        on={this.props.value}
        disabled={this.props.disabled}
        onChange={this._onChange}
        />
    );
  }
}


RadioButton.defaultProps = {
  value: false,
  disabled: false,
};

const styles = StyleSheet.create({
  radioButton: {
    height: 27,
    width: 27,
  },
});

RadioButton.propTypes = {
  value: PropTypes.bool,
  text: PropTypes.string,
  onValueChange: PropTypes.func,
  disabled: PropTypes.bool,
  ...ViewPropTypes
};

const RCTRadioButton = requireNativeComponent('RCTRadioButtonAndroid', RadioButton, {
  nativeOnly: { onChange: true, on: true }
});
export default RadioButton;
