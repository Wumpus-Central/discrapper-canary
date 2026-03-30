n.d(t, { A: () => E });
var i = n(627968),
    r = n(311907),
    a = n(421380),
    l = n(397927),
    s = n(775602),
    o = n(178540),
    d = n(341915),
    c = n(890687),
    u = n(18437),
    _ = n(590202),
    m = n(971649),
    h = n(901406),
    p = n(792620),
    g = n(201805),
    A = n(79545),
    x = n(985018),
    f = n(595416);
function C(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: d,
            analyticsCtxQuestContentRowIndex: m,
        } = e,
        h = (0, u.Ut)(),
        p = (0, r.bG)([s.A], () => s.A.useReducedMotion),
        A = (0, g.Xf)({ useReducedMotion: p }),
        C = (0, o.O)((e) => e.setErrorHints),
        { startingConsoleQuest: I, startConsoleQuest: E } = (0, c.Wj)({
            questId: t.id,
            beforeRequest: () => {
                A.startAnimation(),
                    h({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: _.Cy.DEFIBRILLATOR,
                        questContentPosition: d,
                        questContentRowIndex: m,
                        sourceQuestContent: l,
                    });
            },
            afterRequest: (e) => {
                A.stopAnimation(), C(t.id, e);
            },
        });
    return (0, i.jsx)(a.$n, {
        "data-migration-pending": !0,
        color: a.XD.PRIMARY,
        onClick: E,
        disabled: I,
        className: f.x,
        children: (0, i.jsxs)("div", { className: f.t, children: [A.render(), x.intl.string(x.t.nPThNb)] }),
    });
}
function I(e) {
    let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: s,
            analyticsCtxQuestContentRowIndex: o,
            size: u,
        } = e,
        p = (0, c.RR)({ quest: t }),
        g = (0, m.vU)()?.getId(),
        f = (0, c.Vn)(t),
        I = (0, c.fc)(t),
        [E, b, v] = (0, c.Qo)(t, I);
    return f || E === d.X0.DESKTOP
        ? (0, i.jsx)(l.Button, {
              variant: "secondary",
              size: u,
              disabled: !0,
              text: x.intl.string(x.t["9KoPyB"]),
              fullWidth: !0,
          })
        : p && n === A.V3.QUEST_HOME_TILE_FOOTER
          ? (0, i.jsx)(l.Button, {
                size: u,
                variant: "secondary",
                onClick: () => {
                    (0, h.se)(
                        { quest: t },
                        {
                            content: r,
                            ctaContent: _.Cy.CONNECT_CONSOLE,
                            position: s,
                            rowIndex: o,
                            impressionId: g,
                            sourceQuestContent: a,
                        },
                    );
                },
                text: x.intl.string(x.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, i.jsx)(C, {
                quest: t,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: s,
                analyticsCtxQuestContentRowIndex: o,
            });
}
let E = function (e) {
    let {
        quest: t,
        surface: n,
        analyticsCtxQuestContent: r,
        analyticsCtxSourceQuestContent: a,
        analyticsCtxQuestContentPosition: s,
        analyticsCtxQuestContentRowIndex: o,
        size: d,
    } = e;
    if ((0, p.g5)(t) && n === A.V3.QUEST_HOME_TILE_FOOTER)
        return (0, i.jsx)(I, {
            quest: t,
            surface: n,
            size: d,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: s,
            analyticsCtxQuestContentRowIndex: o,
        });
    let c = x.intl.string(x.t["9KoPyB"]);
    return (0, i.jsx)(l.Button, { size: d, variant: "secondary", disabled: !0, text: c, fullWidth: !0 });
};
