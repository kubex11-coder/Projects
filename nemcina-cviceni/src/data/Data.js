const podstatnáJména = [
    { CZ: "Matka", DE: "die Mutter", Barva: "žlutá" },
    { CZ: "Škola", DE: "die Schule", Barva: "žlutá" },
    { CZ: "Slabika", DE: "die Silbe", Barva: "žlutá" },
    { CZ: "Otec", DE: "der Vater", Barva: "zelená" },
    { CZ: "Rodina", DE: "die Familie", Barva: "žlutá" },
    { CZ: "Sestra", DE: "die Schwester", Barva: "žlutá" },
    { CZ: "Paní", DE: "die Frau", Barva: "žlutá" },
    { CZ: "Dívka", DE: "das Mädchen", Barva: "modrá" },
    { CZ: "Dům", DE: "das Haus", Barva: "modrá" },
    { CZ: "Domov", DE: "das Heim", Barva: "modrá" },
    { CZ: "Jídlo", DE: "das Essen", Barva: "modrá" },
    { CZ: "Voda", DE: "das Wasser", Barva: "modrá" },
    { CZ: "Člověk", DE: "der Mensch", Barva: "zelená" },
    { CZ: "Chlapec", DE: "der Junge", Barva: "zelená" },
    { CZ: "Bratr", DE: "der Bruder", Barva: "zelená" },
    { CZ: "Jméno", DE: "der Name", Barva: "zelená" },
    { CZ: "Křestní jméno", DE: "der Forname", Barva: "zelená" },
    { CZ: "Jméno města", DE: "der Stadtname", Barva: "zelená" },
    { CZ: "Kočka", DE: "die Katze", Barva: "žlutá" },
    { CZ: "Město", DE: "die Stadt", Barva: "žlutá" },
    { CZ: "Ulice", DE: "die Strasse", Barva: "žlutá" },
    { CZ: "Škola", DE: "die Schule", Barva: "žlutá" },
    { CZ: "Jazyk", DE: "die Sprache", Barva: "žlutá" },
    { CZ: "Otázka", DE: "die Frage", Barva: "žlutá" },
    { CZ: "Odpověď", DE: "die Antwort", Barva: "žlutá" },
    { CZ: "Komunikace", DE: "die Kommunikation", Barva: "žlutá" },
    { CZ: "Představení", DE: "die Vorstellung", Barva: "žlutá" },
    { CZ: "Hudba", DE: "die Musik", Barva: "žlutá" },
    { CZ: "Osobní údaj", DE: "die Personalangabe", Barva: "žlutá" },
    { CZ: "Samoobslužná restaurace", DE: "die Cafeteria", Barva: "žlutá" },
    { CZ: "Univerzita", DE: "die Universität", Barva: "žlutá" },
    { CZ: "Původ", DE: "die Herkunft", Barva: "žlutá" },
    { CZ: "Zkratka", DE: "die Abkürzung", Barva: "žlutá" },
    { CZ: "Noviny", DE: "die Zeitung", Barva: "žlutá" },
    { CZ: "Minuta", DE: "die Minute", Barva: "žlutá" },
    { CZ: "Pozdrav", DE: "die Begrüssung", Barva: "žlutá" },
    { CZ: "Housle", DE: "die Violin", Barva: "žlutá" },
    { CZ: "Koláž", DE: "die Collage", Barva: "žlutá" },
    { CZ: "Technika", DE: "die Technik", Barva: "žlutá" },
    { CZ: "Zeměpis", DE: "die Geografie", Barva: "žlutá" },
    { CZ: "Specializace", DE: "die Specialität", Barva: "žlutá" },
    { CZ: "Atmosféra", DE: "die Atmosphäre", Barva: "žlutá" },
    { CZ: "Jazyková škola", DE: "die Sprachschule", Barva: "žlutá" },
    { CZ: "Účet", DE: "die Rechnung", Barva: "žlutá" },
    { CZ: "Mince", DE: "die Münze", Barva: "žlutá" },
    { CZ: "Policie", DE: "die Polizei", Barva: "žlutá" },
    { CZ: "Hasiči", DE: "die Feuhrwehr", Barva: "žlutá" },
    { CZ: "Šálek", DE: "die Tasse, Schale", Barva: "žlutá" },
    { CZ: "Teplota", DE: "die Temperatur", Barva: "žlutá" },
    { CZ: "Předvolba", DE: "die Vorwahl", Barva: "žlutá" },
    { CZ: "Popření", DE: "die Verneinung", Barva: "žlutá" },
    { CZ: "Tušení", DE: "die Ahnung", Barva: "žlutá" },
    { CZ: "Křída", DE: "die Kreide", Barva: "žlutá" },
    { CZ: "Tabule", DE: "die Tafel", Barva: "žlutá" },
    { CZ: "Taška", DE: "die Tasche", Barva: "žlutá" },
    { CZ: "Lampa", DE: "die Lampe", Barva: "žlutá" },
    { CZ: "Dveře", DE: "die Tür", Barva: "žlutá" },
    { CZ: "Seznam", DE: "die Liste", Barva: "žlutá" },
    { CZ: "Strana", DE: "die Seite", Barva: "žlutá" },
    { CZ: "Dějepis", DE: "die Geschichte", Barva: "žlutá" },
    { CZ: "Barva", DE: "die Farbe", Barva: "žlutá" },
    { CZ: "Tvar", DE: "die Form", Barva: "žlutá" },
    { CZ: "Sekretářka", DE: "die Sekretarin", Barva: "žlutá" },
    { CZ: "Práce", DE: "die Arbeit", Barva: "žlutá" },
    { CZ: "Biologie", DE: "die Biologie", Barva: "žlutá" },
    { CZ: "Chemie", DE: "die Chemie", Barva: "žlutá" },
    { CZ: "Kytara", DE: "die Gitarre", Barva: "žlutá" },
    { CZ: "Pauza", DE: "die Pause", Barva: "žlutá" },
    { CZ: "Pracovní návod", DE: "die Arbeitsanweisung", Barva: "žlutá" },
    { CZ: "Telefonní číslo", DE: "die Telefonnumer", Barva: "žlutá" },
    { CZ: "Příjmení", DE: "der Familienname", Barva: "zelená" },
    { CZ: "Pes", DE: "der Hund", Barva: "zelená" },
    { CZ: "Jablko", DE: "der Apfel", Barva: "zelená" },
    { CZ: "Stůl", DE: "der Tisch", Barva: "zelená" },
    { CZ: "Kilometr", DE: "der Kilometer", Barva: "zelená" },
    { CZ: "Propiska", DE: "der Kugelschreiber", Barva: "zelená" },
    { CZ: "Tužka", DE: "der Bleistift", Barva: "zelená" },
    { CZ: "Káva", DE: "der Kaffee, Espresso", Barva: "zelená" },
    { CZ: "Kurz", DE: "der Kurs", Barva: "zelená" },
    { CZ: "Zaměstnání", DE: "der Job", Barva: "zelená" },
    { CZ: "Počítač", DE: "der Computer", Barva: "zelená" },
    { CZ: "Euro", DE: "der Euro", Barva: "zelená" },
    { CZ: "Letadlo", DE: "der Airbus", Barva: "zelená" },
    { CZ: "Léto", DE: "der Sommer", Barva: "zelená" },
    { CZ: "Turista", DE: "der Tourist", Barva: "zelená" },
    { CZ: "Turismus", DE: "der Tourismus", Barva: "zelená" },
    { CZ: "Mluvčí", DE: "der Spracher", Barva: "zelená" },
    { CZ: "Přízvuk", DE: "der Wortakzent", Barva: "zelená" },
    { CZ: "Tón", DE: "der Ton", Barva: "zelená" },
    { CZ: "Favorit", DE: "der Favorit", Barva: "zelená" },
    { CZ: "Přeprava", DE: "der Transport", Barva: "zelená" },
    { CZ: "Text", DE: "der Text", Barva: "zelená" },
    { CZ: "Tržiště", DE: "der Markplatz", Barva: "zelená" },
    { CZ: "Supermarket", DE: "der Supermarket", Barva: "zelená" },
    { CZ: "Učitel", DE: "der Lehrer", Barva: "zelená" },
    { CZ: "Partner", DE: "der Partner", Barva: "zelená" },
    { CZ: "Kamarád", DE: "der Freund", Barva: "zelená" },
    { CZ: "Student", DE: "der Student", Barva: "zelená" },
    { CZ: "Hudeník", DE: "der Musiker", Barva: "zelená" },
    { CZ: "Pilot", DE: "der Pilot", Barva: "zelená" },
    { CZ: "Obyvatel", DE: "der Einwohner", Barva: "zelená" },
    { CZ: "Lékař", DE: "der Artzt", Barva: "zelená" },
    { CZ: "Chyba", DE: "der Fehler", Barva: "zelená" },
    { CZ: "Cena", DE: "der Preis", Barva: "zelená" },
    { CZ: "Bankovka", DE: "der Schein", Barva: "zelená" },
    { CZ: "Moment", DE: "der Moment", Barva: "zelená" },
    { CZ: "Guma", DE: "der Radiergummi", Barva: "zelená" },
    { CZ: "Kuličkové pero", DE: "der Kuli", Barva: "zelená" },
    { CZ: "Předmět", DE: "der Gegenstandt", Barva: "zelená" },
    { CZ: "Houba", DE: "der Schwamm", Barva: "zelená" },
    { CZ: "Židle", DE: "der Stuhl", Barva: "zelená" },
    { CZ: "Plnící pero", DE: "der Füller", Barva: "zelená" },
    { CZ: "Televizor", DE: "der Fernseher", Barva: "zelená" },
    { CZ: "Videopřehrávač", DE: "der Videorekorder", Barva: "zelená" },
    { CZ: "Učebna", DE: "der Kursraum", Barva: "zelená" },
    { CZ: "Film", DE: "der Film", Barva: "zelená" },
    { CZ: "Hlava", DE: "der Kopf", Barva: "zelená" },
    { CZ: "Lev", DE: "der Löwe", Barva: "zelená" },
    { CZ: "Muž", DE: "der Mann", Barva: "zelená" },
    { CZ: "Strom", DE: "der Baum", Barva: "zelená" },
    { CZ: "Vedoucí kurzu", DE: "der Kursleiter", Barva: "zelená" },
    { CZ: "Účastník kurzu", DE: "der Kursteilnehmer", Barva: "zelená" },
    { CZ: "Obrázek", DE: "das Bild", Barva: "modrá" },
    { CZ: "Papír", DE: "das Papier", Barva: "modrá" },
    { CZ: "Kniha", DE: "das Buch", Barva: "modrá" },
    { CZ: "Slovo", DE: "das Wort", Barva: "modrá" },
    { CZ: "Abeceda", DE: "das Alphabet", Barva: "modrá" },
    { CZ: "Kancelář", DE: "das Büro", Barva: "modrá" },
    { CZ: "Koníček", DE: "das Hobby", Barva: "modrá" },
    { CZ: "Rok", DE: "das Jahr", Barva: "modrá" },
    { CZ: "Semestr", DE: "das Semester", Barva: "modrá" },
    { CZ: "Televize", DE: "das TV", Barva: "modrá" },
    { CZ: "Telefon", DE: "das Felefon", Barva: "modrá" },
    { CZ: "Kavárna", DE: "das Café", Barva: "modrá" },
    { CZ: "Restaurace", DE: "das Restaurant", Barva: "modrá" },
    { CZ: "Koncert", DE: "das Konzert", Barva: "modrá" },
    { CZ: "Orchestr", DE: "das Orchester", Barva: "modrá" },
    { CZ: "Čínština", DE: "das Chinesisch", Barva: "modrá" },
    { CZ: "Angličtina", DE: "das Englisch", Barva: "modrá" },
    { CZ: "Polština", DE: "das Polnisch", Barva: "modrá" },
    { CZ: "Ruština", DE: "das Rusisch", Barva: "modrá" },
    { CZ: "Španělština", DE: "das Spanisch", Barva: "modrá" },
    { CZ: "Internet", DE: "das Internet", Barva: "modrá" },
    { CZ: "Telefonní seznam", DE: "das Telefonbuch", Barva: "modrá" },
    { CZ: "Minerálka", DE: "das Mineralwasser", Barva: "modrá" },
    { CZ: "Karaoke", DE: "das Karaoke", Barva: "modrá" },
    { CZ: "Sešit", DE: "das Heft", Barva: "modrá" },
    { CZ: "Mobil", DE: "das Handy", Barva: "modrá" },
    { CZ: "Zmrzlina", DE: "das Eis", Barva: "modrá" },
    { CZ: "Okno", DE: "das Fernster", Barva: "modrá" },
    { CZ: "Kolo", DE: "das Fahrrad", Barva: "modrá" },
    { CZ: "Divadlo", DE: "das Theater", Barva: "modrá" },
    { CZ: "Rádio", DE: "das Radio", Barva: "modrá" },
    { CZ: "Dítě", DE: "das Kind", Barva: "modrá" },
    { CZ: "Pár", DE: "das Paar", Barva: "modrá" },
    { CZ: "Země", DE: "das Land", Barva: "modrá" },
    { CZ: "Slovník", DE: "das Wörterbuch", Barva: "modrá" },
]

export default podstatnáJména
