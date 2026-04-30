n.d(t, {
    $y: () => I,
    KF: () => A,
    LT: () => T,
    PR: () => h,
    Vd: () => E,
    hD: () => S,
    nC: () => c,
    rm: () => _,
    tG: () => u,
});
var i = n(627968),
    a = n(64700),
    r = n(461771),
    s = n(741918),
    l = n(602034);
let o = { id: "NO_LIST", onKeyDown() {}, orientation: s.Gl.VERTICAL, ref: a.createRef(), tabIndex: -1 },
    d = a.createContext({ id: "NO_LIST", setFocus() {} }),
    c = a.createContext(o);
function _(e) {
    let [t, n] = a.useState(-1),
        { id: i, setFocus: s } = a.useContext(d),
        o = a.useCallback(() => s(e), [e, s]);
    return (
        a.useLayoutEffect(
            () =>
                (0, r.e)(i, (t, i) => {
                    n(i && t === e ? 0 : -1);
                }),
            [e, i],
        ),
        { role: "listitem", [l.eM]: (0, l.t$)(i, e), tabIndex: t, onFocus: o }
    );
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return { ..._(e), role: "treeitem", "aria-level": t };
}
function u(e) {
    let { children: t, id: n } = e;
    return t(_(n));
}
function A() {
    return a.useContext(c).ref;
}
function I() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: i, orientation: r } = a.useContext(c);
    return { role: "list", tabIndex: i, [l.KE]: e, onKeyDown: t, ref: n, "aria-orientation": r };
}
function T(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: i, tabIndex: a },
        orientation: r,
    } = e;
    return { role: "list", onKeyDown: n, ref: i, [l.KE]: t, tabIndex: a, "aria-orientation": r };
}
function h(e) {
    let { children: t } = e;
    return t(I());
}
function S(e) {
    let { children: t, navigator: n } = e,
        {
            id: r,
            setFocus: s,
            containerProps: { onKeyDown: l, ref: o, tabIndex: _ },
            orientation: E,
        } = n,
        u = a.useMemo(() => ({ id: r, setFocus: s }), [r, s]),
        A = a.useMemo(() => ({ onKeyDown: l, orientation: E, ref: o, id: r, tabIndex: _ }), [l, E, o, r, _]);
    return (0, i.jsxs)(c.Provider, { value: A, children: [(0, i.jsx)(d.Provider, { value: u, children: t }), " "] });
}
