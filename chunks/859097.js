a.d(t, { C: () => u });
var l = a(54381);
a(473749);
var n = a(755721),
    s = a(481060),
    r = a(600164),
    i = a(424071),
    o = a(388032),
    c = a(771831),
    d = a(387852);
function u(e) {
    let { onContinue: t, onClose: a, title: u, body: x } = e;
    return (0, l.jsxs)(i.Z, {
        children: [
            (0, l.jsxs)(s.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, l.jsx)("img", {
                        src: d,
                        className: c.illustration,
                        width: "254",
                        height: "127",
                        alt: "",
                    }),
                    (0, l.jsx)(s.Heading, {
                        className: c.title,
                        variant: "heading-xl/extrabold",
                        children: u,
                    }),
                    null != a &&
                        (0, l.jsx)(s.olH, {
                            className: c.closeButton,
                            onClick: a,
                        }),
                ],
            }),
            (0, l.jsx)(s.hzk, {
                className: c.body,
                paddingFix: !1,
                children: (0, l.jsx)(s.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "text-default",
                    children: x,
                }),
            }),
            (0, l.jsx)(s.mzw, {
                className: c.footer,
                children: (0, l.jsxs)(n.zx, {
                    className: c.footerButton,
                    color: n.zx.Colors.BRAND,
                    onClick: t,
                    children: [
                        o.intl.string(o.t["7NqTJn"]),
                        (0, l.jsx)(s.rgF, {
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
