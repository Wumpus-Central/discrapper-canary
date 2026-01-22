r.d(t, { F: () => w });
var n = r(627968);
r(64700);
var i = r(503698),
    o = r.n(i),
    l = r(417597),
    s = r(506774),
    c = r(397927),
    a = r(775602),
    d = r(289397),
    u = r(976860),
    p = r(491026),
    f = r(381969),
    b = r(920814),
    C = r(305015),
    j = r(131242),
    O = r(324269),
    g = r(634654),
    h = r(652215),
    x = r(746080),
    y = r(985018),
    m = r(227090);
function v(e) {
    let {
        icon: t,
        title: r,
        body: i,
        selected: l,
        disabled: s = !1,
        onClick: a,
        onPreviewDismiss: d,
        isNew: u = !1,
    } = e;
    return (0, n.jsxs)(c.sqX, {
        onClick: s ? void 0 : a,
        "aria-disabled": s,
        className: o()(m.Mf, {
            [m.wH]: l,
            [m.ac]: s,
            [m.VH]: !l && null != d,
        }),
        "aria-label": r,
        children: [
            (0, n.jsx)("div", {
                className: m.zc,
                children: t,
            }),
            (0, n.jsx)(c.hKd, {
                size: 8,
                horizontal: !0,
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: l ? "always-white" : "text-strong",
                        children: r,
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: l ? "always-white" : s ? "text-muted" : "text-strong",
                        children: i,
                    }),
                ],
            }),
            u &&
                (0, n.jsx)(c.LpS, {
                    color: c.LU0.unsafe_rawColors.BRAND_260.css,
                    className: m.Ad,
                    text: y.intl.string(y.t.y2b7CA),
                }),
            null != d &&
                (0, n.jsx)(c.DUT, {
                    className: m.EP,
                    onClick: d,
                    "aria-label": y.intl.string(y.t.WAI6xu),
                    children: (0, n.jsx)(c.aXh, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
        ],
    });
}
function w(e) {
    let { guild: t } = e,
        r = (0, p.YZ)(t.id, "guild_shop_category_selector"),
        { selectedTab: i, setSelectedTab: o, categoryTabs: w, handlePreviewDismiss: P } = (0, f.k)(),
        _ = "false" === s.w.get(g.Db, "false"),
        L = (0, l.bG)([a.A], () => a.A.useReducedMotion),
        S = w.map((e) => {
            switch (e) {
                case b.B.GUILD_PRODUCTS:
                    return (0, n.jsx)(
                        v,
                        {
                            icon: (0, n.jsx)(C.A, {
                                width: 20,
                                height: 20,
                            }),
                            title: y.intl.string(y.t.odvTUp),
                            body: y.intl.string(y.t["0JFpRW"]),
                            selected: i === b.B.GUILD_PRODUCTS,
                            onClick: () => o(b.B.GUILD_PRODUCTS),
                        },
                        e,
                    );
                case b.B.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, n.jsx)(
                        v,
                        {
                            icon: (0, n.jsx)(j.A, {
                                width: 20,
                                height: 20,
                            }),
                            title: y.intl.string(y.t["KzCF/6"]),
                            body: r
                                ? y.intl.string(y.t["jqz+ly"])
                                : y.intl.format(y.t.ycs4oO, {
                                      openRoleSubPage: () => (0, u.pX)(h.BVt.CHANNEL(t.id, x.VV.ROLE_SUBSCRIPTIONS)),
                                  }),
                            disabled: !r,
                            selected: i === b.B.GUILD_ROLE_SUBSCRIPTIONS,
                            onClick: () => o(b.B.GUILD_ROLE_SUBSCRIPTIONS),
                        },
                        e,
                    );
                case b.B.GUILD_PRODUCTS_PREVIEW:
                    return (0, n.jsx)(
                        v,
                        {
                            icon: _
                                ? (0, n.jsx)("img", {
                                      src: L
                                          ? (0, d.n)("server_products/storefront/question-mark.png")
                                          : (0, d.n)("server_products/storefront/question-mark.gif"),
                                      className: m.kz,
                                      alt: "",
                                  })
                                : (0, n.jsx)(c.okO, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 20,
                                      height: 20,
                                  }),
                            title: y.intl.string(y.t.odvTUp),
                            body: y.intl.string(y.t["827i8I"]),
                            selected: i === b.B.GUILD_PRODUCTS_PREVIEW,
                            onClick: () => {
                                o(b.B.GUILD_PRODUCTS_PREVIEW), s.w.set(g.Db, "true");
                            },
                            onPreviewDismiss: P,
                            isNew: _,
                        },
                        e,
                    );
                default:
                    return null;
            }
        });
    return (0, n.jsxs)("div", {
        className: m.kL,
        children: [
            (0, n.jsx)(c.Heading, {
                variant: "heading-sm/bold",
                className: m.wx,
                children: y.intl.string(y.t.GF433I),
            }),
            (0, n.jsx)(c.hKd, { size: 12 }),
            (0, n.jsxs)("div", {
                className: m.uW,
                children: [
                    (0, n.jsx)("div", {
                        className: m.vR,
                        children: S,
                    }),
                    i === b.B.GUILD_PRODUCTS && (0, n.jsx)(O.A, {}),
                ],
            }),
        ],
    });
}
