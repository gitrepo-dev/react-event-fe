import { useEffect, useState, useCallback } from 'react'
import { emailRegx, passwordRegx, numberRegx } from 'utils/regexs'

export default function useForm(state: any, setState?: (params: any) => void) {

  //values
  const [formState, setformState] = useState({ ...state });

  //formErrors
  const [formErrors, setformErrors] = useState({ ...state });

  //set formErrors on handlechange when this state true
  const [inputChangeformErrors, setInputChangeformErrors] = useState(false);

  // set formErrors on handlechange when this state true
  const [isFormDirty, setIsFormDirty] = useState(false);

  // store previous value
  const [preVal, setPreVal] = useState({});

  // reset form
  const [resetForm, setResetForm] = useState(false);

  useEffect(() => {
    // for edit input value value
    const isValue = Object.values(formState).some((v: any) => v === '')
    if ((JSON.stringify(preVal) === JSON.stringify(formState)) || isValue) {
      setIsFormDirty(false)
    } else {
      setIsFormDirty(true)
    }

  }, [formState, preVal])

  // resetForm
  useEffect(() => {
    if (resetForm) {
      setformState({
        name: '',
        ex_type: '',
        amount: ''
      })
      setResetForm(false)
    }
  }, [resetForm])

  // validate all inputs fields
  const validation = (name: string, value: any) => {
    switch (name) {
      case 'host_name':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, host_name: 'Host name is required.' }))
        else if (value.length < 3) setformErrors((prevErr: any) => ({ ...prevErr, host_name: 'Min 3 character long.' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, host_name: '' }))
        break;
      case 'event_name':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, event_name: 'Event name is required.' }))
        else if (value.length < 5) setformErrors((prevErr: any) => ({ ...prevErr, event_name: 'Min 5 character long.' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, event_name: '' }))
        break;
      case 'start_date':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, start_date: 'Start date is required.' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, start_date: '' }))
        break;
      case 'end_date':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, end_date: 'End date is required.' }))

        else setformErrors((prevErr: any) => ({ ...prevErr, end_date: '' }))
        break;
      case 'location':
        if (!value) setformErrors((prevErr: any) => ({ ...prevErr, location: 'Location is required.' }))
        else if (value?.length < 5) setformErrors((prevErr: any) => ({ ...prevErr, location: 'Min 5 character long.' }))
        else setformErrors((prevErr: any) => ({ ...prevErr, location: '' }))
        break;
      default:
        break;
    }
  }


  // this fn will execute on each key pess in inputs of form
  const setFormState = (event: { persist: () => void; target: { name: string; value: any; }; }) => {
    event.persist();
    const { name, value } = event.target
    validation(name, value)
    // if (inputChangeformErrors) validation(name, value)
    setformState({ ...formState, [name]: value })
  }

  // this fn will execute when submit form
  const isFormValid = () => {

    // send input key and value one by one to check validation
    // for (const key in state) {
    //   validation(key, formState[key]);
    // }

    const isError = Object.values(formErrors).some((err: any) => err !== '')
    const isValue = Object.values(formState).some((v: any) => v === '')

    if (isError || isValue) {
      setInputChangeformErrors(true)
      return false
    }
    else {
      setPreVal(formState)
      setIsFormDirty(true)
      return true
    }
  }




  return {
    formState,
    setFormState,
    isFormValid,
    formErrors,
    isFormDirty,
    setResetForm
  }
}
