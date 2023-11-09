const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
button.addEventListener('click', () => {
    if (input.value != "") {
        const li = document.createElement('li');
        const del = document.createElement('button');
        del.ariaLabel = "close button";
        li.textContent = input.value;
        del.textContent = '❌';
        li.append(del);
        list.append(li);
        del.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        })
        input.value = "";

    }
})