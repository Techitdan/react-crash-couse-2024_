import Hero from "../components/Hero";
import Homecards from "../components/Homecards";
import Joblisting from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Homecards />
      <Joblisting isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
