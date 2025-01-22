var i = o(200651);
o(192379);
var n = o(481060);
e.Z = (t) => {
    let { product: e, analyticsLocations: a, title: l, description: r, shouldShowPromotionalExperience: u } = t;
    (0, n.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(o.bind(o, 331042));
        return (o) =>
            (0, i.jsx)(t, {
                product: e,
                analyticsLocations: a,
                title: l,
                description: r,
                shouldShowPromotionalExperience: u,
                ...o
            });
    });
};
