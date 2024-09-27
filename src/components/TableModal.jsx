import { useEffect,useState } from "react";

const TableModal = () => {
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
    <main className="flex items-center justify-center h-screen bg-light bg-opacity-30">
    <section className="relative rounded-lg  bg-dark shadow-lg w-[70rem] h-[30rem]">
   <div className="z-10">
   <button className="absolute right-2 top-2 bg-light text-dark rounded-md py-3 px-5">Close</button>
   <button className="absolute left-2 bottom-2 bg-light text-dark  rounded-md py-3 px-5">Edit</button>
   <button className="absolute right-2 bottom-2 bg-light text-dark  rounded-md py-3 px-5">Export</button>
   </div>
    </section>
    </main>
  )
}

export default TableModal