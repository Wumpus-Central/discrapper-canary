n.d(e, { s: () => a });
var i = n(442837),
    l = n(509613),
    s = n(960412),
    r = n(151662),
    u = n(313789);
let a = n(930441).Od.map((t) =>
    (0, l.qs)("".concat(u.n.EMAIL_LIST_ITEM_PREFIX).concat(t.category), {
        useTitle: t.label,
        useSubtitle: t.subLabel,
        useValue: () =>
            ((t) => {
                let { categories: e } = (0, i.cj)([r.Z], () => r.Z.getEmailSettings());
                return !!e[t];
            })(t.category),
        setValue: (e) => (0, s.pR)(t.category, e),
    }),
);
