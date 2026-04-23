"use strict";
n.d(t, { A: () => y }), n(321073);
var r = n(627968),
    i = n(311907),
    s = n(554146),
    a = n(102119),
    o = n(47671),
    l = n(346734),
    u = n(826673),
    c = n(932001),
    d = n(186111),
    _ = n(287809),
    f = n(927578),
    p = n(268218),
    h = n(793943),
    E = n(49999),
    m = n(805627),
    g = n(45945);
function A() {
    return (0, r.jsx)("div", { "data-app-right-panel": !0, className: g.kL });
}
let I = (0, p.Fe)({ createPromise: () => n.e("66996").then(n.bind(n, 332408)), webpackId: 332408, renderLoader: A }),
    T = (0, p.Fe)({ createPromise: () => n.e("51200").then(n.bind(n, 233380)), webpackId: 233380, renderLoader: A }),
    S = (0, p.Fe)({ createPromise: () => n.e("33049").then(n.bind(n, 563380)), webpackId: 563380 }),
    y = function (e) {
        let { mobile: t } = e,
            n = (0, i.bG)([_.default], () => f.Ay.canUseClientThemes(_.default.getCurrentUser())),
            p = (0, i.bG)([o.A], () => o.A.isCoachmark),
            g = (0, l.a)(),
            { activePanel: A, metadata: y } = (0, h.fy)(),
            N = (0, i.bG)([d.A], () => d.A.hasLayers()),
            v = [];
        null == A &&
            !N &&
            (p && !n && v.push(s.M.CLIENT_THEMES_COACHMARK), g && n && v.push(s.M.CUSTOM_THEME_COACHMARK));
        let [C, O] = (0, c.kn)(v, E.m.SIDEBAR, !0),
            R = C === s.M.CLIENT_THEMES_COACHMARK,
            b = C === s.M.CUSTOM_THEME_COACHMARK,
            D = A === h.HP.CLIENT_THEMES || R,
            L = A === h.HP.APP_ICON,
            w = A === h.HP.CUSTOM_THEME || b,
            M = A === h.HP.APPLICATION_TEST_MODE_DEBUG;
        if (!(D || L || w || M)) return null;
        let P = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    D &&
                        (0, r.jsx)(I, {
                            markAsDismissed: R
                                ? O
                                : () => {
                                      (0, u.Dr)(s.M.CLIENT_THEMES_COACHMARK, {
                                          dismissAction: E.i.INDIRECT_ACTION,
                                          forceTrack: !0,
                                      });
                                  },
                            showClientThemesCoachmark: R,
                        }),
                    L && (0, r.jsx)(a.A, { isCoachmark: !1, markAsDismissed: O }),
                    w && (0, r.jsx)(T, { metadata: y ?? {}, markAsDismissed: O, isCoachmark: b, isMobile: t }),
                    M && (0, r.jsx)(S, {}),
                ],
            });
        return t ? (0, r.jsx)("div", { className: m.A, children: P() }) : P();
    };
