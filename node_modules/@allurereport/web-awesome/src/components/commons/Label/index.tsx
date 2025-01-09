import { FunctionComponent } from "preact";
import * as styles from "@/components/commons/Label/styles.scss";
import { Text } from "@/components/commons/Typography";

export const Label: FunctionComponent = ({ children }) => (
  <div className={styles.label}>
    <Text size="s" bold type="ui">
      {children}
    </Text>
  </div>
);
