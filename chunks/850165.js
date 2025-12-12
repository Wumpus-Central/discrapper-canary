n.d(e, { Z: () => a }), n(953529);
var i = n(54381);
n(473749);
var r = n(481060),
    s = n(394968);
function a(t) {
    let { heroImage: e, children: n, header: a, description: o } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            void 0 !== e &&
                (0, i.jsx)("div", {
                    className: s.heroImage,
                    children: e,
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
                                color: "text-strong",
                                children: a,
                            }),
                            null != o &&
                                (0, i.jsx)(r.Text, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    className: s.description,
                                    children: o,
                                }),
                        ],
                    }),
                    n,
                ],
            }),
        ],
    });
}
