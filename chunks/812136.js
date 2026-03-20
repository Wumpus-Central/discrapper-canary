i.d(t, { F: () => A });
var s = i(627968);
i(64700);
var r = i(503698),
    n = i.n(r),
    l = i(417597),
    d = i(506774),
    a = i(397927),
    o = i(775602),
    c = i(289397),
    C = i(130978),
    u = i(976860),
    x = i(381969),
    h = i(920814),
    _ = i(305015),
    p = i(131242),
    j = i(324269),
    g = i(634654),
    m = i(652215),
    f = i(746080),
    v = i(985018),
    L = i(713244);
function I(e) {
    let {
        icon: t,
        title: i,
        body: r,
        selected: l,
        disabled: d = !1,
        onClick: o,
        onPreviewDismiss: c,
        isNew: C = !1,
    } = e;
    return (0, s.jsxs)(a.sqX, {
        onClick: d ? void 0 : o,
        "aria-disabled": d,
        className: n()(L.Mf, { [L.wH]: l, [L.ac]: d, [L.VH]: !l && null != c }),
        "aria-label": i,
        children: [
            (0, s.jsx)("div", { className: L.zc, children: t }),
            (0, s.jsx)(a.hKd, { size: 8, horizontal: !0 }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: l ? "always-white" : "text-strong",
                        children: i,
                    }),
                    (0, s.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: l ? "always-white" : d ? "text-muted" : "text-strong",
                        children: r,
                    }),
                ],
            }),
            C &&
                (0, s.jsx)(a.LpS, {
                    color: a.LU0.unsafe_rawColors.BRAND_260.css,
                    className: L.Ad,
                    text: v.intl.string(v.t.y2b7CA),
                }),
            null != c &&
                (0, s.jsx)(a.DUT, {
                    className: L.EP,
                    onClick: c,
                    "aria-label": v.intl.string(v.t.WAI6xu),
                    children: (0, s.jsx)(a.aXh, { size: "xs", color: "currentColor" }),
                }),
        ],
    });
}
function A(e) {
    let { guild: t } = e,
        i = (0, C.w)(t.id, "guild_shop_category_selector"),
        { selectedTab: r, setSelectedTab: n, categoryTabs: A, handlePreviewDismiss: w } = (0, x.k)(),
        N = "false" === d.w.get(g.Db, "false"),
        T = (0, l.bG)([o.A], () => o.A.useReducedMotion),
        R = A.map((e) => {
            switch (e) {
                case h.B.GUILD_PRODUCTS:
                    return (0, s.jsx)(
                        I,
                        {
                            icon: (0, s.jsx)(_.A, { width: 20, height: 20 }),
                            title: v.intl.string(v.t.odvTUp),
                            body: v.intl.string(v.t["0JFpRW"]),
                            selected: r === h.B.GUILD_PRODUCTS,
                            onClick: () => n(h.B.GUILD_PRODUCTS),
                        },
                        e,
                    );
                case h.B.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        I,
                        {
                            icon: (0, s.jsx)(p.A, { width: 20, height: 20 }),
                            title: v.intl.string(v.t["KzCF/6"]),
                            body: i
                                ? v.intl.string(v.t["jqz+ly"])
                                : v.intl.format(v.t.ycs4oO, {
                                      openRoleSubPage: () => (0, u.pX)(m.BVt.CHANNEL(t.id, f.VV.ROLE_SUBSCRIPTIONS)),
                                  }),
                            disabled: !i,
                            selected: r === h.B.GUILD_ROLE_SUBSCRIPTIONS,
                            onClick: () => n(h.B.GUILD_ROLE_SUBSCRIPTIONS),
                        },
                        e,
                    );
                case h.B.GUILD_PRODUCTS_PREVIEW:
                    return (0, s.jsx)(
                        I,
                        {
                            icon: N
                                ? (0, s.jsx)("img", {
                                      src: T
                                          ? (0, c.n)("server_products/storefront/question-mark.png")
                                          : (0, c.n)("server_products/storefront/question-mark.gif"),
                                      className: L.kz,
                                      alt: "",
                                  })
                                : (0, s.jsx)(a.okO, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                            title: v.intl.string(v.t.odvTUp),
                            body: v.intl.string(v.t["827i8I"]),
                            selected: r === h.B.GUILD_PRODUCTS_PREVIEW,
                            onClick: () => {
                                n(h.B.GUILD_PRODUCTS_PREVIEW), d.w.set(g.Db, "true");
                            },
                            onPreviewDismiss: w,
                            isNew: N,
                        },
                        e,
                    );
                default:
                    return null;
            }
        });
    return (0, s.jsxs)("div", {
        className: L.kL,
        children: [
            (0, s.jsx)(a.Heading, { variant: "heading-sm/bold", className: L.wx, children: v.intl.string(v.t.GF433I) }),
            (0, s.jsx)(a.hKd, { size: 12 }),
            (0, s.jsxs)("div", {
                className: L.uW,
                children: [
                    (0, s.jsx)("div", { className: L.vR, children: R }),
                    r === h.B.GUILD_PRODUCTS && (0, s.jsx)(j.default, {}),
                ],
            }),
        ],
    });
}
