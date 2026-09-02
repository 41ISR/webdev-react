import React, { useState } from 'react';

const App = () => {
    const [C, setC] = useState(0)  
    const handle = () => {setC(e => e+1)}
    return (
      <>
       <button onClick={handle}>
        {C}
       </button>
      </>
    );
};

export default App;