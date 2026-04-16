n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(600812),
    a = n(791498),
    o = n(244242);
function d(e) {
    let { node: t } = e,
        {
            useTitle: n,
            useSubtitle: d,
            useValue: c,
            setValue: u,
            useOptions: m,
            clearable: g,
            closeOnSelect: _,
            wrapTags: x,
            selectionMode: h,
            usePersistentBadge: A,
            getDismissibleBadges: p,
        } = t,
        T = n(),
        f = d?.(),
        S = c(),
        E = m(),
        b = A?.(),
        C = p?.(),
        v = (0, r.A)({ persistentBadge: b, dismissibleBadges: C }),
        N = (0, a.q)(t),
        I = s.useMemo(() => {
            var e, t;
            return {
                selectionMode: h,
                value: S,
                onSelectionChange:
                    ((e = u),
                    (t = N),
                    (n) => {
                        t(), e(n);
                    }),
            };
        }, [h, S, u, N]);
    return (0, i.jsx)(o.L, {
        children: (0, i.jsx)(l.l6P, {
            ...I,
            label: T,
            description: f,
            options: E,
            wrapTags: x,
            closeOnSelect: _,
            clearable: g,
            layout: "horizontal-responsive",
            fullWidth: !0,
            badge: v,
        }),
    });
}
