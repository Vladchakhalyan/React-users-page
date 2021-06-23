import React from "react";
import s from "../ProfileInfo.module.css";
import m from "../ProfileInfo.module.css";

export class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  statusOnchange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.state.status,
      });
    }
  }

  render() {
    return (
      <>
        <h2 className={s.itemP}>
          <b>STATUS</b>
        </h2>
        {!this.state.editMode && (
          <div onDoubleClick={this.activateEditMode}>
            <p>
              <b>{this.props.status || "----"}</b>
            </p>
            <button className={m.button}>
              <b>change status</b>
            </button>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
              onChange={this.statusOnchange}
            />
            <span className={s.statusSpan}>
              <i className="fas fa-check"></i>
            </span>
          </div>
        )}
      </>
    );
  }
}
