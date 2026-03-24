n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(600812),
    r = n(791498),
    o = n(244242);
function d(e, t) {
    return (n) => {
        t(), e(n);
    };
}
function c(e) {
    let { node: t } = e,
        {
            useTitle: n,
            useSubtitle: c,
            useValue: u,
            setValue: m,
            useOptions: _,
            clearable: g,
            closeOnSelect: A,
            wrapTags: x,
            selectionMode: p,
            usePersistentBadge: h,
            getDismissibleBadges: f,
        } = t,
        T = n(),
        E = c?.(),
        S = u(),
        b = _(),
        C = h?.(),
        N = f?.(),
        v = (0, a.A)({ persistentBadge: C, dismissibleBadges: N }),
        I = (0, r.q)(t),
        j = s.useMemo(() => ({ selectionMode: p, value: S, onSelectionChange: d(m, I) }), [p, S, m, I]);
    return (0, i.jsx)(o.L, {
        children: (0, i.jsx)(l.l6P, {
            ...j,
            label: T,
            description: E,
            options: b,
            wrapTags: x,
            closeOnSelect: A,
            clearable: g,
            layout: "horizontal-responsive",
            fullWidth: !0,
            badge: v,
        }),
    });
}
