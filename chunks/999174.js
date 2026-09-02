n.d(t, { default: () => eP });
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
    x = n(402860),
    h = n(403777),
    b = n(287809),
    _ = n(682618),
    v = n(992526),
    j = n(982240),
    N = n(248284);
n(321073);
var y = n(503698),
    p = n.n(y),
    f = n(70283),
    w = n(508770),
    I = n(866665),
    E = n(885574),
    A = n(97808),
    S = n(123292),
    C = n(683071),
    T = n(707554),
    B = n(364522),
    O = n(404778),
    U = n(982168),
    k = n(775602),
    R = n(640708),
    D = n(780964),
    z = n(766075),
    F = n(153488),
    P = n(240248),
    G = n(609782),
    V = n(837381),
    M = n(887129),
    $ = n(741918),
    L = n(939249),
    Z = n(643056),
    H = n(228366);
let Y = { seenBadgeIndicatorIds: new Set() };
class J extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        Y = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(Y.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return Y.seenBadgeIndicatorIds;
    }
}
let q = new J(H.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: t } = e;
        if (Y.seenBadgeIndicatorIds.has(t)) return !1;
        Y = { ...Y, seenBadgeIndicatorIds: new Set([...Y.seenBadgeIndicatorIds, t]) };
    },
});
var K = n(92111),
    W = n(486020);
function Q(e, t, n) {
    let i = (0, s.bG)([b.default], () => (null != e ? b.default.getUser(e) : void 0), [e]);
    if (null != i && t) return (0, W.ku)({ id: i.id, avatar: i.avatar, discriminator: i.discriminator }, !1, n);
}
var X = n(778712),
    ee = n(375708),
    et = n(177861);
function en(e) {
    return `badge-tab-${e}`;
}
function ei(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function el(e) {
    let { badge: t, isSelected: n, onSelect: a, itemId: s, showBadgeIndicator: r } = e,
        d = (0, V.rm)(s),
        c = t.owned ? t.current_tier : t.next_tier,
        o =
            null != c
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === c;
                  })
                : void 0,
        u = t.badge_id === f.$.PREMIUM_TENURE ? (o?.name ?? o?.key) : o?.name,
        g = null != u ? `${t.name}, ${u}` : t.name,
        m = r ? `${g}, ${ee.intl.string(ee.t.y2b7CA)}` : g,
        x = l.useRef(null);
    return (0, i.jsxs)(L.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: en(t.badge_id),
        "aria-label": m,
        "aria-selected": n,
        "aria-controls": n ? K.hJ : void 0,
        className: p()(et.oL, n && et.xO),
        onFocus: d.onFocus,
        onClick: () => {
            x.current?.focus(), a();
        },
        children: [
            r && (0, i.jsx)("span", { "aria-hidden": !0, className: et.Dn }),
            null != t.simple_icon_url &&
                (0, i.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: et.pW,
                }),
        ],
    });
}
function ea(e) {
    let { label: t, navId: n, badges: l, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, M.Ay)({
            id: n,
            isEnabled: !0,
            orientation: $.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsxs)("div", {
        className: et.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, i.jsx)(V.hD, {
                navigator: d,
                children: (0, i.jsx)(V.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: et.yq,
                            children: l.map((e, t) => {
                                let n = r.has(e.badge_id);
                                return (0, i.jsx)(
                                    el,
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
function es(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function er(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
            onCustomizeBadges: m,
            showBadgeIndicators: x,
        } = e,
        h = (0, s.yK)([j.Ay], () => (null != a ? j.Ay.getBadges(a) : []), [a]),
        { earnable: b, owned: _ } = l.useMemo(() => es(h), [h]),
        { badgeIndicatorIds: v } = (function (e) {
            let { badges: t, enabled: n } = e,
                i = (0, s.bG)([q], () => q.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: l.useMemo(
                    () =>
                        n
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return (0, K.Ce)(t) && !i.has(t);
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
        })({ badges: l.useMemo(() => [..._, ...b], [_, b]), enabled: x }),
        N = Q(a, r, 48),
        y = (0, Z.d)({ location: "BadgeDirectoryPanel" }),
        p = null != d ? ei(d) : null,
        f = null != d && p !== d,
        w =
            null != p && f && null != N
                ? (0, i.jsxs)("span", {
                      className: et._p,
                      children: [(0, i.jsx)(A.eu, { src: N, size: X._3.SIZE_24, "aria-hidden": !0 }), p],
                  })
                : p,
        I = r && null != w ? ee.intl.format(ee.t.EIcwoe, { username: w }) : ee.intl.string(ee.t.UqnlQF),
        E = r && null != d ? ee.intl.string(ee.t["75s2Rq"]) : ee.intl.string(ee.t["62xU4E"]),
        S = r && null != d ? ee.intl.formatToPlainString(ee.t.BCjSZy, { username: d }) : ee.intl.string(ee.t.UqnlQF);
    return (0, i.jsx)("div", {
        className: et.ws,
        children: (0, i.jsxs)(T.F, {
            component: (0, i.jsxs)("div", {
                className: et.NG,
                children: [
                    (0, i.jsxs)("div", {
                        className: et.kc,
                        children: [
                            !f && null != N && (0, i.jsx)(A.eu, { src: N, size: X._3.SIZE_24, "aria-hidden": !0 }),
                            (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: I }),
                        ],
                    }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: E }),
                ],
            }),
            children: [
                (0, i.jsxs)(B.Ip, {
                    className: et.hG,
                    children: [
                        _.length > 0 &&
                            (0, i.jsx)(ea, {
                                label: { type: "aria", text: S },
                                navId: "badge-directory-owned",
                                badges: _,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: v,
                            }),
                        !r &&
                            b.length > 0 &&
                            (0, i.jsx)(ea, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: ee.intl.string(ee.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: b,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: v,
                            }),
                    ],
                }),
                (r || y) &&
                    (0, i.jsx)("div", {
                        className: et.HO,
                        children: r
                            ? (0, i.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: ee.intl.string(ee.t.msyp90),
                              })
                            : (0, i.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: m,
                                  text: ee.intl.string(ee.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var ed = n(911608),
    ec = n(847374),
    eo = n(770178),
    eu = n(194261),
    eg = n(140735),
    em = n(836825);
function ex(e) {
    let {
            badge: t,
            isViewingOtherUser: n,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = l.useId(),
        c = n && null != a,
        o = t.badge_id === f.$.PREMIUM_TENURE ? ee.intl.string(s ? ee.t["5WS9pL"] : ee.t.crwYbF) : null,
        g = c ? ee.intl.formatToPlainString(ee.t.KyTwIh, { username: a }) : o,
        m = null != g && "" !== g;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m &&
                !r &&
                (0, i.jsxs)("div", {
                    className: em.u4,
                    children: [
                        s &&
                            !c &&
                            (0, i.jsx)(eu.LockIcon, {
                                size: "xxs",
                                color: "currentColor",
                                className: em.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, i.jsx)(u.E, { id: d, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: em.SV,
                role: "list",
                "aria-labelledby": m && !r ? d : void 0,
                children: t.tiers.map((e) => {
                    let l = e.owned,
                        a = !l && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (function (e) {
                            let { tier: t, isUnlocked: n, isViewingOtherUser: i, isViewerOnUpgradeableNitro: l } = e;
                            return n || !l || i ? (t.milestone_text ?? "") : ee.intl.string(ee.t.VPu695);
                        })({ tier: e, isUnlocked: l, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: p()(em.zh, a && em.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", {
                                        className: em.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, i.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: l ? "text-default" : "text-muted",
                                    className: em.hI,
                                    children: [
                                        null != d &&
                                            (0, i.jsxs)("span", {
                                                className: em.nU,
                                                children: [
                                                    !l &&
                                                        (0, i.jsx)(eu.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: em.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== c && (0, i.jsx)("span", { className: em.nU, children: c }),
                                    ],
                                }),
                                (0, i.jsx)(eg.A, { children: ee.intl.string(l ? ee.t.sTFApF : ee.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eh = n(652215),
    eb = n(600409);
let e_ = new Set([f.$.GAME_TIME, f.$.GAME_VARIETY, f.$.STREAMING]);
function ev(e) {
    let { badge: t, viewerBadge: n, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [c, o] = l.useState(!1),
        [g, m] = l.useState(t.badge_id),
        x = l.useId(),
        h = l.useId(),
        b = l.useRef(null),
        _ = l.useRef(null);
    t.badge_id !== g && (m(t.badge_id), o(!1));
    let v = l.useCallback(() => {
            let e = b.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        j = l.useCallback(
            (e) => {
                null != e.target && c && v();
            },
            [c, v],
        );
    (0, eo.g)(_, j, [c], { enabled: c });
    let N = n ?? t,
        y = (0, s.bG)([F.A], () => F.A.hasConsented(eh.YAq.PERSONALIZATION)),
        f = !a && e_.has(t.badge_id) && !y,
        w = a ? void 0 : N.next_tier,
        I = a ? void 0 : N.current_tier,
        E = null != w ? N.tiers.find((e) => e.key === w) : void 0,
        A = null != I ? N.tiers.find((e) => e.key === I) : void 0,
        S = a ? void 0 : N.progress?.[0],
        C = S?.threshold ?? E?.requirements[0]?.threshold ?? null,
        T = !a && N.owned && null != E,
        B = a || (0, P.uJ)(N.leveling_instructions) || T ? void 0 : N.leveling_instructions,
        U = E?.name != null ? ee.intl.formatToPlainString(ee.t["Jn+COZ"], { tier_name: E.name }) : void 0,
        k = c ? ee.intl.string(ee.t["065Hig"]) : ee.intl.string(ee.t.MylOvg),
        R = a ? t : N,
        D = A?.complex_icon_static_url ?? A?.simple_icon_url,
        z = E?.complex_icon_static_url ?? E?.simple_icon_url,
        G = !(0, P.uJ)(S?.progress_helper_text),
        V = null != U ? { "aria-labelledby": h } : { "aria-label": ee.intl.string(ee.t.Uwhb1l) };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != B && (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: B }),
            T &&
                !f &&
                (0, i.jsxs)("div", {
                    className: eb.ES,
                    children: [
                        null != D &&
                            (0, i.jsx)("img", { className: eb.Tw, src: D, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, i.jsxs)("div", {
                            className: eb.Bd,
                            children: [
                                null != U && (0, i.jsx)(u.E, { id: h, variant: "text-sm/medium", children: U }),
                                null != C
                                    ? (0, i.jsx)(ed.z, {
                                          value: S?.current ?? 0,
                                          minValue: S?.floor ?? 0,
                                          maxValue: C,
                                          size: "md",
                                          className: eb.hr,
                                          ...V,
                                      })
                                    : null != S &&
                                      (0, i.jsx)(ed.z, { isIndeterminate: !0, size: "md", className: eb.hr, ...V }),
                                G &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: S?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != z &&
                            (0, i.jsx)("img", { className: eb.Tw, src: z, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            T && !f
                ? (0, i.jsxs)("div", {
                      className: eb.JC,
                      children: [
                          (0, i.jsx)("div", {
                              ref: _,
                              className: p()(eb.ne, c && eb.GB),
                              id: x,
                              children: (0, i.jsx)("div", {
                                  className: eb.zL,
                                  inert: !c,
                                  children: (0, i.jsxs)("div", {
                                      className: eb.GA,
                                      children: [
                                          (0, i.jsx)(O.c, { className: eb.yF }),
                                          (0, i.jsx)(ex, {
                                              badge: R,
                                              isViewingOtherUser: a,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                              hideLabel: !0,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, i.jsxs)(L.D, {
                              innerRef: b,
                              className: eb.tw,
                              "aria-expanded": c,
                              "aria-controls": x,
                              onClick: () => o(!c),
                              children: [
                                  (0, i.jsx)(u.E, {
                                      className: eb.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: k,
                                  }),
                                  (0, i.jsx)(ec.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: p()(eb.ai, c && eb.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(ex, { badge: R, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var ej = n(536001),
    eN = n(260981),
    ey = n(540418),
    ep = n(907085),
    ef = n(179820),
    ew = n(174459);
function eI(e) {
    let { actionName: t, badge: n, displayedUserId: i, isSociallyNavigated: l } = e,
        a = b.default.getCurrentUser()?.id,
        s = null != n && null != a ? j.Ay.getBadgeById(n.badge_id, a) : void 0,
        r = null != n && null != a ? j.Ay.getRemainingToNextTier(n.badge_id, a) : void 0,
        d = null != i ? j.Ay.getBadges(i).filter((e) => e.owned).length : void 0;
    ew.default.track(eh.HAw.BADGE_DIRECTORY_ACTION, {
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
var eE = n(202541);
let eA = [ee.t["6zFA/T"], ee.t.wzZHKl, ee.t["+ED/nf"]];
function eS() {
    let e = Math.floor(Math.random() * eA.length);
    return ee.intl.string(eA[e]);
}
function eC(e) {
    let { earnedDateText: t, label: n } = e;
    return (0, i.jsxs)("div", {
        className: p()(et.AX, et.aS),
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: et.NM, children: t }),
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: et.MZ, children: n }),
        ],
    });
}
function eT(e) {
    let { rarityBadgeProps: t } = e;
    return (0, i.jsxs)("div", {
        className: p()(et.AX, et.sn),
        children: [
            (0, i.jsx)(w.E, { ...t }),
            (0, i.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: ee.intl.string(ee.t["phYZe+"]),
            }),
        ],
    });
}
function eB() {
    return (0, i.jsx)(I.m, {
        text: ee.intl.string(ee.t.goKu4e),
        children: (0, i.jsxs)("span", {
            className: et.Gb,
            children: [
                (0, i.jsx)(E.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    className: et.LS,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: ee.intl.string(ee.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eO(e) {
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
                : ee.intl.string(ee.t.uHtDcT)
            : a && null != s
              ? ee.intl.formatToPlainString(ee.t.Eo5Cnp, { username: ei(s) })
              : i.owned
                ? c
                : ee.intl.string(ee.t.uHtDcT)),
        !l)
    ) {
        let e = !a && r && null != s;
        a && d
            ? (n = ee.intl.string(ee.t.yxEAGH))
            : e && (n = ee.intl.formatToPlainString(ee.t["9GNsge"], { username: ei(s) }));
    }
    return { statusText: t, toggleText: n };
}
function eU() {
    return (0, i.jsx)(R.A, { height: 3, width: 3, "aria-hidden": "true", className: et.zN });
}
function ek(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: et.U3,
              children: t.map((e, t) => {
                  let { key: n, node: l } = e;
                  return (0, i.jsxs)("span", { className: et.Hq, children: [t > 0 && (0, i.jsx)(eU, {}), l] }, n);
              }),
          });
}
function eR(e) {
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
        g = (0, P.uJ)(t.info_label) ? void 0 : t.info_label,
        m = (0, K.HW)(t.badge_id),
        { statusText: x, toggleText: h } = eO({
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: l,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        b = [];
    m && b.push({ key: "beta", node: (0, i.jsx)(eB, {}) }),
        null != x &&
            b.push({
                key: "status",
                node: (0, i.jsxs)("span", {
                    className: et.pC,
                    children: [
                        !n && null != s && (0, i.jsx)(A.eu, { src: s, size: X._3.SIZE_16, "aria-hidden": !0 }),
                        (0, i.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: et.$L,
                            children: x,
                        }),
                    ],
                }),
            }),
        null != g &&
            b.push({
                key: "info",
                node: (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: et.$L,
                    children: g,
                }),
            });
    let _ = b.length >= 3 && null != h,
        v =
            null != h
                ? {
                      key: "toggle",
                      node: (0, i.jsx)(S.Q, {
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
        : (0, i.jsxs)("div", {
              className: et.rI,
              children: [(0, i.jsx)(ek, { segments: j }), _ && null != v && (0, i.jsx)(ek, { segments: [v] })],
          });
}
function eD(e) {
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
        { statusText: g, toggleText: m } = eO({
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
                className: et.bn,
                children: [
                    x &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != s && (0, i.jsx)(A.eu, { src: s, size: X._3.SIZE_16, "aria-hidden": !0 }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: et.CT,
                                    children: g,
                                }),
                                null != m &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        className: et.CT,
                                        "aria-hidden": !0,
                                        children: "\xb7",
                                    }),
                            ],
                        }),
                    null != m &&
                        (0, i.jsx)(S.Q, {
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
function ez(e) {
    let t,
        n,
        a,
        r,
        c,
        m,
        x,
        {
            badge: h,
            viewerBadge: _,
            onClose: v,
            isOwnProfile: N,
            isViewingOtherUser: y,
            targetUsername: w,
            displayedUserId: I,
            targetOwnsBadge: E,
            viewerOwnsBadge: A,
            isMilestone2Enabled: S,
            onToggleViewedUser: R,
            onViewOwnCatalog: V,
        } = e,
        M = Q(I, y, 32),
        $ = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(h),
        L = (0, s.bG)([k.Ay], () => k.Ay.useReducedMotion)
            ? void 0
            : ($?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        Z = $?.complex_icon_static_url ?? h.complex_icon_static_url,
        H = $?.simple_icon_url ?? h.simple_icon_url,
        Y = L ?? Z ?? H,
        J =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case ej.x.COMMON:
                        return { type: { text: ee.intl.string(ee.t.L0K5ci) }, variant: "rarity-common", icon: eN.p };
                    case ej.x.RARE:
                        return { type: { text: ee.intl.string(ee.t["sTx/5z"]) }, variant: "rarity-rare", icon: ey.A };
                    case ej.x.EPIC:
                        return { type: { text: ee.intl.string(ee.t.RD8RiN) }, variant: "rarity-epic", icon: ep.b };
                    case ej.x.MYTHIC:
                        return { type: { text: ee.intl.string(ee.t.vqc1ol) }, variant: "rarity-mythic", icon: ef.O };
                    default:
                        return null;
                }
            })($?.rarity ?? h.rarity) ?? void 0,
        q = (0, K.Om)(h.badge_id),
        W = h.badge_id === f.$.PREMIUM_TENURE,
        X = W ? ($?.name ?? $?.key) : $?.name,
        ei = W ? ee.intl.string(ee.t.Ipxkog) : h.name;
    W ? (r = null != X ? `${ei} ${X}` : ei) : null != X ? ((a = ei), (r = X)) : (r = ei);
    let el = (0, G.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== f.$.STAFF,
        ea = (h.tiers?.length ?? 0) > 0,
        es = (0, j.H5)(h),
        er = (function (e) {
            let [t, n] = l.useState(eS),
                [i, a] = l.useState(e);
            return e !== i && (a(e), n(eS())), t;
        })(h.badge_id);
    c = h.owned
        ? h.badge_id === f.$.APRIL_FOOLS_2026
            ? ee.intl.string(ee.t["5LcHT0"])
            : el && null == es
              ? er
              : (function (e) {
                    if (null == e) return;
                    let t = new Date(e);
                    if (!Number.isNaN(t.getTime()))
                        return t.toLocaleDateString(ee.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(es)
        : ea
          ? "--"
          : void 0;
    let ed = ((n = null == (t = h.tiers?.[0]?.key) || $?.key === t), ee.intl.string(n ? ee.t.WDhIz2 : ee.t.wYaDmz)),
        ec = S && null != c && h.badge_id !== f.$.STAFF,
        eo = null != J,
        eu = null;
    S && (ec || eo)
        ? (eu = (0, i.jsxs)("div", {
              className: p()(et.$S, (!ec || !eo) && et.jQ),
              children: [
                  ec && null != c && (0, i.jsx)(eC, { earnedDateText: c, label: ed }),
                  eo && (0, i.jsx)(eT, { rarityBadgeProps: J }),
              ],
          }))
        : eo && (eu = (0, i.jsx)(eT, { rarityBadgeProps: J })),
        ec ||
            (m =
                S || null == es
                    ? ee.intl.string(ee.t.sTFApF)
                    : ee.intl.formatToPlainString(ee.t["0aEh2a"], { date: new Date(es) }));
    let eg = _?.owned === !0 && (_.tiers?.length ?? 0) > 0 && null == _.next_tier,
        em = b.default.getCurrentUser()?.premiumType,
        eb = W && (em === eE.PremiumTypes.TIER_0 || em === eE.PremiumTypes.TIER_1);
    x = eg ? ee.intl.string(ee.t.jY5xAL) : eb ? ee.intl.string(ee.t.qkwSSp) : (_?.description ?? h.description);
    let e_ = l.useCallback(() => {
            null != q &&
                (eI({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: I,
                    isSociallyNavigated: y,
                }),
                v(),
                U.A.popAll(),
                q.ctaAction());
        }, [h, I, y, q, v]),
        ew =
            !y || h.is_earnable || A || h.badge_id === f.$.STAFF
                ? null
                : (0, i.jsx)(C.w, { type: "info", children: ee.intl.format(ee.t.vFekBs, { onViewBadges: V }) }),
        eA = (0, s.bG)([F.A], () => F.A.hasConsented(eh.YAq.PERSONALIZATION)),
        eB = S && (0, K.Jn)(h.badge_id) && !y && !eA;
    return (0, i.jsx)(T.F, {
        forceLevel: 2,
        children: (0, i.jsx)("div", {
            id: K.hJ,
            role: "tabpanel",
            "aria-labelledby": en(h.badge_id),
            className: et.SV,
            children: (0, i.jsxs)(B.d_, {
                className: et.C9,
                children: [
                    (0, i.jsx)("div", { className: et.Gw, children: (0, i.jsx)(d.J, { onClick: v, size: "sm" }) }),
                    null != Y &&
                        (0, i.jsx)("img", {
                            className: p()(et.y2, null != L && Y === L && et.hu),
                            src: Y,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, i.jsxs)("div", {
                        className: et.OU,
                        children: [
                            (0, i.jsxs)("div", {
                                className: et.cQ,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: et.nj,
                                        children: [
                                            (0, i.jsxs)(o.D, {
                                                variant: "display-sm",
                                                color: "text-strong",
                                                className: p()(et._r, W && et.tN),
                                                children: [
                                                    null != a &&
                                                        (0, i.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "text-sm/medium",
                                                            color: "text-subtle",
                                                            className: et.$g,
                                                            children: a,
                                                        }),
                                                    r,
                                                ],
                                            }),
                                            S &&
                                                (0, i.jsx)(eR, {
                                                    badge: h,
                                                    isOwnProfile: N,
                                                    isViewingOtherUser: y,
                                                    targetUsername: w,
                                                    viewedAvatarSrc: M,
                                                    targetOwnsBadge: E,
                                                    viewerOwnsBadge: A,
                                                    unlockedStatusText: m,
                                                    onToggleViewedUser: R,
                                                }),
                                        ],
                                    }),
                                    !S &&
                                        (0, i.jsx)(eD, {
                                            badge: h,
                                            isOwnProfile: N,
                                            isViewingOtherUser: y,
                                            targetUsername: w,
                                            viewedAvatarSrc: M,
                                            targetOwnsBadge: E,
                                            viewerOwnsBadge: A,
                                            unlockedStatusText: m,
                                            onToggleViewedUser: R,
                                        }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: et.oA,
                                children: [
                                    eB &&
                                        (0, i.jsx)(C.w, {
                                            type: "info",
                                            children: ee.intl.format(ee.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, z.openUserSettings)(D.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eu,
                                    !(0, P.uJ)(x) &&
                                        (0, i.jsxs)("div", {
                                            className: et.d9,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: et.E4,
                                                    children: [
                                                        (0, i.jsxs)("div", {
                                                            className: et.jv,
                                                            children: [
                                                                el &&
                                                                    (0, i.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: et.c$,
                                                                        children: ee.intl.string(ee.t["/Gmn3f"]),
                                                                    }),
                                                                (0, i.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: et.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != q &&
                                                            (0, i.jsx)(g.$, {
                                                                variant: eb
                                                                    ? "expressive"
                                                                    : A
                                                                      ? "secondary"
                                                                      : W
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: e_,
                                                                text: q.ctaLabel({
                                                                    owned: A,
                                                                    isViewerOnUpgradeableNitro: eb,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                (h.tiers?.length ?? 0) > 0 &&
                                                    (0, i.jsxs)("div", {
                                                        className: et.cJ,
                                                        children: [
                                                            (0, i.jsx)(O.c, {}),
                                                            S
                                                                ? (0, i.jsx)(ev, {
                                                                      badge: h,
                                                                      viewerBadge: _,
                                                                      isViewingOtherUser: y,
                                                                      targetUsername: w,
                                                                      isViewerOnUpgradeableNitro: eb,
                                                                  })
                                                                : (0, i.jsx)(ex, {
                                                                      badge: y ? h : (_ ?? h),
                                                                      isViewingOtherUser: y,
                                                                      targetUsername: w,
                                                                      isViewerOnUpgradeableNitro: eb,
                                                                  }),
                                                        ],
                                                    }),
                                                null != ew && (0, i.jsx)("div", { className: et.Z6, children: ew }),
                                            ],
                                        }),
                                    (0, P.uJ)(x) && ew,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eF = n(470739);
function eP(e) {
    let {
            transitionState: t,
            onClose: n,
            initialBadgeId: y,
            targetUserId: p,
            targetUsername: f,
            viewingCurrentUserBadges: w,
        } = e,
        I = (0, s.bG)([b.default], () => b.default.getCurrentUser()?.id),
        E = (0, v.VV)({ location: "BadgeDirectoryModal" }),
        A = null == p || p === I,
        S = !A && null != p && !0 !== w,
        C = S ? p : I,
        T = null != C ? `viewed_user:${S ? "other" : "self"}` : void 0,
        [B, O] = l.useState(y ?? null),
        U = (0, s.yK)([j.Ay], () => (null != C ? j.Ay.getBadges(C) : []), [C]),
        k = (0, s.bG)([j.Ay], () => null != C && j.Ay.hasCatalogFor(C), [C]),
        R = (0, s.bG)([j.Ay], () => j.Ay.hasCatalogFetchErrorFor(C), [C]);
    l.useEffect(() => {
        null != C && (j.Ay.hasCatalogFor(C) ? j.Ay.isCatalogStaleFor(C) && (0, _.RS)(C) : (0, _.RS)(C));
        let e = S ? I : p;
        A || null == e || j.Ay.hasCatalogFor(e) || (0, _.RS)(e);
    }, [C, A, S, I, p]),
        l.useEffect(() => {
            null != T && m.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [T] });
        }, [T]);
    let D = l.useMemo(() => {
            let { earnable: e, owned: t } = es(U);
            return S ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [U, S]),
        z = null != B && null != C ? j.Ay.getBadgeById(B, C) : void 0,
        F = null != D && null != C ? j.Ay.getBadgeById(D, C) : void 0,
        P = z ?? F,
        G = !k && !R,
        V = !k && R,
        M = E && !S;
    l.useEffect(() => {
        V && null != T && m.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [T] });
    }, [V, T]);
    let $ = (0, s.bG)([j.Ay], () => null != p && null != P && (j.Ay.getBadgeById(P.badge_id, p)?.owned ?? !1), [P, p]),
        L = (0, s.bG)([j.Ay], () => (null != I && null != P ? j.Ay.getBadgeById(P.badge_id, I) : void 0), [P, I]),
        Z = L?.owned ?? !1,
        H = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eF._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    n();
                });
            },
            [n],
        ),
        Y = l.useCallback(() => {
            null != p &&
                null != P &&
                (S
                    ? H({
                          initialBadgeId: P.badge_id,
                          targetUserId: p,
                          targetUsername: f,
                          viewingCurrentUserBadges: !0,
                      })
                    : H({ initialBadgeId: P.badge_id, targetUserId: p, targetUsername: f }));
        }, [S, P, H, p, f]),
        J = l.useCallback(() => {
            null != I &&
                null != p &&
                (eI({ actionName: "view_your_badges_pressed", badge: P, displayedUserId: C, isSociallyNavigated: S }),
                H({ targetUserId: p, targetUsername: f, viewingCurrentUserBadges: !0 }));
        }, [I, C, S, P, H, p, f]),
        q = l.useCallback(() => {
            null != C && (0, _.RS)(C, { isRetry: !0 });
        }, [C]),
        W = l.useCallback(() => {
            eI({ actionName: "badge_directory_closed", badge: P, displayedUserId: C, isSociallyNavigated: S }), n();
        }, [C, S, n, P]),
        Q = l.useCallback(() => {
            null != I &&
                (eI({
                    actionName: "customize_your_badges_pressed",
                    badge: P,
                    displayedUserId: C,
                    isSociallyNavigated: S,
                }),
                W(),
                N.A.setState({ isOpen: !0 }),
                (0, h.kN)(I) || (0, x.openUserProfileModal)({ userId: I }));
        }, [I, C, W, S, P]),
        X = P?.badge_id;
    return (
        l.useEffect(() => {
            null != X && M && (0, K.Ce)(X) && (0, _.PV)(X);
        }, [X, M]),
        l.useEffect(() => {
            null != P &&
                eI({ actionName: "badge_detail_viewed", badge: P, displayedUserId: C, isSociallyNavigated: S });
        }, [X, C, S]),
        (0, i.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": ee.intl.string(ee.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: et.CR,
            children: (0, i.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: et.jE,
                children: [
                    (G || V || null == P) &&
                        (0, i.jsx)("div", { className: et.b, children: (0, i.jsx)(d.J, { onClick: W, size: "sm" }) }),
                    G
                        ? (0, i.jsx)("div", { className: et.Lq, children: (0, i.jsx)(c.y, {}) })
                        : V
                          ? (0, i.jsxs)("div", {
                                className: et.IU,
                                children: [
                                    (0, i.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: ee.intl.string(ee.t.iufib1),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: et.TQ,
                                        children: ee.intl.string(ee.t.eAn6z2),
                                    }),
                                    (0, i.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: q,
                                        text: ee.intl.string(ee.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(er, {
                                        selectedBadgeId: P?.badge_id ?? null,
                                        onSelectBadge: O,
                                        displayedUserId: C,
                                        isViewingOtherUser: S,
                                        targetUsername: f,
                                        onViewOwnCatalog: J,
                                        onCustomizeBadges: Q,
                                        showBadgeIndicators: M,
                                    }),
                                    null != P &&
                                        (0, i.jsx)(ez, {
                                            badge: P,
                                            viewerBadge: L,
                                            onClose: W,
                                            isOwnProfile: A,
                                            isViewingOtherUser: S,
                                            targetUsername: f,
                                            displayedUserId: C,
                                            targetOwnsBadge: $,
                                            viewerOwnsBadge: Z,
                                            isMilestone2Enabled: E,
                                            onToggleViewedUser: Y,
                                            onViewOwnCatalog: J,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
