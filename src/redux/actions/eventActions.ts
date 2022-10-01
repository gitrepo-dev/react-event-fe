import { eventData } from 'interfaces/event';
import Types from 'redux/types/eventTypes';

/***
 * get all the events
 * @param {''}
 * @return {''}
 * 
***/
export const onGetEvents = () => ({
    type: Types.GET_EVENTS,
    payload: []
});


/***
 * get add events
 * @param {'object'}
 * @return {''}
 * 
***/
export const createEvent = (data: eventData) => ({
    type: Types.CREATE_EVENT,
    payload: data
});



/***
 * delete event
 * @param {'uuid'}
 * @return {''}
 * 
***/
export const deleteEvent = (uuid: string) => ({
    type: Types.DELETE_EVENT,
    payload: uuid
});