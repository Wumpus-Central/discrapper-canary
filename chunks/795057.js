n.d(t, {
    Om: () => h,
    ZP: () => g,
    y3: () => x
});
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(481060),
    l = n(918701),
    c = n(373370),
    d = n(566078),
    u = n(388032),
    p = n(276169);
function m(e) {
    let { children: t, isComplete: n, hasNextStep: r } = e;
    return (0, s.jsxs)('li', {
        className: o()(p.stepWrapper, { [p.stepWrapperComplete]: n }, { [p.stepWrapperWithNextStep]: r }),
        children: [
            (0, s.jsxs)('div', {
                className: p.stepIndicator,
                children: [
                    (0, s.jsx)('div', {
                        className: p.stepIconWrapper,
                        children:
                            n &&
                            (0, s.jsx)(i.sV5, {
                                className: p.stepIcon,
                                color: i.TVs.colors.WHITE
                            })
                    }),
                    r && (0, s.jsx)('div', { className: p.stepConnector })
                ]
            }),
            (0, s.jsx)('div', {
                className: p.stepContent,
                children: t
            })
        ]
    });
}
function x(e) {
    let { children: t } = e;
    return (0, s.jsx)(i.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: t
    });
}
function h(e) {
    let { quest: t } = e,
        { rewardName: n, rewardDuration: a } = r.useMemo(
            () => ({
                rewardName: d.r.build(t.config).defaultReward.messages.name,
                rewardDuration: (0, l.Kr)(t.config)
            }),
            [t.config]
        ),
        o = (0, c.mK)(t.config);
    return (0, s.jsxs)('div', {
        className: p.rewardsListWrapper,
        children: [
            (0, s.jsx)(i.X6q, {
                color: 'header-primary',
                variant: 'text-xs/semibold',
                children: null == a ? u.intl.string(u.t['7Rdjmp']) : u.intl.formatToPlainString(u.t.coKAb2, { rewardsDuration: a })
            }),
            (0, s.jsx)('ul', {
                className: p.rewardsListBody,
                children: (0, s.jsx)(i.Text, {
                    tag: 'li',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: n
                })
            }),
            null != o &&
                (0, s.jsx)(i.Text, {
                    className: p.rewardsListPremiumDurationExtension,
                    variant: 'text-xs/semibold',
                    children: o
                })
        ]
    });
}
let g = function (e) {
    let { children: t, heading: n, steps: r } = e;
    return (0, s.jsxs)('div', {
        className: p.wrapper,
        children: [
            (0, s.jsx)('div', {
                className: p.headingWrapper,
                children: (0, s.jsx)(i.X6q, {
                    className: p.heading,
                    color: 'header-primary',
                    variant: 'text-xs/semibold',
                    children: n
                })
            }),
            (0, s.jsx)('div', {
                className: p.stepsWrapper,
                children: (0, s.jsx)('ul', {
                    children: r.map((e, t) =>
                        (0, s.jsx)(
                            m,
                            {
                                isComplete: e.isComplete,
                                hasNextStep: t < r.length - 1,
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
