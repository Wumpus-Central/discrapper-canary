l.d(t, { Z: () => E });
var n = l(200651);
l(192379);
var s = l(120356),
    r = l.n(s),
    i = l(481060),
    o = l(467628),
    u = l(373370),
    a = l(65443),
    c = l(644646),
    d = l(46140),
    m = l(817447);
let E = function (e) {
    let { className: t, autoplay: l, quest: s, questContent: E, taskDetails: S, location: p } = e,
        j = (0, u.DD)({
            quest: s,
            taskDetails: S,
            location: p,
            questContent: E
        }),
        A = (0, o.j)({ location: d.dr.QUESTS_BAR_MOBILE });
    return (0, n.jsxs)('div', {
        className: r()(m.wrapper, t),
        style: { color: s.config.colors.primary },
        children: [
            (0, n.jsx)(c.Z, {
                autoplay: l,
                className: m.rewardTile,
                quest: s,
                questContent: E,
                location: p
            }),
            (0, n.jsxs)('div', {
                className: m.copy,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: j
                    }),
                    A &&
                        (0, n.jsx)(a.Z, {
                            textColor: 'text-muted',
                            withRewardName: !0,
                            quest: s
                        })
                ]
            })
        ]
    });
};
