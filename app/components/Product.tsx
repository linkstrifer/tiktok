import { Link } from '@remix-run/react';

export function Product({
  name,
  url,
  image,
}: {
  name: string;
  url: string;
  image: string;
}) {
  return (
    <article className="grid gap-4 grid-rows-subgrid row-span-2 items-start">
      <div>
        <picture className="w-full aspect-square p-4 flex">
          <img
            src={image}
            alt={name}
            className="object-contain object-center transition-all h-full w-full"
          />
        </picture>

        <h2 className="text-center text-lg m-0">{name}</h2>
      </div>

      <Link
        to={url}
        rel="noopener noreferrer"
        target="_blank"
        className="p-4 rounded-xl bg-amber-400 text-black flex justify-center text-lg gap-2 items-center font-bold no-underline"
      >
        <i className="bi bi-amazon"></i>Amazon
      </Link>
    </article>
  );
}
