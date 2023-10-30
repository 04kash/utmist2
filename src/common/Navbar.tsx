'use client';
/*
 * Copyright (C) 2023 UTMIST (utorontomist@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Roboto_Mono } from 'next/font/google'
import Link from "next/link";
import "./navbar.css";
import {GiHamburgerMenu} from "react-icons/gi";
import {useState} from "react";
import Image from "next/image";
import logo from "./UTMIST Logo.png"

const roboto = Roboto_Mono({ subsets: ['latin'] })
export default function Navbar() {
  const [menuOpen, setMenuOpen]= useState(false)
  const handleNav = ()=> {setMenuOpen(!menuOpen)}
  return (
      <main className={roboto.className}>
    <nav className="nav">
      {/*<Link href="/">*/}
      {/*  <Image src={logo} alt="logo" width="128.79" height="37" priority>*/}
      {/*  </Image>*/}
      {/*</Link>*/}
      <div className ={roboto.className}>
          <ul className="navbar">
          <div className="navItems">
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li >
              <Link href="/team">
                <p>Team</p>
              </Link>
            </li>
            <li>
              <Link href="/whatWeDo">
                <p>What We Do</p>
              </Link>
            </li>
            <li>
              <Link href="/impactAndAlumni">
                <p>Impact & Alumni</p>
              </Link>
            </li>
            <li>
              <Link href="/sponsorUs">
                <p>Sponsor Us</p>
              </Link>
            </li>
            <li>
              <Link href="/joinUs">
                <p>Join Us</p>
              </Link>
            </li>
          </div>
            <li onClick={handleNav} className="hamburger">
              <GiHamburgerMenu size={25} color="white"></GiHamburgerMenu>
            </li>
          </ul>
      </div>
      <div className={menuOpen?"position-fixed w-65-percent hidden-sm h-screen p-10 ease-in duration-500":" "}>
        <div className="Horizontal-list">
          <ul className={menuOpen?" ":"Horizontal-list"}>
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li >
              <Link href="/team">
                <p>Team</p>
              </Link>
            </li>
            <li>
              <Link href="/whatWeDo">
                <p>What We Do</p>
              </Link>
            </li>
            <li>
              <Link href="/impactAndAlumni">
                <p>Impact & Alumni</p>
              </Link>
            </li>
            <li>
              <Link href="/sponsorUs">
                <p>Sponsor Us</p>
              </Link>
            </li>
            <li>
              <Link href="/joinUs">
                <p>Join Us</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      </main>
  )
}
