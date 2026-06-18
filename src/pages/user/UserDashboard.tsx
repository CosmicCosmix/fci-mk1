import React from 'react';
import {Link} from 'react-router-dom'; // instead of a-href; which causes a hard refresh to the DOM; <Link> allows for component reload.
// -- DO NOT apply a href="" for the links
// -- USE <Link to="">

const UserDashboard: React.FC = () => {
    return (
        <div className="container-fluid py-2">
            <div className="row">
                <div className="ms-3">
                    <h3 className="mb-0 h4 font-weight-bolder">Welcome, Abhilash Pattnaik</h3>
                    <p className="mb-4">Below is a list of your registered courses. To begin, click on course title. You may check your total time spent and login/logout times by clicking the Time spent button.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
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
                                            Course Title
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Time Spent Till Date (HH:MM)
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Time Spent Today (HH:MM)
                                        </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Availability
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
                                            <p className="text-sm font-weight-bold mb-0">TBG12</p>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <Link to="/UserDashboard/course" className="text-sm font-weight-bold mb-0" style={{ color: "var(--bs-info)", textDecoration: "underline" }}>
                                                POSP - Point of Sales Person
                                            </Link>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <Link to="UserTime" className="text-sm font-weight-bold mb-0" style={{ color: "var(--bs-info)", textDecoration: "underline" }}>
                                                00:00
                                            </Link>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">00:00</span>
                                        </td>
                                        <td className="align-middle text-center">
                                            <span className="text-secondary text-sm font-weight-bold">15 hour(s) or Untill Jun 23 2026 12:32PM</span>
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

export default UserDashboard;