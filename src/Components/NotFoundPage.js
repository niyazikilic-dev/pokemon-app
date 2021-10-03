import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found-page-main">
      <img src="../img/pokeball.gif" alt="" />
      <span>{t("common:notFoundPage")}</span>
      <Link to="/">{t("common:home")}</Link>
    </div>
  );
};

export default NotFoundPage;
