export const storage = () => {
    // get favorites from local storage or empty array
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // register click event listener
    document.querySelector('.result-container').addEventListener('click', function (e) {
        const id = e.target.id,
            item = e.target,
            index = favorites.indexOf(id);
        // return if target doesn't have an id (shouldn't happen)
        if (!id) return;
        // item is not favorite
        if (index == -1) {
            favorites.push(id);
            item.className = 'job_fav fav';
            // item is already favorite
        } else {
            favorites.splice(index, 1);
            item.className = 'job_fav';
        }
        // store array in local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });

    // add class fav class if shown and favorite
    favorites.map((favorite) => {
        if (document.getElementById(favorite)) {
            document.getElementById(favorite).classList.add('fav');
        }
    })

}