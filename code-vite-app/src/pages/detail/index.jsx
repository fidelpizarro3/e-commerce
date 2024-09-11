import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../../components/itemDetail";


const Detail = () => {

    const { id } = useParams();
    let [item,setItem] = useState(null);

    useEffect(() => {
        fetch('/src/data/item.json')
        .then(response => response.json())
        .then(data => setItem(data.find (item => item.id == id )))
        .catch(error => console.error('Error al cargar el producto:', error));
    }, []);

    return (
    <>
    <p>
        <ItemDetail {...item} />
    </p>
    </>
    )

}

export default Detail;