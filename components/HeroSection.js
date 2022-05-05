const HeroSection = () => {
  return (
    <section className="md:flex md:items-end md:justify-between md:gap-20 py-12 md:py-32">
      <h1 className="font-merri font-bold text-3xl text-center md:text-5xl md:text-left mb-10 md:mb-0 max-w-lg">
        A Teaching Platform with Flexibility, Finally.
      </h1>
      <form className="md:grow">
        <label htmlFor="email" className="font-bold text-sm">
          Notify me when it releases:
        </label>
        <div className="flex w-full gap-2 mt-2">
          <input
            className="grow rounded p-5 placeholder:text-gray-500"
            placeholder="Email address"
            type="email"
          />
          <button className="bg-purple-600 rounded py-5 px-9" type="submit">
            Add me
          </button>
        </div>
      </form>
    </section>
  );
};

export default HeroSection;
