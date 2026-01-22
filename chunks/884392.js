n.d(t, { A: () => b });
var r = n(627968),
    i = n(412703),
    a = n(311907),
    s = n(397927),
    o = n(829219),
    l = n(216456),
    c = n(859703),
    u = n(890687),
    d = n(792620),
    f = n(545986),
    p = n(654487),
    _ = n(985018);
function h(e, t) {
    switch (e) {
        case i.n.WATCH_VIDEO:
            return _.intl.string(_.t.umdNin);
        case i.n.ACHIEVEMENT_IN_GAME:
        case i.n.ACHIEVEMENT_IN_ACTIVITY:
            return t.includes(p.Li.START_QUEST_CTA) ? _.intl.string(_.t["hRIVy+"]) : _.intl.string(_.t.l7E81v);
        case i.n.PLAY_ACTIVITY:
            if (t.includes(p.Li.CLOUD_GAMING_ACTIVITY)) return _.intl.string(_.t["+qoymD"]);
            if (t.includes(p.Li.START_QUEST_CTA)) return _.intl.string(_.t["Ie9++s"]);
            return _.intl.string(_.t.l7E81v);
        default:
            return _.intl.string(_.t.kUQLMJ);
    }
}
function m(e) {
    switch (e) {
        case i.n.ACHIEVEMENT_IN_GAME:
        case i.n.ACHIEVEMENT_IN_ACTIVITY:
        case i.n.PLAY_ACTIVITY:
        case i.n.WATCH_VIDEO:
            return l.Cy.START_QUEST;
        default:
            return l.Cy.ACCEPT_QUEST;
    }
}
function g(e, t) {
    let { launchInGameActivity: n } = (0, u.zW)(t);
    if ((0, d.BS)(t))
        return () => {
            (0, f.Fy)(t);
        };
    switch (e) {
        case i.n.ACHIEVEMENT_IN_GAME:
        case i.n.ACHIEVEMENT_IN_ACTIVITY:
        case i.n.PLAY_ACTIVITY:
            if (t.config.features.includes(p.Li.START_QUEST_CTA))
                return () => {
                    n();
                };
            return null;
        default:
            return null;
    }
}
function E(e, t, n, r) {
    return e === i.n.WATCH_VIDEO
        ? async () => {
              await (0, f.e0)(t, {
                  questContent: n.questContent,
                  questContentCTA: n.questContentCTA,
                  sourceQuestContent: n.sourceQuestContent,
                  sourceQuestContentCTA: m(e),
                  questContentPosition: n.questContentPosition,
                  questContentRowIndex: n.questContentRowIndex,
              });
          }
        : async () => {
              await (0, o.Oy)(t.id, {
                  questContent: n.questContent,
                  questContentCTA: n.questContentCTA,
                  sourceQuestContent: n.sourceQuestContent,
                  questContentPosition: n.questContentPosition,
                  questContentRowIndex: n.questContentRowIndex,
              }),
                  null == r || r();
          };
}
let b = function (e) {
    let {
            quest: t,
            taskType: n,
            size: i = "sm",
            preClickCallback: o,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: d,
            analyticsCtxQuestContentRowIndex: p,
        } = e,
        _ = {
            questContent: l,
            questContentCTA: m(n),
            sourceQuestContent: u,
            questContentPosition: d,
            questContentRowIndex: p,
        },
        b = t.id,
        { isEnrolling: y } = (0, a.cf)([c.A], () => ({ isEnrolling: c.A.isEnrolling(b) }), [b]),
        O = (0, f.Oz)(t),
        A = g(n, t),
        v = h(n, t.config.features),
        S = E(n, t, _, null != A ? A : void 0);
    return (0, r.jsx)(s.Button, {
        size: i,
        loading: y,
        variant: "primary",
        onClick: () => {
            null == o || o(), S();
        },
        text: v,
        icon: O,
        fullWidth: !0,
    });
};
