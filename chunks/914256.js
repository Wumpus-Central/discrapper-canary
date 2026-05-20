n.d(t, { default: () => Z });
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
    _ = n(70283),
    f = n(140735),
    v = n(834730),
    p = n(97808),
    w = n(939249),
    N = n(815021),
    y = n(534514),
    S = n(508770),
    C = n(821609),
    B = n(775602),
    E = n(425713);
n(321073);
var T = n(837381),
    I = n(741918),
    U = n(707554),
    O = n(260762),
    k = n(486020);
function F(e, t, n) {
    let l = (0, a.bG)([d.default], () => (null != e ? d.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, k.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var D = n(92111),
    A = n(778712),
    M = n(375708),
    P = n(490308);
function R(e) {
    return `badge-tab-${e}`;
}
function G(e) {
    let { badge: t, isSelected: n, onSelect: i, itemId: a } = e,
        r = (0, T.rm)(a);
    return (0, l.jsx)(w.D, {
        ...r,
        role: "tab",
        id: R(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? D.hJ : void 0,
        className: j()(P.oL, n && P.xO),
        onFocus: r.onFocus,
        onClick: i,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: P.pW }),
    });
}
function L(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, O.A)(n, I.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: P.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(y.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(T.hD, {
                navigator: s,
                children: (0, l.jsx)(T.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: P.yq,
                            children: i.map((e, t) =>
                                (0, l.jsx)(
                                    G,
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
function z(e) {
    let t = [],
        n = [];
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: n };
}
function V(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: r,
            isViewingOtherUser: s,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        o = (0, a.bG)([h], () => (null != r ? h.getBadges(r) : []), [r]),
        { earnable: u, owned: g } = i.useMemo(() => z(o), [o]),
        m = F(r, s, 48),
        x = s && null != d ? M.intl.format(M.t.EIcwoe, { username: d }) : M.intl.string(M.t.sl2irJ),
        b = s && null != d ? M.intl.format(M.t["75s2Rq"], { username: d }) : M.intl.string(M.t["62xU4E"]),
        j = s && null != d ? M.intl.formatToPlainString(M.t.BCjSZy, { username: d }) : M.intl.string(M.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: P.ws,
        children: (0, l.jsxs)(U.F, {
            component: (0, l.jsxs)("div", {
                className: P.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: P.kc,
                        children: [
                            null != m && (0, l.jsx)(p.eu, { src: m, size: A._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(y.D, { variant: "heading-lg/semibold", color: "text-strong", children: x }),
                        ],
                    }),
                    (0, l.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", children: b }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: P.hG,
                    children: [
                        g.length > 0 &&
                            (0, l.jsx)(L, {
                                label: { type: "aria", text: j },
                                navId: "badge-directory-owned",
                                badges: g,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                        !s &&
                            u.length > 0 &&
                            (0, l.jsx)(L, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: M.intl.string(M.t["0YzU//"]),
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
                        className: P.HO,
                        children: (0, l.jsx)(C.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: M.intl.string(M.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var H = n(731454),
    $ = n(788868);
function q(e) {
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
                : t.toLocaleDateString(M.intl.currentLocale, { month: "short", year: "numeric" })) ??
            M.intl.string(M.t.sTFApF),
        d = i.useId(),
        c = M.intl.string(M.t.crwYbF);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n.owned
                ? (0, l.jsx)(f.A, { id: d, children: c })
                : (0, l.jsx)(v.E, {
                      id: d,
                      variant: "text-xxs/medium",
                      color: "text-default",
                      className: P.Hm,
                      children: c,
                  }),
            (0, l.jsx)("ul", {
                className: P.by,
                "aria-labelledby": d,
                children: $.sp.map((e) => {
                    let t = $.VD[e],
                        i = t.tenureReqNumMonths,
                        a = n.owned && r >= i;
                    return (0, l.jsxs)(
                        "li",
                        {
                            className: a ? P.Oe : `${P.Oe} ${P.Kv}`,
                            children: [
                                (0, l.jsx)("img", {
                                    className: P.Qm,
                                    src: (0, E.I)(e).standard,
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                                (0, l.jsxs)(v.E, {
                                    variant: "text-xxs/medium",
                                    color: a ? "text-default" : "text-muted",
                                    className: P.Ou,
                                    children: [
                                        M.intl.string(t.nameUnformatted),
                                        (0, l.jsx)("br", {}),
                                        a
                                            ? s
                                            : (function (e) {
                                                  if (e < 12)
                                                      return M.intl.formatToPlainString(M.t.kridzK, { months: e });
                                                  let t = e / 12;
                                                  return t >= 6
                                                      ? M.intl.string(M.t.nPrx97)
                                                      : M.intl.formatToPlainString(M.t.PClsrw, { years: t });
                                              })(i),
                                    ],
                                }),
                                (0, l.jsx)(f.A, { children: M.intl.string(a ? M.t.sTFApF : M.t.uHtDcT) }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function Y(e) {
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
                ? M.intl.string(M.t.sTFApF)
                : M.intl.string(M.t.uHtDcT)
            : a && null != r
              ? M.intl.formatToPlainString(M.t.Eo5Cnp, { username: r })
              : n.owned
                ? null != n.obtained_at
                    ? M.intl.formatToPlainString(M.t["0aEh2a"], { date: new Date(n.obtained_at) })
                    : M.intl.string(M.t.sTFApF)
                : M.intl.string(M.t.uHtDcT)),
        i)
    )
        return (0, l.jsx)(v.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let u = a && c,
        g = !a && d && null != r;
    return (0, l.jsxs)("div", {
        className: P.bn,
        children: [
            null != s && (0, l.jsx)(p.eu, { src: s, size: A._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(v.E, { variant: "text-xs/medium", color: "text-subtle", className: P.CT, children: t }),
            (u || g) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(v.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: P.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(w.D, {
                            className: P.RY,
                            onClick: o,
                            children: (0, l.jsx)(v.E, {
                                variant: "text-xs/medium",
                                color: "text-link",
                                className: P.CT,
                                children: u
                                    ? M.intl.string(M.t.yxEAGH)
                                    : M.intl.formatToPlainString(M.t["9GNsge"], { username: r }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function J(e) {
    let {
            badge: t,
            onClose: n,
            isOwnProfile: r,
            isViewingOtherUser: s,
            targetUsername: d,
            displayedUserId: c,
            targetOwnsBadge: o,
            viewerOwnsBadge: u,
            onToggleViewedUser: g,
        } = e,
        m = F(c, s, 32),
        x = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        h = (0, a.bG)([B.A], () => B.A.useReducedMotion)
            ? void 0
            : (x?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        b = x?.complex_icon_static_url ?? t.complex_icon_static_url,
        f = x?.simple_icon_url ?? t.simple_icon_url,
        p = h ?? b ?? f,
        w = (0, H.V)(x?.rarity ?? t.rarity),
        E = (0, D.Om)(t.badge_id),
        T = t.badge_id === _.$.PREMIUM_TENURE,
        I = T ? (x?.name ?? x?.key) : x?.name,
        U = T ? M.intl.string(M.t.Ipxkog) : t.name,
        O = null != I ? `${U} ${I}` : U,
        k = (t.tiers ?? []).length > 0,
        A = t.owned && k && null == t.next_tier,
        G = !r && !s && t.owned && null != t.obtained_at && k,
        L = "";
    G
        ? (L = M.intl.formatToPlainString(M.t.NY21Ii, {
              date: new Date(t.obtained_at).toLocaleDateString(M.intl.currentLocale, {
                  month: "numeric",
                  day: "numeric",
                  year: "2-digit",
              }),
          }))
        : !s && A
          ? (L = M.intl.string(M.t.jY5xAL))
          : s || null == t.description
            ? s || t.is_earnable
                ? !s && t.owned && (L = M.intl.string(M.t.W87dHj))
                : (L = t.owned ? M.intl.string(M.t["m++6Ll"]) : M.intl.string(M.t.VaSz3l))
            : (L = t.description);
    let z = i.useCallback(() => {
        null != E && (n(), E.ctaAction());
    }, [E, n]);
    return (0, l.jsxs)("div", {
        id: D.hJ,
        role: "tabpanel",
        "aria-labelledby": R(t.badge_id),
        className: P.SV,
        children: [
            (0, l.jsx)("div", { className: P.b, children: (0, l.jsx)(N.J, { onClick: n, size: "sm" }) }),
            null != p && (0, l.jsx)("img", { className: P.y2, src: p, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: P.OU,
                children: [
                    (0, l.jsxs)("div", {
                        className: P.cQ,
                        children: [
                            (0, l.jsx)(y.D, {
                                variant: "display-sm",
                                color: "text-strong",
                                className: j()(P._r, T && P.tN),
                                children: O,
                            }),
                            (0, l.jsx)(Y, {
                                badge: t,
                                isOwnProfile: r,
                                isViewingOtherUser: s,
                                targetUsername: d,
                                viewedAvatarSrc: m,
                                targetOwnsBadge: o,
                                viewerOwnsBadge: u,
                                onToggleViewedUser: g,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: P.oA,
                        children: [
                            null != w &&
                                (0, l.jsxs)("div", {
                                    className: P.sn,
                                    children: [
                                        (0, l.jsx)(S.E, { ...w }),
                                        (0, l.jsx)(v.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            children: M.intl.string(M.t["phYZe+"]),
                                        }),
                                    ],
                                }),
                            ("" !== L || null != E) &&
                                (0, l.jsxs)("div", {
                                    className: P.d9,
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: P.E4,
                                            children: [
                                                "" !== L &&
                                                    (0, l.jsx)(v.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        className: P.ij,
                                                        children: L,
                                                    }),
                                                null != E &&
                                                    (0, l.jsx)(C.$, {
                                                        variant: E.ctaVariant({ owned: u }),
                                                        size: "sm",
                                                        onClick: z,
                                                        text: E.ctaLabel({ owned: u }),
                                                    }),
                                            ],
                                        }),
                                        T &&
                                            (0, l.jsxs)("div", {
                                                className: P.cJ,
                                                children: [
                                                    (0, l.jsx)("div", { className: P.y9 }),
                                                    (0, l.jsx)(q, { badge: t, currentTier: x }),
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
function Z(e) {
    let { transitionState: t, onClose: n, initialBadgeId: o, targetUserId: u, targetUsername: g } = e,
        m = (0, a.bG)([d.default], () => d.default.getCurrentUser()?.id),
        x = null == u || u === m,
        [b, j] = i.useState(!x && null != u),
        _ = b ? u : m,
        [f, v] = i.useState(o ?? null),
        p = (0, a.bG)([h], () => (null != _ ? h.getBadges(_) : []), [_]);
    i.useEffect(() => {
        null == _ || h.hasCatalogFor(_) || (0, c.R)(_), x || null == m || h.hasCatalogFor(m) || (0, c.R)(m);
    }, [_, x, m]);
    let w = i.useCallback(() => {
            null != m && null != u && j((e) => !e);
        }, [m, u]),
        N = i.useCallback(() => {
            null != m && null != u && (j(!1), v(null));
        }, [m, u]),
        y = i.useMemo(() => {
            let { earnable: e, owned: t } = z(p);
            return b ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [p, b]),
        S = null != f && null != _ ? h.getBadgeById(f, _) : void 0,
        C = null != y && null != _ ? h.getBadgeById(y, _) : void 0,
        B = S ?? C,
        E = 0 === p.length,
        T = (0, a.bG)([h], () => null != u && null != B && (h.getBadgeById(B.badge_id, u)?.owned ?? !1), [B, u]),
        I = (0, a.bG)([h], () => null != m && null != B && (h.getBadgeById(B.badge_id, m)?.owned ?? !1), [B, m]),
        U = i.useCallback(() => {
            n();
        }, [n]);
    return (0, l.jsx)(r.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": M.intl.string(M.t.PEjP4L),
        transitionState: t,
        size: r.rI.DYNAMIC,
        hideShadow: !0,
        className: P.CR,
        children: (0, l.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: P.jE,
            children: E
                ? (0, l.jsx)("div", { className: P.Lq, children: (0, l.jsx)(s.y, {}) })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(V, {
                              selectedBadgeId: B?.badge_id ?? null,
                              onSelectBadge: v,
                              displayedUserId: _,
                              isViewingOtherUser: b,
                              targetUsername: g,
                              onViewOwnCatalog: N,
                          }),
                          null != B &&
                              (0, l.jsx)(J, {
                                  badge: B,
                                  onClose: U,
                                  isOwnProfile: x,
                                  isViewingOtherUser: b,
                                  targetUsername: g,
                                  displayedUserId: _,
                                  targetOwnsBadge: T,
                                  viewerOwnsBadge: I,
                                  onToggleViewedUser: w,
                              }),
                      ],
                  }),
        }),
    });
}
