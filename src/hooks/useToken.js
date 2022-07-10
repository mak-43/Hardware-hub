import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const currentUser = { email: email }
        if (email) {
            fetch(`https://desolate-bayou-39842.herokuapp.com/user/${email}`, {
                method: 'put',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data)
                    const token = data?.token
                    localStorage.setItem('accessToken', token)
                    setToken(token)
                })
        }
        console.log('user inside usetoken', user)
    }, [user])
    return [token]
};

export default useToken;