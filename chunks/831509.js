n.d(t, { A: () => T });
var l = n(477900),
    i = n(582128),
    s = n(38021),
    r = n(839979),
    a = n(462029),
    o = n(313281),
    d = n(192308),
    c = n(834730),
    u = n(331322),
    h = n(276293),
    A = n(661531),
    m = n(983851),
    g = n(534890),
    f = n(297264),
    p = n(793574),
    C = n(688810),
    E = n(611371),
    x = n(532794),
    _ = n(158045),
    N = n(518082),
    S = n(349828),
    I = n(202541),
    b = n(449817),
    G = n(375708),
    R = n(496327);
function j() {
    let e = i.useCallback(() => {
        let { hasAccess: e } = (0, o.ad)();
        e
            ? (0, N.A)(null, "favorites_empty_sidebar")
            : (0, d.openModalLazy)(async () => {
                  let { default: e } = await n.e("89946").then(n.bind(n, 507809));
                  return (t) => (0, l.jsx)(e, { ...t, source: "favorites_empty_sidebar" });
              });
    }, []);
    return (0, l.jsx)(c.E, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: G.intl.format(b.default.LyZZLX, { onClick: e }),
    });
}
function v() {
    let { favoriteCount: e, favoriteLimit: t, isAtLimit: n } = (0, o.ft)(),
        { analyticsLocations: s } = (0, C.Ay)(p.A.FAVORITES_GUILD_UPSELL_BAR),
        r = i.useCallback(() => {
            (0, x.A)({ subscriptionTier: I.pe.TIER_2, analyticsLocations: s });
        }, [s]),
        a = i.useCallback(
            (e, t) =>
                (0, l.jsx)(
                    c.E,
                    {
                        tag: "span",
                        variant: "text-sm/bold",
                        color: n ? "text-feedback-warning" : "text-default",
                        children: e,
                    },
                    t,
                ),
            [n],
        );
    return (0, l.jsxs)(u.B, {
        direction: "horizontal",
        align: "start",
        gap: 8,
        children: [
            (0, l.jsx)(c.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: R.tD,
                children: G.intl.format(b.default.Yw4x8Q, {
                    count: e,
                    limit: t,
                    maxCount: S.lj,
                    nitroTierName: (0, _.Dd)(I.PremiumTypes.TIER_2),
                    onClick: r,
                    countHook: a,
                }),
            }),
            (0, l.jsx)(E.A, { className: R.TN }),
        ],
    });
}
function y() {
    return (0, l.jsxs)("div", {
        className: R.v0,
        "aria-hidden": "true",
        children: [
            (0, l.jsxs)("div", {
                className: R._f,
                children: [
                    (0, l.jsx)(h.N, { size: "xs", color: A.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: R.D_ }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: R._f,
                children: [
                    (0, l.jsx)(m.H, { size: "xs", color: A.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: R.VG }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: R._f,
                children: [
                    (0, l.jsx)(g.o, { size: "xs", color: A.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: R.D_ }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { variant: t } = e,
        n = "empty" === t;
    return (0, l.jsxs)(u.B, {
        gap: 8,
        children: [
            (0, l.jsxs)(u.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, l.jsx)(f.D, { variant: "heading-md/semibold", children: G.intl.string(b.default["1n0TGE"]) }),
                    n ? (0, l.jsx)(j, {}) : (0, l.jsx)(v, {}),
                ],
            }),
            (0, l.jsx)("div", { className: R.yF }),
            n ? (0, l.jsx)(y, {}) : null,
        ],
    });
}
var L = n(808240);
function T(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, a.D)(),
        { density: i } = (0, s.wR)(),
        { shouldShowUpsell: d } = (0, o.ft)();
    return n
        ? (0, l.jsx)("div", { className: L.XG, children: (0, l.jsx)(M, { variant: "empty" }) })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  d ? (0, l.jsx)(M, { variant: "upsell" }) : null,
                  (0, l.jsx)(r.i, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: i }),
              ],
          });
}
