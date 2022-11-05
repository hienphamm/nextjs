import { Pane } from "evergreen-ui";
import Input from "./components/Input";
import styles from "@app/styles/Home.module.scss";
import Card from "./components/Card";

export default function Home() {
  return (
    <Pane>
      <div className={styles.inputSearch}>
        <Input />
      </div>

      <div className={styles.containerContent}>
        <div className={styles.cards}>
          <Card title="Test" content="hello world" url="/about" />
          <Card title="Test" content="hello world" url="/about" />
          <Card title="Test" content="hello world" url="/about" />
          <Card title="Test" content="hello world" url="/about" />
          <Card title="Test" content="hello world" url="/about" />
        </div>
      </div>
    </Pane>
  );
}
