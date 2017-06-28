/**
*
* NoteCard
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
// import styled from 'styled-components';


class NoteCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.availableColors = ['#ff3860', '#ffdd57', '#3273dc', '#00d1b2', '#23d160'];
        this.state = {
            color: this.props.color || '#fff',
            activeIndex: null,
            noteText: this.props.noteText,
            open: false
        };
    }

    onPalletClick(color, index) {
        this.setState({color: color, activeIndex: index});
    }


    getClass(index) {
        return 'pallet '+ ((index === this.state.activeIndex) ? 'active' : '');
    }

    renderPallets() {

        return this.availableColors.map((color, index) => <span 
                                                          className={this.getClass(index)}
                                                          key={index} 
                                                          style={{background: color}}
                                                          onClick={() => this.onPalletClick(color, index)}
                                                          />
        );
    }

    onKeyPress(e) {
        this.setState({noteText: e.target.innerText + e.key})
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    onUpdate() {
        this.setState({open: true})
        this.props.onUpdateNote(this.state.noteText, this.props.id)
    }

    render() {
        const style = {
            minHeight: 100,
            margin: '20px',
            textAlign: 'center',
            padding: '15px',
            background: this.state.color,
            position: 'relative'
        };
        const noteCardStyles = `
            .note-card {
                width: 25%;
            }

            .note-card p:focus {
                outline: none;
            }

            .paper-note:hover {
                box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px !important;
            }

            .pallet {
                padding: 7px;
                border-radius: 50%;
                display: inline-block;
                bottom: 20px;
                margin: 0 4px;
                cursor: pointer;
            }

            .pallet.active {
                border: 1px solid #fff;
                transform: scale(1.2);
            }
            .icons {
                position: absolute;
                right: 13px;
                top: 5px;
            }
            .icons .fa {
                margin-left: 10px;
                cursor: pointer;
                transition: all 200ms linear;
            }
            .icons .fa:hover {
                transform: scale(1.2);
            }

            @media only screen and (max-width: 768px) {
                .note-card {
                    width: 100%;
                }
            }
        `;
        return (
            <div className="note-card">
                <Paper zDepth={1} style={style} className="paper-note">
                    <p contentEditable={true} suppressContentEditableWarning onKeyPress={this.onKeyPress.bind(this)}>{this.props.noteText}</p>
                    <div className="pallets">
                        {this.renderPallets()}
                    </div>
                    <div className="icons">
                        <i className="fa fa-floppy-o" title="Save" onClick={this.onUpdate.bind(this)}/>
                        <i className="fa fa-trash-o" title="Delete" onClick={() => this.props.onDeleteNote(this.props.id)}/>
                    </div>
                </Paper>
                <Snackbar
                  open={this.state.open}
                  message="Note Updated"
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose.bind(this)}
                />
                <style>{noteCardStyles}</style>
            </div>
        );
    }
}

NoteCard.propTypes = {
    noteText: React.PropTypes.string,
    color: React.PropTypes.string
};

export default NoteCard;
