const users = {
  "user001": "3c9b1a",
  "user002": "558203",
  "user003": "2035b5",
  "user004": "4c221b",
  "user005": "41c1f1",
  "user006": "83c74d",
  "user007": "bcbff7",
  "user008": "40e6a5",
  "user009": "bba2ad",
  "user010": "550b87",
  "user011": "8d91a6",
  "user012": "8e2ef1",
  "user013": "d354c8",
  "user014": "eb9c25",
  "user015": "d07a94",
  "user016": "2d44e0",
  "user017": "25f6ff",
  "user018": "97c2a8",
  "user019": "a0160d",
  "user020": "bd6e1b",
  "user021": "d1e79d",
  "user022": "9b0b64",
  "user023": "12ed5a",
  "user024": "b71bb0",
  "user025": "f1840b",
  "user026": "14431c",
  "user027": "8320b3",
  "user028": "ae2fd9",
  "user029": "c9b28e",
  "user030": "fd5ef5",
  "user031": "bd2311",
  "user032": "ad5ee4",
  "user033": "397c9b",
  "user034": "032979",
  "user035": "2e86b4",
  "user036": "ddaf50",
  "user037": "280cce",
  "user038": "b4d1cb",
  "user039": "4d4401",
  "user040": "f8783c",
  "user041": "c740c7",
  "user042": "c17d67",
  "user043": "eb42a4",
  "user044": "8c944f",
  "user045": "879d58",
  "user046": "1bc4fa",
  "user047": "c67d1f",
  "user048": "fb2491",
  "user049": "cf0cfd",
  "user050": "59b718",
  "user051": "31ae9f",
  "user052": "f89d90",
  "user053": "1f361d",
  "user054": "27c27d",
  "user055": "fdf1bc",
  "user056": "03a28d",
  "user057": "bcfe25",
  "user058": "d51046",
  "user059": "dfbc40",
  "user060": "f4b8ee",
  "user061": "bff6fa",
  "user062": "46f1dc",
  "user063": "44c873",
  "user064": "7bcf7d",
  "user065": "3b2e25",
  "user066": "d4a847",
  "user067": "899a1d",
  "user068": "2bb92c",
  "user069": "1ad405",
  "user070": "c39499",
  "user071": "ac49ef",
  "user072": "de96ec",
  "user073": "7c03e7",
  "user074": "20f994",
  "user075": "c4c45e",
  "user076": "9f59fa",
  "user077": "0c1157",
  "user078": "df70e9",
  "user079": "3985f6",
  "user080": "ad88c7",
  "user081": "eb91a7",
  "user082": "e738b1",
  "user083": "db72bb",
  "user084": "efcc1f",
  "user085": "8a65d1",
  "user086": "48e94c",
  "user087": "c46e57",
  "user088": "28dcd5",
  "user089": "dbdf3a",
  "user090": "8df5ed",
  "user091": "77cd51",
  "user092": "77f4ed",
  "user093": "c0a16c",
  "user094": "2ce3b4",
  "user095": "12779e",
  "user096": "248df6",
  "user097": "ac65e2",
  "user098": "da9809",
  "user099": "9b46e5",
  "user100": "2726c4"
};

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (users[user] && users[user] === pass) {
    if (sessionStorage.getItem(user)) {
      document.getElementById("error").innerText = "Usuário já está logado em outra sessão.";
      return;
    }
    sessionStorage.setItem(user, true);
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("liveBox").style.display = "block";

    // Substitua pelo seu IP público ou DDNS:
    const streamUrl = "http://179.153.107.62:8080/live/stream.m3u8";
    document.getElementById("liveVideo").src = streamUrl;
  } else {
    document.getElementById("error").innerText = "Usuário ou senha inválidos.";
  }
}

document.addEventListener('contextmenu', event => event.preventDefault());
