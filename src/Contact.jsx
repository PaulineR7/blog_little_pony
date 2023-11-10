import Footer from "./component/Footer";
import Header from "./component/Header";

function Contact() {
    return(
    <>
    <Header />
    <div className="home">
    <form>
        <div id="from">
            <label for="name">NOM :</label>
            <input type="text" id="name" name="user_name" />
        </div>

        <div id="reply">
            <label for="mail">Prénom</label>
            <input type="email" id="mail" name="user_email" />
        </div>

        <div id="message">
            <label for="msg">Votre message:</label>
            <textarea id="msg" name="user_message"></textarea>
        </div>

        <div class="button">
            <button type="submit">Envoyer</button>
        </div>
    </form>
    </div>
    <Footer />
    </>
    )
}

export default Contact;