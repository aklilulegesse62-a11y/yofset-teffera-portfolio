export function SiteDecorations() {
  const orbitDots = Array.from({length:54},(_,index) => {
    const angle=(index*6.65-82)*Math.PI/180;
    const radius=168+(index%3)*18;
    return <circle key={index} cx={340+Math.cos(angle)*radius} cy={235+Math.sin(angle)*radius} r={index%5===0 ? 2.3 : 1.25} />;
  });

  return <div className="site-decorations" aria-hidden="true">
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <g className="site-decor-orbits">{orbitDots}</g>
      <g className="site-decor-arches" fill="none">
        <path d="M1260 320 V160 A92 92 0 0 1 1444 160 V330"/>
        <path d="M1290 320 V175 A62 62 0 0 1 1414 175 V330"/>
        <path d="M1320 320 V190 A32 32 0 0 1 1384 190 V330" strokeDasharray="7 8"/>
      </g>
      <g className="site-decor-waves" fill="none"><path d="M-20 640 C90 585 150 704 260 647 S430 592 520 650"/><path d="M-20 670 C90 615 150 734 260 677 S430 622 520 680"/><path d="M-20 700 C90 645 150 764 260 707 S430 652 520 710"/></g>
      <g className="site-decor-circles" fill="none"><circle cx="1120" cy="610" r="48"/><circle cx="1120" cy="610" r="68" strokeDasharray="4 9"/><circle cx="1120" cy="610" r="88" strokeDasharray="1 13"/></g>
      <g className="site-decor-flower" transform="translate(118 716)">
        <path className="flower-stem" d="M0 84 C4 47 3 21 0-14 M2 44 C-18 34-31 20-38 4 M2 27 C20 18 31 5 37-10" fill="none"/>
        <g className="flower-bloom"><ellipse rx="12" ry="34" cy="-29"/><ellipse rx="12" ry="34" cy="29"/><ellipse rx="34" ry="12" cx="-29"/><ellipse rx="34" ry="12" cx="29"/><ellipse rx="12" ry="34" transform="rotate(45)"/><ellipse rx="12" ry="34" transform="rotate(135)"/><circle r="11"/></g>
      </g>
      <g className="site-decor-motif" fill="none"><path d="M720 836 l24-24 24 24-24 24Z M700 836 l24-24 24 24-24 24Z M740 836 l24-24 24 24-24 24Z"/><path d="M80 836 C280 829 470 842 680 835 M780 835 C980 842 1180 829 1380 836"/></g>
      <g className="site-decor-spark" fill="none"><circle cx="116" cy="170" r="17"/><path d="M116 139v-15M116 216v-15M85 170H70M162 170h-15M94 148l-11-11M149 203l-11-11M138 148l11-11M83 203l11-11"/></g>
    </svg>
  </div>;
}
