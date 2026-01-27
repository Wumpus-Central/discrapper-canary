n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(412703),
    l = n(311907),
    a = n(397927),
    s = n(829219),
    o = n(859703),
    c = n(890687),
    u = n(590202),
    d = n(792620),
    p = n(545986),
    m = n(654487),
    f = n(985018);

function g(e) {
    switch (e) {
        case i.n.ACHIEVEMENT_IN_GAME:
        case i.n.ACHIEVEMENT_IN_ACTIVITY:
        case i.n.PLAY_ACTIVITY:
        case i.n.WATCH_VIDEO:
            return u.Cy.START_QUEST;
        default:
            return u.Cy.ACCEPT_QUEST;
    }
}
let h = function (e) {
    var t;
    let {
            quest: n,
            taskType: u,
            size: h = "sm",
            preClickCallback: _,
            analyticsCtxQuestContent: b,
            analyticsCtxSourceQuestContent: A,
            analyticsCtxQuestContentPosition: y,
            analyticsCtxQuestContentRowIndex: v,
        } = e,
        x = {
            questContent: b,
            questContentCTA: g(u),
            sourceQuestContent: A,
            questContentPosition: y,
            questContentRowIndex: v,
        },
        O = n.id,
        { isEnrolling: E } = (0, l.cf)(
            [o.A],
            () => ({
                isEnrolling: o.A.isEnrolling(O),
            }),
            [O],
        ),
        j = (0, p.Oz)(n),
        C = (function (e, t) {
            let { launchInGameActivity: n } = (0, c.zW)(t);
            if ((0, d.BS)(t))
                return () => {
                    (0, p.Fy)(t);
                };
            switch (e) {
                case i.n.ACHIEVEMENT_IN_GAME:
                case i.n.ACHIEVEMENT_IN_ACTIVITY:
                case i.n.PLAY_ACTIVITY:
                    if (t.config.features.includes(m.Li.START_QUEST_CTA))
                        return () => {
                            n();
                        };
                    return null;
                default:
                    return null;
            }
        })(u, n),
        I = (function (e, t) {
            switch (e) {
                case i.n.WATCH_VIDEO:
                    return f.intl.string(f.t.umdNin);
                case i.n.ACHIEVEMENT_IN_GAME:
                case i.n.ACHIEVEMENT_IN_ACTIVITY:
                    return t.includes(m.Li.START_QUEST_CTA) ? f.intl.string(f.t["hRIVy+"]) : f.intl.string(f.t.l7E81v);
                case i.n.PLAY_ACTIVITY:
                    if (t.includes(m.Li.CLOUD_GAMING_ACTIVITY)) return f.intl.string(f.t["+qoymD"]);
                    if (t.includes(m.Li.START_QUEST_CTA)) return f.intl.string(f.t["Ie9++s"]);
                    return f.intl.string(f.t.l7E81v);
                default:
                    return f.intl.string(f.t.kUQLMJ);
            }
        })(u, n.config.features),
        S =
            ((t = null != C ? C : void 0),
            u === i.n.WATCH_VIDEO
                ? async () => {
                      await (0, p.e0)(n, {
                          questContent: x.questContent,
                          questContentCTA: x.questContentCTA,
                          sourceQuestContent: x.sourceQuestContent,
                          sourceQuestContentCTA: g(u),
                          questContentPosition: x.questContentPosition,
                          questContentRowIndex: x.questContentRowIndex,
                      });
                  }
                : async () => {
                      await (0, s.Oy)(n.id, {
                          questContent: x.questContent,
                          questContentCTA: x.questContentCTA,
                          sourceQuestContent: x.sourceQuestContent,
                          questContentPosition: x.questContentPosition,
                          questContentRowIndex: x.questContentRowIndex,
                      }),
                          null == t || t();
                  });
    return (0, r.jsx)(a.Button, {
        size: h,
        loading: E,
        variant: "primary",
        onClick: () => {
            null == _ || _(), S();
        },
        text: I,
        icon: j,
        fullWidth: !0,
    });
};
