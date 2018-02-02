let menu;

document.addEventListener("DOMContentLoaded", loadJson);

let modtager = document.querySelector(".templateModtager");
let template = document.querySelector(".babushkaTemplate");


async function loadJson() {

    let object = await fetch("menu.json");
    menu = await object.json();

    //console.log(menu);
    // find retter og filtrer efter kategori og gem dem i nyt array

    let alle = menu.filter(ret => ret.kategori == "alle");
    let forretter = menu.filter(ret => ret.kategori == "forretter");
    let hovedretter = menu.filter(ret => ret.kategori == "hovedretter");
    let desserter = menu.filter(ret => ret.kategori == "desserter");
    let drikkevarer = menu.filter(ret => ret.kategori == "drikkevarer");

    document.querySelector("#filter-alle").addEventListener("click", () => {
        visMenu(menu, "Menu")
    });
    document.querySelector("#filter-forretter").addEventListener("click", () => {
        visMenu(forretter, "Forretter")
    });
    document.querySelector("#filter-hovedretter").addEventListener("click", () => {
        visMenu(hovedretter, "Hovedretter")
    });
    document.querySelector("#filter-desserter").addEventListener("click", () => {
        visMenu(desserter, "Desserter")
    });
    document.querySelector("#filter-drikkevarer").addEventListener("click", () => {
        visMenu(drikkevarer, "Drikkevarer")
    });




    visMenu(menu, "Menu");

}

function visMenu(menu, overskrift) {
    document.querySelector("[data-overskrift]").textContent = overskrift;

    modtager.innerHTML = "";

    menu.forEach(hverRet => {
        let klon = template.cloneNode(true).content;
        klon.querySelector(".navn").textContent = hverRet.navn;
        klon.querySelector(".billede").src = "babushka assets/imgs/small/" +
            hverRet.billede + "-sm.jpg";
        klon.querySelector(".kategori").textContent = hverRet.kategori;
        klon.querySelector(".kortbeskrivelse").textContent = hverRet.kortbeskrivelse;
        klon.querySelector(".oprindelsesregion").textContent = hverRet.oprindelsesregion;
        klon.querySelector(".pris").textContent = hverRet.pris;
        modtager.appendChild(klon);



    })

}
