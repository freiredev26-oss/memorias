import imgFerrovia from "../assets/images/rota-ferrovia.jpg"
import imgQuilombo from "../assets/images/quilombo.jpg"
import imgRuaAna from "../assets/images/rua-ana.jpg"
import imgBeisebal from "../assets/images/beisebal.avif"

export const routes = [
  {
    id: 1,
    title: "Rota da Estrada de Ferro",
    description: "A chegada da NOB e dos imigrantes que transformaram a nossa terra.",
    image: imgFerrovia,
    time: "~ 40 min",
  },

  {
    id: 2,
    title: "Rua Ana Luiza de Souza",
    description: "O coração do comércio e da vida da nossa comunidade.",
    image: imgRuaAna,
    time: "~ 30 min",
  },

  {
    id: 3,
    title: "Quilombo São João Batista",
    description: "Fé, resistência e tradição que ultrapassam gerações.",
    image: imgQuilombo,
    time: "~ 35 min",
  },
  {
    id: 4,
    title: "Associação Campograndense de Beisebol",
    description: "Fé, resistência e tradição que ultrapassam gerações.",
    image: imgBeisebal,
    time: "~ 5 min",
  },
];