l.d(t, { Z: () => p });
var n = l(255367);
l(73800);
var r = l(120356),
    s = l.n(r),
    i = l(481060),
    a = l(192023),
    o = l(467628),
    u = l(373370),
    c = l(65443),
    d = l(644646),
    m = l(46140),
    E = l(817447);
let p = function (e) {
    let { className: t, autoplay: l, quest: r, questContent: p, taskDetails: A, location: S } = e,
        f = (0, u.DD)({
            quest: r,
            taskDetails: A,
            location: S,
            questContent: p
        }),
        j = (0, o.j)({ location: m.dr.QUESTS_BAR_MOBILE }),
        T = (0, a.h)({
            location: S,
            questConfig: r.config
        });
    return (0, n.jsxs)('div', {
        className: s()(E.wrapper, t),
        style: T ? void 0 : { color: r.config.colors.primary },
        children: [
            (0, n.jsx)(d.Z, {
                autoplay: l,
                className: E.rewardTile,
                quest: r,
                questContent: p,
                location: S
            }),
            (0, n.jsxs)('div', {
                className: E.copy,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: f
                    }),
                    j &&
                        (0, n.jsx)(c.Z, {
                            textColor: 'text-muted',
                            withRewardName: !0,
                            quest: r
                        })
                ]
            })
        ]
    });
};
