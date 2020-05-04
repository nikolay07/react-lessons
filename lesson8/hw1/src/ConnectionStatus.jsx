import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  updateStatus = (e) => {
    this.setState({
      status: e.type,
    });
  };

  componentDidMount() {
    window.addEventListener("online", this.updateStatus);
    window.addEventListener("offline", this.updateStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.updateStatus);
    window.removeEventListener("offline", this.updateStatus);
  }

  setOfflineStatus = (status) =>
    `status ${status === "offline" ? "status_offline" : ""}`;

  render() {
    const { status } = this.state;
    return <div className={this.setOfflineStatus(status)}>{status}</div>;
  }
}

export default ConnectionStatus;
