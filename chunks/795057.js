n.d(t, {
    ZP: () => u,
    y3: () => c,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060);
n(509212), n(373370), n(566078), n(388032);
var s = n(879615);
function l(e) {
    let { children: t, isComplete: n, hasNextStep: i } = e;
    return (0, r.jsxs)("li", {
        className: a()(s.stepWrapper, { [s.stepWrapperComplete]: n }, { [s.stepWrapperWithNextStep]: i }),
        children: [
            (0, r.jsxs)("div", {
                className: s.stepIndicator,
                children: [
                    (0, r.jsx)("div", {
                        className: s.stepIconWrapper,
                        children:
                            n &&
                            (0, r.jsx)(o.sV5, {
                                className: s.stepIcon,
                                color: o.TVs.colors.WHITE,
                            }),
                    }),
                    i && (0, r.jsx)("div", { className: s.stepConnector }),
                ],
            }),
            (0, r.jsx)("div", {
                className: s.stepContent,
                children: t,
            }),
        ],
    });
}
function c(e) {
    let { children: t } = e;
    return (0, r.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: t,
    });
}
let u = function (e) {
    let { children: t, heading: n, steps: i } = e;
    return (0, r.jsxs)("div", {
        className: s.wrapper,
        children: [
            (0, r.jsx)("div", {
                className: s.headingWrapper,
                children: (0, r.jsx)(o.X6q, {
                    className: s.heading,
                    color: "header-primary",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, r.jsx)("div", {
                className: s.stepsWrapper,
                children: (0, r.jsx)("ul", {
                    children: i.map((e, t) =>
                        (0, r.jsx)(
                            l,
                            {
                                isComplete: e.isComplete,
                                hasNextStep: t < i.length - 1,
                                children: e.renderContent(),
                            },
                            t,
                        ),
                    ),
                }),
            }),
            t,
        ],
    });
};
