import Image from 'next/image';
import { BsThreeDots } from 'react-icons/bs';
import { BiGridVertical } from 'react-icons/bi';
export default function HomePage() {
  const mockdata = [
    {
      id: 1,
      icon1: <BiGridVertical />,
      icon2: <Image src="/images/2.png" width={32} height={32} alt="" />,
      content: {
        heading: 'New one project 1',
        desc: 'lorem heelo world ',
      },
      hours: '1h',
    },
    {
      id: 2,
      icon1: <BiGridVertical />,
      icon2: <Image src="/images/2.png" width={32} height={32} alt="" />,
      content: {
        heading: 'New one project 1',
        desc: 'lorem heelo world ',
      },
      hours: '2h',
    },
    {
      id: 3,
      icon1: <BiGridVertical />,
      icon2: <Image src="/images/2.png" width={32} height={32} alt="" />,
      content: {
        heading: 'New one project 1',
        desc: 'lorem heelo world ',
      },
      hours: '4h',
    },
    {
      id: 4,
      icon1: <BiGridVertical />,
      icon2: <Image src="/images/2.png" width={32} height={32} alt="" />,
      content: {
        heading: 'New one project 1',
        desc: 'lorem heelo world ',
      },
      hours: '6h',
    },
  ];
  return (
    <div className="flex items-start gap-4">
      <div className="w-[430px] bg-white rounded p-4 shadow-md min-h-[95vh] fixed top-[80px]">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-[#79868c] text-base font-semibold flex items-center gap-3">
              Timesheet
              <h5 className="italic text-black w-4 h-4 rounded-full bg-[#F2F4F8] flex items-center justify-center p-1 text-sm">
                i
              </h5>
            </h4>
            <span className="text-[#79868c] text-base font-semibold">0h</span>
          </div>

          <div>
            <BsThreeDots />
          </div>
        </div>

        <div className="pt-10 w-full">
          <div className="h-[48px] bg-[#3D73DA] rounded flex items-center justify-center">
            <button className="h-full w-full text-base font-medium text-white cursor-pointer">
              New entry
            </button>
          </div>
        </div>
      </div>
      <div className="ml-[450px] bg-[#F2F4F8] rounded shadow-md min-h-[100vh] relative w-full ">
        <div className="header sticky top-0 left-0 px-3 py-4 bg-white z-50">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-[#79868c] text-base font-semibold flex items-center gap-3">
                Automatic time tracking
                <h5 className="italic text-black w-4 h-4 rounded-full bg-[#F2F4F8] flex items-center justify-center p-1 text-sm">
                  i
                </h5>
              </h4>
            </div>

            <div>
              <div className="flex items-center border border-[rgba(0,0,0, 5)] rounded">
                <div className="bg-[#f2f4f8] h-[36px] flex items-center  border-r border-[rgba(0,0,0, 5)] rounded">
                  <button className="px-4 text-sm flex-grow bg-white h-full rounded-[4px] gap-1 flex items-center">
                    Timeline
                  </button>
                </div>
                <div className="bg-[#444F5D] h-[36px] flex items-center rounded">
                  <button className="px-4 text-sm flex-grow h-full rounded-[4px] gap-1 flex items-center text-white">
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 w-full">
          {mockdata.map((item) => {
            return (
              <div className="flex items-center justify-between" key={item.id}>
                <div className="flex items-center mb-5 gap-3">
                  <div className="w-[24px]">{item.icon1}</div>
                  <div className="">{item.icon2}</div>
                  <div>
                    <h2 className="font-medium text-lg">
                      {item.content.heading}
                    </h2>
                    <p>{item.content.desc}</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-semibold">{item.hours}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
