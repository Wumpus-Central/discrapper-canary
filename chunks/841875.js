n.d(t, { Z: () => S });
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(990705),
    i = n(335818),
    c = n(255835),
    u = n(481060),
    d = n(410030),
    g = n(825102),
    f = n(626135),
    p = n(381585),
    m = n(501431),
    h = n(215023),
    _ = n(981631),
    b = n(231338),
    C = n(388032),
    E = n(587635);
function S() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: a } = (0, m.S)(),
        o = a(),
        { enabled: i } = (0, g.WX)({ location: "Shop" }),
        c = (0, p.sp)(),
        d = l.useCallback(
            (e) => {
                f.default.track(_.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                        children: C.intl.string(C.t.Qk6r1d),
                    }),
                    h.xg.map((e) =>
                        (0, r.jsx)(
                            O,
                            {
                                filter: e,
                                trackFilterAction: d,
                            },
                            e,
                        ),
                    ),
                    i &&
                        (0, r.jsx)(u.XZJ, {
                            value: t,
                            onChange: () => {
                                d("filter orb eligible ".concat(!1 === t ? "on" : "off")), e();
                            },
                            label: C.intl.string(C.t.AHHHgI),
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: C.intl.string(C.t.AHHHgI),
                            }),
                        }),
                ],
            }),
            (0, r.jsx)(v, { trackFilterAction: d }),
            (0, r.jsx)(T, { trackFilterAction: d }),
            o &&
                (0, r.jsx)(u.zxk, {
                    variant: "secondary",
                    onClick: () => {
                        d("filter reset"), n();
                    },
                    text: C.intl.string(C.t.jwH6KS),
                    fullWidth: !0,
                }),
        ],
    });
}
let O = (e) => {
        var t, n;
        let { filter: l, trackFilterAction: a } = e,
            s = {
                [i.G.AVATAR_DECORATION]: C.intl.string(C.t.dRZYND),
                [i.G.PROFILE_EFFECT]: C.intl.string(C.t["1cNjt7"]),
                [i.G.NAMEPLATE]: C.intl.string(C.t.V68Fq6),
                [i.G.BUNDLE]: C.intl.string(C.t.FYFppq),
            },
            { itemTypeFilters: o, onToggleItemType: c } = (0, m.S)();
        return (0, r.jsx)(u.XZJ, {
            value: o.has(l),
            onChange: () => {
                var e;
                let t = (null == (e = s[l]) ? void 0 : e.toLowerCase()) != null ? s[l].toLowerCase() : l;
                a("filter item type ".concat(t, " ").concat(!1 === o.has(l) ? "on" : "off")), c(l);
            },
            label: null != (t = s[l]) ? t : "",
            children: (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: null != (n = s[l]) ? n : "",
            }),
        });
    },
    v = (e) => {
        let { trackFilterAction: t } = e,
            n = l.useMemo(
                () => [
                    {
                        color: "#9B59B6",
                        label: C.intl.string(C.t.kqUD4O),
                        enum: o.x.PURPLE,
                    },
                    {
                        color: "#3498DB",
                        label: C.intl.string(C.t.qQTRaW),
                        enum: o.x.BLUE,
                    },
                    {
                        color: "#2ECC71",
                        label: C.intl.string(C.t["f/Ylk5"]),
                        enum: o.x.GREEN,
                    },
                    {
                        color: "#A0522D",
                        label: C.intl.string(C.t["Sd/BMT"]),
                        enum: o.x.BROWN,
                    },
                    {
                        color: "#F1C40F",
                        label: C.intl.string(C.t["0fevY2"]),
                        enum: o.x.YELLOW,
                    },
                ],
                [],
            ),
            a = l.useMemo(
                () => [
                    {
                        color: "#E67E22",
                        label: C.intl.string(C.t.ZE7weH),
                        enum: o.x.ORANGE,
                    },
                    {
                        color: "#E74C3C",
                        label: C.intl.string(C.t.hKJGOD),
                        enum: o.x.RED,
                    },
                    {
                        color: "#EC407A",
                        label: C.intl.string(C.t.HvLEGB),
                        enum: o.x.PINK,
                    },
                    {
                        color: "#FFFFFF",
                        label: C.intl.string(C.t["CB+lND"]),
                        enum: o.x.WHITE,
                    },
                    {
                        color: "#262626",
                        label: C.intl.string(C.t["dMey+v"]),
                        enum: o.x.BLACK,
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
                    children: C.intl.string(C.t.K1xGoK),
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
            { colorFilters: l, onToggleColor: a } = (0, m.S)();
        return (0, r.jsx)("div", {
            className: E.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: s, enum: o } = e;
                return (0, r.jsx)(
                    y,
                    {
                        color: t,
                        label: s,
                        enum: o,
                        isToggled: l.has(o),
                        onToggleColor: a,
                        trackFilterAction: n,
                    },
                    o,
                );
            }),
        });
    },
    y = (e) => {
        let { color: t, label: n, enum: l, isToggled: a, onToggleColor: o, trackFilterAction: i } = e;
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
                                i("filter color ".concat(n.toLowerCase(), " ").concat(a ? "off" : "on")), o(l);
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
            { themeFilters: n, onToggleTheme: a } = (0, m.S)(),
            o = (0, d.ZP)() === b.BR.DARK,
            i = l.useCallback(
                (e) => {
                    if (n.has(e) || o) return "always-white";
                },
                [n, o],
            ),
            g = l.useCallback((e) => (n.has(e) || o ? u.TVs.colors.WHITE : u.TVs.colors.INTERACTIVE_NORMAL), [n, o]),
            f = l.useMemo(
                () => [
                    {
                        name: C.intl.string(C.t.aVBOKi),
                        icon: (0, r.jsx)(u.Hzt, {
                            size: "xs",
                            color: g(c.h.ANIME),
                        }),
                        enum: c.h.ANIME,
                    },
                    {
                        name: C.intl.string(C.t["3WoZBQ"]),
                        icon: (0, r.jsx)(u.YJV, {
                            size: "xs",
                            color: g(c.h.GAMING),
                        }),
                        enum: c.h.GAMING,
                    },
                    {
                        name: C.intl.string(C.t.yuEmLi),
                        icon: (0, r.jsx)(u.y3H, {
                            size: "xs",
                            color: g(c.h.CUTE_COZY),
                        }),
                        enum: c.h.CUTE_COZY,
                    },
                    {
                        name: C.intl.string(C.t.mMvCHh),
                        icon: (0, r.jsx)(u.lqV, {
                            size: "xs",
                            color: g(c.h.SCI_FI),
                        }),
                        enum: c.h.SCI_FI,
                    },
                    {
                        name: C.intl.string(C.t.TlhOQE),
                        icon: (0, r.jsx)(u.ZRV, {
                            size: "xs",
                            color: g(c.h.FOOD_DRINKS),
                        }),
                        enum: c.h.FOOD_DRINKS,
                    },
                    {
                        name: C.intl.string(C.t["4IaUIC"]),
                        icon: (0, r.jsx)(u.GsA, {
                            size: "xs",
                            color: g(c.h.FANTASY),
                        }),
                        enum: c.h.FANTASY,
                    },
                    {
                        name: C.intl.string(C.t.w0nSGx),
                        icon: (0, r.jsx)(u.GuY, {
                            size: "xs",
                            color: g(c.h.ANIMALS_PETS),
                        }),
                        enum: c.h.ANIMALS_PETS,
                    },
                    {
                        name: C.intl.string(C.t.cJng7u),
                        icon: (0, r.jsx)(u.NQW, {
                            size: "xs",
                            color: g(c.h.NATURE),
                        }),
                        enum: c.h.NATURE,
                    },
                    {
                        name: C.intl.string(C.t["5mUvyM"]),
                        icon: (0, r.jsx)(u.Roe, {
                            size: "xs",
                            color: g(c.h.MOVIES_TV_SHOWS),
                        }),
                        enum: c.h.MOVIES_TV_SHOWS,
                    },
                    {
                        name: C.intl.string(C.t.MB9H5e),
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
                    children: C.intl.string(C.t.t1Ztrq),
                }),
                (0, r.jsx)("div", {
                    className: E.themeRow,
                    children: f.map((e) => {
                        let { name: l, icon: o, enum: c } = e;
                        return (0, r.jsxs)(
                            u.P3F,
                            {
                                className: s()(E.theme, { [E.themeToggled]: n.has(c) }),
                                onClick: () => {
                                    let e = n.has(c);
                                    t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), a(c);
                                },
                                children: [
                                    o,
                                    (0, r.jsx)(u.Text, {
                                        color: i(c),
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
