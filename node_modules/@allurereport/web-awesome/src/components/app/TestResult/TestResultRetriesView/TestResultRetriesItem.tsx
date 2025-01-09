import { formatDuration } from "@allurereport/core-api";
import { clsx } from "clsx";
import { useState } from "preact/hooks";
import arrowsChevronDown from "@/assets/svg/arrows-chevron-down.svg";
import LineGeneralLinkExternal from "@/assets/svg/line-general-link-external.svg";
import { ArrowButton } from "@/components/app/ArrowButton";
import { TestResultError } from "@/components/app/TestResult/TestResultError";
import * as styles from "@/components/app/TestResult/TestResultRetriesView/styles.scss";
import TreeItemIcon from "@/components/app/Tree/TreeItemIcon";
import { IconButton } from "@/components/commons/Button";
import { Text } from "@/components/commons/Typography";
import { navigateTo } from "@/index";
import { timestampToDate } from "@/utils/time";

export const TestResultRetriesItem = ({ testResultItem }) => {
  const { id, status, message, trace, stop, duration } = testResultItem;
  const [isOpened, setIsOpen] = useState(false);
  const convertedStop = timestampToDate(stop);
  const formattedDuration = formatDuration(duration);
  const navigateUrl = `/testresult/${id}`;

  return (
    <div>
      <div className={styles["test-result-retries-item-header"]} onClick={() => setIsOpen(!isOpened)}>
        {Boolean(message) && <ArrowButton isOpened={isOpened} icon={arrowsChevronDown.id} />}
        <div className={styles["test-result-retries-item-wrap"]}>
          <TreeItemIcon status={status} className={styles["test-result-retries-item-status"]} />
          <Text className={styles["test-result-retries-item-text"]}>{convertedStop}</Text>
          <div className={styles["test-result-retries-item-info"]}>
            <Text type="ui" size={"s"} className={styles["item-time"]}>
              {formattedDuration}
            </Text>
            <IconButton
              icon={LineGeneralLinkExternal.id}
              style={"ghost"}
              size={"s"}
              className={styles["test-result-retries-item-link"]}
              onClick={() => navigateTo(navigateUrl)}
            />
          </div>
        </div>
      </div>
      {isOpened && message && (
        <div className={styles["test-result-retries-item-content"]}>
          <TestResultError message={message} trace={trace} />
        </div>
      )}
    </div>
  );
};
