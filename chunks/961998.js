"use strict";
n.d(t, { A: () => rl });
var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(435558),
    d = n.n(o),
    c = n(806163),
    u = n(837381),
    _ = n(621466),
    E = n(17928),
    A = n(52133),
    h = n(451988),
    I = n(661531),
    f = n(192308),
    p = n(331322),
    T = n(312138),
    m = n(602853),
    g = n(43990),
    S = n(689175),
    N = n(951001),
    C = n(964486),
    O = n(260762),
    R = n(793574),
    L = n(688810),
    D = n(313961),
    y = n(268218),
    v = n(676168),
    b = n(749884);
n(321073);
var M = n(857250),
    P = n(691540),
    U = n(862328),
    w = n(67811),
    G = n(27232),
    x = n(308528),
    k = n(933958),
    F = n(969151),
    V = n(941971),
    B = n(900848),
    H = n(771640),
    j = n(366811),
    W = n(345942),
    Y = n(616356),
    K = n(734057),
    $ = n(309010),
    z = n(977997),
    q = n(935208),
    Z = n(181079),
    X = n(422258),
    Q = n(668267),
    J = n(298358),
    ee = n(5180),
    et = n(695633),
    en = n(152007),
    ei = n(458294),
    er = n(576705),
    ea = n(568548),
    es = n(543465),
    el = n(551289),
    eo = n(428784),
    ed = n(43105),
    ec = n(449817),
    eu = n(375708),
    e_ = n(988572);
function eE(e) {
    let { targetElementRef: t, onTakeAction: n, onRequestClose: i } = e;
    return (0, r.jsx)(ed.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: e_.A, type: "image", aspectRatio: "16/9" },
        title: eu.intl.string(ec.default["bu/mLv"]),
        body: eu.intl.string(ec.default.kxQJ7q),
        onRequestClose: i,
        actions: [{ text: eu.intl.string(ec.default["vN/KQ9"]), onClick: n }],
    });
}
var eA = n(451394),
    eh = n(597601),
    eI = n(834730),
    ef = n(983851),
    ep = n(183623),
    eT = n(323384),
    em = n(866665),
    eg = n(104171),
    eS = n(63995),
    eN = n(518769),
    eC = n(287809),
    eO = n(607567),
    eR = n(403362),
    eL = n(652215),
    eD = n(833971);
function ey(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, r.jsx)(e, { className: eD.RI, color: "currentColor" }),
                  (0, r.jsx)(eg.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function ev() {
    let e = (0, E.yK)([Z.A, K.A], () =>
            q.default
                .keys(Z.A.getFavoriteChannels())
                .map((e) => K.A.getChannel(e))
                .filter(eR.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eL.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eL.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, E.yK)(
            [eO.Ay],
            () =>
                d().flatMap(n, (e) =>
                    eO.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, E.yK)([eS.A], () =>
            d().flatMap(i, (e) =>
                eS.A.getMutableParticipants(e, eN.ip.SPEAKER)
                    .filter((e) => e.type === eN.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, E.bG)([eS.A], () => {
            let e = 0;
            for (let t of i) e += eS.A.getParticipantCount(t, eN.ip.AUDIENCE);
            return e;
        }),
        o = (0, E.yK)(
            [Y.A],
            () =>
                Y.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, E.yK)([k.Ay], () => {
            let e = k.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        u = (0, E.yK)([eC.default], () => c.map((e) => eC.default.getUser(e)), [c]),
        _ = (0, E.yK)([eC.default], () => o.map((e) => eC.default.getUser(e)), [o]),
        A = ey(
            ef.H,
            a.filter((e) => !o.includes(e.id) && !c.includes(e.id)),
        ),
        h =
            0 === s.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eD.nM,
                      children: [
                          (0, r.jsx)(eA.q, { size: "lg", color: "currentColor", className: eD.RI }),
                          (0, r.jsx)(eg.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eD.GZ,
                              children: [
                                  (0, r.jsx)(eh.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eI.E, {
                                      className: eD._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        I = ey(
            ep.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        f = ey(eT.k, u);
    return (0, r.jsxs)(r.Fragment, { children: [h, A, I, f] });
}
function eb() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eD.nM, eD.Dl),
                children: (0, r.jsx)("span", { className: l()(eD.cN, eD.NT), children: eu.intl.string(eu.t.wMWyci) }),
            }),
            (0, r.jsx)(ev, {}),
        ],
    });
}
function eM(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = a.useMemo(
            () =>
                (0, r.jsx)(eI.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eD.A_,
                    children: (0, r.jsx)(eb, {}),
                }),
            [],
        );
    return (0, r.jsx)(em.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eP = n(97483),
    eU = n(49999),
    ew = n(191775);
let eG = { analyticsSource: { page: eL.liQ.GUILD_CHANNEL, section: eL.JJy.CHANNEL_LIST, object: eL.ZSU.CHANNEL } };
function ex(e) {
    let t,
        n,
        i,
        s,
        l,
        o,
        d,
        c,
        _,
        A,
        h,
        I,
        { shouldShowIntroPopover: f, markIntroPopoverAsDismissed: p } = e,
        T = (0, u.Vd)("favorites"),
        { favoriteAdded: m, clearFavoriteAdded: g } = (0, J.CJ)(),
        S = a.useRef(null),
        [N, C] = a.useState(!1),
        O = (0, eo.$)("favorite-server-context"),
        { favoriteGuildMuted: R, favoriteChannels: L } = (0, E.cf)([Z.A], () => ({
            favoriteChannels: Z.A.getFavoriteChannels(),
            favoriteGuildMuted: Z.A.favoriteGuildMuted,
        })),
        D = (0, E.bG)([$.Ay], () => $.Ay.getChannelId(eL.YYv)),
        y = (0, E.bG)([K.A], () => K.A.getChannel(D)),
        v = (0, j.A)((e) => e.guildId),
        b = (0, ee.ai)(v),
        { badge: ed, unread: ec } = (0, E.cf)([et.A, K.A, ei.default, en.A, er.A, ea.Ay, es.Ay], () => {
            let e = q.default.keys(L),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = K.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = ea.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (ea.Ay.hasUnread(n) && ei.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = et.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = ea.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = K.A.getChannel(n);
                            e.unread = e.unread || (ea.Ay.hasUnread(n) && ei.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        e_ =
            ((n = null != (t = (0, E.bG)([$.Ay], () => $.Ay.getVoiceChannelId())) && null != L[t]),
            (i = (0, E.bG)([Y.A], () => {
                if (!n) return !1;
                let e = Y.A.getCurrentUserActiveStream();
                return null != e && null != L[e.channelId];
            })),
            (s = (0, E.bG)([Y.A], () => Y.A.getAllApplicationStreams().some((e) => null != L[e.channelId]))),
            (l = (0, E.bG)([z.A], () => n && null != t && z.A.hasVideo(t), [n, t])),
            (o = (0, E.yK)([k.Ay], () =>
                q.default.keys(L).reduce((e, t) => (e.push(...k.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (d = (0, E.bG)([k.Ay], () =>
                Array.from(k.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, F.H)(t);
                    return null != n && null != L[n];
                }),
            )),
            (c = o.length > 0),
            (_ = !1),
            (A = !1),
            (h = !1),
            (I = !1),
            n ? ((_ = !l), (A = l), (h = i), (I = d)) : ((h = s), (I = c)),
            (0, H.oi)({ audio: _, video: A, screenshare: h, liveStage: !1, isCurrentUserConnected: n, activity: I })),
        eA = ed > 0 ? (0, H.wN)(ed) : null,
        eh = a.useRef(!1),
        eI = a.useCallback(
            (e, t) => {
                (eh.current = !0), p(e, t);
            },
            [p],
        ),
        ef = a.useCallback(
            (e) => {
                e && ((0, Q.mv)("intro_dc"), (0, W.u)(eL.YYv)),
                    (0, el.Yz)() || (0, X.tV)(!0, "favorites_button_onboarding"),
                    eI(eU.i.TAKE_ACTION);
            },
            [eI],
        );
    return (
        a.useEffect(() => {
            f && (eh.current = !1);
        }, [f]),
        a.useEffect(
            () => () => {
                f && !eh.current && eI(eU.i.AUTO_DISMISS, !0);
            },
            [eI, f],
        ),
        a.useEffect(() => {
            if (m) {
                let e = (0, M.o)(eu.intl.string(eu.t["4tSWQg"]), eP.Ck.FAVORITE);
                (0, P.P0)(e);
                let t = setTimeout(g, e.options?.duration ?? eP.jg.duration);
                return () => {
                    g(), clearTimeout(t);
                };
            }
        }, [m, g]),
        (0, r.jsxs)(B.c, {
            children: [
                (0, r.jsx)(V.A, { overlay: !0, selected: b, hovered: N, unread: ec && !R }),
                (0, r.jsx)(eM, {
                    children: (0, r.jsx)(U.Q, {
                        selected: !0,
                        upperBadge: e_,
                        lowerBadge: eA,
                        children: (0, r.jsx)("div", {
                            ref: S,
                            children: (0, r.jsx)(w.j, {
                                ...T,
                                ariaLabel: eu.intl.formatToPlainString(eu.t["/uzRss"], {
                                    guildName: eu.intl.string(eu.t.wMWyci),
                                    mentions: ed,
                                }),
                                "aria-selected": b,
                                to: { pathname: eL.BVt.CHANNEL(eL.YYv, D), state: eG },
                                selected: b || N,
                                onClick: () => {
                                    f && ef(!1);
                                },
                                onMouseEnter: () => C(!0),
                                onMouseLeave: () => C(!1),
                                onMouseDown: function () {
                                    null != y && x.A.preload(y.guild_id, y.id);
                                },
                                onContextMenu: O,
                                children: (0, r.jsx)(G.G, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: ew.w,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
                f &&
                    (0, r.jsx)(eE, {
                        targetElementRef: S,
                        onTakeAction: () => ef(!0),
                        onRequestClose: () => eI(eU.i.USER_DISMISS),
                    }),
            ],
        })
    );
}
var ek = n(633965),
    eF = n(857071),
    eV = n(851109),
    eB = n(72314),
    eH = n(543897),
    ej = n(696451),
    eW = n(71393),
    eY = n(711014),
    eK = n(723702),
    e$ = n(757780),
    ez = n(263715),
    eq = n(967198),
    eZ = n(173860),
    eX = n(383394),
    eQ = n(131677),
    eJ = n(228366);
let e0 = {};
class e1 extends E.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (e0[t] = e[t]);
            });
    }
    getState() {
        return e0;
    }
    hasViewed(e) {
        return null != e0[e];
    }
}
let e2 = new e1(eJ.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        e0[t] = Date.now();
    },
});
var e3 = n(531685),
    e4 = n(583613);
let e6 = "app-download-item",
    e5 = "add-server-item";
function e7() {
    return !1;
}
function e8(e) {
    let t = ei.default.getMutableGuildStates();
    return (
        (e === eL.sFm.SERVER_DISCOVERY_BADGE && !e2.hasViewed(eL.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== e6 && e !== e5 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let e9 = (0, e4.L_)((e, t, n) => ["null", ...t, ...e, e5, eL.sFm.E3_SERVER_DISCOVERY_BADGE, e6]),
    te = a.forwardRef(function (e, t) {
        let n = (0, E.yK)([eY.Ay, eQ.A, ei.default], () =>
                e9(eY.Ay.getGuildFolders(), eQ.A.getUnreadPrivateChannelIds(), ei.default.getStoreChangeSentinel()),
            ),
            i = (0, E.bG)([e3.A], () => e3.A.isFocused()),
            a = (0, E.bG)([eX.A], () => eX.A.getExpandedFolders());
        return (0, r.jsx)(eZ.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: e7,
            textUnread: eu.intl.string(eu.t.y2b7CA),
            textMention: eu.intl.string(eu.t.y2b7CA),
            isMentioned: e8,
            animate: i,
            expandedFolders: a,
        });
    });
n(667532);
var tt = n(868285),
    tn = n(763827),
    ti = n(560952),
    tr = n(778712),
    ta = n(812993),
    ts = n(442433),
    tl = n(620982),
    to = n(571694),
    td = n(47167),
    tc = n(598104),
    tu = n(994500);
function t_(e, t) {
    return e
        .filter((e) => (0, eR.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : tu.A.isBlockedOrIgnored(e.id)));
}
function tE(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : tu.A.isBlockedOrIgnored(e)));
}
var tA = n(427358),
    th = n(907459),
    tI = n(145408);
function tf(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, r.jsx)(t, { className: eD.RI, color: "currentColor" }),
                  (0, r.jsx)(eg.Ay, { users: n, max: 6 }),
              ],
          });
}
function tp(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eI.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eu.intl.string(eu.t.fpKdS1),
          })
        : (0, r.jsx)(tI.A, { muteConfig: t, className: n });
}
function tT(e) {
    let t,
        n,
        i,
        s,
        o,
        d,
        c,
        u,
        _,
        A,
        h,
        I,
        f,
        { channel: p } = e,
        T = p.id,
        {
            activityUsers: m,
            streamUsers: g,
            voiceUsers: S,
        } = ((t = p.id),
        (n = (0, E.yK)([tu.A], () => tu.A.getBlockedOrIgnoredIDs())),
        (i = (0, E.bG)([tA.A], () => tA.A.getUserAffinitiesMap(), [])),
        (s = (0, E.yK)(
            [k.Ay, eC.default],
            () =>
                k.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eC.default.getUser(e)),
            [t],
        )),
        (o = a.useMemo(() => t_(s, n), [s, n])),
        (d = a.useMemo(() => (0, th.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, E.yK)(
            [Y.A, eC.default],
            () =>
                t_(
                    Y.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => eC.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (u = a.useMemo(() => t_(c, n), [c, n])),
        (_ = a.useMemo(() => (0, th.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (A = a.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (h = (0, E.yK)(
            [eO.Ay],
            () =>
                t_(
                    eO.Ay.getVoiceStatesForChannel(p).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [p, n],
        )),
        (I = a.useMemo(() => t_(h, n), [h, n])),
        (f = a.useMemo(() => (0, th.L)(I, i, "DirectMessageTooltip - voiceUsers"), [I, i])),
        {
            voiceUsers: a.useMemo(
                () => f.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [f, d, _],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, r.jsx)(tf, { icon: ef.H, users: S }),
        C = (0, r.jsx)(tf, { icon: ep.F, users: g }),
        O = (0, r.jsx)(tf, { icon: eT.k, users: m }),
        { isMuted: R, muteConfig: L } = (0, E.cf)(
            [es.Ay],
            () => ({ isMuted: es.Ay.isChannelMuted(null, T), muteConfig: es.Ay.getChannelMuteConfig(null, T) }),
            [T],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N,
            C,
            O,
            R ? (0, r.jsx)(tp, { muteConfig: L, className: l()(eD.LM, { [eD.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tm(e) {
    let { channel: t } = e,
        n = (0, td.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eD.nM, eD.Dl),
                children: (0, r.jsx)("span", { className: l()(eD.cN, eD.NT), children: n }),
            }),
            (0, r.jsx)(tT, { channel: t }),
        ],
    });
}
function tg(e) {
    let { channel: t, children: n } = e,
        i = (0, td.Ay)(t),
        s = a.useMemo(
            () =>
                (0, r.jsx)(eI.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eD.A_,
                    children: (0, r.jsx)(tm, { channel: t }),
                }),
            [t],
        );
    return (0, r.jsx)(em.m, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let tS = { friction: 28, tension: 600 };
function tN(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tS };
        case "scale":
            return { ...tS };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tC extends a.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new ti.Controller({ scale: 0, height: 0, opacity: 0, config: tN }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !e3.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tN })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tN }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !e3.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tN }).start().then(e),
        );
    }
    componentWillUnmount() {
        this.state.controller.dispose();
    }
    getAnimatedStyle() {
        let { size: e } = this.props,
            { controller: t } = this.state,
            { opacity: n, height: i, scale: r } = t.springs;
        return { opacity: n, height: i.to([0, 1], [0, e]), transform: r.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`) };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === eL.rbe.DM ? eC.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, to.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eL.rbe.DM ? eC.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, ts.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("97422"),
                      n.e("40351"),
                      n.e("76279"),
                      n.e("45309"),
                      n.e("97705"),
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93103"),
                      n.e("93190"),
                      n.e("91763"),
                      n.e("34552"),
                      n.e("8757"),
                      n.e("71210"),
                      n.e("38730"),
                      n.e("85968"),
                      n.e("89673"),
                      n.e("68403"),
                      n.e("88342"),
                      n.e("29787"),
                      n.e("89421"),
                      n.e("98965"),
                      n.e("82073"),
                      n.e("97558"),
                      n.e("91994"),
                      n.e("76665"),
                      n.e("35313"),
                      n.e("76273"),
                      n.e("47502"),
                      n.e("74610"),
                      n.e("36564"),
                      n.e("45996"),
                      n.e("792"),
                      n.e("92822"),
                      n.e("23427"),
                      n.e("29422"),
                      n.e("38056"),
                      n.e("9291"),
                      n.e("7059"),
                      n.e("8829"),
                      n.e("80740"),
                      n.e("16054"),
                      n.e("98199"),
                      n.e("17244"),
                      n.e("64464"),
                      n.e("39778"),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, r.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, ts.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("91763"),
                      n.e("38730"),
                      n.e("47502"),
                      n.e("68530"),
                      n.e("80740"),
                      n.e("66378"),
                      n.e("17244"),
                      n.e("53416"),
                      n.e("60200"),
                  ]).then(n.bind(n, 4027));
                  return (n) => (0, r.jsx)(e, { ...n, channel: t, selected: !1 });
              });
    };
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: i,
                audio: a,
                video: s,
                stream: l,
                isCurrentUserInThisDMCall: o,
                isIncomingCall: d,
                isOngoingCall: c,
                unread: u,
                treeItemProps: _,
            } = this.props,
            { hovered: E, animating: A } = this.state,
            h = e.isMultiUserDM() && null == e.icon,
            I = () =>
                (0, r.jsx)(w.j, {
                    to: eL.BVt.CHANNEL(eL.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  eu.intl.formatToPlainString(eu.t.hKarnZ, { name: t, mentions: i }),
                                  d ? eu.intl.string(eu.t["fk1/bX"]) : c ? eu.intl.string(eu.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: h ? void 0 : this.getChannelIcon(),
                    backgroundStyle: h ? "on-hover" : "always",
                    children: h
                        ? (0, r.jsx)(tc.A, {
                              channel: e,
                              size: tr._3.SIZE_40,
                              facepileSizeOverride: tr._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, r.jsx)(ti.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, r.jsxs)(B.c, {
                children: [
                    (0, r.jsx)(V.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, r.jsx)(tg, {
                        channel: e,
                        children: (0, r.jsx)(U.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, H.wN)(i, void 0, !0) : null,
                            upperBadge: (0, H.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, ta.o6)(i) },
                            children: I(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tO = a.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, td.Ay)(e.channel),
        a = (0, u.Vd)(n, 2),
        s = (0, E.bG)([tn.A], () => tn.A.getChannelId(), []),
        l = (0, E.bG)([D.A], () => D.A.getMode(n), [n]),
        o = (0, E.bG)([Y.A], () => Y.A.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, E.bG)([eO.Ay], () => eO.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, E.bG)([$.Ay], () => $.Ay.getChannelId(), []),
        _ = (0, E.bG)([ea.Ay], () => ea.Ay.getMentionCount(n), [n]),
        A = s === n,
        { isIncomingCall: h, isOngoingCall: f } = (0, tl.A)(n),
        p = !1,
        T = !1;
    (A || d) && ((p = l === eL._Of.VOICE), (T = l === eL._Of.VIDEO));
    let g = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(tC, {
        ...e,
        ref: t,
        channelName: i,
        unread: _ > 0,
        selected: c === n,
        badge: _,
        audio: p,
        video: T,
        stream: o,
        isCurrentUserInThisDMCall: A,
        isIncomingCall: h,
        isOngoingCall: f,
        size: g,
        treeItemProps: a,
    });
});
function tR() {
    (0, E.bG)([K.A], () => K.A.getPrivateChannelsVersion());
    let e = K.A.getMutablePrivateChannels(),
        t = (0, E.yK)([eQ.A], () => eQ.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, E.cf)([tn.A], () => ({
            selectedVoiceGuildId: tn.A.getGuildId(),
            selectedVoiceChannelId: tn.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, r.jsx)(tO, { channel: n }, n.id);
        }),
        l = null == n && null != i ? e[i] : null;
    return (
        null != l && s.unshift((0, r.jsx)(tO, { channel: l }, l.id)),
        (0, r.jsx)(p.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eu.intl.string(eu.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, r.jsx)(tt.F, { component: a.Fragment, children: s }),
        })
    );
}
var tL = n(32880),
    tD = n(939249),
    ty = n(589340);
function tv(e) {
    let {
            children: t,
            text: n,
            disableWrapper: i = !1,
            disabled: s = !1,
            hideOnClick: o = !0,
            shouldShow: d,
            forceOpen: c,
            selected: u = !1,
        } = e,
        _ = a.useMemo(
            () =>
                null == n || s
                    ? null
                    : (0, r.jsx)(eI.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eD.A_,
                          children: n,
                      }),
            [n, s],
        ),
        E = i ? t : (0, r.jsx)("div", { className: l()(ty.p, { [ty.w]: u }), children: t });
    return (0, r.jsx)(em.m, {
        __unsupportedReactNodeAsText: _,
        position: "right",
        spacing: 12,
        hideOnClick: o,
        shouldShow: d,
        forceOpen: c,
        ariaHidden: !0,
        asContainer: !i,
        children: E,
    });
}
var tb = n(633435);
let tM = a.forwardRef(function (e, t) {
        let {
                id: n,
                onClick: i,
                onContextMenu: s,
                icon: o,
                selected: d,
                tooltip: c,
                upperBadge: _,
                lowerBadge: E,
                lowerBadgeSize: A,
                showPill: h = !0,
                className: I,
                "aria-label": f,
                children: p,
                onMouseEnter: T,
                onMouseLeave: m,
                onMouseDown: g,
            } = e,
            S = (0, u.Vd)(n),
            [N, C] = a.useState(!1),
            O = f ?? ("string" == typeof c ? c : void 0);
        return (0, r.jsxs)(B.c, {
            children: [
                h ? (0, r.jsx)(V.A, { overlay: !0, hovered: N, selected: d }) : null,
                (0, r.jsx)(tv, {
                    text: c,
                    selected: d,
                    children: (0, r.jsx)(U.Q, {
                        selected: !0,
                        upperBadge: _,
                        lowerBadge: E,
                        lowerBadgeSize: A,
                        children: (0, r.jsx)(tD.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                T?.(), C(!0);
                            },
                            onMouseLeave: () => {
                                m?.(), C(!1);
                            },
                            onMouseDown: g,
                            className: l()(tb.oZ, I, { [tb.wH]: d || N }),
                            onClick: i,
                            "aria-label": O,
                            "aria-selected": d,
                            onContextMenu: s,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != o && (0, r.jsx)(o, { className: tb.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                p,
            ],
        });
    }),
    tP = "DOWNLOAD_APPS";
function tU() {
    let e = (0, f.useModalsStore)((e) => (0, f.hasModalOpenSelector)(e, tP));
    return (0, r.jsx)(tM, {
        id: "app-download-button",
        onClick: () => {
            (0, f.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, r.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tP },
            );
        },
        selected: e,
        tooltip: eu.intl.string(eu.t.Z7jwrJ),
        icon: tL.s,
    });
}
var tw = n(245604),
    tG = n(272613),
    tx = n(398884),
    tk = n(772366),
    tF = n(728321),
    tV = n(260509),
    tB = n(284009),
    tH = n.n(tB),
    tj = n(651300),
    tW = n(66834),
    tY = n(174459),
    tK = n(896970);
function t$(e) {
    let t = a.useRef(null),
        n = e.map((e) => e[0]);
    return (
        a.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
                let n = t.current;
                if (null != n) for (let [t, i] of e) t ? n.classList.add(i) : n.classList.remove(i);
            });
            return () => cancelAnimationFrame(n);
        }, n),
        t
    );
}
function tz(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        tH()(t.type !== ez.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== ez.PJ.FOLDER || t.type !== ez.PJ.FOLDER) &&
                (e.type !== ez.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                i && t.type !== ez.PJ.FOLDER && tY.default.track(eL.HAw.GUILD_FOLDER_CREATED),
                    tW.A.moveById(r, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function tq(e) {
    let { name: t, targetNode: n, combine: i, below: s } = e,
        l = a.useMemo(() => tz([ez.PJ.GUILD, ez.PJ.FOLDER], n, s, i), [n, s, i]),
        [{ canDrop: o, isOver: d }, c] = (0, tj.H)(l),
        u = t$([
            [o, tK.OP],
            [d, tK.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            (u.current = e), c(e);
        },
        "data-dnd-name": eu.intl.formatToPlainString(eu.t["A5aDw+"], { itemName: t }),
        className: tK.aC,
    });
}
function tZ(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: s, isOver: o }, d] = (0, tj.H)(() => tz([ez.PJ.GUILD], n, !0, !0));
    a.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = t$([
        [s, tK.OP],
        [o, tK.NQ],
    ]);
    return (0, r.jsx)(tv, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                (c.current = e), d(e);
            },
            "data-dnd-name": eu.intl.formatToPlainString(eu.t.qiQ0QI, { itemName: t }),
            className: l()(tK.dw, {}),
        }),
    });
}
let tX = a.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: a = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: tK.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(tq, { name: t, targetNode: n, below: a }),
            l ? (0, r.jsx)(tZ, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function tQ(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: a }, s] = (0, tj.H)(() => tz([ez.PJ.GUILD], n, !0, !0)),
        l = t$([[a, tK.a7]]),
        o = t$([
            [a, tK.NQ],
            [i, tK.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: l,
        className: tK.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: tK.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    (o.current = e), s(e);
                },
                "aria-label": `At end of ${t}`,
                className: tK.aC,
            }),
        }),
    });
}
function tJ(e) {
    let { children: t } = e,
        [, n] = (0, tj.H)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var t0 = n(819638),
    t1 = n(441174);
let t2 = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function t3(e) {
    (0, ts.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function t4(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, E.yK)([eW.A], () => eW.A.getGuildsArray()),
        s = (0, E.bG)([eC.default], () => eC.default.getCurrentUser()),
        l = a.useMemo(() => i.some((e) => (0, tV.bM)(e, s)), [i, s]),
        o = (0, f.useModalsStore)((e) => (0, f.hasModalOpenSelector)(e, t0.fc)),
        { analyticsLocations: d } = (0, L.Ay)();
    return (0, r.jsx)("div", {
        className: t1.Uq,
        children: (0, r.jsxs)(tF.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: t2,
            position: "right",
            disabled: t,
            children: [
                (0, r.jsx)(tM, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: function () {
                        (0, tx.Sn)()
                            ? (0, tk.A)({
                                  analyticsSource: { page: eL.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eL.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eL.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : tG.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: t3,
                    tooltip: eu.intl.string(eu.t.l5WIbf),
                    icon: tw.U,
                }),
                null != n &&
                    (0, r.jsx)(tX, { name: eu.intl.string(eu.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var t6 = n(565787),
    t5 = n(791606),
    t7 = n(486020),
    t8 = n(184291);
function t9(e) {
    let [t, i] = a.useState(!1),
        s = (0, u.Vd)(`guild-${e.id}`);
    return (0, r.jsx)(B.c, {
        children: (0, r.jsx)(tv, {
            text: e.name,
            children: (0, r.jsx)(U.Q, {
                className: t8.o,
                selected: t,
                lowerBadge: (0, r.jsx)(ta.fk, { icon: (0, t6.k)(t5.A), disableColor: !0, className: t8._ }),
                children: (0, r.jsx)(w.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        i(!0);
                    },
                    onMouseLeave: function () {
                        i(!1);
                    },
                    onClick: function () {
                        (0, f.openModalLazy)(async () => {
                            let { default: t } = await n.e("42945").then(n.bind(n, 537560));
                            return (n) => (0, r.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? t7.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var ne = n(696292),
    nt = n(836480),
    nn = n(533129),
    ni = n(726845),
    nr = n(837057),
    na = n(310419),
    ns = n(488995),
    nl = n(324580),
    no = n(190107);
let nd = a.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: s, className: l } = e,
        o = a.useCallback(() => {
            (0, nn.WL)({ source: ns.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== s ? ns.GlobalDiscoveryTab.QUESTS : ni.A.getField("selectedTab");
            switch (e) {
                case ns.GlobalDiscoveryTab.QUESTS:
                    return (0, nr.transitionToGlobalDiscovery)({
                        tab: ns.GlobalDiscoveryTab.QUESTS,
                        location: no.rE.DISCOVERY_COMPASS,
                        questContent: ne.u.DISCOVERY_COMPASS,
                        questId: s,
                    });
                case ns.GlobalDiscoveryTab.SERVERS:
                    return (0, nr.transitionToGlobalDiscovery)({
                        tab: ns.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nl.J8.GUILDS_BAR,
                    });
                case ns.GlobalDiscoveryTab.APPS:
                    return (0, nr.transitionToGlobalDiscovery)({
                        tab: ns.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: na.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, nr.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [s]);
    return (0, r.jsx)(tM, {
        id: "guild-discover-button",
        ref: t,
        className: l,
        onClick: () => {
            o(), void 0 !== i && i();
        },
        selected: n,
        tooltip: eu.intl.string(eu.t["4nEZLk"]),
        icon: nt.Q,
    });
});
var nc = n(506774),
    nu = n(509963),
    n_ = n(111159),
    nE = n(793943),
    nA = n(428262),
    nh = n(350972),
    nI = n(677056),
    nf = n(526162),
    np = n(174197);
function nT() {
    let [e, t] = (0, E.yK)([eC.default, nf.A], () => [
            nf.A.getCurrentDesktopIcon(),
            nA.Ay.isPremium(eC.default.getCurrentUser()),
        ]),
        n = (0, nE.fy)().activePanel === nE.HP.APP_ICON,
        i = (0, np.gG)(e),
        a = i.id !== nh.LW.DEFAULT && (t || n),
        s = (0, r.jsx)(n_.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && a ? (0, r.jsx)(nI.A, { id: i.id, size: np.N8.SIZE_48 }) : s;
}
var nm = n(531260),
    ng = n(411976),
    nS = n(912309),
    nN = n(400492),
    nC = n(354670),
    nO = n(619921),
    nR = n(340829),
    nL = n(966846),
    nD = n(674378),
    ny = n(394953),
    nv = n(202541),
    nb = n(235079),
    nM = n(143170);
let nP = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nU(e) {
    let { selected: t, user: n, badge: i, link: s, showProgressBadge: l } = e,
        [o, d] = a.useState(!1),
        [c, _] = a.useState(!1),
        [E, A] = a.useState(null),
        [h, I] = a.useState(0),
        f = (0, u.Vd)("home"),
        p = (0, nE.fy)().activePanel === nE.HP.APP_ICON;
    function T() {
        A(null), I(0), clearTimeout(E);
    }
    if (null == n) return null;
    let m = eu.intl.string(eu.t.YUU0RF);
    c && (m = nc.w.get(eL.wqg) ? eu.intl.string(eu.t["nkq1l+"]) : eu.intl.string(eu.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, r.jsx)(nu.A, { className: nM.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, r.jsx)(U.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, H.wN)(i) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, ta.o6)(i) },
            children: (0, r.jsx)(w.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), I(h + 1), 15 === h)) {
                        T();
                        let e = !nc.w.get(eL.wqg);
                        nc.w.set(eL.wqg, e),
                            e && nc.w.set(nb.L, !0),
                            e ? (0, nN.Ak)("discodo") : (0, nN.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: eu.intl.string(eu.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...f,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eL.liQ.GUILD_CHANNEL,
                            section: eL.JJy.NAVIGATION,
                            object: eL.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, r.jsx)(nT, {}),
            }),
        });
    return (0, r.jsx)("div", {
        className: nM.Uq,
        children: (0, r.jsx)(tF.A, {
            inlineSpecs: nP,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(B.c, {
                children: [
                    (0, r.jsx)(V.A, { overlay: !0, selected: t, hovered: o }),
                    (0, r.jsx)(tv, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nw() {
    let e = (function () {
            let e = (0, j.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eL.BVt.GUILD_DISCOVERY) || t.startsWith(eL.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eL.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, ny.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, E.bG)([nL.A, nR.A], () => {
            let e = (0, nu.v)(nL.A.activeItems, nR.A),
                { total: t, progress: n } = nD.zY(e),
                i = nD.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nS.kX)(),
        i = Object.keys(nv.TP),
        a = (0, nm.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, E.cf)([nC.A], () => ({
            unviewedTrialCount: nC.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nC.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === nv.xc.NONE ? s + l : 0,
        d = (0, E.bG)([eC.default], () => eC.default.getCurrentUser()),
        u = (0, ng.W)(),
        _ = n + o + u,
        A = _ === o && o > 0 && n + u === 0,
        h = nO.A.getHomeLink();
    return (
        A && (h = eL.BVt.APPLICATION_STORE),
        (0, r.jsx)(nU, {
            selected: e,
            user: d,
            selectedChannelId: $.Ay.getChannelId(eL.ME),
            badge: _,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nG = n(550281);
function nx(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(B.c, { children: (0, r.jsx)("div", { className: l()(nG.t, { [nG.I]: t }) }) });
}
var nk = n(349288),
    nF = n(695366),
    nV = n(919638),
    nB = n(818348),
    nH = n(135492);
function nj() {
    let e = (0, E.bG)([nV.A, eW.A], () => nV.A.unavailableGuilds.filter((e) => null == eW.A.getGuild(e)).length),
        t = (0, u.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(B.c, {
              children: (0, r.jsx)(tv, {
                  text: eu.intl.format(eu.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nk.Anchor, {
                      href: nB.qF.STATUS,
                      target: "_blank",
                      className: nH.h,
                      "aria-label": eu.intl.formatToPlainString(eu.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, r.jsx)(nF.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nW = n(930235),
    nY = n(317097),
    nK = n(319060),
    n$ = n(866323),
    nz = n(817281),
    nq = n(534409),
    nZ = n(240248),
    nX = n(678708),
    nQ = n(259678),
    nJ = n(140735),
    n0 = n(548118),
    n1 = n(195451);
function n2(e) {
    let { guildId: t, animate: n } = e,
        i = (0, E.bG)([eW.A], () => eW.A.getGuild(t), [t]),
        a = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", { className: l()(n1.VL, n1.zU), children: (0, r.jsx)(nF.E, { color: "currentColor" }) })
        : (0, r.jsx)(n0.Ay, {
              guild: i,
              animate: n,
              size: n0.Ay.Sizes.MINI,
              iconSize: a,
              lossless: !0,
              className: n1.VL,
              tabIndex: -1,
          });
}
function n3(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: a } = t,
        s = n && i,
        o = (0, r.jsx)("div", {
            className: n1.hJ,
            children: (0, r.jsx)("div", {
                className: n1.Eh,
                children: (0, r.jsx)(nX.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, r.jsx)("div", {
            className: n1.qJ,
            children: (0, r.jsx)("div", {
                className: n1.jg,
                children: a.slice(0, 4).map((e) => (0, r.jsx)(n2, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l()({ [n1.NG]: s, [n1.yd]: !s }),
        children: [!s && o, d],
    });
}
function n4(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: i,
            mediaState: s,
            mentionCount: l = 0,
            isMentionLowImportance: o,
            tooltipName: d,
            folderGroupId: c,
            folderButtonContent: u,
            onClick: _,
            onContextMenu: E,
            onHoverChange: A,
            onKeyDown: h,
            treeItemProps: { onFocus: f, ...p },
            "aria-setsize": T,
            "aria-posinset": m,
        } = e,
        [g, S] = a.useState(!1),
        N = a.useCallback(() => {
            i || S(!0), A?.(!0);
        }, [i, A]),
        C = a.useCallback(() => {
            i || S(!1), A?.(!1);
        }, [i, A]),
        O = n || null == s ? null : (0, H.oi)(s),
        R =
            !n && l > 0
                ? (0, H.wN)(
                      l,
                      o ? I.A.colors.BACKGROUND_MOD_STRONG.css : I.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(nQ.vN, {
        children: (0, r.jsxs)(tD.D, {
            className: n1.H3,
            onClick: _,
            onContextMenu: E,
            onMouseEnter: N,
            onMouseLeave: C,
            onKeyDown: h,
            onFocus: f,
            focusProps: { enabled: !1 },
            ...p,
            role: "treeitem",
            "aria-setsize": T,
            "aria-posinset": m,
            "aria-expanded": n,
            "aria-owns": c,
            children: [
                (0, r.jsx)(nJ.A, {
                    children: eu.intl.formatToPlainString(eu.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, r.jsx)(U.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: O,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, ta.o6)(l) },
                    children: (0, r.jsx)("div", {
                        className: n1.vA,
                        children:
                            null != u
                                ? (0, r.jsx)("div", { className: n1.hJ, children: u })
                                : (0, r.jsx)(n3, { folderNode: t, hovered: g, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var n6 = n(573435),
    n5 = n(32294);
function n7(e) {
    let { className: t, isFolder: n } = e,
        i = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(n6.Ay, {
        mask: n6.Ay.Masks.SQUIRCLE,
        className: l()(t, n5.OL, { [n5.lQ]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: n5.ZU }),
    });
}
var n8 = n(114329),
    n9 = n(167546);
let ie = (0, nZ.xI)(nK.A.FOLDER_ITEM_ANIMATION_DURATION),
    it = (0, ti.animated)(p.B),
    ii = a.memo(function (e) {
        var t;
        let n,
            i,
            s,
            {
                folderNode: o,
                setNodeRef: d,
                selected: c,
                expanded: _,
                mediaState: E,
                mentionCount: A = 0,
                isMentionLowImportance: h,
                unread: f = !1,
                defaultFolderName: p,
                draggable: T = !1,
                sorting: g = !1,
                onDragStart: S,
                onDragEnd: N,
                onExpandCollapse: C,
                onContextMenu: O,
                renderChildNode: R,
                folderButtonSize: L,
                folderButtonContent: D,
                "aria-setsize": y,
                "aria-posinset": v,
            } = e,
            { id: b, name: M, children: P } = o,
            [U, w] = a.useState(!1),
            [G, x] = a.useState(!1),
            k = U || G,
            F = (0, nq.qK)("FolderItem");
        a.useEffect(() => {
            g && w(!1);
        }, [g]);
        let [{ dragging: H }, j] = (0, nW.i)({
                type: ez.PJ.FOLDER,
                item: () => (S?.(), { type: ez.PJ.FOLDER, nodeId: o.id }),
                end() {
                    N?.(), (0, nz.um)(eY.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            W = a.useCallback((e) => {
                x(e);
            }, []),
            Y = a.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !_) || ("ArrowLeft" === e.key && _)) && C();
                },
                [C, _],
            ),
            K = null != M && "" !== M ? M : null != p && "" !== p ? p : eu.intl.string(eu.t.xV9hVh),
            $ = (0, u.Vd)(`${b}`),
            z = `folder-items-${b}`,
            q =
                ((t = P.length),
                (n = (0, m.r)(I.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (s = (0, m.r)(I.A.space.SPACE_XS))) - s + (s - (n - i) / 2) + (0, m.r)(I.A.space.SPACE_4)),
            Z = (0, n$.p)(!H && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: ie },
            }),
            X = a.useCallback((e) => d?.(b, e), [d, b]),
            Q = (0, r.jsxs)(B.c, {
                children: [
                    (0, r.jsx)(V.A, { overlay: !0, disabled: H || _, hovered: U, selected: c, unread: f }),
                    (0, r.jsx)(tv, {
                        text: K,
                        disabled: g,
                        selected: c,
                        disableWrapper: !0,
                        children: (0, r.jsx)("div", {
                            ref: T
                                ? (e) => {
                                      j(e);
                                  }
                                : void 0,
                            className: l()(n1.MJ, { [n1.L0]: "icon" === L || F, [n9.oR]: !H && G && !_ }),
                            "data-dnd-name": K,
                            children: H
                                ? (0, r.jsx)(n7, { isFolder: !0 })
                                : (0, r.jsx)(n4, {
                                      folderNode: o,
                                      expanded: _,
                                      sorting: g,
                                      mediaState: E,
                                      mentionCount: A,
                                      isMentionLowImportance: h,
                                      tooltipName: K,
                                      folderGroupId: z,
                                      onClick: C,
                                      onContextMenu: O,
                                      onHoverChange: w,
                                      onKeyDown: Y,
                                      treeItemProps: $,
                                      folderButtonContent: D,
                                      "aria-setsize": y,
                                      "aria-posinset": v,
                                  }),
                        }),
                    }),
                    T ? (0, r.jsx)(tX, { name: K, targetNode: o, onDragOverChanged: W }) : null,
                ],
            }),
            J = null != o.color ? o.color : n8.DO,
            ee = J === n8.DO ? void 0 : (0, nY.Hl)(J);
        return (0, r.jsxs)("div", {
            ref: X,
            className: l()(n1.qc, { [n1.Av]: _, [n1.Lg]: k }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": G,
            children: [
                !H && _ && (0, r.jsx)("span", { className: n1.GO }),
                Q,
                Z((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            it,
                            {
                                id: z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: n1.TN,
                                style: { height: e.height.to((e) => e * q) },
                                "aria-label": o.name,
                                children: P.map((t, n) => R(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                T && _ ? (0, r.jsx)(tQ, { name: K, targetNode: o }) : null,
            ],
        });
    });
var ir = n(354583);
let ia = a.memo(function (e) {
    let t,
        i,
        s,
        l,
        o,
        d,
        c,
        u,
        _,
        A,
        h,
        { folderNode: I, ...f } = e,
        { id: p, name: T, color: m, children: g } = I,
        S = g.map((e) => e.id),
        N = (0, j.A)((e) => e.guildId),
        C = (0, E.bG)([eX.A], () => eX.A.isFolderExpanded(p)),
        O = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = eW.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eR.Vq),
                n = 2 * eL.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(I),
        R =
            ((t = (0, E.bG)([tn.A], () => tn.A.getGuildId())),
            (i = I.children.map((e) => e.id)),
            (s = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, E.bG)([tn.A], () => tn.A.getChannelId())),
            (_ = null != (u = (0, ir.A)()?.guild_id) && i.includes(u)),
            (A = (0, E.bG)([z.A], () => null != c && z.A.hasVideo(c), [c])),
            (h = (0, E.bG)([Y.A], () => Y.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != h && null != h.guildId && i.includes(h.guildId))),
            a.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: _, isCurrentUserConnected: s }),
                [l, o, d, _, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: D,
            unread: y,
        } = (0, E.cf)([ei.default], () => ({
            mentionCount: S.map((e) => ei.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => ei.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => ei.default.hasUnread(e)),
        })),
        v = a.useCallback(() => {
            tW.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = a.useCallback(
            (e) => {
                (0, ts.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: y || L > 0 });
                });
            },
            [p, T, m, y, L],
        );
    return (0, r.jsx)(ii, {
        ...f,
        folderNode: I,
        expanded: C,
        selected: null != N && S.includes(N),
        mentionCount: L,
        isMentionLowImportance: D,
        unread: y,
        mediaState: R,
        defaultFolderName: O,
        onExpandCollapse: v,
        onContextMenu: b,
    });
});
var is = n(113494),
    il = n(821124),
    io = n(212455);
function id(e) {
    let t = e?.features.has(eL.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, E.bG)([io.A, eC.default, ej.Ay], () => {
            if (null == e) return;
            let t = io.A.getRequest(e.id),
                n = eC.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = ej.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, il.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var ic = n(347951),
    iu = n(478437),
    i_ = n(811024),
    iE = n(508654),
    iA = n(233993),
    ih = n(446600),
    iI = n(95701),
    ip = n(280450);
let iT = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-06-dont-badge-muted-vcs",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function im(e) {
    return iT.useConfig({ location: e }).enabled;
}
function ig(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : er.A;
    return null != e && e.type !== iu.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eL.hVb.VIEW_CHANNEL, e);
}
function iS(e) {
    let t = (0, E.bG)([es.Ay], () => es.Ay.isMuted(e)),
        n = im("useGuildMediaState"),
        i = (0, iE.BP)(e),
        r = (0, E.yK)([k.Ay, tu.A], () =>
            k.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = tu.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : tu.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        a = (0, F.H)(r[0]?.location),
        s = (0, i_.Gp)(a),
        {
            guildHasVoice: l,
            guildHasVideo: o,
            selectedVoiceChannelHasVideo: c,
        } = (0, E.cf)([$.Ay, z.A, eW.A, er.A, K.A, es.Ay], () => {
            var i;
            let r = $.Ay.getVoiceChannelId(),
                a = eW.A.getGuild(e)?.afkChannelId,
                s = z.A.getUsersWithVideo(e),
                l =
                    ((i = z.A.getVoiceStates(e)),
                    d()(i)
                        .filter((e) => !tu.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let t in l) {
                        let i = l[t].channelId;
                        if (
                            null != i &&
                            ig(K.A.getBasicChannel(i), a ?? void 0, er.A) &&
                            (!n || !es.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let t of s) {
                        let i = l[t]?.channelId;
                        if (
                            null != i &&
                            ig(K.A.getBasicChannel(i), a ?? void 0, er.A) &&
                            (!n || !es.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != r && z.A.hasVideo(r),
            };
        }, [e, t, n]),
        u = ip.default.getId();
    return (0, E.cf)([$.Ay, K.A, k.Ay, ih.A, Y.A, er.A, es.Ay], () => {
        let a = $.Ay.getVoiceChannelId(),
            d = K.A.getChannel(a)?.guild_id === e,
            _ = !1,
            E = !1,
            A = !1,
            h = !1,
            I = !1,
            f = !1;
        if (!d && t)
            return {
                audio: _,
                video: h,
                screenshare: I,
                liveStage: A,
                activeEvent: E,
                activity: f,
                isCurrentUserConnected: !1,
            };
        let p = q.default.keys(ih.A.getStageInstancesByGuild(e)).some((e) => {
                let t = K.A.getChannel(e);
                return null != t && er.A.can(iA.Gk, t);
            }),
            T = d && (K.A.getChannel(a)?.isGuildStageVoice() ?? !1),
            m = !!d && null != Y.A.getActiveStreamForUser(u, e),
            g = Y.A.getAllApplicationStreams()
                .filter((e) => !tu.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e && (!n || !es.Ay.isGuildOrCategoryOrChannelMuted(e, t.channelId))),
            S = d && c,
            N = (() => {
                if (s) return r.length > 0;
                for (let e of r) {
                    let t = K.A.getChannel((0, F.H)(e.location));
                    if (null != t && (0, iI.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            C = k.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            d
                ? ((_ = !0), (E = i?.channel_id === a), (A = T), (h = S), (I = m), (f = C))
                : ((_ = l), (E = null != i), (A = p), (h = o), (I = g), (f = N)),
            {
                audio: _,
                video: h,
                screenshare: I,
                liveStage: A,
                activeEvent: E,
                activity: f,
                isCurrentUserConnected: d || T,
            }
        );
    }, [e, t, c, u, s, r, i, l, o, n]);
}
var iN = n(607399),
    iC = n(702841),
    iO = n(658128),
    iR = n(976860),
    iL = n(676279);
function iD(e) {
    let { guild: t, show: n, active: i, onAnimationStart: a, onAnimationRest: s } = e,
        o = {},
        d = {};
    (o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, m.r)(I.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, m.r)(I.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, n$.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: s });
    return (0, r.jsx)(r.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: n1.qc,
                        children: (0, r.jsx)("div", {
                            className: l()(n1.MJ, n1.L0),
                            style: { margin: 0 },
                            children: (0, r.jsx)(ti.animated.div, {
                                className: n1.NG,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: n1.qJ,
                                    children: (0, r.jsx)("div", {
                                        className: n1.jg,
                                        children: (0, r.jsx)(n0.Ay, {
                                            guild: t,
                                            size: n0.Ay.Sizes.SMOL,
                                            className: n1.VL,
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    },
                    i.key,
                ),
        ),
    });
}
var iy = n(454938),
    iv = n(714991),
    ib = n(107773),
    iM = n(513461),
    iP = n(164956),
    iU = n(624265),
    iw = n(970278),
    iG = n(808728);
function ix(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, r.jsx)(e, { className: eD.RI, color: "currentColor" }),
                  (0, r.jsx)(eg.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function ik(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eI.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eu.intl.string(eu.t.fpKdS1),
          })
        : (0, r.jsx)(tI.A, { muteConfig: t, className: n });
}
function iF(e) {
    let t,
        n,
        i,
        s,
        o,
        c,
        u,
        _,
        A,
        h,
        I,
        f,
        p,
        T,
        m,
        g,
        S,
        N,
        C,
        O,
        R,
        { guild: L } = e,
        D = L.id,
        {
            voiceUsersToShow: y,
            stageSpeakers: v,
            numStageListeners: b,
            streamUsersToShow: M,
            embeddedActivitiesUsers: P,
        } = ((t = L.id),
        (n = im("useGuildTooltipActivity")),
        (i = (0, E.yK)(
            [iG.Ay, iw.A, es.Ay],
            () => [
                ...iG.Ay.getChannels(t)
                    [iG.vM].filter((e) => {
                        let { channel: i } = e;
                        return i.type === eL.rbe.GUILD_VOICE && (!n || !es.Ay.isGuildOrCategoryOrChannelMuted(t, i.id));
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(iw.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t, n],
        )),
        (s = (0, iU.Ay)(t)),
        (o = a.useMemo(() => s.map((e) => e.id), [s])),
        (c = (0, E.bG)([eO.Ay], () => eO.Ay.getVoiceStates(t), [t])),
        (u = (0, E.yK)([tu.A], () => tu.A.getBlockedOrIgnoredIDs())),
        (_ = d().flatMap(i, (e) =>
            e === L.afkChannelId
                ? []
                : t_(
                      (c[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      u,
                  ),
        )),
        (A = (0, E.yK)([eS.A], () =>
            d().flatMap(o, (e) =>
                e === L.afkChannelId
                    ? []
                    : t_(
                          eS.A.getMutableParticipants(e, eN.ip.SPEAKER)
                              .filter((e) => e.type === eN.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          u,
                      ),
            ),
        )),
        (h = (0, E.bG)([eS.A], () => {
            let e = 0;
            for (let t of o) e += eS.A.getParticipantCount(t, eN.ip.AUDIENCE);
            return e;
        })),
        (I = (0, E.yK)(
            [Y.A, es.Ay],
            () =>
                tE(
                    Y.A.getAllApplicationStreams()
                        .filter(
                            (e) => e.guildId === t && (!n || !es.Ay.isGuildOrCategoryOrChannelMuted(t, e.channelId)),
                        )
                        .map((e) => e.ownerId),
                    u,
                ),
            [u, t, n],
        )),
        (f = (0, E.yK)(
            [k.Ay],
            () =>
                tE(
                    k.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    u,
                ),
            [t, u],
        )),
        (p = (0, E.yK)([eC.default], () => t_(f.map((e) => eC.default.getUser(e))), [f])),
        (T = (0, E.yK)([eC.default], () => I.map((e) => eC.default.getUser(e)), [I])),
        (g = t_((m = _.filter((e) => !I.includes(e.id) && !f.includes(e.id))))),
        (S = T.filter((e) => null != e && !f.includes(e.id))),
        (N = (0, E.bG)([tA.A], () => tA.A.getUserAffinitiesMap(), [])),
        (C = a.useMemo(() => (0, th.L)(g, N, "GuildTooltip - nonBlockedUsers"), [g, N])),
        (O = a.useMemo(() => (0, th.L)(A, N, "GuildTooltip - stageSpeakers"), [A, N])),
        (R = a.useMemo(() => (0, th.L)(S, N, "GuildTooltip - streamUsers"), [S, N])),
        {
            voiceUsersToShow: C,
            stageSpeakers: O,
            numStageListeners: h,
            streamUsersToShow: R,
            embeddedActivitiesUsers: a.useMemo(() => (0, th.L)(p, N, "GuildTooltip - embeddedActivitiesUsers"), [p, N]),
            hasActivity: A.length > 0 || m.length > 0 || S.length > 0 || p.length > 0,
        }),
        U = ix(ef.H, y, D),
        w =
            0 === v.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eD.nM,
                      children: [
                          (0, r.jsx)(eA.q, { size: "lg", color: "currentColor", className: eD.RI }),
                          (0, r.jsx)(eg.Ay, { guildId: D, users: v, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eD.GZ,
                              children: [
                                  (0, r.jsx)(eh.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eI.E, {
                                      className: eD._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: b,
                                  }),
                              ],
                          }),
                      ],
                  }),
        G = ix(ep.F, M, D),
        x = ix(eT.k, P, D),
        { isMuted: F, muteConfig: V } = (0, E.cf)(
            [es.Ay],
            () => ({ isMuted: es.Ay.isMuted(D), muteConfig: es.Ay.getMuteConfig(D) }),
            [D],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            w,
            U,
            G,
            x,
            F ? (0, r.jsx)(ik, { muteConfig: V, className: l()(eD.LM, { [eD.Sx]: null != U || null != G }) }) : null,
        ],
    });
}
function iV(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(eI.E, {
        className: eD.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case iM.B5.SUBMITTED:
                    return eu.intl.string(eu.t["9KFC98"]);
                case iM.B5.REJECTED:
                    return eu.intl.string(eu.t["TQY/Rd"]);
                case iM.B5.APPROVED:
                    return eu.intl.string(eu.t.WXHcq5);
                default:
                    return eu.intl.string(eu.t.fjHFC8);
            }
        })(t),
    });
}
function iB(e) {
    let { guild: t } = e,
        n = (0, iy.A)(t),
        i = id(t),
        a = null != i ? (0, r.jsx)(iV, { guildJoinRequestStatus: i }) : null,
        s = (0, r.jsx)(iF, { guild: t }),
        o = (0, E.bG)([iP.A], () => iP.A.isViewingRoles(t.id)),
        d = (0, ic.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l()(eD.nM, eD.Dl),
                children: [
                    n
                        ? (0, r.jsx)(ib.A, { disableBoostClick: !0, guild: t, className: eD.WX })
                        : (0, r.jsx)(iv.A, { guild: t, size: 20, className: eD.aL }),
                    (0, r.jsx)("span", { className: l()(eD.cN, eD.NT), children: t.name }),
                ],
            }),
            d
                ? (0, r.jsx)(eI.E, {
                      className: eD.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eu.intl.string(eu.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, r.jsx)(eI.E, {
                      className: eD.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eu.intl.string(eu.t["5LwN89"]),
                  })
                : (a ?? s),
        ],
    });
}
function iH(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: s } = e,
        l = a.useMemo(
            () =>
                n
                    ? null
                    : (0, r.jsx)(eI.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eD.A_,
                          children: (0, r.jsx)(iB, { guild: t }),
                      }),
            [n, t],
        );
    return (0, r.jsx)(em.m, {
        __unsupportedReactNodeAsText: l,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: s,
    });
}
let ij = { analyticsSource: { page: eL.liQ.GUILD_CHANNEL, section: eL.JJy.CHANNEL_LIST, object: eL.ZSU.CHANNEL } };
function iW(e, t) {
    (0, ts.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("94614"),
            n.e("38108"),
            n.e("31668"),
            n.e("35285"),
            n.e("53969"),
            n.e("40351"),
            n.e("6389"),
            n.e("48180"),
            n.e("94629"),
            n.e("67792"),
            n.e("73153"),
            n.e("14767"),
            n.e("15214"),
            n.e("76684"),
            n.e("85631"),
            n.e("21532"),
            n.e("75030"),
            n.e("47899"),
            n.e("8248"),
            n.e("11895"),
            n.e("37175"),
            n.e("1248"),
            n.e("24092"),
            n.e("33004"),
            n.e("3557"),
            n.e("83118"),
            n.e("98942"),
            n.e("31076"),
            n.e("66806"),
            n.e("23102"),
            n.e("2285"),
            n.e("97726"),
            n.e("42394"),
            n.e("44459"),
            n.e("98986"),
            n.e("18379"),
            n.e("60411"),
            n.e("93637"),
            n.e("45807"),
            n.e("26572"),
            n.e("39737"),
            n.e("85391"),
            n.e("56356"),
            n.e("18307"),
            n.e("5270"),
            n.e("42293"),
            n.e("60574"),
            n.e("82222"),
            n.e("18917"),
            n.e("94450"),
            n.e("86307"),
            n.e("3574"),
            n.e("711"),
            n.e("25457"),
            n.e("40981"),
            n.e("63576"),
            n.e("50693"),
            n.e("6487"),
            n.e("69794"),
            n.e("20661"),
            n.e("46809"),
            n.e("18315"),
            n.e("17776"),
            n.e("78969"),
            n.e("77770"),
            n.e("61275"),
            n.e("49557"),
            n.e("30072"),
            n.e("18629"),
            n.e("48227"),
            n.e("13920"),
            n.e("99424"),
            n.e("670"),
            n.e("99496"),
            n.e("44565"),
            n.e("88563"),
            n.e("24212"),
            n.e("20459"),
            n.e("1301"),
            n.e("55983"),
            n.e("47519"),
            n.e("80197"),
            n.e("48132"),
            n.e("61686"),
            n.e("77873"),
            n.e("97312"),
            n.e("38469"),
            n.e("9009"),
            n.e("80126"),
            n.e("91072"),
            n.e("43422"),
            n.e("49181"),
            n.e("23651"),
            n.e("50766"),
            n.e("33925"),
            n.e("72723"),
            n.e("69977"),
            n.e("94149"),
            n.e("55286"),
            n.e("43325"),
            n.e("72026"),
            n.e("83536"),
            n.e("66756"),
            n.e("25167"),
            n.e("3650"),
            n.e("25996"),
            n.e("54948"),
            n.e("85251"),
            n.e("28634"),
            n.e("39644"),
            n.e("73432"),
            n.e("39086"),
            n.e("17104"),
            n.e("18021"),
            n.e("28212"),
            n.e("35353"),
            n.e("97551"),
            n.e("10743"),
            n.e("42745"),
            n.e("70148"),
            n.e("22878"),
            n.e("74318"),
            n.e("9"),
            n.e("10887"),
            n.e("99439"),
            n.e("74362"),
            n.e("13162"),
            n.e("78849"),
            n.e("75459"),
            n.e("43300"),
            n.e("32886"),
            n.e("92111"),
            n.e("64648"),
            n.e("95013"),
            n.e("76858"),
            n.e("6819"),
            n.e("55"),
            n.e("58921"),
            n.e("19728"),
            n.e("94373"),
            n.e("35238"),
            n.e("58818"),
            n.e("61833"),
            n.e("11689"),
            n.e("14520"),
            n.e("4142"),
            n.e("19059"),
            n.e("13586"),
            n.e("4349"),
            n.e("73763"),
            n.e("98833"),
            n.e("47352"),
            n.e("38280"),
            n.e("12345"),
            n.e("23241"),
            n.e("9172"),
            n.e("65420"),
            n.e("3056"),
            n.e("62329"),
            n.e("80263"),
            n.e("74725"),
            n.e("78015"),
            n.e("22570"),
            n.e("99998"),
            n.e("80759"),
            n.e("33587"),
            n.e("88391"),
            n.e("988"),
            n.e("54540"),
            n.e("32744"),
            n.e("21035"),
            n.e("26738"),
            n.e("41295"),
            n.e("69960"),
            n.e("46148"),
            n.e("91922"),
            n.e("79414"),
            n.e("64488"),
            n.e("91109"),
            n.e("61439"),
            n.e("39653"),
            n.e("39013"),
            n.e("99265"),
            n.e("40804"),
            n.e("45827"),
            n.e("64477"),
            n.e("77962"),
            n.e("96393"),
            n.e("16123"),
            n.e("73193"),
            n.e("78250"),
            n.e("42529"),
            n.e("31464"),
            n.e("3263"),
            n.e("54964"),
            n.e("76279"),
            n.e("51962"),
            n.e("35459"),
            n.e("2861"),
            n.e("63933"),
            n.e("42083"),
            n.e("20182"),
            n.e("47426"),
            n.e("202"),
            n.e("49273"),
            n.e("83647"),
            n.e("87085"),
            n.e("72118"),
            n.e("65831"),
            n.e("59729"),
            n.e("3240"),
            n.e("72767"),
            n.e("38647"),
            n.e("102"),
            n.e("25473"),
            n.e("48149"),
            n.e("46420"),
            n.e("19834"),
            n.e("51872"),
            n.e("75091"),
            n.e("27574"),
            n.e("21149"),
            n.e("99561"),
            n.e("49817"),
            n.e("67578"),
            n.e("45850"),
            n.e("21398"),
            n.e("50482"),
            n.e("62332"),
            n.e("8607"),
            n.e("5581"),
            n.e("49681"),
            n.e("69047"),
            n.e("96382"),
            n.e("62052"),
            n.e("71657"),
            n.e("22218"),
            n.e("64827"),
            n.e("63232"),
            n.e("7167"),
            n.e("84569"),
            n.e("61060"),
            n.e("10471"),
            n.e("40135"),
            n.e("60235"),
            n.e("77333"),
            n.e("6338"),
            n.e("47834"),
            n.e("18573"),
            n.e("97595"),
            n.e("47662"),
            n.e("44057"),
            n.e("55112"),
            n.e("28504"),
            n.e("31988"),
            n.e("62156"),
            n.e("44571"),
            n.e("34303"),
            n.e("40291"),
            n.e("2368"),
            n.e("33115"),
            n.e("97270"),
            n.e("73122"),
            n.e("8304"),
            n.e("93159"),
            n.e("55936"),
            n.e("89088"),
            n.e("69294"),
            n.e("94723"),
            n.e("62931"),
            n.e("30316"),
            n.e("45959"),
            n.e("58529"),
            n.e("81987"),
            n.e("58038"),
            n.e("71202"),
            n.e("75201"),
            n.e("76909"),
            n.e("6174"),
            n.e("93103"),
            n.e("28367"),
            n.e("81647"),
            n.e("91763"),
            n.e("11310"),
            n.e("76602"),
            n.e("7170"),
            n.e("21921"),
            n.e("7575"),
            n.e("40402"),
            n.e("72963"),
            n.e("52511"),
            n.e("54241"),
            n.e("24303"),
            n.e("53930"),
            n.e("42724"),
            n.e("93766"),
            n.e("13823"),
            n.e("71210"),
            n.e("21930"),
            n.e("59460"),
            n.e("39970"),
            n.e("76418"),
            n.e("40258"),
            n.e("92583"),
            n.e("43437"),
            n.e("66495"),
            n.e("98329"),
            n.e("9205"),
            n.e("8555"),
            n.e("88342"),
            n.e("30233"),
            n.e("86127"),
            n.e("46070"),
            n.e("88599"),
            n.e("75842"),
            n.e("36863"),
            n.e("21200"),
            n.e("72789"),
            n.e("54622"),
            n.e("76894"),
            n.e("25949"),
            n.e("44502"),
            n.e("17249"),
            n.e("71273"),
            n.e("89421"),
            n.e("67861"),
            n.e("1518"),
            n.e("79049"),
            n.e("9640"),
            n.e("62422"),
            n.e("90365"),
            n.e("23354"),
            n.e("66707"),
            n.e("52548"),
            n.e("17989"),
            n.e("35027"),
            n.e("37977"),
            n.e("91671"),
            n.e("49653"),
            n.e("47626"),
            n.e("88070"),
            n.e("82644"),
            n.e("3589"),
            n.e("24689"),
            n.e("53984"),
            n.e("43780"),
            n.e("20590"),
            n.e("4848"),
            n.e("31267"),
            n.e("80830"),
            n.e("79745"),
            n.e("80854"),
            n.e("35395"),
            n.e("74630"),
            n.e("45413"),
            n.e("46844"),
            n.e("39075"),
            n.e("63235"),
            n.e("86672"),
            n.e("48948"),
            n.e("94427"),
            n.e("63244"),
            n.e("32756"),
            n.e("64850"),
            n.e("76413"),
            n.e("70104"),
            n.e("68214"),
            n.e("44761"),
            n.e("2564"),
            n.e("71477"),
            n.e("17563"),
            n.e("19558"),
            n.e("58946"),
            n.e("14285"),
            n.e("48330"),
            n.e("91450"),
            n.e("95752"),
            n.e("3332"),
            n.e("8362"),
            n.e("41678"),
            n.e("72401"),
            n.e("52617"),
            n.e("2698"),
            n.e("4744"),
            n.e("36227"),
            n.e("37021"),
            n.e("65840"),
            n.e("18465"),
            n.e("71430"),
            n.e("76516"),
            n.e("501"),
            n.e("86243"),
            n.e("85794"),
            n.e("67837"),
            n.e("73384"),
            n.e("82783"),
            n.e("32209"),
            n.e("5557"),
            n.e("68062"),
            n.e("93438"),
            n.e("9371"),
            n.e("45437"),
            n.e("74610"),
            n.e("39171"),
            n.e("87478"),
            n.e("44780"),
            n.e("83952"),
            n.e("95340"),
            n.e("89916"),
            n.e("60773"),
            n.e("66948"),
            n.e("9004"),
            n.e("59957"),
            n.e("8018"),
            n.e("65927"),
            n.e("49145"),
            n.e("68763"),
            n.e("18113"),
            n.e("58273"),
            n.e("6949"),
            n.e("20930"),
            n.e("34786"),
            n.e("99976"),
            n.e("26001"),
            n.e("30997"),
            n.e("3930"),
            n.e("29666"),
            n.e("14591"),
            n.e("52111"),
            n.e("3663"),
            n.e("19454"),
            n.e("15109"),
            n.e("94607"),
            n.e("82730"),
            n.e("8536"),
            n.e("28136"),
            n.e("57458"),
            n.e("38601"),
            n.e("1243"),
            n.e("88393"),
            n.e("18706"),
            n.e("872"),
            n.e("59797"),
            n.e("52531"),
            n.e("93336"),
            n.e("15920"),
            n.e("68530"),
            n.e("36894"),
            n.e("16084"),
            n.e("27659"),
            n.e("75859"),
            n.e("66580"),
            n.e("43116"),
            n.e("78046"),
            n.e("83230"),
            n.e("82486"),
            n.e("73669"),
            n.e("36624"),
            n.e("10943"),
            n.e("7775"),
            n.e("20402"),
            n.e("28235"),
            n.e("21778"),
            n.e("22547"),
            n.e("61058"),
            n.e("66147"),
            n.e("50342"),
            n.e("33097"),
            n.e("80098"),
            n.e("3710"),
            n.e("45830"),
            n.e("10262"),
            n.e("41786"),
            n.e("95602"),
            n.e("46313"),
            n.e("34409"),
            n.e("53683"),
            n.e("29569"),
            n.e("36002"),
            n.e("43233"),
            n.e("63726"),
            n.e("71329"),
            n.e("56373"),
            n.e("83827"),
            n.e("42749"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("25961"),
            n.e("74333"),
            n.e("8364"),
            n.e("99108"),
            n.e("89541"),
            n.e("52823"),
            n.e("56967"),
            n.e("66913"),
            n.e("71719"),
            n.e("19690"),
            n.e("93767"),
            n.e("13848"),
            n.e("39214"),
            n.e("88307"),
            n.e("14878"),
            n.e("76376"),
            n.e("26508"),
            n.e("61347"),
            n.e("91643"),
            n.e("47011"),
            n.e("42935"),
            n.e("73091"),
            n.e("69178"),
            n.e("86692"),
            n.e("52695"),
            n.e("16373"),
            n.e("81398"),
            n.e("24484"),
            n.e("44943"),
            n.e("32347"),
            n.e("8458"),
            n.e("11810"),
            n.e("91977"),
            n.e("90152"),
            n.e("46570"),
            n.e("87973"),
            n.e("74337"),
            n.e("57197"),
            n.e("14863"),
            n.e("84951"),
            n.e("60165"),
            n.e("12390"),
            n.e("71167"),
            n.e("13446"),
            n.e("6410"),
            n.e("61309"),
            n.e("94529"),
            n.e("30313"),
            n.e("57683"),
            n.e("21300"),
            n.e("53584"),
            n.e("17699"),
            n.e("57032"),
            n.e("22941"),
            n.e("94832"),
            n.e("26386"),
            n.e("65338"),
            n.e("71790"),
            n.e("74572"),
        ]).then(n.bind(n, 860417));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
let iY = a.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: i,
            onDragEnd: s,
            route: o,
            guild: d,
            animatable: c,
            selected: _ = !1,
            unread: E = !1,
            mediaState: A,
            unavailable: f = !1,
            badge: p = 0,
            isMentionLowImportance: T,
            contextMenu: g = iW,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: O,
            height: R,
            "aria-setsize": L,
            "aria-posinset": D,
        } = e,
        { id: y, parentId: v } = t,
        b = e.upperBadge ?? (f ? (0, H.em)() : null != A ? (0, H.oi)(A) : void 0),
        M = e.lowerBadge ?? void 0;
    null == M && p > 0
        ? (M =
              (0, H.wN)(
                  p,
                  T ? I.A.colors.BACKGROUND_MOD_STRONG.css : I.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == M && null != O && (M = (0, H.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let P = e.lowerBadgeSize ?? { width: (0, ta.o6)(p) },
        [{ dragging: G }, k] = (0, nW.i)({
            type: ez.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                s?.(), (0, nz.um)(eY.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        F = (0, u.Vd)(y ?? eL.dJq, null != v ? 2 : 1),
        [j, Y] = a.useState(!1),
        K = !N && j,
        [$, z] = a.useState(!1),
        [q, Z] = a.useState(!1),
        [X] = a.useState(() => new h.J_(70, () => Z(!0))),
        Q = (0, iL.nr)() && !iN.Fr;
    a.useEffect(() => () => X.cancel(), [X]);
    let J = a.useCallback(() => {
            null != o ? (0, iR.pX)(o, { state: ij }) : (0, W.u)(y, { state: ij });
        }, [y, o]),
        ee = a.useCallback(() => {
            if (null != o || null == d || f || !C) return;
            let e = (0, iO.W)(d.id);
            null != e && x.A.preload(d.id, e);
        }, [o, d, f, C]),
        et = (0, iC.bG)([ej.Ay], () => ej.Ay.isCurrentUserGuest(y)),
        en = a.useCallback(
            (e) => {
                null == d || et || g(e, d);
            },
            [d, g, et],
        ),
        ei = a.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != v && document.querySelector(`[aria-owns=folder-items-${v}]`)?.focus();
            },
            [v],
        ),
        er = a.useCallback(
            (e) => {
                e ? X.delay() : (X.cancel(), Z(!1));
            },
            [X],
        );
    function ea() {
        N || Y(!0);
    }
    function es() {
        N || Y(!1);
    }
    let el = a.useCallback(
            (e) => {
                n?.(y, e);
            },
            [y, n],
        ),
        eo = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ed = d.name;
    if (
        (p > 0
            ? (ed = eu.intl.formatToPlainString(eu.t["/uzRss"], { guildName: d.name, mentions: p }))
            : E && (ed = eu.intl.formatToPlainString(eu.t.lzqe42, { guildName: d.name })),
        null != A)
    ) {
        let e = [];
        A.activeEvent && e.push(eu.intl.string(eu.t.dHvJ2p)),
            A.liveStage && e.push(eu.intl.string(eu.t.OO7ndG)),
            A.screenshare && e.push(eu.intl.string(eu.t.wsHMZ7)),
            A.video && e.push(eu.intl.string(eu.t.BrLCS0)),
            A.audio && e.push(eu.intl.string(eu.t.jPBhKy)),
            A.activity && e.push(eu.intl.string(eu.t.Y3Gii5)),
            e.length > 0 && (ed = `${ed}, ${e.join(" ")}`);
    }
    let ec = (0, r.jsx)(iD, {
            guild: d,
            show: q,
            active: _,
            onAnimationStart: function () {
                z(q);
            },
            onAnimationRest: function () {
                q || z(!1);
            },
        }),
        e_ = Q
            ? (0, r.jsx)(w.j, {
                  ariaLabel: ed,
                  name: d.name,
                  onClick: J,
                  onMouseEnter: ea,
                  onMouseLeave: es,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, tV.Iv)(d, 2 * eo, K && c, !0),
                  selected: _ || K,
                  ...F,
                  "aria-setsize": L,
                  "aria-posinset": D,
                  "aria-selected": _,
              })
            : (0, r.jsx)(U.Q, {
                  selected: _,
                  children: (0, r.jsx)("div", {
                      ref: S
                          ? (e) => {
                                k(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": q,
                      children: (0, r.jsx)(w.j, {
                          ariaLabel: ed,
                          name: d.name,
                          onClick: J,
                          onMouseEnter: ea,
                          onMouseLeave: es,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, tV.Iv)(d, 2 * eo, K && c, !0),
                          selected: _ || K,
                          ...F,
                          "aria-setsize": L,
                          "aria-posinset": D,
                          "aria-selected": _,
                      }),
                  }),
              }),
        eE = q || $ ? ec : e_,
        eA = (0, r.jsx)(tJ, { children: (0, r.jsx)(n7, {}) }),
        eh = Q
            ? (0, r.jsx)(ti.animated.div, {
                  ref: S
                      ? (e) => {
                            k(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": q,
                  className: l()(n9.rN, { [n9.p9]: N, [n9.oR]: q, [n9.wH]: q || _ }),
                  children: (0, r.jsx)(U.Q, {
                      selected: !0,
                      upperBadge: b,
                      lowerBadge: M,
                      lowerBadgeSize: P,
                      children: eE,
                  }),
              })
            : (0, r.jsx)(ti.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: l()(n9.rN, { [n9.p9]: N, [n9.oR]: q, [n9.wH]: q || _ }),
                  "data-drop-hovering": q,
                  children: (0, r.jsx)(U.Q, {
                      selected: _,
                      upperBadge: b,
                      lowerBadge: M,
                      lowerBadgeSize: P,
                      children: eE,
                  }),
              });
    return (0, r.jsxs)(B.c, {
        ref: el,
        children: [
            (0, r.jsx)(V.A, { overlay: !0, hovered: !G && K, selected: !G && _, unread: !G && E }),
            (0, r.jsx)(iH, { guild: d, disabled: N, isDragging: G, children: G ? eA : eh }),
            S ? (0, r.jsx)(tX, { name: d.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var iK = n(342216);
let i$ = a.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        s = (0, E.bG)([eW.A], () => eW.A.getGuild(i)),
        l = id(s),
        o = (0, E.bG)([e3.A], () => e3.A.isFocused()),
        d = (0, E.bG)([nV.A], () => nV.A.isUnavailable(i)),
        c = (0, j.A)((e) => e.guildId),
        u = iS(i),
        {
            badge: _,
            unread: A,
            isMentionLowImportance: h,
        } = (0, E.cf)([ei.default], () => ({
            badge: ei.default.getMentionCount(i),
            isMentionLowImportance: ei.default.getIsMentionLowImportance(i),
            unread: ei.default.hasUnread(i),
        })),
        I = (0, ic.Ig)(s) && 0 === _,
        f = a.useMemo(
            () =>
                null != n
                    ? n
                    : I
                      ? (0, r.jsx)("div", {
                            className: iK.j,
                            children: (0, r.jsx)(is.E, {
                                size: "custom",
                                color: "currentColor",
                                className: iK.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, I],
        );
    return (0, r.jsx)(iY, {
        ...e,
        guild: s,
        unavailable: d,
        animatable: o,
        selected: c === i,
        badge: _,
        isMentionLowImportance: h,
        lowerBadge: f,
        unread: A,
        mediaState: u,
        guildJoinRequestStatus: l,
    });
});
var iz = n(922016),
    iq = n(297264),
    iZ = n(821609),
    iX = n(339350),
    iQ = n(475743),
    iJ = n(624458),
    i0 = n(408213),
    i1 = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    i2 = n(928568);
function i3(e, t) {
    (0, ts.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function i4(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, E.bG)([io.A], () => io.A.getRequest(n)),
        a = (0, E.bG)([io.A], () => io.A.getJoinRequestGuild(n), [n]),
        s = (0, E.bG)([e3.A], () => e3.A.isFocused()),
        l = (0, E.bG)([eq.A], () => eq.A.getGuildId());
    return null == a
        ? null
        : (0, r.jsx)(iY, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: i3,
              lowerBadge:
                  i?.applicationStatus === iM.B5.REJECTED
                      ? (0, H.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eL.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var i6 = n(295783);
function i5(e) {
    let { onActivate: t, children: n } = e,
        i = a.useRef(null),
        s = (0, E.bG)([io.A], () => io.A.hasJoinRequestCoackmark()),
        l = a.useCallback(() => {
            i0.Ay.clearCoachmark();
        }, []),
        o = (0, iQ.Ay)(s),
        d = a.useRef(null);
    return (
        a.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, r.jsxs)("div", {
            className: i6.kL,
            children: [
                (0, r.jsx)(iz.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: i6.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: i6.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: i6.q3,
                                            children: [
                                                (0, r.jsx)(iq.D, {
                                                    variant: "heading-md/medium",
                                                    children: eu.intl.string(eu.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(eI.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eu.intl.string(eu.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(iZ.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eu.intl.string(eu.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: i6.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: i6.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function i7(e) {
    let { onActivate: t } = e,
        [n, i] = a.useState(!1),
        s = (0, E.bG)([eq.A], () => eq.A.getGuildId()),
        l = (0, E.bG)([io.A], () => io.A.hasFetchedRequestToJoinGuilds),
        o = (0, i2.A)(),
        d = (0, iQ.Ay)(s),
        c = a.useMemo(() => {
            let e = (0, ez.xW)({
                folderId: i1.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eu.intl.string(eu.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, ez.EL)(t, e.id));
            return e;
        }, [o, n]);
    a.useEffect(() => {
        n && !l && iJ.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (a.useEffect(() => {
        !n && u && d !== s && i(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, r.jsx)(i5, {
              onActivate: t,
              children: (0, r.jsx)(ii, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), i0.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: i6.rH,
                      children: (0, r.jsx)(iX.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== ez.PJ.GUILD
                          ? null
                          : (0, r.jsx)(i4, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function i8(e) {
    let { guildId: t } = e,
        n = a.useMemo(() => (0, ez.EL)(t), [t]),
        i = (0, E.bG)([eW.A], () => eW.A.getGuild(t)),
        s = (0, E.bG)([e3.A], () => e3.A.isFocused()),
        l =
            t ===
            (0, j.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = iS(t);
    return null == i
        ? null
        : (0, r.jsx)(iY, { guildNode: n, guild: i, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var i9 = n(221305);
let re = (0, y.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("75442"),
                n.e("14520"),
                n.e("598"),
                n.e("69977"),
                n.e("1248"),
                n.e("94149"),
                n.e("58921"),
                n.e("24092"),
                n.e("31727"),
                n.e("34084"),
                n.e("81647"),
                n.e("91763"),
                n.e("76602"),
                n.e("40402"),
                n.e("39970"),
                n.e("43437"),
                n.e("72789"),
                n.e("17249"),
                n.e("62422"),
                n.e("82644"),
                n.e("76413"),
                n.e("35321"),
                n.e("50033"),
                n.e("44780"),
                n.e("66948"),
                n.e("65927"),
                n.e("15109"),
                n.e("75133"),
                n.e("80945"),
                n.e("28850"),
                n.e("27659"),
                n.e("65200"),
                n.e("60003"),
                n.e("85802"),
                n.e("41348"),
                n.e("90103"),
                n.e("46240"),
                n.e("81505"),
                n.e("85685"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    rt = (0, eK.isWindows)() ? 4 : 12 * !(0, eK.isMac)();
function rn(e) {
    return e.startsWith(eL.BVt.GUILD_DISCOVERY) || e.startsWith(eL.BVt.GLOBAL_DISCOVERY);
}
class ri {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = a.createRef();
    nodeRefs = {};
    timeout = new h.Ep();
    observer;
    constructor(e, t, n, i, r) {
        (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = r),
            (0, ek.u9)(this.getVisibleGuildIds);
    }
    setResizeObserver = () => {
        let e = this.scrollerRef.current?.getScrollerNode();
        null != e && ((this.observer = new ResizeObserver(this.handleScroll)), this.observer.observe(e));
    };
    clearResizeObserver = () => {
        this.observer?.disconnect(), (this.observer = void 0);
    };
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    scrollToGuild = (e, t) => {
        let n = this.scrollerRef.current;
        if (
            null == n ||
            (null == e && rn(window.location.pathname)) ||
            e === eL.sFm.SERVER_DISCOVERY_BADGE ||
            e === eL.sFm.E3_SERVER_DISCOVERY_BADGE
        )
            return;
        if (null == e) return void n.scrollTo({ to: 0, animate: t });
        let i = this.nodeRefs[e];
        for (; null == i; ) {
            let t = this.guildsTree.getNode(e);
            if (t?.parentId == null) break;
            i = this.nodeRefs[t.parentId];
        }
        null != i && (0, _.vq)(i)
            ? n.scrollIntoViewNode({ node: i, animate: t, padding: 24 })
            : n.scrollTo({ to: 0, animate: t });
    };
    handleJumpToGuild = (e) => {
        this.scrollToGuild(e, !0);
    };
    scrollTo = (e) => {
        this.scrollerRef.current?.scrollTo(e);
    };
    scrollToBottom = () => {
        this.scrollerRef.current?.scrollToBottom();
    };
    isItemVisible = (e, t, n) => {
        let { iconTotalSize: i, badgeVisibleBuffer: r, heightBeforeGuilds: a, bottomInset: s } = this.sizes,
            l = this.scrollerRef.current;
        if (null == l) return !1;
        let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (o < 0) return !1;
        let d = i * o + a,
            c = l.getScrollerState();
        return (!t && !!(d >= c.scrollTop)) || (!!t && !!(d + i + r <= c.scrollTop + c.offsetHeight - s));
    };
    getVisibleGuildIds = () => {
        let e = this.scrollerRef.current;
        if (null == e) return [];
        let t = e.getScrollerState().offsetHeight,
            n = e.getScrollerNode()?.getBoundingClientRect().top;
        return void 0 === n
            ? []
            : this.guildsTree
                  .sortedGuildNodes()
                  .filter((e) => {
                      let i = e.parentId ?? e.id,
                          r = this.nodeRefs[i];
                      if (null == r) return !1;
                      let a = r.getBoundingClientRect(),
                          s = a.top - n;
                      return s + a.height > 0 && s < t;
                  })
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  });
    };
    handleScroll = () => {
        this.setScrolling(!0),
            this.timeout.start(200, () => this.setScrolling(!1)),
            this._handleScrollDebounced(),
            this._handleScrollThrottled();
    };
    _handleScrollDebounced = d().debounce(() => {
        let e = this.scrollerRef.current;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState();
        N.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = d().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function rr(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        s = (0, b.A)("TopSection"),
        l = (0, E.bG)([$.Ay], () => null != $.Ay.getVoiceChannelId()),
        o = (0, f.useHasAnyModalOpen)(),
        { shouldShowPopover: d, markPopoverAsDismissed: c } = (0, v.PK)(!l && !o),
        u = a.useRef(!1),
        _ = d && s;
    a.useEffect(() => {
        _ && !u.current && n(), (u.current = _);
    }, [n, _]);
    let A = (0, E.yK)([eW.A, ej.Ay], () => eW.A.getGuildIds().filter((e) => ej.Ay.isCurrentUserGuest(e))),
        h = i.concat(A),
        { entrypoint: I } = (0, eV.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nw, {}),
            I === eV.RK.SERVER_RAIL_TOP && (0, r.jsx)(re, {}),
            s ? (0, r.jsx)(ex, { shouldShowIntroPopover: d, markIntroPopoverAsDismissed: c }) : null,
            !t && (0, r.jsx)(tR, {}),
            h.map((e) => (0, r.jsx)(i8, { guildId: e }, e)),
            (0, r.jsx)(i7, { onActivate: n }),
        ],
    });
}
function ra(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, E.yK)([eY.Ay], () => {
            let e = eY.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, E.yK)([eH.A], () => eH.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(t9, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.B, {
                role: "group",
                "aria-label": eu.intl.string(eu.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, r.jsx)(nj, {}),
            i ? null : (0, r.jsx)(t4, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(tU, {}),
        ],
    });
}
function rs(e) {
    var t;
    let { disableAppDownload: n = eK.isPlatformEmbedded, isOverlay: i = !1, className: s, themeOverride: o } = e,
        [d] = (0, E.yK)([eY.Ay], () => {
            let e = eY.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, E.bG)([eF.A], () => eF.A.lurkingGuildIds()),
        A = a.useMemo(() => (i ? [] : _), [_, i]),
        f = (0, E.bG)([D.A], () => D.A.isFullscreenInContext()),
        { isSorting: p, startSorting: N, stopSorting: O } = (0, e$.A)(),
        y = a.useRef(!1),
        [v] = a.useState(() => new h.Ep()),
        M = a.useRef(null),
        P = a.useRef(null),
        { ref: U, ...w } = (0, u.$y)(),
        G = (0, T.R7)(),
        [x, k] = a.useState(!1),
        F = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE),
        V = (0, m.r)(I.A.space.SPACE_XS),
        B = (0, b.A)("GuildsBar"),
        { pathname: H } = (0, c.zy)(),
        { entrypoint: W } = (0, eV.X8)({ location: "GuildsBar" }),
        Y = +!!B + +(W === eV.RK.SERVER_RAIL_TOP),
        K = a.useMemo(() => {
            let e,
                t,
                n =
                    ((e = F + V),
                    {
                        iconSize: F,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + V),
                        heightBeforeGuilds: rt + t + Y * e,
                        bottomInset: 16,
                    });
            return new ri(
                d,
                k,
                eL.tEg,
                () => {
                    M.current?.calculateState(), P.current?.calculateState();
                },
                n,
            );
        }, [F, V, d, Y]);
    a.useEffect(
        () => (
            K.setResizeObserver(),
            () => {
                K.clearResizeObserver();
            }
        ),
        [K],
    ),
        a.useEffect(() => {
            function e() {
                M.current?.calculateState(), P.current?.calculateState();
            }
            return ei.default.addChangeListener(e), () => ei.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: $ } = (0, L.Ay)(R.A.GUILDS_LIST),
        z = rn(H);
    (0, C.u5)(() => {
        if (!y.current && 0 !== d.size) {
            if (!z) {
                let { scrollTop: e } = eB.A.getGuildListDimensions();
                K.scrollTo({ to: e, animate: !1 });
            }
            return (y.current = !0), () => v.stop();
        }
    }),
        a.useEffect(() => {
            if ((K.setGuildsTree(d), y.current || 0 === d.size)) return;
            let e = j.A.getState().guildId;
            K.scrollToGuild(e, !1);
            let t = null;
            return j.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), K.scrollToGuild(t, !1));
            });
        }, [d, K]);
    let q = a.useCallback(() => {
        K.scrollTo({ to: 0, animate: !1 });
    }, [K]);
    (t = K.scrollToGuild),
        a.useEffect(() => {
            let e = null;
            function n() {
                let n = eq.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                eq.A.addChangeListener(n),
                () => {
                    eq.A.removeChangeListener(n);
                }
            );
        }, [t]);
    let Z = a.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case ez.PJ.FOLDER:
                        return (0, r.jsx)(
                            ia,
                            {
                                folderNode: t,
                                setNodeRef: K.setNodeRef,
                                draggable: !0,
                                sorting: p,
                                onDragStart: N,
                                onDragEnd: O,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case ez.PJ.GUILD:
                        return (0, r.jsx)(
                            i$,
                            {
                                guildNode: t,
                                setRef: K.setNodeRef,
                                draggable: !0,
                                sorting: p,
                                onDragStart: N,
                                onDragEnd: O,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [N, O, p, K.setNodeRef],
        ),
        X = (0, r.jsx)(nd, { selected: z, className: i9.ai }),
        Q = W === eV.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(L.f5, {
        value: $,
        children: (0, r.jsx)(g.N, {
            theme: o,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: l()(i9.iE, s, e, { [i9.R]: f }),
                    "aria-label": eu.intl.string(eu.t.PjnF2t),
                    children: [
                        (0, r.jsx)(te, {
                            ref: M,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: i9.Xl,
                            barClassName: i9.Sh,
                        }),
                        (0, r.jsxs)("div", {
                            ref: U,
                            ...w,
                            ...G,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: i9.B2,
                            children: [
                                (0, r.jsxs)(S.zC, {
                                    className: l()({ [i9.XG]: !0, [i9.qw]: x }),
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: K.scrollerRef,
                                    onScroll: K.handleScroll,
                                    children: [
                                        (0, r.jsx)(rr, { scrollToTop: q, lurkingGuildIds: A }),
                                        (0, r.jsx)(nx, {}),
                                        (0, r.jsx)(ra, {
                                            guildDiscoveryButton: X,
                                            disableAppDownload: n,
                                            isOverlay: i,
                                            renderTreeNode: Z,
                                            lurkingGuildIds: A,
                                        }),
                                    ],
                                }),
                                Q &&
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(nx, { fullWidth: !0 }),
                                            (0, r.jsx)("div", { className: i9.JU, children: (0, r.jsx)(re, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(te, {
                            reverse: !0,
                            ref: P,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: l()(i9.LZ, { [i9.CH]: !i && !Q, [i9.c0]: !i && Q }),
                            barClassName: i9.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let rl = a.memo(
    function (e) {
        let t = (0, O.A)("guildsnav");
        return (0, r.jsx)(u.hD, { navigator: t, children: (0, r.jsx)(rs, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, A.A)(e, t),
);
