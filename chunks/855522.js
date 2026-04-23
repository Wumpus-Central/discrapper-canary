"use strict";
n.d(t, { A: () => a });
var r = n(664294),
    i = n(484838);
n(426586);
let s = new i.Ay({
    initialLocale: r.parse(document.cookie).locale,
    getMessages: (e) => n(121312)(`./${e}.json`),
    getLanguages: () => n(296437),
});
s.addListener("locale", (e) => {
    document.cookie = `locale=${e};path=/`;
});
let a = s;
