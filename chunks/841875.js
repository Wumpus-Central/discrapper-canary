n.d(t, { Z: () => E });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(990705),
    s = n(335818),
    c = n(255835),
    u = n(28664),
    d = n(481060),
    p = n(410030),
    g = n(825102),
    f = n(626135),
    h = n(381585),
    C = n(501431),
    m = n(215023),
    _ = n(981631),
    b = n(231338),
    v = n(388032),
    x = n(587635);
function E() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: i } = (0, C.S)(),
        o = i(),
        { enabled: s } = (0, g.WX)({ location: "Shop" }),
        c = (0, h.sp)(),
        u = l.useCallback(
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
        className: x.filterBar,
        children: [
            (0, r.jsxs)("div", {
                className: a()(x.filterSection, x.itemType),
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        className: x.filterTitle,
                        children: v.intl.string(v.t.Qk6r1a),
                    }),
                    m.xg.map((e) =>
                        (0, r.jsx)(
                            O,
                            {
                                filter: e,
                                trackFilterAction: u,
                            },
                            e,
                        ),
                    ),
                    s &&
                        (0, r.jsx)(d.Checkbox, {
                            checked: t,
                            onChange: () => {
                                u("filter orb eligible ".concat(!1 === t ? "on" : "off")), e();
                            },
                            label: v.intl.string(v.t.AHHHgG),
                        }),
                ],
            }),
            (0, r.jsx)(S, { trackFilterAction: u }),
            (0, r.jsx)(k, { trackFilterAction: u }),
            o &&
                (0, r.jsx)(d.Button, {
                    variant: "secondary",
                    onClick: () => {
                        u("filter reset"), n();
                    },
                    text: v.intl.string(v.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let O = (e) => {
        var t;
        let { filter: n, trackFilterAction: l } = e,
            i = {
                [s.G.AVATAR_DECORATION]: v.intl.string(v.t.dRZYNE),
                [s.G.PROFILE_EFFECT]: v.intl.string(v.t["1cNjtx"]),
                [s.G.NAMEPLATE]: v.intl.string(v.t.V68Fqz),
                [s.G.BUNDLE]: v.intl.string(v.t.FYFpps),
            },
            { itemTypeFilters: a, onToggleItemType: o } = (0, C.S)();
        return (0, r.jsx)(d.Checkbox, {
            checked: a.has(n),
            onChange: () => {
                var e;
                let t = (null == (e = i[n]) ? void 0 : e.toLowerCase()) != null ? i[n].toLowerCase() : n;
                l("filter item type ".concat(t, " ").concat(!1 === a.has(n) ? "on" : "off")), o(n);
            },
            label: null != (t = i[n]) ? t : "",
        });
    },
    S = (e) => {
        let { trackFilterAction: t } = e,
            n = l.useMemo(
                () => [
                    {
                        color: "#9B59B6",
                        label: v.intl.string(v.t.kqUD4P),
                        enum: o.x.PURPLE,
                    },
                    {
                        color: "#3498DB",
                        label: v.intl.string(v.t.qQTRae),
                        enum: o.x.BLUE,
                    },
                    {
                        color: "#2ECC71",
                        label: v.intl.string(v.t["f/Ylk6"]),
                        enum: o.x.GREEN,
                    },
                    {
                        color: "#A0522D",
                        label: v.intl.string(v.t["Sd/BMa"]),
                        enum: o.x.BROWN,
                    },
                    {
                        color: "#F1C40F",
                        label: v.intl.string(v.t["0fevYz"]),
                        enum: o.x.YELLOW,
                    },
                ],
                [],
            ),
            i = l.useMemo(
                () => [
                    {
                        color: "#E67E22",
                        label: v.intl.string(v.t.ZE7weD),
                        enum: o.x.ORANGE,
                    },
                    {
                        color: "#E74C3C",
                        label: v.intl.string(v.t.hKJGOM),
                        enum: o.x.RED,
                    },
                    {
                        color: "#EC407A",
                        label: v.intl.string(v.t.HvLEGM),
                        enum: o.x.PINK,
                    },
                    {
                        color: "#FFFFFF",
                        label: v.intl.string(v.t["CB+lNO"]),
                        enum: o.x.WHITE,
                    },
                    {
                        color: "#262626",
                        label: v.intl.string(v.t["dMey+v"]),
                        enum: o.x.BLACK,
                    },
                ],
                [],
            );
        return (0, r.jsxs)("div", {
            className: x.filterSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: x.filterTitle,
                    children: v.intl.string(v.t.K1xGoG),
                }),
                (0, r.jsx)(y, {
                    colors: n,
                    trackFilterAction: t,
                }),
                (0, r.jsx)(y, {
                    colors: i,
                    trackFilterAction: t,
                }),
            ],
        });
    },
    y = (e) => {
        let { colors: t, trackFilterAction: n } = e,
            { colorFilters: l, onToggleColor: i } = (0, C.S)();
        return (0, r.jsx)("div", {
            className: x.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: a, enum: o } = e;
                return (0, r.jsx)(
                    j,
                    {
                        color: t,
                        label: a,
                        enum: o,
                        isToggled: l.has(o),
                        onToggleColor: i,
                        trackFilterAction: n,
                    },
                    o,
                );
            }),
        });
    },
    j = (e) => {
        let { color: t, label: n, enum: l, isToggled: i, onToggleColor: o, trackFilterAction: s } = e;
        return (0, r.jsx)(
            u.u,
            {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(
                    d.P3F,
                    {
                        className: a()(x.circle, { [x.circleToggled]: i }),
                        style: { backgroundColor: t },
                        "aria-label": n,
                        onClick: () => {
                            s("filter color ".concat(n.toLowerCase(), " ").concat(i ? "off" : "on")), o(l);
                        },
                        children:
                            i &&
                            (0, r.jsx)("div", {
                                className: x.checkIcon,
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
    k = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: n, onToggleTheme: i } = (0, C.S)(),
            o = (0, p.ZP)() === b.BR.DARK,
            s = l.useCallback(
                (e) => {
                    if (n.has(e) || o) return "always-white";
                },
                [n, o],
            ),
            u = l.useCallback((e) => (n.has(e) || o ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_NORMAL), [n, o]),
            g = l.useMemo(
                () => [
                    {
                        name: v.intl.string(v.t.aVBOKh),
                        icon: (0, r.jsx)(d.Hzt, {
                            size: "xs",
                            color: u(c.h.ANIME),
                        }),
                        enum: c.h.ANIME,
                    },
                    {
                        name: v.intl.string(v.t["3WoZBc"]),
                        icon: (0, r.jsx)(d.YJV, {
                            size: "xs",
                            color: u(c.h.GAMING),
                        }),
                        enum: c.h.GAMING,
                    },
                    {
                        name: v.intl.string(v.t.yuEmLj),
                        icon: (0, r.jsx)(d.y3H, {
                            size: "xs",
                            color: u(c.h.CUTE_COZY),
                        }),
                        enum: c.h.CUTE_COZY,
                    },
                    {
                        name: v.intl.string(v.t.mMvCHo),
                        icon: (0, r.jsx)(d.lqV, {
                            size: "xs",
                            color: u(c.h.SCI_FI),
                        }),
                        enum: c.h.SCI_FI,
                    },
                    {
                        name: v.intl.string(v.t.TlhOQC),
                        icon: (0, r.jsx)(d.ZRV, {
                            size: "xs",
                            color: u(c.h.FOOD_DRINKS),
                        }),
                        enum: c.h.FOOD_DRINKS,
                    },
                    {
                        name: v.intl.string(v.t["4IaUIM"]),
                        icon: (0, r.jsx)(d.GsA, {
                            size: "xs",
                            color: u(c.h.FANTASY),
                        }),
                        enum: c.h.FANTASY,
                    },
                    {
                        name: v.intl.string(v.t["w0nSG/"]),
                        icon: (0, r.jsx)(d.GuY, {
                            size: "xs",
                            color: u(c.h.ANIMALS_PETS),
                        }),
                        enum: c.h.ANIMALS_PETS,
                    },
                    {
                        name: v.intl.string(v.t.cJng7v),
                        icon: (0, r.jsx)(d.NQW, {
                            size: "xs",
                            color: u(c.h.NATURE),
                        }),
                        enum: c.h.NATURE,
                    },
                    {
                        name: v.intl.string(v.t["5mUvyM"]),
                        icon: (0, r.jsx)(d.Roe, {
                            size: "xs",
                            color: u(c.h.MOVIES_TV_SHOWS),
                        }),
                        enum: c.h.MOVIES_TV_SHOWS,
                    },
                    {
                        name: v.intl.string(v.t.MB9H5Z),
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
            className: x.filterSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: x.filterTitle,
                    children: v.intl.string(v.t.t1Ztrp),
                }),
                (0, r.jsx)("div", {
                    className: x.themeRow,
                    children: g.map((e) => {
                        let { name: l, icon: o, enum: c } = e;
                        return (0, r.jsxs)(
                            d.P3F,
                            {
                                className: a()(x.theme, { [x.themeToggled]: n.has(c) }),
                                onClick: () => {
                                    let e = n.has(c);
                                    t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), i(c);
                                },
                                children: [
                                    o,
                                    (0, r.jsx)(d.Text, {
                                        color: s(c),
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
