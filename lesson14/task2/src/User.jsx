import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((userData) => {
        setUserData(userData);
      });
  }, [userId]);
  if (!userData) return null;
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={userData.avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

export default User;

// class User extends Component {
//   state = {
//     user: null,
//   };
//   componentDidMount() {
//     this.fetchUser(this.props.match.params.userId);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       this.props.match.params.userId !== prevProps.match.params.userId
//     ) {
//       this.fetchUser(this.props.match.params.userId);
//     }
//   }

//   fetchUser = (userId) => {
//     const { match } = this.props;
//     fetch(`https://api.github.com/users/${match.params.userId}`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error();
//       })
//       .then((userData) =>
//         this.setState({
//           user: userData,
//         })
//       );
//   };

//   render() {
//     const { user } = this.state;
//     if (!user) return null;
//     return (
//       <div className="user">
//         <img
//           alt="User Avatar"
//           src={user.avatar_url}
//           className="user__avatar"
//         />
//         <div className="user__info">
//           <span className="user__name">{user.name}</span>
//           <span className="user__location">{user.location}</span>
//         </div>
//       </div>
//     );
//   }
// }
