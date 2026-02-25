n.d(t, { A: () => E });
var i = n(627968),
    l = n(311907),
    r = n(421380),
    a = n(397927),
    s = n(775602),
    o = n(341915),
    d = n(890687),
    c = n(18437),
    u = n(590202),
    _ = n(971649),
    m = n(901406),
    h = n(792620),
    p = n(201805),
    g = n(79545),
    A = n(985018),
    x = n(242859);
function f(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: _,
        } = e,
        m = (0, c.Ut)(),
        h = (0, l.bG)([s.A], () => s.A.useReducedMotion),
        g = (0, p.Xf)({ useReducedMotion: h }),
        { startingConsoleQuest: f, startConsoleQuest: C } = (0, d.Wj)({
            questId: t.id,
            beforeRequest: () => {
                g.startAnimation(),
                    m({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: u.Cy.DEFIBRILLATOR,
                        questContentPosition: o,
                        questContentRowIndex: _,
                        sourceQuestContent: a,
                    });
            },
            afterRequest: (e) => {
                g.stopAnimation();
            },
        });
    return (0, i.jsx)(r.$n, {
        "data-migration-pending": !0,
        color: r.XD.PRIMARY,
        onClick: C,
        disabled: f,
        className: x.x,
        children: (0, i.jsxs)("div", { className: x.t, children: [g.render(), A.intl.string(A.t.nPThNb)] }),
    });
}
function C(e) {
    let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: s,
            analyticsCtxQuestContentRowIndex: c,
            size: h,
        } = e,
        p = (0, d.RR)({ quest: t }),
        x = (0, _.vU)()?.getId(),
        C = (0, d.Vn)(t),
        E = (0, d.fc)(t),
        [I, b, T] = (0, d.Qo)(t, E);
    return C || I === o.X0.DESKTOP
        ? (0, i.jsx)(a.Button, {
              variant: "secondary",
              size: h,
              disabled: !0,
              text: A.intl.string(A.t["9KoPyB"]),
              fullWidth: !0,
          })
        : p && n === g.V3.QUEST_HOME_TILE_FOOTER
          ? (0, i.jsx)(a.Button, {
                size: h,
                variant: "secondary",
                onClick: () => {
                    (0, m.se)(
                        { quest: t },
                        {
                            content: l,
                            ctaContent: u.Cy.CONNECT_CONSOLE,
                            position: s,
                            rowIndex: c,
                            impressionId: x,
                            sourceQuestContent: r,
                        },
                    );
                },
                text: A.intl.string(A.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, i.jsx)(f, {
                quest: t,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: s,
                analyticsCtxQuestContentRowIndex: c,
            });
}
let E = function (e) {
    let {
        quest: t,
        surface: n,
        analyticsCtxQuestContent: l,
        analyticsCtxSourceQuestContent: r,
        analyticsCtxQuestContentPosition: s,
        analyticsCtxQuestContentRowIndex: o,
        size: d,
    } = e;
    return (0, h.g5)(t) && n === g.V3.QUEST_HOME_TILE_FOOTER
        ? (0, i.jsx)(C, {
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
              text: A.intl.string(A.t["9KoPyB"]),
              fullWidth: !0,
          });
};
