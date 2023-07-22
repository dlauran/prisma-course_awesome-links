import { ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import apolloClient from '../lib/apollo';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
