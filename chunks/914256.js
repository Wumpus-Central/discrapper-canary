n.d(t, { default: () => K });
var l = n(627968),
    i = n(64700),
    a = n(17928),
    r = n(935462),
    s = n(289873),
    d = n(287809),
    c = n(682618),
    o = n(228366);
function u(e) {
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
        return null == n || null == l ? 0 : Math.max(0, u(n) - l.current);
    }
}
let h = new x(o.h, {
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
    v = n(70283),
    f = n(834730),
    _ = n(140735),
    p = n(97808),
    w = n(939249),
    N = n(815021),
    y = n(534514),
    B = n(508770),
    C = n(821609),
    S = n(683071),
    T = n(775602),
    E = n(425713);
n(321073);
var I = n(837381),
    U = n(741918),
    F = n(707554),
    O = n(260762),
    k = n(486020);
function A(e, t, n) {
    let l = (0, a.bG)([d.default], () => (null != e ? d.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, k.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var D = n(92111),
    M = n(778712),
    P = n(375708),
    G = n(490308);
function R(e) {
    return `badge-tab-${e}`;
}
function V(e) {
    let { badge: t, isSelected: n, onSelect: i, itemId: a } = e,
        r = (0, I.rm)(a);
    return (0, l.jsx)(w.D, {
        ...r,
        role: "tab",
        id: R(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? D.hJ : void 0,
        className: j()(G.oL, n && G.xO),
        onFocus: r.onFocus,
        onClick: i,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: G.pW }),
    });
}
function z(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, O.A)(n, U.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: G.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(y.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(I.hD, {
                navigator: s,
                children: (0, l.jsx)(I.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: G.yq,
                            children: i.map((e, t) =>
                                (0, l.jsx)(
                                    V,
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
function $(e) {
    let t = [],
        n = [];
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: n };
}
function H(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: r,
            isViewingOtherUser: s,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        o = (0, a.bG)([h], () => (null != r ? h.getBadges(r) : []), [r]),
        { earnable: u, owned: g } = i.useMemo(() => $(o), [o]),
        m = A(r, s, 48),
        x = s && null != d ? P.intl.format(P.t.EIcwoe, { username: d }) : P.intl.string(P.t.sl2irJ),
        b = s && null != d ? P.intl.format(P.t["75s2Rq"], { username: d }) : P.intl.string(P.t["62xU4E"]),
        j = s && null != d ? P.intl.formatToPlainString(P.t.BCjSZy, { username: d }) : P.intl.string(P.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: G.ws,
        children: (0, l.jsxs)(F.F, {
            component: (0, l.jsxs)("div", {
                className: G.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: G.kc,
                        children: [
                            null != m && (0, l.jsx)(p.eu, { src: m, size: M._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(y.D, { variant: "heading-lg/semibold", color: "text-strong", children: x }),
                        ],
                    }),
                    (0, l.jsx)(f.E, { variant: "text-sm/medium", color: "text-subtle", children: b }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: G.hG,
                    children: [
                        g.length > 0 &&
                            (0, l.jsx)(z, {
                                label: { type: "aria", text: j },
                                navId: "badge-directory-owned",
                                badges: g,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                        !s &&
                            u.length > 0 &&
                            (0, l.jsx)(z, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: P.intl.string(P.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: u,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                    ],
                }),
                s &&
                    (0, l.jsx)("div", {
                        className: G.HO,
                        children: (0, l.jsx)(C.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: P.intl.string(P.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var L = n(731454),
    q = n(788868);
function Y(e) {
    var t;
    let { badge: n, currentTier: a, isViewingOtherUser: r, targetUsername: s } = e,
        d = n.owned ? Math.max(n.progress?.[0]?.current ?? 0, u(a)) : 0,
        c = r
            ? P.intl.string(P.t.sTFApF)
            : ((null ==
              (t = (function (e) {
                  if (null == e) return null;
                  let t = new Date(e);
                  return Number.isNaN(t.getTime()) ? null : t;
              })(n.obtained_at))
                  ? null
                  : t.toLocaleDateString(P.intl.currentLocale, { month: "short", year: "numeric" })) ??
              P.intl.string(P.t.sTFApF)),
        o = i.useId(),
        g = r && null != s ? P.intl.formatToPlainString(P.t.KyTwIh, { username: s }) : P.intl.string(P.t.crwYbF);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(f.E, { id: o, variant: "text-xs/medium", color: "text-subtle", className: G.Hm, children: g }),
            (0, l.jsx)("ul", {
                className: G.by,
                "aria-labelledby": o,
                children: q.sp.map((e) => {
                    let t = q.VD[e],
                        i = t.tenureReqNumMonths,
                        a = n.owned && d >= i;
                    return (0, l.jsxs)(
                        "li",
                        {
                            className: a ? G.Oe : `${G.Oe} ${G.Kv}`,
                            children: [
                                (0, l.jsx)("img", {
                                    className: G.Qm,
                                    src: (0, E.I)(e).standard,
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                                (0, l.jsxs)(f.E, {
                                    variant: "text-xxs/medium",
                                    color: a ? "text-default" : "text-muted",
                                    className: G.Ou,
                                    children: [
                                        P.intl.string(t.nameUnformatted),
                                        (0, l.jsx)("br", {}),
                                        a
                                            ? c
                                            : (function (e) {
                                                  if (e < 12)
                                                      return P.intl.formatToPlainString(P.t.kridzK, { months: e });
                                                  let t = e / 12;
                                                  return t >= 6
                                                      ? P.intl.string(P.t.nPrx97)
                                                      : P.intl.formatToPlainString(P.t.PClsrw, { years: t });
                                              })(i),
                                    ],
                                }),
                                (0, l.jsx)(_.A, { children: P.intl.string(a ? P.t.sTFApF : P.t.uHtDcT) }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function J(e) {
    let t,
        {
            badge: n,
            isOwnProfile: i,
            isViewingOtherUser: a,
            targetUsername: r,
            viewedAvatarSrc: s,
            targetOwnsBadge: d,
            viewerOwnsBadge: c,
            onToggleViewedUser: o,
        } = e;
    if (
        ((t = i
            ? n.owned
                ? P.intl.string(P.t.sTFApF)
                : P.intl.string(P.t.uHtDcT)
            : a && null != r
              ? P.intl.formatToPlainString(P.t.Eo5Cnp, { username: r })
              : n.owned
                ? null != n.obtained_at
                    ? P.intl.formatToPlainString(P.t["0aEh2a"], { date: new Date(n.obtained_at) })
                    : P.intl.string(P.t.sTFApF)
                : P.intl.string(P.t.uHtDcT)),
        i)
    )
        return (0, l.jsx)(f.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let u = a && c,
        g = !a && d && null != r;
    return (0, l.jsxs)("div", {
        className: G.bn,
        children: [
            null != s && (0, l.jsx)(p.eu, { src: s, size: M._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(f.E, { variant: "text-xs/medium", color: "text-subtle", className: G.CT, children: t }),
            (u || g) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(f.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: G.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(w.D, {
                            className: G.RY,
                            onClick: o,
                            children: (0, l.jsx)(f.E, {
                                variant: "text-xs/medium",
                                color: "text-link",
                                className: G.CT,
                                children: u
                                    ? P.intl.string(P.t.yxEAGH)
                                    : P.intl.formatToPlainString(P.t["9GNsge"], { username: r }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function Z(e) {
    let {
            badge: t,
            viewerBadge: n,
            onClose: r,
            isOwnProfile: s,
            isViewingOtherUser: d,
            targetUsername: c,
            displayedUserId: o,
            targetOwnsBadge: u,
            viewerOwnsBadge: g,
            onToggleViewedUser: m,
            onViewOwnCatalog: x,
        } = e,
        h = A(o, d, 32),
        b = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        _ = (0, a.bG)([T.A], () => T.A.useReducedMotion)
            ? void 0
            : (b?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        p = b?.complex_icon_static_url ?? t.complex_icon_static_url,
        w = b?.simple_icon_url ?? t.simple_icon_url,
        E = _ ?? p ?? w,
        I = (0, L.V)(b?.rarity ?? t.rarity),
        U = (0, D.Om)(t.badge_id),
        F = t.badge_id === v.$.PREMIUM_TENURE,
        O = F ? (b?.name ?? b?.key) : b?.name,
        k = F ? P.intl.string(P.t.Ipxkog) : t.name,
        M = null != O ? `${k} ${O}` : k,
        V = n?.owned === !0 && (n.tiers?.length ?? 0) > 0 && null == n.next_tier,
        z = "";
    V
        ? (z = P.intl.string(P.t.jY5xAL))
        : n?.description != null
          ? (z = n.description)
          : d || t.is_earnable
            ? !d && t.owned && (z = P.intl.string(P.t.W87dHj))
            : (z = t.owned ? P.intl.string(P.t["m++6Ll"]) : P.intl.string(P.t.VaSz3l));
    let $ = i.useCallback(() => {
            null != U && (r(), U.ctaAction());
        }, [U, r]),
        H = (0, D.ie)(t.badge_id) && !t.is_earnable,
        q = d && !t.is_earnable && !g;
    return (0, l.jsxs)("div", {
        id: D.hJ,
        role: "tabpanel",
        "aria-labelledby": R(t.badge_id),
        className: G.SV,
        children: [
            (0, l.jsx)("div", { className: G.b, children: (0, l.jsx)(N.J, { onClick: r, size: "sm" }) }),
            null != E && (0, l.jsx)("img", { className: G.y2, src: E, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: G.OU,
                children: [
                    (0, l.jsxs)("div", {
                        className: G.cQ,
                        children: [
                            (0, l.jsx)(y.D, {
                                variant: "display-sm",
                                color: "text-strong",
                                className: j()(G._r, F && G.tN),
                                children: M,
                            }),
                            (0, l.jsx)(J, {
                                badge: t,
                                isOwnProfile: s,
                                isViewingOtherUser: d,
                                targetUsername: c,
                                viewedAvatarSrc: h,
                                targetOwnsBadge: u,
                                viewerOwnsBadge: g,
                                onToggleViewedUser: m,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: G.oA,
                        children: [
                            null != I &&
                                (0, l.jsxs)("div", {
                                    className: G.sn,
                                    children: [
                                        (0, l.jsx)(B.E, { ...I }),
                                        (0, l.jsx)(f.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            children: P.intl.string(P.t["phYZe+"]),
                                        }),
                                    ],
                                }),
                            ("" !== z || null != U) &&
                                (0, l.jsxs)("div", {
                                    className: G.d9,
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: G.E4,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: G.jv,
                                                    children: [
                                                        H &&
                                                            (0, l.jsx)(f.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-subtle",
                                                                className: G.c$,
                                                                children: P.intl.string(P.t["/Gmn3f"]),
                                                            }),
                                                        "" !== z &&
                                                            (0, l.jsx)(f.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-default",
                                                                className: G.ij,
                                                                children: z,
                                                            }),
                                                    ],
                                                }),
                                                null != U &&
                                                    (0, l.jsx)(C.$, {
                                                        variant: U.ctaVariant({ owned: g }),
                                                        size: "sm",
                                                        onClick: $,
                                                        text: U.ctaLabel({ owned: g }),
                                                    }),
                                            ],
                                        }),
                                        F &&
                                            (0, l.jsxs)("div", {
                                                className: G.cJ,
                                                children: [
                                                    (0, l.jsx)("div", { className: G.y9 }),
                                                    (0, l.jsx)(Y, {
                                                        badge: t,
                                                        currentTier: b,
                                                        isViewingOtherUser: d,
                                                        targetUsername: c,
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            q &&
                                (0, l.jsx)(S.w, {
                                    type: "info",
                                    children: P.intl.format(P.t.vFekBs, { onViewBadges: x }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    let { transitionState: t, onClose: n, initialBadgeId: o, targetUserId: u, targetUsername: g } = e,
        m = (0, a.bG)([d.default], () => d.default.getCurrentUser()?.id),
        x = null == u || u === m,
        [b, j] = i.useState(!x && null != u),
        v = b ? u : m,
        [f, _] = i.useState(o ?? null),
        p = (0, a.bG)([h], () => (null != v ? h.getBadges(v) : []), [v]);
    i.useEffect(() => {
        null == v || h.hasCatalogFor(v) || (0, c.R)(v), x || null == m || h.hasCatalogFor(m) || (0, c.R)(m);
    }, [v, x, m]);
    let w = i.useCallback(() => {
            null != m && null != u && j((e) => !e);
        }, [m, u]),
        N = i.useCallback(() => {
            null != m && null != u && (j(!1), _(null));
        }, [m, u]),
        y = i.useMemo(() => {
            let { earnable: e, owned: t } = $(p);
            return b ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [p, b]),
        B = null != f && null != v ? h.getBadgeById(f, v) : void 0,
        C = null != y && null != v ? h.getBadgeById(y, v) : void 0,
        S = B ?? C,
        T = 0 === p.length,
        E = (0, a.bG)([h], () => null != u && null != S && (h.getBadgeById(S.badge_id, u)?.owned ?? !1), [S, u]),
        I = (0, a.bG)([h], () => (null != m && null != S ? h.getBadgeById(S.badge_id, m) : void 0), [S, m]),
        U = I?.owned ?? !1,
        F = i.useCallback(() => {
            n();
        }, [n]);
    return (0, l.jsx)(r.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": P.intl.string(P.t.PEjP4L),
        transitionState: t,
        size: r.rI.DYNAMIC,
        hideShadow: !0,
        className: G.CR,
        children: (0, l.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: G.jE,
            children: T
                ? (0, l.jsx)("div", { className: G.Lq, children: (0, l.jsx)(s.y, {}) })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(H, {
                              selectedBadgeId: S?.badge_id ?? null,
                              onSelectBadge: _,
                              displayedUserId: v,
                              isViewingOtherUser: b,
                              targetUsername: g,
                              onViewOwnCatalog: N,
                          }),
                          null != S &&
                              (0, l.jsx)(Z, {
                                  badge: S,
                                  viewerBadge: I,
                                  onClose: F,
                                  isOwnProfile: x,
                                  isViewingOtherUser: b,
                                  targetUsername: g,
                                  displayedUserId: v,
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
