var i = n(664294);
let r = new (n(187352).Ay)({
    initialLocale: i.q(document.cookie).locale,
    getMessages: (e) => n(121312)(`./${e}.json`),
    getLanguages: () => n(296437),
});
(r.addListener("locale", (e) => {
    document.cookie = `locale=${e};path=/`;
}),
    n.d(t, {}, { A: r }));
