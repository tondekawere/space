import React from 'react';
import moment from "moment";



function Footer() {

    const year = moment().year();
  return (
    <>
      <footer>
        <div className="footer-inner">
            <div>
                <a href="#">
                    <img src="./images/logo.png" alt="logo"/>
                </a>
            </div>
            <ul>
                <li>
                    <a href="#">
                        Company
                    </a>
                </li>
                <li>
                    <a href="#">
                        Location
                    </a>
                </li>
                <li>
                    <a href="#">
                        Help
                    </a>
                </li>
                <li>
                    <a href="#">
                        Advertise
                    </a>
                </li>
                <li>
                    <a href="#">
                        Terms
                    </a>
                </li>
                <li>
                    <a href="#">
                        Privacy
                    </a>
                </li>
            </ul>
            <hr/>
            <p>© {year}<a href="http//sproutcoding.org"> sproutcoding.org</a>- All Rights Reserved</p>
            {/* <p>© 2023<a href="http//sproutcoding.org"> sproutcoding.org</a>- All Rights Reserved</p> */}
        </div>


    </footer>
    </>
  );
}

export default Footer