"use strict";
n.d(t, { A: () => a });
var i = n(664294),
    r = n(413323);
n(426586);
let s = new r.Ay({
    initialLocale: i.parse(document.cookie).locale,
    getMessages: (e) => n(121312)(`./${e}.json`),
    getLanguages: () => n(296437),
});
s.addListener("locale", (e) => {
    document.cookie = `locale=${e};path=/`;
});
let a = s;
