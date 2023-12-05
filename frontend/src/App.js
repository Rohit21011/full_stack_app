import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card";
import Input from "./components/Input";
import ModelBox from "./components/ModelBox";

function App() {
  const [data, setData] = useState([]);
  const [userName,setUserName] =useState();
  const [model,setModel] = useState(false)
  const [isDeleted,setIsDeleted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [createUser,setCreateUser] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState(null);
  console.log(createUser)
  const [filter, setFilter] = useState({
    domain: 'Business Development',
    gender: 'Male',
    availability: true,
  });
  const domains=[
    "Business Development",
    "Finance",
    "IT",
    "Management",
    "Marketing",
    "Sales",
    "UI Designing"
  ]

  useEffect(() => {
    axios
      .get('http://localhost:4000',{
        params: {
          page: currentPage,
         
        },
      })
      .then((res) => {
        
        setData(res.data.results);
        setTotalPages(res.data.totalPages)
      })
      .catch((err) => console.log(err));
      handleSearch();
  }, [userName,isDeleted,currentPage,totalPages]);
const Delete = (e) => {
  const userId = parseInt(e.target.id);

  axios
      .delete(`http://localhost:4000/delete/${userId}`)
      .then((res) => {
        alert(res.data)
        setIsDeleted(!isDeleted);
      })
      .catch((err) => console.log(err));
}
const applyFilter = () => {
  console.log(filter)
  axios
  .post(`http://localhost:4000/filter`,filter)
  .then((res) => {
  console.log(res.data)
    setData(res.data)
  })
  .catch((err) => console.log(err));
}

  const handleSearch = () => {
    
    axios
      .post(`http://localhost:4000/search`,{fullName: userName})
      .then((res) => {
        setData(res.data);
      })  
      .catch((err) => console.log(err));
  }
  const handlePageChange = (newPage,e) => {
   
    setCurrentPage(newPage);
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 10; 
        const totalPagesToDisplay = Math.min(totalPages, maxPageButtons);
  
    let startPage = 1;
    let endPage = totalPagesToDisplay;
  
    if (currentPage > Math.floor(maxPageButtons / 2)) {
      startPage = currentPage - Math.floor(maxPageButtons / 2);
      endPage = currentPage + Math.ceil(maxPageButtons / 2) - 1;
    }
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <a
            href="#"
            className={`flex items-center justify-center px-4 h-10 leading-tight ${
              currentPage === i
                ? 'text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                : 'text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </a>
        </li>
      );
    }
  
    return pageNumbers;
  };
  
  return (
    <>
    <div className="flex justify-around flex-wrap  mt-4" >
    <Input type="text" placeholder="enter name to search.." onchange={(e)=>setUserName(e.target.value)}/>
    <select className="ml-3 mr-3" onChange={(e)=>setFilter({ ...filter, domain: e.target.value })}>
      {
       domains.map((value,key)=>
<option key={key} value={value}>{value}</option>
       )
      }
    </select>
    <select  onChange={(e)=>setFilter({ ...filter, gender: e.target.value })}>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    </select>
    <select className="ml-3 " onChange={(e)=>setFilter({ ...filter, availability: e.target.value })}>
    <option value="true">True</option>
    <option value="false">False</option>
    </select>
    <button  onClick={applyFilter} className="min-w-1/3 block mx-auto rounded-full bg-gray-900 dark:bg-white dark:text-black hover:shadow-lg font-semibold text-white px-6 py-2">
          Filter
          </button>
          <button  onClick={()=>setCreateUser(true)} className="min-w-1/3 block mx-auto rounded-full bg-gray-900 dark:bg-white dark:text-black hover:shadow-lg font-semibold text-white px-6 py-2">
          Create User
          </button>
    </div>
    <div className="flex flex-wrap justify-around">
      
      {data?.map((value, key) => (
        <Card
          key={key}
          id={value.id}
          first_name={value.first_name}
          last_name={value.last_name}
          gender={value.gender}
          email={value.email}
          domain={value.domain}
          available={value.available}
          avatar={value.avatar}
          update={()=>{
            setModel(true)
            setSelectedCardId(value.id);
          }}
          remove={Delete}
          
        />
        
      ))}
      {model ? <ModelBox close={() => setModel(false)} btnName="Update" id={selectedCardId}/> : null}
      {createUser ? <ModelBox close={() => setCreateUser(false)} btnName="Create" newUser="true" /> : null}
      </div>
      <nav className="flex justify-center mt-5 mb-5">
      <ul className="inline-flex -space-x-px text-base h-10">
      <li>
            <a
              href="#"
              className={`flex items-center justify-center px-4 h-10 leading-tight ${
                currentPage === 1
                  ? 'text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  : 'text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </a>
          </li>
          {renderPageNumbers()} 
        
          <li>
            <a
              href="#"
              className={`flex items-center justify-center px-4 h-10 leading-tight ${
                currentPage === totalPages
                  ? 'text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  : 'text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </a>
          </li>
      </ul>
    </nav>

    </>
  );
}

export default App;
