n.d(t, {
    ZP: () => u,
    y3: () => c
});
var r = n(255367);
n(73800);
var o = n(120356),
    s = n.n(o),
    a = n(481060);
(n(509212), n(373370), n(566078), n(388032));
var i = n(141572);
function l(e) {
    let { children: t, isComplete: n, hasNextStep: o } = e;
    return (0, r.jsxs)('li', {
        className: s()(i.stepWrapper, { [i.stepWrapperComplete]: n }, { [i.stepWrapperWithNextStep]: o }),
        children: [
            (0, r.jsxs)('div', {
                className: i.stepIndicator,
                children: [
                    (0, r.jsx)('div', {
                        className: i.stepIconWrapper,
                        children:
                            n &&
                            (0, r.jsx)(a.sV5, {
                                className: i.stepIcon,
                                color: a.TVs.colors.WHITE
                            })
                    }),
                    o && (0, r.jsx)('div', { className: i.stepConnector })
                ]
            }),
            (0, r.jsx)('div', {
                className: i.stepContent,
                children: t
            })
        ]
    });
}
function c(e) {
    let { children: t } = e;
    return (0, r.jsx)(a.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: t
    });
}
let u = function (e) {
    let { children: t, heading: n, steps: o } = e;
    return (0, r.jsxs)('div', {
        className: i.wrapper,
        children: [
            (0, r.jsx)('div', {
                className: i.headingWrapper,
                children: (0, r.jsx)(a.X6q, {
                    className: i.heading,
                    color: 'header-primary',
                    variant: 'text-xs/semibold',
                    children: n
                })
            }),
            (0, r.jsx)('div', {
                className: i.stepsWrapper,
                children: (0, r.jsx)('ul', {
                    children: o.map((e, t) =>
                        (0, r.jsx)(
                            l,
                            {
                                isComplete: e.isComplete,
                                hasNextStep: t < o.length - 1,
                                children: e.renderContent()
                            },
                            t
                        )
                    )
                })
            }),
            t
        ]
    });
};
