import Blog from "@/Components/blog/Blog";
import styles from "./page.module.css";
import LandingContainer from "@/Components/container/LandingContainer";
import SupportersContainer from "@/Components/container/SupportersContainer";
import AboutContainer from "@/Components/container/AboutContainer";
import ParagraphContainer from "@/Components/container/ParagraphContainer";
import dummyImage from "../../public/lading-container.jpg";
import { supporters } from "@/supporters";

export default function Home() {
    return (
        <div className={styles.page}>
            <LandingContainer />
            <div className={styles.page_label}>
                <span>Apoiadores &bull; Amigos</span>
            </div>
            <SupportersContainer content={supporters} />
            <div className={styles.page_label}>
                <span>Visões &bull; Compromissos</span>
            </div>
            <AboutContainer
                imageOne={dummyImage}
                imageTwo={dummyImage}
                paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elementum eu facilisis sed odio morbi quis commodo odio. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac odio tempor orci. Arcu odio ut sem nulla pharetra diam sit. Non odio euismod lacinia at quis risus sed vulputate. Pharetra vel turpis nunc eget lorem dolor sed. Sed adipiscing diam donec adipiscing tristique. Elementum sagittis vitae et leo duis ut. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Varius duis at consectetur lorem donec massa sapien. Neque laoreet suspendisse interdum consectetur libero id. Orci sagittis eu volutpat odio facilisis. Mauris a diam maecenas sed enim. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Laoreet suspendisse interdum consectetur libero id. Velit egestas dui id ornare arcu odio ut sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elementum eu facilisis sed odio morbi quis commodo odio. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac odio tempor orci. Arcu odio ut sem nulla pharetra diam sit."
                paragraphTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elementum eu facilisis sed odio morbi quis commodo odio. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac odio tempor orci. Arcu odio ut sem nulla pharetra diam sit. Non odio euismod lacinia at quis risus sed vulputate. Pharetra vel turpis nunc eget lorem dolor sed. Sed adipiscing diam donec adipiscing tristique. Elementum sagittis vitae et leo duis ut. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Varius duis at consectetur lorem donec massa sapien. Neque laoreet suspendisse interdum consectetur libero id. Orci sagittis eu volutpat odio facilisis. Mauris a diam maecenas sed enim. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Laoreet suspendisse interdum consectetur libero id. Velit egestas dui id ornare arcu odio ut sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elementum eu facilisis sed odio morbi quis commodo odio. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac odio tempor orci. Arcu odio ut sem nulla pharetra diam sit."
            />
            <div className={styles.page_label}>
                <span>Leia &bull; Inspire-se &bull; Compartilhe</span>
            </div>
            <div className={styles.blog_container}>
                <Blog />
            </div>
            <div className={styles.page_label}>
                <span>Buscas &bull; Realizações</span>
            </div>
            <AboutContainer
                imageOne={dummyImage}
                imageTwo={dummyImage}
                paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elementum eu facilisis sed odio morbi quis commodo odio. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac odio tempor orci. Arcu odio ut sem nulla pharetra diam sit. Non odio euismod lacinia at quis risus sed vulputate. Pharetra vel turpis nunc eget lorem dolor sed. Sed adipiscing diam donec adipiscing tristique. Elementum sagittis vitae et leo duis ut. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Varius duis at consectetur lorem donec massa sapien. Neque laoreet suspendisse interdum consectetur libero id. Orci sagittis eu volutpat odio facilisis. Mauris a diam maecenas sed enim. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Laoreet suspendisse interdum consectetur libero id. Velit egestas dui id ornare arcu odio ut sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elementum eu facilisis sed odio morbi quis commodo odio. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac odio tempor orci. Arcu odio ut sem nulla pharetra diam sit."
                paragraphTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elementum eu facilisis sed odio morbi quis commodo odio. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac odio tempor orci. Arcu odio ut sem nulla pharetra diam sit. Non odio euismod lacinia at quis risus sed vulputate. Pharetra vel turpis nunc eget lorem dolor sed. Sed adipiscing diam donec adipiscing tristique. Elementum sagittis vitae et leo duis ut. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Varius duis at consectetur lorem donec massa sapien. Neque laoreet suspendisse interdum consectetur libero id. Orci sagittis eu volutpat odio facilisis. Mauris a diam maecenas sed enim. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Laoreet suspendisse interdum consectetur libero id. Velit egestas dui id ornare arcu odio ut sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elementum eu facilisis sed odio morbi quis commodo odio. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac odio tempor orci. Arcu odio ut sem nulla pharetra diam sit."
            />
            <div className={styles.page_label}>
                <span>Agradecimentos &bull; Recompensas</span>
            </div>
            <ParagraphContainer
                image={dummyImage}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elementum eu facilisis sed odio morbi quis commodo odio. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac odio tempor orci. Arcu odio ut sem nulla pharetra diam sit. Non odio euismod lacinia at quis risus sed vulputate. Pharetra vel turpis nunc eget lorem dolor sed. Sed adipiscing diam donec adipiscing tristique. Elementum sagittis vitae et leo duis ut. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Varius duis at consectetur lorem donec massa sapien. Neque laoreet suspendisse interdum consectetur libero id. Orci sagittis eu volutpat odio facilisis. Mauris a diam maecenas sed enim. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Laoreet suspendisse interdum consectetur libero id. Velit egestas dui id ornare arcu odio ut sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Elementum eu facilisis sed odio morbi quis commodo odio. Vitae proin sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac odio tempor orci. Arcu odio ut sem nulla pharetra diam sit."
            />
        </div>
    );
}
