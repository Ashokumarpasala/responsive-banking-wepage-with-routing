import React from 'react';
import indianBanks from '../indianbanks';
import Navbar from './Navbar';
import Fotter from './Fotter'
function BankCard() {
  return (
    <>
    <Navbar />
    <div className="container-xl p-5 " style={{position:"relative",top:"50px", width:"100%"}}>
      <div className=" " style={{width:"100%"}}>
        {indianBanks.slice(0, 1).map((bank, index) => (
          <div key={index} className="col-md-4 my-3">
            <div className="d-flex bnk justify-content-between" >
                <div>

              <img src={bank.logo} className="card-img-top sbi p-5" style={{width:"900px"}} alt={`${bank.name} Logo`} />
                </div>
              <div className="mx-5 p-5 data" style={{width:"500px "}}>
                <h5 className="fw-bold fs-1">{bank.name}</h5>
                <p className="">{bank.information}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Location:</strong> {bank.location}
                  </li>
                  <li className="list-group-item">
                    <strong>Services:</strong> {bank.services.join(', ')}
                  </li>
                  {/* Add more properties as needed */}
                </ul>
                <div className="mt-3">
                  <a href='https://sbi.co.in/' className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='border rounded-4 m-5 p-5' style={{width:"100%"}}>
      <form>
        <h1>Login Bank Account</h1>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Account Holder Full Name</label>
            <input type="text" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Account Number</label>
            <input type="text" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Address</label>
            <input type="text" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Phone Number</label>
            <input type="number" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Create Account</button>
        </form>
      </div>
    </div>
    <Fotter />
    </>

  );
}

export default BankCard;
