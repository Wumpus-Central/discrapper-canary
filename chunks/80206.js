n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(793030),
    l = n(159691),
    o = n(481060),
    s = n(388905),
    a = n(294707);
function c(e) {
    let { title: t, subtitle: n, buttonText: c, image: u, onButtonClick: d, loading: h } = e;
    return (0, r.jsx)(s.ZP, {
        className: a.container,
        children: (0, r.jsxs)(i.Kq, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, r.jsxs)(i.Kq, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, r.jsxs)(i.Kq, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != u &&
                                    (0, r.jsx)(i.Kq, {
                                        align: "center",
                                        justify: "center",
                                        className: a.image,
                                        children: u,
                                    }),
                                h && (0, r.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE }),
                                (0, r.jsx)(i.X6, {
                                    variant: "heading-xl/semibold",
                                    color: "header-primary",
                                    children: t,
                                }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, r.jsx)(i.xv, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                className: a.subtitle,
                                children: n,
                            }),
                    ],
                }),
                !h &&
                    (0, r.jsx)(l.zx, {
                        onClick: d,
                        text: c,
                        variant: "overlay-primary",
                    }),
            ],
        }),
    });
}
