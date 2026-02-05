"use strict";
n.d(t, {
    $y: () => g,
    KF: () => m,
    LT: () => E,
    PR: () => A,
    Vd: () => p,
    hD: () => I,
    nC: () => d,
    rm: () => f,
    tG: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(461771),
    s = n(741918),
    o = n(602034);
let l = { id: "NO_LIST", setFocus() {} },
    u = { id: "NO_LIST", onKeyDown() {}, orientation: s.Gl.VERTICAL, ref: i.createRef(), tabIndex: -1 },
    c = i.createContext(l),
    d = i.createContext(u);
function _() {
    return i.useContext(c);
}
function f(e) {
    let [t, n] = i.useState(-1),
        { id: r, setFocus: s } = _(),
        l = i.useCallback(() => s(e), [e, s]);
    return (
        i.useLayoutEffect(
            () =>
                (0, a.e)(r, (t, r) => {
                    n(r && t === e ? 0 : -1);
                }),
            [e, r],
        ),
        { role: "listitem", [o.eM]: (0, o.t$)(r, e), tabIndex: t, onFocus: l }
    );
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return { ...f(e), role: "treeitem", "aria-level": t };
}
function h(e) {
    let { children: t, id: n } = e;
    return t(f(n));
}
function m() {
    return i.useContext(d).ref;
}
function g() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: r, orientation: a } = i.useContext(d);
    return { role: "list", tabIndex: r, [o.KE]: e, onKeyDown: t, ref: n, "aria-orientation": a };
}
function E(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: r, tabIndex: i },
        orientation: a,
    } = e;
    return { role: "list", onKeyDown: n, ref: r, [o.KE]: t, tabIndex: i, "aria-orientation": a };
}
function A(e) {
    let { children: t } = e;
    return t(g());
}
function I(e) {
    let { children: t, navigator: n } = e,
        {
            id: a,
            setFocus: s,
            containerProps: { onKeyDown: o, ref: l, tabIndex: u },
            orientation: _,
        } = n,
        f = i.useMemo(() => ({ id: a, setFocus: s }), [a, s]),
        p = i.useMemo(() => ({ onKeyDown: o, orientation: _, ref: l, id: a, tabIndex: u }), [o, _, l, a, u]);
    return (0, r.jsxs)(d.Provider, { value: p, children: [(0, r.jsx)(c.Provider, { value: f, children: t }), " "] });
}
