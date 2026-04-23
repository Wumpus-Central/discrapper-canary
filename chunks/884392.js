n.d(t, { A: () => g });
var i = n(627968),
    l = n(412703),
    a = n(311907),
    s = n(821609),
    r = n(829219),
    o = n(859703),
    d = n(890687),
    c = n(590202),
    u = n(792620),
    m = n(545986),
    _ = n(654487),
    h = n(985018);
function p(e) {
    switch (e) {
        case l.n.ACHIEVEMENT_IN_ACTIVITY:
        case l.n.PLAY_ACTIVITY:
        case l.n.WATCH_VIDEO:
            return c.Cy.START_QUEST;
        default:
            return c.Cy.ACCEPT_QUEST;
    }
}
let g = function (e) {
    var t;
    let {
            quest: n,
            taskType: c,
            size: g = "sm",
            preClickCallback: A,
            analyticsCtxQuestContent: f,
            analyticsCtxSourceQuestContent: x,
            analyticsCtxQuestContentPosition: C,
            analyticsCtxQuestContentRowIndex: E,
        } = e,
        I = {
            questContent: f,
            questContentCTA: p(c),
            sourceQuestContent: x,
            questContentPosition: C,
            questContentRowIndex: E,
        },
        v = n.id,
        { isEnrolling: b } = (0, a.cf)([o.A], () => ({ isEnrolling: o.A.isEnrolling(v) }), [v]),
        T = (0, m.Oz)(n),
        S = (function (e, t) {
            let { launchInGameActivity: n } = (0, d.zW)(t);
            if ((0, u.K$)(t))
                return () => {
                    (0, m.Fy)(t);
                };
            switch (e) {
                case l.n.ACHIEVEMENT_IN_ACTIVITY:
                case l.n.PLAY_ACTIVITY:
                    return () => {
                        n();
                    };
                default:
                    return null;
            }
        })(c, n),
        y = (function (e, t) {
            let { features: n } = t.config;
            switch (e) {
                case l.n.WATCH_VIDEO:
                    return h.intl.formatToPlainString(h.t.GNsKiW, { remainTime: (0, u.xm)((0, u.Yh)(t)) });
                case l.n.ACHIEVEMENT_IN_ACTIVITY:
                    return h.intl.string(h.t.CkUzLd);
                case l.n.PLAY_ACTIVITY:
                    if (n.includes(_.Li.CLOUD_GAMING_ACTIVITY)) return h.intl.string(h.t["+qoymD"]);
                    return h.intl.string(h.t.E4kW5O);
                default:
                    return h.intl.string(h.t.kUQLMJ);
            }
        })(c, n),
        N =
            ((t = S ?? void 0),
            c === l.n.WATCH_VIDEO
                ? async () => {
                      await (0, m.e0)(n, {
                          questContent: I.questContent,
                          questContentCTA: I.questContentCTA,
                          sourceQuestContent: I.sourceQuestContent,
                          sourceQuestContentCTA: p(c),
                          questContentPosition: I.questContentPosition,
                          questContentRowIndex: I.questContentRowIndex,
                      });
                  }
                : async () => {
                      await (0, r.Oy)(n.id, {
                          questContent: I.questContent,
                          questContentCTA: I.questContentCTA,
                          sourceQuestContent: I.sourceQuestContent,
                          questContentPosition: I.questContentPosition,
                          questContentRowIndex: I.questContentRowIndex,
                      }),
                          t?.();
                  });
    return (0, i.jsx)(s.$, {
        size: g,
        loading: b,
        variant: "primary",
        onClick: () => {
            A?.(), N();
        },
        text: y,
        icon: T,
        fullWidth: !0,
    });
};
