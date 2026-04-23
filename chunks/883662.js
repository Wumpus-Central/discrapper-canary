"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(521489),
    l = n(568602),
    o = n(775602),
    c = n(531685),
    u = n(203982),
    d = n(418829),
    _ = n(652215);
function f(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: f,
            onViewChange: h,
            sidebarFooter: p,
            emptyState: m,
            searchQuery: g,
            clearSearchQuery: b,
            searchBar: v,
            ...E
        } = e,
        [y, A] = i.useState(!1),
        [x, S] = i.useState(1.4),
        C = i.useRef(null),
        N = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        I = (0, a.bG)([c.A], () => c.A.isFocused());
    return (
        i.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !N &&
                    I &&
                    (A(!0), S(t ?? 1.4), clearTimeout(C.current), (C.current = setTimeout(() => A(!1), n ?? 1e3)));
            };
            return (
                u._.subscribe(_.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    u._.unsubscribe(_.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(C.current);
                }
            );
        }, [N, I]),
        (0, r.jsx)(l.b, {
            isShaking: y,
            intensity: x,
            children: (0, r.jsx)(s.N, {
                ...E,
                children: (0, r.jsx)(d.A, {
                    onClose: E.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: f,
                    onViewChange: h,
                    emptyState: m,
                    sidebarFooter: p,
                    searchQuery: g,
                    clearSearchQuery: b,
                    searchBar: v,
                }),
            }),
        })
    );
}
