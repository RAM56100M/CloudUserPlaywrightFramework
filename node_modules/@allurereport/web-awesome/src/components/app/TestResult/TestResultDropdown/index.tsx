import arrowsChevronDown from "@/assets/svg/arrows-chevron-down.svg";
import { ArrowButton } from "@/components/app/ArrowButton";
import { Counter } from "@/components/commons/Counter";
import { SvgIcon } from "@/components/commons/SvgIcon";
import { Text } from "@/components/commons/Typography";
import * as styles from "./styles.scss";

export const TestResultDropdown = ({ isOpened, setIsOpen, title, icon, counter }) => {
  return (
    <div className={styles["test-result-dropdown"]} onClick={() => setIsOpen(!isOpened)}>
      <ArrowButton isOpened={isOpened} icon={arrowsChevronDown.id} />
      <div className={styles["test-result-dropdown-wrap"]}>
        <SvgIcon id={icon}></SvgIcon>
        <Text bold>{title}</Text>
        <Counter count={counter} size="s" />
      </div>
    </div>
  );
};
