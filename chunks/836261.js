n.d(t, { A: () => I });
var i = n(627968),
    l = n(311907),
    a = n(862482),
    s = n(821609),
    r = n(775602),
    o = n(178540),
    d = n(341915),
    c = n(890687),
    u = n(18437),
    m = n(590202),
    _ = n(971649),
    h = n(901406),
    p = n(792620),
    g = n(201805),
    A = n(79545),
    f = n(985018),
    x = n(263752);
function C(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: s,
            analyticsCtxQuestContentPosition: d,
            analyticsCtxQuestContentRowIndex: _,
        } = e,
        h = (0, u.Ut)(),
        p = (0, l.bG)([r.A], () => r.A.useReducedMotion),
        A = (0, g.Xf)({ useReducedMotion: p }),
        C = (0, o.O)((e) => e.setErrorHints),
        { startingConsoleQuest: E, startConsoleQuest: I } = (0, c.Wj)({
            questId: t.id,
            beforeRequest: () => {
                A.startAnimation(),
                    h({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: m.Cy.DEFIBRILLATOR,
                        questContentPosition: d,
                        questContentRowIndex: _,
                        sourceQuestContent: s,
                    });
            },
            afterRequest: (e) => {
                A.stopAnimation(), C(t.id, e);
            },
        });
    return (0, i.jsx)(a.$n, {
        "data-migration-pending": !0,
        color: a.XD.PRIMARY,
        onClick: I,
        disabled: E,
        className: x.x,
        children: (0, i.jsxs)("div", { className: x.t, children: [A.render(), f.intl.string(f.t.nPThNb)] }),
    });
}
function E(e) {
    let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: o,
            size: u,
        } = e,
        p = (0, c.RR)({ quest: t }),
        g = (0, _.vU)()?.getId(),
        x = (0, c.Vn)(t),
        E = (0, c.fc)(t),
        [I, v, b] = (0, c.Qo)(t, E);
    return x || I === d.X0.DESKTOP
        ? (0, i.jsx)(s.$, {
              variant: "secondary",
              size: u,
              disabled: !0,
              text: f.intl.string(f.t["9KoPyB"]),
              fullWidth: !0,
          })
        : p && n === A.V3.QUEST_HOME_TILE_FOOTER
          ? (0, i.jsx)(s.$, {
                size: u,
                variant: "secondary",
                onClick: () => {
                    (0, h.se)(
                        { quest: t },
                        {
                            content: l,
                            ctaContent: m.Cy.CONNECT_CONSOLE,
                            position: r,
                            rowIndex: o,
                            impressionId: g,
                            sourceQuestContent: a,
                        },
                    );
                },
                text: f.intl.string(f.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, i.jsx)(C, {
                quest: t,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: o,
            });
}
let I = function (e) {
    let {
        quest: t,
        surface: n,
        analyticsCtxQuestContent: l,
        analyticsCtxSourceQuestContent: a,
        analyticsCtxQuestContentPosition: r,
        analyticsCtxQuestContentRowIndex: o,
        size: d,
    } = e;
    if ((0, p.g5)(t) && n === A.V3.QUEST_HOME_TILE_FOOTER)
        return (0, i.jsx)(E, {
            quest: t,
            surface: n,
            size: d,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: o,
        });
    let c = f.intl.string(f.t["9KoPyB"]);
    return (0, i.jsx)(s.$, { size: d, variant: "secondary", disabled: !0, text: c, fullWidth: !0 });
};
