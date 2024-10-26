function filterNames() {
    // Get the value of the search input
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    // Get the list of names
    const ul = document.getElementById('nameList');
    const li = ul.getElementsByTagName('li');
    // Loop through all list items and hide those that don't match the search
    query
    for (let i = 0; i < li.length; i++) {
    const name = li[i].textContent || li[i].innerText;
    if (name.toLowerCase().indexOf(filter) > -1) {
    li[i].style.display = '';
    } else {
    li[i].style.display = 'none';
    }
    }
}