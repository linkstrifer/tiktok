import { Link } from '@remix-run/react';
import classNames from 'classnames';

export function Product({
  name,
  url,
  image,
  store = 'amazon',
}: {
  name: string;
  url: string;
  image: string;
  store?: string;
}) {
  return (
    <article className="grid gap-4 grid-rows-subgrid row-span-2 items-start">
      <div>
        <picture className="w-full aspect-square p-4 flex">
          <img
            src={`${process.env.NODE_ENV === 'development' ? '/' : ''}${image}`}
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
        className={classNames(
          'p-4 rounded-xl flex justify-center text-lg gap-2 items-center font-bold no-underline capitalize',
          {
            'bg-amber-400 text-black': store === 'amazon',
            'bg-blue-400 text-white': store === 'steren',
          }
        )}
      >
        {store === 'Amazon' ? <i className="bi bi-amazon"></i> : null}

        {store}
      </Link>
    </article>
  );
}
