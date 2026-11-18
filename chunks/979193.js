l.d(a, { default: () => ek });
var t = l(477900),
    i = l(582128),
    n = l(731738),
    s = l(855986),
    r = l(935462),
    d = l(231723),
    o = l(815021),
    c = l(289873),
    u = l(534514),
    g = l(834730),
    m = l(821609),
    x = l(913379),
    b = l(702476),
    h = l(403777),
    v = l(287809),
    _ = l(682618),
    y = l(257339),
    j = l(982240),
    N = l(620143),
    p = l(988341),
    A = l(129230),
    f = l(652215);
function E(e) {
    let {
            actionName: a,
            badge: l,
            displayedUserId: t,
            isSociallyNavigated: i,
            hasUnreadIndicator: n,
            source: s,
            surface: r,
        } = e,
        d = v.default.getCurrentUser()?.id,
        o = null != l && null != d ? j.Ay.getBadgeById(l.badge_id, d) : void 0,
        c = null != l && null != d ? j.Ay.getRemainingToNextTier(l.badge_id, d) : void 0,
        u = null != t ? j.Ay.getBadges(t).filter((e) => e.owned).length : void 0;
    A.default.track(f.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: a,
        badge_id: l?.badge_id,
        badge_tier: null != l ? ((l.owned ? l.current_tier : l.next_tier) ?? l.tiers?.[0]?.key) : void 0,
        badge_owner_id: t,
        is_owned: o?.owned ?? !1,
        progress_to_next_tier: c,
        is_earnable: l?.is_earnable ?? !1,
        is_socially_navigated: i,
        total_badges_owned: u,
        has_unread_indicator: n,
        surface: r,
        source: s,
    });
}
var I = l(248284),
    S = l(737667);
l(321073);
var w = l(503698),
    C = l.n(w),
    B = l(536001),
    T = l(805251),
    O = l(683071),
    R = l(707554),
    U = l(95362),
    k = l(404778),
    D = l(136969),
    M = l(775602),
    G = l(640708),
    L = l(780964),
    F = l(766075),
    z = l(515718),
    $ = l(240248),
    P = l(49253),
    V = l(792996);
let H = [V.t["6zFA/T"], V.t.wzZHKl, V.t["+ED/nf"]];
function Z() {
    let e = Math.floor(Math.random() * H.length);
    return V.intl.string(H[e]);
}
var Y = l(153488),
    q = l(837381),
    J = l(116903),
    K = l(741918),
    Q = l(70283),
    W = l(939249),
    X = l(97808),
    ee = l(643056),
    ea = l(486020),
    el = l(696292),
    et = l(975807),
    ei = l(990820),
    en = l(216934),
    es = l(976860),
    er = l(758836),
    ed = l(682901);
let eo = {
        [Q.$.STAFF]: {
            ctaLabel: () => V.intl.string(V.t.q7A8hP),
            ctaAction: () => (0, et.A)("https://discord.com/careers"),
        },
        [Q.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: a, isViewerOnUpgradeableNitro: l } = e;
                return !0 === l ? V.intl.string(V.t.uKFeS1) : a ? V.intl.string(V.t.xGjjkd) : V.intl.string(V.t.BTxm69);
            },
            ctaAction: () => (0, es.pX)(f.BVt.NITRO_HOME),
        },
        [Q.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: a } = e;
                return a ? V.intl.string(V.t.VMvz3m) : V.intl.string(V.t.xFVZeU);
            },
            ctaAction: () => (0, F.openUserSettings)(L.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [Q.$.ORB_PROFILE]: {
            ctaLabel: () => V.intl.string(V.t.fG3RIg),
            ctaAction: () => (0, es.pX)(f.BVt.COLLECTIBLES_SHOP_WITH_TAB(er.G2.ORBS)),
        },
        [Q.$.QUEST_COMPLETED]: {
            ctaLabel: () => V.intl.string(V.t.swICIT),
            ctaAction: () => (0, en.m)({ fromContent: el.u.QUEST_BADGE }),
        },
        [Q.$.GIFTING]: {
            ctaLabel: () => V.intl.string(V.t["nUA/JW"]),
            ctaAction: () => (0, ei.A)({ giftingOrigin: ed.vQ.BADGE_DIRECTORY }),
        },
    },
    ec = "badge-details";
var eu = l(778712),
    eg = l(177861);
function em(e) {
    return `badge-tab-${e}`;
}
function ex(e) {
    let { badge: a, isSelected: l, onSelect: n, itemId: s, showBadgeIndicator: r } = e,
        d = (0, q.rm)(s),
        o = a.owned ? a.current_tier : a.next_tier,
        c =
            null != o
                ? a.tiers.find((e) => {
                      let { key: a } = e;
                      return a === o;
                  })
                : void 0,
        u = a.badge_id === Q.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        g = null != u ? `${a.name}, ${u}` : a.name,
        m = r ? `${g}, ${V.intl.string(V.t.y2b7CA)}` : g,
        x = i.useRef(null);
    return (0, t.jsxs)(W.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: em(a.badge_id),
        "aria-label": m,
        "aria-selected": l,
        "aria-controls": l ? ec : void 0,
        className: C()(eg.oL, l && eg.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), n());
        },
        children: [
            r && (0, t.jsx)("span", { "aria-hidden": !0, className: eg.Dn }),
            null != a.simple_icon_url &&
                (0, t.jsx)("img", {
                    src: a.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: eg.pW,
                }),
        ],
    });
}
function eb(e) {
    let { label: a, navId: l, badges: i, selectedBadgeId: n, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, J.Ay)({
            id: l,
            isEnabled: !0,
            orientation: K.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, t.jsxs)("div", {
        className: eg.zE,
        children: [
            "heading" === a.type &&
                (0, t.jsx)(u.D, { id: a.id, variant: "heading-xs/medium", color: "text-default", children: a.text }),
            (0, t.jsx)(q.hD, {
                navigator: d,
                children: (0, t.jsx)(q.PR, {
                    children: (e) =>
                        (0, t.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === a.type ? a.id : void 0,
                            "aria-label": "aria" === a.type ? a.text : void 0,
                            className: eg.yq,
                            children: i.map((e, a) => {
                                let l = e.badge_id === n;
                                return (0, t.jsx)(
                                    ex,
                                    {
                                        itemId: `item-${a}`,
                                        badge: e,
                                        isSelected: l,
                                        onSelect: () => s(e.badge_id),
                                        showBadgeIndicator: !l && r.has(e.badge_id),
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
function eh(e) {
    let a,
        {
            selectedBadgeId: l,
            onSelectBadge: n,
            displayedUserId: r,
            isViewingOtherUser: d,
            targetUsername: o,
            onViewOwnCatalog: c,
            onCustomizeBadges: x,
            showBadgeIndicators: b,
        } = e,
        h = (0, s.yK)([j.Ay], () => (null != r ? j.Ay.getBadges(r) : []), [r]),
        { earnable: _, owned: y } = i.useMemo(() => (0, p.in)(h), [h]),
        A = i.useMemo(() => [...y, ..._], [y, _]),
        { badgeIndicatorIds: f } = (0, S.Vv)({ badges: A, enabled: b }),
        E = i.useMemo(() => new Set(b ? A.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [b, A]),
        I = (0, N.e)({ location: "BadgeDirectoryPanel", hasUnread: E.size > 0 }),
        w = i.useMemo(() => (I ? new Set([...f, ...E]) : f), [I, f, E]),
        C = (function (e, a) {
            let l = (0, s.bG)([v.default], () => (null != e ? v.default.getUser(e) : void 0), [e]);
            if (null != l && a)
                return (0, ea.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, 48);
        })(r, d),
        B = (0, ee.d)({ location: "BadgeDirectoryPanel" }),
        T = null != o ? ((a = Array.from(o)).length > 19 ? `${a.slice(0, 19).join("")}...` : o) : null,
        O = null != o && T !== o,
        k =
            null != T && O && null != C
                ? (0, t.jsxs)("span", {
                      className: eg._p,
                      children: [(0, t.jsx)(X.eu, { src: C, size: eu._3.SIZE_24, "aria-hidden": !0 }), T],
                  })
                : T,
        D = d && null != k ? V.intl.format(V.t.EIcwoe, { username: k }) : V.intl.string(V.t.UqnlQF),
        M = d && null != o ? V.intl.string(V.t["75s2Rq"]) : V.intl.string(V.t["62xU4E"]),
        G = d && null != o ? V.intl.formatToPlainString(V.t.BCjSZy, { username: o }) : V.intl.string(V.t.UqnlQF);
    return (0, t.jsx)("div", {
        className: eg.ws,
        children: (0, t.jsxs)(R.F, {
            component: (0, t.jsxs)("div", {
                className: eg.NG,
                children: [
                    (0, t.jsxs)("div", {
                        className: eg.kc,
                        children: [
                            !O && null != C && (0, t.jsx)(X.eu, { src: C, size: eu._3.SIZE_24, "aria-hidden": !0 }),
                            (0, t.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: D }),
                        ],
                    }),
                    (0, t.jsx)(g.E, { variant: "body-sm/medium", color: "text-subtle", children: M }),
                ],
            }),
            children: [
                (0, t.jsxs)(U.Ip, {
                    className: eg.hG,
                    children: [
                        y.length > 0 &&
                            (0, t.jsx)(eb, {
                                label: { type: "aria", text: G },
                                navId: "badge-directory-owned",
                                badges: y,
                                selectedBadgeId: l,
                                onSelectBadge: n,
                                badgeIndicatorIds: w,
                            }),
                        !d &&
                            _.length > 0 &&
                            (0, t.jsx)(eb, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: V.intl.string(V.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: _,
                                selectedBadgeId: l,
                                onSelectBadge: n,
                                badgeIndicatorIds: w,
                            }),
                    ],
                }),
                (d || B) &&
                    (0, t.jsx)("div", {
                        className: eg.HO,
                        children: d
                            ? (0, t.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: V.intl.string(V.t.msyp90),
                              })
                            : (0, t.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: x,
                                  text: V.intl.string(V.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var ev = l(911608),
    e_ = l(10583);
function ey(e) {
    let { badge: a, viewerBadge: l } = e,
        n = i.useId(),
        { progress: s, threshold: r, currentArtUrl: d, nextArtUrl: o, helperText: c } = (0, P.dy)(a, l),
        u = null != c ? { "aria-labelledby": n } : { "aria-label": V.intl.string(V.t.Uwhb1l) };
    return (0, t.jsxs)("div", {
        className: e_.NE,
        children: [
            (0, t.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: V.intl.string(V.t["2m/g2c"]),
            }),
            (0, t.jsxs)("div", {
                className: e_.ES,
                children: [
                    null != d &&
                        (0, t.jsx)("img", { className: e_.Tw, src: d, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, t.jsxs)("div", {
                        className: e_.Bd,
                        children: [
                            null != c && (0, t.jsx)(g.E, { id: n, variant: "body-sm/medium", children: c }),
                            null != r
                                ? (0, t.jsx)(ev.z, {
                                      value: s?.current ?? 0,
                                      minValue: s?.floor ?? 0,
                                      maxValue: r,
                                      size: "md",
                                      className: e_.hr,
                                      ...u,
                                  })
                                : null != s &&
                                  (0, t.jsx)(ev.z, { isIndeterminate: !0, size: "md", className: e_.hr, ...u }),
                        ],
                    }),
                    null != o &&
                        (0, t.jsx)("img", { className: e_.Tw, src: o, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var ej = l(647729),
    eN = l(873571),
    ep = l(194261),
    eA = l(140735),
    ef = l(836825);
function eE(e) {
    let { badge: a, isViewingOtherUser: l, targetUsername: n, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = i.useId(),
        d = l && null != n;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            d &&
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(k.c, {}),
                        (0, t.jsx)("div", {
                            className: ef.u4,
                            children: (0, t.jsx)(g.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: V.intl.formatToPlainString(V.t.KyTwIh, { username: n }),
                            }),
                        }),
                    ],
                }),
            (0, t.jsx)("div", {
                className: ef.SV,
                role: "list",
                "aria-label": d ? void 0 : a.name,
                "aria-labelledby": d ? r : void 0,
                children: a.tiers.map((e) => {
                    let i = e.owned,
                        n = !i && a.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, p.Vs)({ tier: e, isUnlocked: i, isViewingOtherUser: l, isViewerOnUpgradeableNitro: s });
                    return (0, t.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: C()(ef.zh, n && ef.ZF),
                            children: [
                                null != r &&
                                    (0, t.jsx)("img", {
                                        className: ef.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, t.jsxs)("div", {
                                    className: ef.hI,
                                    children: [
                                        null != d &&
                                            (0, t.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                color: i ? "text-default" : "text-muted",
                                                className: ef.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, t.jsxs)(g.E, {
                                                variant: "body-xs/normal",
                                                color: i ? "text-subtle" : "text-muted",
                                                className: ef.nU,
                                                children: [
                                                    !i &&
                                                        (0, t.jsx)(ep.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: ef.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, t.jsx)(eA.A, { children: V.intl.string(i ? V.t.sTFApF : V.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eI = l(260981),
    eS = l(540418),
    ew = l(907085),
    eC = l(179820),
    eB = l(954080);
function eT() {
    return (0, t.jsx)(G.A, { height: 3, width: 3, "aria-hidden": "true", className: eB.zN });
}
function eO(e) {
    let { segments: a } = e;
    return 0 === a.length
        ? null
        : (0, t.jsx)("div", {
              className: eB.U3,
              children: a.map((e, a) => {
                  let { key: l, node: i } = e;
                  return (0, t.jsxs)("span", { className: eB.Hq, children: [a > 0 && (0, t.jsx)(eT, {}), i] }, l);
              }),
          });
}
function eR(e) {
    let {
            badge: a,
            viewerBadge: l,
            onClose: n,
            isViewingOtherUser: r,
            targetUsername: d,
            displayedUserId: c,
            viewerOwnsBadge: x,
            onViewOwnCatalog: b,
            isUnread: h = !1,
            unlock: _,
            showNewTag: y = !1,
        } = e,
        j = _ ?? a,
        N = _ ?? l,
        A = (0, p.DW)(j),
        I = (0, s.bG)([M.Ay], () => M.Ay.useReducedMotion),
        [S, w] = i.useState(null),
        G = null != _ && S?.unlock === _,
        H = G && S?.isMotionSkipped === !0,
        q = i.useCallback((e) => w(null != _ ? { unlock: _, isMotionSkipped: e } : null), [_]),
        J = !I && (null != _ ? !G : h),
        K = !I && G,
        Q = i.useMemo(
            () =>
                null != _
                    ? (0, ej.$)({ isLevelUp: null != (0, p.YU)(_, _.previous_acked_tier), isMotionSkipped: H })
                    : void 0,
            [H, _],
        );
    i.useEffect(() => {
        if (!h) return;
        let { previousTier: e, currentTier: a } = (0, eN.VR)(j, j.previous_acked_tier);
        async function l(e) {
            if (null != e)
                try {
                    await (0, z.S4)(e);
                } catch {}
        }
        (l((0, eN.AO)(j, e, !0)), l((0, eN.AO)(j, a, !1)));
    }, [j, h]);
    let { animatedUrl: W, imageUrl: X } = (0, P.NC)(j, A, I),
        ee = A?.rarity ?? j.rarity,
        ea =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case B.x.COMMON:
                        return {
                            type: { text: V.intl.string(V.t.L0K5ci) },
                            variant: "rarity-common",
                            icon: eI.ExperimentalCommonIcon,
                        };
                    case B.x.RARE:
                        return {
                            type: { text: V.intl.string(V.t["sTx/5z"]) },
                            variant: "rarity-rare",
                            icon: eS.ExperimentalRareIcon,
                        };
                    case B.x.EPIC:
                        return {
                            type: { text: V.intl.string(V.t.RD8RiN) },
                            variant: "rarity-epic",
                            icon: ew.ExperimentalEpicIcon,
                        };
                    case B.x.MYTHIC:
                        return {
                            type: { text: V.intl.string(V.t.vqc1ol) },
                            variant: "rarity-mythic",
                            icon: eC.ExperimentalMythicIcon,
                        };
                    default:
                        return null;
                }
            })(ee) ?? void 0,
        el = eo[j.badge_id],
        { isNitro: et, eyebrow: ei, displayName: en } = (0, P.iC)(j, A),
        es = (0, P.f)(j),
        er = (j.tiers?.length ?? 0) > 0,
        ed = (function (e) {
            let [a, l] = i.useState(Z),
                [t, n] = i.useState(e);
            return (e !== t && (n(e), l(Z())), a);
        })(j.badge_id),
        eu = (0, P.HA)(j, ed),
        eg = (0, $.uJ)(j.info_label) ? void 0 : j.info_label,
        ex = j.owned && ee !== B.x.COMMON && null != ea,
        eb = [];
    (null != eg &&
        eb.push({
            key: "info",
            node: (0, t.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eB.$L,
                children: eg,
            }),
        }),
        eb.push({
            key: "status",
            node: (0, t.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eB.$L,
                children: eu,
            }),
        }),
        ex && eb.push({ key: "rarity", node: (0, t.jsx)(T.E, { ...ea }) }));
    let eh = v.default.getCurrentUser()?.premiumType,
        ev = (0, P.Rt)(j, eh),
        e_ = (0, P.JV)({ badge: j, viewerBadge: N, isViewerOnUpgradeableNitro: ev }),
        ep = i.useCallback(() => {
            null != el &&
                (E({
                    actionName: "primary_badge_action_clicked",
                    badge: j,
                    displayedUserId: c,
                    isSociallyNavigated: r,
                }),
                n(),
                D.A.popAll(),
                el.ctaAction());
        }, [j, c, r, el, n]),
        eA = (0, P.eJ)({ badge: j, isViewingOtherUser: r, viewerOwnsBadge: x })
            ? (0, t.jsx)(O.w, { type: "info", message: V.intl.format(V.t.vFekBs, { onViewBadges: b }), role: "none" })
            : null,
        ef = (function (e) {
            let { badge: a, isViewingOtherUser: l } = e,
                t = (0, s.bG)([Y.A], () => Y.A.hasConsented(f.YAq.PERSONALIZATION));
            return (0, p.Jn)(a.badge_id) && !l && !t;
        })({ badge: j, isViewingOtherUser: r }),
        eT = (function (e) {
            let { badge: a, viewerBadge: l, isViewingOtherUser: t } = e,
                i = (0, s.bG)([Y.A], () => Y.A.hasConsented(f.YAq.PERSONALIZATION)),
                n = l ?? a,
                r = null != (0, p.YU)(n, n.next_tier),
                d = (0, p.Jn)(a.badge_id) && !i;
            return !t && n.owned && r && !d;
        })({ badge: j, viewerBadge: N, isViewingOtherUser: r }),
        eR = !(0, $.uJ)(e_),
        eU = eT || eR || er,
        ek = r ? j : (N ?? j);
    return (0, t.jsx)(R.F, {
        forceLevel: 2,
        children: (0, t.jsxs)("div", {
            id: ec,
            role: "tabpanel",
            "aria-labelledby": em(j.badge_id),
            className: eB.SV,
            style: Q,
            children: [
                (0, t.jsx)("div", { className: eB.Gw, children: (0, t.jsx)(o.J, { onClick: n, size: "sm" }) }),
                (0, t.jsxs)(U.d_, {
                    className: C()(eB.C9, J && eB.uT, K && eB.CY),
                    children: [
                        (0, t.jsx)("div", {
                            className: eB.Rm,
                            children: y && (0, t.jsx)(T.E, { type: "new", variant: "primary" }),
                        }),
                        null != _
                            ? (0, t.jsx)(
                                  ej.A,
                                  { badge: _, previousTierKey: _.previous_acked_tier, canStart: !0, onStart: q },
                                  `${_.badge_id}:${_.current_tier}`,
                              )
                            : null != X &&
                              (0, t.jsx)("img", {
                                  className: C()(eB.y2, null != W && et && eB.Zl),
                                  src: X,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: h && null == W ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, t.jsxs)("div", {
                            className: eB.OU,
                            children: [
                                (0, t.jsxs)("div", {
                                    className: eB.cQ,
                                    children: [
                                        (null != _ || h) &&
                                            !I &&
                                            (0, t.jsx)(u.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                className: C()(eB.BI, G && eB.Dp),
                                                "aria-hidden": !0,
                                                children: (0, p.kD)(j, j.previous_acked_tier),
                                            }),
                                        (0, t.jsxs)("div", {
                                            className: eB.nj,
                                            children: [
                                                (0, t.jsxs)(u.D, {
                                                    variant: et ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: C()(eB._r, et && eB.ve),
                                                    children: [
                                                        null != ei &&
                                                            (0, t.jsx)(g.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: eB.$g,
                                                                children: ei,
                                                            }),
                                                        en,
                                                    ],
                                                }),
                                                (0, t.jsx)(eO, { segments: eb }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsxs)("div", {
                                    className: eB.oA,
                                    children: [
                                        ef &&
                                            (0, t.jsx)(O.w, {
                                                type: "info",
                                                message: V.intl.format(V.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, F.openUserSettings)(L.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eU &&
                                            (0, t.jsxs)("div", {
                                                className: eB.d9,
                                                children: [
                                                    eT &&
                                                        (0, t.jsxs)(t.Fragment, {
                                                            children: [
                                                                (0, t.jsx)(ey, { badge: j, viewerBadge: N }),
                                                                (0, t.jsx)(k.c, {}),
                                                            ],
                                                        }),
                                                    eR &&
                                                        (0, t.jsxs)("div", {
                                                            className: C()(eB.E4, !er && eB.H),
                                                            children: [
                                                                (0, t.jsxs)("div", {
                                                                    className: eB.jv,
                                                                    children: [
                                                                        es &&
                                                                            (0, t.jsx)(g.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: eB.c$,
                                                                                children: V.intl.string(V.t["/Gmn3f"]),
                                                                            }),
                                                                        (0, t.jsx)(g.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: eB.ij,
                                                                            children: e_,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != el &&
                                                                    (0, t.jsx)(m.$, {
                                                                        variant: (0, P.Vg)({
                                                                            isNitro: et,
                                                                            isViewerOnUpgradeableNitro: ev,
                                                                            viewerOwnsBadge: x,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: ep,
                                                                        text: el.ctaLabel({
                                                                            owned: x,
                                                                            isViewerOnUpgradeableNitro: ev,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    er &&
                                                        (0, t.jsx)("div", {
                                                            className: eB.cJ,
                                                            children: (0, t.jsx)(eE, {
                                                                badge: ek,
                                                                isViewingOtherUser: r,
                                                                targetUsername: d,
                                                                isViewerOnUpgradeableNitro: ev,
                                                            }),
                                                        }),
                                                    null != eA && (0, t.jsx)("div", { className: eB.Z6, children: eA }),
                                                ],
                                            }),
                                        !eU && eA,
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
var eU = l(470739);
function ek(e) {
    let {
            transitionState: a,
            onClose: l,
            initialBadgeId: A,
            targetUserId: f,
            targetUsername: w,
            viewingCurrentUserBadges: C,
        } = e,
        B = (0, s.bG)([v.default], () => v.default.getCurrentUser()?.id),
        T = null == f || f === B,
        O = !T && null != f && !0 !== C,
        R = O ? f : B,
        U = null != R ? `viewed_user:${O ? "other" : "self"}` : void 0,
        [k, D] = i.useState(A ?? null),
        M = (0, s.yK)([j.Ay], () => (null != R ? j.Ay.getBadges(R) : []), [R]),
        G = (0, s.bG)([j.Ay], () => null != R && j.Ay.hasCatalogFor(R), [R]),
        L = (0, s.bG)([j.Ay], () => j.Ay.hasCatalogFetchErrorFor(R), [R]),
        F = (0, s.bG)([j.Ay], () => null != R && !j.Ay.isCatalogStaleFor(R), [R]),
        z = !O && M.some((e) => e.owned && !0 === e.has_updates),
        $ = (0, N.e)({ location: "BadgeDirectoryModal", hasUnread: z });
    (i.useEffect(() => {
        null != R && (!j.Ay.hasCatalogFor(R) || j.Ay.isCatalogStaleFor(R)) && (0, _.RS)(R, { isAutomatic: !0 });
        let e = O ? B : f;
        !T && null != e && (!j.Ay.hasCatalogFor(e) || j.Ay.isCatalogStaleFor(e)) && (0, _.RS)(e, { isAutomatic: !0 });
    }, [R, T, O, B, f]),
        i.useEffect(() => {
            null != U && x.A.increment({ name: n.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [U] });
        }, [U]));
    let P = i.useMemo(() => {
            let { earnable: e, owned: a } = (0, p.in)(M);
            if (O) return a[0]?.badge_id ?? null;
            let l = $ ? a.find((e) => !0 === e.has_updates) : void 0;
            return l?.badge_id ?? a[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [M, $, O]),
        H = null != k && null != R ? j.Ay.getBadgeById(k, R) : void 0,
        Z = null != P && null != R ? j.Ay.getBadgeById(P, R) : void 0,
        Y = H ?? Z,
        q = !G && !L,
        J = !G && L,
        K = !O;
    i.useEffect(() => {
        J && null != U && x.A.increment({ name: n.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [U] });
    }, [J, U]);
    let Q = (0, s.bG)([j.Ay], () => (null != B && null != Y ? j.Ay.getBadgeById(Y.badge_id, B) : void 0), [Y, B]),
        W = Q?.owned ?? !1,
        X = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eU.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    l();
                });
            },
            [l],
        ),
        ee = i.useCallback(() => {
            null != B &&
                null != f &&
                (E({ actionName: "view_your_badges_pressed", badge: Y, displayedUserId: R, isSociallyNavigated: O }),
                X({ targetUserId: f, targetUsername: w, viewingCurrentUserBadges: !0 }));
        }, [B, R, O, Y, X, f, w]),
        ea = i.useCallback(() => {
            null != R && (0, _.RS)(R, { isRetry: !0 });
        }, [R]),
        el = i.useCallback(() => {
            (E({ actionName: "badge_directory_closed", badge: Y, displayedUserId: R, isSociallyNavigated: O }), l());
        }, [R, O, l, Y]),
        et = i.useCallback(() => {
            null != B &&
                (E({
                    actionName: "customize_your_badges_pressed",
                    badge: Y,
                    displayedUserId: R,
                    isSociallyNavigated: O,
                }),
                el(),
                I.A.setState({ isOpen: !0 }),
                (0, h.kN)(B) || (0, b.openUserProfileModal)({ userId: B }));
        }, [B, R, el, O, Y]),
        ei = Y?.badge_id;
    (0, S.G5)({ badgeId: ei, enabled: K });
    let en = $ && !O && Y?.has_updates === !0,
        es = (0, s.bG)([y.A], () => K && null != ei && (0, S.Ce)(ei) && !y.A.getSeenBadgeIndicators().has(ei), [ei, K]),
        [er, ed] = i.useState(null);
    er?.badgeId !== ei && ed({ badgeId: ei, hadNewIndicator: es });
    let eo = null != er && er.badgeId === ei && er.hadNewIndicator,
        ec = (0, N.e)({ location: "BadgeDirectoryModal", hasUnread: eo }) && eo,
        eu = a === d.ip.ENTERED && (F || L),
        [em, ex] = i.useState(null);
    return (
        null != em && em.badge_id !== ei ? ex(null) : null == em && en && eu && null != Y && ex({ ...Y }),
        i.useEffect(() => {
            null != em && (D(em.badge_id), (0, _.zd)(em.badge_id));
        }, [em]),
        i.useEffect(() => {
            null != Y && E({ actionName: "badge_detail_viewed", badge: Y, displayedUserId: R, isSociallyNavigated: O });
        }, [ei, R, O]),
        (0, t.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": V.intl.string(V.t.PEjP4L),
            transitionState: a,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: eg.CR,
            children: (0, t.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: eg.jE,
                children: [
                    (q || J || null == Y) &&
                        (0, t.jsx)("div", { className: eg.b, children: (0, t.jsx)(o.J, { onClick: el, size: "sm" }) }),
                    q
                        ? (0, t.jsx)("div", { className: eg.Lq, children: (0, t.jsx)(c.y, {}) })
                        : J
                          ? (0, t.jsxs)("div", {
                                className: eg.IU,
                                children: [
                                    (0, t.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: V.intl.string(V.t.iufib1),
                                    }),
                                    (0, t.jsx)(g.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: eg.TQ,
                                        children: V.intl.string(V.t.eAn6z2),
                                    }),
                                    (0, t.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: ea,
                                        text: V.intl.string(V.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(eh, {
                                        selectedBadgeId: Y?.badge_id ?? null,
                                        onSelectBadge: D,
                                        displayedUserId: R,
                                        isViewingOtherUser: O,
                                        targetUsername: w,
                                        onViewOwnCatalog: ee,
                                        onCustomizeBadges: et,
                                        showBadgeIndicators: K,
                                    }),
                                    null != Y &&
                                        (0, t.jsx)(eR, {
                                            badge: Y,
                                            viewerBadge: Q,
                                            onClose: el,
                                            isViewingOtherUser: O,
                                            targetUsername: w,
                                            displayedUserId: R,
                                            viewerOwnsBadge: W,
                                            onViewOwnCatalog: ee,
                                            isUnread: en,
                                            unlock: em,
                                            showNewTag: ec,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
