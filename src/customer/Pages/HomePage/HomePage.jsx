import React from "react"
import MainCarosel from "../../component/HomeCarosel/MainCarosel"
import HomeSectionCarosel from "../../component/HomeSectionCarosel/HomeSectionCarosel"
import { Mens_Kurta } from "../../../data/Mens_Kurta"

const HomePage = () =>  {
    return (
        <div>
            <MainCarosel/>

            <div className='space-y-10  py-20 flex flex-col justify-center px-5 lg:px-10 '>
                <HomeSectionCarosel data={Mens_Kurta} sectionName={"Men's  Kurta"}/>
                <HomeSectionCarosel data={Mens_Kurta} sectionName={"Men's  Shoes"}/>
                <HomeSectionCarosel data={Mens_Kurta} sectionName={"Men's  Shirt"}/>
                <HomeSectionCarosel data={Mens_Kurta} sectionName={"Women's Saree"}/>
                <HomeSectionCarosel data={Mens_Kurta} sectionName={"Women's  Dress"}/>
            </div>
        </div>
    )
}
export default HomePage