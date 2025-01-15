var i = n(200651);
n(192379);
var s = n(481060),
    r = n(388032),
    a = n(597479);
t.Z = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: l, hasBoostPerk: o, canAddBoosts: c } = e;
    return (0, i.jsxs)('div', {
        className: a.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: a.guildBoostGemWrapper,
                children: (0, i.jsx)('img', {
                    alt: '',
                    className: a.guildBoostGem,
                    src: n(908635)
                })
            }),
            (0, i.jsxs)('div', {
                className: a.gradient,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'display-md',
                        className: a.heading,
                        children: (function (e) {
                            let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: i, canAddBoosts: s } = e;
                            return s ? (t ? (i && !n ? r.intl.format(r.t.s9zQyM, {}) : r.intl.format(r.t.Rb8Jho, {})) : r.intl.string(r.t['2rh0b2'])) : r.intl.format(r.t.Rb8Jho, {});
                        })({
                            hasGuildBoostSlots: t,
                            hasBoostPerk: o,
                            hasAppliedGuildBoosts: l,
                            canAddBoosts: c
                        })
                    }),
                    (0, i.jsx)('svg', {
                        viewBox: '0 0 660 210',
                        className: a.wave,
                        children: (0, i.jsx)('path', { d: 'M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z' })
                    })
                ]
            })
        ]
    });
};
