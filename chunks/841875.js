n.d(t, { Z: () => v });
var r = n(951288),
    l = n(647438),
    s = n(120356),
    a = n.n(s),
    i = n(990705),
    o = n(335818),
    c = n(255835),
    u = n(28664),
    d = n(481060),
    g = n(410030),
    p = n(825102),
    f = n(626135),
    C = n(381585),
    h = n(501431),
    _ = n(215023),
    m = n(981631),
    b = n(231338),
    E = n(388032),
    S = n(92818);
function v() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: s } = (0, h.S)(),
        i = s(),
        { enabled: o } = (0, p.WX)({ location: "Shop" }),
        c = (0, C.sp)(),
        u = l.useCallback(
            (e) => {
                f.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == c ? void 0 : c.sessionId,
                    page_section: null == c ? void 0 : c.pageSection,
                    page_category: null == c ? void 0 : c.pageCategory,
                    page_index: null == c ? void 0 : c.pageIndex,
                    page_size: null == c ? void 0 : c.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [c],
        );
    return (0, r.jsxs)("div", {
        className: S.filterBar,
        children: [
            (0, r.jsxs)("div", {
                className: a()(S.filterSection, S.itemType),
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        className: S.filterTitle,
                        children: E.intl.string(E.t.Qk6r1d),
                    }),
                    _.xg.map((e) =>
                        (0, r.jsx)(
                            x,
                            {
                                filter: e,
                                trackFilterAction: u,
                            },
                            e,
                        ),
                    ),
                    o &&
                        (0, r.jsx)(d.XZJ, {
                            checked: t,
                            onChange: () => {
                                u("filter orb eligible ".concat(!1 === t ? "on" : "off")), e();
                            },
                            label: E.intl.string(E.t.AHHHgI),
                        }),
                ],
            }),
            (0, r.jsx)(O, { trackFilterAction: u }),
            (0, r.jsx)(L, { trackFilterAction: u }),
            i &&
                (0, r.jsx)(d.zxk, {
                    variant: "secondary",
                    onClick: () => {
                        u("filter reset"), n();
                    },
                    text: E.intl.string(E.t.jwH6KS),
                    fullWidth: !0,
                }),
        ],
    });
}
let x = (e) => {
        var t;
        let { filter: n, trackFilterAction: l } = e,
            s = {
                [o.G.AVATAR_DECORATION]: E.intl.string(E.t.dRZYND),
                [o.G.PROFILE_EFFECT]: E.intl.string(E.t["1cNjt7"]),
                [o.G.NAMEPLATE]: E.intl.string(E.t.V68Fq6),
                [o.G.BUNDLE]: E.intl.string(E.t.FYFppq),
            },
            { itemTypeFilters: a, onToggleItemType: i } = (0, h.S)();
        return (0, r.jsx)(d.XZJ, {
            checked: a.has(n),
            onChange: () => {
                var e;
                let t = (null == (e = s[n]) ? void 0 : e.toLowerCase()) != null ? s[n].toLowerCase() : n;
                l("filter item type ".concat(t, " ").concat(!1 === a.has(n) ? "on" : "off")), i(n);
            },
            label: null != (t = s[n]) ? t : "",
        });
    },
    O = (e) => {
        let { trackFilterAction: t } = e,
            n = l.useMemo(
                () => [
                    {
                        color: "#9B59B6",
                        label: E.intl.string(E.t.kqUD4O),
                        enum: i.x.PURPLE,
                    },
                    {
                        color: "#3498DB",
                        label: E.intl.string(E.t.qQTRaW),
                        enum: i.x.BLUE,
                    },
                    {
                        color: "#2ECC71",
                        label: E.intl.string(E.t["f/Ylk5"]),
                        enum: i.x.GREEN,
                    },
                    {
                        color: "#A0522D",
                        label: E.intl.string(E.t["Sd/BMT"]),
                        enum: i.x.BROWN,
                    },
                    {
                        color: "#F1C40F",
                        label: E.intl.string(E.t["0fevY2"]),
                        enum: i.x.YELLOW,
                    },
                ],
                [],
            ),
            s = l.useMemo(
                () => [
                    {
                        color: "#E67E22",
                        label: E.intl.string(E.t.ZE7weH),
                        enum: i.x.ORANGE,
                    },
                    {
                        color: "#E74C3C",
                        label: E.intl.string(E.t.hKJGOD),
                        enum: i.x.RED,
                    },
                    {
                        color: "#EC407A",
                        label: E.intl.string(E.t.HvLEGB),
                        enum: i.x.PINK,
                    },
                    {
                        color: "#FFFFFF",
                        label: E.intl.string(E.t["CB+lND"]),
                        enum: i.x.WHITE,
                    },
                    {
                        color: "#262626",
                        label: E.intl.string(E.t["dMey+v"]),
                        enum: i.x.BLACK,
                    },
                ],
                [],
            );
        return (0, r.jsxs)("div", {
            className: S.filterSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: S.filterTitle,
                    children: E.intl.string(E.t.K1xGoK),
                }),
                (0, r.jsx)(y, {
                    colors: n,
                    trackFilterAction: t,
                }),
                (0, r.jsx)(y, {
                    colors: s,
                    trackFilterAction: t,
                }),
            ],
        });
    },
    y = (e) => {
        let { colors: t, trackFilterAction: n } = e,
            { colorFilters: l, onToggleColor: s } = (0, h.S)();
        return (0, r.jsx)("div", {
            className: S.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: a, enum: i } = e;
                return (0, r.jsx)(
                    T,
                    {
                        color: t,
                        label: a,
                        enum: i,
                        isToggled: l.has(i),
                        onToggleColor: s,
                        trackFilterAction: n,
                    },
                    i,
                );
            }),
        });
    },
    T = (e) => {
        let { color: t, label: n, enum: l, isToggled: s, onToggleColor: i, trackFilterAction: o } = e;
        return (0, r.jsx)(
            u.u,
            {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(
                    d.P3F,
                    {
                        className: a()(S.circle, { [S.circleToggled]: s }),
                        style: { backgroundColor: t },
                        "aria-label": n,
                        onClick: () => {
                            o("filter color ".concat(n.toLowerCase(), " ").concat(s ? "off" : "on")), i(l);
                        },
                        children:
                            s &&
                            (0, r.jsx)("div", {
                                className: S.checkIcon,
                                children: (0, r.jsx)(d.sV5, {
                                    size: "xs",
                                    color: d.TVs.colors.WHITE,
                                }),
                            }),
                    },
                    t,
                ),
            },
            n,
        );
    },
    L = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: n, onToggleTheme: s } = (0, h.S)(),
            i = (0, g.ZP)() === b.BR.DARK,
            o = l.useCallback(
                (e) => {
                    if (n.has(e) || i) return "always-white";
                },
                [n, i],
            ),
            u = l.useCallback((e) => (n.has(e) || i ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_NORMAL), [n, i]),
            p = l.useMemo(
                () => [
                    {
                        name: E.intl.string(E.t.aVBOKi),
                        icon: (0, r.jsx)(d.Hzt, {
                            size: "xs",
                            color: u(c.h.ANIME),
                        }),
                        enum: c.h.ANIME,
                    },
                    {
                        name: E.intl.string(E.t["3WoZBQ"]),
                        icon: (0, r.jsx)(d.YJV, {
                            size: "xs",
                            color: u(c.h.GAMING),
                        }),
                        enum: c.h.GAMING,
                    },
                    {
                        name: E.intl.string(E.t.yuEmLi),
                        icon: (0, r.jsx)(d.y3H, {
                            size: "xs",
                            color: u(c.h.CUTE_COZY),
                        }),
                        enum: c.h.CUTE_COZY,
                    },
                    {
                        name: E.intl.string(E.t.mMvCHh),
                        icon: (0, r.jsx)(d.lqV, {
                            size: "xs",
                            color: u(c.h.SCI_FI),
                        }),
                        enum: c.h.SCI_FI,
                    },
                    {
                        name: E.intl.string(E.t.TlhOQE),
                        icon: (0, r.jsx)(d.ZRV, {
                            size: "xs",
                            color: u(c.h.FOOD_DRINKS),
                        }),
                        enum: c.h.FOOD_DRINKS,
                    },
                    {
                        name: E.intl.string(E.t["4IaUIC"]),
                        icon: (0, r.jsx)(d.GsA, {
                            size: "xs",
                            color: u(c.h.FANTASY),
                        }),
                        enum: c.h.FANTASY,
                    },
                    {
                        name: E.intl.string(E.t.w0nSGx),
                        icon: (0, r.jsx)(d.GuY, {
                            size: "xs",
                            color: u(c.h.ANIMALS_PETS),
                        }),
                        enum: c.h.ANIMALS_PETS,
                    },
                    {
                        name: E.intl.string(E.t.cJng7u),
                        icon: (0, r.jsx)(d.NQW, {
                            size: "xs",
                            color: u(c.h.NATURE),
                        }),
                        enum: c.h.NATURE,
                    },
                    {
                        name: E.intl.string(E.t["5mUvyM"]),
                        icon: (0, r.jsx)(d.Roe, {
                            size: "xs",
                            color: u(c.h.MOVIES_TV_SHOWS),
                        }),
                        enum: c.h.MOVIES_TV_SHOWS,
                    },
                    {
                        name: E.intl.string(E.t.MB9H5e),
                        icon: (0, r.jsx)(d._Tr, {
                            size: "xs",
                            color: u(c.h.DARK_MOODY),
                        }),
                        enum: c.h.DARK_MOODY,
                    },
                ],
                [u],
            );
        return (0, r.jsxs)("div", {
            className: S.filterSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: S.filterTitle,
                    children: E.intl.string(E.t.t1Ztrq),
                }),
                (0, r.jsx)("div", {
                    className: S.themeRow,
                    children: p.map((e) => {
                        let { name: l, icon: i, enum: c } = e;
                        return (0, r.jsxs)(
                            d.P3F,
                            {
                                className: a()(S.theme, { [S.themeToggled]: n.has(c) }),
                                onClick: () => {
                                    let e = n.has(c);
                                    t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), s(c);
                                },
                                children: [
                                    i,
                                    (0, r.jsx)(d.Text, {
                                        color: o(c),
                                        variant: "text-md/medium",
                                        children: l,
                                    }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            ],
        });
    };
