"use strict";
n.d(t, { A: () => ri });
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
var M = n(862328),
    P = n(67811),
    U = n(27232),
    w = n(308528),
    G = n(933958),
    x = n(969151),
    k = n(941971),
    F = n(900848),
    V = n(771640),
    B = n(366811),
    H = n(345942),
    j = n(616356),
    W = n(734057),
    Y = n(309010),
    K = n(977997),
    $ = n(935208),
    z = n(181079),
    q = n(422258),
    Z = n(668267),
    X = n(5180),
    Q = n(863005),
    J = n(152007),
    ee = n(458294),
    et = n(576705),
    en = n(568548),
    ei = n(543465),
    er = n(551289),
    ea = n(428784),
    es = n(43105),
    el = n(449817),
    eo = n(375708),
    ed = n(988572);
function ec(e) {
    let { targetElementRef: t, onTakeAction: n, onRequestClose: i } = e;
    return (0, r.jsx)(es.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: ed.A, type: "image", aspectRatio: "16/9" },
        title: eo.intl.string(el.default["bu/mLv"]),
        body: eo.intl.string(el.default.kxQJ7q),
        onRequestClose: i,
        actions: [{ text: eo.intl.string(el.default["vN/KQ9"]), onClick: n }],
    });
}
var eu = n(451394),
    e_ = n(597601),
    eE = n(834730),
    eA = n(983851),
    eh = n(183623),
    eI = n(323384),
    ef = n(866665),
    ep = n(104171),
    eT = n(63995),
    em = n(518769),
    eg = n(287809),
    eS = n(607567),
    eN = n(403362),
    eC = n(652215),
    eO = n(833971);
function eR(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eO.nM,
              children: [
                  (0, r.jsx)(e, { className: eO.RI, color: "currentColor" }),
                  (0, r.jsx)(ep.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eL() {
    let e = (0, E.yK)([z.A, W.A], () =>
            $.default
                .keys(z.A.getFavoriteChannels())
                .map((e) => W.A.getChannel(e))
                .filter(eN.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eC.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eC.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, E.yK)(
            [eS.Ay],
            () =>
                d().flatMap(n, (e) =>
                    eS.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, E.yK)([eT.A], () =>
            d().flatMap(i, (e) =>
                eT.A.getMutableParticipants(e, em.ip.SPEAKER)
                    .filter((e) => e.type === em.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, E.bG)([eT.A], () => {
            let e = 0;
            for (let t of i) e += eT.A.getParticipantCount(t, em.ip.AUDIENCE);
            return e;
        }),
        o = (0, E.yK)(
            [j.A],
            () =>
                j.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, E.yK)([G.Ay], () => {
            let e = G.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        u = (0, E.yK)([eg.default], () => c.map((e) => eg.default.getUser(e)), [c]),
        _ = (0, E.yK)([eg.default], () => o.map((e) => eg.default.getUser(e)), [o]),
        A = eR(
            eA.H,
            a.filter((e) => !o.includes(e.id) && !c.includes(e.id)),
        ),
        h =
            0 === s.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eO.nM,
                      children: [
                          (0, r.jsx)(eu.q, { size: "lg", color: "currentColor", className: eO.RI }),
                          (0, r.jsx)(ep.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eO.GZ,
                              children: [
                                  (0, r.jsx)(e_.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eE.E, {
                                      className: eO._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        I = eR(
            eh.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        f = eR(eI.k, u);
    return (0, r.jsxs)(r.Fragment, { children: [h, A, I, f] });
}
function eD() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eO.nM, eO.Dl),
                children: (0, r.jsx)("span", { className: l()(eO.cN, eO.NT), children: eo.intl.string(eo.t.wMWyci) }),
            }),
            (0, r.jsx)(eL, {}),
        ],
    });
}
function ey(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = a.useMemo(
            () =>
                (0, r.jsx)(eE.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eO.A_,
                    children: (0, r.jsx)(eD, {}),
                }),
            [],
        );
    return (0, r.jsx)(ef.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var ev = n(49999),
    eb = n(191775);
let eM = { analyticsSource: { page: eC.liQ.GUILD_CHANNEL, section: eC.JJy.CHANNEL_LIST, object: eC.ZSU.CHANNEL } };
function eP(e) {
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
        m = a.useRef(null),
        [g, S] = a.useState(!1),
        N = (0, ea.$)("favorite-server-context"),
        { favoriteGuildMuted: C, favoriteChannels: O } = (0, E.cf)([z.A], () => ({
            favoriteChannels: z.A.getFavoriteChannels(),
            favoriteGuildMuted: z.A.favoriteGuildMuted,
        })),
        R = (0, E.bG)([Y.Ay], () => Y.Ay.getChannelId(eC.YYv)),
        L = (0, E.bG)([W.A], () => W.A.getChannel(R)),
        D = (0, B.A)((e) => e.guildId),
        y = (0, X.ai)(D),
        { badge: v, unread: b } = (0, E.cf)([Q.A, W.A, ee.default, J.A, et.A, en.Ay, ei.Ay], () => {
            let e = $.default.keys(O),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = W.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = en.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (en.Ay.hasUnread(n) && ee.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = Q.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = en.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = W.A.getChannel(n);
                            e.unread = e.unread || (en.Ay.hasUnread(n) && ee.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        es =
            ((n = null != (t = (0, E.bG)([Y.Ay], () => Y.Ay.getVoiceChannelId())) && null != O[t]),
            (i = (0, E.bG)([j.A], () => {
                if (!n) return !1;
                let e = j.A.getCurrentUserActiveStream();
                return null != e && null != O[e.channelId];
            })),
            (s = (0, E.bG)([j.A], () => j.A.getAllApplicationStreams().some((e) => null != O[e.channelId]))),
            (l = (0, E.bG)([K.A], () => n && null != t && K.A.hasVideo(t), [n, t])),
            (o = (0, E.yK)([G.Ay], () =>
                $.default.keys(O).reduce((e, t) => (e.push(...G.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (d = (0, E.bG)([G.Ay], () =>
                Array.from(G.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, x.H)(t);
                    return null != n && null != O[n];
                }),
            )),
            (c = o.length > 0),
            (_ = !1),
            (A = !1),
            (h = !1),
            (I = !1),
            n ? ((_ = !l), (A = l), (h = i), (I = d)) : ((h = s), (I = c)),
            (0, V.oi)({ audio: _, video: A, screenshare: h, liveStage: !1, isCurrentUserConnected: n, activity: I })),
        el = v > 0 ? (0, V.wN)(v) : null,
        ed = a.useRef(!1),
        eu = a.useCallback(
            (e, t) => {
                (ed.current = !0), p(e, t);
            },
            [p],
        ),
        e_ = a.useCallback(
            (e) => {
                e && ((0, Z.mv)("intro_dc"), (0, H.u)(eC.YYv)),
                    (0, er.Yz)() || (0, q.tV)(!0, "favorites_button_onboarding"),
                    eu(ev.i.TAKE_ACTION);
            },
            [eu],
        );
    return (
        a.useEffect(() => {
            f && (ed.current = !1);
        }, [f]),
        a.useEffect(
            () => () => {
                f && !ed.current && eu(ev.i.AUTO_DISMISS, !0);
            },
            [eu, f],
        ),
        (0, r.jsxs)(F.c, {
            children: [
                (0, r.jsx)(k.A, { overlay: !0, selected: y, hovered: g, unread: b && !C }),
                (0, r.jsx)(ey, {
                    children: (0, r.jsx)(M.Q, {
                        selected: !0,
                        upperBadge: es,
                        lowerBadge: el,
                        children: (0, r.jsx)("div", {
                            ref: m,
                            children: (0, r.jsx)(P.j, {
                                ...T,
                                ariaLabel: eo.intl.formatToPlainString(eo.t["/uzRss"], {
                                    guildName: eo.intl.string(eo.t.wMWyci),
                                    mentions: v,
                                }),
                                "aria-selected": y,
                                to: { pathname: eC.BVt.CHANNEL(eC.YYv, R), state: eM },
                                selected: y || g,
                                onClick: () => {
                                    f && e_(!1);
                                },
                                onMouseEnter: () => S(!0),
                                onMouseLeave: () => S(!1),
                                onMouseDown: function () {
                                    null != L && w.A.preload(L.guild_id, L.id);
                                },
                                onContextMenu: N,
                                children: (0, r.jsx)(U.G, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: eb.w,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
                f &&
                    (0, r.jsx)(ec, {
                        targetElementRef: m,
                        onTakeAction: () => e_(!0),
                        onRequestClose: () => eu(ev.i.USER_DISMISS),
                    }),
            ],
        })
    );
}
var eU = n(633965),
    ew = n(857071),
    eG = n(851109),
    ex = n(72314),
    ek = n(543897),
    eF = n(696451),
    eV = n(71393),
    eB = n(711014),
    eH = n(723702),
    ej = n(757780),
    eW = n(263715),
    eY = n(967198),
    eK = n(173860),
    e$ = n(383394),
    ez = n(131677),
    eq = n(228366);
let eZ = {};
class eX extends E.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (eZ[t] = e[t]);
            });
    }
    getState() {
        return eZ;
    }
    hasViewed(e) {
        return null != eZ[e];
    }
}
let eQ = new eX(eq.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        eZ[t] = Date.now();
    },
});
var eJ = n(531685),
    e0 = n(583613);
let e1 = "app-download-item",
    e2 = "add-server-item";
function e3() {
    return !1;
}
function e4(e) {
    let t = ee.default.getMutableGuildStates();
    return (
        (e === eC.sFm.SERVER_DISCOVERY_BADGE && !eQ.hasViewed(eC.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== e1 && e !== e2 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let e5 = (0, e0.L_)((e, t, n) => ["null", ...t, ...e, e2, eC.sFm.E3_SERVER_DISCOVERY_BADGE, e1]),
    e6 = a.forwardRef(function (e, t) {
        let n = (0, E.yK)([eB.Ay, ez.A, ee.default], () =>
                e5(eB.Ay.getGuildFolders(), ez.A.getUnreadPrivateChannelIds(), ee.default.getStoreChangeSentinel()),
            ),
            i = (0, E.bG)([eJ.A], () => eJ.A.isFocused()),
            a = (0, E.bG)([e$.A], () => e$.A.getExpandedFolders());
        return (0, r.jsx)(eK.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: e3,
            textUnread: eo.intl.string(eo.t.y2b7CA),
            textMention: eo.intl.string(eo.t.y2b7CA),
            isMentioned: e4,
            animate: i,
            expandedFolders: a,
        });
    });
n(667532);
var e7 = n(868285),
    e8 = n(763827),
    e9 = n(682577),
    te = n(778712),
    tt = n(812993),
    tn = n(442433),
    ti = n(620982),
    tr = n(571694),
    ta = n(47167),
    ts = n(598104),
    tl = n(994500);
function to(e, t) {
    return e
        .filter((e) => (0, eN.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : tl.A.isBlockedOrIgnored(e.id)));
}
function td(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : tl.A.isBlockedOrIgnored(e)));
}
var tc = n(427358),
    tu = n(907459),
    t_ = n(145408);
function tE(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: eO.nM,
              children: [
                  (0, r.jsx)(t, { className: eO.RI, color: "currentColor" }),
                  (0, r.jsx)(ep.Ay, { users: n, max: 6 }),
              ],
          });
}
function tA(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eE.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eo.intl.string(eo.t.fpKdS1),
          })
        : (0, r.jsx)(t_.A, { muteConfig: t, className: n });
}
function th(e) {
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
        (n = (0, E.yK)([tl.A], () => tl.A.getBlockedOrIgnoredIDs())),
        (i = (0, E.bG)([tc.A], () => tc.A.getUserAffinitiesMap(), [])),
        (s = (0, E.yK)(
            [G.Ay, eg.default],
            () =>
                G.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eg.default.getUser(e)),
            [t],
        )),
        (o = a.useMemo(() => to(s, n), [s, n])),
        (d = a.useMemo(() => (0, tu.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, E.yK)(
            [j.A, eg.default],
            () =>
                to(
                    j.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => eg.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (u = a.useMemo(() => to(c, n), [c, n])),
        (_ = a.useMemo(() => (0, tu.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (A = a.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (h = (0, E.yK)(
            [eS.Ay],
            () =>
                to(
                    eS.Ay.getVoiceStatesForChannel(p).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [p, n],
        )),
        (I = a.useMemo(() => to(h, n), [h, n])),
        (f = a.useMemo(() => (0, tu.L)(I, i, "DirectMessageTooltip - voiceUsers"), [I, i])),
        {
            voiceUsers: a.useMemo(
                () => f.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [f, d, _],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, r.jsx)(tE, { icon: eA.H, users: S }),
        C = (0, r.jsx)(tE, { icon: eh.F, users: g }),
        O = (0, r.jsx)(tE, { icon: eI.k, users: m }),
        { isMuted: R, muteConfig: L } = (0, E.cf)(
            [ei.Ay],
            () => ({ isMuted: ei.Ay.isChannelMuted(null, T), muteConfig: ei.Ay.getChannelMuteConfig(null, T) }),
            [T],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N,
            C,
            O,
            R ? (0, r.jsx)(tA, { muteConfig: L, className: l()(eO.LM, { [eO.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tI(e) {
    let { channel: t } = e,
        n = (0, ta.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eO.nM, eO.Dl),
                children: (0, r.jsx)("span", { className: l()(eO.cN, eO.NT), children: n }),
            }),
            (0, r.jsx)(th, { channel: t }),
        ],
    });
}
function tf(e) {
    let { channel: t, children: n } = e,
        i = (0, ta.Ay)(t),
        s = a.useMemo(
            () =>
                (0, r.jsx)(eE.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eO.A_,
                    children: (0, r.jsx)(tI, { channel: t }),
                }),
            [t],
        );
    return (0, r.jsx)(ef.m, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let tp = { friction: 28, tension: 600 };
function tT(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tp };
        case "scale":
            return { ...tp };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tm extends a.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new e9.Controller({ scale: 0, height: 0, opacity: 0, config: tT }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !eJ.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tT })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tT }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !eJ.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tT }).start().then(e),
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
            t = e.type === eC.rbe.DM ? eg.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tr.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eC.rbe.DM ? eg.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, tn.L3)(e, async () => {
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
                      n.e("92997"),
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
            : (0, tn.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("91763"),
                      n.e("38730"),
                      n.e("92997"),
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
                (0, r.jsx)(P.j, {
                    to: eC.BVt.CHANNEL(eC.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  eo.intl.formatToPlainString(eo.t.hKarnZ, { name: t, mentions: i }),
                                  d ? eo.intl.string(eo.t["fk1/bX"]) : c ? eo.intl.string(eo.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: h ? void 0 : this.getChannelIcon(),
                    backgroundStyle: h ? "on-hover" : "always",
                    children: h
                        ? (0, r.jsx)(ts.A, {
                              channel: e,
                              size: te._3.SIZE_40,
                              facepileSizeOverride: te._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, r.jsx)(e9.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, r.jsxs)(F.c, {
                children: [
                    (0, r.jsx)(k.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, r.jsx)(tf, {
                        channel: e,
                        children: (0, r.jsx)(M.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, V.wN)(i, void 0, !0) : null,
                            upperBadge: (0, V.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, tt.o6)(i) },
                            children: I(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tg = a.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, ta.Ay)(e.channel),
        a = (0, u.Vd)(n, 2),
        s = (0, E.bG)([e8.A], () => e8.A.getChannelId(), []),
        l = (0, E.bG)([D.A], () => D.A.getMode(n), [n]),
        o = (0, E.bG)([j.A], () => j.A.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, E.bG)([eS.Ay], () => eS.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, E.bG)([Y.Ay], () => Y.Ay.getChannelId(), []),
        _ = (0, E.bG)([en.Ay], () => en.Ay.getMentionCount(n), [n]),
        A = s === n,
        { isIncomingCall: h, isOngoingCall: f } = (0, ti.A)(n),
        p = !1,
        T = !1;
    (A || d) && ((p = l === eC._Of.VOICE), (T = l === eC._Of.VIDEO));
    let g = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(tm, {
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
function tS() {
    (0, E.bG)([W.A], () => W.A.getPrivateChannelsVersion());
    let e = W.A.getMutablePrivateChannels(),
        t = (0, E.yK)([ez.A], () => ez.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, E.cf)([e8.A], () => ({
            selectedVoiceGuildId: e8.A.getGuildId(),
            selectedVoiceChannelId: e8.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, r.jsx)(tg, { channel: n }, n.id);
        }),
        l = null == n && null != i ? e[i] : null;
    return (
        null != l && s.unshift((0, r.jsx)(tg, { channel: l }, l.id)),
        (0, r.jsx)(p.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eo.intl.string(eo.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, r.jsx)(e7.F, { component: a.Fragment, children: s }),
        })
    );
}
var tN = n(32880),
    tC = n(939249),
    tO = n(589340);
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
                    : (0, r.jsx)(eE.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eO.A_,
                          children: n,
                      }),
            [n, s],
        ),
        E = i ? t : (0, r.jsx)("div", { className: l()(tO.p, { [tO.w]: u }), children: t });
    return (0, r.jsx)(ef.m, {
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
var tL = n(633435);
let tD = a.forwardRef(function (e, t) {
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
        return (0, r.jsxs)(F.c, {
            children: [
                h ? (0, r.jsx)(k.A, { overlay: !0, hovered: N, selected: d }) : null,
                (0, r.jsx)(tR, {
                    text: c,
                    selected: d,
                    children: (0, r.jsx)(M.Q, {
                        selected: !0,
                        upperBadge: _,
                        lowerBadge: E,
                        lowerBadgeSize: A,
                        children: (0, r.jsx)(tC.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                T?.(), C(!0);
                            },
                            onMouseLeave: () => {
                                m?.(), C(!1);
                            },
                            onMouseDown: g,
                            className: l()(tL.oZ, I, { [tL.wH]: d || N }),
                            onClick: i,
                            "aria-label": O,
                            "aria-selected": d,
                            onContextMenu: s,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != o && (0, r.jsx)(o, { className: tL.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                p,
            ],
        });
    }),
    ty = "DOWNLOAD_APPS";
function tv() {
    let e = (0, f.useModalsStore)((e) => (0, f.hasModalOpenSelector)(e, ty));
    return (0, r.jsx)(tD, {
        id: "app-download-button",
        onClick: () => {
            (0, f.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, r.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: ty },
            );
        },
        selected: e,
        tooltip: eo.intl.string(eo.t.Z7jwrJ),
        icon: tN.s,
    });
}
var tb = n(245604),
    tM = n(272613),
    tP = n(398884),
    tU = n(772366),
    tw = n(728321),
    tG = n(260509),
    tx = n(284009),
    tk = n.n(tx),
    tF = n(651300),
    tV = n(66834),
    tB = n(174459),
    tH = n(896970);
function tj(e) {
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
function tW(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        tk()(t.type !== eW.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== eW.PJ.FOLDER || t.type !== eW.PJ.FOLDER) &&
                (e.type !== eW.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                i && t.type !== eW.PJ.FOLDER && tB.default.track(eC.HAw.GUILD_FOLDER_CREATED),
                    tV.A.moveById(r, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function tY(e) {
    let { name: t, targetNode: n, combine: i, below: s } = e,
        l = a.useMemo(() => tW([eW.PJ.GUILD, eW.PJ.FOLDER], n, s, i), [n, s, i]),
        [{ canDrop: o, isOver: d }, c] = (0, tF.H)(l),
        u = tj([
            [o, tH.OP],
            [d, tH.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            (u.current = e), c(e);
        },
        "data-dnd-name": eo.intl.formatToPlainString(eo.t["A5aDw+"], { itemName: t }),
        className: tH.aC,
    });
}
function tK(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: s, isOver: o }, d] = (0, tF.H)(() => tW([eW.PJ.GUILD], n, !0, !0));
    a.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = tj([
        [s, tH.OP],
        [o, tH.NQ],
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
            "data-dnd-name": eo.intl.formatToPlainString(eo.t.qiQ0QI, { itemName: t }),
            className: l()(tH.dw, {}),
        }),
    });
}
let t$ = a.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: a = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: tH.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(tY, { name: t, targetNode: n, below: a }),
            l ? (0, r.jsx)(tK, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function tz(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: a }, s] = (0, tF.H)(() => tW([eW.PJ.GUILD], n, !0, !0)),
        l = tj([[a, tH.a7]]),
        o = tj([
            [a, tH.NQ],
            [i, tH.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: l,
        className: tH.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: tH.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    (o.current = e), s(e);
                },
                "aria-label": `At end of ${t}`,
                className: tH.aC,
            }),
        }),
    });
}
function tq(e) {
    let { children: t } = e,
        [, n] = (0, tF.H)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var tZ = n(819638),
    tX = n(441174);
let tQ = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function tJ(e) {
    (0, tn.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function t0(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, E.yK)([eV.A], () => eV.A.getGuildsArray()),
        s = (0, E.bG)([eg.default], () => eg.default.getCurrentUser()),
        l = a.useMemo(() => i.some((e) => (0, tG.bM)(e, s)), [i, s]),
        o = (0, f.useModalsStore)((e) => (0, f.hasModalOpenSelector)(e, tZ.fc)),
        { analyticsLocations: d } = (0, L.Ay)();
    return (0, r.jsx)("div", {
        className: tX.Uq,
        children: (0, r.jsxs)(tw.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: tQ,
            position: "right",
            disabled: t,
            children: [
                (0, r.jsx)(tD, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: function () {
                        (0, tP.Sn)()
                            ? (0, tU.A)({
                                  analyticsSource: { page: eC.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eC.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eC.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : tM.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: tJ,
                    tooltip: eo.intl.string(eo.t.l5WIbf),
                    icon: tb.U,
                }),
                null != n &&
                    (0, r.jsx)(t$, { name: eo.intl.string(eo.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var t1 = n(565787),
    t2 = n(791606),
    t3 = n(486020),
    t4 = n(184291);
function t5(e) {
    let [t, i] = a.useState(!1),
        s = (0, u.Vd)(`guild-${e.id}`);
    return (0, r.jsx)(F.c, {
        children: (0, r.jsx)(tR, {
            text: e.name,
            children: (0, r.jsx)(M.Q, {
                className: t4.o,
                selected: t,
                lowerBadge: (0, r.jsx)(tt.fk, { icon: (0, t1.k)(t2.A), disableColor: !0, className: t4._ }),
                children: (0, r.jsx)(P.j, {
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
                            ? t3.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var t6 = n(696292),
    t7 = n(836480),
    t8 = n(533129),
    t9 = n(726845),
    ne = n(837057),
    nt = n(310419),
    nn = n(488995),
    ni = n(324580),
    nr = n(190107);
let na = a.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: s, className: l } = e,
        o = a.useCallback(() => {
            (0, t8.WL)({ source: nn.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== s ? nn.GlobalDiscoveryTab.QUESTS : t9.A.getField("selectedTab");
            switch (e) {
                case nn.GlobalDiscoveryTab.QUESTS:
                    return (0, ne.transitionToGlobalDiscovery)({
                        tab: nn.GlobalDiscoveryTab.QUESTS,
                        location: nr.rE.DISCOVERY_COMPASS,
                        questContent: t6.u.DISCOVERY_COMPASS,
                        questId: s,
                    });
                case nn.GlobalDiscoveryTab.SERVERS:
                    return (0, ne.transitionToGlobalDiscovery)({
                        tab: nn.GlobalDiscoveryTab.SERVERS,
                        entrypoint: ni.J8.GUILDS_BAR,
                    });
                case nn.GlobalDiscoveryTab.APPS:
                    return (0, ne.transitionToGlobalDiscovery)({
                        tab: nn.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nt.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, ne.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [s]);
    return (0, r.jsx)(tD, {
        id: "guild-discover-button",
        ref: t,
        className: l,
        onClick: () => {
            o(), void 0 !== i && i();
        },
        selected: n,
        tooltip: eo.intl.string(eo.t["4nEZLk"]),
        icon: t7.Q,
    });
});
var ns = n(506774),
    nl = n(509963),
    no = n(111159),
    nd = n(793943),
    nc = n(158045),
    nu = n(350972),
    n_ = n(677056),
    nE = n(526162),
    nA = n(174197);
function nh() {
    let [e, t] = (0, E.yK)([eg.default, nE.A], () => [
            nE.A.getCurrentDesktopIcon(),
            nc.Ay.isPremium(eg.default.getCurrentUser()),
        ]),
        n = (0, nd.fy)().activePanel === nd.HP.APP_ICON,
        i = (0, nA.gG)(e),
        a = i.id !== nu.LW.DEFAULT && (t || n),
        s = (0, r.jsx)(no.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && a ? (0, r.jsx)(n_.A, { id: i.id, size: nA.N8.SIZE_48 }) : s;
}
var nI = n(531260),
    nf = n(411976),
    np = n(912309),
    nT = n(400492),
    nm = n(354670),
    ng = n(619921),
    nS = n(340829),
    nN = n(966846),
    nC = n(674378),
    nO = n(394953),
    nR = n(202541),
    nL = n(235079),
    nD = n(143170);
let ny = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nv(e) {
    let { selected: t, user: n, badge: i, link: s, showProgressBadge: l } = e,
        [o, d] = a.useState(!1),
        [c, _] = a.useState(!1),
        [E, A] = a.useState(null),
        [h, I] = a.useState(0),
        f = (0, u.Vd)("home"),
        p = (0, nd.fy)().activePanel === nd.HP.APP_ICON;
    function T() {
        A(null), I(0), clearTimeout(E);
    }
    if (null == n) return null;
    let m = eo.intl.string(eo.t.YUU0RF);
    c && (m = ns.w.get(eC.wqg) ? eo.intl.string(eo.t["nkq1l+"]) : eo.intl.string(eo.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, r.jsx)(nl.A, { className: nD.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, r.jsx)(M.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, V.wN)(i) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, tt.o6)(i) },
            children: (0, r.jsx)(P.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), I(h + 1), 15 === h)) {
                        T();
                        let e = !ns.w.get(eC.wqg);
                        ns.w.set(eC.wqg, e),
                            e && ns.w.set(nL.L, !0),
                            e ? (0, nT.Ak)("discodo") : (0, nT.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: eo.intl.string(eo.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...f,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eC.liQ.GUILD_CHANNEL,
                            section: eC.JJy.NAVIGATION,
                            object: eC.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, r.jsx)(nh, {}),
            }),
        });
    return (0, r.jsx)("div", {
        className: nD.Uq,
        children: (0, r.jsx)(tw.A, {
            inlineSpecs: ny,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(F.c, {
                children: [
                    (0, r.jsx)(k.A, { overlay: !0, selected: t, hovered: o }),
                    (0, r.jsx)(tR, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nb() {
    let e = (function () {
            let e = (0, B.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eC.BVt.GUILD_DISCOVERY) || t.startsWith(eC.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eC.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nO.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, E.bG)([nN.A, nS.A], () => {
            let e = (0, nl.v)(nN.A.activeItems, nS.A),
                { total: t, progress: n } = nC.zY(e),
                i = nC.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, np.kX)(),
        i = Object.keys(nR.TP),
        a = (0, nI.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, E.cf)([nm.A], () => ({
            unviewedTrialCount: nm.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nm.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === nR.xc.NONE ? s + l : 0,
        d = (0, E.bG)([eg.default], () => eg.default.getCurrentUser()),
        u = (0, nf.W)(),
        _ = n + o + u,
        A = _ === o && o > 0 && n + u === 0,
        h = ng.A.getHomeLink();
    return (
        A && (h = eC.BVt.APPLICATION_STORE),
        (0, r.jsx)(nv, {
            selected: e,
            user: d,
            selectedChannelId: Y.Ay.getChannelId(eC.ME),
            badge: _,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nM = n(550281);
function nP(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(F.c, { children: (0, r.jsx)("div", { className: l()(nM.t, { [nM.I]: t }) }) });
}
var nU = n(349288),
    nw = n(695366),
    nG = n(919638),
    nx = n(818348),
    nk = n(135492);
function nF() {
    let e = (0, E.bG)([nG.A, eV.A], () => nG.A.unavailableGuilds.filter((e) => null == eV.A.getGuild(e)).length),
        t = (0, u.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(F.c, {
              children: (0, r.jsx)(tR, {
                  text: eo.intl.format(eo.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nU.Anchor, {
                      href: nx.qF.STATUS,
                      target: "_blank",
                      className: nk.h,
                      "aria-label": eo.intl.formatToPlainString(eo.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, r.jsx)(nw.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nV = n(930235),
    nB = n(317097),
    nH = n(319060),
    nj = n(866323),
    nW = n(817281),
    nY = n(534409),
    nK = n(240248),
    n$ = n(678708),
    nz = n(259678),
    nq = n(140735),
    nZ = n(548118),
    nX = n(195451);
function nQ(e) {
    let { guildId: t, animate: n } = e,
        i = (0, E.bG)([eV.A], () => eV.A.getGuild(t), [t]),
        a = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", { className: l()(nX.VL, nX.zU), children: (0, r.jsx)(nw.E, { color: "currentColor" }) })
        : (0, r.jsx)(nZ.Ay, {
              guild: i,
              animate: n,
              size: nZ.Ay.Sizes.MINI,
              iconSize: a,
              lossless: !0,
              className: nX.VL,
              tabIndex: -1,
          });
}
function nJ(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: a } = t,
        s = n && i,
        o = (0, r.jsx)("div", {
            className: nX.hJ,
            children: (0, r.jsx)("div", {
                className: nX.Eh,
                children: (0, r.jsx)(n$.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, r.jsx)("div", {
            className: nX.qJ,
            children: (0, r.jsx)("div", {
                className: nX.jg,
                children: a.slice(0, 4).map((e) => (0, r.jsx)(nQ, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l()({ [nX.NG]: s, [nX.yd]: !s }),
        children: [!s && o, d],
    });
}
function n0(e) {
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
        O = n || null == s ? null : (0, V.oi)(s),
        R =
            !n && l > 0
                ? (0, V.wN)(
                      l,
                      o ? I.A.colors.BACKGROUND_MOD_STRONG.css : I.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(nz.vN, {
        children: (0, r.jsxs)(tC.D, {
            className: nX.H3,
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
                (0, r.jsx)(nq.A, {
                    children: eo.intl.formatToPlainString(eo.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, r.jsx)(M.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: O,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, tt.o6)(l) },
                    children: (0, r.jsx)("div", {
                        className: nX.vA,
                        children:
                            null != u
                                ? (0, r.jsx)("div", { className: nX.hJ, children: u })
                                : (0, r.jsx)(nJ, { folderNode: t, hovered: g, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var n1 = n(573435),
    n2 = n(32294);
function n3(e) {
    let { className: t, isFolder: n } = e,
        i = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(n1.Ay, {
        mask: n1.Ay.Masks.SQUIRCLE,
        className: l()(t, n2.OL, { [n2.lQ]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: n2.ZU }),
    });
}
var n4 = n(114329),
    n5 = n(167546);
let n6 = (0, nK.xI)(nH.A.FOLDER_ITEM_ANIMATION_DURATION),
    n7 = (0, e9.animated)(p.B),
    n8 = a.memo(function (e) {
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
            V = U || G,
            B = (0, nY.qK)("FolderItem");
        a.useEffect(() => {
            g && w(!1);
        }, [g]);
        let [{ dragging: H }, j] = (0, nV.i)({
                type: eW.PJ.FOLDER,
                item: () => (S?.(), { type: eW.PJ.FOLDER, nodeId: o.id }),
                end() {
                    N?.(), (0, nW.um)(eB.Ay.getCompatibleGuildFolders());
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
            K = null != M && "" !== M ? M : null != p && "" !== p ? p : eo.intl.string(eo.t.xV9hVh),
            $ = (0, u.Vd)(`${b}`),
            z = `folder-items-${b}`,
            q =
                ((t = P.length),
                (n = (0, m.r)(I.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (s = (0, m.r)(I.A.space.SPACE_XS))) - s + (s - (n - i) / 2) + (0, m.r)(I.A.space.SPACE_4)),
            Z = (0, nj.p)(!H && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: n6 },
            }),
            X = a.useCallback((e) => d?.(b, e), [d, b]),
            Q = (0, r.jsxs)(F.c, {
                children: [
                    (0, r.jsx)(k.A, { overlay: !0, disabled: H || _, hovered: U, selected: c, unread: f }),
                    (0, r.jsx)(tR, {
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
                            className: l()(nX.MJ, { [nX.L0]: "icon" === L || B, [n5.oR]: !H && G && !_ }),
                            "data-dnd-name": K,
                            children: H
                                ? (0, r.jsx)(n3, { isFolder: !0 })
                                : (0, r.jsx)(n0, {
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
                    T ? (0, r.jsx)(t$, { name: K, targetNode: o, onDragOverChanged: W }) : null,
                ],
            }),
            J = null != o.color ? o.color : n4.DO,
            ee = J === n4.DO ? void 0 : (0, nB.Hl)(J);
        return (0, r.jsxs)("div", {
            ref: X,
            className: l()(nX.qc, { [nX.Av]: _, [nX.Lg]: V }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": G,
            children: [
                !H && _ && (0, r.jsx)("span", { className: nX.GO }),
                Q,
                Z((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            n7,
                            {
                                id: z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: nX.TN,
                                style: { height: e.height.to((e) => e * q) },
                                "aria-label": o.name,
                                children: P.map((t, n) => R(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                T && _ ? (0, r.jsx)(tz, { name: K, targetNode: o }) : null,
            ],
        });
    });
var n9 = n(354583);
let ie = a.memo(function (e) {
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
        N = (0, B.A)((e) => e.guildId),
        C = (0, E.bG)([e$.A], () => e$.A.isFolderExpanded(p)),
        O = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = eV.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eN.Vq),
                n = 2 * eC.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(I),
        R =
            ((t = (0, E.bG)([e8.A], () => e8.A.getGuildId())),
            (i = I.children.map((e) => e.id)),
            (s = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, E.bG)([e8.A], () => e8.A.getChannelId())),
            (_ = null != (u = (0, n9.A)()?.guild_id) && i.includes(u)),
            (A = (0, E.bG)([K.A], () => null != c && K.A.hasVideo(c), [c])),
            (h = (0, E.bG)([j.A], () => j.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != h && null != h.guildId && i.includes(h.guildId))),
            a.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: _, isCurrentUserConnected: s }),
                [l, o, d, _, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: D,
            unread: y,
        } = (0, E.cf)([ee.default], () => ({
            mentionCount: S.map((e) => ee.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => ee.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => ee.default.hasUnread(e)),
        })),
        v = a.useCallback(() => {
            tV.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = a.useCallback(
            (e) => {
                (0, tn.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: y || L > 0 });
                });
            },
            [p, T, m, y, L],
        );
    return (0, r.jsx)(n8, {
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
var it = n(113494),
    ii = n(821124),
    ir = n(212455);
function ia(e) {
    let t = e?.features.has(eC.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, E.bG)([ir.A, eg.default, eF.Ay], () => {
            if (null == e) return;
            let t = ir.A.getRequest(e.id),
                n = eg.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = eF.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, ii.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var is = n(347951),
    il = n(478437),
    io = n(811024),
    id = n(508654),
    ic = n(233993),
    iu = n(446600),
    i_ = n(95701),
    iE = n(280450);
let iA = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-06-dont-badge-muted-vcs",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function ih(e) {
    return iA.useConfig({ location: e }).enabled;
}
function iI(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et.A;
    return null != e && e.type !== il.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eC.hVb.VIEW_CHANNEL, e);
}
function ip(e) {
    let t = (0, E.bG)([ei.Ay], () => ei.Ay.isMuted(e)),
        n = ih("useGuildMediaState"),
        i = (0, id.BP)(e),
        r = (0, E.yK)([G.Ay, tl.A], () =>
            G.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = tl.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : tl.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        a = (0, x.H)(r[0]?.location),
        s = (0, io.Gp)(a),
        {
            guildHasVoice: l,
            guildHasVideo: o,
            selectedVoiceChannelHasVideo: c,
        } = (0, E.cf)([Y.Ay, K.A, eV.A, et.A, W.A, ei.Ay], () => {
            var i;
            let r = Y.Ay.getVoiceChannelId(),
                a = eV.A.getGuild(e)?.afkChannelId,
                s = K.A.getUsersWithVideo(e),
                l =
                    ((i = K.A.getVoiceStates(e)),
                    d()(i)
                        .filter((e) => !tl.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let t in l) {
                        let i = l[t].channelId;
                        if (
                            null != i &&
                            iI(W.A.getBasicChannel(i), a ?? void 0, et.A) &&
                            (!n || !ei.Ay.isGuildOrCategoryOrChannelMuted(e, i))
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
                            iI(W.A.getBasicChannel(i), a ?? void 0, et.A) &&
                            (!n || !ei.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != r && K.A.hasVideo(r),
            };
        }, [e, t, n]),
        u = iE.default.getId();
    return (0, E.cf)([Y.Ay, W.A, G.Ay, iu.A, j.A, et.A, ei.Ay], () => {
        let a = Y.Ay.getVoiceChannelId(),
            d = W.A.getChannel(a)?.guild_id === e,
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
        let p = $.default.keys(iu.A.getStageInstancesByGuild(e)).some((e) => {
                let t = W.A.getChannel(e);
                return null != t && et.A.can(ic.Gk, t);
            }),
            T = d && (W.A.getChannel(a)?.isGuildStageVoice() ?? !1),
            m = !!d && null != j.A.getActiveStreamForUser(u, e),
            g = j.A.getAllApplicationStreams()
                .filter((e) => !tl.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e && (!n || !ei.Ay.isGuildOrCategoryOrChannelMuted(e, t.channelId))),
            S = d && c,
            N = (() => {
                if (s) return r.length > 0;
                for (let e of r) {
                    let t = W.A.getChannel((0, x.H)(e.location));
                    if (null != t && (0, i_.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            C = G.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
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
var iT = n(607399),
    im = n(702841),
    ig = n(658128),
    iS = n(976860),
    iN = n(676279);
function iC(e) {
    let { guild: t, show: n, active: i, onAnimationStart: a, onAnimationRest: s } = e,
        o = {},
        d = {};
    (o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, m.r)(I.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, m.r)(I.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, nj.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: s });
    return (0, r.jsx)(r.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: nX.qc,
                        children: (0, r.jsx)("div", {
                            className: l()(nX.MJ, nX.L0),
                            style: { margin: 0 },
                            children: (0, r.jsx)(e9.animated.div, {
                                className: nX.NG,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: nX.qJ,
                                    children: (0, r.jsx)("div", {
                                        className: nX.jg,
                                        children: (0, r.jsx)(nZ.Ay, {
                                            guild: t,
                                            size: nZ.Ay.Sizes.SMOL,
                                            className: nX.VL,
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
var iO = n(454938),
    iR = n(714991),
    iL = n(107773),
    iD = n(513461),
    iy = n(164956),
    iv = n(624265),
    ib = n(970278),
    iM = n(808728);
function iP(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eO.nM,
              children: [
                  (0, r.jsx)(e, { className: eO.RI, color: "currentColor" }),
                  (0, r.jsx)(ep.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iU(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eE.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eo.intl.string(eo.t.fpKdS1),
          })
        : (0, r.jsx)(t_.A, { muteConfig: t, className: n });
}
function iw(e) {
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
        (n = ih("useGuildTooltipActivity")),
        (i = (0, E.yK)(
            [iM.Ay, ib.A, ei.Ay],
            () => [
                ...iM.Ay.getChannels(t)
                    [iM.vM].filter((e) => {
                        let { channel: i } = e;
                        return i.type === eC.rbe.GUILD_VOICE && (!n || !ei.Ay.isGuildOrCategoryOrChannelMuted(t, i.id));
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(ib.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t, n],
        )),
        (s = (0, iv.Ay)(t)),
        (o = a.useMemo(() => s.map((e) => e.id), [s])),
        (c = (0, E.bG)([eS.Ay], () => eS.Ay.getVoiceStates(t), [t])),
        (u = (0, E.yK)([tl.A], () => tl.A.getBlockedOrIgnoredIDs())),
        (_ = d().flatMap(i, (e) =>
            e === L.afkChannelId
                ? []
                : to(
                      (c[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      u,
                  ),
        )),
        (A = (0, E.yK)([eT.A], () =>
            d().flatMap(o, (e) =>
                e === L.afkChannelId
                    ? []
                    : to(
                          eT.A.getMutableParticipants(e, em.ip.SPEAKER)
                              .filter((e) => e.type === em.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          u,
                      ),
            ),
        )),
        (h = (0, E.bG)([eT.A], () => {
            let e = 0;
            for (let t of o) e += eT.A.getParticipantCount(t, em.ip.AUDIENCE);
            return e;
        })),
        (I = (0, E.yK)(
            [j.A, ei.Ay],
            () =>
                td(
                    j.A.getAllApplicationStreams()
                        .filter(
                            (e) => e.guildId === t && (!n || !ei.Ay.isGuildOrCategoryOrChannelMuted(t, e.channelId)),
                        )
                        .map((e) => e.ownerId),
                    u,
                ),
            [u, t, n],
        )),
        (f = (0, E.yK)(
            [G.Ay],
            () =>
                td(
                    G.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    u,
                ),
            [t, u],
        )),
        (p = (0, E.yK)([eg.default], () => to(f.map((e) => eg.default.getUser(e))), [f])),
        (T = (0, E.yK)([eg.default], () => I.map((e) => eg.default.getUser(e)), [I])),
        (g = to((m = _.filter((e) => !I.includes(e.id) && !f.includes(e.id))))),
        (S = T.filter((e) => null != e && !f.includes(e.id))),
        (N = (0, E.bG)([tc.A], () => tc.A.getUserAffinitiesMap(), [])),
        (C = a.useMemo(() => (0, tu.L)(g, N, "GuildTooltip - nonBlockedUsers"), [g, N])),
        (O = a.useMemo(() => (0, tu.L)(A, N, "GuildTooltip - stageSpeakers"), [A, N])),
        (R = a.useMemo(() => (0, tu.L)(S, N, "GuildTooltip - streamUsers"), [S, N])),
        {
            voiceUsersToShow: C,
            stageSpeakers: O,
            numStageListeners: h,
            streamUsersToShow: R,
            embeddedActivitiesUsers: a.useMemo(() => (0, tu.L)(p, N, "GuildTooltip - embeddedActivitiesUsers"), [p, N]),
            hasActivity: A.length > 0 || m.length > 0 || S.length > 0 || p.length > 0,
        }),
        U = iP(eA.H, y, D),
        w =
            0 === v.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eO.nM,
                      children: [
                          (0, r.jsx)(eu.q, { size: "lg", color: "currentColor", className: eO.RI }),
                          (0, r.jsx)(ep.Ay, { guildId: D, users: v, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eO.GZ,
                              children: [
                                  (0, r.jsx)(e_.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eE.E, {
                                      className: eO._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: b,
                                  }),
                              ],
                          }),
                      ],
                  }),
        x = iP(eh.F, M, D),
        k = iP(eI.k, P, D),
        { isMuted: F, muteConfig: V } = (0, E.cf)(
            [ei.Ay],
            () => ({ isMuted: ei.Ay.isMuted(D), muteConfig: ei.Ay.getMuteConfig(D) }),
            [D],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            w,
            U,
            x,
            k,
            F ? (0, r.jsx)(iU, { muteConfig: V, className: l()(eO.LM, { [eO.Sx]: null != U || null != x }) }) : null,
        ],
    });
}
function iG(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(eE.E, {
        className: eO.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case iD.B5.SUBMITTED:
                    return eo.intl.string(eo.t["9KFC98"]);
                case iD.B5.REJECTED:
                    return eo.intl.string(eo.t["TQY/Rd"]);
                case iD.B5.APPROVED:
                    return eo.intl.string(eo.t.WXHcq5);
                default:
                    return eo.intl.string(eo.t.fjHFC8);
            }
        })(t),
    });
}
function ix(e) {
    let { guild: t } = e,
        n = (0, iO.A)(t),
        i = ia(t),
        a = null != i ? (0, r.jsx)(iG, { guildJoinRequestStatus: i }) : null,
        s = (0, r.jsx)(iw, { guild: t }),
        o = (0, E.bG)([iy.A], () => iy.A.isViewingRoles(t.id)),
        d = (0, is.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l()(eO.nM, eO.Dl),
                children: [
                    n
                        ? (0, r.jsx)(iL.A, { disableBoostClick: !0, guild: t, className: eO.WX })
                        : (0, r.jsx)(iR.A, { guild: t, size: 20, className: eO.aL }),
                    (0, r.jsx)("span", { className: l()(eO.cN, eO.NT), children: t.name }),
                ],
            }),
            d
                ? (0, r.jsx)(eE.E, {
                      className: eO.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eo.intl.string(eo.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, r.jsx)(eE.E, {
                      className: eO.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eo.intl.string(eo.t["5LwN89"]),
                  })
                : (a ?? s),
        ],
    });
}
function ik(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: s } = e,
        l = a.useMemo(
            () =>
                n
                    ? null
                    : (0, r.jsx)(eE.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eO.A_,
                          children: (0, r.jsx)(ix, { guild: t }),
                      }),
            [n, t],
        );
    return (0, r.jsx)(ef.m, {
        __unsupportedReactNodeAsText: l,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: s,
    });
}
let iF = { analyticsSource: { page: eC.liQ.GUILD_CHANNEL, section: eC.JJy.CHANNEL_LIST, object: eC.ZSU.CHANNEL } };
function iV(e, t) {
    (0, tn.L3)(e, async () => {
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
            n.e("80904"),
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
            n.e("48391"),
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
            n.e("2861"),
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
            n.e("30760"),
            n.e("94723"),
            n.e("30316"),
            n.e("62931"),
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
            n.e("7788"),
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
            n.e("51224"),
            n.e("79745"),
            n.e("80854"),
            n.e("35395"),
            n.e("74630"),
            n.e("45413"),
            n.e("46844"),
            n.e("39075"),
            n.e("63235"),
            n.e("86672"),
            n.e("75029"),
            n.e("48948"),
            n.e("94427"),
            n.e("63244"),
            n.e("32756"),
            n.e("64850"),
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
            n.e("25261"),
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
            n.e("34786"),
            n.e("99976"),
            n.e("26001"),
            n.e("30997"),
            n.e("14591"),
            n.e("52111"),
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
            n.e("71790"),
            n.e("74572"),
        ]).then(n.bind(n, 860417));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
let iB = a.memo(function (e) {
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
            contextMenu: g = iV,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: O,
            height: R,
            "aria-setsize": L,
            "aria-posinset": D,
        } = e,
        { id: y, parentId: v } = t,
        b = e.upperBadge ?? (f ? (0, V.em)() : null != A ? (0, V.oi)(A) : void 0),
        U = e.lowerBadge ?? void 0;
    null == U && p > 0
        ? (U =
              (0, V.wN)(
                  p,
                  T ? I.A.colors.BACKGROUND_MOD_STRONG.css : I.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == U && null != O && (U = (0, V.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let G = e.lowerBadgeSize ?? { width: (0, tt.o6)(p) },
        [{ dragging: x }, B] = (0, nV.i)({
            type: eW.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                s?.(), (0, nW.um)(eB.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        j = (0, u.Vd)(y ?? eC.dJq, null != v ? 2 : 1),
        [W, Y] = a.useState(!1),
        K = !N && W,
        [$, z] = a.useState(!1),
        [q, Z] = a.useState(!1),
        [X] = a.useState(() => new h.J_(70, () => Z(!0))),
        Q = (0, iN.nr)() && !iT.Fr;
    a.useEffect(() => () => X.cancel(), [X]);
    let J = a.useCallback(() => {
            null != o ? (0, iS.pX)(o, { state: iF }) : (0, H.u)(y, { state: iF });
        }, [y, o]),
        ee = a.useCallback(() => {
            if (null != o || null == d || f || !C) return;
            let e = (0, ig.W)(d.id);
            null != e && w.A.preload(d.id, e);
        }, [o, d, f, C]),
        et = (0, im.bG)([eF.Ay], () => eF.Ay.isCurrentUserGuest(y)),
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
        ed = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ec = d.name;
    if (
        (p > 0
            ? (ec = eo.intl.formatToPlainString(eo.t["/uzRss"], { guildName: d.name, mentions: p }))
            : E && (ec = eo.intl.formatToPlainString(eo.t.lzqe42, { guildName: d.name })),
        null != A)
    ) {
        let e = [];
        A.activeEvent && e.push(eo.intl.string(eo.t.dHvJ2p)),
            A.liveStage && e.push(eo.intl.string(eo.t.OO7ndG)),
            A.screenshare && e.push(eo.intl.string(eo.t.wsHMZ7)),
            A.video && e.push(eo.intl.string(eo.t.BrLCS0)),
            A.audio && e.push(eo.intl.string(eo.t.jPBhKy)),
            A.activity && e.push(eo.intl.string(eo.t.Y3Gii5)),
            e.length > 0 && (ec = `${ec}, ${e.join(" ")}`);
    }
    let eu = (0, r.jsx)(iC, {
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
            ? (0, r.jsx)(P.j, {
                  ariaLabel: ec,
                  name: d.name,
                  onClick: J,
                  onMouseEnter: ea,
                  onMouseLeave: es,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, tG.Iv)(d, 2 * ed, K && c, !0),
                  selected: _ || K,
                  ...j,
                  "aria-setsize": L,
                  "aria-posinset": D,
                  "aria-selected": _,
              })
            : (0, r.jsx)(M.Q, {
                  selected: _,
                  children: (0, r.jsx)("div", {
                      ref: S
                          ? (e) => {
                                B(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": q,
                      children: (0, r.jsx)(P.j, {
                          ariaLabel: ec,
                          name: d.name,
                          onClick: J,
                          onMouseEnter: ea,
                          onMouseLeave: es,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, tG.Iv)(d, 2 * ed, K && c, !0),
                          selected: _ || K,
                          ...j,
                          "aria-setsize": L,
                          "aria-posinset": D,
                          "aria-selected": _,
                      }),
                  }),
              }),
        eE = q || $ ? eu : e_,
        eA = (0, r.jsx)(tq, { children: (0, r.jsx)(n3, {}) }),
        eh = Q
            ? (0, r.jsx)(e9.animated.div, {
                  ref: S
                      ? (e) => {
                            B(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": q,
                  className: l()(n5.rN, { [n5.p9]: N, [n5.oR]: q, [n5.wH]: q || _ }),
                  children: (0, r.jsx)(M.Q, {
                      selected: !0,
                      upperBadge: b,
                      lowerBadge: U,
                      lowerBadgeSize: G,
                      children: eE,
                  }),
              })
            : (0, r.jsx)(e9.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: l()(n5.rN, { [n5.p9]: N, [n5.oR]: q, [n5.wH]: q || _ }),
                  "data-drop-hovering": q,
                  children: (0, r.jsx)(M.Q, {
                      selected: _,
                      upperBadge: b,
                      lowerBadge: U,
                      lowerBadgeSize: G,
                      children: eE,
                  }),
              });
    return (0, r.jsxs)(F.c, {
        ref: el,
        children: [
            (0, r.jsx)(k.A, { overlay: !0, hovered: !x && K, selected: !x && _, unread: !x && E }),
            (0, r.jsx)(ik, { guild: d, disabled: N, isDragging: x, children: x ? eA : eh }),
            S ? (0, r.jsx)(t$, { name: d.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var iH = n(342216);
let ij = a.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        s = (0, E.bG)([eV.A], () => eV.A.getGuild(i)),
        l = ia(s),
        o = (0, E.bG)([eJ.A], () => eJ.A.isFocused()),
        d = (0, E.bG)([nG.A], () => nG.A.isUnavailable(i)),
        c = (0, B.A)((e) => e.guildId),
        u = ip(i),
        {
            badge: _,
            unread: A,
            isMentionLowImportance: h,
        } = (0, E.cf)([ee.default], () => ({
            badge: ee.default.getMentionCount(i),
            isMentionLowImportance: ee.default.getIsMentionLowImportance(i),
            unread: ee.default.hasUnread(i),
        })),
        I = (0, is.Ig)(s) && 0 === _,
        f = a.useMemo(
            () =>
                null != n
                    ? n
                    : I
                      ? (0, r.jsx)("div", {
                            className: iH.j,
                            children: (0, r.jsx)(it.E, {
                                size: "custom",
                                color: "currentColor",
                                className: iH.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, I],
        );
    return (0, r.jsx)(iB, {
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
var iW = n(922016),
    iY = n(297264),
    iK = n(821609),
    i$ = n(339350),
    iz = n(475743),
    iq = n(624458),
    iZ = n(408213),
    iX = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    iQ = n(928568);
function iJ(e, t) {
    (0, tn.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function i0(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, E.bG)([ir.A], () => ir.A.getRequest(n)),
        a = (0, E.bG)([ir.A], () => ir.A.getJoinRequestGuild(n), [n]),
        s = (0, E.bG)([eJ.A], () => eJ.A.isFocused()),
        l = (0, E.bG)([eY.A], () => eY.A.getGuildId());
    return null == a
        ? null
        : (0, r.jsx)(iB, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: iJ,
              lowerBadge:
                  i?.applicationStatus === iD.B5.REJECTED
                      ? (0, V.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eC.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var i1 = n(295783);
function i2(e) {
    let { onActivate: t, children: n } = e,
        i = a.useRef(null),
        s = (0, E.bG)([ir.A], () => ir.A.hasJoinRequestCoackmark()),
        l = a.useCallback(() => {
            iZ.Ay.clearCoachmark();
        }, []),
        o = (0, iz.Ay)(s),
        d = a.useRef(null);
    return (
        a.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, r.jsxs)("div", {
            className: i1.kL,
            children: [
                (0, r.jsx)(iW.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: i1.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: i1.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: i1.q3,
                                            children: [
                                                (0, r.jsx)(iY.D, {
                                                    variant: "heading-md/medium",
                                                    children: eo.intl.string(eo.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(eE.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eo.intl.string(eo.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(iK.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eo.intl.string(eo.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: i1.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: i1.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function i3(e) {
    let { onActivate: t } = e,
        [n, i] = a.useState(!1),
        s = (0, E.bG)([eY.A], () => eY.A.getGuildId()),
        l = (0, E.bG)([ir.A], () => ir.A.hasFetchedRequestToJoinGuilds),
        o = (0, iQ.A)(),
        d = (0, iz.Ay)(s),
        c = a.useMemo(() => {
            let e = (0, eW.xW)({
                folderId: iX.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eo.intl.string(eo.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, eW.EL)(t, e.id));
            return e;
        }, [o, n]);
    a.useEffect(() => {
        n && !l && iq.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (a.useEffect(() => {
        !n && u && d !== s && i(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, r.jsx)(i2, {
              onActivate: t,
              children: (0, r.jsx)(n8, {
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
                      className: i1.rH,
                      children: (0, r.jsx)(i$.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eW.PJ.GUILD
                          ? null
                          : (0, r.jsx)(i0, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function i4(e) {
    let { guildId: t } = e,
        n = a.useMemo(() => (0, eW.EL)(t), [t]),
        i = (0, E.bG)([eV.A], () => eV.A.getGuild(t)),
        s = (0, E.bG)([eJ.A], () => eJ.A.isFocused()),
        l =
            t ===
            (0, B.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = ip(t);
    return null == i
        ? null
        : (0, r.jsx)(iB, { guildNode: n, guild: i, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var i5 = n(221305);
let i6 = (0, y.Fe)({
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
    i7 = (0, eH.isWindows)() ? 4 : 12 * !(0, eH.isMac)();
function i8(e) {
    return e.startsWith(eC.BVt.GUILD_DISCOVERY) || e.startsWith(eC.BVt.GLOBAL_DISCOVERY);
}
class i9 {
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
            (0, eU.u9)(this.getVisibleGuildIds);
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
            (null == e && i8(window.location.pathname)) ||
            e === eC.sFm.SERVER_DISCOVERY_BADGE ||
            e === eC.sFm.E3_SERVER_DISCOVERY_BADGE
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
function re(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        s = (0, b.A)("TopSection"),
        l = (0, E.bG)([Y.Ay], () => null != Y.Ay.getVoiceChannelId()),
        o = (0, f.useHasAnyModalOpen)(),
        { shouldShowPopover: d, markPopoverAsDismissed: c } = (0, v.PK)(!l && !o),
        u = a.useRef(!1),
        _ = d && s;
    a.useEffect(() => {
        _ && !u.current && n(), (u.current = _);
    }, [n, _]);
    let A = (0, E.yK)([eV.A, eF.Ay], () => eV.A.getGuildIds().filter((e) => eF.Ay.isCurrentUserGuest(e))),
        h = i.concat(A),
        { entrypoint: I } = (0, eG.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nb, {}),
            I === eG.RK.SERVER_RAIL_TOP && (0, r.jsx)(i6, {}),
            s ? (0, r.jsx)(eP, { shouldShowIntroPopover: d, markIntroPopoverAsDismissed: c }) : null,
            !t && (0, r.jsx)(tS, {}),
            h.map((e) => (0, r.jsx)(i4, { guildId: e }, e)),
            (0, r.jsx)(i3, { onActivate: n }),
        ],
    });
}
function rt(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, E.yK)([eB.Ay], () => {
            let e = eB.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, E.yK)([ek.A], () => ek.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(t5, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.B, {
                role: "group",
                "aria-label": eo.intl.string(eo.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, r.jsx)(nF, {}),
            i ? null : (0, r.jsx)(t0, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(tv, {}),
        ],
    });
}
function rn(e) {
    var t;
    let { disableAppDownload: n = eH.isPlatformEmbedded, isOverlay: i = !1, className: s, themeOverride: o } = e,
        [d] = (0, E.yK)([eB.Ay], () => {
            let e = eB.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, E.bG)([ew.A], () => ew.A.lurkingGuildIds()),
        A = a.useMemo(() => (i ? [] : _), [_, i]),
        f = (0, E.bG)([D.A], () => D.A.isFullscreenInContext()),
        { isSorting: p, startSorting: N, stopSorting: O } = (0, ej.A)(),
        y = a.useRef(!1),
        [v] = a.useState(() => new h.Ep()),
        M = a.useRef(null),
        P = a.useRef(null),
        { ref: U, ...w } = (0, u.$y)(),
        G = (0, T.R7)(),
        [x, k] = a.useState(!1),
        F = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE),
        V = (0, m.r)(I.A.space.SPACE_XS),
        H = (0, b.A)("GuildsBar"),
        { pathname: j } = (0, c.zy)(),
        { entrypoint: W } = (0, eG.X8)({ location: "GuildsBar" }),
        Y = +!!H + +(W === eG.RK.SERVER_RAIL_TOP),
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
                        heightBeforeGuilds: i7 + t + Y * e,
                        bottomInset: 16,
                    });
            return new i9(
                d,
                k,
                eC.tEg,
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
            return ee.default.addChangeListener(e), () => ee.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: $ } = (0, L.Ay)(R.A.GUILDS_LIST),
        z = i8(j);
    (0, C.u5)(() => {
        if (!y.current && 0 !== d.size) {
            if (!z) {
                let { scrollTop: e } = ex.A.getGuildListDimensions();
                K.scrollTo({ to: e, animate: !1 });
            }
            return (y.current = !0), () => v.stop();
        }
    }),
        a.useEffect(() => {
            if ((K.setGuildsTree(d), y.current || 0 === d.size)) return;
            let e = B.A.getState().guildId;
            K.scrollToGuild(e, !1);
            let t = null;
            return B.A.subscribe((e) => {
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
                let n = eY.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                eY.A.addChangeListener(n),
                () => {
                    eY.A.removeChangeListener(n);
                }
            );
        }, [t]);
    let Z = a.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case eW.PJ.FOLDER:
                        return (0, r.jsx)(
                            ie,
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
                    case eW.PJ.GUILD:
                        return (0, r.jsx)(
                            ij,
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
        X = (0, r.jsx)(na, { selected: z, className: i5.ai }),
        Q = W === eG.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(L.f5, {
        value: $,
        children: (0, r.jsx)(g.N, {
            theme: o,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: l()(i5.iE, s, e, { [i5.R]: f }),
                    "aria-label": eo.intl.string(eo.t.PjnF2t),
                    children: [
                        (0, r.jsx)(e6, {
                            ref: M,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: i5.Xl,
                            barClassName: i5.Sh,
                        }),
                        (0, r.jsxs)("div", {
                            ref: U,
                            ...w,
                            ...G,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: i5.B2,
                            children: [
                                (0, r.jsxs)(S.zC, {
                                    className: l()({ [i5.XG]: !0, [i5.qw]: x }),
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: K.scrollerRef,
                                    onScroll: K.handleScroll,
                                    children: [
                                        (0, r.jsx)(re, { scrollToTop: q, lurkingGuildIds: A }),
                                        (0, r.jsx)(nP, {}),
                                        (0, r.jsx)(rt, {
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
                                            (0, r.jsx)(nP, { fullWidth: !0 }),
                                            (0, r.jsx)("div", { className: i5.JU, children: (0, r.jsx)(i6, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(e6, {
                            reverse: !0,
                            ref: P,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: l()(i5.LZ, { [i5.CH]: !i && !Q, [i5.c0]: !i && Q }),
                            barClassName: i5.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let ri = a.memo(
    function (e) {
        let t = (0, O.A)("guildsnav");
        return (0, r.jsx)(u.hD, { navigator: t, children: (0, r.jsx)(rn, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, A.A)(e, t),
);
