
const users = {
  "user001": "senha0001"
  "user002": "senha0002"
  "user003": "senha0003"
  "user004": "senha0004"
  "user005": "senha0005"
  "user006": "senha0006"
  "user007": "senha0007"
  "user008": "senha0008"
  "user009": "senha0009"
  "user010": "senha0010"
  "user011": "senha0011"
  "user012": "senha0012"
  "user013": "senha0013"
  "user014": "senha0014"
  "user015": "senha0015"
  "user016": "senha0016"
  "user017": "senha0017"
  "user018": "senha0018"
  "user019": "senha0019"
  "user020": "senha0020"
  "user021": "senha0021"
  "user022": "senha0022"
  "user023": "senha0023"
  "user024": "senha0024"
  "user025": "senha0025"
  "user026": "senha0026"
  "user027": "senha0027"
  "user028": "senha0028"
  "user029": "senha0029"
  "user030": "senha0030"
  "user031": "senha0031"
  "user032": "senha0032"
  "user033": "senha0033"
  "user034": "senha0034"
  "user035": "senha0035"
  "user036": "senha0036"
  "user037": "senha0037"
  "user038": "senha0038"
  "user039": "senha0039"
  "user040": "senha0040"
  "user041": "senha0041"
  "user042": "senha0042"
  "user043": "senha0043"
  "user044": "senha0044"
  "user045": "senha0045"
  "user046": "senha0046"
  "user047": "senha0047"
  "user048": "senha0048"
  "user049": "senha0049"
  "user050": "senha0050"
  "user051": "senha0051"
  "user052": "senha0052"
  "user053": "senha0053"
  "user054": "senha0054"
  "user055": "senha0055"
  "user056": "senha0056"
  "user057": "senha0057"
  "user058": "senha0058"
  "user059": "senha0059"
  "user060": "senha0060"
  "user061": "senha0061"
  "user062": "senha0062"
  "user063": "senha0063"
  "user064": "senha0064"
  "user065": "senha0065"
  "user066": "senha0066"
  "user067": "senha0067"
  "user068": "senha0068"
  "user069": "senha0069"
  "user070": "senha0070"
  "user071": "senha0071"
  "user072": "senha0072"
  "user073": "senha0073"
  "user074": "senha0074"
  "user075": "senha0075"
  "user076": "senha0076"
  "user077": "senha0077"
  "user078": "senha0078"
  "user079": "senha0079"
  "user080": "senha0080"
  "user081": "senha0081"
  "user082": "senha0082"
  "user083": "senha0083"
  "user084": "senha0084"
  "user085": "senha0085"
  "user086": "senha0086"
  "user087": "senha0087"
  "user088": "senha0088"
  "user089": "senha0089"
  "user090": "senha0090"
  "user091": "senha0091"
  "user092": "senha0092"
  "user093": "senha0093"
  "user094": "senha0094"
  "user095": "senha0095"
  "user096": "senha0096"
  "user097": "senha0097"
  "user098": "senha0098"
  "user099": "senha0099"
  "user100": "senha0100"
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
