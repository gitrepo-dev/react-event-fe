import { screen, render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { Provider } from 'react-redux'
import Login from 'components/login'
import store from 'redux/store'
import { BrowserRouter as Route } from 'react-router-dom'
import * as redux from 'react-redux';
import { onLoginUser } from "redux/actions/userAction";
import configureStore from "redux-mock-store";
import { getUserData } from "redux/reducers/userReducer";



describe('User Login form testing', () => {

  // // unit testing
  test('checking all elements present or not', () => {
    // to which components you want to test
    render(<Provider store={store}><Route><Login /></Route></Provider>)
    // get the all element for test
    const emailInput = screen.getByTestId('login_email')
    const passInput = screen.getByTestId('login_password')
    const submitbtn = screen.getByRole('button', { name: 'signIn', exact: false })
    // present or not
    expect(emailInput).toBeInTheDocument()
    expect(passInput).toBeInTheDocument()
    expect(submitbtn).toBeInTheDocument()
    // present and link must be '/signup'
    const linkP = screen.getByRole('link', { name: 'Sign up', exact: false })
    expect(linkP).toHaveAttribute('href', '/signup')
    // check class and inline styles
    const lab = screen.getByTestId('email-lebal')
    expect(lab).toBeInTheDocument()
    expect(lab).toHaveClass('sr-only second-class')
    expect(lab).toHaveStyle('background-color: none')
    // check nested element is present or not
    expect(screen.getByTestId('para')).toContainElement(linkP)
  })

  // // intigration testing
  test('login form intigration testing', () => {


    // disabled when not both input has value

    // to which components you want to test

    render(<Provider store={store}><Route><Login /></Route></Provider>)
    // get the all element for test
    const emailInput = screen.getByTestId('login_email')
    const passInput = screen.getByTestId('login_password')
    const submitbtn = screen.getByRole('button', { name: 'signIn', exact: false })

    fireEvent.change(emailInput, { target: { value: '' } })
    fireEvent.change(passInput, { target: { value: '' } })
    expect(submitbtn).toBeDisabled()


    // if both input has value then enable the submit btn
    fireEvent.change(emailInput, { target: { value: 'jay@gmail.com' } })
    fireEvent.change(passInput, { target: { value: '12346578' } })
    expect(submitbtn).toBeEnabled()
    // expect(submitbtn).not.toHaveAttribute('disabled')


    // expect(submitbtn).toHaveAttribute('disabled')
  })



  // const useSelectorMock = jest.spyOn(redux, 'useSelector');
  // const useDispatchMock = jest.spyOn(redux, 'useDispatch');

  // beforeEach(() => {
  //   useSelectorMock.mockClear();
  //   useDispatchMock.mockClear();
  // });

  // afterAll(() => {
  //   cleanup();
  // });

  // intigration testing
  // test('dispatch props', async () => {
  //   // @ts-ignore
  //   render(<Provider store={store}><Route><Login /></Route></Provider>)
  //   // mocking the selector
  //   useSelectorMock.mockImplementation(getUserData)
  //   // mocking usedispatch
  //   const mockedDispatch = jest.fn();
  //   useDispatchMock.mockReturnValue(mockedDispatch);
  //   expect(useDispatchMock).toHaveBeenCalledTimes(1)
  //   // should be call with args
  //   // expect(useDispatchMock).toHaveBeenCalledWith(onLoginUser({
  //   //   email: 'jaysean@gmail.com',
  //   //   password: '12345678'
  //   // }))
  // })

  it('testing intigration base on useSelector & useDispatch', () => {

    // mocking
    const useSelectorMock = jest.spyOn(redux, 'useSelector');
    const useDispatchMock = jest.spyOn(redux, 'useDispatch');

    // arrange
    const initialState = {
      defaultStates: {
        isLoading: true,
        message: 'message',
        success: false
      },
      data: {}
    }
    
    // mockImplementation
    useSelectorMock.mockReturnValue(initialState)
    // act
    render(<Provider store={store}><Route><Login /></Route></Provider>)
    // assertion
    expect(screen.getByTestId("loader-wapper")).toBeInTheDocument()
  })

})
