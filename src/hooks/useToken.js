import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {

        const email = user?.user?.email
        console.log(user?.user?.photoURL)
        const currentUser = {
            email: user?.user?.email,
            name: user?.user?.displayName,
            photo: user?.user?.photoURL
        }
        console.log(currentUser)
        if (email) {
            fetch(`https://git.heroku.com/morning-atoll-82384.git /user/${email}`, {
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
        console.log(currentUser)
    }, [user])
    return [token]
};

export default useToken;