const cityLookup = async (event) => {
     event.preventDefault();

        const searchCity = document.getElementById('searchText').value;
        document.location.replace(`/citySearch/${searchCity}`);       
    };


document.querySelector('#searchButton').addEventListener('click', cityLookup);
