n.d(t, { Z: () => x });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(990705),
    o = n(335818),
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
    E = n(587635);
function x() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: i } = (0, C.S)(),
        a = i(),
        { enabled: o } = (0, g.WX)({ location: "Shop" }),
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
        className: E.filterBar,
        children: [
            (0, r.jsxs)("div", {
                className: s()(E.filterSection, E.itemType),
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        className: E.filterTitle,
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
                    o &&
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
            a &&
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
                [o.G.AVATAR_DECORATION]: v.intl.string(v.t.dRZYNE),
                [o.G.PROFILE_EFFECT]: v.intl.string(v.t["1cNjtx"]),
                [o.G.NAMEPLATE]: v.intl.string(v.t.V68Fqz),
                [o.G.BUNDLE]: v.intl.string(v.t.FYFpps),
            },
            { itemTypeFilters: s, onToggleItemType: a } = (0, C.S)();
        return (0, r.jsx)(d.Checkbox, {
            checked: s.has(n),
            onChange: () => {
                var e;
                let t = (null == (e = i[n]) ? void 0 : e.toLowerCase()) != null ? i[n].toLowerCase() : n;
                l("filter item type ".concat(t, " ").concat(!1 === s.has(n) ? "on" : "off")), a(n);
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
                        enum: a.x.PURPLE,
                    },
                    {
                        color: "#3498DB",
                        label: v.intl.string(v.t.qQTRae),
                        enum: a.x.BLUE,
                    },
                    {
                        color: "#2ECC71",
                        label: v.intl.string(v.t["f/Ylk6"]),
                        enum: a.x.GREEN,
                    },
                    {
                        color: "#A0522D",
                        label: v.intl.string(v.t["Sd/BMa"]),
                        enum: a.x.BROWN,
                    },
                    {
                        color: "#F1C40F",
                        label: v.intl.string(v.t["0fevYz"]),
                        enum: a.x.YELLOW,
                    },
                ],
                [],
            ),
            i = l.useMemo(
                () => [
                    {
                        color: "#E67E22",
                        label: v.intl.string(v.t.ZE7weD),
                        enum: a.x.ORANGE,
                    },
                    {
                        color: "#E74C3C",
                        label: v.intl.string(v.t.hKJGOM),
                        enum: a.x.RED,
                    },
                    {
                        color: "#EC407A",
                        label: v.intl.string(v.t.HvLEGM),
                        enum: a.x.PINK,
                    },
                    {
                        color: "#FFFFFF",
                        label: v.intl.string(v.t["CB+lNO"]),
                        enum: a.x.WHITE,
                    },
                    {
                        color: "#262626",
                        label: v.intl.string(v.t["dMey+v"]),
                        enum: a.x.BLACK,
                    },
                ],
                [],
            );
        return (0, r.jsxs)("div", {
            className: E.filterSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: E.filterTitle,
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
            className: E.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: s, enum: a } = e;
                return (0, r.jsx)(
                    j,
                    {
                        color: t,
                        label: s,
                        enum: a,
                        isToggled: l.has(a),
                        onToggleColor: i,
                        trackFilterAction: n,
                    },
                    a,
                );
            }),
        });
    },
    j = (e) => {
        let { color: t, label: n, enum: l, isToggled: i, onToggleColor: a, trackFilterAction: o } = e;
        return (0, r.jsx)(
            u.u,
            {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(
                    d.P3F,
                    {
                        className: s()(E.circle, { [E.circleToggled]: i }),
                        style: { backgroundColor: t },
                        "aria-label": n,
                        onClick: () => {
                            o("filter color ".concat(n.toLowerCase(), " ").concat(i ? "off" : "on")), a(l);
                        },
                        children:
                            i &&
                            (0, r.jsx)("div", {
                                className: E.checkIcon,
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
            a = (0, p.ZP)() === b.BR.DARK,
            o = l.useCallback(
                (e) => {
                    if (n.has(e) || a) return "always-white";
                },
                [n, a],
            ),
            u = l.useCallback((e) => (n.has(e) || a ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_NORMAL), [n, a]),
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
            className: E.filterSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: E.filterTitle,
                    children: v.intl.string(v.t.t1Ztrp),
                }),
                (0, r.jsx)("div", {
                    className: E.themeRow,
                    children: g.map((e) => {
                        let { name: l, icon: a, enum: c } = e;
                        return (0, r.jsxs)(
                            d.P3F,
                            {
                                className: s()(E.theme, { [E.themeToggled]: n.has(c) }),
                                onClick: () => {
                                    let e = n.has(c);
                                    t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), i(c);
                                },
                                children: [
                                    a,
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
