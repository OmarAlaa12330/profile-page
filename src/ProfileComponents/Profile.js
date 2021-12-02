import catfish from "./ProfileData.json";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      {catfish.map((catfish) => (
        <div className="profile-container">
          <div className="header-container">
            <img src="" alt="lol" />
            <h2>{catfish.Name}</h2>
          </div>
          <p>{catfish.Membership}</p>
          <div>
            Bio:
            <br /> {catfish.Bio}
          </div>
          <body className="body">
            <div className="container-info">
              <div className="display-info">
                <h5> Age</h5>
                {catfish.Age}
              </div>

              <div className="display-info">
                <h5>Weight</h5>
                {catfish.Weight} kg
              </div>
              <div className="display-info">
                <h5>Height</h5>
                {catfish.Height.Feet}" {catfish.Height.Inches}"
              </div>
            </div>
          </body>
        </div>
      ))}
      <input type="submit" value="edit" />
      <input type="submit" />
    </div>
  );
}
