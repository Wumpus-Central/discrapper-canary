n.d(t, { Z: () => g });
var r = n(54381),
    l = n(473749),
    a = n(335818),
    s = n(481060),
    o = n(501431),
    i = n(215023),
    c = n(388032),
    u = n(379398);
let d = [
        {
            tab: i.AW.AVATAR_DECORATIONS,
            labelKey: c.t.dRZYNE,
        },
        {
            tab: i.AW.PROFILE_EFFECTS,
            labelKey: c.t["1cNjtx"],
        },
        {
            tab: i.AW.NAMEPLATES,
            labelKey: c.t.V68Fqz,
        },
        {
            tab: i.AW.BUNDLES,
            labelKey: c.t.FYFpps,
        },
        {
            tab: i.AW.CATALOG,
            labelKey: c.t.xFcotU,
        },
    ],
    f = {
        [a.G.ALL]: i.AW.CATALOG,
        [a.G.AVATAR_DECORATION]: i.AW.AVATAR_DECORATIONS,
        [a.G.PROFILE_EFFECT]: i.AW.PROFILE_EFFECTS,
        [a.G.NAMEPLATE]: i.AW.NAMEPLATES,
        [a.G.BUNDLE]: i.AW.BUNDLES,
    };
function g(e) {
    let { tabs: t, selectedTab: n, onTabSelect: a, onClose: g, showOrbRentalNewBadge: b } = e,
        { itemTypeFilters: p } = (0, o.S)(),
        m = l.useMemo(() => {
            if (n === i.AW.CATALOG && p.size > 0) {
                let e = f[Array.from(p)[0]];
                if (null != e) return e;
            }
            return n;
        }, [n, p]);
    return (0, r.jsx)(s.v2r, {
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": c.intl.string(c.t["UKOtz+"]),
        hideScroller: !0,
        onClose: g,
        onSelect: g,
        children: (0, r.jsx)(
            s.kSQ,
            {
                children: t.map((e) => {
                    let { tab: t, label: l, hasSubmenu: o } = e;
                    if (o && t === i.AW.CATALOG) {
                        let e = t === n;
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: t,
                                label: l,
                                icon: e ? s.owK : void 0,
                                hasSubmenu: !0,
                                children: d.map((e) => {
                                    let { tab: t, labelKey: n } = e,
                                        l = t === m;
                                    return (0, r.jsx)(
                                        s.sNh,
                                        {
                                            id: t,
                                            label: c.intl.string(n),
                                            icon: l ? s.owK : void 0,
                                            action: () => {
                                                a(t), g();
                                            },
                                        },
                                        t,
                                    );
                                }),
                            },
                            t,
                        );
                    }
                    let f = t === i.AW.ORBS && b,
                        p = (0, r.jsxs)("span", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                            },
                            children: [
                                l,
                                f &&
                                    (0, r.jsx)(s.IGR, {
                                        text: c.intl.string(c.t.y2b7CA),
                                        className: u.newBadge,
                                    }),
                            ],
                        });
                    return (0, r.jsx)(
                        s.sNh,
                        {
                            id: t,
                            label: p,
                            icon: t === n ? s.owK : void 0,
                            action: () => a(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
