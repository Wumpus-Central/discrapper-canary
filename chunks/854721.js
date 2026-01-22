t.r(l),
    t.d(l, {
        default: () => T,
    }),
    t(747238);
var n = t(627968),
    a = t(64700),
    s = t(503698),
    i = t.n(s),
    d = t(835245),
    r = t(311907),
    o = t(397927),
    c = t(444927),
    u = t(793574),
    f = t(688810),
    g = t(976860),
    p = t(594832),
    I = t(961350),
    _ = t(696451),
    x = t(71393),
    h = t(67480),
    A = t(449054),
    b = t(733391),
    m = t(439303),
    k = t(35826),
    v = t(429635),
    j = t(317560),
    E = t(964395),
    S = t(542533),
    N = t(652215),
    L = t(332217);

function R(e) {
    let { storefront: l, guildId: t, selectedPageIndex: s, selectedSku: i } = e,
        d = (0, m.jM)(),
        r = a.useRef(d);
    a.useEffect(() => {
        r.current = d;
    }, [d]);
    let o = null == i ? void 0 : i.id;
    return (
        a.useEffect(() => {
            if (null != o)
                return (
                    (0, j.R)({
                        skuId: o,
                        applicationId: l.applicationId,
                        guildId: t,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: r.current,
                        onClose: () => {
                            (0, g.JK)().location.pathname.indexOf(N.BVt.CHANNELS_GAME_SHOP(t, s)) >= 0 &&
                                (0, k.A)({
                                    guildId: t,
                                    pageIndex: s,
                                });
                        },
                    }),
                    () => {
                        (0, j.j)();
                    }
                );
        }, [t, s, o, l.applicationId]),
        (0, n.jsxs)("div", {
            className: L.k,
            children: [
                (0, n.jsx)(E.A, {
                    guildId: t,
                    storefront: l,
                    selectedPageIndex: s,
                }),
                (0, n.jsx)(S.a, {
                    applicationId: l.applicationId,
                    guildId: t,
                    page: l.pages[s],
                }),
            ],
        })
    );
}

function T(e) {
    var l, t, s, g, k;
    let { match: j } = e,
        { guildId: E, gameShopPageIndex: S, gameShopSkuId: N } = j.params,
        { analyticsLocations: T } = (0, f.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        C = (0, v.A)({
            guildId: E,
            location: "Social Layer Storefront",
        }),
        y = (0, r.bG)([I.default], () => I.default.getSessionId(), []),
        M = (0, r.bG)([h.A], () => h.A.get(N), [N]);
    (0, p.pE)();
    let O = (0, c.A)((0, d.A)()),
        w = (0, r.bG)([_.Ay, I.default], () => _.Ay.isMember(E, I.default.getId())),
        Y = a.useMemo(() => {
            if (null == S) return 0;
            let e = parseInt(S, 10);
            return isNaN(e) || (null != C && null != C.storefront && e >= C.storefront.pages.length) ? 0 : e;
        }, [S, C]),
        G =
            null != (l = null == C || null == (s = C.storefront) || null == (t = s.pages[Y]) ? void 0 : t.title)
                ? l
                : null,
        H = (null == C || null == (k = C.storefront) || null == (g = k.pages[Y]) ? void 0 : g.leaderboard) != null,
        P = a.useMemo(
            () => ({
                sessionId: O,
                guildId: E,
                pageIndex: Y,
                pageTitle: G,
                isUserGuildMember: w,
                pageHasLeaderboard: H,
            }),
            [O, E, Y, G, w, H],
        );
    return (a.useEffect(() => {
        null != E && (0, b.SP)(E, Y, null != N ? N : null);
    }, [E, Y, N]),
    a.useEffect(() => {
        null == E ||
            null == y ||
            (null == x.A.getGuild(E) &&
                (0, A.Z2)(
                    E,
                    {},
                    {
                        shouldNavigate: !1,
                    },
                ));
    }, [E, y]),
    null == E || (null == C ? void 0 : C.storefront) == null)
        ? (0, n.jsx)("div", {
              className: i()(L.u, L.k),
              children: (0, n.jsx)(o.y$y, {}),
          })
        : (0, n.jsx)(f.f5, {
              value: T,
              children: (0, n.jsx)(m.E9, {
                  newValue: P,
                  children: (0, n.jsx)(R, {
                      storefront: C.storefront,
                      guildId: E,
                      selectedPageIndex: Y,
                      selectedSku: M,
                  }),
              }),
          });
}
