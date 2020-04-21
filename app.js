const workstationsList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

//Create element and render list
const renderWorkstation = (doc) => {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  let cross = document.createElement('div');

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = 'x';

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  workstationsList.appendChild(li);

  //deleting data
  cross.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('workstations').doc(id).delete();
  });
};

//getting data
db.collection('workstations')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderWorkstation(doc);
    });
  });

//saving Data
form.addEventListener('submit', (e) => {
  e.preventDefault();

  db.collection('workstations').add({
    name: form.name.value,
    city: form.city.value,
  });
  form.name.value = '';
  form.city.value = '';
});
