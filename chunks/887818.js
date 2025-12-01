n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(388032),
    c = n(426633);
let u = i.createContext({
    isOpen: !1,
    toggleOpen: () => {},
});
function d(e) {
    let { children: t } = e,
        [n, a] = i.useReducer((e) => !e, !1),
        o = i.useMemo(
            () => ({
                isOpen: n,
                toggleOpen: a,
            }),
            [n],
        );
    return (0, r.jsx)(u.Provider, {
        value: o,
        children: t(n),
    });
}
d.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: a, toggleOpen: d } = i.useContext(u),
        f = a ? s.u04 : s.CJ0,
        p = null != n ? n : a ? l.intl.string(l.t.fgq1gs) : l.intl.string(l.t.XJuakA);
    return (0, r.jsxs)(s.P3F, {
        className: o()(c.toggle, t),
        onClick: d,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "heading-sm/semibold",
                tag: "div",
                color: "currentColor",
                children: p,
            }),
            (0, r.jsx)(f, {
                size: "sm",
                color: "currentColor",
            }),
        ],
    });
};
