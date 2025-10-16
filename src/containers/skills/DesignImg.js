import React, { Component } from "react";

export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="1c51936f-ad83-4493-a1e8-5a7ca1846cda"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        width="1164.07"
        height="555.93"
        viewBox="0 0 1164.07 555.93"
      >
        <defs>
          <linearGradient
            id="ac59aa7e-40f5-4d5f-b82f-fdd6bf7d03ee"
            x1="439.31"
            y1="679.56"
            x2="439.4"
            y2="679.56"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="gray" stopOpacity="0.25" />
            <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
            <stop offset="1" stopColor="gray" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient
            id="72a3db62-0825-44ad-a640-19754e14ba99"
            x1="186.82"
            y1="533.62"
            x2="458.12"
            y2="533.62"
            // xlink:href="#ac59aa7e-40f5-4d5f-b82f-fdd6bf7d03ee"
          />
          <linearGradient
            id="060ac890-45f2-497a-b51d-740a183b02f3"
            x1="-1193.63"
            y1="706.12"
            x2="-1193.63"
            y2="383.52"
            gradientTransform="translate(1997.33)"
            // xlink:href="#ac59aa7e-40f5-4d5f-b82f-fdd6bf7d03ee"
          />
        </defs>
        <title>design tools</title>
        <image
          href={require("../../assets/images/ui_ux_design.png")}
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          style={{
            filter: theme.imageHighlight
              ? `drop-shadow(0 0 6px ${theme.imageHighlight})`
              : "none",
            opacity: 0.9,
            transform: "scale(1.3)",
            transformOrigin: "top left",
          }}
        />
        </svg>
    );
  }
}
