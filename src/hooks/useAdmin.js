import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setLoading] = useState(true)
    const email = user?.email
    useEffect(() => {
        fetch(`https://desolate-bayou-39842.herokuapp.com/admin/${email}`, {
            method: 'GET',
            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {

                setAdmin(data.admin)
                setLoading(false)
            })
    }, [user])

    return [admin, adminLoading]

};

export default useAdmin;