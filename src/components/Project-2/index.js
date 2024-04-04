import {useQuery} from "@tanstack/react-query"

const Two=()=>{
    const { isPending, error, data } = useQuery({
      queryKey: ["reportData"],
      queryFn: () => fetch("https://apis.ccbp.in/te/courses")
      .then((res)=>
        res.json()
      )
    });

    if (isPending) return <p>Loading🫷🫷🫷</p>;

    if (error) {
      return <p>Something went wrong... 👻👻👻👻</p>;
    }

    console.log(data)
    return(
        <ul>
            {data.courses.map(i=>
                <li key={i.id}>
                    <p>{i.name}</p>
                    <img src={i.logo_url} alt={i.name}/>

                </li>)}
        </ul>
    )
}

export default Two