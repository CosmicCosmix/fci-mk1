import React, { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import '../assets/css/material-dashboard.css';
import '../assets/css/nucleo-icons.css';
import '../assets/css/nucleo-svg.css';
// import logoCtDark from '../assets/images/logo-ct-dark.png';
import logo from '../assets/images/tbglogo.png';
import team2 from '../assets/images/team-2.jpg';

const UserLayout: React.FC = () => {
  const location = useLocation();

  // Split the pathname into an array (e.g., "/Userdashboard/course" -> ["Userdashboard", "course"])
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Helper to format the URL string nicely
  const formatBreadcrumb = (str: string) => {
    if (str.toLowerCase() === 'userdashboard') return 'Dashboard';
    // Capitalize the first letter and replace hyphens with spaces
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
  };

  useEffect(() => {
    const win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      // Scrollbar init logic
    }
  }, []);

  return (
      <div className="g-sidenav-show bg-gray-100">
        {/* Sidebar */}
        <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2 bg-white my-2"
            id="sidenav-main"
        >
          <div className="sidenav-header">
            <i
                className="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true"
                id="iconSidenav"
            ></i>
            <a
                className="navbar-brand px-4 py-3 m-0"
                href="https://demos.creative-tim.com/material-dashboard/pages/dashboard"
                target="_blank"
                rel="noreferrer"
            >
              <img src={logo} className="navbar-brand-img" width="26" height="26" alt="main_logo" />
              <span className="ms-1 text-sm text-dark">FCI</span>
            </a>
          </div>
          <hr className="horizontal dark mt-0 mb-2" />
          <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active bg-gradient-dark text-white" href="#!">
                  <i className="material-symbols-rounded opacity-5">dashboard</i>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#!">
                  <i className="material-symbols-rounded opacity-5">table_view</i>
                  <span className="nav-link-text ms-1">Tables</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#!">
                  <i className="material-symbols-rounded opacity-5">receipt_long</i>
                  <span className="nav-link-text ms-1">Billing</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#!">
                  <i className="material-symbols-rounded opacity-5">view_in_ar</i>
                  <span className="nav-link-text ms-1">Virtual Reality</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#!">
                  <i className="material-symbols-rounded opacity-5">format_textdirection_r_to_l</i>
                  <span className="nav-link-text ms-1">RTL</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#!">
                  <i className="material-symbols-rounded opacity-5">notifications</i>
                  <span className="nav-link-text ms-1">Notifications</span>
                </a>
              </li>
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs text-dark font-weight-bolder opacity-5">
                  Account pages
                </h6>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#!">
                  <i className="material-symbols-rounded opacity-5">person</i>
                  <span className="nav-link-text ms-1">Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#!">
                  <i className="material-symbols-rounded opacity-5">login</i>
                  <span className="nav-link-text ms-1">Sign In</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#!">
                  <i className="material-symbols-rounded opacity-5">assignment</i>
                  <span className="nav-link-text ms-1">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidenav-footer position-absolute w-100 bottom-0">
            <div className="mx-3">
              <a
                  className="btn btn-outline-dark mt-4 w-100"
                  href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard?ref=sidebarfree"
                  type="button"
              >
                Documentation
              </a>
              <a
                  className="btn bg-gradient-dark w-100"
                  href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
                  type="button"
              >
                Upgrade to pro
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content Wrapper */}
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
          {/* Top Navbar */}
          <nav
              className="navbar navbar-main navbar-expand-lg px-0 mx-3 shadow-none border-radius-xl"
              id="navbarBlur"
              data-scroll="true"
          >
            <div className="container-fluid py-1 px-3">
              {/* --- DYNAMIC BREADCRUMB START --- */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                  {/* Static Root Item */}
                  <li className="breadcrumb-item text-sm">
                    <Link className="opacity-5 text-dark" to="/Userdashboard">
                      Pages
                    </Link>
                  </li>

                  {/* Dynamic Items based on URL */}
                  {pathnames.map((value, index) => {
                    const isLast = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const title = formatBreadcrumb(value);

                    return isLast ? (
                        <li className="breadcrumb-item text-sm text-dark active" aria-current="page" key={to}>
                          {title}
                        </li>
                    ) : (
                        <li className="breadcrumb-item text-sm" key={to}>
                          <Link className="opacity-5 text-dark" to={to}>
                            {title}
                          </Link>
                        </li>
                    );
                  })}
                </ol>
              </nav>
              {/* --- DYNAMIC BREADCRUMB END --- */}
              <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group input-group-outline">
                    <label className="form-label">Type here...</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <ul className="navbar-nav d-flex align-items-center justify-content-end">
                  <li className="nav-item dropdown pe-3 d-flex align-items-center">
                    <a
                        href="#!"
                        className="nav-link text-body p-0"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                      <i className="material-symbols-rounded">notifications</i>
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4"
                        aria-labelledby="dropdownMenuButton"
                    >
                      <li className="mb-2">
                        <a className="dropdown-item border-radius-md" href="#!">
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img src={team2} className="avatar avatar-sm me-3" alt="team" />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">New message</span> from Laur
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a className="dropdown-item border-radius-md" href="#!">
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img
                                  src="../assets/images/small-logos/logo-spotify.svg"
                                  className="avatar avatar-sm bg-gradient-dark me-3"
                                  alt="spotify"
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">New album</span> by Travis Scott
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-radius-md" href="#!">
                          <div className="d-flex py-1">
                            <div className="avatar avatar-sm bg-gradient-secondary me-3 my-auto">
                              <svg
                                  width="12px"
                                  height="12px"
                                  viewBox="0 0 43 36"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>credit-card</title>
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                  <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(453.000000, 454.000000)">
                                        <path
                                            className="color-background"
                                            d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                            opacity="0.593633743"
                                        ></path>
                                        <path
                                            className="color-background"
                                            d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">Payment successfully completed</h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>2 days
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <a href="#!" className="nav-link text-body font-weight-bold px-0">
                      <i className="material-symbols-rounded">account_circle</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}

          {/* Dynamic Route Content */}
          <div style={{ overflowX: "hidden" }}>
            <Outlet />
          </div>

          {/* Footer (Moved from UserDashboard) */}
          <footer className="footer py-4">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    Copyright © {new Date().getFullYear()}&nbsp;
                    <a href="http://financialcampusindia.com" className="font-weight-bold" target="_blank" rel="noreferrer">
                      Financial Campus India
                    </a>{' '}
                    . All rights reserved.
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank" rel="noreferrer">
                        Creative Tim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank" rel="noreferrer">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank" rel="noreferrer">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank" rel="noreferrer">
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>

        </main>
      </div>
  );
};

export default UserLayout;