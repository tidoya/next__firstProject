import { NextPage } from 'next';
import { useRouter } from 'next/router';

const CarPage: NextPage = () => {
  const { asPath, pathname } = useRouter();
  console.log(asPath, pathname);
  return <div>I am CarPage</div>;
};

export default CarPage;
