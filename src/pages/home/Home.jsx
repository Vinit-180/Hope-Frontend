import React from 'react'
import dashboardPreview from "../../assets/Dashboard.svg"
import walletRemove from "../../assets/wallet-remove.png"
import creditCard from "../../assets/credit-card-not-accept.png"
import homePageBg from "../../assets/HomePagebg.svg"
import navBg from "../../assets/Navbg.svg"
const Home = () => {
  return (
    <div className="  bg-gradient-to-b from-gray-900 to-black">
      <img src={navBg} alt=""
      className='object-cover absolute inset-0'
      />
      {/* flex flex-col  */}
      <div className=" py-10 items-center h-full m-auto flex flex-col ">
        <h1 className="text-4xl font-bold text-white">
        Welcome to the world of
        AI driven financial solutions
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Join us on this transformative journey towards a more prosperous and empowered tomorrow.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg">
          Consult Our Experts
        </button>
      </div>
    <div className='relative my-4 bg-contain' 
    style={{backgroundImage:`url(${homePageBg})`}} 
    >
      <div className=" relative flex justify-center items-center">
        <img 
          src={dashboardPreview}
          alt="Bank Dashboard"
          className="w-3/4 max-w-5xl object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-4 left-10 px-4 py-8 rounded-xl shadow-lg text-white
        font-serif
      custom-gradient-border backdrop-blur-2xl 
      ">
        <p className='flex flex-col text-wrap'>
          <img src={creditCard} alt="" className='h-10 w-10' />
          <span className='w-28'>
          No Annual Fees.
          </span>
          </p>
      </div>
      </div>
      <div className="absolute bottom-1/3 left-40 px-4 py-6 rounded-xl shadow-lg 
      custom-gradient-border  text-white backdrop-blur-xl
      ">
        <p className='flex flex-col text-wrap'>
          <img src={walletRemove} alt="" className='h-10 w-10' />

          No Joining Fees.
          </p>
      </div>
      <div className=" absolute right-12 w-25 px-2 py-6 rounded-lg shadow-lg
      custom-gradient-border backdrop-blur-2xl  text-white
      ">
        <p>No Rewards Redemption Fees.</p>
      </div>
      </div>
      {/* Bank Dashboard Image */}
    </div>
  )
}

export default Home
