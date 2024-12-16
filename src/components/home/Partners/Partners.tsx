import { PartnerCard } from "./PartnerCard";
import { useInView } from "./useInView";

export function Partners() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const partners = [
    {
      name: "PowerLine",
      logo: "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750371/TEST_DESOKY/Layer_1_3_v4r6fy.png"
    },
    {
      name: "Schneider",
      logo: "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750370/TEST_DESOKY/Layer_1_2_g0syns.png"
    },
    {
      name: "Mobica",
      logo: "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750369/TEST_DESOKY/Layer_1_1_woob43.png"
    },

    {
      name: "EMAS",
      logo: "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733756172/EMAS-Logo-1_1_yfaxip.png"
    },
    {
      name: "ABB",
      logo: "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750374/TEST_DESOKY/Layer_11_iq2s3j.png"
    },
    {
      name: "EGY-Lux",
      logo: "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733756172/EGY-Lux_1_immzfj.png"
    },
    {
      name: "ArcelorMittal",
      logo: "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733756173/Layer_1_htjz8g.png"
    },
   
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional quality
            and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard
              key={partner.name}
              name={partner.name}
              logo={partner.logo}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
