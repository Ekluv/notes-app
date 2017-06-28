/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import NoteTextField from 'components/NoteTextField';
import NoteCardList from 'components/NoteCardList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from './actions';
import { createSelector } from 'reselect';
import { makeSelectNotes } from './selectors';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      	<NoteTextField onAdd={this.props.addNote} />
      	<NoteCardList notes={this.props.notes} onDeleteNote={this.props.deleteNote} onUpdateNote={this.props.updateNote} />
      </div>
    );
  }
}


const mapStateToProps = createSelector(
  makeSelectNotes(),
  (state) => ({ notes:  state.list})
);

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({...homeActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)