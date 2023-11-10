import Footer from "./component/Footer";
import Header from "./component/Header";


function Accueil () {
  const poneys = [
    {
      id: 1,
      name: "Pinkie Pie",
      color: "red",
      age: 2,
      isMagic: true,
      img: "https://ih1.redbubble.net/image.327144413.1045/flat,750x1000,075,f.jpg"
    },
    {
      id: 2,
      name: "Twilight Sparkle",
      color: "blue",
      age: 3,
      isMagic: false,
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22520000-b709-4fa2-a59d-4e4259a2668c/deybve1-2738e380-b861-4d6a-a90b-b01456b459de.png/v1/fill/w_1920,h_1440/princess_twilight_sparkle_by_melspyrose_deybve1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0MCIsInBhdGgiOiJcL2ZcLzIyNTIwMDAwLWI3MDktNGZhMi1hNTlkLTRlNDI1OWEyNjY4Y1wvZGV5YnZlMS0yNzM4ZTM4MC1iODYxLTRkNmEtYTkwYi1iMDE0NTZiNDU5ZGUucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2IaR3_YigRxLQ2F6rmncN_DTXbB9LZ2iwemMJ4P4qZA"
    }, 
    {
      id: 3,
      name: "Rainbow Dash",
      color: "green",
      age: 4,
      isMagic: true,
      img: "https://static.wikia.nocookie.net/mlp/images/4/4b/Rainbow_Dash_Wonderbolt_fantasy_cropped_S1E3.png/revision/latest?cb=20210206044556"
    },
    {
      id: 4,
      name: "Rarity",
      color: "yellow",
      age: 5,
      isMagic: false,
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3ecdd2e-6920-412d-8232-f8197a6ae700/d5gdbgj-c31f0a52-1bdd-4e45-9d86-17138dc1147a.png/v1/fill/w_900,h_971/rarity_by_uxyd_d5gdbgj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTcxIiwicGF0aCI6IlwvZlwvYzNlY2RkMmUtNjkyMC00MTJkLTgyMzItZjgxOTdhNmFlNzAwXC9kNWdkYmdqLWMzMWYwYTUyLTFiZGQtNGU0NS05ZDg2LTE3MTM4ZGMxMTQ3YS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.suneyTGZjLfW30V1iVu643s9So09xsWOoiVVAotNQic"
    },
    {
      id: 5,
      name: "Fluttershy",
      color: "purple",
      age: 6,
      isMagic: true,
      img: "https://static.wikia.nocookie.net/my-little-universe/images/3/33/Fluttershy_sitting.png/revision/latest?cb=20180311223739"
    },
    {
      id: 6,
      name: "Celestia",
      color: "pink",
      age: 7,
      isMagic: false,
      img: "https://i.pinimg.com/originals/70/7a/1e/707a1e16eb4b8f7edd78b0247b20516d.png"
    },
    {
      id: 7,
      name: "Poney 7",
      color: "black",
      age: 8,
      isMagic: true,
      img: "https://e7.pngegg.com/pngimages/976/315/png-clipart-pony-rainbow-dash-youtube-lightning-dust-fireball-horse-mammal.png"
    },
    {
      id: 8,
      name: "Poney 8",
      color: "white",
      age: 9,
      isMagic: false,
      img: "https://e1.pngegg.com/pngimages/450/299/png-clipart-super-my-little-pony-my-little-pony-character.png"
    },
    {
      id: 9,
      name: "Poney 9",
      color: "brown",
      age: 10,
      isMagic: true,
      img: "https://e7.pngegg.com/pngimages/187/777/png-clipart-my-little-pony-pinkie-pie-fire-flame-princess-the-sleeping-unicorn-horse-mammal.png"
    },
    {
      id: 10,
      name: "Poney 10",
      color: "grey",
      age: 11,
      isMagic: false,
      img: "https://e7.pngegg.com/pngimages/870/842/png-clipart-my-little-pony-rainbow-dash-rarity-twilight-sparkle-my-little-pony-horse-mammal-thumbnail.png"
    },
];

    const dernierPoneys = poneys.slice(-5)

    return(
        <>
        <Header />
            <div className="home">
                <h1>Blog des poneys magique</h1>
                
                <article className="img-home">
                
                {dernierPoneys.map((poney) => {
                    return (
                     <div> 
                      <h2>{poney.name}</h2>
                      <p>{poney.age}</p>
                      <p>{poney.color}</p>
                      <img className="size-img" src={poney.img} alt="" />
                    </div>
                )})}

                </article>

            </div>
        <Footer />
        </>
    )
}

export default Accueil;