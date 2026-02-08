"use client"

import Lenis from "lenis";
import { useEffect } from "react";

const LenisDiv = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
        });

        // Use requestAnimationFrame to continuously update the scroll
        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, [])


    return (
        <>
            {children}
        </>
    )
}

export default LenisDiv