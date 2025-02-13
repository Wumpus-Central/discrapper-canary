n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var s = n(481060),
    l = n(388032),
    r = n(162890);
let a = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: a, hasBoostPerk: o, canAddBoosts: c } = e;
    return (0, i.jsxs)('div', {
        className: r.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: r.guildBoostGemWrapper,
                children: (0, i.jsx)('img', {
                    alt: '',
                    className: r.guildBoostGem,
                    src: n(908635)
                })
            }),
            (0, i.jsxs)('div', {
                className: r.gradient,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'display-md',
                        className: r.heading,
                        children: (function (e) {
                            let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: i, canAddBoosts: s } = e;
                            return s ? (t ? (i && !n ? l.intl.format(l.t.s9zQyM, {}) : l.intl.format(l.t.Rb8Jho, {})) : l.intl.string(l.t['2rh0b2'])) : l.intl.format(l.t.Rb8Jho, {});
                        })({
                            hasGuildBoostSlots: t,
                            hasBoostPerk: o,
                            hasAppliedGuildBoosts: a,
                            canAddBoosts: c
                        })
                    }),
                    (0, i.jsx)('svg', {
                        viewBox: '0 0 660 210',
                        className: r.wave,
                        children: (0, i.jsx)('path', { d: 'M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z' })
                    })
                ]
            })
        ]
    });
};
