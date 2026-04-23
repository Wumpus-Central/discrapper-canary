s.d(t, { A: () => d });
var n = s(627968);
s(64700);
var l = s(323889),
    a = s(573613),
    r = s(331322),
    i = s(341915),
    o = s(73473),
    c = s(562595),
    u = s(648731);
function d(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: d } = e;
    return (0, n.jsx)("div", {
        className: u.v,
        children: (0, n.jsx)(a.Ip, {
            orientation: "horizontal",
            fade: !0,
            children: (0, n.jsxs)(r.B, {
                direction: "horizontal",
                gap: 20,
                children: [
                    (0, n.jsx)(o.R, {
                        adContentId: t.id,
                        adCreativeType: l.p.QUEST_HOME_HERO,
                        questContent: i.uF.QUEST_HOME_HERO_SHELF,
                        questContentPosition: 0,
                        sourceQuestContent: i.uF.QUEST_HOME_HERO_SHELF,
                        children: (e) =>
                            (0, n.jsx)("div", {
                                ref: (t) => {
                                    e.current = t;
                                },
                                children: (0, n.jsx)(c.l, { hero: t, contentPosition: 0 }),
                            }),
                    }),
                    s.map((e, t) =>
                        (0, n.jsx)(
                            o.R,
                            {
                                questOrQuests: e,
                                questContent: i.uF.QUEST_HOME_HERO_SHELF,
                                questContentPosition: t + 1,
                                sourceQuestContent: i.uF.QUEST_HOME_HERO_SHELF,
                                children: (s) =>
                                    (0, n.jsx)("div", {
                                        ref: (e) => {
                                            s.current = e;
                                        },
                                        children: (0, n.jsx)(c.B, {
                                            quest: e,
                                            onQuestCtaClick: d,
                                            contentPosition: t + 1,
                                        }),
                                    }),
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        }),
    });
}
