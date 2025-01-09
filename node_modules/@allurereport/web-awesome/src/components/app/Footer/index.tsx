import { clsx } from "clsx";
import * as styles from "@/components/app/BaseLayout/styles.scss";
import { FooterLogo } from "@/components/app/Footer/FooterLogo";
import { FooterVersion } from "@/components/app/Footer/FooterVersion";

export const Footer = () => {
  return (
    <div className={clsx(styles.below)}>
      <FooterLogo />
      <FooterVersion />
    </div>
  );
};
