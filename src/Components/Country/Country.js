import React from 'react';

const country = (props) => {
    
    const {name, population, capital, flags} = props.country ;
    const flagsStyle = {
        height : '150px' 
    }
    return (
        <div>
            <h2>This is '{name.common}'</h2>
            <h3>Population is : {population} and Capital is {capital}</h3>
            <img style={flagsStyle} src={flags.png}/> <br/>
            <button onClick={() => props.handlerAddBtn(props.country)}>Add Country</button>
        </div>
    );
};

export default country;