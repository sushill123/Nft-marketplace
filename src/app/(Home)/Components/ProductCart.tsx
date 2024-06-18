import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
// import ToppingList from './topping-list';
import { ShoppingCart } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
type PropTypes = { product: Product };

const ProductCard = ({ product }: PropTypes) => {
  return (
    <Card className="border-none rounded-xl bg-gray-800 text-white">
      <CardHeader className="flex items-center justify-center">
        <Image alt="pizza-image" width={150} height={150} src={product.image} />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between mt-4">
        <p>
          <span>From </span>
          <span className="font-bold">₹{product.price}</span>
        </p>

        <Dialog>
          <DialogTrigger className="bg-custom-gradient text-white px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
            Buy
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0">
            <div className="flex">
              <div className="w-1/3 rounded p-8 flex items-center justify-center">
                <Image
                  src={product.image}
                  width={600}
                  height={600}
                  alt={product.name}
                />
              </div>
              <div className="w-2/3 p-8">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1">{product.description}</p>

                <div>
                  <h4 className="mt-6"></h4>
                  <RadioGroup
                    defaultValue="small"
                    className="grid grid-cols-3 gap-4 mt-2"
                  >
                    <div>
                      <RadioGroupItem
                        value="small"
                        id="small"
                        className="peer sr-only"
                        aria-label="Small"
                      />
                      <Label
                        htmlFor="small"
                        className="flex flex-col items-center justify-between rounded-md border-2  p-4 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        38 views
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="medium"
                        id="medium"
                        className="peer sr-only"
                        aria-label="Medium"
                      />
                      <Label
                        htmlFor="medium"
                        className="flex flex-col items-center justify-between rounded-md border-2  p-4 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        2 Favourites
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="large"
                        id="large"
                        className="peer sr-only"
                        aria-label="Large"
                      />
                      <Label
                        htmlFor="large"
                        className="flex flex-col items-center justify-between rounded-md border-2  p-4 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        PFPs
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h4 className="mt-6"></h4>
                  <RadioGroup
                    defaultValue="thin"
                    className="grid grid-cols-3 gap-4 mt-2"
                  >
                    <div>
                      <RadioGroupItem
                        value="thin"
                        id="thin"
                        className="peer sr-only"
                        aria-label="Thin"
                      />
                      <Label
                        htmlFor="thin"
                        className="flex flex-col items-center justify-between rounded-md border-2  p-4 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Sales
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="thick"
                        id="thick"
                        className="peer sr-only"
                        aria-label="Thick"
                      />
                      <Label
                        htmlFor="thick"
                        className="flex flex-col items-center justify-between rounded-md border-2  p-4 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Transfers
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* <ToppingList /> */}

                <div className="flex items-center justify-between mt-12">
                  <span className="font-bold">
                    0.0339 ETH <small>$116.75</small>
                  </span>
                  <Button>
                    <ShoppingCart size={20} />
                    <span className="ml-2">Make an Offer</span>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
