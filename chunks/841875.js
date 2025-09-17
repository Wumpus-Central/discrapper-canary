n.d(t, { Z: () => S });
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(990705),
    o = n(335818),
    c = n(255835),
    u = n(481060),
    d = n(410030),
    g = n(825102),
    f = n(626135),
    p = n(381585),
    h = n(501431),
    _ = n(215023),
    m = n(981631),
    C = n(231338),
    b = n(388032),
    E = n(92818);
function S() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: a } = (0, h.S)(),
        i = a(),
        { enabled: o } = (0, g.WX)({ location: "Shop" }),
        c = (0, p.sp)(),
        d = l.useCallback(
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
        className: E.filterBar,
        children: [
            (0, r.jsxs)("div", {
                className: s()(E.filterSection, E.itemType),
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        className: E.filterTitle,
                        children: b.intl.string(b.t.Qk6r1d),
                    }),
                    _.xg.map((e) =>
                        (0, r.jsx)(
                            v,
                            {
                                filter: e,
                                trackFilterAction: d,
                            },
                            e,
                        ),
                    ),
                    o &&
                        (0, r.jsx)(u.XZJ, {
                            checked: t,
                            onChange: () => {
                                d("filter orb eligible ".concat(!1 === t ? "on" : "off")), e();
                            },
                            label: b.intl.string(b.t.AHHHgI),
                        }),
                ],
            }),
            (0, r.jsx)(O, { trackFilterAction: d }),
            (0, r.jsx)(T, { trackFilterAction: d }),
            i &&
                (0, r.jsx)(u.zxk, {
                    variant: "secondary",
                    onClick: () => {
                        d("filter reset"), n();
                    },
                    text: b.intl.string(b.t.jwH6KS),
                    fullWidth: !0,
                }),
        ],
    });
}
let v = (e) => {
        var t;
        let { filter: n, trackFilterAction: l } = e,
            a = {
                [o.G.AVATAR_DECORATION]: b.intl.string(b.t.dRZYND),
                [o.G.PROFILE_EFFECT]: b.intl.string(b.t["1cNjt7"]),
                [o.G.NAMEPLATE]: b.intl.string(b.t.V68Fq6),
                [o.G.BUNDLE]: b.intl.string(b.t.FYFppq),
            },
            { itemTypeFilters: s, onToggleItemType: i } = (0, h.S)();
        return (0, r.jsx)(u.XZJ, {
            checked: s.has(n),
            onChange: () => {
                var e;
                let t = (null == (e = a[n]) ? void 0 : e.toLowerCase()) != null ? a[n].toLowerCase() : n;
                l("filter item type ".concat(t, " ").concat(!1 === s.has(n) ? "on" : "off")), i(n);
            },
            label: null != (t = a[n]) ? t : "",
        });
    },
    O = (e) => {
        let { trackFilterAction: t } = e,
            n = l.useMemo(
                () => [
                    {
                        color: "#9B59B6",
                        label: b.intl.string(b.t.kqUD4O),
                        enum: i.x.PURPLE,
                    },
                    {
                        color: "#3498DB",
                        label: b.intl.string(b.t.qQTRaW),
                        enum: i.x.BLUE,
                    },
                    {
                        color: "#2ECC71",
                        label: b.intl.string(b.t["f/Ylk5"]),
                        enum: i.x.GREEN,
                    },
                    {
                        color: "#A0522D",
                        label: b.intl.string(b.t["Sd/BMT"]),
                        enum: i.x.BROWN,
                    },
                    {
                        color: "#F1C40F",
                        label: b.intl.string(b.t["0fevY2"]),
                        enum: i.x.YELLOW,
                    },
                ],
                [],
            ),
            a = l.useMemo(
                () => [
                    {
                        color: "#E67E22",
                        label: b.intl.string(b.t.ZE7weH),
                        enum: i.x.ORANGE,
                    },
                    {
                        color: "#E74C3C",
                        label: b.intl.string(b.t.hKJGOD),
                        enum: i.x.RED,
                    },
                    {
                        color: "#EC407A",
                        label: b.intl.string(b.t.HvLEGB),
                        enum: i.x.PINK,
                    },
                    {
                        color: "#FFFFFF",
                        label: b.intl.string(b.t["CB+lND"]),
                        enum: i.x.WHITE,
                    },
                    {
                        color: "#262626",
                        label: b.intl.string(b.t["dMey+v"]),
                        enum: i.x.BLACK,
                    },
                ],
                [],
            );
        return (0, r.jsxs)("div", {
            className: E.filterSection,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    className: E.filterTitle,
                    children: b.intl.string(b.t.K1xGoK),
                }),
                (0, r.jsx)(x, {
                    colors: n,
                    trackFilterAction: t,
                }),
                (0, r.jsx)(x, {
                    colors: a,
                    trackFilterAction: t,
                }),
            ],
        });
    },
    x = (e) => {
        let { colors: t, trackFilterAction: n } = e,
            { colorFilters: l, onToggleColor: a } = (0, h.S)();
        return (0, r.jsx)("div", {
            className: E.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: s, enum: i } = e;
                return (0, r.jsx)(
                    y,
                    {
                        color: t,
                        label: s,
                        enum: i,
                        isToggled: l.has(i),
                        onToggleColor: a,
                        trackFilterAction: n,
                    },
                    i,
                );
            }),
        });
    },
    y = (e) => {
        let { color: t, label: n, enum: l, isToggled: a, onToggleColor: i, trackFilterAction: o } = e;
        return (0, r.jsx)(
            u.ua7,
            {
                text: n,
                children: (e) => {
                    let { onMouseEnter: c, onMouseLeave: d } = e;
                    return (0, r.jsx)(
                        u.P3F,
                        {
                            onMouseEnter: c,
                            onMouseLeave: d,
                            onFocus: c,
                            onBlur: d,
                            className: s()(E.circle, { [E.circleToggled]: a }),
                            style: { backgroundColor: t },
                            "aria-label": n,
                            onClick: () => {
                                o("filter color ".concat(n.toLowerCase(), " ").concat(a ? "off" : "on")), i(l);
                            },
                            children:
                                a &&
                                (0, r.jsx)("div", {
                                    className: E.checkIcon,
                                    children: (0, r.jsx)(u.sV5, {
                                        size: "xs",
                                        color: u.TVs.colors.WHITE,
                                    }),
                                }),
                        },
                        t,
                    );
                },
            },
            n,
        );
    },
    T = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: n, onToggleTheme: a } = (0, h.S)(),
            i = (0, d.ZP)() === C.BR.DARK,
            o = l.useCallback(
                (e) => {
                    if (n.has(e) || i) return "always-white";
                },
                [n, i],
            ),
            g = l.useCallback((e) => (n.has(e) || i ? u.TVs.colors.WHITE : u.TVs.colors.INTERACTIVE_NORMAL), [n, i]),
            f = l.useMemo(
                () => [
                    {
                        name: b.intl.string(b.t.aVBOKi),
                        icon: (0, r.jsx)(u.Hzt, {
                            size: "xs",
                            color: g(c.h.ANIME),
                        }),
                        enum: c.h.ANIME,
                    },
                    {
                        name: b.intl.string(b.t["3WoZBQ"]),
                        icon: (0, r.jsx)(u.YJV, {
                            size: "xs",
                            color: g(c.h.GAMING),
                        }),
                        enum: c.h.GAMING,
                    },
                    {
                        name: b.intl.string(b.t.yuEmLi),
                        icon: (0, r.jsx)(u.y3H, {
                            size: "xs",
                            color: g(c.h.CUTE_COZY),
                        }),
                        enum: c.h.CUTE_COZY,
                    },
                    {
                        name: b.intl.string(b.t.mMvCHh),
                        icon: (0, r.jsx)(u.lqV, {
                            size: "xs",
                            color: g(c.h.SCI_FI),
                        }),
                        enum: c.h.SCI_FI,
                    },
                    {
                        name: b.intl.string(b.t.TlhOQE),
                        icon: (0, r.jsx)(u.ZRV, {
                            size: "xs",
                            color: g(c.h.FOOD_DRINKS),
                        }),
                        enum: c.h.FOOD_DRINKS,
                    },
                    {
                        name: b.intl.string(b.t["4IaUIC"]),
                        icon: (0, r.jsx)(u.GsA, {
                            size: "xs",
                            color: g(c.h.FANTASY),
                        }),
                        enum: c.h.FANTASY,
                    },
                    {
                        name: b.intl.string(b.t.w0nSGx),
                        icon: (0, r.jsx)(u.GuY, {
                            size: "xs",
                            color: g(c.h.ANIMALS_PETS),
                        }),
                        enum: c.h.ANIMALS_PETS,
                    },
                    {
                        name: b.intl.string(b.t.cJng7u),
                        icon: (0, r.jsx)(u.NQW, {
                            size: "xs",
                            color: g(c.h.NATURE),
                        }),
                        enum: c.h.NATURE,
                    },
                    {
                        name: b.intl.string(b.t["5mUvyM"]),
                        icon: (0, r.jsx)(u.Roe, {
                            size: "xs",
                            color: g(c.h.MOVIES_TV_SHOWS),
                        }),
                        enum: c.h.MOVIES_TV_SHOWS,
                    },
                    {
                        name: b.intl.string(b.t.MB9H5e),
                        icon: (0, r.jsx)(u._Tr, {
                            size: "xs",
                            color: g(c.h.DARK_MOODY),
                        }),
                        enum: c.h.DARK_MOODY,
                    },
                ],
                [g],
            );
        return (0, r.jsxs)("div", {
            className: E.filterSection,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    className: E.filterTitle,
                    children: b.intl.string(b.t.t1Ztrq),
                }),
                (0, r.jsx)("div", {
                    className: E.themeRow,
                    children: f.map((e) => {
                        let { name: l, icon: i, enum: c } = e;
                        return (0, r.jsxs)(
                            u.P3F,
                            {
                                className: s()(E.theme, { [E.themeToggled]: n.has(c) }),
                                onClick: () => {
                                    let e = n.has(c);
                                    t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), a(c);
                                },
                                children: [
                                    i,
                                    (0, r.jsx)(u.Text, {
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
