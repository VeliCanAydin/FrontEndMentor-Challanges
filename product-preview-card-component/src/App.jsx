import ProductPreviewCard from './components/ProductPreviewCard';
// import './styles/app.css';
const productInformation = {
  category: 'P E R F U M E',
  imgSource: '../assets/icon-cart.svg',
  title: 'Gabrielle Essence Eau De Parfum',
  description:
    'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  price: 169.99,
  discountedPrice: 149.99,
};
export default function App() {
  return (
    <section>
      <ProductPreviewCard product={productInformation} />
    </section>
  );
}
