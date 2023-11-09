import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const LoadingIndicator = () => {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = (e) => {
            setTimeout(() => {
                setPageLoaded(true)
            },2000);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (pageLoaded) {
        return <Loader />;
    }

    return null;
};

export default LoadingIndicator;