n.d(t, { Z: () => m });
var l = n(255367);
n(73800);
var s = n(120356),
    r = n.n(s),
    i = n(481060),
    o = n(192023),
    u = n(467628),
    a = n(373370),
    c = n(65443),
    d = n(644646),
    E = n(46140),
    S = n(817447);
let m = function (e) {
    let { className: t, autoplay: n, quest: s, questContent: m, taskDetails: T, location: A, sourceQuestContent: j } = e,
        _ = (0, a.DD)({
            quest: s,
            taskDetails: T,
            location: A,
            questContent: m,
            sourceQuestContent: j
        }),
        p = (0, u.j)({ location: E.dr.QUESTS_BAR_MOBILE }),
        f = (0, o.h)({
            location: A,
            questConfig: s.config
        });
    return (0, l.jsxs)('div', {
        className: r()(S.wrapper, t),
        style: f ? void 0 : { color: s.config.colors.primary },
        children: [
            (0, l.jsx)(d.Z, {
                autoplay: n,
                className: S.rewardTile,
                quest: s,
                questContent: m,
                location: A,
                sourceQuestContent: j
            }),
            (0, l.jsxs)('div', {
                className: S.copy,
                children: [
                    (0, l.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: _
                    }),
                    p &&
                        (0, l.jsx)(c.Z, {
                            textColor: 'text-muted',
                            withRewardName: !0,
                            quest: s
                        })
                ]
            })
        ]
    });
};
