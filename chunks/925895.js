s.d(e, { A: () => D });
var n = s(477900),
    i = s(582128),
    a = s(17928),
    l = s(104510),
    r = s(661531),
    o = s(834730),
    c = s(123292),
    u = s(688810),
    d = s(188989),
    A = s(631305),
    E = s(71393),
    x = s(967198),
    N = s(652215),
    _ = s(625633),
    m = s(375708),
    L = s(109876);
function f(t) {
    let { analyticsSection: e, analyticsPage: s, isGIF: i, banner: f } = t,
        I = (0, a.bG)([x.A], () => x.A.getGuildId()),
        U = (0, a.bG)([E.A], () => E.A.getGuild(I)),
        { analyticsLocations: R } = (0, u.Ay)();
    return null == U ||
        U.features.has(N.GuildFeatures.ANIMATED_BANNER) ||
        (!i && U.features.has(N.GuildFeatures.BANNER))
        ? null
        : (0, n.jsxs)("div", {
              className: L.kL,
              children: [
                  (0, n.jsx)(l._, { color: r.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: L.qC }),
                  (0, n.jsx)(o.E, {
                      color: "text-strong",
                      variant: "text-sm/semibold",
                      children: m.intl.string(m.t["56M7xe"]),
                  }),
                  (0, n.jsx)("div", {
                      className: L.xF,
                      children: (0, n.jsx)(c.Q, {
                          text: m.intl.string(m.t.WUHdZV),
                          onClick: function () {
                              if (null == U) return;
                              let t = { section: e, page: s, object: N.ZSU.UPSELL_HEADER };
                              null != f
                                  ? (0, d._)({
                                        analyticsLocations: R,
                                        analyticsLocation: t,
                                        guild: U,
                                        isGIF: i,
                                        banner: f,
                                    })
                                  : (0, A.A)({
                                        analyticsLocations: R,
                                        analyticsSourceLocation: t,
                                        guild: U,
                                        perks: i ? (0, _.Pf)() : (0, _.QR)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
var I = s(862482),
    U = s(793574),
    R = s(10392),
    h = s(82498),
    p = s(725807),
    g = s(503698),
    j = s.n(g),
    P = s(403581),
    k = s(404374),
    b = s(727181);
function v(t) {
    let { text: e, className: s, button: i, reducedRightPadding: a = !1 } = t;
    return (0, n.jsxs)("div", {
        className: j()(a ? b.wp : b.Ug, s),
        children: [
            (0, n.jsxs)("div", {
                className: b.g9,
                children: [
                    (0, n.jsx)(P.t, { size: "md", className: b.Kk, color: k.k0.PREMIUM_TIER_2 }),
                    (0, n.jsx)(o.E, { className: b.Qq, variant: "text-md/normal", color: "text-strong", children: e }),
                ],
            }),
            i,
        ],
    });
}
var S = s(287809),
    M = s(174459),
    y = s(158045),
    G = s(339984),
    C = s(202541),
    T = s(68405);
function H(t) {
    let { analyticsSection: e, type: s } = t,
        l = (0, a.bG)([S.default], () => S.default.getCurrentUser()),
        r = y.Ay.canUseAnimatedAvatar(l),
        o = y.Ay.canUsePremiumProfileCustomization(l),
        c = (s === G.HL.BANNER && o) || (s === G.HL.AVATAR && r),
        { sourceAnalyticsLocations: d } = (0, u.Ay)(U.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (i.useEffect(() => {
            c ||
                (M.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, { type: e, location_stack: d }),
                (0, R.sq)(N.U7l.PREMIUM_UPSELL_VIEWED, d, () => (0, h.uq)(e)));
        }, [c, e, d]),
        c)
    )
        return null;
    let A = (0, n.jsx)(p.A, {
        className: T.__invalid_getNitroLink,
        size: I.$n.Sizes.SMALL,
        look: I.$n.Looks.LINK,
        color: I.$n.Colors.LINK,
        subscriptionTier: C.pe.TIER_2,
        textOptions: { textOverride: m.intl.format(m.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: { section: e, object: N.ZSU.BUTTON_CTA },
        disableShine: !0,
    });
    return (0, n.jsx)(v, { reducedRightPadding: !0, className: T.C, text: m.intl.format(m.t.Og803x, {}), button: A });
}
function D(t) {
    let { type: e, analyticsPage: s, analyticsSection: i, isGIF: a, banner: l } = t;
    return [G.HL.BANNER, G.HL.AVATAR].includes(e) && a
        ? (0, n.jsx)(H, { analyticsSection: i, type: e })
        : e === G.HL.GUILD_BANNER
          ? (0, n.jsx)(f, { analyticsSection: i, analyticsPage: s, isGIF: a, banner: l })
          : null;
}
