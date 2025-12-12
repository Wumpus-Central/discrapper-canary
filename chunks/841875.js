n.d(t, { Z: () => _ });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    i = n(990705),
    s = n(335818),
    c = n(255835),
    u = n(28664),
    d = n(481060),
    f = n(410030),
    g = n(825102),
    p = n(626135),
    b = n(381585),
    m = n(501431),
    C = n(215023),
    h = n(981631),
    v = n(231338),
    E = n(388032),
    S = n(80241);
function _() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: a } = (0, m.S)(),
        i = a(),
        { enabled: s } = (0, g.W)({ location: "Shop" }),
        c = (0, b.sp)(),
        u = l.useCallback(
            (e) => {
                p.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                className: o()(S.filterSection, S.itemType),
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        className: S.filterTitle,
                        children: E.intl.string(E.t.Qk6r1a),
                    }),
                    C.xg.map((e) =>
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
                            label: E.intl.string(E.t.AHHHgG),
                        }),
                ],
            }),
            (0, r.jsx)(x, { trackFilterAction: u }),
            (0, r.jsx)(k, { trackFilterAction: u }),
            i &&
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
let O = (e) => {
        var t;
        let { filter: n, trackFilterAction: l } = e,
            a = {
                [s.G.AVATAR_DECORATION]: E.intl.string(E.t.dRZYNE),
                [s.G.PROFILE_EFFECT]: E.intl.string(E.t["1cNjtx"]),
                [s.G.NAMEPLATE]: E.intl.string(E.t.V68Fqz),
                [s.G.BUNDLE]: E.intl.string(E.t.FYFpps),
            },
            { itemTypeFilters: o, onToggleItemType: i } = (0, m.S)();
        return (0, r.jsx)(d.Checkbox, {
            checked: o.has(n),
            onChange: () => {
                var e;
                let t = (null == (e = a[n]) ? void 0 : e.toLowerCase()) != null ? a[n].toLowerCase() : n;
                l("filter item type ".concat(t, " ").concat(!1 === o.has(n) ? "on" : "off")), i(n);
            },
            label: null != (t = a[n]) ? t : "",
        });
    },
    x = (e) => {
        let { trackFilterAction: t } = e,
            n = l.useMemo(
                () => [
                    {
                        color: "#9B59B6",
                        label: E.intl.string(E.t.kqUD4P),
                        enum: i.x.PURPLE,
                    },
                    {
                        color: "#3498DB",
                        label: E.intl.string(E.t.qQTRae),
                        enum: i.x.BLUE,
                    },
                    {
                        color: "#2ECC71",
                        label: E.intl.string(E.t["f/Ylk6"]),
                        enum: i.x.GREEN,
                    },
                    {
                        color: "#A0522D",
                        label: E.intl.string(E.t["Sd/BMa"]),
                        enum: i.x.BROWN,
                    },
                    {
                        color: "#F1C40F",
                        label: E.intl.string(E.t["0fevYz"]),
                        enum: i.x.YELLOW,
                    },
                ],
                [],
            ),
            a = l.useMemo(
                () => [
                    {
                        color: "#E67E22",
                        label: E.intl.string(E.t.ZE7weD),
                        enum: i.x.ORANGE,
                    },
                    {
                        color: "#E74C3C",
                        label: E.intl.string(E.t.hKJGOM),
                        enum: i.x.RED,
                    },
                    {
                        color: "#EC407A",
                        label: E.intl.string(E.t.HvLEGM),
                        enum: i.x.PINK,
                    },
                    {
                        color: "#FFFFFF",
                        label: E.intl.string(E.t["CB+lNO"]),
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
                    children: E.intl.string(E.t.K1xGoG),
                }),
                (0, r.jsx)(y, {
                    colors: n,
                    trackFilterAction: t,
                }),
                (0, r.jsx)(y, {
                    colors: a,
                    trackFilterAction: t,
                }),
            ],
        });
    },
    y = (e) => {
        let { colors: t, trackFilterAction: n } = e,
            { colorFilters: l, onToggleColor: a } = (0, m.S)();
        return (0, r.jsx)("div", {
            className: S.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: o, enum: i } = e;
                return (0, r.jsx)(
                    j,
                    {
                        color: t,
                        label: o,
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
    j = (e) => {
        let { color: t, label: n, enum: l, isToggled: a, onToggleColor: i, trackFilterAction: s } = e;
        return (0, r.jsx)(
            u.u,
            {
                text: n,
                asContainer: !0,
                children: (0, r.jsx)(
                    d.P3F,
                    {
                        className: o()(S.circle, { [S.circleToggled]: a }),
                        style: { backgroundColor: t },
                        "aria-label": n,
                        onClick: () => {
                            s("filter color ".concat(n.toLowerCase(), " ").concat(a ? "off" : "on")), i(l);
                        },
                        children:
                            a &&
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
    k = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: n, onToggleTheme: a } = (0, m.S)(),
            i = (0, f.ZP)() === v.BR.DARK,
            s = l.useCallback(
                (e) => {
                    if (n.has(e) || i) return "always-white";
                },
                [n, i],
            ),
            u = l.useCallback(
                (e) => (n.has(e) || i ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_TEXT_DEFAULT),
                [n, i],
            ),
            g = l.useMemo(
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
            className: S.filterSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    className: S.filterTitle,
                    children: E.intl.string(E.t.t1Ztrp),
                }),
                (0, r.jsx)("div", {
                    className: S.themeRow,
                    children: g.map((e) => {
                        let { name: l, icon: i, enum: c } = e;
                        return (0, r.jsxs)(
                            d.P3F,
                            {
                                className: o()(S.theme, { [S.themeToggled]: n.has(c) }),
                                onClick: () => {
                                    let e = n.has(c);
                                    t("filter theme ".concat(l.toLowerCase(), " ").concat(e ? "off" : "on")), a(c);
                                },
                                children: [
                                    i,
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
