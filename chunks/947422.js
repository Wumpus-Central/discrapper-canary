n.d(e, { default: () => d });
var l = n(200651);
n(192379);
var i = n(481060),
    s = n(313201),
    r = n(388032),
    o = n(850952),
    a = n(298860);
let c = (t) => {
    let { text: e, icon: n, foreground: s } = t;
    return (0, l.jsxs)('div', {
        className: o.bulletContainer,
        children: [
            (0, l.jsx)('div', {
                className: o.iconContainer,
                children: (0, l.jsx)(n, {
                    color: null != s ? s : 'currentColor',
                    className: o.bulletIcon,
                    size: 'custom',
                    height: 40,
                    width: 40
                })
            }),
            (0, l.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: o.bulletText,
                children: e
            })
        ]
    });
};
function d(t) {
    let { transitionState: e, onClose: n, ...d } = t,
        u = (0, s.Dt)();
    return (0, l.jsx)(i.Y0X, {
        transitionState: e,
        'aria-labelledby': u,
        ...d,
        size: i.CgR.SMALL,
        children: (0, l.jsxs)('div', {
            className: o.content,
            children: [
                (0, l.jsx)('img', {
                    src: a,
                    alt: r.intl.string(r.t['5DRw+/']),
                    className: o.illustration
                }),
                (0, l.jsx)(i.X6q, {
                    id: u,
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: o.headerTitle,
                    children: r.intl.string(r.t.UVuXCg)
                }),
                (0, l.jsx)(c, {
                    text: r.intl.string(r.t.sBDfo6),
                    icon: i.nRN,
                    foreground: o.red
                }),
                (0, l.jsx)(c, {
                    text: r.intl.string(r.t.x58YtL),
                    icon: i.gkL
                }),
                (0, l.jsx)(c, {
                    text: r.intl.string(r.t.XtVqlZ),
                    icon: i.V9
                }),
                (0, l.jsx)(i.zxk, {
                    color: i.zxk.Colors.BRAND,
                    className: o.button,
                    onClick: n,
                    children: r.intl.string(r.t.obLqZ2)
                })
            ]
        })
    });
}
