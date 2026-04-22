"use strict";
n.d(t, {
    $y: () => h,
    KF: () => E,
    LT: () => p,
    PR: () => m,
    Vd: () => _,
    hD: () => g,
    nC: () => d,
    rm: () => c,
    tG: () => f,
});
var r = n(627968),
    i = n(64700),
    s = n(461771),
    a = n(741918),
    o = n(602034);
let l = { id: "NO_LIST", onKeyDown() {}, orientation: a.Gl.VERTICAL, ref: i.createRef(), tabIndex: -1 },
    u = i.createContext({ id: "NO_LIST", setFocus() {} }),
    d = i.createContext(l);
function c(e) {
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
    return { ...c(e), role: "treeitem", "aria-level": t };
}
function f(e) {
    let { children: t, id: n } = e;
    return t(c(n));
}
function E() {
    return i.useContext(d).ref;
}
function h() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: r, orientation: s } = i.useContext(d);
    return { role: "list", tabIndex: r, [o.KE]: e, onKeyDown: t, ref: n, "aria-orientation": s };
}
function p(e) {
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
            containerProps: { onKeyDown: o, ref: l, tabIndex: c },
            orientation: _,
        } = n,
        f = i.useMemo(() => ({ id: s, setFocus: a }), [s, a]),
        E = i.useMemo(() => ({ onKeyDown: o, orientation: _, ref: l, id: s, tabIndex: c }), [o, _, l, s, c]);
    return (0, r.jsxs)(d.Provider, { value: E, children: [(0, r.jsx)(u.Provider, { value: f, children: t }), " "] });
}
