import Head from "next/head";
import Header from "../components/header";
import Meetinginfo from "../components/meetinginfo";
import Notes from "../components/notes";
import Chatinfo from "../components/chatinfo";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home({ data }) {
  return (
    <motion.div
      className={styles.container}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Meetly</title>
        <meta name="description" content="Make your meeting schedule" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Meetinginfo />
      <div className={styles.subContainer}>
        <Notes images={data} />
        <Chatinfo images={data} />
      </div>
    </motion.div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://reqres.in/api/users?page=1");
  const data = await res.json();
  return {
    props: { data },
  };
}
