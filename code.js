function insertDiv(account, text, date, avatar, image, id, comments, source) {
    if (image == ""){
        image = "https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png"
    }
    let divHTML = `
        <div class="post">
            <img class="profile-pic" src="${avatar}" alt="Profile">
            <div class="post-content">
                <div class="username">${account}</div>
                <div class="date">${date}  <a href="${source}">Quelle</a></div>
                <div class="content">
                    ${text} <br>
                    <img class="post-image" src="${image}"></img>
                </div>
                <div class="comments" id="C${id}">
                </div>
            </div>
        </div>
    `;
    document.getElementById("FEED").innerHTML += divHTML; // Directly insert into the page
    for (let i = 0; i < comments.length; i++) {
        document.getElementById(`C${id}`).innerHTML += `<div class="comment"><b>${comments[i][0]}:</b> ${comments[i][1]}</div>`
    }
    
}

window.addEventListener("load", (event) => {
    insertDiv(
        "BRD", 
        "So, das Grundgesetz steht. Wir sind dann mal ein Staat. 🎉 #Demokratie2.0", 
        "23. Mai 1949", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/300px-Flag_of_Germany.svg.png", 
        "",
        1,
        [["Wessi_Heiko", "Die ganzen Soldaten sind aber immer noch da.🤔"], ["UdSSR", "Pah, noch so eine Kapitaldiktatur. Ihr seid doch alles nur amerikanische Schergen!"], ["USA", "Ok, Schwurbler. @UdSSR"]],
        "https://webarchiv.bundestag.de/archive/2009/1127/kulturundgeschichte/geschichte/ausstellungen/verfassung/tafel27/index.html#:~:text=Am%2023.,war%20die%20Bundesrepublik%20Deutschland%20gegründet"
    );
    insertDiv(
        "BRD", 
        "Die erste demokratisch gewählte Regierung ist da: Das Kabinett Adenauer aus Union, FDP und DP regiert jetzt im Auftrag des Volkes.", 
        "14. August 1949", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/300px-Flag_of_Germany.svg.png", 
        "",
        1,
        [],
        "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Video-Textfassungen/Geschichte/textfassung-gruendung-ddr.html#:~:text=Nach%20der%20Gründung%20der%20Bundesrepublik,die%20Deutsche%20Demokratische%20Republik%20aus."
    );
    insertDiv(
        "DDR", 
        "Deutsche Arbeiter hört die Signale, der Arbeiterstaat steht!", 
        "7. Oktober 1949", 
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Coat_of_arms_of_East_Germany_%281955%E2%80%931990%29.svg", 
        "",
        2,
        [["BRD", "Diese Kopie ist aber nicht so gelungen."]],
        "https://www.bundestag.de/parlament/geschichte/75jahre/erster_bundestag/wahl1949-933578"
    );
    insertDiv(
        "Stasi", 
        "Ab heute gibt es das Ministerium für Staatssicherheit, ihr könnt uns auch Stasi nennen. Wir sorgen jetzt für die Sicherheit. Spitzelbewerbungen bitte per Post.", 
        "8. Februar 1950", 
        "https://static.dw.com/image/15834007_604.jpg", 
        "",
        3,
        [["Ossi_Heinrich", "Jetzt werde ich auch noch vom eigenen Land überwacht?"], ["BRD", "Sieht nicht so demokratisch aus.🤔"], ["USA", "Cringe"], ["UdSSR", "Endlich muss der KGB nicht mehr alles machen."]],
        "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/weg-nach-osten/aufbau-des-mfs.html"
    );
    insertDiv(
        "DDR", 
        "Begrüßt den neuen Generalsekretär Walter Ulbricht!", 
        "25. Juli 1950", 
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Coat_of_arms_of_East_Germany_%281955%E2%80%931990%29.svg", 
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bundesarchiv_Bild_183-08618-0005%2C_Berlin%2C_2._Volkskammersitzung%2C_Bildung_DDR-Regierung.jpg",
        4,
        [["Ossi_Heinrich", "Also seinen Weg zur Macht finde ich jetzt nicht so demokratisch."], ["Stasi", "@Ossi_Heinrich Notiert 📝"]],
        "https://www.willy-brandt-biografie.de/wegbegleiter/t-z/ulbricht-walter/"
    );
    insertDiv(
        "Ossi_Heinrich", 
        "Boah, bei diesen Löhnen gehe ich lieber Protestieren als Arbeiten.", 
        "15. Juni 1953", 
        "https://cdn-icons-png.freepik.com/512/3177/3177440.png", 
        "",
        5,
        [["Stasi", "Die Konsequenzen davon möchtest du, glaube ich, nicht erleben."], ["UdSSR", "Bei den ganzen Demos müssen wir wohl nochmal einschreiten."]],
        "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/weg-nach-osten/17-juni-1953-volksaufstand.html"
    );
    insertDiv(
        "Ossi_Heinrich", 
        "Warum fahren hier plötzlich russische Panzer in die Demos?",
        "17. Juni 1953", 
        "https://cdn-icons-png.freepik.com/512/3177/3177440.png", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Bundesarchiv_Bild_175-14676%2C_Leipzig%2C_Reichsgericht%2C_russischer_Panzer.jpg/640px-Bundesarchiv_Bild_175-14676%2C_Leipzig%2C_Reichsgericht%2C_russischer_Panzer.jpg",
        6,
        [["Stasi", "Ich hab dich doch gewarnt."], ["DDR", "Die Ordnung muss gesichert werden, danke @UdSSR."], ["BRD", "Was ein Scheiß, da machen wir einen Gedenktag draus."]],
        "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/weg-nach-osten/17-juni-1953-volksaufstand.html"
    );
    insertDiv(
        "DDR", 
        "Diese Demos waren alle nur faschistische Saboteure. Aber trotzdem geben wir den Arbeitern mal ein paar Lohnerhöhungen. Die Stasi sollten wir aber auch mal ausbauen.", 
        "10. November 1953", 
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Coat_of_arms_of_East_Germany_%281955%E2%80%931990%29.svg", 
        "",
        7,
        [["Stasi", "Cooler Plan."], ["Ossi_Heinrich", "Also ich wusste noch nicht das ich faschistischer Saboteur bin, die Lohnerhöhung würde ich aber nehmen."]],
        "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/weg-nach-osten/17-juni-1953-volksaufstand.html"
    );
    insertDiv(
        "USA", 
        "Westdeutschland ist nun Teil der NATO! #StrengthInUnity", 
        "6. Mai 1955", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/US_51_Star_possible_Flag.svg/232px-US_51_Star_possible_Flag.svg.png", 
        "",
        8,
        [["UdSSR", "Typisch Kriegstreiber, da müssen wir uns wohl auch ein Bündnis einfallen lassen."]],
        "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/206006/1955-die-bundesrepublik-wird-nato-mitglied"
    );
    insertDiv(
        "UdSSR", 
        "Es ist Zeit für ein sozialistisches Bündnis. Es ist Zeit für den Warschauer Pakt!", 
        "14. Mai 1955", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/2048px-Hammer_and_sickle.svg.png", 
        "",
        9,
        [["USA", "Also ein Bündnis mit dir und deinen Vasallen, muss sicher schön sein."]],
        "https://www.bpb.de/kurz-knapp/lexika/das-europalexikon/177358/warschauer-pakt/"
    );
    insertDiv(
        "BRD", 
        "Die DDR erkennen wir nicht an, ihre Verbündete genauso. #HallsteinDoktrin", 
        "23. September 1955", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/300px-Flag_of_Germany.svg.png", 
        "",
        10,
        [["DDR", "Das beruht auf Gegenseitigkeit."], ["Wessi_Heiko", "Also existiert mein Ossi Bruder nicht mehr?"]],
        "https://www.bpb.de/kurz-knapp/lexika/politiklexikon/17594/hallstein-doktrin/"
    );
    insertDiv(
        "DDR", 
        "Frohe Nachrichten, heute haben wir den antifaschistischen Schutzwall errichtet. Hier stoppt das Kriegstreiben.🧱", 
        "13. August 1961", 
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Coat_of_arms_of_East_Germany_%281955%E2%80%931990%29.svg", 
        "https://www.jugendopposition.de/cache/images/4/152304-st-galerie.jpg?CB25B",
        11,
        [["BRD", "Hat das vielleicht nicht auch was mit den Flüchtlingen zu tun?🤔"], ["USA", "Sieht eher aus wie ein Schutzwall nach innen, vielleicht wollt ihr es doch einfach Mauer nennen?"], ["Ossi_Heinrich", "Da hab ich mir doch gerade einen Job in Westberlin gesucht."]],
        "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/mauerbau/13-august-1961-mauerbau.html"
    );
    insertDiv(
        "BRD", 
        "Jetzt haben wir mit Willy Brandt einen echten Politikwechsel, so kann es gehen in der Demokratie! Ab jetzt heißt es zur DDR: Wandel durch Annäherung. #69er", 
        "21. Oktober 1969", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/300px-Flag_of_Germany.svg.png", 
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Bundesarchiv_B_145_Bild-F057884-0009%2C_Willy_Brandt.jpg",
        12,
        [["USA", "Da wird die strategy of peace umgesetzt."], ["UdSSR", "@DDR jetzt nicht zu freundlich!"]],
        "https://www.fes.de/wissen/wandel-durch-annaeherung"
    );
    insertDiv(
        "BRD", 
        "Es ist Zeit für ein Treffen mit der DDR, Willy Brandt geht auf die Reise! Das war es mit Hallstein Doktrin.", 
        "19. März 1970", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/300px-Flag_of_Germany.svg.png", 
        "",
        13,
        [["DDR", "Gute Reise!"], ["USA", "Passt auf euch auf."]],
        "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-modernisierung/neue-ostpolitik/deutsch-deutsche-gespraeche.html"
    );
    insertDiv(
        "DDR", 
        "Erich Honecker ist neuer Generalsekretär. Walter Ulbricht musste wegen seines Alters leider zurücktreten.", 
        "3. Mai 1971", 
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Coat_of_arms_of_East_Germany_%281955%E2%80%931990%29.svg", 
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Bundesarchiv_Bild_183-R1220-401%2C_Erich_Honecker.jpg",
        14,
        [["UdSSR", "Der passt uns auch viel besser."], ["USA", "Kurios, dass das passiert, nachdem Honecker mit Soldaten den Ulbricht besuchen geht."]],
        "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-modernisierung/reformversuche-im-osten/machtwechsel.html"
    );
    insertDiv(
        "DDR", 
        "Normale Beziehungen zwischen Ost und West! Mit dem Grundlagenvertrag geben wir uns beide Anerkennung. Jetzt muss der Rest der Welt das auch noch.🌎", 
        "31. Juli 1973", 
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Coat_of_arms_of_East_Germany_%281955%E2%80%931990%29.svg", 
        "",
        15,
        [["BRD", "Endlich kann ich klar sagen, dass es euch gibt. Ein Schritt näher an der Versöhnung."]],
        "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-modernisierung/neue-ostpolitik/grundlagenvertrag.html"
    );
    insertDiv(
        "UNO", 
        "Willkommen DDR und BRD, die neusten Staaten der Vereinten Nationen.", 
        "18. September 1973", 
        "https://dgvn.de/fileadmin/user_upload/BILDER/bilder_allg/Logos/UN-Logo2.gif", 
        "",
        16,
        [["USA", "Oh Gott, jetzt muss ich noch mehr Kommunisten anerkennen."]],
        "https://www.bundesregierung.de/breg-de/aktuelles/50-jahre-vn-mitgliedschaft-2222978#:~:text=Am%2018.,vor%20dem%20UN-Gebäude%20gehisst"
    );
    insertDiv(
        "BRD", 
        "Wir Demokraten helfen ja gerne, das zählt auch im Osten. Mit unserem Milliardenkredit geht die DDR erstmal nicht Bankrott.💸💸💸", 
        "1. Juli 1983", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/300px-Flag_of_Germany.svg.png", 
        "",
        17,
        [["DDR", "Toll, aber wie sollen wir das zurückzahlen?"]],
        "https://www.bundesarchiv.de/themen-entdecken/online-entdecken/themenbeitraege/von-strauss-und-schalck-golodkowski-eingefaedelt/"
    );
    insertDiv(
        "DDR", 
        "Das geht so wahrscheinlich nicht mehr lange weiter, massenhafte Flucht, Wirtschaftskrise und Proteste. Dann machen wir halt die Grenze auf.", 
        "9. November 1989", 
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Coat_of_arms_of_East_Germany_%281955%E2%80%931990%29.svg", 
        "https://www.jugendopposition.de/cache/images/9/153539-st-fancyzoom.jpg?B2C8F",
        18,
        [["Stasi", "Bitte was?"], ["Ossi_Heinrich", "Endlich kann ich meine Westfamilie wieder sehen."], ["BRD", "Heute Mauerfall, morgen Demokratie!🎉"]],
        "https://www.lpb-bw.de/gruende-mauerfall"
    );
});

