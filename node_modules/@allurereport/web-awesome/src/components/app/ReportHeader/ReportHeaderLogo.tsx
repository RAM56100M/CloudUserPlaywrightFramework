import * as styles from "@/components/app/ReportHeader/styles.scss";
import { ReportLogo } from "@/components/app/ReportLogo";

export const ReportHeaderLogo = () => {
  return (
    <div className={styles["report-header-logo"]}>
      <ReportLogo />
    </div>
  );
};
