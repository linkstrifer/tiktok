import type { MetaFunction } from '@remix-run/node';
import { Link, useSearchParams } from '@remix-run/react';
import { useMemo } from 'react';
import { Product } from '~/components/Product';
import { YouTube } from '~/components/YouTube';

export const meta: MetaFunction = () => {
  return [
    { title: 'Recomendaciones - LinkStrifer' },
    { name: 'description', content: 'LFGGGGGG!' },
  ];
};

const products = [
  {
    url: 'https://www.thingiverse.com/thing:5376817',
    name: 'SKADIS Clamp',
    image: 'images/skadis-clamp.webp',
    store: 'generic',
  },
  {
    url: 'https://www.thingiverse.com/thing:6330604',
    name: 'Soporte para control de SKADIS',
    image: 'images/skadis-control.webp',
    store: 'generic',
  },
  {
    name: 'IKEA SKÅDIS Tablero perforado',
    url: 'https://www.ikea.com/co/es/p/skadis-tablero-perforado-comb-s89406365/?msockid=1323d0d3873a60d0394ac4d3869561f2',
    image: 'images/skadis.webp',
    store: 'generic',
  },
  {
    name: '8Bitdo Wireless USB Adapter for Switch, Windows, Mac & Raspberry Pi',
    url: 'https://amzn.to/3OuojF0',
    image: 'images/51ZuA6ivnvL._SL1500_.webp',
  },
  {
    name: 'Logitech G Driving Force Shifter',
    url: 'https://amzn.to/4fLch5Y',
    image: 'images/61UxxpmrCfL._AC_SL1000_.webp',
  },
  {
    name: 'Xbox Wireless Headset V2',
    url: 'https://amzn.to/4g3FIjC',
    image: 'images/71a4QQm1OqL._SL1500_.webp',
  },
  {
    name: 'Broadlink RM4 Mini Smart - IR Blaster Hub',
    url: 'https://amzn.to/3ZsfJwV',
    image: 'images/41sl8cTQOmL._AC_SL1000_.webp',
  },
  {
    name: 'AirTag',
    url: 'https://amzn.to/48pymED',
    image: 'images/71rP7f78eFL._AC_SL1500_.webp',
  },
  {
    name: 'AirTags x4',
    url: 'https://amzn.to/3NI5Fce',
    image: 'images/61bMNCeAUAL._AC_SL1500_.webp',
  },
  {
    name: 'Collar AirTag para gatos',
    url: 'https://amzn.to/3YfLxmO',
    image: 'images/71-n6CuNl-L._AC_SL1500.webp',
  },
  {
    name: 'Power bank, 24,000 mAh 80 Wh',
    url: 'https://www.steren.com.co/estacion-de-poder-de-24-000-mah-y-80-w-v-portatil.html',
    image: 'images/2uhjkdf72.webp',
    store: 'steren',
  },
  {
    name: 'Earpads for Microsoft Xbox Wireless/Wired',
    url: 'https://amzn.to/4cgeGnv',
    image: 'images/81Es3VU46OL._AC_SL1500_.webp',
  },
  {
    name: 'DJI Mic (2 TX + 1 RX + Charging Case)',
    url: 'https://amzn.to/4b08Wgw',
    image: 'images/71jTh1T3jGL._AC_SL1500_.webp',
  },
  {
    name: 'Govee Smart Wi-Fi RGBIC LED Strip Lights & Light Bars',
    url: 'https://amzn.to/459TMDP',
    image: 'images/71rmgdAqy8L._AC_SL1500_.webp',
  },
  {
    name: 'Xbox Series X',
    url: 'https://amzn.to/4byOsfE',
    image: 'images/51ojzJk77qL._SL1500_.webp',
  },
  {
    name: 'Xbox Series S (1TB)',
    url: 'https://amzn.to/4bUPgeP',
    image: 'images/61hwaBMvOxL._SL1500_.webp',
  },
  {
    name: 'WD_Black 1TB C50 Expansion Card, Officially Licensed for Xbox',
    url: 'https://amzn.to/3WLgoIP',
    image: 'images/71QxmOXxYVL._AC_SL1500_.webp',
  },
  {
    name: 'BONAI AA AAA C D SC Battery Charger with Detection Function',
    url: 'https://amzn.to/3UO7GGZ',
    image: 'images/61DoH9nddCL._AC_SL1500_.webp',
  },
  {
    name: 'Automatic Pet Feeder - Sureflap - SureFeed Microchip Pet Feeder - MPF001',
    url: 'https://amzn.to/3WQ5VvD',
    image: 'images/61nDt97BVSL._AC_SL1500_.webp',
  },
  {
    name: 'One Piece Box Set: East Blue and Baroque Works, Volumes 1-23 (One Piece Box Sets) ',
    url: 'https://amzn.to/4bt34gB',
    image: 'images/81u8P2490RL._SL1500_.webp',
  },
  {
    name: 'PowerA Solo Charging Stand for Xbox Series X|S',
    url: 'https://amzn.to/3V1viIs',
    image: 'images/61hr92++vkL._AC_SL1500_.webp',
  },
  {
    name: '8TB Seagate Game Drive Hub External HDD for Xbox',
    url: 'https://amzn.to/3wRUedd',
    image: 'images/51Q7SrJK5fL._AC_SL1500_.webp',
  },
];

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(search?.toLowerCase() ?? '')
      ),
    [search]
  );

  return (
    <div className="App">
      <section className="p-8 max-w-4xl m-auto flex flex-col gap-4 relative">
        <Link
          className="flex gap-2 items-center font-bold text-red-600"
          to="https://www.youtube.com/@LinkStrifer1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sígueme en <YouTube className="fill-red-600" />
        </Link>

        <h1 className="text-4xl font-bold">Recomendaciones</h1>

        <input
          type="search"
          placeholder="Buscar..."
          value={search ?? ''}
          onChange={(e) => setSearchParams({ search: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md mt-4"
        />

        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 grid-rows-">
          {filteredProducts.map((product) => (
            <Product {...product} key={product.url} />
          ))}
        </ul>
      </section>
    </div>
  );
}
