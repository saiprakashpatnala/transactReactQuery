import {useQuery} from "@tanstack/react-query"


const Five=()=>{
    const { isPending, error, data } = useQuery({
      queryKey: ["reportData"],
      queryFn: () => fetch("https://apis.ccbp.in/numbers-fact?number=")
      .then((res)=>
        res.json()
      ),
    });

    if (isPending) return <p>Loading🫷🫷🫷</p>;

    if (error) {
      return <p>Something went wrong... 👻👻👻👻</p>;
    }
    
    const{fact}=data

    return(
        <p>{fact}</p>
    )
}

export default Five