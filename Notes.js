const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNoteButton');
const notesList = document.getElementById('notesList');
const searchInput = document.getElementById('searchInput');

document.addEventListener('DOMContentLoaded', loadNotes);
addNoteButton.addEventListener('click', addNote);
searchInput.addEventListener('input', filterNotes);
notesList.addEventListener('click', handleDelete); // Use event delegation for delete button

function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText) {
        const noteId = Date.now().toString();
        const note = { id: noteId, text: noteText };
        appendNoteToList(note);
        saveNoteToLocalStorage(note);
        noteInput.value = '';
        // Optional: Provide feedback to the user
        alert('Note added!');
    } else {
        alert('Please enter a note.');
    }
}

function appendNoteToList(note) {
    const li = document.createElement('li');
    li.className = 'li-note';
    li.setAttribute('data-id', note.id);
    li.innerHTML = `
        <span>${note.text}</span>
        <button class="delete-button" aria-label="Delete note">X</button>
    `;
    notesList.appendChild(li);
}

function saveNoteToLocalStorage(note) {
    const notes = getNotesFromLocalStorage();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const notes = getNotesFromLocalStorage();
    notes.forEach(note => appendNoteToList(note));
}

function getNotesFromLocalStorage() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

function handleDelete(event) {
    if (event.target.classList.contains('delete-button')) {
        const noteElement = event.target.closest('li');
        const noteId = noteElement.getAttribute('data-id');
        deleteNote(noteId);
    }
}

function deleteNote(noteId) {
    const noteElement = notesList.querySelector(`li[data-id='${noteId}']`);
    if (noteElement) {
        notesList.removeChild(noteElement);
        // Optional: Provide feedback to the user
        alert('Note deleted!');
    }
    let notes = getNotesFromLocalStorage();
    notes = notes.filter(note => note.id !== noteId);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function filterNotes() {
    const searchTerm = searchInput.value.toLowerCase();
    const notes = notesList.querySelectorAll('li');
    notes.forEach(note => {
        const noteText = note.querySelector('span').innerText.toLowerCase();
        note.style.display = noteText.includes(searchTerm) ? '' : 'none';
    });
}
