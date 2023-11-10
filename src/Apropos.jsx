import Header from "./component/Header";
import Footer from "./component/Footer";

function Apropos() {

    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
    };
    
    return(
      <>
      <Header />
        <div className="bg-about">
            <ul>
                    <li>{infos.author}</li>
                    <li>{infos.published}</li>
                    <li>{infos.address}</li>
            </ul>
        </div>
      <Footer />
      </>  
    )
}


export default Apropos;