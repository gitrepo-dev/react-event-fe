import './App.css';
import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
const NotFound = React.lazy(() => import('pages/NotFound'));
const Home = React.lazy(() => import('pages/home'));
const CreateEvent = React.lazy(() => import('pages/createevent'));


function App() {
  return (
    <>
      <Suspense fallback={<div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
