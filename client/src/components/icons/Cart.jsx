import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <svg
        version='1.0'
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='20'
        viewBox='0 0 230.000000 219.000000'
        preserveAspectRatio='xMidYMid meet'>
        <g
          transform='translate(0.000000,219.000000) scale(0.100000,-0.100000)'
          fill={this.props.color}
          stroke='none'>
          <path
            d='M26 2174 c-21 -21 -20 -57 2 -77 16 -15 45 -17 199 -17 179 0 181 0
186 -22 3 -13 60 -302 127 -643 66 -341 128 -640 136 -664 22 -59 69 -110 129
-137 l50 -24 535 0 535 0 50 24 c52 23 93 64 121 118 14 28 184 860 184 904 0
11 -8 28 -18 37 -17 16 -90 17 -843 17 l-824 0 -48 238 c-34 172 -52 240 -64
250 -12 9 -75 12 -229 12 -180 0 -215 -2 -228 -16z m2134 -606 c0 -36 -154
-777 -167 -801 -7 -15 -28 -37 -46 -47 -31 -19 -54 -20 -557 -20 -503 0 -526
1 -557 20 -18 10 -39 32 -47 49 -13 24 -166 763 -166 799 0 9 189 12 770 12
609 0 770 -3 770 -12z'
          />
          <path
            d='M826 387 c-22 -12 -53 -39 -70 -60 -27 -34 -31 -47 -34 -110 -3 -86
19 -134 83 -179 117 -82 284 -17 315 124 21 94 -26 190 -114 232 -50 24 -133
20 -180 -7z m168 -118 c24 -27 27 -38 23 -73 -7 -49 -44 -86 -88 -86 -106 0
-145 120 -59 178 45 30 85 24 124 -19z'
          />
          <path
            d='M1789 390 c-139 -74 -152 -263 -24 -352 81 -57 187 -46 259 26 104
104 75 261 -61 330 -43 22 -129 20 -174 -4z m164 -120 c74 -82 -22 -197 -122
-145 -71 36 -59 148 19 178 29 12 75 -3 103 -33z'
          />
        </g>
      </svg>
    );
  }
}