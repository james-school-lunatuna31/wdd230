const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChaptersList() || [];
//extra
const clear_button = document.getElementById('clear');

clear_button.addEventListener('click', () => {
    localStorage.clear();
    chaptersArray = [];
    while (list.firstChild) { // Remove all list items
        list.removeChild(list.firstChild);
    }
})

button.addEventListener('click', () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});
// BOM ACtivity
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(chapter) {
    const li = document.createElement('li');
    const del = document.createElement('button');
    del.classList.add("added");
    del.ariaLabel = "close button";
    li.textContent = chapter;
    del.textContent = '❌';
    li.append(del);
    list.append(li);
    del.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);       //remove from the chapter list

        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChaptersList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // chop off the 'x'
    chaptersArray = chaptersArray.filter(item => item !== chapter); //get everything that is NOT the selected chapter
    setChapterList(); // set what we have to that everything
}

