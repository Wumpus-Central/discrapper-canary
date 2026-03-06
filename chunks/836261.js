n.d(t, { A: () => I });
var i = n(627968),
    l = n(311907),
    r = n(421380),
    a = n(397927),
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
    f = n(242859);
function C(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: d,
            analyticsCtxQuestContentRowIndex: m,
        } = e,
        h = (0, u.Ut)(),
        p = (0, l.bG)([s.A], () => s.A.useReducedMotion),
        A = (0, g.Xf)({ useReducedMotion: p }),
        C = (0, o.O)((e) => e.setErrorHints),
        { startingConsoleQuest: E, startConsoleQuest: I } = (0, c.Wj)({
            questId: t.id,
            beforeRequest: () => {
                A.startAnimation(),
                    h({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: _.Cy.DEFIBRILLATOR,
                        questContentPosition: d,
                        questContentRowIndex: m,
                        sourceQuestContent: a,
                    });
            },
            afterRequest: (e) => {
                A.stopAnimation(), C(t.id, e);
            },
        });
    return (0, i.jsx)(r.$n, {
        "data-migration-pending": !0,
        color: r.XD.PRIMARY,
        onClick: I,
        disabled: E,
        className: f.x,
        children: (0, i.jsxs)("div", { className: f.t, children: [A.render(), x.intl.string(x.t.nPThNb)] }),
    });
}
function E(e) {
    let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: s,
            analyticsCtxQuestContentRowIndex: o,
            size: u,
        } = e,
        p = (0, c.RR)({ quest: t }),
        g = (0, m.vU)()?.getId(),
        f = (0, c.Vn)(t),
        E = (0, c.fc)(t),
        [I, b, T] = (0, c.Qo)(t, E);
    return f || I === d.X0.DESKTOP
        ? (0, i.jsx)(a.Button, {
              variant: "secondary",
              size: u,
              disabled: !0,
              text: x.intl.string(x.t["9KoPyB"]),
              fullWidth: !0,
          })
        : p && n === A.V3.QUEST_HOME_TILE_FOOTER
          ? (0, i.jsx)(a.Button, {
                size: u,
                variant: "secondary",
                onClick: () => {
                    (0, h.se)(
                        { quest: t },
                        {
                            content: l,
                            ctaContent: _.Cy.CONNECT_CONSOLE,
                            position: s,
                            rowIndex: o,
                            impressionId: g,
                            sourceQuestContent: r,
                        },
                    );
                },
                text: x.intl.string(x.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, i.jsx)(C, {
                quest: t,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: s,
                analyticsCtxQuestContentRowIndex: o,
            });
}
let I = function (e) {
    let {
        quest: t,
        surface: n,
        analyticsCtxQuestContent: l,
        analyticsCtxSourceQuestContent: r,
        analyticsCtxQuestContentPosition: s,
        analyticsCtxQuestContentRowIndex: o,
        size: d,
    } = e;
    return (0, p.g5)(t) && n === A.V3.QUEST_HOME_TILE_FOOTER
        ? (0, i.jsx)(E, {
              quest: t,
              surface: n,
              size: d,
              analyticsCtxQuestContent: l,
              analyticsCtxSourceQuestContent: r,
              analyticsCtxQuestContentPosition: s,
              analyticsCtxQuestContentRowIndex: o,
          })
        : (0, i.jsx)(a.Button, {
              size: d,
              variant: "secondary",
              disabled: !0,
              text: x.intl.string(x.t["9KoPyB"]),
              fullWidth: !0,
          });
};
