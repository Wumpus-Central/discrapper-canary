n.d(t, { Z: () => s });
var i = n(442837),
    r = n(509613),
    l = n(960412),
    o = n(151662),
    a = n(869235);
let s = n(930441).Od.map((e) =>
    (0, r.qs)("".concat(a.t.EMAIL_LIST_ITEM_PREFIX).concat(e.category), {
        useTitle: e.label,
        useSubtitle: e.subLabel,
        useValue: () =>
            ((e) => {
                let { categories: t } = (0, i.cj)([o.Z], () => o.Z.getEmailSettings());
                return !!t[e];
            })(e.category),
        setValue: (t) => (0, l.pR)(e.category, t),
    }),
);
