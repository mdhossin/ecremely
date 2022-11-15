import { useToggle } from '../provider/context';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { BsGlobe } from 'react-icons/bs';
export default function TopNavigation() {
  const { toggle } = useToggle();

  return (
    <header className="h-10 items-center justify-between relative w-full z-8 md:h-[90px]">
      <div className="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center justify-between pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex items-center left-0 relative w-3/4">
            <div className="flex group h-full items-center relative w-12 mb-2">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={toggle}
                className="text-4xl text-black focus:outline-none"
              >
                &#8801;
              </button>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-[#f2f4f8] h-[36px] flex items-center  border border-[rgba(0,0,0, 5)] rounded">
                <button className="px-4 text-sm bg-[#444F5D] h-full border-r border-[rgba(0,0,0, 5)] flex-grow rounded-l-[4px] text-white">
                  Day
                </button>
                <button className="px-4 text-sm flex-grow bg-white h-full border-r border-[rgba(0,0,0, 5)]">
                  Week
                </button>
                <button className="px-4 text-sm flex-grow bg-white h-full rounded-r-[4px]">
                  {' '}
                  Month
                </button>
              </div>
              <div className="bg-[#f2f4f8] h-[36px] flex items-center  border border-[rgba(0,0,0, 5)] rounded">
                <button className="px-4 text-sm bg-white h-full border-r border-[rgba(0,0,0, 5)] flex-grow rounded-l-[4px]">
                  <IoIosArrowBack />
                </button>
                <button className="px-4 text-sm flex-grow bg-white h-full border-r border-[rgba(0,0,0, 5)] flex items-center gap-2">
                  <SlCalender />
                  <span className="text-sm">Monday, November 16</span>
                </button>
                <button className="px-4 text-sm flex-grow bg-white h-full rounded-r-[4px]">
                  <IoIosArrowForward />
                </button>
              </div>

              <div className="bg-[#f2f4f8] h-[36px] flex items-center  border border-[rgba(0,0,0, 5)] rounded">
                <button className="px-4 text-sm flex-grow bg-white h-full rounded-[4px] gap-1 flex items-center">
                  <BsGlobe />
                  <IoMdArrowDropdown className="text-lg" />
                </button>
              </div>
              <div className="bg-[#f2f4f8] h-[36px] flex items-center  border border-[rgba(0,0,0, 5)] rounded">
                <button className="px-4 text-sm flex-grow bg-white h-full rounded-[4px] gap-1 flex items-center">
                  0h - 0
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-[#f2f4f8] h-[36px] flex items-center  border border-[rgba(0,0,0, 5)] rounded">
              <button className="px-4 text-sm flex-grow bg-white h-full rounded-[4px] gap-1 flex items-center">
                <BsGlobe />
                Me
                <IoMdArrowDropdown className="text-lg" />
              </button>
            </div>
            <div className="bg-[#f2f4f8] h-[36px] flex items-center  border border-[rgba(0,0,0, 5)] rounded">
              <button className="px-4 text-sm flex-grow bg-white h-full rounded-[4px] gap-1 flex items-center">
                <BsGlobe />

                <IoMdArrowDropdown className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
