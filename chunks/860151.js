n.d(t, { Z: () => T });
var l = n(255367);
n(73800);
var s = n(120356),
    r = n.n(s),
    i = n(481060),
    u = n(192023),
    o = n(467628),
    a = n(373370),
    c = n(65443),
    d = n(644646),
    E = n(46140),
    S = n(817447);
let T = function (e) {
    let { className: t, autoplay: n, quest: s, questContent: T, taskDetails: m, location: A, sourceQuestContent: j } = e,
        _ = (0, a.DD)({
            quest: s,
            taskDetails: m,
            location: A,
            questContent: T,
            sourceQuestContent: j
        }),
        f = (0, o.j)({ location: E.dr.QUESTS_BAR_MOBILE }),
        p = (0, u.h)({
            location: A,
            questConfig: s.config
        });
    return (0, l.jsxs)('div', {
        className: r()(S.wrapper, t),
        style: p ? void 0 : { color: s.config.colors.primary },
        children: [
            (0, l.jsx)(d.Z, {
                autoplay: n,
                className: S.rewardTile,
                quest: s,
                questContent: T,
                location: A,
                sourceQuestContent: j
            }),
            (0, l.jsxs)('div', {
                className: S.copy,
                children: [
                    (0, l.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-default',
                        children: _
                    }),
                    f &&
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
