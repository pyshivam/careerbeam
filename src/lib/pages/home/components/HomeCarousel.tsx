/* eslint-disable consistent-return */

'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

export const persons = [
  {
    img: '/assets/images/masterclass.png',
    tagLine: 'Real world learnings from the best.',
    name: 'Masterclass',
    color: 'bg-[#F18F01]',
  },
  {
    img: '/assets/images/webinar.png',
    name: 'Webinar',
    tagLine: 'Learn industry relavent skills online.',
    color: 'bg-[#115D98]',
  },
  {
    img: '/assets/images/podcast.png',
    name: 'Podcast',
    tagLine: 'Learn industry trends from the experts..',
    color: 'bg-[#147B85]',
  },
];

const HomeCarousel = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <ul
        onMouseLeave={() => setActiveItem(0)}
        className="group flex h-full max-h-[650px] w-full flex-row items-end gap-[2%] lg:h-[650px]"
      >
        {persons.map((person, index) => (
          <li
            role="presentation"
            onClick={() => setActiveItem(index)}
            onMouseEnter={() => setActiveItem(index)}
            aria-current={activeItem === index}
            className={clsx(
              "relative h-[340px] w-[20%] cursor-pointer [&[aria-current='true']]:h-full [&[aria-current='true']]:w-[52%]",
              'homeCarousel',
              'md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white'
            )}
            key={person.name}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#c9c6c7]">
              <Image
                className="absolute left-1/2 right-0 top-1/2 h-full w-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
                src={person.img}
                alt={person.name}
                width={590}
                height={640}
              />

              <div
                className={clsx(
                  'absolute bottom-20 left-8 h-16 w-16 rounded-full p-4 text-white',
                  'transition-all duration-500 ease-in-out',
                  activeItem === index
                    ? ''
                    : 'left-2 translate-y-12 -rotate-90',
                  person.color
                )}
              >
                <p className="pl-2 text-3xl">{person.name}</p>
              </div>

              <div
                className={clsx(
                  'absolute bottom-8 left-8 text-white transition-[transform,opacity] duration-500 ease-in-out',
                  activeItem === index
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                )}
              >
                <p className="">{person.tagLine}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeCarousel;
