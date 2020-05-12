import React from 'react'
import Iframe from 'react-iframe'



export default function Contact() {
    return (
        <div>
            <div className="container my-3 my-sm-5">
                <h2 className="text-center mb-sm-4">Contact</h2>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h4>Address:</h4>
                        <address>
                            <strong>Company Name</strong><br />
                                Street Name<br />
                                    ZIP code and city<br />
                            <i className="fa fa-fw fa-phone" aria-hidden="true"></i> <a href="tel:+1234567890">(123) 456-7890</a><br />
                            <i className="fa fa-fw fa-envelope-o" aria-hidden="true"></i> <a href="mailto:info@domain.com">info@domain.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-md-6">
                        <h4>Opening hours:</h4>
                        <p>
                            Monday-Thursday: <span className="float-right">10 am - 6 pm</span><br />
                                    Friday-Saturday: <span className="float-right">10 am - 10 pm</span><br />
                                        Sunday: <span className="float-right">10 am - 8 pm</span><br />
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 mb-3">
                        <h4>Send us a message:</h4>
                        <form>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
                                            <input type="text" id="name" className="form-control" name="name" placeholder="Name" required="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label >Email</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                            <input type="email" id="email" className="form-control" name="email" placeholder="example@email.com" required="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label >Telephone</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                            <input type="tel" id="telephone" className="form-control" name="telephone" placeholder="0123456789" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label >Department:</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-home" aria-hidden="true"></i></span>
                                            <select id="department" className="form-control" name="department" aria-describedby="department-help-block" required="">
                                                <option value="">- select here -</option>
                                                <option value="business">Business</option>
                                                <option value="sale">Sale</option>
                                                <option value="support">Support</option>
                                            </select>
                                        </div>
                                        <small id="department-help-block" className="form-text">Please select the recipient of your message.</small>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Message:</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-pencil" aria-hidden="true"></i></span>
                                    <textarea id="textarea" className="form-control" rows="5" placeholder="Write your message here..." required=""></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </form>
                    </div>

                </div>
            </div>
            <footer className="small bg-light">
                <div className="container py-3 py-sm-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3">
                            <h6>Quick links</h6>
                            <ul className="list-unstyled">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <h6>Information</h6>
                            <ul className="list-unstyled">
                                <li><a href="#0">Legal information</a></li>
                                <li><a href="#0">Job opportunities</a></li>
                                <li><a href="#0">Frequently Asked Questions</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <h6>Follow us</h6>
                            <ul className="list-unstyled">
                                <li><a href="#0"><i className="fa fa-fw fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                                <li><a href="#0"><i className="fa fa-fw fa-instagram" aria-hidden="true"></i> Instagram</a></li>
                                <li><a href="#0"><i className="fa fa-fw fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                                <li><a href="#0"><i className="fa fa-fw fa-youtube" aria-hidden="true"></i> YouTube</a></li>
                                <li><a href="#0"><i className="fa fa-fw fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <h6>Our location:</h6>
                            <address>
                                <strong>Company Name</strong><br />
                                    Steet Name<br />
                                        ZIP code and city<br />
                                <i className="fa fa-fw fa-phone" aria-hidden="true"></i> <a href="tel:+1234567890">(123) 456-7890</a><br />
                                <i className="fa fa-fw fa-envelope-o" aria-hidden="true"></i> <a href="mailto:info@domain.com">info@domain.com</a>
                            </address>
                        </div>
                    </div>
                    <ul className="list-inline mt-2 mb-0 text-center">
                        <li className="list-inline-item">&copy; 2017 Company Name</li>
                        <li className="list-inline-item">All rights reserved.</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
