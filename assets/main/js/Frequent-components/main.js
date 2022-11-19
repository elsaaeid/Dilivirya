// sidebar

const sidebarContainer = `
<div class="logo-wrapper text-center">
        <img src="assets/images/logo.png" alt="logo" />
        <h4 class="text-light">Dilivirya</h4>
      </div>
      <ul class="side-list list-unstyled text-light">
        <li>
          <a id="dashboard" href="./index.html" class="main-link">
            <span class="icon icon-dashboard"></span>
            <span class="text">dashboard</span>
          </a>
        </li>
        <li>
          <a  href="./orders.html" class="main-link">
            <span class="icon icon-orders"></span>
            <span class="text">orders</span>
          </a>
        </li>
        <li>
          <a id="admins" href="./admins" class="main-link">
            <span class="icon icon-admins"></span>
            <span class="text">admins</span>
          </a>
        </li>
        <li class="dropdown">
          <a class="main-link collapsed" data-bs-toggle="collapse" href="/#" role="button" aria-expanded="false" aria-controls="inventory">
            <span class="icon icon-inventory"></span>
              <span class="text">inventory</span>
          </a>

          <ul class="collapse multi-collapse" id="inventory">
            <li><a id="classifications" href="./classifications">Classifications</a></li>
            <li><a id="measurement" href="./measurement">Unit of Measurement</a></li>
            <li><a id="warehouses" href="./warehouses">Warehouses</a></li>
            <li><a id="products" href="./products">Products</a></li>
            <li><a id="count" href="./count">Inventory count</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a  href="./marketing" class="main-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="Marketing">
            <span class="icon icon-Marketing"></span>
            <span class="text">Marketing</span>
          </a>

          <ul class="collapse multi-collapse" id="Marketing">
            <li><a id="coupons" href="./coupons">Coupons</a></li>
            <li><a id="offers" href="./offers">Offers</a></li>
            <li><a id="notifications" href="./notifications">Push Notifications</a></li>
          </ul>
        </li>
        <li>
          <a id="clients" href="./clients" class="main-link">
            <span class="icon icon-Clients"></span>
            <span class="text">Clients</span>
          </a>
        </li>
        <li>
          <a id="stories" href="./stories" class="main-link">
            <span class="icon icon-stories"></span>
            <span class="text">stories</span>
          </a>
        </li>
        <li>
          <a id="profile" href="./profile" class="main-link">
            <span class="icon icon-profile"></span>
            <span class="text">my profile</span>
          </a>
        </li>
        <li>
          <a id="customers" href="./customers" class="main-link">
            <span class="icon icon-customer"></span>
            <span class="text">customer support</span>
          </a>
        </li>
        <li>
          <a id="settings" href="./settings" class="main-link">
            <span class="icon icon-settings"></span>
            <span class="text">general settings</span>
          </a>
        </li>
      </ul>
`;

const sidebar = document.getElementById('sidebar');
sidebar.innerHTML = sidebarContainer;



// navbar

const navbarContainer = `
<div class="container-fluid p-0">
          <div class="top-nav w-100 d-flex flex-row justify-content-between align-items-center d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none">
            <span class="navbar-brand mb-0 h1">
              <img src="assets/images/logo.png" alt="logo" />
            </span>
            <a class="btn btn-gold" role="button" id="menu-toggle"><i class="bi bi-list"></i></a>
          </div>
          <div class="nav-main w-100">
            <div class="row">
              <div class="col-md-9 col-sm-8">
                <div class="input-group mb-3">
                  <button class="btn btn-lavender" type="button" id="button-search">                    
                  </button>
                  <input type="text" onkeyup="myFunction()" class="form-control" id="myInput" placeholder="Search ..." aria-label="" aria-describedby="button-search">                 
                </div>
                <div class="search-content">
                  <ul id="myUL">
                    <li><a href="#">Adele</a></li>
                    <li><a href="#">Agnes</a></li>
                  
                    <li><a href="#">Billy</a></li>
                    <li><a href="#">Bob</a></li>
                  
                    <li><a href="#">Calvin</a></li>
                    <li><a href="#">Christina</a></li>
                    <li><a href="#">Cindy</a></li>
                  </ul>
                </div> 
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="nav-group mb-3 d-flex">
                  <div class="user-menu">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img src="assets/images/users/user.png" alt="user image">
                      </div>
                      <div class="flex-grow-1 mx-1">
                        <span class="user-name">Kenan JADDENE</span>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-gold" type="button" id="button-notification">
                    <span class="bg-danger bill">3</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
`;

const navbar = document.getElementById('navbar');
navbar.innerHTML = navbarContainer;



var navClick = document.getElementById("menu-toggle");

navClick.onclick = function() {
    document.getElementById("sidebar").classList.toggle('open');
}
