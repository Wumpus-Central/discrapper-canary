n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(388032),
    c = n(114697);
let d = r.createContext({
    isOpen: !1,
    toggleOpen: () => {}
});
function u(e) {
    let { children: t } = e,
        [n, s] = r.useReducer((e) => !e, !1),
        a = r.useMemo(
            () => ({
                isOpen: n,
                toggleOpen: s
            }),
            [n]
        );
    return (0, i.jsx)(d.Provider, {
        value: a,
        children: t(n)
    });
}
u.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: s, toggleOpen: u } = r.useContext(d),
        m = s ? l.ChevronSmallUpIcon : l.ChevronSmallDownIcon,
        g = null != n ? n : s ? o.intl.string(o.t.fgq1go) : o.intl.string(o.t.XJuakJ);
    return (0, i.jsxs)(l.Clickable, {
        className: a()(c.toggle, t),
        onClick: u,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'heading-sm/semibold',
                tag: 'div',
                color: 'currentColor',
                children: g
            }),
            (0, i.jsx)(m, {
                size: 'sm',
                color: 'currentColor'
            })
        ]
    });
};
