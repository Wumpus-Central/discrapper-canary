n.d(e, { Z: () => s }), n(953529);
var i = n(54381);
n(473749);
var r = n(481060),
    a = n(72595);
function s(t) {
    let { heroImage: e, children: n, header: s, description: o } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            void 0 !== e &&
                (0, i.jsx)("div", {
                    className: a.heroImage,
                    children: e,
                }),
            (0, i.jsxs)(r.hzk, {
                "data-migration-pending": !0,
                className: a.body,
                children: [
                    (0, i.jsxs)("div", {
                        className: a.textContainer,
                        children: [
                            (0, i.jsx)(r.Heading, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: s,
                            }),
                            null != o &&
                                (0, i.jsx)(r.Text, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    className: a.description,
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
