
/*-----------------CardsOverview----------------------*/

const card = document.querySelectorAll(".overview");
function activeLink() {
  card.forEach((item) =>
  item.classList.remove('active'));
  this.classList.add('active')
}
card.forEach((item) =>
  item.addEventListener('click',activeLink));




  /*-------------------------------overviewChart------------------------------*/
  const cardOrders = document.getElementById('cardOrders');
  const cardOffers = document.getElementById('cardOffers');
  const cardViews = document.getElementById('cardViews');
  const cardClients = document.getElementById('cardClients');
  const cardProducts = document.getElementById('cardProducts');

  const orders = document.getElementById('orders');
  const offers = document.getElementById('offers');
  const views = document.getElementById('views');
  const clients = document.getElementById('clients');
  const products = document.getElementById('products');


/*----------------------*/
cardOrders.addEventListener("click", ordersFunction);

  function ordersFunction() {
    orders.style.display = "block";
    offers.style.display = "none";
    views.style.display = "none";
    clients.style.display = "none";
    products.style.display = "none";
  }
  /*----------------------*/
  cardOffers.addEventListener("click", offersFunction);

  function offersFunction() {
    orders.style.display = "none";
    offers.style.display = "block";
    views.style.display = "none";
    clients.style.display = "none";
    products.style.display = "none";
  }
  /*----------------------*/
  cardViews.addEventListener("click", viewsFunction);

  function viewsFunction() {
    orders.style.display = "none";
    offers.style.display = "none";
    views.style.display = "block";
    clients.style.display = "none";
    products.style.display = "none";
  }
  /*----------------------*/
  cardClients.addEventListener("click", clientsFunction);

  function clientsFunction() {
    orders.style.display = "none";
    offers.style.display = "none";
    views.style.display = "none";
    clients.style.display = "block";
    products.style.display = "none";
  }
  /*----------------------*/
  cardProducts.addEventListener("click", productsFunction);

  function productsFunction() {
    orders.style.display = "none";
    offers.style.display = "none";
    views.style.display = "none";
    clients.style.display = "none";
    products.style.display = "block";
  }