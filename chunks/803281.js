n.d(t, { default: () => eW });
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
    j = n(982240);
let v = (0, n(945810).mj)({
    name: "2026-10-badge-directory-updates",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = n(248284);
n(321073);
var p = n(503698),
    y = n.n(p),
    f = n(70283),
    A = n(508770),
    w = n(866665),
    I = n(885574),
    E = n(97808),
    S = n(123292),
    T = n(683071),
    C = n(707554),
    B = n(364522),
    U = n(404778),
    k = n(700058),
    O = n(775602),
    R = n(640708),
    F = n(780964),
    $ = n(766075),
    z = n(153488),
    D = n(240248),
    G = n(609782),
    L = n(837381),
    M = n(887129),
    P = n(741918),
    V = n(939249),
    H = n(643056),
    Z = n(228366);
let J = { seenBadgeIndicatorIds: new Set() };
class Y extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        J = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(J.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return J.seenBadgeIndicatorIds;
    }
}
let q = new Y(Z.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: t } = e;
        if (J.seenBadgeIndicatorIds.has(t)) return !1;
        J = { ...J, seenBadgeIndicatorIds: new Set([...J.seenBadgeIndicatorIds, t]) };
    },
});
var K = n(92111),
    W = n(486020);
function Q(e, t, n) {
    let l = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, W.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var X = n(778712),
    ee = n(375708),
    et = n(177861);
function en(e) {
    return `badge-tab-${e}`;
}
function el(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function ei(e) {
    let { badge: t, isSelected: n, onSelect: a, itemId: s, showBadgeIndicator: r } = e,
        d = (0, L.rm)(s),
        c = t.owned ? t.current_tier : t.next_tier,
        o =
            null != c
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === c;
                  })
                : void 0,
        u = t.badge_id === f.$.PREMIUM_TENURE ? (o?.name ?? o?.key) : o?.name,
        m = null != u ? `${t.name}, ${u}` : t.name,
        g = r ? `${m}, ${ee.intl.string(ee.t.y2b7CA)}` : m,
        x = i.useRef(null);
    return (0, l.jsxs)(V.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: en(t.badge_id),
        "aria-label": g,
        "aria-selected": n,
        "aria-controls": n ? K.hJ : void 0,
        className: y()(et.oL, n && et.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), a());
        },
        children: [
            r && (0, l.jsx)("span", { "aria-hidden": !0, className: et.Dn }),
            null != t.simple_icon_url &&
                (0, l.jsx)("img", {
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
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, M.Ay)({
            id: n,
            isEnabled: !0,
            orientation: P.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: et.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(L.hD, {
                navigator: d,
                children: (0, l.jsx)(L.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: et.yq,
                            children: i.map((e, t) => {
                                let n = r.has(e.badge_id);
                                return (0, l.jsx)(
                                    ei,
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
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
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
            onCustomizeBadges: g,
            showBadgeIndicators: x,
        } = e,
        h = (0, s.yK)([j.Ay], () => (null != a ? j.Ay.getBadges(a) : []), [a]),
        { earnable: _, owned: b } = i.useMemo(() => es(h), [h]),
        { badgeIndicatorIds: v } = (function (e) {
            let { badges: t, enabled: n } = e,
                l = (0, s.bG)([q], () => q.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: i.useMemo(
                    () =>
                        n
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return (0, K.Ce)(t) && !l.has(t);
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
        N = Q(a, r, 48),
        p = (0, H.d)({ location: "BadgeDirectoryPanel" }),
        y = null != d ? el(d) : null,
        f = null != d && y !== d,
        A =
            null != y && f && null != N
                ? (0, l.jsxs)("span", {
                      className: et._p,
                      children: [(0, l.jsx)(E.eu, { src: N, size: X._3.SIZE_24, "aria-hidden": !0 }), y],
                  })
                : y,
        w = r && null != A ? ee.intl.format(ee.t.EIcwoe, { username: A }) : ee.intl.string(ee.t.UqnlQF),
        I = r && null != d ? ee.intl.string(ee.t["75s2Rq"]) : ee.intl.string(ee.t["62xU4E"]),
        S = r && null != d ? ee.intl.formatToPlainString(ee.t.BCjSZy, { username: d }) : ee.intl.string(ee.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: et.ws,
        children: (0, l.jsxs)(C.F, {
            component: (0, l.jsxs)("div", {
                className: et.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: et.kc,
                        children: [
                            !f && null != N && (0, l.jsx)(E.eu, { src: N, size: X._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: w }),
                        ],
                    }),
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: I }),
                ],
            }),
            children: [
                (0, l.jsxs)(B.Ip, {
                    className: et.hG,
                    children: [
                        b.length > 0 &&
                            (0, l.jsx)(ea, {
                                label: { type: "aria", text: S },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: v,
                            }),
                        !r &&
                            _.length > 0 &&
                            (0, l.jsx)(ea, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: ee.intl.string(ee.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: _,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: v,
                            }),
                    ],
                }),
                (r || p) &&
                    (0, l.jsx)("div", {
                        className: et.HO,
                        children: r
                            ? (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: ee.intl.string(ee.t.msyp90),
                              })
                            : (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: g,
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
    em = n(140735),
    eg = n(836825);
function ex(e) {
    let {
            badge: t,
            isViewingOtherUser: n,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = i.useId(),
        c = n && null != a,
        o = t.badge_id === f.$.PREMIUM_TENURE ? ee.intl.string(s ? ee.t["5WS9pL"] : ee.t.crwYbF) : null,
        m = c ? ee.intl.formatToPlainString(ee.t.KyTwIh, { username: a }) : o,
        g = null != m && "" !== m;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            g &&
                !r &&
                (0, l.jsxs)("div", {
                    className: eg.u4,
                    children: [
                        s &&
                            !c &&
                            (0, l.jsx)(eu.LockIcon, {
                                size: "xxs",
                                color: "currentColor",
                                className: eg.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, l.jsx)(u.E, { id: d, variant: "text-xs/medium", color: "text-subtle", children: m }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: eg.SV,
                role: "list",
                "aria-labelledby": g && !r ? d : void 0,
                children: t.tiers.map((e) => {
                    let i = e.owned,
                        a = !i && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (function (e) {
                            let { tier: t, isUnlocked: n, isViewingOtherUser: l, isViewerOnUpgradeableNitro: i } = e;
                            return n || !i || l ? (t.milestone_text ?? "") : ee.intl.string(ee.t.VPu695);
                        })({ tier: e, isUnlocked: i, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: y()(eg.zh, a && eg.ZF),
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
                                (0, l.jsx)(em.A, { children: ee.intl.string(i ? ee.t.sTFApF : ee.t.uHtDcT) }),
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
let eb = new Set([f.$.GAME_TIME, f.$.GAME_VARIETY, f.$.STREAMING]);
function ej(e) {
    let { badge: t, viewerBadge: n, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [c, o] = i.useState(!1),
        [m, g] = i.useState(t.badge_id),
        x = i.useId(),
        h = i.useId(),
        _ = i.useRef(null),
        b = i.useRef(null);
    t.badge_id !== m && (g(t.badge_id), o(!1));
    let j = i.useCallback(() => {
            let e = _.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        v = i.useCallback(
            (e) => {
                null != e.target && c && j();
            },
            [c, j],
        );
    (0, eo.g)(b, v, [c], { enabled: c });
    let N = n ?? t,
        p = (0, s.bG)([z.A], () => z.A.hasConsented(eh.YAq.PERSONALIZATION)),
        f = !a && eb.has(t.badge_id) && !p,
        A = a ? void 0 : N.next_tier,
        w = a ? void 0 : N.current_tier,
        I = null != A ? N.tiers.find((e) => e.key === A) : void 0,
        E = null != w ? N.tiers.find((e) => e.key === w) : void 0,
        S = a ? void 0 : N.progress?.[0],
        T = S?.threshold ?? I?.requirements[0]?.threshold ?? null,
        C = !a && N.owned && null != I,
        B = a || (0, D.uJ)(N.leveling_instructions) || C ? void 0 : N.leveling_instructions,
        k = I?.name != null ? ee.intl.formatToPlainString(ee.t["Jn+COZ"], { tier_name: I.name }) : void 0,
        O = c ? ee.intl.string(ee.t["065Hig"]) : ee.intl.string(ee.t.MylOvg),
        R = a ? t : N,
        F = E?.complex_icon_static_url ?? E?.simple_icon_url,
        $ = I?.complex_icon_static_url ?? I?.simple_icon_url,
        G = !(0, D.uJ)(S?.progress_helper_text),
        L = null != k ? { "aria-labelledby": h } : { "aria-label": ee.intl.string(ee.t.Uwhb1l) };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != B && (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: B }),
            C &&
                !f &&
                (0, l.jsxs)("div", {
                    className: e_.ES,
                    children: [
                        null != F &&
                            (0, l.jsx)("img", { className: e_.Tw, src: F, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, l.jsxs)("div", {
                            className: e_.Bd,
                            children: [
                                null != k && (0, l.jsx)(u.E, { id: h, variant: "text-sm/medium", children: k }),
                                null != T
                                    ? (0, l.jsx)(ed.z, {
                                          value: S?.current ?? 0,
                                          minValue: S?.floor ?? 0,
                                          maxValue: T,
                                          size: "md",
                                          className: e_.hr,
                                          ...L,
                                      })
                                    : null != S &&
                                      (0, l.jsx)(ed.z, { isIndeterminate: !0, size: "md", className: e_.hr, ...L }),
                                G &&
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
            C && !f
                ? (0, l.jsxs)("div", {
                      className: e_.JC,
                      children: [
                          (0, l.jsx)("div", {
                              ref: b,
                              className: y()(e_.ne, c && e_.GB),
                              id: x,
                              children: (0, l.jsx)("div", {
                                  className: e_.zL,
                                  inert: !c,
                                  children: (0, l.jsxs)("div", {
                                      className: e_.GA,
                                      children: [
                                          (0, l.jsx)(U.c, { className: e_.yF }),
                                          (0, l.jsx)(ex, {
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
                          (0, l.jsxs)(V.D, {
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
                                      children: O,
                                  }),
                                  (0, l.jsx)(ec.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: y()(e_.ai, c && e_.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsx)(ex, { badge: R, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var ev = n(536001),
    eN = n(260981),
    ep = n(540418),
    ey = n(907085),
    ef = n(179820);
function eA(e) {
    if (null == e) return null;
    switch (e) {
        case ev.x.COMMON:
            return { type: { text: ee.intl.string(ee.t.L0K5ci) }, variant: "rarity-common", icon: eN.p };
        case ev.x.RARE:
            return { type: { text: ee.intl.string(ee.t["sTx/5z"]) }, variant: "rarity-rare", icon: ep.A };
        case ev.x.EPIC:
            return { type: { text: ee.intl.string(ee.t.RD8RiN) }, variant: "rarity-epic", icon: ey.b };
        case ev.x.MYTHIC:
            return { type: { text: ee.intl.string(ee.t.vqc1ol) }, variant: "rarity-mythic", icon: ef.O };
        default:
            return null;
    }
}
var ew = n(174459);
function eI(e) {
    let { actionName: t, badge: n, displayedUserId: l, isSociallyNavigated: i } = e,
        a = _.default.getCurrentUser()?.id,
        s = null != n && null != a ? j.Ay.getBadgeById(n.badge_id, a) : void 0,
        r = null != n && null != a ? j.Ay.getRemainingToNextTier(n.badge_id, a) : void 0,
        d = null != l ? j.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
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
let eS = [ee.t["6zFA/T"], ee.t.wzZHKl, ee.t["+ED/nf"]];
function eT() {
    let e = Math.floor(Math.random() * eS.length);
    return ee.intl.string(eS[e]);
}
function eC(e) {
    let { earnedDateText: t, label: n } = e;
    return (0, l.jsxs)("div", {
        className: y()(et.AX, et.aS),
        children: [
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: et.NM, children: t }),
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: et.MZ, children: n }),
        ],
    });
}
function eB(e) {
    let { rarityBadgeProps: t } = e;
    return (0, l.jsxs)("div", {
        className: y()(et.AX, et.sn),
        children: [
            (0, l.jsx)(A.E, { ...t }),
            (0, l.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: ee.intl.string(ee.t["phYZe+"]),
            }),
        ],
    });
}
function eU() {
    return (0, l.jsx)(w.m, {
        text: ee.intl.string(ee.t.goKu4e),
        children: (0, l.jsxs)("span", {
            className: et.Gb,
            children: [
                (0, l.jsx)(I.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    className: et.LS,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: ee.intl.string(ee.t.oW0eUd),
                }),
            ],
        }),
    });
}
function ek() {
    return (0, l.jsx)(R.A, { height: 3, width: 3, "aria-hidden": "true", className: et.zN });
}
function eO(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: et.U3,
              children: t.map((e, t) => {
                  let { key: n, node: i } = e;
                  return (0, l.jsxs)("span", { className: et.Hq, children: [t > 0 && (0, l.jsx)(ek, {}), i] }, n);
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
        m = (0, D.uJ)(t.info_label) ? void 0 : t.info_label,
        g = (0, K.HW)(t.badge_id),
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
                        : ee.intl.string(ee.t.uHtDcT)
                    : a && null != s
                      ? ee.intl.formatToPlainString(ee.t.Eo5Cnp, { username: el(s) })
                      : l.owned
                        ? c
                        : ee.intl.string(ee.t.uHtDcT)),
                !i)
            ) {
                let e = !a && r && null != s;
                a && d
                    ? (n = ee.intl.string(ee.t.yxEAGH))
                    : e && (n = ee.intl.formatToPlainString(ee.t["9GNsge"], { username: el(s) }));
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
    (g && _.push({ key: "beta", node: (0, l.jsx)(eU, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, l.jsxs)("span", {
                    className: et.pC,
                    children: [
                        !n && null != s && (0, l.jsx)(E.eu, { src: s, size: X._3.SIZE_16, "aria-hidden": !0 }),
                        (0, l.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: et.$L,
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
                    className: et.$L,
                    children: m,
                }),
            }));
    let b = _.length >= 3 && null != h,
        j =
            null != h
                ? {
                      key: "toggle",
                      node: (0, l.jsx)(S.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "text-xs/medium",
                          onClick: o,
                          text: h,
                      }),
                  }
                : void 0,
        v = b || null == j ? _ : [..._, j];
    return 0 === v.length && null == j
        ? null
        : (0, l.jsxs)("div", {
              className: et.rI,
              children: [(0, l.jsx)(eO, { segments: v }), b && null != j && (0, l.jsx)(eO, { segments: [j] })],
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
            onClose: v,
            isOwnProfile: N,
            isViewingOtherUser: p,
            targetUsername: A,
            displayedUserId: w,
            targetOwnsBadge: I,
            viewerOwnsBadge: E,
            onToggleViewedUser: S,
            onViewOwnCatalog: R,
        } = e,
        L = Q(w, p, 32),
        M = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(h),
        P = (0, s.bG)([O.Ay], () => O.Ay.useReducedMotion)
            ? void 0
            : (M?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        V = M?.complex_icon_static_url ?? h.complex_icon_static_url,
        H = M?.simple_icon_url ?? h.simple_icon_url,
        Z = P ?? V ?? H,
        J = eA(M?.rarity ?? h.rarity) ?? void 0,
        Y = (0, K.Om)(h.badge_id),
        q = h.badge_id === f.$.PREMIUM_TENURE,
        W = q ? (M?.name ?? M?.key) : M?.name,
        X = q ? ee.intl.string(ee.t.Ipxkog) : h.name;
    q ? (r = null != W ? `${X} ${W}` : X) : null != W ? ((a = X), (r = W)) : (r = X);
    let el = (0, G.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== f.$.STAFF,
        ei = (h.tiers?.length ?? 0) > 0,
        ea = (0, j.H5)(h),
        es = (function (e) {
            let [t, n] = i.useState(eT),
                [l, a] = i.useState(e);
            return (e !== l && (a(e), n(eT())), t);
        })(h.badge_id);
    c = h.owned
        ? h.badge_id === f.$.APRIL_FOOLS_2026
            ? ee.intl.string(ee.t["5LcHT0"])
            : el && null == ea
              ? es
              : (function (e) {
                    if (null == e) return;
                    let t = new Date(e);
                    if (!Number.isNaN(t.getTime()))
                        return t.toLocaleDateString(ee.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(ea)
        : ei
          ? "--"
          : void 0;
    let er = ((n = null == (t = h.tiers?.[0]?.key) || M?.key === t), ee.intl.string(n ? ee.t.WDhIz2 : ee.t.wYaDmz)),
        ed = null != c && h.badge_id !== f.$.STAFF,
        ec = null != J,
        eo = null;
    ((ed || ec) &&
        (eo = (0, l.jsxs)("div", {
            className: y()(et.$S, (!ed || !ec) && et.jQ),
            children: [
                ed && null != c && (0, l.jsx)(eC, { earnedDateText: c, label: er }),
                ec && (0, l.jsx)(eB, { rarityBadgeProps: J }),
            ],
        })),
        ed || (g = ee.intl.string(ee.t.sTFApF)));
    let eu = b?.owned === !0 && (b.tiers?.length ?? 0) > 0 && null == b.next_tier,
        em = _.default.getCurrentUser()?.premiumType,
        eg = q && (em === eE.PremiumTypes.TIER_0 || em === eE.PremiumTypes.TIER_1);
    x = eu ? ee.intl.string(ee.t.jY5xAL) : eg ? ee.intl.string(ee.t.qkwSSp) : (b?.description ?? h.description);
    let ex = i.useCallback(() => {
            null != Y &&
                (eI({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: w,
                    isSociallyNavigated: p,
                }),
                v(),
                k.A.popAll(),
                Y.ctaAction());
        }, [h, w, p, Y, v]),
        e_ =
            !p || h.is_earnable || E || h.badge_id === f.$.STAFF
                ? null
                : (0, l.jsx)(T.w, { type: "info", children: ee.intl.format(ee.t.vFekBs, { onViewBadges: R }) }),
        eb = (0, s.bG)([z.A], () => z.A.hasConsented(eh.YAq.PERSONALIZATION)),
        ev = (0, K.Jn)(h.badge_id) && !p && !eb;
    return (0, l.jsx)(C.F, {
        forceLevel: 2,
        children: (0, l.jsx)("div", {
            id: K.hJ,
            role: "tabpanel",
            "aria-labelledby": en(h.badge_id),
            className: et.SV,
            children: (0, l.jsxs)(B.d_, {
                className: et.C9,
                children: [
                    (0, l.jsx)("div", { className: et.Gw, children: (0, l.jsx)(d.J, { onClick: v, size: "sm" }) }),
                    null != Z &&
                        (0, l.jsx)("img", {
                            className: y()(et.y2, null != P && Z === P && et.hu),
                            src: Z,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, l.jsxs)("div", {
                        className: et.OU,
                        children: [
                            (0, l.jsx)("div", {
                                className: et.cQ,
                                children: (0, l.jsxs)("div", {
                                    className: et.nj,
                                    children: [
                                        (0, l.jsxs)(o.D, {
                                            variant: q ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: y()(et._r, q && et.ve),
                                            children: [
                                                null != a &&
                                                    (0, l.jsx)(u.E, {
                                                        tag: "span",
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        className: et.$g,
                                                        children: a,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, l.jsx)(eR, {
                                            badge: h,
                                            isOwnProfile: N,
                                            isViewingOtherUser: p,
                                            targetUsername: A,
                                            viewedAvatarSrc: L,
                                            targetOwnsBadge: I,
                                            viewerOwnsBadge: E,
                                            unlockedStatusText: g,
                                            onToggleViewedUser: S,
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: et.oA,
                                children: [
                                    ev &&
                                        (0, l.jsx)(T.w, {
                                            type: "info",
                                            children: ee.intl.format(ee.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, $.openUserSettings)(F.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eo,
                                    !(0, D.uJ)(x) &&
                                        (0, l.jsxs)("div", {
                                            className: et.d9,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: et.E4,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: et.jv,
                                                            children: [
                                                                el &&
                                                                    (0, l.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: et.c$,
                                                                        children: ee.intl.string(ee.t["/Gmn3f"]),
                                                                    }),
                                                                (0, l.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: et.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != Y &&
                                                            (0, l.jsx)(m.$, {
                                                                variant: eg
                                                                    ? "expressive"
                                                                    : E
                                                                      ? "secondary"
                                                                      : q
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: ex,
                                                                text: Y.ctaLabel({
                                                                    owned: E,
                                                                    isViewerOnUpgradeableNitro: eg,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                (h.tiers?.length ?? 0) > 0 &&
                                                    (0, l.jsxs)("div", {
                                                        className: et.cJ,
                                                        children: [
                                                            (0, l.jsx)(U.c, {}),
                                                            (0, l.jsx)(ej, {
                                                                badge: h,
                                                                viewerBadge: b,
                                                                isViewingOtherUser: p,
                                                                targetUsername: A,
                                                                isViewerOnUpgradeableNitro: eg,
                                                            }),
                                                        ],
                                                    }),
                                                null != e_ && (0, l.jsx)("div", { className: et.Z6, children: e_ }),
                                            ],
                                        }),
                                    (0, D.uJ)(x) && e_,
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
let eD = new Set([f.$.GAME_TIME, f.$.GAME_VARIETY, f.$.STREAMING]);
function eG(e, t) {
    return null != t ? e.tiers.find((e) => e.key === t) : void 0;
}
function eL(e) {
    let { badge: t, viewerBadge: n } = e,
        a = i.useId(),
        s = n ?? t,
        r = eG(s, s.current_tier),
        d = eG(s, s.next_tier),
        c = s.progress?.[0],
        o = c?.threshold ?? d?.requirements[0]?.threshold ?? null,
        m = r?.complex_icon_static_url ?? r?.simple_icon_url,
        g = d?.complex_icon_static_url ?? d?.simple_icon_url,
        x = (0, D.uJ)(c?.progress_helper_text) ? void 0 : c?.progress_helper_text,
        h = null != x ? { "aria-labelledby": a } : { "aria-label": ee.intl.string(ee.t.Uwhb1l) };
    return (0, l.jsxs)("div", {
        className: ez.NE,
        children: [
            (0, l.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: ee.intl.string(ee.t["2m/g2c"]),
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
var eM = n(149285);
function eP(e) {
    let {
            badge: t,
            isViewingOtherUser: n,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = i.useId(),
        c = n && null != a,
        o = t.badge_id === f.$.PREMIUM_TENURE ? ee.intl.string(s ? ee.t["5WS9pL"] : ee.t.crwYbF) : null,
        m = c ? ee.intl.formatToPlainString(ee.t.KyTwIh, { username: a }) : o,
        g = null != m && "" !== m;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            g &&
                !r &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(U.c, {}),
                        (0, l.jsxs)("div", {
                            className: eM.u4,
                            children: [
                                s &&
                                    !c &&
                                    (0, l.jsx)(eu.LockIcon, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: eM.ZU,
                                        "aria-hidden": !0,
                                    }),
                                (0, l.jsx)(u.E, { id: d, variant: "text-xs/medium", children: m }),
                            ],
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: eM.SV,
                role: "list",
                "aria-labelledby": g && !r ? d : void 0,
                children: t.tiers.map((e) => {
                    let i = e.owned,
                        a = !i && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (function (e) {
                            let { tier: t, isUnlocked: n, isViewingOtherUser: l, isViewerOnUpgradeableNitro: i } = e;
                            return n || !i || l ? (t.milestone_text ?? "") : ee.intl.string(ee.t.VPu695);
                        })({ tier: e, isUnlocked: i, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: y()(eM.zh, a && eM.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: eM.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)("div", {
                                    className: eM.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsx)(u.E, {
                                                variant: "text-xs/semibold",
                                                color: i ? "text-default" : "text-muted",
                                                className: eM.nU,
                                                children: d,
                                            }),
                                        "" !== c &&
                                            (0, l.jsxs)(u.E, {
                                                variant: "text-xs/normal",
                                                color: i ? "text-subtle" : "text-muted",
                                                className: eM.nU,
                                                children: [
                                                    !i &&
                                                        (0, l.jsx)(eu.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eM.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    c,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(em.A, { children: ee.intl.string(i ? ee.t.sTFApF : ee.t.uHtDcT) }),
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
let eH = [ee.t["6zFA/T"], ee.t.wzZHKl, ee.t["+ED/nf"]];
function eZ() {
    let e = Math.floor(Math.random() * eH.length);
    return ee.intl.string(eH[e]);
}
function eJ() {
    return (0, l.jsx)(R.A, { height: 3, width: 3, "aria-hidden": "true", className: eV.zN });
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
            displayedUserId: v,
            viewerOwnsBadge: N,
            onViewOwnCatalog: p,
        } = e,
        I = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(c),
        E = (0, s.bG)([O.Ay], () => O.Ay.useReducedMotion)
            ? void 0
            : (I?.complex_icon_animated_url ?? c.complex_icon_animated_url),
        S = I?.complex_icon_static_url ?? c.complex_icon_static_url,
        R = I?.simple_icon_url ?? c.simple_icon_url,
        L = E ?? S ?? R,
        M = I?.rarity ?? c.rarity,
        P = eA(M) ?? void 0,
        V = (0, K.Om)(c.badge_id),
        H = c.badge_id === f.$.PREMIUM_TENURE,
        Z = H ? (I?.name ?? I?.key) : I?.name,
        J = H ? ee.intl.string(ee.t.Ipxkog) : c.name;
    H ? (n = null != Z ? `${J} ${Z}` : J) : null != Z && c.owned ? ((t = J), (n = Z)) : (n = J);
    let Y = (0, G.ie)(c.badge_id) && !c.is_earnable && c.badge_id !== f.$.STAFF,
        q = (c.tiers?.length ?? 0) > 0,
        W = (0, j.H5)(c),
        Q = (function (e) {
            let [t, n] = i.useState(eZ),
                [l, a] = i.useState(e);
            return (e !== l && (a(e), n(eZ())), t);
        })(c.badge_id);
    a = c.owned
        ? c.badge_id === f.$.APRIL_FOOLS_2026
            ? ee.intl.string(ee.t["5LcHT0"])
            : Y && null == W
              ? Q
              : null != W && c.badge_id !== f.$.STAFF
                ? ee.intl.formatToPlainString(ee.t.XmaiRQ, { date: new Date(W) })
                : ee.intl.string(ee.t.sTFApF)
        : ee.intl.string(ee.t.uHtDcT);
    let X = (0, D.uJ)(c.info_label) ? void 0 : c.info_label,
        et = c.owned && M !== ev.x.COMMON && null != P,
        el = [];
    (null != X &&
        el.push({
            key: "info",
            node: (0, l.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: "text-subtle",
                className: eV.$L,
                children: X,
            }),
        }),
        el.push({
            key: "status",
            node: (0, l.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: "text-subtle",
                className: eV.$L,
                children: a,
            }),
        }),
        et && el.push({ key: "rarity", node: (0, l.jsx)(A.E, { ...P }) }));
    let ei = g?.owned === !0 && (g.tiers?.length ?? 0) > 0 && null == g.next_tier,
        ea = _.default.getCurrentUser()?.premiumType,
        es = H && (ea === eE.PremiumTypes.TIER_0 || ea === eE.PremiumTypes.TIER_1);
    r = ei ? ee.intl.string(ee.t.jY5xAL) : es ? ee.intl.string(ee.t.qkwSSp) : (g?.description ?? c.description);
    let er = i.useCallback(() => {
            null != V &&
                (eI({
                    actionName: "primary_badge_action_clicked",
                    badge: c,
                    displayedUserId: v,
                    isSociallyNavigated: h,
                }),
                x(),
                k.A.popAll(),
                V.ctaAction());
        }, [c, v, h, V, x]),
        ed =
            !h || c.is_earnable || N || c.badge_id === f.$.STAFF
                ? null
                : (0, l.jsx)(T.w, { type: "info", children: ee.intl.format(ee.t.vFekBs, { onViewBadges: p }) }),
        ec = (0, s.bG)([z.A], () => z.A.hasConsented(eh.YAq.PERSONALIZATION)),
        eo = (0, K.Jn)(c.badge_id) && !h && !ec,
        eu = (function (e) {
            let { badge: t, viewerBadge: n, isViewingOtherUser: l } = e,
                i = (0, s.bG)([z.A], () => z.A.hasConsented(eh.YAq.PERSONALIZATION)),
                a = n ?? t,
                r = null != eG(a, a.next_tier),
                d = eD.has(t.badge_id) && !i;
            return !l && a.owned && r && !d;
        })({ badge: c, viewerBadge: g, isViewingOtherUser: h }),
        em = !(0, D.uJ)(r),
        eg = eu || em || q,
        ex = h ? c : (g ?? c);
    return (0, l.jsx)(C.F, {
        forceLevel: 2,
        children: (0, l.jsx)("div", {
            id: K.hJ,
            role: "tabpanel",
            "aria-labelledby": en(c.badge_id),
            className: eV.SV,
            children: (0, l.jsxs)(B.d_, {
                className: eV.C9,
                children: [
                    (0, l.jsxs)("div", {
                        className: eV.Rm,
                        children: [
                            (0, K.HW)(c.badge_id) &&
                                (0, l.jsx)(w.m, {
                                    text: ee.intl.string(ee.t.goKu4e),
                                    children: (0, l.jsx)("span", {
                                        className: eV.mC,
                                        children: (0, l.jsx)(A.E, { type: "beta" }),
                                    }),
                                }),
                            (0, l.jsx)("div", {
                                className: eV.Gw,
                                children: (0, l.jsx)(d.J, { onClick: x, size: "sm" }),
                            }),
                        ],
                    }),
                    null != L &&
                        (0, l.jsx)("img", {
                            className: y()(eV.y2, null != E && L === E && eV.hu),
                            src: L,
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
                                            className: y()(eV._r, H && eV.ve),
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
                                        (0, l.jsx)(eY, { segments: el }),
                                    ],
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: eV.oA,
                                children: [
                                    eo &&
                                        (0, l.jsx)(T.w, {
                                            type: "info",
                                            children: ee.intl.format(ee.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, $.openUserSettings)(F.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eg &&
                                        (0, l.jsxs)("div", {
                                            className: eV.d9,
                                            children: [
                                                eu &&
                                                    (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            (0, l.jsx)(eL, {
                                                                badge: c,
                                                                viewerBadge: g,
                                                                isViewingOtherUser: h,
                                                            }),
                                                            (0, l.jsx)(U.c, {}),
                                                        ],
                                                    }),
                                                em &&
                                                    (0, l.jsxs)("div", {
                                                        className: y()(eV.E4, !q && eV.H),
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: eV.jv,
                                                                children: [
                                                                    Y &&
                                                                        (0, l.jsx)(u.E, {
                                                                            variant: "text-xs/medium",
                                                                            color: "text-subtle",
                                                                            className: eV.c$,
                                                                            children: ee.intl.string(ee.t["/Gmn3f"]),
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
                                                                    variant: es
                                                                        ? "expressive"
                                                                        : N
                                                                          ? "secondary"
                                                                          : H
                                                                            ? "expressive"
                                                                            : "primary",
                                                                    size: "sm",
                                                                    onClick: er,
                                                                    text: V.ctaLabel({
                                                                        owned: N,
                                                                        isViewerOnUpgradeableNitro: es,
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                q &&
                                                    (0, l.jsx)("div", {
                                                        className: eV.cJ,
                                                        children: (0, l.jsx)(eP, {
                                                            badge: ex,
                                                            isViewingOtherUser: h,
                                                            targetUsername: b,
                                                            isViewerOnUpgradeableNitro: es,
                                                            hideLabel: eu,
                                                        }),
                                                    }),
                                                null != ed && (0, l.jsx)("div", { className: eV.Z6, children: ed }),
                                            ],
                                        }),
                                    !eg && ed,
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
function eW(e) {
    let {
            transitionState: t,
            onClose: n,
            initialBadgeId: p,
            targetUserId: y,
            targetUsername: f,
            viewingCurrentUserBadges: A,
        } = e,
        w = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        I = null == y || y === w,
        E = (function (e) {
            let { location: t } = e;
            return v.useConfig({ location: t }).enabled;
        })({ location: "BadgeDirectoryModal" }),
        S = !I && null != y && !0 !== A,
        T = S ? y : w,
        C = null != T ? `viewed_user:${S ? "other" : "self"}` : void 0,
        [B, U] = i.useState(p ?? null),
        k = (0, s.yK)([j.Ay], () => (null != T ? j.Ay.getBadges(T) : []), [T]),
        O = (0, s.bG)([j.Ay], () => null != T && j.Ay.hasCatalogFor(T), [T]),
        R = (0, s.bG)([j.Ay], () => j.Ay.hasCatalogFetchErrorFor(T), [T]);
    (i.useEffect(() => {
        null != T && (j.Ay.hasCatalogFor(T) ? j.Ay.isCatalogStaleFor(T) && (0, b.RS)(T) : (0, b.RS)(T));
        let e = S ? w : y;
        I || null == e || j.Ay.hasCatalogFor(e) || (0, b.RS)(e);
    }, [T, I, S, w, y]),
        i.useEffect(() => {
            null != C && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [C] });
        }, [C]));
    let F = i.useMemo(() => {
            let { earnable: e, owned: t } = es(k);
            return S ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [k, S]),
        $ = null != B && null != T ? j.Ay.getBadgeById(B, T) : void 0,
        z = null != F && null != T ? j.Ay.getBadgeById(F, T) : void 0,
        D = $ ?? z,
        G = !O && !R,
        L = !O && R,
        M = !S;
    i.useEffect(() => {
        L && null != C && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [C] });
    }, [L, C]);
    let P = (0, s.bG)([j.Ay], () => null != y && null != D && (j.Ay.getBadgeById(D.badge_id, y)?.owned ?? !1), [D, y]),
        V = (0, s.bG)([j.Ay], () => (null != w && null != D ? j.Ay.getBadgeById(D.badge_id, w) : void 0), [D, w]),
        H = V?.owned ?? !1,
        Z = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, e$._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    n();
                });
            },
            [n],
        ),
        J = i.useCallback(() => {
            null != y &&
                null != D &&
                (S
                    ? Z({
                          initialBadgeId: D.badge_id,
                          targetUserId: y,
                          targetUsername: f,
                          viewingCurrentUserBadges: !0,
                      })
                    : Z({ initialBadgeId: D.badge_id, targetUserId: y, targetUsername: f }));
        }, [S, D, Z, y, f]),
        Y = i.useCallback(() => {
            null != w &&
                null != y &&
                (eI({ actionName: "view_your_badges_pressed", badge: D, displayedUserId: T, isSociallyNavigated: S }),
                Z({ targetUserId: y, targetUsername: f, viewingCurrentUserBadges: !0 }));
        }, [w, T, S, D, Z, y, f]),
        q = i.useCallback(() => {
            null != T && (0, b.RS)(T, { isRetry: !0 });
        }, [T]),
        W = i.useCallback(() => {
            (eI({ actionName: "badge_directory_closed", badge: D, displayedUserId: T, isSociallyNavigated: S }), n());
        }, [T, S, n, D]),
        Q = i.useCallback(() => {
            null != w &&
                (eI({
                    actionName: "customize_your_badges_pressed",
                    badge: D,
                    displayedUserId: T,
                    isSociallyNavigated: S,
                }),
                W(),
                N.A.setState({ isOpen: !0 }),
                (0, h.kN)(w) || (0, x.openUserProfileModal)({ userId: w }));
        }, [w, T, W, S, D]),
        X = D?.badge_id;
    return (
        i.useEffect(() => {
            null != X && M && (0, K.Ce)(X) && (0, b.PV)(X);
        }, [X, M]),
        i.useEffect(() => {
            null != D &&
                eI({ actionName: "badge_detail_viewed", badge: D, displayedUserId: T, isSociallyNavigated: S });
        }, [X, T, S]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": ee.intl.string(ee.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: E ? eK.C : et.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: et.jE,
                children: [
                    (G || L || null == D) &&
                        (0, l.jsx)("div", { className: et.b, children: (0, l.jsx)(d.J, { onClick: W, size: "sm" }) }),
                    G
                        ? (0, l.jsx)("div", { className: et.Lq, children: (0, l.jsx)(c.y, {}) })
                        : L
                          ? (0, l.jsxs)("div", {
                                className: et.IU,
                                children: [
                                    (0, l.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: ee.intl.string(ee.t.iufib1),
                                    }),
                                    (0, l.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: et.TQ,
                                        children: ee.intl.string(ee.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: q,
                                        text: ee.intl.string(ee.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(er, {
                                        selectedBadgeId: D?.badge_id ?? null,
                                        onSelectBadge: U,
                                        displayedUserId: T,
                                        isViewingOtherUser: S,
                                        targetUsername: f,
                                        onViewOwnCatalog: Y,
                                        onCustomizeBadges: Q,
                                        showBadgeIndicators: M,
                                    }),
                                    null != D &&
                                        (E
                                            ? (0, l.jsx)(eq, {
                                                  badge: D,
                                                  viewerBadge: V,
                                                  onClose: W,
                                                  isViewingOtherUser: S,
                                                  targetUsername: f,
                                                  displayedUserId: T,
                                                  viewerOwnsBadge: H,
                                                  onViewOwnCatalog: Y,
                                              })
                                            : (0, l.jsx)(eF, {
                                                  badge: D,
                                                  viewerBadge: V,
                                                  onClose: W,
                                                  isOwnProfile: I,
                                                  isViewingOtherUser: S,
                                                  targetUsername: f,
                                                  displayedUserId: T,
                                                  targetOwnsBadge: P,
                                                  viewerOwnsBadge: H,
                                                  onToggleViewedUser: J,
                                                  onViewOwnCatalog: Y,
                                              })),
                                ],
                            }),
                ],
            }),
        })
    );
}
