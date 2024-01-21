interface Props {
  name: string;
  description: string;
}

export function BannerHeading({ name, description }: Props) {
  return (
    <div className="text-center max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-medium leading-tighter mb-4">
        {name}
      </h1>
      <p className="text-base md:text-lg text-muted-foreground pb-4">
        {description}
      </p>
    </div>
  );
}
