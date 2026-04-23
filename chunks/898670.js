"use strict";
r.d(t, { A: () => n });
var n = {};
n = {
    "ar-AE": {
        deselectedItem: (e) => `${e.item} \u{63A}\u{64A}\u{631} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
        longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
        select: "تحديد",
        selectedAll: "جميع العناصر المحددة.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "لم يتم تحديد عناصر", one: () => `${t.number(e.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`, other: () => `${t.number(e.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}` })}.`,
        selectedItem: (e) => `${e.item} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
    },
    "bg-BG": {
        deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{435} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}.`,
        longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
        select: "Изберете",
        selectedAll: "Всички елементи са избрани.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Няма избрани елементи", one: () => `${t.number(e.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`, other: () => `${t.number(e.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}` })}.`,
        selectedItem: (e) => `${e.item} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}.`,
    },
    "cs-CZ": {
        deselectedItem: (e) => `Polo\u{17E}ka ${e.item} nen\xed vybr\xe1na.`,
        longPressToSelect: "Dlouh\xfdm stisknut\xedm přejdete do režimu v\xfdběru.",
        select: "Vybrat",
        selectedAll: "Vybr\xe1ny všechny položky.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Nevybr\xe1ny ž\xe1dn\xe9 položky", one: () => `Vybr\xe1na ${t.number(e.count)} polo\u{17E}ka`, other: () => `Vybr\xe1no ${t.number(e.count)} polo\u{17E}ek` })}.`,
        selectedItem: (e) => `Vybr\xe1na polo\u{17E}ka ${e.item}.`,
    },
    "da-DK": {
        deselectedItem: (e) => `${e.item} ikke valgt.`,
        longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
        select: "V\xe6lg",
        selectedAll: "Alle elementer valgt.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Ingen elementer valgt", one: () => `${t.number(e.count)} element valgt`, other: () => `${t.number(e.count)} elementer valgt` })}.`,
        selectedItem: (e) => `${e.item} valgt.`,
    },
    "de-DE": {
        deselectedItem: (e) => `${e.item} nicht ausgew\xe4hlt.`,
        longPressToSelect: "Gedr\xfcckt halten, um Auswahlmodus zu \xf6ffnen.",
        select: "Ausw\xe4hlen",
        selectedAll: "Alle Elemente ausgew\xe4hlt.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Keine Elemente ausgew\xe4hlt", one: () => `${t.number(e.count)} Element ausgew\xe4hlt`, other: () => `${t.number(e.count)} Elemente ausgew\xe4hlt` })}.`,
        selectedItem: (e) => `${e.item} ausgew\xe4hlt.`,
    },
    "el-GR": {
        deselectedItem: (e) =>
            `\u{394}\u{3B5}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} \u{3C4}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF} ${e.item}.`,
        longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
        select: "Επιλογή",
        selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Δεν επιλέχθηκαν στοιχεία", one: () => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${t.number(e.count)} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`, other: () => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B1}\u{3BD} ${t.number(e.count)} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}` })}.`,
        selectedItem: (e) =>
            `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} \u{3C4}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF} ${e.item}.`,
    },
    "en-US": {
        deselectedItem: (e) => `${e.item} not selected.`,
        select: "Select",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "No items selected", one: () => `${t.number(e.count)} item selected`, other: () => `${t.number(e.count)} items selected` })}.`,
        selectedAll: "All items selected.",
        selectedItem: (e) => `${e.item} selected.`,
        longPressToSelect: "Long press to enter selection mode.",
    },
    "es-ES": {
        deselectedItem: (e) => `${e.item} no seleccionado.`,
        longPressToSelect: "Mantenga pulsado para abrir el modo de selecci\xf3n.",
        select: "Seleccionar",
        selectedAll: "Todos los elementos seleccionados.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Ning\xfan elemento seleccionado", one: () => `${t.number(e.count)} elemento seleccionado`, other: () => `${t.number(e.count)} elementos seleccionados` })}.`,
        selectedItem: (e) => `${e.item} seleccionado.`,
    },
    "et-EE": {
        deselectedItem: (e) => `${e.item} pole valitud.`,
        longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
        select: "Vali",
        selectedAll: "K\xf5ik \xfcksused valitud.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "\xdcksusi pole valitud", one: () => `${t.number(e.count)} \xfcksus valitud`, other: () => `${t.number(e.count)} \xfcksust valitud` })}.`,
        selectedItem: (e) => `${e.item} valitud.`,
    },
    "fi-FI": {
        deselectedItem: (e) => `Kohdetta ${e.item} ei valittu.`,
        longPressToSelect: "Siirry valintatilaan painamalla pitk\xe4\xe4n.",
        select: "Valitse",
        selectedAll: "Kaikki kohteet valittu.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Ei yht\xe4\xe4n kohdetta valittu", one: () => `${t.number(e.count)} kohde valittu`, other: () => `${t.number(e.count)} kohdetta valittu` })}.`,
        selectedItem: (e) => `${e.item} valittu.`,
    },
    "fr-FR": {
        deselectedItem: (e) => `${e.item} non s\xe9lectionn\xe9.`,
        longPressToSelect: "Appuyez de mani\xe8re prolong\xe9e pour passer en mode de s\xe9lection.",
        select: "S\xe9lectionner",
        selectedAll: "Tous les \xe9l\xe9ments s\xe9lectionn\xe9s.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Aucun \xe9l\xe9ment s\xe9lectionn\xe9", one: () => `${t.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`, other: () => `${t.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s` })}.`,
        selectedItem: (e) => `${e.item} s\xe9lectionn\xe9.`,
    },
    "he-IL": {
        deselectedItem: (e) => `${e.item} \u{5DC}\u{5D0} \u{5E0}\u{5D1}\u{5D7}\u{5E8}.`,
        longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
        select: "בחר",
        selectedAll: "כל הפריטים נבחרו.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "לא נבחרו פריטים", one: () => `\u{5E4}\u{5E8}\u{5D9}\u{5D8} ${t.number(e.count)} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`, other: () => `${t.number(e.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}` })}.`,
        selectedItem: (e) => `${e.item} \u{5E0}\u{5D1}\u{5D7}\u{5E8}.`,
    },
    "hr-HR": {
        deselectedItem: (e) => `Stavka ${e.item} nije odabrana.`,
        longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
        select: "Odaberite",
        selectedAll: "Odabrane su sve stavke.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Nije odabrana nijedna stavka", one: () => `Odabrana je ${t.number(e.count)} stavka`, other: () => `Odabrano je ${t.number(e.count)} stavki` })}.`,
        selectedItem: (e) => `Stavka ${e.item} je odabrana.`,
    },
    "hu-HU": {
        deselectedItem: (e) => `${e.item} nincs kijel\xf6lve.`,
        longPressToSelect: "Nyomja hosszan a kijel\xf6l\xe9shez.",
        select: "Kijel\xf6l\xe9s",
        selectedAll: "Az \xf6sszes elem kijel\xf6lve.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Egy elem sincs kijel\xf6lve", one: () => `${t.number(e.count)} elem kijel\xf6lve`, other: () => `${t.number(e.count)} elem kijel\xf6lve` })}.`,
        selectedItem: (e) => `${e.item} kijel\xf6lve.`,
    },
    "it-IT": {
        deselectedItem: (e) => `${e.item} non selezionato.`,
        longPressToSelect: "Premi a lungo per passare alla modalit\xe0 di selezione.",
        select: "Seleziona",
        selectedAll: "Tutti gli elementi selezionati.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Nessun elemento selezionato", one: () => `${t.number(e.count)} elemento selezionato`, other: () => `${t.number(e.count)} elementi selezionati` })}.`,
        selectedItem: (e) => `${e.item} selezionato.`,
    },
    "ja-JP": {
        deselectedItem: (e) =>
            `${e.item} \u{304C}\u{9078}\u{629E}\u{3055}\u{308C}\u{3066}\u{3044}\u{307E}\u{305B}\u{3093}\u{3002}`,
        longPressToSelect: "長押しして選択モードを開きます。",
        select: "選択",
        selectedAll: "すべての項目を選択しました。",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "項目が選択されていません", one: () => `${t.number(e.count)} \u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}`, other: () => `${t.number(e.count)} \u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}` })}\u{3002}`,
        selectedItem: (e) => `${e.item} \u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}`,
    },
    "ko-KR": {
        deselectedItem: (e) =>
            `${e.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C9C0} \u{C54A}\u{C558}\u{C2B5}\u{B2C8}\u{B2E4}.`,
        longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
        select: "선택",
        selectedAll: "모든 항목이 선택되었습니다.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "선택된 항목이 없습니다", one: () => `${t.number(e.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}`, other: () => `${t.number(e.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}` })}.`,
        selectedItem: (e) => `${e.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    },
    "lt-LT": {
        deselectedItem: (e) => `${e.item} nepasirinkta.`,
        longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
        select: "Pasirinkti",
        selectedAll: "Pasirinkti visi elementai.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Nepasirinktas nė vienas elementas", one: () => `Pasirinktas ${t.number(e.count)} elementas`, other: () => `Pasirinkta element\u{173}: ${t.number(e.count)}` })}.`,
        selectedItem: (e) => `Pasirinkta: ${e.item}.`,
    },
    "lv-LV": {
        deselectedItem: (e) => `Vienums ${e.item} nav atlas\u{12B}ts.`,
        longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
        select: "Atlasīt",
        selectedAll: "Atlasīti visi vienumi.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Nav atlasīts neviens vienums", one: () => `Atlas\u{12B}to vienumu skaits: ${t.number(e.count)}`, other: () => `Atlas\u{12B}to vienumu skaits: ${t.number(e.count)}` })}.`,
        selectedItem: (e) => `Atlas\u{12B}ts vienums ${e.item}.`,
    },
    "nb-NO": {
        deselectedItem: (e) => `${e.item} er ikke valgt.`,
        longPressToSelect: "Bruk et langt trykk for \xe5 g\xe5 inn i valgmodus.",
        select: "Velg",
        selectedAll: "Alle elementer er valgt.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Ingen elementer er valgt", one: () => `${t.number(e.count)} element er valgt`, other: () => `${t.number(e.count)} elementer er valgt` })}.`,
        selectedItem: (e) => `${e.item} er valgt.`,
    },
    "nl-NL": {
        deselectedItem: (e) => `${e.item} niet geselecteerd.`,
        longPressToSelect: "Druk lang om de selectiemodus te openen.",
        select: "Selecteren",
        selectedAll: "Alle items geselecteerd.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Geen items geselecteerd", one: () => `${t.number(e.count)} item geselecteerd`, other: () => `${t.number(e.count)} items geselecteerd` })}.`,
        selectedItem: (e) => `${e.item} geselecteerd.`,
    },
    "pl-PL": {
        deselectedItem: (e) => `Nie zaznaczono ${e.item}.`,
        longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
        select: "Zaznacz",
        selectedAll: "Wszystkie zaznaczone elementy.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Nie zaznaczono żadnych element\xf3w", one: () => `${t.number(e.count)} zaznaczony element`, other: () => `${t.number(e.count)} zaznaczonych element\xf3w` })}.`,
        selectedItem: (e) => `Zaznaczono ${e.item}.`,
    },
    "pt-BR": {
        deselectedItem: (e) => `${e.item} n\xe3o selecionado.`,
        longPressToSelect: "Mantenha pressionado para entrar no modo de sele\xe7\xe3o.",
        select: "Selecionar",
        selectedAll: "Todos os itens selecionados.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Nenhum item selecionado", one: () => `${t.number(e.count)} item selecionado`, other: () => `${t.number(e.count)} itens selecionados` })}.`,
        selectedItem: (e) => `${e.item} selecionado.`,
    },
    "pt-PT": {
        deselectedItem: (e) => `${e.item} n\xe3o selecionado.`,
        longPressToSelect: "Prima continuamente para entrar no modo de sele\xe7\xe3o.",
        select: "Selecionar",
        selectedAll: "Todos os itens selecionados.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Nenhum item selecionado", one: () => `${t.number(e.count)} item selecionado`, other: () => `${t.number(e.count)} itens selecionados` })}.`,
        selectedItem: (e) => `${e.item} selecionado.`,
    },
    "ro-RO": {
        deselectedItem: (e) => `${e.item} neselectat.`,
        longPressToSelect: "Apăsați lung pentru a intra \xeen modul de selectare.",
        select: "Selectare",
        selectedAll: "Toate elementele selectate.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Niciun element selectat", one: () => `${t.number(e.count)} element selectat`, other: () => `${t.number(e.count)} elemente selectate` })}.`,
        selectedItem: (e) => `${e.item} selectat.`,
    },
    "ru-RU": {
        deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
        longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
        select: "Выбрать",
        selectedAll: "Выбраны все элементы.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Нет выбранных элементов", one: () => `${t.number(e.count)} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}`, other: () => `${t.number(e.count)} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}` })}.`,
        selectedItem: (e) => `${e.item} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
    },
    "sk-SK": {
        deselectedItem: (e) => `Nevybrat\xe9 polo\u{17E}ky: ${e.item}.`,
        longPressToSelect: "Dlhš\xedm stlačen\xedm prejdite do režimu v\xfdberu.",
        select: "Vybrať",
        selectedAll: "Všetky vybrat\xe9 položky.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Žiadne vybrat\xe9 položky", one: () => `${t.number(e.count)} vybrat\xe1 polo\u{17E}ka`, other: () => `Po\u{10D}et vybrat\xfdch polo\u{17E}iek:${t.number(e.count)}` })}.`,
        selectedItem: (e) => `Vybrat\xe9 polo\u{17E}ky: ${e.item}.`,
    },
    "sl-SI": {
        deselectedItem: (e) => `Element ${e.item} ni izbran.`,
        longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
        select: "Izberite",
        selectedAll: "Vsi elementi so izbrani.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Noben element ni izbran", one: () => `${t.number(e.count)} element je izbran`, other: () => `${t.number(e.count)} elementov je izbranih` })}.`,
        selectedItem: (e) => `Element ${e.item} je izbran.`,
    },
    "sr-SP": {
        deselectedItem: (e) => `${e.item} nije izabrano.`,
        longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
        select: "Izaberite",
        selectedAll: "Izabrane su sve stavke.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Nije izabrana nijedna stavka", one: () => `Izabrana je ${t.number(e.count)} stavka`, other: () => `Izabrano je ${t.number(e.count)} stavki` })}.`,
        selectedItem: (e) => `${e.item} je izabrano.`,
    },
    "sv-SE": {
        deselectedItem: (e) => `${e.item} ej markerat.`,
        longPressToSelect: "Tryck l\xe4nge n\xe4r du vill \xf6ppna v\xe4ljarl\xe4ge.",
        select: "Markera",
        selectedAll: "Alla markerade objekt.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Inga markerade objekt", one: () => `${t.number(e.count)} markerat objekt`, other: () => `${t.number(e.count)} markerade objekt` })}.`,
        selectedItem: (e) => `${e.item} markerat.`,
    },
    "tr-TR": {
        deselectedItem: (e) => `${e.item} se\xe7ilmedi.`,
        longPressToSelect: "Se\xe7im moduna girmek i\xe7in uzun basın.",
        select: "Se\xe7",
        selectedAll: "T\xfcm \xf6geler se\xe7ildi.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Hi\xe7bir \xf6ge se\xe7ilmedi", one: () => `${t.number(e.count)} \xf6ge se\xe7ildi`, other: () => `${t.number(e.count)} \xf6ge se\xe7ildi` })}.`,
        selectedItem: (e) => `${e.item} se\xe7ildi.`,
    },
    "uk-UA": {
        deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
        longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
        select: "Вибрати",
        selectedAll: "Усі елементи вибрано.",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "Жодних елементів не вибрано", one: () => `${t.number(e.count)} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`, other: () => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{456}\u{432}: ${t.number(e.count)}` })}.`,
        selectedItem: (e) => `${e.item} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
    },
    "zh-CN": {
        deselectedItem: (e) => `\u{672A}\u{9009}\u{62E9} ${e.item}\u{3002}`,
        longPressToSelect: "长按以进入选择模式。",
        select: "选择",
        selectedAll: "已选择所有项目。",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "未选择项目", one: () => `\u{5DF2}\u{9009}\u{62E9} ${t.number(e.count)} \u{4E2A}\u{9879}\u{76EE}`, other: () => `\u{5DF2}\u{9009}\u{62E9} ${t.number(e.count)} \u{4E2A}\u{9879}\u{76EE}` })}\u{3002}`,
        selectedItem: (e) => `\u{5DF2}\u{9009}\u{62E9} ${e.item}\u{3002}`,
    },
    "zh-TW": {
        deselectedItem: (e) => `\u{672A}\u{9078}\u{53D6}\u{300C}${e.item}\u{300D}\u{3002}`,
        longPressToSelect: "長按以進入選擇模式。",
        select: "選取",
        selectedAll: "已選取所有項目。",
        selectedCount: (e, t) =>
            `${t.plural(e.count, { "=0": "未選取任何項目", one: () => `\u{5DF2}\u{9078}\u{53D6} ${t.number(e.count)} \u{500B}\u{9805}\u{76EE}`, other: () => `\u{5DF2}\u{9078}\u{53D6} ${t.number(e.count)} \u{500B}\u{9805}\u{76EE}` })}\u{3002}`,
        selectedItem: (e) => `\u{5DF2}\u{9078}\u{53D6}\u{300C}${e.item}\u{300D}\u{3002}`,
    },
};
