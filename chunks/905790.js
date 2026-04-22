"use strict";
n.d(t, { A: () => y }), n(321073);
var r = n(627968),
    i = n(311907),
    s = n(554146),
    a = n(102119),
    o = n(47671),
    l = n(346734),
    u = n(826673),
    d = n(932001),
    c = n(186111),
    _ = n(287809),
    f = n(927578),
    E = n(268218),
    h = n(793943),
    p = n(49999),
    m = n(805627),
    g = n(45945);
function A() {
    return (0, r.jsx)("div", { "data-app-right-panel": !0, className: g.kL });
}
let I = (0, E.Fe)({
        createPromise: () => Promise.all([n.e("11250"), n.e("66996")]).then(n.bind(n, 332408)),
        webpackId: 332408,
        renderLoader: A,
    }),
    T = (0, E.Fe)({
        createPromise: () => Promise.all([n.e("11250"), n.e("51200")]).then(n.bind(n, 233380)),
        webpackId: 233380,
        renderLoader: A,
    }),
    S = (0, E.Fe)({
        createPromise: () => Promise.all([n.e("36682"), n.e("33049")]).then(n.bind(n, 563380)),
        webpackId: 563380,
    }),
    y = function (e) {
        let { mobile: t } = e,
            n = (0, i.bG)([_.default], () => f.Ay.canUseClientThemes(_.default.getCurrentUser())),
            E = (0, i.bG)([o.A], () => o.A.isCoachmark),
            g = (0, l.a)(),
            { activePanel: A, metadata: y } = (0, h.fy)(),
            N = (0, i.bG)([c.A], () => c.A.hasLayers()),
            O = [];
        null == A &&
            !N &&
            (E && !n && O.push(s.M.CLIENT_THEMES_COACHMARK), g && n && O.push(s.M.CUSTOM_THEME_COACHMARK));
        let [R, v] = (0, d.kn)(O, p.m.SIDEBAR, !0),
            C = R === s.M.CLIENT_THEMES_COACHMARK,
            b = R === s.M.CUSTOM_THEME_COACHMARK,
            D = A === h.HP.CLIENT_THEMES || C,
            L = A === h.HP.APP_ICON,
            w = A === h.HP.CUSTOM_THEME || b,
            M = A === h.HP.APPLICATION_TEST_MODE_DEBUG;
        if (!(D || L || w || M)) return null;
        let P = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    D &&
                        (0, r.jsx)(I, {
                            markAsDismissed: C
                                ? v
                                : () => {
                                      (0, u.Dr)(s.M.CLIENT_THEMES_COACHMARK, {
                                          dismissAction: p.i.INDIRECT_ACTION,
                                          forceTrack: !0,
                                      });
                                  },
                            showClientThemesCoachmark: C,
                        }),
                    L && (0, r.jsx)(a.A, { isCoachmark: !1, markAsDismissed: v }),
                    w && (0, r.jsx)(T, { metadata: y ?? {}, markAsDismissed: v, isCoachmark: b, isMobile: t }),
                    M && (0, r.jsx)(S, {}),
                ],
            });
        return t ? (0, r.jsx)("div", { className: m.A, children: P() }) : P();
    };
