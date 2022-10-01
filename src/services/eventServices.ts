
/**
 * get event
 * @param {''}
 * @returns {null}
 */

import { eventData } from "interfaces/event";

export const getEventService = async (): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/get/events`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'GET',
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};



/**
 * add event
 * @param {'object'}
 * @returns {promise}
 */

 export const addEventService = async (data: eventData): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/create/event`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data),
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};


/**
 * delete event
 * @param {'uuid'}
 * @returns {promise}
 */

 export const deleteEventService = async (uuid: string): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/delete/event/${uuid}`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'DELETE',
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};