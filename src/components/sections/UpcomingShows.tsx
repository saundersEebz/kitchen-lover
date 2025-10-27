import { TicketListing } from "@/components";

export default function UpcomingShows() {
  const headerText = "UPCOMING SHOWS".split(" ");

  const showDetails = [
    {
      date: "4/10/25",
      title: "TGT All Dayer",
      location: "The George Tavern, London",
      link: "https://dice.fm/event/bby7lo-tgt-all-dayer-terracettes-kitchen-lover-ziplock-more-4th-oct-the-george-tavern-london-tickets",
      promo: "",
    },
    {
      date: "8/10/25",
      title: "Supporting MOFGY",
      location: "Forum Basement, Tunbridge Wells",
      link: "https://www.twforum.co.uk/events/2025-10-08-mofgy-plus-kitchen-lover-the-sussex-arms",
      promo: "",
    },
    {
      date: "16/10/25",
      title: "Supporting MOFGY",
      location: "Sebright Arms, London",
      link: "https://dice.fm/partner/dice/event/6dbb93-mofgy-kitchen-lover-16th-oct-sebright-arms-london-tickets?dice_id=7129003&dice_channel=web&dice_tags=organic&dice_campaign=DICE&dice_feature=mio_marketing&_branch_match_id=1502344728929084332&utm_source=web&utm_campaign=DICE&utm_medium=mio_marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1U83sDS3NDIwNjQ2NLCvK0pNSy0qysxLj08qyi8vTi2y9S9ILUoEAGsGKbw6AAAA",
      promo: "",
    },
    {
      date: "18/10/25",
      title:
        "GARAGELAND PROMOTIONS - PICTURE THIS: A PUBLIC IMAGE (GALLERY ACOUSTIC SET)",
      location: "Gallery 40, Brighton",
      link: "https://dice.fm/event/bbym6k-picture-this-a-public-image-saturday-18-oct-2025-main-event-acoustic-performances-with-the-getaway-kitchen-lover-the-clubheads-photography-exhibition-by-spike-gallery-40-brighton-18th-oct-gallery-40-brighton-tickets",
      promo: "free",
    },
    {
      date: "18/10/25",
      title:
        "GARAGELAND PROMOTIONS - After Party For PICTURE THIS: A PUBLIC IMAGE",
      location: "Daltons, Brighton",
      link: "https://dice.fm/event/6dbrvq-garageland-brighton-snatch-ex-slobheads-club-brat-kitchen-lover-the-clubheads-the-getaway-party-for-picture-this-a-public-image-18th-oct-daltons-brighton-brighton-tickets",
      promo: "free",
    },
    {
      date: "25/10/25",
      title: "Supporting Chemtrails",
      location: "Daltons, Brighton",
      link: "",
      promo: "",
    },
    {
      date: "30/10/25",
      title: "Neu Waves - Spooky Special Supporting PONS",
      location: "The Deco, Portsmouth",
      link: "https://www.skiddle.com/whats-on/Portsmouth/The-Deco/138-Spooky-Special--PONS--Kitchen-Lover--Common-Tongue/41297729",
      promo: "",
    },
    {
      date: "31/10/25",
      title: "LEMAN presents Kitchen Lover plus Pete & the Lovehearts",
      location: "Side Door, Wigan",
      link: "https://www.fatsoma.com/e/ngd553vf/leman-presents-kitchen-lover-plus-pete-the-lovehearts",
      promo: "",
    },
    {
      date: "1/11/25",
      title: "",
      location: "Round The Corner, Liverpool",
      link: "",
      promo: "",
    },
    {
      date: "17/11/25",
      title: "",
      location: "Hope and Ruin, Brighton",
      link: "",
      promo: "",
    },
    {
      date: "30/11/25",
      title: "",
      location: "Daltons, Brighton",
      link: "",
      promo: "",
    },
    {
      date: "2/12/25",
      title: "Supporting Le Lamb",
      location: "The Prince Albert",
      link: "",
      promo: "",
    },
  ];

  return (
    <section className="h-fit w-full py-20 flex flex-col gap-20 items-center music-promo relative overflow-hidden">
      {/* HEADER */}
      <div className="w-full px-10">
        {headerText.map((text, index) => {
          return (
            <h1
              key={text}
              className="absolute text-5xl"
              style={
                index === 0
                  ? { transform: "translate(0, 0)" }
                  : { transform: "translate(140px, 50px)" }
              }>
              {text}
            </h1>
          );
        })}
      </div>

      <ul className="mt-15 flex flex-col gap-5">
        {showDetails.map((showInfo) => {
          return (
            <TicketListing
              {...showInfo}
              key={`${showInfo.date}, ${showInfo.location}`}
            />
          );
        })}
      </ul>
    </section>
  );
}
