n.d(t, { default: () => L });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(935462),
    s = n(289873),
    d = n(682618),
    c = n(228366);
function o(e) {
    return e?.requirements[0]?.threshold ?? 0;
}
let u = new Map();
class g extends a.Ay.Store {
    static displayName = "BadgeDirectoryStore";
    getBadges() {
        return Array.from(u.values());
    }
    getBadgeById(e) {
        return u.get(e);
    }
    getSingleRequirementProgress(e) {
        let t = u.get(e)?.progress;
        if (null != t && 0 !== t.length) return t[0];
    }
    getCurrentTier(e) {
        let t = u.get(e);
        if (t?.current_tier != null) return t.tiers.find((e) => e.key === t.current_tier);
    }
    getNextTier(e) {
        let t = u.get(e);
        if (t?.next_tier != null) return t.tiers.find((e) => e.key === t.next_tier);
    }
    getRemainingToNextTier(e) {
        let t = this.getNextTier(e),
            n = this.getSingleRequirementProgress(e);
        return null == t || null == n ? 0 : Math.max(0, o(t) - n.current);
    }
}
let m = new g(c.h, {
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { badges: t } = e;
        u = new Map(t.map((e) => [e.badge_id, e]));
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { badge: t } = e,
            n = new Map(u);
        n.set(t.badge_id, t), (u = n);
    },
    LOGOUT: function () {
        u = new Map();
    },
});
var x = n(503698),
    h = n.n(x),
    b = n(70283),
    j = n(140735),
    _ = n(834730),
    p = n(815021),
    v = n(534514),
    N = n(508770),
    f = n(821609),
    y = n(775602),
    C = n(425713);
n(321073);
var S = n(837381),
    E = n(741918),
    w = n(939249),
    B = n(707554),
    I = n(260762),
    T = n(92111),
    k = n(375708),
    D = n(490308);
function A(e) {
    return `badge-tab-${e}`;
}
function M(e) {
    let { badge: t, isSelected: n, onSelect: l, itemId: a } = e,
        r = (0, S.rm)(a);
    return (0, i.jsx)(w.D, {
        ...r,
        role: "tab",
        id: A(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? T.hJ : void 0,
        className: h()(D.oL, n && D.xO),
        onFocus: r.onFocus,
        onClick: l,
        children:
            null != t.simple_icon_url &&
            (0, i.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: D.pW }),
    });
}
function R(e) {
    let { label: t, navId: n, badges: l, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, I.A)(n, E.Gl.HORIZONTAL);
    return (0, i.jsxs)("div", {
        className: D.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(v.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, i.jsx)(S.hD, {
                navigator: s,
                children: (0, i.jsx)(S.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: D.yq,
                            children: l.map((e, t) =>
                                (0, i.jsx)(
                                    M,
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
function O(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function F(e) {
    let { selectedBadgeId: t, onSelectBadge: n } = e,
        r = (0, a.bG)([m], () => m.getBadges()),
        { earnable: s, owned: d } = l.useMemo(() => O(r), [r]);
    return (0, i.jsx)("div", {
        className: D.ws,
        children: (0, i.jsx)(B.F, {
            component: (0, i.jsxs)("div", {
                className: D.NG,
                children: [
                    (0, i.jsx)(v.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: k.intl.string(k.t.sl2irJ),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: k.intl.string(k.t["62xU4E"]),
                    }),
                ],
            }),
            children: (0, i.jsxs)("div", {
                className: D.hG,
                children: [
                    d.length > 0 &&
                        (0, i.jsx)(R, {
                            label: { type: "aria", text: k.intl.string(k.t.UqnlQF) },
                            navId: "badge-directory-owned",
                            badges: d,
                            selectedBadgeId: t,
                            onSelectBadge: n,
                        }),
                    s.length > 0 &&
                        (0, i.jsx)(R, {
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
var U = n(731454),
    P = n(788868);
function G(e) {
    var t;
    let { badge: n, currentTier: a } = e,
        r = n.owned ? Math.max(n.progress?.[0]?.current ?? 0, o(a)) : 0,
        s =
            (null ==
            (t = (function (e) {
                if (null == e) return null;
                let t = new Date(e);
                return Number.isNaN(t.getTime()) ? null : t;
            })(n.obtained_at))
                ? null
                : t.toLocaleDateString(k.intl.currentLocale, { month: "short", year: "numeric" })) ??
            k.intl.string(k.t.SNIb0t),
        d = l.useId(),
        c = k.intl.string(k.t.crwYbF);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.owned
                ? (0, i.jsx)(j.A, { id: d, children: c })
                : (0, i.jsx)(_.E, {
                      id: d,
                      variant: "text-xxs/medium",
                      color: "text-default",
                      className: D.Hm,
                      children: c,
                  }),
            (0, i.jsx)("ul", {
                className: D.by,
                "aria-labelledby": d,
                children: P.sp.map((e) => {
                    let t = P.VD[e],
                        l = t.tenureReqNumMonths,
                        a = n.owned && r >= l;
                    return (0, i.jsxs)(
                        "li",
                        {
                            className: a ? D.Oe : `${D.Oe} ${D.Kv}`,
                            children: [
                                (0, i.jsx)("img", {
                                    className: D.Qm,
                                    src: (0, C.I)(e).standard,
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsxs)(_.E, {
                                    variant: "text-xxs/medium",
                                    color: a ? "text-default" : "text-muted",
                                    className: D.Ou,
                                    children: [
                                        k.intl.string(t.nameUnformatted),
                                        (0, i.jsx)("br", {}),
                                        a
                                            ? s
                                            : (function (e) {
                                                  if (e < 12)
                                                      return k.intl.formatToPlainString(k.t.kridzK, { months: e });
                                                  let t = e / 12;
                                                  return t >= 6
                                                      ? k.intl.string(k.t.nPrx97)
                                                      : k.intl.formatToPlainString(k.t.PClsrw, { years: t });
                                              })(l),
                                    ],
                                }),
                                (0, i.jsx)(j.A, { children: k.intl.string(a ? k.t.SNIb0t : k.t.uHtDcT) }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function $(e) {
    let { badge: t, onClose: n, onCtaClick: r } = e,
        s = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        d = (0, a.bG)([y.A], () => y.A.useReducedMotion)
            ? void 0
            : (s?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        c = s?.complex_icon_static_url ?? t.complex_icon_static_url,
        o = s?.simple_icon_url ?? t.simple_icon_url,
        u = d ?? c ?? o,
        g = (0, U.V)(s?.rarity ?? t.rarity),
        m = (0, T.Om)(t.badge_id),
        x = t.badge_id === b.$.PREMIUM_TENURE,
        j = x ? (s?.name ?? s?.key) : s?.name,
        C = x ? k.intl.string(k.t.Ipxkog) : t.name,
        S = null != j ? `${C} ${j}` : C,
        E = l.useCallback(() => {
            null != m && r(m.ctaAction);
        }, [m, r]);
    return (0, i.jsxs)("div", {
        id: T.hJ,
        role: "tabpanel",
        "aria-labelledby": A(t.badge_id),
        className: D.SV,
        children: [
            (0, i.jsx)("div", { className: D.b, children: (0, i.jsx)(p.J, { onClick: n, size: "sm" }) }),
            null != u && (0, i.jsx)("img", { className: D.y2, src: u, alt: "", "aria-hidden": !0 }),
            (0, i.jsxs)("div", {
                className: D.OU,
                children: [
                    (0, i.jsxs)("div", {
                        className: D.cQ,
                        children: [
                            (0, i.jsx)(v.D, {
                                variant: "display-sm",
                                color: "text-strong",
                                className: h()(D._r, x && D.tN),
                                children: S,
                            }),
                            (0, i.jsx)(_.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: t.owned ? k.intl.string(k.t.sTFApF) : k.intl.string(k.t.dDDCvU),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: D.oA,
                        children: [
                            null != g &&
                                (0, i.jsxs)("div", {
                                    className: D.sn,
                                    children: [
                                        (0, i.jsx)(N.E, { ...g }),
                                        (0, i.jsx)(_.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            children: k.intl.string(k.t["6V13dx"]),
                                        }),
                                    ],
                                }),
                            null != m &&
                                (0, i.jsxs)("div", {
                                    className: D.d9,
                                    children: [
                                        (0, i.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            className: D.ij,
                                            children: m.description(),
                                        }),
                                        (0, i.jsx)(f.$, {
                                            variant: m.ctaVariant,
                                            size: "sm",
                                            onClick: E,
                                            text: m.ctaLabel(),
                                        }),
                                        x &&
                                            (0, i.jsxs)("div", {
                                                className: D.cJ,
                                                children: [
                                                    (0, i.jsx)("div", { className: D.y9 }),
                                                    (0, i.jsx)(G, { badge: t, currentTier: s }),
                                                ],
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
function L(e) {
    let { transitionState: t, onClose: n, initialBadgeId: c } = e,
        [o, u] = l.useState(c ?? null),
        g = (0, a.bG)([m], () => m.getBadges());
    l.useEffect(() => {
        (0, d.R)();
    }, []);
    let x = l.useMemo(() => {
            let { earnable: e, owned: t } = O(g);
            return t[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [g]),
        h = null != o ? m.getBadgeById(o) : void 0,
        b = null != x ? m.getBadgeById(x) : void 0,
        j = h ?? b,
        _ = 0 === g.length,
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
        className: D.CR,
        children: (0, i.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: D.jE,
            children: _
                ? (0, i.jsx)("div", { className: D.Lq, children: (0, i.jsx)(s.y, {}) })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(F, { selectedBadgeId: j?.badge_id ?? null, onSelectBadge: u }),
                          null != j && (0, i.jsx)($, { badge: j, onClose: p, onCtaClick: v }),
                      ],
                  }),
        }),
    });
}
