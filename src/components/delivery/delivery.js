import React from 'react';
import "./delivery.css"
import Filters from '../common/filters/filters';
import DeliveryCollections from './deliveryCollection/deliveryCollections';
import TopBrands from './deliveryCollection/topBrands/topBrands';
import ExploreSection from '../common/exploreSection/exploreSection';
import { restaurants } from '../../data/restaurants';

const deliveryFilters=[
  {
    id:1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },

  {
    id:2,
    title: "Rating:4.0+",
  },
  
  {
    id:3,
    title: "Safe and Hygienic",
  },
  
  {
    id:4,
    title: "Pure Vge",
  },
  
  {
    id:5,
    title: "delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  
  {
    id:6,
    title: "Great Offers",
  },
  
];


const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection
      restaurants={restaurantsList}
        collectionName="Delivery Restaurants in Mumbai"
      />
    </div>
  );
};
export default Delivery