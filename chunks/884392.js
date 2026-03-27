n.d(t, { A: () => g });
var i = n(627968),
    a = n(412703),
    r = n(311907),
    l = n(397927),
    s = n(829219),
    o = n(859703),
    d = n(890687),
    c = n(590202),
    u = n(792620),
    _ = n(545986),
    m = n(654487),
    h = n(985018);
function p(e) {
    switch (e) {
        case a.n.ACHIEVEMENT_IN_ACTIVITY:
        case a.n.PLAY_ACTIVITY:
        case a.n.WATCH_VIDEO:
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
            variant: A = "primary",
            preClickCallback: x,
            analyticsCtxQuestContent: f,
            analyticsCtxSourceQuestContent: C,
            analyticsCtxQuestContentPosition: I,
            analyticsCtxQuestContentRowIndex: E,
        } = e,
        b = {
            questContent: f,
            questContentCTA: p(c),
            sourceQuestContent: C,
            questContentPosition: I,
            questContentRowIndex: E,
        },
        v = n.id,
        { isEnrolling: T } = (0, r.cf)([o.A], () => ({ isEnrolling: o.A.isEnrolling(v) }), [v]),
        y = (0, _.Oz)(n),
        S = (function (e, t) {
            let { launchInGameActivity: n } = (0, d.zW)(t);
            if ((0, u.K$)(t))
                return () => {
                    (0, _.Fy)(t);
                };
            switch (e) {
                case a.n.ACHIEVEMENT_IN_ACTIVITY:
                case a.n.PLAY_ACTIVITY:
                    return () => {
                        n();
                    };
                default:
                    return null;
            }
        })(c, n),
        N = (function (e, t) {
            let { features: n } = t.config;
            switch (e) {
                case a.n.WATCH_VIDEO:
                    return h.intl.formatToPlainString(h.t.GNsKiW, { remainTime: (0, u.xm)((0, u.Yh)(t)) });
                case a.n.ACHIEVEMENT_IN_ACTIVITY:
                    return h.intl.string(h.t["hRIVy+"]);
                case a.n.PLAY_ACTIVITY:
                    if (n.includes(m.Li.CLOUD_GAMING_ACTIVITY)) return h.intl.string(h.t["+qoymD"]);
                    return h.intl.string(h.t["Ie9++s"]);
                default:
                    return h.intl.string(h.t.kUQLMJ);
            }
        })(c, n),
        j =
            ((t = S ?? void 0),
            c === a.n.WATCH_VIDEO
                ? async () => {
                      await (0, _.e0)(n, {
                          questContent: b.questContent,
                          questContentCTA: b.questContentCTA,
                          sourceQuestContent: b.sourceQuestContent,
                          sourceQuestContentCTA: p(c),
                          questContentPosition: b.questContentPosition,
                          questContentRowIndex: b.questContentRowIndex,
                      });
                  }
                : async () => {
                      await (0, s.Oy)(n.id, {
                          questContent: b.questContent,
                          questContentCTA: b.questContentCTA,
                          sourceQuestContent: b.sourceQuestContent,
                          questContentPosition: b.questContentPosition,
                          questContentRowIndex: b.questContentRowIndex,
                      }),
                          t?.();
                  });
    return (0, i.jsx)(l.Button, {
        size: g,
        loading: T,
        variant: A,
        onClick: () => {
            x?.(), j();
        },
        text: N,
        icon: y,
        fullWidth: !0,
    });
};
