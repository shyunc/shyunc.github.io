
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 41.763031, lng: -73.044465 },
//         zoom: 17.75
//     });

//     google.maps.event.addListener(map, 'click', function (event) {
//         new google.maps.Marker({
//             position: event.latLng,
//             map: map,
//         });
//     });
// }

// const btn = document.getElementsByClassName('centered');

// btn.addEventListener('click', () => {
//   // 👇️ hide button
//   btn.style.display = 'none';

//   // 👇️ show div
//   const box = document.getElementsByClassName('centered');
//   box.style.display = 'block';
// });

// const btn = document.getElementsByClassName('centered');

// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     const box = document.getElementsByClassName('enter');

//     // 👇️ removes element from DOM
//     // box.style.display = 'none';

//     // 👇️ hides element (still takes up space on page)
//     box.style.visibility = 'hidden';
//   }, 1000);
// });

var xV1 = 0;
function stayHome(){
nV = document.body.scrollTop;
document.getElementByClassName('centered').style.top = xV1+nV;
}
function init(){
xV1 = document.getElementByClassName('centered').offsetTop;
}
window.onload=init;
window.onscroll=stayHome;