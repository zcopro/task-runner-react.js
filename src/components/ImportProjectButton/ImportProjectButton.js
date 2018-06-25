// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showImportExistingProjectPrompt } from '../../actions';

import TextButton from '../TextButton';

type Props = {
  color: string,
  children: React$Node,
  showImportExistingProjectPrompt: () => any,
};

class ImportProjectButton extends Component<Props> {
  render() {
    const { color, children, showImportExistingProjectPrompt } = this.props;

    return (
      <TextButton style={{ color }} onClick={showImportExistingProjectPrompt}>
        {children}
      </TextButton>
    );
  }
}

export default connect(
  null,
  { showImportExistingProjectPrompt }
)(ImportProjectButton);
