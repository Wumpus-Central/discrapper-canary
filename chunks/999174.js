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
    let i = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != i && t) return (0, Y.ku)({ id: i.id, avatar: i.avatar, discriminator: i.discriminator }, !1, n);
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
        x = l.useRef(null);
    return (0, i.jsxs)(P.D, {
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
        d = (0, G.Ay)({
            id: n,
            isEnabled: !0,
            orientation: V.Gl.HORIZONTAL,
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
        j = J(a, r, 48),
        N = null != d ? X(d) : null,
        y = null != d && N !== d,
        p =
            null != N && y && null != j
                ? (0, i.jsxs)("span", {
                      className: Q._p,
                      children: [(0, i.jsx)(w.eu, { src: j, size: q._3.SIZE_24, "aria-hidden": !0 }), N],
                  })
                : N,
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
                            !y && null != j && (0, i.jsx)(w.eu, { src: j, size: q._3.SIZE_24, "aria-hidden": !0 }),
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
        o = t.badge_id === N.$.PREMIUM_TENURE ? K.intl.string(s ? K.t["5WS9pL"] : K.t.crwYbF) : null,
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
var eu = n(652215),
    eg = n(619004);
let em = new Set([N.$.GAME_TIME, N.$.GAME_VARIETY, N.$.STREAMING]);
function ex(e) {
    let { badge: t, viewerBadge: n, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [c, o] = l.useState(!1),
        [g, m] = l.useState(t.badge_id),
        x = l.useId(),
        h = l.useId(),
        _ = l.useRef(null),
        b = l.useRef(null);
    t.badge_id !== g && (m(t.badge_id), o(!1));
    let v = l.useCallback(() => {
            let e = _.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        N = l.useCallback(
            (e) => {
                null != e.target && c && v();
            },
            [c, v],
        );
    (0, es.g)(b, N, [c], { enabled: c });
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != O && (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: O }),
            C &&
                !f &&
                (0, i.jsxs)("div", {
                    className: eg.ES,
                    children: [
                        null != F && (0, i.jsx)("img", { className: eg.Tw, src: F, alt: "", "aria-hidden": !0 }),
                        (0, i.jsxs)("div", {
                            className: eg.Bd,
                            children: [
                                null != U && (0, i.jsx)(u.E, { id: h, variant: "text-sm/medium", children: U }),
                                null != B
                                    ? (0, i.jsx)(el.z, {
                                          value: S?.current ?? 0,
                                          minValue: S?.floor ?? 0,
                                          maxValue: B,
                                          size: "md",
                                          className: eg.hr,
                                          ...M,
                                      })
                                    : null != S &&
                                      (0, i.jsx)(el.z, { isIndeterminate: !0, size: "md", className: eg.hr, ...M }),
                                V &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: S?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != G && (0, i.jsx)("img", { className: eg.Tw, src: G, alt: "", "aria-hidden": !0 }),
                    ],
                }),
            C && !f
                ? (0, i.jsxs)("div", {
                      className: eg.JC,
                      children: [
                          (0, i.jsx)("div", {
                              ref: b,
                              className: j()(eg.ne, c && eg.GB),
                              id: x,
                              children: (0, i.jsx)("div", {
                                  className: eg.zL,
                                  inert: !c,
                                  children: (0, i.jsxs)("div", {
                                      className: eg.GA,
                                      children: [
                                          (0, i.jsx)(T.c, { className: eg.yF }),
                                          (0, i.jsx)(eo, {
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
                          (0, i.jsxs)(P.D, {
                              innerRef: _,
                              className: eg.tw,
                              "aria-expanded": c,
                              "aria-controls": x,
                              onClick: () => o(!c),
                              children: [
                                  (0, i.jsx)(u.E, {
                                      className: eg.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: R,
                                  }),
                                  (0, i.jsx)(ea.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: j()(eg.ai, c && eg.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(eo, { badge: z, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var eh = n(536001),
    e_ = n(260981),
    eb = n(540418),
    ev = n(907085),
    ej = n(179820),
    eN = n(174459);
function ey(e) {
    let { actionName: t, badge: n, displayedUserId: i, isSociallyNavigated: l } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != n && null != a ? b.Ay.getBadgeById(n.badge_id, a) : void 0,
        r = null != n && null != a ? b.Ay.getRemainingToNextTier(n.badge_id, a) : void 0,
        d = null != i ? b.Ay.getBadges(i).filter((e) => e.owned).length : void 0;
    eN.default.track(eu.HAw.BADGE_DIRECTORY_ACTION, {
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
var ep = n(202541);
let ef = [K.t["6zFA/T"], K.t.wzZHKl, K.t["+ED/nf"]];
function ew() {
    let e = Math.floor(Math.random() * ef.length);
    return K.intl.string(ef[e]);
}
function eI(e) {
    let { earnedDateText: t, label: n } = e;
    return (0, i.jsxs)("div", {
        className: j()(Q.AX, Q.aS),
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: Q.NM, children: t }),
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: Q.MZ, children: n }),
        ],
    });
}
function eE(e) {
    let { rarityBadgeProps: t } = e;
    return (0, i.jsxs)("div", {
        className: j()(Q.AX, Q.sn),
        children: [
            (0, i.jsx)(y.E, { ...t }),
            (0, i.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: K.intl.string(K.t["phYZe+"]),
            }),
        ],
    });
}
function eA() {
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
function eS(e) {
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
function eT() {
    return (0, i.jsx)(O.A, { height: 3, width: 3, "aria-hidden": "true", className: Q.zN });
}
function eB(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: Q.U3,
              children: t.map((e, t) => {
                  let { key: n, node: l } = e;
                  return (0, i.jsxs)("span", { className: Q.Hq, children: [t > 0 && (0, i.jsx)(eT, {}), l] }, n);
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
        { statusText: x, toggleText: h } = eS({
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: l,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    m && _.push({ key: "beta", node: (0, i.jsx)(eA, {}) }),
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
function eO(e) {
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
        { statusText: g, toggleText: m } = eS({
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
        })(_),
        L = (0, s.bG)([C.Ay], () => C.Ay.useReducedMotion)
            ? void 0
            : ($?.complex_icon_animated_url ?? _.complex_icon_animated_url),
        Z = $?.complex_icon_static_url ?? _.complex_icon_static_url,
        Y = $?.simple_icon_url ?? _.simple_icon_url,
        q = L ?? Z ?? Y,
        X =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case eh.x.COMMON:
                        return { type: { text: K.intl.string(K.t.L0K5ci) }, variant: "rarity-common", icon: e_.p };
                    case eh.x.RARE:
                        return { type: { text: K.intl.string(K.t["sTx/5z"]) }, variant: "rarity-rare", icon: eb.A };
                    case eh.x.EPIC:
                        return { type: { text: K.intl.string(K.t.RD8RiN) }, variant: "rarity-epic", icon: ev.b };
                    case eh.x.MYTHIC:
                        return { type: { text: K.intl.string(K.t.vqc1ol) }, variant: "rarity-mythic", icon: ej.O };
                    default:
                        return null;
                }
            })($?.rarity ?? _.rarity) ?? void 0,
        ee = (0, H.Om)(_.badge_id),
        et = _.badge_id === N.$.PREMIUM_TENURE,
        en = et ? ($?.name ?? $?.key) : $?.name,
        ei = et ? K.intl.string(K.t.Ipxkog) : _.name;
    et ? (r = null != en ? `${ei} ${en}` : ei) : null != en ? ((a = ei), (r = en)) : (r = ei);
    let el = (0, z.ie)(_.badge_id) && !_.is_earnable && _.badge_id !== N.$.STAFF,
        ea = (_.tiers?.length ?? 0) > 0,
        es = (0, b.H5)(_),
        er = (function (e) {
            let [t, n] = l.useState(ew),
                [i, a] = l.useState(e);
            return e !== i && (a(e), n(ew())), t;
        })(_.badge_id);
    c = _.owned
        ? _.badge_id === N.$.APRIL_FOOLS_2026
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
    let ed = ((n = null == (t = _.tiers?.[0]?.key) || $?.key === t), K.intl.string(n ? K.t.WDhIz2 : K.t.wYaDmz)),
        ec = G && null != c && _.badge_id !== N.$.STAFF,
        eg = null != X,
        em = null;
    G && (ec || eg)
        ? (em = (0, i.jsxs)("div", {
              className: j()(Q.$S, (!ec || !eg) && Q.jQ),
              children: [
                  ec && null != c && (0, i.jsx)(eI, { earnedDateText: c, label: ed }),
                  eg && (0, i.jsx)(eE, { rarityBadgeProps: X }),
              ],
          }))
        : eg && (em = (0, i.jsx)(eE, { rarityBadgeProps: X })),
        ec ||
            (m =
                G || null == es
                    ? K.intl.string(K.t.sTFApF)
                    : K.intl.formatToPlainString(K.t["0aEh2a"], { date: new Date(es) }));
    let eN = v?.owned === !0 && (v.tiers?.length ?? 0) > 0 && null == v.next_tier,
        ef = x.default.getCurrentUser()?.premiumType,
        eA = et && (ef === ep.PremiumTypes.TIER_0 || ef === ep.PremiumTypes.TIER_1);
    h = eN ? K.intl.string(K.t.jY5xAL) : eA ? K.intl.string(K.t.qkwSSp) : (v?.description ?? _.description);
    let eS = l.useCallback(() => {
            null != ee &&
                (ey({
                    actionName: "primary_badge_action_clicked",
                    badge: _,
                    displayedUserId: I,
                    isSociallyNavigated: f,
                }),
                y(),
                B.A.popAll(),
                ee.ctaAction());
        }, [_, I, f, ee, y]),
        eT =
            !f || _.is_earnable || F || _.badge_id === N.$.STAFF
                ? null
                : (0, i.jsx)(E.w, { type: "info", children: K.intl.format(K.t.vFekBs, { onViewBadges: P }) }),
        eB = (0, s.bG)([k.A], () => k.A.hasConsented(eu.YAq.PERSONALIZATION)),
        eU = G && (0, H.Jn)(_.badge_id) && !f && !eB;
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
                    (0, i.jsx)("div", { className: Q.Gw, children: (0, i.jsx)(d.J, { onClick: y, size: "sm" }) }),
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
                                            G &&
                                                (0, i.jsx)(eC, {
                                                    badge: _,
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
                                        (0, i.jsx)(eO, {
                                            badge: _,
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
                            (0, i.jsxs)("div", {
                                className: Q.oA,
                                children: [
                                    eU &&
                                        (0, i.jsx)(E.w, {
                                            type: "info",
                                            children: K.intl.format(K.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, R.openUserSettings)(U.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    em,
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
                                                            (0, i.jsx)(T.c, {}),
                                                            G
                                                                ? (0, i.jsx)(ex, {
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
                                                null != eT && (0, i.jsx)("div", { className: Q.Z6, children: eT }),
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
        f = (0, _.VV)({ location: "BadgeDirectoryModal" }),
        w = null == j || j === p,
        I = !w && null != j && !0 !== y,
        E = I ? j : p,
        A = null != E ? `viewed_user:${I ? "other" : "self"}` : void 0,
        [S, T] = l.useState(v ?? null),
        B = (0, s.yK)([b.Ay], () => (null != E ? b.Ay.getBadges(E) : []), [E]),
        C = (0, s.bG)([b.Ay], () => null != E && b.Ay.hasCatalogFor(E), [E]),
        O = (0, s.bG)([b.Ay], () => b.Ay.hasCatalogFetchErrorFor(E), [E]);
    l.useEffect(() => {
        null != E && (b.Ay.hasCatalogFor(E) ? b.Ay.isCatalogStaleFor(E) && (0, h.RS)(E) : (0, h.RS)(E));
        let e = I ? p : j;
        w || null == e || b.Ay.hasCatalogFor(e) || (0, h.RS)(e);
    }, [E, w, I, p, j]),
        l.useEffect(() => {
            null != A && m.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [A] });
        }, [A]);
    let U = l.useMemo(() => {
            let { earnable: e, owned: t } = en(B);
            return I ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [B, I]),
        R = null != S && null != E ? b.Ay.getBadgeById(S, E) : void 0,
        k = null != U && null != E ? b.Ay.getBadgeById(U, E) : void 0,
        D = R ?? k,
        z = !C && !O,
        F = !C && O,
        G = f && !I;
    l.useEffect(() => {
        F && null != A && m.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [A] });
    }, [F, A]);
    let V = (0, s.bG)([b.Ay], () => null != j && null != D && (b.Ay.getBadgeById(D.badge_id, j)?.owned ?? !1), [D, j]),
        P = (0, s.bG)([b.Ay], () => (null != p && null != D ? b.Ay.getBadgeById(D.badge_id, p) : void 0), [D, p]),
        M = P?.owned ?? !1,
        $ = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eR._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    n();
                });
            },
            [n],
        ),
        L = l.useCallback(() => {
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
        Z = l.useCallback(() => {
            null != p &&
                null != j &&
                (ey({ actionName: "view_your_badges_pressed", badge: D, displayedUserId: E, isSociallyNavigated: I }),
                $({ targetUserId: j, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [p, E, I, D, $, j, N]),
        Y = l.useCallback(() => {
            null != E && (0, h.RS)(E, { isRetry: !0 });
        }, [E]),
        J = l.useCallback(() => {
            ey({ actionName: "badge_directory_closed", badge: D, displayedUserId: E, isSociallyNavigated: I }), n();
        }, [E, I, n, D]),
        q = D?.badge_id;
    return (
        l.useEffect(() => {
            null != q && G && (0, H.Ce)(q) && (0, h.PV)(q);
        }, [q, G]),
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
                        (0, i.jsx)("div", { className: Q.b, children: (0, i.jsx)(d.J, { onClick: J, size: "sm" }) }),
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
                                        onClick: Y,
                                        text: K.intl.string(K.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ei, {
                                        selectedBadgeId: D?.badge_id ?? null,
                                        onSelectBadge: T,
                                        displayedUserId: E,
                                        isViewingOtherUser: I,
                                        targetUsername: N,
                                        onViewOwnCatalog: Z,
                                        showBadgeIndicators: G,
                                    }),
                                    null != D &&
                                        (0, i.jsx)(eU, {
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
