import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/itemDetail";

const Detail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/item.json') 
            .then(response => response.json())
            .then(data => {
                const foundItem = data.find(item => Number(item.id) === Number(id));
                setItem(foundItem);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al cargar el producto:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Cargando producto...</p>;
    }

    if (!item) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <ItemDetail {...item} />
    );
};

export default Detail;










// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import ItemDetail from "../../components/itemDetail";


// const Detail = () => {

//     const { id } = useParams();
//     let [item,setItem] = useState(null);

//     useEffect(() => {
//         fetch('/src/data/item.json')
//         .then(response => response.json())
//         .then(data => setItem(data.find (item => item.id == id )))
//         .catch(error => console.error('Error al cargar el producto:', error));
//     }, [id]);

//     return (
//     <>
//     <p>
//         <ItemDetail {...item} />
//     </p>
//     </>
//     )

// }

// export default Detail;