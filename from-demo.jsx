import { useState } from "react";


export function FormDemo()
{

    const[userData,setUserData]=useState({name:"",age:"0",city:"select city",gender:"male"})

    const[error,setError]=useState({nameError:"",ageError:"",cityError:"",gendererror:""})

    
    function handleNameChange(e)
    {
        setUserData({
            name:e.target.value,
            age:userData.age,
            city:userData.city,
            gender:userData.gender
        })
    }

    function handleAgeChange(e)
    {
        setUserData({
            name:userData.name,
            age:parseInt(e.target.value),
            city:userData.city,
            gender:userData.gender
        })
    }

    function handleCityChange(e)
    {
          setUserData({
            name:userData.name,
            age:userData.age,
            city:e.target.value,
            gender:userData.gender
          })
    }

    function handleGenderChange(e)
    {
        setUserData({
            name:userData.name,
            age:userData.age,
            city:userData.city,
            gender:e.target.value
        })
    }

    function submitClick(e)
    {
       // console.log("testing");
        e.preventDefault();
        console.log(`name:${userData.name} \n age:${userData.age} \n city:${userData.city} \n gender:${userData.gender}`);
        alert("Data Successfully Submitted to Database...")
    }

    function HandleNameBlur(e)
    {
        if(e.target.value=="")
        {
            setError({
                nameError:"User Name is required",
                ageError:error.ageError,
                cityError:error.cityError,
                gendererror:error.gendererror
            })
        }
        else{
            setError({
                nameError:""
            })
        }
    }

    function HandleAgeBlur(e)
    {
        if(e.target.value=="")
        {
            setError({
                nameError:error.nameError,
                ageError:"User Age is required",
                cityError:error.cityError,
                gendererror:error.gendererrore
            })
        }
        else{
            setError({
                ageError:""
            })
        }
    }

    


    return(
        <>
          <div className="d-flex justify-content-center">
             <form className="w-25 bg-light m-3 p-3 border border-1 rounded-1 shadow">
               <div>
                 <h2 className="fw-bolder text-center text-info-emphasis my-3">User Registration</h2>
               </div>
                <dl>
                    <dt className="form-label">Enter User Name</dt>
                    <dd><input type="text" placeholder="Enter Name" onBlur={HandleNameBlur} onChange={handleNameChange} name="userName" className="form-control"/></dd>
                    <dd className="text-danger">{error.nameError}</dd>
                    <dt className="form-label">Enter User Age</dt>
                    <dd><input type="number" placeholder="Enter Age" onBlur={HandleAgeBlur} onChange={handleAgeChange} name="userAge" className="form-control"/></dd>
                    <dd className="text-danger">{error.ageError}</dd>
                    <dt className="form-label">City</dt>
                    <dd>
                        <select name="userCity" className="form-select m-0" onChange={handleCityChange} >
                            <option value="Select City">Select City</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                        </select>
                    </dd>
                    <dt className="form-label">Gender</dt>
                    <dd>
                        <input type="radio" name="userGender" value="male" className="form-check-input" onChange={handleGenderChange}/> <label className="form-check-label">Male</label>
                        <input type="radio" name="userGender" value="female" className="form-check-input" onChange={handleGenderChange}/> <label className="form-check-label">Female</label>   
                    </dd>
                </dl> 
                <button className="btn btn-primary w-100 my-2" onClick={submitClick}>Submit</button>
             </form>
          </div>
        </>
    )
}