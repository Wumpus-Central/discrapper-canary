n.d(t, { default: () => Y });
var i,
    l = n(627968),
    a = n(64700),
    s = n(17928),
    r = n(935462),
    d = n(289873),
    c = n(682618),
    o = n(228366);
let g = new Map();
class u extends s.Ay.Store {
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
    E = n(815021),
    v = n(834730),
    C = n(821609),
    _ = n(92111),
    p = n(518477),
    f = n(985018),
    I = n(490308);
let M = "badge-details-heading",
    R = { [j.COMMON]: I.v2, [j.RARE]: I.G9, [j.EPIC]: I.Lc, [j.LEGENDARY]: I.RJ, [j.MYTHIC]: I.qW },
    y = {
        [j.COMMON]: () => f.intl.string(f.t.L0K5ci),
        [j.RARE]: () => f.intl.string(f.t["sTx/5z"]),
        [j.EPIC]: () => f.intl.string(f.t.RD8RiN),
        [j.LEGENDARY]: () => f.intl.string(f.t["4QZPNa"]),
        [j.MYTHIC]: () => f.intl.string(f.t.vqc1ol),
    };
function D(e) {
    let { tier: t, headingId: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.D, {
                id: n,
                variant: "heading-lg/bold",
                color: "text-brand",
                className: I.tN,
                children: f.intl.string(f.t.Ipxkog),
            }),
            null != t &&
                (0, l.jsx)(N.D, {
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    className: I.tN,
                    children: t.name ?? t.key,
                }),
        ],
    });
}
function S(e) {
    let { badge: t, onClose: n, onCtaClick: i } = e,
        s = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        r = s?.rarity ?? t.rarity,
        d = s?.complex_icon_static ?? t.complex_icon_static ?? s?.simple_icon ?? t.simple_icon,
        c = (0, _.O)(t.badge_id),
        o = t.badge_id === b.$.PREMIUM_TENURE,
        g = s?.name != null ? `${t.name} ${s.name}` : t.name,
        u = a.useCallback(() => {
            null != c && i(c.ctaAction);
        }, [c, i]);
    return (0, l.jsxs)("div", {
        id: "badge-details",
        role: "region",
        "aria-labelledby": M,
        className: I.SV,
        children: [
            (0, l.jsx)("div", { className: I.b, children: (0, l.jsx)(E.J, { onClick: n, size: "sm" }) }),
            (0, l.jsx)("div", {
                className: I.ju,
                children:
                    "" !== d && (0, l.jsx)("img", { className: I.y2, src: (0, p.L7)(d), alt: "", "aria-hidden": !0 }),
            }),
            (0, l.jsxs)("div", {
                className: I.OU,
                children: [
                    (0, l.jsxs)("div", {
                        className: I.cQ,
                        children: [
                            o
                                ? (0, l.jsx)(D, { tier: s, headingId: M })
                                : (0, l.jsx)(N.D, {
                                      id: M,
                                      variant: "heading-lg/bold",
                                      color: "text-strong",
                                      children: g,
                                  }),
                            (0, l.jsx)(v.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: t.owned ? f.intl.string(f.t.SNIb0t) : f.intl.string(f.t.dDDCvU),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: I.oA,
                        children: [
                            null != r &&
                                (0, l.jsxs)("div", {
                                    className: I.sn,
                                    children: [
                                        (0, l.jsx)(v.E, {
                                            variant: "text-xxs/bold",
                                            color: "none",
                                            className: h()(I._l, R[r]),
                                            children: y[r](),
                                        }),
                                        (0, l.jsx)(v.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            children: f.intl.string(f.t["6V13dx"]),
                                        }),
                                    ],
                                }),
                            null != c &&
                                (0, l.jsxs)("div", {
                                    className: I.d9,
                                    children: [
                                        (0, l.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            className: I.ij,
                                            children: c.description(),
                                        }),
                                        (0, l.jsx)(C.$, {
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
n(321073);
var B = n(837381),
    k = n(741918),
    A = n(939249),
    O = n(707554),
    T = n(260762);
function w(e) {
    let { badge: t, isSelected: n, onSelect: i, itemId: a } = e,
        s = (0, B.rm)(a);
    return (0, l.jsx)(A.D, {
        ...s,
        "aria-label": t.name,
        "aria-current": n ? "true" : void 0,
        className: h()(I.oL, n && I.xO),
        onFocus: () => {
            s.onFocus(), i();
        },
        onClick: i,
        children:
            "" !== t.simple_icon &&
            (0, l.jsx)("img", { src: (0, p.L7)(t.simple_icon), alt: "", "aria-hidden": !0, className: I.pW }),
    });
}
function L(e) {
    let { heading: t, headingId: n, badges: i, selectedBadgeId: a, onSelectBadge: s, getItemId: r } = e;
    return (0, l.jsxs)("div", {
        className: I.zE,
        role: "group",
        "aria-labelledby": n,
        children: [
            (0, l.jsx)(N.D, { id: n, variant: "heading-sm/medium", color: "text-default", children: t }),
            (0, l.jsx)("div", {
                className: I.yq,
                children: i.map((e) =>
                    (0, l.jsx)(
                        w,
                        { itemId: r(e), badge: e, isSelected: e.badge_id === a, onSelect: () => s(e.badge_id) },
                        e.badge_id,
                    ),
                ),
            }),
        ],
    });
}
function G(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function P(e) {
    let { selectedBadgeId: t, onSelectBadge: n } = e,
        i = (0, s.bG)([x], () => x.getBadges()),
        r = (0, T.A)("badge-directory", k.Gl.HORIZONTAL),
        { earnable: d, owned: c } = a.useMemo(() => G(i), [i]),
        o = a.useMemo(() => [...d, ...c], [d, c]),
        g = a.useMemo(() => {
            let e = new Map();
            return o.forEach((t, n) => e.set(t.badge_id, `item-${n}`)), e;
        }, [o]),
        u = a.useCallback((e) => g.get(e.badge_id) ?? "item-0", [g]);
    return (0, l.jsx)("div", {
        className: I.ws,
        children: (0, l.jsx)(O.F, {
            component: (0, l.jsxs)("div", {
                className: I.NG,
                children: [
                    (0, l.jsx)(N.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: f.intl.string(f.t.sl2irJ),
                    }),
                    (0, l.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: f.intl.string(f.t["62xU4E"]),
                    }),
                ],
            }),
            children: (0, l.jsx)(B.hD, {
                navigator: r,
                children: (0, l.jsx)(B.PR, {
                    children: (e) =>
                        (0, l.jsxs)("div", {
                            ...e,
                            ref: e.ref,
                            className: I.hG,
                            children: [
                                d.length > 0 &&
                                    (0, l.jsx)(L, {
                                        heading: f.intl.string(f.t["0YzU//"]),
                                        headingId: "badge-directory-section-earnable",
                                        badges: d,
                                        selectedBadgeId: t,
                                        onSelectBadge: n,
                                        getItemId: u,
                                    }),
                                c.length > 0 &&
                                    (0, l.jsx)(L, {
                                        heading: f.intl.string(f.t.UqnlQF),
                                        headingId: "badge-directory-section-owned",
                                        badges: c,
                                        selectedBadgeId: t,
                                        onSelectBadge: n,
                                        getItemId: u,
                                    }),
                            ],
                        }),
                }),
            }),
        }),
    });
}
function Y(e) {
    let { transitionState: t, onClose: n, initialBadgeId: i } = e,
        [o, g] = a.useState(i ?? null),
        u = (0, s.bG)([x], () => x.getBadges());
    a.useEffect(() => {
        (0, c.R)();
    }, []);
    let m = a.useMemo(() => {
            let { earnable: e, owned: t } = G(u);
            return e[0]?.badge_id ?? t[0]?.badge_id ?? null;
        }, [u]),
        h = null != o ? x.getBadgeById(o) : void 0,
        b = null != m ? x.getBadgeById(m) : void 0,
        j = h ?? b,
        N = 0 === u.length,
        E = a.useCallback(() => {
            n();
        }, [n]),
        v = a.useCallback(
            (e) => {
                n();
            },
            [n],
        );
    return (0, l.jsx)(r.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": f.intl.string(f.t.PEjP4L),
        transitionState: t,
        size: r.rI.DYNAMIC,
        hideShadow: !0,
        className: I.CR,
        children: (0, l.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: I.jE,
            children: N
                ? (0, l.jsx)("div", { className: I.Lq, children: (0, l.jsx)(d.y, {}) })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(P, { selectedBadgeId: j?.badge_id ?? null, onSelectBadge: g }),
                          null != j && (0, l.jsx)(S, { badge: j, onClose: E, onCtaClick: v }),
                      ],
                  }),
        }),
    });
}
