import React, {useState} from 'react'
import Footer from '../../components/common/footer/footer'
import Header from '../../components/common/header/header'
import TabOptions from '../../components/common/taboptions/tab'
import Delivery from '../../components/delivery/delivery'
import DiningOut from '../../components/diningOut/diningOut';
import Nightlife from '../../components/nightlife/nightlife';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
      <div>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
        <Footer />
      </div>
    );
  };
  
  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
  
      case "Dining Out":
        return <DiningOut />;
  
      case "Nightlife":
        return <Nightlife />;
  
      default:
        return <Delivery />;
    }
  };
  export default HomePage;