import { forwardRef } from 'react';

const HeroSection = forwardRef((_, ref) => {
  return (
    <section
      className="md:flex md:items-end md:justify-between md:gap-20 py-12 md:py-32"
      ref={ref}
    >
      <h1 className="font-merri font-bold text-3xl text-center md:text-5xl md:text-left mb-10 mx-auto md:mx-0 md:mb-0 max-w-lg md:leading-tight heading clip-path opacity-0 translate-y-24">
        A Teaching Platform with Flexibility, Finally.
      </h1>
      <form className="md:grow clip-path opacity-0 translate-y-24 form">
        <label htmlFor="email" className="font-bold text-sm">
          Notify me when it releases:
        </label>
        <div className="flex w-full gap-2 mt-2">
          <input
            className="grow rounded p-5 placeholder:text-gray-500 w-3/4 md:w-auto"
            placeholder="Email address"
            type="email"
          />
          <button
            className="bg-purple-600 rounded py-5 px-3 md:px-9 w-1/4 md:w-auto button"
            type="submit"
          >
            Add me
          </button>
        </div>
      </form>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
