n.d(t, { A: () => A });
var i = n(627968),
    l = n(412703),
    a = n(311907),
    r = n(397927),
    s = n(829219),
    o = n(859703),
    d = n(868031),
    c = n(890687),
    u = n(590202),
    m = n(792620),
    _ = n(545986),
    h = n(654487),
    p = n(985018);
function g(e) {
    switch (e) {
        case l.n.ACHIEVEMENT_IN_GAME:
        case l.n.ACHIEVEMENT_IN_ACTIVITY:
        case l.n.PLAY_ACTIVITY:
        case l.n.WATCH_VIDEO:
            return u.Cy.START_QUEST;
        default:
            return u.Cy.ACCEPT_QUEST;
    }
}
let A = function (e) {
    var t;
    let {
            quest: n,
            taskType: u,
            size: A = "sm",
            preClickCallback: f,
            analyticsCtxQuestContent: x,
            analyticsCtxSourceQuestContent: E,
            analyticsCtxQuestContentPosition: C,
            analyticsCtxQuestContentRowIndex: I,
        } = e,
        T = {
            questContent: x,
            questContentCTA: g(u),
            sourceQuestContent: E,
            questContentPosition: C,
            questContentRowIndex: I,
        },
        v = n.id,
        { isEnrolling: N } = (0, a.cf)([o.A], () => ({ isEnrolling: o.A.isEnrolling(v) }), [v]),
        S = (0, _.Oz)(n),
        b = (function (e, t) {
            let { launchInGameActivity: n } = (0, c.zW)(t);
            if ((0, m.BS)(t))
                return () => {
                    (0, _.Fy)(t);
                };
            switch (e) {
                case l.n.ACHIEVEMENT_IN_GAME:
                case l.n.ACHIEVEMENT_IN_ACTIVITY:
                case l.n.PLAY_ACTIVITY:
                    if (t.config.features.includes(h.Li.START_QUEST_CTA))
                        return () => {
                            n();
                        };
                    return null;
                default:
                    return null;
            }
        })(u, n),
        y = (function (e, t) {
            let { features: n } = t.config;
            switch (e) {
                case l.n.WATCH_VIDEO:
                    return (0, d.WB)(t);
                case l.n.ACHIEVEMENT_IN_GAME:
                case l.n.ACHIEVEMENT_IN_ACTIVITY:
                    return n.includes(h.Li.START_QUEST_CTA) ? p.intl.string(p.t["hRIVy+"]) : p.intl.string(p.t.l7E81v);
                case l.n.PLAY_ACTIVITY:
                    if (n.includes(h.Li.CLOUD_GAMING_ACTIVITY)) return p.intl.string(p.t["+qoymD"]);
                    if (n.includes(h.Li.START_QUEST_CTA)) return p.intl.string(p.t["Ie9++s"]);
                    return p.intl.string(p.t.l7E81v);
                default:
                    return p.intl.string(p.t.kUQLMJ);
            }
        })(u, n),
        j =
            ((t = b ?? void 0),
            u === l.n.WATCH_VIDEO
                ? async () => {
                      await (0, _.e0)(n, {
                          questContent: T.questContent,
                          questContentCTA: T.questContentCTA,
                          sourceQuestContent: T.sourceQuestContent,
                          sourceQuestContentCTA: g(u),
                          questContentPosition: T.questContentPosition,
                          questContentRowIndex: T.questContentRowIndex,
                      });
                  }
                : async () => {
                      await (0, s.Oy)(n.id, {
                          questContent: T.questContent,
                          questContentCTA: T.questContentCTA,
                          sourceQuestContent: T.sourceQuestContent,
                          questContentPosition: T.questContentPosition,
                          questContentRowIndex: T.questContentRowIndex,
                      }),
                          t?.();
                  });
    return (0, i.jsx)(r.Button, {
        size: A,
        loading: N,
        variant: "primary",
        onClick: () => {
            f?.(), j();
        },
        text: y,
        icon: S,
        fullWidth: !0,
    });
};
