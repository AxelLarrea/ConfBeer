import React, { useState } from 'react';

export const ConfContext = React.createContext({}); 

const ConfProvider = ({children}) => {

    const [events, setEvents] = useState([]);
    
    return (
        <ConfContext.Provider value={{events, setEvents}}>
            {children}
        </ConfContext.Provider>
    );
}
 
export default ConfProvider;