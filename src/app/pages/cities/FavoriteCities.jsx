import Image from "next/image";

const citiesData = [
  {
    id: 1,
    name: "هتل های اصفهان",
    image: "/assets/Images/city.png",
  },
  {
    id: 1,
    name: "هتل های تهران",
    image: "/assets/Images/city.png",
  },
  
];

const FavoriteCities = () => {
  return (
    <>
      <div className="w-full p-3 mt-6">
        <p className="text-3xl text-black font-extrabold">محبوب ترین شهر ها</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-3">
        {citiesData.map((city) => (
          <div key={city.id} className="card  bg-base-100 ">
            <figure>
              <Image
                src={city.image}
                width={122}
                height={87}
                alt={city.name}
                className="rounded-lg"
              />
            </figure>
            <div className="card-body flex flex-col justify-center items-center">
              <h2 className="card-title">{city.name}</h2>
              <div className="card-actions bg-base-200 rounded-md  ">
                <button className="btn  text-[#5A4FCF] bg-[#F8F9FA]">مشاهده همه</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FavoriteCities;
