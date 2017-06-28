import { createSelector } from 'reselect';

/**
 * Direct selector to the languageToggle state domain
 */
const selectNotes = (state) => state.get('notes');

/**
 * Select the language locale
 */

const makeSelectNotes = () => createSelector(
  selectNotes,
  (substate) => substate.toJS()
);

export {
  selectNotes,
  makeSelectNotes,
};
