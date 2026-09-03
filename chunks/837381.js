n.d(t, {
    $y: () => h,
    KF: () => A,
    LT: () => I,
    PR: () => f,
    Vd: () => _,
    hD: () => p,
    nC: () => c,
    rm: () => u,
    tG: () => E,
});
var i = n(477900),
    r = n(582128),
    a = n(461771),
    s = n(741918),
    l = n(602034);
let o = { id: "NO_LIST", onKeyDown() {}, orientation: s.Gl.VERTICAL, ref: r.createRef(), tabIndex: -1 },
    d = r.createContext({ id: "NO_LIST", setFocus() {} }),
    c = r.createContext(o);
function u(e) {
    let [t, n] = r.useState(-1),
        { id: i, setFocus: s } = r.useContext(d),
        o = r.useCallback(() => s(e), [e, s]);
    return (
        r.useLayoutEffect(
            () =>
                (0, a.e)(i, (t, i) => {
                    n(i && t === e ? 0 : -1);
                }),
            [e, i],
        ),
        { role: "listitem", [l.eM]: (0, l.t$)(i, e), tabIndex: t, onFocus: o }
    );
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return { ...u(e), role: "treeitem", "aria-level": t };
}
function E(e) {
    let { children: t, id: n } = e;
    return t(u(n));
}
function A() {
    return r.useContext(c).ref;
}
function h() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: i, orientation: a } = r.useContext(c);
    return { role: "list", tabIndex: i, [l.KE]: e, onKeyDown: t, ref: n, "aria-orientation": a };
}
function I(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: i, tabIndex: r },
        orientation: a,
    } = e;
    return { role: "list", onKeyDown: n, ref: i, [l.KE]: t, tabIndex: r, "aria-orientation": a };
}
function f(e) {
    let { children: t } = e;
    return t(h());
}
function p(e) {
    let { children: t, navigator: n } = e,
        {
            id: a,
            setFocus: s,
            containerProps: { onKeyDown: l, ref: o, tabIndex: u },
            orientation: _,
        } = n,
        E = r.useMemo(() => ({ id: a, setFocus: s }), [a, s]),
        A = r.useMemo(() => ({ onKeyDown: l, orientation: _, ref: o, id: a, tabIndex: u }), [l, _, o, a, u]);
    return (0, i.jsxs)(c.Provider, { value: A, children: [(0, i.jsx)(d.Provider, { value: E, children: t }), " "] });
}
