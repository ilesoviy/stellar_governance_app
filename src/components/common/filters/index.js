import React, {Fragment} from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Filterbutton = ({ data }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div className="filterbutton">
      <div>
        <Menu.Button className="bg-lightgrey w-24 lg:w-36 h-9 flex items-center justify-center rounded-2xl shadow-2xl">
        <p className="text-[12px] lg:text-base">
          {data.title} <i className="lg:ml-2 -mt-1 fas fa-sort-down text-xl"></i>
        </p>
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
        <Menu.Items className="absolute z-10 mt-2 w-44 r origin-top-right rounded-2xl bg-lightgrey shadow-lg">
          <div className="py-1">
            {data.menu.map((item,index) => (
            <Menu.Item>
              {({ active }) => (
                <a
                key={index}
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {item}
                </a>
              )}
            </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </div>
    </Menu>
  );
};

export default Filterbutton;
