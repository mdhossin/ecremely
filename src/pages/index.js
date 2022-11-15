import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    setData([...data, { id: new Date().toString(), name: 'abc' }]);
    setIsOpen(false);
  };
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
            <button
              onClick={() => setIsOpen(true)}
              className="h-full w-full text-base font-medium text-white cursor-pointer"
            >
              New entry Modal
            </button>
          </div>
        </div>
        {data.map((d) => (
          <div key={d.id} className="bg-[#f2f4f8] w-full h-28 rounded p-2 my-5">
            <div className="rounded h-20 bg-[#67a3bc] text-white p-1 text-sm">
              <h1>Hello world</h1>
              <h1>Communication * General</h1>
              <div className="flex justify-between mt-2">
                <h1>BDT 340</h1>
                <h1>1h 30m</h1>
              </div>
            </div>
            <h1 className="text-sm text-gray-500">No memories</h1>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="absolute z-50 w-full h-full left-0 top-1 flex justify-center bg-slate-100 bg-opacity-50">
          <div className="m-20 w-2/6 relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded shadow-xl rtl:text-right">
            <div className="flex justify-between text-gray-400 py-1 my-1">
              <h1>add a note for this</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <hr />
            <div className="flex justify-between text-gray-400 py-1 my-1">
              <h1>select project</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <hr />
            <div className="flex py-1 my-2 ">
              <div className="w-5 h-5 bg-blue-600" />
              <h1 className="text-gray-700 text-sm ml-2">
                Communication (User Name)
              </h1>
            </div>
            <div className="flex py-1 my-2 ">
              <div className="w-5 h-5 bg-green-600" />
              <h1 className="text-gray-700 text-sm ml-2">
                General (User Name)
              </h1>
            </div>
            <div className="flex w-full h-20 mt-5 p-4 bg-slate-300 justify-between items-center">
              <div>
                <h1 className="text-sm mb-1">Legged Time</h1>
                <h1>1h 30m</h1>
              </div>
              <div className="flex">
                <h1 className="border border-gray-600 p-1 m-1">15m</h1>
                <h1 className="border border-gray-600 p-1 m-1">30m</h1>
                <h1 className="border border-gray-600 p-1 m-1">1h 00m</h1>
              </div>
            </div>
            <div className="flex justify-between text-gray-400 my-4">
              <div className="flex w-2/5 justify-between">
                <h1>From & To</h1>
                <h1>Time</h1>
                <h1>Plan</h1>
              </div>
              <h1>more</h1>
            </div>
            <hr />
            <h1 className="my-8 text-gray-700">Memory is not Connected</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={handleSubmit}
                  className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#3D73DA] rounded-md"
                >
                  Submit
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full px-4 py-2 mt-2 mx-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform "
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="ml-[450px] bg-[#F2F4F8] rounded shadow-md min-h-[100vh] relative">
        <div className="header sticky top-0 left-0 px-3 py-4 bg-white">
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

        <div className="p-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          ipsam totam cupiditate laborum doloremque fuga consequatur obcaecati
          laudantium nesciunt cum qui tempora maxime repudiandae, architecto
          error esse maiores eligendi quo animi officia. Numquam porro iusto
          quis minima molestiae placeat? Culpa neque, qui hic labore rem
          praesentium aliquid autem, eius blanditiis velit numquam adipisci
          repellendus vel? Placeat harum voluptatem quam quibusdam doloremque
          eius quasi, nobis et. Iure magnam maiores perspiciatis nesciunt
          accusantium perferendis unde enim accusamus iusto, voluptates tempore
          ad aliquam mollitia minima explicabo ipsum pariatur earum hic quas
          eaque adipisci optio quo eveniet? Soluta eveniet corporis
          necessitatibus rem id assumenda!
        </div>
      </div>
    </div>
  );
}
