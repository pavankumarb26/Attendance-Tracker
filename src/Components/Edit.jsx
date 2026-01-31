import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import axios from 'axios';

const Edit = ({ close, pdfData }) => {
  const initialBranch = pdfData.Branch;
  const initialYear =pdfData.Year;

  const allBranches = [
    'CSE', 'ECE', 'EEE', 'MECH', 'CIVL',
    'IT', 'AIDS', 'CS-AI', 'CS-D', 'CS-C', 'ECM'
  ];

  const [data, setData] = useState({
    branch: initialBranch,
    year: initialYear
  });

  const handleBranchChange = (e) => {
    const value = e.target.value;

    if (!value) return;

    if (value === "ALL") {
      setData((prev) => ({
        ...prev,
        branch: [...allBranches]
      }));
      return;
    }

    setData((prev) => ({
      ...prev,
      branch: prev.branch.includes(value)
        ? prev.branch
        : [...prev.branch, value]
    }));
  };

  const removeBranch = (branchToRemove) => {
    setData((prev) => ({
      ...prev,
      branch: prev.branch.filter(b => b !== branchToRemove)
    }));
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    setData((prev) => ({
      ...prev,
      year: prev.year.includes(value) ? prev.year : [...prev.year, value]
    }));
  };
  const removeYear = (yearToRemove) => {
    setData((prev) => {
        return {
            ...prev,
            year : prev.year.filter(y => y!== yearToRemove)
        }
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const redgNo = localStorage.getItem("redgNo");
      if (!redgNo) {
        alert("Please login to continue");
        return;
      }

      await axios.put("https://database-9qqy.onrender.com/pdf/update", {
        id : pdfData.id,
        Branch: data.branch,
        Year: data.year,
        RedgNo: redgNo
      });

      close();
    } catch (error) {
      console.error(error);
    }
    finally {
        close();
    }
  };

  return (
    <section className='fixed inset-0 flex justify-center bg-black/90 text-slate-200'>
      <div className='my-auto'>
        <div className='border border-[#222528] bg-black rounded-2xl'>
          <form className='grid p-5 gap-4' onSubmit={handleSubmit}>

            <div className='flex justify-between items-center'>
              <p className='font-bold text-emerald-500'>Update Material</p>
              <MdCancel size={20} className='cursor-pointer' onClick={close} />
            </div>

            <div className='grid grid-cols-2 items-center gap-3'>
              <label className='font-semibold text-sm'>Branch</label>
              <select
                className='bg-black border border-[#222528] text-center rounded px-2 py-1 text-sm'
                onChange={handleBranchChange}
              >
                <option value="" disabled>Select Branch</option>
                <option value="ALL">All Branches</option>
                {allBranches.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {data.branch.length > 0 && (
              <div className='flex flex-wrap gap-2'>
                {data.branch.map(b => (
                  <span
                    key={b}
                    className='bg-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2'
                  >
                    {b}
                    <MdCancel
                      size={14}
                      className='cursor-pointer'
                      onClick={() => removeBranch(b)}
                    />
                  </span>
                ))}
              </div>
            )}

            <div className='grid grid-cols-2 items-center gap-3'>
              <label className='font-semibold text-sm'>Year</label>
              <select
                className='bg-black border border-[#222528] text-center rounded px-2 py-1 text-sm'
                onChange={handleYearChange}
                required
                value={data.year[0]}
              >
                <option value="" disabled>Select Year</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
              </select>
            </div>
            {
                data.year.length > 0 && (
                    <div className='flex flex-wrap gap-2'>
                {data.year.map(b => (
                  <span
                    key={b}
                    className='bg-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2'
                  >
                    {b}
                    <MdCancel
                      size={14}
                      className='cursor-pointer'
                      onClick={() => removeYear(b)}
                    />
                  </span>
                ))}
              </div>
                )
            }

            <button className='bg-emerald-500 text-black rounded py-1.5 font-bold text-sm'>
              Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Edit;
