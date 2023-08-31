import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
        <Outlet />
        <Directory />
        {/* <p>This website is still in progress, But features like user Login/sign Up, shop and checkout is completed</p> */}
    </div>
    
  );
};

export default Home;


// whenever we map through data then we have to use ID
// We can apply costome style in div tag by adding style = {{ baclgroundImage: url() }}