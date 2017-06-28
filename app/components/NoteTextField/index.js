/**
*
* NoteTextField
*
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

// import styled from 'styled-components';


class NoteTextField extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          value: '',
          showError: false
        };
      }

    handleTouchTap() {
        if (!this.state.value) {
            this.setState({showError: true});
            return;
        }
        this.props.onAdd(this.state.value);
        this.setState({
            open: true,
            value: ''
        });
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    onTextChange(e) {
        if(this.state.showError) {
            this.setState({showError: false});
        }
        this.setState({value: e.target.value});
    }

    render() {
        const wrapperStyle = {
            width: '60%',
            margin: 'auto',
            padding: '10px'
        };
        const buttonStyle = {
            display: 'block',
            width: '50%',
            margin: 'auto'
        };
        return (
          <div style={wrapperStyle}>
            <div>
              <TextField
              hintText="Note"
              floatingLabelText="Write a Note"
              multiLine={true}
              fullWidth={true}
              value={this.state.value}
              onChange={this.onTextChange.bind(this)}
              errorText={this.state.showError ? 'Required': ''}
            />
            <RaisedButton
              onTouchTap={this.handleTouchTap.bind(this)}
              primary={true}
              label="Add Note"
              style={buttonStyle}
            />
            <Snackbar
              open={this.state.open}
              message="Note Saved"
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose.bind(this)}
            />
            </div>
          </div>
        );
  }
}

NoteTextField.propTypes = {

};

export default NoteTextField;
