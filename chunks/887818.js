n.d(t, { Z: () => u }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(388032),
    c = n(384619);
let d = r.createContext({
    isOpen: !1,
    toggleOpen: () => {}
});
function u(e) {
    let { children: t } = e,
        [n, s] = r.useReducer((e) => !e, !1),
        l = r.useMemo(
            () => ({
                isOpen: n,
                toggleOpen: s
            }),
            [n]
        );
    return (0, i.jsx)(d.Provider, {
        value: l,
        children: t(n)
    });
}
u.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: s, toggleOpen: u } = r.useContext(d),
        m = s ? a.u04 : a.CJ0,
        p = null != n ? n : s ? o.intl.string(o.t.fgq1go) : o.intl.string(o.t.XJuakJ);
    return (0, i.jsxs)(a.P3F, {
        className: l()(c.toggle, t),
        onClick: u,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'heading-sm/semibold',
                tag: 'div',
                color: 'currentColor',
                children: p
            }),
            (0, i.jsx)(m, {
                size: 'sm',
                color: 'currentColor'
            })
        ]
    });
};
