import React from 'react';
import {Link} from 'react-router-dom'; // instead of a-href; which causes a hard refresh to the DOM; <Link> allows for component reload.
// -- DO NOT apply a href="" for the links
// -- USE <Link to="">

const AdminDashboard: React.FC = () => {
    return (
        <div className="container-fluid py-2">
            {/* TOPMOST CARDS -- START*/}
            <div className="row">
                <div className="ms-3">
                    <h3 className="mb-0 h4 font-weight-bolder">Dashboard</h3>
                    <p className="mb-4">
                        Check the sales, value and bounce rate by country.
                    </p>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-2 ps-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-sm mb-0 text-capitalize">No. of Students</p>
                                    <h4 className="mb-0">53k</h4>
                                </div>

                            </div>
                        </div>
                        <hr className="dark horizontal my-0"/>
                        <div className="card-footer p-2 ps-3">
                            <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">+55% </span>than
                                last week</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-2 ps-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-sm mb-0 text-capitalize">Course Completed</p>
                                    <h4 className="mb-0">2300</h4>
                                </div>

                            </div>
                        </div>
                        <hr className="dark horizontal my-0"/>
                        <div className="card-footer p-2 ps-3">
                            <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">+3% </span>than
                                last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-2 ps-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-sm mb-0 text-capitalize">Course Pending</p>
                                    <h4 className="mb-0">3,462</h4>
                                </div>

                            </div>
                        </div>
                        <hr className="dark horizontal my-0"/>
                        <div className="card-footer p-2 ps-3">
                            <p className="mb-0 text-sm"><span className="text-danger font-weight-bolder">-2% </span>than
                                yesterday</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-header p-2 ps-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-sm mb-0 text-capitalize">Sales</p>
                                    <h4 className="mb-0">$103,430</h4>
                                </div>

                            </div>
                        </div>
                        <hr className="dark horizontal my-0"/>
                        <div className="card-footer p-2 ps-3">
                            <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">+5% </span>than
                                yesterday</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* TOPMOST CARDS -- END */}

            <div className="row">
                <div className="col-12 mt-4 mb-4">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Course Overview</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                    <tr>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Sr. No
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Course Code
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Company Name
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            address
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            city
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            phone
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            contact person
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            email id
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            password
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            50 hr cost
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            25 hr cost
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            status
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            action
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/* Data Row */}
                                    <tr>
                                        <td className="align-middle text-center text-sm">
                                            <div className="px-3 py-1">
                                                <h6 className="mb-0 text-sm">1</h6>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <p className="text-sm font-weight-bold mb-0">METLIFE</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <p className="text-sm font-weight-bold mb-0">
                                                PNB METLIFE
                                            </p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <p className="text-sm font-weight-bold mb-0">
                                                Bangalore
                                            </p>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">-</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">-</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">Bangalore Manager</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">metlife</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">123</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">80</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">80</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">Active</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">00:00</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;