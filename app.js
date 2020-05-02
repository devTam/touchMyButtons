
// ---  FUNCTIONALITY ---
document.querySelector('.btn11').addEventListener('click', changeTheme);

function changeTheme() {
    const root = document.documentElement;
    if(root.hasAttribute('theme')) {
        root.removeAttribute('theme');
    }else {
        root.setAttribute('theme', 'blue');
    }
}