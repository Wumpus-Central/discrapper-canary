l.d(t, { Z: () => m });
var n = l(255367);
l(73800);
var s = l(120356),
    r = l.n(s),
    i = l(481060),
    u = l(467628),
    o = l(373370),
    a = l(65443),
    c = l(644646),
    d = l(46140),
    E = l(683934);
let m = function (e) {
    let { className: t, autoplay: l, quest: s, questContent: m, taskDetails: S, location: p } = e,
        A = (0, o.DD)({
            quest: s,
            taskDetails: S,
            location: p,
            questContent: m
        }),
        j = (0, u.j)({ location: d.dr.QUESTS_BAR_MOBILE });
    return (0, n.jsxs)('div', {
        className: r()(E.wrapper, t),
        style: { color: s.config.colors.primary },
        children: [
            (0, n.jsx)(c.Z, {
                autoplay: l,
                className: E.rewardTile,
                quest: s,
                questContent: m,
                location: p
            }),
            (0, n.jsxs)('div', {
                className: E.copy,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: A
                    }),
                    j &&
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
