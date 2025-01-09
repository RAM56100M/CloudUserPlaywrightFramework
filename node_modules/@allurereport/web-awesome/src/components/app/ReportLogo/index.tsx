import { getReportOptions } from "@allurereport/web-commons";
import { clsx } from "clsx";
import reportLogoDefault from "@/assets/svg/report-logo.svg";
import { AllureAwesomeReportOptions } from "../../../../types";
import { SvgIcon } from "../../commons/SvgIcon";
import * as styles from "./styles.scss";

export const ReportLogo = (props: { className?: string; logo?: never }) => {
  const { className } = props;
  const { logo } = getReportOptions<AllureAwesomeReportOptions>() ?? {};

  return (
    <div className={clsx(styles["report-logo"], className)}>
      {logo ? <img src={logo} alt="report logo" /> : <SvgIcon id={reportLogoDefault.id} inline />}
    </div>
  );
};
