n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(378838);
function o(e) {
    let { message: t, error: n, onClick: s, submitting: o, className: c, ctaMessage: d } = e;
    return (0, i.jsxs)('div', {
        className: r()(a.container, c),
        children: [
            (0, i.jsxs)('div', {
                className: a.textContainer,
                children: [
                    (0, i.jsx)(l.P4T, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'currentColor',
                        className: a.warningIcon
                    }),
                    (0, i.jsx)(l.LZC, {
                        size: 10,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(l.LZC, { size: 1 }),
                            (0, i.jsx)(l.Text, {
                                className: a.info,
                                variant: 'text-sm/normal',
                                children: t
                            }),
                            null != n &&
                                (0, i.jsx)(l.Text, {
                                    className: r()(a.info, a.error),
                                    variant: 'text-sm/normal',
                                    children: n
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(l.LZC, {
                size: 16,
                horizontal: !0
            }),
            (0, i.jsx)(l.zxk, {
                className: a.undoButton,
                color: l.zxk.Colors.LINK,
                look: l.zxk.Looks.LINK,
                size: l.zxk.Sizes.ICON,
                onClick: s,
                submitting: o,
                children: d
            })
        ]
    });
}
