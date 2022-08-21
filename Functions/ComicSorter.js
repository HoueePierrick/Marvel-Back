// Function to sort comics and allow for a search per letter

const ComicSorter = (object, order, letter, route) => {
    let ComicList = []
    if(route === "per char") {
        ComicList = object.comics; // just the array with comics
    } else {
        ComicList = object.results; // just the array with comics
    }

    let RankedArray = []; // array containing the same table with a key for rank and a key for first letter
    let Interim = []; // array sorted by rank;
    let Result = [];

    for(let i = 0; i < ComicList.length; i++) {
        let rank = 1;
        let ranked = ComicList[i];
        let first = "";
        for(let j = 0; j < ComicList.length; j++) {
            if(ComicList[i].title > ComicList[j].title) {
                rank = rank + 1;
            } 
        }
        first = ComicList[i].title[0];
        ranked.rank = rank;
        ranked.first = first;
        RankedArray.push(ranked)
    }

    if(order === "inverted") { // Rank titles by inversed alphabetical order
        for(let k = 1; k <= RankedArray.length; k++) {
            for(let l = 0; l < RankedArray.length; l++)
            if(k === RankedArray[l].rank) {
                Interim.unshift(RankedArray[l])
            }
        }
    } else { // Default : rank titles by alphabetical order
        for(let k = 1; k <= RankedArray.length; k++) {
            for(let l = 0; l < RankedArray.length; l++)
            if(k === RankedArray[l].rank) {
                Interim.push(RankedArray[l])
            }
        }
    }

    console.log(Interim)

    if(letter && letter.length === 1) {
        for(let i = 0; i < Interim.length; i++) {
            if(Interim[i].first === letter.toUpperCase()) {
                Result.push(Interim[i])
            }
        }
    } else {
        Result = Interim;
    }

    // console.log(Result)
    return Result;
}

module.exports = ComicSorter;
// c is bigger than b
