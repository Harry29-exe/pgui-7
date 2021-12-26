import React, {PropsWithChildren} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {MockAuth} from "../logic/MockAuth";

const PrivateRoute = (props: PropsWithChildren<any>) => {
    let location = useLocation();

    if(!MockAuth.isAuthenticated) {
        return <Navigate to="/login" state={{from: location}}/>
    }

    return props.children;
};

export default PrivateRoute;