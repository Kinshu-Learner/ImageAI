import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, CreatePost } from './pages/index';
import logo from './assets/logo.svg'


function App() {
  return (
    <BrowserRouter>

      <header className='w-full flex justify-between items-center py-4 px-4 sm:px-8 border-b border-slate-100'>

        <Link to='/'><img src={logo} alt="logo" className='w-28 object-contain' /></Link>

        <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] px-4 py-2 text-white rounded-md hover:shadow-md hover:shadow-gray-300 hover:opacity-80 duration-200'>Create</Link>

      </header>

      <main className='w-full sm:p-8 px-4 py-8 bg-gray-50 min-h-[calc(100vh-73px)]'>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
        </Routes>

      </main>

    </BrowserRouter>
  );
}

export default App;
