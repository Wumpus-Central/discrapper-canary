n.d(t, { Ay: () => p });
var i = n(627968),
    r = n(412703),
    a = n(397927),
    l = n(890687),
    s = n(590202),
    o = n(792620),
    d = n(814793),
    c = n(753386),
    u = n(545986),
    _ = n(79545),
    m = n(654487),
    h = n(985018);
let p = function (e) {
    let {
            quest: t,
            taskType: n,
            surface: p,
            analyticsCtxQuestContent: g,
            analyticsCtxSourceQuestContent: A,
            size: x,
        } = e,
        f = (0, l.fc)(t),
        C = (function (e, t, n, i) {
            let { launchInGameActivity: r } = (0, l.zW)(e);
            return (0, o.K$)(e)
                ? () => {
                      (0, u.Fy)(e);
                  }
                : (0, o.IO)(e)
                  ? () => {
                        (0, u.d5)({ quest: e, questContent: t, sourceQuestContent: n, sourceQuestContentCTA: i });
                    }
                  : (0, d.vA)(e)
                    ? () => {
                          r();
                      }
                    : null;
        })(t, g, A, r.o.VIDEO.has(n) ? s.Cy.WATCH_VIDEO : (0, d.vA)(t) ? s.Cy.START_QUEST : s.Cy.ACCEPT_QUEST),
        I = (0, u.Oz)(t),
        E = (function (e, t, n) {
            if ((0, o.K$)(t)) return h.intl.string(h.t.IsH2Sp);
            if ((0, o.IO)(t)) return (0, c.WM)(n);
            if ((0, d.vA)(t))
                return (0, o.Ov)(t)
                    ? h.intl.string(h.t["hRIVy+"])
                    : (0, o.vl)(t)
                      ? t.config.features.includes(m.Li.CLOUD_GAMING_ACTIVITY)
                          ? h.intl.string(h.t["+qoymD"])
                          : h.intl.string(h.t["Ie9++s"])
                      : h.intl.string(h.t.l7E81v);
            return h.intl.string(h.t["9KoPyB"]);
        })(0, t, f);
    if (null == C) {
        let e = p === _.V3.QUEST_EMBED_CARD ? h.intl.string(h.t.cfY4PE) : E;
        return (0, i.jsx)(a.Button, { size: x, variant: "secondary", disabled: !0, text: e, fullWidth: !0 });
    }
    return (0, i.jsx)(a.Button, { size: x, variant: "primary", onClick: C, text: E, icon: I, fullWidth: !0 });
};
