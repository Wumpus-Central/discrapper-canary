n.d(t, { A: () => g });
var i = n(627968),
    l = n(412703),
    r = n(311907),
    a = n(397927),
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
        case l.n.ACHIEVEMENT_IN_GAME:
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
            variant: A = "primary",
            preClickCallback: x,
            analyticsCtxQuestContent: f,
            analyticsCtxSourceQuestContent: C,
            analyticsCtxQuestContentPosition: E,
            analyticsCtxQuestContentRowIndex: I,
        } = e,
        b = {
            questContent: f,
            questContentCTA: p(c),
            sourceQuestContent: C,
            questContentPosition: E,
            questContentRowIndex: I,
        },
        T = n.id,
        { isEnrolling: v } = (0, r.cf)([o.A], () => ({ isEnrolling: o.A.isEnrolling(T) }), [T]),
        S = (0, _.Oz)(n),
        y = (function (e, t) {
            let { launchInGameActivity: n } = (0, d.zW)(t);
            if ((0, u.K$)(t))
                return () => {
                    (0, _.Fy)(t);
                };
            switch (e) {
                case l.n.ACHIEVEMENT_IN_GAME:
                case l.n.ACHIEVEMENT_IN_ACTIVITY:
                case l.n.PLAY_ACTIVITY:
                    if (t.config.features.includes(m.Li.START_QUEST_CTA))
                        return () => {
                            n();
                        };
                    return null;
                default:
                    return null;
            }
        })(c, n),
        N = (function (e, t) {
            let { features: n } = t.config;
            switch (e) {
                case l.n.WATCH_VIDEO:
                    return h.intl.formatToPlainString(h.t.GNsKiW, { remainTime: (0, u.xm)((0, u.Yh)(t)) });
                case l.n.ACHIEVEMENT_IN_GAME:
                case l.n.ACHIEVEMENT_IN_ACTIVITY:
                    return n.includes(m.Li.START_QUEST_CTA) ? h.intl.string(h.t["hRIVy+"]) : h.intl.string(h.t.l7E81v);
                case l.n.PLAY_ACTIVITY:
                    if (n.includes(m.Li.CLOUD_GAMING_ACTIVITY)) return h.intl.string(h.t["+qoymD"]);
                    if (n.includes(m.Li.START_QUEST_CTA)) return h.intl.string(h.t["Ie9++s"]);
                    return h.intl.string(h.t.l7E81v);
                default:
                    return h.intl.string(h.t.kUQLMJ);
            }
        })(c, n),
        j =
            ((t = y ?? void 0),
            c === l.n.WATCH_VIDEO
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
    return (0, i.jsx)(a.Button, {
        size: g,
        loading: v,
        variant: A,
        onClick: () => {
            x?.(), j();
        },
        text: N,
        icon: S,
        fullWidth: !0,
    });
};
