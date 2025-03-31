import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import ThreeD from "./ThreeD.jsx";
import {Suspense} from "react";
import CanvasLoader from "./CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import Target from "./Target.jsx";
import {calculateSizes} from "../constants/index.js";
import ReactLogo from "./ReactLogo.jsx";
import Cube from "./Cube.jsx";
import Rings from "./Rings.jsx";
import HeroCamera from "./HeroCamera.jsx";
import Button from "./Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section id="home" className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi there! I am Poomrapee <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Currently being a sloth
                </p>
                <div className="w-full h-full absolute inset-0">
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                            <HeroCamera>
                                <ThreeD
                                    position={sizes.roomPosition}
                                    rotation={[3.5, -0.9, -3.1]}
                                    scale={sizes.roomScale}
                                />
                            </HeroCamera>
                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>
                            <ambientLight intensity={1} />
                            <directionalLight position={[5, 10, 10]} intensity={2} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <a href="#about" className="w-fit">
                        <Button name="Let's work together" isBeam containerClass="sm:w-fit w-fulll sm:min-w-96"/>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero
