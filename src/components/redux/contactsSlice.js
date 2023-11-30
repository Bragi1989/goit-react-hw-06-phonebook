import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('contacts');
    return serializedState ? JSON.parse(serializedState) : { items: [], filter: '' };
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return { items: [], filter: '' };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('contacts', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: loadState(),
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;

      if (name && number) {
        const existingContactIndex = state.items.findIndex(
          (contact) => contact.name.toLowerCase() === name.toLowerCase()
        );

        if (existingContactIndex === -1) {
          state.items.push({ id, name, number });
        }
      }
      saveState(state);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
      saveState(state);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
      saveState(state);
    },
    clearContacts: (state) => {
      state.items = [];
      saveState(state);
    },
  },
});

const { actions, reducer } = contactsSlice;
export const { addContact, deleteContact, updateFilter, clearContacts } = actions;
export default reducer;