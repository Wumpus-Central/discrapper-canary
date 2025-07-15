n.d(t, { Z: () => d });
var l = n(255367);
n(73800);
var s = n(120356),
    r = n.n(s),
    i = n(481060),
    u = n(192023),
    o = n(373370),
    a = n(644646),
    c = n(817447);
let d = function (e) {
    let { className: t, autoplay: n, quest: s, questContent: d, taskDetails: E, location: S, sourceQuestContent: m } = e,
        T = (0, o.DD)({
            quest: s,
            taskDetails: E,
            location: S,
            questContent: d,
            sourceQuestContent: m
        }),
        A = (0, u.h)({
            location: S,
            questConfig: s.config
        });
    return (0, l.jsxs)('div', {
        className: r()(c.wrapper, t),
        style: A ? void 0 : { color: s.config.colors.primary },
        children: [
            (0, l.jsx)(a.Z, {
                autoplay: n,
                className: c.rewardTile,
                quest: s,
                questContent: d,
                location: S,
                sourceQuestContent: m
            }),
            (0, l.jsx)('div', {
                className: c.copy,
                children: (0, l.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: T
                })
            })
        ]
    });
};
