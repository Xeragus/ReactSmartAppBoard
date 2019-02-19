import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import AppTaskItem from "./AppTask/AppTaskItem";

class ProjectBoard extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Link to="/task/add" className="btn btn-primary mb-3">
                        <div><FontAwesomeIcon icon="plus" /> Create Project Task</div>
                    </Link>
                    <br/>
                    <hr/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-secondary text-white">
                                        <h4 className="mb-0">TO DO</h4>
                                    </div>
                                </div>
                                <AppTaskItem />
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-primary text-white">
                                        <h4 className="mb-0">In Progress</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-success text-white">
                                        <h4 className="mb-0">Done</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectBoard;