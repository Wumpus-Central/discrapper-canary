i.d(e, { F: () => E });
var s = i(627968);
i(64700);
var r = i(503698),
    n = i.n(r),
    l = i(417597),
    a = i(506774),
    d = i(890856),
    o = i(696986),
    c = i(834730),
    C = i(777666),
    u = i(827734),
    x = i(939249),
    h = i(285796),
    _ = i(597770),
    p = i(534514),
    j = i(775602),
    g = i(289397),
    m = i(440293),
    f = i(976860),
    v = i(381969),
    L = i(920814),
    I = i(305015),
    A = i(908861),
    w = i(324269),
    N = i(634654),
    R = i(652215),
    S = i(746080),
    V = i(985018),
    b = i(886073);
function T(t) {
    let {
        icon: e,
        title: i,
        body: r,
        selected: l,
        disabled: a = !1,
        onClick: _,
        onPreviewDismiss: p,
        isNew: j = !1,
    } = t;
    return (0, s.jsxs)(d.s, {
        onClick: a ? void 0 : _,
        "aria-disabled": a,
        className: n()(b.Mf, { [b.wH]: l, [b.ac]: a, [b.VH]: !l && null != p }),
        "aria-label": i,
        children: [
            (0, s.jsx)("div", { className: b.zc, children: e }),
            (0, s.jsx)(o.h, { size: 8, horizontal: !0 }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "text-sm/semibold",
                        color: l ? "always-white" : "text-strong",
                        children: i,
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "text-xs/normal",
                        color: l ? "always-white" : a ? "text-muted" : "text-strong",
                        children: r,
                    }),
                ],
            }),
            j &&
                (0, s.jsx)(C.Lp, {
                    color: u.A.unsafe_rawColors.BRAND_260.css,
                    className: b.Ad,
                    text: V.intl.string(V.t.y2b7CA),
                }),
            null != p &&
                (0, s.jsx)(x.D, {
                    className: b.EP,
                    onClick: p,
                    "aria-label": V.intl.string(V.t.WAI6xu),
                    children: (0, s.jsx)(h.a, { size: "xs", color: "currentColor" }),
                }),
        ],
    });
}
function E(t) {
    let { guild: e } = t,
        i = (0, m.w)(e.id),
        { selectedTab: r, setSelectedTab: n, categoryTabs: d, handlePreviewDismiss: c } = (0, v.k)(),
        C = "false" === a.w.get(N.Db, "false"),
        u = (0, l.bG)([j.A], () => j.A.useReducedMotion),
        x = d.map((t) => {
            switch (t) {
                case L.B.GUILD_PRODUCTS:
                    return (0, s.jsx)(
                        T,
                        {
                            icon: (0, s.jsx)(I.A, { width: 20, height: 20 }),
                            title: V.intl.string(V.t.odvTUp),
                            body: V.intl.string(V.t["0JFpRW"]),
                            selected: r === L.B.GUILD_PRODUCTS,
                            onClick: () => n(L.B.GUILD_PRODUCTS),
                        },
                        t,
                    );
                case L.B.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        T,
                        {
                            icon: (0, s.jsx)(A.A, { width: 20, height: 20 }),
                            title: V.intl.string(V.t["KzCF/6"]),
                            body: i
                                ? V.intl.string(V.t["jqz+ly"])
                                : V.intl.format(V.t.ycs4oO, {
                                      openRoleSubPage: () => (0, f.pX)(R.BVt.CHANNEL(e.id, S.VV.ROLE_SUBSCRIPTIONS)),
                                  }),
                            disabled: !i,
                            selected: r === L.B.GUILD_ROLE_SUBSCRIPTIONS,
                            onClick: () => n(L.B.GUILD_ROLE_SUBSCRIPTIONS),
                        },
                        t,
                    );
                case L.B.GUILD_PRODUCTS_PREVIEW:
                    return (0, s.jsx)(
                        T,
                        {
                            icon: C
                                ? (0, s.jsx)("img", {
                                      src: u
                                          ? (0, g.n)("server_products/storefront/question-mark.png")
                                          : (0, g.n)("server_products/storefront/question-mark.gif"),
                                      className: b.kz,
                                      alt: "",
                                  })
                                : (0, s.jsx)(_.o, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                            title: V.intl.string(V.t.odvTUp),
                            body: V.intl.string(V.t["827i8I"]),
                            selected: r === L.B.GUILD_PRODUCTS_PREVIEW,
                            onClick: () => {
                                n(L.B.GUILD_PRODUCTS_PREVIEW), a.w.set(N.Db, "true");
                            },
                            onPreviewDismiss: c,
                            isNew: C,
                        },
                        t,
                    );
                default:
                    return null;
            }
        });
    return (0, s.jsxs)("div", {
        className: b.kL,
        children: [
            (0, s.jsx)(p.D, { variant: "heading-sm/bold", className: b.wx, children: V.intl.string(V.t.GF433I) }),
            (0, s.jsx)(o.h, { size: 12 }),
            (0, s.jsxs)("div", {
                className: b.uW,
                children: [
                    (0, s.jsx)("div", { className: b.vR, children: x }),
                    r === L.B.GUILD_PRODUCTS && (0, s.jsx)(w.default, {}),
                ],
            }),
        ],
    });
}
