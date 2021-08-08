import React from 'react'

const Users = ({loading,users}) => {
    const mainstyle={display:'grid',
    gridTemplateColumns: 'repeat('+3+','+ 1+'fr)',};
    return loading ? (   
                  <div id="main" align="center">
            <img src="https://i.pinimg.com/originals/72/b7/2f/72b72ff0c392a16c6b12e80bbe3473c5.gif" alt="Loading Details..." className="loader"/>
          </div>
        ) : 
        (
          <div id="main" style={mainstyle}>
    
          {users.map(user =><div className="profile_cont" key={user.id}>
                        {
                          console.log(user)
                        }
                        
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User ID: {user.id}</p>
                      </div>
            )
          }
          </div>
        )
}

export default Users;