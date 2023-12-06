import { useEffect, useState } from "react";
import InputBox from "./Input";
import axios from "axios";


const ModelBox = ({close,id,btnName,newUser}) => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
const [email,setEmail] = useState("");
    const [domain,setDomain] = useState("Business Development")
    const [gender,setGender] = useState("Male")
console.log(newUser)
    const domains=[
        "Business Development",
        "Finance",
        "IT",
        "Management",
        "Marketing",
        "Sales",
        "UI Designing"
      ]

   
      const updateUser = () => {
        console.log("hjbjhb")
        axios
          .put(`https://crud-api-hjvr.onrender.com/update/${id}`,{
            
           first_name:firstName,
           last_name:lastName,
           email:email,
           domain:domain,
           gender:gender,
        
          })
          .then((res) => {
            alert(res.data)
            window.location.reload();
         
          })
          .catch((err) => console.log(err));
      }
      const createUser = () => {
       
        axios
          .post(`https://crud-api-hjvr.onrender.com/create`,{
           first_name:firstName,
           last_name:lastName,
           email:email,
           domain:domain,
           gender:gender,
           
          })
          .then(() => {
            alert("user created")
            
         
          })
          .catch((err) => console.log(err));
      }
  return (
    <>
      <div className="justify-center flex flex-wrap items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
         
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-bold">Update User</h3>
              <button
                onClick={close}
                
                customClass="p-1 ml-auto  border-0 text-black font-bold  float-right text-2xl leading-none outline-none focus:outline-none"
              >X</button>
            </div>
           
            <div className="relative p-4 flex-auto">
              
              <div className=" flex flex-col px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <div className="flex flex-wrap w-full justify-space">
                <InputBox
                  type="text"
                  placeholder="First Name"
                  classname="m-2"
                  onchange={(e)=>setFirstName(e.target.value)}
                />
                <InputBox
                  type="text"
                  placeholder="Last Name"
                  classname="m-2"
                  onchange={(e)=>setLastName(e.target.value)}
                />
                 <InputBox
                  type="text"
                  placeholder="E-mail"
                  classname="m-2"
                  onchange={(e)=>setEmail(e.target.value)}
                />
                </div>
              <div className="flex flex-wrap w-full justify-space">
             
                  <select className="ml-3 mr-3 m-2" onChange={(e)=>setDomain(e.target.value)}>
      {
       domains.map((value,key)=>
<option key={key} value={value}>{value}</option>
       )
      }
    </select>
    <select  className="m-2" onChange={(e)=>setGender(e.target.value)}>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    </select>
    
              </div>
               
               
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-around p-6 w-full border-t border-solid border-blueGray-200 rounded-b">
            <button onClick={newUser?createUser:updateUser} className="min-w-1/3 block mx-auto rounded-full bg-gray-900 dark:bg-white dark:text-black hover:shadow-lg font-semibold text-white px-6 py-2">
         {btnName}
          </button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default ModelBox;
