import type { EnvironmentItem } from "@allurereport/core-api";
import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { MetadataList } from "@/components/app/Metadata";
import { MetadataButton } from "@/components/app/MetadataButton";
import { MetadataSummary } from "@/components/app/ReportMetadata/MetadataSummary";
import { Loadable } from "@/components/commons/Loadable";
import { envInfoStore } from "@/stores/envInfo";
import * as styles from "./styles.scss";

export interface MetadataItem extends EnvironmentItem {
  value?: string;
}

export type MetadataProps = {
  envInfo?: MetadataItem[];
  size?: "s" | "m";
  groupedLabels?: Record<string, string[]>;
};

const Metadata: FunctionalComponent<MetadataProps> = ({ envInfo }) => {
  const [isOpened, setIsOpen] = useState(true);
  const convertedEnvInfo = envInfo.map((env) => {
    return { ...env, value: env.values.join(", ") };
  });

  return (
    <div class={styles["report-metadata"]}>
      <MetadataButton isOpened={isOpened} setIsOpen={setIsOpen} title={"Metadata"} counter={envInfo.length} />
      {isOpened && <MetadataList envInfo={convertedEnvInfo} />}
    </div>
  );
};

export const ReportMetadata = () => {
  return (
    <div className={styles["report-metadata-wrapper"]}>
      <MetadataSummary />
      <Loadable
        source={envInfoStore}
        renderError={() => null}
        renderData={(data) => Boolean(data?.length) && <Metadata envInfo={data} />}
      />
    </div>
  );
};
