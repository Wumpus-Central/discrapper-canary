n.d(e, { s: () => a });
var i = n(442837),
    l = n(509613),
    s = n(960412),
    u = n(151662),
    r = n(313789);
let a = n(930441).Od.map((t) =>
    (0, l.qs)("".concat(r.n.EMAIL_LIST_ITEM_PREFIX).concat(t.category), {
        useTitle: t.label,
        useSubtitle: t.subLabel,
        useValue: () =>
            ((t) => {
                let { categories: e } = (0, i.cj)([u.Z], () => u.Z.getEmailSettings());
                return !!e[t];
            })(t.category),
        setValue: (e) => (0, s.pR)(t.category, e),
    }),
);
