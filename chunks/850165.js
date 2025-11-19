n.d(e, { Z: () => a }), n(953529);
var i = n(54381);
n(473749);
var r = n(481060),
    s = n(394968);
function a(t) {
    let { heroImageSrc: e, heroImageAlt: n, children: a, header: o, description: c } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", {
                src: e,
                alt: n,
                className: s.heroImage,
            }),
            (0, i.jsxs)(r.hzk, {
                "data-migration-pending": !0,
                className: s.body,
                children: [
                    (0, i.jsxs)("div", {
                        className: s.textContainer,
                        children: [
                            (0, i.jsx)(r.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: o,
                            }),
                            null != c &&
                                (0, i.jsx)(r.Text, {
                                    variant: "text-md/medium",
                                    color: "header-secondary",
                                    className: s.description,
                                    children: c,
                                }),
                        ],
                    }),
                    a,
                ],
            }),
        ],
    });
}
