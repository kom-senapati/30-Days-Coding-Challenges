// Challenge 25
// Description:
// Write a function getData that returns a Promise. Use 
// this function to fetch data from two different APIs 
// sequentially, and return the combined result.

function getData() {
    const mealApi = "https://www.themealdb.com/api/json/v1/1/random.php";
    const cocktailApi = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    return fetch(mealApi)
        .then(response => {
            if (!response.ok) {
                throw new Error('Meal API network response was not ok');
            }
            return response.json();
        })
        .then(mealData => {
            return fetch(cocktailApi)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Cocktail API network response was not ok');
                    }
                    return response.json();
                })
                .then(cocktailData => {
                    return [mealData, cocktailData];
                });
        });
}

getData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
