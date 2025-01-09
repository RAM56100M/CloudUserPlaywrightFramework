import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { AllureAwesomeTestResult } from "types";
import { TestResultMetadataList } from "@/components/app/Metadata";
import { MetadataButton } from "@/components/app/MetadataButton";
import { useI18n } from "@/stores/locale";
import * as styles from "./styles.scss";

export type TestResultMetadataProps = {
  testResult?: AllureAwesomeTestResult;
};

export const TestResultMetadata: FunctionalComponent<TestResultMetadataProps> = ({ testResult }) => {
  const { t } = useI18n("ui");
  const { labels, groupedLabels } = testResult ?? {};
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div className={styles["test-result-metadata"]}>
      <MetadataButton isOpened={isOpened} setIsOpen={setIsOpened} counter={labels?.length} title={t("labels")} />

      <div className={styles["test-result-metadata-wrapper"]}>
        {isOpened && <TestResultMetadataList groupedLabels={groupedLabels} />}
      </div>
    </div>
  );
};
