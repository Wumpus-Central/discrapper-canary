n.d(t, { default: () => ek });
var l = n(477900),
    i = n(582128),
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
    b = n(992526),
    _ = n(982240);
n(321073);
var v = n(503698),
    j = n.n(v),
    N = n(70283),
    y = n(508770),
    p = n(866665),
    f = n(885574),
    w = n(97808),
    I = n(123292),
    E = n(683071),
    A = n(707554),
    S = n(364522),
    T = n(404778),
    B = n(982168),
    C = n(775602),
    O = n(640708),
    U = n(780964),
    R = n(766075),
    k = n(153488),
    D = n(240248),
    z = n(609782),
    F = n(837381),
    G = n(887129),
    V = n(741918),
    P = n(939249),
    M = n(228366);
let $ = { seenBadgeIndicatorIds: new Set() };
class L extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        $ = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from($.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return $.seenBadgeIndicatorIds;
    }
}
let Z = new L(M.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: t } = e;
        if ($.seenBadgeIndicatorIds.has(t)) return !1;
        $ = { ...$, seenBadgeIndicatorIds: new Set([...$.seenBadgeIndicatorIds, t]) };
    },
});
var H = n(92111),
    Y = n(486020);
function J(e, t, n) {
    let l = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, Y.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
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
        u = t.badge_id === N.$.PREMIUM_TENURE ? (o?.name ?? o?.key) : o?.name,
        g = null != u ? `${t.name}, ${u}` : t.name,
        m = r ? `${g}, ${K.intl.string(K.t.y2b7CA)}` : g,
        x = i.useRef(null);
    return (0, l.jsxs)(P.D, {
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
            r && (0, l.jsx)("span", { "aria-hidden": !0, className: Q.Dn }),
            null != t.simple_icon_url &&
                (0, l.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: Q.pW,
                }),
        ],
    });
}
function et(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, G.Ay)({
            id: n,
            isEnabled: !0,
            orientation: V.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: Q.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(F.hD, {
                navigator: d,
                children: (0, l.jsx)(F.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: Q.yq,
                            children: i.map((e, t) => {
                                let n = r.has(e.badge_id);
                                return (0, l.jsx)(
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
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: n };
}
function el(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
            showBadgeIndicators: m,
        } = e,
        x = (0, s.yK)([_.Ay], () => (null != a ? _.Ay.getBadges(a) : []), [a]),
        { earnable: h, owned: b } = i.useMemo(() => en(x), [x]),
        { badgeIndicatorIds: v } = (function (e) {
            let { badges: t, enabled: n } = e,
                l = (0, s.bG)([Z], () => Z.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: i.useMemo(
                    () =>
                        n
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return (0, H.Ce)(t) && !l.has(t);
                                      })
                                      .map((e) => {
                                          let { badge_id: t } = e;
                                          return t;
                                      }),
                              )
                            : new Set(),
                    [t, n, l],
                ),
            };
        })({ badges: i.useMemo(() => [...b, ...h], [b, h]), enabled: m }),
        j = J(a, r, 48),
        N = null != d ? X(d) : null,
        y = null != d && N !== d,
        p =
            null != N && y && null != j
                ? (0, l.jsxs)("span", {
                      className: Q._p,
                      children: [(0, l.jsx)(w.eu, { src: j, size: q._3.SIZE_24, "aria-hidden": !0 }), N],
                  })
                : N,
        f = r && null != p ? K.intl.format(K.t.EIcwoe, { username: p }) : K.intl.string(K.t.UqnlQF),
        I = r && null != d ? K.intl.string(K.t["75s2Rq"]) : K.intl.string(K.t["62xU4E"]),
        E = r && null != d ? K.intl.formatToPlainString(K.t.BCjSZy, { username: d }) : K.intl.string(K.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: Q.ws,
        children: (0, l.jsxs)(A.F, {
            component: (0, l.jsxs)("div", {
                className: Q.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: Q.kc,
                        children: [
                            !y && null != j && (0, l.jsx)(w.eu, { src: j, size: q._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: f }),
                        ],
                    }),
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: I }),
                ],
            }),
            children: [
                (0, l.jsxs)(S.Ip, {
                    className: Q.hG,
                    children: [
                        b.length > 0 &&
                            (0, l.jsx)(et, {
                                label: { type: "aria", text: E },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: v,
                            }),
                        !r &&
                            h.length > 0 &&
                            (0, l.jsx)(et, {
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
                    (0, l.jsx)("div", {
                        className: Q.HO,
                        children: (0, l.jsx)(g.$, {
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
var ei = n(911608),
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
        d = i.useId(),
        c = n && null != a,
        o = t.badge_id === N.$.PREMIUM_TENURE ? K.intl.string(s ? K.t["5WS9pL"] : K.t.crwYbF) : null,
        g = c ? K.intl.formatToPlainString(K.t.KyTwIh, { username: a }) : o,
        m = null != g && "" !== g;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            m &&
                !r &&
                (0, l.jsxs)("div", {
                    className: ec.u4,
                    children: [
                        s &&
                            !c &&
                            (0, l.jsx)(er.X, {
                                size: "xxs",
                                color: "currentColor",
                                className: ec.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, l.jsx)(u.E, { id: d, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: ec.SV,
                role: "list",
                "aria-labelledby": m && !r ? d : void 0,
                children: t.tiers.map((e) => {
                    let i = e.owned,
                        a = !i && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (function (e) {
                            let { tier: t, isUnlocked: n, isViewingOtherUser: l, isViewerOnUpgradeableNitro: i } = e;
                            return n || !i || l ? (t.milestone_text ?? "") : K.intl.string(K.t.VPu695);
                        })({ tier: e, isUnlocked: i, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: j()(ec.zh, a && ec.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: ec.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: i ? "text-default" : "text-muted",
                                    className: ec.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsxs)("span", {
                                                className: ec.nU,
                                                children: [
                                                    !i &&
                                                        (0, l.jsx)(er.X, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: ec.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== c && (0, l.jsx)("span", { className: ec.nU, children: c }),
                                    ],
                                }),
                                (0, l.jsx)(ed.A, { children: K.intl.string(i ? K.t.sTFApF : K.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eu = n(652215),
    eg = n(619004);
let em = new Set([N.$.GAME_TIME, N.$.GAME_VARIETY, N.$.STREAMING]);
function ex(e) {
    let { badge: t, viewerBadge: n, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [c, o] = i.useState(!1),
        [g, m] = i.useState(t.badge_id),
        x = i.useId(),
        h = i.useId(),
        b = i.useRef(null),
        _ = i.useRef(null);
    t.badge_id !== g && (m(t.badge_id), o(!1));
    let v = i.useCallback(() => {
            let e = b.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        N = i.useCallback(
            (e) => {
                null != e.target && c && v();
            },
            [c, v],
        );
    (0, es.g)(_, N, [c], { enabled: c });
    let y = n ?? t,
        p = (0, s.bG)([k.A], () => k.A.hasConsented(eu.YAq.PERSONALIZATION)),
        f = !a && em.has(t.badge_id) && !p,
        w = a ? void 0 : y.next_tier,
        I = a ? void 0 : y.current_tier,
        E = null != w ? y.tiers.find((e) => e.key === w) : void 0,
        A = null != I ? y.tiers.find((e) => e.key === I) : void 0,
        S = a ? void 0 : y.progress?.[0],
        B = S?.threshold ?? E?.requirements[0]?.threshold ?? null,
        C = !a && y.owned && null != E,
        O = a || (0, D.uJ)(y.leveling_instructions) || C ? void 0 : y.leveling_instructions,
        U = E?.name != null ? K.intl.formatToPlainString(K.t["Jn+COZ"], { tier_name: E.name }) : void 0,
        R = c ? K.intl.string(K.t["065Hig"]) : K.intl.string(K.t.MylOvg),
        z = a ? t : y,
        F = A?.complex_icon_static_url ?? A?.simple_icon_url,
        G = E?.complex_icon_static_url ?? E?.simple_icon_url,
        V = !(0, D.uJ)(S?.progress_helper_text),
        M = null != U ? { "aria-labelledby": h } : { "aria-label": K.intl.string(K.t.Uwhb1l) };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != O && (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: O }),
            C &&
                !f &&
                (0, l.jsxs)("div", {
                    className: eg.ES,
                    children: [
                        null != F &&
                            (0, l.jsx)("img", { className: eg.Tw, src: F, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, l.jsxs)("div", {
                            className: eg.Bd,
                            children: [
                                null != U && (0, l.jsx)(u.E, { id: h, variant: "text-sm/medium", children: U }),
                                null != B
                                    ? (0, l.jsx)(ei.z, {
                                          value: S?.current ?? 0,
                                          minValue: S?.floor ?? 0,
                                          maxValue: B,
                                          size: "md",
                                          className: eg.hr,
                                          ...M,
                                      })
                                    : null != S &&
                                      (0, l.jsx)(ei.z, { isIndeterminate: !0, size: "md", className: eg.hr, ...M }),
                                V &&
                                    (0, l.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: S?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != G &&
                            (0, l.jsx)("img", { className: eg.Tw, src: G, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            C && !f
                ? (0, l.jsxs)("div", {
                      className: eg.JC,
                      children: [
                          (0, l.jsx)("div", {
                              ref: _,
                              className: j()(eg.ne, c && eg.GB),
                              id: x,
                              children: (0, l.jsx)("div", {
                                  className: eg.zL,
                                  inert: !c,
                                  children: (0, l.jsxs)("div", {
                                      className: eg.GA,
                                      children: [
                                          (0, l.jsx)(T.c, { className: eg.yF }),
                                          (0, l.jsx)(eo, {
                                              badge: z,
                                              isViewingOtherUser: a,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                              hideLabel: !0,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, l.jsxs)(P.D, {
                              innerRef: b,
                              className: eg.tw,
                              "aria-expanded": c,
                              "aria-controls": x,
                              onClick: () => o(!c),
                              children: [
                                  (0, l.jsx)(u.E, {
                                      className: eg.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: R,
                                  }),
                                  (0, l.jsx)(ea.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: j()(eg.ai, c && eg.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsx)(eo, { badge: z, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var eh = n(536001),
    eb = n(260981),
    e_ = n(540418),
    ev = n(907085),
    ej = n(179820),
    eN = n(174459);
function ey(e) {
    let { actionName: t, badge: n, displayedUserId: l, isSociallyNavigated: i } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != n && null != a ? _.Ay.getBadgeById(n.badge_id, a) : void 0,
        r = null != n && null != a ? _.Ay.getRemainingToNextTier(n.badge_id, a) : void 0,
        d = null != l ? _.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    eN.default.track(eu.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: n?.badge_id,
        badge_tier: null != n ? ((n.owned ? n.current_tier : n.next_tier) ?? n.tiers?.[0]?.key) : void 0,
        badge_owner_id: l,
        is_owned: s?.owned ?? !1,
        progress_to_next_tier: r,
        is_earnable: n?.is_earnable ?? !1,
        is_socially_navigated: i,
        total_badges_owned: d,
    });
}
var ep = n(202541);
let ef = [K.t["6zFA/T"], K.t.wzZHKl, K.t["+ED/nf"]];
function ew() {
    let e = Math.floor(Math.random() * ef.length);
    return K.intl.string(ef[e]);
}
function eI(e) {
    let { earnedDateText: t, label: n } = e;
    return (0, l.jsxs)("div", {
        className: j()(Q.AX, Q.aS),
        children: [
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: Q.NM, children: t }),
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: Q.MZ, children: n }),
        ],
    });
}
function eE(e) {
    let { rarityBadgeProps: t } = e;
    return (0, l.jsxs)("div", {
        className: j()(Q.AX, Q.sn),
        children: [
            (0, l.jsx)(y.E, { ...t }),
            (0, l.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: K.intl.string(K.t["phYZe+"]),
            }),
        ],
    });
}
function eA() {
    return (0, l.jsx)(p.m, {
        text: K.intl.string(K.t.goKu4e),
        children: (0, l.jsxs)("span", {
            className: Q.Gb,
            children: [
                (0, l.jsx)(f.m, { size: "xxs", color: "currentColor", className: Q.LS, "aria-hidden": !0 }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: K.intl.string(K.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eS(e) {
    let t,
        n,
        {
            badge: l,
            isOwnProfile: i,
            isViewingOtherUser: a,
            targetUsername: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        } = e;
    if (
        ((t = i
            ? l.owned
                ? c
                : K.intl.string(K.t.uHtDcT)
            : a && null != s
              ? K.intl.formatToPlainString(K.t.Eo5Cnp, { username: X(s) })
              : l.owned
                ? c
                : K.intl.string(K.t.uHtDcT)),
        !i)
    ) {
        let e = !a && r && null != s;
        a && d
            ? (n = K.intl.string(K.t.yxEAGH))
            : e && (n = K.intl.formatToPlainString(K.t["9GNsge"], { username: X(s) }));
    }
    return { statusText: t, toggleText: n };
}
function eT() {
    return (0, l.jsx)(O.A, { height: 3, width: 3, "aria-hidden": "true", className: Q.zN });
}
function eB(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: Q.U3,
              children: t.map((e, t) => {
                  let { key: n, node: i } = e;
                  return (0, l.jsxs)("span", { className: Q.Hq, children: [t > 0 && (0, l.jsx)(eT, {}), i] }, n);
              }),
          });
}
function eC(e) {
    let {
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: i,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        g = (0, D.uJ)(t.info_label) ? void 0 : t.info_label,
        m = (0, H.HW)(t.badge_id),
        { statusText: x, toggleText: h } = eS({
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: i,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        b = [];
    m && b.push({ key: "beta", node: (0, l.jsx)(eA, {}) }),
        null != x &&
            b.push({
                key: "status",
                node: (0, l.jsxs)("span", {
                    className: Q.pC,
                    children: [
                        !n && null != s && (0, l.jsx)(w.eu, { src: s, size: q._3.SIZE_16, "aria-hidden": !0 }),
                        (0, l.jsx)(u.E, {
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
            b.push({
                key: "info",
                node: (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: Q.$L,
                    children: g,
                }),
            });
    let _ = b.length >= 3 && null != h,
        v =
            null != h
                ? {
                      key: "toggle",
                      node: (0, l.jsx)(I.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "text-xs/medium",
                          onClick: o,
                          text: h,
                      }),
                  }
                : void 0,
        j = _ || null == v ? b : [...b, v];
    return 0 === j.length && null == v
        ? null
        : (0, l.jsxs)("div", {
              className: Q.rI,
              children: [(0, l.jsx)(eB, { segments: j }), _ && null != v && (0, l.jsx)(eB, { segments: [v] })],
          });
}
function eO(e) {
    let {
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: i,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        { statusText: g, toggleText: m } = eS({
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: i,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        x = null != g;
    return n
        ? x
            ? (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: g })
            : null
        : x || null != m
          ? (0, l.jsxs)("div", {
                className: Q.bn,
                children: [
                    x &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                null != s && (0, l.jsx)(w.eu, { src: s, size: q._3.SIZE_16, "aria-hidden": !0 }),
                                (0, l.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: Q.CT,
                                    children: g,
                                }),
                                null != m &&
                                    (0, l.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        className: Q.CT,
                                        "aria-hidden": !0,
                                        children: "\xb7",
                                    }),
                            ],
                        }),
                    null != m &&
                        (0, l.jsx)(I.Q, {
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
            badge: b,
            viewerBadge: v,
            onClose: y,
            isOwnProfile: p,
            isViewingOtherUser: f,
            targetUsername: w,
            displayedUserId: I,
            targetOwnsBadge: O,
            viewerOwnsBadge: F,
            isMilestone2Enabled: G,
            onToggleViewedUser: V,
            onViewOwnCatalog: P,
        } = e,
        M = J(I, f, 32),
        $ = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(b),
        L = (0, s.bG)([C.Ay], () => C.Ay.useReducedMotion)
            ? void 0
            : ($?.complex_icon_animated_url ?? b.complex_icon_animated_url),
        Z = $?.complex_icon_static_url ?? b.complex_icon_static_url,
        Y = $?.simple_icon_url ?? b.simple_icon_url,
        q = L ?? Z ?? Y,
        X =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case eh.x.COMMON:
                        return { type: { text: K.intl.string(K.t.L0K5ci) }, variant: "rarity-common", icon: eb.p };
                    case eh.x.RARE:
                        return { type: { text: K.intl.string(K.t["sTx/5z"]) }, variant: "rarity-rare", icon: e_.A };
                    case eh.x.EPIC:
                        return { type: { text: K.intl.string(K.t.RD8RiN) }, variant: "rarity-epic", icon: ev.b };
                    case eh.x.MYTHIC:
                        return { type: { text: K.intl.string(K.t.vqc1ol) }, variant: "rarity-mythic", icon: ej.O };
                    default:
                        return null;
                }
            })($?.rarity ?? b.rarity) ?? void 0,
        ee = (0, H.Om)(b.badge_id),
        et = b.badge_id === N.$.PREMIUM_TENURE,
        en = et ? ($?.name ?? $?.key) : $?.name,
        el = et ? K.intl.string(K.t.Ipxkog) : b.name;
    et ? (r = null != en ? `${el} ${en}` : el) : null != en ? ((a = el), (r = en)) : (r = el);
    let ei = (0, z.ie)(b.badge_id) && !b.is_earnable && b.badge_id !== N.$.STAFF,
        ea = (b.tiers?.length ?? 0) > 0,
        es = (0, _.H5)(b),
        er = (function (e) {
            let [t, n] = i.useState(ew),
                [l, a] = i.useState(e);
            return e !== l && (a(e), n(ew())), t;
        })(b.badge_id);
    c = b.owned
        ? b.badge_id === N.$.APRIL_FOOLS_2026
            ? K.intl.string(K.t["5LcHT0"])
            : ei && null == es
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
    let ed = ((n = null == (t = b.tiers?.[0]?.key) || $?.key === t), K.intl.string(n ? K.t.WDhIz2 : K.t.wYaDmz)),
        ec = G && null != c && b.badge_id !== N.$.STAFF,
        eg = null != X,
        em = null;
    G && (ec || eg)
        ? (em = (0, l.jsxs)("div", {
              className: j()(Q.$S, (!ec || !eg) && Q.jQ),
              children: [
                  ec && null != c && (0, l.jsx)(eI, { earnedDateText: c, label: ed }),
                  eg && (0, l.jsx)(eE, { rarityBadgeProps: X }),
              ],
          }))
        : eg && (em = (0, l.jsx)(eE, { rarityBadgeProps: X })),
        ec ||
            (m =
                G || null == es
                    ? K.intl.string(K.t.sTFApF)
                    : K.intl.formatToPlainString(K.t["0aEh2a"], { date: new Date(es) }));
    let eN = v?.owned === !0 && (v.tiers?.length ?? 0) > 0 && null == v.next_tier,
        ef = x.default.getCurrentUser()?.premiumType,
        eA = et && (ef === ep.PremiumTypes.TIER_0 || ef === ep.PremiumTypes.TIER_1);
    h = eN ? K.intl.string(K.t.jY5xAL) : eA ? K.intl.string(K.t.qkwSSp) : (v?.description ?? b.description);
    let eS = i.useCallback(() => {
            null != ee &&
                (ey({
                    actionName: "primary_badge_action_clicked",
                    badge: b,
                    displayedUserId: I,
                    isSociallyNavigated: f,
                }),
                y(),
                B.A.popAll(),
                ee.ctaAction());
        }, [b, I, f, ee, y]),
        eT =
            !f || b.is_earnable || F || b.badge_id === N.$.STAFF
                ? null
                : (0, l.jsx)(E.w, { type: "info", children: K.intl.format(K.t.vFekBs, { onViewBadges: P }) }),
        eB = (0, s.bG)([k.A], () => k.A.hasConsented(eu.YAq.PERSONALIZATION)),
        eU = G && (0, H.Jn)(b.badge_id) && !f && !eB;
    return (0, l.jsx)(A.F, {
        forceLevel: 2,
        children: (0, l.jsx)("div", {
            id: H.hJ,
            role: "tabpanel",
            "aria-labelledby": W(b.badge_id),
            className: Q.SV,
            children: (0, l.jsxs)(S.d_, {
                className: Q.C9,
                children: [
                    (0, l.jsx)("div", { className: Q.Gw, children: (0, l.jsx)(d.J, { onClick: y, size: "sm" }) }),
                    null != q &&
                        (0, l.jsx)("img", {
                            className: j()(Q.y2, null != L && q === L && Q.hu),
                            src: q,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, l.jsxs)("div", {
                        className: Q.OU,
                        children: [
                            (0, l.jsxs)("div", {
                                className: Q.cQ,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: Q.nj,
                                        children: [
                                            (0, l.jsxs)(o.D, {
                                                variant: "display-sm",
                                                color: "text-strong",
                                                className: j()(Q._r, et && Q.tN),
                                                children: [
                                                    null != a &&
                                                        (0, l.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "text-sm/medium",
                                                            color: "text-subtle",
                                                            className: Q.$g,
                                                            children: a,
                                                        }),
                                                    r,
                                                ],
                                            }),
                                            G &&
                                                (0, l.jsx)(eC, {
                                                    badge: b,
                                                    isOwnProfile: p,
                                                    isViewingOtherUser: f,
                                                    targetUsername: w,
                                                    viewedAvatarSrc: M,
                                                    targetOwnsBadge: O,
                                                    viewerOwnsBadge: F,
                                                    unlockedStatusText: m,
                                                    onToggleViewedUser: V,
                                                }),
                                        ],
                                    }),
                                    !G &&
                                        (0, l.jsx)(eO, {
                                            badge: b,
                                            isOwnProfile: p,
                                            isViewingOtherUser: f,
                                            targetUsername: w,
                                            viewedAvatarSrc: M,
                                            targetOwnsBadge: O,
                                            viewerOwnsBadge: F,
                                            unlockedStatusText: m,
                                            onToggleViewedUser: V,
                                        }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: Q.oA,
                                children: [
                                    eU &&
                                        (0, l.jsx)(E.w, {
                                            type: "info",
                                            children: K.intl.format(K.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, R.openUserSettings)(U.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    em,
                                    !(0, D.uJ)(h) &&
                                        (0, l.jsxs)("div", {
                                            className: Q.d9,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: Q.E4,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: Q.jv,
                                                            children: [
                                                                ei &&
                                                                    (0, l.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: Q.c$,
                                                                        children: K.intl.string(K.t["/Gmn3f"]),
                                                                    }),
                                                                (0, l.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: Q.ij,
                                                                    children: h,
                                                                }),
                                                            ],
                                                        }),
                                                        null != ee &&
                                                            (0, l.jsx)(g.$, {
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
                                                (b.tiers?.length ?? 0) > 0 &&
                                                    (0, l.jsxs)("div", {
                                                        className: Q.cJ,
                                                        children: [
                                                            (0, l.jsx)(T.c, {}),
                                                            G
                                                                ? (0, l.jsx)(ex, {
                                                                      badge: b,
                                                                      viewerBadge: v,
                                                                      isViewingOtherUser: f,
                                                                      targetUsername: w,
                                                                      isViewerOnUpgradeableNitro: eA,
                                                                  })
                                                                : (0, l.jsx)(eo, {
                                                                      badge: f ? b : (v ?? b),
                                                                      isViewingOtherUser: f,
                                                                      targetUsername: w,
                                                                      isViewerOnUpgradeableNitro: eA,
                                                                  }),
                                                        ],
                                                    }),
                                                null != eT && (0, l.jsx)("div", { className: Q.Z6, children: eT }),
                                            ],
                                        }),
                                    (0, D.uJ)(h) && eT,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eR = n(470739);
function ek(e) {
    let {
            transitionState: t,
            onClose: n,
            initialBadgeId: v,
            targetUserId: j,
            targetUsername: N,
            viewingCurrentUserBadges: y,
        } = e,
        p = (0, s.bG)([x.default], () => x.default.getCurrentUser()?.id),
        f = (0, b.VV)({ location: "BadgeDirectoryModal" }),
        w = null == j || j === p,
        I = !w && null != j && !0 !== y,
        E = I ? j : p,
        A = null != E ? `viewed_user:${I ? "other" : "self"}` : void 0,
        [S, T] = i.useState(v ?? null),
        B = (0, s.yK)([_.Ay], () => (null != E ? _.Ay.getBadges(E) : []), [E]),
        C = (0, s.bG)([_.Ay], () => null != E && _.Ay.hasCatalogFor(E), [E]),
        O = (0, s.bG)([_.Ay], () => _.Ay.hasCatalogFetchErrorFor(E), [E]);
    i.useEffect(() => {
        null != E && (_.Ay.hasCatalogFor(E) ? _.Ay.isCatalogStaleFor(E) && (0, h.RS)(E) : (0, h.RS)(E));
        let e = I ? p : j;
        w || null == e || _.Ay.hasCatalogFor(e) || (0, h.RS)(e);
    }, [E, w, I, p, j]),
        i.useEffect(() => {
            null != A && m.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [A] });
        }, [A]);
    let U = i.useMemo(() => {
            let { earnable: e, owned: t } = en(B);
            return I ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [B, I]),
        R = null != S && null != E ? _.Ay.getBadgeById(S, E) : void 0,
        k = null != U && null != E ? _.Ay.getBadgeById(U, E) : void 0,
        D = R ?? k,
        z = !C && !O,
        F = !C && O,
        G = f && !I;
    i.useEffect(() => {
        F && null != A && m.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [A] });
    }, [F, A]);
    let V = (0, s.bG)([_.Ay], () => null != j && null != D && (_.Ay.getBadgeById(D.badge_id, j)?.owned ?? !1), [D, j]),
        P = (0, s.bG)([_.Ay], () => (null != p && null != D ? _.Ay.getBadgeById(D.badge_id, p) : void 0), [D, p]),
        M = P?.owned ?? !1,
        $ = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eR._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    n();
                });
            },
            [n],
        ),
        L = i.useCallback(() => {
            null != j &&
                null != D &&
                (I
                    ? $({
                          initialBadgeId: D.badge_id,
                          targetUserId: j,
                          targetUsername: N,
                          viewingCurrentUserBadges: !0,
                      })
                    : $({ initialBadgeId: D.badge_id, targetUserId: j, targetUsername: N }));
        }, [I, D, $, j, N]),
        Z = i.useCallback(() => {
            null != p &&
                null != j &&
                (ey({ actionName: "view_your_badges_pressed", badge: D, displayedUserId: E, isSociallyNavigated: I }),
                $({ targetUserId: j, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [p, E, I, D, $, j, N]),
        Y = i.useCallback(() => {
            null != E && (0, h.RS)(E, { isRetry: !0 });
        }, [E]),
        J = i.useCallback(() => {
            ey({ actionName: "badge_directory_closed", badge: D, displayedUserId: E, isSociallyNavigated: I }), n();
        }, [E, I, n, D]),
        q = D?.badge_id;
    return (
        i.useEffect(() => {
            null != q && G && (0, H.Ce)(q) && (0, h.PV)(q);
        }, [q, G]),
        i.useEffect(() => {
            null != D &&
                ey({ actionName: "badge_detail_viewed", badge: D, displayedUserId: E, isSociallyNavigated: I });
        }, [q, E, I]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": K.intl.string(K.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: Q.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: Q.jE,
                children: [
                    (z || F || null == D) &&
                        (0, l.jsx)("div", { className: Q.b, children: (0, l.jsx)(d.J, { onClick: J, size: "sm" }) }),
                    z
                        ? (0, l.jsx)("div", { className: Q.Lq, children: (0, l.jsx)(c.y, {}) })
                        : F
                          ? (0, l.jsxs)("div", {
                                className: Q.IU,
                                children: [
                                    (0, l.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: K.intl.string(K.t.iufib1),
                                    }),
                                    (0, l.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: Q.TQ,
                                        children: K.intl.string(K.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: Y,
                                        text: K.intl.string(K.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(el, {
                                        selectedBadgeId: D?.badge_id ?? null,
                                        onSelectBadge: T,
                                        displayedUserId: E,
                                        isViewingOtherUser: I,
                                        targetUsername: N,
                                        onViewOwnCatalog: Z,
                                        showBadgeIndicators: G,
                                    }),
                                    null != D &&
                                        (0, l.jsx)(eU, {
                                            badge: D,
                                            viewerBadge: P,
                                            onClose: J,
                                            isOwnProfile: w,
                                            isViewingOtherUser: I,
                                            targetUsername: N,
                                            displayedUserId: E,
                                            targetOwnsBadge: V,
                                            viewerOwnsBadge: M,
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
