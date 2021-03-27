



window.addEventListener("DOMContentLoaded", (event) => {
  console.log([document.body]);

  // Скорость страдает
  // Неудобно
  // Невозсожно нормально добавить обработчики событий
  // document.body.innerHTML = "<a href='sdf'>asdfsadf</a>";


  const a = document.createElement("a");
  a.innerText = "Link";
  a.href = "http://google.com";

  a.id = "mylink";
  a.className = "link link_red";

  console.log(a.classList);

  a.classList.remove("link_red");
  a.classList.add("link_green");
  a.classList.toggle("link_green");
  a.classList.toggle("link_red");

  // if( a.classList.contains("link_red")) {
  //   a.classList.remove("link_red");
  // } else {
  //   a.classList.add("link_red");
    
  // }
  
  console.log(a.classList.contains("link_red"));

  document.body.append(a);


  const span = document.createElement("span");
  span.innerText = "SPAN";
  a.append(span);


  const span2 = document.createElement("span");
  span2.innerText = "SPAN2";

  document.body.insertBefore(span2, null);


  // document.body.removeChild(span2);

  console.log([a]);


  const img = document.createElement("img");
  img.src = "https://i2.wp.com/msoffice-prowork.com/wp-content/uploads/2019/04/microsoft-surface-book-2-technastic-02_1920px-x-1080px.jpg?fit=1920%2C1080&ssl=1";

  document.body.append(img);
  console.log(img.width, img.height);

  img.addEventListener("load", (e) => {
    console.log("Загрузилась", e);
    console.log(img.width, img.height);
  });




});