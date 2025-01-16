r.d(n, {
    k: function () {
        return g;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(1561),
    u = r(761224),
    c = r(743236),
    d = r(481060),
    f = r(540059),
    _ = r(186523),
    h = r(553826),
    p = r(939350),
    m = r(450793);
function g(e) {
    let { color: n = 'default', label: r, checked: s, subtext: g, disabled: E, isFocused: v, menuItemProps: I, action: T } = e,
        b = a.useRef(null),
        y = (0, f.Q3)('MenuRadioItem');
    return (
        a.useEffect(() => {
            v && (0, c.F)(b);
        }, [v]),
        (0, i.jsxs)(l.P, {
            innerRef: b,
            className: o()(m.item, m.labelContainer, p._[n], {
                [m.disabled]: E,
                [m.focused]: v
            }),
            onClick: E ? void 0 : T,
            ...I,
            'aria-checked': s,
            'aria-disabled': E,
            children: [
                (0, i.jsxs)('div', {
                    className: m.label,
                    children: [
                        (0, u.I)(r, e),
                        null != g &&
                            (0, i.jsx)('div', {
                                className: m.subtext,
                                children: g
                            })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: m.iconContainer,
                    children: y
                        ? (0, i.jsx)(d.RadioIndicator, {
                              checked: s,
                              radioItemIconClassName: m.radioIcon
                          })
                        : s
                          ? (0, i.jsx)(h.Z, {
                                className: m.icon,
                                background: m.__invalid_radio,
                                foreground: m.radioSelection
                            })
                          : (0, i.jsx)(_.Z, {
                                className: m.icon,
                                foreground: m.__invalid_radio
                            })
                })
            ]
        })
    );
}
