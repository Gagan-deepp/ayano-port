import { GoogleAnalytics } from "@next/third-parties/google";
import MSClarity from "./clarity";

const Analytics = () => {
    return (
        <>
            <GoogleAnalytics gaId="G-99BQEVG3EV" />
            <MSClarity />
        </>
    )
}

export default Analytics