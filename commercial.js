let houseData = [
  {
    PropertyNumber: 1,
    houseImg:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    propertyType: 'house',
    bedroomSize: 1,
    price: 1000000,
  },
  {
    PropertyNumber: 2,
    houseImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcai2EtgfLtb6yL9HPjK42MaUjjy0WShbHr-9FlBfhMLNBX5uAgd_f1xa913RlvgZnj4&usqp=CAU',
    propertyType: 'apartment',
    bedroomSize: 3,
    price: 3000000,
  },
  {
    PropertyNumber: 3,
    houseImg:
      'https://www.camella.com.ph/wp-content/uploads/2021/03/image-45.png',
    propertyType: 'house',
    bedroomSize: 4,
    price: 5000000,
  },
  {
    PropertyNumber: 4,
    houseImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLgzjsG9fTDdk8irMVcTKfWAlaxlB-Fwd0Q&usqp=CAU',
    propertyType: 'apartment',
    bedroomSize: 7,
    price: 7000000,
  },
  {
    PropertyNumber: 5,
    houseImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNW7XIlJmRMqLErqnajGUElOPGFCuhi9FfA&usqp=CAU',
    propertyType: 'house',
    bedroomSize: 3,
    price: 8000000,
  },
  {
    PropertyNumber: 5,
    houseImg:
      'https://media.istockphoto.com/photos/modern-condo-buildings-with-huge-windows-in-montreal-picture-id1009266928?k=20&m=1009266928&s=612x612&w=0&h=CsbwltBki-K7oN2VuJFNMWttFnO3r3rqN55KBblevpM=',
    propertyType: 'condo',
    bedroomSize: 5,
    price: 11000000,
  },
];

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const render = (format = null) => {
  const searchList = document.querySelector('.search-list');
  searchList.innerHTML = '';

  let newData = houseData;

  if (format) newData = format(houseData);

  newData.map((data) => {
    searchList.innerHTML += `
      <section class="project-list">
        <img class="imgpr" src="${data.houseImg}" alt="">
        <h3>
          Property type:
          <span class="type">
            ${capitalize(data.propertyType)}
          </span>
        </h3>
        <h3>
          Bedrooms:
          <span class="BedroomsNo">${data.bedroomSize}</span>
        </h3>
        <h3>
          Price:
          <span class="Price">
            ${data.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
        </span>
        </h3>
      </section>
    `;
  });
};

render();

// select field 1
var s1 = document.getElementById('s1').addEventListener('change', () => {});

// select field 2
var s2 = document
  .getElementById('s2')
  .addEventListener('change', (e) =>
    render((data) =>
      data.filter((dd) => dd.propertyType === e.target.value || !e.target.value)
    )
  );

// select field 3
var s3 = document
  .getElementById('s3')
  .addEventListener('change', (e) =>
    render((data) =>
      data.sort(
        (a, b) =>
          ((e.target.value === 'max' ? a.price > b.price : a.price < b.price) &&
            1) ||
          -1
      )
    )
  );

// select field 4
var s4 = document
  .getElementById('s4')
  .addEventListener('change', (e) =>
    render((data) =>
      data.filter(
        (dd) => dd.bedroomSize === Number(e.target.value) || !e.target.value
      )
    )
  );
