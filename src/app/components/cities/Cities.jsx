import Link from "next/link";

const Cities = () => {
  return (
    <>
      
        <div className="card card-compact bg-neutral-100 ">
          <figure>
            <img
              src="https://assets.architecturaldigest.in/photos/62f4d46616c88215b7e80d3b/16:9/w_1615,h_908,c_limit/Step%20into%205%20of%20the%20most%20beautiful%20villas%20in%20Bengaluru.jpg"
              alt="Cities"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">فيلا</h2>
            <p className="truncate ">
              الفيلا جميلة وفخمة، تحتوي على مساحات واسعة وحدائق خضراء جميلة،
              توفر بيئة هادئة ومريحة للاسترخاء والاستمتاع بوقتك مع العائلة
              والأصدقاء.
            </p>
            <Link href="/houses" className="btn text-[#5A4fcf]" passHref>
          مشاهدة        
      </Link>
          </div>
        </div>
      
    </>
  );
};

export default Cities;
