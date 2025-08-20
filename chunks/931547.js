n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(740313);
function c(e) {
    let { message: t, error: n, onClick: i, submitting: c, className: u, ctaMessage: d } = e;
    return (0, r.jsxs)("div", {
        className: a()(l.container, u),
        children: [
            (0, r.jsxs)("div", {
                className: l.textContainer,
                children: [
                    (0, r.jsx)(s.Mgn, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                        className: l.warningIcon,
                    }),
                    (0, r.jsx)(s.LZC, {
                        size: 10,
                        horizontal: !0,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.LZC, { size: 1 }),
                            (0, r.jsx)(s.Text, {
                                className: l.info,
                                variant: "text-sm/normal",
                                children: t,
                            }),
                            null != n &&
                                (0, r.jsx)(s.Text, {
                                    className: a()(l.info, l.error),
                                    variant: "text-sm/normal",
                                    children: n,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(s.LZC, {
                size: 16,
                horizontal: !0,
            }),
            (0, r.jsx)(o.zx, {
                className: l.undoButton,
                color: o.zx.Colors.LINK,
                look: o.zx.Looks.LINK,
                size: o.zx.Sizes.ICON,
                onClick: i,
                submitting: c,
                children: d,
            }),
        ],
    });
}
