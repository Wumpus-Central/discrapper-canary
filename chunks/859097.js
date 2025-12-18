a.d(t, { C: () => u });
var n = a(54381);
a(473749);
var r = a(755721),
    i = a(481060),
    l = a(600164),
    s = a(424071),
    o = a(388032),
    c = a(926375),
    d = a(387852);
function u(e) {
    let { onContinue: t, onClose: a, title: u, body: x } = e;
    return (0, n.jsxs)(s.Z, {
        children: [
            (0, n.jsxs)(i.xBx, {
                "data-migration-pending": !0,
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
                    (0, n.jsx)(i.Heading, {
                        className: c.title,
                        variant: "heading-xl/extrabold",
                        children: u,
                    }),
                    null != a &&
                        (0, n.jsx)(i.olH, {
                            className: c.closeButton,
                            onClick: a,
                        }),
                ],
            }),
            (0, n.jsx)(i.hzk, {
                "data-migration-pending": !0,
                className: c.body,
                paddingFix: !1,
                children: (0, n.jsx)(i.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "text-default",
                    children: x,
                }),
            }),
            (0, n.jsx)(i.mzw, {
                "data-migration-pending": !0,
                className: c.footer,
                children: (0, n.jsxs)(r.zx, {
                    className: c.footerButton,
                    color: r.zx.Colors.BRAND,
                    onClick: t,
                    children: [
                        o.intl.string(o.t["7NqTJn"]),
                        (0, n.jsx)(i.rgF, {
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
