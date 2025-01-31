n.d(t, { k: () => m });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(761224),
    u = n(743236),
    c = n(481060),
    d = n(540059),
    f = n(186523),
    _ = n(553826),
    p = n(939350),
    h = n(450793);
function m(e) {
    let { color: t = 'default', label: n, checked: a, subtext: m, disabled: g, isFocused: E, menuItemProps: v, action: y } = e,
        I = r.useRef(null),
        b = (0, d.Q3)('MenuRadioItem');
    return (
        r.useEffect(() => {
            E && (0, u.F)(I);
        }, [E]),
        (0, i.jsxs)(o.P, {
            innerRef: I,
            className: s()(h.item, h.labelContainer, p._[t], {
                [h.disabled]: g,
                [h.focused]: E
            }),
            onClick: g ? void 0 : y,
            ...v,
            'aria-checked': a,
            'aria-disabled': g,
            children: [
                (0, i.jsxs)('div', {
                    className: h.label,
                    children: [
                        (0, l.I)(n, e),
                        null != m &&
                            (0, i.jsx)('div', {
                                className: h.subtext,
                                children: m
                            })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: h.iconContainer,
                    children: b
                        ? (0, i.jsx)(c.Fj9, {
                              checked: a,
                              disabled: g,
                              radioItemIconClassName: h.radioIcon
                          })
                        : a
                          ? (0, i.jsx)(_.Z, {
                                className: h.icon,
                                background: h.__invalid_radio,
                                foreground: h.radioSelection
                            })
                          : (0, i.jsx)(f.Z, {
                                className: h.icon,
                                foreground: h.__invalid_radio
                            })
                })
            ]
        })
    );
}
