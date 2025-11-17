t.d(a, { C: () => x });
var n = t(54381);
t(473749);
var r = t(755721),
    s = t(481060),
    l = t(600164),
    i = t(424071),
    o = t(388032),
    c = t(771831),
    d = t(387852);
function x(e) {
    let { onContinue: a, onClose: t, title: x, body: u } = e;
    return (0, n.jsxs)(i.Z, {
        children: [
            (0, n.jsxs)(s.xBx, {
                direction: l.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, n.jsx)("img", {
                        src: d,
                        className: c.illustration,
                        width: "254",
                        height: "127",
                        alt: "",
                    }),
                    (0, n.jsx)(s.Heading, {
                        className: c.title,
                        variant: "heading-xl/extrabold",
                        children: x,
                    }),
                    null != t &&
                        (0, n.jsx)(s.olH, {
                            className: c.closeButton,
                            onClick: t,
                        }),
                ],
            }),
            (0, n.jsx)(s.hzk, {
                className: c.body,
                paddingFix: !1,
                children: (0, n.jsx)(s.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: u,
                }),
            }),
            (0, n.jsx)(s.mzw, {
                className: c.footer,
                children: (0, n.jsxs)(r.zx, {
                    className: c.footerButton,
                    color: r.zx.Colors.BRAND,
                    onClick: a,
                    children: [
                        o.intl.string(o.t["7NqTJn"]),
                        (0, n.jsx)(s.rgF, {
                            color: "currentColor",
                            className: c.launchIcon,
                            size: "xs",
                        }),
                    ],
                }),
            }),
        ],
    });
}
