import FollowerCard from "./FollowerCard";
import classes from "./FollowerCardContainer.module.css";
import upArrow from "./../images/icon-up.svg";
import downArrow from "./../images/icon-down.svg";
import facebookIcon from "./../images/icon-facebook.svg";
import youtubeIcon from "./../images/icon-youtube.svg";
import instagramIcon from "./../images/icon-instagram.svg";
import twitterIcon from "./../images/icon-twitter.svg";
const cardStats = [
  {
    image: facebookIcon,
    name: "@nathanf",
    followers: 1987,
    userType: "FOLLOWERS",
    number: 12,
    arrow: upArrow,
    id: 1,
    color: "hsl(208, 92%, 53%)",
  },
  {
    image: twitterIcon,
    name: "@nathanf",
    followers: 1044,
    userType: "FOLLOWERS",
    number: 99,
    arrow: upArrow,
    id: 2,
    color: "hsl(203, 89%, 53%)",
  },
  {
    image: instagramIcon,
    name: "@realnathanf",
    followers: "11k",
    userType: "FOLLOWERS",
    number: 1099,
    arrow: upArrow,
    id: 3,
    color: ["hsl(37, 97%, 70%)", "hsl(329, 70%, 58%)"],
  },
  {
    image: youtubeIcon,
    name: "Nathan F.",
    followers: 8239,
    userType: "SUBSCRIBERS",
    number: 144,
    arrow: downArrow,
    id: 4,
    color: "hsl(348, 97%, 39%)",
  },
];
const FollowerCardContainer = (props) => {
  const cards = cardStats.map((card) => {
    return (
      <FollowerCard
        image={card.image}
        name={card.name}
        followers={card.followers}
        userType={card.userType}
        number={card.number}
        arrow={card.arrow}
        key={card.id}
        theme={props.theme}
        id={card.id}
        color={card.color}
      />
    );
  });
  return (
    <div
      className={`${classes.container} ${
        props.theme ? classes.light : classes.dark
      }`}
    >
      {cards}
    </div>
  );
};
export default FollowerCardContainer;
