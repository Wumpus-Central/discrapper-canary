n.d(t, { A: () => s });
var i = n(664294),
    a = n(413323);
n(426586);
let r = new a.Ay({
    initialLocale: i.parse(document.cookie).locale,
    getMessages: (e) => n(121312)(`./${e}.json`),
    getLanguages: () => n(296437),
});
r.addListener("locale", (e) => {
    document.cookie = `locale=${e};path=/`;
});
let s = r;
