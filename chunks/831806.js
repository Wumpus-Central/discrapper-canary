"use strict";
n.d(t, { o: () => O }), n(801541);
var i = n(627968),
    s = n(64700),
    l = n(889137),
    r = n(417597),
    a = n(732955),
    o = n(397927),
    d = n(722888),
    c = n(209812),
    u = n(44892),
    m = n(833448),
    g = n(299824),
    x = n(997509),
    h = n(529942),
    _ = n(209700),
    A = n(976860),
    p = n(260509),
    f = n(317525),
    j = n(71393),
    N = n(287809),
    E = n(975571),
    b = n(250627),
    T = n(808138),
    C = n(271653),
    I = n(371701),
    v = n(652215),
    S = n(746080),
    y = n(985018),
    R = n(655215);
function O(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: O } = (0, b.bb)(t),
        G = (0, r.bG)([j.A], () => j.A.getGuild(t)),
        L = (0, r.bG)([N.default], () => N.default.getCurrentUser()),
        D = null != G && (0, p.bM)(G, L),
        { loading: M } = (0, d.G)(t),
        [k, U] = s.useState(n ? "manage_listings" : "payment");
    (0, m.T)(G);
    let P = s.useCallback(() => {
        if (null == G) return;
        let e = f.A.getEveryoneRole(G);
        x.A.close();
        let t = { [e.id]: e };
        (0, h.Tk)(G.id, {
            type: _._.SERVER_SHOP,
            roles: t,
            initialTab: "guild_products",
            returnToSection: v.BEX.GUILD_PRODUCTS,
        }),
            (0, A.pX)(v.BVt.CHANNEL(G.id, S.VV.GUILD_SHOP));
    }, [G]);
    if (!O || M) return (0, i.jsx)(o.y$y, {});
    if (null == G) return null;
    let w = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Heading, { variant: "heading-lg/semibold", children: y.intl.string(y.t.X6h2gz) }),
                (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: y.intl.format(y.t.xiYuDt, {
                        monetizationPolicyLink: E.A.getArticleURL(v.MVz.CREATOR_POLICY),
                        serverProductsSupportLink: E.A.getCreatorSupportArticleURL(v.MVz.SERVER_PRODUCTS),
                    }),
                }),
            ],
        }),
        B = (0, i.jsxs)(o.VQ0, {
            type: "top",
            look: "brand",
            className: R.$H,
            "aria-label": y.intl.string(y.t.X6h2gz),
            selectedItem: k,
            onItemSelect: U,
            children: [
                (0, i.jsx)(u.A, {
                    id: "basic_info",
                    disabledTooltip: y.intl.string(y.t.NVDuUX),
                    disabled: !n,
                    children: y.intl.string(y.t.w27QAR),
                }),
                (0, i.jsx)(u.A, {
                    id: "manage_listings",
                    disabledTooltip: y.intl.string(y.t.NVDuUX),
                    disabled: !n,
                    children: y.intl.string(y.t.wlZ1mh),
                }),
                D
                    ? (0, i.jsx)(o.VQ0.Item, { id: "payment", className: R.YU, children: y.intl.string(y.t.YBrFe6) })
                    : null,
                n
                    ? (0, i.jsx)("div", {
                          className: R.jc,
                          children: (0, i.jsx)(a.$nd, {
                              text: y.intl.string(y.t.vM81yY),
                              variant: "secondary",
                              onClick: P,
                              size: "sm",
                          }),
                      })
                    : null,
            ],
        }),
        F = (0, l.YW)(k)
            .with("basic_info", () => (0, i.jsx)(T.A, { guildId: t }))
            .with("manage_listings", () => (0, i.jsx)(C.A, { guildId: t }))
            .with("payment", () => (0, i.jsx)(I.A, { guildId: t }))
            .exhaustive(),
        H = O ? (0, i.jsx)(o.VQ0.Panel, { id: k, children: F }) : (0, i.jsx)(o.y$y, {});
    return (0, i.jsxs)(c.ZV, {
        guildId: t,
        children: [w, (0, i.jsx)(g.A, { guild: G }), (0, i.jsx)("div", { className: R.Mv, children: B }), H],
    });
}
