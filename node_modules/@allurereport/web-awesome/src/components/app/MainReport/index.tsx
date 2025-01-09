import * as styles from "@/components/app/BaseLayout/styles.scss";
import { Header } from "@/components/app/Header";
import { ReportBody } from "@/components/app/ReportBody";
import { ReportHeader } from "@/components/app/ReportHeader";
import { ReportMetadata } from "@/components/app/ReportMetadata";

const MainReport = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <ReportHeader />
        <ReportMetadata />
        <ReportBody />
      </div>
    </>
  );
};
export default MainReport;
