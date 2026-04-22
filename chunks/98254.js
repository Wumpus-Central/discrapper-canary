t.d(n, { A: () => c });
var l = t(627968),
    r = t(64700),
    i = t(691885),
    s = t(600812),
    a = t(791498),
    o = t(244242);
function c(e) {
    let { node: n } = e,
        {
            useTitle: t,
            useSubtitle: c,
            useValue: d,
            setValue: u,
            useOptions: x,
            clearable: j,
            closeOnSelect: h,
            wrapTags: m,
            selectionMode: f,
            usePersistentBadge: p,
            getDismissibleBadges: y,
        } = n,
        g = t(),
        v = c?.(),
        A = d(),
        N = x(),
        b = p?.(),
        k = y?.(),
        E = (0, s.A)({ persistentBadge: b, dismissibleBadges: k }),
        T = (0, a.q)(n),
        S = r.useMemo(() => {
            var e, n;
            return {
                selectionMode: f,
                value: A,
                onSelectionChange:
                    ((e = u),
                    (n = T),
                    (t) => {
                        n(), e(t);
                    }),
            };
        }, [f, A, u, T]);
    return (0, l.jsx)(o.L, {
        children: (0, l.jsx)(i.l, {
            ...S,
            label: g,
            description: v,
            options: N,
            wrapTags: m,
            closeOnSelect: h,
            clearable: j,
            layout: "horizontal-responsive",
            fullWidth: !0,
            badge: E,
        }),
    });
}
