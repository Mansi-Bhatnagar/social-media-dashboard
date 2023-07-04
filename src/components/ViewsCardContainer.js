import ViewsCard from "./ViewsCard";
import upArrow from "./../images/icon-up.svg";
import downArrow from "./../images/icon-down.svg";
import facebookIcon from "./../images/icon-facebook.svg";
import youtubeIcon from "./../images/icon-youtube.svg";
import instagramIcon from "./../images/icon-instagram.svg";
import twitterIcon from "./../images/icon-twitter.svg";
import classes from "./ViewsCartContainer.module.css";
const data = [
  {
    entity: "Page Views",
    image: facebookIcon,
    value: "87",
    arrow: upArrow,
    number: 3,
    id: 1,
  },
  {
    entity: "Likes",
    image: facebookIcon,
    value: "52",
    arrow: downArrow,
    number: 2,
    id: 2,
  },
  {
    entity: "Likes",
    image: instagramIcon,
    value: "5462",
    arrow: upArrow,
    number: 2257,
    id: 3,
  },
  {
    entity: "Profile Views",
    image: instagramIcon,
    value: "52k",
    arrow: upArrow,
    number: 1375,
    id: 4,
  },
  {
    entity: "Retweets",
    image: twitterIcon,
    value: "117",
    arrow: upArrow,
    number: 303,
    id: 5,
  },
  {
    entity: "Likes",
    image: twitterIcon,
    value: "507",
    arrow: upArrow,
    number: 553,
    id: 6,
  },
  {
    entity: "Likes",
    image: youtubeIcon,
    value: "107",
    arrow: downArrow,
    number: 19,
    id: 7,
  },
  {
    entity: "Total Views",
    image: youtubeIcon,
    value: "1407",
    arrow: downArrow,
    number: 12,
    id: 8,
  },
];
const ViewsCardContainer = (props) => {
  const cards = data.map((card) => {
    return (
      <ViewsCard
        key={card.id}
        id={card.id}
        entity={card.entity}
        image={card.image}
        value={card.value}
        arrow={card.arrow}
        number={card.number}
        theme={props.theme}
      />
    );
  });
  return <div className={classes.container}>{cards}</div>;
};
export default ViewsCardContainer;
