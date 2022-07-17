import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setLoading] = useState(true)
    // const email = user?.email
    useEffect(() => {
        fetch(`https://morning-atoll-82384.herokuapp.com/admin/${user?.email}`, {
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