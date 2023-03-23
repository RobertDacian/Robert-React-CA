import ProductList from '../../components/products/ProductList';

export default function HomePage() {
  return (
    <>
      <div className='title '>
        <h1>Products</h1>
        <div className='underline'></div>
      </div>
      <ProductList />
    </>
  );
}
