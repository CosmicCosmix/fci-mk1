import React from 'react';

const UserDashboard: React.FC = () => {
    return (
        <div className="container-fluid py-2">
            <div className="row">
                <div className="ms-3">
                    <h3 className="mb-0 h4 font-weight-bolder">Dashboard</h3>
                    <p className="mb-4">Check the sales, value and bounce rate by country.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Authors table</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Author
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Function
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Status
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Employed
                                        </th>
                                        <th className="text-secondary opacity-7"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img
                                                        src="../assets/images/team-2.jpg"
                                                        className="avatar avatar-sm me-3 border-radius-lg"
                                                        alt="user1"
                                                    />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">John Michael</h6>
                                                    <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-xs font-weight-bold mb-0">Manager</p>
                                            <p className="text-xs text-secondary mb-0">Organization</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="badge badge-sm bg-gradient-success">Online</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                        </td>
                                        <td className="align-middle">
                                            <a
                                                href="#!"
                                                className="text-secondary font-weight-bold text-xs"
                                                data-toggle="tooltip"
                                                data-original-title="Edit user"
                                            >
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer py-4">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="copyright text-center text-sm text-muted text-lg-start">
                                © {new Date().getFullYear()}, made with <i className="fa fa-heart"></i> by{' '}
                                <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank" rel="noreferrer">
                                    Creative Tim
                                </a>{' '}
                                for a better web.
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
        </div>
    );
};

export default UserDashboard;