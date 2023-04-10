import { Inter } from 'next/font/google';
import Home from '@/components/screens/home/Home';
import Layout from '@/components/layout/layout';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <Layout title="Home page" description="hi">
      <Home />
    </Layout>
  );
}
