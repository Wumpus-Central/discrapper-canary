e.d(a, { default: () => d });
var n = e(54381);
e(473749);
var l = e(481060),
    i = e(600164),
    r = e(313201),
    s = e(988158),
    o = e(388032),
    c = e(733235);
function d(t) {
    let { url: a, onClose: d, transitionState: u } = t,
        x = (0, r.Dt)(),
        { protocol: h, hostname: m, theRestOfTheUrl: b } = (0, s.h)(a);
    return (0, n.jsxs)(l.Y0X, {
        transitionState: u,
        "aria-labelledby": x,
        parentComponent: "BlockedDomainModal",
        children: [
            (0, n.jsx)("img", {
                className: c.art,
                src: e(902623),
                alt: "",
            }),
            (0, n.jsx)(l.hzk, {
                children: (0, n.jsxs)(i.Z, {
                    direction: i.Z.Direction.VERTICAL,
                    justify: i.Z.Justify.CENTER,
                    children: [
                        (0, n.jsx)(l.Heading, {
                            id: x,
                            variant: "heading-lg/semibold",
                            className: c.title,
                            children: o.intl.string(o.t["2B3wj8"]),
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: c.body,
                            children: o.intl.format(o.t.jnHyYU, {}),
                        }),
                        (0, n.jsxs)(l.Ttm, {
                            className: c.linkCalloutContainer,
                            children: [
                                (0, n.jsxs)(l.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: [h, "//"],
                                }),
                                (0, n.jsx)(l.Text, {
                                    tag: "span",
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    children: m,
                                }),
                                (0, n.jsx)(l.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: b,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(l.mzw, {
                children: (0, n.jsx)(l.Button, {
                    variant: "primary",
                    text: o.intl.string(o.t["/g10LC"]),
                    type: "button",
                    onClick: d,
                }),
            }),
        ],
    });
}
