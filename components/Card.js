const Card = ({ title, description }) => {
  return (
    <li className="border-l border-gray-400 pl-3 card relative min-h-[8rem] lg:h-60 card  scale-y-0">
      <h3 className="font-bold mb-4 card-title opacity-0">{title}</h3>
      <p className="text-gray-400 text-sm card-description opacity-0">
        {description}
      </p>
    </li>
  );
};

export default Card;
