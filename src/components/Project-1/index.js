import {useQuery} from "@tanstack/react-query"


const One=()=>{
    const { isPending, error, data } = useQuery({
      queryKey: ["reportData"],
      queryFn: () => fetch("https://apis.ccbp.in/tg/packages")
      .then((res)=>
      res.json()),
    });


    
if(isPending)
    return <p>Loading🫷🫷🫷</p>

    if(error){
        return <p>Something went wrong... 👻👻👻👻</p>
    }
  console.log(data)

    return(
        <>
        <ul>
            {data.packages.map(i=>
                <li key={i.id}>
                    <p>{i.name}</p>
                    <img src={i.image_url} alt={i.name}/>
                </li>)}
        </ul>
        </>
    )


}

export default One