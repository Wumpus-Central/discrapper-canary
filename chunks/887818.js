n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(388032),
    c = n(706103);
let d = s.createContext({
    isOpen: !1,
    toggleOpen: () => {}
});
function u(e) {
    let { children: t } = e,
        [n, l] = s.useReducer((e) => !e, !1),
        r = s.useMemo(
            () => ({
                isOpen: n,
                toggleOpen: l
            }),
            [n]
        );
    return (0, i.jsx)(d.Provider, {
        value: r,
        children: t(n)
    });
}
u.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: l, toggleOpen: u } = s.useContext(d),
        h = l ? a.u04 : a.CJ0,
        m = null != n ? n : l ? o.intl.string(o.t.fgq1go) : o.intl.string(o.t.XJuakJ);
    return (0, i.jsxs)(a.P3F, {
        className: r()(c.toggle, t),
        onClick: u,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'heading-sm/semibold',
                tag: 'div',
                color: 'currentColor',
                children: m
            }),
            (0, i.jsx)(h, {
                size: 'sm',
                color: 'currentColor'
            })
        ]
    });
};
