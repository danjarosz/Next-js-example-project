import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit
        lectus, cursus ut magna sit amet, vulputate mollis dui. Nullam accumsan
        nisl in feugiat pulvinar. Integer eu cursus arcu. Quisque dapibus, massa
        ut commodo venenatis, quam tortor ultricies elit, eu sollicitudin sem
        nunc eu felis. Aenean semper faucibus purus, in vulputate elit cursus
        at. Nunc ut mauris sem. Donec imperdiet suscipit hendrerit. Mauris eu
        sodales dui, a mattis ipsum. Praesent quis ex sem. Sed arcu tortor,
        egestas eu tincidunt quis, ultricies sit amet ipsum. Nullam luctus vel
        lorem sit amet semper. Proin maximus dictum elit at gravida. Duis
        fringilla nunc mi, eget vulputate magna semper non.
      </p>
      <p>
        Mauris placerat tincidunt enim ut malesuada. In hac habitasse platea
        dictumst. Curabitur ut lorem quis turpis consequat pretium sit amet et
        erat. Integer cursus convallis iaculis. Nulla eget consequat sem. Nulla
        tincidunt nulla lacus, nec posuere dui hendrerit ac. Duis cursus eros eu
        sodales accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed lorem lectus, maximus non mi eget, dignissim lobortis mi.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
