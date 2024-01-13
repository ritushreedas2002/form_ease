import './App.css';
import AboutUs from './components/AboutUs';
import Body from './components/Body';
import ExamContainer from './components/Examcontainer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />, 
      children:[
        {
          path:"/",
          element:<ExamContainer/>
        },
        {
          path: "/about",
          element: <AboutUs/>,  
      },
      
      ] 
    }
   
  ]);

  return (
    <div className="bg-slate-100">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
