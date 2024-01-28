import * as React from "react";
import type { SliderProps } from "@radix-ui/react-slider";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface ShareSelectorProps {
  maxShares: number;
  defaultValue: SliderProps["defaultValue"];
}

export function ShareSelectorSlider({
  maxShares,
  defaultValue,
}: ShareSelectorProps) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div className="mt-6 grid gap-4 w-3/4 mx-auto">
      <div className="flex items-center justify-between">
        <Label htmlFor="shares" className="text-lg">
          Shares
        </Label>
        <span className="w-12 px-2 py-0.5 text-right text-lg text-muted-foreground">
          {value}
        </span>
      </div>
      <Slider
        id="shares"
        max={maxShares}
        defaultValue={value}
        step={5}
        onValueChange={setValue}
        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
        aria-label="Temperature"
      />
    </div>
  );
}

export function PledgeButtonPrimary() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex w-full sm:max-w-md sm:mx-auto">
          <button className="btn-primary w-full sm:mb-0">Pledge shares</button>
        </div>
      </SheetTrigger>
      <SheetContent className="w-11/12 md:w-3/4 max-w-full flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-xl">Pledge shares</SheetTitle>
          <SheetDescription>
            Initiatives can use your shares to get things that they need from
            Cofundable's marketplace
          </SheetDescription>
        </SheetHeader>
        <ShareSelectorSlider maxShares={100} defaultValue={[5]} />
        <SheetFooter>
          <SheetClose asChild>
            <button className="mt-4 btn-primary w-5/6 mx-auto" type="submit">
              Submit pledge
            </button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function BookmarkButtonPrimary() {
  return (
    <div className="flex w-full sm:max-w-md sm:mx-auto">
      <button className="btn-secondary w-full sm:mb-0">Bookmark</button>
    </div>
  );
}

export function BannerCTAs() {
  return (
    <div className="grid grid-cols-1 sm:justify-center gap-4">
      <PledgeButtonPrimary />
      <BookmarkButtonPrimary />
    </div>
  );
}
