"use strict";
n.d(t, { A: () => I }), n(321073);
var r = n(627968),
    i = n(311907),
    s = n(554146),
    a = n(102119),
    o = n(563380),
    l = n(47671),
    u = n(346734),
    c = n(332408),
    d = n(233380),
    _ = n(826673),
    f = n(932001),
    p = n(186111),
    h = n(287809),
    m = n(927578),
    E = n(793943),
    g = n(49999),
    A = n(487422);
let I = function (e) {
    let { mobile: t } = e,
        n = (0, i.bG)([h.default], () => m.Ay.canUseClientThemes(h.default.getCurrentUser())),
        I = (0, i.bG)([l.A], () => l.A.isCoachmark),
        T = (0, u.a)(),
        { activePanel: S, metadata: y } = (0, E.fy)(),
        v = (0, i.bG)([p.A], () => p.A.hasLayers()),
        N = [];
    null == S && !v && (I && !n && N.push(s.M.CLIENT_THEMES_COACHMARK), T && n && N.push(s.M.CUSTOM_THEME_COACHMARK));
    let [C, R] = (0, f.kn)(N, g.m.SIDEBAR, !0),
        O = C === s.M.CLIENT_THEMES_COACHMARK,
        b = C === s.M.CUSTOM_THEME_COACHMARK,
        D = S === E.HP.CLIENT_THEMES || O,
        L = S === E.HP.APP_ICON,
        w = S === E.HP.CUSTOM_THEME || b,
        M = S === E.HP.APPLICATION_TEST_MODE_DEBUG;
    if (!(D || L || w || M)) return null;
    let x = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                D &&
                    (0, r.jsx)(c.A, {
                        markAsDismissed: O
                            ? R
                            : () => {
                                  (0, _.Dr)(s.M.CLIENT_THEMES_COACHMARK, {
                                      dismissAction: g.i.INDIRECT_ACTION,
                                      forceTrack: !0,
                                  });
                              },
                        showClientThemesCoachmark: O,
                    }),
                L && (0, r.jsx)(a.A, { isCoachmark: !1, markAsDismissed: R }),
                w && (0, r.jsx)(d.A, { metadata: y ?? {}, markAsDismissed: R, isCoachmark: b, isMobile: t }),
                M && (0, r.jsx)(o.A, {}),
            ],
        });
    return t ? (0, r.jsx)("div", { className: A.A, children: x() }) : x();
};
