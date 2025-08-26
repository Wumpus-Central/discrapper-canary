n.d(t, { Z: () => o });
var l = n(442837),
    i = n(509613),
    r = n(960412),
    s = n(151662),
    a = n(869235);
let o = n(930441).Od.map((e) =>
    (0, i.qs)("".concat(a.t.EMAIL_LIST_ITEM_PREFIX).concat(e.category), {
        useTitle: e.label,
        useSubtitle: e.subLabel,
        useValue: () =>
            ((e) => {
                let { categories: t } = (0, l.cj)([s.Z], () => s.Z.getEmailSettings());
                return !!t[e];
            })(e.category),
        setValue: (t) => (0, r.pR)(e.category, t),
    }),
);
