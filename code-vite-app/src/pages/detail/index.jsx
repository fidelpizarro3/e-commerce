import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/itemDetail";
import { getDoc, doc } from "firebase/firestore"; // Importa Firestore
import { db } from "../../config/firebase.config";

const Detail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const itemDoc = await getDoc(doc(db, "items", id)); // Cambia "items" por el nombre de tu colección
                if (itemDoc.exists()) {
                    setItem({ id: itemDoc.id, ...itemDoc.data() });
                } else {
                    console.error("No se encontró el producto con ese ID");
                }
            } catch (error) {
                console.error('Error al cargar el producto:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
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