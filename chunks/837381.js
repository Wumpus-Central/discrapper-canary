"use strict";
n.d(t, {
    $y: () => p,
    KF: () => h,
    LT: () => E,
    PR: () => m,
    Vd: () => _,
    hD: () => g,
    nC: () => c,
    rm: () => d,
    tG: () => f,
});
var i = n(627968),
    r = n(64700),
    s = n(461771),
    a = n(741918),
    o = n(602034);
let l = { id: "NO_LIST", onKeyDown() {}, orientation: a.Gl.VERTICAL, ref: r.createRef(), tabIndex: -1 },
    u = r.createContext({ id: "NO_LIST", setFocus() {} }),
    c = r.createContext(l);
function d(e) {
    let [t, n] = r.useState(-1),
        { id: i, setFocus: a } = r.useContext(u),
        l = r.useCallback(() => a(e), [e, a]);
    return (
        r.useLayoutEffect(
            () =>
                (0, s.e)(i, (t, i) => {
                    n(i && t === e ? 0 : -1);
                }),
            [e, i],
        ),
        { role: "listitem", [o.eM]: (0, o.t$)(i, e), tabIndex: t, onFocus: l }
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
function h() {
    return r.useContext(c).ref;
}
function p() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: i, orientation: s } = r.useContext(c);
    return { role: "list", tabIndex: i, [o.KE]: e, onKeyDown: t, ref: n, "aria-orientation": s };
}
function E(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: i, tabIndex: r },
        orientation: s,
    } = e;
    return { role: "list", onKeyDown: n, ref: i, [o.KE]: t, tabIndex: r, "aria-orientation": s };
}
function m(e) {
    let { children: t } = e;
    return t(p());
}
function g(e) {
    let { children: t, navigator: n } = e,
        {
            id: s,
            setFocus: a,
            containerProps: { onKeyDown: o, ref: l, tabIndex: d },
            orientation: _,
        } = n,
        f = r.useMemo(() => ({ id: s, setFocus: a }), [s, a]),
        h = r.useMemo(() => ({ onKeyDown: o, orientation: _, ref: l, id: s, tabIndex: d }), [o, _, l, s, d]);
    return (0, i.jsxs)(c.Provider, { value: h, children: [(0, i.jsx)(u.Provider, { value: f, children: t }), " "] });
}
