n.d(t, { Z: () => a });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(388032),
    l = n(947239);
let a = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: a, hasBoostPerk: o, canAddBoosts: c } = e;
    return (0, i.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: l.guildBoostGemWrapper,
                children: (0, i.jsx)('img', {
                    alt: '',
                    className: l.guildBoostGem,
                    src: n(908635)
                })
            }),
            (0, i.jsxs)('div', {
                className: l.gradient,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'display-md',
                        className: l.heading,
                        children: (function (e) {
                            let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: i, canAddBoosts: r } = e;
                            return r ? (t ? (i && !n ? s.intl.format(s.t.s9zQyM, {}) : s.intl.format(s.t.Rb8Jho, {})) : s.intl.string(s.t['2rh0b2'])) : s.intl.format(s.t.Rb8Jho, {});
                        })({
                            hasGuildBoostSlots: t,
                            hasBoostPerk: o,
                            hasAppliedGuildBoosts: a,
                            canAddBoosts: c
                        })
                    }),
                    (0, i.jsx)('svg', {
                        viewBox: '0 0 660 210',
                        className: l.wave,
                        children: (0, i.jsx)('path', { d: 'M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z' })
                    })
                ]
            })
        ]
    });
};
