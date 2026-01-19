export const registerUser = async (username , email , password , phone , gender)=>{
    const response = await fetch ("http://localhost:5000/api/auth/register" , {
        method : "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            username,
            email,
            password,
            phone, 
            gender
        })
    });
    const data = await response.json();
    return data;
};