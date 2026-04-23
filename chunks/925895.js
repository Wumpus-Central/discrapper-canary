i.d(t, { A: () => P });
var n = i(627968),
    a = i(64700),
    r = i(17928),
    l = i(104510),
    s = i(661531),
    o = i(834730),
    c = i(123292),
    d = i(688810),
    u = i(188989),
    _ = i(631305),
    h = i(71393),
    A = i(967198),
    g = i(652215),
    m = i(874864),
    x = i(985018),
    N = i(724709);
function f(e) {
    let { analyticsSection: t, analyticsPage: i, isGIF: a, banner: f } = e,
        E = (0, r.bG)([A.A], () => A.A.getGuildId()),
        T = (0, r.bG)([h.A], () => h.A.getGuild(E)),
        { analyticsLocations: b } = (0, d.Ay)();
    return null == T ||
        T.features.has(g.GuildFeatures.ANIMATED_BANNER) ||
        (!a && T.features.has(g.GuildFeatures.BANNER))
        ? null
        : (0, n.jsxs)("div", {
              className: N.kL,
              children: [
                  (0, n.jsx)(l._, { color: s.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: N.qC }),
                  (0, n.jsx)(o.E, {
                      color: "text-strong",
                      variant: "text-sm/semibold",
                      children: x.intl.string(x.t["56M7xe"]),
                  }),
                  (0, n.jsx)("div", {
                      className: N.xF,
                      children: (0, n.jsx)(c.Q, {
                          text: x.intl.string(x.t.WUHdZV),
                          onClick: () => {
                              if (null == T) return;
                              let e = { section: t, page: i, object: g.ZSU.UPSELL_HEADER };
                              null != f
                                  ? (0, u._)({
                                        analyticsLocations: b,
                                        analyticsLocation: e,
                                        guild: T,
                                        isGIF: a,
                                        banner: f,
                                    })
                                  : (0, _.A)({
                                        analyticsLocations: b,
                                        analyticsSourceLocation: e,
                                        guild: T,
                                        perks: a ? (0, m.Pf)() : (0, m.QR)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
var E = i(862482),
    T = i(793574),
    b = i(725807),
    v = i(503698),
    p = i.n(v),
    I = i(403581),
    C = i(404374),
    R = i(291590);
function j(e) {
    let { text: t, className: i, button: a, reducedRightPadding: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: p()(r ? R.wp : R.Ug, i),
        children: [
            (0, n.jsxs)("div", {
                className: R.g9,
                children: [
                    (0, n.jsx)(I.t, { size: "md", className: R.Kk, color: C.k0.PREMIUM_TIER_2 }),
                    (0, n.jsx)(o.E, { className: R.Qq, variant: "text-md/normal", color: "text-strong", children: t }),
                ],
            }),
            a,
        ],
    });
}
var w = i(287809),
    y = i(954571),
    L = i(927578),
    k = i(339984),
    B = i(788868),
    V = i(582602);
function U(e) {
    let { analyticsSection: t, type: i } = e,
        l = (0, r.bG)([w.default], () => w.default.getCurrentUser()),
        s = L.Ay.canUseAnimatedAvatar(l),
        o = L.Ay.canUsePremiumProfileCustomization(l),
        c = (i === k.HL.BANNER && o) || (i === k.HL.AVATAR && s),
        { sourceAnalyticsLocations: u } = (0, d.Ay)(T.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (a.useEffect(() => {
            c || y.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, { type: t, location_stack: u });
        }, [c, t, u]),
        c)
    )
        return null;
    let _ = (0, n.jsx)(b.A, {
        className: V.__invalid_getNitroLink,
        size: E.$n.Sizes.SMALL,
        look: E.$n.Looks.LINK,
        color: E.$n.Colors.LINK,
        subscriptionTier: B.pe.TIER_2,
        textOptions: { textOverride: x.intl.format(x.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: { section: t, object: g.ZSU.BUTTON_CTA },
        disableShine: !0,
    });
    return (0, n.jsx)(j, { reducedRightPadding: !0, className: V.C, text: x.intl.format(x.t.Og803x, {}), button: _ });
}
function P(e) {
    let { type: t, analyticsPage: i, analyticsSection: a, isGIF: r, banner: l } = e;
    return [k.HL.BANNER, k.HL.AVATAR].includes(t) && r
        ? (0, n.jsx)(U, { analyticsSection: a, type: t })
        : t === k.HL.GUILD_BANNER
          ? (0, n.jsx)(f, { analyticsSection: a, analyticsPage: i, isGIF: r, banner: l })
          : null;
}
