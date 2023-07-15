import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectContactsCount = createSelector(
  [selectContacts],
  contacts => {
    return contacts.length;
  }
);

