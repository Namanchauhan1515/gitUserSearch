import "./App.css";
function UserCard({data}){
    return(
        <div className="user-card">
        <img className="profile-img"
        src={data.avatar_url}
        alt={data.login}
        width="150"/>
        <h2>{data.login}</h2>
        <p>{data.name || "Name not found"}</p>
        <p>{data.location ||"location not available"}</p>
        <p>{data.bio ||"No bio available"}</p>
        <p>{data.company||"Company not available "}</p>
        <div className="user-stats">

        <div>
          <h4>Followers</h4>
          <p>{data.followers}</p>
        </div>

        <div>
          <h4>Following</h4>
          <p>{data.following}</p>
        </div>

        <div>
          <h4>Repositories</h4>
          <p>{data.public_repos}</p>
        </div>

        </div>
            <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            >
        View GitHub Profile
      </a>
        </div>
     
    );
}
export default UserCard;