n.d(t, { default: () => q });
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
class m extends a.Ay.Store {
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
let g = new m(c.h, {
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
var x = n(70283),
    h = n(534514),
    b = n(140735),
    j = n(834730),
    _ = n(815021),
    p = n(508770),
    v = n(821609),
    N = n(775602),
    f = n(425713);
n(321073);
var y = n(503698),
    C = n.n(y),
    S = n(837381),
    E = n(741918),
    w = n(939249),
    B = n(707554),
    D = n(260762),
    I = n(92111),
    T = n(375708),
    k = n(490308);
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
        "aria-controls": n ? I.hJ : void 0,
        className: C()(k.oL, n && k.xO),
        onFocus: r.onFocus,
        onClick: l,
        children:
            null != t.simple_icon_url &&
            (0, i.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: k.pW }),
    });
}
function R(e) {
    let { label: t, navId: n, badges: l, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, D.A)(n, E.Gl.HORIZONTAL);
    return (0, i.jsxs)("div", {
        className: k.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(h.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
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
                            className: k.yq,
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
function F(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function O(e) {
    let { selectedBadgeId: t, onSelectBadge: n } = e,
        r = (0, a.bG)([g], () => g.getBadges()),
        { earnable: s, owned: d } = l.useMemo(() => F(r), [r]);
    return (0, i.jsx)("div", {
        className: k.ws,
        children: (0, i.jsx)(B.F, {
            component: (0, i.jsxs)("div", {
                className: k.NG,
                children: [
                    (0, i.jsx)(h.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: T.intl.string(T.t.sl2irJ),
                    }),
                    (0, i.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: T.intl.string(T.t["62xU4E"]),
                    }),
                ],
            }),
            children: (0, i.jsxs)("div", {
                className: k.hG,
                children: [
                    d.length > 0 &&
                        (0, i.jsx)(R, {
                            label: { type: "aria", text: T.intl.string(T.t.UqnlQF) },
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
                                text: T.intl.string(T.t["0YzU//"]),
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
    let { tier: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.D, {
                variant: "display-sm",
                color: "text-brand",
                className: k.tN,
                children: T.intl.string(T.t.Ipxkog),
            }),
            null != t &&
                (0, i.jsx)(h.D, {
                    variant: "display-sm",
                    color: "text-strong",
                    className: k.tN,
                    children: t.name ?? t.key,
                }),
        ],
    });
}
function $(e) {
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
                : t.toLocaleDateString(T.intl.currentLocale, { month: "short", year: "numeric" })) ??
            T.intl.string(T.t.SNIb0t),
        d = l.useId(),
        c = T.intl.string(T.t.crwYbF);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.owned
                ? (0, i.jsx)(b.A, { id: d, children: c })
                : (0, i.jsx)(j.E, {
                      id: d,
                      variant: "text-xxs/medium",
                      color: "text-default",
                      className: k.Hm,
                      children: c,
                  }),
            (0, i.jsx)("ul", {
                className: k.by,
                "aria-labelledby": d,
                children: P.sp.map((e) => {
                    let t = P.VD[e],
                        l = t.tenureReqNumMonths,
                        a = n.owned && r >= l;
                    return (0, i.jsxs)(
                        "li",
                        {
                            className: a ? k.Oe : `${k.Oe} ${k.Kv}`,
                            children: [
                                (0, i.jsx)("img", {
                                    className: k.Qm,
                                    src: (0, f.I)(e).standard,
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsxs)(j.E, {
                                    variant: "text-xxs/medium",
                                    color: a ? "text-default" : "text-muted",
                                    className: k.Ou,
                                    children: [
                                        T.intl.string(t.nameUnformatted),
                                        (0, i.jsx)("br", {}),
                                        a
                                            ? s
                                            : (function (e) {
                                                  if (e < 12)
                                                      return T.intl.formatToPlainString(T.t.kridzK, { months: e });
                                                  let t = e / 12;
                                                  return t >= 6
                                                      ? T.intl.string(T.t.nPrx97)
                                                      : T.intl.formatToPlainString(T.t.PClsrw, { years: t });
                                              })(l),
                                    ],
                                }),
                                (0, i.jsx)(b.A, { children: T.intl.string(a ? T.t.SNIb0t : T.t.uHtDcT) }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function L(e) {
    let { badge: t, onClose: n, onCtaClick: r } = e,
        s = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        d = (0, a.bG)([N.A], () => N.A.useReducedMotion)
            ? void 0
            : (s?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        c = s?.complex_icon_static_url ?? t.complex_icon_static_url,
        o = s?.simple_icon_url ?? t.simple_icon_url,
        u = d ?? c ?? o,
        m = (0, U.V)(s?.rarity ?? t.rarity),
        g = (0, I.Om)(t.badge_id),
        b = t.badge_id === x.$.PREMIUM_TENURE,
        f = s?.name != null ? `${t.name} ${s.name}` : t.name,
        y = l.useCallback(() => {
            null != g && r(g.ctaAction);
        }, [g, r]);
    return (0, i.jsxs)("div", {
        id: I.hJ,
        role: "tabpanel",
        "aria-labelledby": A(t.badge_id),
        className: k.SV,
        children: [
            (0, i.jsx)("div", { className: k.b, children: (0, i.jsx)(_.J, { onClick: n, size: "sm" }) }),
            null != u && (0, i.jsx)("img", { className: k.y2, src: u, alt: "", "aria-hidden": !0 }),
            (0, i.jsxs)("div", {
                className: k.OU,
                children: [
                    (0, i.jsxs)("div", {
                        className: k.cQ,
                        children: [
                            b
                                ? (0, i.jsx)(G, { tier: s })
                                : (0, i.jsx)(h.D, {
                                      variant: "display-sm",
                                      color: "text-strong",
                                      className: k._r,
                                      children: f,
                                  }),
                            (0, i.jsx)(j.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: t.owned ? T.intl.string(T.t.sTFApF) : T.intl.string(T.t.dDDCvU),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: k.oA,
                        children: [
                            null != m &&
                                (0, i.jsxs)("div", {
                                    className: k.sn,
                                    children: [
                                        (0, i.jsx)(p.E, { ...m }),
                                        (0, i.jsx)(j.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            children: T.intl.string(T.t["6V13dx"]),
                                        }),
                                    ],
                                }),
                            null != g &&
                                (0, i.jsxs)("div", {
                                    className: k.d9,
                                    children: [
                                        (0, i.jsx)(j.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            className: k.ij,
                                            children: g.description(),
                                        }),
                                        (0, i.jsx)(v.$, {
                                            variant: g.ctaVariant,
                                            size: "sm",
                                            onClick: y,
                                            text: g.ctaLabel(),
                                        }),
                                        b &&
                                            (0, i.jsxs)("div", {
                                                className: k.cJ,
                                                children: [
                                                    (0, i.jsx)("div", { className: k.y9 }),
                                                    (0, i.jsx)($, { badge: t, currentTier: s }),
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
function q(e) {
    let { transitionState: t, onClose: n, initialBadgeId: c } = e,
        [o, u] = l.useState(c ?? null),
        m = (0, a.bG)([g], () => g.getBadges());
    l.useEffect(() => {
        (0, d.R)();
    }, []);
    let x = l.useMemo(() => {
            let { earnable: e, owned: t } = F(m);
            return t[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [m]),
        h = null != o ? g.getBadgeById(o) : void 0,
        b = null != x ? g.getBadgeById(x) : void 0,
        j = h ?? b,
        _ = 0 === m.length,
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
        "aria-label": T.intl.string(T.t.PEjP4L),
        transitionState: t,
        size: r.rI.DYNAMIC,
        hideShadow: !0,
        className: k.CR,
        children: (0, i.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: k.jE,
            children: _
                ? (0, i.jsx)("div", { className: k.Lq, children: (0, i.jsx)(s.y, {}) })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(O, { selectedBadgeId: j?.badge_id ?? null, onSelectBadge: u }),
                          null != j && (0, i.jsx)(L, { badge: j, onClose: p, onCtaClick: v }),
                      ],
                  }),
        }),
    });
}
