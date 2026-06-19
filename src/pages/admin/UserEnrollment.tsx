import React from 'react';
import {Link} from 'react-router-dom'; // instead of a-href; which causes a hard refresh to the DOM; <Link> allows for component reload.
// -- DO NOT apply a href="" for the links
// -- USE <Link to="">

const UserEnrollment: React.FC = () => {
    return (
        <div className="container-fluid py-2">
            <div className="col-md-12 mb-lg-0 mb-4">
                <div className="card mt-4">
                    <div className="card-header pb-0 p-3">
                        <div className="row">
                            <div className="col-6 d-flex align-items-center">
                                <h6 className="mb-0">User Enrollment</h6>
                            </div>
                            <div className="col-6 text-end">
                                <button type="button" className="btn bg-gradient-dark mb-0" href="javascript:;"><i
                                    className="material-symbols-rounded text-sm">download</i>&nbsp;&nbsp;Download Excel Format</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-3">
                        <div className="row">
                            <div className="col-md-6 mb-md-0 mb-4">
                                <div className="cursor-default card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                    <p className="w-50 me-3 mb-0">Select company</p>
                                    <select className="form-select px-2 py-1 mb-0 w-100 border-0" aria-label="Select company">
                                        <option value="">Choose a company...</option>
                                        <option value="acme_corp">Acme Corp</option>
                                        <option value="stark_ind">Stark Industries</option>
                                        <option value="wayne_ent">Wayne Enterprises</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cursor-default card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                    <p className="w-50 me-3 mb-0">SMS Required</p>
                                    <select className="form-select px-2 py-1 mb-0 w-100 border-0" aria-label="SMS Required">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-3">
                        <div className="row">
                            <div className="col-md-6 mb-md-0 mb-4">
                                <div className="cursor-default card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                    <p className="w-50 me-3 mb-0">Course Code</p>
                                    <select className="form-select px-2 py-1 mb-0 w-100 border-0" aria-label="Select company">
                                        <option value="">Select Code...</option>
                                        <option value="acme_corp">Acme Corp</option>
                                        <option value="stark_ind">Stark Industries</option>
                                        <option value="wayne_ent">Wayne Enterprises</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cursor-default card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                    <p className="w-50 me-3 mb-0">Select File</p>
                                    <input
                                        type="file"
                                        className="form-control px-2 py-1 mb-0 w-100 border-0"
                                        aria-label="Select File"
                                        style={{ background: "transparent" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-3">
                        <div className="row">
                            <div className="col-md-6 mb-md-0 mb-4">
                                <div className="d-flex justify-content-start align-items-center">
                                    <button
                                        type="button"
                                        className="btn bg-gradient-info mb-0 text-white"
                                    >
                                        <i className="material-symbols-rounded text-sm">data_check</i>
                                        <span className="ms-2">Verify</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserEnrollment;