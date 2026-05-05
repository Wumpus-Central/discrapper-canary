n.d(t, { default: () => Y });
var i,
    l = n(627968),
    a = n(64700),
    r = n(17928),
    s = n(935462),
    d = n(289873),
    c = n(682618),
    o = n(228366);
let g = new Map();
class u extends r.Ay.Store {
    static displayName = "BadgeDirectoryStore";
    getBadges() {
        return Array.from(g.values());
    }
    getBadgeById(e) {
        return g.get(e);
    }
    getSingleRequirementProgress(e) {
        let t = g.get(e)?.progress;
        if (null != t && 0 !== t.length) return t[0];
    }
    getCurrentTier(e) {
        let t = g.get(e);
        if (t?.current_tier != null) return t.tiers.find((e) => e.key === t.current_tier);
    }
    getNextTier(e) {
        let t = g.get(e);
        if (t?.next_tier != null) return t.tiers.find((e) => e.key === t.next_tier);
    }
    getRemainingToNextTier(e) {
        let t = this.getNextTier(e),
            n = this.getSingleRequirementProgress(e);
        return null == t || null == n ? 0 : Math.max(0, (t?.requirements[0]?.threshold ?? 0) - n.current);
    }
}
let x = new u(o.h, {
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { badges: t } = e;
        g = new Map(t.map((e) => [e.badge_id, e]));
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { badge: t } = e,
            n = new Map(g);
        n.set(t.badge_id, t), (g = n);
    },
    LOGOUT: function () {
        g = new Map();
    },
});
var m = n(503698),
    h = n.n(m),
    b = n(70283),
    j =
        (((i = {})[(i.COMMON = 1)] = "COMMON"),
        (i[(i.RARE = 2)] = "RARE"),
        (i[(i.EPIC = 3)] = "EPIC"),
        (i[(i.LEGENDARY = 4)] = "LEGENDARY"),
        (i[(i.MYTHIC = 5)] = "MYTHIC"),
        i),
    N = n(534514),
    v = n(815021),
    E = n(834730),
    _ = n(821609);
n(321073);
var C = n(837381),
    p = n(741918),
    f = n(939249),
    I = n(707554),
    R = n(260762),
    y = n(92111),
    M = n(518477),
    D = n(375708),
    S = n(490308);
function B(e) {
    return `badge-tab-${e}`;
}
function A(e) {
    let { badge: t, isSelected: n, onSelect: i, itemId: a } = e,
        r = (0, C.rm)(a);
    return (0, l.jsx)(f.D, {
        ...r,
        role: "tab",
        id: B(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? y.hJ : void 0,
        className: h()(S.oL, n && S.xO),
        onFocus: r.onFocus,
        onClick: i,
        children:
            "" !== t.simple_icon &&
            (0, l.jsx)("img", { src: (0, M.L7)(t.simple_icon), alt: "", "aria-hidden": !0, className: S.pW }),
    });
}
function O(e) {
    let { heading: t, headingId: n, navId: i, badges: a, selectedBadgeId: r, onSelectBadge: s } = e,
        d = (0, R.A)(i, p.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: S.zE,
        children: [
            (0, l.jsx)(N.D, { id: n, variant: "heading-sm/medium", color: "text-default", children: t }),
            (0, l.jsx)(C.hD, {
                navigator: d,
                children: (0, l.jsx)(C.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": n,
                            className: S.yq,
                            children: a.map((e, t) =>
                                (0, l.jsx)(
                                    A,
                                    {
                                        itemId: `item-${t}`,
                                        badge: e,
                                        isSelected: e.badge_id === r,
                                        onSelect: () => s(e.badge_id),
                                    },
                                    e.badge_id,
                                ),
                            ),
                        }),
                }),
            }),
        ],
    });
}
function T(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function k(e) {
    let { selectedBadgeId: t, onSelectBadge: n } = e,
        i = (0, r.bG)([x], () => x.getBadges()),
        { earnable: s, owned: d } = a.useMemo(() => T(i), [i]);
    return (0, l.jsx)("div", {
        className: S.ws,
        children: (0, l.jsx)(I.F, {
            component: (0, l.jsxs)("div", {
                className: S.NG,
                children: [
                    (0, l.jsx)(N.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: D.intl.string(D.t.sl2irJ),
                    }),
                    (0, l.jsx)(E.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: D.intl.string(D.t["62xU4E"]),
                    }),
                ],
            }),
            children: (0, l.jsxs)("div", {
                className: S.hG,
                children: [
                    s.length > 0 &&
                        (0, l.jsx)(O, {
                            heading: D.intl.string(D.t["0YzU//"]),
                            headingId: "badge-directory-section-earnable",
                            navId: "badge-directory-earnable",
                            badges: s,
                            selectedBadgeId: t,
                            onSelectBadge: n,
                        }),
                    d.length > 0 &&
                        (0, l.jsx)(O, {
                            heading: D.intl.string(D.t.UqnlQF),
                            headingId: "badge-directory-section-owned",
                            navId: "badge-directory-owned",
                            badges: d,
                            selectedBadgeId: t,
                            onSelectBadge: n,
                        }),
                ],
            }),
        }),
    });
}
let w = { [j.COMMON]: S.v2, [j.RARE]: S.G9, [j.EPIC]: S.Lc, [j.LEGENDARY]: S.RJ, [j.MYTHIC]: S.qW },
    L = {
        [j.COMMON]: () => D.intl.string(D.t.L0K5ci),
        [j.RARE]: () => D.intl.string(D.t["sTx/5z"]),
        [j.EPIC]: () => D.intl.string(D.t.RD8RiN),
        [j.LEGENDARY]: () => D.intl.string(D.t["4QZPNa"]),
        [j.MYTHIC]: () => D.intl.string(D.t.vqc1ol),
    };
function G(e) {
    let { tier: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.D, {
                variant: "heading-lg/bold",
                color: "text-brand",
                className: S.tN,
                children: D.intl.string(D.t.Ipxkog),
            }),
            null != t &&
                (0, l.jsx)(N.D, {
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    className: S.tN,
                    children: t.name ?? t.key,
                }),
        ],
    });
}
function P(e) {
    let { badge: t, onClose: n, onCtaClick: i } = e,
        r = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        s = r?.rarity ?? t.rarity,
        d = r?.complex_icon_static ?? t.complex_icon_static ?? r?.simple_icon ?? t.simple_icon,
        c = (0, y.Om)(t.badge_id),
        o = t.badge_id === b.$.PREMIUM_TENURE,
        g = r?.name != null ? `${t.name} ${r.name}` : t.name,
        u = a.useCallback(() => {
            null != c && i(c.ctaAction);
        }, [c, i]);
    return (0, l.jsxs)("div", {
        id: y.hJ,
        role: "tabpanel",
        "aria-labelledby": B(t.badge_id),
        className: S.SV,
        children: [
            (0, l.jsx)("div", { className: S.b, children: (0, l.jsx)(v.J, { onClick: n, size: "sm" }) }),
            (0, l.jsx)("div", {
                className: S.ju,
                children:
                    "" !== d && (0, l.jsx)("img", { className: S.y2, src: (0, M.L7)(d), alt: "", "aria-hidden": !0 }),
            }),
            (0, l.jsxs)("div", {
                className: S.OU,
                children: [
                    (0, l.jsxs)("div", {
                        className: S.cQ,
                        children: [
                            o
                                ? (0, l.jsx)(G, { tier: r })
                                : (0, l.jsx)(N.D, { variant: "heading-lg/bold", color: "text-strong", children: g }),
                            (0, l.jsx)(E.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: t.owned ? D.intl.string(D.t.SNIb0t) : D.intl.string(D.t.dDDCvU),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: S.oA,
                        children: [
                            null != s &&
                                (0, l.jsxs)("div", {
                                    className: S.sn,
                                    children: [
                                        (0, l.jsx)(E.E, {
                                            variant: "text-xxs/bold",
                                            color: "none",
                                            className: h()(S._l, w[s]),
                                            children: L[s](),
                                        }),
                                        (0, l.jsx)(E.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            children: D.intl.string(D.t["6V13dx"]),
                                        }),
                                    ],
                                }),
                            null != c &&
                                (0, l.jsxs)("div", {
                                    className: S.d9,
                                    children: [
                                        (0, l.jsx)(E.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            className: S.ij,
                                            children: c.description(),
                                        }),
                                        (0, l.jsx)(_.$, {
                                            variant: c.ctaVariant,
                                            size: "sm",
                                            onClick: u,
                                            text: c.ctaLabel(),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Y(e) {
    let { transitionState: t, onClose: n, initialBadgeId: i } = e,
        [o, g] = a.useState(i ?? null),
        u = (0, r.bG)([x], () => x.getBadges());
    a.useEffect(() => {
        (0, c.R)();
    }, []);
    let m = a.useMemo(() => {
            let { earnable: e, owned: t } = T(u);
            return e[0]?.badge_id ?? t[0]?.badge_id ?? null;
        }, [u]),
        h = null != o ? x.getBadgeById(o) : void 0,
        b = null != m ? x.getBadgeById(m) : void 0,
        j = h ?? b,
        N = 0 === u.length,
        v = a.useCallback(() => {
            n();
        }, [n]),
        E = a.useCallback(
            (e) => {
                n();
            },
            [n],
        );
    return (0, l.jsx)(s.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": D.intl.string(D.t.PEjP4L),
        transitionState: t,
        size: s.rI.DYNAMIC,
        hideShadow: !0,
        className: S.CR,
        children: (0, l.jsx)(s.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: S.jE,
            children: N
                ? (0, l.jsx)("div", { className: S.Lq, children: (0, l.jsx)(d.y, {}) })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(k, { selectedBadgeId: j?.badge_id ?? null, onSelectBadge: g }),
                          null != j && (0, l.jsx)(P, { badge: j, onClose: v, onCtaClick: E }),
                      ],
                  }),
        }),
    });
}
