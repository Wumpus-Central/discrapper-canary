"use strict";
n.d(t, { A: () => rn });
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
    f = n(331322),
    p = n(312138),
    T = n(602853),
    m = n(43990),
    g = n(689175),
    S = n(951001),
    N = n(964486),
    C = n(260762),
    R = n(793574),
    O = n(688810),
    L = n(198052),
    D = n(268218),
    y = n(749884),
    v = n(771959);
n(321073);
var b = n(862328),
    M = n(67811),
    P = n(27232),
    U = n(308528),
    w = n(933958),
    G = n(969151),
    x = n(941971),
    k = n(900848),
    F = n(771640),
    V = n(366811),
    B = n(345942),
    H = n(616356),
    j = n(734057),
    W = n(309010),
    Y = n(977997),
    K = n(935208),
    $ = n(181079),
    z = n(5180),
    Z = n(635233),
    q = n(863005),
    X = n(152007),
    Q = n(458294),
    J = n(576705),
    ee = n(568548),
    et = n(543465),
    en = n(428784),
    ei = n(43105),
    er = n(449817),
    ea = n(375708),
    es = n(988572);
function el(e) {
    let { targetElementRef: t, onTakeAction: n, onRequestClose: i } = e;
    return (0, r.jsx)(ei.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: es.A, type: "image", aspectRatio: "16/9" },
        title: ea.intl.string(er.default["bu/mLv"]),
        body: ea.intl.string(er.default.kxQJ7q),
        onRequestClose: i,
        actions: [{ text: ea.intl.string(er.default["vN/KQ9"]), onClick: n }],
    });
}
var eo = n(451394),
    ed = n(597601),
    ec = n(834730),
    eu = n(983851),
    e_ = n(183623),
    eE = n(323384),
    eA = n(866665),
    eh = n(104171),
    eI = n(63995),
    ef = n(518769),
    ep = n(287809),
    eT = n(607567),
    em = n(403362),
    eg = n(652215),
    eS = n(833971);
function eN(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eS.nM,
              children: [
                  (0, r.jsx)(e, { className: eS.RI, color: "currentColor" }),
                  (0, r.jsx)(eh.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eC() {
    let e = (0, E.yK)([$.A, j.A], () =>
            K.default
                .keys($.A.getFavoriteChannels())
                .map((e) => j.A.getChannel(e))
                .filter(em.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eg.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eg.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, E.yK)(
            [eT.Ay],
            () =>
                d().flatMap(n, (e) =>
                    eT.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, E.yK)([eI.A], () =>
            d().flatMap(i, (e) =>
                eI.A.getMutableParticipants(e, ef.ip.SPEAKER)
                    .filter((e) => e.type === ef.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, E.bG)([eI.A], () => {
            let e = 0;
            for (let t of i) e += eI.A.getParticipantCount(t, ef.ip.AUDIENCE);
            return e;
        }),
        o = (0, E.yK)(
            [H.A],
            () =>
                H.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, E.yK)([w.Ay], () => {
            let e = w.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        u = (0, E.yK)([ep.default], () => c.map((e) => ep.default.getUser(e)), [c]),
        _ = (0, E.yK)([ep.default], () => o.map((e) => ep.default.getUser(e)), [o]),
        A = eN(
            eu.H,
            a.filter((e) => !o.includes(e.id) && !c.includes(e.id)),
        ),
        h =
            0 === s.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eS.nM,
                      children: [
                          (0, r.jsx)(eo.q, { size: "lg", color: "currentColor", className: eS.RI }),
                          (0, r.jsx)(eh.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eS.GZ,
                              children: [
                                  (0, r.jsx)(ed.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(ec.E, {
                                      className: eS._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        I = eN(
            e_.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        f = eN(eE.k, u);
    return (0, r.jsxs)(r.Fragment, { children: [h, A, I, f] });
}
function eR() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eS.nM, eS.Dl),
                children: (0, r.jsx)("span", { className: l()(eS.cN, eS.NT), children: ea.intl.string(ea.t.wMWyci) }),
            }),
            (0, r.jsx)(eC, {}),
        ],
    });
}
function eO(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = a.useMemo(
            () =>
                (0, r.jsx)(ec.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eS.A_,
                    children: (0, r.jsx)(eR, {}),
                }),
            [],
        );
    return (0, r.jsx)(eA.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eL = n(49999),
    eD = n(191775);
let ey = { analyticsSource: { page: eg.liQ.GUILD_CHANNEL, section: eg.JJy.CHANNEL_LIST, object: eg.ZSU.CHANNEL } };
function ev() {
    let e,
        t,
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
        { shouldShowPopover: I, markPopoverAsDismissed: f } = (0, v.QQ)(),
        p = (0, u.Vd)("favorites"),
        T = a.useRef(null),
        [m, g] = a.useState(!1),
        S = (0, en.$)("favorite-server-context"),
        { favoriteGuildMuted: N, favoriteChannels: C } = (0, E.cf)([$.A], () => ({
            favoriteChannels: $.A.getFavoriteChannels(),
            favoriteGuildMuted: $.A.favoriteGuildMuted,
        })),
        R = (0, E.bG)([W.Ay], () => W.Ay.getChannelId(eg.YYv)),
        O = (0, E.bG)([j.A], () => j.A.getChannel(R)),
        L = (0, V.A)((e) => e.guildId),
        D = (0, z.ai)(L),
        { badge: y, unread: ei } = (0, E.cf)([q.A, j.A, Q.default, X.A, J.A, ee.Ay, et.Ay], () => {
            let e = K.default.keys(C),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = j.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = ee.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (ee.Ay.hasUnread(n) && Q.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = q.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = ee.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = j.A.getChannel(n);
                            e.unread = e.unread || (ee.Ay.hasUnread(n) && Q.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        er =
            ((t = null != (e = (0, E.bG)([W.Ay], () => W.Ay.getVoiceChannelId())) && null != C[e]),
            (n = (0, E.bG)([H.A], () => {
                if (!t) return !1;
                let e = H.A.getCurrentUserActiveStream();
                return null != e && null != C[e.channelId];
            })),
            (i = (0, E.bG)([H.A], () => H.A.getAllApplicationStreams().some((e) => null != C[e.channelId]))),
            (s = (0, E.bG)([Y.A], () => t && null != e && Y.A.hasVideo(e), [t, e])),
            (l = (0, E.yK)([w.Ay], () =>
                K.default.keys(C).reduce((e, t) => (e.push(...w.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (o = (0, E.bG)([w.Ay], () =>
                Array.from(w.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, G.H)(t);
                    return null != n && null != C[n];
                }),
            )),
            (d = l.length > 0),
            (c = !1),
            (_ = !1),
            (A = !1),
            (h = !1),
            t ? ((c = !s), (_ = s), (A = n), (h = o)) : ((A = i), (h = d)),
            (0, F.oi)({ audio: c, video: _, screenshare: A, liveStage: !1, isCurrentUserConnected: t, activity: h })),
        es = y > 0 ? (0, F.wN)(y) : null,
        eo = a.useCallback(
            (e) => {
                e && ((0, Z.mv)("intro_dc"), (0, B.u)(eg.YYv)), f(eL.i.TAKE_ACTION);
            },
            [f],
        );
    return (0, r.jsxs)(k.c, {
        children: [
            (0, r.jsx)(x.A, { overlay: !0, selected: D, hovered: m, unread: ei && !N }),
            (0, r.jsx)(eO, {
                children: (0, r.jsx)(b.Q, {
                    selected: !0,
                    upperBadge: er,
                    lowerBadge: es,
                    children: (0, r.jsx)("div", {
                        ref: T,
                        children: (0, r.jsx)(M.j, {
                            ...p,
                            ariaLabel: ea.intl.formatToPlainString(ea.t["/uzRss"], {
                                guildName: ea.intl.string(ea.t.wMWyci),
                                mentions: y,
                            }),
                            "aria-selected": D,
                            to: { pathname: eg.BVt.CHANNEL(eg.YYv, R), state: ey },
                            selected: D || m,
                            onClick: () => {
                                I && eo(!1);
                            },
                            onMouseEnter: () => g(!0),
                            onMouseLeave: () => g(!1),
                            onMouseDown: function () {
                                null != O && U.A.preload(O.guild_id, O.id);
                            },
                            onContextMenu: S,
                            children: (0, r.jsx)(P.G, {
                                size: "custom",
                                color: "currentColor",
                                className: eD.w,
                                width: 20,
                                height: 20,
                            }),
                        }),
                    }),
                }),
            }),
            I &&
                (0, r.jsx)(el, {
                    targetElementRef: T,
                    onTakeAction: () => eo(!0),
                    onRequestClose: () => f(eL.i.USER_DISMISS),
                }),
        ],
    });
}
var eb = n(633965),
    eM = n(857071),
    eP = n(851109),
    eU = n(72314),
    ew = n(543897),
    eG = n(696451),
    ex = n(71393),
    ek = n(711014),
    eF = n(723702),
    eV = n(757780),
    eB = n(263715),
    eH = n(967198),
    ej = n(173860),
    eW = n(383394),
    eY = n(131677),
    eK = n(228366);
let e$ = {};
class ez extends E.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (e$[t] = e[t]);
            });
    }
    getState() {
        return e$;
    }
    hasViewed(e) {
        return null != e$[e];
    }
}
let eZ = new ez(eK.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        e$[t] = Date.now();
    },
});
var eq = n(531685),
    eX = n(583613);
let eQ = "app-download-item",
    eJ = "add-server-item";
function e0() {
    return !1;
}
function e1(e) {
    let t = Q.default.getMutableGuildStates();
    return (
        (e === eg.sFm.SERVER_DISCOVERY_BADGE && !eZ.hasViewed(eg.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== eQ && e !== eJ && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let e2 = (0, eX.L_)((e, t, n) => ["null", ...t, ...e, eJ, eg.sFm.E3_SERVER_DISCOVERY_BADGE, eQ]),
    e3 = a.forwardRef(function (e, t) {
        let n = (0, E.yK)([ek.Ay, eY.A, Q.default], () =>
                e2(ek.Ay.getGuildFolders(), eY.A.getUnreadPrivateChannelIds(), Q.default.getStoreChangeSentinel()),
            ),
            i = (0, E.bG)([eq.A], () => eq.A.isFocused()),
            a = (0, E.bG)([eW.A], () => eW.A.getExpandedFolders());
        return (0, r.jsx)(ej.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: e0,
            textUnread: ea.intl.string(ea.t.y2b7CA),
            textMention: ea.intl.string(ea.t.y2b7CA),
            isMentioned: e1,
            animate: i,
            expandedFolders: a,
        });
    });
n(667532);
var e4 = n(868285),
    e5 = n(763827),
    e6 = n(53466),
    e7 = n(778712),
    e8 = n(812993),
    e9 = n(442433),
    te = n(620982),
    tt = n(571694),
    tn = n(47167),
    ti = n(598104),
    tr = n(994500);
function ta(e, t) {
    return null != t ? t.has(e) : tr.A.isBlockedOrIgnored(e);
}
function ts(e, t) {
    return e.filter((e) => (0, em.Vq)(e)).filter((e) => !ta(e.id, t));
}
function tl(e, t) {
    return e.filter((e) => !ta(e, t));
}
var to = n(427358),
    td = n(907459),
    tc = n(145408);
function tu(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: eS.nM,
              children: [
                  (0, r.jsx)(t, { className: eS.RI, color: "currentColor" }),
                  (0, r.jsx)(eh.Ay, { users: n, max: 6 }),
              ],
          });
}
function t_(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(ec.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: ea.intl.string(ea.t.fpKdS1),
          })
        : (0, r.jsx)(tc.A, { muteConfig: t, className: n });
}
function tE(e) {
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
        (n = (0, E.bG)([tr.A], () => tr.A.getBlockedOrIgnoredIDs())),
        (i = (0, E.bG)([to.A], () => to.A.getUserAffinitiesMap(), [])),
        (s = (0, E.yK)(
            [w.Ay, ep.default],
            () =>
                w.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => ep.default.getUser(e)),
            [t],
        )),
        (o = a.useMemo(() => ts(s, n), [s, n])),
        (d = a.useMemo(() => (0, td.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, E.yK)(
            [H.A, ep.default],
            () =>
                ts(
                    H.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => ep.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (u = a.useMemo(() => ts(c, n), [c, n])),
        (_ = a.useMemo(() => (0, td.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (A = a.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (h = (0, E.yK)(
            [eT.Ay],
            () =>
                ts(
                    eT.Ay.getVoiceStatesForChannel(p).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [p, n],
        )),
        (I = a.useMemo(() => ts(h, n), [h, n])),
        (f = a.useMemo(() => (0, td.L)(I, i, "DirectMessageTooltip - voiceUsers"), [I, i])),
        {
            voiceUsers: a.useMemo(
                () => f.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [f, d, _],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, r.jsx)(tu, { icon: eu.H, users: S }),
        C = (0, r.jsx)(tu, { icon: e_.F, users: g }),
        R = (0, r.jsx)(tu, { icon: eE.k, users: m }),
        { isMuted: O, muteConfig: L } = (0, E.cf)(
            [et.Ay],
            () => ({ isMuted: et.Ay.isChannelMuted(null, T), muteConfig: et.Ay.getChannelMuteConfig(null, T) }),
            [T],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N,
            C,
            R,
            O ? (0, r.jsx)(t_, { muteConfig: L, className: l()(eS.LM, { [eS.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tA(e) {
    let { channel: t } = e,
        n = (0, tn.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eS.nM, eS.Dl),
                children: (0, r.jsx)("span", { className: l()(eS.cN, eS.NT), children: n }),
            }),
            (0, r.jsx)(tE, { channel: t }),
        ],
    });
}
function th(e) {
    let { channel: t, children: n } = e,
        i = (0, tn.Ay)(t),
        s = a.useMemo(
            () =>
                (0, r.jsx)(ec.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eS.A_,
                    children: (0, r.jsx)(tA, { channel: t }),
                }),
            [t],
        );
    return (0, r.jsx)(eA.m, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let tI = { friction: 28, tension: 600 };
function tf(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tI };
        case "scale":
            return { ...tI };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tp extends a.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new e6.Controller({ scale: 0, height: 0, opacity: 0, config: tf }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !eq.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tf })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tf }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !eq.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tf }).start().then(e),
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
            t = e.type === eg.rbe.DM ? ep.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tt.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eg.rbe.DM ? ep.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, e9.L3)(e, async () => {
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
                      n.e("87048"),
                      n.e("16054"),
                      n.e("98199"),
                      n.e("17244"),
                      n.e("64464"),
                      n.e("39778"),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, r.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, e9.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("91763"),
                      n.e("38730"),
                      n.e("47502"),
                      n.e("68530"),
                      n.e("87048"),
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
                (0, r.jsx)(M.j, {
                    to: eg.BVt.CHANNEL(eg.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  ea.intl.formatToPlainString(ea.t.hKarnZ, { name: t, mentions: i }),
                                  d ? ea.intl.string(ea.t["fk1/bX"]) : c ? ea.intl.string(ea.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: h ? void 0 : this.getChannelIcon(),
                    backgroundStyle: h ? "on-hover" : "always",
                    children: h
                        ? (0, r.jsx)(ti.A, {
                              channel: e,
                              size: e7._3.SIZE_40,
                              facepileSizeOverride: e7._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, r.jsx)(e6.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, r.jsxs)(k.c, {
                children: [
                    (0, r.jsx)(x.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, r.jsx)(th, {
                        channel: e,
                        children: (0, r.jsx)(b.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, F.wN)(i, void 0, !0) : null,
                            upperBadge: (0, F.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, e8.o6)(i) },
                            children: I(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tT = a.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, tn.Ay)(e.channel),
        a = (0, u.Vd)(n, 2),
        s = (0, E.bG)([e5.A], () => e5.A.getChannelId(), []),
        l = (0, E.bG)([L.A], () => L.A.getMode(n), [n]),
        o = (0, E.bG)([H.A], () => H.A.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, E.bG)([eT.Ay], () => eT.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, E.bG)([W.Ay], () => W.Ay.getChannelId(), []),
        _ = (0, E.bG)([ee.Ay], () => ee.Ay.getMentionCount(n), [n]),
        A = s === n,
        { isIncomingCall: h, isOngoingCall: f } = (0, te.A)(n),
        p = !1,
        m = !1;
    (A || d) && ((p = l === eg._Of.VOICE), (m = l === eg._Of.VIDEO));
    let g = (0, T.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(tp, {
        ...e,
        ref: t,
        channelName: i,
        unread: _ > 0,
        selected: c === n,
        badge: _,
        audio: p,
        video: m,
        stream: o,
        isCurrentUserInThisDMCall: A,
        isIncomingCall: h,
        isOngoingCall: f,
        size: g,
        treeItemProps: a,
    });
});
function tm() {
    (0, E.bG)([j.A], () => j.A.getPrivateChannelsVersion());
    let e = j.A.getMutablePrivateChannels(),
        t = (0, E.yK)([eY.A], () => eY.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, E.cf)([e5.A], () => ({
            selectedVoiceGuildId: e5.A.getGuildId(),
            selectedVoiceChannelId: e5.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, r.jsx)(tT, { channel: n }, n.id);
        }),
        l = null == n && null != i ? e[i] : null;
    return (
        null != l && s.unshift((0, r.jsx)(tT, { channel: l }, l.id)),
        (0, r.jsx)(f.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": ea.intl.string(ea.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, r.jsx)(e4.F, { component: a.Fragment, children: s }),
        })
    );
}
var tg = n(192308),
    tS = n(32880),
    tN = n(939249),
    tC = n(589340);
function tR(e) {
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
                    : (0, r.jsx)(ec.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eS.A_,
                          children: n,
                      }),
            [n, s],
        ),
        E = i ? t : (0, r.jsx)("div", { className: l()(tC.p, { [tC.w]: u }), children: t });
    return (0, r.jsx)(eA.m, {
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
var tO = n(633435);
let tL = a.forwardRef(function (e, t) {
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
            R = f ?? ("string" == typeof c ? c : void 0);
        return (0, r.jsxs)(k.c, {
            children: [
                h ? (0, r.jsx)(x.A, { overlay: !0, hovered: N, selected: d }) : null,
                (0, r.jsx)(tR, {
                    text: c,
                    selected: d,
                    children: (0, r.jsx)(b.Q, {
                        selected: !0,
                        upperBadge: _,
                        lowerBadge: E,
                        lowerBadgeSize: A,
                        children: (0, r.jsx)(tN.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                T?.(), C(!0);
                            },
                            onMouseLeave: () => {
                                m?.(), C(!1);
                            },
                            onMouseDown: g,
                            className: l()(tO.oZ, I, { [tO.wH]: d || N }),
                            onClick: i,
                            "aria-label": R,
                            "aria-selected": d,
                            onContextMenu: s,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != o && (0, r.jsx)(o, { className: tO.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                p,
            ],
        });
    }),
    tD = "DOWNLOAD_APPS";
function ty() {
    let e = (0, tg.useModalsStore)((e) => (0, tg.hasModalOpenSelector)(e, tD));
    return (0, r.jsx)(tL, {
        id: "app-download-button",
        onClick: () => {
            (0, tg.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, r.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tD },
            );
        },
        selected: e,
        tooltip: ea.intl.string(ea.t.Z7jwrJ),
        icon: tS.s,
    });
}
var tv = n(245604),
    tb = n(272613),
    tM = n(398884),
    tP = n(772366),
    tU = n(728321),
    tw = n(260509),
    tG = n(284009),
    tx = n.n(tG),
    tk = n(651300),
    tF = n(66834),
    tV = n(174459),
    tB = n(896970);
function tH(e) {
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
function tj(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        tx()(t.type !== eB.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== eB.PJ.FOLDER || t.type !== eB.PJ.FOLDER) &&
                (e.type !== eB.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                i && t.type !== eB.PJ.FOLDER && tV.default.track(eg.HAw.GUILD_FOLDER_CREATED),
                    tF.A.moveById(r, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function tW(e) {
    let { name: t, targetNode: n, combine: i, below: s } = e,
        l = a.useMemo(() => tj([eB.PJ.GUILD, eB.PJ.FOLDER], n, s, i), [n, s, i]),
        [{ canDrop: o, isOver: d }, c] = (0, tk.H)(l),
        u = tH([
            [o, tB.OP],
            [d, tB.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            (u.current = e), c(e);
        },
        "data-dnd-name": ea.intl.formatToPlainString(ea.t["A5aDw+"], { itemName: t }),
        className: tB.aC,
    });
}
function tY(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: s, isOver: o }, d] = (0, tk.H)(() => tj([eB.PJ.GUILD], n, !0, !0));
    a.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = tH([
        [s, tB.OP],
        [o, tB.NQ],
    ]);
    return (0, r.jsx)(tR, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                (c.current = e), d(e);
            },
            "data-dnd-name": ea.intl.formatToPlainString(ea.t.qiQ0QI, { itemName: t }),
            className: l()(tB.dw, {}),
        }),
    });
}
let tK = a.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: a = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: tB.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(tW, { name: t, targetNode: n, below: a }),
            l ? (0, r.jsx)(tY, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function t$(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: a }, s] = (0, tk.H)(() => tj([eB.PJ.GUILD], n, !0, !0)),
        l = tH([[a, tB.a7]]),
        o = tH([
            [a, tB.NQ],
            [i, tB.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: l,
        className: tB.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: tB.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    (o.current = e), s(e);
                },
                "aria-label": `At end of ${t}`,
                className: tB.aC,
            }),
        }),
    });
}
function tz(e) {
    let { children: t } = e,
        [, n] = (0, tk.H)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var tZ = n(819638),
    tq = n(441174);
let tX = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function tQ(e) {
    (0, e9.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function tJ(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, E.yK)([ex.A], () => ex.A.getGuildsArray()),
        s = (0, E.bG)([ep.default], () => ep.default.getCurrentUser()),
        l = a.useMemo(() => i.some((e) => (0, tw.bM)(e, s)), [i, s]),
        o = (0, tg.useModalsStore)((e) => (0, tg.hasModalOpenSelector)(e, tZ.fc)),
        { analyticsLocations: d } = (0, O.Ay)();
    return (0, r.jsx)("div", {
        className: tq.Uq,
        children: (0, r.jsxs)(tU.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: tX,
            position: "right",
            disabled: t,
            children: [
                (0, r.jsx)(tL, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: function () {
                        (0, tM.Sn)()
                            ? (0, tP.A)({
                                  analyticsSource: { page: eg.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eg.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eg.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : tb.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: tQ,
                    tooltip: ea.intl.string(ea.t.l5WIbf),
                    icon: tv.U,
                }),
                null != n &&
                    (0, r.jsx)(tK, { name: ea.intl.string(ea.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var t0 = n(565787),
    t1 = n(791606),
    t2 = n(486020),
    t3 = n(184291);
function t4(e) {
    let [t, i] = a.useState(!1),
        s = (0, u.Vd)(`guild-${e.id}`);
    return (0, r.jsx)(k.c, {
        children: (0, r.jsx)(tR, {
            text: e.name,
            children: (0, r.jsx)(b.Q, {
                className: t3.o,
                selected: t,
                lowerBadge: (0, r.jsx)(e8.fk, { icon: (0, t0.k)(t1.A), disableColor: !0, className: t3._ }),
                children: (0, r.jsx)(M.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        i(!0);
                    },
                    onMouseLeave: function () {
                        i(!1);
                    },
                    onClick: function () {
                        (0, tg.openModalLazy)(async () => {
                            let { default: t } = await n.e("42945").then(n.bind(n, 537560));
                            return (n) => (0, r.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? t2.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var t5 = n(696292),
    t6 = n(836480),
    t7 = n(533129),
    t8 = n(726845),
    t9 = n(837057),
    ne = n(310419),
    nt = n(488995),
    nn = n(324580),
    ni = n(190107);
let nr = a.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: s, className: l } = e,
        o = a.useCallback(() => {
            (0, t7.WL)({ source: nt.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== s ? nt.GlobalDiscoveryTab.QUESTS : t8.A.getField("selectedTab");
            switch (e) {
                case nt.GlobalDiscoveryTab.QUESTS:
                    return (0, t9.transitionToGlobalDiscovery)({
                        tab: nt.GlobalDiscoveryTab.QUESTS,
                        location: ni.rE.DISCOVERY_COMPASS,
                        questContent: t5.u.DISCOVERY_COMPASS,
                        questId: s,
                    });
                case nt.GlobalDiscoveryTab.SERVERS:
                    return (0, t9.transitionToGlobalDiscovery)({
                        tab: nt.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nn.J8.GUILDS_BAR,
                    });
                case nt.GlobalDiscoveryTab.APPS:
                    return (0, t9.transitionToGlobalDiscovery)({
                        tab: nt.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: ne.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, t9.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [s]);
    return (0, r.jsx)(tL, {
        id: "guild-discover-button",
        ref: t,
        className: l,
        onClick: () => {
            o(), void 0 !== i && i();
        },
        selected: n,
        tooltip: ea.intl.string(ea.t["4nEZLk"]),
        icon: t6.Q,
    });
});
var na = n(506774),
    ns = n(509963),
    nl = n(111159),
    no = n(793943),
    nd = n(158045),
    nc = n(350972),
    nu = n(677056),
    n_ = n(526162),
    nE = n(174197);
function nA() {
    let [e, t] = (0, E.yK)([ep.default, n_.A], () => [
            n_.A.getCurrentDesktopIcon(),
            nd.Ay.isPremium(ep.default.getCurrentUser()),
        ]),
        n = (0, no.fy)().activePanel === no.HP.APP_ICON,
        i = (0, nE.gG)(e),
        a = i.id !== nc.LW.DEFAULT && (t || n),
        s = (0, r.jsx)(nl.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && a ? (0, r.jsx)(nu.A, { id: i.id, size: nE.N8.SIZE_48 }) : s;
}
var nh = n(531260),
    nI = n(411976),
    nf = n(912309),
    np = n(400492),
    nT = n(354670),
    nm = n(619921),
    ng = n(340829),
    nS = n(966846),
    nN = n(674378),
    nC = n(394953),
    nR = n(202541),
    nO = n(235079),
    nL = n(143170);
let nD = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function ny(e) {
    let { selected: t, user: n, badge: i, link: s, showProgressBadge: l } = e,
        [o, d] = a.useState(!1),
        [c, _] = a.useState(!1),
        [E, A] = a.useState(null),
        [h, I] = a.useState(0),
        f = (0, u.Vd)("home"),
        p = (0, no.fy)().activePanel === no.HP.APP_ICON;
    function T() {
        A(null), I(0), clearTimeout(E);
    }
    if (null == n) return null;
    let m = ea.intl.string(ea.t.YUU0RF);
    c && (m = na.w.get(eg.wqg) ? ea.intl.string(ea.t["nkq1l+"]) : ea.intl.string(ea.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, r.jsx)(ns.A, { className: nL.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, r.jsx)(b.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, F.wN)(i) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, e8.o6)(i) },
            children: (0, r.jsx)(M.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), I(h + 1), 15 === h)) {
                        T();
                        let e = !na.w.get(eg.wqg);
                        na.w.set(eg.wqg, e),
                            e && na.w.set(nO.L, !0),
                            e ? (0, np.Ak)("discodo") : (0, np.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: ea.intl.string(ea.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...f,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eg.liQ.GUILD_CHANNEL,
                            section: eg.JJy.NAVIGATION,
                            object: eg.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, r.jsx)(nA, {}),
            }),
        });
    return (0, r.jsx)("div", {
        className: nL.Uq,
        children: (0, r.jsx)(tU.A, {
            inlineSpecs: nD,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(k.c, {
                children: [
                    (0, r.jsx)(x.A, { overlay: !0, selected: t, hovered: o }),
                    (0, r.jsx)(tR, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nv() {
    let e = (function () {
            let e = (0, V.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eg.BVt.GUILD_DISCOVERY) || t.startsWith(eg.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eg.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nC.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, E.bG)([nS.A, ng.A], () => {
            let e = (0, ns.v)(nS.A.activeItems, ng.A),
                { total: t, progress: n } = nN.zY(e),
                i = nN.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nf.kX)(),
        i = Object.keys(nR.TP),
        a = (0, nh.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, E.cf)([nT.A], () => ({
            unviewedTrialCount: nT.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nT.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === nR.xc.NONE ? s + l : 0,
        d = (0, E.bG)([ep.default], () => ep.default.getCurrentUser()),
        u = (0, nI.W)(),
        _ = n + o + u,
        A = _ === o && o > 0 && n + u === 0,
        h = nm.A.getHomeLink();
    return (
        A && (h = eg.BVt.APPLICATION_STORE),
        (0, r.jsx)(ny, {
            selected: e,
            user: d,
            selectedChannelId: W.Ay.getChannelId(eg.ME),
            badge: _,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nb = n(550281);
function nM(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(k.c, { children: (0, r.jsx)("div", { className: l()(nb.t, { [nb.I]: t }) }) });
}
var nP = n(349288),
    nU = n(695366),
    nw = n(919638),
    nG = n(818348),
    nx = n(135492);
function nk() {
    let e = (0, E.bG)([nw.A, ex.A], () => nw.A.unavailableGuilds.filter((e) => null == ex.A.getGuild(e)).length),
        t = (0, u.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(k.c, {
              children: (0, r.jsx)(tR, {
                  text: ea.intl.format(ea.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nP.Anchor, {
                      href: nG.qF.STATUS,
                      target: "_blank",
                      className: nx.h,
                      "aria-label": ea.intl.formatToPlainString(ea.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, r.jsx)(nU.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nF = n(930235),
    nV = n(317097),
    nB = n(319060),
    nH = n(866323),
    nj = n(817281),
    nW = n(534409),
    nY = n(240248),
    nK = n(678708),
    n$ = n(259678),
    nz = n(140735),
    nZ = n(548118),
    nq = n(195451);
function nX(e) {
    let { guildId: t, animate: n } = e,
        i = (0, E.bG)([ex.A], () => ex.A.getGuild(t), [t]),
        a = (0, T.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", { className: l()(nq.VL, nq.zU), children: (0, r.jsx)(nU.E, { color: "currentColor" }) })
        : (0, r.jsx)(nZ.Ay, {
              guild: i,
              animate: n,
              size: nZ.Ay.Sizes.MINI,
              iconSize: a,
              lossless: !0,
              className: nq.VL,
              tabIndex: -1,
          });
}
function nQ(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: a } = t,
        s = n && i,
        o = (0, r.jsx)("div", {
            className: nq.hJ,
            children: (0, r.jsx)("div", {
                className: nq.Eh,
                children: (0, r.jsx)(nK.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, r.jsx)("div", {
            className: nq.qJ,
            children: (0, r.jsx)("div", {
                className: nq.jg,
                children: a.slice(0, 4).map((e) => (0, r.jsx)(nX, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l()({ [nq.NG]: s, [nq.yd]: !s }),
        children: [!s && o, d],
    });
}
function nJ(e) {
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
        R = n || null == s ? null : (0, F.oi)(s),
        O =
            !n && l > 0
                ? (0, F.wN)(
                      l,
                      o ? I.A.colors.BACKGROUND_MOD_STRONG.css : I.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(n$.vN, {
        children: (0, r.jsxs)(tN.D, {
            className: nq.H3,
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
                (0, r.jsx)(nz.A, {
                    children: ea.intl.formatToPlainString(ea.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, r.jsx)(b.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: R,
                    lowerBadge: O,
                    lowerBadgeSize: { width: (0, e8.o6)(l) },
                    children: (0, r.jsx)("div", {
                        className: nq.vA,
                        children:
                            null != u
                                ? (0, r.jsx)("div", { className: nq.hJ, children: u })
                                : (0, r.jsx)(nQ, { folderNode: t, hovered: g, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var n0 = n(573435),
    n1 = n(32294);
function n2(e) {
    let { className: t, isFolder: n } = e,
        i = (0, T.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(n0.Ay, {
        mask: n0.Ay.Masks.SQUIRCLE,
        className: l()(t, n1.OL, { [n1.lQ]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: n1.ZU }),
    });
}
var n3 = n(114329),
    n4 = n(167546);
let n5 = (0, nY.xI)(nB.A.FOLDER_ITEM_ANIMATION_DURATION),
    n6 = (0, e6.animated)(f.B),
    n7 = a.memo(function (e) {
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
                draggable: m = !1,
                sorting: g = !1,
                onDragStart: S,
                onDragEnd: N,
                onExpandCollapse: C,
                onContextMenu: R,
                renderChildNode: O,
                folderButtonSize: L,
                folderButtonContent: D,
                "aria-setsize": y,
                "aria-posinset": v,
            } = e,
            { id: b, name: M, children: P } = o,
            [U, w] = a.useState(!1),
            [G, F] = a.useState(!1),
            V = U || G,
            B = (0, nW.qK)("FolderItem");
        a.useEffect(() => {
            g && w(!1);
        }, [g]);
        let [{ dragging: H }, j] = (0, nF.i)({
                type: eB.PJ.FOLDER,
                item: () => (S?.(), { type: eB.PJ.FOLDER, nodeId: o.id }),
                end() {
                    N?.(), (0, nj.um)(ek.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            W = a.useCallback((e) => {
                F(e);
            }, []),
            Y = a.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !_) || ("ArrowLeft" === e.key && _)) && C();
                },
                [C, _],
            ),
            K = null != M && "" !== M ? M : null != p && "" !== p ? p : ea.intl.string(ea.t.xV9hVh),
            $ = (0, u.Vd)(`${b}`),
            z = `folder-items-${b}`,
            Z =
                ((t = P.length),
                (n = (0, T.r)(I.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, T.r)(I.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (s = (0, T.r)(I.A.space.SPACE_XS))) - s + (s - (n - i) / 2) + (0, T.r)(I.A.space.SPACE_4)),
            q = (0, nH.p)(!H && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: n5 },
            }),
            X = a.useCallback((e) => d?.(b, e), [d, b]),
            Q = (0, r.jsxs)(k.c, {
                children: [
                    (0, r.jsx)(x.A, { overlay: !0, disabled: H || _, hovered: U, selected: c, unread: f }),
                    (0, r.jsx)(tR, {
                        text: K,
                        disabled: g,
                        selected: c,
                        disableWrapper: !0,
                        children: (0, r.jsx)("div", {
                            ref: m
                                ? (e) => {
                                      j(e);
                                  }
                                : void 0,
                            className: l()(nq.MJ, { [nq.L0]: "icon" === L || B, [n4.oR]: !H && G && !_ }),
                            "data-dnd-name": K,
                            children: H
                                ? (0, r.jsx)(n2, { isFolder: !0 })
                                : (0, r.jsx)(nJ, {
                                      folderNode: o,
                                      expanded: _,
                                      sorting: g,
                                      mediaState: E,
                                      mentionCount: A,
                                      isMentionLowImportance: h,
                                      tooltipName: K,
                                      folderGroupId: z,
                                      onClick: C,
                                      onContextMenu: R,
                                      onHoverChange: w,
                                      onKeyDown: Y,
                                      treeItemProps: $,
                                      folderButtonContent: D,
                                      "aria-setsize": y,
                                      "aria-posinset": v,
                                  }),
                        }),
                    }),
                    m ? (0, r.jsx)(tK, { name: K, targetNode: o, onDragOverChanged: W }) : null,
                ],
            }),
            J = null != o.color ? o.color : n3.DO,
            ee = J === n3.DO ? void 0 : (0, nV.Hl)(J);
        return (0, r.jsxs)("div", {
            ref: X,
            className: l()(nq.qc, { [nq.Av]: _, [nq.Lg]: V }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": G,
            children: [
                !H && _ && (0, r.jsx)("span", { className: nq.GO }),
                Q,
                q((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            n6,
                            {
                                id: z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: nq.TN,
                                style: { height: e.height.to((e) => e * Z) },
                                "aria-label": o.name,
                                children: P.map((t, n) => O(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                m && _ ? (0, r.jsx)(t$, { name: K, targetNode: o }) : null,
            ],
        });
    });
var n8 = n(354583);
let n9 = a.memo(function (e) {
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
        N = (0, V.A)((e) => e.guildId),
        C = (0, E.bG)([eW.A], () => eW.A.isFolderExpanded(p)),
        R = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = ex.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(em.Vq),
                n = 2 * eg.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(I),
        O =
            ((t = (0, E.bG)([e5.A], () => e5.A.getGuildId())),
            (i = I.children.map((e) => e.id)),
            (s = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, E.bG)([e5.A], () => e5.A.getChannelId())),
            (_ = null != (u = (0, n8.A)()?.guild_id) && i.includes(u)),
            (A = (0, E.bG)([Y.A], () => null != c && Y.A.hasVideo(c), [c])),
            (h = (0, E.bG)([H.A], () => H.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != h && null != h.guildId && i.includes(h.guildId))),
            a.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: _, isCurrentUserConnected: s }),
                [l, o, d, _, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: D,
            unread: y,
        } = (0, E.cf)([Q.default], () => ({
            mentionCount: S.map((e) => Q.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => Q.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => Q.default.hasUnread(e)),
        })),
        v = a.useCallback(() => {
            tF.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = a.useCallback(
            (e) => {
                (0, e9.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: y || L > 0 });
                });
            },
            [p, T, m, y, L],
        );
    return (0, r.jsx)(n7, {
        ...f,
        folderNode: I,
        expanded: C,
        selected: null != N && S.includes(N),
        mentionCount: L,
        isMentionLowImportance: D,
        unread: y,
        mediaState: O,
        defaultFolderName: R,
        onExpandCollapse: v,
        onContextMenu: b,
    });
});
var ie = n(113494),
    it = n(821124),
    ii = n(212455);
function ir(e) {
    let t = e?.features.has(eg.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, E.bG)([ii.A, ep.default, eG.Ay], () => {
            if (null == e) return;
            let t = ii.A.getRequest(e.id),
                n = ep.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = eG.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, it.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var ia = n(347951),
    is = n(478437),
    il = n(811024),
    io = n(890615),
    id = n(508654),
    ic = n(446600),
    iu = n(95701),
    i_ = n(280450);
let iE = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-06-dont-badge-muted-vcs",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function iA(e) {
    return iE.useConfig({ location: e }).enabled;
}
function ih(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : J.A;
    return null != e && e.type !== is.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eg.hVb.VIEW_CHANNEL, e);
}
function iI(e) {
    let t = (0, E.bG)([et.Ay], () => et.Ay.isMuted(e)),
        n = iA("useGuildMediaState"),
        i = (0, id.BP)(e),
        r = (0, E.yK)([w.Ay, tr.A], () =>
            w.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (t = [...e.userIds]), (n = tr.A.getBlockedOrIgnoredIDs()), !t.some((e) => ta(e, n));
            }),
        ),
        a = (0, G.H)(r[0]?.location),
        s = (0, il.Gp)(a),
        {
            guildHasVoice: l,
            guildHasVideo: o,
            selectedVoiceChannelHasVideo: c,
        } = (0, E.cf)([W.Ay, Y.A, ex.A, J.A, j.A, et.Ay], () => {
            var i;
            let r = W.Ay.getVoiceChannelId(),
                a = ex.A.getGuild(e)?.afkChannelId,
                s = Y.A.getUsersWithVideo(e),
                l =
                    ((i = Y.A.getVoiceStates(e)),
                    d()(i)
                        .filter((e) => !tr.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let t in l) {
                        let i = l[t].channelId;
                        if (
                            null != i &&
                            ih(j.A.getBasicChannel(i), a ?? void 0, J.A) &&
                            (!n || !et.Ay.isGuildOrCategoryOrChannelMuted(e, i))
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
                            ih(j.A.getBasicChannel(i), a ?? void 0, J.A) &&
                            (!n || !et.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != r && Y.A.hasVideo(r),
            };
        }, [e, t, n]),
        u = i_.default.getId();
    return (0, E.cf)([W.Ay, j.A, w.Ay, ic.A, H.A, J.A, et.Ay], () => {
        let a = W.Ay.getVoiceChannelId(),
            d = j.A.getChannel(a)?.guild_id === e,
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
        let p = K.default.keys(ic.A.getStageInstancesByGuild(e)).some((e) => {
                let t = j.A.getBasicChannel(e);
                return null != t && (0, io.A)(t, J.A);
            }),
            T = d && (j.A.getChannel(a)?.isGuildStageVoice() ?? !1),
            m = !!d && null != H.A.getActiveStreamForUser(u, e),
            g = H.A.getAllApplicationStreams()
                .filter((e) => !tr.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e && (!n || !et.Ay.isGuildOrCategoryOrChannelMuted(e, t.channelId))),
            S = d && c,
            N = (() => {
                if (s) return r.length > 0;
                for (let e of r) {
                    let t = j.A.getChannel((0, G.H)(e.location));
                    if (null != t && (0, iu.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            C = w.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
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
var ip = n(607399),
    iT = n(702841),
    im = n(658128),
    ig = n(976860),
    iS = n(676279);
function iN(e) {
    let { guild: t, show: n, active: i, onAnimationStart: a, onAnimationRest: s } = e,
        o = {},
        d = {};
    (o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, T.r)(I.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, T.r)(I.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, nH.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: s });
    return (0, r.jsx)(r.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: nq.qc,
                        children: (0, r.jsx)("div", {
                            className: l()(nq.MJ, nq.L0),
                            style: { margin: 0 },
                            children: (0, r.jsx)(e6.animated.div, {
                                className: nq.NG,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: nq.qJ,
                                    children: (0, r.jsx)("div", {
                                        className: nq.jg,
                                        children: (0, r.jsx)(nZ.Ay, {
                                            guild: t,
                                            size: nZ.Ay.Sizes.SMOL,
                                            className: nq.VL,
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
var iC = n(454938),
    iR = n(714991),
    iO = n(107773),
    iL = n(513461),
    iD = n(164956),
    iy = n(624265),
    iv = n(970278),
    ib = n(808728);
function iM(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eS.nM,
              children: [
                  (0, r.jsx)(e, { className: eS.RI, color: "currentColor" }),
                  (0, r.jsx)(eh.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iP(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(ec.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: ea.intl.string(ea.t.fpKdS1),
          })
        : (0, r.jsx)(tc.A, { muteConfig: t, className: n });
}
function iU(e) {
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
        R,
        O,
        { guild: L } = e,
        D = L.id,
        {
            voiceUsersToShow: y,
            stageSpeakers: v,
            numStageListeners: b,
            streamUsersToShow: M,
            embeddedActivitiesUsers: P,
        } = ((t = L.id),
        (n = iA("useGuildTooltipActivity")),
        (i = (0, E.yK)(
            [ib.Ay, iv.A, et.Ay],
            () => [
                ...ib.Ay.getChannels(t)
                    [ib.vM].filter((e) => {
                        let { channel: i } = e;
                        return i.type === eg.rbe.GUILD_VOICE && (!n || !et.Ay.isGuildOrCategoryOrChannelMuted(t, i.id));
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(iv.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t, n],
        )),
        (s = (0, iy.Ay)(t)),
        (o = a.useMemo(() => s.map((e) => e.id), [s])),
        (c = (0, E.bG)([eT.Ay], () => eT.Ay.getVoiceStates(t), [t])),
        (u = (0, E.bG)([tr.A], () => tr.A.getBlockedOrIgnoredIDs())),
        (_ = d().flatMap(i, (e) =>
            e === L.afkChannelId
                ? []
                : ts(
                      (c[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      u,
                  ),
        )),
        (A = (0, E.yK)([eI.A], () =>
            d().flatMap(o, (e) =>
                e === L.afkChannelId
                    ? []
                    : ts(
                          eI.A.getMutableParticipants(e, ef.ip.SPEAKER)
                              .filter((e) => e.type === ef.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          u,
                      ),
            ),
        )),
        (h = (0, E.bG)([eI.A], () => {
            let e = 0;
            for (let t of o) e += eI.A.getParticipantCount(t, ef.ip.AUDIENCE);
            return e;
        })),
        (I = (0, E.yK)(
            [H.A, et.Ay],
            () =>
                tl(
                    H.A.getAllApplicationStreams()
                        .filter(
                            (e) => e.guildId === t && (!n || !et.Ay.isGuildOrCategoryOrChannelMuted(t, e.channelId)),
                        )
                        .map((e) => e.ownerId),
                    u,
                ),
            [u, t, n],
        )),
        (f = (0, E.yK)(
            [w.Ay],
            () =>
                tl(
                    w.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    u,
                ),
            [t, u],
        )),
        (p = (0, E.yK)([ep.default], () => ts(f.map((e) => ep.default.getUser(e))), [f])),
        (T = (0, E.yK)([ep.default], () => I.map((e) => ep.default.getUser(e)), [I])),
        (g = ts((m = _.filter((e) => !I.includes(e.id) && !f.includes(e.id))))),
        (S = T.filter((e) => null != e && !f.includes(e.id))),
        (N = (0, E.bG)([to.A], () => to.A.getUserAffinitiesMap(), [])),
        (C = a.useMemo(() => (0, td.L)(g, N, "GuildTooltip - nonBlockedUsers"), [g, N])),
        (R = a.useMemo(() => (0, td.L)(A, N, "GuildTooltip - stageSpeakers"), [A, N])),
        (O = a.useMemo(() => (0, td.L)(S, N, "GuildTooltip - streamUsers"), [S, N])),
        {
            voiceUsersToShow: C,
            stageSpeakers: R,
            numStageListeners: h,
            streamUsersToShow: O,
            embeddedActivitiesUsers: a.useMemo(() => (0, td.L)(p, N, "GuildTooltip - embeddedActivitiesUsers"), [p, N]),
            hasActivity: A.length > 0 || m.length > 0 || S.length > 0 || p.length > 0,
        }),
        U = iM(eu.H, y, D),
        G =
            0 === v.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eS.nM,
                      children: [
                          (0, r.jsx)(eo.q, { size: "lg", color: "currentColor", className: eS.RI }),
                          (0, r.jsx)(eh.Ay, { guildId: D, users: v, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eS.GZ,
                              children: [
                                  (0, r.jsx)(ed.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(ec.E, {
                                      className: eS._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: b,
                                  }),
                              ],
                          }),
                      ],
                  }),
        x = iM(e_.F, M, D),
        k = iM(eE.k, P, D),
        { isMuted: F, muteConfig: V } = (0, E.cf)(
            [et.Ay],
            () => ({ isMuted: et.Ay.isMuted(D), muteConfig: et.Ay.getMuteConfig(D) }),
            [D],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            G,
            U,
            x,
            k,
            F ? (0, r.jsx)(iP, { muteConfig: V, className: l()(eS.LM, { [eS.Sx]: null != U || null != x }) }) : null,
        ],
    });
}
function iw(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(ec.E, {
        className: eS.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case iL.B5.SUBMITTED:
                    return ea.intl.string(ea.t["9KFC98"]);
                case iL.B5.REJECTED:
                    return ea.intl.string(ea.t["TQY/Rd"]);
                case iL.B5.APPROVED:
                    return ea.intl.string(ea.t.WXHcq5);
                default:
                    return ea.intl.string(ea.t.fjHFC8);
            }
        })(t),
    });
}
function iG(e) {
    let { guild: t } = e,
        n = (0, iC.A)(t),
        i = ir(t),
        a = null != i ? (0, r.jsx)(iw, { guildJoinRequestStatus: i }) : null,
        s = (0, r.jsx)(iU, { guild: t }),
        o = (0, E.bG)([iD.A], () => iD.A.isViewingRoles(t.id)),
        d = (0, ia.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l()(eS.nM, eS.Dl),
                children: [
                    n
                        ? (0, r.jsx)(iO.A, { disableBoostClick: !0, guild: t, className: eS.WX })
                        : (0, r.jsx)(iR.A, { guild: t, size: 20, className: eS.aL }),
                    (0, r.jsx)("span", { className: l()(eS.cN, eS.NT), children: t.name }),
                ],
            }),
            d
                ? (0, r.jsx)(ec.E, {
                      className: eS.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: ea.intl.string(ea.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, r.jsx)(ec.E, {
                      className: eS.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: ea.intl.string(ea.t["5LwN89"]),
                  })
                : (a ?? s),
        ],
    });
}
function ix(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: s } = e,
        l = a.useMemo(
            () =>
                n
                    ? null
                    : (0, r.jsx)(ec.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eS.A_,
                          children: (0, r.jsx)(iG, { guild: t }),
                      }),
            [n, t],
        );
    return (0, r.jsx)(eA.m, {
        __unsupportedReactNodeAsText: l,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: s,
    });
}
let ik = { analyticsSource: { page: eg.liQ.GUILD_CHANNEL, section: eg.JJy.CHANNEL_LIST, object: eg.ZSU.CHANNEL } };
function iF(e, t) {
    (0, e9.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("50614"),
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
            n.e("8991"),
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
            n.e("27634"),
            n.e("73297"),
            n.e("33004"),
            n.e("3557"),
            n.e("83118"),
            n.e("98942"),
            n.e("31076"),
            n.e("68961"),
            n.e("69167"),
            n.e("14883"),
            n.e("23102"),
            n.e("2285"),
            n.e("97726"),
            n.e("42394"),
            n.e("44459"),
            n.e("98986"),
            n.e("37467"),
            n.e("60411"),
            n.e("61298"),
            n.e("45807"),
            n.e("26572"),
            n.e("65640"),
            n.e("87356"),
            n.e("85391"),
            n.e("56356"),
            n.e("18307"),
            n.e("5270"),
            n.e("42293"),
            n.e("60574"),
            n.e("83554"),
            n.e("53412"),
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
            n.e("69190"),
            n.e("18315"),
            n.e("17776"),
            n.e("78969"),
            n.e("70201"),
            n.e("61275"),
            n.e("49557"),
            n.e("30072"),
            n.e("18629"),
            n.e("90607"),
            n.e("3672"),
            n.e("13920"),
            n.e("99424"),
            n.e("670"),
            n.e("99496"),
            n.e("44565"),
            n.e("88563"),
            n.e("24212"),
            n.e("20459"),
            n.e("54960"),
            n.e("55455"),
            n.e("778"),
            n.e("75683"),
            n.e("23864"),
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
            n.e("65584"),
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
            n.e("80904"),
            n.e("75459"),
            n.e("43300"),
            n.e("32886"),
            n.e("92111"),
            n.e("64648"),
            n.e("95013"),
            n.e("76858"),
            n.e("6819"),
            n.e("96004"),
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
            n.e("12822"),
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
            n.e("52123"),
            n.e("26738"),
            n.e("41295"),
            n.e("69960"),
            n.e("46148"),
            n.e("94848"),
            n.e("64488"),
            n.e("91109"),
            n.e("61439"),
            n.e("39653"),
            n.e("39013"),
            n.e("99265"),
            n.e("40804"),
            n.e("45827"),
            n.e("64477"),
            n.e("65700"),
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
            n.e("47623"),
            n.e("63933"),
            n.e("42083"),
            n.e("20182"),
            n.e("47426"),
            n.e("202"),
            n.e("9454"),
            n.e("77579"),
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
            n.e("52457"),
            n.e("60235"),
            n.e("77333"),
            n.e("18573"),
            n.e("6338"),
            n.e("47834"),
            n.e("97595"),
            n.e("47662"),
            n.e("44057"),
            n.e("13736"),
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
            n.e("30760"),
            n.e("94723"),
            n.e("30316"),
            n.e("62931"),
            n.e("45959"),
            n.e("58529"),
            n.e("83488"),
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
            n.e("76602"),
            n.e("7170"),
            n.e("11310"),
            n.e("21921"),
            n.e("7575"),
            n.e("40402"),
            n.e("72963"),
            n.e("52511"),
            n.e("54241"),
            n.e("24303"),
            n.e("42724"),
            n.e("93766"),
            n.e("13823"),
            n.e("71210"),
            n.e("21930"),
            n.e("59460"),
            n.e("53930"),
            n.e("39970"),
            n.e("76418"),
            n.e("40258"),
            n.e("92583"),
            n.e("43437"),
            n.e("75842"),
            n.e("66495"),
            n.e("98329"),
            n.e("9205"),
            n.e("8555"),
            n.e("88342"),
            n.e("30233"),
            n.e("86127"),
            n.e("46070"),
            n.e("88599"),
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
            n.e("95596"),
            n.e("82644"),
            n.e("3589"),
            n.e("13867"),
            n.e("53984"),
            n.e("43780"),
            n.e("20590"),
            n.e("31267"),
            n.e("86414"),
            n.e("80830"),
            n.e("51224"),
            n.e("79745"),
            n.e("80854"),
            n.e("35395"),
            n.e("74630"),
            n.e("92215"),
            n.e("45413"),
            n.e("46844"),
            n.e("39075"),
            n.e("63235"),
            n.e("86672"),
            n.e("75029"),
            n.e("48948"),
            n.e("63244"),
            n.e("32756"),
            n.e("64850"),
            n.e("70104"),
            n.e("68214"),
            n.e("2564"),
            n.e("71477"),
            n.e("67878"),
            n.e("31965"),
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
            n.e("16731"),
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
            n.e("44780"),
            n.e("39171"),
            n.e("87478"),
            n.e("83952"),
            n.e("95340"),
            n.e("89916"),
            n.e("60773"),
            n.e("66948"),
            n.e("9004"),
            n.e("59957"),
            n.e("29666"),
            n.e("8018"),
            n.e("65927"),
            n.e("49145"),
            n.e("68763"),
            n.e("18113"),
            n.e("3930"),
            n.e("58273"),
            n.e("3663"),
            n.e("6949"),
            n.e("20930"),
            n.e("99976"),
            n.e("26001"),
            n.e("30997"),
            n.e("14591"),
            n.e("52111"),
            n.e("19454"),
            n.e("34786"),
            n.e("15109"),
            n.e("94607"),
            n.e("82730"),
            n.e("8536"),
            n.e("28136"),
            n.e("57458"),
            n.e("38601"),
            n.e("6045"),
            n.e("1243"),
            n.e("15920"),
            n.e("18706"),
            n.e("872"),
            n.e("59797"),
            n.e("52531"),
            n.e("93336"),
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
            n.e("66147"),
            n.e("28235"),
            n.e("21778"),
            n.e("22547"),
            n.e("61058"),
            n.e("50342"),
            n.e("33097"),
            n.e("80098"),
            n.e("3710"),
            n.e("9391"),
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
            n.e("56684"),
            n.e("56373"),
            n.e("83827"),
            n.e("42749"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("25961"),
            n.e("59702"),
            n.e("8364"),
            n.e("99108"),
            n.e("52823"),
            n.e("56967"),
            n.e("66913"),
            n.e("83947"),
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
            n.e("23386"),
            n.e("84951"),
            n.e("60165"),
            n.e("12390"),
            n.e("71167"),
            n.e("13446"),
            n.e("6410"),
            n.e("61309"),
            n.e("94529"),
            n.e("95210"),
            n.e("30313"),
            n.e("98415"),
            n.e("21300"),
            n.e("53584"),
            n.e("17699"),
            n.e("57032"),
            n.e("22941"),
            n.e("94832"),
            n.e("26386"),
            n.e("65338"),
            n.e("88860"),
        ]).then(n.bind(n, 860417));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
let iV = a.memo(function (e) {
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
            isMentionLowImportance: m,
            contextMenu: g = iF,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: R,
            height: O,
            "aria-setsize": L,
            "aria-posinset": D,
        } = e,
        { id: y, parentId: v } = t,
        P = e.upperBadge ?? (f ? (0, F.em)() : null != A ? (0, F.oi)(A) : void 0),
        w = e.lowerBadge ?? void 0;
    null == w && p > 0
        ? (w =
              (0, F.wN)(
                  p,
                  m ? I.A.colors.BACKGROUND_MOD_STRONG.css : I.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == w && null != R && (w = (0, F.eW)({ guildJoinRequestStatus: R }) ?? void 0);
    let G = e.lowerBadgeSize ?? { width: (0, e8.o6)(p) },
        [{ dragging: V }, H] = (0, nF.i)({
            type: eB.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                s?.(), (0, nj.um)(ek.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        j = (0, u.Vd)(y ?? eg.dJq, null != v ? 2 : 1),
        [W, Y] = a.useState(!1),
        K = !N && W,
        [$, z] = a.useState(!1),
        [Z, q] = a.useState(!1),
        [X] = a.useState(() => new h.J_(70, () => q(!0))),
        Q = (0, iS.nr)() && !ip.Fr;
    a.useEffect(() => () => X.cancel(), [X]);
    let J = a.useCallback(() => {
            null != o ? (0, ig.pX)(o, { state: ik }) : (0, B.u)(y, { state: ik });
        }, [y, o]),
        ee = a.useCallback(() => {
            if (null != o || null == d || f || !C) return;
            let e = (0, im.W)(d.id);
            null != e && U.A.preload(d.id, e);
        }, [o, d, f, C]),
        et = (0, iT.bG)([eG.Ay], () => eG.Ay.isCurrentUserGuest(y)),
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
                e ? X.delay() : (X.cancel(), q(!1));
            },
            [X],
        );
    function es() {
        N || Y(!0);
    }
    function el() {
        N || Y(!1);
    }
    let eo = a.useCallback(
            (e) => {
                n?.(y, e);
            },
            [y, n],
        ),
        ed = (0, T.r)(I.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ec = d.name;
    if (
        (p > 0
            ? (ec = ea.intl.formatToPlainString(ea.t["/uzRss"], { guildName: d.name, mentions: p }))
            : E && (ec = ea.intl.formatToPlainString(ea.t.lzqe42, { guildName: d.name })),
        null != A)
    ) {
        let e = [];
        A.activeEvent && e.push(ea.intl.string(ea.t.dHvJ2p)),
            A.liveStage && e.push(ea.intl.string(ea.t.OO7ndG)),
            A.screenshare && e.push(ea.intl.string(ea.t.wsHMZ7)),
            A.video && e.push(ea.intl.string(ea.t.BrLCS0)),
            A.audio && e.push(ea.intl.string(ea.t.jPBhKy)),
            A.activity && e.push(ea.intl.string(ea.t.Y3Gii5)),
            e.length > 0 && (ec = `${ec}, ${e.join(" ")}`);
    }
    let eu = (0, r.jsx)(iN, {
            guild: d,
            show: Z,
            active: _,
            onAnimationStart: function () {
                z(Z);
            },
            onAnimationRest: function () {
                Z || z(!1);
            },
        }),
        e_ = Q
            ? (0, r.jsx)(M.j, {
                  ariaLabel: ec,
                  name: d.name,
                  onClick: J,
                  onMouseEnter: es,
                  onMouseLeave: el,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, tw.Iv)(d, 2 * ed, K && c, !0),
                  selected: _ || K,
                  ...j,
                  "aria-setsize": L,
                  "aria-posinset": D,
                  "aria-selected": _,
              })
            : (0, r.jsx)(b.Q, {
                  selected: _,
                  children: (0, r.jsx)("div", {
                      ref: S
                          ? (e) => {
                                H(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": Z,
                      children: (0, r.jsx)(M.j, {
                          ariaLabel: ec,
                          name: d.name,
                          onClick: J,
                          onMouseEnter: es,
                          onMouseLeave: el,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, tw.Iv)(d, 2 * ed, K && c, !0),
                          selected: _ || K,
                          ...j,
                          "aria-setsize": L,
                          "aria-posinset": D,
                          "aria-selected": _,
                      }),
                  }),
              }),
        eE = Z || $ ? eu : e_,
        eA = (0, r.jsx)(tz, { children: (0, r.jsx)(n2, {}) }),
        eh = Q
            ? (0, r.jsx)(e6.animated.div, {
                  ref: S
                      ? (e) => {
                            H(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == O ? 1 : O },
                  "data-drop-hovering": Z,
                  className: l()(n4.rN, { [n4.p9]: N, [n4.oR]: Z, [n4.wH]: Z || _ }),
                  children: (0, r.jsx)(b.Q, {
                      selected: !0,
                      upperBadge: P,
                      lowerBadge: w,
                      lowerBadgeSize: G,
                      children: eE,
                  }),
              })
            : (0, r.jsx)(e6.animated.div, {
                  style: { scale: null == O ? 1 : O },
                  className: l()(n4.rN, { [n4.p9]: N, [n4.oR]: Z, [n4.wH]: Z || _ }),
                  "data-drop-hovering": Z,
                  children: (0, r.jsx)(b.Q, {
                      selected: _,
                      upperBadge: P,
                      lowerBadge: w,
                      lowerBadgeSize: G,
                      children: eE,
                  }),
              });
    return (0, r.jsxs)(k.c, {
        ref: eo,
        children: [
            (0, r.jsx)(x.A, { overlay: !0, hovered: !V && K, selected: !V && _, unread: !V && E }),
            (0, r.jsx)(ix, { guild: d, disabled: N, isDragging: V, children: V ? eA : eh }),
            S ? (0, r.jsx)(tK, { name: d.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var iB = n(342216);
let iH = a.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        s = (0, E.bG)([ex.A], () => ex.A.getGuild(i)),
        l = ir(s),
        o = (0, E.bG)([eq.A], () => eq.A.isFocused()),
        d = (0, E.bG)([nw.A], () => nw.A.isUnavailable(i)),
        c = (0, V.A)((e) => e.guildId),
        u = iI(i),
        {
            badge: _,
            unread: A,
            isMentionLowImportance: h,
        } = (0, E.cf)([Q.default], () => ({
            badge: Q.default.getMentionCount(i),
            isMentionLowImportance: Q.default.getIsMentionLowImportance(i),
            unread: Q.default.hasUnread(i),
        })),
        I = (0, ia.Ig)(s) && 0 === _,
        f = a.useMemo(
            () =>
                null != n
                    ? n
                    : I
                      ? (0, r.jsx)("div", {
                            className: iB.j,
                            children: (0, r.jsx)(ie.E, {
                                size: "custom",
                                color: "currentColor",
                                className: iB.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, I],
        );
    return (0, r.jsx)(iV, {
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
var ij = n(922016),
    iW = n(297264),
    iY = n(821609),
    iK = n(339350),
    i$ = n(475743),
    iz = n(624458),
    iZ = n(408213),
    iq = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    iX = n(928568);
function iQ(e, t) {
    (0, e9.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function iJ(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, E.bG)([ii.A], () => ii.A.getRequest(n)),
        a = (0, E.bG)([ii.A], () => ii.A.getJoinRequestGuild(n), [n]),
        s = (0, E.bG)([eq.A], () => eq.A.isFocused()),
        l = (0, E.bG)([eH.A], () => eH.A.getGuildId());
    return null == a
        ? null
        : (0, r.jsx)(iV, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: iQ,
              lowerBadge:
                  i?.applicationStatus === iL.B5.REJECTED
                      ? (0, F.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eg.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var i0 = n(295783);
function i1(e) {
    let { onActivate: t, children: n } = e,
        i = a.useRef(null),
        s = (0, E.bG)([ii.A], () => ii.A.hasJoinRequestCoackmark()),
        l = a.useCallback(() => {
            iZ.Ay.clearCoachmark();
        }, []),
        o = (0, i$.Ay)(s),
        d = a.useRef(null);
    return (
        a.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, r.jsxs)("div", {
            className: i0.kL,
            children: [
                (0, r.jsx)(ij.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: i0.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: i0.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: i0.q3,
                                            children: [
                                                (0, r.jsx)(iW.D, {
                                                    variant: "heading-md/medium",
                                                    children: ea.intl.string(ea.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(ec.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: ea.intl.string(ea.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(iY.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: ea.intl.string(ea.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: i0.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: i0.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function i2(e) {
    let { onActivate: t } = e,
        [n, i] = a.useState(!1),
        s = (0, E.bG)([eH.A], () => eH.A.getGuildId()),
        l = (0, E.bG)([ii.A], () => ii.A.hasFetchedRequestToJoinGuilds),
        o = (0, iX.A)(),
        d = (0, i$.Ay)(s),
        c = a.useMemo(() => {
            let e = (0, eB.xW)({
                folderId: iq.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: ea.intl.string(ea.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, eB.EL)(t, e.id));
            return e;
        }, [o, n]);
    a.useEffect(() => {
        n && !l && iz.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (a.useEffect(() => {
        !n && u && d !== s && i(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, r.jsx)(i1, {
              onActivate: t,
              children: (0, r.jsx)(n7, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), iZ.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: i0.rH,
                      children: (0, r.jsx)(iK.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eB.PJ.GUILD
                          ? null
                          : (0, r.jsx)(iJ, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function i3(e) {
    let { guildId: t } = e,
        n = a.useMemo(() => (0, eB.EL)(t), [t]),
        i = (0, E.bG)([ex.A], () => ex.A.getGuild(t)),
        s = (0, E.bG)([eq.A], () => eq.A.isFocused()),
        l =
            t ===
            (0, V.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = iI(t);
    return null == i
        ? null
        : (0, r.jsx)(iV, { guildNode: n, guild: i, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var i4 = n(221305);
let i5 = (0, D.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("75442"),
                n.e("14520"),
                n.e("65584"),
                n.e("1248"),
                n.e("94149"),
                n.e("58921"),
                n.e("27634"),
                n.e("73297"),
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
                n.e("75029"),
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
    i6 = (0, eF.isWindows)() ? 4 : 12 * !(0, eF.isMac)();
function i7(e) {
    return e.startsWith(eg.BVt.GUILD_DISCOVERY) || e.startsWith(eg.BVt.GLOBAL_DISCOVERY);
}
class i8 {
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
            (0, eb.u9)(this.getVisibleGuildIds);
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
            (null == e && i7(window.location.pathname)) ||
            e === eg.sFm.SERVER_DISCOVERY_BADGE ||
            e === eg.sFm.E3_SERVER_DISCOVERY_BADGE
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
        S.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = d().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function i9(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        s = (0, y.A)(),
        { shouldShowPopover: l } = (0, v.QQ)(),
        o = a.useRef(!1),
        d = l && s;
    a.useEffect(() => {
        d && !o.current && n(), (o.current = d);
    }, [n, d]);
    let c = (0, E.yK)([ex.A, eG.Ay], () => ex.A.getGuildIds().filter((e) => eG.Ay.isCurrentUserGuest(e))),
        u = i.concat(c),
        { entrypoint: _ } = (0, eP.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nv, {}),
            _ === eP.RK.SERVER_RAIL_TOP && (0, r.jsx)(i5, {}),
            (0, r.jsx)(v.Ay, {}),
            s ? (0, r.jsx)(ev, {}) : null,
            !t && (0, r.jsx)(tm, {}),
            u.map((e) => (0, r.jsx)(i3, { guildId: e }, e)),
            (0, r.jsx)(i2, { onActivate: n }),
        ],
    });
}
function re(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, E.yK)([ek.Ay], () => {
            let e = ek.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, E.yK)([ew.A], () => ew.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(t4, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.B, {
                role: "group",
                "aria-label": ea.intl.string(ea.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, r.jsx)(nk, {}),
            i ? null : (0, r.jsx)(tJ, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(ty, {}),
        ],
    });
}
function rt(e) {
    var t;
    let { disableAppDownload: n = eF.isPlatformEmbedded, isOverlay: i = !1, className: s, themeOverride: o } = e,
        [d] = (0, E.yK)([ek.Ay], () => {
            let e = ek.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, E.bG)([eM.A], () => eM.A.lurkingGuildIds()),
        A = a.useMemo(() => (i ? [] : _), [_, i]),
        f = (0, E.bG)([L.A], () => L.A.isFullscreenInContext()),
        { isSorting: S, startSorting: C, stopSorting: D } = (0, eV.A)(),
        v = a.useRef(!1),
        [b] = a.useState(() => new h.Ep()),
        M = a.useRef(null),
        P = a.useRef(null),
        { ref: U, ...w } = (0, u.$y)(),
        G = (0, p.R7)(),
        [x, k] = a.useState(!1),
        F = (0, T.r)(I.A.modules.guildbar.AVATAR_SIZE),
        B = (0, T.r)(I.A.space.SPACE_XS),
        H = (0, y.A)(),
        { pathname: j } = (0, c.zy)(),
        { entrypoint: W } = (0, eP.X8)({ location: "GuildsBar" }),
        Y = +!!H + +(W === eP.RK.SERVER_RAIL_TOP),
        K = a.useMemo(() => {
            let e,
                t,
                n =
                    ((e = F + B),
                    {
                        iconSize: F,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + B),
                        heightBeforeGuilds: i6 + t + Y * e,
                        bottomInset: 16,
                    });
            return new i8(
                d,
                k,
                eg.tEg,
                () => {
                    M.current?.calculateState(), P.current?.calculateState();
                },
                n,
            );
        }, [F, B, d, Y]);
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
            return Q.default.addChangeListener(e), () => Q.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: $ } = (0, O.Ay)(R.A.GUILDS_LIST),
        z = i7(j);
    (0, N.u5)(() => {
        if (!v.current && 0 !== d.size) {
            if (!z) {
                let { scrollTop: e } = eU.A.getGuildListDimensions();
                K.scrollTo({ to: e, animate: !1 });
            }
            return (v.current = !0), () => b.stop();
        }
    }),
        a.useEffect(() => {
            if ((K.setGuildsTree(d), v.current || 0 === d.size)) return;
            let e = V.A.getState().guildId;
            K.scrollToGuild(e, !1);
            let t = null;
            return V.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), K.scrollToGuild(t, !1));
            });
        }, [d, K]);
    let Z = a.useCallback(() => {
        K.scrollTo({ to: 0, animate: !1 });
    }, [K]);
    (t = K.scrollToGuild),
        a.useEffect(() => {
            let e = null;
            function n() {
                let n = eH.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                eH.A.addChangeListener(n),
                () => {
                    eH.A.removeChangeListener(n);
                }
            );
        }, [t]);
    let q = a.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case eB.PJ.FOLDER:
                        return (0, r.jsx)(
                            n9,
                            {
                                folderNode: t,
                                setNodeRef: K.setNodeRef,
                                draggable: !0,
                                sorting: S,
                                onDragStart: C,
                                onDragEnd: D,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case eB.PJ.GUILD:
                        return (0, r.jsx)(
                            iH,
                            {
                                guildNode: t,
                                setRef: K.setNodeRef,
                                draggable: !0,
                                sorting: S,
                                onDragStart: C,
                                onDragEnd: D,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [C, D, S, K.setNodeRef],
        ),
        X = (0, r.jsx)(nr, { selected: z, className: i4.ai }),
        J = W === eP.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(O.f5, {
        value: $,
        children: (0, r.jsx)(m.N, {
            theme: o,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: l()(i4.iE, s, e, { [i4.R]: f }),
                    "aria-label": ea.intl.string(ea.t.PjnF2t),
                    children: [
                        (0, r.jsx)(e3, {
                            ref: M,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: i4.Xl,
                            barClassName: i4.Sh,
                        }),
                        (0, r.jsxs)("div", {
                            ref: U,
                            ...w,
                            ...G,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: i4.B2,
                            children: [
                                (0, r.jsxs)(g.zC, {
                                    className: l()({ [i4.XG]: !0, [i4.qw]: x }),
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: K.scrollerRef,
                                    onScroll: K.handleScroll,
                                    children: [
                                        (0, r.jsx)(i9, { scrollToTop: Z, lurkingGuildIds: A }),
                                        (0, r.jsx)(nM, {}),
                                        (0, r.jsx)(re, {
                                            guildDiscoveryButton: X,
                                            disableAppDownload: n,
                                            isOverlay: i,
                                            renderTreeNode: q,
                                            lurkingGuildIds: A,
                                        }),
                                    ],
                                }),
                                J &&
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(nM, { fullWidth: !0 }),
                                            (0, r.jsx)("div", { className: i4.JU, children: (0, r.jsx)(i5, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(e3, {
                            reverse: !0,
                            ref: P,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: l()(i4.LZ, { [i4.CH]: !i && !J, [i4.c0]: !i && J }),
                            barClassName: i4.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let rn = a.memo(
    function (e) {
        let t = (0, C.A)("guildsnav");
        return (0, r.jsx)(u.hD, { navigator: t, children: (0, r.jsx)(rt, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, A.A)(e, t),
);
