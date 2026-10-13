let i;
(n.d(t, { B: () => rp, i: () => rf }), n(321073));
var l,
    s,
    r = n(477900),
    a = n(582128),
    o = n(435558),
    d = n.n(o),
    c = n(837381),
    u = n(887129),
    h = n(17928),
    m = n(661531),
    g = n(715828),
    A = n(312138),
    f = n(475825),
    p = n(707554),
    C = n(140735),
    E = n(38021),
    x = n(951001),
    N = n(820284),
    _ = n(949152),
    S = n(739822),
    I = n(192308),
    b = n(999903),
    G = n(44757),
    j = n(97587),
    v = n(838533),
    R = n(79843),
    y = n(466152),
    M = n(5180),
    T = n(770376),
    L = n(924985),
    U = n(734057),
    D = n(769765),
    O = n(71393),
    P = n(576705),
    V = n(967198),
    w = n(543465),
    H = n(652215);
let k = "DRAGGABLE_GUILD_CHANNEL";
function B(e) {
    let t = e.getItem();
    return null == t || null == t.isChannelDrag
        ? { sorting: !1, sortingType: null, sortingPosition: null, sortingParent: null }
        : {
              sorting: !0,
              sortingType: t.type,
              sortingPosition: e.isOver() && e.canDrop() ? t.position : null,
              sortingParent: e.isOver() && e.canDrop() ? t.parentId : null,
          };
}
function F(e) {
    return a.memo(function (t) {
        let { channel: i, position: l } = t,
            [s, a] = (0, _.H)(
                () => ({
                    accept: k,
                    drop: (e) =>
                        (function (e, t) {
                            let { channel: n, position: i } = e,
                                l = V.A.getGuildId(),
                                s = (0, G.QO)((0, v.A)(l, t.id), t.position, n, i, t.channelList);
                            if (null == s) return;
                            let r = (0, v.A)(l, t.id);
                            if (null == r) return;
                            let a = D.A.getCategories(l),
                                o = (0, G.RL)(r, (0, v.A)(l, s.referenceId), s.parentId, a);
                            (0, y.A)(l, r, s.parentId, o);
                        })({ channel: i, position: l }, e),
                    canDrop: (e) =>
                        (function (e, t) {
                            let { channel: n, position: i } = e,
                                l = U.A.getChannel(t.id);
                            if (null == l) return !1;
                            let s = (0, G.QO)(U.A.getChannel(t.id), t.position, n, i, t.channelList);
                            if (null == s) return !1;
                            if ((0, M.ai)(V.A.getGuildId())) return !0;
                            if (w.Ay.isFavorite(t.guildId, n.id)) return !1;
                            let r = O.A.getGuild(t.guildId);
                            if (null == r) return !1;
                            let a = U.A.getChannel(s.parentId),
                                o = (0, j.Ay)((0, j.Fd)(l), r),
                                d = (0, j.Ay)(a, r);
                            return o && d;
                        })({ channel: i, position: l }, e),
                    collect: B,
                }),
                [i, l],
            ),
            [, o, d] = (0, S.i)(
                () => ({
                    type: k,
                    canDrag: () =>
                        (function (e) {
                            let t = V.A.getGuildId(),
                                i = (0, R.A)(e, t);
                            if (null == i) return !0;
                            switch (i.reason) {
                                case "no-permission":
                                default:
                                    return !1;
                                case "opt-in-channels":
                                    return (
                                        (0, T.A)() &&
                                            (0, I.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("57729"),
                                                    n.e("24848"),
                                                ]).then(n.bind(n, 354643));
                                                return (t) => (0, r.jsx)(e, { ...t });
                                            }),
                                        !1
                                    );
                                case "pinned-channel":
                                    return (
                                        (0, I.openModalLazy)(async () => {
                                            let { default: t } = await n.e("280545").then(n.bind(n, 933752));
                                            return (n) => (0, r.jsx)(t, { ...n, guildId: i.guild.id, channelId: e.id });
                                        }),
                                        !1
                                    );
                            }
                        })(i),
                    item: () =>
                        (function (e, t) {
                            let { id: n, parent_id: i, guild_id: l, type: s } = e,
                                r = V.A.getGuildId(),
                                a = D.A.getCategories(r);
                            return {
                                isChannelDrag: !0,
                                id: n,
                                position: t,
                                parentId: i,
                                type: s,
                                channelList: (0, b.A)(a._categories, a, (e) => {
                                    let { channel: t } = e;
                                    return t.type === H.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                        ? !!(0, M.ai)(r) ||
                                              (P.A.can(H.xBc.MANAGE_CHANNELS, t) && P.A.can(H.xBc.VIEW_CHANNEL, t))
                                        : !L.A.isCollapsed(t.parent_id);
                                }),
                                guildId: l,
                            };
                        })(i, l),
                }),
                [i, l],
            );
        return (0, r.jsx)(e, {
            ...t,
            ...s,
            connectChannelDropTarget: a,
            connectChannelDragSource: o,
            connectDragPreview: d,
        });
    });
}
var z = n(775602),
    K = n(793574),
    W = n(688810),
    Y = n(915089),
    X = n(554146),
    q = n(866665),
    J = n(939249),
    Z = n(789645),
    $ = n(62010),
    Q = n(687966),
    ee = n(131607),
    et = n(652793),
    en = n(976860),
    ei = n(746080),
    el = n(49999),
    es = n(394107),
    er = n(660183),
    ea = n(275833),
    eo = n(964306);
let ed = a.memo(function (e) {
    let { guildId: t, selected: i } = e,
        [l, s] = (0, ee.ww)([X.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === X.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = a.useCallback(() => {
            (s(el.i.USER_DISMISS), (0, en.pX)(H.BVt.CHANNEL(t, ei.VV.GAME_SERVERS)));
        }, [t, s]),
        c = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, I.openModalLazy)(async () => {
                        let { default: e } = await n.e("726702").then(n.bind(n, 758909));
                        return (n) => (0, r.jsx)(e, { ...n, guildId: t });
                    }));
            },
            [t],
        ),
        u = (0, r.jsxs)("div", {
            className: ea.c,
            children: [
                (0, r.jsx)("div", {
                    className: eo.Xs,
                    children: (0, r.jsx)(q.m, {
                        text: er.intl.string(er.t.fgq1gs),
                        position: "top",
                        children: (0, r.jsx)(J.D, {
                            onClick: c,
                            "aria-label": er.intl.string(er.t.fgq1gs),
                            children: (0, r.jsx)(Z.P, { size: "xs", color: "currentColor", className: eo.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, r.jsx)("div", {
                        className: eo.yW,
                        children: (0, r.jsx)($.E, { type: "new", variant: "primary" }),
                    }),
            ],
        });
    return (0, r.jsx)(et.G, {
        className: eo.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, r.jsx)(Q.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
        text: er.intl.string(es.default.vCzwM7),
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var ec = n(361158),
    eu = n(270533),
    eh = n(186111);
let em = a.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, I.useHasAnyModalOpen)(),
        l = (0, h.bG)([eh.A], () => eh.A.hasLayers()),
        s = (0, ec.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ee.ww)([X.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === X.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [u, m] = (0, ee.ww)(i || l || s || !c ? [] : [X.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = a.useCallback(
            (e) => {
                (d(e), m(e));
            },
            [d, m],
        ),
        A = a.useCallback(() => {
            (g(el.i.USER_DISMISS), (0, en.pX)(H.BVt.CHANNEL(t, ei.VV.GAME_SERVERS)));
        }, [t, g]),
        f = a.useRef(null),
        p = u === X.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = a.useCallback(() => (0, r.jsx)(eu.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(et.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) =>
                    (0, r.jsx)(Q.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
                text: er.intl.string(es.default.vCzwM7),
                selected: n,
                onClick: A,
                trailing: c ? (0, r.jsx)($.E, { type: "new", variant: "primary" }) : null,
            }),
            p && C(),
        ],
    });
});
var eg = n(177953),
    eA = n(812993),
    ef = n(624458),
    ep = n(844944),
    eC = n(513461),
    eE = n(663997),
    ex = n(221950);
function eN(e) {
    let { guild: t, selected: n } = e,
        i = (0, h.bG)([P.A], () => P.A.can(H.xBc.KICK_MEMBERS, t)),
        l = (0, h.bG)([ep.A], () => ep.A.getSubmittedGuildJoinRequestTotal(t.id)),
        s = i ? (l ?? 0) : 0;
    a.useEffect(() => {
        i &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            ef.A.fetchGuildJoinRequests({ guildId: t.id, status: eC.B5.SUBMITTED, limit: eE.L });
    }, [i, t]);
    let o = a.useCallback(() => {
        (0, ex.aZ)(t.id);
    }, [t.id]);
    return (0, r.jsx)(et.G, {
        id: `members-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(eg.n, { size: "md", color: "currentColor", className: e }),
        text: er.intl.string(er.t.oclz3Z),
        selected: n,
        onClick: o,
        trailing: s > 0 ? (0, r.jsx)(eA.hV, { count: s }) : null,
    });
}
var e_ = n(43105),
    eS = n(332837),
    eI = n(93675),
    eb = n(942857),
    eG = n(313627),
    ej = n(61567),
    ev = n(151098);
function eR(e) {
    let { guild: t, selected: i } = e,
        l = (0, eb.A)(),
        [s, o] = (0, ee.kn)(l ? [] : [X.M.GUILD_SPACE_COACHMARK], { bypassAutoDismiss: !0 }),
        d = s === X.M.GUILD_SPACE_COACHMARK,
        c = a.useRef(null),
        u = (0, eG.mN)(t),
        h = a.useCallback(() => {
            (o(el.i.USER_DISMISS), (0, en.pX)(H.BVt.CHANNEL(t.id, ei.VV.GUILD_SPACE)));
        }, [t.id, o]),
        m = a.useCallback(() => {
            (o(el.i.TAKE_ACTION), (0, en.pX)(H.BVt.CHANNEL(t.id, ei.VV.GUILD_SPACE)));
        }, [t.id, o]),
        g = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, I.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("8422"),
                            n.e("37786"),
                            n.e("303807"),
                            n.e("842987"),
                            n.e("421410"),
                        ]).then(n.bind(n, 643065));
                        return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
                    }));
            },
            [t.id],
        ),
        A = d ? (0, r.jsx)($.E, { type: "new", variant: "primary" }) : null,
        f = u
            ? (0, r.jsxs)("div", {
                  className: ev.c,
                  children: [
                      (0, r.jsx)("div", {
                          className: eo.Xs,
                          children: (0, r.jsx)(q.m, {
                              text: er.intl.string(er.t.R9GHya),
                              position: "top",
                              children: (0, r.jsx)(J.D, {
                                  onClick: g,
                                  "aria-label": er.intl.string(er.t.R9GHya),
                                  children: (0, r.jsx)(Z.P, { size: "xs", color: "currentColor", className: eo.gE }),
                              }),
                          }),
                      }),
                      null != A ? (0, r.jsx)("div", { className: eo.yW, children: A }) : null,
                  ],
              })
            : A;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(et.G, {
                ref: c,
                className: u ? eo.Ki : void 0,
                id: `guild-space-tab-${t.id}`,
                renderIcon: (e) => (0, r.jsx)(eS.HomeIcon, { size: "md", color: "currentColor", className: e }),
                text: er.intl.string(er.t["04IVMq"]),
                selected: i,
                onClick: h,
                trailing: f,
            }),
            d
                ? (0, r.jsx)(e_.A, {
                      targetElementRef: c,
                      title: er.intl.string(ej.default["+OEqVQ"]),
                      body: er.intl.string(ej.default["BP//Ot"]),
                      graphic: {
                          type: "rive",
                          rive: eI.f,
                          aspectRatio: "16/9",
                          props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
                      },
                      actions: [{ text: er.intl.string(er.t.RzWDqY), variant: "primary", onClick: m }],
                      shouldShow: !0,
                      position: "right",
                      align: "top",
                      alignmentStrategy: "edge",
                      caretConfig: { align: "start" },
                      scrollBehavior: "close",
                      onRequestClose: () => o(el.i.USER_DISMISS),
                  })
                : null,
        ],
    });
}
var ey = n(581007),
    eM = n(522435),
    eT = n(285406),
    eL = n(582904),
    eU = n(419534),
    eD = n(395504),
    eO = n(503698),
    eP = n.n(eO),
    eV = n(695366),
    ew = n(104510),
    eH = n(544048),
    ek = n(868652),
    eB = n(379229),
    eF = n(482487),
    ez = n(914732),
    eK = n(828162),
    eW = n(877624),
    eY = n(549996),
    eX = n(25525),
    eq = n(247806);
function eJ(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eB.cD.WARNING:
            return (0, r.jsx)(eV.E, { color: m.A.colors.STATUS_WARNING, size: "sm" });
        case eB.cD.UNREAD:
            return (0, r.jsx)(eA.hV, { count: t.count });
        default:
            return null;
    }
}
let eZ = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    e$ = a.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, ez.Ay)(t),
            { showHighlight: s, markAsDismissed: o } = (function () {
                let e = (0, eY.c)(eW.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, i] = (0, ee.Cc)(t ? X.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === X.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: i };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, eF.A)(
                t,
                l?.indicator != null || l?.popout != null,
            ),
            u = a.useCallback(() => {
                (c(),
                    (0, ek.Zm)(t),
                    (0, eK.A)(t, K.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    l?.popout?.markAsDismissed(el.i.INDIRECT_ACTION));
            }, [t, c, l]),
            g = a.useRef(null),
            A = (0, I.useModalsStore)(I.hasAnyModalOpenSelector),
            f = (0, h.bG)([eh.A], () => eh.A.hasLayers()),
            p = (0, ec.xr)((e) => e.fullScreenLayers.length > 0),
            C = A || f || p,
            E = a.useCallback(() => {
                if (l?.popout == null || C) return null;
                switch (l?.popout?.type) {
                    case eB.o.LEVEL_REACHED:
                        return (0, r.jsx)(eu.HW, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.PERKS_AVAILABLE:
                        return (0, r.jsx)(eu.UB, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.PERKS_PURCHASABLE:
                        return (0, r.jsx)(eu.lw, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(eu.bo, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.BOOST_TO_UNLOCK:
                        return (0, r.jsx)(eu.Gw, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.EXPIRING_PERK:
                        return (0, r.jsx)(eu.Mr, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eB.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(eu.jz, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.GAME_SERVER_NEW_GAMES:
                        return (0, r.jsx)(eu.YX, { guildId: t, channelRowRef: g, ...l.popout });
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, l?.popout, g, C]);
        a.useEffect(() => {
            i && s && o(el.i.AUTO_DISMISS);
        }, [i, s, o]);
        let x = l?.popout != null || s,
            [N, _] = a.useState(null);
        a.useEffect(() => {
            x || _(null);
        }, [x]);
        let S = a.useCallback((e) => {
            _(e);
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(et.G, {
                    ref: g,
                    className: eq.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, r.jsx)(ew._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        x &&
                        (0, r.jsx)("div", {
                            className: eq.Fi,
                            children: (0, r.jsx)(eH.t, {
                                nextScene: null == N ? "animation" : "LOOP",
                                className: eq.UU,
                                sceneSegments: eZ,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: S,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: eP()({ [eq.A7]: l?.showUnread === !0 }),
                        children: er.intl.string(eX.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: u,
                    showUnread: l?.showUnread === !0,
                    trailing: d
                        ? (0, r.jsx)(eA.Lp, {
                              text: er.intl.string(er.t.y2b7CA),
                              color: m.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, r.jsx)(eJ, { indicator: l?.indicator }),
                }),
                E(),
            ],
        });
    });
var eQ = n(202091),
    e0 = n(717421),
    e1 = n(834730),
    e3 = n(442433),
    e2 = n(230135),
    e9 = n(73153);
let e5 = {};
class e6 extends h.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (e5 = e);
    }
    getState() {
        return e5;
    }
    getCountForGuild(e) {
        return e5[e];
    }
}
let e7 = new e6(e9.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        e5 = { ...e5, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        e5 = {};
    },
});
var e4 = n(147925),
    e8 = n(363487),
    te = n(568065);
function tt(e) {
    return (0, a.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(H.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : H.M2T[H.TVA.TIER_3],
            n = Object.values(te.sy),
            i = Object.values(te.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var tn = n(196577);
let ti = (e) => {
    let { appliedBoostCount: t, maxBoostCount: n, premiumSubscriberCount: i, className: l, ref: s } = e,
        o = t >= n,
        d = Math.min((t / n) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, e0.z)(
            () => ({ width: t === i ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [t, i],
        );
    return (
        a.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, r.jsxs)("div", {
            ref: s,
            className: tn.hQ,
            children: [
                (0, r.jsx)("div", { className: eP()(tn.L$, l) }),
                (0, r.jsx)(eQ.animated.div, { className: eP()(tn.qB, { [tn.mu]: d <= 5 }), style: u }),
                (0, r.jsxs)("div", {
                    className: tn.FS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tn.Ui,
                            children: [
                                (0, r.jsx)(e1.E, {
                                    className: tn.Qq,
                                    variant: "text-xs/semibold",
                                    children: er.intl.string(eX.default.NI6Ihe),
                                }),
                                i >= n &&
                                    (0, r.jsx)(e1.E, {
                                        className: tn.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tn.Ui,
                            children: [
                                (0, r.jsx)(e1.E, {
                                    className: eP()(tn.Qq, tn.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? er.intl.formatToPlainString(eX.default["Ehpq+7"], { appliedBoostCount: t })
                                        : er.intl.formatToPlainString(eX.default["/rbPDs"], {
                                              appliedBoostCount: t,
                                              maxBoostCount: n,
                                          }),
                                }),
                                (0, r.jsx)(e4.A, {
                                    width: 12,
                                    height: 12,
                                    direction: e4.A.Directions.RIGHT,
                                    className: eP()(tn.Qq, tn.ue, tn.OW),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
};
function tl(e) {
    let { guild: t, withMargin: i } = e,
        l = tt(t),
        s = (0, e8.A)(t.id),
        o = a.useCallback(() => {
            (0, eK.A)(t.id, K.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, h.bG)([e7], () => e7.getCountForGuild(t.id) ?? 0);
    a.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, e2.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = a.useCallback(
        (e) => {
            s &&
                (0, e3.L3)(e, async () => {
                    let { default: e } = await n.e("371728").then(n.bind(n, 709843));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
        [s, t],
    );
    return (0, r.jsx)(J.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: eP()(tn.kL, { [tn.aF]: i }),
        onContextMenu: c,
        children: (0, r.jsx)(ti, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function ts(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(tl, { guild: t, withMargin: n });
}
ti.displayName = "GuildPowerupsProgressBarUI";
var tr = n(455234),
    ta = n(181079),
    to = n(607567),
    td = n(403362),
    tc = n(996439),
    tu = n(935208),
    th = n(63995),
    tm = n(518769);
function tg(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, to.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var tA = n(787541),
    tf = n(79858),
    tp = n(600761),
    tC = n(95701),
    tE = n(72314),
    tx = n(808728),
    tN = n(297469),
    t_ = n(960755),
    tS = n(633965),
    tI = n(702841),
    tb = n(246338),
    tG = n(41200),
    tj = n(831617),
    tv = n(589603),
    tR = n(496767),
    ty = n(134413),
    tM = n(701785),
    tT = n(101611),
    tL = n(473529),
    tU = n(578484),
    tD = n(71165),
    tO = n(978165),
    tP = n(960253),
    tV = n(770666),
    tw = n(508654),
    tH = n(521427),
    tk = n(871123),
    tB = n(281405),
    tF = n(3026),
    tz = n(821609),
    tK = n(499373),
    tW = n(559106),
    tY = n(847374),
    tX = n(285796),
    tq = n(983851),
    tJ = n(914430),
    tZ = n(47167),
    t$ = n(485947),
    tQ = n(970853),
    t0 = n(93055),
    t1 = n(349828),
    t3 = n(22277),
    t2 = n(551851),
    t9 = n(391507);
function t5(e) {
    e.stopPropagation();
}
function t6(e) {
    let { label: t, onClick: n, tabIndex: i } = e;
    return (0, r.jsx)(q.m, {
        text: t,
        children: (0, r.jsx)(J.D, {
            className: eP()(t9.c9, t9.ih),
            onClick: n,
            tabIndex: i,
            role: "button",
            "aria-label": t,
            children: (0, r.jsx)(tK.T, { size: "xs", color: "currentColor", className: t9.hs }),
        }),
    });
}
let t7 = F(
        a.memo(function (e) {
            let t,
                {
                    channel: i,
                    connectChannelDragSource: l,
                    connectChannelDropTarget: s,
                    disableManageChannels: o,
                    position: d,
                    sortingPosition: u,
                    hideIcon: m,
                    children: g,
                } = e,
                A = (0, h.bG)([w.Ay], () => w.Ay.isChannelMuted(i.getGuildId(), i.id)),
                f = (0, h.bG)([L.A], () => L.A.isCollapsed(i.id)),
                p = (0, h.bG)([P.A], () => P.A.can(H.xBc.MANAGE_CHANNELS, i)),
                C = (0, tZ.Ay)(i);
            t = null != u ? (d > u ? t9.mU : t9.TR) : t9.fx;
            let E = a.useCallback(() => {
                    f ? (0, tJ.fh)(i.id) : (0, tJ.Gv)(i.id);
                }, [i.id, f]),
                x = a.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = O.A.getGuild(i.getGuildId());
                            null != t &&
                                (0, e3.L3)(e, async () => {
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
                                    return (n) => (0, r.jsx)(e, { ...n, channel: i, guild: t });
                                });
                        }
                    },
                    [i],
                ),
                N = a.useCallback(() => {
                    let e = i.type === H.rbe.GUILD_CATEGORY ? null : i.type,
                        t = i.getGuildId();
                    null != t &&
                        (0, I.openModalLazy)(async () => {
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
                                n.e("824547"),
                                n.e("819193"),
                                n.e("507775"),
                                n.e("662068"),
                                n.e("358608"),
                                n.e("221500"),
                            ]).then(n.bind(n, 906724));
                            return (n) =>
                                (0, r.jsx)(l, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== i.id ? i.id : null,
                                });
                        });
                }, [i]),
                _ = (function (e, t) {
                    let n = (0, h.bG)([ta.A], () => ta.A.autoAddJoinedThreads),
                        { isAtLimit: i } = (0, t0.ft)();
                    return n &&
                        i &&
                        null != t &&
                        (0, M.ai)(e.getGuildId()) &&
                        e.type === H.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === t1.A.toLowerCase()
                        ? { label: er.intl.string(t3.default.WsUrMD), tooltip: er.intl.string(t3.default.dW9Kov) }
                        : null;
                })(i, C),
                S = (0, tQ.A)(i);
            null == S && p && !o && (S = { label: er.intl.string(er.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: G, ...j } = (0, c.rm)(i.id),
                v = a.useRef(null),
                R = a.useRef(null),
                y = (0, r.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, r.jsx)(tW.vN, {
                            focusTarget: v,
                            ringTarget: R,
                            offset: { left: 4, right: 4 },
                            children: (0, r.jsxs)("div", {
                                ref: R,
                                className: eP()(t9.Ki, t9.iE, { [t9.yZ]: f, [t9.SU]: A, [t9.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, r.jsxs)(J.D, {
                                        innerRef: v,
                                        className: t9.rb,
                                        tabIndex: G,
                                        ...j,
                                        onClick: E,
                                        "aria-label": er.intl.formatToPlainString(er.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, r.jsx)(t$.A, {
                                                className: t9.UU,
                                                children: (0, r.jsx)(tF.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, r.jsx)("span", {
                                                      className: t9.qS,
                                                      children: (0, r.jsx)(q.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, r.jsx)($.E, {
                                                              type: { text: _.label },
                                                              variant: "secondary",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            m
                                                ? null
                                                : (0, r.jsx)(tY.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t9.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        onClick: t5,
                                        className: t9.Y_,
                                        children:
                                            null != S
                                                ? (0, r.jsx)(t6, { label: S.label, onClick: S.perform, tabIndex: G })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != s && null != l ? s(l(y)) : y;
        }),
    ),
    t4 = a.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, r.jsx)("li", {
            className: eP()(i, t9.fx),
            children: (0, r.jsxs)("div", {
                className: eP()(t9.Ki, t9._V),
                children: [
                    (0, r.jsx)("div", {
                        className: t9.rb,
                        children: (0, r.jsx)(t$.A, { className: t9.UU, children: (0, r.jsx)(tF.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, r.jsx)(q.m, {
                              asContainer: !0,
                              text: er.intl.string(er.t["5qNmsU"]),
                              children: (0, r.jsx)(J.D, {
                                  className: t9.r,
                                  onClick: n,
                                  children: (0, r.jsx)(tX.a, { size: "md", color: "currentColor", className: t9.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t8 = a.memo(function (e) {
        let { category: t } = e,
            n = (0, h.bG)([t2.A], () => t2.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = a.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), e9.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), e9.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: t9.oA,
            children: (0, r.jsx)(tz.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: tq.H,
                text: n ? er.intl.string(er.t["/eB9Bg"]) : er.intl.string(er.t.Q2gPWl),
            }),
        });
    }),
    ne = a.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, h.bG)([t2.A], () => t2.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === H.rbe.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)("li", {
                      className: t9.fx,
                      children: (0, r.jsx)("div", {
                          className: eP()(t9.Ki, t9._V),
                          children: (0, r.jsx)(t$.A, {
                              className: t9.UU,
                              children: (0, r.jsx)(tF.A, { children: er.intl.string(er.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, r.jsx)("div", { style: { height: 16 } });
    }),
    nt = a.memo(function (e) {
        let { channel: t } = e,
            n = (0, tZ.Ay)(t);
        return (0, r.jsx)("li", {
            className: t9.fx,
            children: (0, r.jsx)("div", {
                className: eP()(t9.Ki, t9._V),
                children: (0, r.jsx)(t$.A, { className: t9.UU, children: (0, r.jsx)(tF.A, { children: n }) }),
            }),
        });
    });
var nn = n(728321),
    ni = n(244083);
let nl = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var ns = n(906659);
let nr = a.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: i,
            guildChannelsVersion: l,
            selectedChannelId: s,
            disableManageChannels: o,
        } = e,
        d = a.useCallback(() => {
            let e = i.getCategoryFromSection(i.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                l = e.getShownChannelAndThreadIds();
            (null != s && l.includes(s) && (t = (0, eU.xb)(i)), (0, eU.DD)(n.id, l, t));
        }, [n.id, s, i, l]),
        { density: c } = (0, E.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tN.PU:
            return (0, r.jsx)("div", { style: { height: u } });
        case tN.bK:
            if (n.features.has(H.GuildFeatures.HUB)) return null;
            return (0, r.jsx)("div", { style: { height: u } });
        case tN.HP:
            return (0, r.jsx)(t4, { name: er.intl.string(er.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, r.jsx)(t4, { name: er.intl.string(er.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, r.jsxs)(a.Fragment, {
                children: [(0, r.jsx)("div", { className: ns.ts }), (0, r.jsx)(ne, { category: e, channel: n })],
            });
        }
        case tN.TF: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(t7, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, r.jsx)(nn.A, {
                    inlineSpecs: nl,
                    arrowAlignment: ni.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(t7, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var na = n(104171),
    no = n(186369),
    nd = n(970812),
    nc = n(147036);
function nu(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tN.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tB.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tN.PU ||
                ((0, M.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tN.HP ||
                      (!!t && n !== tN.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tN.PU &&
            n !== tN.HP &&
            n !== tN.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nh = a.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, r.jsx)(t8, { category: i });
    }),
    nm = a.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: i,
                voiceStates: l,
                guildId: s,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: u, canHaveVoiceSummary: m } = a.useMemo(() => nu(n, c, t), [n, c, t, i]),
            g = a.useMemo(() => (t === tN.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
            A = (0, eD.jN)(s),
            { enableWaveformIcon: f } = (0, no.b)(s, "ChannelListSectionFooter"),
            p = (0, h.yK)(
                [w.Ay],
                () => {
                    if (null == g || !g.isCollapsed || !m) return [];
                    let e = g.getChannelRecords(),
                        t = [];
                    for (let n of e) {
                        if (!n.isGuildVocal()) continue;
                        let e = w.Ay.isChannelOrParentOptedIn(s, n.id);
                        (!A || e) && t.push(n);
                    }
                    return t;
                },
                [g, m, s, A],
            ),
            C = a.useMemo(
                () => (0, nc.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [p, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(nh, { guildChannels: n, guildChannelsVersion: i });
        let E = u ? (0, r.jsx)("div", { className: ns.ts }) : null;
        return m && 0 !== C.length
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: ns.qz,
                          children: (0, r.jsx)(na.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: s,
                              renderLeadingIcon: f
                                  ? (e) => (0, r.jsx)(nd.A, { color: "currentColor", className: eP()(e, eo.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var ng = n(152367),
    nA = n(573163),
    nf = n(371169),
    np = n(260498),
    nC = n(404373),
    nE = n(790782),
    nx = n(855793),
    nN = n(309010),
    n_ = n(775946),
    nS = n(248675);
function nI(e) {
    var t;
    let n,
        { guild: i, selected: l } = e,
        s = (0, h.bG)([np.Ay], () => np.Ay.getSelectedProjectId(i.id), [i.id]),
        o = (0, h.bG)([nN.Ay], () => nN.Ay.getChannelId(), []),
        d = (0, h.bG)([V.A], () => V.A.getGuildId(), []),
        { hasUnread: c, badgeCount: u } =
            ((t = i.id),
            (n = (0, h.bG)(
                [nA.Ay, np.Ay],
                () =>
                    nA.Ay.getResourceIds(nE.P.CONJURING_PROJECT)
                        .filter((e) => null == np.Ay.getProject(e) && (0, nC.tz)(e))
                        .sort()
                        .join(","),
                [],
            )),
            a.useEffect(() => {
                "" !== n && (0, nf.tF)(n.split(","));
            }, [n]),
            (0, nC.NC)(t));
    return (0, r.jsx)(et.G, {
        id: `conjure-${i.id}`,
        renderIcon: (e) =>
            (0, r.jsx)(ng.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: er.intl.string(nS.default.uk6jhJ),
        selected: l,
        showUnread: c,
        trailing: u > 0 ? (0, r.jsx)(n_.A, { mentionsCount: u }) : void 0,
        background: (0, r.jsx)(nx.X8, { guildId: i.id }),
        onClick: () => {
            let e = o === ei.VV.CONJURE && d === i.id;
            (0, en.pX)(H.BVt.CHANNEL(i.id, ei.VV.CONJURE, null == s || e ? null : s));
        },
    });
}
var nb = n(625903),
    nG = n(283973),
    nj = n(933832),
    nv = n(435183),
    nR = n(698441),
    ny = n(855687),
    nM = n(816662),
    nT = n(446600),
    nL = n(616356);
function nU(e, t, n) {
    return null != t && !!t && !(0, G.ws)(n, e.type);
}
function nD(e, t) {
    return null == t ? eo.fx : e > t ? eo.mU : eo.TR;
}
function nO(e) {
    let {
        channel: t,
        disableManageChannels: n,
        tabIndex: i,
        forceShowButtons: l,
        shouldEnlargeTargets: s,
        hasChannelInfo: a = !1,
    } = e;
    return (0, h.bG)(
        [P.A, V.A],
        () =>
            n ||
            (0, M.ai)(V.A.getGuildId()) ||
            (!P.A.can(H.xBc.MANAGE_CHANNELS, t) &&
                !P.A.can(H.xBc.MANAGE_ROLES, t) &&
                !P.A.can(H.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, tC.tr)(t.type) && !P.A.can(H.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !P.A.can(H.xBc.CONNECT, t)) ||
            !tC.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, r.jsx)(q.m, {
              asContainer: !0,
              text: er.intl.string(er.t["3gUsJb"]),
              ariaHidden: !0,
              children: (0, r.jsx)(J.D, {
                  className: eP()(eo.Xs, { [eo.Tf]: l, [eo.bw]: a, [eo.UI]: !a }),
                  onClick: function () {
                      nv.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": er.intl.string(er.t["3gUsJb"]),
                  focusProps: s ? { offset: 2 } : void 0,
                  children: (0, r.jsx)(nb.SettingsIcon, { size: "xs", color: "currentColor", className: eo.gE }),
              }),
          });
}
function nP(e) {
    let {
            channel: t,
            isDefaultChannel: i = !1,
            locked: l,
            tabIndex: s,
            forceShowButtons: o,
            shouldEnlargeTargets: d,
            hasChannelInfo: c = !1,
        } = e,
        u = (0, h.bG)([O.A], () => O.A.getGuild(t.getGuildId())),
        m = (0, h.bG)([nT.A], () => nT.A.getStageInstanceByChannel(t.id), [t.id]),
        g = (0, h.bG)([nR.Ay], () => nR.Ay.getActiveEventByChannel(t.id), [t.id]),
        A = (0, h.bG)([P.A], () => (0, ny.K)(P.A, u, t, m)),
        f = (0, h.bG)([], () =>
            t?.type === H.rbe.GUILD_VOICE ? er.intl.string(er.t["EE+P0H"]) : er.intl.string(er.t["0jeAXt"]),
        ),
        p = a.useRef(null);
    if (l || !A || t.isModeratorReportChannel() || t.isThread()) return null;
    let C = (0, r.jsx)(nG.R, { size: "xs", className: eo.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (C = (0, r.jsx)(nn.A, {
                childRef: p,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, r.jsx)("div", { ref: p, children: C }),
            })),
        (0, r.jsx)(q.m, {
            asContainer: !0,
            text: f,
            ariaHidden: !0,
            children: (0, r.jsx)(J.D, {
                className: eP()(eo.Xs, { [eo.Tf]: o, [eo.bw]: c, [eo.UI]: !c }),
                onClick: function () {
                    if (null != u) {
                        let e = nL.A.getAllActiveStreams().filter(
                            (e) => e.state !== H.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, I.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("683621"),
                                n.e("711162"),
                                n.e("159957"),
                                n.e("728136"),
                                n.e("216084"),
                                n.e("284819"),
                            ]).then(n.bind(n, 405342));
                            return (n) =>
                                (0, r.jsx)(i, {
                                    ...n,
                                    guild: u,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: H.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: g,
                                });
                        });
                    }
                },
                tabIndex: s,
                "aria-label": f,
                focusProps: d ? { offset: 2 } : void 0,
                children: C,
            }),
        })
    );
}
function nV(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(q.m, {
        asContainer: !0,
        text: er.intl.string(er.t["ROh4T+"]),
        ariaHidden: !0,
        children: (0, r.jsx)(J.D, {
            className: eo.Xs,
            onClick: function () {
                (0, nM.Ol)(t.guild_id, t.id);
            },
            "aria-label": er.intl.string(er.t["ROh4T+"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(Z.P, { size: "xs", color: "currentColor", className: eo.gE }),
        }),
    });
}
function nw(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(q.m, {
        asContainer: !0,
        text: er.intl.string(er.t["N2c/Un"]),
        ariaHidden: !0,
        children: (0, r.jsx)(J.D, {
            className: eo.Xs,
            onClick: function () {
                (0, nM.jA)(t.guild_id, t.id, !0, { section: H.JJy.CHANNEL_LIST });
            },
            "aria-label": er.intl.string(er.t["N2c/Un"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(nj.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: eo.gE }),
        }),
    });
}
class nH extends a.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, r.jsx)(nO, { ...this.props });
    }
    renderInviteButton() {
        return (0, r.jsx)(nP, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, r.jsx)(nV, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, r.jsx)(nw, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nD(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nU(e, t, n);
    }
}
var nk = n(166444);
let nB = F(function (e) {
    let {
            guild: t,
            selectedChannelId: i,
            position: l,
            disableManageChannels: s,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: u,
            connectChannelDropTarget: m,
            tabIndex: g,
        } = e,
        A = (0, h.bG)([U.A, tx.Ay], () => {
            let e = tx.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : U.A.getChannel(e[0]);
        }),
        f = (0, h.bG)([U.A], () => U.A.getChannel(A?.parent_id)),
        p = i === A?.id,
        C = (0, tZ.Ay)(A),
        E = (0, h.bG)([P.A], () =>
            null != f ? P.A.can(H.xBc.MANAGE_CHANNELS, f) : null != t && P.A.can(H.xBc.MANAGE_CHANNELS, t),
        ),
        x = a.useCallback(
            (e) => {
                null != A &&
                    (0, e3.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("430997"),
                            n.e("379995"),
                            n.e("729559"),
                        ]).then(n.bind(n, 994058));
                        return (t) => (0, r.jsx)(e, { ...t, channel: A });
                    });
            },
            [A],
        );
    if (null == A) return null;
    let N = nD(l, c),
        _ = nU(A, o, d),
        S = (0, r.jsx)("div", {
            className: eP()(N, { [eo.r9]: _, [eo.wH]: p }),
            "data-dnd-name": C,
            children: (0, r.jsxs)(nk.Ay, {
                className: eo.Ki,
                channel: A,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nE.e.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(nP, { channel: A, tabIndex: g }),
                    (0, r.jsx)(nO, { channel: A, disableManageChannels: s, tabIndex: g }),
                ],
            }),
        });
    return (E && (S = m(u(S))), S);
});
var nF = n(34188),
    nz = n(733391),
    nK = n(832163),
    nW = n(831024),
    nY = n(44724),
    nX = n(849134),
    nq = n(770178),
    nJ = n(307076);
let nZ = Math.ceil(Math.sqrt(115200)),
    n$ = (nZ - 240) / 2;
function nQ(e) {
    let { children: t, ref: n } = e,
        [i, l] = a.useState(-1),
        s = a.useCallback((e) => {
            l(e.contentRect.width);
        }, []),
        o = (0, nq.w)(s, [], { fireOnMount: !0 }),
        [{ shineSpring: d }, c] = (0, e0.z)(() => ({
            from: { shineSpring: 0 },
            config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
        })),
        u = a.useCallback(
            (e, t) => {
                c({ shineSpring: 1, delay: t, reset: !0, loop: { reset: !0, delay: 1600 } });
            },
            [c],
        ),
        h = a.useCallback(() => {
            c({ shineSpring: 0, immediate: !0, loop: !1 });
        }, [c]),
        m = a.useMemo(
            () =>
                t(
                    (0, r.jsx)(eQ.animated.div, {
                        className: nJ.q,
                        style: {
                            transform: d.to(
                                (e) => `translateX(calc(${e * i}px + ${e * nZ}px)) translateY(-50%) rotate(45deg)`,
                            ),
                        },
                    }),
                ),
            [t, i, d],
        );
    return (
        a.useImperativeHandle(n, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
        (0, r.jsx)("div", {
            className: nJ.i,
            onMouseEnter: u,
            onMouseLeave: h,
            onFocus: u,
            onBlur: h,
            ref: o,
            style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${n$}px` },
            children: m,
        })
    );
}
var n0 = n(371794),
    n1 = n(240248),
    n3 = n(998218),
    n2 = n(672812),
    n9 = n(427797);
let n5 = a.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = a.useRef(null),
        s = a.useRef(null),
        o = (0, I.useHasAnyModalOpen)(),
        d = (0, h.bG)([eh.A], () => eh.A.hasLayers()),
        c = (0, ec.xr)((e) => e.fullScreenLayers.length > 0);
    a.useEffect(() => {
        (0, nz.Kh)(t.id);
    }, [t.id]);
    let u = (0, h.bG)([nK.A], () => nK.A.getAnnouncement(t.id)),
        g = u?.state === "success" ? u.announcement : void 0,
        [A, f] = (0, ee.x_)(X.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = A === X.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, tk.nY)(t.id),
        E = (0, nW.u)({ surface: "storefront_badge", applicationId: C }),
        x = null;
    (p && (x = er.intl.string(er.t.y2b7CA)), null != E && (x = E.text));
    let [N, _] = (0, ee.x_)(X.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        S = N === X.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    a.useEffect(() => {
        i && (p && f(el.i.INDIRECT_ACTION), S && _(el.i.INDIRECT_ACTION));
    }, [f, _, i, p, S]);
    let b = a.useCallback(() => {
            (f(el.i.TAKE_ACTION), _(el.i.TAKE_ACTION));
            let e = (0, tk.mq)(t.id),
                n = nK.A.getStorefrontState(e)?.activePage ?? 0;
            (0, en.pX)(H.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, _]),
        G = a.useCallback(() => {
            (0, nY.X)({ guildId: t.id, forceFetch: S });
        }, [t.id, S]),
        j = a.useCallback(() => {
            _(el.i.USER_DISMISS);
        }, [_]),
        v = a.useCallback(
            (e) => {
                null != t &&
                    (0, e3.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
                        return (n) => (0, r.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        R = a.useCallback(() => {
            l.current?.onMouseEnter(null, 500);
        }, [l]),
        y = a.useCallback(
            (e) =>
                (0, r.jsx)(et.G, {
                    background: (0, r.jsx)("div", { className: n9.D }),
                    innerClassName: n9.Z,
                    ref: s,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, r.jsx)(nF.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, r.jsx)(e1.E, {
                        variant: "text-md/medium",
                        className: n2.UU,
                        children: er.intl.string(er.t.vyaWs7),
                    }),
                    selected: i,
                    onMouseDown: G,
                    onClick: b,
                    onContextMenu: v,
                    trailing: (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != x && (0, r.jsx)(eA.Lp, { text: x, color: m.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, i, G, b, v, x],
        ),
        M = a.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? n3.A.toURLSafe((0, n0.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? n3.A.toURLSafe((0, n0.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: er.intl.string(er.t["7PvvS9"]),
                        body: er.intl.formatToPlainString(er.t["9J4h1a"], { applicationName: g.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = g;
                    if ((0, n1.uJ)(e) && (0, n1.uJ)(t)) return null;
                    return {
                        graphicSource: (0, n1.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: g.popoverTitle,
                        body: g.popoverBody,
                        actionLabel: g.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [g]),
        T = a.useCallback(
            () =>
                S && null != M
                    ? (0, r.jsx)(nX.A, {
                          onActionClick: b,
                          onActionMouseDown: G,
                          onRender: R,
                          onRequestClose: j,
                          targetElementRef: s,
                          ...M,
                      })
                    : null,
            [S, M, b, G, R, j],
        );
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nQ, { ref: l, children: y }), !o && !d && !c && T()] });
});
var n6 = n(740426),
    n7 = n(826673),
    n4 = n(591552),
    n8 = n(202776),
    ie = n(454058);
function it(e) {
    let { guild: t, selected: i } = e,
        l = (0, n8.A)(t),
        s = (0, n7.HX)(X.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tI.yK)([ie.A], () =>
            Array.from(ie.A.getNewChannelIds(t.id)).filter((e) => ie.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tI.bG)([nA.Ay], () => nA.Ay.hasUnread(t.id, nE.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tN.rR,
        u = (0, tI.bG)([n4.A, nA.Ay], () => {
            let e = n4.A.lastFetchedAt(t.id),
                n = nA.Ay.lastMessageId(t.id, nE.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = tu.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        h = a.useCallback(() => {
            (0, en.pX)(H.BVt.CHANNEL(t.id, l ? ei.VV.CUSTOMIZE_COMMUNITY : ei.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        g = a.useCallback(
            (e) => {
                (0, e3.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("113446"), n.e("317699"), n.e("830412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        A = null;
    return (
        (s && !d && !c) ||
            i ||
            u ||
            (A = (0, r.jsx)(eA.Lp, {
                color: m.A.colors.BADGE_PRIMARY_BACKGROUND.css,
                text: er.intl.string(er.t.y2b7CA),
            })),
        (0, r.jsx)(et.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, r.jsx)(n6.k, { size: "md", color: "currentColor", className: e }),
            text: l ? er.intl.string(er.t.h9mGOP) : er.intl.string(er.t.et6wav),
            selected: i,
            onClick: h,
            onContextMenu: g,
            trailing: A,
        })
    );
}
var ii = n(855473);
function il(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(et.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(ii.Z, { size: "md", color: "currentColor", className: e }),
        text: er.intl.string(er.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, en.pX)(H.BVt.CHANNEL(t.id, ei.VV.GUILD_HOME));
        },
    });
}
var is = n(297264),
    ir = n(5373),
    ia = n(65995),
    io = n(195702);
function id(e, t) {
    return (0, r.jsx)(e1.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let ic = a.memo(function (e) {
    let { guild: t } = e,
        n = (0, h.bG)([tM.h], () => tM.h.getNewMemberActions(t.id), [t.id]),
        i = (0, h.bG)([ia.A], () => ia.A.getCompletedActions(t.id)),
        l = a.useMemo(() => {
            if (null == n || null == i) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != i[t.channelId] && e++;
                }),
                e
            );
        }, [i, n]),
        s = null == n ? 0 : n.length,
        o = (0, c.rm)(`progress-bar-${t.id}`);
    return (0, r.jsxs)("li", {
        children: [
            (0, r.jsxs)(J.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: io.G9,
                onClick: function () {
                    (0, en.pX)(H.BVt.CHANNEL(t.id, ei.VV.GUILD_HOME));
                },
                children: [
                    (0, r.jsxs)("div", {
                        className: io.A1,
                        children: [
                            (0, r.jsx)(is.D, { variant: "heading-sm/bold", children: er.intl.string(er.t.SnrR3x) }),
                            (0, r.jsxs)("div", {
                                className: io.Ib,
                                children: [
                                    (0, r.jsx)(e1.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: io.Cv,
                                        children: er.intl.format(er.t.eqZ1lW, {
                                            numberHook: id,
                                            total: s.toString(),
                                            completed: l.toString(),
                                        }),
                                    }),
                                    (0, r.jsx)(e4.A, {
                                        className: io.UE,
                                        width: 16,
                                        height: 16,
                                        direction: e4.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(ir.i, {
                        className: io.hr,
                        foregroundGradientColor: [
                            m.A.unsafe_rawColors.GREEN_300.css,
                            m.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (l / s) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, r.jsx)("div", { role: "separator", className: io.yF }),
        ],
    });
});
var iu = n(581925);
function ih(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(et.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(iu.L, { size: "md", color: "currentColor", className: e }),
        text: er.intl.string(er.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, en.pX)(H.BVt.CHANNEL(t.id, ei.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var im = n(590251),
    ig = n(413125),
    iA = n(600623),
    ip = n(411392);
let iC = a.memo(function (e) {
    let { guild: t } = e,
        i = (0, h.bG)([tx.Ay], () => tx.Ay.getDefaultChannel(t.id), [t.id]),
        { steps: l } = (0, ig.c)(i, t),
        s = l.length,
        o = l.filter((e) => e.completed).length,
        d = l.find((e) => !e.completed),
        u = (0, c.rm)(`setup-progress-${t.id}`),
        g = s > 0 && null == d;
    return (a.useEffect(() => {
        g && (0, iA.vy)(t.id);
    }, [t.id, g]),
    null == d)
        ? null
        : (0, r.jsxs)("li", {
              children: [
                  (0, r.jsxs)(J.D, {
                      ...u,
                      role: "button",
                      className: ip.nM,
                      onClick: function () {
                          var e;
                          ((e = t.id),
                              (0, I.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("883221"),
                                      n.e("457866"),
                                      n.e("270591"),
                                      n.e("149360"),
                                  ]).then(n.bind(n, 49843));
                                  return (n) => (0, r.jsx)(t, { guildId: e, ...n });
                              }));
                      },
                      children: [
                          (0, r.jsxs)("div", {
                              className: ip.Ap,
                              children: [
                                  (0, r.jsx)(im.a, {
                                      percent: 100,
                                      colorOverride: m.A.colors.BACKGROUND_MOD_STRONG.css,
                                      ringColorOverrideClassName: ip.Tu,
                                      background: ip.Tu,
                                  }),
                                  (0, r.jsx)(im.a, {
                                      className: ip.qB,
                                      percent: (o / s) * 100,
                                      colorOverride: m.A.colors.STATUS_POSITIVE.css,
                                      ringColorOverrideClassName: ip.Tu,
                                      background: ip.Tu,
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: ip.FS,
                              children: [
                                  (0, r.jsx)(is.D, {
                                      variant: "heading-sm/bold",
                                      children: er.intl.string(er.t.o3HK3d),
                                  }),
                                  (0, r.jsx)(e1.E, {
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      className: ip.VA,
                                      children: er.intl.formatToPlainString(er.t.zhHW5c, {
                                          currStep: o + 1,
                                          total: s,
                                          step: d.title,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", { role: "separator", className: ip.yF }),
              ],
          });
});
var iE = n(514179);
function ix(e) {
    let { guild: t, selected: i } = e;
    return (0, r.jsx)(et.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(iE.A, { className: e }),
        text: er.intl.string(er.t["KzCF/6"]),
        selected: i,
        onClick: function () {
            (0, en.pX)(H.BVt.CHANNEL(t.id, ei.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e3.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var iN = n(506774),
    i_ = n(666860),
    iS = n(289397),
    iI = n(486418),
    ib = n(575926),
    iG = n(440293),
    ij = n(174459),
    iv = n(634654),
    iR = n(888918);
function iy(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        l = (0, iG.w)(t),
        s = (0, tI.bG)([O.A], () => O.A.getGuild(t)),
        a = s?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === iN.w.get(iv.bJ, "false"),
        d = (0, tI.bG)([z.Ay], () => z.Ay.useReducedMotion);
    return (0, r.jsx)(et.G, {
        id: `shop-${t}`,
        className: eP()(iR.A2, { [iR.wH]: n, [iR.ST]: o }),
        innerClassName: iR.LE,
        renderIcon: (e) => (0, r.jsx)(ib.h, { width: 20, height: 20, className: eP()([e, iR.sV]) }),
        text: er.intl.string(er.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, r.jsxs)("div", {
            className: iR.ai,
            children: [
                d
                    ? (0, r.jsx)("div", {
                          className: iR.Ad,
                          children: (0, r.jsx)($.E, { type: "new", variant: "primary" }),
                      })
                    : (0, r.jsx)("img", {
                          src: (0, iS.n)("server_products/storefront/money.gif"),
                          className: iR.TG,
                          alt: "",
                      }),
                n &&
                    (0, r.jsx)(J.D, {
                        className: iR.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, n7.Dr)(X.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                ij.default.track(H.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, i_.H$)(t),
                                    action_taken: iv.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && a) || (0, en.bG)(H.BVt.CHANNEL(t, tx.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": er.intl.string(er.t.cpT0Cq),
                        children: (0, r.jsx)(tX.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function iM(e) {
    let { guild: t, selected: i } = e;
    function l() {
        (iN.w.set(iv.bJ, "true"), (0, en.pX)(H.BVt.CHANNEL(t.id, ei.VV.GUILD_SHOP)));
    }
    return (0, iI.P)(t)
        ? (0, r.jsx)(iy, { guildId: t.id, selected: i, handleClick: l })
        : (0, r.jsx)(et.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, r.jsx)(ib.h, { width: 20, height: 20, className: e }),
              text: er.intl.string(er.t.al5EXL),
              selected: i,
              onClick: l,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e3.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, r.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var iT = n(308528),
    iL = n(534890),
    iU = n(262763),
    iD = n(499211),
    iO = n(406704),
    iP = n(747926),
    iV = n(977997),
    iw = n(807632),
    iH = n(37411);
function ik(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, iw.YG)(t),
        l = (0, iw.IO)(t),
        s = (0, iO._M)(t);
    return i && l && s ? (0, r.jsx)(iB, { thread: t, tabIndex: n }) : null;
}
function iB(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, h.bG)([iV.A], () => iV.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: l } = (0, iD.A)(t.id),
        s = a.useCallback(() => {
            iU.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: l, locked: !1 });
        }, [t, i, l]),
        o = a.useCallback(() => {
            (0, iP.JA)(t, !0, iH.H9.CHANNEL_LIST);
        }, [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(q.m, {
                asContainer: !0,
                text: er.intl.string(er.t["96ANUN"]),
                children: (0, r.jsx)(J.D, {
                    className: eo.Xs,
                    onClick: s,
                    tabIndex: n,
                    "aria-label": er.intl.string(er.t["96ANUN"]),
                    children: (0, r.jsx)(tq.H, { size: "xs", color: "currentColor", className: eo.gE }),
                }),
            }),
            (0, r.jsx)(q.m, {
                asContainer: !0,
                text: er.intl.string(er.t.ZXxLQg),
                children: (0, r.jsx)(J.D, {
                    className: eo.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": er.intl.string(er.t.ZXxLQg),
                    children: (0, r.jsx)(iL.ChatIcon, { size: "xs", color: "currentColor", className: eo.gE }),
                }),
            }),
        ],
    });
}
var iF = n(897898),
    iz = n(152007);
function iK(e) {
    return null != e && e > 0;
}
var iW = n(405018),
    iY = n(428689),
    iX = n(525093);
function iq(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, r.jsxs)("div", {
        className: iX.iE,
        children: [
            (0, r.jsxs)(e1.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eP()(iX.VV, { [iX.Ki]: i, [iX.$G]: n >= 100 }),
                children: [
                    i ? (0, r.jsx)(iY.VideoIcon, { size: "md", color: "currentColor", className: iX.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, r.jsx)(e1.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eP()(iX.X5, { [iX.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function iJ(e) {
    let { channel: t, video: n, userCount: i } = e,
        { limit: l } = (0, iW.A)(t),
        s = -1,
        a = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && l > 0 && ((a = s < 0 || l < s), (s = s > 0 ? Math.min(s, l) : l)),
        (0, r.jsx)(iq, { users: i, total: s, videoLimit: a })
    );
}
var iZ = n(588224),
    i$ = n(447199);
function iQ(e) {
    let { thread: t, countInVoice: n, hasVideo: i, mentionCount: l, isMentionLowImportance: s } = e,
        a = n > 0 && t.userLimit > 0,
        o = iK(l);
    return a || o
        ? (0, r.jsxs)("div", {
              className: eo.yW,
              children: [
                  a ? (0, r.jsx)(iJ, { userCount: n, video: i, channel: t }) : null,
                  o ? (0, r.jsx)(n_.A, { mentionsCount: l, isMentionLowImportance: s }) : null,
              ],
          })
        : null;
}
function i0(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: eP()(i$.GI, { [i$.a7]: n }, { [i$.BJ]: i }), style: t },
        { density: s } = (0, E.wR)();
    switch (s) {
        case "cozy":
            return (0, r.jsxs)("svg", {
                ...l,
                width: "10",
                height: "20",
                viewBox: "0 0 10 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, r.jsx)("path", {
                        d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, r.jsx)("path", {
                        d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        case "compact":
            return (0, r.jsxs)("svg", {
                ...l,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, r.jsx)("path", {
                        d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, r.jsx)("path", {
                        d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        default:
            return (0, r.jsxs)("svg", {
                ...l,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, r.jsx)("path", {
                        d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, r.jsx)("path", {
                        d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
    }
}
let i1 = a.memo(function (e) {
        let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: s, withGuildIcon: o } = e,
            d = (0, h.bG)([to.Ay], () => to.Ay.getVoiceStatesForChannel(t), [t]),
            u = (0, h.bG)([iV.A], () => iV.A.hasVideo(t.id)),
            m = (0, tZ.Ay)(t),
            {
                unread: g,
                mentionCount: A,
                isMentionLowImportance: f,
            } = (0, h.cf)([nA.Ay], () => ({
                unread: nA.Ay.hasUnread(t.id),
                mentionCount: nA.Ay.getMentionCount(t.id),
                isMentionLowImportance: nA.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, h.bG)([iz.A], () => iz.A.isMuted(t.id)),
            C = a.useCallback(
                (e) => {
                    (0, iP.JA)(t, !e.shiftKey, iH.H9.CHANNEL_LIST);
                },
                [t],
            ),
            E = a.useCallback(() => {
                iT.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            x = a.useCallback(
                (e) => {
                    (0, iF.A)(e, t);
                },
                [t],
            ),
            N = a.useCallback(
                (e) => {
                    let i = U.A.getChannel(t.id);
                    null != i &&
                        (0, e3.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("393336"),
                                n.e("391763"),
                                n.e("955557"),
                                n.e("947502"),
                                n.e("603998"),
                                n.e("343266"),
                                n.e("965789"),
                                n.e("691671"),
                                n.e("412255"),
                                n.e("63340"),
                                n.e("896804"),
                                n.e("65200"),
                                n.e("285802"),
                                n.e("703869"),
                                n.e("51212"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, r.jsx)(e, { ...t, channel: i });
                        });
                },
                [t.id],
            ),
            _ = null == d ? 0 : d.length,
            { role: S, ...I } = (0, c.rm)(t.id),
            b = a.useRef(null),
            G =
                A > 0
                    ? er.intl.formatToPlainString(er.t["ZL7+I6"], { channelName: m, mentionCount: A })
                    : g
                      ? er.intl.formatToPlainString(er.t.YlVvmc, { channelName: m })
                      : er.intl.formatToPlainString(er.t["0nZpiF"], { channelName: m });
        return (0, r.jsxs)("li", {
            role: S,
            className: eP()(eo.fx, { [eo.wH]: i }),
            children: [
                (0, r.jsx)(i0, { withGuildIcon: o }),
                s
                    ? null
                    : (0, r.jsx)(i0, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, r.jsx)(tW.vN, {
                    focusTarget: b,
                    ringTarget: b,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, r.jsxs)("div", {
                        className: eP()(eo.Ki, n2.iE, n2.ZS, {
                            [n2.J1]: i,
                            [n2.F4]: !i && p,
                            [n2.V2]: !p && !i && g,
                            [n2.lY]: o,
                        }),
                        onMouseDown: E,
                        onContextMenu: N,
                        children: [
                            !g || p || i ? null : (0, r.jsx)("div", { className: eP()(n2.gy, n2.WS) }),
                            (0, r.jsx)(J.D, {
                                ...I,
                                innerRef: b,
                                className: n2.nf,
                                onClick: C,
                                onAuxClick: x,
                                "aria-label": G,
                                focusProps: { enabled: !1 },
                                children: (0, r.jsxs)("div", {
                                    className: eP()(n2.Y5, n2.__invalid_threadMainContent),
                                    children: [
                                        (0, r.jsx)(e1.E, {
                                            variant: "text-sm/medium",
                                            color: "none",
                                            className: n2.UU,
                                            children: (0, r.jsx)(tF.A, { "aria-hidden": !0, children: m }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: n2.Y_,
                                            onClick: nk.dG,
                                            onKeyDown: nk.dG,
                                            children: [
                                                (0, r.jsx)(iQ, {
                                                    thread: t,
                                                    countInVoice: _,
                                                    hasVideo: u,
                                                    mentionCount: A,
                                                    isMentionLowImportance: f,
                                                }),
                                                (0, r.jsx)(ik, { thread: t, tabIndex: I.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(iZ.A, {
                    channel: t,
                    collapsed: !l && 1 !== d.length,
                    collapsedMax: 6,
                    voiceStates: d,
                    isThread: !0,
                }),
            ],
        });
    }),
    i3 = a.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: s } = e,
            a = (0, tZ.Ay)(t),
            { density: o } = (0, E.wR)(),
            d = (0, h.yK)([U.A], () => l.map((e) => U.A.getChannel(e)).filter(td.Vq), [l]),
            c = (0, h.bG)([to.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = to.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, r.jsx)("li", {
            className: i$.kL,
            children: (0, r.jsxs)("ul", {
                role: "group",
                "aria-label": er.intl.formatToPlainString(er.t.EiyIi6, { channelName: a }),
                children: [
                    (0, r.jsx)("div", {
                        className: eP()(i$.eh, { [i$.ET]: s }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, r.jsx)(
                            i1,
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
var i2 = n(922016),
    i9 = n(367513),
    i5 = n(296216),
    i6 = n(657043),
    i7 = n(963027),
    i4 = n(202384),
    i8 = n(51758),
    le = n(139033),
    lt = n(305866),
    ln = n(123292),
    li = n(830215),
    ll = n(315982),
    ls = n(480900),
    lr = n(557722),
    la = n(834942),
    lo = n(287809),
    ld = n(53516),
    lc = n(648580),
    lu = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let lh = function (e) {
    let { type: t, guildId: i, closePopout: l } = e,
        s = (0, Y.GV)(),
        a = (0, h.bG)([la.A], () => la.A.getCheck(i), [i]),
        {
            notClaimed: o,
            notEmailVerified: d,
            notPhoneVerified: c,
            missingVerificationRole: u,
            verificationRole: m,
        } = a,
        {
            header: g,
            body: A,
            buttonText: f,
        } = (function (e, t) {
            if (0 !== e) return { header: null, body: null, buttonText: null };
            {
                let e = er.intl.string(er.t["6zY8BI"]),
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
                    ? { header: e, body: er.intl.string(er.t.IRxUlG), buttonText: er.intl.string(er.t.fiNVin) }
                    : i
                      ? { header: e, body: er.intl.string(er.t.vW8iUF), buttonText: er.intl.string(er.t["50gfOv"]) }
                      : l
                        ? { header: e, body: er.intl.string(er.t.vdSOpz), buttonText: er.intl.string(er.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: er.intl.formatToPlainString(er.t.v1ktYb, { min: H.$8o.MEMBER_AGE }),
                                buttonText: er.intl.string(er.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: er.intl.formatToPlainString(er.t.sncw41, { min: H.$8o.ACCOUNT_AGE }),
                                  buttonText: er.intl.string(er.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: er.intl.format(er.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: er.intl.string(er.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == g || null == A
        ? null
        : (0, r.jsxs)(lt.l, {
              className: lc.kL,
              "aria-labelledby": s,
              children: [
                  (0, r.jsx)("img", { alt: "", className: lc.Sl, src: n(303528) }),
                  (0, r.jsxs)("div", {
                      className: lc.Qs,
                      children: [
                          (0, r.jsx)(is.D, { variant: "heading-md/semibold", id: s, children: g }),
                          (0, r.jsx)(e1.E, { color: "text-default", variant: "text-sm/normal", children: A }),
                          (0, r.jsxs)("div", {
                              className: lc.UD,
                              children: [
                                  null != f
                                      ? (0, r.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: lc.FS,
                                            children: (0, r.jsx)(tz.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? ll.R()
                                                        : c
                                                          ? (0, I.openModalLazy)(
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
                                                                        (0, r.jsx)(e, {
                                                                            reason: lr.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: ld.V },
                                                            )
                                                          : d
                                                            ? (li.A.verifyResend(),
                                                              (0, le.A)({
                                                                  title: er.intl.string(er.t.LykQYk),
                                                                  subtitle: er.intl.format(er.t.azKEPy, {
                                                                      email: lo.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : u && null != m && (0, ls.b)(m, i),
                                                        l());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, r.jsx)(ln.Q, {
                                            onClick: l,
                                            text: er.intl.string(er.t.oEAioF),
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
var lm = n(824865),
    lg = n(378570),
    lA = n(747376),
    lf = n(113783),
    lp = n(96566),
    lC = n(280450),
    lE = n(312006),
    lx = n(505543),
    lN = n(994500),
    l_ = n(685399),
    lS = n(475889),
    lI = n(693879),
    lb = n(435470),
    lG = n(35275),
    lj = n(300596);
function lv(e) {
    let { locked: t } = e;
    return (0, r.jsx)("div", {
        className: eP()(eo.Xs, lj.U),
        children: (0, r.jsx)(lG.A, {
            className: eo.gE,
            color: t ? m.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var lR = n(863005),
    ly = n(669715),
    lM = n(769015),
    lT = n(217223);
function lL(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, r.jsx)("div", {
                className: eP()(lT.kL, t, i && lT.F4),
                children: (0, r.jsx)(lM.A, { game: n[0].application, className: lT.wK }),
            });
        let e = n.length - 1;
        return (0, r.jsxs)("div", {
            className: eP()(lT.kL, t, i && lT.F4),
            children: [
                (0, r.jsx)(lM.A, { game: n[0].application, className: lT.wK }),
                2 === n.length
                    ? (0, r.jsx)(lM.A, { game: n[1].application, className: lT.wK })
                    : (0, r.jsx)(e1.E, {
                          className: lT.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var lU = n(905695);
function lD(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: i,
            voiceStates: l,
            enableConnectedUserLimit: s,
            enableActivities: a,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: u,
            resolvedUnreadSetting: g,
        } = e,
        A = (0, h.bG)([nA.Ay], () => nA.Ay.getMentionCount(t.id)),
        f = (0, h.bG)([nA.Ay], () => nA.Ay.getIsMentionLowImportance(t.id)),
        p = (0, l_.Ay)(t),
        C = (0, h.bG)([P.A], () => !P.A.can(H.xBc.CONNECT, t)),
        E = (0, lS.H)(t),
        x = (0, h.bG)([iV.A], () => iV.A.hasVideo(t.id)),
        N = (0, lp.qT)(t.id) && t.isGuildStageVoice(),
        _ = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, iW.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && l > 0 && (s = s > 0 ? Math.min(s, l) : l),
                    i && s === H.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: i }) > 0 &&
                !n &&
                !l
            );
        })({ channel: t, locked: C, video: (x || N) && null == E, selected: n }),
        S = (0, h.bG)([lR.A], () => lR.A.getNewThreadCount(t.guild_id, t.id)),
        I = (0, lb.ed)(t.guild_id, t.id),
        b = (0, h.bG)([O.A], () => O.A.getGuild(t.guild_id)?.features.has(H.GuildFeatures.COMMUNITY) ?? !1);
    if (iK(A)) return (0, r.jsx)(n_.A, { mentionsCount: A, isMentionLowImportance: f });
    if (o) return (0, r.jsx)(lv, { locked: d });
    if (c)
        return (0, r.jsx)(eA.Lp, { text: er.intl.string(er.t.y2b7CA), color: m.A.colors.BADGE_PRIMARY_BACKGROUND.css });
    if (!u && g === nE.e.ALL_MESSAGES && t.isForumLikeChannel() && null != S && S > 0)
        return (0, r.jsx)(e1.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: lU.O,
            children: er.intl.format(er.t.GkAbqY, { count: (0, eA.Gu)(S) }),
        });
    if (!u && t.isForumLikeChannel() && null != I && I > 0)
        return (0, r.jsx)(e1.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, eA.Gu)(I) });
    let G = l?.length ?? 0;
    return null != s && s && _
        ? (0, r.jsx)(iJ, { userCount: G, video: x || N, channel: t })
        : i && (0, ly.t)(l) && b
          ? (0, r.jsx)(eA.Lp, { text: er.intl.string(er.t.dI3q4h), color: m.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, r.jsx)(lI.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, r.jsx)(lL, { embeddedApps: p, muted: u })
              : null;
}
var lO = n(714619);
class lP extends nH {
    channelItemRef = a.createRef();
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
        return (0, nc.Pd)(e, iV.A, O.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eo.ZS;
        if (null != t)
            if (e > t) return eo.mU;
            else return eo.TR;
        return eo.fx;
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
        (null != r && (0, i8.V)(r) && (0, i4.Ze)(r),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? i9.A.updateChatOpen(e.id, !0) : (0, lA.av)(e)),
            __OVERLAY__ || (0, lg.iN)(e.id, l ? { source: lm.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, lg.iN)(e.id, n ? { source: lm.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = O.A.getGuild(t.getGuildId());
        null != i &&
            (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
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
                    n.e("465694"),
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: i, numAudience: l } = this.props;
        return (0, r.jsx)(iZ.A, { channel: e, voiceStates: i, collapsed: t, tabIndex: n, numAudience: l });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, r.jsx)(lh, {
                type: lu.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, r.jsx)(q.m, {
                asContainer: !0,
                text: er.intl.string(er.t.ZXxLQg),
                children: (0, r.jsx)(J.D, {
                    className: eP()(eo.Xs, n ? eo.Tf : null),
                    onClick: () => {
                        (i9.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": er.intl.string(er.t.ZXxLQg),
                    children: (0, r.jsx)(iL.ChatIcon, { size: "xs", color: "currentColor", className: eo.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: eo.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? er.intl.string(er.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, r.jsx)(tF.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: i,
                connectChannelDropTarget: l,
                connectChannelDragSource: s,
                connectUserDropTarget: a,
                connectDragPreview: o,
                canReorderChannel: d,
                canMoveMembers: c,
                stageInstance: u,
                isSubscriptionGated: h,
                needSubscriptionToAccess: m,
                unread: g,
                resolvedUnreadSetting: A,
                mentionCount: f,
                isFavoriteSuggestion: p,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = (0, r.jsxs)("li", {
                className: eP()(this.getModeClass(), { [eo.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tZ.m1)(e, lo.default, lN.A),
                children: [
                    (0, r.jsx)(i2.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, r.jsx)(q.m, {
                                text: this.getTooltipText(),
                                children: (0, r.jsxs)(nk.Ay, {
                                    ref: this.channelItemRef,
                                    className: eo.Ki,
                                    iconClassName: eP()({ [lO.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? g : void 0,
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
                                    "aria-label": (0, i7.Ay)({
                                        channel: e,
                                        unread: g,
                                        mentionCount: f,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: m,
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
        return (c && (E = a(E)), d && (E = l(s(E))), E);
    }
}
let lV = F((0, i5.F)(lP));
function lw(e) {
    var t;
    let n,
        i,
        { guild: l, channel: s, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        u = (0, h.cf)([nA.Ay], () => ({ unread: nA.Ay.hasUnread(s.id), mentionCount: nA.Ay.getMentionCount(s.id) })),
        m = (0, h.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(s)),
        g = (0, h.cf)([U.A, la.A, P.A], () => {
            let e = U.A.getChannel(s.parent_id),
                t = la.A.getCheck(s.guild_id);
            return {
                canManageChannel: null != l && P.A.can(H.xBc.MANAGE_CHANNELS, s),
                canReorderChannel:
                    !0 !== a &&
                    ((0, M.ai)(l.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, l))),
                canMoveMembers: P.A.can(H.xBc.MOVE_MEMBERS, s),
                locked: !P.A.can(H.xBc.CONNECT, s),
                bypassLimit: P.A.can(H.xBc.MOVE_MEMBERS, s),
                unverifiedAccount: !t.canChat,
            };
        }),
        A = (0, h.bG)([L.A], () => L.A.isCollapsed(s.parent_id)),
        f =
            ((t = s.id),
            (n = (0, lx.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, h.cf)(
                    [lE.Ay, lC.default],
                    () => {
                        let n = lC.default.getId();
                        return lE.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        p = (0, h.bG)([nT.A], () => nT.A.getStageInstanceByChannel(s.id), [s.id]),
        C = (0, lf.zy)(s.id, tm.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, iD.A)(s.id),
        N = (0, h.bG)([w.Ay], () => w.Ay.isFavorite(l.id, s.id)),
        _ = (0, lp.xn)(s.id),
        S = lD({
            channel: s,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (s.userLimit > 0 && s.userLimit < H.RCc),
        }),
        I = e.connected && null == S,
        b = l.features.has(H.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        G = (0, i6.BX)("StageChannel");
    return (0, r.jsx)(lV, {
        categoryCollapsed: A,
        connectAction: f,
        numAudience: C,
        stageInstance: p,
        isSubscriptionGated: E,
        needSubscriptionToAccess: x,
        ...u,
        ...g,
        ...e,
        isFavoriteSuggestion: o && !N,
        forceShowButtons: I,
        openChatOnClick: b,
        channelInfo: S,
        resolvedUnreadSetting: m,
        shouldEnlargeTargets: G,
    });
}
function lH(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    iT.A.preload(n, t.id);
}
let lk = F(
        class extends nH {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = O.A.getGuild(t.getGuildId());
                null != i &&
                    (0, e3.L3)(e, async () => {
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
                        return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, en.pX)(H.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: H.liQ.GUILD_CHANNEL,
                            section: H.JJy.CHANNEL_LIST,
                            object: H.ZSU.CHANNEL,
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
                    a = (0, r.jsx)("li", {
                        className: eP()(this.getClassName(), { [eo.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tZ.m1)(e, lo.default, lN.A),
                        children: (0, r.jsxs)(nk.Ay, {
                            className: eo.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: lH,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: s ? l : null,
                            "aria-label": (0, i7.Ay)({ channel: e }),
                            resolvedUnreadSetting: nE.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return s ? n(i(a)) : a;
            }
        },
    ),
    lB = a.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, h.cf)([U.A, P.A], () => {
                let e = U.A.getChannel(t.parent_id);
                return {
                    canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, n),
                };
            }),
            s = (0, i6.BX)("StoreChannel");
        return (0, r.jsx)(lk, { ...l, ...e, shouldEnlargeTargets: s });
    });
var lF = n(172218),
    lz = n(811024),
    lK = n(323073);
function lW(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: er.intl.string(er.t.Pa817q) };
    }
    return null;
}
var lY = n(3322),
    lX = n(696451),
    lq = n(763827),
    lJ = n(56059),
    lZ = n(163328),
    l$ = n(778712),
    lQ = n(730134),
    l0 = n(707539),
    l1 = n(486020),
    l3 = n(98098);
function l2(e) {
    let { channel: t } = e,
        i = (0, h.yK)([lR.A, nA.Ay, P.A], () => {
            let e = lR.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return d()(lR.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(d().values(lR.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && P.A.can(H.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nA.Ay.lastMessageId(e.id),
                        i = nA.Ay.lastMessageId(t.id);
                    return tu.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        s = t.isForumLikeChannel() ? lJ.b : lZ.y;
    return (
        a.useEffect(() => {
            (0, l0.TE)();
        }, []),
        (0, r.jsxs)("div", {
            className: l3.SW,
            children: [
                (0, r.jsx)(e1.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: l3.DD,
                    children: t.isForumLikeChannel() ? er.intl.string(er.t.ioVdO2) : er.intl.string(er.t.VNYs2v),
                }),
                (0, r.jsxs)("div", {
                    className: l3.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, r.jsx)(l9, { thread: e }, e.id))
                            .filter((e) => a.isValidElement(e))
                            .slice(0, l),
                        (0, r.jsxs)(J.D, {
                            className: l3.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, lg.iN)(t.id)
                                    : (0, I.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("327744"),
                                              n.e("374962"),
                                              n.e("225307"),
                                              n.e("332165"),
                                              n.e("618416"),
                                              n.e("501546"),
                                              n.e("849162"),
                                              n.e("802598"),
                                              n.e("242266"),
                                              n.e("552705"),
                                              n.e("481647"),
                                              n.e("776602"),
                                              n.e("704434"),
                                              n.e("140402"),
                                              n.e("139970"),
                                              n.e("179049"),
                                              n.e("294857"),
                                              n.e("713567"),
                                              n.e("444567"),
                                              n.e("695170"),
                                              n.e("49716"),
                                              n.e("751743"),
                                              n.e("409980"),
                                              n.e("65225"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, r.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, r.jsx)("div", {
                                    className: l3.R4,
                                    children: (0, r.jsx)(s, { size: "custom", className: l3.Kk }),
                                }),
                                (0, r.jsx)("div", {
                                    className: l3.Pf,
                                    children: (0, r.jsx)(e1.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: er.intl.string(er.t["4qdZ93"]),
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
function l9(e) {
    let { thread: t } = e,
        n = (0, h.bG)([lo.default], () => lo.default.getUser(t.ownerId)),
        i = (0, l0.JO)(t);
    return (0, r.jsxs)(J.D, {
        className: l3.nM,
        onClick: function (e) {
            (0, iP.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, iH.H9.POPOUT);
        },
        children: [
            (0, r.jsx)("div", {
                className: l3.R4,
                children:
                    null == n
                        ? (0, r.jsx)("img", {
                              className: l3.my,
                              src: l1.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, r.jsx)(lQ.A, { className: l3.my, user: n, size: l$._3.SIZE_16 }),
            }),
            (0, r.jsxs)("div", {
                className: l3.Pf,
                children: [
                    (0, r.jsx)(e1.E, { className: l3.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, r.jsx)(e1.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, r.jsx)(e1.E, {
                        className: l3.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, l0.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var l5 = n(334105);
function l6(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, r.jsx)(q.m, {
        asContainer: !0,
        text: er.intl.string(er.t.ZXxLQg),
        children: (0, r.jsx)(J.D, {
            className: eo.Xs,
            onClick: () => {
                ((0, l5.fJ)(t.getGuildId(), t.id),
                    (0, lg.iN)(t.id, n ? { source: lm.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
            },
            "aria-label": er.intl.string(er.t.ZXxLQg),
            children: (0, r.jsx)(iL.ChatIcon, { size: "xs", color: "currentColor", className: eo.gE }),
        }),
    });
}
var l7 = n(364522),
    l4 = n(302959),
    l8 = n(35903),
    se = n(970928),
    st = n(427262),
    sn = n(641635);
let si = na.DN.SIZE_24;
function sl(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = l1.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, r.jsx)(q.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, r.jsx)("img", { alt: t, src: e, className: sn.P3 }),
        });
    }
    let s = i.large_image ?? i.small_image;
    return null != s
        ? (0, r.jsx)("img", { alt: i.large_text ?? "", src: (0, se.uD)(l, s, [128, 128]), className: sn.P3 })
        : null;
}
function ss(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        s = (0, h.yK)([lo.default], () => l.map((e) => lo.default.getUser(e)).filter(td.Vq));
    return (0, r.jsx)("div", {
        className: sn.ec,
        children: (0, r.jsxs)("div", {
            className: sn.Wh,
            children: [
                (0, r.jsx)(sl, { activity: t, embeddedApp: n }),
                (0, r.jsxs)("div", {
                    className: sn.X0,
                    children: [
                        (0, r.jsx)(is.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: sn.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, r.jsx)(e1.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, r.jsx)(e1.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, r.jsx)(na.Ay, {
                                className: sn.TN,
                                guildId: i.guild_id,
                                users: s,
                                size: si,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === na.mt) return null;
                                    let t = st.Ay.getName(e);
                                    return (0, r.jsx)(
                                        q.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, r.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, si),
                                                alt: t,
                                                className: sn.my,
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
var sr = n(584960);
function sa(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        s = Array.from(i.embeddedActivity.userIds),
        a = (0, h.bG)([lo.default], () => lo.default.getUser(s[0]));
    return null == a
        ? null
        : (0, r.jsxs)("div", {
              className: sr.Eb,
              children: [
                  (0, r.jsx)("div", {
                      className: sr.Il,
                      children: (0, r.jsx)(ss, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, r.jsx)("div", {
                      className: sr.M4,
                      children: (0, r.jsx)(l8.A, {
                          type: l4.M.VOICE_CHANNEL,
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
var so = n(713654),
    sd = n(744399);
function sc(e) {
    let { channel: t } = e,
        n = (0, h.bG)([O.A], () => O.A.getGuild(t.guild_id)),
        i = (0, tZ.Ay)(t),
        l = (0, so.gU)(t, n);
    return null == l
        ? null
        : (0, r.jsxs)("div", {
              className: sd.hY,
              children: [
                  (0, r.jsx)(l, { className: sd.p }),
                  (0, r.jsx)(e1.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: sd.HA,
                      children: i,
                  }),
              ],
          });
}
var su = n(220650);
function sh(e) {
    let { channel: t, onAction: n } = e,
        i = (0, l_.Ay)(t),
        l = Array.from((0, l_.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, r.jsxs)(l7.Ip, {
              className: su.kL,
              children: [
                  (0, r.jsx)("div", { className: su.oT, children: (0, r.jsx)(sc, { channel: t }) }),
                  (0, r.jsx)("div", { className: su.zN }),
                  l.map((e, i) =>
                      (0, r.jsx)(
                          sa,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
class sm extends nH {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1, isMenuItemPopoverVisible: !1 };
    channelItemRef = a.createRef();
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
        iT.A.preload(t ?? H.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
            { shouldShowActivities: s } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != i && i.length > 0 && s && !n
              ? (0, r.jsx)(sh, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, r.jsx)(l2, { ...e, channel: this.props.channel });
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
        if (t.type === H.rbe.GROUP_DM)
            return void (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("146652"),
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
                return (n) => (0, r.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === H.rbe.DM) {
            let i = lo.default.getUser(t.getRecipientId());
            null != i &&
                (0, e3.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("339715"),
                        n.e("790484"),
                        n.e("819113"),
                        n.e("622936"),
                        n.e("216947"),
                        n.e("463317"),
                        n.e("926132"),
                        n.e("834552"),
                        n.e("993103"),
                        n.e("708757"),
                        n.e("893190"),
                        n.e("585968"),
                        n.e("393336"),
                        n.e("146652"),
                        n.e("776273"),
                        n.e("391763"),
                        n.e("189673"),
                        n.e("28102"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("571210"),
                        n.e("955557"),
                        n.e("691994"),
                        n.e("229787"),
                        n.e("576665"),
                        n.e("88342"),
                        n.e("311802"),
                        n.e("698965"),
                        n.e("235313"),
                        n.e("474610"),
                        n.e("947502"),
                        n.e("436564"),
                        n.e("245996"),
                        n.e("700792"),
                        n.e("592822"),
                        n.e("529422"),
                        n.e("823427"),
                        n.e("965789"),
                        n.e("307059"),
                        n.e("309291"),
                        n.e("198415"),
                        n.e("838056"),
                        n.e("508829"),
                        n.e("17244"),
                        n.e("516054"),
                        n.e("298199"),
                        n.e("864464"),
                        n.e("439778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, r.jsx)(e, { ...n, user: i, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("578580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, r.jsx)(e, { ...n, channel: t });
            });
        let i = O.A.getGuild(t.getGuildId());
        null != i &&
            (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("198415"),
                    n.e("309004"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("356664"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("356675"),
                    n.e("65200"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("337341"),
                    n.e("552094"),
                    n.e("248804"),
                    n.e("141049"),
                    n.e("982921"),
                    n.e("25173"),
                ]).then(n.bind(n, 468916));
                return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: eo.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: i,
                unread: l,
                hasActiveThreads: s,
                hasMoreActiveThreads: a,
                mentionCount: o,
                connectChannelDropTarget: d,
                connectChannelDragSource: c,
                connectDragPreview: u,
                canReorderChannel: h,
                isSubscriptionGated: m,
                isFavoriteSuggestion: g,
                subtitle: A,
                forceTopLevelThread: f,
                embeddedApps: p,
                resolvedUnreadSetting: C,
                enableActivities: E,
                isTargetInViewport: x,
                channelItemRef: N,
                isSuggestedSection: _,
            } = this.props,
            S = N ?? this.channelItemRef,
            { isMenuItemPopoverVisible: I } = this.state,
            b = !I && a,
            G = !I && E && null != p && p.length > 0,
            j = lW(A),
            v = _ ? { source: lm.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            R = (0, r.jsxs)("li", {
                className: eP()(this.getClassName(), { [eo.r9]: this.isDisabled(), [eo.wH]: n }),
                "data-dnd-name": (0, tZ.m1)(e, lo.default, lN.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, r.jsx)(i2.Y, {
                        targetElementRef: S,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, r.jsxs)(nk.Ay, {
                                ref: this.setChannelItemRef,
                                className: eo.Ki,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: i,
                                unread: l,
                                mentionCount: o,
                                hasActiveThreads: s,
                                subtitle: j?.subtitle,
                                subtitleColor: j?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: f ? H.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: v,
                                "aria-label": (0, i7.Ay)({
                                    channel: e,
                                    unread: l,
                                    mentionCount: o,
                                    isSubscriptionGated: m,
                                    embeddedActivitiesCount: p?.length,
                                }),
                                children: [
                                    g &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !g &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                e.type === H.rbe.GUILD_APP
                                                    ? (0, r.jsx)(l6, { channel: e, isSuggestedSection: _ })
                                                    : null,
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    n &&
                        (0, r.jsx)(lY.A, {
                            targetElementRef: S,
                            channelType: e.type,
                            isTargetInViewport: x,
                            onVisibilityChange: this.handleMenuItemPopoverVisibilityChange,
                        }),
                ],
            });
        return h ? d(c(R)) : R;
    }
}
let sg = F(sm);
function sA(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: s, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, iO.NR)(t),
        u = (0, h.cf)([nA.Ay], () => ({
            unread: nA.Ay.hasUnread(t.id),
            ackMessageId: nA.Ay.ackMessageId(t.id),
            isLowImportanceMention: nA.Ay.getIsMentionLowImportance(t.id),
        })),
        m = (0, h.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(t)),
        g = (0, h.cf)([U.A, P.A], () => {
            let e = U.A.getChannel(t.parent_id);
            return {
                canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    ((0, M.ai)(n.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        A = (0, h.bG)([ie.A], () => ie.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, iD.A)(t.id),
        C = (0, h.bG)([w.Ay], () => w.Ay.isFavorite(n.id, t.id)),
        E = (0, lK.ni)(t),
        x = (0, lz.Gp)(t.id),
        N = lD({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: f,
            isNewChannel: A,
            muted: s,
            enableActivities: x,
            resolvedUnreadSetting: m,
        }),
        _ = (0, l_.Ay)(t),
        [S, I] = a.useState(!1),
        b = (0, lF.K)(
            a.useCallback((e) => {
                I(e);
            }, []),
        ),
        G = (0, h.bG)([lq.A, lX.Ay], () => lq.A.getChannelId() !== t.id && lX.Ay.isCurrentUserGuest(t.getGuildId())),
        j = (0, i6.BX)("ConnectedTextChannel");
    return G
        ? null
        : (0, r.jsx)(sg, {
              ...u,
              ...g,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: p,
              needSubscriptionToAccess: f,
              isNewChannel: A && e.canBeNewChannel,
              isFavoriteSuggestion: l && !C,
              channelIsContentGated: E,
              channelInfo: N,
              embeddedApps: _,
              resolvedUnreadSetting: m,
              hasChannelInfo: null != N,
              enableActivities: x,
              isTargetInViewport: S,
              channelItemRef: b,
              shouldEnlargeTargets: j,
          });
}
var sf = n(900797),
    sp = n(636585),
    sC = n(531685),
    sE =
        (((s = {}).HIDDEN = "hidden"),
        (s.UNREAD = "unread"),
        (s.MENTIONS = "mentions"),
        (s.VOICE_CHANNELS = "voice-channels"),
        s);
let sx = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sN = { topBar: sx, bottomBar: sx },
    s_ = {},
    sS = {};
function sI(e) {
    let t = U.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? iz.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tr.Y)(t)
    );
}
function sb(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = w.Ay.isGuildCollapsed(n),
        l = w.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nA.Ay.getMentionCount(e) > 0;
}
function sG(e) {
    return (
        !w.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? th.A.getMutableParticipants(e.id, tm.ip.SPEAKER).length > 0
            : to.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sj(e) {
    let { guildChannels: t } = t_.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sS[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let i = null,
        l = null,
        s = null,
        r = null,
        a = !0,
        o = !0,
        c = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [m, g, A] = t.getSlicedChannels(n);
    for (let e = 0; e < g.length; e++) {
        let t = g[e];
        if (
            ((sI(t.id) || d().some(t.threadIds, sI)) && (o = !1),
            (sb(t.id) || d().some(t.threadIds, sb)) && (a = !1),
            h.includes(t.id) && (c = !0),
            !o && !a && c)
        )
            break;
    }
    let f = 0,
        p = !1,
        C = 0,
        E = !1;
    if (o || a)
        for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            ((sI(t.id) || d().some(t.threadIds, sI)) && (null == l && (l = t.id), (p = !0)),
                (sb(t.id) || d().some(t.threadIds, sb)) &&
                    (null == i && (i = t.id),
                    (f += nA.Ay.getMentionCount(t.id)),
                    (f += d().sumBy(t.threadIds, nA.Ay.getMentionCount))));
        }
    if (o || a)
        for (let e = 0; e < A.length; e++) {
            let t = A[e];
            if (!o && !a) break;
            ((sI(t.id) || d().some(t.threadIds, sI)) && (null == r && (r = t.id), (E = !0)),
                (sb(t.id) || d().some(t.threadIds, sb)) &&
                    (null == s && (s = t.id),
                    (C += nA.Ay.getMentionCount(t.id)),
                    (C += d().sumBy(t.threadIds, nA.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && d().some(_, sG)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : o && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: i })
            : o && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: l }));
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return ((s_[e] = { topBar: S ? (N ?? sx) : sx, bottomBar: I ? (x ?? sx) : sx }), !0);
}
let sv = d().throttle(sj, 200);
function sR(e) {
    let { guildId: t } = e,
        n = O.A.getGuild(t);
    return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && sv(t);
}
function sy(e) {
    let { id: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let i = O.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && sv(n.guild_id);
}
function sM(e) {
    let { channel: t } = e,
        n = U.A.getChannel(t.id);
    if (null == n) return !1;
    let i = O.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && sv(n.guild_id);
}
function sT(e) {
    let { channelId: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let i = O.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && V.A.getGuildId() === n.guild_id && sv(n.guild_id)
    );
}
function sL(e) {
    let { guildId: t } = e;
    return null != t && sv(t);
}
class sU extends h.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(t_.A, U.A, O.A, iz.A, nA.Ay, V.A, to.Ay, th.A, w.Ay, lo.default);
    }
    getUnreadStateForGuildId(e) {
        return s_[e] ?? sN;
    }
}
let sD = new sU(e9.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = O.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(H.GuildFeatures.COMMUNITY) &&
            null != n &&
            !d().isEqual(sS[t], n) &&
            ((sS[t] = n), sj(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            d()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return U.A.getChannel(t)?.guild_id;
                })
                .filter(td.Vq)
                .uniq()
                .forEach((e) => {
                    let t = O.A.getGuild(e);
                    null != t && t.features.has(H.GuildFeatures.COMMUNITY) && sv(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sT,
    CHANNEL_DELETE: sM,
    CHANNEL_LOCAL_ACK: sT,
    MESSAGE_ACK: sT,
    MESSAGE_CREATE: sT,
    MESSAGE_DELETE_BULK: sT,
    MESSAGE_DELETE: sT,
    PASSIVE_UPDATE_V2: function (e) {
        let t = O.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(H.GuildFeatures.COMMUNITY)) && sv(e.guildId);
    },
    RESORT_THREADS: sT,
    THREAD_CREATE: sM,
    THREAD_DELETE: sM,
    THREAD_LIST_SYNC: sR,
    THREAD_MEMBER_UPDATE: sy,
    THREAD_MEMBERS_UPDATE: sy,
    THREAD_UPDATE: sM,
    BULK_CLEAR_RECENTS: sR,
    CATEGORY_COLLAPSE_ALL: sR,
    CATEGORY_EXPAND_ALL: sR,
    CURRENT_USER_UPDATE: function () {
        let e = lo.default.getCurrentUser()?.nsfwAllowed;
        if (e === i) return !1;
        i = e;
        let t = V.A.getGuildId();
        if (null == t) return !1;
        let n = O.A.getGuild(t);
        return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && sv(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = V.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = s_[n];
        return null != i && "voice-channels" === i.bottomBar.mode && sv(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sL,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sL,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sv(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sL,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sL,
});
var sO = n(350536);
let sP = { friction: 30, tension: 300 };
function sV(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, h.bG)([to.Ay], () => to.Ay.getVoiceStates(t.id), [t.id]),
        s = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, nc.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, r.jsxs)(J.D, {
        className: eP()(sO.M0, sO.OF),
        onClick: s,
        children: [
            (0, r.jsx)(tq.H, { size: "custom", className: sO.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, r.jsx)(e1.E, {
                variant: "text-xs/semibold",
                className: sO.pM,
                children: er.intl.format(er.t["fDlr+F"], { count: d.length }),
            }),
            (0, r.jsx)(sp.A, {
                guildId: t.id,
                className: sO.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: l$._3.SIZE_16,
            }),
        ],
    });
}
function sw(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: s } = e,
        { bottomBar: o, topBar: d } = (0, h.cf)([sD], () => sD.getUnreadStateForGuildId(n.id)),
        c = (0, h.bG)([sC.A], () => sC.A.isFocused()),
        { mode: u, mentionCount: m, targetChannelId: g } = "bottom" === t ? o : d,
        A = u === sE.HIDDEN,
        f = (0, e0.z)(
            {
                to: { transform: A ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sP,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), null != g && s(g));
            },
            [s, g],
        );
    return (0, r.jsx)("div", {
        className: eP()(sO.kL, { [sO.Mn]: "top" === t, [sO.sQ]: "bottom" === t }),
        children: (0, r.jsx)(eQ.animated.div, {
            className: sO.pK,
            style: f,
            "aria-hidden": A,
            children: (function () {
                switch (u) {
                    case sE.HIDDEN:
                        return (0, r.jsx)("div", { className: eP()(sO.M0, sO.Te) });
                    case sE.UNREAD:
                        return (0, r.jsxs)(J.D, {
                            className: sO.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, r.jsx)(tY.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sO.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, r.jsx)(sf.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sO.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, r.jsx)(e1.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sO.pM,
                                    children: er.intl.string(er.t.FCRiT3),
                                }),
                            ],
                        });
                    case sE.MENTIONS:
                        return (0, r.jsx)(J.D, {
                            className: eP()(sO.M0, sO.vU),
                            onClick: p,
                            children: (0, r.jsx)(e1.E, {
                                variant: "text-xs/semibold",
                                color: "badge-primary-text",
                                className: sO.pM,
                                children: er.intl.format(er.t.EQcLyp, { count: m }),
                            }),
                        });
                    case sE.VOICE_CHANNELS:
                        return (0, r.jsx)(sV, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sH = n(310953),
    sk = n(173860);
function sB(e) {
    let t = U.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? iz.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tr.Y)(t)
    );
}
function sF(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = w.Ay.isGuildCollapsed(n),
        l = w.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nA.Ay.getMentionCount(e) > 0;
}
function sz(e) {
    let { guildId: t, guildChannels: n, guildChannelsVersion: i, ref: l, ...s } = e,
        a = (0, sH.W)(t, n, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, h.bG)([sC.A], () => sC.A.isFocused());
    return (0, r.jsx)(sk.A, { ref: l, ...s, isUnread: sB, isMentioned: sF, items: a, animate: o });
}
var sK = n(81466);
function sW(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: s } = (0, h.cf)(
            [nA.Ay],
            () => ({
                hasUnread: nA.Ay.hasUnread(t.id, nE.P.GUILD_EVENT),
                mentionCount: nA.Ay.getMentionCount(t.id, nE.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, h.bG)([w.Ay], () => w.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, I.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("489565"),
                n.e("684231"),
                n.e("570690"),
                n.e("886631"),
                n.e("884841"),
                n.e("998835"),
                n.e("694303"),
                n.e("147626"),
                n.e("256373"),
                n.e("970644"),
                n.e("449347"),
                n.e("853934"),
                n.e("468248"),
                n.e("469647"),
                n.e("798354"),
                n.e("188353"),
                n.e("886571"),
            ]).then(n.bind(n, 318104));
            return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
        });
    }
    let d = (0, tw.Ay)(t.id),
        c = d.length > 0 ? er.intl.formatToPlainString(er.t.IBdqSu, { number: d.length }) : er.intl.string(er.t.tlopTM);
    return (0, r.jsx)(et.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(sK.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: i,
        onClick: o,
        onContextMenu: function (e) {
            (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !a,
        trailing: !a && s > 0 ? (0, r.jsx)(eA.hV, { className: n2.Do, disableColor: !0, count: s }) : null,
    });
}
var sY = n(845056),
    sX = n(765379),
    sq = n(271683),
    sJ = n(725613),
    sZ = n(857253),
    s$ = n(360729),
    sQ = n(22231),
    s0 = n(241326),
    s1 = n(750943),
    s3 = n(743674),
    s2 = n(888697),
    s9 = n(26741),
    s5 = n(493819),
    s6 = n(722884),
    s7 = n(579129),
    s4 = n(176431);
function s8(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, bannerHash: s, canModifyHangout: o } = e,
        d = (0, s3.S)(i),
        c = (0, eM.je)(t),
        u = (0, s9.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: s }),
        h = a.useCallback(() => {
            ((0, s9.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s6.A)({ channel: t }));
        }, [t]),
        m = a.useCallback(() => {
            ((0, s9.nK)({ guildId: t.guild_id, channelId: t.id }), (0, s2.e2)(t.id));
        }, [t.guild_id, t.id]),
        g = a.useCallback(
            (e) => {
                c
                    ? (0, e3.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, r.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, r.jsxs)("div", {
        ref: u,
        className: s4.rs,
        onContextMenu: g,
        children: [
            (0, r.jsx)("div", {
                className: s4.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, r.jsx)(s5.A, { imageUrl: i, animatedUrl: l, className: s4.Sl }),
            }),
            o
                ? (0, r.jsxs)("div", {
                      className: s4.n_,
                      children: [
                          (0, r.jsx)(q.m, {
                              text: er.intl.string(s7.default.XJ4UpB),
                              children: (0, r.jsx)(J.D, {
                                  className: s4.HF,
                                  onClick: h,
                                  children: (0, r.jsx)(sQ.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, r.jsx)(q.m, {
                              text: er.intl.string(s7.default.XV4qT6),
                              children: (0, r.jsx)(J.D, {
                                  className: s4.HF,
                                  onClick: m,
                                  children: (0, r.jsx)(s0.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function re(e) {
    let { channel: t } = e,
        n = (0, s9.dX)({ guildId: t.guild_id, channelId: t.id }),
        i = a.useCallback(() => {
            ((0, s9.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s6.A)({ channel: t }));
        }, [t]);
    return (0, r.jsx)("div", {
        ref: n,
        className: s4._o,
        children: (0, r.jsxs)(J.D, {
            className: s4.hH,
            onClick: i,
            children: [
                (0, r.jsx)(s1.X, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(e1.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: er.intl.string(s7.default.NGcIOF),
                }),
            ],
        }),
    });
}
function rt(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, ey.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, eM.W6)(t),
        s = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = a.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eM.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return i
        ? null != c
            ? (0, r.jsx)(s8, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: s,
              })
            : s
              ? (0, r.jsx)(re, { channel: t })
              : null
        : null;
}
var rn = n(290863),
    ri = n(461213),
    rl = n(532622),
    rs = n(882840),
    rr = n(208971),
    ra = n(46054),
    ro = n(569381),
    rd = n(165648);
function rc(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, onClick: s } = e,
        o = (0, rr.G)((0, rs.l)(t)),
        { enableHangoutWindow: d } = (0, ey.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, eM.lr)(t),
        u = null != o && o.length > 0,
        h = (0, rl.Ay)(t, !0),
        m = null != l && l.length > 0;
    if (
        (a.useEffect(() => {
            u && ij.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = eP()(ro.Ui, n && h ? ro.BI : null);
    return u
        ? (0, r.jsx)(J.D, {
              className: g,
              onClick: h ? s : void 0,
              children: (0, r.jsx)(e1.E, {
                  variant: "text-xs/medium",
                  className: eP()(ro.qS, rd.PT),
                  children: (0, r.jsx)(tF.A, { children: ra.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!m || i)
          ? (0, r.jsxs)(J.D, {
                className: g,
                onClick: s,
                children: [
                    (0, r.jsx)(e1.E, {
                        variant: "text-xs/medium",
                        className: ro.qS,
                        children: er.intl.string(er.t.Mgpxiw),
                    }),
                    (0, r.jsx)(sQ.PencilIcon, { color: "currentColor", className: ro.rD, size: "xxs" }),
                ],
            })
          : m
            ? (0, r.jsx)(tF.A, { children: l })
            : null;
}
class ru extends nH {
    state = { shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = a.createRef();
    channelItemRef = a.createRef();
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
        (o && i9.A.updateChatOpen(n.id, !0),
            iU.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: lm.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = O.A.getGuild(t.getGuildId());
        null != i &&
            (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
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
                    n.e("465694"),
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
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
        return (0, nc.Pd)(e, iV.A, O.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eo.ZS;
        if (null != t)
            if (e > t) return eo.mU;
            else return eo.TR;
        return eo.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        (null != t && (0, i8.V)(t) && (0, i4.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sq.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = lW(this.props.subtitle)?.subtitle,
            { hovered: i } = this.state;
        return (0, r.jsx)(rc, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: i,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(iZ.A, {
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
        return !(null != n && n.length > 0) || i ? null : (0, r.jsx)(rt, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, r.jsx)(lh, { type: lu.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: i, shouldEnlargeTargets: l } = this.props;
        if (!t)
            return (0, r.jsx)(q.m, {
                asContainer: !0,
                text: er.intl.string(er.t.ZXxLQg),
                children: (0, r.jsx)(J.D, {
                    className: eP()(eo.Xs, { [eo.Tf]: n }),
                    onClick: () => {
                        (i9.A.updateChatOpen(e.id, !0),
                            (0, lg.iN)(e.id, i ? { source: lm.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": er.intl.string(er.t.ZXxLQg),
                    focusProps: l ? { offset: 2 } : void 0,
                    children: (0, r.jsx)(iL.ChatIcon, { size: "xs", color: "currentColor", className: eo.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: eo.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? er.intl.string(er.t.rZfiNq) : null;
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: i,
                resolvedUnreadSetting: l,
                mentionCount: s,
                locked: a,
                connectChannelDropTarget: o,
                connectChannelDragSource: d,
                connectUserDropTarget: c,
                connectDragPreview: u,
                canReorderChannel: h,
                canMoveMembers: m,
                showTutorial: g,
                hasActiveEvent: A,
                embeddedApps: f,
                isSubscriptionGated: p,
                isFavoriteSuggestion: C,
                withGuildIcon: E,
                hasStartTime: x,
                voiceChannelStartTime: N,
                shouldHighlightChannel: _,
                shouldUseAnimatedWaveform: S,
                voiceStates: I,
            } = this.props,
            { shouldShowGuildVerificationPopout: b } = this.state,
            G = _ || S,
            j = (0, r.jsxs)("li", {
                ref: this.ref,
                className: eP()(this.getModeClass(), { [eo.r9]: this.isDisabled(), [eo.fy]: _ }),
                "data-dnd-name": (0, tZ.m1)(e, lo.default, lN.A),
                children: [
                    _ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { className: eo.UQ }),
                                (0, r.jsx)("div", { className: eo.l0 }),
                            ],
                        }),
                    (0, r.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, r.jsx)(i2.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, r.jsx)(q.m, {
                                    text: this.getTooltipText(),
                                    children: (0, r.jsxs)(nk.Ay, {
                                        ref: this.channelItemRef,
                                        className: eo.Ki,
                                        iconClassName: eP()({ [eo.Gj]: A || x || G }),
                                        hasActiveEvent: A,
                                        channel: e,
                                        selected: !C && t,
                                        connected: n,
                                        unread: n ? i : void 0,
                                        resolvedUnreadSetting: l,
                                        mentionCount: s,
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
                                        "aria-label": (0, i7.Ay)({
                                            channel: e,
                                            unread: i,
                                            mentionCount: s,
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
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !C &&
                                                (0, r.jsxs)(r.Fragment, {
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
            m && (j = c(j)),
            h && (j = o(d(j))),
            g &&
                (j = (0, r.jsx)(nn.A, {
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
let rh = F((0, i5.F)(ru));
function rm(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: s,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, h.cf)([nA.Ay], () => ({ unread: nA.Ay.hasUnread(n.id), mentionCount: nA.Ay.getMentionCount(n.id) })),
        c = (0, h.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(n)),
        u = (0, h.cf)([U.A, la.A, P.A], () => {
            let e = U.A.getChannel(n.parent_id),
                l = la.A.getCheck(n.guild_id);
            return {
                canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    ((0, M.ai)(t.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: P.A.can(H.xBc.MOVE_MEMBERS, n),
                locked: !P.A.can(H.xBc.CONNECT, n),
                bypassLimit: P.A.can(H.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
            };
        }),
        m = (0, h.bG)([iV.A], () => iV.A.hasVideo(n.id)),
        { enabled: g } = (0, s$.mf)({ guildId: t.id, location: "VoiceChannel" }),
        A = (0, l_.Ay)(n),
        f = (0, h.yK)(
            [ri.A, rn.A, lC.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = lC.default.getId(),
                    t = [];
                for (let { user: i } of o)
                    for (let l of i.id === e ? ri.A.getActivities() : rn.A.getActivities(i.id, n.guild_id))
                        !(0, sY.N)(l) || (0, sX.A)(l) || null == l.name || t.includes(l.name) || t.push(l.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, tZ.Ay)(n),
        C = (0, tw.Qs)(n.id),
        E = (0, h.bG)([sJ.A], () => sJ.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, iD.A)(n.id),
        _ = (0, sZ.A)(),
        S = (0, h.bG)([w.Ay], () => w.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, no.b)(t.id, "VoiceChannel"),
        j = null != o && o.length > 0,
        v = b && j,
        R = G && j,
        y = lD({
            channel: n,
            isChannelSelected: s,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        T = I && null == y,
        L = (0, i6.BX)("VoiceChannel");
    return (0, r.jsx)(rh, {
        channelName: p,
        embeddedApps: A,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: H.$pd.PLAYING,
        video: m,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...u,
        ...e,
        connected: I,
        isFavoriteSuggestion: l && !S,
        forceShowButtons: T,
        channelInfo: y,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != y,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: v,
        shouldUseAnimatedWaveform: R,
        guildRoomsEnabled: g,
        shouldEnlargeTargets: L,
    });
}
n(131955);
function rg(e) {
    return (
        m.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * m.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rA extends a.PureComponent {
    static contextType = c.nC;
    _list = null;
    unreadTopRef = a.createRef();
    unreadBottomRef = a.createRef();
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
            { scrollTop: r } = tE.A.getGuildDimensions(i);
        (null != n
            ? (this.scrollToChannel(n), x.A.clearChannelListScrollTo(i))
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
                    a = s.threadOffset * rg(r);
                l.scrollIntoViewRect({ start: e + a, end: e + a + rg(r), padding: n, animate: t, callback: i });
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
                if (i < tN.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, tC.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, tr.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, o.throttle)((e) => {
        x.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props,
            l = "compact" === i ? 8 : 12;
        if (e === tN.PU) return l;
        if (e === tN.bK) return t.features.has(H.GuildFeatures.HUB) ? 0 : l;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let i = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == i || i.record.type === H.rbe.GUILD_CATEGORY ? 9 : 25;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nu(n, r, t),
                u = d ? (a ? 9 : m.A.space.SPACE_SM.resolve({ density: o ?? "default" })) : 0;
            if (!c || t === tN.PU) return u;
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
                                      if (!P.A.can(H.xBc.VIEW_CHANNEL, e)) return !1;
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
            a = rg(r);
        if (e === tN.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tB.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : e.getRow(t) === tB.n.GUILD_ONBOARDING_SETUP_PROGRESS
                    ? e.getRows().length > 1
                        ? 63
                        : 51
                    : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === H.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += rg(t);
            let n = i[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eL.Ln)(d.record) && (t += 32),
                    (a += t + m.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, ey.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, eM.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
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
        (null != n && s.includes(n) && (l = (0, eU.xb)(t)), (0, eU.DD)(e.id, s, l));
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: i,
                guild: l,
                selectedChannelId: s,
                disableManageChannels: a,
            } = this.props;
        return (0, r.jsx)(
            nr,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: i,
                selectedChannelId: s,
                disableManageChannels: a,
            },
            (function (e, t) {
                switch (e) {
                    case tN.PU:
                        return "hoisted-spacer";
                    case tN.bK:
                        return "uncategorized-spacer";
                    case tN.HP:
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
                selectedChannelId: s,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: m,
                optInEnabled: g,
                withGuildIcon: A,
            } = this.props;
        if (t === tN.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tB.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, r.jsx)(
                        eT.A,
                        { guild: i, channel: tx.Ay.getDefaultChannel(i.id) },
                        tB.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tB.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, r.jsx)(ts, { guild: i, withMargin: l.length > 1 }, tB.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tB.n.GUILD_SPACE:
                    return (0, r.jsx)(eR, { guild: i, selected: s === ei.VV.GUILD_SPACE }, tB.n.GUILD_SPACE);
                case tB.n.GUILD_HOME:
                    return (0, r.jsx)(il, { guild: i, selected: s === ei.VV.GUILD_HOME }, tB.n.GUILD_HOME);
                case tB.n.GUILD_SCHEDULED_EVENTS:
                    return (0, r.jsx)(
                        sW,
                        { guild: i, selected: s === tB.n.GUILD_SCHEDULED_EVENTS },
                        tB.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tB.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, r.jsx)(
                        ix,
                        { guild: i, selected: s === ei.VV.ROLE_SUBSCRIPTIONS },
                        tB.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tB.n.GUILD_SHOP:
                    return (0, r.jsx)(iM, { guild: i, selected: s === ei.VV.GUILD_SHOP }, tB.n.GUILD_SHOP);
                case tB.n.GUILD_GAME_SHOP:
                    return (0, r.jsx)(n5, { guild: i, selected: s === ei.VV.GAME_SHOP }, tB.n.GUILD_GAME_SHOP);
                case tB.n.GUILD_CONJURE:
                    return (0, r.jsx)(nI, { guild: i, selected: s === ei.VV.CONJURE }, tB.n.GUILD_CONJURE);
                case tB.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, r.jsx)(ic, { guild: i });
                case tB.n.GUILD_ONBOARDING_SETUP_PROGRESS:
                    return (0, r.jsx)(iC, { guild: i }, tB.n.GUILD_ONBOARDING_SETUP_PROGRESS);
                case tB.n.CHANNELS_AND_ROLES:
                    return (0, r.jsx)(
                        it,
                        { guild: i, selected: s === ei.VV.CHANNEL_BROWSER || s === ei.VV.CUSTOMIZE_COMMUNITY },
                        tB.n.CHANNELS_AND_ROLES,
                    );
                case tB.n.GUILD_DIRECTORY:
                    return (0, r.jsx)(
                        nB,
                        { guild: i, selectedChannelId: s, disableManageChannels: h },
                        tB.n.GUILD_DIRECTORY,
                    );
                case tB.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, r.jsx)(
                        eN,
                        { guild: i, selected: s === ei.VV.MEMBER_SAFETY },
                        tB.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tB.n.GUILD_BOOSTS:
                    return (0, r.jsx)(e$, { guildId: i.id, selected: s === ei.VV.GUILD_BOOSTS }, tB.n.GUILD_BOOSTS);
                case tB.n.GAME_SERVERS:
                    return (0, r.jsx)(em, { guildId: i.id, selected: s === ei.VV.GAME_SERVERS }, tB.n.GAME_SERVERS);
                case tB.n.GAME_SERVERS_EMPTY:
                    return (0, r.jsx)(
                        ed,
                        { guildId: i.id, selected: s === ei.VV.GAME_SERVERS },
                        tB.n.GAME_SERVERS_EMPTY,
                    );
                case tB.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, r.jsx)(
                        ih,
                        { guild: i, selected: s === ei.VV.GUILD_OFFICIAL_MESSAGES },
                        tB.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tN.xu,
            x = C.record,
            N = `${t}${C.id}`;
        switch (x.type) {
            case H.rbe.GUILD_ANNOUNCEMENT:
            case H.rbe.GUILD_TEXT:
            case H.rbe.GUILD_FORUM:
            case H.rbe.GUILD_MEDIA:
            case H.rbe.DM:
            case H.rbe.GROUP_DM:
            case H.rbe.GUILD_APP:
                return (0, r.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, r.jsx)(sA, {
                                channel: x,
                                guild: i,
                                position: C.position,
                                selected: s === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: g && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            C.threadCount > 0
                                ? (0, r.jsx)(i3, {
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
            case H.rbe.GUILD_STAGE_VOICE:
                return (0, r.jsx)(
                    lw,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: s === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id] ?? [],
                        speakerVoiceStates: m[C.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case H.rbe.GUILD_VOICE:
                return (0, r.jsx)(
                    rm,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: s === C.id,
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
            case H.rbe.GUILD_STORE:
                return (0, r.jsx)(lB, { channel: x, guild: i, position: C.position, selected: s === C.id }, N);
            case H.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, r.jsx)(nt, { channel: x }, `readonly-${x.id}`);
            case H.rbe.PUBLIC_THREAD:
            case H.rbe.PRIVATE_THREAD:
            case H.rbe.ANNOUNCEMENT_THREAD:
                return (0, r.jsx)(
                    sA,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: s === C.id,
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
                selectedChannelId: s,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, r.jsx)(
            nm,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: i,
                sectionIndex: t,
                voiceStates: l,
                selectedChannelId: s,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: i, canHaveVoiceSummary: l } = nu(t, n, e);
                return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: l, guildChannels: s, guildChannelsVersion: a } = this.props;
        return (0, r.jsx)("div", {
            className: ns.Eo,
            children: (0, r.jsx)(sz, {
                ref: this.unreadTopRef,
                textUnread: er.intl.string(er.t.FCRiT3),
                textMention: er.intl.string(er.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: ns.Vq,
                barClassName: ns.bu,
                guildId: l,
                guildChannels: s,
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
        return (0, r.jsx)(sz, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: er.intl.string(er.t.FCRiT3),
            textMention: er.intl.string(er.t["8zH0LJ"]),
            hide: null == i && l,
            className: ns.di,
            barClassName: ns.bu,
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
        if (e !== tN.PU) {
            if (null == t)
                return e === tN.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tN.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: i } = this.props,
            l = {};
        (0, M.ai)(n) && (l["data-favorites"] = !0);
        let { ref: s, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === i ? 8 : 12;
        return (0, r.jsx)(A.sk, {
            children: (t) =>
                (0, r.jsx)(
                    f.OZ,
                    {
                        ref: this.setListRef,
                        className: ns.XG,
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
                        innerAriaLabel: er.intl.string(er.t.OGiMXJ),
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
        if (!tf.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tA.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || tA.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, r.jsx)(Y.V0, {
            children: (i) =>
                (0, r.jsx)(p.F, {
                    component: (0, r.jsx)(C.A, {
                        children: (0, r.jsx)(p.H, { id: i, children: er.intl.string(er.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, r.jsxs)(a.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: ns.Eo,
                                      children: (0, r.jsx)(sw, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, r.jsx)(sw, {
                                      position: "bottom",
                                      guildChannels: e,
                                      guildChannelsVersion: t,
                                      jumpToVoiceChannels: this.jumpToVoiceChannels,
                                      jumpToChannel: this.jumpToChannel,
                                  }),
                              ],
                          })
                        : (0, r.jsxs)(a.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()],
                          }),
                }),
        });
    }
}
let rf = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        l = (0, h.bG)([z.Ay], () => z.Ay.keyboardModeEnabled),
        { analyticsLocations: s } = (0, W.Ay)(K.A.GUILD_CHANNEL_LIST),
        o = (0, h.bG)([U.A], () => U.A.getChannel(n)),
        d = (0, h.bG)([U.A], () => U.A.getChannel(i)),
        m = (0, h.bG)([V.A], () => V.A.getGuildId()),
        g = (0, eD.jN)(t),
        A = a.useRef(null),
        f = a.useCallback((e, t) => {
            let n = A.current;
            null != n &&
                (H.Ut1.test(t) || (0, ei.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        p = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        E = (0, u.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: l,
            setFocus: f,
            scrollToStart: p,
            scrollToEnd: C,
        }),
        x = E.setFocus;
    a.useEffect(() => {
        null != n && x(n);
    }, [n, x]);
    let _ = (function (e) {
        let [t] = (0, h.bG)(
            [th.A, U.A, ta.A],
            () => {
                let t;
                return [
                    (t = (0, M.ai)(e)
                        ? tu.default
                              .keys(ta.A.getFavoriteChannels())
                              .map((e) => U.A.getChannel(e))
                              .filter(td.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : th.A.getChannels(e)).reduce((e, t) => {
                        let n = th.A.getMutableParticipants(t.id, tm.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === tm.wY.VOICE).map(tg)), e);
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + th.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            tc.D,
        );
        return t;
    })(t);
    return (0, r.jsx)(W.f5, {
        value: s,
        children: (0, r.jsx)(N.A, {
            section: H.JJy.GUILD_CHANNEL_LIST,
            children: (0, r.jsxs)(c.hD, {
                navigator: E,
                children: [
                    (0, r.jsx)(tp.q, { containerRef: E.containerProps.ref, itemType: k }),
                    (0, r.jsx)(rA, {
                        ...e,
                        listNavigator: E,
                        ref: A,
                        selectedChannel: o,
                        selectedVoiceChannel: d,
                        stageChannelSpeakerVoiceStates: _,
                        selectedGuildId: m,
                        optInEnabled: g,
                    }),
                ],
            }),
        }),
    });
};
function rp(e) {
    let t = (function (e) {
            var t;
            let n,
                i,
                l =
                    ((t = e.id),
                    (n = (0, tV.A)(t)),
                    (i = (0, tw.Ay)(t)),
                    !(0, h.bG)(
                        [O.A],
                        () => {
                            if (null == t) return !1;
                            let e = O.A.getGuild(t);
                            return e?.features.has(H.GuildFeatures.HUB) ?? !1;
                        },
                        [t],
                    ) &&
                        (n || i.length > 0)),
                s = (0, tR.W)(e.id),
                r = (0, tP.vz)(e.id),
                a = (0, tG.r)(e),
                o = (0, tk.jz)(e),
                d = (0, tL.d)(e.id),
                c = (0, tI.bG)([tM.h], () => tM.h.getNewMemberActions(e.id), [e.id]),
                u = (0, tb.Q9)(e, "useGuildActionRows"),
                m = (0, tO.A)(e.id),
                g = (0, tT.jY)(e.id),
                A = (0, tD.A)(e.id),
                { showSetupProgressRow: f } = (0, tU.D)(`useGuildActionRows${A ? "" : "-DISABLED"}`),
                p = (0, ty.fw)(e.id),
                C = (0, eG.Uq)(e.id, "useGuildActionRows"),
                E = [],
                x = e.features.has(H.GuildFeatures.HUB),
                N = e.features.has(H.GuildFeatures.COMMUNITY),
                _ = e.features.has(H.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                S = (0, e8.A)(e.id),
                I = tt(e),
                b = (0, tH.bW)(e.id, "useGuildActionRows"),
                G = (0, tj.C$)(e.id, "useGuildActionRows"),
                j = e.features.has(H.GuildFeatures.GAME_SERVERS),
                v = (0, tv.N)("useGuildActionRows"),
                [R] = (0, ee.kn)(G && v && !j ? [X.M.EMPTY_GAME_SERVER_TAB] : [], { bypassAutoDismiss: !0 });
            return (
                x && E.push(tB.n.GUILD_HUB_HEADER_OPTIONS),
                A && f
                    ? E.push(tB.n.GUILD_ONBOARDING_SETUP_PROGRESS)
                    : !g && d && m && null != c && c.length > 0
                      ? E.push(tB.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                      : e.premiumProgressBarEnabled && I > 0 && E.push(tB.n.GUILD_PREMIUM_PROGRESS_BAR),
                !x && d && E.push(tB.n.GUILD_HOME),
                C && E.push(tB.n.GUILD_SPACE),
                l && E.push(tB.n.GUILD_SCHEDULED_EVENTS),
                !x && N && E.push(tB.n.CHANNELS_AND_ROLES),
                r && E.push(tB.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && E.push(tB.n.GUILD_SHOP),
                o && E.push(tB.n.GUILD_GAME_SHOP),
                ((p && (N || _)) || (s && e.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    E.push(tB.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                S && E.push(tB.n.GUILD_BOOSTS),
                b && E.push(tB.n.GUILD_OFFICIAL_MESSAGES),
                G && (j ? E.push(tB.n.GAME_SERVERS) : null != R && E.push(tB.n.GAME_SERVERS_EMPTY)),
                u && E.push(tB.n.GUILD_CONJURE),
                E
            );
        })(e.guild),
        n = (0, h.cf)([t_.A], () => t_.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: i } = (0, E.wR)();
    return (0, r.jsx)(rf, { ...e, ...n, density: i });
}
