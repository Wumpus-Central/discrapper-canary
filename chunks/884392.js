n.d(e, { A: () => E });
var s = n(627968),
    i = n(412703),
    l = n(17928),
    a = n(821609),
    r = n(829219),
    o = n(859703),
    c = n(890687),
    u = n(590202),
    d = n(792620),
    C = n(545986),
    h = n(654487),
    A = n(985018);
function T(t) {
    switch (t) {
        case i.n.ACHIEVEMENT_IN_ACTIVITY:
        case i.n.PLAY_ACTIVITY:
        case i.n.WATCH_VIDEO:
            return u.Cy.START_QUEST;
        default:
            return u.Cy.ACCEPT_QUEST;
    }
}
let E = function (t) {
    var e;
    let {
            quest: n,
            taskType: u,
            size: E = "sm",
            preClickCallback: g,
            analyticsCtxQuestContent: f,
            analyticsCtxSourceQuestContent: x,
            analyticsCtxQuestContentPosition: m,
            analyticsCtxQuestContentRowIndex: I,
        } = t,
        p = {
            questContent: f,
            questContentCTA: T(u),
            sourceQuestContent: x,
            questContentPosition: m,
            questContentRowIndex: I,
        },
        v = n.id,
        { isEnrolling: _ } = (0, l.cf)([o.A], () => ({ isEnrolling: o.A.isEnrolling(v) }), [v]),
        N = (0, C.Oz)(n),
        w = (function (t, e) {
            let { launchInGameActivity: n } = (0, c.zW)(e);
            if ((0, d.K$)(e))
                return () => {
                    (0, C.Fy)(e);
                };
            switch (t) {
                case i.n.ACHIEVEMENT_IN_ACTIVITY:
                case i.n.PLAY_ACTIVITY:
                    return () => {
                        n();
                    };
                default:
                    return null;
            }
        })(u, n),
        y = (function (t, e) {
            let { features: n } = e.config;
            switch (t) {
                case i.n.WATCH_VIDEO:
                    return A.intl.formatToPlainString(A.t.GNsKiW, { remainTime: (0, d.xm)((0, d.Yh)(e)) });
                case i.n.ACHIEVEMENT_IN_ACTIVITY:
                    return A.intl.string(A.t.CkUzLd);
                case i.n.PLAY_ACTIVITY:
                    if (n.includes(h.Li.CLOUD_GAMING_ACTIVITY)) return A.intl.string(A.t["+qoymD"]);
                    return A.intl.string(A.t.E4kW5O);
                default:
                    return A.intl.string(A.t.kUQLMJ);
            }
        })(u, n),
        M =
            ((e = w ?? void 0),
            u === i.n.WATCH_VIDEO
                ? async () => {
                      await (0, C.e0)(n, {
                          questContent: p.questContent,
                          questContentCTA: p.questContentCTA,
                          sourceQuestContent: p.sourceQuestContent,
                          sourceQuestContentCTA: T(u),
                          questContentPosition: p.questContentPosition,
                          questContentRowIndex: p.questContentRowIndex,
                      });
                  }
                : async () => {
                      await (0, r.Oy)(n.id, {
                          questContent: p.questContent,
                          questContentCTA: p.questContentCTA,
                          sourceQuestContent: p.sourceQuestContent,
                          questContentPosition: p.questContentPosition,
                          questContentRowIndex: p.questContentRowIndex,
                      }),
                          e?.();
                  });
    return (0, s.jsx)(a.$, {
        size: E,
        loading: _,
        variant: "primary",
        onClick: () => {
            g?.(), M();
        },
        text: y,
        icon: N,
        fullWidth: !0,
    });
};
