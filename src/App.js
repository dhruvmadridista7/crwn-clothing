import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

// const Navigation = () => {
//   return (
//     <div>
//       <div>
//         <h1>I am the Navigation bar</h1>
//       </div>
//       <Outlet />
//     </div>
//   );
// };

const Shop = () => {
  return <h1>I am the shop page</h1>
};

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop />}/> 
          <Route path='sign-in' element={<SignIn />} />  
        </Route>
    </Routes>
  );
};

export default App;


// whenever we map through data then we have to use ID
// We can apply costome style in div tag by adding style = {{ baclgroundImage: url() }}