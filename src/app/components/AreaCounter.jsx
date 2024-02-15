const AreaCounter = () => {
  return (
    <div className="m-3 p-0">
      <select className="p-3 w-full focus:outline-none bg-[#FFF]">
        <option disabled selected>
            المساحة
        </option>
        <option>50m</option>
        <option>100m</option>
      </select>
    </div>
  );
};

export default AreaCounter;
