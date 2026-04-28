n.d(t, { B: () => sq, T: () => sY }), n(321073);
var l,
    i,
    s = n(627968),
    r = n(64700),
    a = n(735438),
    o = n.n(a),
    d = n(837381),
    c = n(887129),
    u = n(17928),
    h = n(661531),
    A = n(715828),
    g = n(312138),
    m = n(475825),
    p = n(707554),
    f = n(140735),
    C = n(38021),
    E = n(331322),
    x = n(534514),
    N = n(834730),
    S = n(276293),
    _ = n(983851),
    I = n(534890),
    b = n(951001),
    G = n(820284),
    v = n(775602),
    R = n(793574),
    j = n(688810),
    M = n(915089),
    y = n(5180),
    T = n(554146),
    L = n(177953),
    U = n(777666),
    D = n(533550),
    P = n(624458),
    O = n(844944),
    V = n(513461),
    w = n(663997),
    H = n(652793),
    B = n(576705),
    k = n(221950),
    F = n(652215),
    K = n(985018);
function z(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([B.A], () => B.A.can(F.xBc.KICK_MEMBERS, t)),
        i = (0, u.bG)([O.A], () => O.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = l ? (i ?? 0) : 0;
    r.useEffect(() => {
        l &&
            t.features.has(F.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            P.A.fetchGuildJoinRequests({ guildId: t.id, status: V.B5.SUBMITTED, limit: w.L });
    }, [l, t]);
    let o = r.useCallback(() => {
            (0, k.aZ)(t.id);
        }, [t.id]),
        d = (0, D.q8)(t.id, T.M.MEMBERS_LAUNCH_UPSELL);
    return (0, s.jsx)("div", {
        ref: d,
        children: (0, s.jsx)(H.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(L.n, { size: "md", color: "currentColor", className: e }),
            text: K.intl.string(K.t.oclz3Z),
            selected: n,
            onClick: o,
            trailing: a > 0 ? (0, s.jsx)(U.hV, { count: a }) : null,
        }),
    });
}
var W = n(581007),
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
    el = n(932001),
    ei = n(976860),
    es = n(746080),
    er = n(49999),
    ea = n(576709),
    eo = n(494352),
    ed = n(907305);
let ec = r.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [i, a] = (0, el.ww)([T.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === T.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            a(er.i.USER_DISMISS), (0, ei.pX)(F.BVt.CHANNEL(t, es.VV.GAME_SERVERS));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, $.openModalLazy)(async () => {
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
                    children: (0, s.jsx)(Q.m, {
                        text: K.intl.string(K.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(ee.D, {
                            onClick: c,
                            "aria-label": K.intl.string(K.t.fgq1gs),
                            children: (0, s.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: ed.yW,
                        children: (0, s.jsx)(U.Lp, {
                            disableColor: !0,
                            text: K.intl.string(K.t.y2b7CA),
                            className: eo.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(H.G, {
        className: ed.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(en._, { size: "md", className: e, color: "currentColor" }),
        text: K.intl.string(ea.default.vCzwM7),
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var eu = n(361158),
    eh = n(186111),
    eA = n(166978),
    eg = n(658809);
let em = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, $.useHasAnyModalOpen)(),
        i = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        a = (0, eu.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, el.ww)([T.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === T.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, el.ww)(l || i || a || !c ? [] : [T.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = r.useCallback(
            (e) => {
                d(e), A(e);
            },
            [d, A],
        ),
        m = r.useCallback(() => {
            g(er.i.USER_DISMISS), (0, ei.pX)(F.BVt.CHANNEL(t, es.VV.GAME_SERVERS));
        }, [t, g]),
        p = r.useRef(null),
        f = h === T.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(eA.mn, { channelRowRef: p, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(H.G, {
                ref: p,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, s.jsx)(en._, { size: "md", className: e, color: "currentColor" }),
                text: K.intl.string(ea.default.vCzwM7),
                selected: n,
                onClick: m,
                trailing: c
                    ? (0, s.jsx)(U.Lp, { disableColor: !0, text: K.intl.string(K.t.y2b7CA), className: eg.q })
                    : null,
            }),
            f && C(),
        ],
    });
});
var ep = n(503698),
    ef = n.n(ep),
    eC = n(695366),
    eE = n(104510),
    ex = n(544048),
    eN = n(942975),
    eS = n(379229),
    e_ = n(941030),
    eI = n(828162),
    eb = n(853513),
    eG = n(738247);
function ev(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eS.cD.WARNING:
            return (0, s.jsx)(eC.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case eS.cD.UNREAD:
            return (0, s.jsx)(U.hV, { count: t.count, color: h.A.colors.BACKGROUND_MOD_STRONG.css });
        default:
            return null;
    }
}
let eR = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    ej = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, e_.Ay)(t),
            a = r.useCallback(() => {
                (0, eN.Zm)(t),
                    (0, eI.A)(t, R.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(er.i.INDIRECT_ACTION);
            }, [t, i]),
            o = r.useRef(null),
            d = (0, $.useModalsStore)($.hasAnyModalOpenSelector),
            c = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
            h = (0, eu.xr)((e) => e.fullScreenLayers.length > 0),
            A = d || c || h,
            g = r.useCallback(() => {
                if (i?.popout == null || A) return null;
                switch (i?.popout?.type) {
                    case eS.o.LEVEL_REACHED:
                        return (0, s.jsx)(eA.HW, { guildId: t, channelRowRef: o, ...i.popout });
                    case eS.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(eA.UB, { guildId: t, channelRowRef: o, ...i.popout });
                    case eS.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(eA.lw, { guildId: t, channelRowRef: o, ...i.popout });
                    case eS.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(eA.bo, { guildId: t, channelRowRef: o, ...i.popout });
                    case eS.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(eA.Gw, { guildId: t, channelRowRef: o, ...i.popout });
                    case eS.o.EXPIRING_PERK:
                        return (0, s.jsx)(eA.Mr, { guildId: t, channelRowRef: o, ...i.popout });
                    case eS.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eS.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(eA.jz, { guildId: t, channelRowRef: o, ...i.popout });
                    case eS.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(eA.YX, { guildId: t, channelRowRef: o, ...i.popout });
                    case eS.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(eA.Ns, { guildId: t, channelRowRef: o, ...i.popout });
                    default:
                        return (0, s.jsx)("div", {});
                }
            }, [t, i?.popout, o, A]),
            [m, p] = r.useState(null);
        r.useEffect(() => {
            i?.popout == null && p(null);
        }, [i?.popout]);
        let f = r.useCallback((e) => {
            p(e);
        }, []);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(H.G, {
                    ref: o,
                    className: eG.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eE._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        i?.popout != null &&
                        (0, s.jsx)("div", {
                            className: eG.Fi,
                            children: (0, s.jsx)(ex.t, {
                                nextScene: null == m ? "animation" : "LOOP",
                                className: eG.UU,
                                sceneSegments: eR,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: f,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: ef()({ [eG.A7]: i?.showUnread === !0 }),
                        children: K.intl.string(eb.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: a,
                    showUnread: i?.showUnread === !0,
                    trailing: (0, s.jsx)(ev, { indicator: i?.indicator }),
                }),
                g(),
            ],
        });
    });
var eM = n(123924),
    ey = n(717421),
    eT = n(442433),
    eL = n(230135),
    eU = n(228366);
let eD = {};
class eP extends u.Ay.PersistedStore {
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
let eO = new eP(eU.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
        let { guildId: t, premiumCount: n } = e;
        eD = { ...eD, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        eD = {};
    },
});
var eV = n(147925),
    ew = n(363487),
    eH = n(568065);
function eB(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(F.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : F.M2T[F.TVA.TIER_3],
            n = Object.values(eH.sy),
            l = Object.values(eH.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var ek = n(424460);
let eF = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, ey.z)(
            () => ({ width: n === i ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, i],
        );
    return (
        r.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, s.jsxs)("div", {
            ref: t,
            className: ek.hQ,
            children: [
                (0, s.jsx)("div", { className: ef()(ek.L$, a) }),
                (0, s.jsx)(eM.animated.div, { className: ef()(ek.qB, { [ek.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: ek.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: ek.Ui,
                            children: [
                                (0, s.jsx)(N.E, {
                                    className: ek.Qq,
                                    variant: "text-xs/semibold",
                                    children: K.intl.string(eb.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(N.E, {
                                        className: ek.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ek.Ui,
                            children: [
                                (0, s.jsx)(N.E, {
                                    className: ef()(ek.Qq, ek.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? K.intl.formatToPlainString(eb.default["Ehpq+7"], { appliedBoostCount: n })
                                        : K.intl.formatToPlainString(eb.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, s.jsx)(eV.A, {
                                    width: 12,
                                    height: 12,
                                    direction: eV.A.Directions.RIGHT,
                                    className: ef()(ek.Qq, ek.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function eK(e) {
    let { guild: t, withMargin: l } = e,
        i = eB(t),
        a = (0, ew.A)(t.id),
        o = r.useCallback(() => {
            (0, eI.A)(t.id, R.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([eO], () => eO.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, eL.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, eT.L3)(e, async () => {
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
        className: ef()(ek.kL, { [ek.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(eF, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function ez(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(eK, { guild: t, withMargin: n });
}
eF.displayName = "GuildPowerupsProgressBarUI";
var eW = n(455234),
    eY = n(181079),
    eq = n(734057),
    eX = n(607567),
    eZ = n(403362),
    eJ = n(996439),
    e$ = n(935208),
    eQ = n(63995),
    e0 = n(69407);
function e1(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, eX.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var e3 = n(787541),
    e2 = n(79858),
    e9 = n(591346),
    e5 = n(769022),
    e7 = n(95701),
    e6 = n(72314),
    e8 = n(808728),
    e4 = n(967198),
    te = n(32603),
    tt = n(960755),
    tn = n(866842),
    tl = n(633965),
    ti = n(702841),
    ts = n(41200),
    tr = n(496767),
    ta = n(134413),
    to = n(701785),
    td = n(101611),
    tc = n(473529),
    tu = n(978165),
    th = n(960253),
    tA = n(71393),
    tg = n(770666),
    tm = n(508654),
    tp = n(488803),
    tf = n(969117);
let tC = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tE = n(871123),
    tx = n(281405),
    tN = n(3026),
    tS = n(821609),
    t_ = n(187322),
    tI = n(847374),
    tb = n(499373),
    tG = n(285796),
    tv = n(914430),
    tR = n(913247),
    tj = n(639627),
    tM = n(686956),
    ty = n(999903),
    tT = n(544169),
    tL = n(422258),
    tU = n(770376),
    tD = n(924985),
    tP = n(769765);
n(667532);
var tO = n(111613);
function tV(e, t) {
    return null != e && null != t && (e === t || ((0, e7.tr)(e) && (0, e7.tr)(t)) || ((0, e7.ay)(e) && (0, e7.ay)(t)));
}
function tw(e, t, n, l) {
    let i = -1;
    if (
        (l.find((e, n) => {
            let { channel: l } = e;
            return l.id === t && ((i = n), !0);
        }),
        i < 0)
    )
        return null;
    for (let t = i; t >= 0 && t < l.length; t += e) {
        let e = l[t];
        if (tV(e.channel.type, n)) return e;
    }
    return null;
}
function tH(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let l = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: l },
                } = t;
                return null != e && (n || tV(e.type, l));
            })
            .find((t, n) => {
                let {
                    channel: { id: i },
                } = t;
                return null != e && i === e.id && ((l = n), !0);
            }),
        l
    );
}
function tB(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function tk(e, t, n, l, i) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = F.rbe;
    if (e.type === s)
        return l === t || (l < t && e.type === n.type)
            ? tB(n)
            : l > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: l } = F.rbe,
                        i = n[(tH(t, n, !0) ?? 0) + 1],
                        s = tw(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, i)
              : null;
    if (tV(e.type, n.type)) return tB(n);
    if (l < t) {
        let t, l;
        if (n.type === s) {
            let t = i[(tH(n, i, !0) ?? 0) - 1],
                l = tw(1, n.id, e.type, i);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != l) {
                if (tV(t.channel.type, e.type) || (e.isGuildVocal() && (0, e7.tr)(t.channel.type)))
                    return { referenceId: l.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = i[(tH(n, i, !0) ?? 0) - 1]),
            (l = tw(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, e7.tr)(e.type) && null != l && ((0, e7.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: l.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != l ? l.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = i[(tH(n, i, !0) ?? 0) + 1],
            l = tw(-1, n.id, e.type, i);
        if (null != l) {
            if (null == t) return { referenceId: l.channel.id, parentId: n.id };
            if (tV(t.channel.type, e.type) || ((0, e7.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: l.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = i[(tH(n, i, !0) ?? 0) + 1],
        a = tw(-1, n.id, e.type, i);
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
let tK = "DRAGGABLE_GUILD_CHANNEL";
function tz(e, t) {
    if (null == e || null == t) return null;
    if (!(0, y.ai)(e)) return eq.A.getChannel(t);
    let n = e8.Ay.getChannels(e),
        l =
            n[e8.I6].find((e) => e.channel.id === t) ??
            n[e8.vM].find((e) => e.channel.id === t) ??
            n[F.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function tW(e) {
    return (0, tR.T)(
        tK,
        {
            drop(e, t) {
                let n,
                    l = e4.A.getGuildId(),
                    i = t.getItem(),
                    r = tk(tz(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == r) return;
                let a = tz(l, i.id);
                if (null == a) return;
                let o = tP.A.getCategories(l),
                    d = tA.A.getGuild(l);
                if (null == d) return;
                let c = (function (e, t, n, l) {
                    let i,
                        s,
                        r = [],
                        a = [],
                        o = l._categories,
                        d = (t) => {
                            var n, l;
                            let a;
                            return (
                                (a =
                                    null == i ||
                                    null == s ||
                                    ((n = i),
                                    (l = s),
                                    +(null == n || null == l || null == t[n] || t[n].channel !== e || null == t[l]))
                                        ? [...t]
                                        : tO.Ay.moveItemFromTo(t, i, s)),
                                (r = r.concat(
                                    tO.Ay.calculatePositionDeltas({
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
                        (i = tH(e, n)), (s = tH(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, e7.tr)(e.type) || e.isCategory()) {
                        let n = (0, ty.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, e7.tr)(t);
                        });
                        (i = tH(e, n)), (s = tH(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, ty.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (i = tH(e, n)), (s = tH(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, tz(l, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, y.ai)(l)) return void (0, tL.zN)(c);
                    if (
                        ((c = c.filter((e) => {
                            let { id: t } = e,
                                n = eq.A.getChannel(t);
                            if (null == n) return !1;
                            let l = eq.A.getChannel(n.parent_id);
                            return n.type === F.rbe.GUILD_CATEGORY || null == l
                                ? B.A.can(F.xBc.MANAGE_CHANNELS, d)
                                : B.A.can(F.xBc.MANAGE_CHANNELS, l);
                        })),
                        a.parent_id !== r.parentId &&
                            c.find((e) => {
                                if (e.id !== a.id) return !1;
                                let t = eq.A.getChannel(e.parent_id);
                                if (!(null != t && B.A.can(F.xBc.MANAGE_ROLES, a) && B.A.can(F.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let l = tF.r(a, t),
                                    i = tF.r(a, eq.A.getChannel(a.parent_id));
                                return ((null != a.parent_id || l) && (!i || l)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = eq.A.getChannel(n.parent_id);
                        null != e &&
                            (0, $.openModal)((t) =>
                                (0, s.jsx)(tT.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), tM.A.batchChannelUpdate(l, c));
                                    },
                                    onCancel: () => {
                                        null != n && tM.A.batchChannelUpdate(l, c);
                                    },
                                }),
                            );
                    } else tM.A.batchChannelUpdate(l, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    l = eq.A.getChannel(n.id);
                if (null == l) return !1;
                let i = tk(eq.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if ((0, y.ai)(e4.A.getGuildId())) return !0;
                let s = tA.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = eq.A.getChannel(i.parentId),
                    a = eq.A.getChannel(l.parent_id),
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
        (0, tj.I)(
            tK,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, y.ai)(e4.A.getGuildId())) return !0;
                    let l = tA.A.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, J.WW)(l.id) && B.A.can(F.xBc.MANAGE_CHANNELS, l))
                        return (
                            (0, tU.A)() &&
                                (0, $.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                        n.bind(n, 354643),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === F.rbe.GUILD_CATEGORY) return B.A.can(F.xBc.MANAGE_CHANNELS, l) && !(0, J.WW)(l.id);
                    let i = eq.A.getChannel(t.parent_id);
                    return (
                        (null != i && B.A.can(F.xBc.MANAGE_CHANNELS, i)) ||
                        (null == i && B.A.can(F.xBc.MANAGE_CHANNELS, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: l, type: i },
                            position: s,
                        } = e,
                        r = e4.A.getGuildId(),
                        a = tP.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: i,
                        channelList: (0, ty.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === F.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, y.ai)(r) ||
                                      (B.A.can(F.xBc.MANAGE_CHANNELS, t) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                                : !tD.A.isCollapsed(t.parent_id);
                        }),
                        guildId: l,
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
let tQ = tW(
        r.memo(function (e) {
            let t,
                {
                    channel: l,
                    connectChannelDragSource: i,
                    connectChannelDropTarget: a,
                    disableManageChannels: o,
                    position: c,
                    sortingPosition: h,
                    hideIcon: A,
                    children: g,
                } = e,
                m = (0, u.bG)([tX.Ay], () => tX.Ay.isChannelMuted(l.getGuildId(), l.id)),
                p = (0, u.bG)([tD.A], () => tD.A.isCollapsed(l.id)),
                f = (0, u.bG)([B.A], () => B.A.can(F.xBc.MANAGE_CHANNELS, l)),
                C = (0, tY.Ay)(l);
            t = null != h ? (c > h ? tJ.mU : tJ.TR) : tJ.fx;
            let E = r.useCallback(() => {
                    p ? (0, tv.fh)(l.id) : (0, tv.Gv)(l.id);
                }, [l.id, p]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = tA.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, eT.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("26132"),
                                        n.e("91763"),
                                        n.e("38730"),
                                        n.e("35321"),
                                        n.e("50033"),
                                        n.e("3998"),
                                        n.e("30997"),
                                        n.e("12255"),
                                        n.e("40959"),
                                        n.e("79995"),
                                        n.e("91377"),
                                        n.e("35723"),
                                        n.e("12520"),
                                        n.e("18733"),
                                    ]).then(n.bind(n, 71132));
                                    return (n) => (0, s.jsx)(e, { ...n, channel: l, guild: t });
                                });
                        }
                    },
                    [l],
                ),
                N = r.useCallback(() => {
                    let e = l.type === F.rbe.GUILD_CATEGORY ? null : l.type,
                        t = l.getGuildId();
                    null != t &&
                        (0, $.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("63397"),
                                n.e("11585"),
                                n.e("3589"),
                                n.e("89916"),
                                n.e("60773"),
                                n.e("8018"),
                                n.e("20379"),
                                n.e("19193"),
                                n.e("7775"),
                                n.e("37038"),
                                n.e("58608"),
                                n.e("9431"),
                            ]).then(n.bind(n, 113194));
                            return (n) =>
                                (0, s.jsx)(i, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== l.id ? l.id : null,
                                });
                        });
                }, [l]),
                { role: S, tabIndex: _, ...I } = (0, d.rm)(l.id),
                b = r.useRef(null),
                G = r.useRef(null),
                v = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(t_.vN, {
                            focusTarget: b,
                            ringTarget: G,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: G,
                                className: ef()(tJ.Ki, tJ.iE, { [tJ.yZ]: p, [tJ.SU]: m, [tJ.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(ee.D, {
                                        innerRef: b,
                                        className: tJ.rb,
                                        tabIndex: _,
                                        ...I,
                                        onClick: E,
                                        "aria-label": K.intl.formatToPlainString(K.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !p,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(tq.A, {
                                                className: tJ.UU,
                                                children: (0, s.jsx)(tN.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(tI.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: tJ.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t$,
                                        className: tJ.Y_,
                                        children:
                                            f && !o
                                                ? (0, s.jsx)(Q.m, {
                                                      text: K.intl.string(K.t["fUYU+j"]),
                                                      children: (0, s.jsx)(ee.D, {
                                                          className: ef()(tJ.c9, tJ.ih),
                                                          onClick: N,
                                                          tabIndex: _,
                                                          role: "button",
                                                          "aria-label": K.intl.string(K.t["fUYU+j"]),
                                                          children: (0, s.jsx)(tb.T, {
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
                        g,
                    ],
                });
            return null != a && null != i ? a(i(v)) : v;
        }),
    ),
    t0 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: ef()(l, tJ.fx),
            children: (0, s.jsxs)("div", {
                className: ef()(tJ.Ki, tJ._V),
                children: [
                    (0, s.jsx)("div", {
                        className: tJ.rb,
                        children: (0, s.jsx)(tq.A, { className: tJ.UU, children: (0, s.jsx)(tN.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(Q.m, {
                              asContainer: !0,
                              text: K.intl.string(K.t["5qNmsU"]),
                              children: (0, s.jsx)(ee.D, {
                                  className: tJ.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tG.a, { size: "md", color: "currentColor", className: tJ.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t1 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([tZ.A], () => tZ.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), eU.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), eU.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: tJ.oA,
            children: (0, s.jsx)(tS.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: _.H,
                text: n ? K.intl.string(K.t["/eB9Bg"]) : K.intl.string(K.t.Q2gPWl),
            }),
        });
    }),
    t3 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([tZ.A], () => tZ.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === F.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: tJ.fx,
                      children: (0, s.jsx)("div", {
                          className: ef()(tJ.Ki, tJ._V),
                          children: (0, s.jsx)(tq.A, {
                              className: tJ.UU,
                              children: (0, s.jsx)(tN.A, { children: K.intl.string(K.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    t2 = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, tY.Ay)(t);
        return (0, s.jsx)("li", {
            className: tJ.fx,
            children: (0, s.jsx)("div", {
                className: ef()(tJ.Ki, tJ._V),
                children: (0, s.jsx)(tq.A, { className: tJ.UU, children: (0, s.jsx)(tN.A, { children: n }) }),
            }),
        });
    });
var t9 = n(728321),
    t5 = n(244083);
let t7 = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var t6 = n(121880);
let t8 = r.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: l,
            guildChannelsVersion: i,
            selectedChannelId: a,
            disableManageChannels: o,
        } = e,
        d = r.useCallback(() => {
            let e = l.getCategoryFromSection(l.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            null != a && i.includes(a) && (t = (0, Z.xb)(l)), (0, Z.DD)(n.id, i, t);
        }, [n.id, a, l, i]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case te.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case te.bK:
            if (n.features.has(F.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case te.HP:
            return (0, s.jsx)(t0, { name: K.intl.string(K.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(t0, { name: K.intl.string(K.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: t6.ts }), (0, s.jsx)(t3, { category: e, channel: n })],
            });
        }
        case te.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(tQ, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(t9.A, {
                    inlineSpecs: t7,
                    arrowAlignment: t5.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(tQ, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var t4 = n(104171),
    ne = n(186369),
    nt = n(970812),
    nn = n(147036),
    nl = n(349828);
function ni(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === te.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tx.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === te.PU ||
                (e.id === nl.Vc
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
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(t1, { category: l });
    }),
    nr = r.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: l,
                voiceStates: i,
                guildId: a,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => ni(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === te.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, J.jN)(a),
            { enableWaveformIcon: p } = (0, ne.b)(a, "ChannelListSectionFooter"),
            f = (0, u.yK)([tX.Ay], () => {
                if (null == g || !g.isCollapsed || !A) return [];
                let e = g.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = tX.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!m || e) && t.push(n);
                }
                return t;
            }, [g, A, a, m]),
            C = r.useMemo(
                () => (0, nn.fK)({ channels: f, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [f, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(ns, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: t6.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: t6.qz,
                          children: (0, s.jsx)(t4.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: p
                                  ? (e) => (0, s.jsx)(nt.A, { color: "currentColor", className: ef()(e, ed.Gj) })
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
    ng = n(446600),
    nm = n(616356);
function np(e, t, n) {
    return null != t && !!t && !tV(n, e.type);
}
function nf(e, t) {
    return null == t ? ed.fx : e > t ? ed.mU : ed.TR;
}
function nC(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: i, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [B.A, e4.A],
        () =>
            n ||
            (0, y.ai)(e4.A.getGuildId()) ||
            (!B.A.can(F.xBc.MANAGE_CHANNELS, t) &&
                !B.A.can(F.xBc.MANAGE_ROLES, t) &&
                !B.A.can(F.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, e7.tr)(t.type) && !B.A.can(F.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !B.A.can(F.xBc.CONNECT, t)) ||
            !e7.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(Q.m, {
              asContainer: !0,
              text: K.intl.string(K.t["3gUsJb"]),
              children: (0, s.jsx)(ee.D, {
                  className: ef()(ed.Xs, i ? ed.Tf : void 0, r ? ed.bw : ed.UI),
                  onClick: function () {
                      nc.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": K.intl.string(K.t["3gUsJb"]),
                  children: (0, s.jsx)(na.Z, { size: "xs", color: "currentColor", className: ed.gE }),
              }),
          });
}
function nE(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([tA.A], () => tA.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([ng.A], () => ng.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nu.Ay], () => nu.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([B.A], () => (0, nh.K)(B.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === F.rbe.GUILD_VOICE ? K.intl.string(K.t["EE+P0H"]) : K.intl.string(K.t["0jeAXt"]),
        ),
        p = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let f = (0, s.jsx)(no.R, { size: "xs", className: ed.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (f = (0, s.jsx)(t9.A, {
                childRef: p,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: p, children: f }),
            })),
        (0, s.jsx)(Q.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(ee.D, {
                className: ef()(ed.Xs, o ? ed.Tf : void 0, d ? ed.bw : ed.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nm.A.getAllActiveStreams().filter(
                            (e) => e.state !== F.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, $.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("36685"),
                                n.e("59957"),
                                n.e("28136"),
                                n.e("16084"),
                                n.e("22547"),
                            ]).then(n.bind(n, 1310));
                            return (n) =>
                                (0, s.jsx)(l, {
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
                "aria-label": m,
                children: f,
            }),
        })
    );
}
function nx(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Q.m, {
        asContainer: !0,
        text: K.intl.string(K.t["ROh4T+"]),
        children: (0, s.jsx)(ee.D, {
            className: ed.Xs,
            onClick: () => {
                (0, nA.Ol)(t.guild_id, t.id);
            },
            "aria-label": K.intl.string(K.t["ROh4T+"]),
            children: (0, s.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
function nN(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Q.m, {
        asContainer: !0,
        text: K.intl.string(K.t["N2c/Un"]),
        children: (0, s.jsx)(ee.D, {
            className: ed.Xs,
            onClick: () => {
                (0, nA.jA)(t.guild_id, t.id, !0, { section: F.JJy.CHANNEL_LIST });
            },
            "aria-label": K.intl.string(K.t["N2c/Un"]),
            children: (0, s.jsx)(nd.A, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
class nS extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nC, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nE, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nx, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nN, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nf(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return np(e, t, n);
    }
}
var n_ = n(166444),
    nI = n(790782);
let nb = tW(function (e) {
    let {
            guild: t,
            selectedChannelId: l,
            position: i,
            disableManageChannels: a,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: h,
            connectChannelDropTarget: A,
            tabIndex: g,
        } = e,
        m = (0, u.bG)([eq.A, e8.Ay], () => {
            let e = e8.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : eq.A.getChannel(e[0]);
        }),
        p = (0, u.bG)([eq.A], () => eq.A.getChannel(m?.parent_id)),
        f = l === m?.id,
        C = (0, tY.Ay)(m),
        E = (0, u.bG)([B.A], () =>
            null != p ? B.A.can(F.xBc.MANAGE_CHANNELS, p) : null != t && B.A.can(F.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != m &&
                    (0, eT.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("30997"),
                            n.e("79995"),
                            n.e("29559"),
                        ]).then(n.bind(n, 994058));
                        return (t) => (0, s.jsx)(e, { ...t, channel: m });
                    });
            },
            [m],
        );
    if (null == m) return null;
    let N = nf(i, c),
        S = np(m, o, d),
        _ = (0, s.jsx)("div", {
            className: ef()(N, { [ed.r9]: S, [ed.wH]: f }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(n_.Ay, {
                className: ed.Ki,
                channel: m,
                guild: t,
                selected: f,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nI.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nE, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nC, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return E && (_ = A(h(_))), _;
});
var nG = n(34188),
    nv = n(733391),
    nR = n(832163),
    nj = n(44724),
    nM = n(84764),
    ny = n(770178),
    nT = n(206939);
let nL = Math.ceil(Math.sqrt(115200)),
    nU = (nL - 240) / 2,
    nD = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, ny.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, ey.z)(() => ({
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
                let e = (0, s.jsx)(eM.animated.div, {
                    className: nT.q2,
                    style: {
                        transform: d.to(
                            (e) => `translateX(calc(${e * l}px + ${e * nL}px)) translateY(-50%) rotate(45deg)`,
                        ),
                    },
                });
                return n(nT.VU, nT.Qq, nT.Kk, e);
            }, [n, l, d]);
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nT.iE,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nU}px` },
                children: A,
            })
        );
    });
var nP = n(371794),
    nO = n(998218),
    nV = n(645591);
let nw = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, $.useHasAnyModalOpen)(),
        d = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        c = (0, eu.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nv.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nR.A], () => nR.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, p] = (0, el.x_)(T.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        f = m === T.M.GAME_SHOP_NEW_BADGE && null != g,
        [C, E] = (0, el.x_)(T.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        x = C === T.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (f && p(er.i.INDIRECT_ACTION), x && E(er.i.INDIRECT_ACTION));
    }, [p, E, l, f, x]);
    let S = r.useCallback(() => {
            p(er.i.TAKE_ACTION), E(er.i.TAKE_ACTION);
            let e = nR.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, ei.pX)(F.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, p, E]),
        _ = r.useCallback(() => {
            (0, nj.X)({ guildId: t.id, forceFetch: x });
        }, [t.id, x]),
        I = r.useCallback(() => {
            E(er.i.USER_DISMISS);
        }, [E]),
        b = r.useCallback(
            (e) => {
                null != t &&
                    (0, eT.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 819233));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        G = r.useCallback(() => {
            i.current?.onMouseEnter(null, 500);
        }, [i]),
        v = r.useCallback(
            (e, n, i, r) =>
                (0, s.jsx)(H.G, {
                    innerClassName: e,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nG.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: ef()(e, i),
                        }),
                    text: (0, s.jsx)(N.E, {
                        variant: "text-md/medium",
                        className: ef()(nV.UU, n),
                        children: K.intl.string(K.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: _,
                    onClick: S,
                    onContextMenu: b,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            f &&
                                (0, s.jsx)(U.Lp, {
                                    text: K.intl.string(K.t.y2b7CA),
                                    color: h.A.colors.BACKGROUND_BRAND.css,
                                }),
                            r,
                        ],
                    }),
                }),
            [t.id, l, _, S, b, f],
        ),
        R = r.useMemo(() => {
            if (null == g || "guild-application-announcement" !== g.type) return;
            let e = null != g.assetId ? nO.A.toURLSafe((0, nP.YE)(g.applicationId, g.assetId, 128, "webp")) : void 0,
                t =
                    null != g.backgroundImageAssetId
                        ? nO.A.toURLSafe((0, nP.YE)(g.applicationId, g.backgroundImageAssetId, 128, "webp"))
                        : void 0;
            if (null != e) return { imageUrl: e, backgroundImageUrl: t };
        }, [g]),
        j = r.useCallback(() => {
            if (!x || null == g) return null;
            let e = { onActionClick: S, onActionMouseDown: _, onRender: G, onRequestClose: I, targetElementRef: a };
            switch (g.type) {
                case "guild-application-announcement":
                    return (0, s.jsx)(nM.A, {
                        ...e,
                        graphicSource: null != R ? { type: "sku", ...R } : void 0,
                        title: K.intl.string(K.t["7PvvS9"]),
                        body: K.intl.formatToPlainString(K.t["9J4h1a"], { applicationName: g.applicationName }),
                    });
                case "guild-discord-announcement":
                    return (0, s.jsx)(nM.A, {
                        ...e,
                        graphicSource: { type: "asset", src: g.assetFullyQualifiedURL },
                        title: g.popoverTitle,
                        body: g.popoverBody,
                        actionLabel: g.popoverCta,
                    });
            }
        }, [x, g, S, _, G, I, R]);
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nD, { ref: i, children: v }), !o && !d && !c && j()] });
});
var nH = n(740426),
    nB = n(826673),
    nk = n(591552),
    nF = n(202776),
    nK = n(454058),
    nz = n(222823);
function nW(e) {
    let { guild: t, selected: l } = e,
        i = (0, nF.A)(t),
        a = (0, nB.JZ)(T.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, ti.yK)([nK.A], () =>
            Array.from(nK.A.getNewChannelIds(t.id)).filter((e) => nK.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, ti.bG)([nz.Ay], () => nz.Ay.hasUnread(t.id, nI.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > te.rR,
        u = (0, ti.bG)([nk.A, nz.Ay], () => {
            let e = nk.A.lastFetchedAt(t.id),
                n = nz.Ay.lastMessageId(t.id, nI.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = e$.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, i ? es.VV.CUSTOMIZE_COMMUNITY : es.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        g = r.useCallback(
            (e) => {
                (0, eT.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("13446"), n.e("17699"), n.e("30412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        m = null;
    return (
        (a && !d && !c) ||
            l ||
            u ||
            (m = (0, s.jsx)(U.Lp, { color: h.A.colors.BADGE_BACKGROUND_BRAND.css, text: K.intl.string(K.t.y2b7CA) })),
        (0, s.jsx)(H.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(nH.k, { size: "md", color: "currentColor", className: e }),
            text: i ? K.intl.string(K.t.h9mGOP) : K.intl.string(K.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var nY = n(855473);
function nq(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(nY.Z, { size: "md", color: "currentColor", className: e }),
        text: K.intl.string(K.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_HOME));
        },
    });
}
var nX = n(5373),
    nZ = n(65995),
    nJ = n(33011);
function n$(e, t) {
    return (0, s.jsx)(N.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let nQ = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([to.h], () => to.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([nZ.A], () => nZ.A.getCompletedActions(t.id)),
        i = r.useMemo(() => {
            if (null == n || null == l) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != l[t.channelId] && e++;
                }),
                e
            );
        }, [l, n]),
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
                    (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: nJ.A1,
                        children: [
                            (0, s.jsx)(x.D, { variant: "heading-sm/bold", children: K.intl.string(K.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: nJ.Ib,
                                children: [
                                    (0, s.jsx)(N.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: nJ.Cv,
                                        children: K.intl.format(K.t.eqZ1lW, {
                                            numberHook: n$,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(eV.A, {
                                        className: nJ.UE,
                                        width: 16,
                                        height: 16,
                                        direction: eV.A.Directions.RIGHT,
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
                        percent: (i / a) * 100 + 3,
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
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(H.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n0.A, { className: e }),
        text: K.intl.string(K.t["KzCF/6"]),
        selected: l,
        onClick: () => {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: (e) => {
            null != t &&
                (0, eT.L3)(e, async () => {
                    let { default: e } = await n.e("71911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var n3 = n(506774),
    n2 = n(58149),
    n9 = n(289397),
    n5 = n(486418),
    n7 = n(575926),
    n6 = n(440293),
    n8 = n(954571),
    n4 = n(634654),
    le = n(391277);
function lt(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, n6.w)(t),
        r = (0, ti.bG)([tA.A], () => tA.A.getGuild(t)),
        a = r?.features.has(F.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === n3.w.get(n4.bJ, "false"),
        d = (0, ti.bG)([v.A], () => v.A.useReducedMotion);
    return (0, s.jsx)(H.G, {
        id: `shop-${t}`,
        className: ef()(le.A2, { [le.wH]: n, [le.ST]: o }),
        innerClassName: le.LE,
        renderIcon: (e) => (0, s.jsx)(n7.h, { width: 20, height: 20, className: ef()([e, le.sV]) }),
        text: K.intl.string(K.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: le.ai,
            children: [
                d
                    ? (0, s.jsx)(U.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: K.intl.string(K.t.y2b7CA),
                          className: le.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, n9.n)("server_products/storefront/money.gif"),
                          className: le.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(ee.D, {
                        className: le.b,
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, nB.Dr)(T.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                n8.default.track(F.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, n2.H$)(t),
                                    action_taken: n4.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, ei.bG)(F.BVt.CHANNEL(t, e8.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": K.intl.string(K.t.cpT0Cq),
                        children: (0, s.jsx)(tG.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function ln(e) {
    let { guild: t, selected: l } = e,
        i = (0, n5.P)(t),
        r = () => {
            n3.w.set(n4.bJ, "true"), (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_SHOP));
        };
    return i
        ? (0, s.jsx)(lt, { guildId: t.id, selected: l, handleClick: r })
        : (0, s.jsx)(H.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(n7.h, { width: 20, height: 20, className: e }),
              text: K.intl.string(K.t.al5EXL),
              selected: l,
              onClick: r,
              onContextMenu: (e) => {
                  null != t &&
                      (0, eT.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var ll = n(308528),
    li = n(152007),
    ls = n(747926),
    lr = n(977997);
function la(e) {
    return null != e && e > 0;
}
var lo = n(405018),
    ld = n(428689),
    lc = n(852878);
function lu(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lc.iE,
        children: [
            (0, s.jsxs)("span", {
                className: ef()(lc.VV, { [lc.Ki]: l, [lc.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(ld.n, { size: "md", color: "currentColor", className: lc.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)("span", {
                className: ef()(lc.X5, { [lc.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lh(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lo.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(lu, { users: l, total: r, videoLimit: a })
    );
}
var lA = n(701665);
function lg(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lA.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(U.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lm = n(183300),
    lp = n(37411),
    lf = n(998510);
function lC(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: ef()(lf.GI, { [lf.a7]: n }, { [lf.BJ]: l }), style: t },
        { density: r } = (0, C.wR)();
    switch (r) {
        case "cozy":
            return (0, s.jsxs)("svg", {
                ...i,
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
                ...i,
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
                ...i,
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
let lE = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([eX.Ay], () => eX.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lr.A], () => lr.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: g,
                isMentionLowImportance: m,
            } = (0, u.cf)([nz.Ay], () => ({
                unread: nz.Ay.hasUnread(t.id),
                mentionCount: nz.Ay.getMentionCount(t.id),
                isMentionLowImportance: nz.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, u.bG)([li.A], () => li.A.isMuted(t.id)),
            f = r.useCallback(
                (e) => {
                    (0, ls.JA)(t, !e.shiftKey, lp.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                ll.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    let l = eq.A.getChannel(t.id);
                    null != l &&
                        (0, eT.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("91763"),
                                n.e("38730"),
                                n.e("34971"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("91671"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("96804"),
                                n.e("85802"),
                                n.e("65200"),
                                n.e("26250"),
                                n.e("51212"),
                                n.e("84615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, s.jsx)(e, { ...t, channel: l });
                        });
                },
                [t.id],
            ),
            x = null == c ? 0 : c.length,
            { role: N, ...S } = (0, d.rm)(t.id),
            _ = r.useRef(null),
            I =
                g > 0
                    ? K.intl.formatToPlainString(K.t["ZL7+I6"], { channelName: t.name, mentionCount: g })
                    : A
                      ? K.intl.formatToPlainString(K.t.YlVvmc, { channelName: t.name })
                      : K.intl.formatToPlainString(K.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: N,
            className: ef()(ed.fx, { [ed.wH]: l }),
            children: [
                (0, s.jsx)(lC, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lC, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(t_.vN, {
                    focusTarget: _,
                    ringTarget: _,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: ef()(ed.Ki, nV.iE, nV.ZS, {
                            [nV.J1]: l,
                            [nV.F4]: !l && p,
                            [nV.V2]: !p && !l && A,
                            [nV.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: E,
                        children: [
                            !A || p || l ? null : (0, s.jsx)("div", { className: ef()(nV.gy, nV.WS) }),
                            (0, s.jsx)(ee.D, {
                                ...S,
                                innerRef: _,
                                className: nV.nf,
                                onClick: f,
                                "aria-label": I,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: ef()(nV.Y5, nV.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tN.A, { className: nV.UU, "aria-hidden": !0, children: t.name }),
                                        (0, s.jsxs)("div", {
                                            className: nV.Y_,
                                            children: [
                                                x > 0 && t.userLimit > 0
                                                    ? (0, s.jsx)(lh, { userCount: x, video: h, channel: t })
                                                    : null,
                                                la(g)
                                                    ? (0, s.jsx)(lg, { mentionsCount: g, isMentionLowImportance: m })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lm.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lx = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, tY.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([eq.A], () => i.map((e) => eq.A.getChannel(e)).filter(eZ.Vq), [i]),
            c = (0, u.bG)([eX.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = eX.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lf.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": K.intl.formatToPlainString(K.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: ef()(lf.eh, { [lf.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lE,
                            {
                                thread: e,
                                isSelectedChannel: n?.id === e.id,
                                isSelectedVoice: l === e.id,
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
var lN = n(922016),
    lS = n(367513),
    l_ = n(296216),
    lI = n(963027),
    lb = n(202384),
    lG = n(51758),
    lv = n(721592),
    lR = n(139033),
    lj = n(305866),
    lM = n(123292),
    ly = n(830215),
    lT = n(315982),
    lL = n(557722),
    lU = n(834942),
    lD = n(287809),
    lP = n(53516),
    lO = n(725673),
    lV = n(824078),
    lw = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let lH = (e) => {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, M.GV)(),
        {
            notClaimed: a,
            notEmailVerified: o,
            notPhoneVerified: d,
            newAccount: c,
            newMember: h,
        } = (0, u.bG)([lU.A], () => lU.A.getCheck(l), [l]),
        A = 0 === t ? K.intl.string(K.t["6zY8BI"]) : null,
        g = null,
        m = null;
    return (0 === t &&
        (a
            ? ((g = K.intl.string(K.t.IRxUlG)), (m = K.intl.string(K.t.fiNVin)))
            : d
              ? ((g = K.intl.string(K.t.vW8iUF)), (m = K.intl.string(K.t["50gfOv"])))
              : o
                ? ((g = K.intl.string(K.t.vdSOpz)), (m = K.intl.string(K.t.lm1UKt)))
                : h
                  ? ((g = K.intl.formatToPlainString(K.t.v1ktYb, { min: F.$8o.MEMBER_AGE })),
                    (m = K.intl.string(K.t.BddRzS)))
                  : c &&
                    ((g = K.intl.formatToPlainString(K.t.sncw41, { min: F.$8o.ACCOUNT_AGE })),
                    (m = K.intl.string(K.t.BddRzS)))),
    null == A || null == g)
        ? null
        : (0, s.jsxs)(lj.l, {
              className: ef()(lV.popover, lO.kL),
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: lO.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: lO.Qs,
                      children: [
                          (0, s.jsx)(x.D, { variant: "heading-md/semibold", id: r, children: A }),
                          (0, s.jsx)(N.E, { color: "text-default", variant: "text-sm/normal", children: g }),
                          (0, s.jsxs)("div", {
                              className: lO.UD,
                              children: [
                                  null != m
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: lO.FS,
                                            children: (0, s.jsx)(tS.$, {
                                                variant: "primary",
                                                text: m,
                                                onClick: () => {
                                                    a
                                                        ? lT.R()
                                                        : d
                                                          ? (0, $.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("32101"),
                                                                        n.e("45235"),
                                                                        n.e("89545"),
                                                                        n.e("84704"),
                                                                        n.e("86197"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: lL.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: lP.V },
                                                            )
                                                          : o &&
                                                            (ly.A.verifyResend(),
                                                            (0, lR.A)({
                                                                title: K.intl.string(K.t.LykQYk),
                                                                subtitle: K.intl.format(K.t.azKEPy, {
                                                                    email: lD.default.getCurrentUser()?.email,
                                                                }),
                                                            })),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  a || d || o
                                      ? (0, s.jsx)(lM.Q, {
                                            onClick: i,
                                            text: K.intl.string(K.t.oEAioF),
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
var lB = n(824865),
    lk = n(378570),
    lF = n(790535),
    lK = n(113783),
    lz = n(96566),
    lW = n(495544),
    lY = n(312006),
    lq = n(505543),
    lX = n(994500),
    lZ = n(685399),
    lJ = n(475889),
    l$ = n(85451),
    lQ = n(435470),
    l0 = n(35275),
    l1 = n(75879);
function l3(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: ef()(ed.Xs, l1.U),
        children: (0, s.jsx)(l0.A, {
            className: ed.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var l2 = n(695633),
    l9 = n(669715),
    l5 = n(137177),
    l7 = n(999436);
function l6(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: ef()(l7.kL, t, l && l7.F4),
                children: (0, s.jsx)(l5.A, { game: n[0].application, className: l7.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: ef()(l7.kL, t, l && l7.F4),
            children: [
                (0, s.jsx)(l5.A, { game: n[0].application, className: l7.wK }),
                2 === n.length
                    ? (0, s.jsx)(l5.A, { game: n[1].application, className: l7.wK })
                    : (0, s.jsx)(N.E, {
                          className: l7.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function l8(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: l,
            voiceStates: i,
            enableConnectedUserLimit: r,
            enableActivities: a,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: A,
            resolvedUnreadSetting: g,
        } = e,
        m = (0, u.bG)([nz.Ay], () => nz.Ay.getMentionCount(t.id)),
        p = (0, u.bG)([nz.Ay], () => nz.Ay.getIsMentionLowImportance(t.id)),
        f = (0, lZ.Ay)(t),
        C = (0, u.bG)([B.A], () => !B.A.can(F.xBc.CONNECT, t)),
        E = (0, lJ.H)(t),
        x = (0, u.bG)([lr.A], () => lr.A.hasVideo(t.id)),
        S = (0, lz.qT)(t.id) && t.isGuildStageVoice(),
        _ = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lo.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && i > 0 && (s = s > 0 ? Math.min(s, i) : i),
                    l && s === F.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: l }) > 0 &&
                !n &&
                !i
            );
        })({ channel: t, locked: C, video: (x || S) && null == E, selected: n }),
        I = (0, u.bG)([l2.A], () => l2.A.getNewThreadCount(t.guild_id, t.id)),
        b = (0, lQ.ed)(t.guild_id, t.id),
        G = (0, u.bG)([tA.A], () => tA.A.getGuild(t.guild_id)?.features.has(F.GuildFeatures.COMMUNITY) ?? !1);
    if (la(m)) return (0, s.jsx)(lg, { mentionsCount: m, isMentionLowImportance: p });
    if (o) return (0, s.jsx)(l3, { locked: d });
    if (c) return (0, s.jsx)(U.Lp, { text: K.intl.string(K.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nI.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(N.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: K.intl.format(K.t.GkAbqY, { count: (0, U.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != b && b > 0)
        return (0, s.jsx)(N.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, U.Gu)(b) });
    let v = i?.length ?? 0;
    return null != r && r && _
        ? (0, s.jsx)(lh, { userCount: v, video: x || S, channel: t })
        : l && (0, l9.t)(i) && G
          ? (0, s.jsx)(U.Lp, { text: K.intl.string(K.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(l$.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && f.length > 0
              ? (0, s.jsx)(l6, { embeddedApps: f, muted: A })
              : null;
}
var l4 = n(582630);
class ie extends nS {
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
        return (0, nn.Pd)(e, lr.A, tA.A);
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
        let { channel: e, locked: t, connected: n, unverifiedAccount: l, isSuggestedSection: i } = this.props,
            s = e.getGuildId();
        null != s && (0, lG.V)(s) && (0, lb.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, lF.av)(e),
            __OVERLAY__ || (0, lk.iN)(e.id, i ? { source: lB.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, lk.iN)(e.id, n ? { source: lB.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = tA.A.getGuild(t.getGuildId());
        null != l &&
            (0, eT.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("55411"),
                    n.e("93103"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("34971"),
                    n.e("3998"),
                    n.e("9004"),
                    n.e("43266"),
                    n.e("74610"),
                    n.e("30997"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("42339"),
                    n.e("79995"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("12520"),
                    n.e("66540"),
                    n.e("29542"),
                    n.e("19690"),
                    n.e("619"),
                    n.e("26792"),
                    n.e("12052"),
                    n.e("18663"),
                    n.e("99990"),
                    n.e("99854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: i } = this.props;
        return (0, s.jsx)(lm.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(lH, {
                type: lw.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(Q.m, {
                asContainer: !0,
                text: K.intl.string(K.t.ZXxLQg),
                children: (0, s.jsx)(ee.D, {
                    className: ef()(ed.Xs, n ? ed.Tf : null),
                    onClick: () => {
                        lS.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": K.intl.string(K.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: ed.gE }),
                }),
            });
    };
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? K.intl.string(K.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(tN.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: l,
                connectChannelDropTarget: i,
                connectChannelDragSource: r,
                connectUserDropTarget: a,
                connectDragPreview: o,
                canReorderChannel: d,
                canMoveMembers: c,
                stageInstance: u,
                isSubscriptionGated: h,
                needSubscriptionToAccess: A,
                unread: g,
                resolvedUnreadSetting: m,
                mentionCount: p,
                isFavoriteSuggestion: f,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = (0, s.jsxs)("li", {
                className: ef()(this.getModeClass(), { [ed.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tY.m1)(e, lD.default, lX.A),
                children: [
                    (0, s.jsx)(lN.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(Q.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(n_.Ay, {
                                    ref: this.channelItemRef,
                                    className: ed.Ki,
                                    iconClassName: ef()({ [l4.G]: null != u }),
                                    channel: e,
                                    selected: !f && t,
                                    connected: n,
                                    unread: n ? g : void 0,
                                    resolvedUnreadSetting: m,
                                    mentionCount: p,
                                    locked: l,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: o,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: f,
                                    "aria-label": (0, lI.Ay)({
                                        channel: e,
                                        unread: g,
                                        mentionCount: p,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: A,
                                    }),
                                    children: [
                                        f && this.renderAcceptSuggestionButton(),
                                        f && this.renderRemoveSuggestionButton(),
                                        !f && this.renderOpenChatButton(),
                                        !f && this.renderInviteButton(),
                                        !f && this.renderEditButton(),
                                        !f && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return c && (E = a(E)), d && (E = i(r(E))), E;
    }
}
let it = tW((0, l_.F)(ie));
function il(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([nz.Ay], () => ({ unread: nz.Ay.hasUnread(r.id), mentionCount: nz.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([tX.Ay], () => tX.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([eq.A, lU.A, B.A], () => {
            let e = eq.A.getChannel(r.parent_id),
                t = lU.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && B.A.can(F.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    (i.id === nl.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, r),
                locked: !B.A.can(F.xBc.CONNECT, r),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        m = (0, u.bG)([tD.A], () => tD.A.isCollapsed(r.parent_id)),
        p =
            ((t = r.id),
            (n = (0, lq.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([lY.Ay, lW.default], () => {
                    let n = lW.default.getId();
                    return lY.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        f = (0, u.bG)([ng.A], () => ng.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, lK.zy)(r.id, e0.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lv.A)(r.id),
        N = (0, u.bG)([tX.Ay], () => tX.Ay.isFavorite(i.id, r.id)),
        S = (0, lz.xn)(r.id),
        _ = l8({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: S || (r.userLimit > 0 && r.userLimit < F.RCc),
        }),
        I = e.connected && null == _;
    return (0, s.jsx)(it, {
        categoryCollapsed: m,
        connectAction: p,
        numAudience: C,
        stageInstance: f,
        isSubscriptionGated: E,
        needSubscriptionToAccess: x,
        ...h,
        ...g,
        ...e,
        isFavoriteSuggestion: o && !N,
        forceShowButtons: I,
        channelInfo: _,
        resolvedUnreadSetting: A,
    });
}
function ii(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    ll.A.preload(n, t.id);
}
let is = tW(
        class extends nS {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = tA.A.getGuild(t.getGuildId());
                null != l &&
                    (0, eT.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("3998"),
                            n.e("9004"),
                            n.e("30997"),
                            n.e("12255"),
                            n.e("40959"),
                            n.e("79995"),
                            n.e("44058"),
                            n.e("15669"),
                        ]).then(n.bind(n, 313140));
                        return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, ei.pX)(F.BVt.CHANNEL(t, e.id), {
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
                        connectChannelDragSource: l,
                        connectDragPreview: i,
                        canReorderChannel: r,
                    } = this.props,
                    a = (0, s.jsx)("li", {
                        className: ef()(this.getClassName(), { [ed.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tY.m1)(e, lD.default, lX.A),
                        children: (0, s.jsxs)(n_.Ay, {
                            className: ed.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: ii,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lI.Ay)({ channel: e }),
                            resolvedUnreadSetting: nI.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    ir = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([eq.A, B.A], () => {
                let e = eq.A.getChannel(t.parent_id);
                return {
                    canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(is, { ...i, ...e });
    });
var ia = n(172218),
    io = n(811024),
    id = n(323073);
function ic(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: K.intl.string(K.t.Pa817q) };
    }
    return null;
}
var iu = n(414808),
    ih = n(302005),
    iA = n(406704),
    ig = n(696451),
    im = n(763827),
    ip = n(56059),
    iC = n(163328),
    iE = n(778712),
    ix = n(730134),
    iN = n(707539),
    iS = n(486020),
    i_ = n(550837);
function iI(e) {
    let { channel: t } = e,
        l = (0, u.yK)([l2.A, nz.Ay, B.A], () => {
            let e = l2.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(l2.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(l2.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nz.Ay.lastMessageId(e.id),
                        l = nz.Ay.lastMessageId(t.id);
                    return e$.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? ip.b : iC.y;
    return (
        r.useEffect(() => {
            (0, iN.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: ef()(lV.popover, i_.SW),
            children: [
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: i_.DD,
                    children: t.isForumLikeChannel() ? K.intl.string(K.t.ioVdO2) : K.intl.string(K.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: i_.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(ib, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(ee.D, {
                            className: i_.nM,
                            onClick: () => {
                                t.isForumLikeChannel()
                                    ? (0, lk.iN)(t.id)
                                    : (0, $.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("79146"),
                                              n.e("55658"),
                                              n.e("72900"),
                                              n.e("56402"),
                                              n.e("58337"),
                                              n.e("26437"),
                                              n.e("76602"),
                                              n.e("28229"),
                                              n.e("39970"),
                                              n.e("8371"),
                                              n.e("72789"),
                                              n.e("12743"),
                                              n.e("65437"),
                                              n.e("90301"),
                                              n.e("51743"),
                                              n.e("84042"),
                                              n.e("65225"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, s.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, s.jsx)("div", {
                                    className: i_.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: i_.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: i_.Pf,
                                    children: (0, s.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: K.intl.string(K.t["4qdZ93"]),
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
function ib(e) {
    let { thread: t } = e,
        n = (0, u.bG)([lD.default], () => lD.default.getUser(t.ownerId)),
        l = (0, iN.JO)(t);
    return (0, s.jsxs)(ee.D, {
        className: i_.nM,
        onClick: (e) => {
            (0, ls.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lp.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: i_.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: i_.my,
                              src: iS.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(ix.A, { className: i_.my, user: n, size: iE._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: i_.Pf,
                children: [
                    (0, s.jsx)(N.E, { className: i_.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: "•" }),
                    (0, s.jsx)(N.E, {
                        className: i_.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iN.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var iG = n(364522),
    iv = n(302959),
    iR = n(35903),
    ij = n(970928),
    iM = n(427262),
    iy = n(456644);
let iT = t4.DN.SIZE_24;
function iL(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iS.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(Q.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: iy.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, ij.uD)(i, r, [128, 128]), className: iy.P3 })
        : null;
}
function iU(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([lD.default], () => i.map((e) => lD.default.getUser(e)).filter(eZ.Vq));
    return (0, s.jsx)("div", {
        className: iy.ec,
        children: (0, s.jsxs)("div", {
            className: iy.Wh,
            children: [
                (0, s.jsx)(iL, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: iy.X0,
                    children: [
                        (0, s.jsx)(x.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: iy.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(N.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(N.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, s.jsx)(t4.Ay, {
                                className: iy.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: iT,
                                max: 7,
                                renderUser: (e) => {
                                    if (null == e || e === t4.mt) return null;
                                    let t = iM.Ay.getName(e);
                                    return (0, s.jsx)(
                                        Q.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, iT),
                                                alt: t,
                                                className: iy.my,
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
var iD = n(793425);
function iP(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([lD.default], () => lD.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: iD.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: iD.Il,
                      children: (0, s.jsx)(iU, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: iD.M4,
                      children: (0, s.jsx)(iR.A, {
                          type: iv.M.VOICE_CHANNEL,
                          activity: n,
                          embeddedActivity: l.embeddedActivity,
                          user: a,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          buttonVariant: "primary",
                          onAction: i,
                      }),
                  }),
              ],
          });
}
var iO = n(713654),
    iV = n(869552);
function iw(e) {
    let { channel: t } = e,
        n = (0, u.bG)([tA.A], () => tA.A.getGuild(t.guild_id)),
        l = (0, tY.Ay)(t),
        i = (0, iO.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: iV.hY,
              children: [
                  (0, s.jsx)(i, { className: iV.p }),
                  (0, s.jsx)(N.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: iV.HA,
                      children: l,
                  }),
              ],
          });
}
var iH = n(802625);
function iB(e) {
    let { channel: t, onAction: n } = e,
        l = (0, lZ.Ay)(t),
        i = Array.from((0, lZ.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(iG.Ip, {
              className: ef()(lV.popover, iH.kL),
              children: [
                  (0, s.jsx)("div", { className: iH.oT, children: (0, s.jsx)(iw, { channel: t }) }),
                  (0, s.jsx)("div", { className: iH.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          iP,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class ik extends nS {
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
        ll.A.preload(t ?? F.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(iB, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iI, { ...e, channel: this.props.channel });
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
            return void (0, eT.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("34971"),
                    n.e("42339"),
                    n.e("68530"),
                    n.e("12520"),
                    n.e("53416"),
                    n.e("60200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === F.rbe.DM) {
            let l = lD.default.getUser(t.getRecipientId());
            null != l &&
                (0, eT.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("39431"),
                        n.e("31788"),
                        n.e("63397"),
                        n.e("6287"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("34552"),
                        n.e("55411"),
                        n.e("93103"),
                        n.e("91763"),
                        n.e("13708"),
                        n.e("8757"),
                        n.e("89673"),
                        n.e("91007"),
                        n.e("68403"),
                        n.e("85968"),
                        n.e("60195"),
                        n.e("88342"),
                        n.e("29787"),
                        n.e("97558"),
                        n.e("94000"),
                        n.e("42451"),
                        n.e("91994"),
                        n.e("38730"),
                        n.e("98965"),
                        n.e("76665"),
                        n.e("35313"),
                        n.e("76273"),
                        n.e("36564"),
                        n.e("86169"),
                        n.e("34971"),
                        n.e("792"),
                        n.e("45996"),
                        n.e("92822"),
                        n.e("23427"),
                        n.e("29422"),
                        n.e("9291"),
                        n.e("74610"),
                        n.e("38056"),
                        n.e("63071"),
                        n.e("7059"),
                        n.e("8829"),
                        n.e("86697"),
                        n.e("96553"),
                        n.e("24240"),
                        n.e("42339"),
                        n.e("16054"),
                        n.e("98199"),
                        n.e("41175"),
                        n.e("39778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, s.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, eT.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("34971"),
                    n.e("43266"),
                    n.e("30997"),
                    n.e("79995"),
                    n.e("78580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, s.jsx)(e, { ...n, channel: t });
            });
        let l = tA.A.getGuild(t.getGuildId());
        null != l &&
            (0, eT.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("34971"),
                    n.e("3998"),
                    n.e("9004"),
                    n.e("43266"),
                    n.e("30997"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("42339"),
                    n.e("79995"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("12520"),
                    n.e("66540"),
                    n.e("29542"),
                    n.e("12052"),
                    n.e("25173"),
                ]).then(n.bind(n, 468916));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
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
                muted: l,
                unread: i,
                hasActiveThreads: r,
                hasMoreActiveThreads: a,
                mentionCount: o,
                connectChannelDropTarget: d,
                connectChannelDragSource: c,
                connectDragPreview: u,
                canReorderChannel: h,
                isSubscriptionGated: A,
                isFavoriteSuggestion: g,
                subtitle: m,
                forceTopLevelThread: p,
                embeddedApps: f,
                resolvedUnreadSetting: C,
                enableActivities: E,
                showMenuItemPopover: x,
                markMenuItemPopoverAsDismissed: N,
                channelItemRef: S,
                isSuggestedSection: _,
            } = this.props,
            I = S ?? this.channelItemRef,
            b = !x && a,
            G = !x && E && null != f && f.length > 0,
            v = ic(m),
            R = (0, s.jsxs)("li", {
                className: ef()(this.getClassName(), { [ed.r9]: this.isDisabled(), [ed.wH]: n }),
                "data-dnd-name": (0, tY.m1)(e, lD.default, lX.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lN.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(n_.Ay, {
                                ref: this.setChannelItemRef,
                                className: ed.Ki,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: l,
                                unread: i,
                                mentionCount: o,
                                hasActiveThreads: r,
                                subtitle: v?.subtitle,
                                subtitleColor: v?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: p ? F.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: _ ? { source: lB.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, lI.Ay)({
                                    channel: e,
                                    unread: i,
                                    mentionCount: o,
                                    isSubscriptionGated: A,
                                }),
                                children: [
                                    g &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !g &&
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
                    x && (0, s.jsx)(iu.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: N }),
                ],
            });
        return h ? d(c(R)) : R;
    }
}
let iF = tW(ik);
function iK(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, iA.NR)(t),
        h = (0, u.cf)([nz.Ay], () => ({
            unread: nz.Ay.hasUnread(t.id),
            ackMessageId: nz.Ay.ackMessageId(t.id),
            isLowImportanceMention: nz.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([tX.Ay], () => tX.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([eq.A, B.A], () => {
            let e = eq.A.getChannel(t.parent_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === nl.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([nK.A], () => nK.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: p, isSubscriptionGated: f } = (0, lv.A)(t.id),
        C = (0, u.bG)([tX.Ay], () => tX.Ay.isFavorite(n.id, t.id)),
        E = (0, id.ni)(t),
        x = (0, io.Gp)(t.id),
        N = l8({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: f,
            needSubscriptionToAccess: p,
            isNewChannel: m,
            muted: a,
            enableActivities: x,
            resolvedUnreadSetting: A,
        }),
        S = (0, lZ.Ay)(t),
        [_, I] = r.useState(!1),
        b = (0, ia.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: G, markMenuItemPopoverAsDismissed: v } = (0, ih.z)({
            location: "TextChannel",
            isChannelSelected: o,
            isTargetInViewport: _,
            channelType: t.type,
            isPopoverAllowed: n.id !== nl.Vc,
        });
    return (0, u.bG)([im.A, ig.Ay], () => im.A.getChannelId() !== t.id && ig.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(iF, {
              ...h,
              ...g,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: f,
              needSubscriptionToAccess: p,
              isNewChannel: m && e.canBeNewChannel,
              isFavoriteSuggestion: i && !C,
              channelIsContentGated: E,
              channelInfo: N,
              embeddedApps: S,
              resolvedUnreadSetting: A,
              hasChannelInfo: null != N,
              enableActivities: x,
              showMenuItemPopover: G,
              markMenuItemPopoverAsDismissed: v,
              channelItemRef: b,
          });
}
var iz = n(900797),
    iW = n(250719),
    iY = n(636585),
    iq = n(531685),
    iX =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let iZ = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    iJ = { topBar: iZ, bottomBar: iZ },
    i$ = {},
    iQ = {};
function i0(e) {
    let t = eq.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? li.A.isMuted(t.id) : tX.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eW.Y)(t)
    );
}
function i1(e) {
    let t = eq.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tX.Ay.isGuildCollapsed(n),
        i = tX.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && nz.Ay.getMentionCount(e) > 0;
}
function i3(e) {
    return (
        !tX.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? eQ.A.getMutableParticipants(e.id, e0.ip.SPEAKER).length > 0
            : eX.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function i2(e) {
    let { guildChannels: t } = tt.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(iQ[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let l = null,
        i = null,
        s = null,
        r = null,
        a = !0,
        d = !0,
        c = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [A, g, m] = t.getSlicedChannels(n);
    for (let e = 0; e < g.length; e++) {
        let t = g[e];
        if (
            ((i0(t.id) || o().some(t.threadIds, i0)) && (d = !1),
            (i1(t.id) || o().some(t.threadIds, i1)) && (a = !1),
            h.includes(t.id) && (c = !0),
            !d && !a && c)
        )
            break;
    }
    let p = 0,
        f = !1,
        C = 0,
        E = !1;
    if (d || a)
        for (let e = A.length - 1; e >= 0; e--) {
            let t = A[e];
            (i0(t.id) || o().some(t.threadIds, i0)) && (null == i && (i = t.id), (f = !0)),
                (i1(t.id) || o().some(t.threadIds, i1)) &&
                    (null == l && (l = t.id),
                    (p += nz.Ay.getMentionCount(t.id)),
                    (p += o().sumBy(t.threadIds, nz.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            (i0(t.id) || o().some(t.threadIds, i0)) && (null == r && (r = t.id), (E = !0)),
                (i1(t.id) || o().some(t.threadIds, i1)) &&
                    (null == s && (s = t.id),
                    (C += nz.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, nz.Ay.getMentionCount)));
        }
    let x = null,
        N = null,
        S = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(S, i3)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && p > 0
            ? (N = { mode: "mentions", mentionCount: p, targetChannelId: l })
            : d && f && (N = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let _ = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !_);
    return (i$[e] = { topBar: _ ? (N ?? iZ) : iZ, bottomBar: I ? (x ?? iZ) : iZ }), !0;
}
let i9 = o().throttle(i2, 200);
function i5(e) {
    let { guildId: t } = e,
        n = tA.A.getGuild(t);
    return null != n && !!n.features.has(F.GuildFeatures.COMMUNITY) && i9(t);
}
function i7(e) {
    let { id: t } = e,
        n = eq.A.getChannel(t);
    if (null == n) return !1;
    let l = tA.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && i9(n.guild_id);
}
function i6(e) {
    let { channel: t } = e,
        n = eq.A.getChannel(t.id);
    if (null == n) return !1;
    let l = tA.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && i9(n.guild_id);
}
function i8(e) {
    let { channelId: t } = e,
        n = eq.A.getChannel(t);
    if (null == n) return !1;
    let l = tA.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && e4.A.getGuildId() === n.guild_id && i9(n.guild_id)
    );
}
function i4(e) {
    let { guildId: t } = e;
    return null != t && i9(t);
}
class se extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tt.A, eq.A, tA.A, li.A, nz.Ay, e4.A, eX.Ay, eQ.A, tX.Ay);
    }
    getUnreadStateForGuildId(e) {
        return i$[e] ?? iJ;
    }
}
let st = new se(eU.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = tA.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(F.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(iQ[t], n) &&
            ((iQ[t] = n), i2(t))
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
                    let t = tA.A.getGuild(e);
                    null != t && t.features.has(F.GuildFeatures.COMMUNITY) && i9(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: i8,
    CHANNEL_DELETE: i6,
    CHANNEL_LOCAL_ACK: i8,
    MESSAGE_ACK: i8,
    MESSAGE_CREATE: i8,
    MESSAGE_DELETE_BULK: i8,
    MESSAGE_DELETE: i8,
    PASSIVE_UPDATE_V2: function (e) {
        let t = tA.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(F.GuildFeatures.COMMUNITY)) && i9(e.guildId);
    },
    RESORT_THREADS: i8,
    THREAD_CREATE: i6,
    THREAD_DELETE: i6,
    THREAD_LIST_SYNC: i5,
    THREAD_MEMBER_UPDATE: i7,
    THREAD_MEMBERS_UPDATE: i7,
    THREAD_UPDATE: i6,
    BULK_CLEAR_RECENTS: i5,
    CATEGORY_COLLAPSE_ALL: i5,
    CATEGORY_EXPAND_ALL: i5,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = e4.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = i$[n];
        return null != l && "voice-channels" === l.bottomBar.mode && i9(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: i4,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: i4,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && i9(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: i4,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: i4,
});
var sn = n(335543);
let sl = { friction: 30, tension: 300 };
function si(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, iW.A)(t.id),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nn.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(ee.D, {
        className: ef()(sn.M0, sn.OF),
        onClick: a,
        children: [
            (0, s.jsx)(_.H, { size: "custom", className: sn.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(N.E, {
                variant: "text-xs/semibold",
                className: sn.pM,
                children: K.intl.format(K.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(iY.A, {
                guildId: t.id,
                className: sn.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iE._3.SIZE_16,
            }),
        ],
    });
}
function ss(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([st], () => st.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([iq.A], () => iq.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === iX.HIDDEN,
        p = (0, ey.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sl,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        f = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != g && a(g);
            },
            [a, g],
        );
    return (0, s.jsx)("div", {
        className: ef()(sn.kL, { [sn.Mn]: "top" === t, [sn.sQ]: "bottom" === t }),
        children: (0, s.jsx)(eM.animated.div, {
            className: sn.pK,
            style: p,
            "aria-hidden": m,
            children:
                h === iX.HIDDEN
                    ? (0, s.jsx)("div", { className: ef()(sn.M0, sn.Te) })
                    : h === iX.UNREAD
                      ? (0, s.jsxs)(ee.D, {
                            className: sn.M0,
                            onClick: f,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tI.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sn.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(iz.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sn.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(N.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sn.pM,
                                    children: K.intl.string(K.t.FCRiT3),
                                }),
                            ],
                        })
                      : h === iX.MENTIONS
                        ? (0, s.jsx)(ee.D, {
                              className: ef()(sn.M0, sn.vU),
                              onClick: f,
                              children: (0, s.jsx)(N.E, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: sn.pM,
                                  children: K.intl.format(K.t.EQcLyp, { count: A }),
                              }),
                          })
                        : h === iX.VOICE_CHANNELS
                          ? (0, s.jsx)(si, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l })
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
        !(t.isThread() ? li.A.isMuted(t.id) : tX.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eW.Y)(t)
    );
}
function sd(e) {
    let t = eq.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tX.Ay.isGuildCollapsed(n),
        i = tX.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && nz.Ay.getMentionCount(e) > 0;
}
let sc = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sr.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([iq.A], () => iq.A.isFocused());
    return (0, s.jsx)(sa.A, { ref: t, ...r, isUnread: so, isMentioned: sd, items: a, animate: o });
});
var su = n(81466);
function sh(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [nz.Ay],
            () => ({
                hasUnread: nz.Ay.hasUnread(t.id, nI.P.GUILD_EVENT),
                mentionCount: nz.Ay.getMentionCount(t.id, nI.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([tX.Ay], () => tX.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, $.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("31788"),
                n.e("6287"),
                n.e("8357"),
                n.e("35964"),
                n.e("58337"),
                n.e("26295"),
                n.e("37187"),
                n.e("55973"),
                n.e("56373"),
                n.e("70644"),
                n.e("49347"),
                n.e("64287"),
                n.e("53934"),
                n.e("68248"),
                n.e("69647"),
                n.e("98354"),
                n.e("11588"),
            ]).then(n.bind(n, 15823));
            return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, nB.Dr)(T.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tm.Ay)(t.id),
        c = d.length > 0 ? K.intl.formatToPlainString(K.t.IBdqSu, { number: d.length }) : K.intl.string(K.t.tlopTM);
    return (0, s.jsx)(H.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(su.C, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: (e) => {
            (0, eT.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("26386"), n.e("19990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(U.hV, { className: nV.Do, disableColor: !0, count: r }) : null,
    });
}
var sA = n(451988),
    sg = n(271683),
    sm = n(725613),
    sp = n(262763),
    sf = n(857253),
    sC = n(22231),
    sE = n(241326),
    sx = n(750943),
    sN = n(743674),
    sS = n(888697),
    s_ = n(493819),
    sI = n(722884),
    sb = n(844045),
    sG = n(31950);
function sv(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, canModifyHangout: a } = e,
        o = (0, sN.S)(l),
        d = (0, Y.je)(t),
        c = r.useCallback(() => {
            (0, sI.A)({ channel: t });
        }, [t]),
        u = r.useCallback(() => {
            (0, sS.e2)(t.id);
        }, [t.id]),
        h = r.useCallback(
            (e) => {
                d
                    ? (0, eT.L3)(e, async () => {
                          let { default: e } = await n.e("55558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, d],
        );
    return (0, s.jsxs)("div", {
        className: sG.rs,
        onContextMenu: h,
        children: [
            (0, s.jsx)("div", {
                className: sG.ZS,
                style: null != o ? { backgroundColor: o } : void 0,
                children: (0, s.jsx)(s_.A, { imageUrl: l, animatedUrl: i, className: sG.Sl }),
            }),
            a
                ? (0, s.jsxs)("div", {
                      className: sG.n_,
                      children: [
                          (0, s.jsx)(Q.m, {
                              text: K.intl.string(sb.default.XJ4UpB),
                              children: (0, s.jsx)(ee.D, {
                                  className: sG.HF,
                                  onClick: c,
                                  children: (0, s.jsx)(sC.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(Q.m, {
                              text: K.intl.string(sb.default.XV4qT6),
                              children: (0, s.jsx)(ee.D, {
                                  className: sG.HF,
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
function sR(e) {
    let { channel: t } = e,
        n = r.useCallback(() => {
            (0, sI.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        className: sG._o,
        children: (0, s.jsxs)(ee.D, {
            className: sG.hH,
            onClick: n,
            children: [
                (0, s.jsx)(sx.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: K.intl.string(sb.default.NGcIOF),
                }),
            ],
        }),
    });
}
function sj(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, W.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, Y.W6)(t),
        a = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(
            () => (null == d || null == t.guild_id ? null : (0, Y.Sq)({ guildId: t.guild_id, bannerHash: d })),
            [t.guild_id, d],
        );
    return l
        ? null != c
            ? (0, s.jsx)(sv, { channel: t, imageUrl: c.imageUrl, animatedUrl: c.animatedUrl, canModifyHangout: a })
            : a
              ? (0, s.jsx)(sR, { channel: t })
              : null
        : null;
}
var sM = n(159426),
    sy = n(595457),
    sT = n(820512);
function sL(e) {
    let { channel: t } = e,
        { enableHistoryHover: n, showGhostUser: l } = (0, e9.G8)({
            guildId: t.guild_id,
            location: "VoiceChannelHistoryTracking",
        }),
        i = (0, u.bG)([e5.A], () => e5.A.getHistoryExists(t.id)),
        s = (0, u.bG)([sm.A], () => sm.A.getStartTime(t));
    return (
        r.useEffect(() => {
            n && null != s && !i && ((0, sT.H)(t.id), l || (0, sT.q)(t.id));
        }, [t.id, n, i, s, l]),
        null
    );
}
var sU = n(532622),
    sD = n(882840),
    sP = n(46054),
    sO = n(514416),
    sV = n(992595);
function sw(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, sD.l)(t),
        { enableHangoutWindow: d } = (0, W.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, Y.lr)(t),
        u = null != o && o.length > 0,
        h = (0, sU.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && n8.default.track(F.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = ef()(sO.Ui, n && h ? sO.BI : null);
    return u
        ? (0, s.jsx)(ee.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(N.E, {
                  variant: "text-xs/medium",
                  className: ef()(sO.qS, sV.PT),
                  children: (0, s.jsx)(tN.A, { children: sP.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(ee.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(N.E, {
                        variant: "text-xs/medium",
                        className: sO.qS,
                        children: K.intl.string(K.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sC.R, { color: "currentColor", className: sO.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tN.A, { children: i })
            : null;
}
class sH extends nS {
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
            unverifiedAccount: l,
            needSubscriptionToAccess: i,
            enableOpenTIVForPing: s,
            mentionCount: r,
            isSuggestedSection: a,
        } = this.props;
        l && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = s && r > 0;
        o && lS.A.updateChatOpen(n.id, !0),
            sp.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o,
                locked: e,
                transitionExtras: a ? { source: lB.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = tA.A.getGuild(t.getGuildId());
        null != l &&
            (0, eT.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("55411"),
                    n.e("93103"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("34971"),
                    n.e("3998"),
                    n.e("9004"),
                    n.e("43266"),
                    n.e("74610"),
                    n.e("30997"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("42339"),
                    n.e("79995"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("12520"),
                    n.e("66540"),
                    n.e("29542"),
                    n.e("19690"),
                    n.e("619"),
                    n.e("26792"),
                    n.e("12052"),
                    n.e("18663"),
                    n.e("99990"),
                    n.e("99854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
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
        return (0, nn.Pd)(e, lr.A, tA.A);
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
        null != t && (0, lG.V)(t) && (0, lb.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sg.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = ic(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(sw, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lm.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: i,
        });
    }
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n, collapsed: l } = this.props;
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(sj, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e, sorting: t, isUserOver: n } = this.props,
            { popoutToShow: l, shouldShowGuildVerificationPopout: i } = this.state;
        return i
            ? (0, s.jsx)(lH, { type: lw.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : t || n
              ? null
              : "history" === l && this.getVoiceStatesCount() > 0
                ? (0, s.jsx)(sy.A, {
                      channel: e,
                      source: "voice_channel",
                      onMouseEnter: this.handleMouseEnter,
                      onMouseLeave: this.handleMouseLeave,
                  })
                : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(Q.m, {
                asContainer: !0,
                text: K.intl.string(K.t.ZXxLQg),
                children: (0, s.jsx)(ee.D, {
                    className: ef()(ed.Xs, n ? ed.Tf : null),
                    onClick: () => {
                        lS.A.updateChatOpen(e.id, !0),
                            (0, lk.iN)(e.id, l ? { source: lB.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": K.intl.string(K.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: ed.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ed.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? K.intl.string(K.t.rZfiNq) : null;
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: l,
                resolvedUnreadSetting: i,
                mentionCount: r,
                locked: a,
                sorting: o,
                isUserOver: d,
                connectChannelDropTarget: c,
                connectChannelDragSource: u,
                connectUserDropTarget: h,
                connectDragPreview: A,
                canReorderChannel: g,
                canMoveMembers: m,
                showTutorial: p,
                hasActiveEvent: f,
                embeddedApps: C,
                isSubscriptionGated: E,
                isFavoriteSuggestion: x,
                withGuildIcon: N,
                hasStartTime: S,
                shouldHighlightChannel: _,
                shouldUseAnimatedWaveform: I,
                voiceStates: b,
            } = this.props,
            { shouldShowGuildVerificationPopout: G } = this.state,
            { enableHistoryHover: v } = (0, e9.NH)({ guildId: e.guild_id, location: "VoiceChannel" }),
            R = _ || I,
            j = (0, s.jsxs)("li", {
                ref: this.ref,
                className: ef()(this.getModeClass(), { [ed.r9]: this.isDisabled(), [ed.fy]: _ }),
                "data-dnd-name": (0, tY.m1)(e, lD.default, lX.A),
                children: [
                    v && this.getVoiceStatesCount() > 0 && (0, s.jsx)(sL, { channel: e }),
                    _ &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: ed.UQ }),
                                (0, s.jsx)("div", { className: ed.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(lN.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: G || ("history" === this.state.popoutToShow && !(o || d)),
                            children: () =>
                                (0, s.jsx)(Q.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(n_.Ay, {
                                        ref: this.channelItemRef,
                                        className: ed.Ki,
                                        iconClassName: ef()({ [ed.Gj]: f || S || R }),
                                        hasActiveEvent: f,
                                        channel: e,
                                        selected: !x && t,
                                        connected: n,
                                        unread: n ? l : void 0,
                                        resolvedUnreadSetting: i,
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
                                        isFavoriteSuggestion: x,
                                        "aria-label": (0, lI.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            voiceStates: b,
                                            embeddedActivitiesCount: C.length,
                                            isSubscriptionGated: E,
                                        }),
                                        "aria-describedby": (function (e) {
                                            let { channel: t, embeddedApps: n } = e;
                                            if (t.type === F.rbe.GUILD_VOICE) {
                                                if (null != n && n.length > 0) {
                                                    let e = n.map((e) => e.application.name);
                                                    return K.intl.formatToPlainString(K.t.LmYuHT, {
                                                        activeActivities: e.join(", "),
                                                    });
                                                }
                                            }
                                        })({ channel: e, embeddedApps: C }),
                                        withGuildIcon: N,
                                        children: [
                                            x &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !x &&
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
            m && (j = h(j)),
            g && (j = c(u(j))),
            p &&
                (j = (0, s.jsx)(t9.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: j,
                })),
            j
        );
    }
}
let sB = tW((0, l_.F)(sH));
function sk(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([nz.Ay], () => ({ unread: nz.Ay.hasUnread(n.id), mentionCount: nz.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([tX.Ay], () => tX.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([eq.A, lU.A, B.A], () => {
            let e = eq.A.getChannel(n.parent_id),
                i = lU.A.getCheck(n.guild_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === nl.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, n),
                locked: !B.A.can(F.xBc.CONNECT, n),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lr.A], () => lr.A.hasVideo(n.id)),
        g = (0, lZ.Ay)(n),
        m = (0, tY.Ay)(n),
        p = (0, tm.Qs)(n.id),
        f = (0, u.bG)([sm.A], () => null != sm.A.getStartTime(n), [n]),
        { isSubscriptionGated: C, needSubscriptionToAccess: E } = (0, lv.A)(n.id),
        x = (0, sf.A)(),
        N = (0, u.bG)([tX.Ay], () => tX.Ay.isFavorite(t.id, n.id)),
        S = e.connected || x?.channelId === n.id,
        { enableOpenTIVForPing: _ } = sM.m.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: I, enableWaveformIcon: b } = (0, ne.b)(t.id, "VoiceChannel"),
        G = null != o && o.length > 0,
        v = I && G,
        R = b && G,
        j = l8({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: C,
            needSubscriptionToAccess: E,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        M = S && null == j;
    return (0, s.jsx)(sB, {
        channelName: m,
        embeddedApps: g,
        embeddedActivityType: F.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != p,
        isSubscriptionGated: C,
        needSubscriptionToAccess: E,
        ...d,
        ...h,
        ...e,
        connected: S,
        isFavoriteSuggestion: i && !N,
        forceShowButtons: M,
        channelInfo: j,
        resolvedUnreadSetting: c,
        enableOpenTIVForPing: _,
        hasChannelInfo: null != j,
        hasStartTime: f,
        shouldHighlightChannel: v,
        shouldUseAnimatedWaveform: R,
    });
}
n(131955);
var sF = n(335993);
function sK(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class sz extends r.PureComponent {
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
        this.setState({ initialized: !0 }), (0, tl.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = e6.A.getGuildDimensions(l);
        null != n
            ? (this.scrollToChannel(n), b.A.clearChannelListScrollTo(l))
            : l !== e.guildId
              ? null != r && this.scrollTo(r)
              : i !== e.selectedChannelId
                ? this.scrollToChannel(i)
                : !t.initialized &&
                  s &&
                  (null == r && null != i
                      ? this.scrollToChannel(i, !1, 8, this.handleListScroll)
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
            l = arguments.length > 3 ? arguments[3] : void 0,
            i = this._list,
            s = this.getSectionRowsFromChannel(e)[0];
        if (null != s && null != i)
            if (null != s.threadOffset) {
                let [e] = i.getScrollPosition(s.section, s.row),
                    { density: r = "default" } = this.props,
                    a = s.threadOffset * sK(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + sK(r), padding: n, animate: t, callback: l });
            } else i.scrollToIndex({ section: s.section, row: s.row, animate: t, padding: n, callback: l });
        else l?.();
    }
    jumpToVoiceChannels = () => {
        let { guildChannels: e, voiceStates: t } = this.props,
            n = 0,
            l = e.getCategoryFromSection(e.voiceChannelsSectionNumber)?.getShownChannelIds() ?? [];
        for (let e = 0; e < l.length - 1; e++)
            if ((t[l[e]] ?? []).length > 0) {
                n = e + 1;
                break;
            }
        this._list?.scrollToIndex({ section: e.voiceChannelsSectionNumber, row: n, animate: !0, padding: 8 });
    };
    jumpToChannel = (e) => this.scrollToChannel(e, !0, 32);
    jumpToChannelWithMentionsAndUnreads = (e, t) => {
        let [n, l] = t;
        return this.scrollToChannel(e, !0, null != n && null != l ? 32 : 8);
    };
    isChannelVisible = (e, t) => {
        let n = this.getSectionRowsFromChannel(e),
            l = this._list;
        if (null == l) return !1;
        for (let { row: e, section: i } of n) {
            let [n, s] = l.getScrollPosition(i, e),
                r = l.getScrollerState();
            if ((t && n + s < r.scrollTop + r.offsetHeight) || (!t && n > r.scrollTop)) return !0;
        }
        return !1;
    };
    getVisibleChannels = () => {
        let e = this._list;
        if (null == e) return [];
        let t = e.getItems(),
            n = e.getScrollerState(),
            l = [];
        for (var i = 0; i < t.length; i++) {
            let s = t[i];
            if ((0, A.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
                let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
                    [i, r] = e.getScrollPosition(s.section, s.row);
                null != t && i + r < n.scrollTop + n.offsetHeight && i > n.scrollTop && l.push(t.channel.id);
            }
        }
        return l;
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
        let l = this.isUnreadVisible();
        n
            ? this.setState({ isUnreadVisible: l, bottomUnread: t, bottomMention: e })
            : this.setState({ isUnreadVisible: l, topUnread: t, topMention: e });
    };
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ("row" !== n.type) return !1;
                let { section: l, row: i } = n;
                if (l < te.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, e7.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, eW.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, a.throttle)((e) => {
        b.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: l } = this.props,
            i = "compact" === l ? 8 : 12;
        if (e === te.PU) return i;
        if (e === te.bK) return t.features.has(F.GuildFeatures.HUB) ? 0 : i;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let l = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == l || l.record.type === F.rbe.GUILD_CATEGORY ? 9 : 25;
        }
        return "compact" === l ? 32 : 40;
    };
    getSectionFooterHeight = (e) => {
        let {
            guildChannels: t,
            voiceStates: n,
            selectedVoiceChannelId: l,
            selectedChannelId: i,
            optInEnabled: s,
            guildChannelsVersion: r,
        } = this.props;
        return (function (e) {
            let {
                sectionIndex: t,
                guildChannels: n,
                voiceStates: l,
                selectedChannelId: i,
                selectedVoiceChannelId: s,
                optInEnabled: r,
                visualRefreshEnabled: a,
                density: o,
            } = e;
            if (t === n.voiceChannelsSectionNumber) return 44;
            let { hasDivider: d, canHaveVoiceSummary: c } = ni(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === te.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== tD.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!B.A.can(F.xBc.VIEW_CHANNEL, e)) return !1;
                                      let t = n[e.id] ?? [];
                                      return e.id !== i && e.id !== l && t.length > 0;
                                  });
                        })({ category: t, selectedChannelId: l, selectedVoiceChannelId: i, voiceStates: n }).length > 0
                    );
                })({ category: h, selectedChannelId: i, selectedVoiceChannelId: s, voiceStates: l })
                ? u
                : (a && "cozy" === o ? 42 : 34) + u;
        })({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: r,
            voiceStates: n,
            selectedChannelId: i,
            selectedVoiceChannelId: l,
            optInEnabled: s,
            density: this.props.density,
        });
    };
    getRowHeight = (e, t) => {
        let {
                guildChannels: n,
                voiceStates: l,
                stageChannelSpeakerVoiceStates: i,
                selectedVoiceChannelId: s,
                density: r = "default",
            } = this.props,
            a = sK(r);
        if (e === te.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tx.n.GUILD_PREMIUM_PROGRESS_BAR
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
            a += sK(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, X.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, W.kY)({ guildId: d.record.guild_id, location: "ChannelList" });
                    e && ((0, Y.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
                }
            }
            if (
                (d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount),
                !d.isCollapsed && !c.isCollapsed)
            ) {
                let { showGhostUser: e } = (0, e9.NH)({ guildId: d.record.guild_id, location: "ChannelList" });
                e && null != e5.A.getLastLeftUserId(d.id) && (a += 32);
            }
        }
        if (((null != d.subtitle || s === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = l[d.id] ?? [],
                t = i[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8);
            }
        }
        return a;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            l = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == l) return;
        let i = null,
            s = l.getShownChannelAndThreadIds();
        null != n && s.includes(n) && (i = (0, Z.xb)(t)), (0, Z.DD)(e.id, s, i);
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                guild: i,
                selectedChannelId: r,
                disableManageChannels: a,
            } = this.props;
        return (0, s.jsx)(
            t8,
            {
                sectionIndex: t,
                guild: i,
                guildChannels: n,
                guildChannelsVersion: l,
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
                guild: l,
                selectedChannel: i,
                selectedChannelId: a,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: A,
                optInEnabled: g,
                withGuildIcon: m,
            } = this.props;
        if (t === te.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tx.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        q.A,
                        { guild: l, channel: e8.Ay.getDefaultChannel(l.id) },
                        tx.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tx.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(ez, { guild: l, withMargin: i.length > 1 }, tx.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tx.n.GUILD_HOME:
                    return (0, s.jsx)(nq, { guild: l, selected: a === es.VV.GUILD_HOME }, tx.n.GUILD_HOME);
                case tx.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sh,
                        { guild: l, selected: a === tx.n.GUILD_SCHEDULED_EVENTS },
                        tx.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tx.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        n1,
                        { guild: l, selected: a === es.VV.ROLE_SUBSCRIPTIONS },
                        tx.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tx.n.GUILD_SHOP:
                    return (0, s.jsx)(ln, { guild: l, selected: a === es.VV.GUILD_SHOP }, tx.n.GUILD_SHOP);
                case tx.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nw, { guild: l, selected: a === es.VV.GAME_SHOP }, tx.n.GUILD_GAME_SHOP);
                case tx.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(nQ, { guild: l });
                case tx.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        nW,
                        { guild: l, selected: a === es.VV.CHANNEL_BROWSER || a === es.VV.CUSTOMIZE_COMMUNITY },
                        tx.n.CHANNELS_AND_ROLES,
                    );
                case tx.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nb,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tx.n.GUILD_DIRECTORY,
                    );
                case tx.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        z,
                        { guild: l, selected: a === es.VV.MEMBER_SAFETY },
                        tx.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tx.n.GUILD_BOOSTS:
                    return (0, s.jsx)(ej, { guildId: l.id, selected: a === es.VV.GUILD_BOOSTS }, tx.n.GUILD_BOOSTS);
                case tx.n.GAME_SERVERS:
                    return (0, s.jsx)(em, { guildId: l.id, selected: a === es.VV.GAME_SERVERS }, tx.n.GAME_SERVERS);
                case tx.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        ec,
                        { guildId: l.id, selected: a === es.VV.GAME_SERVERS },
                        tx.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let p = c.getChannelFromSectionRow(t, n);
        if (null == p) return null;
        let { category: f, channel: C } = p,
            E = f instanceof te.xu,
            x = C.record,
            N = `${t}${C.id}`;
        switch (x.type) {
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
                            (0, s.jsx)(iK, {
                                channel: x,
                                guild: l,
                                position: C.position,
                                selected: a === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: g && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            C.threadCount > 0
                                ? (0, s.jsx)(lx, {
                                      withGuildIcon: m,
                                      channel: x,
                                      sortedThreadIds: C.threadIds,
                                      selectedChannel: null != i && (i.id === C.id || i.parent_id === x.id) ? i : null,
                                      selectedVoiceChannelId: o?.parent_id === x.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    N,
                );
            case F.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    il,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || f.isCollapsed,
                        voiceStates: u[C.id] ?? [],
                        speakerVoiceStates: A[C.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case F.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    sk,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || f.isCollapsed,
                        voiceStates: u[C.id],
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        showTutorial: C.isFirstVoiceChannel,
                        isFavoriteCategory: E,
                        withGuildIcon: m,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case F.rbe.GUILD_STORE:
                return (0, s.jsx)(ir, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case F.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(t2, { channel: x }, `readonly-${x.id}`);
            case F.rbe.PUBLIC_THREAD:
            case F.rbe.PRIVATE_THREAD:
            case F.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    iK,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        muted: C.isMuted,
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        canBeNewChannel: !1,
                        isFavoriteCategory: !1,
                        forceTopLevelThread: !0,
                    },
                    N,
                );
            default:
                return null;
        }
    };
    renderSectionFooter = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                voiceStates: i,
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
                guildChannelsVersion: l,
                sectionIndex: t,
                voiceStates: i,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: l, canHaveVoiceSummary: i } = ni(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: t6.Eo,
            children: (0, s.jsx)(sc, {
                ref: this.unreadTopRef,
                textUnread: K.intl.string(K.t.FCRiT3),
                textMention: K.intl.string(K.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: t6.Vq,
                barClassName: t6.bu,
                guildId: i,
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
            { bottomMention: l, isUnreadVisible: i } = this.state;
        return (0, s.jsx)(sc, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: K.intl.string(K.t.FCRiT3),
            textMention: K.intl.string(K.t["8zH0LJ"]),
            hide: null == l && i,
            className: t6.di,
            barClassName: t6.bu,
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
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            i = {};
        (0, y.ai)(n) && (i["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === l ? 8 : 12;
        return (0, s.jsx)(g.sk, {
            children: (t) =>
                (0, s.jsx)(
                    m.OZ,
                    {
                        ref: this.setListRef,
                        className: t6.XG,
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
                        innerAriaLabel: K.intl.string(K.t.OGiMXJ),
                        innerTag: "ul",
                        getAnchorId: this.getAnchorId,
                        ...a,
                        ...t,
                        ...i,
                    },
                    "guild-channels",
                ),
        });
    }
    testShouldSkipTutorial = () => {
        if (!e2.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void e3.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || e3.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(M.V0, {
            children: (l) =>
                (0, s.jsx)(p.F, {
                    component: (0, s.jsx)(f.A, {
                        children: (0, s.jsx)(p.H, { id: l, children: K.intl.string(K.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: t6.Eo,
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
let sW = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([v.A], () => v.A.keyboardModeEnabled),
        { analyticsLocations: a } = (0, j.Ay)(R.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([eq.A], () => eq.A.getChannel(n)),
        h = (0, u.bG)([eq.A], () => eq.A.getChannel(l)),
        A = (0, u.bG)([e4.A], () => e4.A.getGuildId()),
        g = (0, J.jN)(t),
        m = r.useRef(null),
        p = r.useCallback((e, t) => {
            let n = m.current;
            null != n &&
                (F.Ut1.test(t) || (0, es.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        f = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = m.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = m.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        E = (0, c.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: i,
            setFocus: p,
            scrollToStart: f,
            scrollToEnd: C,
        }),
        x = E.setFocus;
    r.useEffect(() => {
        null != n && x(n);
    }, [n, x]);
    let N = (function (e) {
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
    return (0, s.jsx)(j.f5, {
        value: a,
        children: (0, s.jsx)(G.A, {
            section: F.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsx)(d.hD, {
                navigator: E,
                children: (0, s.jsx)(sz, {
                    ...e,
                    listNavigator: E,
                    ref: m,
                    selectedChannel: o,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: N,
                    selectedGuildId: A,
                    optInEnabled: g,
                }),
            }),
        }),
    });
};
function sY(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, tn.D)(),
        { density: l } = (0, C.wR)();
    return n
        ? (0, s.jsx)("div", {
              className: t6.XG,
              children: (0, s.jsxs)(E.B, {
                  gap: 8,
                  children: [
                      (0, s.jsxs)(E.B, {
                          gap: 8,
                          padding: { top: 16, right: 16, bottom: 0, left: 16 },
                          fullWidth: !1,
                          children: [
                              (0, s.jsx)(x.D, {
                                  variant: "heading-md/semibold",
                                  children: K.intl.string(sF.default["1n0TGE"]),
                              }),
                              (0, s.jsx)(N.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: K.intl.string(sF.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", { className: t6.ts }),
                      (0, s.jsxs)("div", {
                          className: t6.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, s.jsxs)("div", {
                                  className: t6.pS,
                                  children: [
                                      (0, s.jsx)(S.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t6.Qs }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: t6.pS,
                                  children: [
                                      (0, s.jsx)(_.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t6.iR }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: t6.pS,
                                  children: [
                                      (0, s.jsx)(I.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t6.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, s.jsx)(sW, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function sq(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tg.A)(t)),
                    (l = (0, tm.Ay)(t)),
                    !(0, u.bG)([tA.A], () => {
                        if (null == t) return !1;
                        let e = tA.A.getGuild(t);
                        return e?.features.has(F.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || l.length > 0)),
                s = (0, tr.W)(e.id),
                r = (0, th.vz)(e.id),
                a = (0, ts.r)(e),
                o = (0, tE.jz)(e),
                d = (0, tc.d)(e.id),
                c = (0, ti.bG)([to.h], () => to.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tu.A)(e.id),
                A = (0, td.jY)(e.id),
                g = (0, ta.fw)(e.id),
                m = [],
                p = e.features.has(F.GuildFeatures.HUB),
                f = e.features.has(F.GuildFeatures.COMMUNITY),
                C = e.features.has(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                E = (0, ew.A)(e.id);
            tC.useConfig({ location: "useGuildActionRows" }).enabled;
            let x = eB(e),
                N = (0, tp.C$)(e.id, "useGuildActionRows"),
                S = e.features.has(F.GuildFeatures.GAME_SERVERS),
                _ = (0, tf.N)("useGuildActionRows"),
                [I] = (0, el.kn)(N && _ && !S ? [T.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                p && m.push(tx.n.GUILD_HUB_HEADER_OPTIONS),
                !A && d && h && null != c && c.length > 0
                    ? m.push(tx.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && x > 0 && m.push(tx.n.GUILD_PREMIUM_PROGRESS_BAR),
                !p && d && m.push(tx.n.GUILD_HOME),
                i && m.push(tx.n.GUILD_SCHEDULED_EVENTS),
                !p && f && m.push(tx.n.CHANNELS_AND_ROLES),
                r && m.push(tx.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && m.push(tx.n.GUILD_SHOP),
                o && m.push(tx.n.GUILD_GAME_SHOP),
                ((g && (f || C)) || (s && e.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    m.push(tx.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                E && m.push(tx.n.GUILD_BOOSTS),
                N && (S ? m.push(tx.n.GAME_SERVERS) : null != I && m.push(tx.n.GAME_SERVERS_EMPTY)),
                m
            );
        })(e.guild),
        n = (0, u.cf)([tt.A], () => tt.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(sW, { ...e, ...n, density: l });
}
