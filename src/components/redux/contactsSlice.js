import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
   addContact: (state, action) => {
  state.items = [...state.items, action.payload];
},
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
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