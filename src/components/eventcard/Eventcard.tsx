import { Banner } from "assets";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetEvents } from "redux/actions/eventActions";
import { getEvent } from "redux/reducers/eventReducer";

export default function Eventcard() {

  // init
  const dispatch = useDispatch()
  const { defaultStates: { isLoading }, data } = useSelector(getEvent)
  useEffect(() => {
    dispatch(onGetEvents())
  }, [dispatch])

  return (
    <div className="bg-gray-200 rounded-md">
      <img src={Banner} alt="banner" className="w-full h-auto" />
      <div className="p-5">
        <h4 className="text-indigo-600 text-xl font-bold">Movie night</h4>
        <small className="text-gray-500">&#9995; Hosted by <b className="text-gray-600">Elysia</b></small>
        <div className="bg-white my-5 p-3 text-md rounded-md flex align-center justify-between">
          <span className="flex items-center"> <b className="mr-5">14</b>  responses . <span className="text-indigo-600"> see guests</span> </span>
          <span className="bg-indigo-600 rounded-md px-3 py-1 text-white">&#129309; Invite</span>
        </div>

        <ul className="pt-5">

          {isLoading ? (<div data-testid="loader-wapper" className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>) : ( 
            <>
            {data?.length > 0 ? (
              <li className="mb-5 grid grid-cols-5 gap-5 cursor-pointer hover:bg-white hover:rounded-md hover:pr-2">
              <span className="bg-white p-3 rounded-md">
                <img src={Banner} alt="event-img" className="w-20 h-auto" />
              </span>
              <span className="col-span-3">
                <span className="font-bold text-blud-600 block">18 Auguest 6:00PM</span>
                <span className="font-bold text-gray-700 block text-sm"><span className="font-normal">to</span> 19 Auguest 6:00PM</span>
              </span>
              <span className="flex items-center justify-end">
                <span className="font-bold text-gray-500 font-xl">{'>'}</span>
              </span>
            </li>
            ): "There is no events."}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
