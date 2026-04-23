n.d(t, {
    $y: () => A,
    KF: () => I,
    LT: () => T,
    PR: () => S,
    Vd: () => c,
    hD: () => N,
    nC: () => E,
    rm: () => d,
    tG: () => u,
});
var i = n(627968),
    r = n(64700),
    a = n(461771),
    s = n(741918),
    _ = n(602034);
let l = { id: "NO_LIST", onKeyDown() {}, orientation: s.Gl.VERTICAL, ref: r.createRef(), tabIndex: -1 },
    o = r.createContext({ id: "NO_LIST", setFocus() {} }),
    E = r.createContext(l);
function d(e) {
    let [t, n] = r.useState(-1),
        { id: i, setFocus: s } = r.useContext(o),
        l = r.useCallback(() => s(e), [e, s]);
    return (
        r.useLayoutEffect(
            () =>
                (0, a.e)(i, (t, i) => {
                    n(i && t === e ? 0 : -1);
                }),
            [e, i],
        ),
        { role: "listitem", [_.eM]: (0, _.t$)(i, e), tabIndex: t, onFocus: l }
    );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return { ...d(e), role: "treeitem", "aria-level": t };
}
function u(e) {
    let { children: t, id: n } = e;
    return t(d(n));
}
function I() {
    return r.useContext(E).ref;
}
function A() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: i, orientation: a } = r.useContext(E);
    return { role: "list", tabIndex: i, [_.KE]: e, onKeyDown: t, ref: n, "aria-orientation": a };
}
function T(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: i, tabIndex: r },
        orientation: a,
    } = e;
    return { role: "list", onKeyDown: n, ref: i, [_.KE]: t, tabIndex: r, "aria-orientation": a };
}
function S(e) {
    let { children: t } = e;
    return t(A());
}
function N(e) {
    let { children: t, navigator: n } = e,
        {
            id: a,
            setFocus: s,
            containerProps: { onKeyDown: _, ref: l, tabIndex: d },
            orientation: c,
        } = n,
        u = r.useMemo(() => ({ id: a, setFocus: s }), [a, s]),
        I = r.useMemo(() => ({ onKeyDown: _, orientation: c, ref: l, id: a, tabIndex: d }), [_, c, l, a, d]);
    return (0, i.jsxs)(E.Provider, { value: I, children: [(0, i.jsx)(o.Provider, { value: u, children: t }), " "] });
}
