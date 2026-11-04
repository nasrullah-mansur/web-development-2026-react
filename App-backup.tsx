import { useEffect, useState } from "react";



export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);




  useEffect(() => {

    const getUsers = async () => {


      try {
        const res = await fetch('https://jsonplaceholders.typicode.com/posts')
        const data = await res.json();

        setUsers(data);
        setIsError(false);
        setIsLoading(false);

      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      }
    }

    getUsers();

  });


  return (
    <div>

      {isLoading && !isError &&
        <p>Is Loading ....</p>
      }

      {!isLoading && isError &&
        <p>Something wrong ..</p>
      }

      {!isLoading && !isError &&
        <ul>
          {users.map(item => (
            <li key={item.id}>{item.title}</li>

          ))}
        </ul>
      }


    </div>
  )
}
