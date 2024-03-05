const AreaCounter = () => {
  return (
    <div className="m-3 p-0">
      <select className="p-3 w-full focus:outline-none bg-[#F8F9Fa] rounded-md" defaultValue="">
        <option disabled value="">
          المساحة
        </option>
        <option value="50m">50m</option>
        <option value="100m">100m</option>
      </select>
    </div>
  );
};

export default AreaCounter;
