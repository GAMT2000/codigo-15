import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function Select({ value, onChange, items }) {
  return (
    <>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="w-full flex items-center justify-between border py-2 rounded text-left pl-3 shadow-md px-3">
            <span>{value}</span>
            <span>
              <ChevronUpDownIcon className="h-5 w-5" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition-all duration-500 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="w-full  mt-1 rounded absolute z-30">
              {items.map((item) => (
                <Listbox.Option
                  key={item}
                  value={item}
                  className={`py-2 px-3 hover:bg-green-200 hover:text-green-800 cursor-pointer ${
                    item === value ? "bg-green-200 text-green-800" : "bg-white"
                  } first: rounded-t last:rounded-b`}
                >
                  {item}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
}
