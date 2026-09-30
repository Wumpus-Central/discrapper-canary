(n.d(t, { B: () => rx, i: () => rE }), n(321073));
var i,
    l,
    s = n(477900),
    r = n(582128),
    a = n(435558),
    o = n.n(a),
    d = n(837381),
    c = n(887129),
    u = n(17928),
    h = n(661531),
    g = n(715828),
    m = n(312138),
    A = n(475825),
    f = n(707554),
    p = n(140735),
    C = n(38021),
    E = n(951001),
    x = n(820284),
    N = n(480747),
    S = n(437725),
    _ = n(192308),
    I = n(999903),
    b = n(44757),
    G = n(97587),
    j = n(838533),
    R = n(79843),
    v = n(466152),
    y = n(5180),
    T = n(770376),
    L = n(924985),
    M = n(734057),
    U = n(769765),
    D = n(71393),
    O = n(576705),
    P = n(967198),
    w = n(543465),
    V = n(652215);
let H = "DRAGGABLE_GUILD_CHANNEL";
function k(e) {
    return (0, N.T)(
        H,
        {
            drop(e, t) {
                let n = P.A.getGuildId(),
                    i = t.getItem(),
                    l = (0, b.QO)((0, j.A)(n, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == l) return;
                let s = (0, j.A)(n, i.id);
                if (null == s) return;
                let r = U.A.getCategories(n),
                    a = (0, b.RL)(s, (0, j.A)(n, l.referenceId), l.parentId, r);
                (0, v.A)(n, s, l.parentId, a);
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = M.A.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, b.QO)(M.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if ((0, y.ai)(P.A.getGuildId())) return !0;
                if (w.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = D.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = M.A.getChannel(l.parentId),
                    a = (0, G.Ay)((0, G.Fd)(i), s),
                    o = (0, G.Ay)(r, s);
                return a && o;
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
        (0, S.I)(
            H,
            {
                canDrag(e) {
                    let { channel: t } = e,
                        i = P.A.getGuildId(),
                        l = (0, R.A)(t, i);
                    if (null == l) return !0;
                    switch (l.reason) {
                        case "no-permission":
                        default:
                            return !1;
                        case "opt-in-channels":
                            return (
                                (0, T.A)() &&
                                    (0, _.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                            n.bind(n, 354643),
                                        );
                                        return (t) => (0, s.jsx)(e, { ...t });
                                    }),
                                !1
                            );
                        case "pinned-channel":
                            return (
                                (0, _.openModalLazy)(async () => {
                                    let { default: e } = await n.e("280545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: l.guild.id, channelId: t.id });
                                }),
                                !1
                            );
                    }
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: s,
                        } = e,
                        r = P.A.getGuildId(),
                        a = U.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: l,
                        channelList: (0, I.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === V.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, y.ai)(r) ||
                                      (O.A.can(V.xBc.MANAGE_CHANNELS, t) && O.A.can(V.xBc.VIEW_CHANNEL, t))
                                : !L.A.isCollapsed(t.parent_id);
                        }),
                        guildId: i,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var B = n(775602),
    F = n(793574),
    K = n(688810),
    z = n(915089),
    W = n(554146),
    Y = n(866665),
    X = n(939249),
    q = n(789645),
    Z = n(812993),
    $ = n(687966),
    J = n(131607),
    Q = n(652793),
    ee = n(976860),
    et = n(746080),
    en = n(49999),
    ei = n(344045),
    el = n(375708),
    es = n(275833),
    er = n(964306);
let ea = r.memo(function (e) {
    let { guildId: t, selected: i } = e,
        [l, a] = (0, J.ww)([W.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === W.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            (a(en.i.USER_DISMISS), (0, ee.pX)(V.BVt.CHANNEL(t, et.VV.GAME_SERVERS)));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await n.e("726702").then(n.bind(n, 758909));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t });
                    }));
            },
            [t],
        ),
        u = (0, s.jsxs)("div", {
            className: es.c,
            children: [
                (0, s.jsx)("div", {
                    className: er.Xs,
                    children: (0, s.jsx)(Y.m, {
                        text: el.intl.string(el.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(X.D, {
                            onClick: c,
                            "aria-label": el.intl.string(el.t.fgq1gs),
                            children: (0, s.jsx)(q.P, { size: "xs", color: "currentColor", className: er.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: er.yW,
                        children: (0, s.jsx)(Z.Lp, {
                            disableColor: !0,
                            text: el.intl.string(el.t.y2b7CA),
                            className: es.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(Q.G, {
        className: er.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)($.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
        text: el.intl.string(ei.default.vCzwM7),
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var eo = n(361158),
    ed = n(270533),
    ec = n(186111),
    eu = n(917782);
let eh = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, _.useHasAnyModalOpen)(),
        l = (0, u.bG)([ec.A], () => ec.A.hasLayers()),
        a = (0, eo.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, J.ww)([W.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === W.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, g] = (0, J.ww)(i || l || a || !c ? [] : [W.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        m = r.useCallback(
            (e) => {
                (d(e), g(e));
            },
            [d, g],
        ),
        A = r.useCallback(() => {
            (m(en.i.USER_DISMISS), (0, ee.pX)(V.BVt.CHANNEL(t, et.VV.GAME_SERVERS)));
        }, [t, m]),
        f = r.useRef(null),
        p = h === W.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(ed.mn, { channelRowRef: f, guildId: t, markAsDismissed: m }), [t, m]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(Q.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) =>
                    (0, s.jsx)($.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
                text: el.intl.string(ei.default.vCzwM7),
                selected: n,
                onClick: A,
                trailing: c
                    ? (0, s.jsx)(Z.Lp, { disableColor: !0, text: el.intl.string(el.t.y2b7CA), className: eu.q })
                    : null,
            }),
            p && C(),
        ],
    });
});
var eg = n(177953),
    em = n(624458),
    eA = n(844944),
    ef = n(513461),
    ep = n(663997),
    eC = n(221950);
function eE(e) {
    let { guild: t, selected: n } = e,
        i = (0, u.bG)([O.A], () => O.A.can(V.xBc.KICK_MEMBERS, t)),
        l = (0, u.bG)([eA.A], () => eA.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = i ? (l ?? 0) : 0;
    r.useEffect(() => {
        i &&
            t.features.has(V.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(V.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            em.A.fetchGuildJoinRequests({ guildId: t.id, status: ef.B5.SUBMITTED, limit: ep.L });
    }, [i, t]);
    let o = r.useCallback(() => {
        (0, eC.aZ)(t.id);
    }, [t.id]);
    return (0, s.jsx)(Q.G, {
        id: `members-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(eg.n, { size: "md", color: "currentColor", className: e }),
        text: el.intl.string(el.t.oclz3Z),
        selected: n,
        onClick: o,
        trailing: a > 0 ? (0, s.jsx)(Z.hV, { count: a }) : null,
    });
}
var ex = n(43105),
    eN = n(508770),
    eS = n(332837),
    e_ = n(93675),
    eI = n(942857),
    eb = n(313627),
    eG = n(784890),
    ej = n(151098);
function eR(e) {
    let { guild: t, selected: i } = e,
        l = (0, eI.A)(),
        [a, o] = (0, J.kn)(l ? [] : [W.M.GUILD_SPACE_COACHMARK], void 0, !0),
        d = a === W.M.GUILD_SPACE_COACHMARK,
        c = r.useRef(null),
        u = (0, eb.mN)(t),
        h = r.useCallback(() => {
            (o(en.i.USER_DISMISS), (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_SPACE)));
        }, [t.id, o]),
        g = r.useCallback(() => {
            (o(en.i.TAKE_ACTION), (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_SPACE)));
        }, [t.id, o]),
        m = r.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("8422"),
                            n.e("37786"),
                            n.e("303807"),
                            n.e("842987"),
                            n.e("421410"),
                        ]).then(n.bind(n, 643065));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
                    }));
            },
            [t.id],
        ),
        A = d ? (0, s.jsx)(eN.E, { type: "new", variant: "brand" }) : null,
        f = u
            ? (0, s.jsxs)("div", {
                  className: ej.c,
                  children: [
                      (0, s.jsx)("div", {
                          className: er.Xs,
                          children: (0, s.jsx)(Y.m, {
                              text: el.intl.string(el.t.R9GHya),
                              position: "top",
                              children: (0, s.jsx)(X.D, {
                                  onClick: m,
                                  "aria-label": el.intl.string(el.t.R9GHya),
                                  children: (0, s.jsx)(q.P, { size: "xs", color: "currentColor", className: er.gE }),
                              }),
                          }),
                      }),
                      null != A ? (0, s.jsx)("div", { className: er.yW, children: A }) : null,
                  ],
              })
            : A;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(Q.G, {
                ref: c,
                className: u ? er.Ki : void 0,
                id: `guild-space-tab-${t.id}`,
                renderIcon: (e) => (0, s.jsx)(eS.HomeIcon, { size: "md", color: "currentColor", className: e }),
                text: el.intl.string(el.t["04IVMq"]),
                selected: i,
                onClick: h,
                trailing: f,
            }),
            d
                ? (0, s.jsx)(ex.A, {
                      targetElementRef: c,
                      title: el.intl.string(eG.default["+OEqVQ"]),
                      body: el.intl.string(eG.default["BP//Ot"]),
                      graphic: {
                          type: "rive",
                          rive: e_.f,
                          aspectRatio: "16/9",
                          props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
                      },
                      actions: [{ text: el.intl.string(el.t.RzWDqY), variant: "primary", onClick: g }],
                      shouldShow: !0,
                      position: "right",
                      align: "top",
                      alignmentStrategy: "edge",
                      caretConfig: { align: "start" },
                      scrollBehavior: "close",
                      onRequestClose: () => o(en.i.USER_DISMISS),
                  })
                : null,
        ],
    });
}
var ev = n(581007),
    ey = n(522435),
    eT = n(285406),
    eL = n(582904),
    eM = n(419534),
    eU = n(395504),
    eD = n(503698),
    eO = n.n(eD),
    eP = n(695366),
    ew = n(104510),
    eV = n(544048),
    eH = n(868652),
    ek = n(379229),
    eB = n(482487),
    eF = n(914732),
    eK = n(828162),
    ez = n(877624),
    eW = n(549996),
    eY = n(356863),
    eX = n(247806);
function eq(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case ek.cD.WARNING:
            return (0, s.jsx)(eP.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case ek.cD.UNREAD:
            return (0, s.jsx)(Z.hV, { count: t.count });
        default:
            return null;
    }
}
let eZ = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    e$ = r.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, eF.Ay)(t),
            { showHighlight: a, markAsDismissed: o } = (function () {
                let e = (0, eW.c)(ez.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, i] = (0, J.Cc)(t ? W.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === W.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: i };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, eB.A)(
                t,
                l?.indicator != null || l?.popout != null,
            ),
            g = r.useCallback(() => {
                (c(),
                    (0, eH.Zm)(t),
                    (0, eK.A)(t, F.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    l?.popout?.markAsDismissed(en.i.INDIRECT_ACTION));
            }, [t, c, l]),
            m = r.useRef(null),
            A = (0, _.useModalsStore)(_.hasAnyModalOpenSelector),
            f = (0, u.bG)([ec.A], () => ec.A.hasLayers()),
            p = (0, eo.xr)((e) => e.fullScreenLayers.length > 0),
            C = A || f || p,
            E = r.useCallback(() => {
                if (l?.popout == null || C) return null;
                switch (l?.popout?.type) {
                    case ek.o.LEVEL_REACHED:
                        return (0, s.jsx)(ed.HW, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(ed.UB, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(ed.lw, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(ed.bo, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(ed.Gw, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.EXPIRING_PERK:
                        return (0, s.jsx)(ed.Mr, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case ek.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(ed.jz, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(ed.YX, { guildId: t, channelRowRef: m, ...l.popout });
                    default:
                        return (0, s.jsx)("div", {});
                }
            }, [t, l?.popout, m, C]);
        r.useEffect(() => {
            i && a && o(en.i.AUTO_DISMISS);
        }, [i, a, o]);
        let x = l?.popout != null || a,
            [N, S] = r.useState(null);
        r.useEffect(() => {
            x || S(null);
        }, [x]);
        let I = r.useCallback((e) => {
            S(e);
        }, []);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(Q.G, {
                    ref: m,
                    className: eX.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(ew._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        x &&
                        (0, s.jsx)("div", {
                            className: eX.Fi,
                            children: (0, s.jsx)(eV.t, {
                                nextScene: null == N ? "animation" : "LOOP",
                                className: eX.UU,
                                sceneSegments: eZ,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: I,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: eO()({ [eX.A7]: l?.showUnread === !0 }),
                        children: el.intl.string(eY.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: g,
                    showUnread: l?.showUnread === !0,
                    trailing: d
                        ? (0, s.jsx)(Z.Lp, {
                              text: el.intl.string(el.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(eq, { indicator: l?.indicator }),
                }),
                E(),
            ],
        });
    });
var eJ = n(202091),
    eQ = n(717421),
    e0 = n(834730),
    e1 = n(442433),
    e3 = n(230135),
    e2 = n(228366);
let e9 = {};
class e7 extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (e9 = e);
    }
    getState() {
        return e9;
    }
    getCountForGuild(e) {
        return e9[e];
    }
}
let e5 = new e7(e2.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        e9 = { ...e9, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        e9 = {};
    },
});
var e6 = n(147925),
    e4 = n(363487),
    e8 = n(568065);
function te(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(V.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : V.M2T[V.TVA.TIER_3],
            n = Object.values(e8.sy),
            i = Object.values(e8.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var tt = n(196577);
let tn = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: i, premiumSubscriberCount: l, className: a } = e,
        o = n >= i,
        d = Math.min((n / i) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, eQ.z)(
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
            className: tt.hQ,
            children: [
                (0, s.jsx)("div", { className: eO()(tt.L$, a) }),
                (0, s.jsx)(eJ.animated.div, { className: eO()(tt.qB, { [tt.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: tt.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tt.Ui,
                            children: [
                                (0, s.jsx)(e0.E, {
                                    className: tt.Qq,
                                    variant: "text-xs/semibold",
                                    children: el.intl.string(eY.default.NI6Ihe),
                                }),
                                l >= i &&
                                    (0, s.jsx)(e0.E, {
                                        className: tt.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: tt.Ui,
                            children: [
                                (0, s.jsx)(e0.E, {
                                    className: eO()(tt.Qq, tt.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? el.intl.formatToPlainString(eY.default["Ehpq+7"], { appliedBoostCount: n })
                                        : el.intl.formatToPlainString(eY.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: i,
                                          }),
                                }),
                                (0, s.jsx)(e6.A, {
                                    width: 12,
                                    height: 12,
                                    direction: e6.A.Directions.RIGHT,
                                    className: eO()(tt.Qq, tt.ue, tt.OW),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function ti(e) {
    let { guild: t, withMargin: i } = e,
        l = te(t),
        a = (0, e4.A)(t.id),
        o = r.useCallback(() => {
            (0, eK.A)(t.id, F.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([e5], () => e5.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, e3.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, e1.L3)(e, async () => {
                    let { default: e } = await n.e("371728").then(n.bind(n, 709843));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
        [a, t],
    );
    return (0, s.jsx)(X.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: eO()(tt.kL, { [tt.aF]: i }),
        onContextMenu: c,
        children: (0, s.jsx)(tn, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function tl(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(ti, { guild: t, withMargin: n });
}
tn.displayName = "GuildPowerupsProgressBarUI";
var ts = n(455234),
    tr = n(181079),
    ta = n(607567),
    to = n(403362),
    td = n(996439),
    tc = n(935208),
    tu = n(63995),
    th = n(518769);
function tg(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, ta.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var tm = n(787541),
    tA = n(79858),
    tf = n(600761),
    tp = n(95701),
    tC = n(72314),
    tE = n(808728),
    tx = n(297469),
    tN = n(960755),
    tS = n(633965),
    t_ = n(702841),
    tI = n(41200),
    tb = n(770934),
    tG = n(831617),
    tj = n(589603),
    tR = n(496767),
    tv = n(134413),
    ty = n(701785),
    tT = n(101611),
    tL = n(473529);
let tM = new Set();
class tU extends u.Ay.PersistedStore {
    static displayName = "ServerOnboardingSetupProgressCompletionStore";
    static persistKey = "ServerOnboardingSetupProgressCompletedGuildIds";
    initialize(e) {
        tM = new Set(e?.completedGuildIds ?? []);
    }
    getState() {
        return { completedGuildIds: Array.from(tM) };
    }
    isComplete(e) {
        return tM.has(e);
    }
}
let tD = new tU(e2.h, {
    SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE: function (e) {
        let { guildId: t } = e;
        tM = new Set(tM).add(t);
    },
});
var tO = n(686978);
let tP = (0, n(945810).mj)({
    name: "2026-09-server-onboarding-setup-progress",
    kind: "user",
    defaultConfig: { showSetupProgressRow: !1 },
    variations: { 1: { showSetupProgressRow: !0 } },
});
var tw = n(978165),
    tV = n(960253),
    tH = n(770666),
    tk = n(508654),
    tB = n(521427),
    tF = n(871123),
    tK = n(683180),
    tz = n(281405),
    tW = n(3026),
    tY = n(821609),
    tX = n(499373),
    tq = n(559106),
    tZ = n(847374),
    t$ = n(285796),
    tJ = n(983851),
    tQ = n(914430),
    t0 = n(47167),
    t1 = n(485947),
    t3 = n(970853),
    t2 = n(93055),
    t9 = n(349828),
    t7 = n(384539),
    t5 = n(551851),
    t6 = n(391507);
function t4(e) {
    e.stopPropagation();
}
function t8(e) {
    let { label: t, onClick: n, tabIndex: i } = e;
    return (0, s.jsx)(Y.m, {
        text: t,
        children: (0, s.jsx)(X.D, {
            className: eO()(t6.c9, t6.ih),
            onClick: n,
            tabIndex: i,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(tX.T, { size: "xs", color: "currentColor", className: t6.hs }),
        }),
    });
}
let ne = k(
        r.memo(function (e) {
            let t,
                {
                    channel: i,
                    connectChannelDragSource: l,
                    connectChannelDropTarget: a,
                    disableManageChannels: o,
                    position: c,
                    sortingPosition: h,
                    hideIcon: g,
                    children: m,
                } = e,
                A = (0, u.bG)([w.Ay], () => w.Ay.isChannelMuted(i.getGuildId(), i.id)),
                f = (0, u.bG)([L.A], () => L.A.isCollapsed(i.id)),
                p = (0, u.bG)([O.A], () => O.A.can(V.xBc.MANAGE_CHANNELS, i)),
                C = (0, t0.Ay)(i);
            t = null != h ? (c > h ? t6.mU : t6.TR) : t6.fx;
            let E = r.useCallback(() => {
                    f ? (0, tQ.fh)(i.id) : (0, tQ.Gv)(i.id);
                }, [i.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = D.A.getGuild(i.getGuildId());
                            null != t &&
                                (0, e1.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("926132"),
                                        n.e("393336"),
                                        n.e("391763"),
                                        n.e("955557"),
                                        n.e("603998"),
                                        n.e("550033"),
                                        n.e("198415"),
                                        n.e("412255"),
                                        n.e("63340"),
                                        n.e("430997"),
                                        n.e("379995"),
                                        n.e("591377"),
                                        n.e("35723"),
                                        n.e("566378"),
                                        n.e("715675"),
                                    ]).then(n.bind(n, 740438));
                                    return (n) => (0, s.jsx)(e, { ...n, channel: i, guild: t });
                                });
                        }
                    },
                    [i],
                ),
                N = r.useCallback(() => {
                    let e = i.type === V.rbe.GUILD_CATEGORY ? null : i.type,
                        t = i.getGuildId();
                    null != t &&
                        (0, _.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("377476"),
                                n.e("403032"),
                                n.e("746309"),
                                n.e("778799"),
                                n.e("470068"),
                                n.e("203589"),
                                n.e("692513"),
                                n.e("589916"),
                                n.e("460773"),
                                n.e("208018"),
                                n.e("120379"),
                                n.e("898377"),
                                n.e("819193"),
                                n.e("507775"),
                                n.e("662068"),
                                n.e("358608"),
                                n.e("221500"),
                            ]).then(n.bind(n, 906724));
                            return (n) =>
                                (0, s.jsx)(l, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== i.id ? i.id : null,
                                });
                        });
                }, [i]),
                S = (function (e, t) {
                    let n = (0, u.bG)([tr.A], () => tr.A.autoAddJoinedThreads),
                        { isAtLimit: i } = (0, t2.ft)();
                    return n &&
                        i &&
                        null != t &&
                        (0, y.ai)(e.getGuildId()) &&
                        e.type === V.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === t9.A.toLowerCase()
                        ? { label: el.intl.string(t7.default.WsUrMD), tooltip: el.intl.string(t7.default.dW9Kov) }
                        : null;
                })(i, C),
                I = (0, t3.A)(i);
            null == I && p && !o && (I = { label: el.intl.string(el.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: G, ...j } = (0, d.rm)(i.id),
                R = r.useRef(null),
                v = r.useRef(null),
                T = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tq.vN, {
                            focusTarget: R,
                            ringTarget: v,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: v,
                                className: eO()(t6.Ki, t6.iE, { [t6.yZ]: f, [t6.SU]: A, [t6.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(X.D, {
                                        innerRef: R,
                                        className: t6.rb,
                                        tabIndex: G,
                                        ...j,
                                        onClick: E,
                                        "aria-label": el.intl.formatToPlainString(el.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(t1.A, {
                                                className: t6.UU,
                                                children: (0, s.jsx)(tW.A, { children: C }),
                                            }),
                                            null != S
                                                ? (0, s.jsx)("span", {
                                                      className: t6.qS,
                                                      children: (0, s.jsx)(Y.m, {
                                                          asContainer: !0,
                                                          text: S.tooltip,
                                                          children: (0, s.jsx)(eN.E, {
                                                              type: { text: S.label },
                                                              variant: "default",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            g
                                                ? null
                                                : (0, s.jsx)(tZ.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t6.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t4,
                                        className: t6.Y_,
                                        children:
                                            null != I
                                                ? (0, s.jsx)(t8, { label: I.label, onClick: I.perform, tabIndex: G })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        m,
                    ],
                });
            return null != a && null != l ? a(l(T)) : T;
        }),
    ),
    nt = r.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, s.jsx)("li", {
            className: eO()(i, t6.fx),
            children: (0, s.jsxs)("div", {
                className: eO()(t6.Ki, t6._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t6.rb,
                        children: (0, s.jsx)(t1.A, { className: t6.UU, children: (0, s.jsx)(tW.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(Y.m, {
                              asContainer: !0,
                              text: el.intl.string(el.t["5qNmsU"]),
                              children: (0, s.jsx)(X.D, {
                                  className: t6.r,
                                  onClick: n,
                                  children: (0, s.jsx)(t$.a, { size: "md", color: "currentColor", className: t6.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    nn = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t5.A], () => t5.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = r.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), e2.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), e2.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t6.oA,
            children: (0, s.jsx)(tY.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: tJ.H,
                text: n ? el.intl.string(el.t["/eB9Bg"]) : el.intl.string(el.t.Q2gPWl),
            }),
        });
    }),
    ni = r.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, u.bG)([t5.A], () => t5.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === V.rbe.GUILD_CATEGORY
            ? i
                ? (0, s.jsx)("li", {
                      className: t6.fx,
                      children: (0, s.jsx)("div", {
                          className: eO()(t6.Ki, t6._V),
                          children: (0, s.jsx)(t1.A, {
                              className: t6.UU,
                              children: (0, s.jsx)(tW.A, { children: el.intl.string(el.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    nl = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, t0.Ay)(t);
        return (0, s.jsx)("li", {
            className: t6.fx,
            children: (0, s.jsx)("div", {
                className: eO()(t6.Ki, t6._V),
                children: (0, s.jsx)(t1.A, { className: t6.UU, children: (0, s.jsx)(tW.A, { children: n }) }),
            }),
        });
    });
var ns = n(728321),
    nr = n(244083);
let na = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var no = n(906659);
let nd = r.memo(function (e) {
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
            (null != a && l.includes(a) && (t = (0, eM.xb)(i)), (0, eM.DD)(n.id, l, t));
        }, [n.id, a, i, l]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tx.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tx.bK:
            if (n.features.has(V.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tx.HP:
            return (0, s.jsx)(nt, { name: el.intl.string(el.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, s.jsx)(nt, { name: el.intl.string(el.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: no.ts }), (0, s.jsx)(ni, { category: e, channel: n })],
            });
        }
        case tx.TF: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(ne, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(ns.A, {
                    inlineSpecs: na,
                    arrowAlignment: nr.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(ne, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nc = n(104171),
    nu = n(186369),
    nh = n(970812),
    ng = n(147036);
function nm(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tx.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tz.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tx.PU ||
                ((0, y.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tx.HP ||
                      (!!t && n !== tx.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tx.PU &&
            n !== tx.HP &&
            n !== tx.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nA = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, s.jsx)(nn, { category: i });
    }),
    nf = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: g } = r.useMemo(() => nm(n, c, t), [n, c, t, i]),
            m = r.useMemo(() => (t === tx.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
            A = (0, eU.jN)(a),
            { enableWaveformIcon: f } = (0, nu.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)(
                [w.Ay],
                () => {
                    if (null == m || !m.isCollapsed || !g) return [];
                    let e = m.getChannelRecords(),
                        t = [];
                    for (let n of e) {
                        if (!n.isGuildVocal()) continue;
                        let e = w.Ay.isChannelOrParentOptedIn(a, n.id);
                        (!A || e) && t.push(n);
                    }
                    return t;
                },
                [m, g, a, A],
            ),
            C = r.useMemo(
                () => (0, ng.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [p, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nA, { guildChannels: n, guildChannelsVersion: i });
        let E = h ? (0, s.jsx)("div", { className: no.ts }) : null;
        return g && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: no.qz,
                          children: (0, s.jsx)(nc.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(nh.A, { color: "currentColor", className: eO()(e, er.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var np = n(625903),
    nC = n(283973),
    nE = n(933832),
    nx = n(435183),
    nN = n(698441),
    nS = n(855687),
    n_ = n(816662),
    nI = n(446600),
    nb = n(616356);
function nG(e, t, n) {
    return null != t && !!t && !(0, b.ws)(n, e.type);
}
function nj(e, t) {
    return null == t ? er.fx : e > t ? er.mU : er.TR;
}
function nR(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [O.A, P.A],
        () =>
            n ||
            (0, y.ai)(P.A.getGuildId()) ||
            (!O.A.can(V.xBc.MANAGE_CHANNELS, t) &&
                !O.A.can(V.xBc.MANAGE_ROLES, t) &&
                !O.A.can(V.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, tp.tr)(t.type) && !O.A.can(V.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.A.can(V.xBc.CONNECT, t)) ||
            !tp.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(Y.m, {
              asContainer: !0,
              text: el.intl.string(el.t["3gUsJb"]),
              children: (0, s.jsx)(X.D, {
                  className: eO()(er.Xs, l ? er.Tf : void 0, r ? er.bw : er.UI),
                  onClick: function () {
                      nx.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": el.intl.string(el.t["3gUsJb"]),
                  children: (0, s.jsx)(np.SettingsIcon, { size: "xs", color: "currentColor", className: er.gE }),
              }),
          });
}
function nv(e) {
    let {
            channel: t,
            isDefaultChannel: i = !1,
            locked: l,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([D.A], () => D.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nI.A], () => nI.A.getStageInstanceByChannel(t.id), [t.id]),
        g = (0, u.bG)([nN.Ay], () => nN.Ay.getActiveEventByChannel(t.id), [t.id]),
        m = (0, u.bG)([O.A], () => (0, nS.K)(O.A, c, t, h)),
        A = (0, u.bG)([], () =>
            t?.type === V.rbe.GUILD_VOICE ? el.intl.string(el.t["EE+P0H"]) : el.intl.string(el.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (l || !m || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nC.R, { size: "xs", className: er.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (p = (0, s.jsx)(ns.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(Y.m, {
            asContainer: !0,
            text: A,
            children: (0, s.jsx)(X.D, {
                className: eO()(er.Xs, o ? er.Tf : void 0, d ? er.bw : er.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nb.A.getAllActiveStreams().filter(
                            (e) => e.state !== V.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, _.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("683621"),
                                n.e("711162"),
                                n.e("159957"),
                                n.e("728136"),
                                n.e("216084"),
                                n.e("284819"),
                            ]).then(n.bind(n, 405342));
                            return (n) =>
                                (0, s.jsx)(i, {
                                    ...n,
                                    guild: c,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: V.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: g,
                                });
                        });
                    }
                },
                tabIndex: a,
                "aria-label": A,
                children: p,
            }),
        })
    );
}
function ny(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Y.m, {
        asContainer: !0,
        text: el.intl.string(el.t["ROh4T+"]),
        children: (0, s.jsx)(X.D, {
            className: er.Xs,
            onClick: function () {
                (0, n_.Ol)(t.guild_id, t.id);
            },
            "aria-label": el.intl.string(el.t["ROh4T+"]),
            children: (0, s.jsx)(q.P, { size: "xs", color: "currentColor", className: er.gE }),
        }),
    });
}
function nT(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Y.m, {
        asContainer: !0,
        text: el.intl.string(el.t["N2c/Un"]),
        children: (0, s.jsx)(X.D, {
            className: er.Xs,
            onClick: function () {
                (0, n_.jA)(t.guild_id, t.id, !0, { section: V.JJy.CHANNEL_LIST });
            },
            "aria-label": el.intl.string(el.t["N2c/Un"]),
            children: (0, s.jsx)(nE.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: er.gE }),
        }),
    });
}
class nL extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nR, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nv, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(ny, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nT, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nj(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nG(e, t, n);
    }
}
var nM = n(166444),
    nU = n(790782);
let nD = k(function (e) {
    let {
            guild: t,
            selectedChannelId: i,
            position: l,
            disableManageChannels: a,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: h,
            connectChannelDropTarget: g,
            tabIndex: m,
        } = e,
        A = (0, u.bG)([M.A, tE.Ay], () => {
            let e = tE.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : M.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([M.A], () => M.A.getChannel(A?.parent_id)),
        p = i === A?.id,
        C = (0, t0.Ay)(A),
        E = (0, u.bG)([O.A], () =>
            null != f ? O.A.can(V.xBc.MANAGE_CHANNELS, f) : null != t && O.A.can(V.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != A &&
                    (0, e1.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("430997"),
                            n.e("379995"),
                            n.e("729559"),
                        ]).then(n.bind(n, 994058));
                        return (t) => (0, s.jsx)(e, { ...t, channel: A });
                    });
            },
            [A],
        );
    if (null == A) return null;
    let N = nj(l, c),
        S = nG(A, o, d),
        _ = (0, s.jsx)("div", {
            className: eO()(N, { [er.r9]: S, [er.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nM.Ay, {
                className: er.Ki,
                channel: A,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nU.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nv, { channel: A, tabIndex: m }),
                    (0, s.jsx)(nR, { channel: A, disableManageChannels: a, tabIndex: m }),
                ],
            }),
        });
    return (E && (_ = g(h(_))), _);
});
var nO = n(34188),
    nP = n(733391),
    nw = n(832163),
    nV = n(831024),
    nH = n(44724),
    nk = n(849134),
    nB = n(770178),
    nF = n(307076);
let nK = Math.ceil(Math.sqrt(115200)),
    nz = (nK - 240) / 2,
    nW = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [i, l] = r.useState(-1),
            a = r.useCallback((e) => {
                l(e.contentRect.width);
            }, []),
            o = (0, nB.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, eQ.z)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            u = r.useCallback(
                (e, t) => {
                    c({ shineSpring: 1, delay: t, reset: !0, loop: { reset: !0, delay: 1600 } });
                },
                [c],
            ),
            h = r.useCallback(() => {
                c({ shineSpring: 0, immediate: !0, loop: !1 });
            }, [c]),
            g = r.useMemo(
                () =>
                    n(
                        (0, s.jsx)(eJ.animated.div, {
                            className: nF.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * i}px + ${e * nK}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, i, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nF.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nz}px` },
                children: g,
            })
        );
    });
var nY = n(371794),
    nX = n(240248),
    nq = n(998218),
    nZ = n(672812),
    n$ = n(427797);
let nJ = r.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        o = (0, _.useHasAnyModalOpen)(),
        d = (0, u.bG)([ec.A], () => ec.A.hasLayers()),
        c = (0, eo.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nP.Kh)(t.id);
    }, [t.id]);
    let g = (0, u.bG)([nw.A], () => nw.A.getAnnouncement(t.id)),
        m = g?.state === "success" ? g.announcement : void 0,
        [A, f] = (0, J.x_)(W.M.GAME_SHOP_NEW_BADGE, t.id, m?.id ?? "", void 0, !0),
        p = A === W.M.GAME_SHOP_NEW_BADGE && null != m,
        C = (0, tF.nY)(t.id),
        E = (0, nV.u)({ surface: "storefront_badge", applicationId: C }),
        x = null;
    (p && (x = el.intl.string(el.t.y2b7CA)), null != E && (x = E.text));
    let [N, S] = (0, J.x_)(W.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, m?.id ?? ""),
        I = N === W.M.GAME_SHOP_NEW_DROP_POPOVER && null != m;
    r.useEffect(() => {
        i && (p && f(en.i.INDIRECT_ACTION), I && S(en.i.INDIRECT_ACTION));
    }, [f, S, i, p, I]);
    let b = r.useCallback(() => {
            (f(en.i.TAKE_ACTION), S(en.i.TAKE_ACTION));
            let e = (0, tF.mq)(t.id),
                n = nw.A.getStorefrontState(e)?.activePage ?? 0;
            (0, ee.pX)(V.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, S]),
        G = r.useCallback(() => {
            (0, nH.X)({ guildId: t.id, forceFetch: I });
        }, [t.id, I]),
        j = r.useCallback(() => {
            S(en.i.USER_DISMISS);
        }, [S]),
        R = r.useCallback(
            (e) => {
                null != t &&
                    (0, e1.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        v = r.useCallback(() => {
            l.current?.onMouseEnter(null, 500);
        }, [l]),
        y = r.useCallback(
            (e) =>
                (0, s.jsx)(Q.G, {
                    background: (0, s.jsx)("div", { className: n$.D }),
                    innerClassName: n$.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nO.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(e0.E, {
                        variant: "text-md/medium",
                        className: nZ.UU,
                        children: el.intl.string(el.t.vyaWs7),
                    }),
                    selected: i,
                    onMouseDown: G,
                    onClick: b,
                    onContextMenu: R,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != x && (0, s.jsx)(Z.Lp, { text: x, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, i, G, b, R, x],
        ),
        T = r.useMemo(() => {
            if (null == m) return null;
            switch (m.type) {
                case "guild-application-announcement": {
                    let e =
                            null != m.assetId
                                ? nq.A.toURLSafe((0, nY.YE)(m.applicationId, m.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != m.backgroundImageAssetId
                                ? nq.A.toURLSafe((0, nY.YE)(m.applicationId, m.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: el.intl.string(el.t["7PvvS9"]),
                        body: el.intl.formatToPlainString(el.t["9J4h1a"], { applicationName: m.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = m;
                    if ((0, nX.uJ)(e) && (0, nX.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nX.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: m.popoverTitle,
                        body: m.popoverBody,
                        actionLabel: m.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [m]),
        L = r.useCallback(
            () =>
                I && null != T
                    ? (0, s.jsx)(nk.A, {
                          onActionClick: b,
                          onActionMouseDown: G,
                          onRender: v,
                          onRequestClose: j,
                          targetElementRef: a,
                          ...T,
                      })
                    : null,
            [I, T, b, G, v, j],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nW, { ref: l, children: y }), !o && !d && !c && L()] });
});
var nQ = n(740426),
    n0 = n(826673),
    n1 = n(591552),
    n3 = n(202776),
    n2 = n(454058),
    n9 = n(573163);
function n7(e) {
    let { guild: t, selected: i } = e,
        l = (0, n3.A)(t),
        a = (0, n0.HX)(W.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, t_.yK)([n2.A], () =>
            Array.from(n2.A.getNewChannelIds(t.id)).filter((e) => n2.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, t_.bG)([n9.Ay], () => n9.Ay.hasUnread(t.id, nU.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tx.rR,
        u = (0, t_.bG)([n1.A, n9.Ay], () => {
            let e = n1.A.lastFetchedAt(t.id),
                n = n9.Ay.lastMessageId(t.id, nU.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = tc.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        g = r.useCallback(() => {
            (0, ee.pX)(V.BVt.CHANNEL(t.id, l ? et.VV.CUSTOMIZE_COMMUNITY : et.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        m = r.useCallback(
            (e) => {
                (0, e1.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("113446"), n.e("317699"), n.e("830412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        A = null;
    return (
        (a && !d && !c) ||
            i ||
            u ||
            (A = (0, s.jsx)(Z.Lp, { color: h.A.colors.BADGE_BACKGROUND_BRAND.css, text: el.intl.string(el.t.y2b7CA) })),
        (0, s.jsx)(Q.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(nQ.k, { size: "md", color: "currentColor", className: e }),
            text: l ? el.intl.string(el.t.h9mGOP) : el.intl.string(el.t.et6wav),
            selected: i,
            onClick: g,
            onContextMenu: m,
            trailing: A,
        })
    );
}
var n5 = n(855473);
function n6(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(Q.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n5.Z, { size: "md", color: "currentColor", className: e }),
        text: el.intl.string(el.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_HOME));
        },
    });
}
var n4 = n(297264),
    n8 = n(5373),
    ie = n(65995),
    it = n(195702);
function ii(e, t) {
    return (0, s.jsx)(e0.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let il = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([ty.h], () => ty.h.getNewMemberActions(t.id), [t.id]),
        i = (0, u.bG)([ie.A], () => ie.A.getCompletedActions(t.id)),
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
            (0, s.jsxs)(X.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: it.G9,
                onClick: function () {
                    (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: it.A1,
                        children: [
                            (0, s.jsx)(n4.D, { variant: "heading-sm/bold", children: el.intl.string(el.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: it.Ib,
                                children: [
                                    (0, s.jsx)(e0.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: it.Cv,
                                        children: el.intl.format(el.t.eqZ1lW, {
                                            numberHook: ii,
                                            total: a.toString(),
                                            completed: l.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(e6.A, {
                                        className: it.UE,
                                        width: 16,
                                        height: 16,
                                        direction: e6.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(n8.i, {
                        className: it.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (l / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: it.yF }),
        ],
    });
});
var is = n(581925);
function ir(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(Q.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(is.L, { size: "md", color: "currentColor", className: e }),
        text: el.intl.string(el.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var ia = n(590251),
    io = n(413125),
    id = n(411392);
let ic = r.memo(function (e) {
    let { guild: t } = e,
        i = (0, u.bG)([tE.Ay], () => tE.Ay.getDefaultChannel(t.id), [t.id]),
        { steps: l } = (0, io.c)(i, t),
        a = l.length,
        o = l.filter((e) => e.completed).length,
        c = l.find((e) => !e.completed),
        g = (0, d.rm)(`setup-progress-${t.id}`),
        m = a > 0 && null == c;
    return (r.useEffect(() => {
        var e;
        m &&
            ((e = t.id),
            tD.isComplete(e) || e2.h.dispatch({ type: "SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE", guildId: e }));
    }, [t.id, m]),
    null == c)
        ? null
        : (0, s.jsxs)("li", {
              children: [
                  (0, s.jsxs)(X.D, {
                      ...g,
                      role: "button",
                      className: id.nM,
                      onClick: function () {
                          var e;
                          ((e = t.id),
                              (0, _.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("883221"),
                                      n.e("457866"),
                                      n.e("270591"),
                                      n.e("149360"),
                                  ]).then(n.bind(n, 49843));
                                  return (n) => (0, s.jsx)(t, { guildId: e, ...n });
                              }));
                      },
                      children: [
                          (0, s.jsx)("div", {
                              className: id.Ap,
                              children: (0, s.jsx)(ia.a, {
                                  percent: (o / a) * 100,
                                  colorOverride: h.A.colors.STATUS_POSITIVE.css,
                              }),
                          }),
                          (0, s.jsxs)("div", {
                              className: id.FS,
                              children: [
                                  (0, s.jsx)(n4.D, {
                                      variant: "heading-sm/bold",
                                      children: el.intl.string(el.t.o3HK3d),
                                  }),
                                  (0, s.jsx)(e0.E, {
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      className: id.VA,
                                      children: el.intl.formatToPlainString(el.t.zhHW5c, {
                                          currStep: o + 1,
                                          total: a,
                                          step: c.title,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", { role: "separator", className: id.yF }),
              ],
          });
});
var iu = n(514179);
function ih(e) {
    let { guild: t, selected: i } = e;
    return (0, s.jsx)(Q.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(iu.A, { className: e }),
        text: el.intl.string(el.t["KzCF/6"]),
        selected: i,
        onClick: function () {
            (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e1.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var ig = n(506774),
    im = n(95561),
    iA = n(289397),
    ip = n(486418),
    iC = n(575926),
    iE = n(440293),
    ix = n(174459),
    iN = n(634654),
    iS = n(888918);
function i_(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        l = (0, iE.w)(t),
        r = (0, t_.bG)([D.A], () => D.A.getGuild(t)),
        a = r?.features.has(V.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === ig.w.get(iN.bJ, "false"),
        d = (0, t_.bG)([B.Ay], () => B.Ay.useReducedMotion);
    return (0, s.jsx)(Q.G, {
        id: `shop-${t}`,
        className: eO()(iS.A2, { [iS.wH]: n, [iS.ST]: o }),
        innerClassName: iS.LE,
        renderIcon: (e) => (0, s.jsx)(iC.h, { width: 20, height: 20, className: eO()([e, iS.sV]) }),
        text: el.intl.string(el.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, s.jsxs)("div", {
            className: iS.ai,
            children: [
                d
                    ? (0, s.jsx)(Z.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: el.intl.string(el.t.y2b7CA),
                          className: iS.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, iA.n)("server_products/storefront/money.gif"),
                          className: iS.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(X.D, {
                        className: iS.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, n0.Dr)(W.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                ix.default.track(V.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, im.H$)(t),
                                    action_taken: iN.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && a) || (0, ee.bG)(V.BVt.CHANNEL(t, tE.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": el.intl.string(el.t.cpT0Cq),
                        children: (0, s.jsx)(t$.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function iI(e) {
    let { guild: t, selected: i } = e;
    function l() {
        (ig.w.set(iN.bJ, "true"), (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_SHOP)));
    }
    return (0, ip.P)(t)
        ? (0, s.jsx)(i_, { guildId: t.id, selected: i, handleClick: l })
        : (0, s.jsx)(Q.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(iC.h, { width: 20, height: 20, className: e }),
              text: el.intl.string(el.t.al5EXL),
              selected: i,
              onClick: l,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e1.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var ib = n(308528),
    iG = n(534890),
    ij = n(262763),
    iR = n(499211),
    iv = n(406704),
    iy = n(747926),
    iT = n(977997),
    iL = n(807632),
    iM = n(37411);
function iU(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, iL.YG)(t),
        l = (0, iL.IO)(t),
        r = (0, iv._M)(t);
    return i && l && r ? (0, s.jsx)(iD, { thread: t, tabIndex: n }) : null;
}
function iD(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, u.bG)([iT.A], () => iT.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: l } = (0, iR.A)(t.id),
        a = r.useCallback(() => {
            ij.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: l, locked: !1 });
        }, [t, i, l]),
        o = r.useCallback(() => {
            (0, iy.JA)(t, !0, iM.H9.CHANNEL_LIST);
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(Y.m, {
                asContainer: !0,
                text: el.intl.string(el.t["96ANUN"]),
                children: (0, s.jsx)(X.D, {
                    className: er.Xs,
                    onClick: a,
                    tabIndex: n,
                    "aria-label": el.intl.string(el.t["96ANUN"]),
                    children: (0, s.jsx)(tJ.H, { size: "xs", color: "currentColor", className: er.gE }),
                }),
            }),
            (0, s.jsx)(Y.m, {
                asContainer: !0,
                text: el.intl.string(el.t.ZXxLQg),
                children: (0, s.jsx)(X.D, {
                    className: er.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": el.intl.string(el.t.ZXxLQg),
                    children: (0, s.jsx)(iG.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
                }),
            }),
        ],
    });
}
var iO = n(897898),
    iP = n(152007);
function iw(e) {
    return null != e && e > 0;
}
var iV = n(405018),
    iH = n(428689),
    ik = n(525093);
function iB(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, s.jsxs)("div", {
        className: ik.iE,
        children: [
            (0, s.jsxs)(e0.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eO()(ik.VV, { [ik.Ki]: i, [ik.$G]: n >= 100 }),
                children: [
                    i ? (0, s.jsx)(iH.VideoIcon, { size: "md", color: "currentColor", className: ik.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(e0.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eO()(ik.X5, { [ik.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function iF(e) {
    let { channel: t, video: n, userCount: i } = e,
        { limit: l } = (0, iV.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && l > 0 && ((a = r < 0 || l < r), (r = r > 0 ? Math.min(r, l) : l)),
        (0, s.jsx)(iB, { users: i, total: r, videoLimit: a })
    );
}
var iK = n(775946),
    iz = n(588224),
    iW = n(447199);
function iY(e) {
    let { thread: t, countInVoice: n, hasVideo: i, mentionCount: l, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = iw(l);
    return a || o
        ? (0, s.jsxs)("div", {
              className: er.yW,
              children: [
                  a ? (0, s.jsx)(iF, { userCount: n, video: i, channel: t }) : null,
                  o ? (0, s.jsx)(iK.A, { mentionsCount: l, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function iX(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: eO()(iW.GI, { [iW.a7]: n }, { [iW.BJ]: i }), style: t },
        { density: r } = (0, C.wR)();
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
let iq = r.memo(function (e) {
        let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([ta.Ay], () => ta.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([iT.A], () => iT.A.hasVideo(t.id)),
            g = (0, t0.Ay)(t),
            {
                unread: m,
                mentionCount: A,
                isMentionLowImportance: f,
            } = (0, u.cf)([n9.Ay], () => ({
                unread: n9.Ay.hasUnread(t.id),
                mentionCount: n9.Ay.getMentionCount(t.id),
                isMentionLowImportance: n9.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, u.bG)([iP.A], () => iP.A.isMuted(t.id)),
            C = r.useCallback(
                (e) => {
                    (0, iy.JA)(t, !e.shiftKey, iM.H9.CHANNEL_LIST);
                },
                [t],
            ),
            E = r.useCallback(() => {
                ib.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            x = r.useCallback(
                (e) => {
                    (0, iO.A)(e, t);
                },
                [t],
            ),
            N = r.useCallback(
                (e) => {
                    let i = M.A.getChannel(t.id);
                    null != i &&
                        (0, e1.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("393336"),
                                n.e("391763"),
                                n.e("955557"),
                                n.e("691671"),
                                n.e("947502"),
                                n.e("603998"),
                                n.e("965789"),
                                n.e("343266"),
                                n.e("412255"),
                                n.e("63340"),
                                n.e("896804"),
                                n.e("65200"),
                                n.e("285802"),
                                n.e("703869"),
                                n.e("51212"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, s.jsx)(e, { ...t, channel: i });
                        });
                },
                [t.id],
            ),
            S = null == c ? 0 : c.length,
            { role: _, ...I } = (0, d.rm)(t.id),
            b = r.useRef(null),
            G =
                A > 0
                    ? el.intl.formatToPlainString(el.t["ZL7+I6"], { channelName: g, mentionCount: A })
                    : m
                      ? el.intl.formatToPlainString(el.t.YlVvmc, { channelName: g })
                      : el.intl.formatToPlainString(el.t["0nZpiF"], { channelName: g });
        return (0, s.jsxs)("li", {
            role: _,
            className: eO()(er.fx, { [er.wH]: i }),
            children: [
                (0, s.jsx)(iX, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(iX, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tq.vN, {
                    focusTarget: b,
                    ringTarget: b,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: eO()(er.Ki, nZ.iE, nZ.ZS, {
                            [nZ.J1]: i,
                            [nZ.F4]: !i && p,
                            [nZ.V2]: !p && !i && m,
                            [nZ.lY]: o,
                        }),
                        onMouseDown: E,
                        onContextMenu: N,
                        children: [
                            !m || p || i ? null : (0, s.jsx)("div", { className: eO()(nZ.gy, nZ.WS) }),
                            (0, s.jsx)(X.D, {
                                ...I,
                                innerRef: b,
                                className: nZ.nf,
                                onClick: C,
                                onAuxClick: x,
                                "aria-label": G,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: eO()(nZ.Y5, nZ.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(e0.E, {
                                            variant: "text-sm/medium",
                                            color: "none",
                                            className: nZ.UU,
                                            children: (0, s.jsx)(tW.A, { "aria-hidden": !0, children: g }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: nZ.Y_,
                                            onClick: nM.dG,
                                            onKeyDown: nM.dG,
                                            children: [
                                                (0, s.jsx)(iY, {
                                                    thread: t,
                                                    countInVoice: S,
                                                    hasVideo: h,
                                                    mentionCount: A,
                                                    isMentionLowImportance: f,
                                                }),
                                                (0, s.jsx)(iU, { thread: t, tabIndex: I.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(iz.A, {
                    channel: t,
                    collapsed: !l && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    iZ = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: r } = e,
            a = (0, t0.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([M.A], () => l.map((e) => M.A.getChannel(e)).filter(to.Vq), [l]),
            c = (0, u.bG)([ta.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = ta.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: iW.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": el.intl.formatToPlainString(el.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: eO()(iW.eh, { [iW.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            iq,
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
var i$ = n(922016),
    iJ = n(367513),
    iQ = n(296216),
    i0 = n(963027),
    i1 = n(202384),
    i3 = n(51758),
    i2 = n(139033),
    i9 = n(305866),
    i7 = n(123292),
    i5 = n(830215),
    i6 = n(315982),
    i4 = n(480900),
    i8 = n(557722),
    le = n(834942),
    lt = n(287809),
    ln = n(53516),
    li = n(648580),
    ll = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let ls = function (e) {
    let { type: t, guildId: i, closePopout: l } = e,
        r = (0, z.GV)(),
        a = (0, u.bG)([le.A], () => le.A.getCheck(i), [i]),
        {
            notClaimed: o,
            notEmailVerified: d,
            notPhoneVerified: c,
            missingVerificationRole: h,
            verificationRole: g,
        } = a,
        {
            header: m,
            body: A,
            buttonText: f,
        } = (function (e, t) {
            if (0 !== e) return { header: null, body: null, buttonText: null };
            {
                let e = el.intl.string(el.t["6zY8BI"]),
                    {
                        notClaimed: n,
                        notPhoneVerified: i,
                        notEmailVerified: l,
                        newMember: s,
                        newAccount: r,
                        missingVerificationRole: a,
                        verificationRole: o,
                    } = t;
                return n
                    ? { header: e, body: el.intl.string(el.t.IRxUlG), buttonText: el.intl.string(el.t.fiNVin) }
                    : i
                      ? { header: e, body: el.intl.string(el.t.vW8iUF), buttonText: el.intl.string(el.t["50gfOv"]) }
                      : l
                        ? { header: e, body: el.intl.string(el.t.vdSOpz), buttonText: el.intl.string(el.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: el.intl.formatToPlainString(el.t.v1ktYb, { min: V.$8o.MEMBER_AGE }),
                                buttonText: el.intl.string(el.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: el.intl.formatToPlainString(el.t.sncw41, { min: V.$8o.ACCOUNT_AGE }),
                                  buttonText: el.intl.string(el.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: el.intl.format(el.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: el.intl.string(el.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == m || null == A
        ? null
        : (0, s.jsxs)(i9.l, {
              className: li.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: li.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: li.Qs,
                      children: [
                          (0, s.jsx)(n4.D, { variant: "heading-md/semibold", id: r, children: m }),
                          (0, s.jsx)(e0.E, { color: "text-default", variant: "text-sm/normal", children: A }),
                          (0, s.jsxs)("div", {
                              className: li.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: li.FS,
                                            children: (0, s.jsx)(tY.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? i6.R()
                                                        : c
                                                          ? (0, _.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("590275"),
                                                                        n.e("766806"),
                                                                        n.e("14775"),
                                                                        n.e("989545"),
                                                                        n.e("991531"),
                                                                        n.e("311493"),
                                                                        n.e("84704"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: i8.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: ln.V },
                                                            )
                                                          : d
                                                            ? (i5.A.verifyResend(),
                                                              (0, i2.A)({
                                                                  title: el.intl.string(el.t.LykQYk),
                                                                  subtitle: el.intl.format(el.t.azKEPy, {
                                                                      email: lt.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != g && (0, i4.b)(g, i),
                                                        l());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(i7.Q, {
                                            onClick: l,
                                            text: el.intl.string(el.t.oEAioF),
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
var lr = n(824865),
    la = n(378570),
    lo = n(790535),
    ld = n(113783),
    lc = n(96566),
    lu = n(280450),
    lh = n(312006),
    lg = n(505543),
    lm = n(994500),
    lA = n(685399),
    lf = n(475889),
    lp = n(693879),
    lC = n(435470),
    lE = n(35275),
    lx = n(300596);
function lN(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: eO()(er.Xs, lx.U),
        children: (0, s.jsx)(lE.A, {
            className: er.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var lS = n(863005),
    l_ = n(669715),
    lI = n(769015),
    lb = n(217223);
function lG(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: eO()(lb.kL, t, i && lb.F4),
                children: (0, s.jsx)(lI.A, { game: n[0].application, className: lb.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: eO()(lb.kL, t, i && lb.F4),
            children: [
                (0, s.jsx)(lI.A, { game: n[0].application, className: lb.wK }),
                2 === n.length
                    ? (0, s.jsx)(lI.A, { game: n[1].application, className: lb.wK })
                    : (0, s.jsx)(e0.E, {
                          className: lb.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var lj = n(905695);
function lR(e) {
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
            muted: g,
            resolvedUnreadSetting: m,
        } = e,
        A = (0, u.bG)([n9.Ay], () => n9.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n9.Ay], () => n9.Ay.getIsMentionLowImportance(t.id)),
        p = (0, lA.Ay)(t),
        C = (0, u.bG)([O.A], () => !O.A.can(V.xBc.CONNECT, t)),
        E = (0, lf.H)(t),
        x = (0, u.bG)([iT.A], () => iT.A.hasVideo(t.id)),
        N = (0, lc.qT)(t.id) && t.isGuildStageVoice(),
        S = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, iV.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && l > 0 && (s = s > 0 ? Math.min(s, l) : l),
                    i && s === V.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: i }) > 0 &&
                !n &&
                !l
            );
        })({ channel: t, locked: C, video: (x || N) && null == E, selected: n }),
        _ = (0, u.bG)([lS.A], () => lS.A.getNewThreadCount(t.guild_id, t.id)),
        I = (0, lC.ed)(t.guild_id, t.id),
        b = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)?.features.has(V.GuildFeatures.COMMUNITY) ?? !1);
    if (iw(A)) return (0, s.jsx)(iK.A, { mentionsCount: A, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(lN, { locked: d });
    if (c) return (0, s.jsx)(Z.Lp, { text: el.intl.string(el.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!g && m === nU.e.ALL_MESSAGES && t.isForumLikeChannel() && null != _ && _ > 0)
        return (0, s.jsx)(e0.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: lj.O,
            children: el.intl.format(el.t.GkAbqY, { count: (0, Z.Gu)(_) }),
        });
    if (!g && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(e0.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, Z.Gu)(I) });
    let G = l?.length ?? 0;
    return null != r && r && S
        ? (0, s.jsx)(iF, { userCount: G, video: x || N, channel: t })
        : i && (0, l_.t)(l) && b
          ? (0, s.jsx)(Z.Lp, { text: el.intl.string(el.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(lp.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(lG, { embeddedApps: p, muted: g })
              : null;
}
var lv = n(714619);
class ly extends nL {
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
        return (0, ng.Pd)(e, iT.A, D.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return er.ZS;
        if (null != t)
            if (e > t) return er.mU;
            else return er.TR;
        return er.fx;
    }
    handleClick = () => {
        let {
                channel: e,
                locked: t,
                connected: n,
                unverifiedAccount: i,
                isSuggestedSection: l,
                openChatOnClick: s,
            } = this.props,
            r = e.getGuildId();
        (null != r && (0, i3.V)(r) && (0, i1.Ze)(r),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? iJ.A.updateChatOpen(e.id, !0) : (0, lo.av)(e)),
            __OVERLAY__ || (0, la.iN)(e.id, l ? { source: lr.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, la.iN)(e.id, n ? { source: lr.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = D.A.getGuild(t.getGuildId());
        null != i &&
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("965789"),
                    n.e("343266"),
                    n.e("198415"),
                    n.e("309004"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("419690"),
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: i, numAudience: l } = this.props;
        return (0, s.jsx)(iz.A, { channel: e, voiceStates: i, collapsed: t, tabIndex: n, numAudience: l });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(ls, {
                type: ll.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(Y.m, {
                asContainer: !0,
                text: el.intl.string(el.t.ZXxLQg),
                children: (0, s.jsx)(X.D, {
                    className: eO()(er.Xs, n ? er.Tf : null),
                    onClick: () => {
                        (iJ.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": el.intl.string(el.t.ZXxLQg),
                    children: (0, s.jsx)(iG.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: er.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? el.intl.string(el.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(tW.A, { children: e });
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
                needSubscriptionToAccess: g,
                unread: m,
                resolvedUnreadSetting: A,
                mentionCount: f,
                isFavoriteSuggestion: p,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = (0, s.jsxs)("li", {
                className: eO()(this.getModeClass(), { [er.r9]: this.isDisabled() }),
                "data-dnd-name": (0, t0.m1)(e, lt.default, lm.A),
                children: [
                    (0, s.jsx)(i$.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(Y.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nM.Ay, {
                                    ref: this.channelItemRef,
                                    className: er.Ki,
                                    iconClassName: eO()({ [lv.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? m : void 0,
                                    resolvedUnreadSetting: A,
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
                                    isFavoriteSuggestion: p,
                                    "aria-label": (0, i0.Ay)({
                                        channel: e,
                                        unread: m,
                                        mentionCount: f,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: g,
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
        return (c && (E = a(E)), d && (E = l(r(E))), E);
    }
}
let lT = k((0, iQ.F)(ly));
function lL(e) {
    var t;
    let n,
        i,
        { guild: l, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n9.Ay], () => ({ unread: n9.Ay.hasUnread(r.id), mentionCount: n9.Ay.getMentionCount(r.id) })),
        g = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(r)),
        m = (0, u.cf)([M.A, le.A, O.A], () => {
            let e = M.A.getChannel(r.parent_id),
                t = le.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != l && O.A.can(V.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    ((0, y.ai)(l.id) ||
                        (null != e ? O.A.can(V.xBc.MANAGE_CHANNELS, e) : O.A.can(V.xBc.MANAGE_CHANNELS, l))),
                canMoveMembers: O.A.can(V.xBc.MOVE_MEMBERS, r),
                locked: !O.A.can(V.xBc.CONNECT, r),
                bypassLimit: O.A.can(V.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        A = (0, u.bG)([L.A], () => L.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, lg.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)(
                    [lh.Ay, lu.default],
                    () => {
                        let n = lu.default.getId();
                        return lh.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        p = (0, u.bG)([nI.A], () => nI.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, ld.zy)(r.id, th.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, iR.A)(r.id),
        N = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(l.id, r.id)),
        S = (0, lc.xn)(r.id),
        _ = lR({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: S || (r.userLimit > 0 && r.userLimit < V.RCc),
        }),
        I = e.connected && null == _,
        b = l.features.has(V.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return (0, s.jsx)(lT, {
        categoryCollapsed: A,
        connectAction: f,
        numAudience: C,
        stageInstance: p,
        isSubscriptionGated: E,
        needSubscriptionToAccess: x,
        ...h,
        ...m,
        ...e,
        isFavoriteSuggestion: o && !N,
        forceShowButtons: I,
        openChatOnClick: b,
        channelInfo: _,
        resolvedUnreadSetting: g,
    });
}
function lM(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    ib.A.preload(n, t.id);
}
let lU = k(
        class extends nL {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = D.A.getGuild(t.getGuildId());
                null != i &&
                    (0, e1.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("603998"),
                            n.e("309004"),
                            n.e("412255"),
                            n.e("63340"),
                            n.e("430997"),
                            n.e("379995"),
                            n.e("544058"),
                            n.e("715669"),
                        ]).then(n.bind(n, 313140));
                        return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, ee.pX)(V.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: V.liQ.GUILD_CHANNEL,
                            section: V.JJy.CHANNEL_LIST,
                            object: V.ZSU.CHANNEL,
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
                        className: eO()(this.getClassName(), { [er.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t0.m1)(e, lt.default, lm.A),
                        children: (0, s.jsxs)(nM.Ay, {
                            className: er.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: lM,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? l : null,
                            "aria-label": (0, i0.Ay)({ channel: e }),
                            resolvedUnreadSetting: nU.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(i(a)) : a;
            }
        },
    ),
    lD = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, u.cf)([M.A, O.A], () => {
                let e = M.A.getChannel(t.parent_id);
                return {
                    canManageChannel: O.A.can(V.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? O.A.can(V.xBc.MANAGE_CHANNELS, e) : O.A.can(V.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(lU, { ...l, ...e });
    });
var lO = n(172218),
    lP = n(811024),
    lw = n(323073);
function lV(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: el.intl.string(el.t.Pa817q) };
    }
    return null;
}
var lH = n(3322),
    lk = n(696451),
    lB = n(763827),
    lF = n(56059),
    lK = n(163328),
    lz = n(778712),
    lW = n(730134),
    lY = n(707539),
    lX = n(486020),
    lq = n(98098);
function lZ(e) {
    let { channel: t } = e,
        i = (0, u.yK)([lS.A, n9.Ay, O.A], () => {
            let e = lS.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(lS.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(lS.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && O.A.can(V.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n9.Ay.lastMessageId(e.id),
                        i = n9.Ay.lastMessageId(t.id);
                    return tc.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? lF.b : lK.y;
    return (
        r.useEffect(() => {
            (0, lY.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: lq.SW,
            children: [
                (0, s.jsx)(e0.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: lq.DD,
                    children: t.isForumLikeChannel() ? el.intl.string(el.t.ioVdO2) : el.intl.string(el.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: lq.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, s.jsx)(l$, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, l),
                        (0, s.jsxs)(X.D, {
                            className: lq.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, la.iN)(t.id)
                                    : (0, _.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("327744"),
                                              n.e("852197"),
                                              n.e("225307"),
                                              n.e("332165"),
                                              n.e("618416"),
                                              n.e("524434"),
                                              n.e("849162"),
                                              n.e("802598"),
                                              n.e("242266"),
                                              n.e("552705"),
                                              n.e("481647"),
                                              n.e("776602"),
                                              n.e("140402"),
                                              n.e("139970"),
                                              n.e("179049"),
                                              n.e("294857"),
                                              n.e("713567"),
                                              n.e("444567"),
                                              n.e("695170"),
                                              n.e("49716"),
                                              n.e("751743"),
                                              n.e("384042"),
                                              n.e("65225"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, s.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, s.jsx)("div", {
                                    className: lq.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: lq.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: lq.Pf,
                                    children: (0, s.jsx)(e0.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: el.intl.string(el.t["4qdZ93"]),
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
function l$(e) {
    let { thread: t } = e,
        n = (0, u.bG)([lt.default], () => lt.default.getUser(t.ownerId)),
        i = (0, lY.JO)(t);
    return (0, s.jsxs)(X.D, {
        className: lq.nM,
        onClick: function (e) {
            (0, iy.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, iM.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: lq.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: lq.my,
                              src: lX.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(lW.A, { className: lq.my, user: n, size: lz._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: lq.Pf,
                children: [
                    (0, s.jsx)(e0.E, { className: lq.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(e0.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(e0.E, {
                        className: lq.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, lY.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var lJ = n(138298),
    lQ = n(940382);
function l0(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, s.jsx)(Y.m, {
        asContainer: !0,
        text: el.intl.string(el.t.ZXxLQg),
        children: (0, s.jsx)(X.D, {
            className: er.Xs,
            onClick: () => {
                (lJ.A.openChannelAsSidebar({
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    baseChannelId: t.id,
                    details: { type: lQ.kk.CHAT },
                }),
                    (0, la.iN)(t.id, n ? { source: lr.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
            },
            "aria-label": el.intl.string(el.t.ZXxLQg),
            children: (0, s.jsx)(iG.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
        }),
    });
}
var l1 = n(364522),
    l3 = n(302959),
    l2 = n(35903),
    l9 = n(970928),
    l7 = n(427262),
    l5 = n(641635);
let l6 = nc.DN.SIZE_24;
function l4(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = lX.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(Y.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: l5.P3 }),
        });
    }
    let r = i.large_image ?? i.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: i.large_text ?? "", src: (0, l9.uD)(l, r, [128, 128]), className: l5.P3 })
        : null;
}
function l8(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([lt.default], () => l.map((e) => lt.default.getUser(e)).filter(to.Vq));
    return (0, s.jsx)("div", {
        className: l5.ec,
        children: (0, s.jsxs)("div", {
            className: l5.Wh,
            children: [
                (0, s.jsx)(l4, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: l5.X0,
                    children: [
                        (0, s.jsx)(n4.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: l5.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(e0.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(e0.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, s.jsx)(nc.Ay, {
                                className: l5.TN,
                                guildId: i.guild_id,
                                users: r,
                                size: l6,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nc.mt) return null;
                                    let t = l7.Ay.getName(e);
                                    return (0, s.jsx)(
                                        Y.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, l6),
                                                alt: t,
                                                className: l5.my,
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
var se = n(584960);
function st(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        r = Array.from(i.embeddedActivity.userIds),
        a = (0, u.bG)([lt.default], () => lt.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: se.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: se.Il,
                      children: (0, s.jsx)(l8, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: se.M4,
                      children: (0, s.jsx)(l2.A, {
                          type: l3.M.VOICE_CHANNEL,
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
var sn = n(713654),
    si = n(744399);
function sl(e) {
    let { channel: t } = e,
        n = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)),
        i = (0, t0.Ay)(t),
        l = (0, sn.gU)(t, n);
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: si.hY,
              children: [
                  (0, s.jsx)(l, { className: si.p }),
                  (0, s.jsx)(e0.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: si.HA,
                      children: i,
                  }),
              ],
          });
}
var ss = n(220650);
function sr(e) {
    let { channel: t, onAction: n } = e,
        i = (0, lA.Ay)(t),
        l = Array.from((0, lA.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, s.jsxs)(l1.Ip, {
              className: ss.kL,
              children: [
                  (0, s.jsx)("div", { className: ss.oT, children: (0, s.jsx)(sl, { channel: t }) }),
                  (0, s.jsx)("div", { className: ss.zN }),
                  l.map((e, i) =>
                      (0, s.jsx)(
                          st,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
var sa = n(662980);
function so(e) {
    let { channel: t, transitionExtras: n } = e,
        i = el.intl.string(el.t.ZXxLQg);
    return (0, s.jsx)(Y.m, {
        asContainer: !0,
        text: i,
        children: (0, s.jsx)(X.D, {
            className: er.Xs,
            onClick: function () {
                ((0, sa.T)(t.id, !0), (0, la.iN)(t.id, n));
            },
            "aria-label": i,
            children: (0, s.jsx)(iG.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
        }),
    });
}
class sd extends nL {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1, isMenuItemPopoverVisible: !1 };
    channelItemRef = r.createRef();
    assignRef = (e, t) => {
        null != e && (e.current = t);
    };
    setChannelItemRef = (e) => {
        ((this.channelItemRef.current = e), this.assignRef(this.props.channelItemRef, e));
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
        (this.resetTextChannelPopoutTimers(),
            (this.exitTimer = setTimeout(() => {
                (this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 }));
            }, 250)));
    };
    handleThreadsPopoutClose = () => {
        (this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 }));
    };
    handleActivitiesPopoutClose = () => {
        (this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 }));
    };
    handleMenuItemPopoverVisibilityChange = (e) => {
        this.setState({ isMenuItemPopoverVisible: e });
    };
    handleClosePopout = () => {
        (this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose());
    };
    handleMouseDown = () => {
        (this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose());
        let { channel: e } = this.props,
            t = e.getGuildId();
        ib.A.preload(t ?? V.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != i && i.length > 0 && r && !n
              ? (0, s.jsx)(sr, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(lZ, { ...e, channel: this.props.channel });
    };
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        (null != this.enterTimer && (clearTimeout(this.enterTimer), (this.enterTimer = null)),
            null != this.exitTimer && (clearTimeout(this.exitTimer), (this.exitTimer = null)));
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props;
        if (t.type === V.rbe.GROUP_DM)
            return void (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("965789"),
                    n.e("198415"),
                    n.e("368530"),
                    n.e("566378"),
                    n.e("17244"),
                    n.e("153416"),
                    n.e("760200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === V.rbe.DM) {
            let i = lt.default.getUser(t.getRecipientId());
            null != i &&
                (0, e1.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("790484"),
                        n.e("597981"),
                        n.e("622936"),
                        n.e("216947"),
                        n.e("463317"),
                        n.e("926132"),
                        n.e("834552"),
                        n.e("146652"),
                        n.e("993103"),
                        n.e("708757"),
                        n.e("585968"),
                        n.e("393336"),
                        n.e("893190"),
                        n.e("776273"),
                        n.e("391763"),
                        n.e("955557"),
                        n.e("571210"),
                        n.e("189673"),
                        n.e("88342"),
                        n.e("311802"),
                        n.e("229787"),
                        n.e("698965"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("691994"),
                        n.e("576665"),
                        n.e("235313"),
                        n.e("474610"),
                        n.e("947502"),
                        n.e("436564"),
                        n.e("965789"),
                        n.e("245996"),
                        n.e("700792"),
                        n.e("198415"),
                        n.e("592822"),
                        n.e("529422"),
                        n.e("823427"),
                        n.e("838056"),
                        n.e("309291"),
                        n.e("508829"),
                        n.e("307059"),
                        n.e("516054"),
                        n.e("17244"),
                        n.e("298199"),
                        n.e("864464"),
                        n.e("439778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, s.jsx)(e, { ...n, user: i, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("393336"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("578580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, s.jsx)(e, { ...n, channel: t });
            });
        let i = D.A.getGuild(t.getGuildId());
        null != i &&
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("965789"),
                    n.e("343266"),
                    n.e("198415"),
                    n.e("309004"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("65200"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("248804"),
                    n.e("670954"),
                    n.e("25173"),
                ]).then(n.bind(n, 468916));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: er.yW, children: e });
    }
    renderVibegrationsChatButton(e) {
        let { channel: t, locked: n } = this.props;
        return !0 === n ? null : (0, s.jsx)(so, { channel: t, transitionExtras: e });
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
                isSubscriptionGated: g,
                isFavoriteSuggestion: m,
                subtitle: A,
                forceTopLevelThread: f,
                embeddedApps: p,
                resolvedUnreadSetting: C,
                enableActivities: E,
                isTargetInViewport: x,
                channelItemRef: N,
                isSuggestedSection: S,
            } = this.props,
            _ = N ?? this.channelItemRef,
            { isMenuItemPopoverVisible: I } = this.state,
            b = !I && a,
            G = !I && E && null != p && p.length > 0,
            j = lV(A),
            R = S ? { source: lr.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            v = (0, tK.kg)(e, "TextChannel"),
            y = (0, s.jsxs)("li", {
                className: eO()(this.getClassName(), { [er.r9]: this.isDisabled(), [er.wH]: n }),
                "data-dnd-name": (0, t0.m1)(e, lt.default, lm.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(i$.Y, {
                        targetElementRef: _,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nM.Ay, {
                                ref: this.setChannelItemRef,
                                className: er.Ki,
                                channel: e,
                                guild: t,
                                selected: !m && n,
                                muted: i,
                                unread: l,
                                mentionCount: o,
                                hasActiveThreads: r,
                                subtitle: j?.subtitle,
                                subtitleColor: j?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: m,
                                channelTypeOverride: f ? V.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: R,
                                "aria-label": (0, i0.Ay)({
                                    channel: e,
                                    unread: l,
                                    mentionCount: o,
                                    isSubscriptionGated: g,
                                    embeddedActivitiesCount: p?.length,
                                }),
                                children: [
                                    m &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    v && !m && this.renderVibegrationsChatButton(R),
                                    !m &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                e.type === V.rbe.GUILD_APP
                                                    ? (0, s.jsx)(l0, { channel: e, isSuggestedSection: S })
                                                    : null,
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    n &&
                        (0, s.jsx)(lH.A, {
                            targetElementRef: _,
                            channelType: e.type,
                            isTargetInViewport: x,
                            onVisibilityChange: this.handleMenuItemPopoverVisibilityChange,
                        }),
                ],
            });
        return h ? d(c(y)) : y;
    }
}
let sc = k(sd);
function su(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, iv.NR)(t),
        h = (0, u.cf)([n9.Ay], () => ({
            unread: n9.Ay.hasUnread(t.id),
            ackMessageId: n9.Ay.ackMessageId(t.id),
            isLowImportanceMention: n9.Ay.getIsMentionLowImportance(t.id),
        })),
        g = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(t)),
        m = (0, u.cf)([M.A, O.A], () => {
            let e = M.A.getChannel(t.parent_id);
            return {
                canManageChannel: O.A.can(V.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    ((0, y.ai)(n.id) ||
                        (null != e ? O.A.can(V.xBc.MANAGE_CHANNELS, e) : O.A.can(V.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        A = (0, u.bG)([n2.A], () => n2.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, iR.A)(t.id),
        C = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(n.id, t.id)),
        E = (0, lw.ni)(t),
        x = (0, lP.Gp)(t.id),
        N = lR({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: f,
            isNewChannel: A,
            muted: a,
            enableActivities: x,
            resolvedUnreadSetting: g,
        }),
        S = (0, lA.Ay)(t),
        [_, I] = r.useState(!1),
        b = (0, lO.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        );
    return (0, u.bG)([lB.A, lk.Ay], () => lB.A.getChannelId() !== t.id && lk.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(sc, {
              ...h,
              ...m,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: p,
              needSubscriptionToAccess: f,
              isNewChannel: A && e.canBeNewChannel,
              isFavoriteSuggestion: l && !C,
              channelIsContentGated: E,
              channelInfo: N,
              embeddedApps: S,
              resolvedUnreadSetting: g,
              hasChannelInfo: null != N,
              enableActivities: x,
              isTargetInViewport: _,
              channelItemRef: b,
          });
}
var sh = n(900797),
    sg = n(636585),
    sm = n(531685),
    sA =
        (((l = {}).HIDDEN = "hidden"),
        (l.UNREAD = "unread"),
        (l.MENTIONS = "mentions"),
        (l.VOICE_CHANNELS = "voice-channels"),
        l);
let sf = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sp = { topBar: sf, bottomBar: sf },
    sC = {},
    sE = {};
function sx(e) {
    let t = M.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? iP.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, ts.Y)(t)
    );
}
function sN(e) {
    let t = M.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = w.Ay.isGuildCollapsed(n),
        l = w.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && n9.Ay.getMentionCount(e) > 0;
}
function sS(e) {
    return (
        !w.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tu.A.getMutableParticipants(e.id, th.ip.SPEAKER).length > 0
            : ta.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function s_(e) {
    let { guildChannels: t } = tN.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sE[e] ?? []);
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
        [g, m, A] = t.getSlicedChannels(n);
    for (let e = 0; e < m.length; e++) {
        let t = m[e];
        if (
            ((sx(t.id) || o().some(t.threadIds, sx)) && (d = !1),
            (sN(t.id) || o().some(t.threadIds, sN)) && (a = !1),
            h.includes(t.id) && (c = !0),
            !d && !a && c)
        )
            break;
    }
    let f = 0,
        p = !1,
        C = 0,
        E = !1;
    if (d || a)
        for (let e = g.length - 1; e >= 0; e--) {
            let t = g[e];
            ((sx(t.id) || o().some(t.threadIds, sx)) && (null == l && (l = t.id), (p = !0)),
                (sN(t.id) || o().some(t.threadIds, sN)) &&
                    (null == i && (i = t.id),
                    (f += n9.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n9.Ay.getMentionCount))));
        }
    if (d || a)
        for (let e = 0; e < A.length; e++) {
            let t = A[e];
            if (!d && !a) break;
            ((sx(t.id) || o().some(t.threadIds, sx)) && (null == r && (r = t.id), (E = !0)),
                (sN(t.id) || o().some(t.threadIds, sN)) &&
                    (null == s && (s = t.id),
                    (C += n9.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n9.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        S = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(S, sS)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: i })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: l }));
    let _ = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !_);
    return ((sC[e] = { topBar: _ ? (N ?? sf) : sf, bottomBar: I ? (x ?? sf) : sf }), !0);
}
let sI = o().throttle(s_, 200);
function sb(e) {
    let { guildId: t } = e,
        n = D.A.getGuild(t);
    return null != n && !!n.features.has(V.GuildFeatures.COMMUNITY) && sI(t);
}
function sG(e) {
    let { id: t } = e,
        n = M.A.getChannel(t);
    if (null == n) return !1;
    let i = D.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(V.GuildFeatures.COMMUNITY) && sI(n.guild_id);
}
function sj(e) {
    let { channel: t } = e,
        n = M.A.getChannel(t.id);
    if (null == n) return !1;
    let i = D.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(V.GuildFeatures.COMMUNITY) && sI(n.guild_id);
}
function sR(e) {
    let { channelId: t } = e,
        n = M.A.getChannel(t);
    if (null == n) return !1;
    let i = D.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(V.GuildFeatures.COMMUNITY) && P.A.getGuildId() === n.guild_id && sI(n.guild_id)
    );
}
function sv(e) {
    let { guildId: t } = e;
    return null != t && sI(t);
}
class sy extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tN.A, M.A, D.A, iP.A, n9.Ay, P.A, ta.Ay, tu.A, w.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sC[e] ?? sp;
    }
}
let sT = new sy(e2.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = D.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(V.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(sE[t], n) &&
            ((sE[t] = n), s_(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return M.A.getChannel(t)?.guild_id;
                })
                .filter(to.Vq)
                .uniq()
                .forEach((e) => {
                    let t = D.A.getGuild(e);
                    null != t && t.features.has(V.GuildFeatures.COMMUNITY) && sI(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sR,
    CHANNEL_DELETE: sj,
    CHANNEL_LOCAL_ACK: sR,
    MESSAGE_ACK: sR,
    MESSAGE_CREATE: sR,
    MESSAGE_DELETE_BULK: sR,
    MESSAGE_DELETE: sR,
    PASSIVE_UPDATE_V2: function (e) {
        let t = D.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(V.GuildFeatures.COMMUNITY)) && sI(e.guildId);
    },
    RESORT_THREADS: sR,
    THREAD_CREATE: sj,
    THREAD_DELETE: sj,
    THREAD_LIST_SYNC: sb,
    THREAD_MEMBER_UPDATE: sG,
    THREAD_MEMBERS_UPDATE: sG,
    THREAD_UPDATE: sj,
    BULK_CLEAR_RECENTS: sb,
    CATEGORY_COLLAPSE_ALL: sb,
    CATEGORY_EXPAND_ALL: sb,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = P.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = sC[n];
        return null != i && "voice-channels" === i.bottomBar.mode && sI(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sv,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sv,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sI(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sv,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sv,
});
var sL = n(350536);
let sM = { friction: 30, tension: 300 };
function sU(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, u.bG)([ta.Ay], () => ta.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, ng.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, s.jsxs)(X.D, {
        className: eO()(sL.M0, sL.OF),
        onClick: a,
        children: [
            (0, s.jsx)(tJ.H, { size: "custom", className: sL.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(e0.E, {
                variant: "text-xs/semibold",
                className: sL.pM,
                children: el.intl.format(el.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(sg.A, {
                guildId: t.id,
                className: sL.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: lz._3.SIZE_16,
            }),
        ],
    });
}
function sD(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sT], () => sT.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([sm.A], () => sm.A.isFocused()),
        { mode: h, mentionCount: g, targetChannelId: m } = "bottom" === t ? o : d,
        A = h === sA.HIDDEN,
        f = (0, eQ.z)(
            {
                to: { transform: A ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sM,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), null != m && a(m));
            },
            [a, m],
        );
    return (0, s.jsx)("div", {
        className: eO()(sL.kL, { [sL.Mn]: "top" === t, [sL.sQ]: "bottom" === t }),
        children: (0, s.jsx)(eJ.animated.div, {
            className: sL.pK,
            style: f,
            "aria-hidden": A,
            children: (function () {
                switch (h) {
                    case sA.HIDDEN:
                        return (0, s.jsx)("div", { className: eO()(sL.M0, sL.Te) });
                    case sA.UNREAD:
                        return (0, s.jsxs)(X.D, {
                            className: sL.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tZ.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sL.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(sh.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sL.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(e0.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sL.pM,
                                    children: el.intl.string(el.t.FCRiT3),
                                }),
                            ],
                        });
                    case sA.MENTIONS:
                        return (0, s.jsx)(X.D, {
                            className: eO()(sL.M0, sL.vU),
                            onClick: p,
                            children: (0, s.jsx)(e0.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sL.pM,
                                children: el.intl.format(el.t.EQcLyp, { count: g }),
                            }),
                        });
                    case sA.VOICE_CHANNELS:
                        return (0, s.jsx)(sU, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sO = n(310953),
    sP = n(173860);
function sw(e) {
    let t = M.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? iP.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, ts.Y)(t)
    );
}
function sV(e) {
    let t = M.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = w.Ay.isGuildCollapsed(n),
        l = w.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && n9.Ay.getMentionCount(e) > 0;
}
let sH = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: i, guildChannelsVersion: l, ...r } = e,
        a = (0, sO.W)(n, i, l, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([sm.A], () => sm.A.isFocused());
    return (0, s.jsx)(sP.A, { ref: t, ...r, isUnread: sw, isMentioned: sV, items: a, animate: o });
});
var sk = n(81466);
function sB(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: r } = (0, u.cf)(
            [n9.Ay],
            () => ({
                hasUnread: n9.Ay.hasUnread(t.id, nU.P.GUILD_EVENT),
                mentionCount: n9.Ay.getMentionCount(t.id, nU.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([w.Ay], () => w.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, _.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("489565"),
                n.e("684231"),
                n.e("570690"),
                n.e("886631"),
                n.e("476227"),
                n.e("998835"),
                n.e("947359"),
                n.e("694303"),
                n.e("147626"),
                n.e("256373"),
                n.e("970644"),
                n.e("449347"),
                n.e("464287"),
                n.e("853934"),
                n.e("468248"),
                n.e("469647"),
                n.e("798354"),
                n.e("188353"),
                n.e("886571"),
            ]).then(n.bind(n, 318104));
            return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
        });
    }
    let d = (0, tk.Ay)(t.id),
        c = d.length > 0 ? el.intl.formatToPlainString(el.t.IBdqSu, { number: d.length }) : el.intl.string(el.t.tlopTM);
    return (0, s.jsx)(Q.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sk.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: i,
        onClick: o,
        onContextMenu: function (e) {
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(Z.hV, { className: nZ.Do, disableColor: !0, count: r }) : null,
    });
}
var sF = n(152367),
    sK = n(215181),
    sz = n(972786),
    sW = n(321593),
    sY = n(309010),
    sX = n(759967);
function sq(e) {
    let { guild: t, selected: n } = e,
        i = (0, u.bG)([sz.Ay], () => sz.Ay.getSelectedProjectId(t.id), [t.id]),
        l = (0, u.bG)([sY.Ay], () => sY.Ay.getChannelId(), []),
        r = (0, u.bG)([P.A], () => P.A.getGuildId(), []),
        { hasUnread: a, badgeCount: o } = (0, sK.OI)();
    return (0, s.jsx)(Q.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sF.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: el.intl.string(sX.default.Xmvb23),
        selected: n,
        showUnread: a,
        trailing: o > 0 ? (0, s.jsx)(iK.A, { mentionsCount: o }) : void 0,
        background: (0, s.jsx)(sW.gT, { guildId: t.id }),
        onClick: () => {
            let e = l === et.VV.VIBEGRATIONS && r === t.id;
            (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.VIBEGRATIONS, null == i || e ? null : i));
        },
    });
}
var sZ = n(845056),
    s$ = n(765379),
    sJ = n(271683),
    sQ = n(725613),
    s0 = n(857253),
    s1 = n(360729),
    s3 = n(22231),
    s2 = n(241326),
    s9 = n(750943),
    s7 = n(743674),
    s5 = n(888697),
    s6 = n(26741),
    s4 = n(493819),
    s8 = n(722884),
    re = n(433083),
    rt = n(176431);
function rn(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, bannerHash: a, canModifyHangout: o } = e,
        d = (0, s7.S)(i),
        c = (0, ey.je)(t),
        u = (0, s6.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            ((0, s6.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s8.A)({ channel: t }));
        }, [t]),
        g = r.useCallback(() => {
            ((0, s6.nK)({ guildId: t.guild_id, channelId: t.id }), (0, s5.e2)(t.id));
        }, [t.guild_id, t.id]),
        m = r.useCallback(
            (e) => {
                c
                    ? (0, e1.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: rt.rs,
        onContextMenu: m,
        children: [
            (0, s.jsx)("div", {
                className: rt.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(s4.A, { imageUrl: i, animatedUrl: l, className: rt.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: rt.n_,
                      children: [
                          (0, s.jsx)(Y.m, {
                              text: el.intl.string(re.default.XJ4UpB),
                              children: (0, s.jsx)(X.D, {
                                  className: rt.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(s3.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(Y.m, {
                              text: el.intl.string(re.default.XV4qT6),
                              children: (0, s.jsx)(X.D, {
                                  className: rt.HF,
                                  onClick: g,
                                  children: (0, s.jsx)(s2.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ri(e) {
    let { channel: t } = e,
        n = (0, s6.dX)({ guildId: t.guild_id, channelId: t.id }),
        i = r.useCallback(() => {
            ((0, s6.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s8.A)({ channel: t }));
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: rt._o,
        children: (0, s.jsxs)(X.D, {
            className: rt.hH,
            onClick: i,
            children: [
                (0, s.jsx)(s9.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(e0.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: el.intl.string(re.default.NGcIOF),
                }),
            ],
        }),
    });
}
function rl(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, ev.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, ey.W6)(t),
        a = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, ey.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return i
        ? null != c
            ? (0, s.jsx)(rn, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(ri, { channel: t })
              : null
        : null;
}
var rs = n(290863),
    rr = n(461213),
    ra = n(532622),
    ro = n(882840),
    rd = n(208971),
    rc = n(46054),
    ru = n(569381),
    rh = n(165648);
function rg(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, onClick: a } = e,
        o = (0, rd.G)((0, ro.l)(t)),
        { enableHangoutWindow: d } = (0, ev.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, ey.lr)(t),
        u = null != o && o.length > 0,
        h = (0, ra.Ay)(t, !0),
        g = null != l && l.length > 0;
    if (
        (r.useEffect(() => {
            u && ix.default.track(V.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let m = eO()(ru.Ui, n && h ? ru.BI : null);
    return u
        ? (0, s.jsx)(X.D, {
              className: m,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(e0.E, {
                  variant: "text-xs/medium",
                  className: eO()(ru.qS, rh.PT),
                  children: (0, s.jsx)(tW.A, { children: rc.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!g || i)
          ? (0, s.jsxs)(X.D, {
                className: m,
                onClick: a,
                children: [
                    (0, s.jsx)(e0.E, {
                        variant: "text-xs/medium",
                        className: ru.qS,
                        children: el.intl.string(el.t.Mgpxiw),
                    }),
                    (0, s.jsx)(s3.PencilIcon, { color: "currentColor", className: ru.rD, size: "xxs" }),
                ],
            })
          : g
            ? (0, s.jsx)(tW.A, { children: l })
            : null;
}
class rm extends nL {
    state = { shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = r.createRef();
    channelItemRef = r.createRef();
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
            mentionCount: s,
            isSuggestedSection: r,
            guildRoomsEnabled: a,
        } = this.props;
        i && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = s > 0;
        (o && iJ.A.updateChatOpen(n.id, !0),
            ij.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: lr.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = D.A.getGuild(t.getGuildId());
        null != i &&
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("965789"),
                    n.e("343266"),
                    n.e("198415"),
                    n.e("309004"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("419690"),
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, ng.Pd)(e, iT.A, D.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return er.ZS;
        if (null != t)
            if (e > t) return er.mU;
            else return er.TR;
        return er.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        (null != t && (0, i3.V)(t) && (0, i1.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sJ.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = lV(this.props.subtitle)?.subtitle,
            { hovered: i } = this.state;
        return (0, s.jsx)(rg, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: i,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, s.jsx)(iz.A, {
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
        return !(null != n && n.length > 0) || i ? null : (0, s.jsx)(rl, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(ls, { type: ll.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: i } = this.props;
        if (!t)
            return (0, s.jsx)(Y.m, {
                asContainer: !0,
                text: el.intl.string(el.t.ZXxLQg),
                children: (0, s.jsx)(X.D, {
                    className: eO()(er.Xs, n ? er.Tf : null),
                    onClick: () => {
                        (iJ.A.updateChatOpen(e.id, !0),
                            (0, la.iN)(e.id, i ? { source: lr.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": el.intl.string(el.t.ZXxLQg),
                    children: (0, s.jsx)(iG.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: er.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? el.intl.string(el.t.rZfiNq) : null;
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
                connectChannelDropTarget: o,
                connectChannelDragSource: d,
                connectUserDropTarget: c,
                connectDragPreview: u,
                canReorderChannel: h,
                canMoveMembers: g,
                showTutorial: m,
                hasActiveEvent: A,
                embeddedApps: f,
                isSubscriptionGated: p,
                isFavoriteSuggestion: C,
                withGuildIcon: E,
                hasStartTime: x,
                voiceChannelStartTime: N,
                shouldHighlightChannel: S,
                shouldUseAnimatedWaveform: _,
                voiceStates: I,
            } = this.props,
            { shouldShowGuildVerificationPopout: b } = this.state,
            G = S || _,
            j = (0, s.jsxs)("li", {
                ref: this.ref,
                className: eO()(this.getModeClass(), { [er.r9]: this.isDisabled(), [er.fy]: S }),
                "data-dnd-name": (0, t0.m1)(e, lt.default, lm.A),
                children: [
                    S &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: er.UQ }),
                                (0, s.jsx)("div", { className: er.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(i$.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(Y.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nM.Ay, {
                                        ref: this.channelItemRef,
                                        className: er.Ki,
                                        iconClassName: eO()({ [er.Gj]: A || x || G }),
                                        hasActiveEvent: A,
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
                                        connectDragPreview: u,
                                        isFavoriteSuggestion: C,
                                        "aria-label": (0, i0.Ay)({
                                            channel: e,
                                            unread: i,
                                            mentionCount: r,
                                            voiceStates: I,
                                            activityNames: [
                                                ...new Set([
                                                    ...f.map((e) => e.application.name),
                                                    ...this.props.nonEmbeddedActivityNames,
                                                ]),
                                            ],
                                            isSubscriptionGated: p,
                                            voiceChannelStartTime: N,
                                        }),
                                        withGuildIcon: E,
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
            g && (j = c(j)),
            h && (j = o(d(j))),
            m &&
                (j = (0, s.jsx)(ns.A, {
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
let rA = k((0, iQ.F)(rm));
function rf(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n9.Ay], () => ({ unread: n9.Ay.hasUnread(n.id), mentionCount: n9.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([M.A, le.A, O.A], () => {
            let e = M.A.getChannel(n.parent_id),
                l = le.A.getCheck(n.guild_id);
            return {
                canManageChannel: O.A.can(V.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    ((0, y.ai)(t.id) ||
                        (null != e ? O.A.can(V.xBc.MANAGE_CHANNELS, e) : O.A.can(V.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: O.A.can(V.xBc.MOVE_MEMBERS, n),
                locked: !O.A.can(V.xBc.CONNECT, n),
                bypassLimit: O.A.can(V.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
            };
        }),
        g = (0, u.bG)([iT.A], () => iT.A.hasVideo(n.id)),
        { enabled: m } = (0, s1.mf)({ guildId: t.id, location: "VoiceChannel" }),
        A = (0, lA.Ay)(n),
        f = (0, u.yK)(
            [rr.A, rs.A, lu.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = lu.default.getId(),
                    t = [];
                for (let { user: i } of o)
                    for (let l of i.id === e ? rr.A.getActivities() : rs.A.getActivities(i.id, n.guild_id))
                        !(0, sZ.N)(l) || (0, s$.A)(l) || null == l.name || t.includes(l.name) || t.push(l.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, t0.Ay)(n),
        C = (0, tk.Qs)(n.id),
        E = (0, u.bG)([sQ.A], () => sQ.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, iR.A)(n.id),
        S = (0, s0.A)(),
        _ = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(t.id, n.id)),
        I = e.connected || S?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, nu.b)(t.id, "VoiceChannel"),
        j = null != o && o.length > 0,
        R = b && j,
        v = G && j,
        T = lR({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        L = I && null == T;
    return (0, s.jsx)(rA, {
        channelName: p,
        embeddedApps: A,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: V.$pd.PLAYING,
        video: g,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...h,
        ...e,
        connected: I,
        isFavoriteSuggestion: l && !_,
        forceShowButtons: L,
        channelInfo: T,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != T,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: R,
        shouldUseAnimatedWaveform: v,
        guildRoomsEnabled: m,
    });
}
n(131955);
function rp(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rC extends r.PureComponent {
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
        (this.setState({ initialized: !0 }), (0, tS.Ei)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tC.A.getGuildDimensions(i);
        (null != n
            ? (this.scrollToChannel(n), E.A.clearChannelListScrollTo(i))
            : i !== e.guildId
              ? null != r && this.scrollTo(r)
              : l !== e.selectedChannelId
                ? this.scrollToChannel(l)
                : !t.initialized &&
                  s &&
                  (null == r && null != l
                      ? this.scrollToChannel(l, !1, 8, this.handleListScroll)
                      : this.scrollTo(r ?? 0, this.handleListScroll)),
            this.testShouldSkipTutorial());
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    setListRef = (e) => {
        let { ref: t } = this.context;
        ((t.current = e?.getScrollerNode() ?? null), (this._list = e));
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
                    a = s.threadOffset * rp(r);
                l.scrollIntoViewRect({ start: e + a, end: e + a + rp(r), padding: n, animate: t, callback: i });
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
            if ((0, g.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
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
            (null != e && e(t), this.updateChannelListScroll(n));
        }
        (null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(),
            null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState());
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
                if (i < tx.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, tp.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, ts.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, a.throttle)((e) => {
        E.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props,
            l = "compact" === i ? 8 : 12;
        if (e === tx.PU) return l;
        if (e === tx.bK) return t.features.has(V.GuildFeatures.HUB) ? 0 : l;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let i = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == i || i.record.type === V.rbe.GUILD_CATEGORY ? 9 : 25;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nm(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tx.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                            return !0 !== L.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!O.A.can(V.xBc.VIEW_CHANNEL, e)) return !1;
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
            a = rp(r);
        if (e === tx.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tz.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : e.getRow(t) === tz.n.GUILD_ONBOARDING_SETUP_PROGRESS
                    ? e.getRows().length > 1
                        ? 63
                        : 51
                    : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === V.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += rp(t);
            let n = i[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eL.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, ev.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, ey.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
                }
            }
            d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != d.subtitle || s === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = i[d.id] ?? [],
                t = l[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                (d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8));
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
        (null != n && s.includes(n) && (l = (0, eM.xb)(t)), (0, eM.DD)(e.id, s, l));
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
            nd,
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
                    case tx.PU:
                        return "hoisted-spacer";
                    case tx.bK:
                        return "uncategorized-spacer";
                    case tx.HP:
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
                stageChannelSpeakerVoiceStates: g,
                optInEnabled: m,
                withGuildIcon: A,
            } = this.props;
        if (t === tx.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tz.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        eT.A,
                        { guild: i, channel: tE.Ay.getDefaultChannel(i.id) },
                        tz.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tz.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, s.jsx)(tl, { guild: i, withMargin: l.length > 1 }, tz.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tz.n.GUILD_SPACE:
                    return (0, s.jsx)(eR, { guild: i, selected: a === et.VV.GUILD_SPACE }, tz.n.GUILD_SPACE);
                case tz.n.GUILD_HOME:
                    return (0, s.jsx)(n6, { guild: i, selected: a === et.VV.GUILD_HOME }, tz.n.GUILD_HOME);
                case tz.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sB,
                        { guild: i, selected: a === tz.n.GUILD_SCHEDULED_EVENTS },
                        tz.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tz.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        ih,
                        { guild: i, selected: a === et.VV.ROLE_SUBSCRIPTIONS },
                        tz.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tz.n.GUILD_SHOP:
                    return (0, s.jsx)(iI, { guild: i, selected: a === et.VV.GUILD_SHOP }, tz.n.GUILD_SHOP);
                case tz.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nJ, { guild: i, selected: a === et.VV.GAME_SHOP }, tz.n.GUILD_GAME_SHOP);
                case tz.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(sq, { guild: i, selected: a === et.VV.VIBEGRATIONS }, tz.n.GUILD_VIBEGRATIONS);
                case tz.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(il, { guild: i });
                case tz.n.GUILD_ONBOARDING_SETUP_PROGRESS:
                    return (0, s.jsx)(ic, { guild: i }, tz.n.GUILD_ONBOARDING_SETUP_PROGRESS);
                case tz.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n7,
                        { guild: i, selected: a === et.VV.CHANNEL_BROWSER || a === et.VV.CUSTOMIZE_COMMUNITY },
                        tz.n.CHANNELS_AND_ROLES,
                    );
                case tz.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nD,
                        { guild: i, selectedChannelId: a, disableManageChannels: h },
                        tz.n.GUILD_DIRECTORY,
                    );
                case tz.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        eE,
                        { guild: i, selected: a === et.VV.MEMBER_SAFETY },
                        tz.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tz.n.GUILD_BOOSTS:
                    return (0, s.jsx)(e$, { guildId: i.id, selected: a === et.VV.GUILD_BOOSTS }, tz.n.GUILD_BOOSTS);
                case tz.n.GAME_SERVERS:
                    return (0, s.jsx)(eh, { guildId: i.id, selected: a === et.VV.GAME_SERVERS }, tz.n.GAME_SERVERS);
                case tz.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        ea,
                        { guildId: i.id, selected: a === et.VV.GAME_SERVERS },
                        tz.n.GAME_SERVERS_EMPTY,
                    );
                case tz.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        ir,
                        { guild: i, selected: a === et.VV.GUILD_OFFICIAL_MESSAGES },
                        tz.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tx.xu,
            x = C.record,
            N = `${t}${C.id}`;
        switch (x.type) {
            case V.rbe.GUILD_ANNOUNCEMENT:
            case V.rbe.GUILD_TEXT:
            case V.rbe.GUILD_FORUM:
            case V.rbe.GUILD_MEDIA:
            case V.rbe.DM:
            case V.rbe.GROUP_DM:
            case V.rbe.GUILD_APP:
                return (0, s.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, s.jsx)(su, {
                                channel: x,
                                guild: i,
                                position: C.position,
                                selected: a === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: m && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            C.threadCount > 0
                                ? (0, s.jsx)(iZ, {
                                      withGuildIcon: A,
                                      channel: x,
                                      sortedThreadIds: C.threadIds,
                                      selectedChannel: null != l && (l.id === C.id || l.parent_id === x.id) ? l : null,
                                      selectedVoiceChannelId: o?.parent_id === x.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    N,
                );
            case V.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    lL,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id] ?? [],
                        speakerVoiceStates: g[C.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case V.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    rf,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id],
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        showTutorial: C.isFirstVoiceChannel,
                        isFavoriteCategory: E,
                        withGuildIcon: A,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case V.rbe.GUILD_STORE:
                return (0, s.jsx)(lD, { channel: x, guild: i, position: C.position, selected: a === C.id }, N);
            case V.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(nl, { channel: x }, `readonly-${x.id}`);
            case V.rbe.PUBLIC_THREAD:
            case V.rbe.PRIVATE_THREAD:
            case V.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    su,
                    {
                        channel: x,
                        guild: i,
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
                guildChannelsVersion: i,
                voiceStates: l,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, s.jsx)(
            nf,
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
                let { hasDivider: i, canHaveVoiceSummary: l } = nm(t, n, e);
                return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: l, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: no.Eo,
            children: (0, s.jsx)(sH, {
                ref: this.unreadTopRef,
                textUnread: el.intl.string(el.t.FCRiT3),
                textMention: el.intl.string(el.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: no.Vq,
                barClassName: no.bu,
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
        return (0, s.jsx)(sH, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: el.intl.string(el.t.FCRiT3),
            textMention: el.intl.string(el.t["8zH0LJ"]),
            hide: null == i && l,
            className: no.di,
            barClassName: no.bu,
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
        if (e !== tx.PU) {
            if (null == t)
                return e === tx.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tx.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: i } = this.props,
            l = {};
        (0, y.ai)(n) && (l["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === i ? 8 : 12;
        return (0, s.jsx)(m.sk, {
            children: (t) =>
                (0, s.jsx)(
                    A.OZ,
                    {
                        ref: this.setListRef,
                        className: no.XG,
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
                        innerAriaLabel: el.intl.string(el.t.OGiMXJ),
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
        if (!tA.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tm.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || tm.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(z.V0, {
            children: (i) =>
                (0, s.jsx)(f.F, {
                    component: (0, s.jsx)(p.A, {
                        children: (0, s.jsx)(f.H, { id: i, children: el.intl.string(el.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: no.Eo,
                                      children: (0, s.jsx)(sD, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sD, {
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
let rE = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        l = (0, u.bG)([B.Ay], () => B.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, K.Ay)(F.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([M.A], () => M.A.getChannel(n)),
        h = (0, u.bG)([M.A], () => M.A.getChannel(i)),
        g = (0, u.bG)([P.A], () => P.A.getGuildId()),
        m = (0, eU.jN)(t),
        A = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = A.current;
            null != n &&
                (V.Ut1.test(t) || (0, et.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        p = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        E = (0, c.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: l,
            setFocus: f,
            scrollToStart: p,
            scrollToEnd: C,
        }),
        N = E.setFocus;
    r.useEffect(() => {
        null != n && N(n);
    }, [n, N]);
    let S = (function (e) {
        let [t] = (0, u.bG)(
            [tu.A, M.A, tr.A],
            () => {
                let t;
                return [
                    (t = (0, y.ai)(e)
                        ? tc.default
                              .keys(tr.A.getFavoriteChannels())
                              .map((e) => M.A.getChannel(e))
                              .filter(to.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tu.A.getChannels(e)).reduce((e, t) => {
                        let n = tu.A.getMutableParticipants(t.id, th.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === th.wY.VOICE).map(tg)), e);
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tu.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            td.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(K.f5, {
        value: a,
        children: (0, s.jsx)(x.A, {
            section: V.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsxs)(d.hD, {
                navigator: E,
                children: [
                    (0, s.jsx)(tf.q, { containerRef: E.containerProps.ref, itemType: H }),
                    (0, s.jsx)(rC, {
                        ...e,
                        listNavigator: E,
                        ref: A,
                        selectedChannel: o,
                        selectedVoiceChannel: h,
                        stageChannelSpeakerVoiceStates: S,
                        selectedGuildId: g,
                        optInEnabled: m,
                    }),
                ],
            }),
        }),
    });
};
function rx(e) {
    let t = (function (e) {
            var t, n;
            let i,
                l,
                s =
                    ((t = e.id),
                    (i = (0, tH.A)(t)),
                    (l = (0, tk.Ay)(t)),
                    !(0, u.bG)(
                        [D.A],
                        () => {
                            if (null == t) return !1;
                            let e = D.A.getGuild(t);
                            return e?.features.has(V.GuildFeatures.HUB) ?? !1;
                        },
                        [t],
                    ) &&
                        (i || l.length > 0)),
                r = (0, tR.W)(e.id),
                a = (0, tV.vz)(e.id),
                o = (0, tI.r)(e),
                d = (0, tF.jz)(e),
                c = (0, tL.d)(e.id),
                h = (0, t_.bG)([ty.h], () => ty.h.getNewMemberActions(e.id), [e.id]),
                g = (0, tK.by)(e, "useGuildActionRows"),
                m = (0, tw.A)(e.id),
                A = (0, tT.jY)(e.id),
                f = (0, tO.ye)(e.id),
                p = ((n = e.id), (0, u.bG)([tD], () => tD.isComplete(n), [n])),
                C = (0, tv.fw)(e.id),
                E = (0, eb.Uq)(e.id, "useGuildActionRows"),
                x = [],
                N = e.features.has(V.GuildFeatures.HUB),
                S = e.features.has(V.GuildFeatures.COMMUNITY),
                _ = e.features.has(V.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                I = (0, e4.A)(e.id),
                b = te(e),
                G = (0, tB.bW)(e.id, "useGuildActionRows"),
                j = (0, tG.C$)(e.id, "useGuildActionRows"),
                R = e.features.has(V.GuildFeatures.GAME_SERVERS),
                v = (0, tj.N)("useGuildActionRows"),
                [y] = (0, J.kn)(j && v && !R ? [W.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                (N && x.push(tz.n.GUILD_HUB_HEADER_OPTIONS),
                !I ||
                    (0, tb.j)(e.id) ||
                    f ||
                    p ||
                    !tP.getConfig({ location: "useGuildActionRows" }).showSetupProgressRow)
                    ? !A && c && m && null != h && h.length > 0
                        ? x.push(tz.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                        : e.premiumProgressBarEnabled && b > 0 && x.push(tz.n.GUILD_PREMIUM_PROGRESS_BAR)
                    : x.push(tz.n.GUILD_ONBOARDING_SETUP_PROGRESS),
                !N && c && x.push(tz.n.GUILD_HOME),
                E && x.push(tz.n.GUILD_SPACE),
                s && x.push(tz.n.GUILD_SCHEDULED_EVENTS),
                !N && S && x.push(tz.n.CHANNELS_AND_ROLES),
                a && x.push(tz.n.GUILD_ROLE_SUBSCRIPTIONS),
                o && x.push(tz.n.GUILD_SHOP),
                d && x.push(tz.n.GUILD_GAME_SHOP),
                ((C && (S || _)) || (r && e.features.has(V.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    x.push(tz.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                I && x.push(tz.n.GUILD_BOOSTS),
                G && x.push(tz.n.GUILD_OFFICIAL_MESSAGES),
                j && (R ? x.push(tz.n.GAME_SERVERS) : null != y && x.push(tz.n.GAME_SERVERS_EMPTY)),
                g && x.push(tz.n.GUILD_VIBEGRATIONS),
                x
            );
        })(e.guild),
        n = (0, u.cf)([tN.A], () => tN.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: i } = (0, C.wR)();
    return (0, s.jsx)(rE, { ...e, ...n, density: i });
}
