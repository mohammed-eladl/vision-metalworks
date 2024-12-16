import { useState } from "react";
import { Section } from "../shared/Section";
import { GalleryItem } from "./GalleryItem";
import { Modal } from "./Modal";

const galleryItems = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750377/TEST_DESOKY/Rectangle_601_b2ylwj.png",
    title: "Cable tray"
  },
 
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750379/TEST_DESOKY/Rectangle_604_nr27le.png",
    title: "Cable tray connector"
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733751516/TEST_DESOKY/Group_358_tyckpn.png",
    title: "Cable tray"
  },
 
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750362/TEST_DESOKY/Frame_358_pf9dvr.png",
    title: "Metal doors"
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750381/TEST_DESOKY/Rectangle_607_sujg57.png",
    title: "Fire rated door"
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750365/TEST_DESOKY/Group_356_xyk0o4.png",
    title: "Electrical panels"
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750377/TEST_DESOKY/Rectangle_602_libhdq.png",
    title: "Electrical panel"
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750381/TEST_DESOKY/Rectangle_603_hcvyne.png",
    title: "Electrical panels"
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750383/TEST_DESOKY/Rectangle_608_fyxcjh.png",
    title: "Electrical enclosure"
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750381/TEST_DESOKY/Rectangle_606_biplbw.png",
    title: "Electrical enclosure"
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750380/TEST_DESOKY/Rectangle_605_ms3vzm.png",
    title: "Lockers"
  },
  
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750366/TEST_DESOKY/Group_355_jhcnwi.png",
    title: "Lockers"
  },
 
  
  {
    id: 13,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750360/TEST_DESOKY/100_qv2mia.jpg",
    title: "Metal Fabrication"
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750363/TEST_DESOKY/200_om3nxt.jpg",
    title: "Metal Fabrication"
  },


  // {
  //   id: 6,
  //   image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
  //   title: 'Metal Fabrication'
  // },
];

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  return (
    <Section id="gallery" bgColor="gray">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are honored to participate in supplying different products and to
            be a consistent supplier to below
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <GalleryItem
              key={item.id}
              image={item.image}
              title={item.title}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <Modal
          image={selectedItem.image}
          title={selectedItem.title}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </Section>
  );
}
