// Polish B1 Text Bank — 8 texts, 40 questions
const TEXT_BANK = [

  // ── READING TEXTS ──────────────────────────────────────────────────────────

  {
    id: 'TB001',
    title: 'Email: Tradycje wielkanocne',
    type: 'reading',
    text: `Hej Marto!

Piszę do Ciebie, bo chcę opowiedzieć o naszych tradycjach wielkanocnych. U nas w domu Wielkanoc to bardzo ważne święto. Już w Wielką Sobotę chodzimy do kościoła z koszyczkiem, w którym są jajka, chleb, kiełbasa i sól. Ksiądz święci te produkty — ta tradycja nazywa się święceniem pokarmów.

W Niedzielę Wielkanocną całą rodziną siadamy razem do śniadania. Na stole zawsze jest żurek, biała kiełbasa i oczywiście dużo kolorowych jajek. Mama każdego roku maluje jajka w różne wzory — takie ozdobne jajka nazywamy pisankami. Moja ulubiona jest ta w kwiaty, którą mama wykonuje od wielu lat tą samą metodą.

W Lany Poniedziałek, zwany też Śmigusem-Dyngusem, dawnym zwyczajem chłopcy oblewają wodą dziewczyny. Ja już dawno tego nie robię, ale mój młodszy brat wciąż uważa, że to znakomita zabawa!

W tym roku cała rodzina spotka się u babci na wsi. Bardzo się cieszę, bo od ponad roku nie widziałam kuzynów. Czy u Ciebie też są jakieś szczególne tradycje wielkanocne?

Serdeczne pozdrowienia,
Kasia`,
    qs: [
      {
        q: 'Co Kasia i jej rodzina przynoszą do kościoła w Wielką Sobotę?',
        opts: [
          'Kwiaty i świece',
          'Koszyczek z jajkami, chlebem, kiełbasą i solą',
          'Kartki wielkanocne i prezenty',
          'Tort ozdobiony lukrem'
        ],
        ans: 1
      },
      {
        q: 'Czym są pisanki?',
        opts: [
          'Rodzajem zupy wielkanocnej',
          'Tradycyjnymi pieśniami wielkanocnymi',
          'Ozdobnymi jajkami wielkanocnymi',
          'Małymi prezentami wielkanocnymi'
        ],
        ans: 2
      },
      {
        q: 'Jaka tradycja jest związana z Lanym Poniedziałkiem?',
        opts: [
          'Ludzie odwiedzają groby swoich bliskich',
          'Rodziny wspólnie idą do kościoła na specjalną mszę',
          'Chłopcy oblewają wodą dziewczyny',
          'Dzieci szukają ukrytych jajek wielkanocnych'
        ],
        ans: 2
      },
      {
        q: 'Gdzie rodzina Kasi spędzi Wielkanoc w tym roku?',
        opts: [
          'W domu rodziców Kasi w mieście',
          'U Marty',
          'W restauracji w mieście',
          'U babci na wsi'
        ],
        ans: 3
      },
      {
        q: 'Dlaczego Kasia szczególnie cieszy się z tegorocznej Wielkanocy?',
        opts: [
          'Dostanie wyjątkowy prezent',
          'Od ponad roku nie widziała kuzynów',
          'Babcia mieszka blisko kościoła',
          'To jej pierwsza Wielkanoc bez pracy'
        ],
        ans: 1
      }
    ]
  },

  {
    id: 'TB002',
    title: 'List: Podanie o pracę',
    type: 'reading',
    text: `Szanowny Panie Dyrektorze,

Z dużym zainteresowaniem przeczytałem ogłoszenie o pracy na stanowisko asystenta biurowego w Państwa firmie, zamieszczone na portalu pracuj.pl. Chciałbym złożyć swoją kandydaturę na to stanowisko.

Posiadam wykształcenie wyższe ekonomiczne — ukończyłem studia licencjackie na Uniwersytecie Ekonomicznym w Krakowie. Przez ostatnie dwa lata pracowałem jako pracownik administracyjny w firmie handlowej, gdzie zajmowałem się obsługą klientów, prowadzeniem dokumentacji oraz organizacją spotkań służbowych.

Bardzo dobrze posługuję się programami Microsoft Office, szczególnie Excelem i Wordem. Mówię płynnie po angielsku, a języka niemieckiego uczę się od roku na kursie wieczorowym. Jestem osobą dokładną, sumienną i łatwo nawiązuję kontakty z innymi ludźmi.

Praca w Państwa firmie jest dla mnie szczególnie interesująca, ponieważ specjalizują się Państwo w handlu międzynarodowym, a ja pragnę rozwijać swoje umiejętności właśnie w tym obszarze.

W załączeniu przesyłam swoje CV oraz list motywacyjny. Będę bardzo wdzięczny za możliwość odbycia rozmowy kwalifikacyjnej.

Z poważaniem,
Piotr Kowalski`,
    qs: [
      {
        q: 'Skąd Piotr dowiedział się o ofercie pracy?',
        opts: [
          'Od znajomego, który mu polecił firmę',
          'Z portalu pracuj.pl',
          'Na targach pracy na swojej uczelni',
          'Z ogłoszenia w lokalnej gazecie'
        ],
        ans: 1
      },
      {
        q: 'Jakie wykształcenie ma Piotr?',
        opts: [
          'Magisterium z prawa na Uniwersytecie Warszawskim',
          'Dyplom zawodowy z administracji biurowej',
          'Licencjat z ekonomii z Krakowa',
          'Studia podyplomowe z zarządzania'
        ],
        ans: 2
      },
      {
        q: 'Jak długo Piotr pracował na stanowisku administracyjnym?',
        opts: [
          'Sześć miesięcy',
          'Rok',
          'Dwa lata',
          'Trzy lata'
        ],
        ans: 2
      },
      {
        q: 'Jakim językiem obcym Piotr posługuje się płynnie?',
        opts: [
          'Niemieckim',
          'Francuskim',
          'Angielskim',
          'Hiszpańskim'
        ],
        ans: 2
      },
      {
        q: 'Dlaczego Piotr szczególnie interesuje się tą firmą?',
        opts: [
          'Ponieważ mieści się blisko jego domu',
          'Ponieważ specjalizuje się w handlu międzynarodowym',
          'Ponieważ oferuje najwyższe wynagrodzenie w branży',
          'Ponieważ zna już niektórych pracowników firmy'
        ],
        ans: 1
      }
    ]
  },

  {
    id: 'TB003',
    title: 'Ogłoszenie: Wynajem mieszkania',
    type: 'reading',
    text: `OGŁOSZENIE: Wynajem mieszkania — Wrocław, centrum

Oferuję do wynajęcia przestronne mieszkanie trzypokojowe w centrum Wrocławia, przy ulicy Świdnickiej. Mieszkanie znajduje się na trzecim piętrze budynku wyposażonego w windę. Całkowita powierzchnia wynosi 68 metrów kwadratowych.

W mieszkaniu są dwie sypialnie, salon z jadalnią, w pełni wyposażona kuchnia, łazienka z wanną oraz oddzielna toaleta. Mieszkanie jest umeblowane: w pokojach stoją wygodne sofy, stoły, krzesła, szafy i łóżka. W kuchni znajduje się zmywarka, lodówka, kuchenka gazowa oraz mikrofalówka.

Budynek ma podziemny parking, jednak miejsce parkingowe jest dostępne za dodatkową opłatą w wysokości 200 złotych miesięcznie. W pobliżu są sklep spożywczy czynny całą dobę, apteka i kilka restauracji. Do najbliższego centrum handlowego można dojść pieszo w dziesięć minut.

Czynsz wynosi 2500 złotych miesięcznie. Opłaty za media — prąd, gaz, woda — są rozliczane osobno według faktycznego zużycia. Wymagana jest kaucja w wysokości dwumiesięcznego czynszu płatna przy podpisaniu umowy. Preferuję wynajem długoterminowy — minimum dwanaście miesięcy.

Zainteresowane osoby proszę o kontakt:
Tel: 500-123-456 | Email: wynajem@wp.pl`,
    qs: [
      {
        q: 'Na którym piętrze znajduje się mieszkanie?',
        opts: [
          'Na pierwszym piętrze',
          'Na drugim piętrze',
          'Na trzecim piętrze',
          'Na czwartym piętrze'
        ],
        ans: 2
      },
      {
        q: 'Jakie sprzęty AGD znajdują się w kuchni?',
        opts: [
          'Zmywarka, lodówka, ekspres do kawy i czajnik',
          'Zmywarka, lodówka, kuchenka gazowa i mikrofalówka',
          'Pralka, lodówka, kuchenka gazowa i piekarnik',
          'Lodówka, kuchenka elektryczna, mikrofalówka i zmywarka'
        ],
        ans: 1
      },
      {
        q: 'Ile wynosi miesięczny czynsz za mieszkanie (bez parkingu i mediów)?',
        opts: [
          '2000 złotych',
          '2200 złotych',
          '2500 złotych',
          '2700 złotych'
        ],
        ans: 2
      },
      {
        q: 'W jakiej wysokości jest wymagana kaucja?',
        opts: [
          'Równowartość jednego miesiąca czynszu',
          'Równowartość dwóch miesięcy czynszu',
          'Stała opłata w wysokości 1000 złotych',
          'Kaucja nie jest wymagana'
        ],
        ans: 1
      },
      {
        q: 'Jaki jest minimalny okres najmu podany w ogłoszeniu?',
        opts: [
          'Trzy miesiące',
          'Sześć miesięcy',
          'Dziewięć miesięcy',
          'Dwanaście miesięcy'
        ],
        ans: 3
      }
    ]
  },

  {
    id: 'TB004',
    title: 'Artykuł: Jak przygotować się do wizyty u lekarza',
    type: 'reading',
    text: `Jak skutecznie przygotować się do wizyty u lekarza?

Wizyta u lekarza bywa stresującym doświadczeniem, zwłaszcza gdy nie wiemy, czego się spodziewać. Warto jednak pamiętać o kilku prostych zasadach, które sprawią, że konsultacja będzie bardziej efektywna zarówno dla pacjenta, jak i dla lekarza.

Przed wizytą należy dokładnie opisać swoje objawy: kiedy się pojawiły, jak długo trwają i czy cokolwiek je pogarsza lub łagodzi. Dobrze jest też wcześniej sprawdzić, jakie leki aktualnie przyjmujemy — łącznie z witaminami i suplementami diety. Lekarz z pewnością zapyta o tę informację.

Jeśli jedziemy do specjalisty, powinniśmy zabrać ze sobą wcześniejsze wyniki badań laboratoryjnych oraz karty informacyjne z poprzednich hospitalizacji. Te dokumenty pomogą lekarzowi lepiej zrozumieć naszą historię choroby i uniknąć powtarzania niepotrzebnych badań.

Nie należy wstydzić się zadawania pytań podczas wizyty. Jeśli lekarz przepisze receptę lub zleci wykonanie badań, a my nie rozumiemy powodu, zawsze możemy poprosić o wyjaśnienie. Dobry lekarz chętnie odpowie na wątpliwości pacjenta.

Po wizycie warto od razu zapisać najważniejsze zalecenia i informacje, aby ich nie zapomnieć. Niektórzy pacjenci proszą o krótkie pisemne podsumowanie wizyty — jest to jak najbardziej dopuszczalna praktyka.`,
    qs: [
      {
        q: 'Jakie informacje o objawach artykuł zaleca przygotować przed wizytą?',
        opts: [
          'Nazwiska wszystkich lekarzy, u których pacjent się wcześniej leczył',
          'Kiedy pojawiły się objawy, jak długo trwają i co je pogarsza lub łagodzi',
          'Pełną listę wszystkich chorób, na które pacjent kiedykolwiek chorował',
          'Historię chorób rodziny z ostatnich dwóch pokoleń'
        ],
        ans: 1
      },
      {
        q: 'Jakie dokumenty należy zabrać na wizytę do specjalisty?',
        opts: [
          'Jedynie dowód osobisty i zaświadczenie o ubezpieczeniu zdrowotnym',
          'Poprzednie wyniki badań laboratoryjnych i karty informacyjne z hospitalizacji',
          'Pisemną listę leków przepisanych przez lekarza rodzinnego',
          'Skierowanie i dowód posiadania prywatnego ubezpieczenia zdrowotnego'
        ],
        ans: 1
      },
      {
        q: 'Co powinien zrobić pacjent, jeśli nie rozumie, dlaczego lekarz wypisał receptę?',
        opts: [
          'Sprawdzić informacje w Internecie po wizycie',
          'Zapytać farmaceutę o wyjaśnienie w aptece',
          'Poprosić lekarza o wyjaśnienie podczas wizyty',
          'Umówić się na kolejną wizytę w celu uzyskania wyjaśnienia'
        ],
        ans: 2
      },
      {
        q: 'Co artykuł zaleca zrobić zaraz po wizycie u lekarza?',
        opts: [
          'Zadzwonić do apteki i zamówić leki',
          'Zapisać najważniejsze zalecenia, żeby ich nie zapomnieć',
          'Skontaktować się z ubezpieczycielem w sprawie kosztów leczenia',
          'Zadzwonić do rodziny i poinformować o diagnozie'
        ],
        ans: 1
      },
      {
        q: 'Co artykuł mówi o zadawaniu pytań podczas wizyty?',
        opts: [
          'Pacjenci nie powinni zadawać pytań, żeby nie marnować czasu lekarza',
          'Pytania są mile widziane, ale należy ograniczyć je do dwóch lub trzech',
          'Pacjenci nie powinni wstydzić się zadawania pytań',
          'Pytania należy zadawać tylko na końcu wizyty'
        ],
        ans: 2
      }
    ]
  },

  // ── LISTENING / DIALOGUE TEXTS ─────────────────────────────────────────────

  {
    id: 'TB005',
    title: 'Dialogue: Na dworcu kolejowym',
    type: 'listening',
    text: `KASJER: Dzień dobry. Słucham?

ANNA: Dzień dobry. Chciałabym kupić bilet do Gdańska.

KASJER: Na kiedy pani jedzie?

ANNA: Na jutro rano. Która godzina jest najlepsza?

KASJER: Mamy ekspres o siódmej pięćdziesiąt pięć — dojazd do Gdańska trwa trzy godziny i dwadzieścia minut. Jest też InterCity o ósmej czterdzieści pięć, ten jedzie cztery godziny.

ANNA: Wolę ten szybszy. Ile kosztuje bilet?

KASJER: Bilet normalny to osiemdziesiąt pięć złotych. Jeśli ma pani kartę studencką, bilet ulgowy kosztuje czterdzieści trzy złote.

ANNA: Świetnie, mam kartę studencką. Poproszę jeden bilet ulgowy. Czy jest wagon restauracyjny?

KASJER: Tak, oczywiście. W tym pociągu jest wagon restauracyjny i bufet.

ANNA: Czy muszę zarezerwować miejsce?

KASJER: W ekspresie rezerwacja jest obowiązkowa. Polecam miejsce przy oknie — są jeszcze wolne.

ANNA: Poproszę miejsce przy oknie. Z którego peronu odjeżdża pociąg?

KASJER: Peron drugi, tor pierwszy. Pociąg odjeżdża z Warszawy Centralnej.

ANNA: Dziękuję bardzo!

KASJER: Proszę. Miłej podróży!`,
    qs: [
      {
        q: 'Dokąd Anna chce pojechać?',
        opts: [
          'Do Warszawy',
          'Do Krakowa',
          'Do Gdańska',
          'Do Wrocławia'
        ],
        ans: 2
      },
      {
        q: 'Który pociąg Anna wybiera i dlaczego?',
        opts: [
          'InterCity o 8:45, bo jest tańszy',
          'Ekspres o 7:55, bo jest szybszy',
          'Ekspres o 7:55, bo ma wagon restauracyjny',
          'InterCity o 8:45, bo ma więcej wolnych miejsc'
        ],
        ans: 1
      },
      {
        q: 'Ile Anna płaci za bilet?',
        opts: [
          '85 złotych',
          '65 złotych',
          '50 złotych',
          '43 złote'
        ],
        ans: 3
      },
      {
        q: 'Jakie zaplecze gastronomiczne ma pociąg?',
        opts: [
          'Tylko automat z przekąskami',
          'Wyłącznie bufet',
          'Wagon restauracyjny i bufet',
          'Wyłącznie wagon-kawiarnia'
        ],
        ans: 2
      },
      {
        q: 'Jakiego miejsca Anna prosi o rezerwację?',
        opts: [
          'Miejsca przy przejściu w wagonie pierwszej klasy',
          'Miejsca przy oknie',
          'Miejsca w pobliżu wagonu restauracyjnego',
          'Zarezerwowanego miejsca w strefie ciszy'
        ],
        ans: 1
      }
    ]
  },

  {
    id: 'TB006',
    title: 'Dialogue: Planowanie urodzin',
    type: 'listening',
    text: `MAREK: Hej, Zuzia! Pamiętasz, że w przyszłą sobotę Tomek ma urodziny?

ZUZIA: Oczywiście! Już myślałam o tym, co mu kupić.

MAREK: I co wymyśliłaś?

ZUZIA: Chciałam kupić mu książkę o fotografii, bo wiem, że teraz bardzo interesuje się aparatem. A ty?

MAREK: Ja myślałem o słuchawkach. Jego stare się niedawno zepsuły. Może wspólnie kupimy jeden lepszy prezent?

ZUZIA: Dobry pomysł! Razem możemy wydać więcej i kupić coś naprawdę wyjątkowego. Gdzie planujemy imprezę?

MAREK: Tomek wspominał o spotkaniu u siebie, ale ma małe mieszkanie. Może zarezerwujemy stolik w restauracji?

ZUZIA: Znam świetną pizzerię na Starym Mieście. Byłam tam ostatnio z rodzicami i jedzenie było przepyszne, a ceny rozsądne.

MAREK: Brzmi świetnie. Ile osób planujemy zaprosić?

ZUZIA: Myślę, że sześć, może siedem osób z naszej grupy. Tomek nie lubi dużych imprez.

MAREK: W porządku, zadzwonię dziś wieczór i zarezerwuję stolik. A ty możesz napisać do znajomych, żeby wiedzieli, gdzie i kiedy?

ZUZIA: Jasne! Napiszę do wszystkich przez grupę na Messengerze.

MAREK: Super. I nie zapomnij o torcie!

ZUZIA: Ja zamówię tort. Co lubi Tomek — czekoladowy?

MAREK: Tak, czekoladowy z kremem maślanym. To jego ulubiony!`,
    qs: [
      {
        q: 'Czyje urodziny planują Marek i Zuzia?',
        opts: [
          'Marka',
          'Zuzi',
          'Tomka',
          'Koleżanki o imieniu Kasia'
        ],
        ans: 2
      },
      {
        q: 'Co Zuzia początkowo planuje kupić jako prezent?',
        opts: [
          'Aparat fotograficzny',
          'Książkę o fotografii',
          'Słuchawki',
          'Album muzyczny'
        ],
        ans: 1
      },
      {
        q: 'Gdzie postanawiają świętować urodziny?',
        opts: [
          'W mieszkaniu Tomka',
          'U Marka w domu',
          'W pizzerii na Starym Mieście',
          'W klubie w centrum miasta'
        ],
        ans: 2
      },
      {
        q: 'Ile osób planują zaprosić?',
        opts: [
          'Około trzech lub czterech',
          'Około sześciu lub siedmiu',
          'Około dziesięciu do dwunastu',
          'Około piętnastu'
        ],
        ans: 1
      },
      {
        q: 'Kto zamówi tort urodzinowy i jaki smak wybierają?',
        opts: [
          'Marek zamówi tort truskawkowy',
          'Tomek sam kupi sobie tort',
          'Zuzia zamówi tort czekoladowy z kremem maślanym',
          'Marek zamówi sernik'
        ],
        ans: 2
      }
    ]
  },

  {
    id: 'TB007',
    title: 'Ogłoszenie radiowe: Prognoza pogody i wydarzenia kulturalne',
    type: 'listening',
    text: `PREZENTERKA: Dzień dobry, drodzy słuchacze Radia Kraków! Mamy dla was kilka ważnych informacji na najbliższy weekend.

Zacznijmy od prognozy pogody. W sobotę w całym regionie będzie pochmurno, z możliwością opadów deszczu szczególnie po południu. Temperatura nie przekroczy dziesięciu stopni Celsjusza, więc nie polecamy spacerów bez parasola. Niedzielę zapowiada się znacznie lepiej — spodziewamy się słońca i temperatur do piętnastu stopni. Będzie to idealny dzień na wyjście z domu.

Teraz kilka informacji kulturalnych. W sobotni wieczór, o godzinie dziewiętnastej, w Filharmonii Krakowskiej odbędzie się wyjątkowy koncert muzyki klasycznej. Wystąpi znana pianistka Maria Kowalska, która wykona utwory Chopina i Mozarta. Bilety kosztują od trzydziestu do stu złotych i można je kupić online lub w kasie filharmonii do piątku.

W niedzielę od dziesiątej do osiemnastej w Muzeum Narodowym będzie otwarta nowa wystawa fotografii pod tytułem "Polska w obiektywie". Bilet wstępu kosztuje dwadzieścia złotych. Wstęp jest jednak bezpłatny dla dzieci do lat dwunastu oraz dla emerytów.

Zapraszamy do korzystania z bogatej oferty kulturalnej naszego miasta. Do usłyszenia za godzinę!`,
    qs: [
      {
        q: 'Jaka jest prognoza pogody na sobotę?',
        opts: [
          'Słonecznie, temperatura do 15°C',
          'Pochmurno, możliwe opady deszczu po południu, temperatura do 10°C',
          'Wietrznie i zimno, ulewne deszcze przez cały dzień',
          'Częściowe zachmurzenie, bez opadów deszczu'
        ],
        ans: 1
      },
      {
        q: 'Kiedy odbędzie się koncert muzyki klasycznej?',
        opts: [
          'W niedzielę po południu o godzinie 15:00',
          'W sobotni wieczór o godzinie 19:00',
          'W piątek wieczorem o godzinie 20:00',
          'W sobotnie południe o godzinie 17:00'
        ],
        ans: 1
      },
      {
        q: 'Kto wystąpi na koncercie w Filharmonii Krakowskiej?',
        opts: [
          'Skrzypaczka o imieniu Anna Nowak',
          'Krakowska Orkiestra Symfoniczna',
          'Pianistka Maria Kowalska',
          'Chór wykonujący muzykę ludową'
        ],
        ans: 2
      },
      {
        q: 'Jakie są godziny otwarcia wystawy fotografii w niedzielę?',
        opts: [
          'Od 9:00 do 17:00',
          'Od 10:00 do 18:00',
          'Od 11:00 do 19:00',
          'Od 12:00 do 20:00'
        ],
        ans: 1
      },
      {
        q: 'Kto ma bezpłatny wstęp na wystawę fotografii?',
        opts: [
          'Wszyscy studenci z ważną legitymacją studencką',
          'Dzieci do lat dwunastu i emeryci',
          'Wyłącznie dzieci poniżej szóstego roku życia',
          'Nauczyciele i pracownicy uczelni'
        ],
        ans: 1
      }
    ]
  },

  {
    id: 'TB008',
    title: 'Dialogue: U lekarza',
    type: 'listening',
    text: `LEKARZ: Dzień dobry, proszę siadać. W czym mogę pomóc?

PACJENT: Dzień dobry, panie doktorze. Od trzech dni bardzo boli mnie gardło i mam gorączkę.

LEKARZ: Ile ma pan gorączkę?

PACJENT: Wczoraj wieczorem miałem trzydzieści osiem i pół stopnia.

LEKARZ: Rozumiem. Czy ma pan też kaszel albo katar?

PACJENT: Kaszel tak, ale niezbyt silny. Kataru nie mam.

LEKARZ: Proszę otworzyć usta... Widzę, że gardło jest bardzo czerwone i opuchnięte. Czy był pan ostatnio w kontakcie z kimś chorym?

PACJENT: Moja córka miała anginę dwa tygodnie temu.

LEKARZ: To może być właśnie angina. Zrobię panu szybki test, żeby to potwierdzić.

[po kilku minutach]

LEKARZ: Wynik jest pozytywny — to angina bakteryjna. Muszę przepisać panu antybiotyk. Proszę brać jedną tabletkę dwa razy dziennie przez dziesięć dni. Bardzo ważne jest, żeby skończyć całe opakowanie, nawet jeśli poczuje się pan lepiej po kilku dniach.

PACJENT: Czy powinienem zostać w domu?

LEKARZ: Tak, polecam pięć dni zwolnienia lekarskiego. Proszę dużo pić, odpoczywać i unikać zimnych napojów. Proszę wrócić za tydzień, żebym mógł sprawdzić, czy jest poprawa.

PACJENT: Dobrze, rozumiem. Bardzo dziękuję, panie doktorze.`,
    qs: [
      {
        q: 'Od jak dawna pacjent ma ból gardła?',
        opts: [
          'Od jednego dnia',
          'Od dwóch dni',
          'Od trzech dni',
          'Od pięciu dni'
        ],
        ans: 2
      },
      {
        q: 'Jaką gorączkę miał pacjent poprzedniego wieczoru?',
        opts: [
          '37,5°C',
          '38,0°C',
          '38,5°C',
          '39,0°C'
        ],
        ans: 2
      },
      {
        q: 'Jakie objawy ze strony układu oddechowego ma pacjent?',
        opts: [
          'Kaszel i katar',
          'Kaszel, ale bez kataru',
          'Katar, ale bez kaszlu',
          'Ani kaszlu, ani kataru'
        ],
        ans: 1
      },
      {
        q: 'Jaką diagnozę stawia lekarz?',
        opts: [
          'Wirusowe zapalenie gardła',
          'Zwykłe przeziębienie',
          'Bakteryjna angina',
          'Grypa'
        ],
        ans: 2
      },
      {
        q: 'Jak pacjent powinien przyjmować antybiotyk?',
        opts: [
          'Jedna tabletka trzy razy dziennie przez siedem dni',
          'Dwie tabletki raz dziennie przez pięć dni',
          'Jedna tabletka dwa razy dziennie przez dziesięć dni',
          'Jedna tabletka raz dziennie przez czternaście dni'
        ],
        ans: 2
      }
    ]
  },

  // ── NEW TEXTS TB009–TB012 ───────────────────────────────────────────────────

  {
    id: 'TB009',
    title: 'Dialogue: Na poczcie',
    type: 'listening',
    text: `PRACOWNIK: Dzień dobry. Słucham pana.

KLIENT: Dzień dobry. Chciałbym wysłać paczkę do Niemiec. To dokumenty firmowe — bardzo mi zależy na bezpiecznej dostawie.

PRACOWNIK: Rozumiem. Ile waży paczka?

KLIENT: Ważyłem w domu — około półtora kilograma.

PRACOWNIK: Dobrze. Mamy dwie opcje: przesyłka ekonomiczna — pięć do siedmiu dni roboczych, kosztuje dwadzieścia dwa złote. Albo priorytetowa — dwa, trzy dni robocze — za trzydzieści osiem złotych.

KLIENT: Co to znaczy "priorytetowa"?

PRACOWNIK: Priorytetowa jest szybsza i dostarczana w pierwszej kolejności. Obie opcje mają numer śledzenia w internecie.

KLIENT: A jest opcja z potwierdzeniem odbioru?

PRACOWNIK: Tak, to dodatkowe cztery złote do każdej opcji.

KLIENT: Poproszę więc przesyłkę priorytetową z potwierdzeniem odbioru. Ile razem?

PRACOWNIK: Czterdzieści dwa złote. Proszę wypełnić ten formularz celny — tu wpisuje pan nadawcę, tu adresata i zawartość paczki.

KLIENT: Napisać "dokumenty"?

PRACOWNIK: Tak, wystarczy. Czy płaci pan kartą czy gotówką?

KLIENT: Kartą, proszę.

PRACOWNIK: Proszę. Oto paragon i numer śledzenia przesyłki. Paczka dotrze do adresata w środę lub czwartek.

KLIENT: Dziękuję bardzo.

PRACOWNIK: Proszę. Do widzenia!`,
    qs: [
      {
        q: 'Po co klient przyszedł na pocztę?',
        opts: [
          'Żeby odebrać list polecony',
          'Żeby wysłać paczkę do Niemiec',
          'Żeby zapłacić rachunek',
          'Żeby kupić znaczki'
        ],
        ans: 1
      },
      {
        q: 'Ile kosztuje przesyłka ekonomiczna?',
        opts: [
          'Osiemnaście złotych',
          'Dwadzieścia dwa złote',
          'Trzydzieści złotych',
          'Trzydzieści osiem złotych'
        ],
        ans: 1
      },
      {
        q: 'Co to jest przesyłka priorytetowa?',
        opts: [
          'Najtańsza opcja wysyłki',
          'Przesyłka wysyłana tylko w dni robocze',
          'Szybsza opcja, dostarczana w pierwszej kolejności',
          'Opcja bez numeru śledzenia'
        ],
        ans: 2
      },
      {
        q: 'Ile klient płaci łącznie za swoją przesyłkę?',
        opts: [
          'Trzydzieści osiem złotych',
          'Czterdzieści złotych',
          'Czterdzieści dwa złote',
          'Czterdzieści sześć złotych'
        ],
        ans: 2
      },
      {
        q: 'Kiedy paczka dotrze do adresata?',
        opts: [
          'Następnego dnia roboczego',
          'W poniedziałek lub wtorek',
          'W środę lub czwartek',
          'Za tydzień'
        ],
        ans: 2
      }
    ]
  },

  {
    id: 'TB010',
    title: 'Ogłoszenie: Nowa linia autobusowa w Gdańsku',
    type: 'listening',
    text: `PREZENTER: Szanowni pasażerowie, uwaga — ważny komunikat Zarządu Transportu Miejskiego w Gdańsku.

Od pierwszego kwietnia bieżącego roku uruchomiona zostanie nowa linia autobusowa numer sto pięć, łącząca Dworzec Główny PKP z portem lotniczym w Rębiechowie. Autobus będzie kursował bezpośrednio, bez przesiadki, przez całą dobę — siedem dni w tygodniu.

W godzinach od szóstej do dwudziestej drugiej autobus będzie jeździć co dwadzieścia minut. W nocy, od dwudziestej drugiej do szóstej rano, częstotliwość wyniesie co czterdzieści pięć minut. Czas przejazdu z centrum do lotniska wynosi około trzydziestu pięciu minut.

Bilety można kupować u kierowcy oraz poprzez aplikację mobilną "GdańskGO". Bilet normalny kosztuje pięć złotych, bilet ulgowy — dwa złote pięćdziesiąt groszy. Pasażerowie z biletem miesięcznym na komunikację miejską mogą korzystać z tej linii bezpłatnie.

W związku z uruchomieniem nowej linii zmienia się trasa autobusu numer siedemdziesiąt. Od pierwszego kwietnia autobus siedemdziesiąt nie będzie zatrzymywał się na przystanku "Port Lotniczy". Szczegółowe informacje dostępne są na stronie internetowej ZTM Gdańsk oraz w punktach obsługi klienta.

Dziękujemy za uwagę.`,
    qs: [
      {
        q: 'Co jest tematem komunikatu?',
        opts: [
          'Zamknięcie dworca kolejowego',
          'Uruchomienie nowej linii autobusowej na lotnisko',
          'Zmiana cen biletów miesięcznych',
          'Remont centrum Gdańska'
        ],
        ans: 1
      },
      {
        q: 'Jak często kursuje autobus 105 w godzinach od 6:00 do 22:00?',
        opts: [
          'Co dziesięć minut',
          'Co kwadrans',
          'Co dwadzieścia minut',
          'Co pół godziny'
        ],
        ans: 2
      },
      {
        q: 'Ile kosztuje bilet normalny na nową linię?',
        opts: [
          'Dwa złote pięćdziesiąt groszy',
          'Trzy złote',
          'Cztery złote',
          'Pięć złotych'
        ],
        ans: 3
      },
      {
        q: 'Kto może korzystać z nowej linii bezpłatnie?',
        opts: [
          'Dzieci do lat dziesięciu',
          'Studenci z legitymacją',
          'Pasażerowie z biletem miesięcznym',
          'Seniorzy powyżej sześćdziesiątki'
        ],
        ans: 2
      },
      {
        q: 'Co zmienia się w kursowaniu autobusu numer 70?',
        opts: [
          'Zostanie całkowicie wycofany z ruchu',
          'Zmieni trasę przez centrum miasta',
          'Nie będzie zatrzymywał się na przystanku "Port Lotniczy"',
          'Będzie kursował tylko w dni robocze'
        ],
        ans: 2
      }
    ]
  },

  {
    id: 'TB011',
    title: 'Artykuł: Wszystkich Świętych w Polsce',
    type: 'reading',
    text: `Wszystkich Świętych — wyjątkowe polskie święto

Pierwszy listopada to w Polsce dzień o szczególnym znaczeniu. Święto Wszystkich Świętych jest obchodzone przez katolików na całym świecie, ale w Polsce przyjmuje wyjątkową formę. Tego dnia miliony Polaków odwiedzają cmentarze, aby uczcić pamięć bliskich osób, które odeszły.

Już kilka dni przed pierwszym listopada sklepy sprzedają chryzantemy i znicze. Znicz to specjalna świeca umieszczona w szklanym lub plastikowym pojemniku — jest symbolem tego dnia. Wieczorem rozświetlone tysiącami zniczy cmentarze tworzą niezwykły i wzruszający widok.

Polacy traktują ten dzień poważnie. Rodziny przyjeżdżają z różnych stron kraju, by razem odwiedzić groby dziadków, rodziców lub rodzeństwa. To czas wspomnień i rozmów o bliskich. W wielu miastach organizowane są też msze polowe na cmentarzach.

Ponieważ Wszystkich Świętych jest dniem wolnym od pracy, wiele osób wyjeżdża na długi weekend do rodzinnych miejscowości. Z tego powodu drogi w całej Polsce są wtedy bardzo zatłoczone, a PKP i autokarowe linie przewozowe uruchamiają dodatkowe połączenia.

Następnego dnia, drugiego listopada, obchodzone są Zaduszki — dzień modlitwy za dusze wszystkich zmarłych.`,
    qs: [
      {
        q: 'Kiedy w Polsce obchodzi się Święto Wszystkich Świętych?',
        opts: [
          'Trzydziestego pierwszego października',
          'Pierwszego listopada',
          'Drugiego listopada',
          'Jedenastego listopada'
        ],
        ans: 1
      },
      {
        q: 'Co to jest znicz?',
        opts: [
          'Rodzaj chryzantemy sprzedawanej na cmentarzu',
          'Tradycyjna polska pieśń żałobna',
          'Specjalna świeca w szklanym lub plastikowym pojemniku',
          'Ozdobna karta ze zdjęciem bliskiej osoby'
        ],
        ans: 2
      },
      {
        q: 'Dlaczego rodziny przyjeżdżają z różnych stron kraju tego dnia?',
        opts: [
          'Żeby wspólnie uczestniczyć w jarmarku',
          'Żeby odwiedzić groby dziadków, rodziców lub rodzeństwa',
          'Żeby wziąć udział w paradzie ulicznej',
          'Żeby obejrzeć wystawę regionalną'
        ],
        ans: 1
      },
      {
        q: 'Dlaczego drogi w Polsce są zatłoczone pierwszego listopada?',
        opts: [
          'Odbywa się jarmark bożonarodzeniowy w centrum',
          'Trwają remonty na głównych trasach',
          'Wiele osób jedzie na wycieczki zagraniczne',
          'Wiele osób wyjeżdża do rodzinnych miejscowości'
        ],
        ans: 3
      },
      {
        q: 'Czemu poświęcone są Zaduszki, obchodzone drugiego listopada?',
        opts: [
          'Modlitwie za dusze wszystkich zmarłych',
          'Uczczeniu pamięci ofiar wojennych',
          'Spotkaniom rodzinnym przy grobach bliskich',
          'Zakończeniu okresu żałoby'
        ],
        ans: 0
      }
    ]
  },

  {
    id: 'TB012',
    title: 'Ogłoszenie: Kurs języka polskiego w Domu Kultury',
    type: 'reading',
    text: `DOM KULTURY „WIŚLANY" W BYDGOSZCZY
ZAPROSZENIE NA KURS

Dom Kultury „Wiślany" ogłasza nabór na jesienną edycję kursu języka polskiego dla obcokrajowców. Kurs skierowany jest do osób dorosłych na poziomie A2 i B1, które chcą poprawić swoją znajomość języka polskiego w komunikacji codziennej i zawodowej.

Zajęcia odbywać się będą dwa razy w tygodniu: w poniedziałki i środy, w godzinach 17:30–19:30. Kurs rozpoczyna się pierwszego października i trwa do końca listopada — łącznie to osiemnaście spotkań i trzydzieści sześć godzin nauki.

Kurs jest bezpłatny dzięki dofinansowaniu z budżetu miasta. Uczestnicy otrzymają materiały dydaktyczne — skrypt i zeszyt ćwiczeń — bezpłatnie na pierwszych zajęciach.

Zapisy przyjmujemy do dwudziestego piątego września. Liczba miejsc jest ograniczona — tylko dwadzieścia osób w grupie. W przypadku większej liczby chętnych, o przyjęciu zadecyduje kolejność zgłoszeń.

Aby się zapisać, należy wysłać wiadomość e-mail na adres: kurspolski@dkwislany.pl lub zadzwonić pod numer 52-300-400-500 w godzinach pracy sekretariatu: od poniedziałku do piątku, 9:00–16:00.

Serdecznie zapraszamy!`,
    qs: [
      {
        q: 'Dla kogo przeznaczony jest kurs języka polskiego?',
        opts: [
          'Dla dzieci uczących się w polskich szkołach',
          'Dla dorosłych obcokrajowców na poziomie A2 i B1',
          'Dla Polaków chcących nauczyć się języka obcego',
          'Dla studentów pierwszego roku filologii'
        ],
        ans: 1
      },
      {
        q: 'Kiedy odbywają się zajęcia na kursie?',
        opts: [
          'We wtorki i czwartki, 18:00–20:00',
          'W poniedziałki i środy, 17:30–19:30',
          'Codziennie od poniedziałku do piątku, 9:00–10:00',
          'W soboty, 10:00–13:00'
        ],
        ans: 1
      },
      {
        q: 'Ile kosztuje kurs?',
        opts: [
          'Sto złotych miesięcznie',
          'Trzysta złotych za cały kurs',
          'Pięćdziesiąt złotych za semestr',
          'Jest bezpłatny'
        ],
        ans: 3
      },
      {
        q: 'Ile osób może uczestniczyć w kursie?',
        opts: [
          'Dziesięć',
          'Piętnaście',
          'Dwadzieścia',
          'Trzydzieści'
        ],
        ans: 2
      },
      {
        q: 'Do kiedy można się zapisać na kurs?',
        opts: [
          'Do pierwszego października',
          'Do piętnastego września',
          'Do dwudziestego piątego września',
          'Do końca listopada'
        ],
        ans: 2
      }
    ]
  }

];

// Make available for import in Node / module contexts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TEXT_BANK };
}
