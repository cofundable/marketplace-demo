export function PledgeButtonPrimary() {
  return (
    <div className="flex w-full sm:max-w-md sm:mx-auto">
      <button className="btn-primary w-full sm:mb-0">Pledge shares</button>
    </div>
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
