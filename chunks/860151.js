n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(481060),
    l = n(467628),
    a = n(373370),
    c = n(65443),
    u = n(160766),
    d = n(644646),
    m = n(46140),
    p = n(869518);
let x = function (e) {
    let { className: t, autoplay: n, quest: s, questContent: x, taskDetails: g, location: f } = e,
        h = (0, a.DD)({
            quest: s,
            taskDetails: g,
            location: f,
            questContent: x
        }),
        j = (0, l.j)({ location: m.dr.QUESTS_BAR_MOBILE });
    return (0, r.jsxs)('div', {
        className: i()(p.wrapper, t),
        style: { color: s.config.colors.primary },
        children: [
            (0, r.jsx)(u.Z, {
                quest: s,
                children: (0, r.jsx)(d.Z, {
                    autoplay: n,
                    className: p.rewardTile,
                    quest: s,
                    questContent: x,
                    location: f
                })
            }),
            (0, r.jsxs)('div', {
                className: p.copy,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: h
                    }),
                    j &&
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
