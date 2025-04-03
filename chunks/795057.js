n.d(t, {
    Om: () => g,
    ZP: () => x,
    y3: () => f
});
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(481060),
    l = n(918701),
    c = n(373370),
    d = n(566078),
    u = n(388032),
    p = n(141572);
function m(e) {
    let { children: t, isComplete: n, hasNextStep: o } = e;
    return (0, r.jsxs)('li', {
        className: a()(p.stepWrapper, { [p.stepWrapperComplete]: n }, { [p.stepWrapperWithNextStep]: o }),
        children: [
            (0, r.jsxs)('div', {
                className: p.stepIndicator,
                children: [
                    (0, r.jsx)('div', {
                        className: p.stepIconWrapper,
                        children:
                            n &&
                            (0, r.jsx)(i.sV5, {
                                className: p.stepIcon,
                                color: i.TVs.colors.WHITE
                            })
                    }),
                    o && (0, r.jsx)('div', { className: p.stepConnector })
                ]
            }),
            (0, r.jsx)('div', {
                className: p.stepContent,
                children: t
            })
        ]
    });
}
function f(e) {
    let { children: t } = e;
    return (0, r.jsx)(i.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: t
    });
}
function g(e) {
    let { quest: t } = e,
        { rewardName: n, rewardDuration: s } = o.useMemo(
            () => ({
                rewardName: d.r.build(t.config).defaultReward.messages.name,
                rewardDuration: (0, l.Kr)(t.config)
            }),
            [t.config]
        ),
        a = (0, c.mK)(t.config);
    return (0, r.jsxs)('div', {
        className: p.rewardsListWrapper,
        children: [
            (0, r.jsx)(i.X6q, {
                color: 'header-primary',
                variant: 'text-xs/semibold',
                children: null == s ? u.NW.string(u.t['7Rdjmp']) : u.NW.formatToPlainString(u.t.coKAb2, { rewardsDuration: s })
            }),
            (0, r.jsx)('ul', {
                className: p.rewardsListBody,
                children: (0, r.jsx)(i.Text, {
                    tag: 'li',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: n
                })
            }),
            null != a &&
                (0, r.jsx)(i.Text, {
                    className: p.rewardsListPremiumDurationExtension,
                    variant: 'text-xs/semibold',
                    children: a
                })
        ]
    });
}
let x = function (e) {
    let { children: t, heading: n, steps: o } = e;
    return (0, r.jsxs)('div', {
        className: p.wrapper,
        children: [
            (0, r.jsx)('div', {
                className: p.headingWrapper,
                children: (0, r.jsx)(i.X6q, {
                    className: p.heading,
                    color: 'header-primary',
                    variant: 'text-xs/semibold',
                    children: n
                })
            }),
            (0, r.jsx)('div', {
                className: p.stepsWrapper,
                children: (0, r.jsx)('ul', {
                    children: o.map((e, t) =>
                        (0, r.jsx)(
                            m,
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
