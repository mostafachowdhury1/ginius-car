import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
         <div >
                 <footer   className="footer">
                <div>
                    <h3>headoffice</h3>
                    <h6>dhaka arambag</h6>
                    <h6>block:c, road : 11</h6>
                </div>
                <div>
                    <h3>our branch</h3>
                    <ul>
                        <li>
                           
                            mymensing
                        </li>
                        <li>
                            dhaka
                        </li>
                        <li>
                            chitagong
                        </li>
                    </ul>
                </div>

                <div>
                      <h3>open now</h3>

                      <ul>
                          <li>
                              friday to seturday on 10 to 8 pm 
                          </li>
                          <li>
                              every monday is closing day
                          </li>
                      </ul>
                </div>
        </footer>
         </div>
    );
};

export default Footer;