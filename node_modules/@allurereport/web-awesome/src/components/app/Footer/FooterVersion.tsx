import { getReportOptions } from "@allurereport/web-commons";
import { Text } from "@/components/commons/Typography";
import { currentLocale } from "@/stores";
import { AllureAwesomeReportOptions } from "../../../../types";
import * as styles from "./styles.scss";

export function FooterVersion() {
  const currentLang = currentLocale.value;
  const { createdAt } = getReportOptions<AllureAwesomeReportOptions>() ?? {};
  const locale = currentLang === "en" ? "en-US" : "ru-RU";

  const formattedCreatedAt = new Date(createdAt).toLocaleDateString(locale, {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <Text type="paragraph" size="m" className={styles.version}>
      {formattedCreatedAt}
      <span> Ver: 3.0.0</span>
    </Text>
  );
}
