import { useState } from "react";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createCloud = (width, xOffset) => {
  return (
    <span
      className="cloud__cloud"
      style={{ width: width + "%", marginLeft: xOffset + "vw" }}
    ></span>
  );
};

export default function Cloud(props) {
  const { reversed } = props;

  const thinWidth = getRandomInt(6, 15);
  const thickWidth = getRandomInt(20, 25);
  const bottomXOffset = getRandomInt(2, 6);
  const animationDuration = getRandomInt(70, 120);
  const animationDelay = getRandomInt(1, 120);

  let topCloudWidth = thinWidth;
  let botCloudWidth = thickWidth;

  if (reversed) {
    topCloudWidth = thickWidth;
    botCloudWidth = thinWidth;
  }

  const [cloud] = useState({
    topCloudWidth,
    botCloudWidth,
    bottomXOffset,
    animationDuration,
    animationDelay,
  });

  return (
    <div className="cloud" aria-hidden="true">
      <div
        className="cloud__wrap"
        style={{
          animationDuration: cloud.animationDuration + "s",
          animationDelay: cloud.animationDelay * -1 + "s",
        }}
      >
        {createCloud(cloud.topCloudWidth, 0)}
        {createCloud(cloud.botCloudWidth, cloud.bottomXOffset)}
      </div>
    </div>
  );
}
