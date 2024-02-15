
const Footer = () => {
  return (
    <footer className=" footer lg:flex max-w-7xl bg-[#FFF] m-auto justify-between p-10 mt-10  text-neutral-content">
      <nav className="lg:w-2/4 ">
      <img src="https://ganje.ir/images/GanjeLogo1.png" className="w-auto h-[48px]" alt="" />
        <p className="text-body-200 ">
          محرك بحث الإعلانات "Ganjeh" تم إطلاقه في عام 1398 من قبل خريجي
          الجامعات الإيرانية. تهدف Ganjeh إلى تجميع ومقارنة الإعلانات في مجال
          العقارات، السيارات، والتوظيف. يقوم هذا المحرك بجمع الملايين من
          الإعلانات من عدة خدمات دادوستد موثوقة عبر الإنترنت لتسهيل عملية البحث
          للمستخدمين الإيرانيين. يعمل محرك بحث الإعلانات الذكي Ganjeh من أجل
          تسهيل وصول المستخدمين إلى احتياجاتهم. تضم Ganjeh أكثر من 15 خدمة عبر
          الإنترنت للسلع والخدمات، مثل Divar، Sheypoor، Bamilo، وغيرها. بالإضافة
          إلى ذلك، يراقب Ganjeh أكثر من 60 مليون إعلان في كل لحظة.{" "}
        </p>
      </nav>
      <nav className=" ">
        <h6 className="text-lg text-body-400">معلومات عنا</h6>
        <div className="flex flex-col gap-4 text-body-200">
          <a className="">الصفحة الرئيسية</a>
          <a>معلومات عنا</a>
          <a>اتصل بنا</a>
        </div>
      </nav>
      <nav className="">
        <h6 className="text-lg text-body-400">اجتماعي</h6>
        <div className="flex gap-4 text-body-300">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-telegram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
