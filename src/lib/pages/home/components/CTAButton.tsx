const CTAButton = () => {
  return (
    <button
      type="button"
      className="mb-3 mt-4 h-16 w-60 bg-[#78C4FE] pb-1 transition-all duration-300 hover:bg-[#173D7A] hover:text-white md:mt-20 md:h-20 md:w-64"
    >
      Discover Now{' '}
      <span aria-hidden="true" className="ml-2 text-2xl">
        &rarr;
      </span>
    </button>
  );
};

export default CTAButton;
