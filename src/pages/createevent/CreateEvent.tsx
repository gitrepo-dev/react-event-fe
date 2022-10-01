import { useForm } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { EventBanner } from "assets";

export default function CreateEvent() {

  const dispatch = useDispatch()

  // init status
  const [inputState] = useState({
    host_name: '',
    event_name: '',
    start_date: '',
    end_date: '',
    location: '',
  })
  const { setFormState, formErrors, isFormValid, formState, isFormDirty } = useForm(inputState)


  // submit form
  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (isFormValid()) {
      // dispatch(onLoginUser({
      //   email: formState.login_email,
      //   password: formState.login_password
      // }))
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
      <div className="text-center">

          <div className="text-3xl font-bold mt-5">Create events <span className="text-indigo-600"><br /> To know <br /></span> World better.</div>
          
        <img src={EventBanner} alt="create event" className="w-full h-auto" />
      </div>

      {/* {userCredentials?.defaultStates?.isLoading && <div data-testid="loader-wapper" className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>} */}
      <div className="flex justify-center items-center h-full w-full">
        <div className="relative mt-10">
          <form name="login_form" onSubmit={handleLogin} className="w-100 p-5 md:p-10 shadow-sm bg-white">

            <label htmlFor="host name" className="sr-only">Host Name</label>
            <input type="text" name="host_name" placeholder="Host Name*" onChange={setFormState} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
            <span className="text-red-700 h-0.5 block text-xs">{formErrors.host_name}</span>
            <br></br>

            <label htmlFor="Event name" className="sr-only">Event name</label>
            <input type="text" name="event_name" placeholder="Event Name*" onChange={setFormState} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
            <span className="text-red-700 h-0.5 block text-xs">{formErrors.event_name}</span>
            <br></br>

            <label htmlFor="Start Date" className="sr-only">Start Date</label>
            <input type="date" name="start_date" placeholder="Start Date*" onChange={setFormState} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
            <span className="text-red-700 h-0.5 block text-xs">{formErrors.start_date}</span>
            <br></br>

            <label htmlFor="End Date" className="sr-only">End Date</label>
            <input type="date" name="end_date" placeholder="End Date*" onChange={setFormState} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
            <span className="text-red-700 h-0.5 block text-xs">{formErrors.end_date}</span>
            <br></br>

            <label htmlFor="Location" className="sr-only">Location</label>
            <input type="text" name="location" placeholder="Location*" onChange={setFormState} className="w-full focus:outline-0 px-4 py-2 rounded border-slate-200 border-2" />
            <span className="text-red-700 h-0.5 block text-xs">{formErrors.location}</span>
            <br></br>

            <button disabled={!isFormDirty} type="submit" className={`${isFormDirty ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-400 cursor-no-drop'} 'px-8 py-2 text-center text-white  rounded  w-full duration-100`}>Let's Go...</button>
          </form>
        </div>
      </div>
    </div>
  )
}
