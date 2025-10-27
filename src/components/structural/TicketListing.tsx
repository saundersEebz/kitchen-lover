type ShowInfo = {
  date: string;
  title: string;
  location: string;
  link: string;
  promo: string;
};

export default function TicketListing(showInfo: ShowInfo) {
  const { date, title, location, link, promo } = showInfo;
  return (
    <li className="mx-5 pb-5 flex justify-between items-center text-xl border-b-2 border-[#940716]">
      <div className="max-w-[60%]">
        <p className="text-2xl">{date}</p>
        <p className="text-[#ddd]">{title}</p>
        <p className="italic text-[#baa]">{location}</p>
      </div>

      {link === "" ? null : (
        <div className="relative">
          <a
            href={link}
            className="bg-black rounded-full text-white px-3 py-2 font-semibold italic z-10">
            TICKETS
          </a>
          {promo != "" && (
            <span className="absolute top-12 left-1/2 translate-x-[-50%] px-2 bg-[#940716]">
              {promo.toUpperCase()}
            </span>
          )}
        </div>
      )}
    </li>
  );
}
