import {useQuery} from "@tanstack/react-query"


const Four=()=>{

    const { isPending, error, data } = useQuery({
      queryKey: ["reportData"],
      queryFn: () => fetch("https://apis.ccbp.in/jokes/random")
      .then((res)=>
      res.json())
    });

    if (isPending) return <p>Loading🫷🫷🫷</p>;

    if (error) {
      return <p>Something went wrong... 👻👻👻👻</p>;
    }
    
    const{value}=data
    return(
        <>
        <p>Joke:{value}</p>
        </>
    )

}

export default Four