import PromoImages from "../structural/PromoImages";
import kitchenAlbum from "@/assets/images/kitchen_album.jpg";

export default function MusicPromo() {
  return (
    <section
      className="h-fit w-full py-20 flex flex-col gap-20 items-center music-promo relative overflow-hidden"
      style={
        {
          "--promo-bg-image": `url(${kitchenAlbum.src})`,
        } as React.CSSProperties
      }>
      {/* Promo Heading */}
      <div className="ml-10">
        <p className="">DEBUT ALBUM</p>
        <h1 className="text-5xl font-semibold">THE CIRCUS SIDESHOW DREAM</h1>
        <h2 className="italic text-3xl font-[550] opacity-90">
          OUT 19TH SEPTEMBER
        </h2>
      </div>

      {/* Image container */}
      <PromoImages />
    </section>
  );
}
