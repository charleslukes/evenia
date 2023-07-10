import homeStyles from "@styles/home.module.scss";
import EventCard from "@components/EventCard";

const Home = () => {
  return (
    <section className={homeStyles.home}>
      <h1>Our events</h1>
      <div className={homeStyles.cards}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
};

export default Home;
