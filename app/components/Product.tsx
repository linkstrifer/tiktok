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
    <Link
      to={url}
      rel="noopener noreferrer"
      target="_blank"
      className={classNames(
        'p-4 rounded-xl flex justify-center text-lg gap-2 items-center font-bold no-underline capitalize text-black cursor-pointer',
        {
          'border-2 border-amber-400 hover:bg-amber-400 hover:text-white':
            store === 'amazon',
          'border-2 border-blue-400 hover:bg-blue-400 hover:text-white ':
            store === 'steren',
          'border-2 border-gray-500 hover:bg-gray-500 hover:text-white ':
            store === 'generic',
        }
      )}
    >
      <article className="flex flex-col gap-4">
        <div>
          <picture className="w-full aspect-square p-4 flex">
            <img
              src={`${
                process.env.NODE_ENV === 'development' ? '/' : ''
              }${image}`}
              alt={name}
              className="object-contain object-center transition-all h-full w-full rounded-xl"
            />
          </picture>

          <h2 className="text-center text-lg m-0">{name}</h2>
        </div>

        {store === 'Amazon' ? <i className="bi bi-amazon"></i> : null}
      </article>
    </Link>
  );
}
