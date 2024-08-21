import React,{useState} from 'react'

const ContactForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: ""
  })
  let inputName, inputValue;

  const handleChange = (e)=>{
    inputName = e.target.name;
    inputValue = e.target.value;

    setUserData({...userData, [inputName]: inputValue});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {name, email, message} = userData;
    const response = await fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name, email, message
      })
    });
    const data = await response.json();
    if(data.status === 422 || !data){
      console.log(" error.");
  } else{
      console.log("Successfull.");
      setUserData({
        name:'',
        email:'',
        message:''
      })

  }
  
  }

  return (
    <div className='form  min-[320px]:w-full max-[768px]:w-[60%] md:w-[60%] h-auto'>
        <form  method='POST' className='w-full h-full flex flex-col '>
            <input type="text" name='name' value={userData.name} placeholder='Your Name' className='p-3 rounded-lg my-4' onChange={handleChange}/>
            <input type="email" name='email' value={userData.email} placeholder='Your Mail' className='p-3 rounded-lg my-4' onChange={handleChange}/>
            <textarea name="message" value={userData.message} id="" rows={6} placeholder='Message' className='p-3 rounded-lg my-4' onChange={handleChange}></textarea>
            <input type='submit' className=' w-40 h-12 bg-[#0FA4AF] rounded-lg m-auto mt-4 text-white cursor-pointer' value='Send Message' onClick={handleSubmit}/>
        </form>
    </div>
  )
}

export default ContactForm