
export type eventData = {
    uuid: string;
    host_name: string;
    event_name: string;
    start_date: string;
    end_date: string;
    location: string;
};

export interface eventStateType {
    defaultStates: {
        isLoading: boolean;
        message: string;
        success: boolean;
        action: string;
    },
    data: eventData[] | []
};

export interface eventActionType {
    type: string;
    payload: eventData[];
};