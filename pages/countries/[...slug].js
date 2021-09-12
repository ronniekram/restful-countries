import Link from 'next/link';
import { useRouter } from "next/router";

const CountryPage = (props) => {
  const router = useRouter();
  return (
    <div>
      <Link href="/">Back</Link>
      hi :D
    </div>
  )
};

export async function getServerSideProps(context) {
  const { flag, name, population, region, capital } = context.query;

  return {
    props: {
      flag,
      name,
      population,
      region,
      capital
    }
  };
};

export default CountryPage;