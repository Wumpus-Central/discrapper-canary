t.r(l), t.d(l, { default: () => R });
var n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    d = t(835245),
    r = t(311907),
    o = t(397927),
    c = t(444927),
    u = t(793574),
    g = t(688810),
    _ = t(976860),
    p = t(594832),
    I = t(961350),
    f = t(696451),
    x = t(71393),
    h = t(67480),
    A = t(449054),
    m = t(733391),
    k = t(439303),
    j = t(35826),
    b = t(429635),
    E = t(317560),
    S = t(964395),
    v = t(542533),
    C = t(652215),
    N = t(332217);
function L(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        d = (0, k.jM)(),
        r = s.useRef(d);
    s.useEffect(() => {
        r.current = d;
    }, [d]);
    let o = i?.id;
    return (
        s.useEffect(() => {
            if (null != o)
                return (
                    (0, E.R)({
                        skuId: o,
                        applicationId: l.applicationId,
                        guildId: t,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: r.current,
                        onClose: () => {
                            (0, _.JK)().location.pathname.indexOf(C.BVt.CHANNELS_GAME_SHOP(t, a)) >= 0 &&
                                (0, j.A)({ guildId: t, pageIndex: a });
                        },
                    }),
                    () => {
                        (0, E.j)();
                    }
                );
        }, [t, a, o, l.applicationId]),
        (0, n.jsxs)("div", {
            className: N.k,
            children: [
                (0, n.jsx)(S.A, { guildId: t, storefront: l, selectedPageIndex: a }),
                (0, n.jsx)(v.a, { applicationId: l.applicationId, guildId: t, page: l.pages[a] }),
            ],
        })
    );
}
function R(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: _ } = l.params,
        { analyticsLocations: j } = (0, g.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        E = (0, b.A)({ guildId: t, location: "Social Layer Storefront" }),
        S = (0, r.bG)([I.default], () => I.default.getSessionId(), []),
        v = (0, r.bG)([h.A], () => h.A.get(_), [_]);
    (0, p.pE)();
    let C = (0, c.A)((0, d.A)()),
        R = (0, r.bG)([f.Ay, I.default], () => f.Ay.isMember(t, I.default.getId())),
        T = s.useMemo(() => {
            if (null == a) return 0;
            let e = parseInt(a, 10);
            return isNaN(e) || (null != E && null != E.storefront && e >= E.storefront.pages.length) ? 0 : e;
        }, [a, E]),
        y = E?.storefront?.pages[T]?.title ?? null,
        M = E?.storefront?.pages[T]?.leaderboard != null,
        O = s.useMemo(
            () => ({
                sessionId: C,
                guildId: t,
                pageIndex: T,
                pageTitle: y,
                isUserGuildMember: R,
                pageHasLeaderboard: M,
            }),
            [C, t, T, y, R, M],
        );
    return (s.useEffect(() => {
        null != t && (0, m.SP)(t, T, null != _ ? _ : null);
    }, [t, T, _]),
    s.useEffect(() => {
        null == t || null == S || (null == x.A.getGuild(t) && (0, A.Z2)(t, {}, { shouldNavigate: !1 }));
    }, [t, S]),
    null == t || E?.storefront == null)
        ? (0, n.jsx)("div", { className: i()(N.u, N.k), children: (0, n.jsx)(o.y$y, {}) })
        : (0, n.jsx)(g.f5, {
              value: j,
              children: (0, n.jsx)(k.E9, {
                  newValue: O,
                  children: (0, n.jsx)(L, {
                      storefront: E.storefront,
                      guildId: t,
                      selectedPageIndex: T,
                      selectedSku: v,
                  }),
              }),
          });
}
