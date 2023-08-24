"use client";
import { Menu } from "@headlessui/react";
import Image from "next/image";

type Props = {
  title: string;
  state: string;
  filters: Array<string>;
  setState: (value: string) => void;
};
export const CustomMenu = ({ title, state, filters, setState }: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-7 relative">
      <label htmlFor={title} className="w-full text-gray-100">
        {title}
      </label>
      <Menu as="div" className="self-start relative">
        <div>
          <Menu.Button className="flexCenter custom_menu-btn">
            {state || "Select a category"}
            <Image
              src="/chevron-down.svg"
              alt="Chevron down"
              width={15}
              height={15}
            />
          </Menu.Button>
          <Menu.Items className="flexStart custom_menu-items">
            {filters.map((tag) => (
              <Menu.Item key={tag}>
                <button
                  type="button"
                  value={tag}
                  className="custom_menu-item"
                  onClick={(e) => setState(e.currentTarget.value)}
                >
                  {tag}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </div>
      </Menu>
    </div>
  );
};