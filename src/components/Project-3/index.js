import {useQuery} from "@tanstack/react-query"

const Three=()=>{
     const { isPending, error, data } = useQuery({
       queryKey: ["reportData"],
       queryFn: () =>
         fetch("https://apis.ccbp.in/random-activity").then((res) =>
           res.json()
         ),
     });

     if (isPending) return <p>Loading🫷🫷🫷</p>;

     if (error) {
       return <p>Something went wrong... 👻👻👻👻</p>;
     }

    const{activity,type,image}=data

     return(
        <>
        <h1>{type}</h1>
        <p>{activity}</p>
         <img src={image} alt={type}/>
        </>
     )
}

export default Three