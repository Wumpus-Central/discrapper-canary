n.d(t, { A: () => b });
var r = n(627968),
    a = n(64700),
    o = n(311907),
    i = n(521489),
    l = n(397927),
    s = n(775602),
    c = n(531685),
    _ = n(203982),
    u = n(418829),
    d = n(652215);
function b(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: b,
            onPanelChange: m,
            sidebarFooter: g,
            emptyState: p,
            searchQuery: f,
            onSearchChange: x,
            ...h
        } = e,
        [y, C] = a.useState(!1),
        [S, v] = a.useState(1.4),
        j = a.useRef(null),
        A = (0, o.bG)([s.A], () => s.A.useReducedMotion),
        T = (0, o.bG)([c.A], () => c.A.isFocused());
    return (
        a.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !A &&
                    T &&
                    (C(!0), v(t ?? 1.4), clearTimeout(j.current), (j.current = setTimeout(() => C(!1), n ?? 1e3)));
            };
            return (
                _._.subscribe(d.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    _._.unsubscribe(d.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(j.current);
                }
            );
        }, [A, T]),
        (0, r.jsx)(l.bfh, {
            isShaking: y,
            intensity: S,
            children: (0, r.jsx)(i.N, {
                ...h,
                children: (0, r.jsx)(u.A, {
                    onClose: h.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: b,
                    onPanelChange: m,
                    emptyState: p,
                    sidebarFooter: g,
                    searchQuery: f,
                    onSearchChange: x,
                }),
            }),
        })
    );
}
