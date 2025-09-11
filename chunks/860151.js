n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(685138),
    l = n(373370),
    c = n(644646),
    u = n(73231);
let d = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: i,
            questContent: d,
            taskDetails: f,
            location: _,
            sourceQuestContent: p,
        } = e,
        h = (0, l.DD)({
            quest: i,
            taskDetails: f,
            location: _,
            questContent: d,
            sourceQuestContent: p,
        }),
        m = (0, s.n)({
            location: _,
            questConfig: i.config,
        }).enabled;
    return (0, r.jsxs)("div", {
        className: a()(u.wrapper, t),
        style: m ? void 0 : { color: i.config.colors.primary },
        children: [
            (0, r.jsx)(c.Z, {
                autoplay: n,
                className: u.rewardTile,
                quest: i,
                questContent: d,
                location: _,
                sourceQuestContent: p,
            }),
            (0, r.jsx)("div", {
                className: u.copy,
                children: (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: h,
                }),
            }),
        ],
    });
};
