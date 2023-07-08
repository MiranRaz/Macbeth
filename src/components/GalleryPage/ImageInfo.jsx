import mouse_click_move from "../../assets/mouse_click_move.png";
import { useTranslation } from "react-i18next";

const ImageInfo = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "20px",
      }}
    >
      {t("infoImage")}
      <img
        src={mouse_click_move}
        alt={""}
        style={{ width: "30%", height: "20%" }}
      />
    </div>
  );
};

export default ImageInfo;
