import {aboutDetail, } from "../constants/index.js";
import Globe from "react-globe.gl";
import { useState, useEffect } from 'react';
import Button from "./Button.jsx";

const GridItems = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return aboutDetail.map((item) => {
        switch (item.id) {
            case 3:
                return (
                    <div key={item.id} className="col-span-1 xl:row-span-4">
                        <div className="grid-container">
                            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                                <GridGlobe/>
                            </div>
                            <div>
                                <p className="grid-headtext">{item.headtext}</p>
                                <p className="grid-subtext">{item.subtext}</p>
                                <a href="#contact" className="w-fit">
                                    <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div key={item.id} className="xl:col-span-2 xl:row-span-3">
                        <div className="grid-container">
                            <img src={item.img} alt={item.img} className="w-full sm:h-[266px] h-fit object-contain"/>
                            <div>
                                <p className="grid-headtext">{item.headtext}</p>
                                <p className="grid-subtext">{item.subtext}</p>
                            </div>
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div key={item.id} id = "contact" className="xl:col-span-1 xl:row-span-2">
                        <div className="grid-container">
                            <img src={item.img} alt={item.img} className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                            <div className="space-y-2">
                                <p className="grid-subtext text-center">{item.subtext}</p>
                                <div className="copy-container" onClick={() => handleCopy(item.headtext)}>
                                    <img src={hasCopied ? './assets/tick.svg' : './assets/copy.svg'} alt="copy"/>
                                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">{item.headtext}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            default:
                return (
                    <div key={item.id} className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <img src={item.img} alt={item.img} className="w-full sm:h-[276px] h-fit object-contain"/>
                            <div>
                                <p className="grid-headtext">{item.headtext}</p>
                                <p className="grid-subtext">{item.subtext}</p>
                            </div>
                        </div>
                    </div>
                )
        }
    })
}

const GridGlobe = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('../datasets/ne_110m_populated_places_simple.geojson').then(res => res.json())
            .then(({features}) => setPlaces(features));
    }, []);

    return (
        <Globe
            height={326}
            width={326}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            labelsData={places}
            labelLat={d => d.properties.latitude}
            labelLng={d => d.properties.longitude}
            labelText={d => d.properties.name}
            labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
            labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
            labelColor={() => 'rgba(255, 165, 0, 0.75)'}
            labelResolution={2}
        />
    )
}

const About = () => {

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <GridItems/>
            </div>
        </section>
    )
}
export default About
