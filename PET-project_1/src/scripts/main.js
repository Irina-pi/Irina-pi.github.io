const createSliderItem = function (
  obj,
  divID,
  divMainElClass,
  divImgElClass,
  imgElClass,
  imgElAlt,
  divCaptionElClass,
  divLocationElClass,
) {
  const divBlockEl = document.getElementById(divID);

  const divMainEl = document.createElement('div');
  divMainEl.setAttribute('id', `${obj.id}`);
  divMainEl.setAttribute('class', divMainElClass);

  const divImgEl = document.createElement('div');
  divImgEl.setAttribute('class', divImgElClass);

  const imgEl = document.createElement('img');
  imgEl.setAttribute('class', imgElClass);
  imgEl.setAttribute('alt', imgElAlt);
  imgEl.setAttribute('src', `${obj.imageUrl}`);

  const divCaptionEl = document.createElement('div');
  divCaptionEl.setAttribute('class', divCaptionElClass);
  divCaptionEl.textContent = obj.name;

  const divLocationEl = document.createElement('div');
  divLocationEl.setAttribute('class', divLocationElClass);
  divLocationEl.textContent = `${obj.city}, ${obj.country}`;

  divMainEl.appendChild(divImgEl).appendChild(imgEl);
  divMainEl.appendChild(divCaptionEl);
  divMainEl.appendChild(divLocationEl);
  divBlockEl.appendChild(divMainEl);
};

fetch('https://if-student-api.onrender.com/api/hotels/popular')
  .then((response) => {
    return response.json();
  })
  .then((arr) => {
    arr.forEach((obj) => {
      createSliderItem(
        obj,
        'mainDivHomesGuestLoves-js',
        'block-three__img',
        'block-three__img block-three__img--hotel',
        'block-three__img',
        'Hotel',
        'block-three__caption block-three__caption--hotel',
        'block-three__location block-three__location--hotel',
      );
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

fetch('https://if-student-api.onrender.com/api/hotels', {
  method: 'GET',
  search: '',
})
  .then((response) => {
    return response.json();
  })
  .then((arr) => {
    const formEl = document.getElementById('form-js');
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();

      const twoSearchScreenEl = document.getElementById('twoSearch-screen-js');
      twoSearchScreenEl.classList.remove('twoSearch-screen');

      const formData = new FormData(formEl);
      const value = formData.get('block_one_input_city');

      const arrSearch = arr.filter(
        (search) =>
          search.name.toLowerCase().includes(value.toLowerCase()) ||
          search.city.toLowerCase().includes(value.toLowerCase()) ||
          search.country.toLowerCase().includes(value.toLowerCase()),
      );

      arrSearch.forEach((arrSearch) => {
        createSliderItem(
          arrSearch,
          'mainDivAvailableHotels-js',
          'block-twoSearch__img',
          'block-twoSearch__img block-twoSearch__img--hotel',
          'block-twoSearch__img',
          'Hotel',
          'block-twoSearch__caption block-twoSearch__caption--hotel',
          'block-twoSearch__location block-twoSearch__location--hotel',
        );
      });
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
