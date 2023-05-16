import Countdown, { zeroPad } from "react-countdown";
import PropTypes from "prop-types";
import "./countdown.css";

const Clock = () => {
  const random = () => Math.floor(Math.random() * 180000);

  return (
    <Countdown
      date={Date.now() + random(600000)}
      intervalDelay={0}
      precision={3}
      renderer={(props) => {
        if (props.seconds === 0) {
          return null;
        } else {
          return (
            <div>
              <div className="product-info--countdown">
                  {zeroPad(props.minutes)}: {zeroPad(props.seconds)}
                </div>
              <button className="product-info--button">
                See Item
              </button>
            </div>
          );
        }
      }}
    />
  );
};

export default Clock;

Clock.propTypes = {
  minutes: PropTypes.string,
  seconds: PropTypes.string,
};
