const workstationsList = document.querySelector('#cafe-list');

//Create element and render list
const renderWorkstation = (doc) => {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);

  workstationsList.appendChild(li);
};

db.collection('workstations')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderWorkstation(doc);
    });
  });
