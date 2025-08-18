n.d(t, { Z: () => d });
var l = n(951288);
n(647438);
var r = n(120356),
    s = n.n(r),
    i = n(481060),
    o = n(192023),
    a = n(373370),
    u = n(644646),
    c = n(73231);
let d = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: r,
            questContent: d,
            taskDetails: E,
            location: m,
            sourceQuestContent: p,
        } = e,
        f = (0, a.DD)({
            quest: r,
            taskDetails: E,
            location: m,
            questContent: d,
            sourceQuestContent: p,
        }),
        j = (0, o.h)({
            location: m,
            questConfig: r.config,
        });
    return (0, l.jsxs)("div", {
        className: s()(c.wrapper, t),
        style: j ? void 0 : { color: r.config.colors.primary },
        children: [
            (0, l.jsx)(u.Z, {
                autoplay: n,
                className: c.rewardTile,
                quest: r,
                questContent: d,
                location: m,
                sourceQuestContent: p,
            }),
            (0, l.jsx)("div", {
                className: c.copy,
                children: (0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: f,
                }),
            }),
        ],
    });
};
