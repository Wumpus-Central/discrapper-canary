"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(521489),
    l = n(397927),
    o = n(775602),
    c = n(531685),
    u = n(203982),
    d = n(418829),
    m = n(652215);
function f(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: f,
            onPanelChange: g,
            sidebarFooter: h,
            emptyState: y,
            searchQuery: p,
            clearSearchQuery: _,
            searchBar: x,
            ...b
        } = e,
        [v, A] = i.useState(!1),
        [j, S] = i.useState(1.4),
        N = i.useRef(null),
        C = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        k = (0, a.bG)([c.A], () => c.A.isFocused());
    return (
        i.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !C &&
                    k &&
                    (A(!0), S(t ?? 1.4), clearTimeout(N.current), (N.current = setTimeout(() => A(!1), n ?? 1e3)));
            };
            return (
                u._.subscribe(m.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    u._.unsubscribe(m.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(N.current);
                }
            );
        }, [C, k]),
        (0, r.jsx)(l.bfh, {
            isShaking: v,
            intensity: j,
            children: (0, r.jsx)(s.N, {
                ...b,
                children: (0, r.jsx)(d.A, {
                    onClose: b.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: f,
                    onPanelChange: g,
                    emptyState: y,
                    sidebarFooter: h,
                    searchQuery: p,
                    clearSearchQuery: _,
                    searchBar: x,
                }),
            }),
        })
    );
}
