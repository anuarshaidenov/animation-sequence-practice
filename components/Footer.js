const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-400 to-purple-800 py-12 md:py-32 text-black font-bold">
      <div className="w-[95%] max-w-6xl mx-auto">
        <div className="flex mb-10">
          <svg
            className="angle-line mt-4 mr-4"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3536 16.3536C17.5488 16.1583 17.5488 15.8417 17.3536 15.6464L14.1716 12.4645C13.9763 12.2692 13.6597 12.2692 13.4645 12.4645C13.2692 12.6597 13.2692 12.9763 13.4645 13.1716L16.2929 16L13.4645 18.8284C13.2692 19.0237 13.2692 19.3403 13.4645 19.5355C13.6597 19.7308 13.9763 19.7308 14.1716 19.5355L17.3536 16.3536ZM0 16.5H17V15.5H0V16.5Z"
              fill="black"
            />
            <line
              x1="0.5"
              y1="2.18557e-08"
              x2="0.499999"
              y2="16"
              stroke="black"
            />
          </svg>
          <h3 className="text-4xl md:text-6xl">All of this, coming 2022.</h3>
        </div>
        <span>Learn more by following us: @skillform</span>
      </div>
    </footer>
  );
};

export default Footer;
