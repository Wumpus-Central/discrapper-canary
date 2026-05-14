n.d(t, { default: () => O });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(935462),
    s = n(289873),
    d = n(682618),
    c = n(228366);
let o = new Map();
class g extends a.Ay.Store {
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
let u = new g(c.h, {
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
    v = n(775602);
n(321073);
var p = n(503698),
    N = n.n(p),
    f = n(837381),
    y = n(741918),
    C = n(939249),
    E = n(707554),
    S = n(260762),
    B = n(92111),
    I = n(375708),
    k = n(490308);
function D(e) {
    return `badge-tab-${e}`;
}
function w(e) {
    let { badge: t, isSelected: n, onSelect: l, itemId: a } = e,
        r = (0, f.rm)(a);
    return (0, i.jsx)(C.D, {
        ...r,
        role: "tab",
        id: D(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? B.hJ : void 0,
        className: N()(k.oL, n && k.xO),
        onFocus: r.onFocus,
        onClick: l,
        children:
            null != t.simple_icon_url &&
            (0, i.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: k.pW }),
    });
}
function M(e) {
    let { heading: t, headingId: n, navId: l, badges: a, selectedBadgeId: r, onSelectBadge: s } = e,
        d = (0, S.A)(l, y.Gl.HORIZONTAL);
    return (0, i.jsxs)("div", {
        className: k.zE,
        children: [
            (0, i.jsx)(x.D, { id: n, variant: "heading-sm/medium", color: "text-default", children: t }),
            (0, i.jsx)(f.hD, {
                navigator: d,
                children: (0, i.jsx)(f.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": n,
                            className: k.yq,
                            children: a.map((e, t) =>
                                (0, i.jsx)(
                                    w,
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
function R(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function T(e) {
    let { selectedBadgeId: t, onSelectBadge: n } = e,
        r = (0, a.bG)([u], () => u.getBadges()),
        { earnable: s, owned: d } = l.useMemo(() => R(r), [r]);
    return (0, i.jsx)("div", {
        className: k.ws,
        children: (0, i.jsx)(E.F, {
            component: (0, i.jsxs)("div", {
                className: k.NG,
                children: [
                    (0, i.jsx)(x.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: I.intl.string(I.t.sl2irJ),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: I.intl.string(I.t["62xU4E"]),
                    }),
                ],
            }),
            children: (0, i.jsxs)("div", {
                className: k.hG,
                children: [
                    s.length > 0 &&
                        (0, i.jsx)(M, {
                            heading: I.intl.string(I.t["0YzU//"]),
                            headingId: "badge-directory-section-earnable",
                            navId: "badge-directory-earnable",
                            badges: s,
                            selectedBadgeId: t,
                            onSelectBadge: n,
                        }),
                    d.length > 0 &&
                        (0, i.jsx)(M, {
                            heading: I.intl.string(I.t.UqnlQF),
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
var A = n(731454);
function U(e) {
    let { tier: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.D, {
                variant: "heading-lg/bold",
                color: "text-brand",
                className: k.tN,
                children: I.intl.string(I.t.Ipxkog),
            }),
            null != t &&
                (0, i.jsx)(x.D, {
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    className: k.tN,
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
        d = (0, a.bG)([v.A], () => v.A.useReducedMotion)
            ? void 0
            : (s?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        c = s?.complex_icon_static_url ?? t.complex_icon_static_url,
        o = s?.simple_icon_url ?? t.simple_icon_url,
        g = d ?? c ?? o,
        u = (0, A.V)(s?.rarity ?? t.rarity),
        p = (0, B.Om)(t.badge_id),
        N = t.badge_id === m.$.PREMIUM_TENURE,
        f = s?.name != null ? `${t.name} ${s.name}` : t.name,
        y = l.useCallback(() => {
            null != p && r(p.ctaAction);
        }, [p, r]);
    return (0, i.jsxs)("div", {
        id: B.hJ,
        role: "tabpanel",
        "aria-labelledby": D(t.badge_id),
        className: k.SV,
        children: [
            (0, i.jsx)("div", { className: k.b, children: (0, i.jsx)(h.J, { onClick: n, size: "sm" }) }),
            null != g && (0, i.jsx)("img", { className: k.y2, src: g, alt: "", "aria-hidden": !0 }),
            (0, i.jsxs)("div", {
                className: k.OU,
                children: [
                    (0, i.jsxs)("div", {
                        className: k.cQ,
                        children: [
                            N
                                ? (0, i.jsx)(U, { tier: s })
                                : (0, i.jsx)(x.D, { variant: "heading-lg/bold", color: "text-strong", children: f }),
                            (0, i.jsx)(b.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: t.owned ? I.intl.string(I.t.SNIb0t) : I.intl.string(I.t.dDDCvU),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: k.oA,
                        children: [
                            null != u &&
                                (0, i.jsxs)("div", {
                                    className: k.sn,
                                    children: [
                                        (0, i.jsx)(_.E, { ...u }),
                                        (0, i.jsx)(b.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            children: I.intl.string(I.t["6V13dx"]),
                                        }),
                                    ],
                                }),
                            null != p &&
                                (0, i.jsxs)("div", {
                                    className: k.d9,
                                    children: [
                                        (0, i.jsx)(b.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            className: k.ij,
                                            children: p.description(),
                                        }),
                                        (0, i.jsx)(j.$, {
                                            variant: p.ctaVariant,
                                            size: "sm",
                                            onClick: y,
                                            text: p.ctaLabel(),
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
        [o, g] = l.useState(c ?? null),
        m = (0, a.bG)([u], () => u.getBadges());
    l.useEffect(() => {
        (0, d.R)();
    }, []);
    let x = l.useMemo(() => {
            let { earnable: e, owned: t } = R(m);
            return e[0]?.badge_id ?? t[0]?.badge_id ?? null;
        }, [m]),
        h = null != o ? u.getBadgeById(o) : void 0,
        b = null != x ? u.getBadgeById(x) : void 0,
        _ = h ?? b,
        j = 0 === m.length,
        v = l.useCallback(() => {
            n();
        }, [n]),
        p = l.useCallback(
            (e) => {
                n();
            },
            [n],
        );
    return (0, i.jsx)(r.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": I.intl.string(I.t.PEjP4L),
        transitionState: t,
        size: r.rI.DYNAMIC,
        hideShadow: !0,
        className: k.CR,
        children: (0, i.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: k.jE,
            children: j
                ? (0, i.jsx)("div", { className: k.Lq, children: (0, i.jsx)(s.y, {}) })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(T, { selectedBadgeId: _?.badge_id ?? null, onSelectBadge: g }),
                          null != _ && (0, i.jsx)(G, { badge: _, onClose: v, onCtaClick: p }),
                      ],
                  }),
        }),
    });
}
