import { Link } from 'react-router-dom';
import indianBanks from './indianbanks';

const Bank = () => {
  const banksData = indianBanks;

  return (
    <div className='p-5 banker' style={{backgroundColor:"#f8f9fa", position:"relative", top:"200px",}}>

    <div className='container-xl'>
      <div className='text-center'>
      <h1 className='fw-bolder'>List of Bank Our Partners</h1>
      <p className='text-secondary fs-1'>Leading Banks for your financial freedom</p>
      </div>
      <div className='banks d-flex flex-wrap'>
        {banksData.map((bank, index) => (
          <div key={index} className='border border-dark rounded-4 p-3 m-5 text-center' style={{width:"200px"}}>
            <img src={bank.logo} style={{width:"100%", height:""}} className='' alt="" />
            <p className='my-2 fw-bold'>
            <Link to='/targetBank'>
              {bank.name}
              </Link>
              </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Bank;
