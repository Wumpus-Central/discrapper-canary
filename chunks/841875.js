n.d(t, { Z: () => O });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(990705),
    a = n(335818),
    c = n(255835),
    u = n(28664),
    d = n(481060),
    g = n(410030),
    f = n(825102),
    p = n(626135),
    C = n(381585),
    h = n(501431),
    _ = n(215023),
    m = n(981631),
    b = n(231338),
    E = n(388032),
    v = n(587635);
function O() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: i } = (0, h.S)(),
        s = i(),
        { enabled: a } = (0, f.WX)({ location: "Shop" }),
        c = (0, C.sp)(),
        u = l.useCallback(
            (e) => {
                p.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                className: o()(v.filterSection, v.itemType),
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        className: v.filterTitle,
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
                    a &&
                        (0, r.jsx)(d.Checkbox, {
                            checked: t,
                            onChange: () => {
                                u("filter orb eligible ".concat(!1 === t ? "on" : "off")), e();
                            },
                            label: E.intl.string(E.t.AHHHgI),
                        }),
                ],
            }),
            (0, r.jsx)(S, { trackFilterAction: u }),
            (0, r.jsx)(j, { trackFilterAction: u }),
            s &&
                (0, r.jsx)(d.Button, {
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
            i = {
                [a.G.AVATAR_DECORATION]: E.intl.string(E.t.dRZYND),
                [a.G.PROFILE_EFFECT]: E.intl.string(E.t["1cNjt7"]),
                [a.G.NAMEPLATE]: E.intl.string(E.t.V68Fq6),
                [a.G.BUNDLE]: E.intl.string(E.t.FYFppq),
            },
            { itemTypeFilters: o, onToggleItemType: s } = (0, h.S)();
        return (0, r.jsx)(d.Checkbox, {
            checked: o.has(n),
            onChange: () => {
                var e;
                let t = (null == (e = i[n]) ? void 0 : e.toLowerCase()) != null ? i[n].toLowerCase() : n;
                l("filter item type ".concat(t, " ").concat(!1 === o.has(n) ? "on" : "off")), s(n);
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
                        label: E.intl.string(E.t.kqUD4O),
                        enum: s.x.PURPLE,
                    },
                    {
                        color: "#3498DB",
                        label: E.intl.string(E.t.qQTRaW),
                        enum: s.x.BLUE,
                    },
                    {
                        color: "#2ECC71",
                        label: E.intl.string(E.t["f/Ylk5"]),
                        enum: s.x.GREEN,
                    },
                    {
                        color: "#A0522D",
                        label: E.intl.string(E.t["Sd/BMT"]),
                        enum: s.x.BROWN,
                    },
                    {
                        color: "#F1C40F",
                        label: E.intl.string(E.t["0fevY2"]),
                        enum: s.x.YELLOW,
                    },
                ],
                [],
            ),
            i = l.useMemo(
                () => [
                    {
                        color: "#E67E22",
                        label: E.intl.string(E.t.ZE7weH),
                        enum: s.x.ORANGE,
                    },
                    {
                        color: "#E74C3C",
                        label: E.intl.string(E.t.hKJGOD),
                        enum: s.x.RED,
                    },
                    {
                        color: "#EC407A",
                        label: E.intl.string(E.t.HvLEGB),
                        enum: s.x.PINK,
                    },
                    {
                        color: "#FFFFFF",
                        label: E.intl.string(E.t["CB+lND"]),
                        enum: s.x.WHITE,
                    },
                    {
                        color: "#262626",
                        label: E.intl.string(E.t["dMey+v"]),
                        enum: s.x.BLACK,
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
                    children: E.intl.string(E.t.K1xGoK),
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
            { colorFilters: l, onToggleColor: i } = (0, h.S)();
        return (0, r.jsx)("div", {
            className: v.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: o, enum: s } = e;
                return (0, r.jsx)(
                    k,
                    {
                        color: t,
                        label: o,
                        enum: s,
                        isToggled: l.has(s),
                        onToggleColor: i,
                        trackFilterAction: n,
                    },
                    s,
                );
            }),
        });
    },
    k = (e) => {
        let { color: t, label: n, enum: l, isToggled: i, onToggleColor: s, trackFilterAction: a } = e;
        return (0, r.jsx)(
            u.u,
            {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(
                    d.P3F,
                    {
                        className: o()(v.circle, { [v.circleToggled]: i }),
                        style: { backgroundColor: t },
                        "aria-label": n,
                        onClick: () => {
                            a("filter color ".concat(n.toLowerCase(), " ").concat(i ? "off" : "on")), s(l);
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
    j = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: n, onToggleTheme: i } = (0, h.S)(),
            s = (0, g.ZP)() === b.BR.DARK,
            a = l.useCallback(
                (e) => {
                    if (n.has(e) || s) return "always-white";
                },
                [n, s],
            ),
            u = l.useCallback((e) => (n.has(e) || s ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_NORMAL), [n, s]),
            f = l.useMemo(
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
            className: v.filterSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: v.filterTitle,
                    children: E.intl.string(E.t.t1Ztrq),
                }),
                (0, r.jsx)("div", {
                    className: v.themeRow,
                    children: f.map((e) => {
                        let { name: l, icon: s, enum: c } = e;
                        return (0, r.jsxs)(
                            d.P3F,
                            {
                                className: o()(v.theme, { [v.themeToggled]: n.has(c) }),
                                onClick: () => {
                                    let e = n.has(c);
                                    t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), i(c);
                                },
                                children: [
                                    s,
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
