import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';
import { Footer, Header, Hero } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Custom Page - {generalSettings.title}</title>
      </Head>

      <Hero title="wowowowowow" />

	<img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/228207125_6586753861350740_7581371882247501771_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=5OnS0ftkumcAX_1m9Ls&_nc_ht=scontent-hou1-1.xx&oh=f6f7a38554851b65c6179d5a26dca0a9&oe=6155E710" alt="socool">

      <main className="content content-single">
        <div className="wrap">
          <p>
            You can still create pages just as you would in{' '}
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              target="_blank"
              rel="noreferrer">
              Next.js
            </a>
            . Take a look at <code>src/pages/custom-page.tsx</code> for an
            example.
          </p>
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
