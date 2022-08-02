import View from "./View";


function Shop() {



    return (
        <div class="container-xxl w-75 mt-5 bg-light rounder shadow">
            <div class="row align-items-stretch">
                <nav class="navbar navbar-dark bg-light">
                    <div class="container-fluid">
                        <div class="dropdown">
                            <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><a class="dropdown-item" type="button">Profile</a></li>
                                <li><a href="/" class="dropdown-item" type="button">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid  rounder shadow v">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <View></View>
        </div>
    );
}

export default Shop;