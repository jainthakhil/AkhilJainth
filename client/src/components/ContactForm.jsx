import React,{useState} from 'react'

const ContactForm = () => {
  const [messageSent, setmessageSent] = useState("Send Message")
  const [btnClr, setbtnClr] = useState("#0FA4AF")
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
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
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
      setmessageSent("Sent")
      setbtnClr("#49AF41")
      setTimeout(() => {
        setmessageSent("Send Message")
        setbtnClr("#0FA4AF")
        setUserData({
          name:'',
          email:'',
          message:''
        })
      }, 2000)
      

  }
  
  }

  return (
    <div className='form  min-[320px]:w-full max-[768px]:w-[60%] md:w-[60%] h-auto'>
        <form  method='POST' className='w-full h-full flex flex-col '>
            <input type="text" name='name' value={userData.name} placeholder='Your Name' className='p-3 rounded-lg my-4' onChange={handleChange}/>
            <input type="email" name='email' value={userData.email} placeholder='Your Mail' className='p-3 rounded-lg my-4' onChange={handleChange}/>
            <textarea name="message" value={userData.message} id="" rows={6} placeholder='Message' className='p-3 rounded-lg my-4' onChange={handleChange}></textarea>
            <input type='submit' className=' w-40 h-12 rounded-lg m-auto mt-4 text-white cursor-pointer transition-scale duration-200 ease-in-out active:scale-95' value={messageSent} onClick={handleSubmit} style={{backgroundColor : btnClr}}/>
        </form>
    </div>
  )
}

export default ContactForm