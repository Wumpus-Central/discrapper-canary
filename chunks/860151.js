n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(481060),
    l = n(467628),
    a = n(373370),
    c = n(65443),
    u = n(644646),
    d = n(46140),
    m = n(445546);
let p = function (e) {
    let { className: t, autoplay: n, quest: s, questContent: p, taskDetails: x, location: g } = e,
        h = (0, a.DD)({
            quest: s,
            taskDetails: x,
            location: g,
            questContent: p
        }),
        f = (0, l.j)({ location: d.dr.QUESTS_BAR_MOBILE });
    return (0, r.jsxs)('div', {
        className: i()(m.wrapper, t),
        style: { color: s.config.colors.primary },
        children: [
            (0, r.jsx)(u.Z, {
                autoplay: n,
                className: m.rewardTile,
                quest: s,
                questContent: p,
                location: g
            }),
            (0, r.jsxs)('div', {
                className: m.copy,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: h
                    }),
                    f &&
                        (0, r.jsx)(c.Z, {
                            textColor: 'text-muted',
                            withRewardName: !0,
                            quest: s
                        })
                ]
            })
        ]
    });
};
