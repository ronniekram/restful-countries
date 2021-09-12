import Link from 'next/link';
import useSWR from 'swr';
import { useRouter } from "next/router";
import axios from 'axios';

const CountryPage = () => {
  const router = useRouter();

  const fetcher = url => axios.get(url).then(res => res.data);
  const { data, error } = useSWR(`https://restcountries.eu/rest/v2/name/${router.query.slug}?fullText=true`, fetcher);

  const country = data[0];

  return (
    <div>
      <Link href="/">Back</Link>
      hi :D
    </div>
  )
};



export default CountryPage;