import { getReportOptions } from "@allurereport/web-commons";
import { ReportHeaderLogo } from "@/components/app/ReportHeader/ReportHeaderLogo";
import { ReportHeaderPie } from "@/components/app/ReportHeader/ReportHeaderPie";
import { Heading, Text } from "@/components/commons/Typography";
import { currentLocaleIso } from "@/stores";
import type { AllureAwesomeReportOptions } from "../../../../types.js";
import * as styles from "./styles.scss";

export const ReportHeader = () => {
  const { reportName, createdAt } = getReportOptions<AllureAwesomeReportOptions>() ?? {};
  const formattedCreatedAt = new Date(createdAt).toLocaleDateString(currentLocaleIso.value as string, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={styles["report-header"]}>
      <div className={styles["report-wrapper"]}>
        <ReportHeaderLogo />
        <div className={styles["report-wrapper-text"]}>
          <Heading size={"s"} tag={"h2"} className={styles["wrapper-header"]} data-testid="report-title">
            {reportName}
          </Heading>
          <Text type="paragraph" size="m" className={styles["report-date"]}>
            {formattedCreatedAt}
          </Text>
        </div>
      </div>
      <ReportHeaderPie />
    </div>
  );
};
