n.d(t, { A: () => s });
var i = n(664294),
    r = n(413323);
n(426586);
let a = new r.Ay({
    initialLocale: i.parse(document.cookie).locale,
    getMessages: (e) => n(121312)(`./${e}.json`),
    getLanguages: () => n(296437),
});
a.addListener("locale", (e) => {
    document.cookie = `locale=${e};path=/`;
});
let s = a;
