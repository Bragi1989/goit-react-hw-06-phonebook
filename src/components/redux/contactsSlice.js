import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('contacts');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      items: state.items,
    });
    localStorage.setItem('contacts', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: loadState() || {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;

      if (name && number) {
        const existingContact = state.items.find(
          (contact) => contact.name && contact.name.toLowerCase() === name.toLowerCase()
        );

        if (!existingContact) {
          state.items.push({ id, name, number });
        } else {
          alert('Contact is not unique!');
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