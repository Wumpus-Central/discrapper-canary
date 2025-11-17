n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(793030),
    s = n(159691),
    l = n(481060),
    a = n(388905),
    o = n(294707);
function c(e) {
    let { title: t, subtitle: n, buttonText: c, image: u, onButtonClick: d, loading: h } = e;
    return (0, r.jsx)(a.ZP, {
        className: o.container,
        children: (0, r.jsxs)(i.Kqy, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, r.jsxs)(i.Kqy, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, r.jsxs)(i.Kqy, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != u &&
                                    (0, r.jsx)(i.Kqy, {
                                        align: "center",
                                        justify: "center",
                                        className: o.image,
                                        children: u,
                                    }),
                                h && (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE }),
                                (0, r.jsx)(i.X6q, {
                                    variant: "heading-xl/semibold",
                                    color: "header-primary",
                                    children: t,
                                }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, r.jsx)(i.xvT, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                className: o.subtitle,
                                children: n,
                            }),
                    ],
                }),
                !h &&
                    (0, r.jsx)(s.zxk, {
                        onClick: d,
                        text: c,
                        variant: "overlay-primary",
                    }),
            ],
        }),
    });
}
