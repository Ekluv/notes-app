/**
*
* NoteCardList
*
*/

import React from 'react';
import NoteCard from 'components/NoteCard';
// import styled from 'styled-components';


class NoteCardList extends React.Component { // eslint-disable-line react/prefer-stateless-function

    renderNotes() {
        return this.props.notes.map((note, index) => <NoteCard id={index} key={index} 
                                                      noteText={note} 
                                                      onDeleteNote={this.props.onDeleteNote}
                                                      onUpdateNote={this.props.onUpdateNote}
                                                      />)
    }

    render() {
        const notesWrapperStyles = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        };
        return (
            <div className="notes-card-wrapper" style={notesWrapperStyles}>
                {this.renderNotes()}
            </div>
        );
  }
}

NoteCardList.propTypes = {
    notes: React.PropTypes.array,
    noteText: React.PropTypes.string
};

NoteCardList.defaultProps = {
    notes: []
}

export default NoteCardList;
