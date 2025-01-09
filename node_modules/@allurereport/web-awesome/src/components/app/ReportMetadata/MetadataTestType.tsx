import { clsx } from "clsx";
import { FunctionComponent } from "preact";
import { MetadataProps } from "@/components/app/ReportMetadata/MetadataItem";
import * as styles from "@/components/app/ReportMetadata/styles.scss";
import { Text } from "@/components/commons/Typography";

export const MetadataTestType: FunctionComponent<MetadataProps> = ({ status, count }) => {
  return (
    <div data-testid="metadata-value" className={styles["metadata-test-type"]}>
      <div className={clsx(styles["metadata-color-badge"], styles?.[`status-${status}`])}></div>
      <Text type={"ui"} size={"m"} bold>
        {count}
      </Text>
    </div>
  );
};
