import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "dummy",
        location: "dummy",
        avatar_url: "dummy",
      },
    };
    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("child Component Did Mount");
    const data = await fetch("https://api.github.com/users/saiiramya");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    //console.log("child Render");

    const { login, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <img src={avatar_url} />
        <h4>contact: @ramya</h4>
      </div>
    );
  }
}
export default UserClass;
