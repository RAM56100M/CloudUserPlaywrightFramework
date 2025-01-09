import * as styles from "@/components/app/ReportHeader/styles.scss";
import { Label } from "@/components/commons/Label";

export const ReportHeaderLabelList = () => {
  return (
    <div className={styles["report-header-label-list"]}>
      {["Smoke", "regression", "nightly"].map((item, key) => {
        return <Label key={key}>{item}</Label>;
      })}
    </div>
  );
};
