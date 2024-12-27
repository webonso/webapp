"use client"

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    // Create a ref to store the animation controls
    // to analyse the animation in the browser console
    // and to control the animation as we can stop it
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animation.current = animate(scope.current, { x: '-50%' },
            { duration: 30, ease: 'linear', repeat: Infinity }
        );
        // eg
        // animation.current.speed = 0.5;
        // but lets stop the animation when the component is unmounted
        // dynamically, let achieve directly on the return div element adding on onMouseLeave, onMouseEnter
        // return () => animation.current?.stop();
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex flex-none gap-16 text-7xl md:text-8xl font-medium group cursor-pointer">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16 pr-16">
                            <span className="text-lime-400 text-7xl">&#10038;</span>
                            <span className="group-hover:text-lime-400">Try for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
