n.d(t, { Z: () => S });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(990705),
    a = n(335818),
    c = n(255835),
    u = n(28664),
    d = n(481060),
    g = n(410030),
    f = n(825102),
    p = n(626135),
    m = n(381585),
    C = n(501431),
    h = n(215023),
    _ = n(981631),
    b = n(231338),
    E = n(388032),
    v = n(587635);
function S() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: i } = (0, C.S)(),
        o = i(),
        { enabled: a } = (0, f.WX)({ location: "Shop" }),
        c = (0, m.sp)(),
        u = l.useCallback(
            (e) => {
                p.default.track(_.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        className: v.filterBar,
        children: [
            (0, r.jsxs)("div", {
                className: s()(v.filterSection, v.itemType),
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        className: v.filterTitle,
                        children: E.intl.string(E.t.Qk6r1a),
                    }),
                    h.xg.map((e) =>
                        (0, r.jsx)(
                            x,
                            {
                                filter: e,
                                trackFilterAction: u,
                            },
                            e,
                        ),
                    ),
                    a &&
                        (0, r.jsx)(d.Checkbox, {
                            checked: t,
                            onChange: () => {
                                u("filter orb eligible ".concat(!1 === t ? "on" : "off")), e();
                            },
                            label: E.intl.string(E.t.AHHHgG),
                        }),
                ],
            }),
            (0, r.jsx)(O, { trackFilterAction: u }),
            (0, r.jsx)(T, { trackFilterAction: u }),
            o &&
                (0, r.jsx)(d.Button, {
                    variant: "secondary",
                    onClick: () => {
                        u("filter reset"), n();
                    },
                    text: E.intl.string(E.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let x = (e) => {
        var t;
        let { filter: n, trackFilterAction: l } = e,
            i = {
                [a.G.AVATAR_DECORATION]: E.intl.string(E.t.dRZYNE),
                [a.G.PROFILE_EFFECT]: E.intl.string(E.t["1cNjtx"]),
                [a.G.NAMEPLATE]: E.intl.string(E.t.V68Fqz),
                [a.G.BUNDLE]: E.intl.string(E.t.FYFpps),
            },
            { itemTypeFilters: s, onToggleItemType: o } = (0, C.S)();
        return (0, r.jsx)(d.Checkbox, {
            checked: s.has(n),
            onChange: () => {
                var e;
                let t = (null == (e = i[n]) ? void 0 : e.toLowerCase()) != null ? i[n].toLowerCase() : n;
                l("filter item type ".concat(t, " ").concat(!1 === s.has(n) ? "on" : "off")), o(n);
            },
            label: null != (t = i[n]) ? t : "",
        });
    },
    O = (e) => {
        let { trackFilterAction: t } = e,
            n = l.useMemo(
                () => [
                    {
                        color: "#9B59B6",
                        label: E.intl.string(E.t.kqUD4P),
                        enum: o.x.PURPLE,
                    },
                    {
                        color: "#3498DB",
                        label: E.intl.string(E.t.qQTRae),
                        enum: o.x.BLUE,
                    },
                    {
                        color: "#2ECC71",
                        label: E.intl.string(E.t["f/Ylk6"]),
                        enum: o.x.GREEN,
                    },
                    {
                        color: "#A0522D",
                        label: E.intl.string(E.t["Sd/BMa"]),
                        enum: o.x.BROWN,
                    },
                    {
                        color: "#F1C40F",
                        label: E.intl.string(E.t["0fevYz"]),
                        enum: o.x.YELLOW,
                    },
                ],
                [],
            ),
            i = l.useMemo(
                () => [
                    {
                        color: "#E67E22",
                        label: E.intl.string(E.t.ZE7weD),
                        enum: o.x.ORANGE,
                    },
                    {
                        color: "#E74C3C",
                        label: E.intl.string(E.t.hKJGOM),
                        enum: o.x.RED,
                    },
                    {
                        color: "#EC407A",
                        label: E.intl.string(E.t.HvLEGM),
                        enum: o.x.PINK,
                    },
                    {
                        color: "#FFFFFF",
                        label: E.intl.string(E.t["CB+lNO"]),
                        enum: o.x.WHITE,
                    },
                    {
                        color: "#262626",
                        label: E.intl.string(E.t["dMey+v"]),
                        enum: o.x.BLACK,
                    },
                ],
                [],
            );
        return (0, r.jsxs)("div", {
            className: v.filterSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: v.filterTitle,
                    children: E.intl.string(E.t.K1xGoG),
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
            className: v.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: s, enum: o } = e;
                return (0, r.jsx)(
                    k,
                    {
                        color: t,
                        label: s,
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
    k = (e) => {
        let { color: t, label: n, enum: l, isToggled: i, onToggleColor: o, trackFilterAction: a } = e;
        return (0, r.jsx)(
            u.u,
            {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(
                    d.P3F,
                    {
                        className: s()(v.circle, { [v.circleToggled]: i }),
                        style: { backgroundColor: t },
                        "aria-label": n,
                        onClick: () => {
                            a("filter color ".concat(n.toLowerCase(), " ").concat(i ? "off" : "on")), o(l);
                        },
                        children:
                            i &&
                            (0, r.jsx)("div", {
                                className: v.checkIcon,
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
    T = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: n, onToggleTheme: i } = (0, C.S)(),
            o = (0, g.ZP)() === b.BR.DARK,
            a = l.useCallback(
                (e) => {
                    if (n.has(e) || o) return "always-white";
                },
                [n, o],
            ),
            u = l.useCallback((e) => (n.has(e) || o ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_NORMAL), [n, o]),
            f = l.useMemo(
                () => [
                    {
                        name: E.intl.string(E.t.aVBOKh),
                        icon: (0, r.jsx)(d.Hzt, {
                            size: "xs",
                            color: u(c.h.ANIME),
                        }),
                        enum: c.h.ANIME,
                    },
                    {
                        name: E.intl.string(E.t["3WoZBc"]),
                        icon: (0, r.jsx)(d.YJV, {
                            size: "xs",
                            color: u(c.h.GAMING),
                        }),
                        enum: c.h.GAMING,
                    },
                    {
                        name: E.intl.string(E.t.yuEmLj),
                        icon: (0, r.jsx)(d.y3H, {
                            size: "xs",
                            color: u(c.h.CUTE_COZY),
                        }),
                        enum: c.h.CUTE_COZY,
                    },
                    {
                        name: E.intl.string(E.t.mMvCHo),
                        icon: (0, r.jsx)(d.lqV, {
                            size: "xs",
                            color: u(c.h.SCI_FI),
                        }),
                        enum: c.h.SCI_FI,
                    },
                    {
                        name: E.intl.string(E.t.TlhOQC),
                        icon: (0, r.jsx)(d.ZRV, {
                            size: "xs",
                            color: u(c.h.FOOD_DRINKS),
                        }),
                        enum: c.h.FOOD_DRINKS,
                    },
                    {
                        name: E.intl.string(E.t["4IaUIM"]),
                        icon: (0, r.jsx)(d.GsA, {
                            size: "xs",
                            color: u(c.h.FANTASY),
                        }),
                        enum: c.h.FANTASY,
                    },
                    {
                        name: E.intl.string(E.t["w0nSG/"]),
                        icon: (0, r.jsx)(d.GuY, {
                            size: "xs",
                            color: u(c.h.ANIMALS_PETS),
                        }),
                        enum: c.h.ANIMALS_PETS,
                    },
                    {
                        name: E.intl.string(E.t.cJng7v),
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
                        name: E.intl.string(E.t.MB9H5Z),
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
            className: v.filterSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: v.filterTitle,
                    children: E.intl.string(E.t.t1Ztrp),
                }),
                (0, r.jsx)("div", {
                    className: v.themeRow,
                    children: f.map((e) => {
                        let { name: l, icon: o, enum: c } = e;
                        return (0, r.jsxs)(
                            d.P3F,
                            {
                                className: s()(v.theme, { [v.themeToggled]: n.has(c) }),
                                onClick: () => {
                                    let e = n.has(c);
                                    t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), i(c);
                                },
                                children: [
                                    o,
                                    (0, r.jsx)(d.Text, {
                                        color: a(c),
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
