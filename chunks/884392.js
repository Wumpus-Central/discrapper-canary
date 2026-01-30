n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(412703),
    l = n(311907),
    a = n(397927),
    s = n(829219),
    o = n(859703),
    c = n(868031),
    u = n(890687),
    d = n(590202),
    p = n(792620),
    m = n(545986),
    f = n(654487),
    g = n(985018);

function h(e) {
    switch (e) {
        case i.n.ACHIEVEMENT_IN_GAME:
        case i.n.ACHIEVEMENT_IN_ACTIVITY:
        case i.n.PLAY_ACTIVITY:
        case i.n.WATCH_VIDEO:
            return d.Cy.START_QUEST;
        default:
            return d.Cy.ACCEPT_QUEST;
    }
}
let _ = function (e) {
    var t;
    let {
            quest: n,
            taskType: d,
            size: _ = "sm",
            preClickCallback: b,
            analyticsCtxQuestContent: A,
            analyticsCtxSourceQuestContent: y,
            analyticsCtxQuestContentPosition: v,
            analyticsCtxQuestContentRowIndex: x,
        } = e,
        O = {
            questContent: A,
            questContentCTA: h(d),
            sourceQuestContent: y,
            questContentPosition: v,
            questContentRowIndex: x,
        },
        E = n.id,
        { isEnrolling: j } = (0, l.cf)(
            [o.A],
            () => ({
                isEnrolling: o.A.isEnrolling(E),
            }),
            [E],
        ),
        C = (0, m.Oz)(n),
        I = (function (e, t) {
            let { launchInGameActivity: n } = (0, u.zW)(t);
            if ((0, p.BS)(t))
                return () => {
                    (0, m.Fy)(t);
                };
            switch (e) {
                case i.n.ACHIEVEMENT_IN_GAME:
                case i.n.ACHIEVEMENT_IN_ACTIVITY:
                case i.n.PLAY_ACTIVITY:
                    if (t.config.features.includes(f.Li.START_QUEST_CTA))
                        return () => {
                            n();
                        };
                    return null;
                default:
                    return null;
            }
        })(d, n),
        S = (function (e, t) {
            let { features: n } = t.config;
            switch (e) {
                case i.n.WATCH_VIDEO:
                    return (0, c.WB)(t);
                case i.n.ACHIEVEMENT_IN_GAME:
                case i.n.ACHIEVEMENT_IN_ACTIVITY:
                    return n.includes(f.Li.START_QUEST_CTA) ? g.intl.string(g.t["hRIVy+"]) : g.intl.string(g.t.l7E81v);
                case i.n.PLAY_ACTIVITY:
                    if (n.includes(f.Li.CLOUD_GAMING_ACTIVITY)) return g.intl.string(g.t["+qoymD"]);
                    if (n.includes(f.Li.START_QUEST_CTA)) return g.intl.string(g.t["Ie9++s"]);
                    return g.intl.string(g.t.l7E81v);
                default:
                    return g.intl.string(g.t.kUQLMJ);
            }
        })(d, n),
        T =
            ((t = null != I ? I : void 0),
            d === i.n.WATCH_VIDEO
                ? async () => {
                      await (0, m.e0)(n, {
                          questContent: O.questContent,
                          questContentCTA: O.questContentCTA,
                          sourceQuestContent: O.sourceQuestContent,
                          sourceQuestContentCTA: h(d),
                          questContentPosition: O.questContentPosition,
                          questContentRowIndex: O.questContentRowIndex,
                      });
                  }
                : async () => {
                      await (0, s.Oy)(n.id, {
                          questContent: O.questContent,
                          questContentCTA: O.questContentCTA,
                          sourceQuestContent: O.sourceQuestContent,
                          questContentPosition: O.questContentPosition,
                          questContentRowIndex: O.questContentRowIndex,
                      }),
                          null == t || t();
                  });
    return (0, r.jsx)(a.Button, {
        size: _,
        loading: j,
        variant: "primary",
        onClick: () => {
            null == b || b(), T();
        },
        text: S,
        icon: C,
        fullWidth: !0,
    });
};
