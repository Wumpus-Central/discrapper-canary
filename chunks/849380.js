n.d(t, { B: () => aq, T: () => aY }), n(321073);
var i,
    l,
    a = n(627968),
    s = n(64700),
    r = n(735438),
    o = n.n(r),
    d = n(837381),
    c = n(887129),
    u = n(17928),
    h = n(661531),
    _ = n(715828),
    m = n(312138),
    g = n(475825),
    f = n(707554),
    A = n(140735),
    p = n(38021),
    C = n(331322),
    E = n(534514),
    x = n(834730),
    b = n(276293),
    S = n(983851),
    I = n(534890),
    N = n(951001),
    v = n(820284),
    y = n(775602),
    G = n(793574),
    L = n(688810),
    R = n(915089),
    j = n(5180),
    M = n(554146),
    T = n(177953),
    U = n(777666),
    w = n(533550),
    D = n(624458),
    P = n(844944),
    O = n(513461),
    V = n(663997),
    H = n(652793),
    B = n(576705),
    k = n(221950),
    F = n(652215),
    W = n(985018);
function K(e) {
    let { guild: t, selected: n } = e,
        i = (0, u.bG)([B.A], () => B.A.can(F.xBc.KICK_MEMBERS, t)),
        l = (0, u.bG)([P.A], () => P.A.getSubmittedGuildJoinRequestTotal(t.id)),
        r = i ? (l ?? 0) : 0;
    s.useEffect(() => {
        i &&
            t.features.has(F.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            D.A.fetchGuildJoinRequests({ guildId: t.id, status: O.B5.SUBMITTED, limit: V.L });
    }, [i, t]);
    let o = s.useCallback(() => {
            (0, k.aZ)(t.id);
        }, [t.id]),
        d = (0, w.q8)(t.id, M.M.MEMBERS_LAUNCH_UPSELL);
    return (0, a.jsx)("div", {
        ref: d,
        children: (0, a.jsx)(H.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, a.jsx)(T.n, { size: "md", color: "currentColor", className: e }),
            text: W.intl.string(W.t.oclz3Z),
            selected: n,
            onClick: o,
            trailing: r > 0 ? (0, a.jsx)(U.hV, { count: r }) : null,
        }),
    });
}
var z = n(581007),
    Y = n(522435),
    q = n(285406),
    X = n(112905),
    Z = n(419534),
    J = n(395504),
    $ = n(192308),
    Q = n(990078),
    ee = n(939249),
    et = n(789645),
    en = n(687966),
    ei = n(932001),
    el = n(976860),
    ea = n(746080),
    es = n(49999),
    er = n(576709),
    eo = n(494352),
    ed = n(907305);
let ec = s.memo(function (e) {
    let { guildId: t, selected: i } = e,
        [l, r] = (0, ei.ww)([M.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === M.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = s.useCallback(() => {
            r(es.i.USER_DISMISS), (0, el.pX)(F.BVt.CHANNEL(t, ea.VV.GAME_SERVERS));
        }, [t, r]),
        c = s.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, $.openModalLazy)(async () => {
                        let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                        return (n) => (0, a.jsx)(e, { ...n, guildId: t });
                    });
            },
            [t],
        ),
        u = (0, a.jsxs)("div", {
            className: eo.c,
            children: [
                (0, a.jsx)("div", {
                    className: ed.Xs,
                    children: (0, a.jsx)(Q.m, {
                        text: W.intl.string(W.t.fgq1gs),
                        position: "top",
                        children: (0, a.jsx)(ee.D, {
                            onClick: c,
                            "aria-label": W.intl.string(W.t.fgq1gs),
                            children: (0, a.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, a.jsx)("div", {
                        className: ed.yW,
                        children: (0, a.jsx)(U.Lp, {
                            disableColor: !0,
                            text: W.intl.string(W.t.y2b7CA),
                            className: eo.q,
                        }),
                    }),
            ],
        });
    return (0, a.jsx)(H.G, {
        className: ed.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, a.jsx)(en._, { size: "md", className: e, color: "currentColor" }),
        text: W.intl.string(er.default.vCzwM7),
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var eu = n(361158),
    eh = n(186111),
    e_ = n(166978),
    em = n(658809);
let eg = s.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, $.useHasAnyModalOpen)(),
        l = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        r = (0, eu.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ei.ww)([M.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === M.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, _] = (0, ei.ww)(i || l || r || !c ? [] : [M.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        m = s.useCallback(
            (e) => {
                d(e), _(e);
            },
            [d, _],
        ),
        g = s.useCallback(() => {
            m(es.i.USER_DISMISS), (0, el.pX)(F.BVt.CHANNEL(t, ea.VV.GAME_SERVERS));
        }, [t, m]),
        f = s.useRef(null),
        A = h === M.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        p = s.useCallback(() => (0, a.jsx)(e_.mn, { channelRowRef: f, guildId: t, markAsDismissed: m }), [t, m]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(H.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, a.jsx)(en._, { size: "md", className: e, color: "currentColor" }),
                text: W.intl.string(er.default.vCzwM7),
                selected: n,
                onClick: g,
                trailing: c
                    ? (0, a.jsx)(U.Lp, { disableColor: !0, text: W.intl.string(W.t.y2b7CA), className: em.q })
                    : null,
            }),
            A && p(),
        ],
    });
});
var ef = n(503698),
    eA = n.n(ef),
    ep = n(695366),
    eC = n(104510),
    eE = n(544048),
    ex = n(942975),
    eb = n(379229),
    eS = n(941030),
    eI = n(828162),
    eN = n(853513),
    ev = n(738247);
function ey(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eb.cD.WARNING:
            return (0, a.jsx)(ep.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case eb.cD.UNREAD:
            return (0, a.jsx)(U.hV, { count: t.count, color: h.A.colors.BACKGROUND_MOD_STRONG.css });
        default:
            return null;
    }
}
let eG = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    eL = s.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, eS.Ay)(t),
            r = s.useCallback(() => {
                (0, ex.Zm)(t),
                    (0, eI.A)(t, G.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    l?.popout?.markAsDismissed(es.i.INDIRECT_ACTION);
            }, [t, l]),
            o = s.useRef(null),
            d = (0, $.useModalsStore)($.hasAnyModalOpenSelector),
            c = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
            h = (0, eu.xr)((e) => e.fullScreenLayers.length > 0),
            _ = d || c || h,
            m = s.useCallback(() => {
                if (l?.popout == null || _) return null;
                switch (l?.popout?.type) {
                    case eb.o.LEVEL_REACHED:
                        return (0, a.jsx)(e_.HW, { guildId: t, channelRowRef: o, ...l.popout });
                    case eb.o.PERKS_AVAILABLE:
                        return (0, a.jsx)(e_.UB, { guildId: t, channelRowRef: o, ...l.popout });
                    case eb.o.PERKS_PURCHASABLE:
                        return (0, a.jsx)(e_.lw, { guildId: t, channelRowRef: o, ...l.popout });
                    case eb.o.NEW_PERK_AVAILABLE:
                        return (0, a.jsx)(e_.bo, { guildId: t, channelRowRef: o, ...l.popout });
                    case eb.o.BOOST_TO_UNLOCK:
                        return (0, a.jsx)(e_.Gw, { guildId: t, channelRowRef: o, ...l.popout });
                    case eb.o.EXPIRING_PERK:
                        return (0, a.jsx)(e_.Mr, { guildId: t, channelRowRef: o, ...l.popout });
                    case eb.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eb.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, a.jsx)(e_.jz, { guildId: t, channelRowRef: o, ...l.popout });
                    case eb.o.GAME_SERVER_NEW_GAMES:
                        return (0, a.jsx)(e_.YX, { guildId: t, channelRowRef: o, ...l.popout });
                    case eb.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, a.jsx)(e_.Ns, { guildId: t, channelRowRef: o, ...l.popout });
                    default:
                        return (0, a.jsx)("div", {});
                }
            }, [t, l?.popout, o, _]),
            [g, f] = s.useState(null);
        s.useEffect(() => {
            l?.popout == null && f(null);
        }, [l?.popout]);
        let A = s.useCallback((e) => {
            f(e);
        }, []);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(H.G, {
                    ref: o,
                    className: ev.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, a.jsx)(eC._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        l?.popout != null &&
                        (0, a.jsx)("div", {
                            className: ev.Fi,
                            children: (0, a.jsx)(eE.t, {
                                nextScene: null == g ? "animation" : "LOOP",
                                className: ev.UU,
                                sceneSegments: eG,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: A,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, a.jsx)("span", {
                        className: eA()({ [ev.A7]: l?.showUnread === !0 }),
                        children: W.intl.string(eN.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: r,
                    showUnread: l?.showUnread === !0,
                    trailing: (0, a.jsx)(ey, { indicator: l?.indicator }),
                }),
                m(),
            ],
        });
    });
var eR = n(419354),
    ej = n(717421),
    eM = n(442433),
    eT = n(230135),
    eU = n(228366);
let ew = {};
class eD extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (ew = e);
    }
    getState() {
        return ew;
    }
    getCountForGuild(e) {
        return ew[e];
    }
}
let eP = new eD(eU.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
        let { guildId: t, premiumCount: n } = e;
        ew = { ...ew, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        ew = {};
    },
});
var eO = n(147925),
    eV = n(363487),
    eH = n(568065);
function eB(e) {
    return (0, s.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(F.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : F.M2T[F.TVA.TIER_3],
            n = Object.values(eH.sy),
            i = Object.values(eH.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var ek = n(424460);
let eF = s.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: i, premiumSubscriberCount: l, className: r } = e,
        o = n >= i,
        d = Math.min((n / i) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, ej.z)(
            () => ({ width: n === l ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, l],
        );
    return (
        s.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, a.jsxs)("div", {
            ref: t,
            className: ek.hQ,
            children: [
                (0, a.jsx)("div", { className: eA()(ek.L$, r) }),
                (0, a.jsx)(eR.animated.div, { className: eA()(ek.qB, { [ek.mu]: d <= 5 }), style: u }),
                (0, a.jsxs)("div", {
                    className: ek.FS,
                    children: [
                        (0, a.jsxs)("div", {
                            className: ek.Ui,
                            children: [
                                (0, a.jsx)(x.E, {
                                    className: ek.Qq,
                                    variant: "text-xs/semibold",
                                    children: W.intl.string(eN.default.NI6Ihe),
                                }),
                                l >= i &&
                                    (0, a.jsx)(x.E, {
                                        className: ek.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: ek.Ui,
                            children: [
                                (0, a.jsx)(x.E, {
                                    className: eA()(ek.Qq, ek.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? W.intl.formatToPlainString(eN.default["Ehpq+7"], { appliedBoostCount: n })
                                        : W.intl.formatToPlainString(eN.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: i,
                                          }),
                                }),
                                (0, a.jsx)(eO.A, {
                                    width: 12,
                                    height: 12,
                                    direction: eO.A.Directions.RIGHT,
                                    className: eA()(ek.Qq, ek.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function eW(e) {
    let { guild: t, withMargin: i } = e,
        l = eB(t),
        r = (0, eV.A)(t.id),
        o = s.useCallback(() => {
            (0, eI.A)(t.id, G.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([eP], () => eP.getCountForGuild(t.id) ?? 0);
    s.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, eT.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = s.useCallback(
        (e) => {
            r &&
                (0, eM.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, a.jsx)(e, { ...n, guild: t });
                });
        },
        [r, t],
    );
    return (0, a.jsx)(ee.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: eA()(ek.kL, { [ek.aF]: i }),
        onContextMenu: c,
        children: (0, a.jsx)(eF, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function eK(e) {
    let { guild: t, withMargin: n } = e;
    return (0, a.jsx)(eW, { guild: t, withMargin: n });
}
eF.displayName = "GuildPowerupsProgressBarUI";
var ez = n(455234),
    eY = n(181079),
    eq = n(734057),
    eX = n(607567),
    eZ = n(403362),
    eJ = n(996439),
    e$ = n(935208),
    eQ = n(63995),
    e0 = n(69407);
function e1(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, eX.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var e2 = n(787541),
    e9 = n(79858),
    e4 = n(591346),
    e7 = n(769022),
    e6 = n(95701),
    e3 = n(72314),
    e5 = n(808728),
    e8 = n(967198),
    te = n(285114),
    tt = n(960755),
    tn = n(866842),
    ti = n(633965),
    tl = n(702841),
    ta = n(41200),
    ts = n(496767),
    tr = n(134413),
    to = n(701785),
    td = n(101611),
    tc = n(473529),
    tu = n(978165),
    th = n(960253),
    t_ = n(71393),
    tm = n(770666),
    tg = n(508654),
    tf = n(488803),
    tA = n(969117);
let tp = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tC = n(871123),
    tE = n(281405),
    tx = n(3026),
    tb = n(821609),
    tS = n(187322),
    tI = n(847374),
    tN = n(499373),
    tv = n(285796),
    ty = n(914430),
    tG = n(913247),
    tL = n(639627),
    tR = n(686956),
    tj = n(999903),
    tM = n(544169),
    tT = n(422258),
    tU = n(770376),
    tw = n(924985),
    tD = n(769765);
n(667532);
var tP = n(111613);
function tO(e, t) {
    return null != e && null != t && (e === t || ((0, e6.tr)(e) && (0, e6.tr)(t)) || ((0, e6.ay)(e) && (0, e6.ay)(t)));
}
function tV(e, t, n, i) {
    let l = -1;
    if (
        (i.find((e, n) => {
            let { channel: i } = e;
            return i.id === t && ((l = n), !0);
        }),
        l < 0)
    )
        return null;
    for (let t = l; t >= 0 && t < i.length; t += e) {
        let e = i[t];
        if (tO(e.channel.type, n)) return e;
    }
    return null;
}
function tH(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let i = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: i },
                } = t;
                return null != e && (n || tO(e.type, i));
            })
            .find((t, n) => {
                let {
                    channel: { id: l },
                } = t;
                return null != e && l === e.id && ((i = n), !0);
            }),
        i
    );
}
function tB(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function tk(e, t, n, i, l) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: a } = F.rbe;
    if (e.type === a)
        return i === t || (i < t && e.type === n.type)
            ? tB(n)
            : i > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: i } = F.rbe,
                        l = n[(tH(t, n, !0) ?? 0) + 1],
                        a = tV(-1, t.id, e.type, n);
                    return null == a || a.channel.id === e.id
                        ? null
                        : null == l || l.channel.type === i
                          ? { referenceId: a.channel.id, parentId: null }
                          : null;
                })(e, n, l)
              : null;
    if (tO(e.type, n.type)) return tB(n);
    if (i < t) {
        let t, i;
        if (n.type === a) {
            let t = l[(tH(n, l, !0) ?? 0) - 1],
                i = tV(1, n.id, e.type, l);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != i) {
                if (tO(t.channel.type, e.type) || (e.isGuildVocal() && (0, e6.tr)(t.channel.type)))
                    return { referenceId: i.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: i.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = l[(tH(n, l, !0) ?? 0) - 1]),
            (i = tV(1, n.id, e.type, l)),
            null != t || e.isGuildVocal()
                ? (0, e6.tr)(e.type) && null != i && ((0, e6.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: i.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != i ? i.channel.id : null, parentId: null }
        );
    }
    if (n.type === a) {
        let t = l[(tH(n, l, !0) ?? 0) + 1],
            i = tV(-1, n.id, e.type, l);
        if (null != i) {
            if (null == t) return { referenceId: i.channel.id, parentId: n.id };
            if (tO(t.channel.type, e.type) || ((0, e6.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: i.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: i.channel.id, parentId: n.id };
        }
        return null;
    }
    let s = l[(tH(n, l, !0) ?? 0) + 1],
        r = tV(-1, n.id, e.type, l);
    if (null == r) return null;
    if (e.isGuildVocal()) {
        if (null == s || s.channel.isCategory()) return { referenceId: r.channel.id, parentId: n.parent_id };
        if (s.channel.isGuildVocal()) return { referenceId: r.channel.id, parentId: s.channel.parent_id };
    }
    return e.isCategory() && (null == s || s.channel.isCategory())
        ? { referenceId: r.channel.id, parentId: null }
        : null;
}
var tF = n(488926);
let tW = "DRAGGABLE_GUILD_CHANNEL";
function tK(e, t) {
    if (null == e || null == t) return null;
    if (!(0, j.ai)(e)) return eq.A.getChannel(t);
    let n = e5.Ay.getChannels(e),
        i =
            n[e5.I6].find((e) => e.channel.id === t) ??
            n[e5.vM].find((e) => e.channel.id === t) ??
            n[F.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return i?.channel;
}
function tz(e) {
    return (0, tG.T)(
        tW,
        {
            drop(e, t) {
                let n,
                    i = e8.A.getGuildId(),
                    l = t.getItem(),
                    s = tk(tK(i, l.id), l.position, e.channel, e.position, l.channelList);
                if (null == s) return;
                let r = tK(i, l.id);
                if (null == r) return;
                let o = tD.A.getCategories(i),
                    d = t_.A.getGuild(i);
                if (null == d) return;
                let c = (function (e, t, n, i) {
                    let l,
                        a,
                        s = [],
                        r = [],
                        o = i._categories,
                        d = (t) => {
                            var n, i;
                            let r;
                            return (
                                (r =
                                    null == l ||
                                    null == a ||
                                    ((n = l),
                                    (i = a),
                                    +(null == n || null == i || null == t[n] || t[n].channel !== e || null == t[i]))
                                        ? [...t]
                                        : tP.Ay.moveItemFromTo(t, l, a)),
                                (s = s.concat(
                                    tP.Ay.calculatePositionDeltas({
                                        oldOrdering: t,
                                        newOrdering: r,
                                        idGetter: (e) => {
                                            let { channel: t } = e;
                                            return t.id;
                                        },
                                        existingPositionGetter: (e) => {
                                            let { channel: t } = e;
                                            return t.position;
                                        },
                                    }),
                                )),
                                r
                            );
                        };
                    if (e.isCategory()) {
                        let n = [...o].slice(1);
                        (l = tH(e, n)), (a = tH(t, n)), (r = d(n)).unshift(o[0]);
                    }
                    if ((0, e6.tr)(e.type) || e.isCategory()) {
                        let n = (0, tj.A)(r.length > 0 ? r : o, i, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, e6.tr)(t);
                        });
                        (l = tH(e, n)), (a = tH(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, tj.A)(r.length > 0 ? r : o, i, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (l = tH(e, n)), (a = tH(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == s.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            s.push({ id: e.id, parent_id: n }),
                        s
                    );
                })(r, tK(i, s.referenceId), s.parentId, o);
                if (0 !== c.length) {
                    if ((0, j.ai)(i)) return void (0, tT.zN)(c);
                    if (
                        ((c = c.filter((e) => {
                            let { id: t } = e,
                                n = eq.A.getChannel(t);
                            if (null == n) return !1;
                            let i = eq.A.getChannel(n.parent_id);
                            return n.type === F.rbe.GUILD_CATEGORY || null == i
                                ? B.A.can(F.xBc.MANAGE_CHANNELS, d)
                                : B.A.can(F.xBc.MANAGE_CHANNELS, i);
                        })),
                        r.parent_id !== s.parentId &&
                            c.find((e) => {
                                if (e.id !== r.id) return !1;
                                let t = eq.A.getChannel(e.parent_id);
                                if (!(null != t && B.A.can(F.xBc.MANAGE_ROLES, r) && B.A.can(F.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let i = tF.r(r, t),
                                    l = tF.r(r, eq.A.getChannel(r.parent_id));
                                return ((null != r.parent_id || i) && (!l || i)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = eq.A.getChannel(n.parent_id);
                        null != e &&
                            (0, $.openModal)((t) =>
                                (0, a.jsx)(tM.default, {
                                    ...t,
                                    channel: r,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), tR.A.batchChannelUpdate(i, c));
                                    },
                                    onCancel: () => {
                                        null != n && tR.A.batchChannelUpdate(i, c);
                                    },
                                }),
                            );
                    } else tR.A.batchChannelUpdate(i, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = eq.A.getChannel(n.id);
                if (null == i) return !1;
                let l = tk(eq.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if ((0, j.ai)(e8.A.getGuildId())) return !0;
                let a = t_.A.getGuild(n.guildId);
                if (null == a) return !1;
                let s = eq.A.getChannel(l.parentId),
                    r = eq.A.getChannel(i.parent_id),
                    o = B.A.can(F.xBc.MANAGE_CHANNELS, a),
                    d = null != r ? B.A.can(F.xBc.MANAGE_CHANNELS, r) : o,
                    c = null != s ? B.A.can(F.xBc.MANAGE_CHANNELS, s) : o;
                return d && c;
            },
        },
        (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
                ? {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !1,
                      sortingType: null,
                      sortingPosition: null,
                      sortingParent: null,
                  }
                : {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !0,
                      sortingType: n.type,
                      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null,
                  };
        },
    )(
        (0, tL.I)(
            tW,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, j.ai)(e8.A.getGuildId())) return !0;
                    let i = t_.A.getGuild(t.getGuildId());
                    if (null == i) return !1;
                    if ((0, J.WW)(i.id) && B.A.can(F.xBc.MANAGE_CHANNELS, i))
                        return (
                            (0, tU.A)() &&
                                (0, $.openModalLazy)(async () => {
                                    let { default: e } = await n.e("2467").then(n.bind(n, 354643));
                                    return (t) => (0, a.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === F.rbe.GUILD_CATEGORY) return B.A.can(F.xBc.MANAGE_CHANNELS, i) && !(0, J.WW)(i.id);
                    let l = eq.A.getChannel(t.parent_id);
                    return (
                        (null != l && B.A.can(F.xBc.MANAGE_CHANNELS, l)) ||
                        (null == l && B.A.can(F.xBc.MANAGE_CHANNELS, i))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: a,
                        } = e,
                        s = e8.A.getGuildId(),
                        r = tD.A.getCategories(s);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: a,
                        parentId: n,
                        type: l,
                        channelList: (0, tj.A)(r._categories, r, (e) => {
                            let { channel: t } = e;
                            return t.type === F.rbe.GUILD_CATEGORY && null != r[t.id] && 0 === r[t.id].length
                                ? !!(0, j.ai)(s) ||
                                      (B.A.can(F.xBc.MANAGE_CHANNELS, t) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                                : !tw.A.isCollapsed(t.parent_id);
                        }),
                        guildId: i,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var tY = n(47167),
    tq = n(485947),
    tX = n(543465),
    tZ = n(551851),
    tJ = n(546980);
function t$(e) {
    e.stopPropagation();
}
let tQ = tz(
        s.memo(function (e) {
            let t,
                {
                    channel: i,
                    connectChannelDragSource: l,
                    connectChannelDropTarget: r,
                    disableManageChannels: o,
                    position: c,
                    sortingPosition: h,
                    hideIcon: _,
                    children: m,
                } = e,
                g = (0, u.bG)([tX.Ay], () => tX.Ay.isChannelMuted(i.getGuildId(), i.id)),
                f = (0, u.bG)([tw.A], () => tw.A.isCollapsed(i.id)),
                A = (0, u.bG)([B.A], () => B.A.can(F.xBc.MANAGE_CHANNELS, i)),
                p = (0, tY.Ay)(i);
            t = null != h ? (c > h ? tJ.mU : tJ.TR) : tJ.fx;
            let C = s.useCallback(() => {
                    f ? (0, ty.fh)(i.id) : (0, ty.Gv)(i.id);
                }, [i.id, f]),
                E = s.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = t_.A.getGuild(i.getGuildId());
                            null != t &&
                                (0, eM.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("18733"), n.e("40872")]).then(
                                        n.bind(n, 71132),
                                    );
                                    return (n) => (0, a.jsx)(e, { ...n, channel: i, guild: t });
                                });
                        }
                    },
                    [i],
                ),
                x = s.useCallback(() => {
                    let e = i.type === F.rbe.GUILD_CATEGORY ? null : i.type,
                        t = i.getGuildId();
                    null != t &&
                        (0, $.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("8018"),
                                n.e("42282"),
                                n.e("9431"),
                                n.e("43735"),
                            ]).then(n.bind(n, 113194));
                            return (n) =>
                                (0, a.jsx)(l, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== i.id ? i.id : null,
                                });
                        });
                }, [i]),
                { role: b, tabIndex: S, ...I } = (0, d.rm)(i.id),
                N = s.useRef(null),
                v = s.useRef(null),
                y = (0, a.jsxs)("li", {
                    className: t,
                    "data-dnd-name": p,
                    children: [
                        (0, a.jsx)(tS.vN, {
                            focusTarget: N,
                            ringTarget: v,
                            offset: { left: 4, right: 4 },
                            children: (0, a.jsxs)("div", {
                                ref: v,
                                className: eA()(tJ.Ki, tJ.iE, { [tJ.yZ]: f, [tJ.SU]: g, [tJ.vk]: !0 }),
                                onContextMenu: E,
                                children: [
                                    (0, a.jsxs)(ee.D, {
                                        innerRef: N,
                                        className: tJ.rb,
                                        tabIndex: S,
                                        ...I,
                                        onClick: C,
                                        "aria-label": W.intl.formatToPlainString(W.t.y5l3J2, { categoryName: p }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, a.jsx)(tq.A, {
                                                className: tJ.UU,
                                                children: (0, a.jsx)(tx.A, { children: p }),
                                            }),
                                            _
                                                ? null
                                                : (0, a.jsx)(tI.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: tJ.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, a.jsx)("div", {
                                        onClick: t$,
                                        className: tJ.Y_,
                                        children:
                                            A && !o
                                                ? (0, a.jsx)(Q.m, {
                                                      text: W.intl.string(W.t["fUYU+j"]),
                                                      children: (0, a.jsx)(ee.D, {
                                                          className: eA()(tJ.c9, tJ.ih),
                                                          onClick: x,
                                                          tabIndex: S,
                                                          role: "button",
                                                          "aria-label": W.intl.string(W.t["fUYU+j"]),
                                                          children: (0, a.jsx)(tN.T, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: tJ.hs,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        m,
                    ],
                });
            return null != r && null != l ? r(l(y)) : y;
        }),
    ),
    t0 = s.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, a.jsx)("li", {
            className: eA()(i, tJ.fx),
            children: (0, a.jsxs)("div", {
                className: eA()(tJ.Ki, tJ._V),
                children: [
                    (0, a.jsx)("div", {
                        className: tJ.rb,
                        children: (0, a.jsx)(tq.A, { className: tJ.UU, children: (0, a.jsx)(tx.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, a.jsx)(Q.m, {
                              asContainer: !0,
                              text: W.intl.string(W.t["5qNmsU"]),
                              children: (0, a.jsx)(ee.D, {
                                  className: tJ.r,
                                  onClick: n,
                                  children: (0, a.jsx)(tv.a, { size: "md", color: "currentColor", className: tJ.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t1 = s.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([tZ.A], () => tZ.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = s.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), eU.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), eU.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, a.jsx)("div", {
            className: tJ.oA,
            children: (0, a.jsx)(tb.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: S.H,
                text: n ? W.intl.string(W.t["/eB9Bg"]) : W.intl.string(W.t.Q2gPWl),
            }),
        });
    }),
    t2 = s.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, u.bG)([tZ.A], () => tZ.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === F.rbe.GUILD_CATEGORY
            ? i
                ? (0, a.jsx)("li", {
                      className: tJ.fx,
                      children: (0, a.jsx)("div", {
                          className: eA()(tJ.Ki, tJ._V),
                          children: (0, a.jsx)(tq.A, {
                              className: tJ.UU,
                              children: (0, a.jsx)(tx.A, { children: W.intl.string(W.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, a.jsx)("div", { style: { height: 16 } });
    }),
    t9 = s.memo(function (e) {
        let { channel: t } = e,
            n = (0, tY.Ay)(t);
        return (0, a.jsx)("li", {
            className: tJ.fx,
            children: (0, a.jsx)("div", {
                className: eA()(tJ.Ki, tJ._V),
                children: (0, a.jsx)(tq.A, { className: tJ.UU, children: (0, a.jsx)(tx.A, { children: n }) }),
            }),
        });
    });
var t4 = n(728321),
    t7 = n(244083);
let t6 = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var t3 = n(121880);
let t5 = s.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: i,
            guildChannelsVersion: l,
            selectedChannelId: r,
            disableManageChannels: o,
        } = e,
        d = s.useCallback(() => {
            let e = i.getCategoryFromSection(i.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                l = e.getShownChannelAndThreadIds();
            null != r && l.includes(r) && (t = (0, Z.xb)(i)), (0, Z.DD)(n.id, l, t);
        }, [n.id, r, i, l]),
        { density: c } = (0, p.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case te.PU:
            return (0, a.jsx)("div", { style: { height: u } });
        case te.bK:
            if (n.features.has(F.GuildFeatures.HUB)) return null;
            return (0, a.jsx)("div", { style: { height: u } });
        case te.HP:
            return (0, a.jsx)(t0, { name: W.intl.string(W.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, a.jsx)(t0, { name: W.intl.string(W.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, a.jsxs)(s.Fragment, {
                children: [(0, a.jsx)("div", { className: t3.ts }), (0, a.jsx)(t2, { category: e, channel: n })],
            });
        }
        case te.TF: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, a.jsx)(tQ, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, a.jsx)(t4.A, {
                    inlineSpecs: t6,
                    arrowAlignment: t7.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, a.jsx)(tQ, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var t8 = n(104171),
    ne = n(186369),
    nt = n(970812),
    nn = n(147036),
    ni = n(349828);
function nl(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === te.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tE.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === te.PU ||
                (e.id === ni.Vc
                    ? n !== e.getSections(!1).length - 1
                    : n === te.HP ||
                      (!!t && n !== te.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== te.PU &&
            n !== te.HP &&
            n !== te.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let na = s.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = s.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, a.jsx)(t1, { category: i });
    }),
    ns = s.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: i,
                voiceStates: l,
                guildId: r,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: h, canHaveVoiceSummary: _ } = s.useMemo(() => nl(n, c, t), [n, c, t, i]),
            m = s.useMemo(() => (t === te.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
            g = (0, J.jN)(r),
            { enableWaveformIcon: f } = (0, ne.b)(r, "ChannelListSectionFooter"),
            A = (0, u.yK)([tX.Ay], () => {
                if (null == m || !m.isCollapsed || !_) return [];
                let e = m.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = tX.Ay.isChannelOrParentOptedIn(r, n.id);
                    (!g || e) && t.push(n);
                }
                return t;
            }, [m, _, r, g]),
            p = s.useMemo(
                () => (0, nn.fK)({ channels: A, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [A, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, a.jsx)(na, { guildChannels: n, guildChannelsVersion: i });
        let C = h ? (0, a.jsx)("div", { className: t3.ts }) : null;
        return _ && 0 !== p.length
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)("div", {
                          className: t3.qz,
                          children: (0, a.jsx)(t8.Ay, {
                              renderIcon: !0,
                              users: p,
                              max: 8,
                              showUserPopout: !0,
                              guildId: r,
                              renderLeadingIcon: f
                                  ? (e) => (0, a.jsx)(nt.A, { color: "currentColor", className: eA()(e, ed.Gj) })
                                  : void 0,
                          }),
                      }),
                      C,
                  ],
              })
            : C;
    });
var nr = n(625903),
    no = n(283973),
    nd = n(933832),
    nc = n(435183),
    nu = n(698441),
    nh = n(855687),
    n_ = n(816662),
    nm = n(446600),
    ng = n(616356);
function nf(e, t, n) {
    return null != t && !!t && !tO(n, e.type);
}
function nA(e, t) {
    return null == t ? ed.fx : e > t ? ed.mU : ed.TR;
}
function np(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: s = !1 } = e;
    return (0, u.bG)(
        [B.A, e8.A],
        () =>
            n ||
            (0, j.ai)(e8.A.getGuildId()) ||
            (!B.A.can(F.xBc.MANAGE_CHANNELS, t) &&
                !B.A.can(F.xBc.MANAGE_ROLES, t) &&
                !B.A.can(F.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, e6.tr)(t.type) && !B.A.can(F.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !B.A.can(F.xBc.CONNECT, t)) ||
            !e6.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, a.jsx)(Q.m, {
              asContainer: !0,
              text: W.intl.string(W.t["3gUsJb"]),
              children: (0, a.jsx)(ee.D, {
                  className: eA()(ed.Xs, l ? ed.Tf : void 0, s ? ed.bw : ed.UI),
                  onClick: function () {
                      nc.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": W.intl.string(W.t["3gUsJb"]),
                  children: (0, a.jsx)(nr.Z, { size: "xs", color: "currentColor", className: ed.gE }),
              }),
          });
}
function nC(e) {
    let {
            channel: t,
            isDefaultChannel: i = !1,
            locked: l,
            tabIndex: r,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([t_.A], () => t_.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nm.A], () => nm.A.getStageInstanceByChannel(t.id), [t.id]),
        _ = (0, u.bG)([nu.Ay], () => nu.Ay.getActiveEventByChannel(t.id), [t.id]),
        m = (0, u.bG)([B.A], () => (0, nh.K)(B.A, c, t, h)),
        g = (0, u.bG)([], () =>
            t?.type === F.rbe.GUILD_VOICE ? W.intl.string(W.t["EE+P0H"]) : W.intl.string(W.t["0jeAXt"]),
        ),
        f = s.useRef(null);
    if (l || !m || t.isModeratorReportChannel() || t.isThread()) return null;
    let A = (0, a.jsx)(no.R, { size: "xs", className: ed.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (A = (0, a.jsx)(t4.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, a.jsx)("div", { ref: f, children: A }),
            })),
        (0, a.jsx)(Q.m, {
            asContainer: !0,
            text: g,
            children: (0, a.jsx)(ee.D, {
                className: eA()(ed.Xs, o ? ed.Tf : void 0, d ? ed.bw : ed.UI),
                onClick: function () {
                    if (null != c) {
                        let e = ng.A.getAllActiveStreams().filter(
                            (e) => e.state !== F.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, $.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(
                                n.bind(n, 1310),
                            );
                            return (n) =>
                                (0, a.jsx)(i, {
                                    ...n,
                                    guild: c,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: F.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: _,
                                });
                        });
                    }
                },
                tabIndex: r,
                "aria-label": g,
                children: A,
            }),
        })
    );
}
function nE(e) {
    let { channel: t } = e;
    return (0, a.jsx)(Q.m, {
        asContainer: !0,
        text: W.intl.string(W.t["ROh4T+"]),
        children: (0, a.jsx)(ee.D, {
            className: ed.Xs,
            onClick: () => {
                (0, n_.Ol)(t.guild_id, t.id);
            },
            "aria-label": W.intl.string(W.t["ROh4T+"]),
            children: (0, a.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
function nx(e) {
    let { channel: t } = e;
    return (0, a.jsx)(Q.m, {
        asContainer: !0,
        text: W.intl.string(W.t["N2c/Un"]),
        children: (0, a.jsx)(ee.D, {
            className: ed.Xs,
            onClick: () => {
                (0, n_.jA)(t.guild_id, t.id, !0, { section: F.JJy.CHANNEL_LIST });
            },
            "aria-label": W.intl.string(W.t["N2c/Un"]),
            children: (0, a.jsx)(nd.A, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
class nb extends s.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, a.jsx)(np, { ...this.props });
    }
    renderInviteButton() {
        return (0, a.jsx)(nC, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, a.jsx)(nE, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, a.jsx)(nx, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nA(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nf(e, t, n);
    }
}
var nS = n(166444),
    nI = n(790782);
let nN = tz(function (e) {
    let {
            guild: t,
            selectedChannelId: i,
            position: l,
            disableManageChannels: r,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: h,
            connectChannelDropTarget: _,
            tabIndex: m,
        } = e,
        g = (0, u.bG)([eq.A, e5.Ay], () => {
            let e = e5.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : eq.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([eq.A], () => eq.A.getChannel(g?.parent_id)),
        A = i === g?.id,
        p = (0, tY.Ay)(g),
        C = (0, u.bG)([B.A], () =>
            null != f ? B.A.can(F.xBc.MANAGE_CHANNELS, f) : null != t && B.A.can(F.xBc.MANAGE_CHANNELS, t),
        ),
        E = s.useCallback(
            (e) => {
                null != g &&
                    (0, eM.L3)(e, async () => {
                        let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                        return (t) => (0, a.jsx)(e, { ...t, channel: g });
                    });
            },
            [g],
        );
    if (null == g) return null;
    let x = nA(l, c),
        b = nf(g, o, d),
        S = (0, a.jsx)("div", {
            className: eA()(x, { [ed.r9]: b, [ed.wH]: A }),
            "data-dnd-name": p,
            children: (0, a.jsxs)(nS.Ay, {
                className: ed.Ki,
                channel: g,
                guild: t,
                selected: A,
                onContextMenu: E,
                forceInteractable: !0,
                resolvedUnreadSetting: nI.e.ONLY_MENTIONS,
                children: [
                    (0, a.jsx)(nC, { channel: g, tabIndex: m }),
                    (0, a.jsx)(np, { channel: g, disableManageChannels: r, tabIndex: m }),
                ],
            }),
        });
    return C && (S = _(h(S))), S;
});
var nv = n(34188),
    ny = n(733391),
    nG = n(832163),
    nL = n(44724),
    nR = n(84764),
    nj = n(770178),
    nM = n(206939);
let nT = Math.ceil(Math.sqrt(115200)),
    nU = (nT - 240) / 2,
    nw = s.forwardRef(function (e, t) {
        let { children: n } = e,
            [i, l] = s.useState(-1),
            r = s.useCallback((e) => {
                l(e.contentRect.width);
            }, []),
            o = (0, nj.w)(r, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, ej.z)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            u = s.useCallback(
                (e, t) => {
                    c({ shineSpring: 1, delay: t });
                },
                [c],
            ),
            h = s.useCallback(() => {
                c({ shineSpring: 0, immediate: !0 });
            }, [c]),
            _ = s.useMemo(() => {
                let e = (0, a.jsx)(eR.animated.div, {
                    className: nM.q2,
                    style: {
                        transform: d.to(
                            (e) => `translateX(calc(${e * i}px + ${e * nT}px)) translateY(-50%) rotate(45deg)`,
                        ),
                    },
                });
                return n(nM.VU, nM.Qq, nM.Kk, e);
            }, [n, i, d]);
        return (
            s.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, a.jsx)("div", {
                className: nM.iE,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nU}px` },
                children: _,
            })
        );
    });
var nD = n(371794),
    nP = n(998218),
    nO = n(645591);
let nV = s.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = s.useRef(null),
        r = s.useRef(null),
        o = (0, $.useHasAnyModalOpen)(),
        d = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        c = (0, eu.xr)((e) => e.fullScreenLayers.length > 0);
    s.useEffect(() => {
        (0, ny.Kh)(t.id);
    }, [t.id]);
    let _ = (0, u.bG)([nG.A], () => nG.A.getAnnouncement(t.id)),
        m = _?.state === "success" ? _.announcement : void 0,
        [g, f] = (0, ei.x_)(M.M.GAME_SHOP_NEW_BADGE, t.id, m?.id ?? "", void 0, !0),
        A = g === M.M.GAME_SHOP_NEW_BADGE && null != m,
        [p, C] = (0, ei.x_)(M.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, m?.id ?? ""),
        E = p === M.M.GAME_SHOP_NEW_DROP_POPOVER && null != m;
    s.useEffect(() => {
        i && (A && f(es.i.INDIRECT_ACTION), E && C(es.i.INDIRECT_ACTION));
    }, [f, C, i, A, E]);
    let b = s.useCallback(() => {
            f(es.i.TAKE_ACTION), C(es.i.TAKE_ACTION);
            let e = nG.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, el.pX)(F.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, f, C]),
        S = s.useCallback(() => {
            (0, nL.X)({ guildId: t.id, forceFetch: E });
        }, [t.id, E]),
        I = s.useCallback(() => {
            C(es.i.USER_DISMISS);
        }, [C]),
        N = s.useCallback(
            (e) => {
                null != t &&
                    (0, eM.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 819233));
                        return (n) => (0, a.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        v = s.useCallback(() => {
            l.current?.onMouseEnter(null, 500);
        }, [l]),
        y = s.useCallback(
            (e, n, l, s) =>
                (0, a.jsx)(H.G, {
                    innerClassName: e,
                    ref: r,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, a.jsx)(nv.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: eA()(e, l),
                        }),
                    text: (0, a.jsx)(x.E, {
                        variant: "text-md/medium",
                        className: eA()(nO.UU, n),
                        children: W.intl.string(W.t.vyaWs7),
                    }),
                    selected: i,
                    onMouseDown: S,
                    onClick: b,
                    onContextMenu: N,
                    trailing: (0, a.jsxs)(a.Fragment, {
                        children: [
                            A &&
                                (0, a.jsx)(U.Lp, {
                                    text: W.intl.string(W.t.y2b7CA),
                                    color: h.A.colors.BACKGROUND_BRAND.css,
                                }),
                            s,
                        ],
                    }),
                }),
            [t.id, i, S, b, N, A],
        ),
        G = s.useMemo(() => {
            if (null == m || "guild-application-announcement" !== m.type) return;
            let e = null != m.assetId ? nP.A.toURLSafe((0, nD.YE)(m.applicationId, m.assetId, 128, "webp")) : void 0,
                t =
                    null != m.backgroundImageAssetId
                        ? nP.A.toURLSafe((0, nD.YE)(m.applicationId, m.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [m]),
        L = s.useCallback(() => {
            if (!E || null == m) return null;
            let e = { onActionClick: b, onActionMouseDown: S, onRender: v, onRequestClose: I, targetElementRef: r };
            switch (m.type) {
                case "guild-application-announcement":
                    return (0, a.jsx)(nR.A, {
                        ...e,
                        graphicSource: null != G ? { type: "sku", ...G } : void 0,
                        title: W.intl.string(W.t["7PvvS9"]),
                        body: W.intl.formatToPlainString(W.t["9J4h1a"], { applicationName: m.applicationName }),
                    });
                case "guild-discord-announcement":
                    return (0, a.jsx)(nR.A, {
                        ...e,
                        graphicSource: { type: "asset", src: m.assetFullyQualifiedURL },
                        title: m.popoverTitle,
                        body: m.popoverBody,
                        actionLabel: m.popoverCta,
                    });
            }
        }, [E, m, b, S, v, I, G]);
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(nw, { ref: l, children: y }), !o && !d && !c && L()] });
});
var nH = n(740426),
    nB = n(826673),
    nk = n(591552),
    nF = n(202776),
    nW = n(454058),
    nK = n(222823);
function nz(e) {
    let { guild: t, selected: i } = e,
        l = (0, nF.A)(t),
        r = (0, nB.JZ)(M.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tl.yK)([nW.A], () =>
            Array.from(nW.A.getNewChannelIds(t.id)).filter((e) => nW.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tl.bG)([nK.Ay], () => nK.Ay.hasUnread(t.id, nI.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > te.rR,
        u = (0, tl.bG)([nk.A, nK.Ay], () => {
            let e = nk.A.lastFetchedAt(t.id),
                n = nK.Ay.lastMessageId(t.id, nI.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = e$.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        _ = s.useCallback(() => {
            (0, el.pX)(F.BVt.CHANNEL(t.id, l ? ea.VV.CUSTOMIZE_COMMUNITY : ea.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        m = s.useCallback(
            (e) => {
                (0, eM.L3)(e, async () => {
                    let { default: e } = await n.e("30412").then(n.bind(n, 807431));
                    return (n) => (0, a.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        g = null;
    return (
        (r && !d && !c) ||
            i ||
            u ||
            (g = (0, a.jsx)(U.Lp, { color: h.A.colors.BADGE_BACKGROUND_BRAND.css, text: W.intl.string(W.t.y2b7CA) })),
        (0, a.jsx)(H.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, a.jsx)(nH.k, { size: "md", color: "currentColor", className: e }),
            text: l ? W.intl.string(W.t.h9mGOP) : W.intl.string(W.t.et6wav),
            selected: i,
            onClick: _,
            onContextMenu: m,
            trailing: g,
        })
    );
}
var nY = n(855473);
function nq(e) {
    let { guild: t, selected: n } = e;
    return (0, a.jsx)(H.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, a.jsx)(nY.Z, { size: "md", color: "currentColor", className: e }),
        text: W.intl.string(W.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, el.pX)(F.BVt.CHANNEL(t.id, ea.VV.GUILD_HOME));
        },
    });
}
var nX = n(5373),
    nZ = n(65995),
    nJ = n(33011);
function n$(e, t) {
    return (0, a.jsx)(x.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let nQ = s.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([to.h], () => to.h.getNewMemberActions(t.id), [t.id]),
        i = (0, u.bG)([nZ.A], () => nZ.A.getCompletedActions(t.id)),
        l = s.useMemo(() => {
            if (null == n || null == i) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != i[t.channelId] && e++;
                }),
                e
            );
        }, [i, n]),
        r = null == n ? 0 : n.length,
        o = (0, d.rm)(`progress-bar-${t.id}`);
    return (0, a.jsxs)("li", {
        children: [
            (0, a.jsxs)(ee.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: nJ.G9,
                onClick: function () {
                    (0, el.pX)(F.BVt.CHANNEL(t.id, ea.VV.GUILD_HOME));
                },
                children: [
                    (0, a.jsxs)("div", {
                        className: nJ.A1,
                        children: [
                            (0, a.jsx)(E.D, { variant: "heading-sm/bold", children: W.intl.string(W.t.SnrR3x) }),
                            (0, a.jsxs)("div", {
                                className: nJ.Ib,
                                children: [
                                    (0, a.jsx)(x.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: nJ.Cv,
                                        children: W.intl.format(W.t.eqZ1lW, {
                                            numberHook: n$,
                                            total: r.toString(),
                                            completed: l.toString(),
                                        }),
                                    }),
                                    (0, a.jsx)(eO.A, {
                                        className: nJ.UE,
                                        width: 16,
                                        height: 16,
                                        direction: eO.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(nX.i, {
                        className: nJ.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (l / r) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, a.jsx)("div", { role: "separator", className: nJ.yF }),
        ],
    });
});
var n0 = n(514179);
function n1(e) {
    let { guild: t, selected: i } = e;
    return (0, a.jsx)(H.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, a.jsx)(n0.A, { className: e }),
        text: W.intl.string(W.t["KzCF/6"]),
        selected: i,
        onClick: () => {
            (0, el.pX)(F.BVt.CHANNEL(t.id, ea.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: (e) => {
            null != t &&
                (0, eM.L3)(e, async () => {
                    let { default: e } = await n.e("71911").then(n.bind(n, 978554));
                    return (n) => (0, a.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var n2 = n(506774),
    n9 = n(58149),
    n4 = n(289397),
    n7 = n(486418),
    n6 = n(575926),
    n3 = n(440293),
    n5 = n(954571),
    n8 = n(634654),
    ie = n(391277);
function it(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        l = (0, n3.w)(t),
        s = (0, tl.bG)([t_.A], () => t_.A.getGuild(t)),
        r = s?.features.has(F.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === n2.w.get(n8.bJ, "false"),
        d = (0, tl.bG)([y.A], () => y.A.useReducedMotion);
    return (0, a.jsx)(H.G, {
        id: `shop-${t}`,
        className: eA()(ie.A2, { [ie.wH]: n, [ie.ST]: o }),
        innerClassName: ie.LE,
        renderIcon: (e) => (0, a.jsx)(n6.h, { width: 20, height: 20, className: eA()([e, ie.sV]) }),
        text: W.intl.string(W.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, a.jsxs)("div", {
            className: ie.ai,
            children: [
                d
                    ? (0, a.jsx)(U.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: W.intl.string(W.t.y2b7CA),
                          className: ie.Ad,
                      })
                    : (0, a.jsx)("img", {
                          src: (0, n4.n)("server_products/storefront/money.gif"),
                          className: ie.TG,
                          alt: "",
                      }),
                n &&
                    (0, a.jsx)(ee.D, {
                        className: ie.b,
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, nB.Dr)(M.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                n5.default.track(F.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, n9.H$)(t),
                                    action_taken: n8.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && r) || (0, el.bG)(F.BVt.CHANNEL(t, e5.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": W.intl.string(W.t.cpT0Cq),
                        children: (0, a.jsx)(tv.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function ii(e) {
    let { guild: t, selected: i } = e,
        l = (0, n7.P)(t),
        s = () => {
            n2.w.set(n8.bJ, "true"), (0, el.pX)(F.BVt.CHANNEL(t.id, ea.VV.GUILD_SHOP));
        };
    return l
        ? (0, a.jsx)(it, { guildId: t.id, selected: i, handleClick: s })
        : (0, a.jsx)(H.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, a.jsx)(n6.h, { width: 20, height: 20, className: e }),
              text: W.intl.string(W.t.al5EXL),
              selected: i,
              onClick: s,
              onContextMenu: (e) => {
                  null != t &&
                      (0, eM.L3)(e, async () => {
                          let { default: e } = await n.e("74946").then(n.bind(n, 345332));
                          return (n) => (0, a.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var il = n(308528),
    ia = n(152007),
    is = n(747926),
    ir = n(977997);
function io(e) {
    return null != e && e > 0;
}
var id = n(405018),
    ic = n(428689),
    iu = n(852878);
function ih(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, a.jsxs)("div", {
        className: iu.iE,
        children: [
            (0, a.jsxs)("span", {
                className: eA()(iu.VV, { [iu.Ki]: i, [iu.$G]: n >= 100 }),
                children: [
                    i ? (0, a.jsx)(ic.n, { size: "md", color: "currentColor", className: iu.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, a.jsx)("span", {
                className: eA()(iu.X5, { [iu.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function i_(e) {
    let { channel: t, video: n, userCount: i } = e,
        { limit: l } = (0, id.A)(t),
        s = -1,
        r = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && l > 0 && ((r = s < 0 || l < s), (s = s > 0 ? Math.min(s, l) : l)),
        (0, a.jsx)(ih, { users: i, total: s, videoLimit: r })
    );
}
var im = n(701665);
function ig(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, a.jsx)("div", {
        className: im.R,
        "aria-hidden": !0,
        children: (0, a.jsx)(U.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var iA = n(183300),
    ip = n(37411),
    iC = n(998510);
function iE(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: eA()(iC.GI, { [iC.a7]: n }, { [iC.BJ]: i }), style: t },
        { density: s } = (0, p.wR)();
    switch (s) {
        case "cozy":
            return (0, a.jsxs)("svg", {
                ...l,
                width: "10",
                height: "20",
                viewBox: "0 0 10 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, a.jsx)("path", {
                        d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, a.jsx)("path", {
                        d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        case "compact":
            return (0, a.jsxs)("svg", {
                ...l,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, a.jsx)("path", {
                        d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, a.jsx)("path", {
                        d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        default:
            return (0, a.jsxs)("svg", {
                ...l,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, a.jsx)("path", {
                        d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, a.jsx)("path", {
                        d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
    }
}
let ix = s.memo(function (e) {
        let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: r, withGuildIcon: o } = e,
            c = (0, u.bG)([eX.Ay], () => eX.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([ir.A], () => ir.A.hasVideo(t.id)),
            {
                unread: _,
                mentionCount: m,
                isMentionLowImportance: g,
            } = (0, u.cf)([nK.Ay], () => ({
                unread: nK.Ay.hasUnread(t.id),
                mentionCount: nK.Ay.getMentionCount(t.id),
                isMentionLowImportance: nK.Ay.getIsMentionLowImportance(t.id),
            })),
            f = (0, u.bG)([ia.A], () => ia.A.isMuted(t.id)),
            A = s.useCallback(
                (e) => {
                    (0, is.JA)(t, !e.shiftKey, ip.H9.CHANNEL_LIST);
                },
                [t],
            ),
            p = s.useCallback(() => {
                il.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            C = s.useCallback(
                (e) => {
                    let i = eq.A.getChannel(t.id);
                    null != i &&
                        (0, eM.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("94989"), n.e("59388")]).then(
                                n.bind(n, 612826),
                            );
                            return (t) => (0, a.jsx)(e, { ...t, channel: i });
                        });
                },
                [t.id],
            ),
            E = null == c ? 0 : c.length,
            { role: x, ...b } = (0, d.rm)(t.id),
            S = s.useRef(null),
            I =
                m > 0
                    ? W.intl.formatToPlainString(W.t["ZL7+I6"], { channelName: t.name, mentionCount: m })
                    : _
                      ? W.intl.formatToPlainString(W.t.YlVvmc, { channelName: t.name })
                      : W.intl.formatToPlainString(W.t["0nZpiF"], { channelName: t.name });
        return (0, a.jsxs)("li", {
            role: x,
            className: eA()(ed.fx, { [ed.wH]: i }),
            children: [
                (0, a.jsx)(iE, { withGuildIcon: o }),
                r
                    ? null
                    : (0, a.jsx)(iE, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, a.jsx)(tS.vN, {
                    focusTarget: S,
                    ringTarget: S,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, a.jsxs)("div", {
                        className: eA()(ed.Ki, nO.iE, nO.ZS, {
                            [nO.J1]: i,
                            [nO.F4]: !i && f,
                            [nO.V2]: !f && !i && _,
                            [nO.lY]: o,
                        }),
                        onMouseDown: p,
                        onContextMenu: C,
                        children: [
                            !_ || f || i ? null : (0, a.jsx)("div", { className: eA()(nO.gy, nO.WS) }),
                            (0, a.jsx)(ee.D, {
                                ...b,
                                innerRef: S,
                                className: nO.nf,
                                onClick: A,
                                "aria-label": I,
                                focusProps: { enabled: !1 },
                                children: (0, a.jsxs)("div", {
                                    className: eA()(nO.Y5, nO.__invalid_threadMainContent),
                                    children: [
                                        (0, a.jsx)(tx.A, { className: nO.UU, "aria-hidden": !0, children: t.name }),
                                        (0, a.jsxs)("div", {
                                            className: nO.Y_,
                                            children: [
                                                E > 0 && t.userLimit > 0
                                                    ? (0, a.jsx)(i_, { userCount: E, video: h, channel: t })
                                                    : null,
                                                io(m)
                                                    ? (0, a.jsx)(ig, { mentionsCount: m, isMentionLowImportance: g })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)(iA.A, {
                    channel: t,
                    collapsed: !l && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    ib = s.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: s } = e,
            r = (0, tY.Ay)(t),
            { density: o } = (0, p.wR)(),
            d = (0, u.yK)([eq.A], () => l.map((e) => eq.A.getChannel(e)).filter(eZ.Vq), [l]),
            c = (0, u.bG)([eX.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = eX.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, a.jsx)("li", {
            className: iC.kL,
            children: (0, a.jsxs)("ul", {
                role: "group",
                "aria-label": W.intl.formatToPlainString(W.t.EiyIi6, { channelName: r }),
                children: [
                    (0, a.jsx)("div", {
                        className: eA()(iC.eh, { [iC.ET]: s }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, a.jsx)(
                            ix,
                            {
                                thread: e,
                                isSelectedChannel: n?.id === e.id,
                                isSelectedVoice: i === e.id,
                                isLast: t === d.length - 1,
                                withGuildIcon: s,
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        });
    });
var iS = n(922016),
    iI = n(367513),
    iN = n(296216),
    iv = n(963027),
    iy = n(202384),
    iG = n(51758),
    iL = n(721592),
    iR = n(139033),
    ij = n(305866),
    iM = n(123292),
    iT = n(830215),
    iU = n(315982),
    iw = n(557722),
    iD = n(834942),
    iP = n(287809),
    iO = n(53516),
    iV = n(725673),
    iH = n(824078),
    iB = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let ik = (e) => {
    let { type: t, guildId: i, closePopout: l } = e,
        s = (0, R.GV)(),
        {
            notClaimed: r,
            notEmailVerified: o,
            notPhoneVerified: d,
            newAccount: c,
            newMember: h,
        } = (0, u.bG)([iD.A], () => iD.A.getCheck(i), [i]),
        _ = 0 === t ? W.intl.string(W.t["6zY8BI"]) : null,
        m = null,
        g = null;
    return (0 === t &&
        (r
            ? ((m = W.intl.string(W.t.IRxUlG)), (g = W.intl.string(W.t.fiNVin)))
            : d
              ? ((m = W.intl.string(W.t.vW8iUF)), (g = W.intl.string(W.t["50gfOv"])))
              : o
                ? ((m = W.intl.string(W.t.vdSOpz)), (g = W.intl.string(W.t.lm1UKt)))
                : h
                  ? ((m = W.intl.formatToPlainString(W.t.v1ktYb, { min: F.$8o.MEMBER_AGE })),
                    (g = W.intl.string(W.t.BddRzS)))
                  : c &&
                    ((m = W.intl.formatToPlainString(W.t.sncw41, { min: F.$8o.ACCOUNT_AGE })),
                    (g = W.intl.string(W.t.BddRzS)))),
    null == _ || null == m)
        ? null
        : (0, a.jsxs)(ij.l, {
              className: eA()(iH.popover, iV.kL),
              "aria-labelledby": s,
              children: [
                  (0, a.jsx)("img", { alt: "", className: iV.Sl, src: n(303528) }),
                  (0, a.jsxs)("div", {
                      className: iV.Qs,
                      children: [
                          (0, a.jsx)(E.D, { variant: "heading-md/semibold", id: s, children: _ }),
                          (0, a.jsx)(x.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, a.jsxs)("div", {
                              className: iV.UD,
                              children: [
                                  null != g
                                      ? (0, a.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: iV.FS,
                                            children: (0, a.jsx)(tb.$, {
                                                variant: "primary",
                                                text: g,
                                                onClick: () => {
                                                    r
                                                        ? iU.R()
                                                        : d
                                                          ? (0, $.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("84704"),
                                                                        n.e("85543"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, a.jsx)(e, {
                                                                            reason: iw.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: iO.V },
                                                            )
                                                          : o &&
                                                            (iT.A.verifyResend(),
                                                            (0, iR.A)({
                                                                title: W.intl.string(W.t.LykQYk),
                                                                subtitle: W.intl.format(W.t.azKEPy, {
                                                                    email: iP.default.getCurrentUser()?.email,
                                                                }),
                                                            })),
                                                        l();
                                                },
                                            }),
                                        })
                                      : null,
                                  r || d || o
                                      ? (0, a.jsx)(iM.Q, {
                                            onClick: l,
                                            text: W.intl.string(W.t.oEAioF),
                                            variant: "secondary",
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var iF = n(824865),
    iW = n(378570),
    iK = n(790535),
    iz = n(113783),
    iY = n(96566),
    iq = n(495544),
    iX = n(312006),
    iZ = n(505543),
    iJ = n(994500),
    i$ = n(685399),
    iQ = n(475889),
    i0 = n(85451),
    i1 = n(435470),
    i2 = n(35275),
    i9 = n(75879);
function i4(e) {
    let { locked: t } = e;
    return (0, a.jsx)("div", {
        className: eA()(ed.Xs, i9.U),
        children: (0, a.jsx)(i2.A, {
            className: ed.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var i7 = n(695633),
    i6 = n(669715),
    i3 = n(137177),
    i5 = n(999436);
function i8(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, a.jsx)("div", {
                className: eA()(i5.kL, t, i && i5.F4),
                children: (0, a.jsx)(i3.A, { game: n[0].application, className: i5.wK }),
            });
        let e = n.length - 1;
        return (0, a.jsxs)("div", {
            className: eA()(i5.kL, t, i && i5.F4),
            children: [
                (0, a.jsx)(i3.A, { game: n[0].application, className: i5.wK }),
                2 === n.length
                    ? (0, a.jsx)(i3.A, { game: n[1].application, className: i5.wK })
                    : (0, a.jsx)(x.E, {
                          className: i5.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function le(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: i,
            voiceStates: l,
            enableConnectedUserLimit: s,
            enableActivities: r,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: _,
            resolvedUnreadSetting: m,
        } = e,
        g = (0, u.bG)([nK.Ay], () => nK.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([nK.Ay], () => nK.Ay.getIsMentionLowImportance(t.id)),
        A = (0, i$.Ay)(t),
        p = (0, u.bG)([B.A], () => !B.A.can(F.xBc.CONNECT, t)),
        C = (0, iQ.H)(t),
        E = (0, u.bG)([ir.A], () => ir.A.hasVideo(t.id)),
        b = (0, iY.qT)(t.id) && t.isGuildStageVoice(),
        S = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, id.A)(t),
                        a = -1;
                    return (t.userLimit > 0 && (a = t.userLimit),
                    n && l > 0 && (a = a > 0 ? Math.min(a, l) : l),
                    i && a === F.RCc)
                        ? 0
                        : a;
                })({ channel: t, video: i }) > 0 &&
                !n &&
                !l
            );
        })({ channel: t, locked: p, video: (E || b) && null == C, selected: n }),
        I = (0, u.bG)([i7.A], () => i7.A.getNewThreadCount(t.guild_id, t.id)),
        N = (0, i1.ed)(t.guild_id, t.id),
        v = (0, u.bG)([t_.A], () => t_.A.getGuild(t.guild_id)?.features.has(F.GuildFeatures.COMMUNITY) ?? !1);
    if (io(g)) return (0, a.jsx)(ig, { mentionsCount: g, isMentionLowImportance: f });
    if (o) return (0, a.jsx)(i4, { locked: d });
    if (c) return (0, a.jsx)(U.Lp, { text: W.intl.string(W.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!_ && m === nI.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, a.jsx)(x.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: W.intl.format(W.t.GkAbqY, { count: (0, U.Gu)(I) }),
        });
    if (!_ && t.isForumLikeChannel() && null != N && N > 0)
        return (0, a.jsx)(x.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, U.Gu)(N) });
    let y = l?.length ?? 0;
    return null != s && s && S
        ? (0, a.jsx)(i_, { userCount: y, video: E || b, channel: t })
        : i && (0, i6.t)(l) && v
          ? (0, a.jsx)(U.Lp, { text: W.intl.string(W.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != C
            ? (0, a.jsx)(i0.z, { textColor: "text-feedback-positive", entry: { start: C } })
            : null != r && r && A.length > 0
              ? (0, a.jsx)(i8, { embeddedApps: A, muted: _ })
              : null;
}
var lt = n(582630);
class ln extends nb {
    channelItemRef = s.createRef();
    state = { shouldShowGuildVerificationPopout: !1 };
    closeGuildVerificationPopout = () => {
        this.setState({ shouldShowGuildVerificationPopout: !1 });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, nn.Pd)(e, ir.A, t_.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ed.ZS;
        if (null != t)
            if (e > t) return ed.mU;
            else return ed.TR;
        return ed.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: i, isSuggestedSection: l } = this.props,
            a = e.getGuildId();
        null != a && (0, iG.V)(a) && (0, iy.Ze)(a),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, iK.av)(e),
            __OVERLAY__ || (0, iW.iN)(e.id, l ? { source: iF.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, iW.iN)(e.id, n ? { source: iF.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t_.A.getGuild(t.getGuildId());
        null != i &&
            (0, eM.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("93103"),
                    n.e("79359"),
                    n.e("99854"),
                    n.e("48909"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, a.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: i, numAudience: l } = this.props;
        return (0, a.jsx)(iA.A, { channel: e, voiceStates: i, collapsed: t, tabIndex: n, numAudience: l });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, a.jsx)(ik, {
                type: iB.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, a.jsx)(Q.m, {
                asContainer: !0,
                text: W.intl.string(W.t.ZXxLQg),
                children: (0, a.jsx)(ee.D, {
                    className: eA()(ed.Xs, n ? ed.Tf : null),
                    onClick: () => {
                        iI.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": W.intl.string(W.t.ZXxLQg),
                    children: (0, a.jsx)(I.o, { size: "xs", color: "currentColor", className: ed.gE }),
                }),
            });
    };
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? W.intl.string(W.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, a.jsx)(tx.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: i,
                connectChannelDropTarget: l,
                connectChannelDragSource: s,
                connectUserDropTarget: r,
                connectDragPreview: o,
                canReorderChannel: d,
                canMoveMembers: c,
                stageInstance: u,
                isSubscriptionGated: h,
                needSubscriptionToAccess: _,
                unread: m,
                resolvedUnreadSetting: g,
                mentionCount: f,
                isFavoriteSuggestion: A,
            } = this.props,
            { shouldShowGuildVerificationPopout: p } = this.state,
            C = (0, a.jsxs)("li", {
                className: eA()(this.getModeClass(), { [ed.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tY.m1)(e, iP.default, iJ.A),
                children: [
                    (0, a.jsx)(iS.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: p,
                        children: () =>
                            (0, a.jsx)(Q.m, {
                                text: this.getTooltipText(),
                                children: (0, a.jsxs)(nS.Ay, {
                                    ref: this.channelItemRef,
                                    className: ed.Ki,
                                    iconClassName: eA()({ [lt.G]: null != u }),
                                    channel: e,
                                    selected: !A && t,
                                    connected: n,
                                    unread: n ? m : void 0,
                                    resolvedUnreadSetting: g,
                                    mentionCount: f,
                                    locked: i,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: o,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: A,
                                    "aria-label": (0, iv.Ay)({
                                        channel: e,
                                        unread: m,
                                        mentionCount: f,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: _,
                                    }),
                                    children: [
                                        A && this.renderAcceptSuggestionButton(),
                                        A && this.renderRemoveSuggestionButton(),
                                        !A && this.renderOpenChatButton(),
                                        !A && this.renderInviteButton(),
                                        !A && this.renderEditButton(),
                                        !A && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return c && (C = r(C)), d && (C = l(s(C))), C;
    }
}
let li = tz((0, iN.F)(ln));
function ll(e) {
    var t;
    let n,
        i,
        { guild: l, channel: s, disableSorting: r, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([nK.Ay], () => ({ unread: nK.Ay.hasUnread(s.id), mentionCount: nK.Ay.getMentionCount(s.id) })),
        _ = (0, u.bG)([tX.Ay], () => tX.Ay.resolveUnreadSetting(s)),
        m = (0, u.cf)([eq.A, iD.A, B.A], () => {
            let e = eq.A.getChannel(s.parent_id),
                t = iD.A.getCheck(s.guild_id);
            return {
                canManageChannel: null != l && B.A.can(F.xBc.MANAGE_CHANNELS, s),
                canReorderChannel:
                    !0 !== r &&
                    (l.id === ni.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, l))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, s),
                locked: !B.A.can(F.xBc.CONNECT, s),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, s),
                unverifiedAccount: !t.canChat,
            };
        }),
        g = (0, u.bG)([tw.A], () => tw.A.isCollapsed(s.parent_id)),
        f =
            ((t = s.id),
            (n = (0, iZ.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([iX.Ay, iq.default], () => {
                    let n = iq.default.getId();
                    return iX.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        A = (0, u.bG)([nm.A], () => nm.A.getStageInstanceByChannel(s.id), [s.id]),
        p = (0, iz.zy)(s.id, e0.ip.AUDIENCE),
        { isSubscriptionGated: C, needSubscriptionToAccess: E } = (0, iL.A)(s.id),
        x = (0, u.bG)([tX.Ay], () => tX.Ay.isFavorite(l.id, s.id)),
        b = (0, iY.xn)(s.id),
        S = le({
            channel: s,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: C,
            needSubscriptionToAccess: E,
            enableConnectedUserLimit: b || (s.userLimit > 0 && s.userLimit < F.RCc),
        }),
        I = e.connected && null == S;
    return (0, a.jsx)(li, {
        categoryCollapsed: g,
        connectAction: f,
        numAudience: p,
        stageInstance: A,
        isSubscriptionGated: C,
        needSubscriptionToAccess: E,
        ...h,
        ...m,
        ...e,
        isFavoriteSuggestion: o && !x,
        forceShowButtons: I,
        channelInfo: S,
        resolvedUnreadSetting: _,
    });
}
function la(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    il.A.preload(n, t.id);
}
let ls = tz(
        class extends nb {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = t_.A.getGuild(t.getGuildId());
                null != i &&
                    (0, eM.L3)(e, async () => {
                        let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                        return (n) => (0, a.jsx)(e, { ...n, channel: t, guild: i });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, el.pX)(F.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: F.liQ.GUILD_CHANNEL,
                            section: F.JJy.CHANNEL_LIST,
                            object: F.ZSU.CHANNEL,
                        },
                    },
                });
            };
            render() {
                let {
                        channel: e,
                        selected: t,
                        connectChannelDropTarget: n,
                        connectChannelDragSource: i,
                        connectDragPreview: l,
                        canReorderChannel: s,
                    } = this.props,
                    r = (0, a.jsx)("li", {
                        className: eA()(this.getClassName(), { [ed.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tY.m1)(e, iP.default, iJ.A),
                        children: (0, a.jsxs)(nS.Ay, {
                            className: ed.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: la,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: s ? l : null,
                            "aria-label": (0, iv.Ay)({ channel: e }),
                            resolvedUnreadSetting: nI.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return s ? n(i(r)) : r;
            }
        },
    ),
    lr = s.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, u.cf)([eq.A, B.A], () => {
                let e = eq.A.getChannel(t.parent_id);
                return {
                    canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, a.jsx)(ls, { ...l, ...e });
    });
var lo = n(172218),
    ld = n(811024),
    lc = n(323073);
function lu(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: W.intl.string(W.t.Pa817q) };
    }
    return null;
}
var lh = n(414808),
    l_ = n(302005),
    lm = n(406704),
    lg = n(696451),
    lf = n(763827),
    lA = n(56059),
    lp = n(163328),
    lC = n(778712),
    lE = n(730134),
    lx = n(707539),
    lb = n(486020),
    lS = n(550837);
function lI(e) {
    let { channel: t } = e,
        i = (0, u.yK)([i7.A, nK.Ay, B.A], () => {
            let e = i7.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(i7.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(i7.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nK.Ay.lastMessageId(e.id),
                        i = nK.Ay.lastMessageId(t.id);
                    return e$.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        r = t.isForumLikeChannel() ? lA.b : lp.y;
    return (
        s.useEffect(() => {
            (0, lx.TE)();
        }, []),
        (0, a.jsxs)("div", {
            className: eA()(iH.popover, lS.SW),
            children: [
                (0, a.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: lS.DD,
                    children: t.isForumLikeChannel() ? W.intl.string(W.t.ioVdO2) : W.intl.string(W.t.VNYs2v),
                }),
                (0, a.jsxs)("div", {
                    className: lS.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, a.jsx)(lN, { thread: e }, e.id))
                            .filter((e) => s.isValidElement(e))
                            .slice(0, l),
                        (0, a.jsxs)(ee.D, {
                            className: lS.nM,
                            onClick: () => {
                                t.isForumLikeChannel()
                                    ? (0, iW.iN)(t.id)
                                    : (0, $.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("65437"),
                                              n.e("51743"),
                                              n.e("52144"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, a.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, a.jsx)("div", {
                                    className: lS.R4,
                                    children: (0, a.jsx)(r, { size: "custom", className: lS.Kk }),
                                }),
                                (0, a.jsx)("div", {
                                    className: lS.Pf,
                                    children: (0, a.jsx)(x.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: W.intl.string(W.t["4qdZ93"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
function lN(e) {
    let { thread: t } = e,
        n = (0, u.bG)([iP.default], () => iP.default.getUser(t.ownerId)),
        i = (0, lx.JO)(t);
    return (0, a.jsxs)(ee.D, {
        className: lS.nM,
        onClick: (e) => {
            (0, is.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, ip.H9.POPOUT);
        },
        children: [
            (0, a.jsx)("div", {
                className: lS.R4,
                children:
                    null == n
                        ? (0, a.jsx)("img", {
                              className: lS.my,
                              src: lb.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, a.jsx)(lE.A, { className: lS.my, user: n, size: lC._3.SIZE_16 }),
            }),
            (0, a.jsxs)("div", {
                className: lS.Pf,
                children: [
                    (0, a.jsx)(x.E, { className: lS.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: "•" }),
                    (0, a.jsx)(x.E, {
                        className: lS.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, lx.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var lv = n(364522),
    ly = n(302959),
    lG = n(35903),
    lL = n(970928),
    lR = n(427262),
    lj = n(456644);
let lM = t8.DN.SIZE_24;
function lT(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = lb.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, a.jsx)(Q.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, a.jsx)("img", { alt: t, src: e, className: lj.P3 }),
        });
    }
    let s = i.large_image ?? i.small_image;
    return null != s
        ? (0, a.jsx)("img", { alt: i.large_text ?? "", src: (0, lL.uD)(l, s, [128, 128]), className: lj.P3 })
        : null;
}
function lU(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        s = (0, u.yK)([iP.default], () => l.map((e) => iP.default.getUser(e)).filter(eZ.Vq));
    return (0, a.jsx)("div", {
        className: lj.ec,
        children: (0, a.jsxs)("div", {
            className: lj.Wh,
            children: [
                (0, a.jsx)(lT, { activity: t, embeddedApp: n }),
                (0, a.jsxs)("div", {
                    className: lj.X0,
                    children: [
                        (0, a.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: lj.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, a.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, a.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, a.jsx)(t8.Ay, {
                                className: lj.TN,
                                guildId: i.guild_id,
                                users: s,
                                size: lM,
                                max: 7,
                                renderUser: (e) => {
                                    if (null == e || e === t8.mt) return null;
                                    let t = lR.Ay.getName(e);
                                    return (0, a.jsx)(
                                        Q.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, a.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, lM),
                                                alt: t,
                                                className: lj.my,
                                            }),
                                        },
                                        e.id,
                                    );
                                },
                            }),
                    ],
                }),
            ],
        }),
    });
}
var lw = n(793425);
function lD(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        s = Array.from(i.embeddedActivity.userIds),
        r = (0, u.bG)([iP.default], () => iP.default.getUser(s[0]));
    return null == r
        ? null
        : (0, a.jsxs)("div", {
              className: lw.Eb,
              children: [
                  (0, a.jsx)("div", {
                      className: lw.Il,
                      children: (0, a.jsx)(lU, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, a.jsx)("div", {
                      className: lw.M4,
                      children: (0, a.jsx)(lG.A, {
                          type: ly.M.VOICE_CHANNEL,
                          activity: n,
                          embeddedActivity: i.embeddedActivity,
                          user: r,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          buttonVariant: "primary",
                          onAction: l,
                      }),
                  }),
              ],
          });
}
var lP = n(713654),
    lO = n(869552);
function lV(e) {
    let { channel: t } = e,
        n = (0, u.bG)([t_.A], () => t_.A.getGuild(t.guild_id)),
        i = (0, tY.Ay)(t),
        l = (0, lP.gU)(t, n);
    return null == l
        ? null
        : (0, a.jsxs)("div", {
              className: lO.hY,
              children: [
                  (0, a.jsx)(l, { className: lO.p }),
                  (0, a.jsx)(x.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: lO.HA,
                      children: i,
                  }),
              ],
          });
}
var lH = n(802625);
function lB(e) {
    let { channel: t, onAction: n } = e,
        i = (0, i$.Ay)(t),
        l = Array.from((0, i$.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, a.jsxs)(lv.Ip, {
              className: eA()(iH.popover, lH.kL),
              children: [
                  (0, a.jsx)("div", { className: lH.oT, children: (0, a.jsx)(lV, { channel: t }) }),
                  (0, a.jsx)("div", { className: lH.zN }),
                  l.map((e, i) =>
                      (0, a.jsx)(
                          lD,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
class lk extends nb {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = s.createRef();
    assignRef = (e, t) => {
        null != e && (e.current = t);
    };
    setChannelItemRef = (e) => {
        (this.channelItemRef.current = e), this.assignRef(this.props.channelItemRef, e);
    };
    enterTimer = null;
    exitTimer = null;
    handleMouseEnter = () => {
        (this.props.channelIsContentGated && null == this.props.embeddedApps) ||
            (this.resetTextChannelPopoutTimers(),
            (this.enterTimer = setTimeout(() => {
                null != this.props.embeddedApps && this.props.embeddedApps.length > 0
                    ? this.setState({ shouldShowActivities: !0 })
                    : this.props.channelIsContentGated || this.setState({ shouldShowThreadsPopout: !0 });
            }, 200)));
    };
    handleMouseLeave = () => {
        this.resetTextChannelPopoutTimers(),
            (this.exitTimer = setTimeout(() => {
                this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
            }, 250));
    };
    handleThreadsPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
    };
    handleActivitiesPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
    };
    handleClosePopout = () => {
        this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
    };
    handleMouseDown = () => {
        this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
        let { channel: e } = this.props,
            t = e.getGuildId();
        il.A.preload(t ?? F.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
            { shouldShowActivities: s } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != i && i.length > 0 && s && !n
              ? (0, a.jsx)(lB, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, a.jsx)(lI, { ...e, channel: this.props.channel });
    };
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        null != this.enterTimer && (clearTimeout(this.enterTimer), (this.enterTimer = null)),
            null != this.exitTimer && (clearTimeout(this.exitTimer), (this.exitTimer = null));
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props;
        if (t.type === F.rbe.GROUP_DM)
            return void (0, eM.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("60200"), n.e("68530")]).then(
                    n.bind(n, 4027),
                );
                return (n) => (0, a.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === F.rbe.DM) {
            let i = iP.default.getUser(t.getRecipientId());
            null != i &&
                (0, eM.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("93103"),
                        n.e("88342"),
                        n.e("35313"),
                        n.e("84442"),
                        n.e("39778"),
                        n.e("28545"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, a.jsx)(e, { ...n, user: i, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, eM.L3)(e, async () => {
                let { default: e } = await n.e("78580").then(n.bind(n, 907647));
                return (n) => (0, a.jsx)(e, { ...n, channel: t });
            });
        let i = t_.A.getGuild(t.getGuildId());
        null != i &&
            (0, eM.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("79359"), n.e("26934")]).then(
                    n.bind(n, 468916),
                );
                return (n) => (0, a.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, a.jsx)("div", { className: ed.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: i,
                unread: l,
                hasActiveThreads: s,
                hasMoreActiveThreads: r,
                mentionCount: o,
                connectChannelDropTarget: d,
                connectChannelDragSource: c,
                connectDragPreview: u,
                canReorderChannel: h,
                isSubscriptionGated: _,
                isFavoriteSuggestion: m,
                subtitle: g,
                forceTopLevelThread: f,
                embeddedApps: A,
                resolvedUnreadSetting: p,
                enableActivities: C,
                showMenuItemPopover: E,
                markMenuItemPopoverAsDismissed: x,
                channelItemRef: b,
                isSuggestedSection: S,
            } = this.props,
            I = b ?? this.channelItemRef,
            N = !E && r,
            v = !E && C && null != A && A.length > 0,
            y = lu(g),
            G = (0, a.jsxs)("li", {
                className: eA()(this.getClassName(), { [ed.r9]: this.isDisabled(), [ed.wH]: n }),
                "data-dnd-name": (0, tY.m1)(e, iP.default, iJ.A),
                onMouseEnter: N || v ? this.handleMouseEnter : void 0,
                onMouseLeave: N || v ? this.handleMouseLeave : void 0,
                children: [
                    (0, a.jsx)(iS.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (N && this.state.shouldShowThreadsPopout) || (v && this.state.shouldShowActivities),
                        children: () =>
                            (0, a.jsxs)(nS.Ay, {
                                ref: this.setChannelItemRef,
                                className: ed.Ki,
                                channel: e,
                                guild: t,
                                selected: !m && n,
                                muted: i,
                                unread: l,
                                mentionCount: o,
                                hasActiveThreads: s,
                                subtitle: y?.subtitle,
                                subtitleColor: y?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: m,
                                channelTypeOverride: f ? F.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: p,
                                transitionExtras: S ? { source: iF.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, iv.Ay)({
                                    channel: e,
                                    unread: l,
                                    mentionCount: o,
                                    isSubscriptionGated: _,
                                }),
                                children: [
                                    m &&
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !m &&
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    E && (0, a.jsx)(lh.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: x }),
                ],
            });
        return h ? d(c(G)) : G;
    }
}
let lF = tz(lk);
function lW(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: r, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lm.NR)(t),
        h = (0, u.cf)([nK.Ay], () => ({
            unread: nK.Ay.hasUnread(t.id),
            ackMessageId: nK.Ay.ackMessageId(t.id),
            isLowImportanceMention: nK.Ay.getIsMentionLowImportance(t.id),
        })),
        _ = (0, u.bG)([tX.Ay], () => tX.Ay.resolveUnreadSetting(t)),
        m = (0, u.cf)([eq.A, B.A], () => {
            let e = eq.A.getChannel(t.parent_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    (n.id === ni.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        g = (0, u.bG)([nW.A], () => nW.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: A } = (0, iL.A)(t.id),
        p = (0, u.bG)([tX.Ay], () => tX.Ay.isFavorite(n.id, t.id)),
        C = (0, lc.ni)(t),
        E = (0, ld.Gp)(t.id),
        x = le({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: A,
            needSubscriptionToAccess: f,
            isNewChannel: g,
            muted: r,
            enableActivities: E,
            resolvedUnreadSetting: _,
        }),
        b = (0, i$.Ay)(t),
        [S, I] = s.useState(!1),
        N = (0, lo.K)(
            s.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: v, markMenuItemPopoverAsDismissed: y } = (0, l_.z)({
            location: "TextChannel",
            isChannelSelected: o,
            isTargetInViewport: S,
            channelType: t.type,
            isPopoverAllowed: n.id !== ni.Vc,
        });
    return (0, u.bG)([lf.A, lg.Ay], () => lf.A.getChannelId() !== t.id && lg.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, a.jsx)(lF, {
              ...h,
              ...m,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: A,
              needSubscriptionToAccess: f,
              isNewChannel: g && e.canBeNewChannel,
              isFavoriteSuggestion: l && !p,
              channelIsContentGated: C,
              channelInfo: x,
              embeddedApps: b,
              resolvedUnreadSetting: _,
              hasChannelInfo: null != x,
              enableActivities: E,
              showMenuItemPopover: v,
              markMenuItemPopoverAsDismissed: y,
              channelItemRef: N,
          });
}
var lK = n(900797),
    lz = n(250719),
    lY = n(636585),
    lq = n(531685),
    lX =
        (((l = {}).HIDDEN = "hidden"),
        (l.UNREAD = "unread"),
        (l.MENTIONS = "mentions"),
        (l.VOICE_CHANNELS = "voice-channels"),
        l);
let lZ = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    lJ = { topBar: lZ, bottomBar: lZ },
    l$ = {},
    lQ = {};
function l0(e) {
    let t = eq.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? ia.A.isMuted(t.id) : tX.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, ez.Y)(t)
    );
}
function l1(e) {
    let t = eq.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = tX.Ay.isGuildCollapsed(n),
        l = tX.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nK.Ay.getMentionCount(e) > 0;
}
function l2(e) {
    return (
        !tX.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? eQ.A.getMutableParticipants(e.id, e0.ip.SPEAKER).length > 0
            : eX.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function l9(e) {
    let { guildChannels: t } = tt.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(lQ[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let i = null,
        l = null,
        a = null,
        s = null,
        r = !0,
        d = !0,
        c = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [_, m, g] = t.getSlicedChannels(n);
    for (let e = 0; e < m.length; e++) {
        let t = m[e];
        if (
            ((l0(t.id) || o().some(t.threadIds, l0)) && (d = !1),
            (l1(t.id) || o().some(t.threadIds, l1)) && (r = !1),
            h.includes(t.id) && (c = !0),
            !d && !r && c)
        )
            break;
    }
    let f = 0,
        A = !1,
        p = 0,
        C = !1;
    if (d || r)
        for (let e = _.length - 1; e >= 0; e--) {
            let t = _[e];
            (l0(t.id) || o().some(t.threadIds, l0)) && (null == l && (l = t.id), (A = !0)),
                (l1(t.id) || o().some(t.threadIds, l1)) &&
                    (null == i && (i = t.id),
                    (f += nK.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, nK.Ay.getMentionCount)));
        }
    if (d || r)
        for (let e = 0; e < g.length; e++) {
            let t = g[e];
            if (!d && !r) break;
            (l0(t.id) || o().some(t.threadIds, l0)) && (null == s && (s = t.id), (C = !0)),
                (l1(t.id) || o().some(t.threadIds, l1)) &&
                    (null == a && (a = t.id),
                    (p += nK.Ay.getMentionCount(t.id)),
                    (p += o().sumBy(t.threadIds, nK.Ay.getMentionCount)));
        }
    let E = null,
        x = null,
        b = u?.getChannelRecords() ?? [];
    r && p > 0
        ? (E = { mode: "mentions", mentionCount: p, targetChannelId: a })
        : !c && o().some(b, l2)
          ? (E = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && C && (E = { mode: "unread", mentionCount: 0, targetChannelId: s }),
        r && f > 0
            ? (x = { mode: "mentions", mentionCount: f, targetChannelId: i })
            : d && A && (x = { mode: "unread", mentionCount: 0, targetChannelId: l });
    let S = null != x && (null == E || ("mentions" !== E.mode && "mentions" === x.mode)),
        I = null != E && ("mentions" === E.mode || !S);
    return (l$[e] = { topBar: S ? (x ?? lZ) : lZ, bottomBar: I ? (E ?? lZ) : lZ }), !0;
}
let l4 = o().throttle(l9, 200);
function l7(e) {
    let { guildId: t } = e,
        n = t_.A.getGuild(t);
    return null != n && !!n.features.has(F.GuildFeatures.COMMUNITY) && l4(t);
}
function l6(e) {
    let { id: t } = e,
        n = eq.A.getChannel(t);
    if (null == n) return !1;
    let i = t_.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(F.GuildFeatures.COMMUNITY) && l4(n.guild_id);
}
function l3(e) {
    let { channel: t } = e,
        n = eq.A.getChannel(t.id);
    if (null == n) return !1;
    let i = t_.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(F.GuildFeatures.COMMUNITY) && l4(n.guild_id);
}
function l5(e) {
    let { channelId: t } = e,
        n = eq.A.getChannel(t);
    if (null == n) return !1;
    let i = t_.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(F.GuildFeatures.COMMUNITY) && e8.A.getGuildId() === n.guild_id && l4(n.guild_id)
    );
}
function l8(e) {
    let { guildId: t } = e;
    return null != t && l4(t);
}
class ae extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tt.A, eq.A, t_.A, ia.A, nK.Ay, e8.A, eX.Ay, eQ.A, tX.Ay);
    }
    getUnreadStateForGuildId(e) {
        return l$[e] ?? lJ;
    }
}
let at = new ae(eU.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = t_.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(F.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(lQ[t], n) &&
            ((lQ[t] = n), l9(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return eq.A.getChannel(t)?.guild_id;
                })
                .filter(eZ.Vq)
                .uniq()
                .forEach((e) => {
                    let t = t_.A.getGuild(e);
                    null != t && t.features.has(F.GuildFeatures.COMMUNITY) && l4(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: l5,
    CHANNEL_DELETE: l3,
    CHANNEL_LOCAL_ACK: l5,
    MESSAGE_ACK: l5,
    MESSAGE_CREATE: l5,
    MESSAGE_DELETE_BULK: l5,
    MESSAGE_DELETE: l5,
    PASSIVE_UPDATE_V2: function (e) {
        let t = t_.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(F.GuildFeatures.COMMUNITY)) && l4(e.guildId);
    },
    RESORT_THREADS: l5,
    THREAD_CREATE: l3,
    THREAD_DELETE: l3,
    THREAD_LIST_SYNC: l7,
    THREAD_MEMBER_UPDATE: l6,
    THREAD_MEMBERS_UPDATE: l6,
    THREAD_UPDATE: l3,
    BULK_CLEAR_RECENTS: l7,
    CATEGORY_COLLAPSE_ALL: l7,
    CATEGORY_EXPAND_ALL: l7,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = e8.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = l$[n];
        return null != i && "voice-channels" === i.bottomBar.mode && l4(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: l8,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: l8,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && l4(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: l8,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: l8,
});
var an = n(335543);
let ai = { friction: 30, tension: 300 };
function al(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, lz.A)(t.id),
        r = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, nn.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, a.jsxs)(ee.D, {
        className: eA()(an.M0, an.OF),
        onClick: r,
        children: [
            (0, a.jsx)(S.H, { size: "custom", className: an.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, a.jsx)(x.E, {
                variant: "text-xs/semibold",
                className: an.pM,
                children: W.intl.format(W.t["fDlr+F"], { count: d.length }),
            }),
            (0, a.jsx)(lY.A, {
                guildId: t.id,
                className: an.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: lC._3.SIZE_16,
            }),
        ],
    });
}
function aa(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: r } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([at], () => at.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([lq.A], () => lq.A.isFocused()),
        { mode: h, mentionCount: _, targetChannelId: m } = "bottom" === t ? o : d,
        g = h === lX.HIDDEN,
        f = (0, ej.z)(
            {
                to: { transform: g ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: ai,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        A = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != m && r(m);
            },
            [r, m],
        );
    return (0, a.jsx)("div", {
        className: eA()(an.kL, { [an.Mn]: "top" === t, [an.sQ]: "bottom" === t }),
        children: (0, a.jsx)(eR.animated.div, {
            className: an.pK,
            style: f,
            "aria-hidden": g,
            children:
                h === lX.HIDDEN
                    ? (0, a.jsx)("div", { className: eA()(an.M0, an.Te) })
                    : h === lX.UNREAD
                      ? (0, a.jsxs)(ee.D, {
                            className: an.M0,
                            onClick: A,
                            children: [
                                "bottom" === t
                                    ? (0, a.jsx)(tI.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: an.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, a.jsx)(lK.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: an.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, a.jsx)(x.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: an.pM,
                                    children: W.intl.string(W.t.FCRiT3),
                                }),
                            ],
                        })
                      : h === lX.MENTIONS
                        ? (0, a.jsx)(ee.D, {
                              className: eA()(an.M0, an.vU),
                              onClick: A,
                              children: (0, a.jsx)(x.E, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: an.pM,
                                  children: W.intl.format(W.t.EQcLyp, { count: _ }),
                              }),
                          })
                        : h === lX.VOICE_CHANNELS
                          ? (0, a.jsx)(al, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i })
                          : void 0,
        }),
    });
}
var as = n(310953),
    ar = n(173860);
function ao(e) {
    let t = eq.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? ia.A.isMuted(t.id) : tX.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, ez.Y)(t)
    );
}
function ad(e) {
    let t = eq.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = tX.Ay.isGuildCollapsed(n),
        l = tX.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nK.Ay.getMentionCount(e) > 0;
}
let ac = s.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: i, guildChannelsVersion: l, ...s } = e,
        r = (0, as.W)(n, i, l, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([lq.A], () => lq.A.isFocused());
    return (0, a.jsx)(ar.A, { ref: t, ...s, isUnread: ao, isMentioned: ad, items: r, animate: o });
});
var au = n(81466);
function ah(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: s } = (0, u.cf)(
            [nK.Ay],
            () => ({
                hasUnread: nK.Ay.hasUnread(t.id, nI.P.GUILD_EVENT),
                mentionCount: nK.Ay.getMentionCount(t.id, nI.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        r = (0, u.bG)([tX.Ay], () => tX.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, $.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("22021"), n.e("26816"), n.e("41232")]).then(n.bind(n, 15823));
            return (n) => (0, a.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, nB.Dr)(M.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tg.Ay)(t.id),
        c = d.length > 0 ? W.intl.formatToPlainString(W.t.IBdqSu, { number: d.length }) : W.intl.string(W.t.tlopTM);
    return (0, a.jsx)(H.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, a.jsx)(au.C, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: i,
        onClick: o,
        onContextMenu: (e) => {
            (0, eM.L3)(e, async () => {
                let { default: e } = await n.e("19990").then(n.bind(n, 221621));
                return (n) => (0, a.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !r,
        trailing: !r && s > 0 ? (0, a.jsx)(U.hV, { className: nO.Do, disableColor: !0, count: s }) : null,
    });
}
var a_ = n(451988),
    am = n(271683),
    ag = n(725613),
    af = n(262763),
    aA = n(857253),
    ap = n(22231),
    aC = n(241326),
    aE = n(750943),
    ax = n(743674),
    ab = n(888697),
    aS = n(493819),
    aI = n(722884),
    aN = n(844045),
    av = n(31950);
function ay(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, canModifyHangout: r } = e,
        o = (0, ax.S)(i),
        d = (0, Y.je)(t),
        c = s.useCallback(() => {
            (0, aI.A)({ channel: t });
        }, [t]),
        u = s.useCallback(() => {
            (0, ab.e2)(t.id);
        }, [t.id]),
        h = s.useCallback(
            (e) => {
                d
                    ? (0, eM.L3)(e, async () => {
                          let { default: e } = await n.e("55558").then(n.bind(n, 316421));
                          return (n) => (0, a.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, d],
        );
    return (0, a.jsxs)("div", {
        className: av.rs,
        onContextMenu: h,
        children: [
            (0, a.jsx)("div", {
                className: av.ZS,
                style: null != o ? { backgroundColor: o } : void 0,
                children: (0, a.jsx)(aS.A, { imageUrl: i, animatedUrl: l, className: av.Sl }),
            }),
            r
                ? (0, a.jsxs)("div", {
                      className: av.n_,
                      children: [
                          (0, a.jsx)(Q.m, {
                              text: W.intl.string(aN.default.XJ4UpB),
                              children: (0, a.jsx)(ee.D, {
                                  className: av.HF,
                                  onClick: c,
                                  children: (0, a.jsx)(ap.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, a.jsx)(Q.m, {
                              text: W.intl.string(aN.default.XV4qT6),
                              children: (0, a.jsx)(ee.D, {
                                  className: av.HF,
                                  onClick: u,
                                  children: (0, a.jsx)(aC.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function aG(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            (0, aI.A)({ channel: t });
        }, [t]);
    return (0, a.jsx)("div", {
        className: av._o,
        children: (0, a.jsxs)(ee.D, {
            className: av.hH,
            onClick: n,
            children: [
                (0, a.jsx)(aE.X, { size: "xs", color: "currentColor" }),
                (0, a.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: W.intl.string(aN.default.NGcIOF),
                }),
            ],
        }),
    });
}
function aL(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, z.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, Y.W6)(t),
        r = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = s.useMemo(
            () => (null == d || null == t.guild_id ? null : (0, Y.Sq)({ guildId: t.guild_id, bannerHash: d })),
            [t.guild_id, d],
        );
    return i
        ? null != c
            ? (0, a.jsx)(ay, { channel: t, imageUrl: c.imageUrl, animatedUrl: c.animatedUrl, canModifyHangout: r })
            : r
              ? (0, a.jsx)(aG, { channel: t })
              : null
        : null;
}
var aR = n(159426),
    aj = n(595457),
    aM = n(820512);
function aT(e) {
    let { channel: t } = e,
        { enableHistoryHover: n, showGhostUser: i } = (0, e4.G8)({
            guildId: t.guild_id,
            location: "VoiceChannelHistoryTracking",
        }),
        l = (0, u.bG)([e7.A], () => e7.A.getHistoryExists(t.id)),
        a = (0, u.bG)([ag.A], () => ag.A.getStartTime(t));
    return (
        s.useEffect(() => {
            n && null != a && !l && ((0, aM.H)(t.id), i || (0, aM.q)(t.id));
        }, [t.id, n, l, a, i]),
        null
    );
}
var aU = n(532622),
    aw = n(882840),
    aD = n(46054),
    aP = n(514416),
    aO = n(992595);
function aV(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, onClick: r } = e,
        o = (0, aw.l)(t),
        { enableHangoutWindow: d } = (0, z.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, Y.lr)(t),
        u = null != o && o.length > 0,
        h = (0, aU.Ay)(t, !0),
        _ = null != l && l.length > 0;
    if (
        (s.useEffect(() => {
            u && n5.default.track(F.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let m = eA()(aP.Ui, n && h ? aP.BI : null);
    return u
        ? (0, a.jsx)(ee.D, {
              className: m,
              onClick: h ? r : void 0,
              children: (0, a.jsx)(x.E, {
                  variant: "text-xs/medium",
                  className: eA()(aP.qS, aO.PT),
                  children: (0, a.jsx)(tx.A, { children: aD.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!_ || i)
          ? (0, a.jsxs)(ee.D, {
                className: m,
                onClick: r,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "text-xs/medium",
                        className: aP.qS,
                        children: W.intl.string(W.t.Mgpxiw),
                    }),
                    (0, a.jsx)(ap.R, { color: "currentColor", className: aP.rD, size: "xxs" }),
                ],
            })
          : _
            ? (0, a.jsx)(tx.A, { children: l })
            : null;
}
class aH extends nb {
    state = { popoutToShow: null, shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = s.createRef();
    channelItemRef = s.createRef();
    activitiesHoverTimeout = new a_.Ep();
    componentWillUnmount() {
        this.activitiesHoverTimeout.stop();
    }
    closeGuildVerificationPopout = () => {
        this.setState({ shouldShowGuildVerificationPopout: !1 });
    };
    handleVoiceConnect = () => {
        let {
            locked: e,
            connected: t,
            channel: n,
            unverifiedAccount: i,
            needSubscriptionToAccess: l,
            enableOpenTIVForPing: a,
            mentionCount: s,
            isSuggestedSection: r,
        } = this.props;
        i && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = a && s > 0;
        o && iI.A.updateChatOpen(n.id, !0),
            af.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o,
                locked: e,
                transitionExtras: r ? { source: iF.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t_.A.getGuild(t.getGuildId());
        null != i &&
            (0, eM.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("93103"),
                    n.e("79359"),
                    n.e("99854"),
                    n.e("48909"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, a.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    handleMouseEnter = () => {
        this.activitiesHoverTimeout.stop(), this.setState({ hovered: !0 });
        let { enableHistoryHover: e } = (0, e4.NH)({ guildId: this.props.channel.guild_id, location: "VoiceChannel" });
        this.activitiesHoverTimeout.start(100, () => {
            e && this.getVoiceStatesCount() > 0 && this.setState({ popoutToShow: "history" });
        });
    };
    handleMouseLeave = () => {
        this.activitiesHoverTimeout.start(100, () => this.setState({ popoutToShow: null, hovered: !1 }));
    };
    closePopout = () => {
        this.activitiesHoverTimeout.stop(), this.setState({ popoutToShow: null });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, nn.Pd)(e, ir.A, t_.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ed.ZS;
        if (null != t)
            if (e > t) return ed.mU;
            else return ed.TR;
        return ed.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, iG.V)(t) && (0, iy.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, am.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = lu(this.props.subtitle)?.subtitle,
            { hovered: i } = this.state;
        return (0, a.jsx)(aV, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: i,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, a.jsx)(iA.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: i,
            tabIndex: l,
        });
    }
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n, collapsed: i } = this.props;
        return !(null != n && n.length > 0) || i ? null : (0, a.jsx)(aL, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e, sorting: t, isUserOver: n } = this.props,
            { popoutToShow: i, shouldShowGuildVerificationPopout: l } = this.state;
        return l
            ? (0, a.jsx)(ik, { type: iB.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : t || n
              ? null
              : "history" === i && this.getVoiceStatesCount() > 0
                ? (0, a.jsx)(aj.A, {
                      channel: e,
                      source: "voice_channel",
                      onMouseEnter: this.handleMouseEnter,
                      onMouseLeave: this.handleMouseLeave,
                  })
                : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: i } = this.props;
        if (!t)
            return (0, a.jsx)(Q.m, {
                asContainer: !0,
                text: W.intl.string(W.t.ZXxLQg),
                children: (0, a.jsx)(ee.D, {
                    className: eA()(ed.Xs, n ? ed.Tf : null),
                    onClick: () => {
                        iI.A.updateChatOpen(e.id, !0),
                            (0, iW.iN)(e.id, i ? { source: iF.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": W.intl.string(W.t.ZXxLQg),
                    children: (0, a.jsx)(I.o, { size: "xs", color: "currentColor", className: ed.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, a.jsx)("div", { className: ed.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? W.intl.string(W.t.rZfiNq) : null;
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: i,
                resolvedUnreadSetting: l,
                mentionCount: s,
                locked: r,
                sorting: o,
                isUserOver: d,
                connectChannelDropTarget: c,
                connectChannelDragSource: u,
                connectUserDropTarget: h,
                connectDragPreview: _,
                canReorderChannel: m,
                canMoveMembers: g,
                showTutorial: f,
                hasActiveEvent: A,
                embeddedApps: p,
                isSubscriptionGated: C,
                isFavoriteSuggestion: E,
                withGuildIcon: x,
                hasStartTime: b,
                shouldHighlightChannel: S,
                shouldUseAnimatedWaveform: I,
                voiceStates: N,
            } = this.props,
            { shouldShowGuildVerificationPopout: v } = this.state,
            { enableHistoryHover: y } = (0, e4.NH)({ guildId: e.guild_id, location: "VoiceChannel" }),
            G = S || I,
            L = (0, a.jsxs)("li", {
                ref: this.ref,
                className: eA()(this.getModeClass(), { [ed.r9]: this.isDisabled(), [ed.fy]: S }),
                "data-dnd-name": (0, tY.m1)(e, iP.default, iJ.A),
                children: [
                    y && this.getVoiceStatesCount() > 0 && (0, a.jsx)(aT, { channel: e }),
                    S &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("div", { className: ed.UQ }),
                                (0, a.jsx)("div", { className: ed.l0 }),
                            ],
                        }),
                    (0, a.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, a.jsx)(iS.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: v || ("history" === this.state.popoutToShow && !(o || d)),
                            children: () =>
                                (0, a.jsx)(Q.m, {
                                    text: this.getTooltipText(),
                                    children: (0, a.jsxs)(nS.Ay, {
                                        ref: this.channelItemRef,
                                        className: ed.Ki,
                                        iconClassName: eA()({ [ed.Gj]: A || b || G }),
                                        hasActiveEvent: A,
                                        channel: e,
                                        selected: !E && t,
                                        connected: n,
                                        unread: n ? i : void 0,
                                        resolvedUnreadSetting: l,
                                        mentionCount: s,
                                        locked: r,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: _,
                                        isFavoriteSuggestion: E,
                                        "aria-label": (0, iv.Ay)({
                                            channel: e,
                                            unread: i,
                                            mentionCount: s,
                                            voiceStates: N,
                                            embeddedActivitiesCount: p.length,
                                            isSubscriptionGated: C,
                                        }),
                                        "aria-describedby": (function (e) {
                                            let { channel: t, embeddedApps: n } = e;
                                            if (t.type === F.rbe.GUILD_VOICE) {
                                                if (null != n && n.length > 0) {
                                                    let e = n.map((e) => e.application.name);
                                                    return W.intl.formatToPlainString(W.t.LmYuHT, {
                                                        activeActivities: e.join(", "),
                                                    });
                                                }
                                            }
                                        })({ channel: e, embeddedApps: p }),
                                        withGuildIcon: x,
                                        children: [
                                            E &&
                                                (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !E &&
                                                (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        this.renderOpenChatButton(),
                                                        this.renderInviteButton(),
                                                        this.renderEditButton(),
                                                        this.renderChannelInfo(),
                                                    ],
                                                }),
                                        ],
                                    }),
                                }),
                        }),
                    }),
                    this.renderHangoutWindow(),
                    this.renderVoiceUsers(),
                ],
            });
        return (
            g && (L = h(L)),
            m && (L = c(u(L))),
            f &&
                (L = (0, a.jsx)(t4.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: L,
                })),
            L
        );
    }
}
let aB = tz((0, iN.F)(aH));
function ak(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: s,
            collapsed: r,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([nK.Ay], () => ({ unread: nK.Ay.hasUnread(n.id), mentionCount: nK.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([tX.Ay], () => tX.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([eq.A, iD.A, B.A], () => {
            let e = eq.A.getChannel(n.parent_id),
                l = iD.A.getCheck(n.guild_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    (t.id === ni.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, n),
                locked: !B.A.can(F.xBc.CONNECT, n),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
            };
        }),
        _ = (0, u.bG)([ir.A], () => ir.A.hasVideo(n.id)),
        m = (0, i$.Ay)(n),
        g = (0, tY.Ay)(n),
        f = (0, tg.Qs)(n.id),
        A = (0, u.bG)([ag.A], () => null != ag.A.getStartTime(n), [n]),
        { isSubscriptionGated: p, needSubscriptionToAccess: C } = (0, iL.A)(n.id),
        E = (0, aA.A)(),
        x = (0, u.bG)([tX.Ay], () => tX.Ay.isFavorite(t.id, n.id)),
        b = e.connected || E?.channelId === n.id,
        { enableOpenTIVForPing: S } = aR.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: I, enableWaveformIcon: N } = (0, ne.b)(t.id, "VoiceChannel"),
        v = null != o && o.length > 0,
        y = I && v,
        G = N && v,
        L = le({
            channel: n,
            isChannelSelected: s,
            isChannelCollapsed: r,
            voiceStates: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: C,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        R = b && null == L;
    return (0, a.jsx)(aB, {
        channelName: g,
        embeddedApps: m,
        embeddedActivityType: F.$pd.PLAYING,
        video: _,
        hasActiveEvent: null != f,
        isSubscriptionGated: p,
        needSubscriptionToAccess: C,
        ...d,
        ...h,
        ...e,
        connected: b,
        isFavoriteSuggestion: l && !x,
        forceShowButtons: R,
        channelInfo: L,
        resolvedUnreadSetting: c,
        enableOpenTIVForPing: S,
        hasChannelInfo: null != L,
        hasStartTime: A,
        shouldHighlightChannel: y,
        shouldUseAnimatedWaveform: G,
    });
}
n(131955);
var aF = n(335993);
function aW(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class aK extends s.PureComponent {
    static contextType = d.nC;
    _list = null;
    unreadTopRef = s.createRef();
    unreadBottomRef = s.createRef();
    static defaultProps = { density: "default" };
    state = {
        initialized: !1,
        isUnreadVisible: !0,
        topUnread: null,
        topMention: null,
        bottomUnread: null,
        bottomMention: null,
    };
    componentDidMount() {
        this.setState({ initialized: !0 }), (0, ti.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: a } = this.state,
            { scrollTop: s } = e3.A.getGuildDimensions(i);
        null != n
            ? (this.scrollToChannel(n), N.A.clearChannelListScrollTo(i))
            : i !== e.guildId
              ? null != s && this.scrollTo(s)
              : l !== e.selectedChannelId
                ? this.scrollToChannel(l)
                : !t.initialized &&
                  a &&
                  (null == s && null != l
                      ? this.scrollToChannel(l, !1, 8, this.handleListScroll)
                      : this.scrollTo(s ?? 0, this.handleListScroll)),
            this.testShouldSkipTutorial();
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    setListRef = (e) => {
        let { ref: t } = this.context;
        (t.current = e?.getScrollerNode() ?? null), (this._list = e);
    };
    scrollTo(e, t) {
        this._list?.scrollTo({ to: e, animate: !1, callback: t });
    }
    scrollToChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            a = this.getSectionRowsFromChannel(e)[0];
        if (null != a && null != l)
            if (null != a.threadOffset) {
                let [e] = l.getScrollPosition(a.section, a.row),
                    { density: s = "default" } = this.props,
                    r = a.threadOffset * aW(s);
                l.scrollIntoViewRect({ start: e + r, end: e + r + aW(s), padding: n, animate: t, callback: i });
            } else l.scrollToIndex({ section: a.section, row: a.row, animate: t, padding: n, callback: i });
        else i?.();
    }
    jumpToVoiceChannels = () => {
        let { guildChannels: e, voiceStates: t } = this.props,
            n = 0,
            i = e.getCategoryFromSection(e.voiceChannelsSectionNumber)?.getShownChannelIds() ?? [];
        for (let e = 0; e < i.length - 1; e++)
            if ((t[i[e]] ?? []).length > 0) {
                n = e + 1;
                break;
            }
        this._list?.scrollToIndex({ section: e.voiceChannelsSectionNumber, row: n, animate: !0, padding: 8 });
    };
    jumpToChannel = (e) => this.scrollToChannel(e, !0, 32);
    jumpToChannelWithMentionsAndUnreads = (e, t) => {
        let [n, i] = t;
        return this.scrollToChannel(e, !0, null != n && null != i ? 32 : 8);
    };
    isChannelVisible = (e, t) => {
        let n = this.getSectionRowsFromChannel(e),
            i = this._list;
        if (null == i) return !1;
        for (let { row: e, section: l } of n) {
            let [n, a] = i.getScrollPosition(l, e),
                s = i.getScrollerState();
            if ((t && n + a < s.scrollTop + s.offsetHeight) || (!t && n > s.scrollTop)) return !0;
        }
        return !1;
    };
    getVisibleChannels = () => {
        let e = this._list;
        if (null == e) return [];
        let t = e.getItems(),
            n = e.getScrollerState(),
            i = [];
        for (var l = 0; l < t.length; l++) {
            let a = t[l];
            if ((0, _.o)(a) && a.section >= this.props.guildChannels.favoritesSectionNumber) {
                let t = this.props.guildChannels.getChannelFromSectionRow(a.section, a.row),
                    [l, s] = e.getScrollPosition(a.section, a.row);
                null != t && l + s < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
            }
        }
        return i;
    };
    handleResize = () => {
        let { showNewUnreadsBar: e } = this.props,
            t = this._list?.getScrollerState() ?? null;
        if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), e && null != t)) {
            let { scrollTop: e } = t;
            this.updateChannelListScroll(e);
        }
    };
    handleListScroll = () => {
        let { onScroll: e } = this.props,
            t = this._list?.getScrollerState() ?? null;
        if (null != t) {
            let { scrollTop: n } = t;
            null != e && e(t), this.updateChannelListScroll(n);
        }
        null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(),
            null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
    };
    handleUnreadCalculate = (e, t, n) => {
        let i = this.isUnreadVisible();
        n
            ? this.setState({ isUnreadVisible: i, bottomUnread: t, bottomMention: e })
            : this.setState({ isUnreadVisible: i, topUnread: t, topMention: e });
    };
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ("row" !== n.type) return !1;
                let { section: i, row: l } = n;
                if (i < te.bK || e.isPlaceholderRow(i, l)) return !1;
                let a = e.getChannelFromSectionRow(i, l);
                if (null == a) return !1;
                let { channel: s, category: r } = a;
                return (
                    !!(0, e6.ig)(s.record.type) &&
                    (!r.isCollapsed || !r.isMuted) &&
                    !s.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, ez.Y)(s.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, r.throttle)((e) => {
        N.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props,
            l = "compact" === i ? 8 : 12;
        if (e === te.PU) return l;
        if (e === te.bK) return t.features.has(F.GuildFeatures.HUB) ? 0 : l;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let i = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == i || i.record.type === F.rbe.GUILD_CATEGORY ? 9 : 25;
        }
        return "compact" === i ? 32 : 40;
    };
    getSectionFooterHeight = (e) => {
        let {
            guildChannels: t,
            voiceStates: n,
            selectedVoiceChannelId: i,
            selectedChannelId: l,
            optInEnabled: a,
            guildChannelsVersion: s,
        } = this.props;
        return (function (e) {
            let {
                sectionIndex: t,
                guildChannels: n,
                voiceStates: i,
                selectedChannelId: l,
                selectedVoiceChannelId: a,
                optInEnabled: s,
                visualRefreshEnabled: r,
                density: o,
            } = e;
            if (t === n.voiceChannelsSectionNumber) return 44;
            let { hasDivider: d, canHaveVoiceSummary: c } = nl(n, s, t),
                u = d ? (r ? 9 : 12) : 0;
            if (!c || t === te.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                            return !0 !== tw.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!B.A.can(F.xBc.VIEW_CHANNEL, e)) return !1;
                                      let t = n[e.id] ?? [];
                                      return e.id !== l && e.id !== i && t.length > 0;
                                  });
                        })({ category: t, selectedChannelId: i, selectedVoiceChannelId: l, voiceStates: n }).length > 0
                    );
                })({ category: h, selectedChannelId: l, selectedVoiceChannelId: a, voiceStates: i })
                ? u
                : (r && "cozy" === o ? 42 : 34) + u;
        })({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: s,
            voiceStates: n,
            selectedChannelId: l,
            selectedVoiceChannelId: i,
            optInEnabled: a,
            density: this.props.density,
        });
    };
    getRowHeight = (e, t) => {
        let {
                guildChannels: n,
                voiceStates: i,
                stageChannelSpeakerVoiceStates: l,
                selectedVoiceChannelId: a,
                density: s = "default",
            } = this.props,
            r = aW(s);
        if (e === te.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tE.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : r;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === F.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            r += aW(t);
            let n = i[d.id];
            null != n && n.length > 0 && (r += a === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, X.Ln)(d.record) && (t += 32),
                    (r += t + h.A.space.SPACE_XS.resolve({ density: s })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, z.kY)({ guildId: d.record.guild_id, location: "ChannelList" });
                    e && ((0, Y.lr)(d.record) ? (r += 134) : a === d.id && (r += 44));
                }
            }
            if (
                (d.id === this.props.rtcConnectedChannelId && (r += 32 * this.props.rtcDesyncedVoiceStatesCount),
                !d.isCollapsed && !c.isCollapsed)
            ) {
                let { showGhostUser: e } = (0, e4.NH)({ guildId: d.record.guild_id, location: "ChannelList" });
                e && null != e7.A.getLastLeftUserId(d.id) && (r += 32);
            }
        }
        if (((null != d.subtitle || a === d.id) && (r += 16), d.record.isGuildStageVoice())) {
            let e = i[d.id] ?? [],
                t = l[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (r += e + 8);
            }
        }
        return r;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == i) return;
        let l = null,
            a = i.getShownChannelAndThreadIds();
        null != n && a.includes(n) && (l = (0, Z.xb)(t)), (0, Z.DD)(e.id, a, l);
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: i,
                guild: l,
                selectedChannelId: s,
                disableManageChannels: r,
            } = this.props;
        return (0, a.jsx)(
            t5,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: i,
                selectedChannelId: s,
                disableManageChannels: r,
            },
            (function (e, t) {
                switch (e) {
                    case te.PU:
                        return "hoisted-spacer";
                    case te.bK:
                        return "uncategorized-spacer";
                    case te.HP:
                        return "favorites";
                    case t.recentsSectionNumber:
                        return "recents-header";
                    case t.voiceChannelsSectionNumber:
                        return "voice-channels-header";
                    default: {
                        let n = t.getNamedCategoryFromSection(e);
                        if (null != n) return `category-${n.id}`;
                        return `section-${e}`;
                    }
                }
            })(t, n),
        );
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                guild: i,
                selectedChannel: l,
                selectedChannelId: r,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: _,
                optInEnabled: m,
                withGuildIcon: g,
            } = this.props;
        if (t === te.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tE.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, a.jsx)(
                        q.A,
                        { guild: i, channel: e5.Ay.getDefaultChannel(i.id) },
                        tE.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tE.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, a.jsx)(eK, { guild: i, withMargin: l.length > 1 }, tE.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tE.n.GUILD_HOME:
                    return (0, a.jsx)(nq, { guild: i, selected: r === ea.VV.GUILD_HOME }, tE.n.GUILD_HOME);
                case tE.n.GUILD_SCHEDULED_EVENTS:
                    return (0, a.jsx)(
                        ah,
                        { guild: i, selected: r === tE.n.GUILD_SCHEDULED_EVENTS },
                        tE.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tE.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, a.jsx)(
                        n1,
                        { guild: i, selected: r === ea.VV.ROLE_SUBSCRIPTIONS },
                        tE.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tE.n.GUILD_SHOP:
                    return (0, a.jsx)(ii, { guild: i, selected: r === ea.VV.GUILD_SHOP }, tE.n.GUILD_SHOP);
                case tE.n.GUILD_GAME_SHOP:
                    return (0, a.jsx)(nV, { guild: i, selected: r === ea.VV.GAME_SHOP }, tE.n.GUILD_GAME_SHOP);
                case tE.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, a.jsx)(nQ, { guild: i });
                case tE.n.CHANNELS_AND_ROLES:
                    return (0, a.jsx)(
                        nz,
                        { guild: i, selected: r === ea.VV.CHANNEL_BROWSER || r === ea.VV.CUSTOMIZE_COMMUNITY },
                        tE.n.CHANNELS_AND_ROLES,
                    );
                case tE.n.GUILD_DIRECTORY:
                    return (0, a.jsx)(
                        nN,
                        { guild: i, selectedChannelId: r, disableManageChannels: h },
                        tE.n.GUILD_DIRECTORY,
                    );
                case tE.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, a.jsx)(
                        K,
                        { guild: i, selected: r === ea.VV.MEMBER_SAFETY },
                        tE.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tE.n.GUILD_BOOSTS:
                    return (0, a.jsx)(eL, { guildId: i.id, selected: r === ea.VV.GUILD_BOOSTS }, tE.n.GUILD_BOOSTS);
                case tE.n.GAME_SERVERS:
                    return (0, a.jsx)(eg, { guildId: i.id, selected: r === ea.VV.GAME_SERVERS }, tE.n.GAME_SERVERS);
                case tE.n.GAME_SERVERS_EMPTY:
                    return (0, a.jsx)(
                        ec,
                        { guildId: i.id, selected: r === ea.VV.GAME_SERVERS },
                        tE.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: A, channel: p } = f,
            C = A instanceof te.xu,
            E = p.record,
            x = `${t}${p.id}`;
        switch (E.type) {
            case F.rbe.GUILD_ANNOUNCEMENT:
            case F.rbe.GUILD_TEXT:
            case F.rbe.GUILD_FORUM:
            case F.rbe.GUILD_MEDIA:
            case F.rbe.DM:
            case F.rbe.GROUP_DM:
                return (0, a.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, a.jsx)(lW, {
                                channel: E,
                                guild: i,
                                position: p.position,
                                selected: r === p.id,
                                muted: p.isMuted,
                                subtitle: p.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: m && t === c.recentsSectionNumber,
                                isFavoriteCategory: C,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            p.threadCount > 0
                                ? (0, a.jsx)(ib, {
                                      withGuildIcon: g,
                                      channel: E,
                                      sortedThreadIds: p.threadIds,
                                      selectedChannel: null != l && (l.id === p.id || l.parent_id === E.id) ? l : null,
                                      selectedVoiceChannelId: o?.parent_id === E.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    x,
                );
            case F.rbe.GUILD_STAGE_VOICE:
                return (0, a.jsx)(
                    ll,
                    {
                        channel: E,
                        guild: i,
                        position: p.position,
                        selected: r === p.id,
                        connected: d === p.id,
                        collapsed: p.isCollapsed || A.isCollapsed,
                        voiceStates: u[p.id] ?? [],
                        speakerVoiceStates: _[p.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: C,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    x,
                );
            case F.rbe.GUILD_VOICE:
                return (0, a.jsx)(
                    ak,
                    {
                        channel: E,
                        guild: i,
                        position: p.position,
                        selected: r === p.id,
                        connected: d === p.id,
                        collapsed: p.isCollapsed || A.isCollapsed,
                        voiceStates: u[p.id],
                        subtitle: p.subtitle,
                        disableManageChannels: h,
                        showTutorial: p.isFirstVoiceChannel,
                        isFavoriteCategory: C,
                        withGuildIcon: g,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    x,
                );
            case F.rbe.GUILD_STORE:
                return (0, a.jsx)(lr, { channel: E, guild: i, position: p.position, selected: r === p.id }, x);
            case F.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, a.jsx)(t9, { channel: E }, `readonly-${E.id}`);
            case F.rbe.PUBLIC_THREAD:
            case F.rbe.PRIVATE_THREAD:
            case F.rbe.ANNOUNCEMENT_THREAD:
                return (0, a.jsx)(
                    lW,
                    {
                        channel: E,
                        guild: i,
                        position: p.position,
                        selected: r === p.id,
                        muted: p.isMuted,
                        subtitle: p.subtitle,
                        disableManageChannels: h,
                        canBeNewChannel: !1,
                        isFavoriteCategory: !1,
                        forceTopLevelThread: !0,
                    },
                    x,
                );
            default:
                return null;
        }
    };
    renderSectionFooter = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: i,
                voiceStates: l,
                selectedChannelId: s,
                selectedVoiceChannelId: r,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, a.jsx)(
            ns,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: i,
                sectionIndex: t,
                voiceStates: l,
                selectedChannelId: s,
                selectedVoiceChannelId: r,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: i, canHaveVoiceSummary: l } = nl(t, n, e);
                return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: l, guildChannels: s, guildChannelsVersion: r } = this.props;
        return (0, a.jsx)("div", {
            className: t3.Eo,
            children: (0, a.jsx)(ac, {
                ref: this.unreadTopRef,
                textUnread: W.intl.string(W.t.FCRiT3),
                textMention: W.intl.string(W.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: t3.Vq,
                barClassName: t3.bu,
                guildId: l,
                guildChannels: s,
                guildChannelsVersion: r,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate,
            }),
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: i, isUnreadVisible: l } = this.state;
        return (0, a.jsx)(ac, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: W.intl.string(W.t.FCRiT3),
            textMention: W.intl.string(W.t["8zH0LJ"]),
            hide: null == i && l,
            className: t3.di,
            barClassName: t3.bu,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate,
        });
    }
    getAnchorId = (e, t) => {
        let { guildChannels: n } = this.props;
        if (e !== te.PU) {
            if (null == t)
                return e === te.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === te.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: i } = this.props,
            l = {};
        (0, j.ai)(n) && (l["data-favorites"] = !0);
        let { ref: s, ...r } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === i ? 8 : 12;
        return (0, a.jsx)(m.sk, {
            children: (t) =>
                (0, a.jsx)(
                    g.OZ,
                    {
                        ref: this.setListRef,
                        className: t3.XG,
                        fade: !0,
                        sectionHeight: this.getSectionHeight,
                        footerHeight: this.getSectionFooterHeight,
                        rowHeight: this.getRowHeight,
                        paddingTop: o,
                        paddingBottom: d,
                        renderSection: this.renderSection,
                        renderFooter: this.renderSectionFooter,
                        renderRow: this.renderRow,
                        onScroll: this.handleListScroll,
                        onResize: this.handleResize,
                        onContentResize: this.handleResize,
                        sections: e.getSections(!0),
                        innerAriaLabel: W.intl.string(W.t.OGiMXJ),
                        innerTag: "ul",
                        getAnchorId: this.getAnchorId,
                        ...r,
                        ...t,
                        ...l,
                    },
                    "guild-channels",
                ),
        });
    }
    testShouldSkipTutorial = () => {
        if (!e9.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void e2.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || e2.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, a.jsx)(R.V0, {
            children: (i) =>
                (0, a.jsx)(f.F, {
                    component: (0, a.jsx)(A.A, {
                        children: (0, a.jsx)(f.H, { id: i, children: W.intl.string(W.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, a.jsxs)(s.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: t3.Eo,
                                      children: (0, a.jsx)(aa, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, a.jsx)(aa, {
                                      position: "bottom",
                                      guildChannels: e,
                                      guildChannelsVersion: t,
                                      jumpToVoiceChannels: this.jumpToVoiceChannels,
                                      jumpToChannel: this.jumpToChannel,
                                  }),
                              ],
                          })
                        : (0, a.jsxs)(s.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()],
                          }),
                }),
        });
    }
}
let az = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        l = (0, u.bG)([y.A], () => y.A.keyboardModeEnabled),
        { analyticsLocations: r } = (0, L.Ay)(G.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([eq.A], () => eq.A.getChannel(n)),
        h = (0, u.bG)([eq.A], () => eq.A.getChannel(i)),
        _ = (0, u.bG)([e8.A], () => e8.A.getGuildId()),
        m = (0, J.jN)(t),
        g = s.useRef(null),
        f = s.useCallback((e, t) => {
            let n = g.current;
            null != n &&
                (F.Ut1.test(t) || (0, ea.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        A = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        p = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = (0, c.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: l,
            setFocus: f,
            scrollToStart: A,
            scrollToEnd: p,
        }),
        E = C.setFocus;
    s.useEffect(() => {
        null != n && E(n);
    }, [n, E]);
    let x = (function (e) {
        let [t] = (0, u.bG)(
            [eQ.A, eq.A, eY.A],
            () => {
                let t;
                return [
                    (t =
                        e === F.YYv
                            ? e$.default
                                  .keys(eY.A.getFavoriteChannels())
                                  .map((e) => eq.A.getChannel(e))
                                  .filter(eZ.Vq)
                                  .filter((e) => e.isGuildStageVoice())
                            : eQ.A.getChannels(e)).reduce((e, t) => {
                        let n = eQ.A.getMutableParticipants(t.id, e0.ip.SPEAKER);
                        return (e[t.id] = n.filter((e) => e.type === e0.wY.VOICE).map(e1)), e;
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + eQ.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            eJ.D,
        );
        return t;
    })(t);
    return (0, a.jsx)(L.f5, {
        value: r,
        children: (0, a.jsx)(v.A, {
            section: F.JJy.GUILD_CHANNEL_LIST,
            children: (0, a.jsx)(d.hD, {
                navigator: C,
                children: (0, a.jsx)(aK, {
                    ...e,
                    listNavigator: C,
                    ref: g,
                    selectedChannel: o,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: x,
                    selectedGuildId: _,
                    optInEnabled: m,
                }),
            }),
        }),
    });
};
function aY(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, tn.D)(),
        { density: i } = (0, p.wR)();
    return n
        ? (0, a.jsx)("div", {
              className: t3.XG,
              children: (0, a.jsxs)(C.B, {
                  gap: 8,
                  children: [
                      (0, a.jsxs)(C.B, {
                          gap: 8,
                          padding: { top: 16, right: 16, bottom: 0, left: 16 },
                          fullWidth: !1,
                          children: [
                              (0, a.jsx)(E.D, {
                                  variant: "heading-md/semibold",
                                  children: W.intl.string(aF.default["1n0TGE"]),
                              }),
                              (0, a.jsx)(x.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: W.intl.string(aF.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, a.jsx)("div", { className: t3.ts }),
                      (0, a.jsxs)("div", {
                          className: t3.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, a.jsxs)("div", {
                                  className: t3.pS,
                                  children: [
                                      (0, a.jsx)(b.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, a.jsx)("div", { className: t3.Qs }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: t3.pS,
                                  children: [
                                      (0, a.jsx)(S.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, a.jsx)("div", { className: t3.iR }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: t3.pS,
                                  children: [
                                      (0, a.jsx)(I.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, a.jsx)("div", { className: t3.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, a.jsx)(az, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: i });
}
function aq(e) {
    let t = (function (e) {
            var t;
            let n,
                i,
                l =
                    ((t = e.id),
                    (n = (0, tm.A)(t)),
                    (i = (0, tg.Ay)(t)),
                    !(0, u.bG)([t_.A], () => {
                        if (null == t) return !1;
                        let e = t_.A.getGuild(t);
                        return e?.features.has(F.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || i.length > 0)),
                a = (0, ts.W)(e.id),
                s = (0, th.vz)(e.id),
                r = (0, ta.r)(e),
                o = (0, tC.jz)(e),
                d = (0, tc.d)(e.id),
                c = (0, tl.bG)([to.h], () => to.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tu.A)(e.id),
                _ = (0, td.jY)(e.id),
                m = (0, tr.fw)(e.id),
                g = [],
                f = e.features.has(F.GuildFeatures.HUB),
                A = e.features.has(F.GuildFeatures.COMMUNITY),
                p = e.features.has(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                C = (0, eV.A)(e.id);
            tp.useConfig({ location: "useGuildActionRows" }).enabled;
            let E = eB(e),
                x = (0, tf.C$)(e.id, "useGuildActionRows"),
                b = e.features.has(F.GuildFeatures.GAME_SERVERS),
                S = (0, tA.N)("useGuildActionRows"),
                [I] = (0, ei.kn)(x && S && !b ? [M.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                f && g.push(tE.n.GUILD_HUB_HEADER_OPTIONS),
                !_ && d && h && null != c && c.length > 0
                    ? g.push(tE.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && E > 0 && g.push(tE.n.GUILD_PREMIUM_PROGRESS_BAR),
                !f && d && g.push(tE.n.GUILD_HOME),
                l && g.push(tE.n.GUILD_SCHEDULED_EVENTS),
                !f && A && g.push(tE.n.CHANNELS_AND_ROLES),
                s && g.push(tE.n.GUILD_ROLE_SUBSCRIPTIONS),
                r && g.push(tE.n.GUILD_SHOP),
                o && g.push(tE.n.GUILD_GAME_SHOP),
                ((m && (A || p)) || (a && e.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    g.push(tE.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                C && g.push(tE.n.GUILD_BOOSTS),
                x && (b ? g.push(tE.n.GAME_SERVERS) : null != I && g.push(tE.n.GAME_SERVERS_EMPTY)),
                g
            );
        })(e.guild),
        n = (0, u.cf)([tt.A], () => tt.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: i } = (0, p.wR)();
    return (0, a.jsx)(az, { ...e, ...n, density: i });
}
