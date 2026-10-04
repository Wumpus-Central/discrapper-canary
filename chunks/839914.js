e.d(s, { default: () => x });
var a = e(477900);
e(582128);
var i = e(536637),
    l = e.n(i),
    n = e(189213),
    r = e(834730),
    c = e(58703),
    d = e(757704),
    u = e(248675),
    o = e(375708),
    m = e(335520);
function x(t) {
    let { transitionState: s, onClose: e } = t,
        i = (0, d.wc)("desktop");
    return (0, a.jsx)(n.a, {
        transitionState: s,
        onClose: e,
        title: o.intl.string(u.default.bTBUeX),
        actions: [],
        children: (0, a.jsx)("ol", {
            className: m.V,
            children: i.map((t) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: m.S3,
                        children: [
                            (0, a.jsxs)(r.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: m.VO,
                                children: [
                                    (0, c.i$)(l()(t.date, "YYYY-MM-DD"), "LL"),
                                    (0, d.t9)(t) ? ` \xb7 ${o.intl.string(u.default.cW5XHD)}` : null,
                                ],
                            }),
                            (0, a.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: t.summary }),
                        ],
                    },
                    `${t.date}-${t.summary}`,
                ),
            ),
        }),
    });
}
