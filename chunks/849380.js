n.d(t, { B: () => sq, T: () => sz }), n(321073);
var i,
    l,
    s = n(627968),
    r = n(64700),
    a = n(735438),
    o = n.n(a),
    d = n(837381),
    c = n(887129),
    u = n(17928),
    h = n(661531),
    A = n(715828),
    _ = n(312138),
    g = n(475825),
    m = n(707554),
    p = n(140735),
    f = n(38021),
    E = n(331322),
    C = n(534514),
    x = n(834730),
    I = n(276293),
    b = n(983851),
    S = n(534890),
    N = n(951001),
    T = n(820284),
    v = n(775602),
    y = n(793574),
    R = n(688810),
    j = n(915089),
    L = n(5180),
    O = n(554146),
    G = n(177953),
    M = n(777666),
    D = n(533550),
    U = n(624458),
    P = n(844944),
    w = n(513461),
    k = n(663997),
    V = n(652793),
    B = n(576705),
    H = n(221950),
    F = n(652215),
    W = n(985018);
function K(e) {
    let { guild: t, selected: n } = e,
        i = (0, u.bG)([B.A], () => B.A.can(F.xBc.KICK_MEMBERS, t)),
        l = (0, u.bG)([P.A], () => P.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = i ? (l ?? 0) : 0;
    r.useEffect(() => {
        i &&
            t.features.has(F.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            U.A.fetchGuildJoinRequests({ guildId: t.id, status: w.B5.SUBMITTED, limit: k.L });
    }, [i, t]);
    let o = r.useCallback(() => {
            (0, H.aZ)(t.id);
        }, [t.id]),
        d = (0, D.q8)(t.id, O.M.MEMBERS_LAUNCH_UPSELL);
    return (0, s.jsx)("div", {
        ref: d,
        children: (0, s.jsx)(V.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(G.n, { size: "md", color: "currentColor", className: e }),
            text: W.intl.string(W.t.oclz3Z),
            selected: n,
            onClick: o,
            trailing: a > 0 ? (0, s.jsx)(M.hV, { count: a }) : null,
        }),
    });
}
var Y = n(581007),
    z = n(522435),
    q = n(285406),
    X = n(112905),
    Q = n(419534),
    J = n(395504),
    Z = n(192308),
    $ = n(990078),
    ee = n(939249),
    et = n(789645),
    en = n(687966),
    ei = n(932001),
    el = n(976860),
    es = n(746080),
    er = n(49999),
    ea = n(576709),
    eo = n(494352),
    ed = n(907305);
let ec = r.memo(function (e) {
    let { guildId: t, selected: i } = e,
        [l, a] = (0, ei.ww)([O.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === O.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            a(er.i.USER_DISMISS), (0, el.pX)(F.BVt.CHANNEL(t, es.VV.GAME_SERVERS));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, Z.openModalLazy)(async () => {
                        let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t });
                    });
            },
            [t],
        ),
        u = (0, s.jsxs)("div", {
            className: eo.c,
            children: [
                (0, s.jsx)("div", {
                    className: ed.Xs,
                    children: (0, s.jsx)($.m, {
                        text: W.intl.string(W.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(ee.D, {
                            onClick: c,
                            "aria-label": W.intl.string(W.t.fgq1gs),
                            children: (0, s.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: ed.yW,
                        children: (0, s.jsx)(M.Lp, {
                            disableColor: !0,
                            text: W.intl.string(W.t.y2b7CA),
                            className: eo.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(V.G, {
        className: ed.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(en._, { size: "md", className: e, color: "currentColor" }),
        text: W.intl.string(ea.default.vCzwM7),
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var eu = n(361158),
    eh = n(186111),
    eA = n(166978),
    e_ = n(881190);
let eg = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, Z.useHasAnyModalOpen)(),
        l = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        a = (0, eu.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ei.ww)([O.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === O.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, ei.ww)(i || l || a || !c ? [] : [O.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        _ = r.useCallback(
            (e) => {
                d(e), A(e);
            },
            [d, A],
        ),
        g = r.useCallback(() => {
            _(er.i.USER_DISMISS), (0, el.pX)(F.BVt.CHANNEL(t, es.VV.GAME_SERVERS));
        }, [t, _]),
        m = r.useRef(null),
        p = h === O.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        f = r.useCallback(() => (0, s.jsx)(eA.mn, { channelRowRef: m, guildId: t, markAsDismissed: _ }), [t, _]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(V.G, {
                ref: m,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, s.jsx)(en._, { size: "md", className: e, color: "currentColor" }),
                text: W.intl.string(ea.default.vCzwM7),
                selected: n,
                onClick: g,
                trailing: c
                    ? (0, s.jsx)(M.Lp, { disableColor: !0, text: W.intl.string(W.t.y2b7CA), className: e_.q })
                    : null,
            }),
            p && f(),
        ],
    });
});
var em = n(503698),
    ep = n.n(em),
    ef = n(695366),
    eE = n(104510),
    eC = n(544048),
    ex = n(942975),
    eI = n(379229),
    eb = n(941030),
    eS = n(828162),
    eN = n(853513),
    eT = n(738247);
function ev(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eI.cD.WARNING:
            return (0, s.jsx)(ef.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case eI.cD.UNREAD:
            return (0, s.jsx)(M.hV, { count: t.count, color: h.A.colors.BACKGROUND_MOD_STRONG.css });
        default:
            return null;
    }
}
let ey = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    eR = r.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, eb.Ay)(t),
            a = r.useCallback(() => {
                (0, ex.Zm)(t),
                    (0, eS.A)(t, y.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    l?.popout?.markAsDismissed(er.i.INDIRECT_ACTION);
            }, [t, l]),
            o = r.useRef(null),
            d = (0, Z.useModalsStore)(Z.hasAnyModalOpenSelector),
            c = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
            h = (0, eu.xr)((e) => e.fullScreenLayers.length > 0),
            A = d || c || h,
            _ = r.useCallback(() => {
                if (l?.popout == null || A) return null;
                switch (l?.popout?.type) {
                    case eI.o.LEVEL_REACHED:
                        return (0, s.jsx)(eA.HW, { guildId: t, channelRowRef: o, ...l.popout });
                    case eI.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(eA.UB, { guildId: t, channelRowRef: o, ...l.popout });
                    case eI.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(eA.lw, { guildId: t, channelRowRef: o, ...l.popout });
                    case eI.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(eA.bo, { guildId: t, channelRowRef: o, ...l.popout });
                    case eI.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(eA.Gw, { guildId: t, channelRowRef: o, ...l.popout });
                    case eI.o.EXPIRING_PERK:
                        return (0, s.jsx)(eA.Mr, { guildId: t, channelRowRef: o, ...l.popout });
                    case eI.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eI.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(eA.jz, { guildId: t, channelRowRef: o, ...l.popout });
                    case eI.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(eA.YX, { guildId: t, channelRowRef: o, ...l.popout });
                    case eI.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(eA.Ns, { guildId: t, channelRowRef: o, ...l.popout });
                    default:
                        return (0, s.jsx)("div", {});
                }
            }, [t, l?.popout, o, A]),
            [g, m] = r.useState(null);
        r.useEffect(() => {
            l?.popout == null && m(null);
        }, [l?.popout]);
        let p = r.useCallback((e) => {
            m(e);
        }, []);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(V.G, {
                    ref: o,
                    className: eT.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eE._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        l?.popout != null &&
                        (0, s.jsx)("div", {
                            className: eT.Fi,
                            children: (0, s.jsx)(eC.t, {
                                nextScene: null == g ? "animation" : "LOOP",
                                className: eT.UU,
                                sceneSegments: ey,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: p,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: ep()({ [eT.A7]: l?.showUnread === !0 }),
                        children: W.intl.string(eN.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: a,
                    showUnread: l?.showUnread === !0,
                    trailing: (0, s.jsx)(ev, { indicator: l?.indicator }),
                }),
                _(),
            ],
        });
    });
var ej = n(419354),
    eL = n(717421),
    eO = n(442433),
    eG = n(230135),
    eM = n(228366);
let eD = {};
class eU extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (eD = e);
    }
    getState() {
        return eD;
    }
    getCountForGuild(e) {
        return eD[e];
    }
}
let eP = new eU(eM.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
        let { guildId: t, premiumCount: n } = e;
        eD = { ...eD, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        eD = {};
    },
});
var ew = n(147925),
    ek = n(363487),
    eV = n(568065);
function eB(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(F.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : F.M2T[F.TVA.TIER_3],
            n = Object.values(eV.sy),
            i = Object.values(eV.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var eH = n(424460);
let eF = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: i, premiumSubscriberCount: l, className: a } = e,
        o = n >= i,
        d = Math.min((n / i) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, eL.z)(
            () => ({ width: n === l ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, l],
        );
    return (
        r.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, s.jsxs)("div", {
            ref: t,
            className: eH.hQ,
            children: [
                (0, s.jsx)("div", { className: ep()(eH.L$, a) }),
                (0, s.jsx)(ej.animated.div, { className: ep()(eH.qB, { [eH.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: eH.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: eH.Ui,
                            children: [
                                (0, s.jsx)(x.E, {
                                    className: eH.Qq,
                                    variant: "text-xs/semibold",
                                    children: W.intl.string(eN.default.NI6Ihe),
                                }),
                                l >= i &&
                                    (0, s.jsx)(x.E, {
                                        className: eH.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eH.Ui,
                            children: [
                                (0, s.jsx)(x.E, {
                                    className: ep()(eH.Qq, eH.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? W.intl.formatToPlainString(eN.default["Ehpq+7"], { appliedBoostCount: n })
                                        : W.intl.formatToPlainString(eN.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: i,
                                          }),
                                }),
                                (0, s.jsx)(ew.A, {
                                    width: 12,
                                    height: 12,
                                    direction: ew.A.Directions.RIGHT,
                                    className: ep()(eH.Qq, eH.ue),
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
        a = (0, ek.A)(t.id),
        o = r.useCallback(() => {
            (0, eS.A)(t.id, y.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([eP], () => eP.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, eG.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, eO.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
        [a, t],
    );
    return (0, s.jsx)(ee.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: ep()(eH.kL, { [eH.aF]: i }),
        onContextMenu: c,
        children: (0, s.jsx)(eF, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function eK(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(eW, { guild: t, withMargin: n });
}
eF.displayName = "GuildPowerupsProgressBarUI";
var eY = n(455234),
    ez = n(181079),
    eq = n(734057),
    eX = n(607567),
    eQ = n(403362),
    eJ = n(996439),
    eZ = n(935208),
    e$ = n(63995),
    e0 = n(69407);
function e1(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, eX.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var e2 = n(787541),
    e6 = n(79858),
    e9 = n(591346),
    e3 = n(769022),
    e7 = n(95701),
    e4 = n(72314),
    e5 = n(808728),
    e8 = n(967198),
    te = n(32603),
    tt = n(960755),
    tn = n(866842),
    ti = n(633965),
    tl = n(702841),
    ts = n(41200),
    tr = n(496767),
    ta = n(134413),
    to = n(701785),
    td = n(101611),
    tc = n(473529),
    tu = n(978165),
    th = n(960253),
    tA = n(71393),
    t_ = n(770666),
    tg = n(508654),
    tm = n(488803),
    tp = n(969117);
let tf = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tE = n(871123),
    tC = n(281405),
    tx = n(3026),
    tI = n(821609),
    tb = n(187322),
    tS = n(847374),
    tN = n(499373),
    tT = n(285796),
    tv = n(914430),
    ty = n(913247),
    tR = n(639627),
    tj = n(686956),
    tL = n(999903),
    tO = n(544169),
    tG = n(422258),
    tM = n(770376),
    tD = n(924985),
    tU = n(769765);
n(667532);
var tP = n(111613);
function tw(e, t) {
    return null != e && null != t && (e === t || ((0, e7.tr)(e) && (0, e7.tr)(t)) || ((0, e7.ay)(e) && (0, e7.ay)(t)));
}
function tk(e, t, n, i) {
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
        if (tw(e.channel.type, n)) return e;
    }
    return null;
}
function tV(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let i = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: i },
                } = t;
                return null != e && (n || tw(e.type, i));
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
function tH(e, t, n, i, l) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = F.rbe;
    if (e.type === s)
        return i === t || (i < t && e.type === n.type)
            ? tB(n)
            : i > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: i } = F.rbe,
                        l = n[(tV(t, n, !0) ?? 0) + 1],
                        s = tk(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == l || l.channel.type === i
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, l)
              : null;
    if (tw(e.type, n.type)) return tB(n);
    if (i < t) {
        let t, i;
        if (n.type === s) {
            let t = l[(tV(n, l, !0) ?? 0) - 1],
                i = tk(1, n.id, e.type, l);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != i) {
                if (tw(t.channel.type, e.type) || (e.isGuildVocal() && (0, e7.tr)(t.channel.type)))
                    return { referenceId: i.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: i.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = l[(tV(n, l, !0) ?? 0) - 1]),
            (i = tk(1, n.id, e.type, l)),
            null != t || e.isGuildVocal()
                ? (0, e7.tr)(e.type) && null != i && ((0, e7.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: i.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != i ? i.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = l[(tV(n, l, !0) ?? 0) + 1],
            i = tk(-1, n.id, e.type, l);
        if (null != i) {
            if (null == t) return { referenceId: i.channel.id, parentId: n.id };
            if (tw(t.channel.type, e.type) || ((0, e7.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: i.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: i.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = l[(tV(n, l, !0) ?? 0) + 1],
        a = tk(-1, n.id, e.type, l);
    if (null == a) return null;
    if (e.isGuildVocal()) {
        if (null == r || r.channel.isCategory()) return { referenceId: a.channel.id, parentId: n.parent_id };
        if (r.channel.isGuildVocal()) return { referenceId: a.channel.id, parentId: r.channel.parent_id };
    }
    return e.isCategory() && (null == r || r.channel.isCategory())
        ? { referenceId: a.channel.id, parentId: null }
        : null;
}
var tF = n(488926);
let tW = "DRAGGABLE_GUILD_CHANNEL";
function tK(e, t) {
    if (null == e || null == t) return null;
    if (!(0, L.ai)(e)) return eq.A.getChannel(t);
    let n = e5.Ay.getChannels(e),
        i =
            n[e5.I6].find((e) => e.channel.id === t) ??
            n[e5.vM].find((e) => e.channel.id === t) ??
            n[F.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return i?.channel;
}
function tY(e) {
    return (0, ty.T)(
        tW,
        {
            drop(e, t) {
                let n,
                    i = e8.A.getGuildId(),
                    l = t.getItem(),
                    r = tH(tK(i, l.id), l.position, e.channel, e.position, l.channelList);
                if (null == r) return;
                let a = tK(i, l.id);
                if (null == a) return;
                let o = tU.A.getCategories(i),
                    d = tA.A.getGuild(i);
                if (null == d) return;
                let c = (function (e, t, n, i) {
                    let l,
                        s,
                        r = [],
                        a = [],
                        o = i._categories,
                        d = (t) => {
                            var n, i;
                            let a;
                            return (
                                (a =
                                    null == l ||
                                    null == s ||
                                    ((n = l),
                                    (i = s),
                                    +(null == n || null == i || null == t[n] || t[n].channel !== e || null == t[i]))
                                        ? [...t]
                                        : tP.Ay.moveItemFromTo(t, l, s)),
                                (r = r.concat(
                                    tP.Ay.calculatePositionDeltas({
                                        oldOrdering: t,
                                        newOrdering: a,
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
                                a
                            );
                        };
                    if (e.isCategory()) {
                        let n = [...o].slice(1);
                        (l = tV(e, n)), (s = tV(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, e7.tr)(e.type) || e.isCategory()) {
                        let n = (0, tL.A)(a.length > 0 ? a : o, i, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, e7.tr)(t);
                        });
                        (l = tV(e, n)), (s = tV(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, tL.A)(a.length > 0 ? a : o, i, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (l = tV(e, n)), (s = tV(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, tK(i, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, L.ai)(i)) return void (0, tG.zN)(c);
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
                        a.parent_id !== r.parentId &&
                            c.find((e) => {
                                if (e.id !== a.id) return !1;
                                let t = eq.A.getChannel(e.parent_id);
                                if (!(null != t && B.A.can(F.xBc.MANAGE_ROLES, a) && B.A.can(F.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let i = tF.r(a, t),
                                    l = tF.r(a, eq.A.getChannel(a.parent_id));
                                return ((null != a.parent_id || i) && (!l || i)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = eq.A.getChannel(n.parent_id);
                        null != e &&
                            (0, Z.openModal)((t) =>
                                (0, s.jsx)(tO.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), tj.A.batchChannelUpdate(i, c));
                                    },
                                    onCancel: () => {
                                        null != n && tj.A.batchChannelUpdate(i, c);
                                    },
                                }),
                            );
                    } else tj.A.batchChannelUpdate(i, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = eq.A.getChannel(n.id);
                if (null == i) return !1;
                let l = tH(eq.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if ((0, L.ai)(e8.A.getGuildId())) return !0;
                let s = tA.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = eq.A.getChannel(l.parentId),
                    a = eq.A.getChannel(i.parent_id),
                    o = B.A.can(F.xBc.MANAGE_CHANNELS, s),
                    d = null != a ? B.A.can(F.xBc.MANAGE_CHANNELS, a) : o,
                    c = null != r ? B.A.can(F.xBc.MANAGE_CHANNELS, r) : o;
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
        (0, tR.I)(
            tW,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, L.ai)(e8.A.getGuildId())) return !0;
                    let i = tA.A.getGuild(t.getGuildId());
                    if (null == i) return !1;
                    if ((0, J.WW)(i.id) && B.A.can(F.xBc.MANAGE_CHANNELS, i))
                        return (
                            (0, tM.A)() &&
                                (0, Z.openModalLazy)(async () => {
                                    let { default: e } = await n.e("2467").then(n.bind(n, 354643));
                                    return (t) => (0, s.jsx)(e, { ...t });
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
                            position: s,
                        } = e,
                        r = e8.A.getGuildId(),
                        a = tU.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: l,
                        channelList: (0, tL.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === F.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, L.ai)(r) ||
                                      (B.A.can(F.xBc.MANAGE_CHANNELS, t) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                                : !tD.A.isCollapsed(t.parent_id);
                        }),
                        guildId: i,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var tz = n(47167),
    tq = n(485947),
    tX = n(543465),
    tQ = n(551851),
    tJ = n(546980);
function tZ(e) {
    e.stopPropagation();
}
let t$ = tY(
        r.memo(function (e) {
            let t,
                {
                    channel: i,
                    connectChannelDragSource: l,
                    connectChannelDropTarget: a,
                    disableManageChannels: o,
                    position: c,
                    sortingPosition: h,
                    hideIcon: A,
                    children: _,
                } = e,
                g = (0, u.bG)([tX.Ay], () => tX.Ay.isChannelMuted(i.getGuildId(), i.id)),
                m = (0, u.bG)([tD.A], () => tD.A.isCollapsed(i.id)),
                p = (0, u.bG)([B.A], () => B.A.can(F.xBc.MANAGE_CHANNELS, i)),
                f = (0, tz.Ay)(i);
            t = null != h ? (c > h ? tJ.mU : tJ.TR) : tJ.fx;
            let E = r.useCallback(() => {
                    m ? (0, tv.fh)(i.id) : (0, tv.Gv)(i.id);
                }, [i.id, m]),
                C = r.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = tA.A.getGuild(i.getGuildId());
                            null != t &&
                                (0, eO.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("18733"), n.e("30997")]).then(
                                        n.bind(n, 71132),
                                    );
                                    return (n) => (0, s.jsx)(e, { ...n, channel: i, guild: t });
                                });
                        }
                    },
                    [i],
                ),
                x = r.useCallback(() => {
                    let e = i.type === F.rbe.GUILD_CATEGORY ? null : i.type,
                        t = i.getGuildId();
                    null != t &&
                        (0, Z.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([n.e("9431"), n.e("40988")]).then(n.bind(n, 113194));
                            return (n) =>
                                (0, s.jsx)(l, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== i.id ? i.id : null,
                                });
                        });
                }, [i]),
                { role: I, tabIndex: b, ...S } = (0, d.rm)(i.id),
                N = r.useRef(null),
                T = r.useRef(null),
                v = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": f,
                    children: [
                        (0, s.jsx)(tb.vN, {
                            focusTarget: N,
                            ringTarget: T,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: T,
                                className: ep()(tJ.Ki, tJ.iE, { [tJ.yZ]: m, [tJ.SU]: g, [tJ.vk]: !0 }),
                                onContextMenu: C,
                                children: [
                                    (0, s.jsxs)(ee.D, {
                                        innerRef: N,
                                        className: tJ.rb,
                                        tabIndex: b,
                                        ...S,
                                        onClick: E,
                                        "aria-label": W.intl.formatToPlainString(W.t.y5l3J2, { categoryName: f }),
                                        "aria-expanded": !m,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(tq.A, {
                                                className: tJ.UU,
                                                children: (0, s.jsx)(tx.A, { children: f }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(tS.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: tJ.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: tZ,
                                        className: tJ.Y_,
                                        children:
                                            p && !o
                                                ? (0, s.jsx)($.m, {
                                                      text: W.intl.string(W.t["fUYU+j"]),
                                                      children: (0, s.jsx)(ee.D, {
                                                          className: ep()(tJ.c9, tJ.ih),
                                                          onClick: x,
                                                          tabIndex: b,
                                                          role: "button",
                                                          "aria-label": W.intl.string(W.t["fUYU+j"]),
                                                          children: (0, s.jsx)(tN.T, {
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
                        _,
                    ],
                });
            return null != a && null != l ? a(l(v)) : v;
        }),
    ),
    t0 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, s.jsx)("li", {
            className: ep()(i, tJ.fx),
            children: (0, s.jsxs)("div", {
                className: ep()(tJ.Ki, tJ._V),
                children: [
                    (0, s.jsx)("div", {
                        className: tJ.rb,
                        children: (0, s.jsx)(tq.A, { className: tJ.UU, children: (0, s.jsx)(tx.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)($.m, {
                              asContainer: !0,
                              text: W.intl.string(W.t["5qNmsU"]),
                              children: (0, s.jsx)(ee.D, {
                                  className: tJ.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tT.a, { size: "md", color: "currentColor", className: tJ.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t1 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([tQ.A], () => tQ.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = r.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), eM.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), eM.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: tJ.oA,
            children: (0, s.jsx)(tI.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: b.H,
                text: n ? W.intl.string(W.t["/eB9Bg"]) : W.intl.string(W.t.Q2gPWl),
            }),
        });
    }),
    t2 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, u.bG)([tQ.A], () => tQ.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === F.rbe.GUILD_CATEGORY
            ? i
                ? (0, s.jsx)("li", {
                      className: tJ.fx,
                      children: (0, s.jsx)("div", {
                          className: ep()(tJ.Ki, tJ._V),
                          children: (0, s.jsx)(tq.A, {
                              className: tJ.UU,
                              children: (0, s.jsx)(tx.A, { children: W.intl.string(W.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    t6 = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, tz.Ay)(t);
        return (0, s.jsx)("li", {
            className: tJ.fx,
            children: (0, s.jsx)("div", {
                className: ep()(tJ.Ki, tJ._V),
                children: (0, s.jsx)(tq.A, { className: tJ.UU, children: (0, s.jsx)(tx.A, { children: n }) }),
            }),
        });
    });
var t9 = n(728321),
    t3 = n(244083);
let t7 = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var t4 = n(121880);
let t5 = r.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: i,
            guildChannelsVersion: l,
            selectedChannelId: a,
            disableManageChannels: o,
        } = e,
        d = r.useCallback(() => {
            let e = i.getCategoryFromSection(i.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                l = e.getShownChannelAndThreadIds();
            null != a && l.includes(a) && (t = (0, Q.xb)(i)), (0, Q.DD)(n.id, l, t);
        }, [n.id, a, i, l]),
        { density: c } = (0, f.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case te.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case te.bK:
            if (n.features.has(F.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case te.HP:
            return (0, s.jsx)(t0, { name: W.intl.string(W.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, s.jsx)(t0, { name: W.intl.string(W.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: t4.ts }), (0, s.jsx)(t2, { category: e, channel: n })],
            });
        }
        case te.TF: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t$, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(t9.A, {
                    inlineSpecs: t7,
                    arrowAlignment: t3.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t$, { channel: e.record, position: e.position, disableManageChannels: o });
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
                        (1 === t.length && t[0] === tC.n.GUILD_PREMIUM_PROGRESS_BAR) ||
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
let ns = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, s.jsx)(t1, { category: i });
    }),
    nr = r.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: i,
                voiceStates: l,
                guildId: a,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => nl(n, c, t), [n, c, t, i]),
            _ = r.useMemo(() => (t === te.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
            g = (0, J.jN)(a),
            { enableWaveformIcon: m } = (0, ne.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)([tX.Ay], () => {
                if (null == _ || !_.isCollapsed || !A) return [];
                let e = _.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = tX.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!g || e) && t.push(n);
                }
                return t;
            }, [_, A, a, g]),
            f = r.useMemo(
                () => (0, nn.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [p, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(ns, { guildChannels: n, guildChannelsVersion: i });
        let E = h ? (0, s.jsx)("div", { className: t4.ts }) : null;
        return A && 0 !== f.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: t4.qz,
                          children: (0, s.jsx)(t8.Ay, {
                              renderIcon: !0,
                              users: f,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: m
                                  ? (e) => (0, s.jsx)(nt.A, { color: "currentColor", className: ep()(e, ed.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var na = n(625903),
    no = n(283973),
    nd = n(933832),
    nc = n(435183),
    nu = n(698441),
    nh = n(855687),
    nA = n(816662),
    n_ = n(446600),
    ng = n(616356);
function nm(e, t, n) {
    return null != t && !!t && !tw(n, e.type);
}
function np(e, t) {
    return null == t ? ed.fx : e > t ? ed.mU : ed.TR;
}
function nf(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [B.A, e8.A],
        () =>
            n ||
            (0, L.ai)(e8.A.getGuildId()) ||
            (!B.A.can(F.xBc.MANAGE_CHANNELS, t) &&
                !B.A.can(F.xBc.MANAGE_ROLES, t) &&
                !B.A.can(F.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, e7.tr)(t.type) && !B.A.can(F.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !B.A.can(F.xBc.CONNECT, t)) ||
            !e7.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)($.m, {
              asContainer: !0,
              text: W.intl.string(W.t["3gUsJb"]),
              children: (0, s.jsx)(ee.D, {
                  className: ep()(ed.Xs, l ? ed.Tf : void 0, r ? ed.bw : ed.UI),
                  onClick: function () {
                      nc.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": W.intl.string(W.t["3gUsJb"]),
                  children: (0, s.jsx)(na.Z, { size: "xs", color: "currentColor", className: ed.gE }),
              }),
          });
}
function nE(e) {
    let {
            channel: t,
            isDefaultChannel: i = !1,
            locked: l,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([tA.A], () => tA.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([n_.A], () => n_.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nu.Ay], () => nu.Ay.getActiveEventByChannel(t.id), [t.id]),
        _ = (0, u.bG)([B.A], () => (0, nh.K)(B.A, c, t, h)),
        g = (0, u.bG)([], () =>
            t?.type === F.rbe.GUILD_VOICE ? W.intl.string(W.t["EE+P0H"]) : W.intl.string(W.t["0jeAXt"]),
        ),
        m = r.useRef(null);
    if (l || !_ || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(no.R, { size: "xs", className: ed.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (p = (0, s.jsx)(t9.A, {
                childRef: m,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: m, children: p }),
            })),
        (0, s.jsx)($.m, {
            asContainer: !0,
            text: g,
            children: (0, s.jsx)(ee.D, {
                className: ep()(ed.Xs, o ? ed.Tf : void 0, d ? ed.bw : ed.UI),
                onClick: function () {
                    if (null != c) {
                        let e = ng.A.getAllActiveStreams().filter(
                            (e) => e.state !== F.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, Z.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(
                                n.bind(n, 1310),
                            );
                            return (n) =>
                                (0, s.jsx)(i, {
                                    ...n,
                                    guild: c,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: F.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: A,
                                });
                        });
                    }
                },
                tabIndex: a,
                "aria-label": g,
                children: p,
            }),
        })
    );
}
function nC(e) {
    let { channel: t } = e;
    return (0, s.jsx)($.m, {
        asContainer: !0,
        text: W.intl.string(W.t["ROh4T+"]),
        children: (0, s.jsx)(ee.D, {
            className: ed.Xs,
            onClick: () => {
                (0, nA.Ol)(t.guild_id, t.id);
            },
            "aria-label": W.intl.string(W.t["ROh4T+"]),
            children: (0, s.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
function nx(e) {
    let { channel: t } = e;
    return (0, s.jsx)($.m, {
        asContainer: !0,
        text: W.intl.string(W.t["N2c/Un"]),
        children: (0, s.jsx)(ee.D, {
            className: ed.Xs,
            onClick: () => {
                (0, nA.jA)(t.guild_id, t.id, !0, { section: F.JJy.CHANNEL_LIST });
            },
            "aria-label": W.intl.string(W.t["N2c/Un"]),
            children: (0, s.jsx)(nd.A, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
class nI extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nf, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nE, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nC, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nx, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return np(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nm(e, t, n);
    }
}
var nb = n(166444),
    nS = n(790782);
let nN = tY(function (e) {
    let {
            guild: t,
            selectedChannelId: i,
            position: l,
            disableManageChannels: a,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: h,
            connectChannelDropTarget: A,
            tabIndex: _,
        } = e,
        g = (0, u.bG)([eq.A, e5.Ay], () => {
            let e = e5.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : eq.A.getChannel(e[0]);
        }),
        m = (0, u.bG)([eq.A], () => eq.A.getChannel(g?.parent_id)),
        p = i === g?.id,
        f = (0, tz.Ay)(g),
        E = (0, u.bG)([B.A], () =>
            null != m ? B.A.can(F.xBc.MANAGE_CHANNELS, m) : null != t && B.A.can(F.xBc.MANAGE_CHANNELS, t),
        ),
        C = r.useCallback(
            (e) => {
                null != g &&
                    (0, eO.L3)(e, async () => {
                        let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                        return (t) => (0, s.jsx)(e, { ...t, channel: g });
                    });
            },
            [g],
        );
    if (null == g) return null;
    let x = np(l, c),
        I = nm(g, o, d),
        b = (0, s.jsx)("div", {
            className: ep()(x, { [ed.r9]: I, [ed.wH]: p }),
            "data-dnd-name": f,
            children: (0, s.jsxs)(nb.Ay, {
                className: ed.Ki,
                channel: g,
                guild: t,
                selected: p,
                onContextMenu: C,
                forceInteractable: !0,
                resolvedUnreadSetting: nS.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nE, { channel: g, tabIndex: _ }),
                    (0, s.jsx)(nf, { channel: g, disableManageChannels: a, tabIndex: _ }),
                ],
            }),
        });
    return E && (b = A(h(b))), b;
});
var nT = n(34188),
    nv = n(733391),
    ny = n(832163),
    nR = n(44724),
    nj = n(84764),
    nL = n(770178),
    nO = n(206939);
let nG = Math.ceil(Math.sqrt(115200)),
    nM = (nG - 240) / 2,
    nD = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [i, l] = r.useState(-1),
            a = r.useCallback((e) => {
                l(e.contentRect.width);
            }, []),
            o = (0, nL.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, eL.z)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            u = r.useCallback(
                (e, t) => {
                    c({ shineSpring: 1, delay: t });
                },
                [c],
            ),
            h = r.useCallback(() => {
                c({ shineSpring: 0, immediate: !0 });
            }, [c]),
            A = r.useMemo(() => {
                let e = (0, s.jsx)(ej.animated.div, {
                    className: nO.q2,
                    style: {
                        transform: d.to(
                            (e) => `translateX(calc(${e * i}px + ${e * nG}px)) translateY(-50%) rotate(45deg)`,
                        ),
                    },
                });
                return n(nO.VU, nO.Qq, nO.Kk, e);
            }, [n, i, d]);
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nO.iE,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nM}px` },
                children: A,
            })
        );
    });
var nU = n(371794),
    nP = n(998218),
    nw = n(645591);
let nk = r.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        o = (0, Z.useHasAnyModalOpen)(),
        d = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        c = (0, eu.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nv.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([ny.A], () => ny.A.getAnnouncement(t.id)),
        _ = A?.state === "success" ? A.announcement : void 0,
        [g, m] = (0, ei.x_)(O.M.GAME_SHOP_NEW_BADGE, t.id, _?.id ?? "", void 0, !0),
        p = g === O.M.GAME_SHOP_NEW_BADGE && null != _,
        [f, E] = (0, ei.x_)(O.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, _?.id ?? ""),
        C = f === O.M.GAME_SHOP_NEW_DROP_POPOVER && null != _;
    r.useEffect(() => {
        i && (p && m(er.i.INDIRECT_ACTION), C && E(er.i.INDIRECT_ACTION));
    }, [m, E, i, p, C]);
    let I = r.useCallback(() => {
            m(er.i.TAKE_ACTION), E(er.i.TAKE_ACTION);
            let e = ny.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, el.pX)(F.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, m, E]),
        b = r.useCallback(() => {
            (0, nR.X)({ guildId: t.id, forceFetch: C });
        }, [t.id, C]),
        S = r.useCallback(() => {
            E(er.i.USER_DISMISS);
        }, [E]),
        N = r.useCallback(
            (e) => {
                null != t &&
                    (0, eO.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 819233));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        T = r.useCallback(() => {
            l.current?.onMouseEnter(null, 500);
        }, [l]),
        v = r.useCallback(
            (e, n, l, r) =>
                (0, s.jsx)(V.G, {
                    innerClassName: e,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nT.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: ep()(e, l),
                        }),
                    text: (0, s.jsx)(x.E, {
                        variant: "text-md/medium",
                        className: ep()(nw.UU, n),
                        children: W.intl.string(W.t.vyaWs7),
                    }),
                    selected: i,
                    onMouseDown: b,
                    onClick: I,
                    onContextMenu: N,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            p &&
                                (0, s.jsx)(M.Lp, {
                                    text: W.intl.string(W.t.y2b7CA),
                                    color: h.A.colors.BACKGROUND_BRAND.css,
                                }),
                            r,
                        ],
                    }),
                }),
            [t.id, i, b, I, N, p],
        ),
        y = r.useMemo(() => {
            if (null == _) return;
            let e = null != _.assetId ? nP.A.toURLSafe((0, nU.YE)(_.applicationId, _.assetId, 128, "webp")) : void 0,
                t =
                    null != _.backgroundImageAssetId
                        ? nP.A.toURLSafe((0, nU.YE)(_.applicationId, _.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [_]),
        R = r.useCallback(
            () =>
                C
                    ? (0, s.jsx)(nj.A, {
                          onActionClick: I,
                          onActionMouseDown: b,
                          onRender: T,
                          onRequestClose: S,
                          targetElementRef: a,
                          skuImageDetails: y,
                          title: W.intl.string(W.t["7PvvS9"]),
                          body: W.intl.formatToPlainString(W.t["9J4h1a"], { applicationName: _.applicationName }),
                      })
                    : null,
            [C, _, I, b, T, S, y],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nD, { ref: l, children: v }), !o && !d && !c && R()] });
});
var nV = n(740426),
    nB = n(826673),
    nH = n(591552),
    nF = n(202776),
    nW = n(454058),
    nK = n(222823);
function nY(e) {
    let { guild: t, selected: i } = e,
        l = (0, nF.A)(t),
        a = (0, nB.JZ)(O.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tl.yK)([nW.A], () =>
            Array.from(nW.A.getNewChannelIds(t.id)).filter((e) => nW.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tl.bG)([nK.Ay], () => nK.Ay.hasUnread(t.id, nS.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > te.rR,
        u = (0, tl.bG)([nH.A, nK.Ay], () => {
            let e = nH.A.lastFetchedAt(t.id),
                n = nK.Ay.lastMessageId(t.id, nS.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = eZ.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        A = r.useCallback(() => {
            (0, el.pX)(F.BVt.CHANNEL(t.id, l ? es.VV.CUSTOMIZE_COMMUNITY : es.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        _ = r.useCallback(
            (e) => {
                (0, eO.L3)(e, async () => {
                    let { default: e } = await n.e("30412").then(n.bind(n, 807431));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        g = null;
    return (
        (a && !d && !c) ||
            i ||
            u ||
            (g = (0, s.jsx)(M.Lp, { color: h.A.colors.BADGE_BACKGROUND_BRAND.css, text: W.intl.string(W.t.y2b7CA) })),
        (0, s.jsx)(V.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(nV.k, { size: "md", color: "currentColor", className: e }),
            text: l ? W.intl.string(W.t.h9mGOP) : W.intl.string(W.t.et6wav),
            selected: i,
            onClick: A,
            onContextMenu: _,
            trailing: g,
        })
    );
}
var nz = n(855473);
function nq(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(V.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(nz.Z, { size: "md", color: "currentColor", className: e }),
        text: W.intl.string(W.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, el.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_HOME));
        },
    });
}
var nX = n(5373),
    nQ = n(65995),
    nJ = n(33011);
function nZ(e, t) {
    return (0, s.jsx)(x.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let n$ = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([to.h], () => to.h.getNewMemberActions(t.id), [t.id]),
        i = (0, u.bG)([nQ.A], () => nQ.A.getCompletedActions(t.id)),
        l = r.useMemo(() => {
            if (null == n || null == i) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != i[t.channelId] && e++;
                }),
                e
            );
        }, [i, n]),
        a = null == n ? 0 : n.length,
        o = (0, d.rm)(`progress-bar-${t.id}`);
    return (0, s.jsxs)("li", {
        children: [
            (0, s.jsxs)(ee.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: nJ.G9,
                onClick: function () {
                    (0, el.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: nJ.A1,
                        children: [
                            (0, s.jsx)(C.D, { variant: "heading-sm/bold", children: W.intl.string(W.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: nJ.Ib,
                                children: [
                                    (0, s.jsx)(x.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: nJ.Cv,
                                        children: W.intl.format(W.t.eqZ1lW, {
                                            numberHook: nZ,
                                            total: a.toString(),
                                            completed: l.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(ew.A, {
                                        className: nJ.UE,
                                        width: 16,
                                        height: 16,
                                        direction: ew.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(nX.i, {
                        className: nJ.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (l / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: nJ.yF }),
        ],
    });
});
var n0 = n(514179);
function n1(e) {
    let { guild: t, selected: i } = e;
    return (0, s.jsx)(V.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n0.A, { className: e }),
        text: W.intl.string(W.t["KzCF/6"]),
        selected: i,
        onClick: () => {
            (0, el.pX)(F.BVt.CHANNEL(t.id, es.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: (e) => {
            null != t &&
                (0, eO.L3)(e, async () => {
                    let { default: e } = await n.e("71911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var n2 = n(506774),
    n6 = n(58149),
    n9 = n(289397),
    n3 = n(486418),
    n7 = n(575926),
    n4 = n(440293),
    n5 = n(954571),
    n8 = n(634654),
    ie = n(391277);
function it(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        l = (0, n4.w)(t),
        r = (0, tl.bG)([tA.A], () => tA.A.getGuild(t)),
        a = r?.features.has(F.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === n2.w.get(n8.bJ, "false"),
        d = (0, tl.bG)([v.A], () => v.A.useReducedMotion);
    return (0, s.jsx)(V.G, {
        id: `shop-${t}`,
        className: ep()(ie.A2, { [ie.wH]: n, [ie.ST]: o }),
        innerClassName: ie.LE,
        renderIcon: (e) => (0, s.jsx)(n7.h, { width: 20, height: 20, className: ep()([e, ie.sV]) }),
        text: W.intl.string(W.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, s.jsxs)("div", {
            className: ie.ai,
            children: [
                d
                    ? (0, s.jsx)(M.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: W.intl.string(W.t.y2b7CA),
                          className: ie.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, n9.n)("server_products/storefront/money.gif"),
                          className: ie.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(ee.D, {
                        className: ie.b,
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, nB.Dr)(O.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                n5.default.track(F.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, n6.H$)(t),
                                    action_taken: n8.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && a) || (0, el.bG)(F.BVt.CHANNEL(t, e5.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": W.intl.string(W.t.cpT0Cq),
                        children: (0, s.jsx)(tT.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function ii(e) {
    let { guild: t, selected: i } = e,
        l = (0, n3.P)(t),
        r = () => {
            n2.w.set(n8.bJ, "true"), (0, el.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_SHOP));
        };
    return l
        ? (0, s.jsx)(it, { guildId: t.id, selected: i, handleClick: r })
        : (0, s.jsx)(V.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(n7.h, { width: 20, height: 20, className: e }),
              text: W.intl.string(W.t.al5EXL),
              selected: i,
              onClick: r,
              onContextMenu: (e) => {
                  null != t &&
                      (0, eO.L3)(e, async () => {
                          let { default: e } = await n.e("74946").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var il = n(308528),
    is = n(152007),
    ir = n(747926),
    ia = n(977997);
function io(e) {
    return null != e && e > 0;
}
var id = n(405018),
    ic = n(428689),
    iu = n(852878);
function ih(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, s.jsxs)("div", {
        className: iu.iE,
        children: [
            (0, s.jsxs)("span", {
                className: ep()(iu.VV, { [iu.Ki]: i, [iu.$G]: n >= 100 }),
                children: [
                    i ? (0, s.jsx)(ic.n, { size: "md", color: "currentColor", className: iu.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)("span", {
                className: ep()(iu.X5, { [iu.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function iA(e) {
    let { channel: t, video: n, userCount: i } = e,
        { limit: l } = (0, id.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && l > 0 && ((a = r < 0 || l < r), (r = r > 0 ? Math.min(r, l) : l)),
        (0, s.jsx)(ih, { users: i, total: r, videoLimit: a })
    );
}
var i_ = n(701665);
function ig(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: i_.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(M.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var im = n(183300),
    ip = n(37411),
    iE = n(998510);
function iC(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: ep()(iE.GI, { [iE.a7]: n }, { [iE.BJ]: i }), style: t },
        { density: r } = (0, f.wR)();
    switch (r) {
        case "cozy":
            return (0, s.jsxs)("svg", {
                ...l,
                width: "10",
                height: "20",
                viewBox: "0 0 10 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        case "compact":
            return (0, s.jsxs)("svg", {
                ...l,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        default:
            return (0, s.jsxs)("svg", {
                ...l,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
    }
}
let ix = r.memo(function (e) {
        let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([eX.Ay], () => eX.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([ia.A], () => ia.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: _,
                isMentionLowImportance: g,
            } = (0, u.cf)([nK.Ay], () => ({
                unread: nK.Ay.hasUnread(t.id),
                mentionCount: nK.Ay.getMentionCount(t.id),
                isMentionLowImportance: nK.Ay.getIsMentionLowImportance(t.id),
            })),
            m = (0, u.bG)([is.A], () => is.A.isMuted(t.id)),
            p = r.useCallback(
                (e) => {
                    (0, ir.JA)(t, !e.shiftKey, ip.H9.CHANNEL_LIST);
                },
                [t],
            ),
            f = r.useCallback(() => {
                il.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    let i = eq.A.getChannel(t.id);
                    null != i &&
                        (0, eO.L3)(e, async () => {
                            let { default: e } = await n.e("6996").then(n.bind(n, 612826));
                            return (t) => (0, s.jsx)(e, { ...t, channel: i });
                        });
                },
                [t.id],
            ),
            C = null == c ? 0 : c.length,
            { role: x, ...I } = (0, d.rm)(t.id),
            b = r.useRef(null),
            S =
                _ > 0
                    ? W.intl.formatToPlainString(W.t["ZL7+I6"], { channelName: t.name, mentionCount: _ })
                    : A
                      ? W.intl.formatToPlainString(W.t.YlVvmc, { channelName: t.name })
                      : W.intl.formatToPlainString(W.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: x,
            className: ep()(ed.fx, { [ed.wH]: i }),
            children: [
                (0, s.jsx)(iC, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(iC, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tb.vN, {
                    focusTarget: b,
                    ringTarget: b,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: ep()(ed.Ki, nw.iE, nw.ZS, {
                            [nw.J1]: i,
                            [nw.F4]: !i && m,
                            [nw.V2]: !m && !i && A,
                            [nw.lY]: o,
                        }),
                        onMouseDown: f,
                        onContextMenu: E,
                        children: [
                            !A || m || i ? null : (0, s.jsx)("div", { className: ep()(nw.gy, nw.WS) }),
                            (0, s.jsx)(ee.D, {
                                ...I,
                                innerRef: b,
                                className: nw.nf,
                                onClick: p,
                                "aria-label": S,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: ep()(nw.Y5, nw.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tx.A, { className: nw.UU, "aria-hidden": !0, children: t.name }),
                                        (0, s.jsxs)("div", {
                                            className: nw.Y_,
                                            children: [
                                                C > 0 && t.userLimit > 0
                                                    ? (0, s.jsx)(iA, { userCount: C, video: h, channel: t })
                                                    : null,
                                                io(_)
                                                    ? (0, s.jsx)(ig, { mentionsCount: _, isMentionLowImportance: g })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(im.A, {
                    channel: t,
                    collapsed: !l && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    iI = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: r } = e,
            a = (0, tz.Ay)(t),
            { density: o } = (0, f.wR)(),
            d = (0, u.yK)([eq.A], () => l.map((e) => eq.A.getChannel(e)).filter(eQ.Vq), [l]),
            c = (0, u.bG)([eX.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = eX.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: iE.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": W.intl.formatToPlainString(W.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: ep()(iE.eh, { [iE.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            ix,
                            {
                                thread: e,
                                isSelectedChannel: n?.id === e.id,
                                isSelectedVoice: i === e.id,
                                isLast: t === d.length - 1,
                                withGuildIcon: r,
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        });
    });
var ib = n(922016),
    iS = n(367513),
    iN = n(296216),
    iT = n(963027),
    iv = n(202384),
    iy = n(51758),
    iR = n(721592),
    ij = n(139033),
    iL = n(305866),
    iO = n(123292),
    iG = n(830215),
    iM = n(315982),
    iD = n(557722),
    iU = n(834942),
    iP = n(287809),
    iw = n(53516),
    ik = n(725673),
    iV = n(824078),
    iB = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let iH = (e) => {
    let { type: t, guildId: i, closePopout: l } = e,
        r = (0, j.GV)(),
        {
            notClaimed: a,
            notEmailVerified: o,
            notPhoneVerified: d,
            newAccount: c,
            newMember: h,
        } = (0, u.bG)([iU.A], () => iU.A.getCheck(i), [i]),
        A = 0 === t ? W.intl.string(W.t["6zY8BI"]) : null,
        _ = null,
        g = null;
    return (0 === t &&
        (a
            ? ((_ = W.intl.string(W.t.IRxUlG)), (g = W.intl.string(W.t.fiNVin)))
            : d
              ? ((_ = W.intl.string(W.t.vW8iUF)), (g = W.intl.string(W.t["50gfOv"])))
              : o
                ? ((_ = W.intl.string(W.t.vdSOpz)), (g = W.intl.string(W.t.lm1UKt)))
                : h
                  ? ((_ = W.intl.formatToPlainString(W.t.v1ktYb, { min: F.$8o.MEMBER_AGE })),
                    (g = W.intl.string(W.t.BddRzS)))
                  : c &&
                    ((_ = W.intl.formatToPlainString(W.t.sncw41, { min: F.$8o.ACCOUNT_AGE })),
                    (g = W.intl.string(W.t.BddRzS)))),
    null == A || null == _)
        ? null
        : (0, s.jsxs)(iL.l, {
              className: ep()(iV.popover, ik.kL),
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: ik.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: ik.Qs,
                      children: [
                          (0, s.jsx)(C.D, { variant: "heading-md/semibold", id: r, children: A }),
                          (0, s.jsx)(x.E, { color: "text-default", variant: "text-sm/normal", children: _ }),
                          (0, s.jsxs)("div", {
                              className: ik.UD,
                              children: [
                                  null != g
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: ik.FS,
                                            children: (0, s.jsx)(tI.$, {
                                                variant: "primary",
                                                text: g,
                                                onClick: () => {
                                                    a
                                                        ? iM.R()
                                                        : d
                                                          ? (0, Z.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("84704"),
                                                                        n.e("85543"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: iD.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: iw.V },
                                                            )
                                                          : o &&
                                                            (iG.A.verifyResend(),
                                                            (0, ij.A)({
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
                                  a || d || o
                                      ? (0, s.jsx)(iO.Q, {
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
    iY = n(113783),
    iz = n(96566),
    iq = n(495544),
    iX = n(312006),
    iQ = n(505543),
    iJ = n(994500),
    iZ = n(685399),
    i$ = n(475889),
    i0 = n(85451),
    i1 = n(435470),
    i2 = n(35275),
    i6 = n(75879);
function i9(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: ep()(ed.Xs, i6.U),
        children: (0, s.jsx)(i2.A, {
            className: ed.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var i3 = n(695633),
    i7 = n(669715),
    i4 = n(137177),
    i5 = n(999436);
function i8(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: ep()(i5.kL, t, i && i5.F4),
                children: (0, s.jsx)(i4.A, { game: n[0].application, className: i5.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: ep()(i5.kL, t, i && i5.F4),
            children: [
                (0, s.jsx)(i4.A, { game: n[0].application, className: i5.wK }),
                2 === n.length
                    ? (0, s.jsx)(i4.A, { game: n[1].application, className: i5.wK })
                    : (0, s.jsx)(x.E, {
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
            enableConnectedUserLimit: r,
            enableActivities: a,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: A,
            resolvedUnreadSetting: _,
        } = e,
        g = (0, u.bG)([nK.Ay], () => nK.Ay.getMentionCount(t.id)),
        m = (0, u.bG)([nK.Ay], () => nK.Ay.getIsMentionLowImportance(t.id)),
        p = (0, iZ.Ay)(t),
        f = (0, u.bG)([B.A], () => !B.A.can(F.xBc.CONNECT, t)),
        E = (0, i$.H)(t),
        C = (0, u.bG)([ia.A], () => ia.A.hasVideo(t.id)),
        I = (0, iz.qT)(t.id) && t.isGuildStageVoice(),
        b = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, id.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && l > 0 && (s = s > 0 ? Math.min(s, l) : l),
                    i && s === F.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: i }) > 0 &&
                !n &&
                !l
            );
        })({ channel: t, locked: f, video: (C || I) && null == E, selected: n }),
        S = (0, u.bG)([i3.A], () => i3.A.getNewThreadCount(t.guild_id, t.id)),
        N = (0, i1.ed)(t.guild_id, t.id),
        T = (0, u.bG)([tA.A], () => tA.A.getGuild(t.guild_id)?.features.has(F.GuildFeatures.COMMUNITY) ?? !1);
    if (io(g)) return (0, s.jsx)(ig, { mentionsCount: g, isMentionLowImportance: m });
    if (o) return (0, s.jsx)(i9, { locked: d });
    if (c) return (0, s.jsx)(M.Lp, { text: W.intl.string(W.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && _ === nS.e.ALL_MESSAGES && t.isForumLikeChannel() && null != S && S > 0)
        return (0, s.jsx)(x.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: W.intl.format(W.t.GkAbqY, { count: (0, M.Gu)(S) }),
        });
    if (!A && t.isForumLikeChannel() && null != N && N > 0)
        return (0, s.jsx)(x.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, M.Gu)(N) });
    let v = l?.length ?? 0;
    return null != r && r && b
        ? (0, s.jsx)(iA, { userCount: v, video: C || I, channel: t })
        : i && (0, i7.t)(l) && T
          ? (0, s.jsx)(M.Lp, { text: W.intl.string(W.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(i0.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(i8, { embeddedApps: p, muted: A })
              : null;
}
var lt = n(582630);
class ln extends nI {
    channelItemRef = r.createRef();
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
        return (0, nn.Pd)(e, ia.A, tA.A);
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
            s = e.getGuildId();
        null != s && (0, iy.V)(s) && (0, iv.Ze)(s),
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
            i = tA.A.getGuild(t.getGuildId());
        null != i &&
            (0, eO.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("38727"), n.e("99854"), n.e("53378")]).then(
                    n.bind(n, 119357),
                );
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: i, numAudience: l } = this.props;
        return (0, s.jsx)(im.A, { channel: e, voiceStates: i, collapsed: t, tabIndex: n, numAudience: l });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(iH, {
                type: iB.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)($.m, {
                asContainer: !0,
                text: W.intl.string(W.t.ZXxLQg),
                children: (0, s.jsx)(ee.D, {
                    className: ep()(ed.Xs, n ? ed.Tf : null),
                    onClick: () => {
                        iS.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": W.intl.string(W.t.ZXxLQg),
                    children: (0, s.jsx)(S.o, { size: "xs", color: "currentColor", className: ed.gE }),
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
        return null == e ? null : (0, s.jsx)(tx.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: i,
                connectChannelDropTarget: l,
                connectChannelDragSource: r,
                connectUserDropTarget: a,
                connectDragPreview: o,
                canReorderChannel: d,
                canMoveMembers: c,
                stageInstance: u,
                isSubscriptionGated: h,
                needSubscriptionToAccess: A,
                unread: _,
                resolvedUnreadSetting: g,
                mentionCount: m,
                isFavoriteSuggestion: p,
            } = this.props,
            { shouldShowGuildVerificationPopout: f } = this.state,
            E = (0, s.jsxs)("li", {
                className: ep()(this.getModeClass(), { [ed.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tz.m1)(e, iP.default, iJ.A),
                children: [
                    (0, s.jsx)(ib.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: f,
                        children: () =>
                            (0, s.jsx)($.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nb.Ay, {
                                    ref: this.channelItemRef,
                                    className: ed.Ki,
                                    iconClassName: ep()({ [lt.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? _ : void 0,
                                    resolvedUnreadSetting: g,
                                    mentionCount: m,
                                    locked: i,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: o,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: p,
                                    "aria-label": (0, iT.Ay)({
                                        channel: e,
                                        unread: _,
                                        mentionCount: m,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: A,
                                    }),
                                    children: [
                                        p && this.renderAcceptSuggestionButton(),
                                        p && this.renderRemoveSuggestionButton(),
                                        !p && this.renderOpenChatButton(),
                                        !p && this.renderInviteButton(),
                                        !p && this.renderEditButton(),
                                        !p && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return c && (E = a(E)), d && (E = l(r(E))), E;
    }
}
let li = tY((0, iN.F)(ln));
function ll(e) {
    var t;
    let n,
        i,
        { guild: l, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([nK.Ay], () => ({ unread: nK.Ay.hasUnread(r.id), mentionCount: nK.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([tX.Ay], () => tX.Ay.resolveUnreadSetting(r)),
        _ = (0, u.cf)([eq.A, iU.A, B.A], () => {
            let e = eq.A.getChannel(r.parent_id),
                t = iU.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != l && B.A.can(F.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    (l.id === ni.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, l))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, r),
                locked: !B.A.can(F.xBc.CONNECT, r),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        g = (0, u.bG)([tD.A], () => tD.A.isCollapsed(r.parent_id)),
        m =
            ((t = r.id),
            (n = (0, iQ.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([iX.Ay, iq.default], () => {
                    let n = iq.default.getId();
                    return iX.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        p = (0, u.bG)([n_.A], () => n_.A.getStageInstanceByChannel(r.id), [r.id]),
        f = (0, iY.zy)(r.id, e0.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: C } = (0, iR.A)(r.id),
        x = (0, u.bG)([tX.Ay], () => tX.Ay.isFavorite(l.id, r.id)),
        I = (0, iz.xn)(r.id),
        b = le({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: C,
            enableConnectedUserLimit: I || (r.userLimit > 0 && r.userLimit < F.RCc),
        }),
        S = e.connected && null == b;
    return (0, s.jsx)(li, {
        categoryCollapsed: g,
        connectAction: m,
        numAudience: f,
        stageInstance: p,
        isSubscriptionGated: E,
        needSubscriptionToAccess: C,
        ...h,
        ..._,
        ...e,
        isFavoriteSuggestion: o && !x,
        forceShowButtons: S,
        channelInfo: b,
        resolvedUnreadSetting: A,
    });
}
function ls(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    il.A.preload(n, t.id);
}
let lr = tY(
        class extends nI {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = tA.A.getGuild(t.getGuildId());
                null != i &&
                    (0, eO.L3)(e, async () => {
                        let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                        return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
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
                        canReorderChannel: r,
                    } = this.props,
                    a = (0, s.jsx)("li", {
                        className: ep()(this.getClassName(), { [ed.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tz.m1)(e, iP.default, iJ.A),
                        children: (0, s.jsxs)(nb.Ay, {
                            className: ed.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: ls,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? l : null,
                            "aria-label": (0, iT.Ay)({ channel: e }),
                            resolvedUnreadSetting: nS.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(i(a)) : a;
            }
        },
    ),
    la = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, u.cf)([eq.A, B.A], () => {
                let e = eq.A.getChannel(t.parent_id);
                return {
                    canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(lr, { ...l, ...e });
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
    lA = n(302005),
    l_ = n(406704),
    lg = n(696451),
    lm = n(763827),
    lp = n(56059),
    lf = n(163328),
    lE = n(778712),
    lC = n(730134),
    lx = n(707539),
    lI = n(486020),
    lb = n(550837);
function lS(e) {
    let { channel: t } = e,
        i = (0, u.yK)([i3.A, nK.Ay, B.A], () => {
            let e = i3.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(i3.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(i3.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nK.Ay.lastMessageId(e.id),
                        i = nK.Ay.lastMessageId(t.id);
                    return eZ.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? lp.b : lf.y;
    return (
        r.useEffect(() => {
            (0, lx.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: ep()(iV.popover, lb.SW),
            children: [
                (0, s.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: lb.DD,
                    children: t.isForumLikeChannel() ? W.intl.string(W.t.ioVdO2) : W.intl.string(W.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: lb.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, s.jsx)(lN, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, l),
                        (0, s.jsxs)(ee.D, {
                            className: lb.nM,
                            onClick: () => {
                                t.isForumLikeChannel()
                                    ? (0, iW.iN)(t.id)
                                    : (0, Z.openModalLazy)(async () => {
                                          let { default: e } = await n.e("65225").then(n.bind(n, 126768));
                                          return (n) => (0, s.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, s.jsx)("div", {
                                    className: lb.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: lb.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: lb.Pf,
                                    children: (0, s.jsx)(x.E, {
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
    return (0, s.jsxs)(ee.D, {
        className: lb.nM,
        onClick: (e) => {
            (0, ir.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, ip.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: lb.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: lb.my,
                              src: lI.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(lC.A, { className: lb.my, user: n, size: lE._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: lb.Pf,
                children: [
                    (0, s.jsx)(x.E, { className: lb.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: "•" }),
                    (0, s.jsx)(x.E, {
                        className: lb.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, lx.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var lT = n(364522),
    lv = n(302959),
    ly = n(35903),
    lR = n(970928),
    lj = n(427262),
    lL = n(456644);
let lO = t8.DN.SIZE_24;
function lG(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = lI.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)($.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: lL.P3 }),
        });
    }
    let r = i.large_image ?? i.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: i.large_text ?? "", src: (0, lR.uD)(l, r, [128, 128]), className: lL.P3 })
        : null;
}
function lM(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([iP.default], () => l.map((e) => iP.default.getUser(e)).filter(eQ.Vq));
    return (0, s.jsx)("div", {
        className: lL.ec,
        children: (0, s.jsxs)("div", {
            className: lL.Wh,
            children: [
                (0, s.jsx)(lG, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: lL.X0,
                    children: [
                        (0, s.jsx)(C.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: lL.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, s.jsx)(t8.Ay, {
                                className: lL.TN,
                                guildId: i.guild_id,
                                users: r,
                                size: lO,
                                max: 7,
                                renderUser: (e) => {
                                    if (null == e || e === t8.mt) return null;
                                    let t = lj.Ay.getName(e);
                                    return (0, s.jsx)(
                                        $.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, lO),
                                                alt: t,
                                                className: lL.my,
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
var lD = n(793425);
function lU(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        r = Array.from(i.embeddedActivity.userIds),
        a = (0, u.bG)([iP.default], () => iP.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: lD.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: lD.Il,
                      children: (0, s.jsx)(lM, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: lD.M4,
                      children: (0, s.jsx)(ly.A, {
                          type: lv.M.VOICE_CHANNEL,
                          activity: n,
                          embeddedActivity: i.embeddedActivity,
                          user: a,
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
    lw = n(869552);
function lk(e) {
    let { channel: t } = e,
        n = (0, u.bG)([tA.A], () => tA.A.getGuild(t.guild_id)),
        i = (0, tz.Ay)(t),
        l = (0, lP.gU)(t, n);
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: lw.hY,
              children: [
                  (0, s.jsx)(l, { className: lw.p }),
                  (0, s.jsx)(x.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: lw.HA,
                      children: i,
                  }),
              ],
          });
}
var lV = n(802625);
function lB(e) {
    let { channel: t, onAction: n } = e,
        i = (0, iZ.Ay)(t),
        l = Array.from((0, iZ.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, s.jsxs)(lT.Ip, {
              className: ep()(iV.popover, lV.kL),
              children: [
                  (0, s.jsx)("div", { className: lV.oT, children: (0, s.jsx)(lk, { channel: t }) }),
                  (0, s.jsx)("div", { className: lV.zN }),
                  l.map((e, i) =>
                      (0, s.jsx)(
                          lU,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
class lH extends nI {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = r.createRef();
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
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != i && i.length > 0 && r && !n
              ? (0, s.jsx)(lB, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(lS, { ...e, channel: this.props.channel });
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
            return void (0, eO.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === F.rbe.DM) {
            let i = iP.default.getUser(t.getRecipientId());
            null != i &&
                (0, eO.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("84442"),
                        n.e("39778"),
                        n.e("44031"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, s.jsx)(e, { ...n, user: i, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, eO.L3)(e, async () => {
                let { default: e } = await n.e("78580").then(n.bind(n, 907647));
                return (n) => (0, s.jsx)(e, { ...n, channel: t });
            });
        let i = tA.A.getGuild(t.getGuildId());
        null != i &&
            (0, eO.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("38727"), n.e("85298")]).then(
                    n.bind(n, 468916),
                );
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ed.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: i,
                unread: l,
                hasActiveThreads: r,
                hasMoreActiveThreads: a,
                mentionCount: o,
                connectChannelDropTarget: d,
                connectChannelDragSource: c,
                connectDragPreview: u,
                canReorderChannel: h,
                isSubscriptionGated: A,
                isFavoriteSuggestion: _,
                subtitle: g,
                forceTopLevelThread: m,
                embeddedApps: p,
                resolvedUnreadSetting: f,
                enableActivities: E,
                showMenuItemPopover: C,
                markMenuItemPopoverAsDismissed: x,
                channelItemRef: I,
                isSuggestedSection: b,
            } = this.props,
            S = I ?? this.channelItemRef,
            N = !C && a,
            T = !C && E && null != p && p.length > 0,
            v = lu(g),
            y = (0, s.jsxs)("li", {
                className: ep()(this.getClassName(), { [ed.r9]: this.isDisabled(), [ed.wH]: n }),
                "data-dnd-name": (0, tz.m1)(e, iP.default, iJ.A),
                onMouseEnter: N || T ? this.handleMouseEnter : void 0,
                onMouseLeave: N || T ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(ib.Y, {
                        targetElementRef: S,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (N && this.state.shouldShowThreadsPopout) || (T && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nb.Ay, {
                                ref: this.setChannelItemRef,
                                className: ed.Ki,
                                channel: e,
                                guild: t,
                                selected: !_ && n,
                                muted: i,
                                unread: l,
                                mentionCount: o,
                                hasActiveThreads: r,
                                subtitle: v?.subtitle,
                                subtitleColor: v?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: _,
                                channelTypeOverride: m ? F.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: f,
                                transitionExtras: b ? { source: iF.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, iT.Ay)({
                                    channel: e,
                                    unread: l,
                                    mentionCount: o,
                                    isSubscriptionGated: A,
                                }),
                                children: [
                                    _ &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !_ &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    C && (0, s.jsx)(lh.A, { targetElementRef: S, markMenuItemPopoverAsDismissed: x }),
                ],
            });
        return h ? d(c(y)) : y;
    }
}
let lF = tY(lH);
function lW(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, l_.NR)(t),
        h = (0, u.cf)([nK.Ay], () => ({
            unread: nK.Ay.hasUnread(t.id),
            ackMessageId: nK.Ay.ackMessageId(t.id),
            isLowImportanceMention: nK.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([tX.Ay], () => tX.Ay.resolveUnreadSetting(t)),
        _ = (0, u.cf)([eq.A, B.A], () => {
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
        { needSubscriptionToAccess: m, isSubscriptionGated: p } = (0, iR.A)(t.id),
        f = (0, u.bG)([tX.Ay], () => tX.Ay.isFavorite(n.id, t.id)),
        E = (0, lc.ni)(t),
        C = (0, ld.Gp)(t.id),
        x = le({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: m,
            isNewChannel: g,
            muted: a,
            enableActivities: C,
            resolvedUnreadSetting: A,
        }),
        I = (0, iZ.Ay)(t),
        [b, S] = r.useState(!1),
        N = (0, lo.K)(
            r.useCallback((e) => {
                S(e);
            }, []),
        ),
        { showMenuItemPopover: T, markMenuItemPopoverAsDismissed: v } = (0, lA.z)({
            location: "TextChannel",
            isChannelSelected: o,
            isTargetInViewport: b,
            channelType: t.type,
            isPopoverAllowed: n.id !== ni.Vc,
        });
    return (0, u.bG)([lm.A, lg.Ay], () => lm.A.getChannelId() !== t.id && lg.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(lF, {
              ...h,
              ..._,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: p,
              needSubscriptionToAccess: m,
              isNewChannel: g && e.canBeNewChannel,
              isFavoriteSuggestion: l && !f,
              channelIsContentGated: E,
              channelInfo: x,
              embeddedApps: I,
              resolvedUnreadSetting: A,
              hasChannelInfo: null != x,
              enableActivities: C,
              showMenuItemPopover: T,
              markMenuItemPopoverAsDismissed: v,
              channelItemRef: N,
          });
}
var lK = n(900797),
    lY = n(250719),
    lz = n(636585),
    lq = n(531685),
    lX =
        (((l = {}).HIDDEN = "hidden"),
        (l.UNREAD = "unread"),
        (l.MENTIONS = "mentions"),
        (l.VOICE_CHANNELS = "voice-channels"),
        l);
let lQ = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    lJ = { topBar: lQ, bottomBar: lQ },
    lZ = {},
    l$ = {};
function l0(e) {
    let t = eq.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? is.A.isMuted(t.id) : tX.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eY.Y)(t)
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
            ? e$.A.getMutableParticipants(e.id, e0.ip.SPEAKER).length > 0
            : eX.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function l6(e) {
    let { guildChannels: t } = tt.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(l$[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let i = null,
        l = null,
        s = null,
        r = null,
        a = !0,
        d = !0,
        c = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [A, _, g] = t.getSlicedChannels(n);
    for (let e = 0; e < _.length; e++) {
        let t = _[e];
        if (
            ((l0(t.id) || o().some(t.threadIds, l0)) && (d = !1),
            (l1(t.id) || o().some(t.threadIds, l1)) && (a = !1),
            h.includes(t.id) && (c = !0),
            !d && !a && c)
        )
            break;
    }
    let m = 0,
        p = !1,
        f = 0,
        E = !1;
    if (d || a)
        for (let e = A.length - 1; e >= 0; e--) {
            let t = A[e];
            (l0(t.id) || o().some(t.threadIds, l0)) && (null == l && (l = t.id), (p = !0)),
                (l1(t.id) || o().some(t.threadIds, l1)) &&
                    (null == i && (i = t.id),
                    (m += nK.Ay.getMentionCount(t.id)),
                    (m += o().sumBy(t.threadIds, nK.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < g.length; e++) {
            let t = g[e];
            if (!d && !a) break;
            (l0(t.id) || o().some(t.threadIds, l0)) && (null == r && (r = t.id), (E = !0)),
                (l1(t.id) || o().some(t.threadIds, l1)) &&
                    (null == s && (s = t.id),
                    (f += nK.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, nK.Ay.getMentionCount)));
        }
    let C = null,
        x = null,
        I = u?.getChannelRecords() ?? [];
    a && f > 0
        ? (C = { mode: "mentions", mentionCount: f, targetChannelId: s })
        : !c && o().some(I, l2)
          ? (C = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (C = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && m > 0
            ? (x = { mode: "mentions", mentionCount: m, targetChannelId: i })
            : d && p && (x = { mode: "unread", mentionCount: 0, targetChannelId: l });
    let b = null != x && (null == C || ("mentions" !== C.mode && "mentions" === x.mode)),
        S = null != C && ("mentions" === C.mode || !b);
    return (lZ[e] = { topBar: b ? (x ?? lQ) : lQ, bottomBar: S ? (C ?? lQ) : lQ }), !0;
}
let l9 = o().throttle(l6, 200);
function l3(e) {
    let { guildId: t } = e,
        n = tA.A.getGuild(t);
    return null != n && !!n.features.has(F.GuildFeatures.COMMUNITY) && l9(t);
}
function l7(e) {
    let { id: t } = e,
        n = eq.A.getChannel(t);
    if (null == n) return !1;
    let i = tA.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(F.GuildFeatures.COMMUNITY) && l9(n.guild_id);
}
function l4(e) {
    let { channel: t } = e,
        n = eq.A.getChannel(t.id);
    if (null == n) return !1;
    let i = tA.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(F.GuildFeatures.COMMUNITY) && l9(n.guild_id);
}
function l5(e) {
    let { channelId: t } = e,
        n = eq.A.getChannel(t);
    if (null == n) return !1;
    let i = tA.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(F.GuildFeatures.COMMUNITY) && e8.A.getGuildId() === n.guild_id && l9(n.guild_id)
    );
}
function l8(e) {
    let { guildId: t } = e;
    return null != t && l9(t);
}
class se extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tt.A, eq.A, tA.A, is.A, nK.Ay, e8.A, eX.Ay, e$.A, tX.Ay);
    }
    getUnreadStateForGuildId(e) {
        return lZ[e] ?? lJ;
    }
}
let st = new se(eM.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = tA.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(F.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(l$[t], n) &&
            ((l$[t] = n), l6(t))
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
                .filter(eQ.Vq)
                .uniq()
                .forEach((e) => {
                    let t = tA.A.getGuild(e);
                    null != t && t.features.has(F.GuildFeatures.COMMUNITY) && l9(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: l5,
    CHANNEL_DELETE: l4,
    CHANNEL_LOCAL_ACK: l5,
    MESSAGE_ACK: l5,
    MESSAGE_CREATE: l5,
    MESSAGE_DELETE_BULK: l5,
    MESSAGE_DELETE: l5,
    PASSIVE_UPDATE_V2: function (e) {
        let t = tA.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(F.GuildFeatures.COMMUNITY)) && l9(e.guildId);
    },
    RESORT_THREADS: l5,
    THREAD_CREATE: l4,
    THREAD_DELETE: l4,
    THREAD_LIST_SYNC: l3,
    THREAD_MEMBER_UPDATE: l7,
    THREAD_MEMBERS_UPDATE: l7,
    THREAD_UPDATE: l4,
    BULK_CLEAR_RECENTS: l3,
    CATEGORY_COLLAPSE_ALL: l3,
    CATEGORY_EXPAND_ALL: l3,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = e8.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = lZ[n];
        return null != i && "voice-channels" === i.bottomBar.mode && l9(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: l8,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: l8,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && l9(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: l8,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: l8,
});
var sn = n(335543);
let si = { friction: 30, tension: 300 };
function sl(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, lY.A)(t.id),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, nn.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, s.jsxs)(ee.D, {
        className: ep()(sn.M0, sn.OF),
        onClick: a,
        children: [
            (0, s.jsx)(b.H, { size: "custom", className: sn.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(x.E, {
                variant: "text-xs/semibold",
                className: sn.pM,
                children: W.intl.format(W.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(lz.A, {
                guildId: t.id,
                className: sn.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: lE._3.SIZE_16,
            }),
        ],
    });
}
function ss(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([st], () => st.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([lq.A], () => lq.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: _ } = "bottom" === t ? o : d,
        g = h === lX.HIDDEN,
        m = (0, eL.z)(
            {
                to: { transform: g ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: si,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != _ && a(_);
            },
            [a, _],
        );
    return (0, s.jsx)("div", {
        className: ep()(sn.kL, { [sn.Mn]: "top" === t, [sn.sQ]: "bottom" === t }),
        children: (0, s.jsx)(ej.animated.div, {
            className: sn.pK,
            style: m,
            "aria-hidden": g,
            children:
                h === lX.HIDDEN
                    ? (0, s.jsx)("div", { className: ep()(sn.M0, sn.Te) })
                    : h === lX.UNREAD
                      ? (0, s.jsxs)(ee.D, {
                            className: sn.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tS.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sn.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(lK.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sn.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(x.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sn.pM,
                                    children: W.intl.string(W.t.FCRiT3),
                                }),
                            ],
                        })
                      : h === lX.MENTIONS
                        ? (0, s.jsx)(ee.D, {
                              className: ep()(sn.M0, sn.vU),
                              onClick: p,
                              children: (0, s.jsx)(x.E, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: sn.pM,
                                  children: W.intl.format(W.t.EQcLyp, { count: A }),
                              }),
                          })
                        : h === lX.VOICE_CHANNELS
                          ? (0, s.jsx)(sl, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i })
                          : void 0,
        }),
    });
}
var sr = n(310953),
    sa = n(173860);
function so(e) {
    let t = eq.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? is.A.isMuted(t.id) : tX.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eY.Y)(t)
    );
}
function sd(e) {
    let t = eq.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = tX.Ay.isGuildCollapsed(n),
        l = tX.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nK.Ay.getMentionCount(e) > 0;
}
let sc = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: i, guildChannelsVersion: l, ...r } = e,
        a = (0, sr.W)(n, i, l, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([lq.A], () => lq.A.isFocused());
    return (0, s.jsx)(sa.A, { ref: t, ...r, isUnread: so, isMentioned: sd, items: a, animate: o });
});
var su = n(81466);
function sh(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: r } = (0, u.cf)(
            [nK.Ay],
            () => ({
                hasUnread: nK.Ay.hasUnread(t.id, nS.P.GUILD_EVENT),
                mentionCount: nK.Ay.getMentionCount(t.id, nS.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([tX.Ay], () => tX.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, Z.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("22021"), n.e("26816"), n.e("25372")]).then(n.bind(n, 15823));
            return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, nB.Dr)(O.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tg.Ay)(t.id),
        c = d.length > 0 ? W.intl.formatToPlainString(W.t.IBdqSu, { number: d.length }) : W.intl.string(W.t.tlopTM);
    return (0, s.jsx)(V.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(su.C, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: i,
        onClick: o,
        onContextMenu: (e) => {
            (0, eO.L3)(e, async () => {
                let { default: e } = await n.e("19990").then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(M.hV, { className: nw.Do, disableColor: !0, count: r }) : null,
    });
}
var sA = n(451988),
    s_ = n(271683),
    sg = n(725613),
    sm = n(262763),
    sp = n(857253),
    sf = n(22231),
    sE = n(241326),
    sC = n(750943),
    sx = n(743674),
    sI = n(888697),
    sb = n(493819),
    sS = n(722884),
    sN = n(844045),
    sT = n(31950);
function sv(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, canModifyHangout: a } = e,
        o = (0, sx.S)(i),
        d = (0, z.je)(t),
        c = r.useCallback(() => {
            (0, sS.A)({ channel: t });
        }, [t]),
        u = r.useCallback(() => {
            (0, sI.e2)(t.id);
        }, [t.id]),
        h = r.useCallback(
            (e) => {
                d
                    ? (0, eO.L3)(e, async () => {
                          let { default: e } = await n.e("55558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, d],
        );
    return (0, s.jsxs)("div", {
        className: sT.rs,
        onContextMenu: h,
        children: [
            (0, s.jsx)("div", {
                className: sT.ZS,
                style: null != o ? { backgroundColor: o } : void 0,
                children: (0, s.jsx)(sb.A, { imageUrl: i, animatedUrl: l, className: sT.Sl }),
            }),
            a
                ? (0, s.jsxs)("div", {
                      className: sT.n_,
                      children: [
                          (0, s.jsx)($.m, {
                              text: W.intl.string(sN.default.XJ4UpB),
                              children: (0, s.jsx)(ee.D, {
                                  className: sT.HF,
                                  onClick: c,
                                  children: (0, s.jsx)(sf.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)($.m, {
                              text: W.intl.string(sN.default.XV4qT6),
                              children: (0, s.jsx)(ee.D, {
                                  className: sT.HF,
                                  onClick: u,
                                  children: (0, s.jsx)(sE.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function sy(e) {
    let { channel: t } = e,
        n = r.useCallback(() => {
            (0, sS.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        className: sT._o,
        children: (0, s.jsxs)(ee.D, {
            className: sT.hH,
            onClick: n,
            children: [
                (0, s.jsx)(sC.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: W.intl.string(sN.default.NGcIOF),
                }),
            ],
        }),
    });
}
function sR(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, Y.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, z.W6)(t),
        a = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(
            () => (null == d || null == t.guild_id ? null : (0, z.Sq)({ guildId: t.guild_id, bannerHash: d })),
            [t.guild_id, d],
        );
    return i
        ? null != c
            ? (0, s.jsx)(sv, { channel: t, imageUrl: c.imageUrl, animatedUrl: c.animatedUrl, canModifyHangout: a })
            : a
              ? (0, s.jsx)(sy, { channel: t })
              : null
        : null;
}
var sj = n(159426),
    sL = n(850457),
    sO = n(820512);
function sG(e) {
    let { channel: t } = e,
        { enableHistoryHover: n, showGhostUser: i } = (0, e9.G8)({
            guildId: t.guild_id,
            location: "VoiceChannelHistoryTracking",
        }),
        l = (0, u.bG)([e3.A], () => e3.A.getHistoryExists(t.id)),
        s = (0, u.bG)([sg.A], () => sg.A.getStartTime(t));
    return (
        r.useEffect(() => {
            n && null != s && !l && ((0, sO.H)(t.id), i || (0, sO.q)(t.id));
        }, [t.id, n, l, s, i]),
        null
    );
}
var sM = n(532622),
    sD = n(882840),
    sU = n(46054),
    sP = n(514416),
    sw = n(992595);
function sk(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, onClick: a } = e,
        o = (0, sD.l)(t),
        { enableHangoutWindow: d } = (0, Y.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, z.lr)(t),
        u = null != o && o.length > 0,
        h = (0, sM.Ay)(t, !0),
        A = null != l && l.length > 0;
    if (
        (r.useEffect(() => {
            u && n5.default.track(F.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let _ = ep()(sP.Ui, n && h ? sP.BI : null);
    return u
        ? (0, s.jsx)(ee.D, {
              className: _,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(x.E, {
                  variant: "text-xs/medium",
                  className: ep()(sP.qS, sw.PT),
                  children: (0, s.jsx)(tx.A, { children: sU.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || i)
          ? (0, s.jsxs)(ee.D, {
                className: _,
                onClick: a,
                children: [
                    (0, s.jsx)(x.E, {
                        variant: "text-xs/medium",
                        className: sP.qS,
                        children: W.intl.string(W.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sf.R, { color: "currentColor", className: sP.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tx.A, { children: l })
            : null;
}
class sV extends nI {
    state = { popoutToShow: null, shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = r.createRef();
    channelItemRef = r.createRef();
    activitiesHoverTimeout = new sA.Ep();
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
            enableOpenTIVForPing: s,
            mentionCount: r,
            isSuggestedSection: a,
        } = this.props;
        i && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = s && r > 0;
        o && iS.A.updateChatOpen(n.id, !0),
            sm.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o,
                locked: e,
                transitionExtras: a ? { source: iF.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = tA.A.getGuild(t.getGuildId());
        null != i &&
            (0, eO.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("38727"), n.e("99854"), n.e("53378")]).then(
                    n.bind(n, 119357),
                );
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    handleMouseEnter = () => {
        this.activitiesHoverTimeout.stop(), this.setState({ hovered: !0 });
        let { enableHistoryHover: e } = (0, e9.NH)({ guildId: this.props.channel.guild_id, location: "VoiceChannel" });
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
        return (0, nn.Pd)(e, ia.A, tA.A);
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
        null != t && (0, iy.V)(t) && (0, iv.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, s_.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = lu(this.props.subtitle)?.subtitle,
            { hovered: i } = this.state;
        return (0, s.jsx)(sk, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: i,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, s.jsx)(im.A, {
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
        return !(null != n && n.length > 0) || i ? null : (0, s.jsx)(sR, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e, sorting: t, isUserOver: n } = this.props,
            { popoutToShow: i, shouldShowGuildVerificationPopout: l } = this.state;
        return l
            ? (0, s.jsx)(iH, { type: iB.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : t || n
              ? null
              : "history" === i && this.getVoiceStatesCount() > 0
                ? (0, s.jsx)(sL.A, {
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
            return (0, s.jsx)($.m, {
                asContainer: !0,
                text: W.intl.string(W.t.ZXxLQg),
                children: (0, s.jsx)(ee.D, {
                    className: ep()(ed.Xs, n ? ed.Tf : null),
                    onClick: () => {
                        iS.A.updateChatOpen(e.id, !0),
                            (0, iW.iN)(e.id, i ? { source: iF.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": W.intl.string(W.t.ZXxLQg),
                    children: (0, s.jsx)(S.o, { size: "xs", color: "currentColor", className: ed.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ed.yW, children: e });
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
                mentionCount: r,
                locked: a,
                sorting: o,
                isUserOver: d,
                connectChannelDropTarget: c,
                connectChannelDragSource: u,
                connectUserDropTarget: h,
                connectDragPreview: A,
                canReorderChannel: _,
                canMoveMembers: g,
                showTutorial: m,
                hasActiveEvent: p,
                embeddedApps: f,
                isSubscriptionGated: E,
                isFavoriteSuggestion: C,
                withGuildIcon: x,
                hasStartTime: I,
                shouldHighlightChannel: b,
                shouldUseAnimatedWaveform: S,
                voiceStates: N,
            } = this.props,
            { shouldShowGuildVerificationPopout: T } = this.state,
            { enableHistoryHover: v } = (0, e9.NH)({ guildId: e.guild_id, location: "VoiceChannel" }),
            y = b || S,
            R = (0, s.jsxs)("li", {
                ref: this.ref,
                className: ep()(this.getModeClass(), { [ed.r9]: this.isDisabled(), [ed.fy]: b }),
                "data-dnd-name": (0, tz.m1)(e, iP.default, iJ.A),
                children: [
                    v && this.getVoiceStatesCount() > 0 && (0, s.jsx)(sG, { channel: e }),
                    b &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: ed.UQ }),
                                (0, s.jsx)("div", { className: ed.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(ib.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: T || ("history" === this.state.popoutToShow && !(o || d)),
                            children: () =>
                                (0, s.jsx)($.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nb.Ay, {
                                        ref: this.channelItemRef,
                                        className: ed.Ki,
                                        iconClassName: ep()({ [ed.Gj]: p || I || y }),
                                        hasActiveEvent: p,
                                        channel: e,
                                        selected: !C && t,
                                        connected: n,
                                        unread: n ? i : void 0,
                                        resolvedUnreadSetting: l,
                                        mentionCount: r,
                                        locked: a,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: A,
                                        isFavoriteSuggestion: C,
                                        "aria-label": (0, iT.Ay)({
                                            channel: e,
                                            unread: i,
                                            mentionCount: r,
                                            voiceStates: N,
                                            embeddedActivitiesCount: f.length,
                                            isSubscriptionGated: E,
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
                                        })({ channel: e, embeddedApps: f }),
                                        withGuildIcon: x,
                                        children: [
                                            C &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !C &&
                                                (0, s.jsxs)(s.Fragment, {
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
            g && (R = h(R)),
            _ && (R = c(u(R))),
            m &&
                (R = (0, s.jsx)(t9.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: R,
                })),
            R
        );
    }
}
let sB = tY((0, iN.F)(sV));
function sH(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([nK.Ay], () => ({ unread: nK.Ay.hasUnread(n.id), mentionCount: nK.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([tX.Ay], () => tX.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([eq.A, iU.A, B.A], () => {
            let e = eq.A.getChannel(n.parent_id),
                l = iU.A.getCheck(n.guild_id);
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
        A = (0, u.bG)([ia.A], () => ia.A.hasVideo(n.id)),
        _ = (0, iZ.Ay)(n),
        g = (0, tz.Ay)(n),
        m = (0, tg.Qs)(n.id),
        p = (0, u.bG)([sg.A], () => null != sg.A.getStartTime(n), [n]),
        { isSubscriptionGated: f, needSubscriptionToAccess: E } = (0, iR.A)(n.id),
        C = (0, sp.A)(),
        x = (0, u.bG)([tX.Ay], () => tX.Ay.isFavorite(t.id, n.id)),
        I = e.connected || C?.channelId === n.id,
        { enableOpenTIVForPing: b } = sj.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: S, enableWaveformIcon: N } = (0, ne.b)(t.id, "VoiceChannel"),
        T = null != o && o.length > 0,
        v = S && T,
        y = N && T,
        R = le({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: f,
            needSubscriptionToAccess: E,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        j = I && null == R;
    return (0, s.jsx)(sB, {
        channelName: g,
        embeddedApps: _,
        embeddedActivityType: F.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != m,
        isSubscriptionGated: f,
        needSubscriptionToAccess: E,
        ...d,
        ...h,
        ...e,
        connected: I,
        isFavoriteSuggestion: l && !x,
        forceShowButtons: j,
        channelInfo: R,
        resolvedUnreadSetting: c,
        enableOpenTIVForPing: b,
        hasChannelInfo: null != R,
        hasStartTime: p,
        shouldHighlightChannel: v,
        shouldUseAnimatedWaveform: y,
    });
}
n(131955);
var sF = n(335993);
function sW(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class sK extends r.PureComponent {
    static contextType = d.nC;
    _list = null;
    unreadTopRef = r.createRef();
    unreadBottomRef = r.createRef();
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
            { initialized: s } = this.state,
            { scrollTop: r } = e4.A.getGuildDimensions(i);
        null != n
            ? (this.scrollToChannel(n), N.A.clearChannelListScrollTo(i))
            : i !== e.guildId
              ? null != r && this.scrollTo(r)
              : l !== e.selectedChannelId
                ? this.scrollToChannel(l)
                : !t.initialized &&
                  s &&
                  (null == r && null != l
                      ? this.scrollToChannel(l, !1, 8, this.handleListScroll)
                      : this.scrollTo(r ?? 0, this.handleListScroll)),
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
            s = this.getSectionRowsFromChannel(e)[0];
        if (null != s && null != l)
            if (null != s.threadOffset) {
                let [e] = l.getScrollPosition(s.section, s.row),
                    { density: r = "default" } = this.props,
                    a = s.threadOffset * sW(r);
                l.scrollIntoViewRect({ start: e + a, end: e + a + sW(r), padding: n, animate: t, callback: i });
            } else l.scrollToIndex({ section: s.section, row: s.row, animate: t, padding: n, callback: i });
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
            let [n, s] = i.getScrollPosition(l, e),
                r = i.getScrollerState();
            if ((t && n + s < r.scrollTop + r.offsetHeight) || (!t && n > r.scrollTop)) return !0;
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
            let s = t[l];
            if ((0, A.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
                let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
                    [l, r] = e.getScrollPosition(s.section, s.row);
                null != t && l + r < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
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
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, e7.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, eY.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, a.throttle)((e) => {
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
            optInEnabled: s,
            guildChannelsVersion: r,
        } = this.props;
        return (function (e) {
            let {
                sectionIndex: t,
                guildChannels: n,
                voiceStates: i,
                selectedChannelId: l,
                selectedVoiceChannelId: s,
                optInEnabled: r,
                visualRefreshEnabled: a,
                density: o,
            } = e;
            if (t === n.voiceChannelsSectionNumber) return 44;
            let { hasDivider: d, canHaveVoiceSummary: c } = nl(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === te.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                            return !0 !== tD.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!B.A.can(F.xBc.VIEW_CHANNEL, e)) return !1;
                                      let t = n[e.id] ?? [];
                                      return e.id !== l && e.id !== i && t.length > 0;
                                  });
                        })({ category: t, selectedChannelId: i, selectedVoiceChannelId: l, voiceStates: n }).length > 0
                    );
                })({ category: h, selectedChannelId: l, selectedVoiceChannelId: s, voiceStates: i })
                ? u
                : (a && "cozy" === o ? 42 : 34) + u;
        })({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: r,
            voiceStates: n,
            selectedChannelId: l,
            selectedVoiceChannelId: i,
            optInEnabled: s,
            density: this.props.density,
        });
    };
    getRowHeight = (e, t) => {
        let {
                guildChannels: n,
                voiceStates: i,
                stageChannelSpeakerVoiceStates: l,
                selectedVoiceChannelId: s,
                density: r = "default",
            } = this.props,
            a = sW(r);
        if (e === te.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tC.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === F.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += sW(t);
            let n = i[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, X.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, Y.kY)({ guildId: d.record.guild_id, location: "ChannelList" });
                    e && ((0, z.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
                }
            }
            if (
                (d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount),
                !d.isCollapsed && !c.isCollapsed)
            ) {
                let { showGhostUser: e } = (0, e9.NH)({ guildId: d.record.guild_id, location: "ChannelList" });
                e && null != e3.A.getLastLeftUserId(d.id) && (a += 32);
            }
        }
        if (((null != d.subtitle || s === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = i[d.id] ?? [],
                t = l[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8);
            }
        }
        return a;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == i) return;
        let l = null,
            s = i.getShownChannelAndThreadIds();
        null != n && s.includes(n) && (l = (0, Q.xb)(t)), (0, Q.DD)(e.id, s, l);
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: i,
                guild: l,
                selectedChannelId: r,
                disableManageChannels: a,
            } = this.props;
        return (0, s.jsx)(
            t5,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: i,
                selectedChannelId: r,
                disableManageChannels: a,
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
                selectedChannelId: a,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: A,
                optInEnabled: _,
                withGuildIcon: g,
            } = this.props;
        if (t === te.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tC.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        q.A,
                        { guild: i, channel: e5.Ay.getDefaultChannel(i.id) },
                        tC.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tC.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, s.jsx)(eK, { guild: i, withMargin: l.length > 1 }, tC.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tC.n.GUILD_HOME:
                    return (0, s.jsx)(nq, { guild: i, selected: a === es.VV.GUILD_HOME }, tC.n.GUILD_HOME);
                case tC.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sh,
                        { guild: i, selected: a === tC.n.GUILD_SCHEDULED_EVENTS },
                        tC.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tC.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        n1,
                        { guild: i, selected: a === es.VV.ROLE_SUBSCRIPTIONS },
                        tC.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tC.n.GUILD_SHOP:
                    return (0, s.jsx)(ii, { guild: i, selected: a === es.VV.GUILD_SHOP }, tC.n.GUILD_SHOP);
                case tC.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nk, { guild: i, selected: a === es.VV.GAME_SHOP }, tC.n.GUILD_GAME_SHOP);
                case tC.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(n$, { guild: i });
                case tC.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        nY,
                        { guild: i, selected: a === es.VV.CHANNEL_BROWSER || a === es.VV.CUSTOMIZE_COMMUNITY },
                        tC.n.CHANNELS_AND_ROLES,
                    );
                case tC.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nN,
                        { guild: i, selectedChannelId: a, disableManageChannels: h },
                        tC.n.GUILD_DIRECTORY,
                    );
                case tC.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        K,
                        { guild: i, selected: a === es.VV.MEMBER_SAFETY },
                        tC.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tC.n.GUILD_BOOSTS:
                    return (0, s.jsx)(eR, { guildId: i.id, selected: a === es.VV.GUILD_BOOSTS }, tC.n.GUILD_BOOSTS);
                case tC.n.GAME_SERVERS:
                    return (0, s.jsx)(eg, { guildId: i.id, selected: a === es.VV.GAME_SERVERS }, tC.n.GAME_SERVERS);
                case tC.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        ec,
                        { guildId: i.id, selected: a === es.VV.GAME_SERVERS },
                        tC.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let m = c.getChannelFromSectionRow(t, n);
        if (null == m) return null;
        let { category: p, channel: f } = m,
            E = p instanceof te.xu,
            C = f.record,
            x = `${t}${f.id}`;
        switch (C.type) {
            case F.rbe.GUILD_ANNOUNCEMENT:
            case F.rbe.GUILD_TEXT:
            case F.rbe.GUILD_FORUM:
            case F.rbe.GUILD_MEDIA:
            case F.rbe.DM:
            case F.rbe.GROUP_DM:
                return (0, s.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, s.jsx)(lW, {
                                channel: C,
                                guild: i,
                                position: f.position,
                                selected: a === f.id,
                                muted: f.isMuted,
                                subtitle: f.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: _ && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            f.threadCount > 0
                                ? (0, s.jsx)(iI, {
                                      withGuildIcon: g,
                                      channel: C,
                                      sortedThreadIds: f.threadIds,
                                      selectedChannel: null != l && (l.id === f.id || l.parent_id === C.id) ? l : null,
                                      selectedVoiceChannelId: o?.parent_id === C.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    x,
                );
            case F.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    ll,
                    {
                        channel: C,
                        guild: i,
                        position: f.position,
                        selected: a === f.id,
                        connected: d === f.id,
                        collapsed: f.isCollapsed || p.isCollapsed,
                        voiceStates: u[f.id] ?? [],
                        speakerVoiceStates: A[f.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    x,
                );
            case F.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    sH,
                    {
                        channel: C,
                        guild: i,
                        position: f.position,
                        selected: a === f.id,
                        connected: d === f.id,
                        collapsed: f.isCollapsed || p.isCollapsed,
                        voiceStates: u[f.id],
                        subtitle: f.subtitle,
                        disableManageChannels: h,
                        showTutorial: f.isFirstVoiceChannel,
                        isFavoriteCategory: E,
                        withGuildIcon: g,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    x,
                );
            case F.rbe.GUILD_STORE:
                return (0, s.jsx)(la, { channel: C, guild: i, position: f.position, selected: a === f.id }, x);
            case F.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(t6, { channel: C }, `readonly-${C.id}`);
            case F.rbe.PUBLIC_THREAD:
            case F.rbe.PRIVATE_THREAD:
            case F.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    lW,
                    {
                        channel: C,
                        guild: i,
                        position: f.position,
                        selected: a === f.id,
                        muted: f.isMuted,
                        subtitle: f.subtitle,
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
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, s.jsx)(
            nr,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: i,
                sectionIndex: t,
                voiceStates: l,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
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
            { guildId: l, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: t4.Eo,
            children: (0, s.jsx)(sc, {
                ref: this.unreadTopRef,
                textUnread: W.intl.string(W.t.FCRiT3),
                textMention: W.intl.string(W.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: t4.Vq,
                barClassName: t4.bu,
                guildId: l,
                guildChannels: r,
                guildChannelsVersion: a,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate,
            }),
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: i, isUnreadVisible: l } = this.state;
        return (0, s.jsx)(sc, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: W.intl.string(W.t.FCRiT3),
            textMention: W.intl.string(W.t["8zH0LJ"]),
            hide: null == i && l,
            className: t4.di,
            barClassName: t4.bu,
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
        (0, L.ai)(n) && (l["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === i ? 8 : 12;
        return (0, s.jsx)(_.sk, {
            children: (t) =>
                (0, s.jsx)(
                    g.OZ,
                    {
                        ref: this.setListRef,
                        className: t4.XG,
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
                        ...a,
                        ...t,
                        ...l,
                    },
                    "guild-channels",
                ),
        });
    }
    testShouldSkipTutorial = () => {
        if (!e6.A.shouldShow("voice-conversations")) return;
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
        return (0, s.jsx)(j.V0, {
            children: (i) =>
                (0, s.jsx)(m.F, {
                    component: (0, s.jsx)(p.A, {
                        children: (0, s.jsx)(m.H, { id: i, children: W.intl.string(W.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: t4.Eo,
                                      children: (0, s.jsx)(ss, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(ss, {
                                      position: "bottom",
                                      guildChannels: e,
                                      guildChannelsVersion: t,
                                      jumpToVoiceChannels: this.jumpToVoiceChannels,
                                      jumpToChannel: this.jumpToChannel,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(r.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()],
                          }),
                }),
        });
    }
}
let sY = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        l = (0, u.bG)([v.A], () => v.A.keyboardModeEnabled),
        { analyticsLocations: a } = (0, R.Ay)(y.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([eq.A], () => eq.A.getChannel(n)),
        h = (0, u.bG)([eq.A], () => eq.A.getChannel(i)),
        A = (0, u.bG)([e8.A], () => e8.A.getGuildId()),
        _ = (0, J.jN)(t),
        g = r.useRef(null),
        m = r.useCallback((e, t) => {
            let n = g.current;
            null != n &&
                (F.Ut1.test(t) || (0, es.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        p = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        f = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        E = (0, c.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: l,
            setFocus: m,
            scrollToStart: p,
            scrollToEnd: f,
        }),
        C = E.setFocus;
    r.useEffect(() => {
        null != n && C(n);
    }, [n, C]);
    let x = (function (e) {
        let [t] = (0, u.bG)(
            [e$.A, eq.A, ez.A],
            () => {
                let t;
                return [
                    (t =
                        e === F.YYv
                            ? eZ.default
                                  .keys(ez.A.getFavoriteChannels())
                                  .map((e) => eq.A.getChannel(e))
                                  .filter(eQ.Vq)
                                  .filter((e) => e.isGuildStageVoice())
                            : e$.A.getChannels(e)).reduce((e, t) => {
                        let n = e$.A.getMutableParticipants(t.id, e0.ip.SPEAKER);
                        return (e[t.id] = n.filter((e) => e.type === e0.wY.VOICE).map(e1)), e;
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + e$.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            eJ.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(R.f5, {
        value: a,
        children: (0, s.jsx)(T.A, {
            section: F.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsx)(d.hD, {
                navigator: E,
                children: (0, s.jsx)(sK, {
                    ...e,
                    listNavigator: E,
                    ref: g,
                    selectedChannel: o,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: x,
                    selectedGuildId: A,
                    optInEnabled: _,
                }),
            }),
        }),
    });
};
function sz(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, tn.D)(),
        { density: i } = (0, f.wR)();
    return n
        ? (0, s.jsx)("div", {
              className: t4.XG,
              children: (0, s.jsxs)(E.B, {
                  gap: 8,
                  children: [
                      (0, s.jsxs)(E.B, {
                          gap: 8,
                          padding: { top: 16, right: 16, bottom: 0, left: 16 },
                          fullWidth: !1,
                          children: [
                              (0, s.jsx)(C.D, {
                                  variant: "heading-md/semibold",
                                  children: W.intl.string(sF.default["1n0TGE"]),
                              }),
                              (0, s.jsx)(x.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: W.intl.string(sF.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", { className: t4.ts }),
                      (0, s.jsxs)("div", {
                          className: t4.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, s.jsxs)("div", {
                                  className: t4.pS,
                                  children: [
                                      (0, s.jsx)(I.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t4.Qs }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: t4.pS,
                                  children: [
                                      (0, s.jsx)(b.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t4.iR }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: t4.pS,
                                  children: [
                                      (0, s.jsx)(S.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t4.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, s.jsx)(sY, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: i });
}
function sq(e) {
    let t = (function (e) {
            var t;
            let n,
                i,
                l =
                    ((t = e.id),
                    (n = (0, t_.A)(t)),
                    (i = (0, tg.Ay)(t)),
                    !(0, u.bG)([tA.A], () => {
                        if (null == t) return !1;
                        let e = tA.A.getGuild(t);
                        return e?.features.has(F.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || i.length > 0)),
                s = (0, tr.W)(e.id),
                r = (0, th.vz)(e.id),
                a = (0, ts.r)(e),
                o = (0, tE.jz)(e),
                d = (0, tc.d)(e.id),
                c = (0, tl.bG)([to.h], () => to.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tu.A)(e.id),
                A = (0, td.jY)(e.id),
                _ = (0, ta.fw)(e.id),
                g = [],
                m = e.features.has(F.GuildFeatures.HUB),
                p = e.features.has(F.GuildFeatures.COMMUNITY),
                f = e.features.has(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                E = (0, ek.A)(e.id);
            tf.useConfig({ location: "useGuildActionRows" }).enabled;
            let C = eB(e),
                x = (0, tm.C$)(e.id, "useGuildActionRows"),
                I = e.features.has(F.GuildFeatures.GAME_SERVERS),
                b = (0, tp.N)("useGuildActionRows"),
                [S] = (0, ei.kn)(x && b && !I ? [O.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                m && g.push(tC.n.GUILD_HUB_HEADER_OPTIONS),
                !A && d && h && null != c && c.length > 0
                    ? g.push(tC.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && C > 0 && g.push(tC.n.GUILD_PREMIUM_PROGRESS_BAR),
                !m && d && g.push(tC.n.GUILD_HOME),
                l && g.push(tC.n.GUILD_SCHEDULED_EVENTS),
                !m && p && g.push(tC.n.CHANNELS_AND_ROLES),
                r && g.push(tC.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && g.push(tC.n.GUILD_SHOP),
                o && g.push(tC.n.GUILD_GAME_SHOP),
                ((_ && (p || f)) || (s && e.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    g.push(tC.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                E && g.push(tC.n.GUILD_BOOSTS),
                x && (I ? g.push(tC.n.GAME_SERVERS) : null != S && g.push(tC.n.GAME_SERVERS_EMPTY)),
                g
            );
        })(e.guild),
        n = (0, u.cf)([tt.A], () => tt.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: i } = (0, f.wR)();
    return (0, s.jsx)(sY, { ...e, ...n, density: i });
}
