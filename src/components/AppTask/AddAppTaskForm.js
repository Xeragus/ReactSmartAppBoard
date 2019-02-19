import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAppTask } from '../../actions/appTaskActions';
import classnames from 'classnames';

class AddAppTaskForm extends Component {
    constructor() {
        super();

        this.state = {
            summary: "",
            acceptanceCriteria: "",
            status: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newAppTask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status
        };

        this.props.addAppTask(newAppTask, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to='/' className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add Project Task</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames("form-control form-control-lg", {
                                               'is-invalid': errors.summary
                                           })}
                                           name="summary"
                                           value={this.state.summary}
                                           onChange={this.onChange}
                                           placeholder="Project Task summary"/>
                                    {
                                        errors.summary && (
                                            <div className="invalid-feedback">{errors.summary}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria"
                                              value={this.state.acceptanceCriteria}
                                              onChange={this.onChange}
                                              name="acceptanceCriteria"></textarea>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg"
                                            value={this.state.status}
                                            onChange={this.onChange}
                                            name="status">
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddAppTaskForm.propTypes = {
    addAppTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, {addAppTask}) (AddAppTaskForm);
