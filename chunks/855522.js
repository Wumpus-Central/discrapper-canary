var i = n(664294),
    r = n(187352);
n(426586);
let a = new r.Ay({
    initialLocale: i.q(document.cookie).locale,
    getMessages: (e) => n(121312)(`./${e}.json`),
    getLanguages: () => n(296437),
});
(a.addListener("locale", (e) => {
    document.cookie = `locale=${e};path=/`;
}),
    n.d(t, {}, { A: a }));
