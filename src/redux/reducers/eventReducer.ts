
  import { createSlice } from '@reduxjs/toolkit';
  import { eventStateType, eventActionType } from 'interfaces/event';

  const initialState: eventStateType = {
    defaultStates: {
      isLoading: false,
      message: '',
      action: '',
      success: false
    },
    data: []
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEventStates: (state, action: any) => {
          state.defaultStates = action.payload
        },
        setEvent: (state, action: eventActionType) => {
           // @ts-ignore
          state.data = action.payload.data;
        }
    },
});

export const { setEvent, setEventStates } = eventSlice.actions;
export const getEvent = (state: any) => state.event;
export default eventSlice.reducer;