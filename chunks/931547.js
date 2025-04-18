n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(427894);
function o(e) {
    let { message: t, error: n, onClick: i, submitting: o, className: c, ctaMessage: d } = e;
    return (0, r.jsxs)('div', {
        className: s()(l.container, c),
        children: [
            (0, r.jsxs)('div', {
                className: l.textContainer,
                children: [
                    (0, r.jsx)(a.P4T, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'currentColor',
                        className: l.warningIcon
                    }),
                    (0, r.jsx)(a.LZC, {
                        size: 10,
                        horizontal: !0
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(a.LZC, { size: 1 }),
                            (0, r.jsx)(a.Text, {
                                className: l.info,
                                variant: 'text-sm/normal',
                                children: t
                            }),
                            null != n &&
                                (0, r.jsx)(a.Text, {
                                    className: s()(l.info, l.error),
                                    variant: 'text-sm/normal',
                                    children: n
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(a.LZC, {
                size: 16,
                horizontal: !0
            }),
            (0, r.jsx)(a.zxk, {
                className: l.undoButton,
                color: a.zxk.Colors.LINK,
                look: a.zxk.Looks.LINK,
                size: a.zxk.Sizes.ICON,
                onClick: i,
                submitting: o,
                children: d
            })
        ]
    });
}
