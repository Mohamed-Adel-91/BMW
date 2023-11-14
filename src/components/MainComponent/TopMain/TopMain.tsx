import "./TopMain.css"
import Slides from "./Slides";
import CardsRow from "./CardsRow";
import { useState } from "react";

const TopMain = () => {
    const [showDiv, setShowDiv] = useState(false);

    const handleClickRow = () => {
        setShowDiv(!showDiv);
    };

    const handleClickGrid = () => {
        setShowDiv(!showDiv);
    };

    return (
        <div className="TopMainElements">
            <div className="ShowSlidesButton">
                <button className="slidesRow" onClick={handleClickRow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="79.357" height="15.221" viewBox="0 0 79.357 15.221">
                        <g id="Group_787" data-name="Group 787" transform="translate(-286.794 831.61) rotate(-90)">
                            <rect id="Rectangle_315" data-name="Rectangle 315" width="14" height="14" transform="translate(817 328.472)" fill="#37393b" />
                            <rect id="Rectangle_316" data-name="Rectangle 316" width="14" height="14" transform="translate(817 310.473)" fill="#37393b" />
                            <path id="Path_19" data-name="Path 19" d="M834.393,325.782l-7.61-7.61-7.61,7.61,2.438,2.438,3.448-3.448v13.079h3.448V324.772l3.448,3.448Z" transform="translate(-2.782 -31.378)" fill="#37393b" />
                            <path id="Path_20" data-name="Path 20" d="M831.955,360.631l-3.448,3.448V351h-3.448v13.079l-3.448-3.448-2.438,2.438,7.61,7.61,7.61-7.61Z" transform="translate(-2.782 -4.528)" fill="#37393b" />
                        </g>
                    </svg>
                </button>
                <button className="slidesGrid" onClick={handleClickGrid}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                        <g id="Group_786" data-name="Group 786" transform="translate(-623 -411)">
                            <path id="Path_10" data-name="Path 10" d="M637,425H623V411h14Z" fill="currentColor" />
                            <path id="Path_11" data-name="Path 11" d="M655,425H641V411h14Z" fill="currentColor" />
                            <path id="Path_12" data-name="Path 12" d="M673,425H659V411h14Z" fill="currentColor" />
                            <path id="Path_13" data-name="Path 13" d="M637,443H623V429h14Z" fill="currentColor" />
                            <path id="Path_14" data-name="Path 14" d="M655,443H641V429h14Z" fill="currentColor" />
                            <path id="Path_15" data-name="Path 15" d="M673,443H659V429h14Z" fill="currentColor" />
                            <path id="Path_16" data-name="Path 16" d="M637,461H623V447h14Z" fill="currentColor" />
                            <path id="Path_17" data-name="Path 17" d="M655,461H641V447h14Z" fill="currentColor" />
                            <path id="Path_18" data-name="Path 18" d="M673,461H659V447h14Z" fill="currentColor" />
                        </g>
                    </svg>
                </button>
            </div>
            <div className="Slides">
                {showDiv && <CardsRow />}
                {!showDiv && <Slides />}
            </div>
        </div>
    )
}

export default TopMain