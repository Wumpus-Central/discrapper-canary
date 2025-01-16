var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    o = n(585500),
    a = n(644646),
    u = n(56233);
t.Z = function (e) {
    let { className: t, autoplay: n, quest: s, questContent: c, taskDetails: d, location: m } = e,
        x = (0, o.D)({
            quest: s,
            taskDetails: d,
            location: m,
            questContent: c
        });
    return (0, i.jsxs)('div', {
        className: l()(u.wrapper, t),
        style: { color: s.config.colors.primary },
        children: [
            (0, i.jsx)(a.Z, {
                autoplay: n,
                className: u.rewardTile,
                quest: s,
                questContent: c,
                location: m
            }),
            (0, i.jsx)(r.Text, {
                className: u.instructions,
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: x
            })
        ]
    });
};
