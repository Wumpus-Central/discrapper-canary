n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(755721),
    l = n(481060),
    o = n(427894);
function c(e) {
    let { message: t, error: n, onClick: r, submitting: c, className: d, ctaMessage: u } = e;
    return (0, i.jsxs)('div', {
        className: s()(o.container, d),
        children: [
            (0, i.jsxs)('div', {
                className: o.textContainer,
                children: [
                    (0, i.jsx)(l.Mgn, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'currentColor',
                        className: o.warningIcon
                    }),
                    (0, i.jsx)(l.LZC, {
                        size: 10,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(l.LZC, { size: 1 }),
                            (0, i.jsx)(l.Text, {
                                className: o.info,
                                variant: 'text-sm/normal',
                                children: t
                            }),
                            null != n &&
                                (0, i.jsx)(l.Text, {
                                    className: s()(o.info, o.error),
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
            (0, i.jsx)(a.zx, {
                className: o.undoButton,
                color: a.zx.Colors.LINK,
                look: a.zx.Looks.LINK,
                size: a.zx.Sizes.ICON,
                onClick: r,
                submitting: c,
                children: u
            })
        ]
    });
}
