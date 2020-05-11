const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function folders(data, out) {
  const list = document.createElement('ul');
  list.setAttribute('class', 'hide');
  data.forEach(function (item) {
    const listItems = document.createElement('li');
    if (item.folder) {
      listItems.innerHTML = `<p><i class='material-icons'>folder</i>${item['title']}</p>`;
      listItems.firstChild.setAttribute('class', 'folder');
      if (!item.children) {
        const list = document.createElement('ul');
        list.setAttribute('class', 'hide empty-list');
        list.innerHTML = `<li><p class='empty'>Folder is empty</p></li>`;
        listItems.appendChild(list);
      }
    } else if (item.title && !item.folder) {
      listItems.innerHTML = `<p><i class='material-icons'>insert_drive_file</i>${item['title']}</p>`;
      listItems.firstChild.setAttribute('class', 'file');
    }
    if (item.folder) {
      if (item.children) {
        folders(item.children, listItems);
      }
    }
    if (list.parentElement) {
      if (list.parentElement.getAttribute('id')) {
        list.classList.remove('hide');
      }
    }
    list.appendChild(listItems);
    out.appendChild(list);
  });
}

folders(data, rootNode);

let paragraphs = document.querySelectorAll('p.folder').forEach(function (item) {
  item.onclick = showOrHide;
  item.firstChild.onclick = showOrHide;
});

function showOrHide(e) {
  e.stopPropagation();
  if (e.target.classList.contains('folder')) {
    if (e.target.firstChild.textContent === 'folder') {
      e.target.firstChild.textContent = 'folder_open';
    } else {
      e.target.firstChild.textContent = 'folder';
    }
    e.target.nextElementSibling.classList.toggle('hide');
  } else {
    if (e.target.textContent === 'folder') {
      e.target.textContent = 'folder_open';
    } else {
      e.target.textContent = 'folder';
    }
    e.target.parentNode.nextElementSibling.classList.toggle('hide');
  }
}

function rightClick() {
const menuArea = document.querySelector('#root');
const rightCl = document.createElement('ul');
rightCl.className = 'rightMenu hide';
rightCl.innerHTML = `<li class='rename'>Rename</li><li class='deleteItem'>Delete</li>`;
document.querySelector('#root').appendChild(rightCl);
menuArea.addEventListener( 'contextmenu', event => {
  event.preventDefault();
  rightCl.style.top = `${event.clientY}px`;
  rightCl.style.left = `${event.clientX}px`;
  rightCl.classList.add('active');
}, false);
  document.addEventListener('click', event => {
  let rightBottom = 2;
  if (event.button !== rightBottom) {
    rightCl.classList.remove('active');
  }
}, false);
rightCl.addEventListener('click', event => {
  event.stopPropagation();
}, false);
}
rightClick();
document.addEventListener('contextmenu', rightClick);
const del = document.querySelector('.deleteItem');
del.addEventListener('click', function showOrHide(e) {
  e.stopPropagation();
  if (e.target.classList.contains('folder')) {
    e.target.nextElementSibling.classList.toggle('hide');
    } else {
    e.target.parentNode.nextElementSibling.classList.toggle('hide');
  }
});