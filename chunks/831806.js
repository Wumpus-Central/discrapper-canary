n.d(t, {
    o: () => P,
}),
    n(896048),
    n(801541);
var r = n(627968),
    i = n(64700),
    l = n(889137),
    s = n(417597),
    a = n(732955),
    c = n(397927),
    o = n(722888),
    d = n(209812),
    u = n(44892),
    f = n(833448),
    g = n(299824),
    b = n(997509),
    m = n(529942),
    p = n(209700),
    x = n(976860),
    h = n(260509),
    j = n(317525),
    O = n(71393),
    y = n(287809),
    v = n(975571),
    A = n(250627),
    E = n(808138),
    N = n(271653),
    _ = n(371701),
    S = n(652215),
    T = n(746080),
    I = n(985018),
    C = n(289);

function P(e) {
    let { guildId: t, hasValidApplication: n } = e,
        { listingsLoaded: P } = (0, A.bb)(t),
        w = (0, s.bG)([O.A], () => O.A.getGuild(t)),
        R = (0, s.bG)([y.default], () => y.default.getCurrentUser()),
        D = null != w && (0, h.bM)(w, R),
        { loading: G } = (0, o.G)(t),
        [L, k] = i.useState(n ? "manage_listings" : "payment");
    (0, f.T)(w);
    let M = i.useCallback(() => {
        if (null == w) return;
        let e = j.A.getEveryoneRole(w);
        b.A.close();
        let t = {
            [e.id]: e,
        };
        (0, m.Tk)(w.id, {
            type: p._.SERVER_SHOP,
            roles: t,
            initialTab: "guild_products",
            returnToSection: S.BEX.GUILD_PRODUCTS,
        }),
            (0, x.pX)(S.BVt.CHANNEL(w.id, T.VV.GUILD_SHOP));
    }, [w]);
    if (!P || G) return (0, r.jsx)(c.y$y, {});
    if (null == w) return null;
    let U = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: I.intl.string(I.t.X6h2gz),
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: I.intl.format(I.t.xiYuDt, {
                        monetizationPolicyLink: v.A.getArticleURL(S.MVz.CREATOR_POLICY),
                        serverProductsSupportLink: v.A.getCreatorSupportArticleURL(S.MVz.SERVER_PRODUCTS),
                    }),
                }),
            ],
        }),
        F = (0, r.jsxs)(c.VQ0, {
            type: "top",
            look: "brand",
            className: C.$H,
            "aria-label": I.intl.string(I.t.X6h2gz),
            selectedItem: L,
            onItemSelect: k,
            children: [
                (0, r.jsx)(u.A, {
                    id: "basic_info",
                    disabledTooltip: I.intl.string(I.t.NVDuUX),
                    disabled: !n,
                    children: I.intl.string(I.t.w27QAR),
                }),
                (0, r.jsx)(u.A, {
                    id: "manage_listings",
                    disabledTooltip: I.intl.string(I.t.NVDuUX),
                    disabled: !n,
                    children: I.intl.string(I.t.wlZ1mh),
                }),
                D
                    ? (0, r.jsx)(c.VQ0.Item, {
                          id: "payment",
                          className: C.YU,
                          children: I.intl.string(I.t.YBrFe6),
                      })
                    : null,
                n
                    ? (0, r.jsx)("div", {
                          className: C.jc,
                          children: (0, r.jsx)(a.$nd, {
                              text: I.intl.string(I.t.vM81yY),
                              variant: "secondary",
                              onClick: M,
                              size: "sm",
                          }),
                      })
                    : null,
            ],
        }),
        B = (0, l.YW)(L)
            .with("basic_info", () =>
                (0, r.jsx)(E.A, {
                    guildId: t,
                }),
            )
            .with("manage_listings", () =>
                (0, r.jsx)(N.A, {
                    guildId: t,
                }),
            )
            .with("payment", () =>
                (0, r.jsx)(_.A, {
                    guildId: t,
                }),
            )
            .exhaustive(),
        H = P
            ? (0, r.jsx)(c.VQ0.Panel, {
                  id: L,
                  children: B,
              })
            : (0, r.jsx)(c.y$y, {});
    return (0, r.jsxs)(d.ZV, {
        guildId: t,
        children: [
            U,
            (0, r.jsx)(g.A, {
                guild: w,
            }),
            (0, r.jsx)("div", {
                className: C.Mv,
                children: F,
            }),
            H,
        ],
    });
}
