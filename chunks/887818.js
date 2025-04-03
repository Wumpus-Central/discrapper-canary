n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(388032),
    c = n(384619);
let d = i.createContext({
    isOpen: !1,
    toggleOpen: () => {}
});
function u(e) {
    let { children: t } = e,
        [n, s] = i.useReducer((e) => !e, !1),
        a = i.useMemo(
            () => ({
                isOpen: n,
                toggleOpen: s
            }),
            [n]
        );
    return (0, r.jsx)(d.Provider, {
        value: a,
        children: t(n)
    });
}
u.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: s, toggleOpen: u } = i.useContext(d),
        m = s ? l.u04 : l.CJ0,
        g = null != n ? n : s ? o.NW.string(o.t.fgq1go) : o.NW.string(o.t.XJuakJ);
    return (0, r.jsxs)(l.P3F, {
        className: a()(c.toggle, t),
        onClick: u,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'heading-sm/semibold',
                tag: 'div',
                color: 'currentColor',
                children: g
            }),
            (0, r.jsx)(m, {
                size: 'sm',
                color: 'currentColor'
            })
        ]
    });
};
