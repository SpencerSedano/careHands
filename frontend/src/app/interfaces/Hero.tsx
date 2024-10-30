import Image from "next/image";
/* import Old1 from "@/app/img/old1.jpg"; */
import LaococoImage from "../../../public/svg/laococoimage.svg";

export default function Hero() {
  return (
    <>
      <main className="relative z-0 flex flex-col items-center justify-center w-3/4 mx-auto">
        <div className=" w-full w-1/2 p-4 text-center">
          <h1 className="text-5xl m-2 font-bold p-4 mt-12">
            The system you need for your company.
          </h1>
          <div className="w-full flex justify-center">
            <p className="md:w-2/3">
              We have the latest technology to help you care for your loved
              ones. In addition, we have a team of professionals who are ready
              to help you with any questions you may have. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Molestiae totam expedita optio
              assumenda et dolores, ullam unde ea, illum soluta tenetur
              architecto quae. Animi ad magni deleniti enim nemo obcaecati.
            </p>
          </div>
          <div className="cursor-pointer w-1/2 mt-6 flex justify-center justify-self-center bg-emerald-700 p-4">
            <p className="text-white">Start Now!</p>
          </div>
        </div>
      </main>
      <div className=" flex justify-center">
        <Image
          className="max-w-full"
          src={LaococoImage}
          alt="Elderly woman image"
        />
      </div>
    </>
  );
}
