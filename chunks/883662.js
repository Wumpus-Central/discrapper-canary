"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(521489),
    l = n(397927),
    o = n(775602),
    c = n(531685),
    u = n(203982),
    d = n(418829),
    _ = n(652215);
function g(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: g,
            onPanelChange: m,
            sidebarFooter: b,
            emptyState: f,
            searchQuery: p,
            onSearchChange: h,
            ...y
        } = e,
        [x, A] = i.useState(!1),
        [C, S] = i.useState(1.4),
        v = i.useRef(null),
        T = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        k = (0, a.bG)([c.A], () => c.A.isFocused());
    return (
        i.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !T &&
                    k &&
                    (A(!0), S(t ?? 1.4), clearTimeout(v.current), (v.current = setTimeout(() => A(!1), n ?? 1e3)));
            };
            return (
                u._.subscribe(_.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    u._.unsubscribe(_.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(v.current);
                }
            );
        }, [T, k]),
        (0, r.jsx)(l.bfh, {
            isShaking: x,
            intensity: C,
            children: (0, r.jsx)(s.N, {
                ...y,
                children: (0, r.jsx)(d.A, {
                    onClose: y.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: g,
                    onPanelChange: m,
                    emptyState: f,
                    sidebarFooter: b,
                    searchQuery: p,
                    onSearchChange: h,
                }),
            }),
        })
    );
}
