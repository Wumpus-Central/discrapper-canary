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
    _ =
        (((i = {})[(i.COMMON = 1)] = "COMMON"),
        (i[(i.RARE = 2)] = "RARE"),
        (i[(i.EPIC = 3)] = "EPIC"),
        (i[(i.LEGENDARY = 4)] = "LEGENDARY"),
        (i[(i.MYTHIC = 5)] = "MYTHIC"),
        i),
    j = n(534514),
    N = n(815021),
    v = n(834730),
    E = n(821609),
    p = n(775602);
n(321073);
var C = n(837381),
    f = n(741918),
    R = n(939249),
    I = n(707554),
    y = n(260762),
    M = n(92111),
    D = n(375708),
    S = n(490308);
function A(e) {
    return `badge-tab-${e}`;
}
function B(e) {
    let { badge: t, isSelected: n, onSelect: i, itemId: a } = e,
        r = (0, C.rm)(a);
    return (0, l.jsx)(R.D, {
        ...r,
        role: "tab",
        id: A(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? M.hJ : void 0,
        className: h()(S.oL, n && S.xO),
        onFocus: r.onFocus,
        onClick: i,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: S.pW }),
    });
}
function O(e) {
    let { heading: t, headingId: n, navId: i, badges: a, selectedBadgeId: r, onSelectBadge: s } = e,
        d = (0, y.A)(i, f.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: S.zE,
        children: [
            (0, l.jsx)(j.D, { id: n, variant: "heading-sm/medium", color: "text-default", children: t }),
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
                                    B,
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
                    (0, l.jsx)(j.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: D.intl.string(D.t.sl2irJ),
                    }),
                    (0, l.jsx)(v.E, {
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
let w = { [_.COMMON]: S.v2, [_.RARE]: S.G9, [_.EPIC]: S.Lc, [_.LEGENDARY]: S.RJ, [_.MYTHIC]: S.qW },
    G = {
        [_.COMMON]: () => D.intl.string(D.t.L0K5ci),
        [_.RARE]: () => D.intl.string(D.t["sTx/5z"]),
        [_.EPIC]: () => D.intl.string(D.t.RD8RiN),
        [_.LEGENDARY]: () => D.intl.string(D.t["4QZPNa"]),
        [_.MYTHIC]: () => D.intl.string(D.t.vqc1ol),
    };
function L(e) {
    let { tier: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(j.D, {
                variant: "heading-lg/bold",
                color: "text-brand",
                className: S.tN,
                children: D.intl.string(D.t.Ipxkog),
            }),
            null != t &&
                (0, l.jsx)(j.D, {
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
        s = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        d = s?.rarity ?? t.rarity,
        c = (0, r.bG)([p.A], () => p.A.useReducedMotion)
            ? void 0
            : (s?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        o = s?.complex_icon_static_url ?? t.complex_icon_static_url,
        g = s?.simple_icon_url ?? t.simple_icon_url,
        u = c ?? o ?? g,
        x = (0, M.Om)(t.badge_id),
        m = t.badge_id === b.$.PREMIUM_TENURE,
        _ = s?.name != null ? `${t.name} ${s.name}` : t.name,
        C = a.useCallback(() => {
            null != x && i(x.ctaAction);
        }, [x, i]);
    return (0, l.jsxs)("div", {
        id: M.hJ,
        role: "tabpanel",
        "aria-labelledby": A(t.badge_id),
        className: S.SV,
        children: [
            (0, l.jsx)("div", { className: S.b, children: (0, l.jsx)(N.J, { onClick: n, size: "sm" }) }),
            null != u && (0, l.jsx)("img", { className: S.y2, src: u, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: S.OU,
                children: [
                    (0, l.jsxs)("div", {
                        className: S.cQ,
                        children: [
                            m
                                ? (0, l.jsx)(L, { tier: s })
                                : (0, l.jsx)(j.D, { variant: "heading-lg/bold", color: "text-strong", children: _ }),
                            (0, l.jsx)(v.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: t.owned ? D.intl.string(D.t.SNIb0t) : D.intl.string(D.t.dDDCvU),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: S.oA,
                        children: [
                            null != d &&
                                (0, l.jsxs)("div", {
                                    className: S.sn,
                                    children: [
                                        (0, l.jsx)(v.E, {
                                            variant: "text-xxs/bold",
                                            color: "none",
                                            className: h()(S._l, w[d]),
                                            children: G[d](),
                                        }),
                                        (0, l.jsx)(v.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            children: D.intl.string(D.t["6V13dx"]),
                                        }),
                                    ],
                                }),
                            null != x &&
                                (0, l.jsxs)("div", {
                                    className: S.d9,
                                    children: [
                                        (0, l.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            className: S.ij,
                                            children: x.description(),
                                        }),
                                        (0, l.jsx)(E.$, {
                                            variant: x.ctaVariant,
                                            size: "sm",
                                            onClick: C,
                                            text: x.ctaLabel(),
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
        _ = h ?? b,
        j = 0 === u.length,
        N = a.useCallback(() => {
            n();
        }, [n]),
        v = a.useCallback(
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
            children: j
                ? (0, l.jsx)("div", { className: S.Lq, children: (0, l.jsx)(d.y, {}) })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(k, { selectedBadgeId: _?.badge_id ?? null, onSelectBadge: g }),
                          null != _ && (0, l.jsx)(P, { badge: _, onClose: N, onCtaClick: v }),
                      ],
                  }),
        }),
    });
}
