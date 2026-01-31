import React from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import Add from './Add';
import Search from './Search';
import Maintainance from './Maintainance';

const Material = () => {
  const navigate = useNavigate();
  const arr = ["CSE", "ECE", "EEE", "MECH", "CIVL", "IT", "AIDS", "CS-AI", "CS-D", "CS-C", "ECM"];
  return (
    <section className=" bg-black min-h-screen">
      
      <Navbar />
      <Search/>
      <p className='text-white font-bold pt-1 text-xs text-center'>Veelu aythe pdfs share chey dude, maha aythe pass avutaru</p>
      <Add/>

      <div className='flex justify-evenly items-center gap-5 flex-wrap bg-black pb-25'>
        {
          arr.map((item, index) => {
            return (
              <div
                onClick={() => navigate(`/material/${item}`)}
                key={index} className='text-green-900 text-3xl font-extrabold bg-[#03ff81] w-41 h-20 flex items-center justify-center rounded-lg'>
                {item}
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Material