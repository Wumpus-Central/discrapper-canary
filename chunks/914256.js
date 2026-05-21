n.d(t, { default: () => ee });
var l = n(627968),
    i = n(64700),
    a = n(17928),
    r = n(935462),
    s = n(289873),
    d = n(287809),
    u = n(682618),
    c = n(228366);
function o(e) {
    return e?.requirements[0]?.threshold ?? 0;
}
let g = new Map(),
    m = new Set();
class x extends a.Ay.Store {
    initialize() {
        this.waitFor(d.default);
    }
    static displayName = "BadgeDirectoryStore";
    getBadges(e) {
        let t = e ?? d.default.getCurrentUser()?.id;
        if (null == t) return [];
        let n = g.get(t);
        return null != n ? Array.from(n.values()) : [];
    }
    hasCatalogFor(e) {
        return m.has(e);
    }
    getBadgeById(e, t) {
        let n = t ?? d.default.getCurrentUser()?.id;
        return null != n ? g.get(n)?.get(e) : void 0;
    }
    getSingleRequirementProgress(e, t) {
        let n = this.getBadgeById(e, t)?.progress;
        if (null != n && 0 !== n.length) return n[0];
    }
    getCurrentTier(e, t) {
        let n = this.getBadgeById(e, t);
        if (n?.current_tier != null) return n.tiers.find((e) => e.key === n.current_tier);
    }
    getNextTier(e, t) {
        let n = this.getBadgeById(e, t);
        if (n?.next_tier != null) return n.tiers.find((e) => e.key === n.next_tier);
    }
    getRemainingToNextTier(e, t) {
        let n = this.getNextTier(e, t),
            l = this.getSingleRequirementProgress(e, t);
        return null == n || null == l ? 0 : Math.max(0, o(n) - l.current);
    }
}
let h = new x(c.h, {
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { userId: t, badges: n } = e,
            l = new Map(g);
        l.set(t, new Map(n.map((e) => [e.badge_id, e]))), (g = l), (m = new Set(m).add(t));
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { userId: t, badge: n } = e,
            l = new Map(g),
            i = new Map(l.get(t) ?? new Map());
        i.set(n.badge_id, n), l.set(t, i), (g = l);
    },
    LOGOUT: function () {
        (g = new Map()), (m = new Set());
    },
});
var b = n(503698),
    j = n.n(b),
    _ = n(70283),
    f = n(834730),
    v = n(140735),
    p = n(97808),
    w = n(123292),
    N = n(815021),
    y = n(364522),
    B = n(534514),
    C = n(508770),
    S = n(821609),
    T = n(404778),
    E = n(683071),
    I = n(775602),
    U = n(425713);
n(321073);
var F = n(837381),
    O = n(741918),
    k = n(939249),
    A = n(707554),
    D = n(260762),
    M = n(486020);
function P(e, t, n) {
    let l = (0, a.bG)([d.default], () => (null != e ? d.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, M.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var G = n(92111),
    R = n(778712),
    V = n(375708),
    z = n(490308);
function $(e) {
    return `badge-tab-${e}`;
}
function H(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function L(e) {
    let { badge: t, isSelected: n, onSelect: i, itemId: a } = e,
        r = (0, F.rm)(a);
    return (0, l.jsx)(k.D, {
        ...r,
        role: "tab",
        id: $(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? G.hJ : void 0,
        className: j()(z.oL, n && z.xO),
        onFocus: r.onFocus,
        onClick: i,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: z.pW }),
    });
}
function q(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, D.A)(n, O.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: z.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(B.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(F.hD, {
                navigator: s,
                children: (0, l.jsx)(F.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: z.yq,
                            children: i.map((e, t) =>
                                (0, l.jsx)(
                                    L,
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
function Z(e) {
    let t = [],
        n = [];
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: n };
}
function Y(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: r,
            isViewingOtherUser: s,
            targetUsername: d,
            onViewOwnCatalog: u,
        } = e,
        c = (0, a.bG)([h], () => (null != r ? h.getBadges(r) : []), [r]),
        { earnable: o, owned: g } = i.useMemo(() => Z(c), [c]),
        m = P(r, s, 48),
        x = null != d ? H(d) : null,
        b = null != d && x !== d,
        j =
            null != x && b && null != m
                ? (0, l.jsxs)("span", {
                      className: z._p,
                      children: [(0, l.jsx)(p.eu, { src: m, size: R._3.SIZE_24, "aria-hidden": !0 }), x],
                  })
                : x,
        _ = s && null != j ? V.intl.format(V.t.BCjSZy, { username: j }) : V.intl.string(V.t.sl2irJ),
        v = s && null != d ? V.intl.string(V.t["75s2Rq"]) : V.intl.string(V.t["62xU4E"]),
        w = s && null != d ? V.intl.formatToPlainString(V.t.BCjSZy, { username: d }) : V.intl.string(V.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: z.ws,
        children: (0, l.jsxs)(A.F, {
            component: (0, l.jsxs)("div", {
                className: z.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: z.kc,
                        children: [
                            !b && null != m && (0, l.jsx)(p.eu, { src: m, size: R._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(B.D, { variant: "heading-lg/semibold", color: "text-strong", children: _ }),
                        ],
                    }),
                    (0, l.jsx)(f.E, { variant: "text-sm/medium", color: "text-subtle", children: v }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: z.hG,
                    children: [
                        g.length > 0 &&
                            (0, l.jsx)(q, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: g,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                        !s &&
                            o.length > 0 &&
                            (0, l.jsx)(q, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: V.intl.string(V.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: o,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                    ],
                }),
                s &&
                    (0, l.jsx)("div", {
                        className: z.HO,
                        children: (0, l.jsx)(S.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: u,
                            text: V.intl.string(V.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var J = n(731454),
    Q = n(788868);
function K(e) {
    var t;
    let { badge: n, currentTier: a, isViewingOtherUser: r, targetUsername: s } = e,
        d = n.owned ? Math.max(n.progress?.[0]?.current ?? 0, o(a)) : 0,
        u = r
            ? V.intl.string(V.t.sTFApF)
            : ((null ==
              (t = (function (e) {
                  if (null == e) return null;
                  let t = new Date(e);
                  return Number.isNaN(t.getTime()) ? null : t;
              })(n.obtained_at))
                  ? null
                  : t.toLocaleDateString(V.intl.currentLocale, { month: "short", year: "numeric" })) ??
              V.intl.string(V.t.sTFApF)),
        c = i.useId(),
        g = r && null != s ? V.intl.formatToPlainString(V.t.KyTwIh, { username: s }) : V.intl.string(V.t.crwYbF);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(f.E, { id: c, variant: "text-xs/medium", color: "text-subtle", className: z.Hm, children: g }),
            (0, l.jsx)("ul", {
                className: z.by,
                "aria-labelledby": c,
                children: Q.sp.map((e) => {
                    let t = Q.VD[e],
                        i = t.tenureReqNumMonths,
                        a = n.owned && d >= i;
                    return (0, l.jsxs)(
                        "li",
                        {
                            className: a ? z.Oe : `${z.Oe} ${z.Kv}`,
                            children: [
                                (0, l.jsx)("img", {
                                    className: z.Qm,
                                    src: (0, U.I)(e).standard,
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                                (0, l.jsxs)(f.E, {
                                    variant: "text-xxs/medium",
                                    color: a ? "text-default" : "text-muted",
                                    className: z.Ou,
                                    children: [
                                        V.intl.string(t.nameUnformatted),
                                        (0, l.jsx)("br", {}),
                                        a
                                            ? u
                                            : (function (e) {
                                                  if (e < 12)
                                                      return V.intl.formatToPlainString(V.t.kridzK, { months: e });
                                                  let t = e / 12;
                                                  return t >= 6
                                                      ? V.intl.string(V.t.nPrx97)
                                                      : V.intl.formatToPlainString(V.t.PClsrw, { years: t });
                                              })(i),
                                    ],
                                }),
                                (0, l.jsx)(v.A, { children: V.intl.string(a ? V.t.sTFApF : V.t.uHtDcT) }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function W(e) {
    let t,
        {
            badge: n,
            isOwnProfile: i,
            isViewingOtherUser: a,
            targetUsername: r,
            viewedAvatarSrc: s,
            targetOwnsBadge: d,
            viewerOwnsBadge: u,
            onToggleViewedUser: c,
        } = e;
    if (
        ((t = i
            ? n.owned
                ? V.intl.string(V.t.sTFApF)
                : V.intl.string(V.t.uHtDcT)
            : a && null != r
              ? V.intl.formatToPlainString(V.t.Eo5Cnp, { username: H(r) })
              : n.owned
                ? null != n.obtained_at
                    ? V.intl.formatToPlainString(V.t["0aEh2a"], { date: new Date(n.obtained_at) })
                    : V.intl.string(V.t.sTFApF)
                : V.intl.string(V.t.uHtDcT)),
        i)
    )
        return (0, l.jsx)(f.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let o = a && u,
        g = !a && d && null != r;
    return (0, l.jsxs)("div", {
        className: z.bn,
        children: [
            null != s && (0, l.jsx)(p.eu, { src: s, size: R._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(f.E, { variant: "text-xs/medium", color: "text-subtle", className: z.CT, children: t }),
            (o || g) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(f.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: z.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(w.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: c,
                            text: o
                                ? V.intl.string(V.t.yxEAGH)
                                : V.intl.formatToPlainString(V.t["9GNsge"], { username: H(r) }),
                        }),
                    ],
                }),
        ],
    });
}
function X(e) {
    let {
            badge: t,
            viewerBadge: n,
            onClose: r,
            isOwnProfile: s,
            isViewingOtherUser: d,
            targetUsername: u,
            displayedUserId: c,
            targetOwnsBadge: o,
            viewerOwnsBadge: g,
            onToggleViewedUser: m,
            onViewOwnCatalog: x,
        } = e,
        h = P(c, d, 32),
        b = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        v = (0, a.bG)([I.A], () => I.A.useReducedMotion)
            ? void 0
            : (b?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        p = b?.complex_icon_static_url ?? t.complex_icon_static_url,
        w = b?.simple_icon_url ?? t.simple_icon_url,
        U = v ?? p ?? w,
        F = (0, J.V)(b?.rarity ?? t.rarity),
        O = (0, G.Om)(t.badge_id),
        k = t.badge_id === _.$.PREMIUM_TENURE,
        A = k ? (b?.name ?? b?.key) : b?.name,
        D = k ? V.intl.string(V.t.Ipxkog) : t.name,
        M = null != A ? `${D} ${A}` : D,
        R = n?.owned === !0 && (n.tiers?.length ?? 0) > 0 && null == n.next_tier,
        H = "";
    R
        ? (H = V.intl.string(V.t.jY5xAL))
        : n?.description != null
          ? (H = n.description)
          : d || t.is_earnable
            ? !d && t.owned && (H = V.intl.string(V.t.W87dHj))
            : (H = t.owned ? V.intl.string(V.t["m++6Ll"]) : V.intl.string(V.t.VaSz3l));
    let L = i.useCallback(() => {
            null != O && (r(), O.ctaAction());
        }, [O, r]),
        q = (0, G.ie)(t.badge_id) && !t.is_earnable,
        Z = d && !t.is_earnable && !g;
    return (0, l.jsxs)("div", {
        id: G.hJ,
        role: "tabpanel",
        "aria-labelledby": $(t.badge_id),
        className: z.SV,
        children: [
            (0, l.jsx)("div", { className: z.b, children: (0, l.jsx)(N.J, { onClick: r, size: "sm" }) }),
            (0, l.jsxs)(y.d_, {
                className: z.C9,
                children: [
                    null != U && (0, l.jsx)("img", { className: z.y2, src: U, alt: "", "aria-hidden": !0 }),
                    (0, l.jsxs)("div", {
                        className: z.OU,
                        children: [
                            (0, l.jsxs)("div", {
                                className: z.cQ,
                                children: [
                                    (0, l.jsx)(B.D, {
                                        variant: "display-sm",
                                        color: "text-strong",
                                        className: j()(z._r, k && z.tN),
                                        children: M,
                                    }),
                                    (0, l.jsx)(W, {
                                        badge: t,
                                        isOwnProfile: s,
                                        isViewingOtherUser: d,
                                        targetUsername: u,
                                        viewedAvatarSrc: h,
                                        targetOwnsBadge: o,
                                        viewerOwnsBadge: g,
                                        onToggleViewedUser: m,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: z.oA,
                                children: [
                                    null != F &&
                                        (0, l.jsxs)("div", {
                                            className: z.sn,
                                            children: [
                                                (0, l.jsx)(C.E, { ...F }),
                                                (0, l.jsx)(f.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: V.intl.string(V.t["phYZe+"]),
                                                }),
                                            ],
                                        }),
                                    ("" !== H || null != O) &&
                                        (0, l.jsxs)("div", {
                                            className: z.d9,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: z.E4,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: z.jv,
                                                            children: [
                                                                q &&
                                                                    (0, l.jsx)(f.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: z.c$,
                                                                        children: V.intl.string(V.t["/Gmn3f"]),
                                                                    }),
                                                                "" !== H &&
                                                                    (0, l.jsx)(f.E, {
                                                                        variant: "text-sm/medium",
                                                                        color: "text-default",
                                                                        className: z.ij,
                                                                        children: H,
                                                                    }),
                                                            ],
                                                        }),
                                                        null != O &&
                                                            (0, l.jsx)(S.$, {
                                                                variant: O.ctaVariant({ owned: g }),
                                                                size: "sm",
                                                                onClick: L,
                                                                text: O.ctaLabel({ owned: g }),
                                                            }),
                                                    ],
                                                }),
                                                k &&
                                                    (0, l.jsxs)("div", {
                                                        className: z.cJ,
                                                        children: [
                                                            (0, l.jsx)(T.c, {}),
                                                            (0, l.jsx)(K, {
                                                                badge: t,
                                                                currentTier: b,
                                                                isViewingOtherUser: d,
                                                                targetUsername: u,
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                    Z &&
                                        (0, l.jsx)(E.w, {
                                            type: "info",
                                            children: V.intl.format(V.t.vFekBs, { onViewBadges: x }),
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
function ee(e) {
    let { transitionState: t, onClose: n, initialBadgeId: c, targetUserId: o, targetUsername: g } = e,
        m = (0, a.bG)([d.default], () => d.default.getCurrentUser()?.id),
        x = null == o || o === m,
        [b, j] = i.useState(!x && null != o),
        _ = b ? o : m,
        [f, v] = i.useState(c ?? null),
        p = (0, a.bG)([h], () => (null != _ ? h.getBadges(_) : []), [_]);
    i.useEffect(() => {
        null == _ || h.hasCatalogFor(_) || (0, u.R)(_), x || null == m || h.hasCatalogFor(m) || (0, u.R)(m);
    }, [_, x, m]);
    let w = i.useCallback(() => {
            null != m && null != o && j((e) => !e);
        }, [m, o]),
        N = i.useCallback(() => {
            null != m && null != o && (j(!1), v(null));
        }, [m, o]),
        y = i.useMemo(() => {
            let { earnable: e, owned: t } = Z(p);
            return b ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [p, b]),
        B = null != f && null != _ ? h.getBadgeById(f, _) : void 0,
        C = null != y && null != _ ? h.getBadgeById(y, _) : void 0,
        S = B ?? C,
        T = 0 === p.length,
        E = (0, a.bG)([h], () => null != o && null != S && (h.getBadgeById(S.badge_id, o)?.owned ?? !1), [S, o]),
        I = (0, a.bG)([h], () => (null != m && null != S ? h.getBadgeById(S.badge_id, m) : void 0), [S, m]),
        U = I?.owned ?? !1,
        F = i.useCallback(() => {
            n();
        }, [n]);
    return (0, l.jsx)(r.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": V.intl.string(V.t.PEjP4L),
        transitionState: t,
        size: r.rI.DYNAMIC,
        hideShadow: !0,
        className: z.CR,
        children: (0, l.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: z.jE,
            children: T
                ? (0, l.jsx)("div", { className: z.Lq, children: (0, l.jsx)(s.y, {}) })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(Y, {
                              selectedBadgeId: S?.badge_id ?? null,
                              onSelectBadge: v,
                              displayedUserId: _,
                              isViewingOtherUser: b,
                              targetUsername: g,
                              onViewOwnCatalog: N,
                          }),
                          null != S &&
                              (0, l.jsx)(X, {
                                  badge: S,
                                  viewerBadge: I,
                                  onClose: F,
                                  isOwnProfile: x,
                                  isViewingOtherUser: b,
                                  targetUsername: g,
                                  displayedUserId: _,
                                  targetOwnsBadge: E,
                                  viewerOwnsBadge: U,
                                  onToggleViewedUser: w,
                                  onViewOwnCatalog: N,
                              }),
                      ],
                  }),
        }),
    });
}
