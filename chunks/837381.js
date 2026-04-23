"use strict";
n.d(t, {
    $y: () => h,
    KF: () => p,
    LT: () => E,
    PR: () => m,
    Vd: () => _,
    hD: () => g,
    nC: () => c,
    rm: () => d,
    tG: () => f,
});
var r = n(627968),
    i = n(64700),
    s = n(461771),
    a = n(741918),
    o = n(602034);
let l = { id: "NO_LIST", onKeyDown() {}, orientation: a.Gl.VERTICAL, ref: i.createRef(), tabIndex: -1 },
    u = i.createContext({ id: "NO_LIST", setFocus() {} }),
    c = i.createContext(l);
function d(e) {
    let [t, n] = i.useState(-1),
        { id: r, setFocus: a } = i.useContext(u),
        l = i.useCallback(() => a(e), [e, a]);
    return (
        i.useLayoutEffect(
            () =>
                (0, s.e)(r, (t, r) => {
                    n(r && t === e ? 0 : -1);
                }),
            [e, r],
        ),
        { role: "listitem", [o.eM]: (0, o.t$)(r, e), tabIndex: t, onFocus: l }
    );
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return { ...d(e), role: "treeitem", "aria-level": t };
}
function f(e) {
    let { children: t, id: n } = e;
    return t(d(n));
}
function p() {
    return i.useContext(c).ref;
}
function h() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: r, orientation: s } = i.useContext(c);
    return { role: "list", tabIndex: r, [o.KE]: e, onKeyDown: t, ref: n, "aria-orientation": s };
}
function E(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: r, tabIndex: i },
        orientation: s,
    } = e;
    return { role: "list", onKeyDown: n, ref: r, [o.KE]: t, tabIndex: i, "aria-orientation": s };
}
function m(e) {
    let { children: t } = e;
    return t(h());
}
function g(e) {
    let { children: t, navigator: n } = e,
        {
            id: s,
            setFocus: a,
            containerProps: { onKeyDown: o, ref: l, tabIndex: d },
            orientation: _,
        } = n,
        f = i.useMemo(() => ({ id: s, setFocus: a }), [s, a]),
        p = i.useMemo(() => ({ onKeyDown: o, orientation: _, ref: l, id: s, tabIndex: d }), [o, _, l, s, d]);
    return (0, r.jsxs)(c.Provider, { value: p, children: [(0, r.jsx)(u.Provider, { value: f, children: t }), " "] });
}
