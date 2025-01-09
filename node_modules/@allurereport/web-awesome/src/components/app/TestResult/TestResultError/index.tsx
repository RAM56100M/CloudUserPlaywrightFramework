import { useState } from "preact/hooks";
import LineGeneralCopy3 from "@/assets/svg/line-general-copy-3.svg";
import { IconButton } from "@/components/commons/Button";
import { Code, Text } from "@/components/commons/Typography";
import { useI18n } from "@/stores/locale";
import { copyToClipboard } from "@/utils/copyToClipboard";
import * as styles from "./styles.scss";

const TestResultErrorTrace = ({ trace }) => {
  return (
    <div data-testid="test-result-error-trace" className={styles["test-result-error-trace"]}>
      <Code size={"s"} type={"ui"}>
        <pre>{trace}</pre>
      </Code>
    </div>
  );
};

export const TestResultError = ({ message, trace }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n("ui");

  return (
    <div data-testid="test-result-error" className={styles["test-result-error"]}>
      <div
        data-testid="test-result-error-header"
        className={styles["test-result-error-header"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text tag={"p"} size={"m"} bold className={styles["test-result-error-text"]}>
          {t("error")}
        </Text>
        <IconButton
          style={"ghost"}
          size={"s"}
          icon={LineGeneralCopy3.id}
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard(message);
          }}
        />
      </div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Code data-testid="test-result-error-message" size={"s"}>
          {message}
        </Code>
      </div>
      {isOpen && trace && <TestResultErrorTrace trace={trace} />}
    </div>
  );
};
