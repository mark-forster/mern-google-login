import React, { useEffect } from 'react'
import { useNavigate, useSearchParams} from 'react-router-dom'
const Dashboard = () => {
    const [searchParams] = useSearchParams();
    const navigate= useNavigate();
    useEffect(()=>{
        // Output: the token value from the URL query string  e.g., "?token=your_token_value"
        const token = searchParams.get('token');
        if(token){
            localStorage.setItem('token', token);
            navigate('/')
        }
        else{

        }
     },[searchParams]
    )
  return (
    <>
        TokenWIthBe:{searchParams.get("token")}
    </>
  )
}

export default Dashboard