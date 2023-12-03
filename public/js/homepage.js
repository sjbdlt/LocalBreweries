const cityLookup = async (event) => {
     event.preventDefault();

        const searchCity = document.getElementById('searchText').value;

        try {
            const response = await fetch('/citySearch', {
                method: 'POST',
                body: JSON.stringify({ searchCity }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                // const apiData = await response.json();
                // console.log(apiData);
            } else {
                console.error('Error in API request:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };


document.querySelector('#searchButton').addEventListener('click', cityLookup);
