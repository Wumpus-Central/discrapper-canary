n.d(t, { default: () => J });
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
let g = new Map();
class m extends a.Ay.Store {
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
        return g.has(e);
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
let x = new m(o.h, {
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { userId: t, badges: n } = e,
            l = new Map(g);
        l.set(t, new Map(n.map((e) => [e.badge_id, e]))), (g = l);
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { userId: t, badge: n } = e,
            l = new Map(g),
            i = new Map(l.get(t) ?? new Map());
        i.set(n.badge_id, n), l.set(t, i), (g = l);
    },
    LOGOUT: function () {
        g = new Map();
    },
});
var h = n(503698),
    b = n.n(h),
    j = n(70283),
    _ = n(140735),
    f = n(834730),
    v = n(97808),
    p = n(939249),
    N = n(815021),
    w = n(534514),
    y = n(508770),
    C = n(821609),
    B = n(775602),
    S = n(425713);
n(321073);
var E = n(837381),
    T = n(741918),
    I = n(707554),
    k = n(260762),
    U = n(486020);
function O(e, t, n) {
    let l = (0, a.bG)([d.default], () => (null != e ? d.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, U.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var F = n(92111),
    D = n(778712),
    A = n(375708),
    M = n(490308);
function P(e) {
    return `badge-tab-${e}`;
}
function R(e) {
    let { badge: t, isSelected: n, onSelect: i, itemId: a } = e,
        r = (0, E.rm)(a);
    return (0, l.jsx)(p.D, {
        ...r,
        role: "tab",
        id: P(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? F.hJ : void 0,
        className: b()(M.oL, n && M.xO),
        onFocus: r.onFocus,
        onClick: i,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: M.pW }),
    });
}
function G(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, k.A)(n, T.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: M.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(w.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(E.hD, {
                navigator: s,
                children: (0, l.jsx)(E.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: M.yq,
                            children: i.map((e, t) =>
                                (0, l.jsx)(
                                    R,
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
function L(e) {
    let t = [],
        n = [];
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: n };
}
function z(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: r,
            isViewingOtherUser: s,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        o = (0, a.bG)([x], () => (null != r ? x.getBadges(r) : []), [r]),
        { earnable: u, owned: g } = i.useMemo(() => L(o), [o]),
        m = O(r, s, 48),
        h = s && null != d ? A.intl.format(A.t.EIcwoe, { username: d }) : A.intl.string(A.t.sl2irJ),
        b = s && null != d ? A.intl.format(A.t["75s2Rq"], { username: d }) : A.intl.string(A.t["62xU4E"]),
        j = s && null != d ? A.intl.formatToPlainString(A.t.BCjSZy, { username: d }) : A.intl.string(A.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: M.ws,
        children: (0, l.jsxs)(I.F, {
            component: (0, l.jsxs)("div", {
                className: M.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: M.kc,
                        children: [
                            null != m && (0, l.jsx)(v.eu, { src: m, size: D._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(w.D, { variant: "heading-lg/semibold", color: "text-strong", children: h }),
                        ],
                    }),
                    (0, l.jsx)(f.E, { variant: "text-sm/medium", color: "text-subtle", children: b }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: M.hG,
                    children: [
                        g.length > 0 &&
                            (0, l.jsx)(G, {
                                label: { type: "aria", text: j },
                                navId: "badge-directory-owned",
                                badges: g,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                        !s &&
                            u.length > 0 &&
                            (0, l.jsx)(G, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: A.intl.string(A.t["0YzU//"]),
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
                        className: M.HO,
                        children: (0, l.jsx)(C.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: A.intl.string(A.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var V = n(731454),
    H = n(788868);
function $(e) {
    var t;
    let { badge: n, currentTier: a } = e,
        r = n.owned ? Math.max(n.progress?.[0]?.current ?? 0, u(a)) : 0,
        s =
            (null ==
            (t = (function (e) {
                if (null == e) return null;
                let t = new Date(e);
                return Number.isNaN(t.getTime()) ? null : t;
            })(n.obtained_at))
                ? null
                : t.toLocaleDateString(A.intl.currentLocale, { month: "short", year: "numeric" })) ??
            A.intl.string(A.t.sTFApF),
        d = i.useId(),
        c = A.intl.string(A.t.crwYbF);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n.owned
                ? (0, l.jsx)(_.A, { id: d, children: c })
                : (0, l.jsx)(f.E, {
                      id: d,
                      variant: "text-xxs/medium",
                      color: "text-default",
                      className: M.Hm,
                      children: c,
                  }),
            (0, l.jsx)("ul", {
                className: M.by,
                "aria-labelledby": d,
                children: H.sp.map((e) => {
                    let t = H.VD[e],
                        i = t.tenureReqNumMonths,
                        a = n.owned && r >= i;
                    return (0, l.jsxs)(
                        "li",
                        {
                            className: a ? M.Oe : `${M.Oe} ${M.Kv}`,
                            children: [
                                (0, l.jsx)("img", {
                                    className: M.Qm,
                                    src: (0, S.I)(e).standard,
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                                (0, l.jsxs)(f.E, {
                                    variant: "text-xxs/medium",
                                    color: a ? "text-default" : "text-muted",
                                    className: M.Ou,
                                    children: [
                                        A.intl.string(t.nameUnformatted),
                                        (0, l.jsx)("br", {}),
                                        a
                                            ? s
                                            : (function (e) {
                                                  if (e < 12)
                                                      return A.intl.formatToPlainString(A.t.kridzK, { months: e });
                                                  let t = e / 12;
                                                  return t >= 6
                                                      ? A.intl.string(A.t.nPrx97)
                                                      : A.intl.formatToPlainString(A.t.PClsrw, { years: t });
                                              })(i),
                                    ],
                                }),
                                (0, l.jsx)(_.A, { children: A.intl.string(a ? A.t.sTFApF : A.t.uHtDcT) }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function q(e) {
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
                ? A.intl.string(A.t.sTFApF)
                : A.intl.string(A.t.uHtDcT)
            : a && null != r
              ? A.intl.formatToPlainString(A.t.Eo5Cnp, { username: r })
              : n.owned
                ? null != n.obtained_at
                    ? A.intl.formatToPlainString(A.t["0aEh2a"], { date: new Date(n.obtained_at) })
                    : A.intl.string(A.t.sTFApF)
                : A.intl.string(A.t.uHtDcT)),
        i)
    )
        return (0, l.jsx)(f.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let u = a && c,
        g = !a && d && null != r;
    return (0, l.jsxs)("div", {
        className: M.bn,
        children: [
            null != s && (0, l.jsx)(v.eu, { src: s, size: D._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(f.E, { variant: "text-xs/medium", color: "text-subtle", className: M.CT, children: t }),
            (u || g) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(f.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: M.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(p.D, {
                            className: M.RY,
                            onClick: o,
                            children: (0, l.jsx)(f.E, {
                                variant: "text-xs/medium",
                                color: "text-link",
                                className: M.CT,
                                children: u
                                    ? A.intl.string(A.t.yxEAGH)
                                    : A.intl.formatToPlainString(A.t["9GNsge"], { username: r }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function Y(e) {
    let {
            badge: t,
            onClose: n,
            onCtaClick: r,
            isOwnProfile: s,
            isViewingOtherUser: d,
            targetUsername: c,
            displayedUserId: o,
            targetOwnsBadge: u,
            viewerOwnsBadge: g,
            onToggleViewedUser: m,
        } = e,
        x = O(o, d, 32),
        h = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        _ = (0, a.bG)([B.A], () => B.A.useReducedMotion)
            ? void 0
            : (h?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        v = h?.complex_icon_static_url ?? t.complex_icon_static_url,
        p = h?.simple_icon_url ?? t.simple_icon_url,
        S = _ ?? v ?? p,
        E = (0, V.V)(h?.rarity ?? t.rarity),
        T = (0, F.Om)(t.badge_id),
        I = t.badge_id === j.$.PREMIUM_TENURE,
        k = I ? (h?.name ?? h?.key) : h?.name,
        U = I ? A.intl.string(A.t.Ipxkog) : t.name,
        D = null != k ? `${U} ${k}` : U,
        R = (t.tiers ?? []).length > 0,
        G = t.owned && R && null == t.next_tier,
        L = !s && !d && t.owned && null != t.obtained_at && R,
        z = "";
    L
        ? (z = A.intl.formatToPlainString(A.t.NY21Ii, {
              date: new Date(t.obtained_at).toLocaleDateString(A.intl.currentLocale, {
                  month: "numeric",
                  day: "numeric",
                  year: "2-digit",
              }),
          }))
        : !d && G
          ? (z = A.intl.string(A.t.jY5xAL))
          : d || null == t.description
            ? d || t.is_earnable
                ? !d && t.owned && (z = A.intl.string(A.t.W87dHj))
                : (z = t.owned ? A.intl.string(A.t["m++6Ll"]) : A.intl.string(A.t.VaSz3l))
            : (z = t.description);
    let H = i.useCallback(() => {
        null != T && r(T.ctaAction);
    }, [T, r]);
    return (0, l.jsxs)("div", {
        id: F.hJ,
        role: "tabpanel",
        "aria-labelledby": P(t.badge_id),
        className: M.SV,
        children: [
            (0, l.jsx)("div", { className: M.b, children: (0, l.jsx)(N.J, { onClick: n, size: "sm" }) }),
            null != S && (0, l.jsx)("img", { className: M.y2, src: S, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: M.OU,
                children: [
                    (0, l.jsxs)("div", {
                        className: M.cQ,
                        children: [
                            (0, l.jsx)(w.D, {
                                variant: "display-sm",
                                color: "text-strong",
                                className: b()(M._r, I && M.tN),
                                children: D,
                            }),
                            (0, l.jsx)(q, {
                                badge: t,
                                isOwnProfile: s,
                                isViewingOtherUser: d,
                                targetUsername: c,
                                viewedAvatarSrc: x,
                                targetOwnsBadge: u,
                                viewerOwnsBadge: g,
                                onToggleViewedUser: m,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: M.oA,
                        children: [
                            null != E &&
                                (0, l.jsxs)("div", {
                                    className: M.sn,
                                    children: [
                                        (0, l.jsx)(y.E, { ...E }),
                                        (0, l.jsx)(f.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            children: A.intl.string(A.t["phYZe+"]),
                                        }),
                                    ],
                                }),
                            ("" !== z || null != T) &&
                                (0, l.jsxs)("div", {
                                    className: M.d9,
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: M.E4,
                                            children: [
                                                "" !== z &&
                                                    (0, l.jsx)(f.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        className: M.ij,
                                                        children: z,
                                                    }),
                                                null != T &&
                                                    (0, l.jsx)(C.$, {
                                                        variant: T.ctaVariant,
                                                        size: "sm",
                                                        onClick: H,
                                                        text: T.ctaLabel(),
                                                    }),
                                            ],
                                        }),
                                        I &&
                                            (0, l.jsxs)("div", {
                                                className: M.cJ,
                                                children: [
                                                    (0, l.jsx)("div", { className: M.y9 }),
                                                    (0, l.jsx)($, { badge: t, currentTier: h }),
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
function J(e) {
    let { transitionState: t, onClose: n, initialBadgeId: o, targetUserId: u, targetUsername: g } = e,
        m = (0, a.bG)([d.default], () => d.default.getCurrentUser()?.id),
        h = null == u || u === m,
        [b, j] = i.useState(!h && null != u),
        _ = b ? u : m,
        [f, v] = i.useState(o ?? null),
        p = (0, a.bG)([x], () => (null != _ ? x.getBadges(_) : []), [_]);
    i.useEffect(() => {
        null == _ || x.hasCatalogFor(_) || (0, c.R)(_), h || null == m || x.hasCatalogFor(m) || (0, c.R)(m);
    }, [_, h, m]);
    let N = i.useCallback(() => {
            null != m && null != u && j((e) => !e);
        }, [m, u]),
        w = i.useCallback(() => {
            null != m && null != u && (j(!1), v(null));
        }, [m, u]),
        y = i.useMemo(() => {
            let { earnable: e, owned: t } = L(p);
            return b ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [p, b]),
        C = null != f && null != _ ? x.getBadgeById(f, _) : void 0,
        B = null != y && null != _ ? x.getBadgeById(y, _) : void 0,
        S = C ?? B,
        E = 0 === p.length,
        T = (0, a.bG)([x], () => null != u && null != S && (x.getBadgeById(S.badge_id, u)?.owned ?? !1), [S, u]),
        I = (0, a.bG)([x], () => null != m && null != S && (x.getBadgeById(S.badge_id, m)?.owned ?? !1), [S, m]),
        k = i.useCallback(() => {
            n();
        }, [n]),
        U = i.useCallback(
            (e) => {
                n();
            },
            [n],
        );
    return (0, l.jsx)(r.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": A.intl.string(A.t.PEjP4L),
        transitionState: t,
        size: r.rI.DYNAMIC,
        hideShadow: !0,
        className: M.CR,
        children: (0, l.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: M.jE,
            children: E
                ? (0, l.jsx)("div", { className: M.Lq, children: (0, l.jsx)(s.y, {}) })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(z, {
                              selectedBadgeId: S?.badge_id ?? null,
                              onSelectBadge: v,
                              displayedUserId: _,
                              isViewingOtherUser: b,
                              targetUsername: g,
                              onViewOwnCatalog: w,
                          }),
                          null != S &&
                              (0, l.jsx)(Y, {
                                  badge: S,
                                  onClose: k,
                                  onCtaClick: U,
                                  isOwnProfile: h,
                                  isViewingOtherUser: b,
                                  targetUsername: g,
                                  displayedUserId: _,
                                  targetOwnsBadge: T,
                                  viewerOwnsBadge: I,
                                  onToggleViewedUser: N,
                              }),
                      ],
                  }),
        }),
    });
}
