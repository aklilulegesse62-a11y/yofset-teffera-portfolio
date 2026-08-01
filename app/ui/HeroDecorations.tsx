import { withBasePath } from "../data";

const palette = ["#071C2C", "#176B9C", "#2D8BA5", "#C6A04A", "#303436"];

export function DottedHalo() {
  const dots = Array.from({ length: 260 }, (_, index) => {
    const band = index % 7;
    const step = Math.floor(index / 7);
    const angle = (-88 + step * 7.2 + Math.sin(index * 1.7) * 1.7) * Math.PI / 180;
    const radius = 252 + band * 23 + Math.sin(index * 2.3) * 6;
    return <circle key={index} cx={360 + Math.cos(angle) * radius} cy={360 + Math.sin(angle) * radius} r={.8 + ((index * 7) % 5) * .28} fill={palette[index % palette.length]} opacity={.32 + (index % 4) * .1} />;
  });
  return <g className="dotted-halo">{dots}</g>;
}

export function RadialRhythm() {
  return <g className="radial-rhythm">{Array.from({ length: 22 }, (_, index) => {
    const angle = -54 + index * 5.3;
    const length = 29 + (index % 5) * 9;
    return <rect key={index} x={610} y={352 - length / 2} width={length} height={7 + index % 3} rx="2" fill={index % 4 === 0 ? "#F7F4ED" : "#202427"} opacity={.72 + (index % 3) * .1} transform={`rotate(${angle} 360 360)`} />;
  })}</g>;
}

export function PortraitPortal() {
  return <svg className="portrait-portal" viewBox="0 0 720 720" aria-hidden="true">
    <defs><filter id="roughPortal"><feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="3" seed="7" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/></filter></defs>
    <DottedHalo />
    <g className="portal-rings" fill="none" filter="url(#roughPortal)" vectorEffect="non-scaling-stroke">
      <circle cx="360" cy="360" r="221" stroke="#176B9C" strokeWidth="9" strokeDasharray="260 28 105 15 210 22" opacity=".78"/>
      <circle cx="360" cy="360" r="235" stroke="#C6A04A" strokeWidth="4" strokeDasharray="180 14 90 8 230 18" opacity=".65"/>
      <circle cx="360" cy="360" r="248" stroke="#202427" strokeWidth="3" strokeDasharray="330 22 170 13" opacity=".7"/>
      <circle cx="360" cy="360" r="258" stroke="#176B9C" strokeWidth="2" strokeDasharray="92 17 145 11 68 20" opacity=".52"/>
    </g>
    <RadialRhythm />
  </svg>;
}

export function FemaleProfile() {
  return <g className="female-profile" fill="none" stroke="#303436" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
    <path d="M17 107 C68 83 112 90 135 119 C151 139 137 166 150 185 C166 208 205 216 202 232 C199 245 176 246 172 257 C169 268 185 278 179 289 C173 299 154 297 151 309 C148 323 169 335 160 350 C148 370 111 351 94 369 C75 389 86 429 113 458"/>
    <path d="M106 181 C123 171 141 174 151 184 M132 225 C147 229 158 229 170 225 M147 260 C155 266 162 266 169 262"/>
  </g>;
}

export function FloralCorner() {
  return <g className="floral-corner" strokeLinecap="round" strokeLinejoin="round">
    <path d="M35 800 C55 725 73 664 83 576 M82 676 C57 650 42 619 37 584 M77 643 C105 620 118 592 121 562 M67 718 C42 700 29 676 21 650" fill="none" stroke="#234F3E" strokeWidth="5"/>
    <g fill="#366D52" stroke="#234F3E" strokeWidth="2"><path d="M46 650 C12 632 12 604 17 585 C44 597 57 620 46 650Z"/><path d="M86 611 C111 578 136 583 151 591 C139 618 117 631 86 611Z"/><path d="M57 701 C27 690 13 669 14 650 C43 652 60 670 57 701Z"/></g>
    <g transform="translate(48 748)" fill="#176B9C" stroke="#124E78" strokeWidth="2"><ellipse rx="19" ry="48"/><ellipse rx="19" ry="48" transform="rotate(60)"/><ellipse rx="19" ry="48" transform="rotate(120)"/><circle r="14" fill="#C6A04A"/></g>
    <g transform="translate(100 697)" fill="#A8462D" stroke="#7C3023" strokeWidth="2"><ellipse rx="13" ry="34"/><ellipse rx="13" ry="34" transform="rotate(60)"/><ellipse rx="13" ry="34" transform="rotate(120)"/><circle r="9" fill="#C6A04A"/></g>
    <g transform="translate(86 594)" fill="none" stroke="#C18A2E" strokeWidth="4"><ellipse rx="8" ry="25"/><ellipse rx="8" ry="25" transform="rotate(60)"/><ellipse rx="8" ry="25" transform="rotate(120)"/><circle r="6" fill="#C6A04A"/></g>
    <circle cx="29" cy="552" r="6" fill="#176B9C"/><circle cx="119" cy="633" r="6" fill="#C6A04A"/><circle cx="137" cy="739" r="5" fill="#A8462D"/>
  </g>;
}

export function SymbolCluster() {
  return <g className="symbol-cluster" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke">
    <g transform="translate(760 142)" stroke="#C18A2E" strokeWidth="3"><circle r="18" fill="#C6A04A" fillOpacity=".18"/>{Array.from({length:12},(_,i)=><path key={i} d="M0 -28 L0 -40" transform={`rotate(${i*30})`}/>)}</g>
    <path d="M690 205 A26 26 0 1 0 724 173 A21 21 0 1 1 690 205Z" fill="#176B9C" stroke="#124E78" strokeWidth="2"/>
    <g transform="translate(676 275)" stroke="#303436" strokeWidth="3"><path d="M-25 0 Q0 -27 25 0 Q0 26 -25 0Z"/><circle r="8" fill="#071C2C"/><path d="M-18 -15 l-5 -8 M-8 -20 l-2 -9 M8 -20 l2 -9 M18 -15 l5 -8" strokeWidth="2"/></g>
    <path d="M742 350 l9 17 18 8-18 8-9 18-8-18-18-8 18-8Z" fill="#176B9C" stroke="#176B9C"/>
    <g transform="translate(724 437)" stroke="#A8462D" strokeWidth="2.5"><circle r="5" fill="#C6A04A"/><ellipse rx="6" ry="17"/><ellipse rx="6" ry="17" transform="rotate(60)"/><ellipse rx="6" ry="17" transform="rotate(120)"/></g>
  </g>;
}

export function EthiopianMotif() {
  return <g className="ethiopian-motif" fill="none" stroke="#C18A2E" strokeWidth="2.3" strokeLinejoin="round" vectorEffect="non-scaling-stroke"><path d="M786 772 l24-24 24 24-24 24Z M770 772 l24-24 24 24-24 24Z M802 772 l24-24 24 24-24 24Z M794 772 l16-16 16 16-16 16Z"/></g>;
}

export function BrushDivider() {
  return <g className="brush-divider" fill="none" stroke="#202427" strokeLinecap="round"><path d="M196 778 C330 774 460 783 608 777 M865 777 C1070 782 1280 773 1518 778" strokeWidth="4" opacity=".75"/><path d="M208 784 C358 780 472 789 611 783 M868 784 C1082 788 1315 778 1504 785" strokeWidth="1.8" opacity=".42" strokeDasharray="28 8 6 5"/></g>;
}

export function HeroDecorations() {
  return <div className="hero-handmade hero-supplied-overlay" aria-hidden="true"><svg className="hero-sketch-layer" viewBox="0 0 1694 936" preserveAspectRatio="xMidYMid slice"><image href={withBasePath("/images/yofset-homepage-decorative-elements.svg")} width="1694" height="936" /></svg></div>;
}

export function BrushUnderline() {
  return <svg className="brush-underline" viewBox="0 0 360 22" aria-hidden="true"><path d="M8 12 C73 5 143 17 213 10 C265 6 310 13 351 9" fill="none" stroke="#176B9C" strokeWidth="9" strokeLinecap="round" strokeDasharray="340" pathLength="340"/><path d="M14 17 C101 12 192 19 340 14" fill="none" stroke="#124E78" strokeWidth="2" opacity=".55" strokeDasharray="19 7"/></svg>;
}

export function CTAArrow() {
  return <svg className="cta-sketch-arrow" viewBox="0 0 100 38" aria-hidden="true"><path d="M93 17 C69 16 42 18 9 20 M26 8 L8 20 L27 31" fill="none" stroke="#303436" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
