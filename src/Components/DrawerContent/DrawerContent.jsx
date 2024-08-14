import bell from "../../assets/navlogo/bell.png";
import Card from "../Card";

const DrawerContent = () => {
  const cardData = [
    {
      title: "Foundations of User Experience (UX) Design",
      assigment: 4,
      videos: 20,
      progress: 80,
    },
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      assigment: 4,
      videos: 20,
      progress: 65,
    },
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      assigment: 4,
      videos: 20,
      progress: 85,
    },
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      assigment: 4,
      videos: 20,
      progress: 85,
    },
  ];

  return (
    <div>
      <div className="px-6 py-16">
        <nav className="flex justify-between">
          <h1 className="text-[#4163E9] text-3xl font-medium">Overview</h1>
          <div className="flex gap-4">
            <label className="input rounded-full bg-[#F7F7FF] flex items-center gap-2 flex-row-reverse w-[600px]">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <button className="btn btn-circle">
              <img src={bell} alt="" />
            </button>
            <div className="flex gap-4 items-center">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-medium">Alexa Calen</h1>
                <h3 className="text-sm">Student</h3>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="px-6">
        <div className="space-y-5">
          {cardData.map((item, idx) => (
            <Card data={item} key={idx}></Card>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DrawerContent;
