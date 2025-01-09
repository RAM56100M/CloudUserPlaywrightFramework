import { statusesList } from "@allurereport/core-api";
import { computed } from "@preact/signals";
import { FunctionComponent } from "preact";
import MetadataItem, { MetadataProps } from "@/components/app/ReportMetadata/MetadataItem";
import { MetadataTestType } from "@/components/app/ReportMetadata/MetadataTestType";
import { MetadataWithIcon } from "@/components/app/ReportMetadata/MetadataWithIcon";
import * as styles from "@/components/app/ReportMetadata/styles.scss";
import { Loadable } from "@/components/commons/Loadable";
import { statsStore } from "@/stores";
import { useI18n } from "@/stores/locale";
import { capitalize } from "@/utils/capitalize";

export const MetadataSummary: FunctionComponent = () => {
  const { t } = useI18n("statuses");

  return (
    <Loadable
      source={statsStore}
      renderError={() => null}
      renderData={(stats) => {
        const allTest = computed(() => ({
          title: capitalize(t("total")),
          type: "all",
          count: stats.total,
        }));
        // TODO: https://github.com/qameta/allure3/issues/178
        // const metadataStatsKeys: (keyof Statistic)[] = ["flakyTests", "retryTests", "newTests"];
        // const metaDataTests = metadataStatsKeys
        //   .filter((key) => stats[key])
        //   .map((key) => {
        //     const title = t[key];
        //     const props = { title, count: stats[key], type: key };
        //
        //     return (
        //       <>
        //         <MetadataItem key={key} props={props} renderComponent={MetadataWithIcon} />
        //       </>
        //     );
        //   });

        const metadataStatuses = statusesList
          .map((status) => ({ status, value: stats[status] }))
          .filter(({ value }) => value)
          .map(({ status, value }) => {
            const title = capitalize(t(status) ?? status ?? "");
            const props = {
              title,
              count: value,
              status,
            } as MetadataProps;

            return (
              <MetadataItem
                data-testid={`metadata-item-${status}`}
                key={status}
                props={props}
                renderComponent={MetadataTestType}
              />
            );
          });

        return (
          <div class={styles["report-metadata-summary"]}>
            <div className={styles["report-metadata-all-tests"]}>
              <MetadataItem
                data-testid="metadata-item-total"
                props={allTest.value}
                renderComponent={MetadataWithIcon}
              />
              {/*<div className={styles["report-metadata-separator"]}></div>*/}
              {/*{metaDataTests}*/}
            </div>
            <div className={styles["report-metadata-status"]}>{metadataStatuses}</div>
          </div>
        );
      }}
    />
  );
};
