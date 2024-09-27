// import { data } from "../constant/constant";
import React, { useEffect, useState } from 'react';

 

const MainTable = () => {
  const [tableData, setTableData] = useState([]); // Changed from `data` to `tableData`

  useEffect(() => {
    // Make API call
    fetch('https://66f651c3436827ced9769e49.mockapi.io/datas')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!tableData.length) {
    return <div>Loading...</div>;
  }

  return (
    <table className="table-auto w-full mt-[4rem">
      <thead className='sticky top-[3.5rem] transition-all duration-300 bg-dark text-light z-10 h-10 montserrat'>
        <tr>
          <th>ID</th>
          <th>PROJECT TITLE</th>
          <th>PM</th>
          <th>DEADLINE</th>
          <th>STATUS</th>
          <th>MEMBER</th>
          <th>CLIENT/PIC</th>
          <th>FINAL FILE</th>
          <th>BA</th>
          <th>NOTE</th>
        </tr>
      </thead>
      <tbody className='text-center border-collapse'>
        {tableData.map((row, index) => (
          <tr className='cursor-pointer hover:opacity-50 montserrat border-b border-gray-200' style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#E8E8E8' }} key={row.id}>
            <td className=' px-2 border-r border-gray-200 border-opacity-25'>{row.id}</td>
            <td className=' px-2 border-r border-gray-200 border-opacity-25'>{row.title}</td>
            <td className=' px-2 border-r border-gray-200 border-opacity-25'>{row.pm}</td>
            <td className=' px-2 border-r border-gray-200 border-opacity-25'>{row.deadline}</td>
            <td className=' px-2 border-r border-gray-200 border-opacity-25'>{row.status}</td>
            <td className=' px-2 border-r border-gray-200 border-opacity-25'>{row.member}</td>
            <td className=' px-2 border-r border-gray-200 border-opacity-25'>{row.client}</td>
            <td className=' px-2 border-r border-gray-200 border-opacity-25'>{row.final}</td>
            <td className=' px-2 border-r border-gray-200 border-opacity-25'>{row.ba}</td>
            <td className=' px-2 border-r border-gray-200 border-opacity-25'>{row.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MainTable;
