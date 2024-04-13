/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  ChevronDownIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  ScrollTextIcon,
  SquarePlayIcon,
} from 'lucide-react';
import { Fragment } from 'react';

import { MenuItem } from './MenuItem';

const MyAcccountDropdown = () => {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            My Account
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <MenuItem>
              <ScrollTextIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Purchase History
            </MenuItem>
            <MenuItem>
              <SquarePlayIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Video Steam
            </MenuItem>
            <MenuItem>
              <BellIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Notifications
            </MenuItem>
            <MenuItem>
              <LayoutDashboardIcon
                className="mr-2 h-5 w-5"
                aria-hidden="true"
              />
              Settings
            </MenuItem>
            <MenuItem>
              <LogOutIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Log out
            </MenuItem>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MyAcccountDropdown;
