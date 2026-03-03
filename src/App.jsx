import img1 from "./assets/credologo.jpg"
import img2 from "./assets/coporatepay.webp"
import img3 from "./assets/pocketmoni.svg"
export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="w-260 h-150 border-1 border black rounded-lg bg-white">
        <h1 className="text-6xl font-bold text-center mb-8"> Etranzact products</h1>
        <div className="flex gap-8 justify-center items-center px-10 pt-10">
          <div className="w-70 h-110 border border-black rounded flex flex-col p-8">
            <img src={img1} className="w-[600px] h-[495px] border-1 border black object-contain mb-4">
            </img>
            <h2 className="text-3x1 font-bold text-left mb-4">CREDO</h2>
            <p className="text-sm text-gray-600 text-left mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className="w-30 h-10 border border-black px-4 py-1">Read More</button>
            </div>
            <div className="w-70 h-110 border border-black rounded flex flex-col p-8">
            <img src={img2} className="w-[600px] h-[495px] border-1 border black object-contain mb-4">
            </img>
            <h2 className="text-3x1 font-bold text-left mb-4">CORPORATEPAY</h2>
            <p className="text-sm text-gray-600 text-left mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className="w-30 h-10 border border-black px-4 py-1">Read More</button>
            </div>
            <div className="w-70 h-110 border border-black rounded flex flex-col p-8">
            <img src={img3} className="w-[600px] h-[450px] border-1 border black object-contain mb-4">
            </img>
            <h2 className="text-3x1 font-bold text-left mb-4">POCKETMONI</h2>
            <p className="text-sm text-gray-600 text-left mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className="w-30 h-10 border border-black px-4 py-1"
            >Read More</button>
            </div>
          </div>

          </div>

        </div>
  );
}