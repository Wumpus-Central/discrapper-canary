n.d(t, { default: () => e8 });
var i = n(477900),
    l = n(582128),
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
    p = n(174459),
    y = n(652215);
function f(e) {
    let { actionName: t, badge: n, displayedUserId: i, isSociallyNavigated: l } = e,
        a = _.default.getCurrentUser()?.id,
        s = null != n && null != a ? v.Ay.getBadgeById(n.badge_id, a) : void 0,
        r = null != n && null != a ? v.Ay.getRemainingToNextTier(n.badge_id, a) : void 0,
        d = null != i ? v.Ay.getBadges(i).filter((e) => e.owned).length : void 0;
    p.default.track(y.HAw.BADGE_DIRECTORY_ACTION, {
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
var A = n(248284);
n(321073);
var I = n(503698),
    E = n.n(I),
    w = n(70283),
    S = n(508770),
    T = n(866665),
    C = n(885574),
    B = n(97808),
    U = n(123292),
    O = n(683071),
    R = n(707554),
    k = n(364522),
    F = n(404778),
    D = n(700058),
    L = n(775602),
    z = n(640708),
    P = n(780964),
    $ = n(766075),
    G = n(153488),
    M = n(240248),
    V = n(609782),
    H = n(837381),
    Z = n(887129),
    J = n(741918),
    Y = n(939249),
    q = n(643056),
    K = n(228366);
let W = { seenBadgeIndicatorIds: new Set() };
class Q extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        W = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(W.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return W.seenBadgeIndicatorIds;
    }
}
let X = new Q(K.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: t } = e;
        if (W.seenBadgeIndicatorIds.has(t)) return !1;
        W = { ...W, seenBadgeIndicatorIds: new Set([...W.seenBadgeIndicatorIds, t]) };
    },
});
var ee = n(696292),
    et = n(975807),
    en = n(990820),
    ei = n(216934),
    el = n(976860),
    ea = n(758836),
    es = n(202541),
    er = n(375708);
let ed = N.sC,
    ec = {
        [w.$.STAFF]: {
            ctaLabel: () => er.intl.string(er.t.q7A8hP),
            ctaAction: () => (0, et.A)("https://discord.com/careers"),
        },
        [w.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: t, isViewerOnUpgradeableNitro: n } = e;
                return !0 === n
                    ? er.intl.string(er.t.uKFeS1)
                    : t
                      ? er.intl.string(er.t.xGjjkd)
                      : er.intl.string(er.t.BTxm69);
            },
            ctaAction: () => (0, el.pX)(y.BVt.NITRO_HOME),
        },
        [w.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: t } = e;
                return t ? er.intl.string(er.t.VMvz3m) : er.intl.string(er.t.xFVZeU);
            },
            ctaAction: () => (0, $.openUserSettings)(P.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [w.$.ORB_PROFILE]: {
            ctaLabel: () => er.intl.string(er.t.EBYkzk),
            ctaAction: () => (0, el.pX)(y.BVt.COLLECTIBLES_SHOP_WITH_TAB(ea.G2.ORBS)),
        },
        [w.$.QUEST_COMPLETED]: {
            ctaLabel: () => er.intl.string(er.t.swICIT),
            ctaAction: () => (0, ei.m)({ fromContent: ee.u.QUEST_BADGE }),
        },
        [w.$.GIFTING]: {
            ctaLabel: () => er.intl.string(er.t["nUA/JW"]),
            ctaAction: () => (0, en.A)({ giftingOrigin: es.vQ.BADGE_DIRECTORY }),
        },
    },
    eo = "badge-details";
var eu = n(486020);
function em(e, t, n) {
    let i = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
    if (null != i && t) return (0, eu.ku)({ id: i.id, avatar: i.avatar, discriminator: i.discriminator }, !1, n);
}
var eg = n(778712),
    ex = n(177861);
function eh(e) {
    return `badge-tab-${e}`;
}
function e_(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function eb(e) {
    let { badge: t, isSelected: n, onSelect: a, itemId: s, showBadgeIndicator: r } = e,
        d = (0, H.rm)(s),
        c = t.owned ? t.current_tier : t.next_tier,
        o =
            null != c
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === c;
                  })
                : void 0,
        u = t.badge_id === w.$.PREMIUM_TENURE ? (o?.name ?? o?.key) : o?.name,
        m = null != u ? `${t.name}, ${u}` : t.name,
        g = r ? `${m}, ${er.intl.string(er.t.y2b7CA)}` : m,
        x = l.useRef(null);
    return (0, i.jsxs)(Y.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: eh(t.badge_id),
        "aria-label": g,
        "aria-selected": n,
        "aria-controls": n ? eo : void 0,
        className: E()(ex.oL, n && ex.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), a());
        },
        children: [
            r && (0, i.jsx)("span", { "aria-hidden": !0, className: ex.Dn }),
            null != t.simple_icon_url &&
                (0, i.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: ex.pW,
                }),
        ],
    });
}
function ev(e) {
    let { label: t, navId: n, badges: l, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, Z.Ay)({
            id: n,
            isEnabled: !0,
            orientation: J.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsxs)("div", {
        className: ex.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, i.jsx)(H.hD, {
                navigator: d,
                children: (0, i.jsx)(H.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: ex.yq,
                            children: l.map((e, t) => {
                                let n = r.has(e.badge_id);
                                return (0, i.jsx)(
                                    eb,
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
function ej(e) {
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
        { earnable: _, owned: b } = l.useMemo(() => (0, N.in)(h), [h]),
        { badgeIndicatorIds: j } = (function (e) {
            let { badges: t, enabled: n } = e,
                i = (0, s.bG)([X], () => X.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: l.useMemo(
                    () =>
                        n
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return ed.has(t) && !i.has(t);
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
        })({ badges: l.useMemo(() => [...b, ..._], [b, _]), enabled: x }),
        p = em(a, r, 48),
        y = (0, q.d)({ location: "BadgeDirectoryPanel" }),
        f = null != d ? e_(d) : null,
        A = null != d && f !== d,
        I =
            null != f && A && null != p
                ? (0, i.jsxs)("span", {
                      className: ex._p,
                      children: [(0, i.jsx)(B.eu, { src: p, size: eg._3.SIZE_24, "aria-hidden": !0 }), f],
                  })
                : f,
        E = r && null != I ? er.intl.format(er.t.EIcwoe, { username: I }) : er.intl.string(er.t.UqnlQF),
        w = r && null != d ? er.intl.string(er.t["75s2Rq"]) : er.intl.string(er.t["62xU4E"]),
        S = r && null != d ? er.intl.formatToPlainString(er.t.BCjSZy, { username: d }) : er.intl.string(er.t.UqnlQF);
    return (0, i.jsx)("div", {
        className: ex.ws,
        children: (0, i.jsxs)(R.F, {
            component: (0, i.jsxs)("div", {
                className: ex.NG,
                children: [
                    (0, i.jsxs)("div", {
                        className: ex.kc,
                        children: [
                            !A && null != p && (0, i.jsx)(B.eu, { src: p, size: eg._3.SIZE_24, "aria-hidden": !0 }),
                            (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: E }),
                        ],
                    }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: w }),
                ],
            }),
            children: [
                (0, i.jsxs)(k.Ip, {
                    className: ex.hG,
                    children: [
                        b.length > 0 &&
                            (0, i.jsx)(ev, {
                                label: { type: "aria", text: S },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: j,
                            }),
                        !r &&
                            _.length > 0 &&
                            (0, i.jsx)(ev, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: er.intl.string(er.t["0YzU//"]),
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
                    (0, i.jsx)("div", {
                        className: ex.HO,
                        children: r
                            ? (0, i.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: er.intl.string(er.t.msyp90),
                              })
                            : (0, i.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: g,
                                  text: er.intl.string(er.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var eN = n(911608),
    ep = n(847374),
    ey = n(770178),
    ef = n(194261),
    eA = n(140735),
    eI = n(836825);
function eE(e) {
    let { badge: t, isViewingOtherUser: n, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = l.useId(),
        d = n && null != a;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d &&
                (0, i.jsx)("div", {
                    className: eI.u4,
                    children: (0, i.jsx)(u.E, {
                        id: r,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: er.intl.formatToPlainString(er.t.KyTwIh, { username: a }),
                    }),
                }),
            (0, i.jsx)("div", {
                className: eI.SV,
                role: "list",
                "aria-label": d ? void 0 : t.name,
                "aria-labelledby": d ? r : void 0,
                children: t.tiers.map((e) => {
                    let l = e.owned,
                        a = !l && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (0, N.Vs)({ tier: e, isUnlocked: l, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: E()(eI.zh, a && eI.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", {
                                        className: eI.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, i.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: l ? "text-default" : "text-muted",
                                    className: eI.hI,
                                    children: [
                                        null != d &&
                                            (0, i.jsxs)("span", {
                                                className: eI.nU,
                                                children: [
                                                    !l &&
                                                        (0, i.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eI.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== c && (0, i.jsx)("span", { className: eI.nU, children: c }),
                                    ],
                                }),
                                (0, i.jsx)(eA.A, { children: er.intl.string(l ? er.t.sTFApF : er.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var ew = n(600409);
function eS(e) {
    let { badge: t, viewerBadge: n, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [c, o] = l.useState(!1),
        [m, g] = l.useState(t.badge_id),
        x = l.useId(),
        h = l.useId(),
        _ = l.useRef(null),
        b = l.useRef(null);
    t.badge_id !== m && (g(t.badge_id), o(!1));
    let v = l.useCallback(() => {
            let e = _.current;
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
    (0, ey.g)(b, j, [c], { enabled: c });
    let p = n ?? t,
        f = (0, s.bG)([G.A], () => G.A.hasConsented(y.YAq.PERSONALIZATION)),
        A = !a && (0, N.Jn)(t.badge_id) && !f,
        I = a ? void 0 : p.next_tier,
        w = a ? void 0 : p.current_tier,
        S = null != I ? p.tiers.find((e) => e.key === I) : void 0,
        T = null != w ? p.tiers.find((e) => e.key === w) : void 0,
        C = a ? void 0 : p.progress?.[0],
        B = C?.threshold ?? S?.requirements[0]?.threshold ?? null,
        U = !a && p.owned && null != S,
        O = a || (0, M.uJ)(p.leveling_instructions) || U ? void 0 : p.leveling_instructions,
        R = S?.name != null ? er.intl.formatToPlainString(er.t["Jn+COZ"], { tier_name: S.name }) : void 0,
        k = c ? er.intl.string(er.t["065Hig"]) : er.intl.string(er.t.MylOvg),
        D = a ? t : p,
        L = T?.complex_icon_static_url ?? T?.simple_icon_url,
        z = S?.complex_icon_static_url ?? S?.simple_icon_url,
        P = !(0, M.uJ)(C?.progress_helper_text),
        $ = null != R ? { "aria-labelledby": h } : { "aria-label": er.intl.string(er.t.Uwhb1l) };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != O && (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: O }),
            U &&
                !A &&
                (0, i.jsxs)("div", {
                    className: ew.ES,
                    children: [
                        null != L &&
                            (0, i.jsx)("img", { className: ew.Tw, src: L, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, i.jsxs)("div", {
                            className: ew.Bd,
                            children: [
                                null != R && (0, i.jsx)(u.E, { id: h, variant: "text-sm/medium", children: R }),
                                null != B
                                    ? (0, i.jsx)(eN.z, {
                                          value: C?.current ?? 0,
                                          minValue: C?.floor ?? 0,
                                          maxValue: B,
                                          size: "md",
                                          className: ew.hr,
                                          ...$,
                                      })
                                    : null != C &&
                                      (0, i.jsx)(eN.z, { isIndeterminate: !0, size: "md", className: ew.hr, ...$ }),
                                P &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: C?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != z &&
                            (0, i.jsx)("img", { className: ew.Tw, src: z, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            U && !A
                ? (0, i.jsxs)("div", {
                      className: ew.JC,
                      children: [
                          (0, i.jsx)("div", {
                              ref: b,
                              className: E()(ew.ne, c && ew.GB),
                              id: x,
                              children: (0, i.jsx)("div", {
                                  className: ew.zL,
                                  inert: !c,
                                  children: (0, i.jsxs)("div", {
                                      className: ew.GA,
                                      children: [
                                          (0, i.jsx)(F.c, { className: ew.yF }),
                                          (0, i.jsx)(eE, {
                                              badge: D,
                                              isViewingOtherUser: a,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, i.jsxs)(Y.D, {
                              innerRef: _,
                              className: ew.tw,
                              "aria-expanded": c,
                              "aria-controls": x,
                              onClick: () => o(!c),
                              children: [
                                  (0, i.jsx)(u.E, {
                                      className: ew.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: k,
                                  }),
                                  (0, i.jsx)(ep.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: E()(ew.ai, c && ew.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(eE, { badge: D, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var eT = n(536001),
    eC = n(260981),
    eB = n(540418),
    eU = n(907085),
    eO = n(179820);
function eR(e) {
    if (null == e) return null;
    switch (e) {
        case eT.x.COMMON:
            return { type: { text: er.intl.string(er.t.L0K5ci) }, variant: "rarity-common", icon: eC.p };
        case eT.x.RARE:
            return { type: { text: er.intl.string(er.t["sTx/5z"]) }, variant: "rarity-rare", icon: eB.A };
        case eT.x.EPIC:
            return { type: { text: er.intl.string(er.t.RD8RiN) }, variant: "rarity-epic", icon: eU.b };
        case eT.x.MYTHIC:
            return { type: { text: er.intl.string(er.t.vqc1ol) }, variant: "rarity-mythic", icon: eO.O };
        default:
            return null;
    }
}
let ek = [er.t["6zFA/T"], er.t.wzZHKl, er.t["+ED/nf"]];
function eF() {
    let e = Math.floor(Math.random() * ek.length);
    return er.intl.string(ek[e]);
}
function eD(e) {
    let { earnedDateText: t, label: n } = e;
    return (0, i.jsxs)("div", {
        className: E()(ex.AX, ex.aS),
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: ex.NM, children: t }),
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: ex.MZ, children: n }),
        ],
    });
}
function eL(e) {
    let { rarityBadgeProps: t } = e;
    return (0, i.jsxs)("div", {
        className: E()(ex.AX, ex.sn),
        children: [
            (0, i.jsx)(S.E, { ...t }),
            (0, i.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: er.intl.string(er.t["phYZe+"]),
            }),
        ],
    });
}
function ez() {
    return (0, i.jsx)(T.m, {
        text: er.intl.string(er.t.goKu4e),
        children: (0, i.jsxs)("span", {
            className: ex.Gb,
            children: [
                (0, i.jsx)(C.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    className: ex.LS,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: er.intl.string(er.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eP() {
    return (0, i.jsx)(z.A, { height: 3, width: 3, "aria-hidden": "true", className: ex.zN });
}
function e$(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: ex.U3,
              children: t.map((e, t) => {
                  let { key: n, node: l } = e;
                  return (0, i.jsxs)("span", { className: ex.Hq, children: [t > 0 && (0, i.jsx)(eP, {}), l] }, n);
              }),
          });
}
function eG(e) {
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
        m = (0, M.uJ)(t.info_label) ? void 0 : t.info_label,
        g = (0, N.HW)(t.badge_id),
        { statusText: x, toggleText: h } = (function (e) {
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
                        : er.intl.string(er.t.uHtDcT)
                    : a && null != s
                      ? er.intl.formatToPlainString(er.t.Eo5Cnp, { username: e_(s) })
                      : i.owned
                        ? c
                        : er.intl.string(er.t.uHtDcT)),
                !l)
            ) {
                let e = !a && r && null != s;
                a && d
                    ? (n = er.intl.string(er.t.yxEAGH))
                    : e && (n = er.intl.formatToPlainString(er.t["9GNsge"], { username: e_(s) }));
            }
            return { statusText: t, toggleText: n };
        })({
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: l,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    (g && _.push({ key: "beta", node: (0, i.jsx)(ez, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, i.jsxs)("span", {
                    className: ex.pC,
                    children: [
                        !n && null != s && (0, i.jsx)(B.eu, { src: s, size: eg._3.SIZE_16, "aria-hidden": !0 }),
                        (0, i.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: ex.$L,
                            children: x,
                        }),
                    ],
                }),
            }),
        null != m &&
            _.push({
                key: "info",
                node: (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: ex.$L,
                    children: m,
                }),
            }));
    let b = _.length >= 3 && null != h,
        v =
            null != h
                ? {
                      key: "toggle",
                      node: (0, i.jsx)(U.Q, {
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
              className: ex.rI,
              children: [(0, i.jsx)(e$, { segments: j }), b && null != v && (0, i.jsx)(e$, { segments: [v] })],
          });
}
function eM(e) {
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
            isOwnProfile: p,
            isViewingOtherUser: A,
            targetUsername: I,
            displayedUserId: S,
            targetOwnsBadge: T,
            viewerOwnsBadge: C,
            onToggleViewedUser: B,
            onViewOwnCatalog: U,
        } = e,
        z = em(S, A, 32),
        H = (0, N.DW)(h),
        Z = (0, s.bG)([L.Ay], () => L.Ay.useReducedMotion)
            ? void 0
            : (H?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        J = H?.complex_icon_static_url ?? h.complex_icon_static_url,
        Y = H?.simple_icon_url ?? h.simple_icon_url,
        q = Z ?? J ?? Y,
        K = eR(H?.rarity ?? h.rarity) ?? void 0,
        W = ec[h.badge_id],
        Q = h.badge_id === w.$.PREMIUM_TENURE,
        X = Q ? (H?.name ?? H?.key) : H?.name,
        ee = Q ? er.intl.string(er.t.Ipxkog) : h.name;
    Q ? (r = null != X ? `${ee} ${X}` : ee) : null != X ? ((a = ee), (r = X)) : (r = ee);
    let et = (0, V.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== w.$.STAFF,
        en = (h.tiers?.length ?? 0) > 0,
        ei = (0, v.H5)(h),
        el = (function (e) {
            let [t, n] = l.useState(eF),
                [i, a] = l.useState(e);
            return (e !== i && (a(e), n(eF())), t);
        })(h.badge_id);
    c = h.owned
        ? h.badge_id === w.$.APRIL_FOOLS_2026
            ? er.intl.string(er.t["5LcHT0"])
            : et && null == ei
              ? el
              : (function (e) {
                    if (null == e) return;
                    let t = new Date(e);
                    if (!Number.isNaN(t.getTime()))
                        return t.toLocaleDateString(er.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(ei)
        : en
          ? "--"
          : void 0;
    let ea = ((n = null == (t = h.tiers?.[0]?.key) || H?.key === t), er.intl.string(n ? er.t.WDhIz2 : er.t.wYaDmz)),
        ed = null != c && h.badge_id !== w.$.STAFF,
        eu = null != K,
        eg = null;
    ((ed || eu) &&
        (eg = (0, i.jsxs)("div", {
            className: E()(ex.$S, (!ed || !eu) && ex.jQ),
            children: [
                ed && null != c && (0, i.jsx)(eD, { earnedDateText: c, label: ea }),
                eu && (0, i.jsx)(eL, { rarityBadgeProps: K }),
            ],
        })),
        ed || (g = er.intl.string(er.t.sTFApF)));
    let e_ = _.default.getCurrentUser()?.premiumType,
        eb = Q && (e_ === es.PremiumTypes.TIER_0 || e_ === es.PremiumTypes.TIER_1);
    x =
        !eb && b?.owned === !0 && (b.tiers?.length ?? 0) > 0 && null == b.next_tier
            ? er.intl.string(er.t.jY5xAL)
            : eb
              ? er.intl.string(er.t.qkwSSp)
              : (b?.description ?? h.description);
    let ev = l.useCallback(() => {
            null != W &&
                (f({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: S,
                    isSociallyNavigated: A,
                }),
                j(),
                D.A.popAll(),
                W.ctaAction());
        }, [h, S, A, W, j]),
        ej =
            !A || h.is_earnable || C || h.badge_id === w.$.STAFF
                ? null
                : (0, i.jsx)(O.w, { type: "info", children: er.intl.format(er.t.vFekBs, { onViewBadges: U }) }),
        eN = (0, s.bG)([G.A], () => G.A.hasConsented(y.YAq.PERSONALIZATION)),
        ep = (0, N.Jn)(h.badge_id) && !A && !eN;
    return (0, i.jsx)(R.F, {
        forceLevel: 2,
        children: (0, i.jsx)("div", {
            id: eo,
            role: "tabpanel",
            "aria-labelledby": eh(h.badge_id),
            className: ex.SV,
            children: (0, i.jsxs)(k.d_, {
                className: ex.C9,
                children: [
                    (0, i.jsx)("div", { className: ex.Gw, children: (0, i.jsx)(d.J, { onClick: j, size: "sm" }) }),
                    null != q &&
                        (0, i.jsx)("img", {
                            className: E()(ex.y2, null != Z && q === Z && ex.hu),
                            src: q,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, i.jsxs)("div", {
                        className: ex.OU,
                        children: [
                            (0, i.jsx)("div", {
                                className: ex.cQ,
                                children: (0, i.jsxs)("div", {
                                    className: ex.nj,
                                    children: [
                                        (0, i.jsxs)(o.D, {
                                            variant: Q ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: E()(ex._r, Q && ex.ve),
                                            children: [
                                                null != a &&
                                                    (0, i.jsx)(u.E, {
                                                        tag: "span",
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        className: ex.$g,
                                                        children: a,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, i.jsx)(eG, {
                                            badge: h,
                                            isOwnProfile: p,
                                            isViewingOtherUser: A,
                                            targetUsername: I,
                                            viewedAvatarSrc: z,
                                            targetOwnsBadge: T,
                                            viewerOwnsBadge: C,
                                            unlockedStatusText: g,
                                            onToggleViewedUser: B,
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: ex.oA,
                                children: [
                                    ep &&
                                        (0, i.jsx)(O.w, {
                                            type: "info",
                                            children: er.intl.format(er.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, $.openUserSettings)(P.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eg,
                                    !(0, M.uJ)(x) &&
                                        (0, i.jsxs)("div", {
                                            className: ex.d9,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: ex.E4,
                                                    children: [
                                                        (0, i.jsxs)("div", {
                                                            className: ex.jv,
                                                            children: [
                                                                et &&
                                                                    (0, i.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: ex.c$,
                                                                        children: er.intl.string(er.t["/Gmn3f"]),
                                                                    }),
                                                                (0, i.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: ex.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != W &&
                                                            (0, i.jsx)(m.$, {
                                                                variant: eb
                                                                    ? "expressive"
                                                                    : C
                                                                      ? "secondary"
                                                                      : Q
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: ev,
                                                                text: W.ctaLabel({
                                                                    owned: C,
                                                                    isViewerOnUpgradeableNitro: eb,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                en &&
                                                    (0, i.jsxs)("div", {
                                                        className: ex.cJ,
                                                        children: [
                                                            (0, i.jsx)(F.c, {}),
                                                            (0, i.jsx)(eS, {
                                                                badge: h,
                                                                viewerBadge: b,
                                                                isViewingOtherUser: A,
                                                                targetUsername: I,
                                                                isViewerOnUpgradeableNitro: eb,
                                                            }),
                                                        ],
                                                    }),
                                                null != ej && (0, i.jsx)("div", { className: ex.Z6, children: ej }),
                                            ],
                                        }),
                                    (0, M.uJ)(x) && ej,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eV = n(470739);
function eH(e) {
    return (0, V.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== w.$.STAFF;
}
let eZ = [er.t["6zFA/T"], er.t.wzZHKl, er.t["+ED/nf"]];
function eJ() {
    let e = Math.floor(Math.random() * eZ.length);
    return er.intl.string(eZ[e]);
}
var eY = n(229667);
function eq(e) {
    let t,
        n,
        a,
        s,
        { badge: r, viewerBadge: d } = e,
        c = l.useId(),
        {
            progress: o,
            threshold: m,
            currentArtUrl: g,
            nextArtUrl: x,
            helperText: h,
        } = ((t = d ?? r),
        (n = (0, N.YU)(t, t.current_tier)),
        (a = (0, N.YU)(t, t.next_tier)),
        {
            progress: (s = t.progress?.[0]),
            threshold: s?.threshold ?? a?.requirements[0]?.threshold ?? null,
            currentArtUrl: n?.complex_icon_static_url ?? n?.simple_icon_url,
            nextArtUrl: a?.complex_icon_static_url ?? a?.simple_icon_url,
            helperText: (0, M.uJ)(s?.progress_helper_text) ? void 0 : s?.progress_helper_text,
        }),
        _ = null != h ? { "aria-labelledby": c } : { "aria-label": er.intl.string(er.t.Uwhb1l) };
    return (0, i.jsxs)("div", {
        className: eY.NE,
        children: [
            (0, i.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: er.intl.string(er.t["2m/g2c"]),
            }),
            (0, i.jsxs)("div", {
                className: eY.ES,
                children: [
                    null != g &&
                        (0, i.jsx)("img", { className: eY.Tw, src: g, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: eY.Bd,
                        children: [
                            null != h && (0, i.jsx)(u.E, { id: c, variant: "text-sm/medium", children: h }),
                            null != m
                                ? (0, i.jsx)(eN.z, {
                                      value: o?.current ?? 0,
                                      minValue: o?.floor ?? 0,
                                      maxValue: m,
                                      size: "md",
                                      className: eY.hr,
                                      ..._,
                                  })
                                : null != o &&
                                  (0, i.jsx)(eN.z, { isIndeterminate: !0, size: "md", className: eY.hr, ..._ }),
                        ],
                    }),
                    null != x &&
                        (0, i.jsx)("img", { className: eY.Tw, src: x, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eK = n(149285);
function eW(e) {
    let { badge: t, isViewingOtherUser: n, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = l.useId(),
        d = n && null != a;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(F.c, {}),
                        (0, i.jsx)("div", {
                            className: eK.u4,
                            children: (0, i.jsx)(u.E, {
                                id: r,
                                variant: "text-sm/medium",
                                children: er.intl.formatToPlainString(er.t.KyTwIh, { username: a }),
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: eK.SV,
                role: "list",
                "aria-label": d ? void 0 : t.name,
                "aria-labelledby": d ? r : void 0,
                children: t.tiers.map((e) => {
                    let l = e.owned,
                        a = !l && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (0, N.Vs)({ tier: e, isUnlocked: l, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: E()(eK.zh, a && eK.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", {
                                        className: eK.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, i.jsxs)("div", {
                                    className: eK.hI,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)(u.E, {
                                                variant: "text-xs/semibold",
                                                color: l ? "text-default" : "text-muted",
                                                className: eK.nU,
                                                children: d,
                                            }),
                                        "" !== c &&
                                            (0, i.jsxs)(u.E, {
                                                variant: "text-xs/normal",
                                                color: l ? "text-subtle" : "text-muted",
                                                className: eK.nU,
                                                children: [
                                                    !l &&
                                                        (0, i.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eK.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    c,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(eA.A, { children: er.intl.string(l ? er.t.sTFApF : er.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eQ = n(148204);
function eX() {
    return (0, i.jsx)(z.A, { height: 3, width: 3, "aria-hidden": "true", className: eQ.zN });
}
function e0(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: eQ.U3,
              children: t.map((e, t) => {
                  let { key: n, node: l } = e;
                  return (0, i.jsxs)("span", { className: eQ.Hq, children: [t > 0 && (0, i.jsx)(eX, {}), l] }, n);
              }),
          });
}
function e1(e) {
    let t,
        n,
        a,
        r,
        c,
        g,
        {
            badge: x,
            viewerBadge: h,
            onClose: b,
            isViewingOtherUser: j,
            targetUsername: p,
            displayedUserId: A,
            viewerOwnsBadge: I,
            onViewOwnCatalog: C,
        } = e,
        B = (0, N.DW)(x),
        { animatedUrl: U, imageUrl: z } =
            ((n =
                (t = (0, s.bG)([L.Ay], () => L.Ay.useReducedMotion)
                    ? void 0
                    : (B?.complex_icon_animated_url ?? x.complex_icon_animated_url)) ??
                B?.complex_icon_static_url ??
                x.complex_icon_static_url ??
                B?.simple_icon_url ??
                x.simple_icon_url),
            { animatedUrl: t, imageUrl: n }),
        V = B?.rarity ?? x.rarity,
        H = eR(V) ?? void 0,
        Z = ec[x.badge_id],
        {
            isNitro: J,
            eyebrow: Y,
            displayName: q,
        } = ((r = (a = x.badge_id === w.$.PREMIUM_TENURE) ? (B?.name ?? B?.key) : B?.name),
        (c = a ? er.intl.string(er.t.Ipxkog) : x.name),
        a
            ? { isNitro: a, eyebrow: void 0, displayName: null != r ? `${c} ${r}` : c }
            : null != r && x.owned
              ? { isNitro: a, eyebrow: c, displayName: r }
              : { isNitro: a, eyebrow: void 0, displayName: c }),
        K = eH(x),
        W = (x.tiers?.length ?? 0) > 0,
        Q = (function (e) {
            let [t, n] = l.useState(eJ),
                [i, a] = l.useState(e);
            return (e !== i && (a(e), n(eJ())), t);
        })(x.badge_id),
        X =
            ((g = (0, v.H5)(x)),
            x.owned
                ? x.badge_id === w.$.APRIL_FOOLS_2026
                    ? er.intl.string(er.t["5LcHT0"])
                    : eH(x) && null == g
                      ? Q
                      : null != g && x.badge_id !== w.$.STAFF
                        ? er.intl.formatToPlainString(er.t.XmaiRQ, { date: new Date(g) })
                        : er.intl.string(er.t.sTFApF)
                : er.intl.string(er.t.uHtDcT)),
        ee = (0, M.uJ)(x.info_label) ? void 0 : x.info_label,
        et = x.owned && V !== eT.x.COMMON && null != H,
        en = [];
    (null != ee &&
        en.push({
            key: "info",
            node: (0, i.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: "text-subtle",
                className: eQ.$L,
                children: ee,
            }),
        }),
        en.push({
            key: "status",
            node: (0, i.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: "text-subtle",
                className: eQ.$L,
                children: X,
            }),
        }),
        et && en.push({ key: "rarity", node: (0, i.jsx)(S.E, { ...H }) }));
    let ei = _.default.getCurrentUser()?.premiumType,
        el = x.badge_id === w.$.PREMIUM_TENURE && (ei === es.PremiumTypes.TIER_0 || ei === es.PremiumTypes.TIER_1),
        ea = (function (e) {
            let { badge: t, viewerBadge: n, isViewerOnUpgradeableNitro: i } = e;
            return !i && n?.owned === !0 && (n.tiers?.length ?? 0) > 0 && null == n.next_tier
                ? er.intl.string(er.t.jY5xAL)
                : i
                  ? er.intl.string(er.t.qkwSSp)
                  : (n?.description ?? t.description);
        })({ badge: x, viewerBadge: h, isViewerOnUpgradeableNitro: el }),
        ed = l.useCallback(() => {
            null != Z &&
                (f({
                    actionName: "primary_badge_action_clicked",
                    badge: x,
                    displayedUserId: A,
                    isSociallyNavigated: j,
                }),
                b(),
                D.A.popAll(),
                Z.ctaAction());
        }, [x, A, j, Z, b]),
        eu = !(function (e) {
            let { badge: t, isViewingOtherUser: n, viewerOwnsBadge: i } = e;
            return n && !t.is_earnable && !i && t.badge_id !== w.$.STAFF;
        })({ badge: x, isViewingOtherUser: j, viewerOwnsBadge: I })
            ? null
            : (0, i.jsx)(O.w, { type: "info", children: er.intl.format(er.t.vFekBs, { onViewBadges: C }) }),
        em = (function (e) {
            let { badge: t, isViewingOtherUser: n } = e,
                i = (0, s.bG)([G.A], () => G.A.hasConsented(y.YAq.PERSONALIZATION));
            return (0, N.Jn)(t.badge_id) && !n && !i;
        })({ badge: x, isViewingOtherUser: j }),
        eg = (function (e) {
            let { badge: t, viewerBadge: n, isViewingOtherUser: i } = e,
                l = (0, s.bG)([G.A], () => G.A.hasConsented(y.YAq.PERSONALIZATION)),
                a = n ?? t,
                r = null != (0, N.YU)(a, a.next_tier),
                d = (0, N.Jn)(t.badge_id) && !l;
            return !i && a.owned && r && !d;
        })({ badge: x, viewerBadge: h, isViewingOtherUser: j }),
        ex = !(0, M.uJ)(ea),
        e_ = eg || ex || W,
        eb = j ? x : (h ?? x);
    return (0, i.jsx)(R.F, {
        forceLevel: 2,
        children: (0, i.jsxs)("div", {
            id: eo,
            role: "tabpanel",
            "aria-labelledby": eh(x.badge_id),
            className: eQ.SV,
            children: [
                (0, i.jsx)("div", { className: eQ.Gw, children: (0, i.jsx)(d.J, { onClick: b, size: "sm" }) }),
                (0, i.jsxs)(k.d_, {
                    className: eQ.C9,
                    children: [
                        (0, i.jsx)("div", {
                            className: eQ.Rm,
                            children:
                                (0, N.HW)(x.badge_id) &&
                                (0, i.jsx)(T.m, {
                                    text: er.intl.string(er.t.goKu4e),
                                    children: (0, i.jsx)("span", {
                                        className: eQ.mC,
                                        children: (0, i.jsx)(S.E, { type: "beta" }),
                                    }),
                                }),
                        }),
                        null != z &&
                            (0, i.jsx)("img", {
                                className: E()(eQ.y2, null != U && eQ.hu),
                                src: z,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        (0, i.jsxs)("div", {
                            className: eQ.OU,
                            children: [
                                (0, i.jsx)("div", {
                                    className: eQ.cQ,
                                    children: (0, i.jsxs)("div", {
                                        className: eQ.nj,
                                        children: [
                                            (0, i.jsxs)(o.D, {
                                                variant: J ? "nitro-sm" : "display-sm",
                                                color: "text-strong",
                                                className: E()(eQ._r, J && eQ.ve),
                                                children: [
                                                    null != Y &&
                                                        (0, i.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "text-sm/medium",
                                                            color: "text-subtle",
                                                            className: eQ.$g,
                                                            children: Y,
                                                        }),
                                                    q,
                                                ],
                                            }),
                                            (0, i.jsx)(e0, { segments: en }),
                                        ],
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: eQ.oA,
                                    children: [
                                        em &&
                                            (0, i.jsx)(O.w, {
                                                type: "info",
                                                children: er.intl.format(er.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, $.openUserSettings)(P.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                            }),
                                        e_ &&
                                            (0, i.jsxs)("div", {
                                                className: eQ.d9,
                                                children: [
                                                    eg &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)(eq, { badge: x, viewerBadge: h }),
                                                                (0, i.jsx)(F.c, {}),
                                                            ],
                                                        }),
                                                    ex &&
                                                        (0, i.jsxs)("div", {
                                                            className: E()(eQ.E4, !W && eQ.H),
                                                            children: [
                                                                (0, i.jsxs)("div", {
                                                                    className: eQ.jv,
                                                                    children: [
                                                                        K &&
                                                                            (0, i.jsx)(u.E, {
                                                                                variant: "text-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: eQ.c$,
                                                                                children: er.intl.string(
                                                                                    er.t["/Gmn3f"],
                                                                                ),
                                                                            }),
                                                                        (0, i.jsx)(u.E, {
                                                                            variant: "text-sm/medium",
                                                                            color: "text-default",
                                                                            className: eQ.ij,
                                                                            children: ea,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != Z &&
                                                                    (0, i.jsx)(m.$, {
                                                                        variant: (function (e) {
                                                                            let {
                                                                                isNitro: t,
                                                                                isViewerOnUpgradeableNitro: n,
                                                                                viewerOwnsBadge: i,
                                                                            } = e;
                                                                            return n
                                                                                ? "expressive"
                                                                                : i
                                                                                  ? "secondary"
                                                                                  : t
                                                                                    ? "expressive"
                                                                                    : "primary";
                                                                        })({
                                                                            isNitro: J,
                                                                            isViewerOnUpgradeableNitro: el,
                                                                            viewerOwnsBadge: I,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: ed,
                                                                        text: Z.ctaLabel({
                                                                            owned: I,
                                                                            isViewerOnUpgradeableNitro: el,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    W &&
                                                        (0, i.jsx)("div", {
                                                            className: eQ.cJ,
                                                            children: (0, i.jsx)(eW, {
                                                                badge: eb,
                                                                isViewingOtherUser: j,
                                                                targetUsername: p,
                                                                isViewerOnUpgradeableNitro: el,
                                                            }),
                                                        }),
                                                    null != eu && (0, i.jsx)("div", { className: eQ.Z6, children: eu }),
                                                ],
                                            }),
                                        !e_ && eu,
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var e2 = n(921121);
function e8(e) {
    let {
            transitionState: t,
            onClose: n,
            initialBadgeId: p,
            targetUserId: y,
            targetUsername: I,
            viewingCurrentUserBadges: E,
        } = e,
        w = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        S = null == y || y === w,
        T = (function (e) {
            let { location: t } = e;
            return j.useConfig({ location: t }).enabled;
        })({ location: "BadgeDirectoryModal" }),
        C = !S && null != y && !0 !== E,
        B = C ? y : w,
        U = null != B ? `viewed_user:${C ? "other" : "self"}` : void 0,
        [O, R] = l.useState(p ?? null),
        k = (0, s.yK)([v.Ay], () => (null != B ? v.Ay.getBadges(B) : []), [B]),
        F = (0, s.bG)([v.Ay], () => null != B && v.Ay.hasCatalogFor(B), [B]),
        D = (0, s.bG)([v.Ay], () => v.Ay.hasCatalogFetchErrorFor(B), [B]);
    (l.useEffect(() => {
        null != B && (v.Ay.hasCatalogFor(B) ? v.Ay.isCatalogStaleFor(B) && (0, b.RS)(B) : (0, b.RS)(B));
        let e = C ? w : y;
        S || null == e || v.Ay.hasCatalogFor(e) || (0, b.RS)(e);
    }, [B, S, C, w, y]),
        l.useEffect(() => {
            null != U && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [U] });
        }, [U]));
    let L = l.useMemo(() => {
            let { earnable: e, owned: t } = (0, N.in)(k);
            return C ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [k, C]),
        z = null != O && null != B ? v.Ay.getBadgeById(O, B) : void 0,
        P = null != L && null != B ? v.Ay.getBadgeById(L, B) : void 0,
        $ = z ?? P,
        G = !F && !D,
        M = !F && D,
        V = !C;
    l.useEffect(() => {
        M && null != U && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [U] });
    }, [M, U]);
    let H = (0, s.bG)([v.Ay], () => null != y && null != $ && (v.Ay.getBadgeById($.badge_id, y)?.owned ?? !1), [$, y]),
        Z = (0, s.bG)([v.Ay], () => (null != w && null != $ ? v.Ay.getBadgeById($.badge_id, w) : void 0), [$, w]),
        J = Z?.owned ?? !1,
        Y = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eV._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    n();
                });
            },
            [n],
        ),
        q = l.useCallback(() => {
            null != y &&
                null != $ &&
                (C
                    ? Y({
                          initialBadgeId: $.badge_id,
                          targetUserId: y,
                          targetUsername: I,
                          viewingCurrentUserBadges: !0,
                      })
                    : Y({ initialBadgeId: $.badge_id, targetUserId: y, targetUsername: I }));
        }, [C, $, Y, y, I]),
        K = l.useCallback(() => {
            null != w &&
                null != y &&
                (f({ actionName: "view_your_badges_pressed", badge: $, displayedUserId: B, isSociallyNavigated: C }),
                Y({ targetUserId: y, targetUsername: I, viewingCurrentUserBadges: !0 }));
        }, [w, B, C, $, Y, y, I]),
        W = l.useCallback(() => {
            null != B && (0, b.RS)(B, { isRetry: !0 });
        }, [B]),
        Q = l.useCallback(() => {
            (f({ actionName: "badge_directory_closed", badge: $, displayedUserId: B, isSociallyNavigated: C }), n());
        }, [B, C, n, $]),
        X = l.useCallback(() => {
            null != w &&
                (f({
                    actionName: "customize_your_badges_pressed",
                    badge: $,
                    displayedUserId: B,
                    isSociallyNavigated: C,
                }),
                Q(),
                A.A.setState({ isOpen: !0 }),
                (0, h.kN)(w) || (0, x.openUserProfileModal)({ userId: w }));
        }, [w, B, Q, C, $]),
        ee = $?.badge_id;
    return (
        l.useEffect(() => {
            null != ee && V && ed.has(ee) && (0, b.PV)(ee);
        }, [ee, V]),
        l.useEffect(() => {
            null != $ && f({ actionName: "badge_detail_viewed", badge: $, displayedUserId: B, isSociallyNavigated: C });
        }, [ee, B, C]),
        (0, i.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": er.intl.string(er.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: T ? e2.C : ex.CR,
            children: (0, i.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: ex.jE,
                children: [
                    (G || M || null == $) &&
                        (0, i.jsx)("div", { className: ex.b, children: (0, i.jsx)(d.J, { onClick: Q, size: "sm" }) }),
                    G
                        ? (0, i.jsx)("div", { className: ex.Lq, children: (0, i.jsx)(c.y, {}) })
                        : M
                          ? (0, i.jsxs)("div", {
                                className: ex.IU,
                                children: [
                                    (0, i.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: er.intl.string(er.t.iufib1),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: ex.TQ,
                                        children: er.intl.string(er.t.eAn6z2),
                                    }),
                                    (0, i.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: W,
                                        text: er.intl.string(er.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ej, {
                                        selectedBadgeId: $?.badge_id ?? null,
                                        onSelectBadge: R,
                                        displayedUserId: B,
                                        isViewingOtherUser: C,
                                        targetUsername: I,
                                        onViewOwnCatalog: K,
                                        onCustomizeBadges: X,
                                        showBadgeIndicators: V,
                                    }),
                                    null != $ &&
                                        (T
                                            ? (0, i.jsx)(e1, {
                                                  badge: $,
                                                  viewerBadge: Z,
                                                  onClose: Q,
                                                  isViewingOtherUser: C,
                                                  targetUsername: I,
                                                  displayedUserId: B,
                                                  viewerOwnsBadge: J,
                                                  onViewOwnCatalog: K,
                                              })
                                            : (0, i.jsx)(eM, {
                                                  badge: $,
                                                  viewerBadge: Z,
                                                  onClose: Q,
                                                  isOwnProfile: S,
                                                  isViewingOtherUser: C,
                                                  targetUsername: I,
                                                  displayedUserId: B,
                                                  targetOwnsBadge: H,
                                                  viewerOwnsBadge: J,
                                                  onToggleViewedUser: q,
                                                  onViewOwnCatalog: K,
                                              })),
                                ],
                            }),
                ],
            }),
        })
    );
}
