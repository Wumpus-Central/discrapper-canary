n.d(t, { Z: () => x });
var s = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    r = n(467628),
    o = n(373370),
    d = n(65443),
    u = n(644646),
    c = n(46140),
    m = n(56233);
let x = function (e) {
    let { className: t, autoplay: n, quest: i, questContent: x, taskDetails: h, location: g } = e,
        C = (0, o.DD)({
            quest: i,
            taskDetails: h,
            location: g,
            questContent: x
        }),
        p = (0, r.j)({ location: c.dr.QUESTS_BAR_MOBILE });
    return (0, s.jsxs)('div', {
        className: l()(m.wrapper, t),
        style: { color: i.config.colors.primary },
        children: [
            (0, s.jsx)(u.Z, {
                autoplay: n,
                className: m.rewardTile,
                quest: i,
                questContent: x,
                location: g
            }),
            (0, s.jsxs)('div', {
                className: m.copy,
                children: [
                    (0, s.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: C
                    }),
                    p &&
                        (0, s.jsx)(d.Z, {
                            textColor: 'text-muted',
                            withRewardName: !0,
                            quest: i
                        })
                ]
            })
        ]
    });
};
