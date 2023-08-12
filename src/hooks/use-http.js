import {useState} from 'react';

const UseHttp =()=>{
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU3ZGNkMzNhYWYwZjVhNDAxMzQwMzMyNDQyMGQwZSIsInN1YiI6IjY0YWZjNjBiOGEwZTliMDBlMzc2OTcyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8BNHS-1ZrsChBsg2qElbUHw6XtfwlGtx4lhM48uO9U",
        },
      };
      const fetchMyAPI = async(fetchedObject)=>{
        setIsLoading(true);
        const datas = await fetch(fetchedObject.url,{
            method: fetchedObject.method? fetchedObject.method: options.method,
            headers: fetchedObject.headers? fetchedObject.headers: options.headers,
            body: fetchedObject.body?JSON.stringify(fetchedObject.body):null
        })
        const parsedData = await datas.json();
        setData(parsedData.results);
        setIsLoading(false);

    // following is an alternative way bu to implement following code we have to add async before function written above
    //fetch(`https://api.themoviedb.org/3/movie/now_playing`, options).then(response=>{
    //   return response.json();
    // }).then(data=>{
    //   return setData(data.results);
    // })
      }
      return {
        data,
        isLoading,
        fetchMyAPI
      }
}

export default UseHttp;