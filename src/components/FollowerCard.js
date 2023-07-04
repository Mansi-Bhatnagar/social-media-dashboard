import classes from "./FollowerCard.module.css";
const FollowerCard = (props) => {
  return (
    <div
      className={`${classes.body} ${
        props.theme ? classes.light : classes.dark
      }`}
      style={{ borderTop: props.id !== 3 ? `4px solid ${props.color}` : "" }}
    >
      {props.id === 3 && <div className={classes.borderGradient}></div>}
      <div className={classes.sec1}>
        <img src={props.image} />
        <span>{props.name}</span>
      </div>
      <div className={classes.sec2}>
        <h1>{props.followers}</h1>
        <span>{props.userType}</span>
      </div>
      <div className={classes.sec3}>
        <img src={props.arrow} />
        <span
          style={{
            color: props.id !== 4 ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)",
          }}
        >
          {props.number} Today
        </span>
      </div>
    </div>
  );
};
export default FollowerCard;
