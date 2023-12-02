import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      if (Array.isArray(action.payload)) {
        const newContacts = action.payload.filter((newContact) => {
          const existingContactIndex = state.items.findIndex(
            (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
          );
          return existingContactIndex === -1;
        });

        state.items.push(...newContacts);
      } else {
        const { id, name, number } = action.payload;

        if (name && number) {
          const existingContactIndex = state.items.findIndex(
            (contact) => contact.name.toLowerCase() === name.toLowerCase()
          );

          if (existingContactIndex === -1) {
            state.items.push({ id, name, number });
          } else {
            alert('Contact is not unique!');
          }
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
