import React from "react";
import ProductOverview from "./ProductOverview";
import ImageSlider from "./ImageSlider";
import TargetIndustryCard from "./TargetIndustryCard";
import ProductSlider from "../Home/ProductSlider";
import ServiceSlider from "./ServiceSlider";



const Home = () => {

  const industryData=[
    {  
      image:"https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/HomePage%2Felectrical.webp?alt=media&token=56f5b631-e8cd-4f6e-bd19-f7a246a58633",
      name:"Energy Fasteners",
      description:" In the energy sector, precision fasteners are vital for securing components in renewable projects and maintaining the stability of traditional power infrastructure. These essential components ensure the efficiency and reliability of equipment, playing a pivotal role in advancing sustainable energy initiatives."
    },
    {  
      image:"https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/HomePage%2FConstruction.webp?alt=media&token=4440f785-1f5a-4c96-8c23-0b4e62aa9924",
      name:"Construction Fasteners",
      description:"In construction, fasteners are crucial for securely joining building materials, ensuring structural integrity. Precision-engineered for durability, these components withstand the demands of diverse construction environments. Complying with rigorous standards, construction fasteners contribute to safety and long-term reliability. Their efficient application facilitates faster and robust construction processes."
    },
    {  
      image:"https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/HomePage%2Foil-gas.webp?alt=media&token=46af3eaf-11ef-4306-93aa-fc8d45896af2",
      name:"Oil and Gas Fasteners",
      description:"In the oil and gas industry, robust fasteners are essential for securing equipment and structures in harsh environments. These specialized fasteners provide durability and corrosion resistance, ensuring the integrity of installations, pipelines, and equipment crucial to the extraction, processing, and transportation of oil and gas resources."
    }

  ]
  return (
    <>
      <ImageSlider></ImageSlider>
      <ProductOverview />
      <ProductSlider />
      {
        industryData.map((item,index)=>{
          return(
              <TargetIndustryCard title={item.name} imageUrl={item.image} description={item.description}/>
          )
        })
      }
      <ServiceSlider/>
    </>
  );
};

export default Home;
