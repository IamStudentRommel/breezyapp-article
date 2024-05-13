export default function Title() {
  return (
    // <div className="text-center md:text-2xl pt-12 md:pt-0 lg:pt-5 mb-8">
    //   <h1 className="text-2xl md:text-4xl  text-green-500 font-bold">
    //     Amazing Crime App
    //   </h1>
    // </div>
    <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img
        src="https://readymadeui.com/cardImg.webp"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">
          {" "}
          Amazing Crime App
        </h2>
        <p className="text-md text-center text-gray-200 text-">
          Designed to enhance community safety and encourage people to
          participate in creating a harmonious atmosphere
        </p>
      </div>
    </div>
  );
}
