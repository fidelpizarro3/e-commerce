import Navbar from '../Navbar/index'


const BaseLayout = ({children}) => {


    return (
        <>
        <Navbar/>
        {children}
        <footer>
        <p>footer design</p>
        </footer>
        </>
    );
}

export default BaseLayout;