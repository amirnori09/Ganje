
const Footer = () => {
  return (
    <footer className=" footer lg:flex max-w-screen-2xl bg-neutral-100 m-auto justify-around p-10 mt-10  text-neutral-content">
      <nav className="lg:w-2/4 ">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className="text-[#000000] ">
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
      <nav className="text-[#000000] ">
        <h6 className="footer-title">معلومات عنا</h6>
        <div className="flex flex-col gap-4">
          <a className="">الصفحة الرئيسية</a>
          <a>معلومات عنا</a>
          <a>اتصل بنا</a>
        </div>
      </nav>
      <nav className="text-[#000000]">
        <h6 className="footer-title">اجتماعي</h6>
        <div className="flex gap-4">
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
