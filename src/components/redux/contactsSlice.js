import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
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
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearContacts: (state) => {
      state.items = [];
    },
  },
});

export const { addContact, deleteContact, updateFilter, clearContacts } = contactsSlice.actions;
export default contactsSlice.reducer;