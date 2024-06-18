import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCart from "./Components/ProductCart";

const products: Product[] = [
  {
    id: "1",
    name: "Elemental #14326",
    description: "Owned by B1A5A0",
    image:
      "https://i.seadn.io/s/raw/files/db0790190375ccc68e80cf1f798d362b.png?auto=format&dpr=1&w=512",
    price: 0.36,
  },
  {
    id: "2",
    name: "Elemental #14531",
    description: "Owned by _smilin",
    image:
      "https://i.seadn.io/s/raw/files/54868ac07c132095048ffba52cc4f508.png?auto=format&dpr=1&w=1000",
    price: 0.36,
  },
  {
    id: "3",
    name: "Elemental #18526",
    description: "Owned by 058CSJ",
    image:
      "https://i.seadn.io/s/raw/files/56f7529605140d0dd188e169aed1aeb4.png?auto=format&dpr=1&w=1000",
    price: 0.3619,
  },
  {
    id: "4",
    name: "Elemental #3369",
    description: "Owned by Oxrusx",
    image:
      "https://i.seadn.io/s/raw/files/6ad1a7973547440eddb1ccf912641522.png?auto=format&dpr=1&w=1000",
    price: 0.364,
  },
  {
    id: "5",
    name: "Elemental #16494",
    description: "Owned by jm_kelley",
    image:
      "https://i.seadn.io/s/raw/files/bf74f67d8cc88f684086c2acc6b94041.png?auto=format&dpr=1&w=1000",
    price: 0.394,
  },
];

export default function Home() {
  return (
    <>
      <section className="container">
        <div className="container flex-row md:flex items-center justify-between py-20">
          {/* left */}
          <div>
            <h2 className="md:text-5xl text-3xl font-black font-sans leading-2">
              Your own NFT Marketplace without upfront cost
            </h2>
            <p className="mt-8 max-w-lg leading-snug">
              The fastest and easiest way to fully unlock the potential of your
              digital assets. Create and run an exclusive marketplace for your
              NFT business today!
            </p>

            <Button className="mt-10 mb-10 md:mt-8 text-lg rounded-lg py-7 px-6 bg-custom-gradient">
              Start Free
            </Button>
          </div>

          {/* right */}

          <div>
            <Image
              alt="image-header"
              src="/images/image.png"
              width={800}
              height={800}
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div>
          <Tabs defaultValue="account" className="">
            <TabsList>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="top">Top</TabsTrigger>
            </TabsList>
            <TabsContent value="trending">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                {products.map((product) => (
                  <ProductCart product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="top">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                {products.map((product) => (
                  <ProductCart product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
