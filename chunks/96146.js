n.d(t, { Ay: () => h });
var i = n(627968),
    l = n(412703),
    a = n(821609),
    s = n(890687),
    r = n(590202),
    o = n(792620),
    d = n(814793),
    c = n(753386),
    u = n(545986),
    m = n(654487),
    _ = n(985018);
let h = function (e) {
    let { quest: t, taskType: n, analyticsCtxQuestContent: h, analyticsCtxSourceQuestContent: p, size: g } = e,
        A = (0, s.fc)(t),
        f = (function (e, t, n, i) {
            let { launchInGameActivity: l } = (0, s.zW)(e);
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
                          l();
                      }
                    : null;
        })(t, h, p, l.o.VIDEO.has(n) ? r.Cy.WATCH_VIDEO : (0, d.vA)(t) ? r.Cy.START_QUEST : r.Cy.ACCEPT_QUEST),
        x = (0, u.Oz)(t),
        C = (function (e, t) {
            if ((0, o.K$)(e)) return _.intl.string(_.t.IsH2Sp);
            if ((0, o.IO)(e)) return (0, c.WM)(t);
            if ((0, d.vA)(e))
                return (0, o.Ov)(e)
                    ? _.intl.string(_.t.CkUzLd)
                    : (0, o.vl)(e)
                      ? e.config.features.includes(m.Li.CLOUD_GAMING_ACTIVITY)
                          ? _.intl.string(_.t["+qoymD"])
                          : _.intl.string(_.t.E4kW5O)
                      : _.intl.string(_.t.l7E81v);
            return _.intl.string(_.t["9KoPyB"]);
        })(t, A);
    return null == f
        ? (0, i.jsx)(a.$, { size: g, variant: "secondary", disabled: !0, text: C, fullWidth: !0 })
        : (0, i.jsx)(a.$, { size: g, variant: "primary", onClick: f, text: C, icon: x, fullWidth: !0 });
};
