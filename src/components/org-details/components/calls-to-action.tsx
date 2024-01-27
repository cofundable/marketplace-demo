import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function PledgeButtonPrimary() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex w-full sm:max-w-md sm:mx-auto">
          <button className="btn-primary w-full sm:mb-0">Pledge shares</button>
        </div>
      </SheetTrigger>
      <SheetContent className="max-w-full">
        <SheetHeader>
          <SheetTitle>Pledge shares</SheetTitle>
          <SheetDescription>
            Initiatives can use your shares to get things that they need from
            Cofundable's marketplace
          </SheetDescription>
        </SheetHeader>
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
