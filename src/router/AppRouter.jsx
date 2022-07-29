import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import { LoginPage } from '../auth';
import { DCPage, MarvelPage } from '../heroes';
// Ui
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='marvel' element={ <MarvelPage /> } />
        <Route path='dc' element={ <DCPage /> } />

        <Route path='login' element={ <LoginPage /> } />

        <Route path='/' element={ <Navigate to='/marvel' /> } />
      </Routes>
    </>
  )
}
