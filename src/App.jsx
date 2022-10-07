import styles from "./style";

import { useInView } from "react-intersection-observer";

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Testimonials,
  Navbar,
  Hero,
  Stats,
} from "./components";

function App() {
  const { ref, entry } = useInView({
    rootMargin: "-1px 0px",
    threshold: 1,
  });
  return (
    <div className="w-full bg-primary pt-1">
      <div
        ref={ref}
        className={`${styles.paddingX} ${styles.flexCenter} ${
          !entry?.isIntersecting && "bg-primary"
        } transition bg-opacity-95 sticky top-0  z-50 `}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
