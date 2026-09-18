n.d(t, { default: () => eQ });
var l = n(477900),
    i = n(582128),
    a = n(731738),
    s = n(17928),
    r = n(935462),
    d = n(815021),
    c = n(289873),
    o = n(297264),
    u = n(834730),
    m = n(821609),
    g = n(807393),
    x = n(402860),
    h = n(403777),
    _ = n(287809),
    b = n(682618),
    v = n(982240);
let j = (0, n(945810).mj)({
    name: "2026-10-badge-directory-updates",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = n(988341),
    p = n(248284);
n(321073);
var y = n(503698),
    f = n.n(y),
    A = n(70283),
    w = n(508770),
    I = n(866665),
    E = n(885574),
    S = n(97808),
    T = n(123292),
    C = n(683071),
    B = n(707554),
    O = n(364522),
    k = n(404778),
    U = n(700058),
    R = n(775602),
    F = n(640708),
    $ = n(780964),
    z = n(766075),
    D = n(153488),
    G = n(240248),
    M = n(609782),
    P = n(837381),
    L = n(887129),
    V = n(741918),
    H = n(939249),
    Z = n(643056),
    J = n(228366);
let Y = { seenBadgeIndicatorIds: new Set() };
class q extends s.Ay.PersistedStore {
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
let K = new q(J.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: t } = e;
        if (Y.seenBadgeIndicatorIds.has(t)) return !1;
        Y = { ...Y, seenBadgeIndicatorIds: new Set([...Y.seenBadgeIndicatorIds, t]) };
    },
});
var Q = n(92111),
    W = n(486020);
function X(e, t, n) {
    let l = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, W.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var ee = n(778712),
    et = n(375708),
    en = n(177861);
function el(e) {
    return `badge-tab-${e}`;
}
function ei(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function ea(e) {
    let { badge: t, isSelected: n, onSelect: a, itemId: s, showBadgeIndicator: r } = e,
        d = (0, P.rm)(s),
        c = t.owned ? t.current_tier : t.next_tier,
        o =
            null != c
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === c;
                  })
                : void 0,
        u = t.badge_id === A.$.PREMIUM_TENURE ? (o?.name ?? o?.key) : o?.name,
        m = null != u ? `${t.name}, ${u}` : t.name,
        g = r ? `${m}, ${et.intl.string(et.t.y2b7CA)}` : m,
        x = i.useRef(null);
    return (0, l.jsxs)(H.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: el(t.badge_id),
        "aria-label": g,
        "aria-selected": n,
        "aria-controls": n ? Q.hJ : void 0,
        className: f()(en.oL, n && en.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), a());
        },
        children: [
            r && (0, l.jsx)("span", { "aria-hidden": !0, className: en.Dn }),
            null != t.simple_icon_url &&
                (0, l.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: en.pW,
                }),
        ],
    });
}
function es(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, L.Ay)({
            id: n,
            isEnabled: !0,
            orientation: V.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: en.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(P.hD, {
                navigator: d,
                children: (0, l.jsx)(P.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: en.yq,
                            children: i.map((e, t) => {
                                let n = r.has(e.badge_id);
                                return (0, l.jsx)(
                                    ea,
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
function er(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
            onCustomizeBadges: g,
            showBadgeIndicators: x,
        } = e,
        h = (0, s.yK)([v.Ay], () => (null != a ? v.Ay.getBadges(a) : []), [a]),
        { earnable: _, owned: b } = i.useMemo(() => (0, N.in)(h), [h]),
        { badgeIndicatorIds: j } = (function (e) {
            let { badges: t, enabled: n } = e,
                l = (0, s.bG)([K], () => K.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: i.useMemo(
                    () =>
                        n
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return (0, Q.Ce)(t) && !l.has(t);
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
        })({ badges: i.useMemo(() => [...b, ..._], [b, _]), enabled: x }),
        p = X(a, r, 48),
        y = (0, Z.d)({ location: "BadgeDirectoryPanel" }),
        f = null != d ? ei(d) : null,
        A = null != d && f !== d,
        w =
            null != f && A && null != p
                ? (0, l.jsxs)("span", {
                      className: en._p,
                      children: [(0, l.jsx)(S.eu, { src: p, size: ee._3.SIZE_24, "aria-hidden": !0 }), f],
                  })
                : f,
        I = r && null != w ? et.intl.format(et.t.EIcwoe, { username: w }) : et.intl.string(et.t.UqnlQF),
        E = r && null != d ? et.intl.string(et.t["75s2Rq"]) : et.intl.string(et.t["62xU4E"]),
        T = r && null != d ? et.intl.formatToPlainString(et.t.BCjSZy, { username: d }) : et.intl.string(et.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: en.ws,
        children: (0, l.jsxs)(B.F, {
            component: (0, l.jsxs)("div", {
                className: en.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: en.kc,
                        children: [
                            !A && null != p && (0, l.jsx)(S.eu, { src: p, size: ee._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: I }),
                        ],
                    }),
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: E }),
                ],
            }),
            children: [
                (0, l.jsxs)(O.Ip, {
                    className: en.hG,
                    children: [
                        b.length > 0 &&
                            (0, l.jsx)(es, {
                                label: { type: "aria", text: T },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: j,
                            }),
                        !r &&
                            _.length > 0 &&
                            (0, l.jsx)(es, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: et.intl.string(et.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: _,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: j,
                            }),
                    ],
                }),
                (r || y) &&
                    (0, l.jsx)("div", {
                        className: en.HO,
                        children: r
                            ? (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: et.intl.string(et.t.msyp90),
                              })
                            : (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: g,
                                  text: et.intl.string(et.t["6CLLyH"]),
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
    em = n(140735),
    eg = n(836825);
function ex(e) {
    let { badge: t, isViewingOtherUser: n, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = i.useId(),
        d = n && null != a;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            d &&
                (0, l.jsx)("div", {
                    className: eg.u4,
                    children: (0, l.jsx)(u.E, {
                        id: r,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: et.intl.formatToPlainString(et.t.KyTwIh, { username: a }),
                    }),
                }),
            (0, l.jsx)("div", {
                className: eg.SV,
                role: "list",
                "aria-label": d ? void 0 : t.name,
                "aria-labelledby": d ? r : void 0,
                children: t.tiers.map((e) => {
                    let i = e.owned,
                        a = !i && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (function (e) {
                            let { tier: t, isUnlocked: n, isViewingOtherUser: l, isViewerOnUpgradeableNitro: i } = e;
                            return n || !i || l ? (t.milestone_text ?? "") : et.intl.string(et.t.VPu695);
                        })({ tier: e, isUnlocked: i, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: f()(eg.zh, a && eg.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: eg.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: i ? "text-default" : "text-muted",
                                    className: eg.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsxs)("span", {
                                                className: eg.nU,
                                                children: [
                                                    !i &&
                                                        (0, l.jsx)(eu.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eg.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== c && (0, l.jsx)("span", { className: eg.nU, children: c }),
                                    ],
                                }),
                                (0, l.jsx)(em.A, { children: et.intl.string(i ? et.t.sTFApF : et.t.uHtDcT) }),
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
    e_ = n(600409);
let eb = new Set([A.$.GAME_TIME, A.$.GAME_VARIETY, A.$.STREAMING]);
function ev(e) {
    let { badge: t, viewerBadge: n, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [c, o] = i.useState(!1),
        [m, g] = i.useState(t.badge_id),
        x = i.useId(),
        h = i.useId(),
        _ = i.useRef(null),
        b = i.useRef(null);
    t.badge_id !== m && (g(t.badge_id), o(!1));
    let v = i.useCallback(() => {
            let e = _.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        j = i.useCallback(
            (e) => {
                null != e.target && c && v();
            },
            [c, v],
        );
    (0, eo.g)(b, j, [c], { enabled: c });
    let N = n ?? t,
        p = (0, s.bG)([D.A], () => D.A.hasConsented(eh.YAq.PERSONALIZATION)),
        y = !a && eb.has(t.badge_id) && !p,
        A = a ? void 0 : N.next_tier,
        w = a ? void 0 : N.current_tier,
        I = null != A ? N.tiers.find((e) => e.key === A) : void 0,
        E = null != w ? N.tiers.find((e) => e.key === w) : void 0,
        S = a ? void 0 : N.progress?.[0],
        T = S?.threshold ?? I?.requirements[0]?.threshold ?? null,
        C = !a && N.owned && null != I,
        B = a || (0, G.uJ)(N.leveling_instructions) || C ? void 0 : N.leveling_instructions,
        O = I?.name != null ? et.intl.formatToPlainString(et.t["Jn+COZ"], { tier_name: I.name }) : void 0,
        U = c ? et.intl.string(et.t["065Hig"]) : et.intl.string(et.t.MylOvg),
        R = a ? t : N,
        F = E?.complex_icon_static_url ?? E?.simple_icon_url,
        $ = I?.complex_icon_static_url ?? I?.simple_icon_url,
        z = !(0, G.uJ)(S?.progress_helper_text),
        M = null != O ? { "aria-labelledby": h } : { "aria-label": et.intl.string(et.t.Uwhb1l) };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != B && (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: B }),
            C &&
                !y &&
                (0, l.jsxs)("div", {
                    className: e_.ES,
                    children: [
                        null != F &&
                            (0, l.jsx)("img", { className: e_.Tw, src: F, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, l.jsxs)("div", {
                            className: e_.Bd,
                            children: [
                                null != O && (0, l.jsx)(u.E, { id: h, variant: "text-sm/medium", children: O }),
                                null != T
                                    ? (0, l.jsx)(ed.z, {
                                          value: S?.current ?? 0,
                                          minValue: S?.floor ?? 0,
                                          maxValue: T,
                                          size: "md",
                                          className: e_.hr,
                                          ...M,
                                      })
                                    : null != S &&
                                      (0, l.jsx)(ed.z, { isIndeterminate: !0, size: "md", className: e_.hr, ...M }),
                                z &&
                                    (0, l.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: S?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != $ &&
                            (0, l.jsx)("img", { className: e_.Tw, src: $, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            C && !y
                ? (0, l.jsxs)("div", {
                      className: e_.JC,
                      children: [
                          (0, l.jsx)("div", {
                              ref: b,
                              className: f()(e_.ne, c && e_.GB),
                              id: x,
                              children: (0, l.jsx)("div", {
                                  className: e_.zL,
                                  inert: !c,
                                  children: (0, l.jsxs)("div", {
                                      className: e_.GA,
                                      children: [
                                          (0, l.jsx)(k.c, { className: e_.yF }),
                                          (0, l.jsx)(ex, {
                                              badge: R,
                                              isViewingOtherUser: a,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, l.jsxs)(H.D, {
                              innerRef: _,
                              className: e_.tw,
                              "aria-expanded": c,
                              "aria-controls": x,
                              onClick: () => o(!c),
                              children: [
                                  (0, l.jsx)(u.E, {
                                      className: e_.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: U,
                                  }),
                                  (0, l.jsx)(ec.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: f()(e_.ai, c && e_.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsx)(ex, { badge: R, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var ej = n(536001),
    eN = n(260981),
    ep = n(540418),
    ey = n(907085),
    ef = n(179820);
function eA(e) {
    if (null == e) return null;
    switch (e) {
        case ej.x.COMMON:
            return { type: { text: et.intl.string(et.t.L0K5ci) }, variant: "rarity-common", icon: eN.p };
        case ej.x.RARE:
            return { type: { text: et.intl.string(et.t["sTx/5z"]) }, variant: "rarity-rare", icon: ep.A };
        case ej.x.EPIC:
            return { type: { text: et.intl.string(et.t.RD8RiN) }, variant: "rarity-epic", icon: ey.b };
        case ej.x.MYTHIC:
            return { type: { text: et.intl.string(et.t.vqc1ol) }, variant: "rarity-mythic", icon: ef.O };
        default:
            return null;
    }
}
var ew = n(174459);
function eI(e) {
    let { actionName: t, badge: n, displayedUserId: l, isSociallyNavigated: i } = e,
        a = _.default.getCurrentUser()?.id,
        s = null != n && null != a ? v.Ay.getBadgeById(n.badge_id, a) : void 0,
        r = null != n && null != a ? v.Ay.getRemainingToNextTier(n.badge_id, a) : void 0,
        d = null != l ? v.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    ew.default.track(eh.HAw.BADGE_DIRECTORY_ACTION, {
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
var eE = n(202541);
let eS = [et.t["6zFA/T"], et.t.wzZHKl, et.t["+ED/nf"]];
function eT() {
    let e = Math.floor(Math.random() * eS.length);
    return et.intl.string(eS[e]);
}
function eC(e) {
    let { earnedDateText: t, label: n } = e;
    return (0, l.jsxs)("div", {
        className: f()(en.AX, en.aS),
        children: [
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: en.NM, children: t }),
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: en.MZ, children: n }),
        ],
    });
}
function eB(e) {
    let { rarityBadgeProps: t } = e;
    return (0, l.jsxs)("div", {
        className: f()(en.AX, en.sn),
        children: [
            (0, l.jsx)(w.E, { ...t }),
            (0, l.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: et.intl.string(et.t["phYZe+"]),
            }),
        ],
    });
}
function eO() {
    return (0, l.jsx)(I.m, {
        text: et.intl.string(et.t.goKu4e),
        children: (0, l.jsxs)("span", {
            className: en.Gb,
            children: [
                (0, l.jsx)(E.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    className: en.LS,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: et.intl.string(et.t.oW0eUd),
                }),
            ],
        }),
    });
}
function ek() {
    return (0, l.jsx)(F.A, { height: 3, width: 3, "aria-hidden": "true", className: en.zN });
}
function eU(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: en.U3,
              children: t.map((e, t) => {
                  let { key: n, node: i } = e;
                  return (0, l.jsxs)("span", { className: en.Hq, children: [t > 0 && (0, l.jsx)(ek, {}), i] }, n);
              }),
          });
}
function eR(e) {
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
        m = (0, G.uJ)(t.info_label) ? void 0 : t.info_label,
        g = (0, Q.HW)(t.badge_id),
        { statusText: x, toggleText: h } = (function (e) {
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
                        : et.intl.string(et.t.uHtDcT)
                    : a && null != s
                      ? et.intl.formatToPlainString(et.t.Eo5Cnp, { username: ei(s) })
                      : l.owned
                        ? c
                        : et.intl.string(et.t.uHtDcT)),
                !i)
            ) {
                let e = !a && r && null != s;
                a && d
                    ? (n = et.intl.string(et.t.yxEAGH))
                    : e && (n = et.intl.formatToPlainString(et.t["9GNsge"], { username: ei(s) }));
            }
            return { statusText: t, toggleText: n };
        })({
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: i,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    (g && _.push({ key: "beta", node: (0, l.jsx)(eO, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, l.jsxs)("span", {
                    className: en.pC,
                    children: [
                        !n && null != s && (0, l.jsx)(S.eu, { src: s, size: ee._3.SIZE_16, "aria-hidden": !0 }),
                        (0, l.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: en.$L,
                            children: x,
                        }),
                    ],
                }),
            }),
        null != m &&
            _.push({
                key: "info",
                node: (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: en.$L,
                    children: m,
                }),
            }));
    let b = _.length >= 3 && null != h,
        v =
            null != h
                ? {
                      key: "toggle",
                      node: (0, l.jsx)(T.Q, {
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
        : (0, l.jsxs)("div", {
              className: en.rI,
              children: [(0, l.jsx)(eU, { segments: j }), b && null != v && (0, l.jsx)(eU, { segments: [v] })],
          });
}
function eF(e) {
    let t,
        n,
        a,
        r,
        c,
        g,
        x,
        {
            badge: h,
            viewerBadge: b,
            onClose: j,
            isOwnProfile: N,
            isViewingOtherUser: p,
            targetUsername: y,
            displayedUserId: w,
            targetOwnsBadge: I,
            viewerOwnsBadge: E,
            onToggleViewedUser: S,
            onViewOwnCatalog: T,
        } = e,
        F = X(w, p, 32),
        P = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(h),
        L = (0, s.bG)([R.Ay], () => R.Ay.useReducedMotion)
            ? void 0
            : (P?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        V = P?.complex_icon_static_url ?? h.complex_icon_static_url,
        H = P?.simple_icon_url ?? h.simple_icon_url,
        Z = L ?? V ?? H,
        J = eA(P?.rarity ?? h.rarity) ?? void 0,
        Y = (0, Q.Om)(h.badge_id),
        q = h.badge_id === A.$.PREMIUM_TENURE,
        K = q ? (P?.name ?? P?.key) : P?.name,
        W = q ? et.intl.string(et.t.Ipxkog) : h.name;
    q ? (r = null != K ? `${W} ${K}` : W) : null != K ? ((a = W), (r = K)) : (r = W);
    let ee = (0, M.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== A.$.STAFF,
        ei = (h.tiers?.length ?? 0) > 0,
        ea = (0, v.H5)(h),
        es = (function (e) {
            let [t, n] = i.useState(eT),
                [l, a] = i.useState(e);
            return (e !== l && (a(e), n(eT())), t);
        })(h.badge_id);
    c = h.owned
        ? h.badge_id === A.$.APRIL_FOOLS_2026
            ? et.intl.string(et.t["5LcHT0"])
            : ee && null == ea
              ? es
              : (function (e) {
                    if (null == e) return;
                    let t = new Date(e);
                    if (!Number.isNaN(t.getTime()))
                        return t.toLocaleDateString(et.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(ea)
        : ei
          ? "--"
          : void 0;
    let er = ((n = null == (t = h.tiers?.[0]?.key) || P?.key === t), et.intl.string(n ? et.t.WDhIz2 : et.t.wYaDmz)),
        ed = null != c && h.badge_id !== A.$.STAFF,
        ec = null != J,
        eo = null;
    ((ed || ec) &&
        (eo = (0, l.jsxs)("div", {
            className: f()(en.$S, (!ed || !ec) && en.jQ),
            children: [
                ed && null != c && (0, l.jsx)(eC, { earnedDateText: c, label: er }),
                ec && (0, l.jsx)(eB, { rarityBadgeProps: J }),
            ],
        })),
        ed || (g = et.intl.string(et.t.sTFApF)));
    let eu = _.default.getCurrentUser()?.premiumType,
        em = q && (eu === eE.PremiumTypes.TIER_0 || eu === eE.PremiumTypes.TIER_1);
    x =
        !em && b?.owned === !0 && (b.tiers?.length ?? 0) > 0 && null == b.next_tier
            ? et.intl.string(et.t.jY5xAL)
            : em
              ? et.intl.string(et.t.qkwSSp)
              : (b?.description ?? h.description);
    let eg = i.useCallback(() => {
            null != Y &&
                (eI({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: w,
                    isSociallyNavigated: p,
                }),
                j(),
                U.A.popAll(),
                Y.ctaAction());
        }, [h, w, p, Y, j]),
        ex =
            !p || h.is_earnable || E || h.badge_id === A.$.STAFF
                ? null
                : (0, l.jsx)(C.w, { type: "info", children: et.intl.format(et.t.vFekBs, { onViewBadges: T }) }),
        e_ = (0, s.bG)([D.A], () => D.A.hasConsented(eh.YAq.PERSONALIZATION)),
        eb = (0, Q.Jn)(h.badge_id) && !p && !e_;
    return (0, l.jsx)(B.F, {
        forceLevel: 2,
        children: (0, l.jsx)("div", {
            id: Q.hJ,
            role: "tabpanel",
            "aria-labelledby": el(h.badge_id),
            className: en.SV,
            children: (0, l.jsxs)(O.d_, {
                className: en.C9,
                children: [
                    (0, l.jsx)("div", { className: en.Gw, children: (0, l.jsx)(d.J, { onClick: j, size: "sm" }) }),
                    null != Z &&
                        (0, l.jsx)("img", {
                            className: f()(en.y2, null != L && Z === L && en.hu),
                            src: Z,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, l.jsxs)("div", {
                        className: en.OU,
                        children: [
                            (0, l.jsx)("div", {
                                className: en.cQ,
                                children: (0, l.jsxs)("div", {
                                    className: en.nj,
                                    children: [
                                        (0, l.jsxs)(o.D, {
                                            variant: q ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: f()(en._r, q && en.ve),
                                            children: [
                                                null != a &&
                                                    (0, l.jsx)(u.E, {
                                                        tag: "span",
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        className: en.$g,
                                                        children: a,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, l.jsx)(eR, {
                                            badge: h,
                                            isOwnProfile: N,
                                            isViewingOtherUser: p,
                                            targetUsername: y,
                                            viewedAvatarSrc: F,
                                            targetOwnsBadge: I,
                                            viewerOwnsBadge: E,
                                            unlockedStatusText: g,
                                            onToggleViewedUser: S,
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: en.oA,
                                children: [
                                    eb &&
                                        (0, l.jsx)(C.w, {
                                            type: "info",
                                            children: et.intl.format(et.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, z.openUserSettings)($.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eo,
                                    !(0, G.uJ)(x) &&
                                        (0, l.jsxs)("div", {
                                            className: en.d9,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: en.E4,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: en.jv,
                                                            children: [
                                                                ee &&
                                                                    (0, l.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: en.c$,
                                                                        children: et.intl.string(et.t["/Gmn3f"]),
                                                                    }),
                                                                (0, l.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: en.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != Y &&
                                                            (0, l.jsx)(m.$, {
                                                                variant: em
                                                                    ? "expressive"
                                                                    : E
                                                                      ? "secondary"
                                                                      : q
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: eg,
                                                                text: Y.ctaLabel({
                                                                    owned: E,
                                                                    isViewerOnUpgradeableNitro: em,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                ei &&
                                                    (0, l.jsxs)("div", {
                                                        className: en.cJ,
                                                        children: [
                                                            (0, l.jsx)(k.c, {}),
                                                            (0, l.jsx)(ev, {
                                                                badge: h,
                                                                viewerBadge: b,
                                                                isViewingOtherUser: p,
                                                                targetUsername: y,
                                                                isViewerOnUpgradeableNitro: em,
                                                            }),
                                                        ],
                                                    }),
                                                null != ex && (0, l.jsx)("div", { className: en.Z6, children: ex }),
                                            ],
                                        }),
                                    (0, G.uJ)(x) && ex,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var e$ = n(470739),
    ez = n(229667);
let eD = new Set([A.$.GAME_TIME, A.$.GAME_VARIETY, A.$.STREAMING]);
function eG(e, t) {
    return null != t ? e.tiers.find((e) => e.key === t) : void 0;
}
function eM(e) {
    let { badge: t, viewerBadge: n } = e,
        a = i.useId(),
        s = n ?? t,
        r = eG(s, s.current_tier),
        d = eG(s, s.next_tier),
        c = s.progress?.[0],
        o = c?.threshold ?? d?.requirements[0]?.threshold ?? null,
        m = r?.complex_icon_static_url ?? r?.simple_icon_url,
        g = d?.complex_icon_static_url ?? d?.simple_icon_url,
        x = (0, G.uJ)(c?.progress_helper_text) ? void 0 : c?.progress_helper_text,
        h = null != x ? { "aria-labelledby": a } : { "aria-label": et.intl.string(et.t.Uwhb1l) };
    return (0, l.jsxs)("div", {
        className: ez.NE,
        children: [
            (0, l.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: et.intl.string(et.t["2m/g2c"]),
            }),
            (0, l.jsxs)("div", {
                className: ez.ES,
                children: [
                    null != m &&
                        (0, l.jsx)("img", { className: ez.Tw, src: m, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, l.jsxs)("div", {
                        className: ez.Bd,
                        children: [
                            null != x && (0, l.jsx)(u.E, { id: a, variant: "text-sm/medium", children: x }),
                            null != o
                                ? (0, l.jsx)(ed.z, {
                                      value: c?.current ?? 0,
                                      minValue: c?.floor ?? 0,
                                      maxValue: o,
                                      size: "md",
                                      className: ez.hr,
                                      ...h,
                                  })
                                : null != c &&
                                  (0, l.jsx)(ed.z, { isIndeterminate: !0, size: "md", className: ez.hr, ...h }),
                        ],
                    }),
                    null != g &&
                        (0, l.jsx)("img", { className: ez.Tw, src: g, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eP = n(149285);
function eL(e) {
    let { badge: t, isViewingOtherUser: n, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = i.useId(),
        d = n && null != a;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(k.c, {}),
                        (0, l.jsx)("div", {
                            className: eP.u4,
                            children: (0, l.jsx)(u.E, {
                                id: r,
                                variant: "text-sm/medium",
                                children: et.intl.formatToPlainString(et.t.KyTwIh, { username: a }),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: eP.SV,
                role: "list",
                "aria-label": d ? void 0 : t.name,
                "aria-labelledby": d ? r : void 0,
                children: t.tiers.map((e) => {
                    let i = e.owned,
                        a = !i && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (function (e) {
                            let { tier: t, isUnlocked: n, isViewingOtherUser: l, isViewerOnUpgradeableNitro: i } = e;
                            return n || !i || l ? (t.milestone_text ?? "") : et.intl.string(et.t.VPu695);
                        })({ tier: e, isUnlocked: i, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: f()(eP.zh, a && eP.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: eP.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)("div", {
                                    className: eP.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsx)(u.E, {
                                                variant: "text-xs/semibold",
                                                color: i ? "text-default" : "text-muted",
                                                className: eP.nU,
                                                children: d,
                                            }),
                                        "" !== c &&
                                            (0, l.jsxs)(u.E, {
                                                variant: "text-xs/normal",
                                                color: i ? "text-subtle" : "text-muted",
                                                className: eP.nU,
                                                children: [
                                                    !i &&
                                                        (0, l.jsx)(eu.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eP.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    c,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(em.A, { children: et.intl.string(i ? et.t.sTFApF : et.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eV = n(148204);
let eH = [et.t["6zFA/T"], et.t.wzZHKl, et.t["+ED/nf"]];
function eZ() {
    let e = Math.floor(Math.random() * eH.length);
    return et.intl.string(eH[e]);
}
function eJ() {
    return (0, l.jsx)(F.A, { height: 3, width: 3, "aria-hidden": "true", className: eV.zN });
}
function eY(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: eV.U3,
              children: t.map((e, t) => {
                  let { key: n, node: i } = e;
                  return (0, l.jsxs)("span", { className: eV.Hq, children: [t > 0 && (0, l.jsx)(eJ, {}), i] }, n);
              }),
          });
}
function eq(e) {
    let t,
        n,
        a,
        r,
        {
            badge: c,
            viewerBadge: g,
            onClose: x,
            isViewingOtherUser: h,
            targetUsername: b,
            displayedUserId: j,
            viewerOwnsBadge: N,
            onViewOwnCatalog: p,
        } = e,
        y = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(c),
        E = (0, s.bG)([R.Ay], () => R.Ay.useReducedMotion)
            ? void 0
            : (y?.complex_icon_animated_url ?? c.complex_icon_animated_url),
        S = y?.complex_icon_static_url ?? c.complex_icon_static_url,
        T = y?.simple_icon_url ?? c.simple_icon_url,
        F = E ?? S ?? T,
        P = y?.rarity ?? c.rarity,
        L = eA(P) ?? void 0,
        V = (0, Q.Om)(c.badge_id),
        H = c.badge_id === A.$.PREMIUM_TENURE,
        Z = H ? (y?.name ?? y?.key) : y?.name,
        J = H ? et.intl.string(et.t.Ipxkog) : c.name;
    H ? (n = null != Z ? `${J} ${Z}` : J) : null != Z && c.owned ? ((t = J), (n = Z)) : (n = J);
    let Y = (0, M.ie)(c.badge_id) && !c.is_earnable && c.badge_id !== A.$.STAFF,
        q = (c.tiers?.length ?? 0) > 0,
        K = (0, v.H5)(c),
        W = (function (e) {
            let [t, n] = i.useState(eZ),
                [l, a] = i.useState(e);
            return (e !== l && (a(e), n(eZ())), t);
        })(c.badge_id);
    a = c.owned
        ? c.badge_id === A.$.APRIL_FOOLS_2026
            ? et.intl.string(et.t["5LcHT0"])
            : Y && null == K
              ? W
              : null != K && c.badge_id !== A.$.STAFF
                ? et.intl.formatToPlainString(et.t.XmaiRQ, { date: new Date(K) })
                : et.intl.string(et.t.sTFApF)
        : et.intl.string(et.t.uHtDcT);
    let X = (0, G.uJ)(c.info_label) ? void 0 : c.info_label,
        ee = c.owned && P !== ej.x.COMMON && null != L,
        en = [];
    (null != X &&
        en.push({
            key: "info",
            node: (0, l.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: "text-subtle",
                className: eV.$L,
                children: X,
            }),
        }),
        en.push({
            key: "status",
            node: (0, l.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: "text-subtle",
                className: eV.$L,
                children: a,
            }),
        }),
        ee && en.push({ key: "rarity", node: (0, l.jsx)(w.E, { ...L }) }));
    let ei = _.default.getCurrentUser()?.premiumType,
        ea = H && (ei === eE.PremiumTypes.TIER_0 || ei === eE.PremiumTypes.TIER_1);
    r =
        !ea && g?.owned === !0 && (g.tiers?.length ?? 0) > 0 && null == g.next_tier
            ? et.intl.string(et.t.jY5xAL)
            : ea
              ? et.intl.string(et.t.qkwSSp)
              : (g?.description ?? c.description);
    let es = i.useCallback(() => {
            null != V &&
                (eI({
                    actionName: "primary_badge_action_clicked",
                    badge: c,
                    displayedUserId: j,
                    isSociallyNavigated: h,
                }),
                x(),
                U.A.popAll(),
                V.ctaAction());
        }, [c, j, h, V, x]),
        er =
            !h || c.is_earnable || N || c.badge_id === A.$.STAFF
                ? null
                : (0, l.jsx)(C.w, { type: "info", children: et.intl.format(et.t.vFekBs, { onViewBadges: p }) }),
        ed = (0, s.bG)([D.A], () => D.A.hasConsented(eh.YAq.PERSONALIZATION)),
        ec = (0, Q.Jn)(c.badge_id) && !h && !ed,
        eo = (function (e) {
            let { badge: t, viewerBadge: n, isViewingOtherUser: l } = e,
                i = (0, s.bG)([D.A], () => D.A.hasConsented(eh.YAq.PERSONALIZATION)),
                a = n ?? t,
                r = null != eG(a, a.next_tier),
                d = eD.has(t.badge_id) && !i;
            return !l && a.owned && r && !d;
        })({ badge: c, viewerBadge: g, isViewingOtherUser: h }),
        eu = !(0, G.uJ)(r),
        em = eo || eu || q,
        eg = h ? c : (g ?? c);
    return (0, l.jsx)(B.F, {
        forceLevel: 2,
        children: (0, l.jsx)("div", {
            id: Q.hJ,
            role: "tabpanel",
            "aria-labelledby": el(c.badge_id),
            className: eV.SV,
            children: (0, l.jsxs)(O.d_, {
                className: eV.C9,
                children: [
                    (0, l.jsxs)("div", {
                        className: eV.Rm,
                        children: [
                            (0, Q.HW)(c.badge_id) &&
                                (0, l.jsx)(I.m, {
                                    text: et.intl.string(et.t.goKu4e),
                                    children: (0, l.jsx)("span", {
                                        className: eV.mC,
                                        children: (0, l.jsx)(w.E, { type: "beta" }),
                                    }),
                                }),
                            (0, l.jsx)("div", {
                                className: eV.Gw,
                                children: (0, l.jsx)(d.J, { onClick: x, size: "sm" }),
                            }),
                        ],
                    }),
                    null != F &&
                        (0, l.jsx)("img", {
                            className: f()(eV.y2, null != E && F === E && eV.hu),
                            src: F,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, l.jsxs)("div", {
                        className: eV.OU,
                        children: [
                            (0, l.jsx)("div", {
                                className: eV.cQ,
                                children: (0, l.jsxs)("div", {
                                    className: eV.nj,
                                    children: [
                                        (0, l.jsxs)(o.D, {
                                            variant: H ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: f()(eV._r, H && eV.ve),
                                            children: [
                                                null != t &&
                                                    (0, l.jsx)(u.E, {
                                                        tag: "span",
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        className: eV.$g,
                                                        children: t,
                                                    }),
                                                n,
                                            ],
                                        }),
                                        (0, l.jsx)(eY, { segments: en }),
                                    ],
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: eV.oA,
                                children: [
                                    ec &&
                                        (0, l.jsx)(C.w, {
                                            type: "info",
                                            children: et.intl.format(et.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, z.openUserSettings)($.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    em &&
                                        (0, l.jsxs)("div", {
                                            className: eV.d9,
                                            children: [
                                                eo &&
                                                    (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            (0, l.jsx)(eM, {
                                                                badge: c,
                                                                viewerBadge: g,
                                                                isViewingOtherUser: h,
                                                            }),
                                                            (0, l.jsx)(k.c, {}),
                                                        ],
                                                    }),
                                                eu &&
                                                    (0, l.jsxs)("div", {
                                                        className: f()(eV.E4, !q && eV.H),
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: eV.jv,
                                                                children: [
                                                                    Y &&
                                                                        (0, l.jsx)(u.E, {
                                                                            variant: "text-xs/medium",
                                                                            color: "text-subtle",
                                                                            className: eV.c$,
                                                                            children: et.intl.string(et.t["/Gmn3f"]),
                                                                        }),
                                                                    (0, l.jsx)(u.E, {
                                                                        variant: "text-sm/medium",
                                                                        color: "text-default",
                                                                        className: eV.ij,
                                                                        children: r,
                                                                    }),
                                                                ],
                                                            }),
                                                            null != V &&
                                                                (0, l.jsx)(m.$, {
                                                                    variant: ea
                                                                        ? "expressive"
                                                                        : N
                                                                          ? "secondary"
                                                                          : H
                                                                            ? "expressive"
                                                                            : "primary",
                                                                    size: "sm",
                                                                    onClick: es,
                                                                    text: V.ctaLabel({
                                                                        owned: N,
                                                                        isViewerOnUpgradeableNitro: ea,
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                q &&
                                                    (0, l.jsx)("div", {
                                                        className: eV.cJ,
                                                        children: (0, l.jsx)(eL, {
                                                            badge: eg,
                                                            isViewingOtherUser: h,
                                                            targetUsername: b,
                                                            isViewerOnUpgradeableNitro: ea,
                                                        }),
                                                    }),
                                                null != er && (0, l.jsx)("div", { className: eV.Z6, children: er }),
                                            ],
                                        }),
                                    !em && er,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eK = n(921121);
function eQ(e) {
    let {
            transitionState: t,
            onClose: n,
            initialBadgeId: y,
            targetUserId: f,
            targetUsername: A,
            viewingCurrentUserBadges: w,
        } = e,
        I = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        E = null == f || f === I,
        S = (function (e) {
            let { location: t } = e;
            return j.useConfig({ location: t }).enabled;
        })({ location: "BadgeDirectoryModal" }),
        T = !E && null != f && !0 !== w,
        C = T ? f : I,
        B = null != C ? `viewed_user:${T ? "other" : "self"}` : void 0,
        [O, k] = i.useState(y ?? null),
        U = (0, s.yK)([v.Ay], () => (null != C ? v.Ay.getBadges(C) : []), [C]),
        R = (0, s.bG)([v.Ay], () => null != C && v.Ay.hasCatalogFor(C), [C]),
        F = (0, s.bG)([v.Ay], () => v.Ay.hasCatalogFetchErrorFor(C), [C]);
    (i.useEffect(() => {
        null != C && (v.Ay.hasCatalogFor(C) ? v.Ay.isCatalogStaleFor(C) && (0, b.RS)(C) : (0, b.RS)(C));
        let e = T ? I : f;
        E || null == e || v.Ay.hasCatalogFor(e) || (0, b.RS)(e);
    }, [C, E, T, I, f]),
        i.useEffect(() => {
            null != B && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [B] });
        }, [B]));
    let $ = i.useMemo(() => {
            let { earnable: e, owned: t } = (0, N.in)(U);
            return T ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [U, T]),
        z = null != O && null != C ? v.Ay.getBadgeById(O, C) : void 0,
        D = null != $ && null != C ? v.Ay.getBadgeById($, C) : void 0,
        G = z ?? D,
        M = !R && !F,
        P = !R && F,
        L = !T;
    i.useEffect(() => {
        P && null != B && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [B] });
    }, [P, B]);
    let V = (0, s.bG)([v.Ay], () => null != f && null != G && (v.Ay.getBadgeById(G.badge_id, f)?.owned ?? !1), [G, f]),
        H = (0, s.bG)([v.Ay], () => (null != I && null != G ? v.Ay.getBadgeById(G.badge_id, I) : void 0), [G, I]),
        Z = H?.owned ?? !1,
        J = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, e$._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    n();
                });
            },
            [n],
        ),
        Y = i.useCallback(() => {
            null != f &&
                null != G &&
                (T
                    ? J({
                          initialBadgeId: G.badge_id,
                          targetUserId: f,
                          targetUsername: A,
                          viewingCurrentUserBadges: !0,
                      })
                    : J({ initialBadgeId: G.badge_id, targetUserId: f, targetUsername: A }));
        }, [T, G, J, f, A]),
        q = i.useCallback(() => {
            null != I &&
                null != f &&
                (eI({ actionName: "view_your_badges_pressed", badge: G, displayedUserId: C, isSociallyNavigated: T }),
                J({ targetUserId: f, targetUsername: A, viewingCurrentUserBadges: !0 }));
        }, [I, C, T, G, J, f, A]),
        K = i.useCallback(() => {
            null != C && (0, b.RS)(C, { isRetry: !0 });
        }, [C]),
        W = i.useCallback(() => {
            (eI({ actionName: "badge_directory_closed", badge: G, displayedUserId: C, isSociallyNavigated: T }), n());
        }, [C, T, n, G]),
        X = i.useCallback(() => {
            null != I &&
                (eI({
                    actionName: "customize_your_badges_pressed",
                    badge: G,
                    displayedUserId: C,
                    isSociallyNavigated: T,
                }),
                W(),
                p.A.setState({ isOpen: !0 }),
                (0, h.kN)(I) || (0, x.openUserProfileModal)({ userId: I }));
        }, [I, C, W, T, G]),
        ee = G?.badge_id;
    return (
        i.useEffect(() => {
            null != ee && L && (0, Q.Ce)(ee) && (0, b.PV)(ee);
        }, [ee, L]),
        i.useEffect(() => {
            null != G &&
                eI({ actionName: "badge_detail_viewed", badge: G, displayedUserId: C, isSociallyNavigated: T });
        }, [ee, C, T]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": et.intl.string(et.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: S ? eK.C : en.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: en.jE,
                children: [
                    (M || P || null == G) &&
                        (0, l.jsx)("div", { className: en.b, children: (0, l.jsx)(d.J, { onClick: W, size: "sm" }) }),
                    M
                        ? (0, l.jsx)("div", { className: en.Lq, children: (0, l.jsx)(c.y, {}) })
                        : P
                          ? (0, l.jsxs)("div", {
                                className: en.IU,
                                children: [
                                    (0, l.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: et.intl.string(et.t.iufib1),
                                    }),
                                    (0, l.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: en.TQ,
                                        children: et.intl.string(et.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: K,
                                        text: et.intl.string(et.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(er, {
                                        selectedBadgeId: G?.badge_id ?? null,
                                        onSelectBadge: k,
                                        displayedUserId: C,
                                        isViewingOtherUser: T,
                                        targetUsername: A,
                                        onViewOwnCatalog: q,
                                        onCustomizeBadges: X,
                                        showBadgeIndicators: L,
                                    }),
                                    null != G &&
                                        (S
                                            ? (0, l.jsx)(eq, {
                                                  badge: G,
                                                  viewerBadge: H,
                                                  onClose: W,
                                                  isViewingOtherUser: T,
                                                  targetUsername: A,
                                                  displayedUserId: C,
                                                  viewerOwnsBadge: Z,
                                                  onViewOwnCatalog: q,
                                              })
                                            : (0, l.jsx)(eF, {
                                                  badge: G,
                                                  viewerBadge: H,
                                                  onClose: W,
                                                  isOwnProfile: E,
                                                  isViewingOtherUser: T,
                                                  targetUsername: A,
                                                  displayedUserId: C,
                                                  targetOwnsBadge: V,
                                                  viewerOwnsBadge: Z,
                                                  onToggleViewedUser: Y,
                                                  onViewOwnCatalog: q,
                                              })),
                                ],
                            }),
                ],
            }),
        })
    );
}
