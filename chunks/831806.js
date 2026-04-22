n.d(t, { o: () => G }), n(801541);
var i = n(627968),
    l = n(64700),
    s = n(889137),
    r = n(417597),
    a = n(821609),
    o = n(289873),
    d = n(534514),
    c = n(834730),
    u = n(761508),
    m = n(722888),
    g = n(209812),
    h = n(44892),
    x = n(833448),
    _ = n(299824),
    p = n(997509),
    A = n(529942),
    E = n(209700),
    f = n(976860),
    j = n(260509),
    N = n(317525),
    I = n(71393),
    C = n(287809),
    b = n(975571),
    v = n(250627),
    S = n(808138),
    T = n(271653),
    y = n(371701),
    R = n(652215),
    L = n(746080),
    D = n(985018),
    O = n(848216);
function G(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: G } = (0, v.bb)(t),
        M = (0, r.bG)([I.A], () => I.A.getGuild(t)),
        k = (0, r.bG)([C.default], () => C.default.getCurrentUser()),
        U = null != M && (0, j.bM)(M, k),
        { loading: w } = (0, m.G)(t),
        [P, B] = l.useState(n ? "manage_listings" : "payment");
    (0, x.T)(M);
    let F = l.useCallback(() => {
        if (null == M) return;
        let e = N.A.getEveryoneRole(M);
        p.A.close();
        let t = { [e.id]: e };
        (0, A.Tk)(M.id, {
            type: E._.SERVER_SHOP,
            roles: t,
            initialTab: "guild_products",
            returnToSection: R.BEX.GUILD_PRODUCTS,
        }),
            (0, f.pX)(R.BVt.CHANNEL(M.id, L.VV.GUILD_SHOP));
    }, [M]);
    if (!G || w) return (0, i.jsx)(o.y, {});
    if (null == M) return null;
    let H = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.D, { variant: "heading-lg/semibold", children: D.intl.string(D.t.X6h2gz) }),
                (0, i.jsx)(c.E, {
                    variant: "text-sm/normal",
                    children: D.intl.format(D.t.xiYuDt, {
                        monetizationPolicyLink: b.A.getArticleURL(R.MVz.CREATOR_POLICY),
                        serverProductsSupportLink: b.A.getCreatorSupportArticleURL(R.MVz.SERVER_PRODUCTS),
                    }),
                }),
            ],
        }),
        V = (0, i.jsxs)(u.V, {
            type: "top",
            look: "brand",
            className: O.$H,
            "aria-label": D.intl.string(D.t.X6h2gz),
            selectedItem: P,
            onItemSelect: B,
            children: [
                (0, i.jsx)(h.A, {
                    id: "basic_info",
                    disabledTooltip: D.intl.string(D.t.NVDuUX),
                    disabled: !n,
                    children: D.intl.string(D.t.w27QAR),
                }),
                (0, i.jsx)(h.A, {
                    id: "manage_listings",
                    disabledTooltip: D.intl.string(D.t.NVDuUX),
                    disabled: !n,
                    children: D.intl.string(D.t.wlZ1mh),
                }),
                U
                    ? (0, i.jsx)(u.V.Item, { id: "payment", className: O.YU, children: D.intl.string(D.t.YBrFe6) })
                    : null,
                n
                    ? (0, i.jsx)("div", {
                          className: O.jc,
                          children: (0, i.jsx)(a.$, {
                              text: D.intl.string(D.t.vM81yY),
                              variant: "secondary",
                              onClick: F,
                              size: "sm",
                          }),
                      })
                    : null,
            ],
        }),
        z = (0, s.YW)(P)
            .with("basic_info", () => (0, i.jsx)(S.A, { guildId: t }))
            .with("manage_listings", () => (0, i.jsx)(T.A, { guildId: t }))
            .with("payment", () => (0, i.jsx)(y.A, { guildId: t }))
            .exhaustive();
    return (0, i.jsxs)(g.ZV, {
        guildId: t,
        children: [
            H,
            (0, i.jsx)(_.A, { guild: M }),
            (0, i.jsx)("div", { className: O.Mv, children: V }),
            (0, i.jsx)(u.V.Panel, { id: P, children: z }),
        ],
    });
}
