"use strict";
n.d(t, { A: () => A }), n(321073);
var r = n(627968),
    i = n(311907),
    a = n(554146),
    s = n(102119),
    o = n(563380),
    l = n(47671),
    u = n(346734),
    c = n(332408),
    d = n(233380),
    _ = n(826673),
    f = n(379848),
    p = n(287809),
    h = n(927578),
    m = n(793943),
    g = n(49999),
    E = n(907896);
let A = function (e) {
    let { mobile: t } = e,
        n = (0, i.bG)([p.default], () => h.Ay.canUseClientThemes(p.default.getCurrentUser())),
        A = (0, i.bG)([l.A], () => l.A.isCoachmark),
        I = (0, u.a)(),
        { activePanel: T, metadata: y } = (0, m.fy)(),
        S = [];
    null == T && (A && !n && S.push(a.M.CLIENT_THEMES_COACHMARK), I && n && S.push(a.M.CUSTOM_THEME_COACHMARK));
    let [v, C] = (0, f.kn)(S, g.m.SIDEBAR, !0),
        b = v === a.M.CLIENT_THEMES_COACHMARK,
        N = v === a.M.CUSTOM_THEME_COACHMARK,
        R = T === m.HP.CLIENT_THEMES || b,
        O = T === m.HP.APP_ICON,
        D = T === m.HP.CUSTOM_THEME || N,
        L = T === m.HP.APPLICATION_TEST_MODE_DEBUG;
    if (!(R || O || D || L)) return null;
    let w = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                R &&
                    (0, r.jsx)(c.A, {
                        markAsDismissed: b
                            ? C
                            : () => {
                                  (0, _.Dr)(a.M.CLIENT_THEMES_COACHMARK, {
                                      dismissAction: g.i.INDIRECT_ACTION,
                                      forceTrack: !0,
                                  });
                              },
                        showClientThemesCoachmark: b,
                    }),
                O && (0, r.jsx)(s.A, { isCoachmark: !1, markAsDismissed: C }),
                D && (0, r.jsx)(d.A, { metadata: y ?? {}, markAsDismissed: C, isCoachmark: N, isMobile: t }),
                L && (0, r.jsx)(o.A, {}),
            ],
        });
    return t ? (0, r.jsx)("div", { className: E.A, children: w() }) : w();
};
