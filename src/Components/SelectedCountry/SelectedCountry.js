import React from 'react';

const SelectedCountry = (props) => {
    let totalPopulation = 0;
    const selectedCountry = props.selectedCountry;
    for (let i = 0; i < selectedCountry.length; i++) {
        const selCountry = selectedCountry[i];
        totalPopulation = totalPopulation + selCountry.population;
    }
    return (
        <div>
            <h3>Country Selected : {selectedCountry.length}</h3>
            <h4>Population : {totalPopulation}</h4>
        </div>
    );
};

export default SelectedCountry;