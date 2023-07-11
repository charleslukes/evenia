import homeStyles from "@styles/home.module.scss";
import EventCardList from "@components/EventCard";

const Home = () => {
  return (
    <section className={homeStyles.home}>
      <h1>Our events</h1>
      <div className={homeStyles.cards}>
        <EventCardList />
      </div>
    </section>
  );
};

export default Home;
