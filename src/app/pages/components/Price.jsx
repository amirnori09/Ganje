const Price = () => {
  return (
    <div class=" flex rounded-md  m-3 px-4 justify-between">
      <label
        for="price"
        class="mt-4 mb-1 uppercase text-grey-darker text-xs font-bold focus:outline-none "
      >
        قیمت
      </label>
      <div class="flex flex-row">
        <input
          type="number"
          name="price"
          class="bg-grey-lighter text-grey-darker py-2  rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold"
        />
        <span class="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">
          تومان
        </span>
      </div>
    </div>
  );
};

export default Price;
