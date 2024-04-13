import { Menu } from '@headlessui/react';

export type MenuItemProps = {
  children: React.ReactNode;
};

export const MenuItem = ({ children }: MenuItemProps) => {
  return (
    <div className="px-1 py-1 ">
      <Menu.Item>
        {({ active }) => (
          <button
            type="button"
            className={`${active ? 'bg-[#173D7A] text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
          >
            {children}
          </button>
        )}
      </Menu.Item>
    </div>
  );
};
