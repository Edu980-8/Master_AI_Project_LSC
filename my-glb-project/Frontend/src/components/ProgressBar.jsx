const ProgressBar = ({ progressQuantity }) => {
  return (
    <div className=" flex flex-row items-center  gap-4 text-gray-600  ">
      <div className=" relative w-[80%] h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progressQuantity}%` }}
        ></div>
      </div>
      <p>{progressQuantity}%</p>
    </div>
  );
};

export default ProgressBar;
