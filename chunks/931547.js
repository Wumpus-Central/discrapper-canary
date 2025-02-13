n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(808375);
function o(e) {
    let { message: t, error: n, onClick: r, submitting: o, className: c, ctaMessage: d } = e;
    return (0, i.jsxs)('div', {
        className: a()(l.container, c),
        children: [
            (0, i.jsxs)('div', {
                className: l.textContainer,
                children: [
                    (0, i.jsx)(s.P4T, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'currentColor',
                        className: l.warningIcon
                    }),
                    (0, i.jsx)(s.LZC, {
                        size: 10,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.LZC, { size: 1 }),
                            (0, i.jsx)(s.Text, {
                                className: l.info,
                                variant: 'text-sm/normal',
                                children: t
                            }),
                            null != n &&
                                (0, i.jsx)(s.Text, {
                                    className: a()(l.info, l.error),
                                    variant: 'text-sm/normal',
                                    children: n
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.LZC, {
                size: 16,
                horizontal: !0
            }),
            (0, i.jsx)(s.zxk, {
                className: l.undoButton,
                color: s.zxk.Colors.LINK,
                look: s.zxk.Looks.LINK,
                size: s.zxk.Sizes.ICON,
                onClick: r,
                submitting: o,
                children: d
            })
        ]
    });
}
