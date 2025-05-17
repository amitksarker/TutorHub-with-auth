// import React, { useContext } from 'react';
// import { AuthContext } from '../Context/AuthProvider';
// import { Navigate, useLocation } from 'react-router-dom';


// const PrivateRoutes = () => {
//     const { user, loading } = useContext(AuthContext);
//     const location = useLocation();
//     console.log(location);


//     if(loading){
//         return  <span className="loading loading-bars loading-lg"></span>
//     }


//     if (user) {
//         return children
//     }

//     return <Navigate to="/Login" state={location.pathname }></Navigate>
// };

// export default PrivateRoutes;


import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/Login" state={location?.pathname }></Navigate>
};

export default PrivateRoutes;
