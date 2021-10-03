import React from "react";
import Lottie from "react-lottie";
import successAnimationData from "../lottie/success-alert.json";
import infoAnimationData from "../lottie/info-alert.json";
import { useDispatch, useSelector } from "react-redux";
import favoriteAnimationData from "../lottie/favorite.json";
import { MdClose } from "react-icons/md";
import { clearAlert } from "../action/alert";

const Alert = () => {
  const [defaultOptions, setDefaultOptions] = React.useState({
    loop: true,
    autoplay: true,
    animationData: successAnimationData,
  });
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  React.useEffect(() => {
    if (alert.isAlertShow && alert.alert.status === "success") {
      setDefaultOptions({
        ...defaultOptions,
        animationData: successAnimationData,
      });
    }
    if (alert.isAlertShow && alert.alert.status === "info") {
      setDefaultOptions({
        ...defaultOptions,
        animationData: infoAnimationData,
      });
    }
    if (alert.isAlertShow && alert.alert.status === "favorite") {
      setDefaultOptions({
        ...defaultOptions,
        animationData: favoriteAnimationData,
      });
    }
  }, [alert]);

  return (
    <div
      onClick={() => dispatch(clearAlert())}
      className={`alert-main  ${alert.isAlertShow ? "active" : "hidden"}`}
    >
      <div
        className={`alert-main-box ${alert.isAlertShow ? "active" : "hidden"}`}
      >
        <div onClick={() => dispatch(clearAlert())} className="close-alert-bar">
          <MdClose color="gray" size={22} />
        </div>
        <Lottie
          options={defaultOptions}
          height={
            alert.alert.status === "info" || alert.alert.status === "favorite"
              ? 200
              : 100
          }
          width={
            alert.alert.status === "info" || alert.alert.status === "favorite"
              ? 200
              : 100
          }
        />

        <span>{alert.alert.text}</span>
      </div>
    </div>
  );
};

export default Alert;
