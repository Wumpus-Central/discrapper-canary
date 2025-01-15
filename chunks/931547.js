n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(576822);
function o(e) {
    let { message: t, error: n, onClick: r, submitting: o, className: c, ctaMessage: d } = e;
    return (0, i.jsxs)('div', {
        className: s()(l.container, c),
        children: [
            (0, i.jsxs)('div', {
                className: l.textContainer,
                children: [
                    (0, i.jsx)(a.CircleWarningIcon, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'currentColor',
                        className: l.warningIcon
                    }),
                    (0, i.jsx)(a.Spacer, {
                        size: 10,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(a.Spacer, { size: 1 }),
                            (0, i.jsx)(a.Text, {
                                className: l.info,
                                variant: 'text-sm/normal',
                                children: t
                            }),
                            null != n &&
                                (0, i.jsx)(a.Text, {
                                    className: s()(l.info, l.error),
                                    variant: 'text-sm/normal',
                                    children: n
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(a.Spacer, {
                size: 16,
                horizontal: !0
            }),
            (0, i.jsx)(a.Button, {
                className: l.undoButton,
                color: a.Button.Colors.LINK,
                look: a.Button.Looks.LINK,
                size: a.Button.Sizes.ICON,
                onClick: r,
                submitting: o,
                children: d
            })
        ]
    });
}
