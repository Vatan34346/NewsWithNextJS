import {useRouter} from 'next/router';
const DetailPage=()=>{

    const router = useRouter();

   const id= router.query.newsid;
    return <h1>DetailPage {id}</h1>
}

export default DetailPage;   