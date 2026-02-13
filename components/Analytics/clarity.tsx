"use client"

import Clarity from "@microsoft/clarity"
import { useEffect } from "react"

const MSClarity = () => {

    useEffect(() => {
        if (typeof window !== undefined) {
            Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID!)
        }
    }, [])

    return null
}

export default MSClarity