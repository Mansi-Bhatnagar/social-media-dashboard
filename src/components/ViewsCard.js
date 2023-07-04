import classes from "./ViewsCard.module.css";
const ViewsCard = (props) => {
  const { entity, image, value, arrow, number, theme, id } = props;
  return (
    <div className={`${classes.card} ${theme ? classes.light : classes.dark}`}>
      <div className={classes.sec1}>
        <span>{entity}</span>
        <img src={image} />
      </div>
      <div className={classes.sec2}>
        <h2>{value}</h2>
        <div>
          <img src={arrow} />
          <span
            className={`${
              id === 2 || id === 7 || id === 8 ? classes.red : classes.green
            }`}
          >
            {number}%
          </span>
        </div>
      </div>
    </div>
  );
};
export default ViewsCard;
