import React, { useState } from "react";
import { Pane, Tablist, Tab, Text } from "evergreen-ui";
import styles from "@app/styles/Layout.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: JSX.Element;
}

function Header() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [tabs] = useState([
    {
      title: "Blog",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
  ]);

  return (
    <Pane
      width="100%"
      display="flex"
      justifyContent="center"
      marginTop="20px"
      marginBottom="20px"
    >
      <Tablist marginBottom={16}>
        {tabs.map((tab, index) => (
          <Link
            key={index}
            className={`link ${router.pathname === tab.href ? "active" : ""}`}
            href={tab.href}
          >
            <Tab
              id={String(index)}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${index}`}
              size={"large"}
            >
              {tab.title}
            </Tab>
          </Link>
        ))}
      </Tablist>
    </Pane>
  );
}

function Footer() {
  return (
    <div className={styles.footer}>
      <Text size={500}>Blog created by Hien Pham</Text>
    </div>
  );
}

function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
