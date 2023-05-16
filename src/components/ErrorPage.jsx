import { useTranslation } from "react-i18next";
const ErrorPage = () => {
  const { t } = useTranslation();

  // eslint-disable-next-line react/no-unescaped-entities
  return <div>{t("error")}</div>;
};

export default ErrorPage;
