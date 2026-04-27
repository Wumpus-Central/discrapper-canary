n.d(t, { A: () => T });
var i = n(627968),
    r = n(412703),
    s = n(17928),
    l = n(821609),
    a = n(829219),
    d = n(859703),
    o = n(890687),
    _ = n(590202),
    u = n(792620),
    c = n(545986),
    E = n(654487),
    C = n(985018);
function h(e) {
    switch (e) {
        case r.n.ACHIEVEMENT_IN_ACTIVITY:
        case r.n.PLAY_ACTIVITY:
        case r.n.WATCH_VIDEO:
            return _.Cy.START_QUEST;
        default:
            return _.Cy.ACCEPT_QUEST;
    }
}
let T = function (e) {
    var t;
    let {
            quest: n,
            taskType: _,
            size: T = "sm",
            preClickCallback: A,
            analyticsCtxQuestContent: I,
            analyticsCtxSourceQuestContent: f,
            analyticsCtxQuestContentPosition: m,
            analyticsCtxQuestContentRowIndex: g,
        } = e,
        p = {
            questContent: I,
            questContentCTA: h(_),
            sourceQuestContent: f,
            questContentPosition: m,
            questContentRowIndex: g,
        },
        S = n.id,
        { isEnrolling: x } = (0, s.cf)([d.A], () => ({ isEnrolling: d.A.isEnrolling(S) }), [S]),
        N = (0, c.Oz)(n),
        v = (function (e, t) {
            let { launchInGameActivity: n } = (0, o.zW)(t);
            if ((0, u.K$)(t))
                return () => {
                    (0, c.Fy)(t);
                };
            switch (e) {
                case r.n.ACHIEVEMENT_IN_ACTIVITY:
                case r.n.PLAY_ACTIVITY:
                    return () => {
                        n();
                    };
                default:
                    return null;
            }
        })(_, n),
        b = (function (e, t) {
            let { features: n } = t.config;
            switch (e) {
                case r.n.WATCH_VIDEO:
                    return C.intl.formatToPlainString(C.t.GNsKiW, { remainTime: (0, u.xm)((0, u.Yh)(t)) });
                case r.n.ACHIEVEMENT_IN_ACTIVITY:
                    return C.intl.string(C.t.CkUzLd);
                case r.n.PLAY_ACTIVITY:
                    if (n.includes(E.Li.CLOUD_GAMING_ACTIVITY)) return C.intl.string(C.t["+qoymD"]);
                    return C.intl.string(C.t.E4kW5O);
                default:
                    return C.intl.string(C.t.kUQLMJ);
            }
        })(_, n),
        O =
            ((t = v ?? void 0),
            _ === r.n.WATCH_VIDEO
                ? async () => {
                      await (0, c.e0)(n, {
                          questContent: p.questContent,
                          questContentCTA: p.questContentCTA,
                          sourceQuestContent: p.sourceQuestContent,
                          sourceQuestContentCTA: h(_),
                          questContentPosition: p.questContentPosition,
                          questContentRowIndex: p.questContentRowIndex,
                      });
                  }
                : async () => {
                      await (0, a.Oy)(n.id, {
                          questContent: p.questContent,
                          questContentCTA: p.questContentCTA,
                          sourceQuestContent: p.sourceQuestContent,
                          questContentPosition: p.questContentPosition,
                          questContentRowIndex: p.questContentRowIndex,
                      }),
                          t?.();
                  });
    return (0, i.jsx)(l.$, {
        size: T,
        loading: x,
        variant: "primary",
        onClick: () => {
            A?.(), O();
        },
        text: b,
        icon: N,
        fullWidth: !0,
    });
};
