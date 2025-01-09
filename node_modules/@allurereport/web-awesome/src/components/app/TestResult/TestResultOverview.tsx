import type { FunctionalComponent } from "preact";
import * as styles from "@/components/app/BaseLayout/styles.scss";
import { TestResultDescription } from "@/components/app/TestResult/TestResultDescription";
import { TestResultError } from "@/components/app/TestResult/TestResultError";
import { TestResultLinks } from "@/components/app/TestResult/TestResultLinks";
import { TestResultMetadata } from "@/components/app/TestResult/TestResultMetadata";
import { TestResultParameters } from "@/components/app/TestResult/TestResultParameters";
import { TestResultSetup } from "@/components/app/TestResult/TestResultSetup";
import { TestResultSteps } from "@/components/app/TestResult/TestResultSteps";
import { TestResultTeardown } from "@/components/app/TestResult/TestResultTeardown";
import type { AllureAwesomeTestResult } from "../../../../types.js";

export type TestResultOverviewProps = {
  testResult?: AllureAwesomeTestResult;
};

export const TestResultOverview: FunctionalComponent<TestResultOverviewProps> = ({ testResult }) => {
  const { message, trace, parameters, groupedLabels, links, description, setup, steps, teardown } = testResult || {};

  return (
    <>
      {Boolean(message) && (
        <div className={styles["test-result-errors"]}>
          <TestResultError message={message} trace={trace} />
        </div>
      )}
      {Boolean(parameters?.length) && <TestResultParameters parameters={parameters} />}
      {Boolean(groupedLabels && Object.keys(groupedLabels || {})?.length) && (
        <TestResultMetadata testResult={testResult} />
      )}
      {Boolean(links?.length) && <TestResultLinks links={links} />}
      {Boolean(description) && <TestResultDescription description={description} />}
      <div className={styles["test-results"]}>
        {Boolean(setup?.length) && <TestResultSetup setup={setup} />}
        {Boolean(steps?.length) && <TestResultSteps steps={steps} />}
        {Boolean(teardown?.length) && <TestResultTeardown teardown={teardown} />}
      </div>
    </>
  );
};
