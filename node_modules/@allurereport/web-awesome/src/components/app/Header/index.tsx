import githubLogo from "@/assets/svg/github.svg";
import { LanguagePicker } from "@/components/app/LanguagePicker";
import { ThemeButton } from "@/components/app/ThemeButton/ThemeButton";
import { SvgIcon } from "@/components/commons/SvgIcon";
import { Text } from "@/components/commons/Typography";
import * as styles from "./styles.scss";

export const Header = () => {
  return (
    <div className={styles.above}>
      <div className={styles.right}>
        <LanguagePicker />
        <ThemeButton />
      </div>
    </div>
  );
};
