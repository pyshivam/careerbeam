'use client';

/* eslint-disable jsx-a11y/anchor-is-valid */
import { ChevronDown, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import KnowledgeHubMenu from './components/KnowledgeHubMenu';
import MyAcccountDropdown from './components/MyAccountDropdown';

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavMenu, setActiveNavMenu] = useState('');
  const KNOWLEDGE_HUB = 'knowledge-hub';

  function handleNavMenuClick(menu: string) {
    if (activeNavMenu === menu) {
      setActiveNavMenu('');
      return;
    }
    setActiveNavMenu(menu);
  }

  return (
    <header className="h-30 absolute inset-x-0 top-0 z-50 shadow-lg">
      <nav
        className="flex items-center justify-between bg-white p-6  lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">CareerBeam</span>
            <Image
              className="h-8 w-auto"
              src="/assets/icons/logo.svg"
              alt=""
              width={22}
              height={22}
            />
          </a>
        </div>
        <div className="flex bg-[#173D7A] p-1 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-5">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            What&apos;s new
          </a>
          <button
            type="button"
            className="flex items-center text-sm font-semibold leading-6 text-gray-900"
            style={{
              color: activeNavMenu === KNOWLEDGE_HUB ? '#173D7A' : '',
            }}
            onClick={() => handleNavMenuClick(KNOWLEDGE_HUB)}
          >
            <span>Knowledge Hub</span>
            <ChevronDown
              className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${
                activeNavMenu === KNOWLEDGE_HUB
                  ? 'rotate-180 text-[#173D7A]'
                  : '' // Add the rotate class if isOpen is true
              }`}
              aria-hidden="true"
            />
          </button>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            CB News
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Internship
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About us
          </a>
        </div>
        <div className="hidden flex-row lg:flex  lg:justify-end">
          <MyAcccountDropdown />
          <button
            type="button"
            className="rounded-full bg-[#173D7A] px-6 py-2 text-sm font-semibold leading-6 text-white"
          >
            Register Now
          </button>
        </div>
      </nav>
      <div
        role="presentation"
        className={`${activeNavMenu !== '' ? ' h-[calc(100vh-90px)] w-full' : 'h-0 w-full pt-0 opacity-0'} z-5  hidden overflow-hidden  bg-black/20 transition-all duration-700 lg:block`}
        onClick={() => setActiveNavMenu('')}
      >
        <KnowledgeHubMenu />
      </div>
    </header>
  );
};

export default Header;
