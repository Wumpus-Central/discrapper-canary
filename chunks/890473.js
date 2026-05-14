n.d(t, { default: () => O });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(935462),
    s = n(289873),
    d = n(682618),
    c = n(228366);
let o = new Map();
class u extends a.Ay.Store {
    static displayName = "BadgeDirectoryStore";
    getBadges() {
        return Array.from(o.values());
    }
    getBadgeById(e) {
        return o.get(e);
    }
    getSingleRequirementProgress(e) {
        let t = o.get(e)?.progress;
        if (null != t && 0 !== t.length) return t[0];
    }
    getCurrentTier(e) {
        let t = o.get(e);
        if (t?.current_tier != null) return t.tiers.find((e) => e.key === t.current_tier);
    }
    getNextTier(e) {
        let t = o.get(e);
        if (t?.next_tier != null) return t.tiers.find((e) => e.key === t.next_tier);
    }
    getRemainingToNextTier(e) {
        let t = this.getNextTier(e),
            n = this.getSingleRequirementProgress(e);
        return null == t || null == n ? 0 : Math.max(0, (t?.requirements[0]?.threshold ?? 0) - n.current);
    }
}
let g = new u(c.h, {
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { badges: t } = e;
        o = new Map(t.map((e) => [e.badge_id, e]));
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { badge: t } = e,
            n = new Map(o);
        n.set(t.badge_id, t), (o = n);
    },
    LOGOUT: function () {
        o = new Map();
    },
});
var m = n(70283),
    x = n(534514),
    h = n(815021),
    b = n(834730),
    _ = n(508770),
    j = n(821609),
    p = n(775602);
n(321073);
var v = n(503698),
    N = n.n(v),
    y = n(837381),
    f = n(741918),
    C = n(939249),
    E = n(707554),
    S = n(260762),
    B = n(92111),
    k = n(375708),
    I = n(490308);
function D(e) {
    return `badge-tab-${e}`;
}
function w(e) {
    let { badge: t, isSelected: n, onSelect: l, itemId: a } = e,
        r = (0, y.rm)(a);
    return (0, i.jsx)(C.D, {
        ...r,
        role: "tab",
        id: D(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? B.hJ : void 0,
        className: N()(I.oL, n && I.xO),
        onFocus: r.onFocus,
        onClick: l,
        children:
            null != t.simple_icon_url &&
            (0, i.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: I.pW }),
    });
}
function M(e) {
    let { label: t, navId: n, badges: l, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, S.A)(n, f.Gl.HORIZONTAL);
    return (0, i.jsxs)("div", {
        className: I.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(x.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, i.jsx)(y.hD, {
                navigator: s,
                children: (0, i.jsx)(y.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: I.yq,
                            children: l.map((e, t) =>
                                (0, i.jsx)(
                                    w,
                                    {
                                        itemId: `item-${t}`,
                                        badge: e,
                                        isSelected: e.badge_id === a,
                                        onSelect: () => r(e.badge_id),
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
function R(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function T(e) {
    let { selectedBadgeId: t, onSelectBadge: n } = e,
        r = (0, a.bG)([g], () => g.getBadges()),
        { earnable: s, owned: d } = l.useMemo(() => R(r), [r]);
    return (0, i.jsx)("div", {
        className: I.ws,
        children: (0, i.jsx)(E.F, {
            component: (0, i.jsxs)("div", {
                className: I.NG,
                children: [
                    (0, i.jsx)(x.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: k.intl.string(k.t.sl2irJ),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: k.intl.string(k.t["62xU4E"]),
                    }),
                ],
            }),
            children: (0, i.jsxs)("div", {
                className: I.hG,
                children: [
                    d.length > 0 &&
                        (0, i.jsx)(M, {
                            label: { type: "aria", text: k.intl.string(k.t.UqnlQF) },
                            navId: "badge-directory-owned",
                            badges: d,
                            selectedBadgeId: t,
                            onSelectBadge: n,
                        }),
                    s.length > 0 &&
                        (0, i.jsx)(M, {
                            label: {
                                type: "heading",
                                id: "badge-directory-section-earnable",
                                text: k.intl.string(k.t["0YzU//"]),
                            },
                            navId: "badge-directory-earnable",
                            badges: s,
                            selectedBadgeId: t,
                            onSelectBadge: n,
                        }),
                ],
            }),
        }),
    });
}
var A = n(731454);
function U(e) {
    let { tier: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.D, {
                variant: "display-sm",
                color: "text-brand",
                className: I.tN,
                children: k.intl.string(k.t.Ipxkog),
            }),
            null != t &&
                (0, i.jsx)(x.D, {
                    variant: "display-sm",
                    color: "text-strong",
                    className: I.tN,
                    children: t.name ?? t.key,
                }),
        ],
    });
}
function G(e) {
    let { badge: t, onClose: n, onCtaClick: r } = e,
        s = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        d = (0, a.bG)([p.A], () => p.A.useReducedMotion)
            ? void 0
            : (s?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        c = s?.complex_icon_static_url ?? t.complex_icon_static_url,
        o = s?.simple_icon_url ?? t.simple_icon_url,
        u = d ?? c ?? o,
        g = (0, A.V)(s?.rarity ?? t.rarity),
        v = (0, B.Om)(t.badge_id),
        N = t.badge_id === m.$.PREMIUM_TENURE,
        y = s?.name != null ? `${t.name} ${s.name}` : t.name,
        f = l.useCallback(() => {
            null != v && r(v.ctaAction);
        }, [v, r]);
    return (0, i.jsxs)("div", {
        id: B.hJ,
        role: "tabpanel",
        "aria-labelledby": D(t.badge_id),
        className: I.SV,
        children: [
            (0, i.jsx)("div", { className: I.b, children: (0, i.jsx)(h.J, { onClick: n, size: "sm" }) }),
            null != u && (0, i.jsx)("img", { className: I.y2, src: u, alt: "", "aria-hidden": !0 }),
            (0, i.jsxs)("div", {
                className: I.OU,
                children: [
                    (0, i.jsxs)("div", {
                        className: I.cQ,
                        children: [
                            N
                                ? (0, i.jsx)(U, { tier: s })
                                : (0, i.jsx)(x.D, {
                                      variant: "display-sm",
                                      color: "text-strong",
                                      className: I._r,
                                      children: y,
                                  }),
                            (0, i.jsx)(b.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: t.owned ? k.intl.string(k.t.SNIb0t) : k.intl.string(k.t.dDDCvU),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: I.oA,
                        children: [
                            null != g &&
                                (0, i.jsxs)("div", {
                                    className: I.sn,
                                    children: [
                                        (0, i.jsx)(_.E, { ...g }),
                                        (0, i.jsx)(b.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            children: k.intl.string(k.t["6V13dx"]),
                                        }),
                                    ],
                                }),
                            null != v &&
                                (0, i.jsxs)("div", {
                                    className: I.d9,
                                    children: [
                                        (0, i.jsx)(b.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            className: I.ij,
                                            children: v.description(),
                                        }),
                                        (0, i.jsx)(j.$, {
                                            variant: v.ctaVariant,
                                            size: "sm",
                                            onClick: f,
                                            text: v.ctaLabel(),
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
function O(e) {
    let { transitionState: t, onClose: n, initialBadgeId: c } = e,
        [o, u] = l.useState(c ?? null),
        m = (0, a.bG)([g], () => g.getBadges());
    l.useEffect(() => {
        (0, d.R)();
    }, []);
    let x = l.useMemo(() => {
            let { earnable: e, owned: t } = R(m);
            return t[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [m]),
        h = null != o ? g.getBadgeById(o) : void 0,
        b = null != x ? g.getBadgeById(x) : void 0,
        _ = h ?? b,
        j = 0 === m.length,
        p = l.useCallback(() => {
            n();
        }, [n]),
        v = l.useCallback(
            (e) => {
                n();
            },
            [n],
        );
    return (0, i.jsx)(r.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": k.intl.string(k.t.PEjP4L),
        transitionState: t,
        size: r.rI.DYNAMIC,
        hideShadow: !0,
        className: I.CR,
        children: (0, i.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: I.jE,
            children: j
                ? (0, i.jsx)("div", { className: I.Lq, children: (0, i.jsx)(s.y, {}) })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(T, { selectedBadgeId: _?.badge_id ?? null, onSelectBadge: u }),
                          null != _ && (0, i.jsx)(G, { badge: _, onClose: p, onCtaClick: v }),
                      ],
                  }),
        }),
    });
}
