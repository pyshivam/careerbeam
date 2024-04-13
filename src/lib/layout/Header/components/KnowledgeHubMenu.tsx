/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';

import IconsKH from './IconsKh';

const KnowledgeHubMenu = () => {
  return (
    <div
      role="presentation"
      className="w-full rounded-b-lg bg-white"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="container flex h-80 items-center justify-between px-20">
        <div className="items-left flex  flex-col justify-between overflow-visible px-10">
          <h2 className="w-80 text-4xl font-normal text-gray-900">
            Join our registration link
          </h2>
          <div className="mt-3 w-72 text-[#1E1E2F99]">
            And receive updates, expert educational insights, and early access
            to our platform.
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              className="rounded-full bg-[#173D7A] px-6 py-2 text-white"
            >
              Join
            </button>
            <IconsKH iconName="mail" />
            <IconsKH iconName="facebook" />
            <IconsKH iconName="whatsapp" />
            <IconsKH iconName="x" />
            <IconsKH iconName="insta" />
          </div>
        </div>

        <div className="h-full text-[#173D7A]">
          <ul className="list-disc">
            <li>
              <a href="#"> Masterclass</a>
            </li>
            <li>
              <a href="#"> Webinar</a>
            </li>
            <li>
              <a href="#"> CB Connect</a>
            </li>
            <li>
              <a href="#"> Blogs</a>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/assets/images/knowledge-hub.png"
            alt="knowledge-hub"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHubMenu;
