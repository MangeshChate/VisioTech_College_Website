import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <footer className="text-center text-lg-start  text-muted" >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block ">
          
        </div>
        <div className=''>
        
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">VisioTech 2024</h6>
              <p>
                Address: <br />
                MGM's College Of Engineering, <br />
                Near Airport, off Nanded-Nagpur Highway, <br />
                Nanded-431605.
              </p>
             
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                
                Email: visiotech@mgmcen.ac.in
              </p>
              <h6 className="text-uppercase fw-bold mb-3 mt-3">Follow Us On</h6>
              <a href="https://www.instagram.com/visiotech.2k24?igsh=MXhsNzcyMm83a2RhZw==" target='_blank' className='text-3xl'>
                
                <Instagram className='text-pink-700 '/>
              </a>
              
              
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Technical Support</h6>
              <div className='flex flex-col gap-3'>

              <p>
                 Mangesh Chate 
                
              </p>
                <p>
                 Atharv Bangale 
                
              </p>
                <p>
                 Pratyusha Ansapure 
                
              </p>
             
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2024 Copyright: <a className="text-reset fw-bold" href="">visiotech.info</a>
      </div>
    </footer>
  );
}

export default Footer;
