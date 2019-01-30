import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProjectBoard extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <a href="/ProjectTaskForm.html" className="btn btn-primary mb-3">
                        <div><FontAwesomeIcon icon="plus" /> Create Project Task</div>
                    </a>
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
                                <div className="card mb-1 bg-light">
                                    <div className="card-header text-primary">
                                        ID: projectSequence
                                    </div>
                                    <div className="card-body bg-light">
                                        <h5 className="card-title">summary</h5>
                                        <p className="card-text text-truncate ">
                                            acceptanceCriteria
                                        </p>
                                        <a href="" className="btn btn-primary">
                                            View / Update
                                        </a>

                                        <button className="btn btn-danger ml-4">
                                            Delete
                                        </button>
                                    </div>
                                </div>
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