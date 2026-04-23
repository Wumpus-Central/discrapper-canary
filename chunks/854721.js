t.r(l), t.d(l, { default: () => M });
var n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(835245),
    o = t(311907),
    d = t(289873),
    c = t(444927),
    u = t(793574),
    _ = t(688810),
    g = t(976860),
    p = t(435658),
    x = t(594832),
    A = t(961350),
    f = t(696451),
    I = t(71393),
    h = t(67480),
    m = t(449054),
    E = t(733391),
    S = t(439303),
    j = t(35826),
    k = t(429635),
    b = t(317560),
    R = t(964395),
    N = t(542533),
    v = t(652215),
    C = t(253004);
function L(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, S.jM)(),
        o = s.useRef(r);
    s.useEffect(() => {
        o.current = r;
    }, [r]);
    let d = i?.id;
    return (
        s.useEffect(() => {
            if (null != d)
                return (
                    (0, b.R)({
                        skuId: d,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: o.current,
                        onClose: () => {
                            (0, g.JK)().location.pathname.indexOf(v.BVt.CHANNELS_GAME_SHOP(t, a)) >= 0 &&
                                (0, j.A)({ guildId: t, pageIndex: a });
                        },
                    }),
                    () => {
                        (0, b.j)();
                    }
                );
        }, [t, a, d, l.applicationId]),
        (0, n.jsxs)("div", {
            className: C.k,
            children: [
                (0, n.jsx)(R.A, { guildId: t, storefront: l, selectedPageIndex: a }),
                (0, n.jsx)(N.a, { applicationId: l.applicationId, page: l.pages[a] }),
            ],
        })
    );
}
function M(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: g } = l.params,
        { analyticsLocations: j } = (0, _.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        b = (0, k.A)({ guildId: t }),
        R = (0, o.bG)([A.default], () => A.default.getSessionId(), []),
        N = (0, o.bG)([h.A], () => h.A.get(g), [g]);
    (0, x.pE)(), (0, p.x)({ applicationId: b?.storefront?.applicationId, location: "SocialLayerStorefront" });
    let v = (0, c.A)((0, r.A)()),
        M = (0, o.bG)([f.Ay, A.default], () => f.Ay.isMember(t, A.default.getId())),
        T = s.useMemo(() => {
            if (null == a) return 0;
            let e = parseInt(a, 10);
            return isNaN(e) || (null != b && null != b.storefront && e >= b.storefront.pages.length) ? 0 : e;
        }, [a, b]),
        O = b?.storefront?.pages[T]?.title ?? null,
        y = b?.storefront?.pages[T]?.leaderboard != null,
        G = s.useMemo(
            () => ({
                sessionId: v,
                guildId: t,
                pageIndex: T,
                pageTitle: O,
                isUserGuildMember: M,
                pageHasLeaderboard: y,
            }),
            [v, t, T, O, M, y],
        );
    return (s.useEffect(() => {
        null != t && (0, E.SP)(t, T, null != g ? g : null);
    }, [t, T, g]),
    s.useEffect(() => {
        null == t || null == R || (null == I.A.getGuild(t) && (0, m.Z2)(t, {}, { shouldNavigate: !1 }));
    }, [t, R]),
    null == t || b?.storefront == null)
        ? (0, n.jsx)("div", { className: i()(C.u, C.k), children: (0, n.jsx)(d.y, {}) })
        : (0, n.jsx)(_.f5, {
              value: j,
              children: (0, n.jsx)(S.E9, {
                  newValue: G,
                  children: (0, n.jsx)(L, {
                      storefront: b.storefront,
                      guildId: t,
                      selectedPageIndex: T,
                      selectedSku: N,
                  }),
              }),
          });
}
