a.d(t, { C: () => d });
var n = a(54381);
a(473749);
var i = a(481060),
    r = a(600164),
    l = a(424071),
    s = a(388032),
    o = a(926375),
    c = a(387852);
function d(e) {
    let { onContinue: t, onClose: a, title: d, body: u } = e;
    return (0, n.jsxs)(l.Z, {
        children: [
            (0, n.jsxs)(i.xBx, {
                "data-migration-pending": !0,
                direction: r.Z.Direction.VERTICAL,
                className: o.header,
                separator: !1,
                children: [
                    (0, n.jsx)("img", {
                        src: c,
                        className: o.illustration,
                        width: "254",
                        height: "127",
                        alt: "",
                    }),
                    (0, n.jsx)(i.Heading, {
                        className: o.title,
                        variant: "heading-xl/extrabold",
                        children: d,
                    }),
                    null != a &&
                        (0, n.jsx)(i.olH, {
                            className: o.closeButton,
                            onClick: a,
                        }),
                ],
            }),
            (0, n.jsx)(i.hzk, {
                "data-migration-pending": !0,
                className: o.body,
                paddingFix: !1,
                children: (0, n.jsx)(i.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "text-default",
                    children: u,
                }),
            }),
            (0, n.jsx)(i.mzw, {
                "data-migration-pending": !0,
                className: o.footer,
                children: (0, n.jsx)(i.Button, {
                    text: s.intl.format(s.t["4X7vPo"], {
                        popoutWindowIcon: {},
                        popoutWindowIconHook: () =>
                            (0, n.jsx)(i.rgF, {
                                color: "currentColor",
                                className: o.launchIcon,
                                size: "xs",
                            }),
                    }),
                    onClick: t,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
