// Polish B1 Grammar Question Bank — 100 questions
const GRAMMAR_BANK = [

  // ── Category 1: Instrumental after być (professions / nationalities) ──────
  { id: 'GBK001', stem: 'On jest _____ (aktor).', opts: ['aktor','aktora','aktorem','aktorowi'], ans: 2, hint: 'Instrumental after być (profession)' },
  { id: 'GBK002', stem: 'Moja siostra jest _____ (pielęgniarka).', opts: ['pielęgniarka','pielęgniarki','pielęgniarce','pielęgniarką'], ans: 3, hint: 'Instrumental after być (profession)' },
  { id: 'GBK003', stem: 'Piotr jest _____ (inżynier).', opts: ['inżynier','inżyniera','inżynierem','inżynierowi'], ans: 2, hint: 'Instrumental after być (profession)' },
  { id: 'GBK004', stem: 'Anna chce być _____ (architektka).', opts: ['architektką','architektki','architektce','architektkę'], ans: 0, hint: 'Instrumental after być (profession)' },
  { id: 'GBK005', stem: 'Mój brat jest _____ (Polak).', opts: ['Polak','Polaka','Polakiem','Polakowi'], ans: 2, hint: 'Instrumental after być (nationality)' },
  { id: 'GBK006', stem: 'Marta jest _____ (studentka).', opts: ['studentka','studentki','studentce','studentką'], ans: 3, hint: 'Instrumental after być (role)' },
  { id: 'GBK007', stem: 'Tomek jest _____ (kierowca).', opts: ['kierowca','kierowcy','kierowcę','kierowcą'], ans: 3, hint: 'Instrumental after być (profession)' },
  { id: 'GBK008', stem: 'Pan Nowak jest _____ (dyrektor).', opts: ['dyrektor','dyrektora','dyrektorem','dyrektorowi'], ans: 2, hint: 'Instrumental after być (profession)' },
  { id: 'GBK009', stem: 'Mój ojciec jest _____ (prawnik).', opts: ['prawnik','prawnika','prawnikiem','prawnikowi'], ans: 2, hint: 'Instrumental after być (profession)' },
  { id: 'GBK010', stem: 'Ona jest _____ (Francuzka).', opts: ['Francuzka','Francuzki','Francuzce','Francuzką'], ans: 3, hint: 'Instrumental after być (nationality)' },

  // ── Category 2: Instrumental with preposition z ───────────────────────────
  { id: 'GBK011', stem: 'Idę na spacer z _____ (pies).', opts: ['pies','psa','psem','psie'], ans: 2, hint: 'Instrumental with preposition z' },
  { id: 'GBK012', stem: 'Rozmawiam z _____ (sąsiad).', opts: ['sąsiad','sąsiada','sąsiadem','sąsiadowi'], ans: 2, hint: 'Instrumental with preposition z' },
  { id: 'GBK013', stem: 'Mieszkam z _____ (rodzice).', opts: ['rodzice','rodziców','rodzicom','rodzicami'], ans: 3, hint: 'Instrumental with preposition z (plural)' },
  { id: 'GBK014', stem: 'Wracam do domu z _____ (koleżanka).', opts: ['koleżanka','koleżanki','koleżankę','koleżanką'], ans: 3, hint: 'Instrumental with preposition z' },
  { id: 'GBK015', stem: 'Herbata z _____ (cukier) jest za słodka.', opts: ['cukier','cukru','cukrem','cukrowi'], ans: 2, hint: 'Instrumental with preposition z' },
  { id: 'GBK016', stem: 'Idę na zakupy z _____ (mama).', opts: ['mama','mamy','mamie','mamą'], ans: 3, hint: 'Instrumental with preposition z' },
  { id: 'GBK017', stem: 'Rozmawiam z _____ (nauczyciel).', opts: ['nauczyciel','nauczyciela','nauczycielem','nauczycielowi'], ans: 2, hint: 'Instrumental with preposition z' },
  { id: 'GBK018', stem: 'Jadę na wakacje z _____ (przyjaciel).', opts: ['przyjaciel','przyjaciela','przyjacielem','przyjacielowi'], ans: 2, hint: 'Instrumental with preposition z' },
  { id: 'GBK019', stem: 'Zupa z _____ (pomidor) jest pyszna.', opts: ['pomidor','pomidora','pomidorem','pomidorowi'], ans: 2, hint: 'Instrumental with preposition z' },
  { id: 'GBK020', stem: 'Idę do kina z _____ (brat).', opts: ['brat','brata','bratem','bratu'], ans: 2, hint: 'Instrumental with preposition z' },

  // ── Category 3: Instrumental with interesować się / zajmować się ──────────
  { id: 'GBK021', stem: 'Interesuję się _____ (historia).', opts: ['historia','historii','historię','historią'], ans: 3, hint: 'Instrumental with interesować się' },
  { id: 'GBK022', stem: 'Mój brat zajmuje się _____ (sport).', opts: ['sport','sportu','sportem','sportowi'], ans: 2, hint: 'Instrumental with zajmować się' },
  { id: 'GBK023', stem: 'Ona interesuje się _____ (sztuka).', opts: ['sztuka','sztuki','sztuką','sztuce'], ans: 2, hint: 'Instrumental with interesować się' },
  { id: 'GBK024', stem: 'Zajmuję się _____ (gotowanie).', opts: ['gotowanie','gotowania','gotowaniu','gotowaniem'], ans: 3, hint: 'Instrumental with zajmować się' },
  { id: 'GBK025', stem: 'On interesuje się _____ (fotografia).', opts: ['fotografia','fotografii','fotografię','fotografią'], ans: 3, hint: 'Instrumental with interesować się' },
  { id: 'GBK026', stem: 'Marta zajmuje się _____ (dzieci).', opts: ['dzieci','dziecka','dzieciom','dziećmi'], ans: 3, hint: 'Instrumental with zajmować się (plural)' },
  { id: 'GBK027', stem: 'Interesuję się _____ (literatura).', opts: ['literatura','literaturę','literaturą','literaturze'], ans: 2, hint: 'Instrumental with interesować się' },
  { id: 'GBK028', stem: 'On zajmuje się _____ (biznes).', opts: ['biznes','biznesu','biznesem','biznesowi'], ans: 2, hint: 'Instrumental with zajmować się' },
  { id: 'GBK029', stem: 'Interesujemy się _____ (podróże).', opts: ['podróże','podróży','podróżom','podróżami'], ans: 3, hint: 'Instrumental with interesować się (plural)' },
  { id: 'GBK030', stem: 'Ona zajmuje się _____ (tłumaczenie).', opts: ['tłumaczenie','tłumaczenia','tłumaczeniu','tłumaczeniem'], ans: 3, hint: 'Instrumental with zajmować się' },

  // ── Category 4: Genitive after negation ───────────────────────────────────
  { id: 'GBK031', stem: 'Nie mam _____ (klucz).', opts: ['klucz','klucza','kluczem','kluczowi'], ans: 1, hint: 'Genitive after nie mam' },
  { id: 'GBK032', stem: 'Nie widzę _____ (kot) w ogrodzie.', opts: ['kot','kota','kotem','kotu'], ans: 1, hint: 'Genitive after nie widzę' },
  { id: 'GBK033', stem: 'Nie ma _____ (chleb) w kuchni.', opts: ['chleb','chleba','chlebem','chlebowi'], ans: 1, hint: 'Genitive after nie ma' },
  { id: 'GBK034', stem: 'Nie kupuję _____ (mleko).', opts: ['mleko','mleka','mleku','mlekiem'], ans: 1, hint: 'Genitive after negation' },
  { id: 'GBK035', stem: 'Nie znam _____ (ta kobieta).', opts: ['ta kobieta','tej kobiety','tej kobiecie','tę kobietę'], ans: 1, hint: 'Genitive after nie znam' },
  { id: 'GBK036', stem: 'Nie słyszę _____ (muzyka).', opts: ['muzyka','muzyki','muzyce','muzyką'], ans: 1, hint: 'Genitive after negation' },
  { id: 'GBK037', stem: 'Nie lubię _____ (zupa rybna).', opts: ['zupa rybna','zupy rybnej','zupę rybną','zupie rybnej'], ans: 1, hint: 'Genitive after nie lubię' },
  { id: 'GBK038', stem: 'Nie mam _____ (praca) w tym tygodniu.', opts: ['praca','pracę','pracy','pracą'], ans: 2, hint: 'Genitive after nie mam' },
  { id: 'GBK039', stem: 'Nie chcę _____ (kawa) teraz.', opts: ['kawa','kawę','kawy','kawą'], ans: 2, hint: 'Genitive after nie chcę' },
  { id: 'GBK040', stem: 'Nie mam _____ (problem) z tym zadaniem.', opts: ['problem','problemu','problemem','problemowi'], ans: 1, hint: 'Genitive after nie mam' },

  // ── Category 5: Genitive after prepositions ───────────────────────────────
  { id: 'GBK041', stem: 'Idę do _____ (biblioteka).', opts: ['biblioteka','biblioteki','bibliotece','bibliotekę'], ans: 1, hint: 'Genitive after preposition do' },
  { id: 'GBK042', stem: 'Mieszkam obok _____ (park).', opts: ['park','parku','parkiem','parkowi'], ans: 1, hint: 'Genitive after preposition obok' },
  { id: 'GBK043', stem: 'To prezent dla _____ (moja mama).', opts: ['moja mama','mojej mamie','mojej mamy','moją mamę'], ans: 2, hint: 'Genitive after preposition dla' },
  { id: 'GBK044', stem: 'Dostałem list od _____ (przyjaciel).', opts: ['przyjaciel','przyjaciela','przyjacielowi','przyjacielem'], ans: 1, hint: 'Genitive after preposition od' },
  { id: 'GBK045', stem: 'Siedzę blisko _____ (okno).', opts: ['okno','okna','oknie','oknem'], ans: 1, hint: 'Genitive after preposition blisko' },
  { id: 'GBK046', stem: 'Wyszedłem bez _____ (parasol).', opts: ['parasol','parasola','parasolem','parasolowi'], ans: 1, hint: 'Genitive after preposition bez' },
  { id: 'GBK047', stem: 'Mieszkam koło _____ (dworzec).', opts: ['dworzec','dworca','dworcem','dworcu'], ans: 1, hint: 'Genitive after preposition koło' },
  { id: 'GBK048', stem: 'Idę do _____ (szkoła).', opts: ['szkoła','szkoły','szkole','szkołę'], ans: 1, hint: 'Genitive after preposition do' },
  { id: 'GBK049', stem: 'Czekam tutaj od _____ (godzina) dziesiątej.', opts: ['godzina','godziny','godzinie','godzinę'], ans: 1, hint: 'Genitive after preposition od' },
  { id: 'GBK050', stem: 'To pismo jest dla _____ (on).', opts: ['on','go','niego','jego'], ans: 2, hint: 'Genitive pronoun after preposition dla' },

  // ── Category 6: Genitive plural ───────────────────────────────────────────
  { id: 'GBK051', stem: 'W klasie jest dużo _____ (dziewczyna).', opts: ['dziewczyny','dziewczyn','dziewczynami','dziewczynę'], ans: 1, hint: 'Genitive plural after dużo' },
  { id: 'GBK052', stem: 'Mam kilka _____ (książka).', opts: ['książki','książek','książkę','książkami'], ans: 1, hint: 'Genitive plural after kilka' },
  { id: 'GBK053', stem: 'W parku jest wiele _____ (drzewo).', opts: ['drzewa','drzewem','drzew','drzewom'], ans: 2, hint: 'Genitive plural after wiele' },
  { id: 'GBK054', stem: 'W sklepie nie ma _____ (jabłko).', opts: ['jabłka','jabłek','jabłkach','jabłkami'], ans: 1, hint: 'Genitive plural after nie ma' },
  { id: 'GBK055', stem: 'Kupiłam kilka _____ (gazeta).', opts: ['gazety','gazetę','gazet','gazetami'], ans: 2, hint: 'Genitive plural after kilka' },
  { id: 'GBK056', stem: 'Mam wiele _____ (znajomy).', opts: ['znajomego','znajomi','znajomych','znajomymi'], ans: 2, hint: 'Genitive plural after wiele' },
  { id: 'GBK057', stem: 'Znam dużo _____ (piosenka).', opts: ['piosenki','piosenek','piosenkami','piosenką'], ans: 1, hint: 'Genitive plural after dużo' },
  { id: 'GBK058', stem: 'W mieście jest kilka _____ (muzeum).', opts: ['muzeum','muzeów','muzeom','muzeami'], ans: 1, hint: 'Genitive plural after kilka' },
  { id: 'GBK059', stem: 'Nie ma tu dużo _____ (Polak).', opts: ['Polaka','Polaków','Polakami','Polakom'], ans: 1, hint: 'Genitive plural after dużo' },
  { id: 'GBK060', stem: 'Mam kilka _____ (pytanie) do ciebie.', opts: ['pytania','pytań','pytaniom','pytaniami'], ans: 1, hint: 'Genitive plural after kilka' },

  // ── Category 7: Dative ────────────────────────────────────────────────────
  { id: 'GBK061', stem: 'Daję kwiaty _____ (siostra).', opts: ['siostry','siostrze','siostrą','siostrę'], ans: 1, hint: 'Dative indirect object' },
  { id: 'GBK062', stem: 'Dziękuję _____ (pan).', opts: ['pan','pana','panu','panem'], ans: 2, hint: 'Dative after dziękować' },
  { id: 'GBK063', stem: 'Pomagam _____ (kolega).', opts: ['kolega','kolegi','kolegę','koledze'], ans: 3, hint: 'Dative after pomagać' },
  { id: 'GBK064', stem: 'Kupuję prezent _____ (tata).', opts: ['tata','taty','tatę','tacie'], ans: 3, hint: 'Dative indirect object' },
  { id: 'GBK065', stem: 'Ta sukienka podoba się _____ (on).', opts: ['go','jemu','nim','jego'], ans: 1, hint: 'Dative with podobać się' },
  { id: 'GBK066', stem: 'Mówię _____ (dzieci), żeby były cicho.', opts: ['dzieci','dzieciom','dziećmi','dzieciach'], ans: 1, hint: 'Dative indirect object (plural)' },
  { id: 'GBK067', stem: 'Pomagam _____ (babcia).', opts: ['babcia','babci','babcię','babcią'], ans: 1, hint: 'Dative after pomagać' },
  { id: 'GBK068', stem: 'Daję zupę _____ (pies).', opts: ['pies','psa','psu','psem'], ans: 2, hint: 'Dative indirect object' },
  { id: 'GBK069', stem: 'Dziękuję _____ (wy) za pomoc.', opts: ['wy','was','wam','wami'], ans: 2, hint: 'Dative pronoun after dziękować' },
  { id: 'GBK070', stem: 'Daję zeszyt _____ (nauczycielka).', opts: ['nauczycielka','nauczycielki','nauczycielce','nauczycielką'], ans: 2, hint: 'Dative indirect object' },

  // ── Category 8: Locative ──────────────────────────────────────────────────
  { id: 'GBK071', stem: 'Mieszkam w _____ (Gdańsk).', opts: ['Gdańsk','Gdańska','Gdańsku','Gdańskiem'], ans: 2, hint: 'Locative after w (city name)' },
  { id: 'GBK072', stem: 'Książka leży na _____ (stół).', opts: ['stół','stołu','stole','stołem'], ans: 2, hint: 'Locative after na' },
  { id: 'GBK073', stem: 'Rozmawiamy o _____ (film).', opts: ['film','filmie','filmem','filmy'], ans: 1, hint: 'Locative after o' },
  { id: 'GBK074', stem: 'Jestem w _____ (praca).', opts: ['praca','pracę','pracy','pracą'], ans: 2, hint: 'Locative after w' },
  { id: 'GBK075', stem: 'Spotykamy się przy _____ (kawiarnia).', opts: ['kawiarnia','kawiarni','kawiarnią','kawiarnię'], ans: 1, hint: 'Locative after przy' },
  { id: 'GBK076', stem: 'Siedzę na _____ (krzesło).', opts: ['krzesło','krzesła','krzesłem','krześle'], ans: 3, hint: 'Locative after na' },
  { id: 'GBK077', stem: 'Myślę o _____ (wakacje).', opts: ['wakacje','wakacjach','wakacjami','wakacji'], ans: 1, hint: 'Locative after o (plural)' },
  { id: 'GBK078', stem: 'Po _____ (obiad) idę na spacer.', opts: ['obiad','obiadu','obiedzie','obiadem'], ans: 2, hint: 'Locative after po' },
  { id: 'GBK079', stem: 'W _____ (szkoła) jest wiele dzieci.', opts: ['szkoła','szkoły','szkołę','szkole'], ans: 3, hint: 'Locative after w' },
  { id: 'GBK080', stem: 'Mieszkam w _____ (duże miasto).', opts: ['dużym mieście','duże miasto','dużego miasta','dużemu miastu'], ans: 0, hint: 'Locative after w (adjective + noun)' },

  // ── Category 9: Verb aspects ──────────────────────────────────────────────
  { id: 'GBK081', stem: 'Zazwyczaj _____ kawę rano.', opts: ['wypiłem','piję','wypiję','piłem'], ans: 1, hint: 'Imperfective present for habitual actions' },
  { id: 'GBK082', stem: 'Wczoraj wieczorem Kasia _____ cały film.', opts: ['oglądała','obejrzała','ogląda','obejrzy'], ans: 1, hint: 'Perfective past for completed action' },
  { id: 'GBK083', stem: 'Proszę, _____ to zdanie po polsku.', opts: ['tłumaczysz','tłumaczyłem','przetłumacz','tłumacz'], ans: 2, hint: 'Perfective imperative for one-time action' },
  { id: 'GBK084', stem: 'Kiedy byłem studentem, _____ dużo.', opts: ['nauczyłem się','uczyłem się','uczę się','nauczę się'], ans: 1, hint: 'Imperfective past for habitual action' },
  { id: 'GBK085', stem: 'Proszę, _____ okno, bo jest zimno.', opts: ['zamknij','zamykaj','zamykasz','zamknąłem'], ans: 0, hint: 'Perfective imperative for one-time action' },
  { id: 'GBK086', stem: 'Każdego ranka _____ śniadanie.', opts: ['zjem','zjadłem','jem','jadłem'], ans: 2, hint: 'Imperfective present for habitual actions' },
  { id: 'GBK087', stem: 'Zaraz _____ Ci tę wiadomość.', opts: ['piszę','pisałem','napisałem','napiszę'], ans: 3, hint: 'Perfective future for one completed future action' },
  { id: 'GBK088', stem: 'Przez całe popołudnie Piotr _____ na egzamin.', opts: ['nauczył się','uczył się','uczy się','nauczy się'], ans: 1, hint: 'Imperfective past for ongoing action with duration' },
  { id: 'GBK089', stem: 'Czy możesz _____ mi z zakupami?', opts: ['pomagać','pomóc','pomagam','pomogłam'], ans: 1, hint: 'Perfective infinitive after modal for one-time help' },
  { id: 'GBK090', stem: 'Już _____ obiad, więc nie jestem głodna.', opts: ['jadłam','zjadłam','jem','zjem'], ans: 1, hint: 'Perfective past for completed action with current relevance' },

  // ── Category 10: Verbs of motion ──────────────────────────────────────────
  { id: 'GBK091', stem: 'Codziennie _____ do szkoły pieszo.', opts: ['idę','chodzę','jeżdżę','jechałem'], ans: 1, hint: 'Chodzić for habitual motion on foot' },
  { id: 'GBK092', stem: 'Teraz _____ do centrum.', opts: ['chodzę','idę','jeżdżę','chodziłem'], ans: 1, hint: 'Iść for one-directional motion on foot right now' },
  { id: 'GBK093', stem: 'Oni często _____ na weekend do babci samochodem.', opts: ['jadą','jeżdżą','jechali','lecą'], ans: 1, hint: 'Jeździć for habitual motion by vehicle' },
  { id: 'GBK094', stem: 'Właśnie _____ do Krakowa pociągiem.', opts: ['jeżdżę','jadę','jechałem','jeżdżąc'], ans: 1, hint: 'Jechać for one-directional motion by vehicle right now' },
  { id: 'GBK095', stem: 'Mój ojciec co roku _____ na urlop do Włoch.', opts: ['leci','lata','leciał','poleciał'], ans: 1, hint: 'Latać for habitual motion by air' },
  { id: 'GBK096', stem: 'Teraz _____ do Londynu, lądujemy za trzy godziny.', opts: ['latamy','lecę','lecimy','polecieliśmy'], ans: 2, hint: 'Lecieć for one-directional motion by air right now' },
  { id: 'GBK097', stem: 'Każde lato _____ nad morze.', opts: ['jadę','jeżdżę','pojadę','jechałem'], ans: 1, hint: 'Jeździć for habitual motion by vehicle' },
  { id: 'GBK098', stem: 'Lubię _____ na długie spacery w weekendy.', opts: ['iść','chodzić','jeździć','jechać'], ans: 1, hint: 'Chodzić infinitive for habitual walking activity' },
  { id: 'GBK099', stem: 'Skąd _____? – Z biblioteki.', opts: ['chodzisz','idziesz','jedziesz','jeździsz'], ans: 1, hint: 'Iść for directional motion on foot at this moment' },
  { id: 'GBK100', stem: 'W tamtym roku _____ do Berlina trzy razy.', opts: ['jechałem','jeździłem','jadę','jeżdżę'], ans: 1, hint: 'Jeździć past for repeated trips by vehicle' },

];
