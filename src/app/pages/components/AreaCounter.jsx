const AreaCounter = () => {
  return (
    <div className="m-3">
      <select className="select w-full focus:outline-none bg-[#F8F9FA]">
        <option disabled selected>
            <p  className="text-black">

          متراژ
            </p>
        </option>
        <option>50m</option>
        <option>100m</option>
      </select>
    </div>
  );
};

export default AreaCounter;
