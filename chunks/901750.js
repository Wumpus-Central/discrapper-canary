n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(388032),
    o = n(632357);
function s(e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: r, canAddBoosts: i } = e;
    return i
        ? t
            ? r && !n
                ? a.intl.format(a.t.s9zQyG, {})
                : a.intl.format(a.t.Rb8Jhs, {})
            : a.intl.string(a.t["2rh0by"])
        : a.intl.format(a.t.Rb8Jhs, {});
}
let l = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: a, hasBoostPerk: l, canAddBoosts: c } = e;
    return (0, r.jsxs)("div", {
        className: o.wrapper,
        children: [
            (0, r.jsx)("div", {
                className: o.guildBoostGemWrapper,
                children: (0, r.jsx)("img", {
                    alt: "",
                    className: o.guildBoostGem,
                    src: n(908635),
                }),
            }),
            (0, r.jsxs)("div", {
                className: o.gradient,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "display-md",
                        className: o.heading,
                        children: s({
                            hasGuildBoostSlots: t,
                            hasBoostPerk: l,
                            hasAppliedGuildBoosts: a,
                            canAddBoosts: c,
                        }),
                    }),
                    (0, r.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: o.wave,
                        children: (0, r.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
