import { TitleComponent } from './TitleComponent';
import { Product } from './Product';
import { productsData } from 'Data/productsData';

export const App = () => {
  return (
    <div>
      <TitleComponent />

      {productsData.map(({ id, title, price, discount }) => {
        return (
          <Product key={id} title={title} price={price} discount={discount} />
        );
      })}

      {/* <Product title="Tacos With Lime" price="7.99" discount={1.4} />
      <Product title="Tacos With Lemon" price="4.99" discount={2.6} />
      <Product title="Tacos L" price="2.99" discount={null} /> */}
    </div>
  );
};
