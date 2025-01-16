var i = n(200651);
n(192379);
var r = n(481060);
t.Z = (e) => {
    let { product: t, analyticsLocations: s, title: a, description: l, shouldShowPromotionalExperience: o } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e('87624'), n.e('64569')]).then(n.bind(n, 331042));
        return (n) =>
            (0, i.jsx)(e, {
                product: t,
                analyticsLocations: s,
                title: a,
                description: l,
                shouldShowPromotionalExperience: o,
                ...n
            });
    });
};
