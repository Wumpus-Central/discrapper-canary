i.d(t, { A: () => S });
var a = i(627968),
    n = i(64700),
    l = i(17928),
    s = i(104510),
    r = i(661531),
    o = i(834730),
    c = i(123292),
    d = i(688810),
    u = i(188989),
    _ = i(631305),
    A = i(71393),
    p = i(967198),
    m = i(652215),
    h = i(874864),
    g = i(985018),
    f = i(724709);
function N(e) {
    let { analyticsSection: t, analyticsPage: i, isGIF: n, banner: N } = e,
        x = (0, l.bG)([p.A], () => p.A.getGuildId()),
        E = (0, l.bG)([A.A], () => A.A.getGuild(x)),
        { analyticsLocations: T } = (0, d.Ay)();
    return null == E ||
        E.features.has(m.GuildFeatures.ANIMATED_BANNER) ||
        (!n && E.features.has(m.GuildFeatures.BANNER))
        ? null
        : (0, a.jsxs)("div", {
              className: f.kL,
              children: [
                  (0, a.jsx)(s._, { color: r.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: f.qC }),
                  (0, a.jsx)(o.E, {
                      color: "text-strong",
                      variant: "text-sm/semibold",
                      children: g.intl.string(g.t["56M7xe"]),
                  }),
                  (0, a.jsx)("div", {
                      className: f.xF,
                      children: (0, a.jsx)(c.Q, {
                          text: g.intl.string(g.t.WUHdZV),
                          onClick: () => {
                              if (null == E) return;
                              let e = { section: t, page: i, object: m.ZSU.UPSELL_HEADER };
                              null != N
                                  ? (0, u._)({
                                        analyticsLocations: T,
                                        analyticsLocation: e,
                                        guild: E,
                                        isGIF: n,
                                        banner: N,
                                    })
                                  : (0, _.A)({
                                        analyticsLocations: T,
                                        analyticsSourceLocation: e,
                                        guild: E,
                                        perks: n ? (0, h.Pf)() : (0, h.QR)(),
                                    });
                          },
                          textVariant: "text-sm/semibold",
                      }),
                  }),
              ],
          });
}
var x = i(862482),
    E = i(793574),
    T = i(725807),
    I = i(503698),
    b = i.n(I),
    R = i(403581),
    j = i(404374),
    v = i(291590);
function C(e) {
    let { text: t, className: i, button: n, reducedRightPadding: l = !1 } = e;
    return (0, a.jsxs)("div", {
        className: b()(l ? v.wp : v.Ug, i),
        children: [
            (0, a.jsxs)("div", {
                className: v.g9,
                children: [
                    (0, a.jsx)(R.t, { size: "md", className: v.Kk, color: j.k0.PREMIUM_TIER_2 }),
                    (0, a.jsx)(o.E, { className: v.Qq, variant: "text-md/normal", color: "text-strong", children: t }),
                ],
            }),
            n,
        ],
    });
}
var w = i(287809),
    y = i(954571),
    L = i(927578),
    P = i(339984),
    V = i(788868),
    k = i(582602);
function B(e) {
    let { analyticsSection: t, type: i } = e,
        s = (0, l.bG)([w.default], () => w.default.getCurrentUser()),
        r = L.Ay.canUseAnimatedAvatar(s),
        o = L.Ay.canUsePremiumProfileCustomization(s),
        c = (i === P.HL.BANNER && o) || (i === P.HL.AVATAR && r),
        { sourceAnalyticsLocations: u } = (0, d.Ay)(E.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (n.useEffect(() => {
            c || y.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, { type: t, location_stack: u });
        }, [c, t, u]),
        c)
    )
        return null;
    let _ = (0, a.jsx)(T.A, {
        className: k.__invalid_getNitroLink,
        size: x.$n.Sizes.SMALL,
        look: x.$n.Looks.LINK,
        color: x.$n.Colors.LINK,
        subscriptionTier: V.pe.TIER_2,
        textOptions: { textOverride: g.intl.format(g.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: { section: t, object: m.ZSU.BUTTON_CTA },
        disableShine: !0,
    });
    return (0, a.jsx)(C, { reducedRightPadding: !0, className: k.C, text: g.intl.format(g.t.Og803x, {}), button: _ });
}
function S(e) {
    let { type: t, analyticsPage: i, analyticsSection: n, isGIF: l, banner: s } = e;
    return [P.HL.BANNER, P.HL.AVATAR].includes(t) && l
        ? (0, a.jsx)(B, { analyticsSection: n, type: t })
        : t === P.HL.GUILD_BANNER
          ? (0, a.jsx)(N, { analyticsSection: n, analyticsPage: i, isGIF: l, banner: s })
          : null;
}
