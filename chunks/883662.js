"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    l = n(521489),
    s = n(568602),
    o = n(775602),
    c = n(531685),
    u = n(203982),
    d = n(418829),
    _ = n(652215);
function h(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: h,
            onViewChange: p,
            sidebarFooter: f,
            emptyState: m,
            searchQuery: g,
            clearSearchQuery: E,
            searchBar: v,
            ...y
        } = e,
        [A, S] = i.useState(!1),
        [b, x] = i.useState(1.4),
        N = i.useRef(null),
        C = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        I = (0, a.bG)([c.A], () => c.A.isFocused());
    return (
        i.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !C &&
                    I &&
                    (S(!0), x(t ?? 1.4), clearTimeout(N.current), (N.current = setTimeout(() => S(!1), n ?? 1e3)));
            };
            return (
                u._.subscribe(_.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    u._.unsubscribe(_.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(N.current);
                }
            );
        }, [C, I]),
        (0, r.jsx)(s.b, {
            isShaking: A,
            intensity: b,
            children: (0, r.jsx)(l.N, {
                ...y,
                children: (0, r.jsx)(d.A, {
                    onClose: y.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: h,
                    onViewChange: p,
                    emptyState: m,
                    sidebarFooter: f,
                    searchQuery: g,
                    clearSearchQuery: E,
                    searchBar: v,
                }),
            }),
        })
    );
}
