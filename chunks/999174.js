n.d(t, { default: () => ek });
var i = n(477900),
    l = n(582128),
    a = n(731738),
    s = n(17928),
    r = n(935462),
    d = n(815021),
    c = n(289873),
    o = n(297264),
    u = n(834730),
    g = n(821609),
    m = n(807393),
    x = n(287809),
    h = n(682618),
    _ = n(992526),
    b = n(982240);
n(321073);
var v = n(503698),
    j = n.n(v),
    y = n(70283),
    N = n(508770),
    p = n(866665),
    f = n(885574),
    w = n(97808),
    I = n(123292),
    E = n(683071),
    A = n(707554),
    S = n(364522),
    B = n(404778),
    C = n(982168),
    T = n(775602),
    U = n(640708),
    O = n(780964),
    k = n(766075),
    R = n(153488),
    D = n(240248),
    z = n(609782),
    F = n(837381),
    V = n(887129),
    P = n(741918),
    G = n(939249),
    $ = n(228366);
let M = { seenBadgeIndicatorIds: new Set() };
class L extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        M = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(M.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return M.seenBadgeIndicatorIds;
    }
}
let Z = new L($.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: t } = e;
        if (M.seenBadgeIndicatorIds.has(t)) return !1;
        M = { ...M, seenBadgeIndicatorIds: new Set([...M.seenBadgeIndicatorIds, t]) };
    },
});
var H = n(92111),
    J = n(486020);
function Y(e, t, n) {
    let i = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != i && t) return (0, J.ku)({ id: i.id, avatar: i.avatar, discriminator: i.discriminator }, !1, n);
}
var q = n(778712),
    K = n(375708),
    Q = n(396);
function W(e) {
    return `badge-tab-${e}`;
}
function X(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function ee(e) {
    let { badge: t, isSelected: n, onSelect: a, itemId: s, showBadgeIndicator: r } = e,
        d = (0, F.rm)(s),
        c = t.owned ? t.current_tier : t.next_tier,
        o =
            null != c
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === c;
                  })
                : void 0,
        u = t.badge_id === y.$.PREMIUM_TENURE ? (o?.name ?? o?.key) : o?.name,
        g = null != u ? `${t.name}, ${u}` : t.name,
        m = r ? `${g}, ${K.intl.string(K.t.y2b7CA)}` : g,
        x = l.useRef(null);
    return (0, i.jsxs)(G.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: W(t.badge_id),
        "aria-label": m,
        "aria-selected": n,
        "aria-controls": n ? H.hJ : void 0,
        className: j()(Q.oL, n && Q.xO),
        onFocus: d.onFocus,
        onClick: () => {
            x.current?.focus(), a();
        },
        children: [
            r && (0, i.jsx)("span", { "aria-hidden": !0, className: Q.Dn }),
            null != t.simple_icon_url &&
                (0, i.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: Q.pW }),
        ],
    });
}
function et(e) {
    let { label: t, navId: n, badges: l, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, V.Ay)({
            id: n,
            isEnabled: !0,
            orientation: P.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsxs)("div", {
        className: Q.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, i.jsx)(F.hD, {
                navigator: d,
                children: (0, i.jsx)(F.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: Q.yq,
                            children: l.map((e, t) => {
                                let n = r.has(e.badge_id);
                                return (0, i.jsx)(
                                    ee,
                                    {
                                        itemId: `item-${t}`,
                                        badge: e,
                                        isSelected: e.badge_id === a,
                                        onSelect: () => s(e.badge_id),
                                        showBadgeIndicator: n,
                                    },
                                    e.badge_id,
                                );
                            }),
                        }),
                }),
            }),
        ],
    });
}
function en(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function ei(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
            showBadgeIndicators: m,
        } = e,
        x = (0, s.yK)([b.Ay], () => (null != a ? b.Ay.getBadges(a) : []), [a]),
        { earnable: h, owned: _ } = l.useMemo(() => en(x), [x]),
        { badgeIndicatorIds: v } = (function (e) {
            let { badges: t, enabled: n } = e,
                i = (0, s.bG)([Z], () => Z.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: l.useMemo(
                    () =>
                        n
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return (0, H.Ce)(t) && !i.has(t);
                                      })
                                      .map((e) => {
                                          let { badge_id: t } = e;
                                          return t;
                                      }),
                              )
                            : new Set(),
                    [t, n, i],
                ),
            };
        })({ badges: l.useMemo(() => [..._, ...h], [_, h]), enabled: m }),
        j = Y(a, r, 48),
        y = null != d ? X(d) : null,
        N = null != d && y !== d,
        p =
            null != y && N && null != j
                ? (0, i.jsxs)("span", {
                      className: Q._p,
                      children: [(0, i.jsx)(w.eu, { src: j, size: q._3.SIZE_24, "aria-hidden": !0 }), y],
                  })
                : y,
        f = r && null != p ? K.intl.format(K.t.EIcwoe, { username: p }) : K.intl.string(K.t.UqnlQF),
        I = r && null != d ? K.intl.string(K.t["75s2Rq"]) : K.intl.string(K.t["62xU4E"]),
        E = r && null != d ? K.intl.formatToPlainString(K.t.BCjSZy, { username: d }) : K.intl.string(K.t.UqnlQF);
    return (0, i.jsx)("div", {
        className: Q.ws,
        children: (0, i.jsxs)(A.F, {
            component: (0, i.jsxs)("div", {
                className: Q.NG,
                children: [
                    (0, i.jsxs)("div", {
                        className: Q.kc,
                        children: [
                            !N && null != j && (0, i.jsx)(w.eu, { src: j, size: q._3.SIZE_24, "aria-hidden": !0 }),
                            (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: f }),
                        ],
                    }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: I }),
                ],
            }),
            children: [
                (0, i.jsxs)(S.Ip, {
                    className: Q.hG,
                    children: [
                        _.length > 0 &&
                            (0, i.jsx)(et, {
                                label: { type: "aria", text: E },
                                navId: "badge-directory-owned",
                                badges: _,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: v,
                            }),
                        !r &&
                            h.length > 0 &&
                            (0, i.jsx)(et, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: K.intl.string(K.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: v,
                            }),
                    ],
                }),
                r &&
                    (0, i.jsx)("div", {
                        className: Q.HO,
                        children: (0, i.jsx)(g.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: K.intl.string(K.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var el = n(911608),
    ea = n(847374),
    es = n(770178),
    er = n(194261),
    ed = n(140735),
    ec = n(519736);
function eo(e) {
    let {
            badge: t,
            isViewingOtherUser: n,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = l.useId(),
        c = n && null != a,
        o = t.badge_id === y.$.PREMIUM_TENURE ? K.intl.string(s ? K.t["5WS9pL"] : K.t.crwYbF) : null,
        g = c ? K.intl.formatToPlainString(K.t.KyTwIh, { username: a }) : o,
        m = null != g && "" !== g;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m &&
                !r &&
                (0, i.jsxs)("div", {
                    className: ec.u4,
                    children: [
                        s &&
                            !c &&
                            (0, i.jsx)(er.X, {
                                size: "xxs",
                                color: "currentColor",
                                className: ec.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, i.jsx)(u.E, { id: d, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: ec.SV,
                role: "list",
                "aria-labelledby": m && !r ? d : void 0,
                children: t.tiers.map((e) => {
                    let l = e.owned,
                        a = !l && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (function (e) {
                            let { tier: t, isUnlocked: n, isViewingOtherUser: i, isViewerOnUpgradeableNitro: l } = e;
                            return n || !l || i ? (t.milestone_text ?? "") : K.intl.string(K.t.VPu695);
                        })({ tier: e, isUnlocked: l, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: j()(ec.zh, a && ec.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", { className: ec.Hw, src: r, alt: "", "aria-hidden": !0 }),
                                (0, i.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: l ? "text-default" : "text-muted",
                                    className: ec.hI,
                                    children: [
                                        null != d &&
                                            (0, i.jsxs)("span", {
                                                className: ec.nU,
                                                children: [
                                                    !l &&
                                                        (0, i.jsx)(er.X, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: ec.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== c && (0, i.jsx)("span", { className: ec.nU, children: c }),
                                    ],
                                }),
                                (0, i.jsx)(ed.A, { children: K.intl.string(l ? K.t.sTFApF : K.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eu = n(619004);
function eg(e) {
    let { badge: t, viewerBadge: n, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r } = e,
        [d, c] = l.useState(!1),
        [o, g] = l.useState(t.badge_id),
        m = l.useId(),
        x = l.useId(),
        h = l.useRef(null),
        _ = l.useRef(null);
    t.badge_id !== o && (g(t.badge_id), c(!1));
    let b = l.useCallback(() => {
            let e = h.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        v = l.useCallback(
            (e) => {
                null != e.target && d && b();
            },
            [d, b],
        );
    (0, es.g)(_, v, [d], { enabled: d });
    let y = n ?? t,
        N = a ? void 0 : y.next_tier,
        p = a ? void 0 : y.current_tier,
        f = null != N ? y.tiers.find((e) => e.key === N) : void 0,
        w = null != p ? y.tiers.find((e) => e.key === p) : void 0,
        I = a ? void 0 : y.progress?.[0],
        E = I?.threshold ?? f?.requirements[0]?.threshold ?? null,
        A = !a && y.owned && null != f,
        S = a || (0, D.uJ)(y.leveling_instructions) || A ? void 0 : y.leveling_instructions,
        C = f?.name != null ? K.intl.formatToPlainString(K.t["Jn+COZ"], { tier_name: f.name }) : void 0,
        T = d ? K.intl.string(K.t["065Hig"]) : K.intl.string(K.t.MylOvg),
        U = a ? t : y,
        O = w?.complex_icon_static_url ?? w?.simple_icon_url,
        k = f?.complex_icon_static_url ?? f?.simple_icon_url,
        R = !(0, D.uJ)(I?.progress_helper_text),
        z = null != C ? { "aria-labelledby": x } : { "aria-label": K.intl.string(K.t.Uwhb1l) };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != S && (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: S }),
            A &&
                (0, i.jsxs)("div", {
                    className: eu.ES,
                    children: [
                        null != O && (0, i.jsx)("img", { className: eu.Tw, src: O, alt: "", "aria-hidden": !0 }),
                        (0, i.jsxs)("div", {
                            className: eu.Bd,
                            children: [
                                null != C && (0, i.jsx)(u.E, { id: x, variant: "text-sm/medium", children: C }),
                                null != E
                                    ? (0, i.jsx)(el.z, {
                                          value: I?.current ?? 0,
                                          minValue: I?.floor ?? 0,
                                          maxValue: E,
                                          size: "md",
                                          className: eu.hr,
                                          ...z,
                                      })
                                    : null != I &&
                                      (0, i.jsx)(el.z, { isIndeterminate: !0, size: "md", className: eu.hr, ...z }),
                                R &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: I?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != k && (0, i.jsx)("img", { className: eu.Tw, src: k, alt: "", "aria-hidden": !0 }),
                    ],
                }),
            A
                ? (0, i.jsxs)("div", {
                      className: eu.JC,
                      children: [
                          (0, i.jsx)("div", {
                              ref: _,
                              className: j()(eu.ne, d && eu.GB),
                              id: m,
                              children: (0, i.jsx)("div", {
                                  className: eu.zL,
                                  inert: !d,
                                  children: (0, i.jsxs)("div", {
                                      className: eu.GA,
                                      children: [
                                          (0, i.jsx)(B.c, { className: eu.yF }),
                                          (0, i.jsx)(eo, {
                                              badge: U,
                                              isViewingOtherUser: a,
                                              targetUsername: s,
                                              isViewerOnUpgradeableNitro: r,
                                              hideLabel: !0,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, i.jsxs)(G.D, {
                              innerRef: h,
                              className: eu.tw,
                              "aria-expanded": d,
                              "aria-controls": m,
                              onClick: () => c(!d),
                              children: [
                                  (0, i.jsx)(u.E, {
                                      className: eu.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: T,
                                  }),
                                  (0, i.jsx)(ea.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: j()(eu.ai, d && eu.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(eo, { badge: U, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r }),
        ],
    });
}
var em = n(536001),
    ex = n(260981),
    eh = n(540418),
    e_ = n(907085),
    eb = n(179820),
    ev = n(174459),
    ej = n(652215);
function ey(e) {
    let { actionName: t, badge: n, displayedUserId: i, isSociallyNavigated: l } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != n && null != a ? b.Ay.getBadgeById(n.badge_id, a) : void 0,
        r = null != n && null != a ? b.Ay.getRemainingToNextTier(n.badge_id, a) : void 0,
        d = null != i ? b.Ay.getBadges(i).filter((e) => e.owned).length : void 0;
    ev.default.track(ej.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: n?.badge_id,
        badge_tier: null != n ? ((n.owned ? n.current_tier : n.next_tier) ?? n.tiers?.[0]?.key) : void 0,
        badge_owner_id: i,
        is_owned: s?.owned ?? !1,
        progress_to_next_tier: r,
        is_earnable: n?.is_earnable ?? !1,
        is_socially_navigated: l,
        total_badges_owned: d,
    });
}
var eN = n(202541);
let ep = [K.t["6zFA/T"], K.t.wzZHKl, K.t["+ED/nf"]];
function ef() {
    let e = Math.floor(Math.random() * ep.length);
    return K.intl.string(ep[e]);
}
function ew(e) {
    let { earnedDateText: t, label: n } = e;
    return (0, i.jsxs)("div", {
        className: j()(Q.AX, Q.aS),
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: Q.NM, children: t }),
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: Q.MZ, children: n }),
        ],
    });
}
function eI(e) {
    let { rarityBadgeProps: t } = e;
    return (0, i.jsxs)("div", {
        className: j()(Q.AX, Q.sn),
        children: [
            (0, i.jsx)(N.E, { ...t }),
            (0, i.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: K.intl.string(K.t["phYZe+"]),
            }),
        ],
    });
}
function eE() {
    return (0, i.jsx)(p.m, {
        text: K.intl.string(K.t.goKu4e),
        children: (0, i.jsxs)("span", {
            className: Q.Gb,
            children: [
                (0, i.jsx)(f.m, { size: "xxs", color: "currentColor", className: Q.LS, "aria-hidden": !0 }),
                (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: K.intl.string(K.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eA(e) {
    let t,
        n,
        {
            badge: i,
            isOwnProfile: l,
            isViewingOtherUser: a,
            targetUsername: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        } = e;
    if (
        ((t = l
            ? i.owned
                ? c
                : K.intl.string(K.t.uHtDcT)
            : a && null != s
              ? K.intl.formatToPlainString(K.t.Eo5Cnp, { username: X(s) })
              : i.owned
                ? c
                : K.intl.string(K.t.uHtDcT)),
        !l)
    ) {
        let e = !a && r && null != s;
        a && d
            ? (n = K.intl.string(K.t.yxEAGH))
            : e && (n = K.intl.formatToPlainString(K.t["9GNsge"], { username: X(s) }));
    }
    return { statusText: t, toggleText: n };
}
function eS() {
    return (0, i.jsx)(U.A, { height: 3, width: 3, "aria-hidden": "true", className: Q.zN });
}
function eB(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: Q.U3,
              children: t.map((e, t) => {
                  let { key: n, node: l } = e;
                  return (0, i.jsxs)("span", { className: Q.Hq, children: [t > 0 && (0, i.jsx)(eS, {}), l] }, n);
              }),
          });
}
function eC(e) {
    let {
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: l,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        g = (0, D.uJ)(t.info_label) ? void 0 : t.info_label,
        m = (0, H.HW)(t.badge_id),
        { statusText: x, toggleText: h } = eA({
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: l,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    m && _.push({ key: "beta", node: (0, i.jsx)(eE, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, i.jsxs)("span", {
                    className: Q.pC,
                    children: [
                        !n && null != s && (0, i.jsx)(w.eu, { src: s, size: q._3.SIZE_16, "aria-hidden": !0 }),
                        (0, i.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: Q.$L,
                            children: x,
                        }),
                    ],
                }),
            }),
        null != g &&
            _.push({
                key: "info",
                node: (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: Q.$L,
                    children: g,
                }),
            });
    let b = _.length >= 3 && null != h,
        v =
            null != h
                ? {
                      key: "toggle",
                      node: (0, i.jsx)(I.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "text-xs/medium",
                          onClick: o,
                          text: h,
                      }),
                  }
                : void 0,
        j = b || null == v ? _ : [..._, v];
    return 0 === j.length && null == v
        ? null
        : (0, i.jsxs)("div", {
              className: Q.rI,
              children: [(0, i.jsx)(eB, { segments: j }), b && null != v && (0, i.jsx)(eB, { segments: [v] })],
          });
}
function eT(e) {
    let {
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: l,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        { statusText: g, toggleText: m } = eA({
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: l,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        x = null != g;
    return n
        ? x
            ? (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: g })
            : null
        : x || null != m
          ? (0, i.jsxs)("div", {
                className: Q.bn,
                children: [
                    x &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != s && (0, i.jsx)(w.eu, { src: s, size: q._3.SIZE_16, "aria-hidden": !0 }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: Q.CT,
                                    children: g,
                                }),
                                null != m &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        className: Q.CT,
                                        "aria-hidden": !0,
                                        children: "\xb7",
                                    }),
                            ],
                        }),
                    null != m &&
                        (0, i.jsx)(I.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: o,
                            text: m,
                        }),
                ],
            })
          : null;
}
function eU(e) {
    let t,
        n,
        a,
        r,
        c,
        m,
        h,
        {
            badge: _,
            viewerBadge: v,
            onClose: N,
            isOwnProfile: p,
            isViewingOtherUser: f,
            targetUsername: w,
            displayedUserId: I,
            targetOwnsBadge: U,
            viewerOwnsBadge: F,
            isMilestone2Enabled: V,
            onToggleViewedUser: P,
            onViewOwnCatalog: G,
        } = e,
        $ = Y(I, f, 32),
        M = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(_),
        L = (0, s.bG)([T.Ay], () => T.Ay.useReducedMotion)
            ? void 0
            : (M?.complex_icon_animated_url ?? _.complex_icon_animated_url),
        Z = M?.complex_icon_static_url ?? _.complex_icon_static_url,
        J = M?.simple_icon_url ?? _.simple_icon_url,
        q = L ?? Z ?? J,
        X =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case em.x.COMMON:
                        return { type: { text: K.intl.string(K.t.L0K5ci) }, variant: "rarity-common", icon: ex.p };
                    case em.x.RARE:
                        return { type: { text: K.intl.string(K.t["sTx/5z"]) }, variant: "rarity-rare", icon: eh.A };
                    case em.x.EPIC:
                        return { type: { text: K.intl.string(K.t.RD8RiN) }, variant: "rarity-epic", icon: e_.b };
                    case em.x.MYTHIC:
                        return { type: { text: K.intl.string(K.t.vqc1ol) }, variant: "rarity-mythic", icon: eb.O };
                    default:
                        return null;
                }
            })(M?.rarity ?? _.rarity) ?? void 0,
        ee = (0, H.Om)(_.badge_id),
        et = _.badge_id === y.$.PREMIUM_TENURE,
        en = et ? (M?.name ?? M?.key) : M?.name,
        ei = et ? K.intl.string(K.t.Ipxkog) : _.name;
    et ? (r = null != en ? `${ei} ${en}` : ei) : null != en ? ((a = ei), (r = en)) : (r = ei);
    let el = (0, z.ie)(_.badge_id) && !_.is_earnable && _.badge_id !== y.$.STAFF,
        ea = (_.tiers?.length ?? 0) > 0,
        es = (0, b.H5)(_),
        er = (function (e) {
            let [t, n] = l.useState(ef),
                [i, a] = l.useState(e);
            return e !== i && (a(e), n(ef())), t;
        })(_.badge_id);
    c = _.owned
        ? _.badge_id === y.$.APRIL_FOOLS_2026
            ? K.intl.string(K.t["5LcHT0"])
            : el && null == es
              ? er
              : (function (e) {
                    if (null == e) return;
                    let t = new Date(e);
                    if (!Number.isNaN(t.getTime()))
                        return t.toLocaleDateString(K.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(es)
        : ea
          ? "--"
          : void 0;
    let ed = ((n = null == (t = _.tiers?.[0]?.key) || M?.key === t), K.intl.string(n ? K.t.WDhIz2 : K.t.wYaDmz)),
        ec = V && null != c && _.badge_id !== y.$.STAFF,
        eu = null != X,
        ev = null;
    V && (ec || eu)
        ? (ev = (0, i.jsxs)("div", {
              className: j()(Q.$S, (!ec || !eu) && Q.jQ),
              children: [
                  ec && null != c && (0, i.jsx)(ew, { earnedDateText: c, label: ed }),
                  eu && (0, i.jsx)(eI, { rarityBadgeProps: X }),
              ],
          }))
        : eu && (ev = (0, i.jsx)(eI, { rarityBadgeProps: X })),
        ec ||
            (m =
                V || null == es
                    ? K.intl.string(K.t.sTFApF)
                    : K.intl.formatToPlainString(K.t["0aEh2a"], { date: new Date(es) }));
    let ep = v?.owned === !0 && (v.tiers?.length ?? 0) > 0 && null == v.next_tier,
        eE = x.default.getCurrentUser()?.premiumType,
        eA = et && (eE === eN.PremiumTypes.TIER_0 || eE === eN.PremiumTypes.TIER_1);
    h = ep ? K.intl.string(K.t.jY5xAL) : eA ? K.intl.string(K.t.qkwSSp) : (v?.description ?? _.description);
    let eS = l.useCallback(() => {
            null != ee &&
                (ey({
                    actionName: "primary_badge_action_clicked",
                    badge: _,
                    displayedUserId: I,
                    isSociallyNavigated: f,
                }),
                N(),
                C.A.popAll(),
                ee.ctaAction());
        }, [_, I, f, ee, N]),
        eB =
            !f || _.is_earnable || F || _.badge_id === y.$.STAFF
                ? null
                : (0, i.jsx)(E.w, { type: "info", children: K.intl.format(K.t.vFekBs, { onViewBadges: G }) }),
        eU = (0, s.bG)([R.A], () => R.A.hasConsented(ej.YAq.PERSONALIZATION)),
        eO = V && (0, H.Jn)(_.badge_id) && !f && !eU;
    return (0, i.jsx)(A.F, {
        forceLevel: 2,
        children: (0, i.jsx)("div", {
            id: H.hJ,
            role: "tabpanel",
            "aria-labelledby": W(_.badge_id),
            className: Q.SV,
            children: (0, i.jsxs)(S.d_, {
                className: Q.C9,
                children: [
                    (0, i.jsx)("div", { className: Q.Gw, children: (0, i.jsx)(d.J, { onClick: N, size: "sm" }) }),
                    null != q &&
                        (0, i.jsx)("img", {
                            className: j()(Q.y2, null != L && q === L && Q.hu),
                            src: q,
                            alt: "",
                            "aria-hidden": !0,
                        }),
                    (0, i.jsxs)("div", {
                        className: Q.OU,
                        children: [
                            (0, i.jsxs)("div", {
                                className: Q.cQ,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: Q.nj,
                                        children: [
                                            (0, i.jsxs)(o.D, {
                                                variant: "display-sm",
                                                color: "text-strong",
                                                className: j()(Q._r, et && Q.tN),
                                                children: [
                                                    null != a &&
                                                        (0, i.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "text-sm/medium",
                                                            color: "text-subtle",
                                                            className: Q.$g,
                                                            children: a,
                                                        }),
                                                    r,
                                                ],
                                            }),
                                            V &&
                                                (0, i.jsx)(eC, {
                                                    badge: _,
                                                    isOwnProfile: p,
                                                    isViewingOtherUser: f,
                                                    targetUsername: w,
                                                    viewedAvatarSrc: $,
                                                    targetOwnsBadge: U,
                                                    viewerOwnsBadge: F,
                                                    unlockedStatusText: m,
                                                    onToggleViewedUser: P,
                                                }),
                                        ],
                                    }),
                                    !V &&
                                        (0, i.jsx)(eT, {
                                            badge: _,
                                            isOwnProfile: p,
                                            isViewingOtherUser: f,
                                            targetUsername: w,
                                            viewedAvatarSrc: $,
                                            targetOwnsBadge: U,
                                            viewerOwnsBadge: F,
                                            unlockedStatusText: m,
                                            onToggleViewedUser: P,
                                        }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: Q.oA,
                                children: [
                                    eO &&
                                        (0, i.jsx)(E.w, {
                                            type: "info",
                                            children: K.intl.format(K.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, k.openUserSettings)(O.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    ev,
                                    !(0, D.uJ)(h) &&
                                        (0, i.jsxs)("div", {
                                            className: Q.d9,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: Q.E4,
                                                    children: [
                                                        (0, i.jsxs)("div", {
                                                            className: Q.jv,
                                                            children: [
                                                                el &&
                                                                    (0, i.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: Q.c$,
                                                                        children: K.intl.string(K.t["/Gmn3f"]),
                                                                    }),
                                                                (0, i.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: Q.ij,
                                                                    children: h,
                                                                }),
                                                            ],
                                                        }),
                                                        null != ee &&
                                                            (0, i.jsx)(g.$, {
                                                                variant: eA
                                                                    ? "expressive"
                                                                    : F
                                                                      ? "secondary"
                                                                      : et
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: eS,
                                                                text: ee.ctaLabel({
                                                                    owned: F,
                                                                    isViewerOnUpgradeableNitro: eA,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                (_.tiers?.length ?? 0) > 0 &&
                                                    (0, i.jsxs)("div", {
                                                        className: Q.cJ,
                                                        children: [
                                                            (0, i.jsx)(B.c, {}),
                                                            V
                                                                ? (0, i.jsx)(eg, {
                                                                      badge: _,
                                                                      viewerBadge: v,
                                                                      isViewingOtherUser: f,
                                                                      targetUsername: w,
                                                                      isViewerOnUpgradeableNitro: eA,
                                                                  })
                                                                : (0, i.jsx)(eo, {
                                                                      badge: f ? _ : (v ?? _),
                                                                      isViewingOtherUser: f,
                                                                      targetUsername: w,
                                                                      isViewerOnUpgradeableNitro: eA,
                                                                  }),
                                                        ],
                                                    }),
                                                null != eB && (0, i.jsx)("div", { className: Q.Z6, children: eB }),
                                            ],
                                        }),
                                    (0, D.uJ)(h) && eB,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eO = n(470739);
function ek(e) {
    let {
            transitionState: t,
            onClose: n,
            initialBadgeId: v,
            targetUserId: j,
            targetUsername: y,
            viewingCurrentUserBadges: N,
        } = e,
        p = (0, s.bG)([x.default], () => x.default.getCurrentUser()?.id),
        f = (0, _.VV)({ location: "BadgeDirectoryModal" }),
        w = null == j || j === p,
        I = !w && null != j && !0 !== N,
        E = I ? j : p,
        A = null != E ? `viewed_user:${I ? "other" : "self"}` : void 0,
        [S, B] = l.useState(v ?? null),
        C = (0, s.yK)([b.Ay], () => (null != E ? b.Ay.getBadges(E) : []), [E]),
        T = (0, s.bG)([b.Ay], () => null != E && b.Ay.hasCatalogFor(E), [E]),
        U = (0, s.bG)([b.Ay], () => b.Ay.hasCatalogFetchErrorFor(E), [E]);
    l.useEffect(() => {
        null != E && (b.Ay.hasCatalogFor(E) ? b.Ay.isCatalogStaleFor(E) && (0, h.RS)(E) : (0, h.RS)(E));
        let e = I ? p : j;
        w || null == e || b.Ay.hasCatalogFor(e) || (0, h.RS)(e);
    }, [E, w, I, p, j]),
        l.useEffect(() => {
            null != A && m.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [A] });
        }, [A]);
    let O = l.useMemo(() => {
            let { earnable: e, owned: t } = en(C);
            return I ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [C, I]),
        k = null != S && null != E ? b.Ay.getBadgeById(S, E) : void 0,
        R = null != O && null != E ? b.Ay.getBadgeById(O, E) : void 0,
        D = k ?? R,
        z = !T && !U,
        F = !T && U,
        V = f && !I;
    l.useEffect(() => {
        F && null != A && m.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [A] });
    }, [F, A]);
    let P = (0, s.bG)([b.Ay], () => null != j && null != D && (b.Ay.getBadgeById(D.badge_id, j)?.owned ?? !1), [D, j]),
        G = (0, s.bG)([b.Ay], () => (null != p && null != D ? b.Ay.getBadgeById(D.badge_id, p) : void 0), [D, p]),
        $ = G?.owned ?? !1,
        M = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eO._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    n();
                });
            },
            [n],
        ),
        L = l.useCallback(() => {
            null != j &&
                null != D &&
                (I
                    ? M({
                          initialBadgeId: D.badge_id,
                          targetUserId: j,
                          targetUsername: y,
                          viewingCurrentUserBadges: !0,
                      })
                    : M({ initialBadgeId: D.badge_id, targetUserId: j, targetUsername: y }));
        }, [I, D, M, j, y]),
        Z = l.useCallback(() => {
            null != p &&
                null != j &&
                (ey({ actionName: "view_your_badges_pressed", badge: D, displayedUserId: E, isSociallyNavigated: I }),
                M({ targetUserId: j, targetUsername: y, viewingCurrentUserBadges: !0 }));
        }, [p, E, I, D, M, j, y]),
        J = l.useCallback(() => {
            null != E && (0, h.RS)(E, { isRetry: !0 });
        }, [E]),
        Y = l.useCallback(() => {
            ey({ actionName: "badge_directory_closed", badge: D, displayedUserId: E, isSociallyNavigated: I }), n();
        }, [E, I, n, D]),
        q = D?.badge_id;
    return (
        l.useEffect(() => {
            null != q && V && (0, H.Ce)(q) && (0, h.PV)(q);
        }, [q, V]),
        l.useEffect(() => {
            null != D &&
                ey({ actionName: "badge_detail_viewed", badge: D, displayedUserId: E, isSociallyNavigated: I });
        }, [q, E, I]),
        (0, i.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": K.intl.string(K.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: Q.CR,
            children: (0, i.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: Q.jE,
                children: [
                    (z || F || null == D) &&
                        (0, i.jsx)("div", { className: Q.b, children: (0, i.jsx)(d.J, { onClick: Y, size: "sm" }) }),
                    z
                        ? (0, i.jsx)("div", { className: Q.Lq, children: (0, i.jsx)(c.y, {}) })
                        : F
                          ? (0, i.jsxs)("div", {
                                className: Q.IU,
                                children: [
                                    (0, i.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: K.intl.string(K.t.iufib1),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: Q.TQ,
                                        children: K.intl.string(K.t.eAn6z2),
                                    }),
                                    (0, i.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: J,
                                        text: K.intl.string(K.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ei, {
                                        selectedBadgeId: D?.badge_id ?? null,
                                        onSelectBadge: B,
                                        displayedUserId: E,
                                        isViewingOtherUser: I,
                                        targetUsername: y,
                                        onViewOwnCatalog: Z,
                                        showBadgeIndicators: V,
                                    }),
                                    null != D &&
                                        (0, i.jsx)(eU, {
                                            badge: D,
                                            viewerBadge: G,
                                            onClose: Y,
                                            isOwnProfile: w,
                                            isViewingOtherUser: I,
                                            targetUsername: y,
                                            displayedUserId: E,
                                            targetOwnsBadge: P,
                                            viewerOwnsBadge: $,
                                            isMilestone2Enabled: f,
                                            onToggleViewedUser: L,
                                            onViewOwnCatalog: Z,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
