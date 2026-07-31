"use client";
import Link from "next/link";
import { useState } from "react";
const links=[["Home","/"],["Selected Works","/works"],["About","/about"],["Exhibitions","/exhibitions"],["CV","/cv"],["Contact","/contact"]];
export function Header(){const [open,setOpen]=useState(false);return <header className="site-header wrap"><Link className="brand" href="/">Yofset Teffera<span>Contemporary Artist</span></Link><button className="menu-button" aria-expanded={open} aria-controls="main-nav" aria-label="Toggle menu" onClick={()=>setOpen(!open)}><span/><span/></button><nav id="main-nav" className={`nav ${open?"open":""}`} aria-label="Primary navigation">{links.map(([label,href])=><Link onClick={()=>setOpen(false)} key={href} href={href}>{label}</Link>)}</nav></header>}
