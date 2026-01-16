n.d(t, { Z: () => b });
var r = n(54381),
    i = n(754700),
    a = n(442837),
    o = n(481060),
    s = n(22095),
    l = n(617136),
    c = n(616022),
    u = n(968843),
    d = n(254579),
    f = n(110560),
    p = n(324805),
    _ = n(388032);
function h(e, t) {
    switch (e) {
        case i.X.WATCH_VIDEO:
            return _.intl.string(_.t.umdNin);
        case i.X.ACHIEVEMENT_IN_GAME:
        case i.X.ACHIEVEMENT_IN_ACTIVITY:
            return t.includes(p.S7.START_QUEST_CTA) ? _.intl.string(_.t["hRIVy+"]) : _.intl.string(_.t.l7E81v);
        case i.X.PLAY_ACTIVITY:
            if (t.includes(p.S7.CLOUD_GAMING_ACTIVITY)) return _.intl.string(_.t["+qoymD"]);
            if (t.includes(p.S7.START_QUEST_CTA)) return _.intl.string(_.t["Ie9++s"]);
            return _.intl.string(_.t.l7E81v);
        default:
            return _.intl.string(_.t.kUQLMJ);
    }
}
function m(e) {
    switch (e) {
        case i.X.ACHIEVEMENT_IN_GAME:
        case i.X.ACHIEVEMENT_IN_ACTIVITY:
        case i.X.PLAY_ACTIVITY:
        case i.X.WATCH_VIDEO:
            return l.jZ.START_QUEST;
        default:
            return l.jZ.ACCEPT_QUEST;
    }
}
function g(e, t) {
    let { launchInGameActivity: n } = (0, u.zB)(t);
    if ((0, d.HJ)(t))
        return () => {
            (0, f.openPushToPhoneModal)(t);
        };
    switch (e) {
        case i.X.ACHIEVEMENT_IN_GAME:
        case i.X.ACHIEVEMENT_IN_ACTIVITY:
        case i.X.PLAY_ACTIVITY:
            if (t.config.features.includes(p.S7.START_QUEST_CTA))
                return () => {
                    n();
                };
            return null;
        default:
            return null;
    }
}
function E(e, t, n, r) {
    return e === i.X.WATCH_VIDEO
        ? async () => {
              await (0, f.enrollAndStartVideoQuestWithErrorHandling)(t, {
                  questContent: n.questContent,
                  questContentCTA: n.questContentCTA,
                  sourceQuestContent: n.sourceQuestContent,
                  sourceQuestContentCTA: m(e),
                  questContentPosition: n.questContentPosition,
                  questContentRowIndex: n.questContentRowIndex,
              });
          }
        : async () => {
              await (0, s.AH)(t.id, {
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
            preClickCallback: s,
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
        { isEnrolling: y } = (0, a.cj)([c.Z], () => ({ isEnrolling: c.Z.isEnrolling(b) }), [b]),
        O = (0, f.getPrimaryCtaIcon)(t),
        v = g(n, t),
        S = h(n, t.config.features),
        I = E(n, t, _, null != v ? v : void 0);
    return (0, r.jsx)(o.Button, {
        size: i,
        loading: y,
        variant: "primary",
        onClick: () => {
            null == s || s(), I();
        },
        text: S,
        icon: O,
        fullWidth: !0,
    });
};
