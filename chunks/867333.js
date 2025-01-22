r.d(n, {
    k: function () {
        return g;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(1561),
    u = r(761224),
    c = r(743236),
    d = r(481060),
    f = r(540059),
    p = r(186523),
    h = r(553826),
    _ = r(939350),
    m = r(450793);
function g(e) {
    let { color: n = 'default', label: r, checked: o, subtext: g, disabled: E, isFocused: v, menuItemProps: y, action: b } = e,
        I = a.useRef(null),
        T = (0, f.Q3)('MenuRadioItem');
    return (
        a.useEffect(() => {
            v && (0, c.F)(I);
        }, [v]),
        (0, i.jsxs)(l.P, {
            innerRef: I,
            className: s()(m.item, m.labelContainer, _._[n], {
                [m.disabled]: E,
                [m.focused]: v
            }),
            onClick: E ? void 0 : b,
            ...y,
            'aria-checked': o,
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
                    children: T
                        ? (0, i.jsx)(d.RadioIndicator, {
                              checked: o,
                              radioItemIconClassName: m.radioIcon
                          })
                        : o
                          ? (0, i.jsx)(h.Z, {
                                className: m.icon,
                                background: m.__invalid_radio,
                                foreground: m.radioSelection
                            })
                          : (0, i.jsx)(p.Z, {
                                className: m.icon,
                                foreground: m.__invalid_radio
                            })
                })
            ]
        })
    );
}
