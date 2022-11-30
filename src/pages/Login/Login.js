import React from 'react';

import './Login.css';


const AIC_LOGO = 'https://aic.nsw.edu.au/wp-content/uploads/2015/08/aic_resize.png';
const SC_LOGO = 'https://sydneycollege.nsw.edu.au/wp-content/uploads/2020/07/SYDNEY-COLLEGE.png';
const RightSide_img = 'https://aic.nsw.edu.au/wp-content/uploads/elementor/thumbs/gu-2321-p6d9v1nd1r8tgwkjchh17xh6849qpgwbdnexyk1n6o.jpg';
function Login(){
  return(
    <div className = "Login">
      <div className = "Login__LeftSide">
        <div className="Login__Form">
          <h1 className ="Login__Title">Welcome Back</h1>
          <h2 className = "Login__Message">Login into your account </h2>

          {/* logo boxes*/}
          <div className = "Login__LogoSelection">
            <div className = "logo">
              <img src = {AIC_LOGO}/>
              <div>AIC</div>
            </div>

            <div className = "logo">
              <img src = {SC_LOGO} alt="aic logo"/>
              <div>SC</div>
            </div>
          </div>
          
          <h3 className = "Login__Suggest"> Or Continue with </h3>
        </div>
      </div>
      <div className="Login__RightSide">
        <div className="contentBox">
          TEST
        </div>
      </div>
    </div>
    

  );
}
 export default Login;