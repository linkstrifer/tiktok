import type { MetaFunction } from '@remix-run/node';
import { useSearchParams } from '@remix-run/react';
import { useMemo } from 'react';
import { Product } from '~/components/Product';

export const meta: MetaFunction = () => {
  return [
    { title: 'Recomendaciones - LinkStrifer' },
    { name: 'description', content: 'LFGGGGGG!' },
  ];
};

const products = [
  {
    name: 'DJI Mic (2 TX + 1 RX + Charging Case)',
    url: 'https://amzn.to/4b08Wgw',
    image: 'images/71jTh1T3jGL._AC_SL1500_.webp',
    hash: 'LpI#$3M{_3WBWBM{M{%M~qWBofj[',
  },
  {
    name: 'Govee Smart Wi-Fi RGBIC LED Strip Lights & Light Bars',
    url: 'https://amzn.to/459TMDP',
    image: 'images/71rmgdAqy8L._AC_SL1500_.webp',
    hash: 'LMJH8:7xK~#8=ig+F;,.M$t7Skrq',
  },
  {
    name: 'Xbox Series X',
    url: 'https://amzn.to/4byOsfE',
    image: 'images/51ojzJk77qL._SL1500_.webp',
    hash: 'LsQJfmM{~q%Mt7WBWBt7?bt7D%M{',
  },
  {
    name: 'Xbox Series S (1TB)',
    url: 'https://amzn.to/4bUPgeP',
    image: 'images/61hwaBMvOxL._SL1500_.webp',
    hash: 'L^NAr3M{~q%Mt7Rjj[of%MofM{WB',
  },
  {
    name: 'WD_Black 1TB C50 Expansion Card, Officially Licensed for Xbox',
    url: 'https://amzn.to/3WLgoIP',
    image: 'images/71QxmOXxYVL._AC_SL1500_.webp',
    hash: 'JOGlFuRjRj~q-;t7',
  },
  {
    name: 'BONAI AA AAA C D SC Battery Charger with Detection Function',
    url: 'https://amzn.to/3UO7GGZ',
    image: 'images/61DoH9nddCL._AC_SL1500_.webp',
    hash: 'LgJ8eLD%-;IU00IUxuRj_MxuM{t7',
  },
  {
    name: 'Automatic Pet Feeder - Sureflap - SureFeed Microchip Pet Feeder - MPF001',
    url: 'https://amzn.to/3WQ5VvD',
    image: 'images/61nDt97BVSL._AC_SL1500_.webp',
    hash: 'L4LN_V9Z00.80#9GPW9t00-:0L~C',
  },
  {
    name: 'One Piece Box Set: East Blue and Baroque Works, Volumes 1-23 (One Piece Box Sets) ',
    url: 'https://amzn.to/4bt34gB',
    image: 'images/81u8P2490RL._SL1500_.webp',
    hash: 'L6F=mu_2Ac00DNRQ#PIU0N9atl~V',
  },
  {
    name: 'PowerA Solo Charging Stand for Xbox Series X|S',
    url: 'https://amzn.to/3V1viIs',
    image: 'images/61hr92++vkL._AC_SL1500_.webp',
    hash: 'LxM%}}9F~q%MM{Rjj[t7?b%MWBt7',
  },
  {
    name: '8TB Seagate Game Drive Hub External HDD for Xbox',
    url: 'https://amzn.to/3wRUedd',
    image: 'images/51Q7SrJK5fL._AC_SL1500_.webp',
    hash: 'LwL#OWX4~qaf8{xutQRj_3xuM{V[',
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
      <section className="p-8 max-w-4xl m-auto prose">
        <h1>Recomendaciones</h1>

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
