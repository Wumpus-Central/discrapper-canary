n.d(e, { Z: () => a });
var i = n(442837),
    r = n(509613),
    l = n(960412),
    u = n(151662),
    s = n(313789);
let a = n(930441).Od.map((t) =>
    (0, r.qs)("".concat(s.n.EMAIL_LIST_ITEM_PREFIX).concat(t.category), {
        useTitle: t.label,
        useSubtitle: t.subLabel,
        useValue: () =>
            ((t) => {
                let { categories: e } = (0, i.cj)([u.Z], () => u.Z.getEmailSettings());
                return !!e[t];
            })(t.category),
        setValue: (e) => (0, l.pR)(t.category, e),
    }),
);
