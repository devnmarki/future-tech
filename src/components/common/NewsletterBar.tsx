import ArrowIcon from "/icons/arrow-up-right.svg";

const NewsletterBar = () => {
  return (
    <div className="bg-black-100 pt-10 pb-3.5 px-2.5 w-full flex justify-center gap-3.5 md:py-3">
      <p className="font-inter font-normal text-[0.75rem] text-gray-200 md:hidden">
        Subscribe to our Newsletter For Blogs and Resources
      </p>
      <p className="hidden font-inter font-normal text-[0.75rem] text-gray-200 md:block">
        Subscribe to our Newsletter For New & latest Blogs and Resources
      </p>
      <img src={ArrowIcon} className="yellow-icon size-5 cursor-pointer" />
    </div>
  );
};

export default NewsletterBar;
