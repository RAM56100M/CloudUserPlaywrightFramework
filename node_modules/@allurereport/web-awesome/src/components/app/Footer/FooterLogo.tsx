import { Text } from "@/components/commons/Typography";
import { ReportLogoFull } from "../ReportLogoFull";
import * as styles from "./styles.scss";

export const FooterLogo = () => {
  return (
    <div className={styles["footer-logo"]}>
      <a href="https://allurereport.org" target={"_blank"}>
        <Text type="paragraph" size="m" className={styles["footer-logo"]}>
          Powered by
        </Text>
        <ReportLogoFull className={styles.logo} />
      </a>
    </div>
  );
};
