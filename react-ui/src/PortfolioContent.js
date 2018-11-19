import React from "react";
import { Link } from 'react-router-dom';

const PortfolioContent = () => {
    return (
        <div className="container" style={{marginTop: '80px'}}>
            <h1>Portfolio</h1>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                    <div className="card h-100">
                        <Link to="/home"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></Link>
                        <div className="card-body">
                            <h4 className="card-title">
                            <Link to="/home">NSU ELEARNING</Link>
                            </h4>
                            <p className="card-text">ELEARNING Consist of Grading System, Elearning Articles Upload and Download</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                    <div className="card h-100">
                        <Link to="/home"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></Link>
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link to="/home">VBP Time and Task Management</Link>
                            </h4>
                            <p className="card-text">Monitor Employee Time and Task in Realtime</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioContent;