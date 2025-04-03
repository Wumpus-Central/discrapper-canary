l.d(t, { Z: () => S });
var n = l(200651);
l(192379);
var s = l(120356),
    r = l.n(s),
    i = l(481060),
    u = l(467628),
    a = l(373370),
    o = l(65443),
    c = l(160766),
    d = l(644646),
    m = l(46140),
    E = l(817447);
let S = function (e) {
    let { className: t, autoplay: l, quest: s, questContent: S, taskDetails: j, location: p } = e,
        A = (0, a.DD)({
            quest: s,
            taskDetails: j,
            location: p,
            questContent: S
        }),
        f = (0, u.j)({ location: m.dr.QUESTS_BAR_MOBILE });
    return (0, n.jsxs)('div', {
        className: r()(E.wrapper, t),
        style: { color: s.config.colors.primary },
        children: [
            (0, n.jsx)(c.Z, {
                quest: s,
                children: (0, n.jsx)(d.Z, {
                    autoplay: l,
                    className: E.rewardTile,
                    quest: s,
                    questContent: S,
                    location: p
                })
            }),
            (0, n.jsxs)('div', {
                className: E.copy,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: A
                    }),
                    f &&
                        (0, n.jsx)(o.Z, {
                            textColor: 'text-muted',
                            withRewardName: !0,
                            quest: s
                        })
                ]
            })
        ]
    });
};
