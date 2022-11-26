import styles from "../../styles/Home.module.css";
import { csv } from "d3";
import { useEffect, useState } from "react";

const D3 = () => {
  const [data, setData] = useState(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    csv(
      "https://gist.githubusercontent.com/urbanobaz/f693d8d73a18f62e269a96b0edd14cbf/raw/96c0846c0e0044c5bedb1b93bb2dd26d5ff44244/colors.csv"
    ).then(setData);
    window.console.log(data);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          {data ? (
            data.map((d) => (
              <div
                key={d.ID}
                className={styles.colorBlock}
                style={{ backgroundColor: d.hex }}
              >
                <p className={styles.text}>{d.color}</p>
              </div>
            ))
          ) : (
            <div />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <p className={styles.pFooter}>Made with</p>
          <div className={styles.footerImageDiv}>
            <img src="/heart.ico" className={styles.imageFooter} />
          </div>
          <p className={styles.pFooter}>by</p>
          <div className={styles.footerImageDiv}>
            <img src="/favicon.ico" className={styles.imageFooter} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default D3;
