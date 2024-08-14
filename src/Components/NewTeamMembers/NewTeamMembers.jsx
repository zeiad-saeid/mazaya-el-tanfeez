import { FaFacebook } from "react-icons/fa";
import images from "../../images";
import "./NewTeamMembers.scss";

const NewTeamMembers = () => {
  const cardsData = [
    {
      id: 1,
      name: "Robert Smith",
      title: "Chairman",
      image: images.loaders,
      socialLinks: [
        { icon: "facebook-f", url: "https://facebook.com/test" },
        { icon: "twitter", url: "https://twitter.com/test" },
        {
          icon: "linkedin-in",
          url: "https://linkedin.com/in/test",
        },
      ],
    },
    {
      id: 2,
      name: "Brent Grundy",
      title: "Manager",
      image: images.men_doing_concrete,
      socialLinks: [
        { icon: "facebook-f", url: "https://facebook.com/test2" },
        { icon: "twitter", url: "https://twitter.com/test2" },
        {
          icon: "linkedin-in",
          url: "https://linkedin.com/in/test2",
        },
      ],
    },
    {
      id: 3,
      name: "John Henderson",
      title: "Engineer",
      image: images.mockup,
      socialLinks: [
        {
          icon: "facebook-f",
          url: "https://facebook.com/test3",
        },
        { icon: "twitter", url: "https://twitter.com/test3" },
        {
          icon: "linkedin-in",
          url: "https://linkedin.com/in/test3",
        },
      ],
    },
    {
      id: 4,
      name: "Patrick Joe",
      title: "Engineer",
      image: images.loaders,
      socialLinks: [
        { icon: "facebook-f", url: "https://facebook.com/test4" },
        { icon: "twitter", url: "https://twitter.com/test4" },
        {
          icon: "linkedin-in",
          url: "https://linkedin.com/in/test4",
        },
      ],
    },
  ];

  return (
    <div className="new-team-members">
      <header className="team-header">
        <h1>Our Team</h1>
      </header>
      <div className="card-list">
        {cardsData.map((card) => (
          <div key={card.id} className="single-card">
            <div className="card-image">
              <img src={card.image} alt={card.name} />
              <div className="social-icons">
                {card.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                ))}
              </div>
            </div>
            <div className="card-content">
              <h3>{card.name}</h3>
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTeamMembers;
