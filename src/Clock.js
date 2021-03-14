import React from 'react';
import Clockface from './Clockface';

class Clock extends React.Component {

    render() {
        return (
            <svg id="clock" fill="none" fillRule="evenodd" stroke="black" strokeWidth="0.501" strokeLinejoin="bevel" strokeMiterlimit="10" fontFamily="Times New Roman" fontSize="16" version="1.1" overflow="visible" width="683" height="900" viewBox="0 -841.891 189.754 249.005">
                <defs>
                 <radialGradient id="RadialGradient" gradientUnits="userSpaceOnUse" cx="298.286" cy="424.532" r="2.907" gradientTransform="matrix(-0.664093 -0.74765 0.74765 -0.664093 -119.421 504.172)">
                  <stop offset="0" stopColor="#b67c50"/>
                  <stop offset="1" stopColor="#854f26"/>
                 </radialGradient>
                </defs>
                <g id="clock" transform="scale(1 -1)">
                    <path d="M 42.292,696.084 L 94.898,694.648 L 147.505,696.084 C 133.259,683.636 113.77,671.335 113.72,648.25 L 76.077,648.25 C 76.027,671.335 56.538,683.636 42.292,696.084 Z" stroke="none" fill="#854f26" strokeLinejoin="miter" markerStart="none" markerEnd="none"/>
                    <rect x="-5.643" y="-44.61" width="11.286" height="89.221" transform="translate(44.622 750.319) rotate(180)" fill="#985d30" stroke="none" strokeLinejoin="miter"/>
                    <rect x="-5.643" y="-44.61" width="11.286" height="89.221" transform="translate(145.129 750.319) rotate(180)" fill="#985d30" stroke="none" strokeLinejoin="miter"/>
                    <rect x="50.266" y="794.93" width="89.221" height="11.286" fill="#c89268" stroke="none" strokeLinejoin="miter"/>
                    <rect x="50.266" y="694.422" width="89.221" height="11.286" fill="#854f26" stroke="none" strokeLinejoin="miter"/>
                    <rect x="50.266" y="705.709" width="89.221" height="89.221" fill="#a36c42" stroke="none" strokeLinejoin="miter"/>
                    <ellipse rx="53.48" ry="53.48" transform="translate(94.875 750.319) rotate(90)" fill="#985d30" strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.561" stroke="none"/>
                    <ellipse rx="52.08" ry="52.08" transform="translate(94.875 750.319) rotate(90)" fill="#47a8a9" strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.547" stroke="none"/>
                    <ellipse rx="37.88" ry="37.88" transform="translate(94.876 750.319) rotate(90)" fill="#985d30" strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.397" stroke="none"/>
                    <ellipse rx="36.005" ry="36.005" transform="translate(94.876 750.319) rotate(90)" fill="#110200" strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.377" stroke="none"/>
                    <ellipse rx="33.755" ry="33.755" transform="translate(94.876 750.319) rotate(90)" fill="#a8956a" strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.353" stroke="none"/>
                    <ellipse rx="32.93" ry="32.93" transform="translate(94.876 750.319) rotate(90)" fill="#1a4988" strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.345" stroke="none"/>

                    <Clockface></Clockface>

                    <path d="M 38.978,705.708 L 50.265,705.708 L 50.265,694.421 L 42.292,696.084 L 38.978,705.708 Z" fill="#8f5325" stroke="none" strokeLinejoin="miter" markerStart="none" markerEnd="none"/>
                    <path d="M 150.772,705.708 L 139.485,705.708 L 139.485,694.421 L 147.458,696.084 L 150.772,705.708 Z" fill="#8f5325" stroke="none" strokeLinejoin="miter" markerStart="none" markerEnd="none"/>
                    <path d="M 150.773,794.928 L 139.486,794.928 L 139.486,806.215 L 147.459,804.552 L 150.773,794.928 Z" fill="#b67c50" stroke="none" strokeLinejoin="miter" markerStart="none" markerEnd="none"/>
                    <path d="M 38.977,794.929 L 50.264,794.929 L 50.264,806.216 L 42.291,804.553 L 38.977,794.929 Z" fill="#b67c50" stroke="none" strokeLinejoin="miter" markerStart="none" markerEnd="none"/>

                    <path d="M 50.261,694.421 L 139.485,694.421 C 125.239,681.973 113.719,671.335 113.669,648.25 L 76.077,648.25 C 76.027,671.335 64.507,681.973 50.261,694.421 Z" stroke="none" fill="#985d30" strokeLinejoin="miter" markerStart="none" markerEnd="none"/>
                    <rect x="73.225" y="646.111" width="43.296" height="2.139" fill="#985d30" stroke="none" strokeLinejoin="miter"/>
                    <rect x="75.924" y="643.972" width="37.898" height="2.139" fill="#854f26" stroke="none" strokeLinejoin="miter"/>
                    <rect x="74.949" y="641.833" width="39.849" height="2.139" fill="#985d30" stroke="none" strokeLinejoin="miter"/>
                    <rect x="75.924" y="639.694" width="37.898" height="2.139" fill="#854f26" stroke="none" strokeLinejoin="miter"/>
                    <ellipse rx="2.907" ry="2.907" transform="translate(94.875 636.593) rotate(131.612)" stroke="none" strokeLinejoin="miter" fill="url(#RadialGradient)"/>

                    <g>
                        <rect x="0.001" y="812.267" width="189.752" height="29.624" fill="#000000" stroke="none" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="miter"/>
                        <text transform="translate(94.601 820.821) scale(1 -1)" kerning="auto" fontSize="17.78" fontFamily="Cinzel" fill="#ffffff" stroke="none" strokeWidth="0.445" strokeLinecap="round" strokeLinejoin="round"><tspan x="-41.914" y="0">NORTH</tspan></text>    
                    </g>

                    <g>
                        <rect x="-14.812" y="-94.876" width="29.624" height="189.752" transform="translate(174.941 717.389) rotate(180)" fill="#000000" stroke="none" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="miter"/>
                        <text transform="matrix(0 -1 -1 0 168.674 717.53)" kerning="auto" fontSize="17.78" fontFamily="Cinzel" fill="#ffffff" stroke="none" strokeWidth="0.445" strokeLinecap="round" strokeLinejoin="round"><tspan x="-51.499" y="0">EAST</tspan></text>
                    </g>

                    <g>
                        <rect x="-14.812" y="-94.876" width="29.624" height="189.752" transform="translate(94.876 607.698) rotate(-90)" fill="#000000" stroke="none" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="miter"/>
                        <text transform="translate(94.786 601.434) scale(1 -1)" kerning="auto" fontSize="17.78" fontFamily="Cinzel" fill="#ffffff" stroke="none" strokeWidth="0.445" strokeLinecap="round" strokeLinejoin="round"><tspan x="-51.41" y="0">SOUTH</tspan></text>    
                    </g>

                    <g>
                        <rect x="-14.812" y="-94.876" width="29.624" height="189.752" transform="translate(14.813 717.389)" fill="#000000" stroke="none" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="miter"/>
                        <text transform="matrix(0 1 1 0 21.081 717.604)" kerning="auto" fontSize="17.78" fontFamily="Cinzel" fill="#ffffff" stroke="none" strokeWidth="0.445" strokeLinecap="round" strokeLinejoin="round"><tspan x="-47.623" y="0">WEST</tspan></text>    
                    </g>
                </g>
            </svg>
        )
    }
}

export default Clock;
