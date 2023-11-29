import styles from "./index.module.scss";
import ActiveLink from "../ActiveLink";

const AppHeader = () => {
  const links = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Monsters",
      to: "/monsters",
    },
    {
      label: "Weapons",
      to: "/weapons",
    },
    {
      label: "Armor Sets",
      to: "/armor-sets",
    },
    {
      label: "Skills",
      to: "/skills",
    },
  ];

  return (
    <div className={styles.appHeader}>
      {links.map((link) => (
        <ActiveLink url={link.to} activeClassName={styles.active}>
          {link.label}
        </ActiveLink>
      ))}
    </div>
  );
};

export default AppHeader;
