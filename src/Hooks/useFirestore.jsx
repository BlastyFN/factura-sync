import { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
const example = [
    {
        id:"123",
        alias: "Alex",
        name: "Alejandro Francisco Bañuelos Romero",
        email: "slimedev_02@gmail.com",
        active: false
    },
    {
        id:"6543",
        alias: "Isaac",
        name: "Isaac Díaz Trejo",
        email: "isaacdiaztrejo@gmail.com",
        active: false
    },
    {
        id:"9843",
        alias: "Andrés",
        name: "Andrés López Díaz",
        email: "allop@gmail.com",
        active: false
    },
    {
        id:"98324",
        alias: "Lalo",
        name: "Eduardo Marcelino Figueroa Navarro",
        email: "eduardofina7@gmail.com",
        active: false
    },
    {
        id:"3243",
        alias: "Ten",
        name: "Tenyotl Itzel García Tamayo",
        email: "tenyotldf@gmail.com",
        active: false
    },
    {
        id:"9451",
        alias: "Marco",
        name: "Marco Iván Vallejo Valencia",
        email: "marcovv@gmail.com",
        active: false
    },
    {
        id:"98325982",
        alias: "Rodri",
        name: "Rodrigo Félix Velasco",
        email: "felixtejuino666@gmail.com",
        active: false
    },
    {
        id:"45436543",
        alias: "Carlos",
        name: "Carlos Fernando López Ocampo",
        email: "carlosfer@gmail.com",
        active: false
    },
    {
        id:"25364363454",
        alias: "Aramis",
        name: "Carlos Aramis López Ovalle",
        email: "aramissss@gmail.com",
        active: false
    },
]
const useFirestore = (collectionName, baseQuery = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState(baseQuery);
  const [page, setPage] = useState(1);
  const readData = async () => {
    
    try {
      setLoading(true);
      setTimeout(() => {
        setData(example);
        setLoading(false);
      }, 2000);
    //   let querySnapshot;

    //   if (query) {
    //     querySnapshot = await firebase
    //       .firestore()
    //       .collection(collectionName)
    //       .where(...query)
    //       .get();
    //   } else {
    //     querySnapshot = await firebase.firestore().collection(collectionName).get();
    //   }

    //   const collectionData = querySnapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
      

    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    readData();
  }, [query]);

  const updateQuery = (newQuery) => {
    setPage(1);
    setQuery(newQuery);
  };

  const nextPage = () =>{
    setPage(page+1);
  }
  const previousPage = ()=>{
    if (page >1) {
      setPage(page-1);
    }
    
  }
  return { data, loading, error, query, updateQuery, page, nextPage, previousPage };
};

export default useFirestore;
