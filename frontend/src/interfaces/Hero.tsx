import Old1 from "../assets/img/old1.jpg";

export default function Hero() {
  return (
    <>
      <main className="relative z-0 mx-auto flex w-3/4 flex-col items-center justify-center">
        <div className="w-1/2 w-full p-4 text-center">
          <h1 className="m-2 mt-12 p-4 text-5xl font-bold">
            The system you need for your company.
          </h1>
          <div className="flex w-full justify-center">
            <p className="md:w-2/3">
              We have the latest technology to help you care for your loved
              ones. In addition, we have a team of professionals who are ready
              to help you with any questions you may have. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Molestiae totam expedita optio
              assumenda et dolores, ullam unde ea, illum soluta tenetur
              architecto quae. Animi ad magni deleniti enim nemo obcaecati.
            </p>
          </div>
          <div className="bg-darkbrown mt-6 flex cursor-pointer justify-center justify-self-center rounded-lg p-4 md:w-1/4">
            <p className="text-white">Start Now!</p>
          </div>
        </div>
      </main>
      <div className="mt-8 flex justify-center">
        <img
          className="w-1/3 rounded-lg border-2 border-gray-300"
          src={Old1}
          alt="Elderly woman image"
        />
      </div>
    </>
  );
}
