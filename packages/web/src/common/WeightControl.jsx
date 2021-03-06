import React from 'react';

import Field from './Field.jsx';

export default class WeightControl extends React.Component {
  constructor(props) {
    super(props);

    this.options = [];
  }

  render() {
    return (
      <Field name={this.props.name}>
        <input className='input select' required name={this.props.name} onChange={this.props.onChange} type='number' value={this.props.value} />
      </Field>
    )
  }
}
