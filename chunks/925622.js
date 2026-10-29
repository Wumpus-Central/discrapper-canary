n.d(t, { A: () => B });
var i = n(477900),
    s = n(582128),
    r = n(503698),
    l = n.n(r),
    c = n(17928),
    a = n(554146),
    o = n(862482),
    d = n(939249),
    u = n(789645),
    _ = n(403581),
    I = n(34188),
    E = n(297264),
    N = n(993077),
    S = n(315629),
    A = n(366010),
    R = n(688810),
    f = n(815996),
    P = n(915089),
    m = n(47899),
    x = n(826673),
    h = n(501419),
    T = n(725807),
    v = n(465794),
    M = n(976860),
    p = n(967198),
    O = n(183555),
    L = n(38145);
let D = (0, n(945810).mj)({
    name: "2026-10-profile-nitro-upsell-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var j = n(873298),
    k = n(834730),
    U = n(28863),
    F = n(131607),
    C = n(840387),
    g = n(253932),
    y = n(780964),
    b = n(766075),
    V = n(49999),
    Y = n(105292),
    w = n(547522);
function z() {
    let e = (0, C.Z)(),
        t = g.KP.useSetting();
    return s.useMemo(() => (e && t !== j.KP.FRIENDS_AND_ALL_GUILDS ? [a.M.PRIVATE_PROFILE_INLINE_NOTICE] : []), [e, t]);
}
function G(e) {
    let { className: t } = e,
        n = z(),
        [s, r] = (0, F.kn)(n),
        c = g.KP.useSetting();
    if (s !== a.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let o = (function (e) {
        switch (e) {
            case j.KP.FRIENDS_ONLY:
                return Y.t["0UBDvq"];
            case j.KP.FRIENDS_AND_SMALL_GUILDS:
                return Y.t["9AvQO/"];
            case j.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return Y.t.dqQ7AN;
        }
    })(c);
    return (0, i.jsxs)("div", {
        className: l()(w.kL, t),
        children: [
            (0, i.jsx)(k.E, {
                variant: "text-sm/normal",
                className: w.Qq,
                children: Y.intl.format(o, {
                    privacySettingsLink: (e, t) =>
                        (0, i.jsx)(
                            U.Anchor,
                            { onClick: () => (0, b.openUserSettings)(y.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, i.jsx)(d.D, {
                "aria-label": Y.intl.string(Y.t.WAI6xu),
                onClick: () => r(V.i.USER_DISMISS),
                className: w.b,
                children: (0, i.jsx)(u.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
var H = n(939496),
    W = n(993401),
    J = n(518477),
    K = n(652215),
    q = n(202541),
    Z = n(996988),
    Q = n(932454);
function X(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(d.D, {
        "aria-label": Y.intl.string(Y.t.WAI6xu),
        onClick: t,
        className: Q.Sc,
        children: (0, i.jsx)(u.P, { size: "xs", className: Q.Nk, color: "currentColor" }),
    });
}
function $(e) {
    let { tiny: t, isPremiumUser: n, isRefreshEnabled: s, onInteraction: r } = e,
        { analyticsLocations: l, newestAnalyticsLocation: c } = (0, R.Ay)(),
        { trackUserProfileAction: a } = (0, O.NJ)();
    return (0, i.jsxs)("div", {
        className: Q.JO,
        children: [
            (0, i.jsx)("div", {
                className: Q.xB,
                children: n
                    ? (0, i.jsx)(W.FD, {
                          action: J.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: _.t,
                          text: Y.intl.string(Y.t["0Q61kF"]),
                          onClick: () => {
                              ((0, M.pX)(K.BVt.APPLICATION_STORE), (0, L.M)(), r?.());
                          },
                      })
                    : s
                      ? (0, i.jsx)(v.A, {
                            onClick: () => {
                                (a({ action: J.pt.GET_PREMIUM }), r?.());
                            },
                            buttonTextOverride: Y.intl.string(Y.t.x6rkDp),
                            subscriptionTier: q.pe.TIER_2,
                            premiumModalAnalyticsLocation: { section: K.JJy.USER_PROFILE },
                            size: "sm",
                            variantOverride: "secondary",
                            fullWidth: !0,
                        })
                      : (0, i.jsx)(T.A, {
                            onClick: () => {
                                (a({ action: J.pt.GET_PREMIUM }), r?.());
                            },
                            textOptions: { textOverride: Y.intl.string(Y.t.x6rkDp) },
                            subscriptionTier: q.pe.TIER_2,
                            premiumModalAnalyticsLocation: { section: K.JJy.USER_PROFILE },
                            className: Q.Js,
                            size: t ? o.$n.Sizes.TINY : o.$n.Sizes.SMALL,
                            look: o.$n.Looks.FILLED,
                            color: o.$n.Colors.PRIMARY,
                            onlyShineOnHover: !0,
                            fullWidth: !0,
                        }),
            }),
            (0, i.jsx)("div", {
                className: Q.xB,
                children: (0, i.jsx)(W.FD, {
                    action: J.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: I.U,
                    text: Y.intl.string(Y.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        ((0, f.Cz)({ analyticsLocations: l, analyticsSource: c }), r?.());
                    },
                }),
            }),
        ],
    });
}
function B(e) {
    let { isPremiumUser: t, onInteraction: n, className: r } = e,
        l = (function () {
            let e = z(),
                [t] = (0, F.kn)(e);
            return t === a.M.PRIVATE_PROFILE_INLINE_NOTICE;
        })(),
        o = (0, x.HX)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        d = (0, c.bG)([p.A], () => p.A.getGuildId());
    return (s.useEffect(() => {
        if (!o && !l)
            return (
                (0, h.Vh)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                () => {
                    (0, m.pd)({ content: a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                }
            );
    }, [o, l]),
    l)
        ? (0, i.jsx)(G, { className: r })
        : o
          ? null
          : (0, i.jsx)(ee, {
                isPremiumUser: t,
                onInteraction: n,
                className: r,
                onClose: () => {
                    (0, x.Dr)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                        dismissAction: V.i.USER_DISMISS,
                        guildId: d,
                        forceTrack: !0,
                    });
                },
            });
}
function ee(e) {
    let { isPremiumUser: t, onInteraction: n, className: s, onClose: r } = e,
        c = D.useConfig({ location: "UserProfileDismissibleUpsells" }).enabled,
        a = (0, P.GV)(),
        { themeType: o, theme: d } = (0, H.E)(),
        u = o === Z.d.MODAL,
        _ = u ? Q.xq : Q.K1,
        I = l()(Q.Zd, u && Q.Xv),
        R = (0, i.jsx)(E.D, { variant: "text-sm/normal", id: a, children: Y.intl.string(Y.t.EIYbj6) }),
        f = (0, i.jsx)(X, { onClose: r }),
        m = (0, i.jsx)($, { isPremiumUser: t, isRefreshEnabled: c, onInteraction: n, tiny: u }),
        x = u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      R,
                      (0, i.jsxs)("div", {
                          className: Q.A_,
                          children: [(0, i.jsx)("div", { children: m }), (0, i.jsx)("div", { children: f })],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", { className: Q.$P, children: [R, (0, i.jsx)("div", { children: f })] }),
                      m,
                  ],
              });
    return (0, i.jsx)("aside", {
        className: l()(Q.Zj, s),
        "aria-labelledby": a,
        children: c
            ? (0, i.jsx)(N.Z, {
                  type: N.Z.Types.CUSTOM,
                  className: Q.HZ,
                  children: t
                      ? (0, i.jsx)("div", { className: I, children: x })
                      : (0, i.jsx)(S.h, { color: "nitro-pink", className: l()(I, (0, A.q)(d) && Q.s1), children: x }),
              })
            : (0, i.jsx)("div", { className: l()(Q.xw, _), children: x }),
    });
}
