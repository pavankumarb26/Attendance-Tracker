import React from 'react'
import { TypeAnimation } from "react-type-animation";

const Search = () => {
  return (
    <div className='pt-5'>
    <div className='w-70 mx-auto bg-gray-900 text-slate-200 text-xs rounded-md p-2 flex justify-center items-center font-bold'>
      <TypeAnimation
              sequence={[
                'Search "BEEE"',
                ,
                1000,
                'Search "MEFA"',
                ,
                1000,
                'Search "CSE"',
                ,
                1000,
                'Search "JAVA"',
                1000,
                'Search "EG"',
                ,
                1000,
                'Search "PYTHON"',
                ,
                1000,
                'Search "UHEV"',
                ,
                1000,
                'Search "THERMODYNAMICS"',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
    </div></div>
  )
}

export default Search
