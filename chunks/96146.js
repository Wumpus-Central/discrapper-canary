n.d(t, { Ay: () => h });
var i = n(627968),
    a = n(412703),
    r = n(397927),
    l = n(890687),
    s = n(590202),
    o = n(792620),
    d = n(814793),
    c = n(753386),
    u = n(545986),
    _ = n(654487),
    m = n(985018);
let h = function (e) {
    let { quest: t, taskType: n, analyticsCtxQuestContent: h, analyticsCtxSourceQuestContent: p, size: g } = e,
        A = (0, l.fc)(t),
        x = (function (e, t, n, i) {
            let { launchInGameActivity: a } = (0, l.zW)(e);
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
                          a();
                      }
                    : null;
        })(t, h, p, a.o.VIDEO.has(n) ? s.Cy.WATCH_VIDEO : (0, d.vA)(t) ? s.Cy.START_QUEST : s.Cy.ACCEPT_QUEST),
        f = (0, u.Oz)(t),
        C = (function (e, t, n) {
            if ((0, o.K$)(t)) return m.intl.string(m.t.IsH2Sp);
            if ((0, o.IO)(t)) return (0, c.WM)(n);
            if ((0, d.vA)(t))
                return (0, o.Ov)(t)
                    ? m.intl.string(m.t["hRIVy+"])
                    : (0, o.vl)(t)
                      ? t.config.features.includes(_.Li.CLOUD_GAMING_ACTIVITY)
                          ? m.intl.string(m.t["+qoymD"])
                          : m.intl.string(m.t["Ie9++s"])
                      : m.intl.string(m.t.l7E81v);
            return m.intl.string(m.t["9KoPyB"]);
        })(0, t, A);
    return null == x
        ? (0, i.jsx)(r.Button, { size: g, variant: "secondary", disabled: !0, text: C, fullWidth: !0 })
        : (0, i.jsx)(r.Button, { size: g, variant: "primary", onClick: x, text: C, icon: f, fullWidth: !0 });
};
