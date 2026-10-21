let l;
(n.d(t, { B: () => rY, i: () => rW }), n(321073));
var i,
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
    j = n(44757),
    v = n(97587),
    G = n(838533),
    R = n(79843),
    y = n(466152),
    L = n(5180),
    T = n(770376),
    M = n(924985),
    U = n(734057),
    D = n(769765),
    P = n(71393),
    O = n(576705),
    w = n(967198),
    V = n(543465),
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
        let { channel: l, position: i } = t,
            [s, a] = (0, _.H)(
                () => ({
                    accept: k,
                    drop: (e) =>
                        (function (e, t) {
                            let { channel: n, position: l } = e,
                                i = w.A.getGuildId(),
                                s = (0, j.QO)((0, G.A)(i, t.id), t.position, n, l, t.channelList);
                            if (null == s) return;
                            let r = (0, G.A)(i, t.id);
                            if (null == r) return;
                            let a = D.A.getCategories(i),
                                o = (0, j.RL)(r, (0, G.A)(i, s.referenceId), s.parentId, a);
                            (0, y.A)(i, r, s.parentId, o);
                        })({ channel: l, position: i }, e),
                    canDrop: (e) =>
                        (function (e, t) {
                            let { channel: n, position: l } = e,
                                i = U.A.getChannel(t.id);
                            if (null == i) return !1;
                            let s = (0, j.QO)(U.A.getChannel(t.id), t.position, n, l, t.channelList);
                            if (null == s) return !1;
                            if ((0, L.ai)(w.A.getGuildId())) return !0;
                            if (V.Ay.isFavorite(t.guildId, n.id)) return !1;
                            let r = P.A.getGuild(t.guildId);
                            if (null == r) return !1;
                            let a = U.A.getChannel(s.parentId),
                                o = (0, v.Ay)((0, v.Fd)(i), r),
                                d = (0, v.Ay)(a, r);
                            return o && d;
                        })({ channel: l, position: i }, e),
                    collect: B,
                }),
                [l, i],
            ),
            [, o, d] = (0, S.i)(
                () => ({
                    type: k,
                    canDrag: () =>
                        (function (e) {
                            let t = w.A.getGuildId(),
                                l = (0, R.A)(e, t);
                            if (null == l) return !0;
                            switch (l.reason) {
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
                                            return (n) => (0, r.jsx)(t, { ...n, guildId: l.guild.id, channelId: e.id });
                                        }),
                                        !1
                                    );
                            }
                        })(l),
                    item: () =>
                        (function (e, t) {
                            let { id: n, parent_id: l, guild_id: i, type: s } = e,
                                r = w.A.getGuildId(),
                                a = D.A.getCategories(r);
                            return {
                                isChannelDrag: !0,
                                id: n,
                                position: t,
                                parentId: l,
                                type: s,
                                channelList: (0, b.A)(a._categories, a, (e) => {
                                    let { channel: t } = e;
                                    return t.type === H.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                        ? !!(0, L.ai)(r) ||
                                              (O.A.can(H.xBc.MANAGE_CHANNELS, t) && O.A.can(H.xBc.VIEW_CHANNEL, t))
                                        : !M.A.isCollapsed(t.parent_id);
                                }),
                                guildId: i,
                            };
                        })(l, i),
                }),
                [l, i],
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
    el = n(746080),
    ei = n(49999),
    es = n(394107),
    er = n(105292),
    ea = n(275833),
    eo = n(964306);
let ed = a.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [i, s] = (0, ee.ww)([X.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === X.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = a.useCallback(() => {
            (s(ei.i.USER_DISMISS), (0, en.pX)(H.BVt.CHANNEL(t, el.VV.GAME_SERVERS)));
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
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var ec = n(361158),
    eu = n(270533),
    eh = n(186111);
let em = a.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, I.useHasAnyModalOpen)(),
        i = (0, h.bG)([eh.A], () => eh.A.hasLayers()),
        s = (0, ec.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ee.ww)([X.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === X.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [u, m] = (0, ee.ww)(l || i || s || !c ? [] : [X.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = a.useCallback(
            (e) => {
                (d(e), m(e));
            },
            [d, m],
        ),
        A = a.useCallback(() => {
            (g(ei.i.USER_DISMISS), (0, en.pX)(H.BVt.CHANNEL(t, el.VV.GAME_SERVERS)));
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
        l = (0, h.bG)([O.A], () => O.A.can(H.xBc.KICK_MEMBERS, t)),
        i = (0, h.bG)([ep.A], () => ep.A.getSubmittedGuildJoinRequestTotal(t.id)),
        s = l ? (i ?? 0) : 0;
    a.useEffect(() => {
        l &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            ef.A.fetchGuildJoinRequests({ guildId: t.id, status: eC.B5.SUBMITTED, limit: eE.L });
    }, [l, t]);
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
var e_ = n(332837),
    eS = n(942857),
    eI = n(593673),
    eb = n(313627),
    ej = n(43105),
    ev = n(93675),
    eG = n(61567);
function eR(e) {
    let t,
        n,
        { targetElementRef: l, guildName: i, isAdmin: s, isPublished: a, onCheckItOut: o, onDismiss: d } = e;
    return (
        s
            ? a
                ? ((t = er.intl.string(eG.default.EIuDzZ)), (n = er.intl.string(eG.default.ev0nwK)))
                : ((t = er.intl.string(eG.default.O2eErX)), (n = er.intl.string(eG.default["5W7HIh"])))
            : ((t = er.intl.string(eG.default.PE4Cid)),
              (n = er.intl.formatToPlainString(eG.default.Uf5Ve7, { serverName: i }))),
        (0, r.jsx)(ej.A, {
            targetElementRef: l,
            title: t,
            body: n,
            graphic: {
                type: "rive",
                rive: ev.f,
                aspectRatio: "16/9",
                props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
            },
            actions: [{ text: er.intl.string(er.t.RzWDqY), variant: "primary", onClick: o }],
            shouldShow: !0,
            position: "right",
            align: "top",
            alignmentStrategy: "edge",
            caretConfig: { align: "start" },
            scrollBehavior: "close",
            onRequestClose: d,
        })
    );
}
var ey = n(151098);
function eL(e) {
    let { guild: t, selected: l } = e,
        i = (0, eS.A)(),
        [s, o] = (0, ee.kn)(i ? [] : [X.M.GUILD_SPACE_COACHMARK], { bypassAutoDismiss: !0 }),
        d = s === X.M.GUILD_SPACE_COACHMARK,
        c = a.useRef(null),
        u = (0, eb.mN)(t),
        h = t.guildSpaceSettings?.publish_status === eI.B.PUBLISHED,
        m = a.useCallback(() => {
            (o(ei.i.USER_DISMISS), (0, en.pX)(H.BVt.CHANNEL(t.id, el.VV.GUILD_SPACE)));
        }, [t.id, o]),
        g = a.useCallback(() => {
            (o(ei.i.TAKE_ACTION), (0, en.pX)(H.BVt.CHANNEL(t.id, el.VV.GUILD_SPACE)));
        }, [t.id, o]),
        A = a.useCallback(() => {
            o(ei.i.USER_DISMISS);
        }, [o]),
        f = a.useCallback(
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
        p = d ? (0, r.jsx)($.E, { type: "new", variant: "primary" }) : null,
        C =
            u && !h
                ? (0, r.jsxs)("div", {
                      className: ey.c,
                      children: [
                          (0, r.jsx)("div", {
                              className: eo.Xs,
                              children: (0, r.jsx)(q.m, {
                                  text: er.intl.string(er.t.R9GHya),
                                  position: "top",
                                  children: (0, r.jsx)(J.D, {
                                      onClick: f,
                                      "aria-label": er.intl.string(er.t.R9GHya),
                                      children: (0, r.jsx)(Z.P, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: eo.gE,
                                      }),
                                  }),
                              }),
                          }),
                          null != p ? (0, r.jsx)("div", { className: eo.yW, children: p }) : null,
                      ],
                  })
                : p;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(et.G, {
                ref: c,
                className: u ? eo.Ki : void 0,
                id: `guild-space-tab-${t.id}`,
                renderIcon: (e) => (0, r.jsx)(e_.HomeIcon, { size: "md", color: "currentColor", className: e }),
                text: er.intl.string(er.t["04IVMq"]),
                selected: l,
                onClick: m,
                trailing: C,
            }),
            d
                ? (0, r.jsx)(eR, {
                      targetElementRef: c,
                      guildName: t.name,
                      isAdmin: u,
                      isPublished: h,
                      onCheckItOut: g,
                      onDismiss: A,
                  })
                : null,
        ],
    });
}
var eT = n(581007),
    eM = n(522435),
    eU = n(285406),
    eD = n(582904),
    eP = n(419534),
    eO = n(395504),
    ew = n(503698),
    eV = n.n(ew),
    eH = n(695366),
    ek = n(104510),
    eB = n(544048),
    eF = n(868652),
    ez = n(379229),
    eK = n(482487),
    eW = n(914732),
    eY = n(828162),
    eX = n(877624),
    eq = n(549996),
    eJ = n(25525),
    eZ = n(247806);
function e$(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case ez.cD.WARNING:
            return (0, r.jsx)(eH.E, { color: m.A.colors.STATUS_WARNING, size: "sm" });
        case ez.cD.UNREAD:
            return (0, r.jsx)(eA.hV, { count: t.count });
        default:
            return null;
    }
}
let eQ = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    e0 = a.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, eW.Ay)(t),
            { showHighlight: s, markAsDismissed: o } = (function () {
                let e = (0, eq.c)(eX.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, l] = (0, ee.Cc)(t ? X.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === X.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: l };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, eK.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            u = a.useCallback(() => {
                (c(),
                    (0, eF.Zm)(t),
                    (0, eY.A)(t, K.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(ei.i.INDIRECT_ACTION));
            }, [t, c, i]),
            m = a.useRef(null),
            g = (0, I.useModalsStore)(I.hasAnyModalOpenSelector),
            A = (0, h.bG)([eh.A], () => eh.A.hasLayers()),
            f = (0, ec.xr)((e) => e.fullScreenLayers.length > 0),
            p = g || A || f,
            C = a.useCallback(() => {
                if (i?.popout == null || p) return null;
                switch (i?.popout?.type) {
                    case ez.o.LEVEL_REACHED:
                        return (0, r.jsx)(eu.HW, { guildId: t, channelRowRef: m, ...i.popout });
                    case ez.o.PERKS_AVAILABLE:
                        return (0, r.jsx)(eu.UB, { guildId: t, channelRowRef: m, ...i.popout });
                    case ez.o.PERKS_PURCHASABLE:
                        return (0, r.jsx)(eu.lw, { guildId: t, channelRowRef: m, ...i.popout });
                    case ez.o.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(eu.bo, { guildId: t, channelRowRef: m, ...i.popout });
                    case ez.o.BOOST_TO_UNLOCK:
                        return (0, r.jsx)(eu.Gw, { guildId: t, channelRowRef: m, ...i.popout });
                    case ez.o.EXPIRING_PERK:
                        return (0, r.jsx)(eu.Mr, { guildId: t, channelRowRef: m, ...i.popout });
                    case ez.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case ez.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(eu.jz, { guildId: t, channelRowRef: m, ...i.popout });
                    case ez.o.GAME_SERVER_NEW_GAMES:
                        return (0, r.jsx)(eu.YX, { guildId: t, channelRowRef: m, ...i.popout });
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, i?.popout, m, p]);
        a.useEffect(() => {
            l && s && o(ei.i.AUTO_DISMISS);
        }, [l, s, o]);
        let E = i?.popout != null || s,
            [x, N] = a.useState(null);
        a.useEffect(() => {
            E || N(null);
        }, [E]);
        let _ = a.useCallback((e) => {
            N(e);
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(et.G, {
                    ref: m,
                    className: eZ.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, r.jsx)(ek._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        E &&
                        (0, r.jsx)("div", {
                            className: eZ.Fi,
                            children: (0, r.jsx)(eB.t, {
                                nextScene: null == x ? "animation" : "LOOP",
                                className: eZ.UU,
                                sceneSegments: eQ,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: _,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: eV()({ [eZ.A7]: i?.showUnread === !0 }),
                        children: er.intl.string(eJ.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: u,
                    showUnread: i?.showUnread === !0,
                    trailing: d
                        ? (0, r.jsx)($.E, { type: "new", variant: "primary" })
                        : (0, r.jsx)(e$, { indicator: i?.indicator }),
                }),
                C(),
            ],
        });
    });
var e1 = n(941143),
    e3 = n(717421),
    e2 = n(834730),
    e9 = n(442433),
    e5 = n(230135),
    e6 = n(73153);
let e7 = {};
class e4 extends h.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (e7 = e);
    }
    getState() {
        return e7;
    }
    getCountForGuild(e) {
        return e7[e];
    }
}
let e8 = new e4(e6.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        e7 = { ...e7, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        e7 = {};
    },
});
var te = n(147925),
    tt = n(363487),
    tn = n(568065);
function tl(e) {
    return (0, a.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(H.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : H.M2T[H.TVA.TIER_3],
            n = Object.values(tn.sy),
            l = Object.values(tn.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var ti = n(196577);
let ts = (e) => {
    let { appliedBoostCount: t, maxBoostCount: n, premiumSubscriberCount: l, className: i, ref: s } = e,
        o = t >= n,
        d = Math.min((t / n) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, e3.z)(
            () => ({ width: t === l ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [t, l],
        );
    return (
        a.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, r.jsxs)("div", {
            ref: s,
            className: ti.hQ,
            children: [
                (0, r.jsx)("div", { className: eV()(ti.L$, i) }),
                (0, r.jsx)(e1.animated.div, { className: eV()(ti.qB, { [ti.mu]: d <= 5 }), style: u }),
                (0, r.jsxs)("div", {
                    className: ti.FS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: ti.Ui,
                            children: [
                                (0, r.jsx)(e2.E, {
                                    className: ti.Qq,
                                    variant: "text-xs/semibold",
                                    children: er.intl.string(eJ.default.NI6Ihe),
                                }),
                                l >= n &&
                                    (0, r.jsx)(e2.E, {
                                        className: ti.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: ti.Ui,
                            children: [
                                (0, r.jsx)(e2.E, {
                                    className: eV()(ti.Qq, ti.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? er.intl.formatToPlainString(eJ.default["Ehpq+7"], { appliedBoostCount: t })
                                        : er.intl.formatToPlainString(eJ.default["/rbPDs"], {
                                              appliedBoostCount: t,
                                              maxBoostCount: n,
                                          }),
                                }),
                                (0, r.jsx)(te.A, {
                                    width: 12,
                                    height: 12,
                                    direction: te.A.Directions.RIGHT,
                                    className: eV()(ti.Qq, ti.ue, ti.OW),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
};
function tr(e) {
    let { guild: t, withMargin: l } = e,
        i = tl(t),
        s = (0, tt.A)(t.id),
        o = a.useCallback(() => {
            (0, eY.A)(t.id, K.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, h.bG)([e8], () => e8.getCountForGuild(t.id) ?? 0);
    a.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, e5.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = a.useCallback(
        (e) => {
            s &&
                (0, e9.L3)(e, async () => {
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
        className: eV()(ti.kL, { [ti.aF]: l }),
        onContextMenu: c,
        children: (0, r.jsx)(ts, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function ta(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(tr, { guild: t, withMargin: n });
}
ts.displayName = "GuildPowerupsProgressBarUI";
var to = n(455234),
    td = n(181079),
    tc = n(607567),
    tu = n(403362),
    th = n(996439),
    tm = n(935208),
    tg = n(63995),
    tA = n(518769);
function tf(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, tc.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var tp = n(787541),
    tC = n(79858),
    tE = n(600761),
    tx = n(95701),
    tN = n(72314),
    t_ = n(808728),
    tS = n(297469),
    tI = n(960755),
    tb = n(633965),
    tj = n(702841),
    tv = n(246338),
    tG = n(41200),
    tR = n(831617),
    ty = n(589603),
    tL = n(496767),
    tT = n(134413),
    tM = n(701785),
    tU = n(101611),
    tD = n(473529),
    tP = n(578484),
    tO = n(71165),
    tw = n(978165),
    tV = n(960253),
    tH = n(770666),
    tk = n(508654),
    tB = n(521427),
    tF = n(871123),
    tz = n(281405),
    tK = n(3026),
    tW = n(821609),
    tY = n(499373),
    tX = n(559106),
    tq = n(847374),
    tJ = n(285796),
    tZ = n(983851),
    t$ = n(914430),
    tQ = n(47167),
    t0 = n(485947),
    t1 = n(970853),
    t3 = n(93055),
    t2 = n(349828),
    t9 = n(22277),
    t5 = n(551851),
    t6 = n(391507);
function t7(e) {
    e.stopPropagation();
}
function t4(e) {
    let { label: t, onClick: n, tabIndex: l } = e;
    return (0, r.jsx)(q.m, {
        text: t,
        children: (0, r.jsx)(J.D, {
            className: eV()(t6.c9, t6.ih),
            onClick: n,
            tabIndex: l,
            role: "button",
            "aria-label": t,
            children: (0, r.jsx)(tY.T, { size: "xs", color: "currentColor", className: t6.hs }),
        }),
    });
}
let t8 = F(
        a.memo(function (e) {
            let t,
                {
                    channel: l,
                    connectChannelDragSource: i,
                    connectChannelDropTarget: s,
                    disableManageChannels: o,
                    position: d,
                    sortingPosition: u,
                    hideIcon: m,
                    children: g,
                } = e,
                A = (0, h.bG)([V.Ay], () => V.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, h.bG)([M.A], () => M.A.isCollapsed(l.id)),
                p = (0, h.bG)([O.A], () => O.A.can(H.xBc.MANAGE_CHANNELS, l)),
                C = (0, tQ.Ay)(l);
            t = null != u ? (d > u ? t6.mU : t6.TR) : t6.fx;
            let E = a.useCallback(() => {
                    f ? (0, t$.fh)(l.id) : (0, t$.Gv)(l.id);
                }, [l.id, f]),
                x = a.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = P.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, e9.L3)(e, async () => {
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
                                    return (n) => (0, r.jsx)(e, { ...n, channel: l, guild: t });
                                });
                        }
                    },
                    [l],
                ),
                N = a.useCallback(() => {
                    let e = l.type === H.rbe.GUILD_CATEGORY ? null : l.type,
                        t = l.getGuildId();
                    null != t &&
                        (0, I.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("377476"),
                                n.e("403032"),
                                n.e("746309"),
                                n.e("778799"),
                                n.e("844780"),
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
                                (0, r.jsx)(i, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== l.id ? l.id : null,
                                });
                        });
                }, [l]),
                _ = (function (e, t) {
                    let n = (0, h.bG)([td.A], () => td.A.autoAddJoinedThreads),
                        { isAtLimit: l } = (0, t3.ft)();
                    return n &&
                        l &&
                        null != t &&
                        (0, L.ai)(e.getGuildId()) &&
                        e.type === H.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === t2.A.toLowerCase()
                        ? { label: er.intl.string(t9.default.WsUrMD), tooltip: er.intl.string(t9.default.dW9Kov) }
                        : null;
                })(l, C),
                S = (0, t1.A)(l);
            null == S && p && !o && (S = { label: er.intl.string(er.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: j, ...v } = (0, c.rm)(l.id),
                G = a.useRef(null),
                R = a.useRef(null),
                y = (0, r.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, r.jsx)(tX.vN, {
                            focusTarget: G,
                            ringTarget: R,
                            offset: { left: 4, right: 4 },
                            children: (0, r.jsxs)("div", {
                                ref: R,
                                className: eV()(t6.Ki, t6.iE, { [t6.yZ]: f, [t6.SU]: A, [t6.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, r.jsxs)(J.D, {
                                        innerRef: G,
                                        className: t6.rb,
                                        tabIndex: j,
                                        ...v,
                                        onClick: E,
                                        "aria-label": er.intl.formatToPlainString(er.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, r.jsx)(t0.A, {
                                                className: t6.UU,
                                                children: (0, r.jsx)(tK.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, r.jsx)("span", {
                                                      className: t6.qS,
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
                                                : (0, r.jsx)(tq.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t6.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        onClick: t7,
                                        className: t6.Y_,
                                        children:
                                            null != S
                                                ? (0, r.jsx)(t4, { label: S.label, onClick: S.perform, tabIndex: j })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != s && null != i ? s(i(y)) : y;
        }),
    ),
    ne = a.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, r.jsx)("li", {
            className: eV()(l, t6.fx),
            children: (0, r.jsxs)("div", {
                className: eV()(t6.Ki, t6._V),
                children: [
                    (0, r.jsx)("div", {
                        className: t6.rb,
                        children: (0, r.jsx)(t0.A, { className: t6.UU, children: (0, r.jsx)(tK.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, r.jsx)(q.m, {
                              asContainer: !0,
                              text: er.intl.string(er.t["5qNmsU"]),
                              children: (0, r.jsx)(J.D, {
                                  className: t6.r,
                                  onClick: n,
                                  children: (0, r.jsx)(tJ.a, { size: "md", color: "currentColor", className: t6.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    nt = a.memo(function (e) {
        let { category: t } = e,
            n = (0, h.bG)([t5.A], () => t5.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = a.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), e6.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), e6.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: t6.oA,
            children: (0, r.jsx)(tW.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: tZ.H,
                text: n ? er.intl.string(er.t["/eB9Bg"]) : er.intl.string(er.t.Q2gPWl),
            }),
        });
    }),
    nn = a.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, h.bG)([t5.A], () => t5.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === H.rbe.GUILD_CATEGORY
            ? l
                ? (0, r.jsx)("li", {
                      className: t6.fx,
                      children: (0, r.jsx)("div", {
                          className: eV()(t6.Ki, t6._V),
                          children: (0, r.jsx)(t0.A, {
                              className: t6.UU,
                              children: (0, r.jsx)(tK.A, { children: er.intl.string(er.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, r.jsx)("div", { style: { height: 16 } });
    }),
    nl = a.memo(function (e) {
        let { channel: t } = e,
            n = (0, tQ.Ay)(t);
        return (0, r.jsx)("li", {
            className: t6.fx,
            children: (0, r.jsx)("div", {
                className: eV()(t6.Ki, t6._V),
                children: (0, r.jsx)(t0.A, { className: t6.UU, children: (0, r.jsx)(tK.A, { children: n }) }),
            }),
        });
    });
var ni = n(728321),
    ns = n(244083);
let nr = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var na = n(906659);
let no = a.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: l,
            guildChannelsVersion: i,
            selectedChannelId: s,
            disableManageChannels: o,
        } = e,
        d = a.useCallback(() => {
            let e = l.getCategoryFromSection(l.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            (null != s && i.includes(s) && (t = (0, eP.xb)(l)), (0, eP.DD)(n.id, i, t));
        }, [n.id, s, l, i]),
        { density: c } = (0, E.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tS.PU:
            return (0, r.jsx)("div", { style: { height: u } });
        case tS.bK:
            if (n.features.has(H.GuildFeatures.HUB)) return null;
            return (0, r.jsx)("div", { style: { height: u } });
        case tS.HP:
            return (0, r.jsx)(ne, { name: er.intl.string(er.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, r.jsx)(ne, { name: er.intl.string(er.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, r.jsxs)(a.Fragment, {
                children: [(0, r.jsx)("div", { className: na.ts }), (0, r.jsx)(nn, { category: e, channel: n })],
            });
        }
        case tS.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(t8, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, r.jsx)(ni.A, {
                    inlineSpecs: nr,
                    arrowAlignment: ns.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(t8, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nd = n(104171),
    nc = n(186369),
    nu = n(970812),
    nh = n(147036);
function nm(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tS.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tz.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tS.PU ||
                ((0, L.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tS.HP ||
                      (!!t && n !== tS.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tS.PU &&
            n !== tS.HP &&
            n !== tS.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let ng = a.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, r.jsx)(nt, { category: l });
    }),
    nA = a.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: l,
                voiceStates: i,
                guildId: s,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: u, canHaveVoiceSummary: m } = a.useMemo(() => nm(n, c, t), [n, c, t, l]),
            g = a.useMemo(() => (t === tS.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            A = (0, eO.jN)(s),
            { enableWaveformIcon: f } = (0, nc.b)(s, "ChannelListSectionFooter"),
            p = (0, h.yK)(
                [V.Ay],
                () => {
                    if (null == g || !g.isCollapsed || !m) return [];
                    let e = g.getChannelRecords(),
                        t = [];
                    for (let n of e) {
                        if (!n.isGuildVocal()) continue;
                        let e = V.Ay.isChannelOrParentOptedIn(s, n.id);
                        (!A || e) && t.push(n);
                    }
                    return t;
                },
                [g, m, s, A],
            ),
            C = a.useMemo(
                () => (0, nh.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(ng, { guildChannels: n, guildChannelsVersion: l });
        let E = u ? (0, r.jsx)("div", { className: na.ts }) : null;
        return m && 0 !== C.length
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: na.qz,
                          children: (0, r.jsx)(nd.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: s,
                              renderLeadingIcon: f
                                  ? (e) => (0, r.jsx)(nu.A, { color: "currentColor", className: eV()(e, eo.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nf = n(152367),
    np = n(573163),
    nC = n(371169),
    nE = n(260498),
    nx = n(404373),
    nN = n(790782),
    n_ = n(855793),
    nS = n(309010),
    nI = n(146630);
function nb(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, r.jsx)("div", {
        className: nI.R,
        "aria-hidden": !0,
        children: (0, r.jsx)(eA.hV, {
            count: t,
            color: n ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var nj = n(248675);
function nv(e) {
    var t;
    let n,
        { guild: l, selected: i } = e,
        s = (0, h.bG)([nE.Ay], () => nE.Ay.getSelectedProjectId(l.id), [l.id]),
        o = (0, h.bG)([nS.Ay], () => nS.Ay.getChannelId(), []),
        d = (0, h.bG)([w.A], () => w.A.getGuildId(), []),
        { hasUnread: c, badgeCount: u } =
            ((t = l.id),
            (n = (0, h.yK)(
                [np.Ay, nE.Ay],
                () =>
                    np.Ay.getResourceIds(nN.P.CONJURING_PROJECT)
                        .filter((e) => null == nE.Ay.getProject(e) && (0, nx.tz)(e))
                        .sort(),
                [],
            )),
            a.useEffect(() => {
                n.length > 0 && (0, nC.tF)(n);
            }, [n]),
            (0, nx.NC)(t));
    return (0, r.jsx)(et.G, {
        id: `conjure-${l.id}`,
        renderIcon: (e) =>
            (0, r.jsx)(nf.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: er.intl.string(nj.default.uk6jhJ),
        selected: i,
        showUnread: c,
        trailing: u > 0 ? (0, r.jsx)(nb, { mentionsCount: u }) : void 0,
        background: (0, r.jsx)(n_.X8, { guildId: l.id }),
        onClick: () => {
            let e = o === el.VV.CONJURE && d === l.id;
            (0, en.pX)(H.BVt.CHANNEL(l.id, el.VV.CONJURE, null == s || e ? null : s));
        },
    });
}
var nG = n(625903),
    nR = n(283973),
    ny = n(933832),
    nL = n(435183),
    nT = n(698441),
    nM = n(855687),
    nU = n(816662),
    nD = n(446600),
    nP = n(616356);
function nO(e, t, n) {
    return null != t && !!t && !(0, j.ws)(n, e.type);
}
function nw(e, t) {
    return null == t ? eo.fx : e > t ? eo.mU : eo.TR;
}
function nV(e) {
    let {
        channel: t,
        disableManageChannels: n,
        tabIndex: l,
        forceShowButtons: i,
        shouldEnlargeTargets: s,
        hasChannelInfo: a = !1,
    } = e;
    return (0, h.bG)(
        [O.A, w.A],
        () =>
            n ||
            (0, L.ai)(w.A.getGuildId()) ||
            (!O.A.can(H.xBc.MANAGE_CHANNELS, t) &&
                !O.A.can(H.xBc.MANAGE_ROLES, t) &&
                !O.A.can(H.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, tx.tr)(t.type) && !O.A.can(H.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.A.can(H.xBc.CONNECT, t)) ||
            !tx.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, r.jsx)(q.m, {
              asContainer: !0,
              text: er.intl.string(er.t["3gUsJb"]),
              ariaHidden: !0,
              children: (0, r.jsx)(J.D, {
                  className: eV()(eo.Xs, { [eo.Tf]: i, [eo.bw]: a, [eo.UI]: !a }),
                  onClick: function () {
                      nL.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": er.intl.string(er.t["3gUsJb"]),
                  focusProps: s ? { offset: 2 } : void 0,
                  children: (0, r.jsx)(nG.SettingsIcon, { size: "xs", color: "currentColor", className: eo.gE }),
              }),
          });
}
function nH(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: s,
            forceShowButtons: o,
            shouldEnlargeTargets: d,
            hasChannelInfo: c = !1,
        } = e,
        u = (0, h.bG)([P.A], () => P.A.getGuild(t.getGuildId())),
        m = (0, h.bG)([nD.A], () => nD.A.getStageInstanceByChannel(t.id), [t.id]),
        g = (0, h.bG)([nT.Ay], () => nT.Ay.getActiveEventByChannel(t.id), [t.id]),
        A = (0, h.bG)([O.A], () => (0, nM.K)(O.A, u, t, m)),
        f = (0, h.bG)([], () =>
            t?.type === H.rbe.GUILD_VOICE ? er.intl.string(er.t["EE+P0H"]) : er.intl.string(er.t["0jeAXt"]),
        ),
        p = a.useRef(null);
    if (i || !A || t.isModeratorReportChannel() || t.isThread()) return null;
    let C = (0, r.jsx)(nR.R, { size: "xs", className: eo.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (C = (0, r.jsx)(ni.A, {
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
                className: eV()(eo.Xs, { [eo.Tf]: o, [eo.bw]: c, [eo.UI]: !c }),
                onClick: function () {
                    if (null != u) {
                        let e = nP.A.getAllActiveStreams().filter(
                            (e) => e.state !== H.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, I.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("683621"),
                                n.e("711162"),
                                n.e("159957"),
                                n.e("728136"),
                                n.e("216084"),
                                n.e("284819"),
                            ]).then(n.bind(n, 405342));
                            return (n) =>
                                (0, r.jsx)(l, {
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
function nk(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(q.m, {
        asContainer: !0,
        text: er.intl.string(er.t["ROh4T+"]),
        ariaHidden: !0,
        children: (0, r.jsx)(J.D, {
            className: eo.Xs,
            onClick: function () {
                (0, nU.Ol)(t.guild_id, t.id);
            },
            "aria-label": er.intl.string(er.t["ROh4T+"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(Z.P, { size: "xs", color: "currentColor", className: eo.gE }),
        }),
    });
}
function nB(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(q.m, {
        asContainer: !0,
        text: er.intl.string(er.t["N2c/Un"]),
        ariaHidden: !0,
        children: (0, r.jsx)(J.D, {
            className: eo.Xs,
            onClick: function () {
                (0, nU.jA)(t.guild_id, t.id, !0, { section: H.JJy.CHANNEL_LIST });
            },
            "aria-label": er.intl.string(er.t["N2c/Un"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(ny.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: eo.gE }),
        }),
    });
}
class nF extends a.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, r.jsx)(nV, { ...this.props });
    }
    renderInviteButton() {
        return (0, r.jsx)(nH, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, r.jsx)(nk, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, r.jsx)(nB, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nw(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nO(e, t, n);
    }
}
var nz = n(166444);
let nK = F(function (e) {
    let {
            guild: t,
            selectedChannelId: l,
            position: i,
            disableManageChannels: s,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: u,
            connectChannelDropTarget: m,
            tabIndex: g,
        } = e,
        A = (0, h.bG)([U.A, t_.Ay], () => {
            let e = t_.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : U.A.getChannel(e[0]);
        }),
        f = (0, h.bG)([U.A], () => U.A.getChannel(A?.parent_id)),
        p = l === A?.id,
        C = (0, tQ.Ay)(A),
        E = (0, h.bG)([O.A], () =>
            null != f ? O.A.can(H.xBc.MANAGE_CHANNELS, f) : null != t && O.A.can(H.xBc.MANAGE_CHANNELS, t),
        ),
        x = a.useCallback(
            (e) => {
                null != A &&
                    (0, e9.L3)(e, async () => {
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
    let N = nw(i, c),
        _ = nO(A, o, d),
        S = (0, r.jsx)("div", {
            className: eV()(N, { [eo.r9]: _, [eo.wH]: p }),
            "data-dnd-name": C,
            children: (0, r.jsxs)(nz.Ay, {
                className: eo.Ki,
                channel: A,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nN.e.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(nH, { channel: A, tabIndex: g }),
                    (0, r.jsx)(nV, { channel: A, disableManageChannels: s, tabIndex: g }),
                ],
            }),
        });
    return (E && (S = m(u(S))), S);
});
var nW = n(34188),
    nY = n(733391),
    nX = n(832163),
    nq = n(831024),
    nJ = n(44724),
    nZ = n(849134),
    n$ = n(770178),
    nQ = n(307076);
let n0 = Math.ceil(Math.sqrt(115200)),
    n1 = (n0 - 240) / 2;
function n3(e) {
    let { children: t, ref: n } = e,
        [l, i] = a.useState(-1),
        s = a.useCallback((e) => {
            i(e.contentRect.width);
        }, []),
        o = (0, n$.w)(s, [], { fireOnMount: !0 }),
        [{ shineSpring: d }, c] = (0, e3.z)(() => ({
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
                    (0, r.jsx)(e1.animated.div, {
                        className: nQ.q,
                        style: {
                            transform: d.to(
                                (e) => `translateX(calc(${e * l}px + ${e * n0}px)) translateY(-50%) rotate(45deg)`,
                            ),
                        },
                    }),
                ),
            [t, l, d],
        );
    return (
        a.useImperativeHandle(n, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
        (0, r.jsx)("div", {
            className: nQ.i,
            onMouseEnter: u,
            onMouseLeave: h,
            onFocus: u,
            onBlur: h,
            ref: o,
            style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${n1}px` },
            children: m,
        })
    );
}
var n2 = n(371794),
    n9 = n(240248),
    n5 = n(998218),
    n6 = n(672812),
    n7 = n(427797);
let n4 = a.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = a.useRef(null),
        s = a.useRef(null),
        o = (0, I.useHasAnyModalOpen)(),
        d = (0, h.bG)([eh.A], () => eh.A.hasLayers()),
        c = (0, ec.xr)((e) => e.fullScreenLayers.length > 0);
    a.useEffect(() => {
        (0, nY.Kh)(t.id);
    }, [t.id]);
    let u = (0, h.bG)([nX.A], () => nX.A.getAnnouncement(t.id)),
        m = u?.state === "success" ? u.announcement : void 0,
        [g, A] = (0, ee.x_)(X.M.GAME_SHOP_NEW_BADGE, t.id, m?.id ?? "", void 0, !0),
        f = g === X.M.GAME_SHOP_NEW_BADGE && null != m,
        p = (0, tF.nY)(t.id),
        C = (0, nq.u)({ surface: "storefront_badge", applicationId: p }),
        E = null;
    (f && (E = er.intl.string(er.t.y2b7CA)), null != C && (E = C.text));
    let [x, N] = (0, ee.x_)(X.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, m?.id ?? ""),
        _ = x === X.M.GAME_SHOP_NEW_DROP_POPOVER && null != m;
    a.useEffect(() => {
        l && (f && A(ei.i.INDIRECT_ACTION), _ && N(ei.i.INDIRECT_ACTION));
    }, [A, N, l, f, _]);
    let S = a.useCallback(() => {
            (A(ei.i.TAKE_ACTION), N(ei.i.TAKE_ACTION));
            let e = (0, tF.mq)(t.id),
                n = nX.A.getStorefrontState(e)?.activePage ?? 0;
            (0, en.pX)(H.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, A, N]),
        b = a.useCallback(() => {
            (0, nJ.X)({ guildId: t.id, forceFetch: _ });
        }, [t.id, _]),
        j = a.useCallback(() => {
            N(ei.i.USER_DISMISS);
        }, [N]),
        v = a.useCallback(
            (e) => {
                null != t &&
                    (0, e9.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
                        return (n) => (0, r.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        G = a.useCallback(() => {
            i.current?.onMouseEnter(null, 500);
        }, [i]),
        R = a.useCallback(
            (e) =>
                (0, r.jsx)(et.G, {
                    background: (0, r.jsx)("div", { className: n7.D }),
                    innerClassName: n7.Z,
                    ref: s,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, r.jsx)(nW.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, r.jsx)(e2.E, {
                        variant: "text-md/medium",
                        className: n6.UU,
                        children: er.intl.string(er.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: b,
                    onClick: S,
                    onContextMenu: v,
                    trailing: (0, r.jsxs)(r.Fragment, {
                        children: [null != E && (0, r.jsx)($.E, { type: { text: E }, variant: "primary" }), e],
                    }),
                }),
            [t.id, l, b, S, v, E],
        ),
        y = a.useMemo(() => {
            if (null == m) return null;
            switch (m.type) {
                case "guild-application-announcement": {
                    let e =
                            null != m.assetId
                                ? n5.A.toURLSafe((0, n2.YE)(m.applicationId, m.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != m.backgroundImageAssetId
                                ? n5.A.toURLSafe((0, n2.YE)(m.applicationId, m.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: er.intl.string(er.t["7PvvS9"]),
                        body: er.intl.formatToPlainString(er.t["9J4h1a"], { applicationName: m.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = m;
                    if ((0, n9.uJ)(e) && (0, n9.uJ)(t)) return null;
                    return {
                        graphicSource: (0, n9.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: m.popoverTitle,
                        body: m.popoverBody,
                        actionLabel: m.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [m]),
        L = a.useCallback(
            () =>
                _ && null != y
                    ? (0, r.jsx)(nZ.A, {
                          onActionClick: S,
                          onActionMouseDown: b,
                          onRender: G,
                          onRequestClose: j,
                          targetElementRef: s,
                          ...y,
                      })
                    : null,
            [_, y, S, b, G, j],
        );
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n3, { ref: i, children: R }), !o && !d && !c && L()] });
});
var n8 = n(740426),
    le = n(826673),
    lt = n(591552),
    ln = n(202776),
    ll = n(454058);
function li(e) {
    let { guild: t, selected: l } = e,
        i = (0, ln.A)(t),
        s = (0, le.HX)(X.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tj.yK)([ll.A], () =>
            Array.from(ll.A.getNewChannelIds(t.id)).filter((e) => ll.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tj.bG)([np.Ay], () => np.Ay.hasUnread(t.id, nN.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tS.rR,
        u = (0, tj.bG)([lt.A, np.Ay], () => {
            let e = lt.A.lastFetchedAt(t.id),
                n = np.Ay.lastMessageId(t.id, nN.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = tm.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        h = a.useCallback(() => {
            (0, en.pX)(H.BVt.CHANNEL(t.id, i ? el.VV.CUSTOMIZE_COMMUNITY : el.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        m = a.useCallback(
            (e) => {
                (0, e9.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("113446"), n.e("317699"), n.e("830412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        g = null;
    return (
        (s && !d && !c) || l || u || (g = (0, r.jsx)($.E, { type: "new", variant: "primary" })),
        (0, r.jsx)(et.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, r.jsx)(n8.k, { size: "md", color: "currentColor", className: e }),
            text: i ? er.intl.string(er.t.h9mGOP) : er.intl.string(er.t.et6wav),
            selected: l,
            onClick: h,
            onContextMenu: m,
            trailing: g,
        })
    );
}
var ls = n(855473);
function lr(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(et.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(ls.Z, { size: "md", color: "currentColor", className: e }),
        text: er.intl.string(er.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, en.pX)(H.BVt.CHANNEL(t.id, el.VV.GUILD_HOME));
        },
    });
}
var la = n(297264),
    lo = n(5373),
    ld = n(65995),
    lc = n(195702);
function lu(e, t) {
    return (0, r.jsx)(e2.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let lh = a.memo(function (e) {
    let { guild: t } = e,
        n = (0, h.bG)([tM.h], () => tM.h.getNewMemberActions(t.id), [t.id]),
        l = (0, h.bG)([ld.A], () => ld.A.getCompletedActions(t.id)),
        i = a.useMemo(() => {
            if (null == n || null == l) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != l[t.channelId] && e++;
                }),
                e
            );
        }, [l, n]),
        s = null == n ? 0 : n.length,
        o = (0, c.rm)(`progress-bar-${t.id}`);
    return (0, r.jsxs)("li", {
        children: [
            (0, r.jsxs)(J.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: lc.G9,
                onClick: function () {
                    (0, en.pX)(H.BVt.CHANNEL(t.id, el.VV.GUILD_HOME));
                },
                children: [
                    (0, r.jsxs)("div", {
                        className: lc.A1,
                        children: [
                            (0, r.jsx)(la.D, { variant: "heading-sm/bold", children: er.intl.string(er.t.SnrR3x) }),
                            (0, r.jsxs)("div", {
                                className: lc.Ib,
                                children: [
                                    (0, r.jsx)(e2.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: lc.Cv,
                                        children: er.intl.format(er.t.eqZ1lW, {
                                            numberHook: lu,
                                            total: s.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, r.jsx)(te.A, {
                                        className: lc.UE,
                                        width: 16,
                                        height: 16,
                                        direction: te.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(lo.i, {
                        className: lc.hr,
                        foregroundGradientColor: [
                            m.A.unsafe_rawColors.GREEN_300.css,
                            m.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / s) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, r.jsx)("div", { role: "separator", className: lc.yF }),
        ],
    });
});
var lm = n(581925);
function lg(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(et.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(lm.L, { size: "md", color: "currentColor", className: e }),
        text: er.intl.string(er.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, en.pX)(H.BVt.CHANNEL(t.id, el.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var lA = n(590251),
    lf = n(413125),
    lp = n(600623),
    lC = n(411392);
let lE = a.memo(function (e) {
    let { guild: t } = e,
        l = (0, h.bG)([t_.Ay], () => t_.Ay.getDefaultChannel(t.id), [t.id]),
        { steps: i } = (0, lf.c)(l, t),
        s = i.length,
        o = i.filter((e) => e.completed).length,
        d = i.find((e) => !e.completed),
        u = (0, c.rm)(`setup-progress-${t.id}`),
        g = s > 0 && null == d;
    return (a.useEffect(() => {
        g && (0, lp.vy)(t.id);
    }, [t.id, g]),
    null == d)
        ? null
        : (0, r.jsxs)("li", {
              children: [
                  (0, r.jsxs)(J.D, {
                      ...u,
                      role: "button",
                      className: lC.nM,
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
                              className: lC.Ap,
                              children: [
                                  (0, r.jsx)(lA.a, {
                                      percent: 100,
                                      colorOverride: m.A.colors.BACKGROUND_MOD_STRONG.css,
                                      ringColorOverrideClassName: lC.Tu,
                                      background: lC.Tu,
                                  }),
                                  (0, r.jsx)(lA.a, {
                                      className: lC.qB,
                                      percent: (o / s) * 100,
                                      colorOverride: m.A.colors.STATUS_POSITIVE.css,
                                      ringColorOverrideClassName: lC.Tu,
                                      background: lC.Tu,
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: lC.FS,
                              children: [
                                  (0, r.jsx)(la.D, {
                                      variant: "heading-sm/bold",
                                      children: er.intl.string(er.t.o3HK3d),
                                  }),
                                  (0, r.jsx)(e2.E, {
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      className: lC.VA,
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
                  (0, r.jsx)("div", { role: "separator", className: lC.yF }),
              ],
          });
});
var lx = n(514179);
function lN(e) {
    let { guild: t, selected: l } = e;
    return (0, r.jsx)(et.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(lx.A, { className: e }),
        text: er.intl.string(er.t["KzCF/6"]),
        selected: l,
        onClick: function () {
            (0, en.pX)(H.BVt.CHANNEL(t.id, el.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e9.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var l_ = n(506774),
    lS = n(666860),
    lI = n(289397),
    lb = n(486418),
    lj = n(575926),
    lv = n(440293),
    lG = n(174459),
    lR = n(634654),
    ly = n(888918);
function lL(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, lv.w)(t),
        s = (0, tj.bG)([P.A], () => P.A.getGuild(t)),
        a = s?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === l_.w.get(lR.bJ, "false"),
        d = (0, tj.bG)([z.Ay], () => z.Ay.useReducedMotion);
    return (0, r.jsx)(et.G, {
        id: `shop-${t}`,
        className: eV()(ly.A2, { [ly.wH]: n, [ly.ST]: o }),
        innerClassName: ly.LE,
        renderIcon: (e) => (0, r.jsx)(lj.h, { width: 20, height: 20, className: eV()([e, ly.sV]) }),
        text: er.intl.string(er.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, r.jsxs)("div", {
            className: ly.ai,
            children: [
                d
                    ? (0, r.jsx)("div", {
                          className: ly.Ad,
                          children: (0, r.jsx)($.E, { type: "new", variant: "primary" }),
                      })
                    : (0, r.jsx)("img", {
                          src: (0, lI.n)("server_products/storefront/money.gif"),
                          className: ly.TG,
                          alt: "",
                      }),
                n &&
                    (0, r.jsx)(J.D, {
                        className: ly.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, le.Dr)(X.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lG.default.track(H.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, lS.H$)(t),
                                    action_taken: lR.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, en.bG)(H.BVt.CHANNEL(t, t_.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": er.intl.string(er.t.cpT0Cq),
                        children: (0, r.jsx)(tJ.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lT(e) {
    let { guild: t, selected: l } = e;
    function i() {
        (l_.w.set(lR.bJ, "true"), (0, en.pX)(H.BVt.CHANNEL(t.id, el.VV.GUILD_SHOP)));
    }
    return (0, lb.P)(t)
        ? (0, r.jsx)(lL, { guildId: t.id, selected: l, handleClick: i })
        : (0, r.jsx)(et.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, r.jsx)(lj.h, { width: 20, height: 20, className: e }),
              text: er.intl.string(er.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e9.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, r.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var lM = n(308528),
    lU = n(534890),
    lD = n(262763),
    lP = n(499211),
    lO = n(406704),
    lw = n(747926),
    lV = n(977997),
    lH = n(807632),
    lk = n(37411);
function lB(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lH.YG)(t),
        i = (0, lH.IO)(t),
        s = (0, lO._M)(t);
    return l && i && s ? (0, r.jsx)(lF, { thread: t, tabIndex: n }) : null;
}
function lF(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, h.bG)([lV.A], () => lV.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lP.A)(t.id),
        s = a.useCallback(() => {
            lD.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = a.useCallback(() => {
            (0, lw.JA)(t, !0, lk.H9.CHANNEL_LIST);
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
                    children: (0, r.jsx)(tZ.H, { size: "xs", color: "currentColor", className: eo.gE }),
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
                    children: (0, r.jsx)(lU.ChatIcon, { size: "xs", color: "currentColor", className: eo.gE }),
                }),
            }),
        ],
    });
}
var lz = n(897898),
    lK = n(152007);
function lW(e) {
    return null != e && e > 0;
}
var lY = n(405018),
    lX = n(428689),
    lq = n(525093);
function lJ(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, r.jsxs)("div", {
        className: lq.iE,
        children: [
            (0, r.jsxs)(e2.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eV()(lq.VV, { [lq.Ki]: l, [lq.$G]: n >= 100 }),
                children: [
                    l ? (0, r.jsx)(lX.VideoIcon, { size: "md", color: "currentColor", className: lq.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, r.jsx)(e2.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eV()(lq.X5, { [lq.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lZ(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lY.A)(t),
        s = -1,
        a = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && i > 0 && ((a = s < 0 || i < s), (s = s > 0 ? Math.min(s, i) : i)),
        (0, r.jsx)(lJ, { users: l, total: s, videoLimit: a })
    );
}
var l$ = n(588224),
    lQ = n(447199);
function l0(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: s } = e,
        a = n > 0 && t.userLimit > 0,
        o = lW(i);
    return a || o
        ? (0, r.jsxs)("div", {
              className: eo.yW,
              children: [
                  a ? (0, r.jsx)(lZ, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, r.jsx)(nb, { mentionsCount: i, isMentionLowImportance: s }) : null,
              ],
          })
        : null;
}
function l1(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: eV()(lQ.GI, { [lQ.a7]: n }, { [lQ.BJ]: l }), style: t },
        { density: s } = (0, E.wR)();
    switch (s) {
        case "cozy":
            return (0, r.jsxs)("svg", {
                ...i,
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
                ...i,
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
                ...i,
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
let l3 = a.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: s, withGuildIcon: o } = e,
            d = (0, h.bG)([tc.Ay], () => tc.Ay.getVoiceStatesForChannel(t), [t]),
            u = (0, h.bG)([lV.A], () => lV.A.hasVideo(t.id)),
            m = (0, tQ.Ay)(t),
            {
                unread: g,
                mentionCount: A,
                isMentionLowImportance: f,
            } = (0, h.cf)([np.Ay], () => ({
                unread: np.Ay.hasUnread(t.id),
                mentionCount: np.Ay.getMentionCount(t.id),
                isMentionLowImportance: np.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, h.bG)([lK.A], () => lK.A.isMuted(t.id)),
            C = a.useCallback(
                (e) => {
                    (0, lw.JA)(t, !e.shiftKey, lk.H9.CHANNEL_LIST);
                },
                [t],
            ),
            E = a.useCallback(() => {
                lM.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            x = a.useCallback(
                (e) => {
                    (0, lz.A)(e, t);
                },
                [t],
            ),
            N = a.useCallback(
                (e) => {
                    let l = U.A.getChannel(t.id);
                    null != l &&
                        (0, e9.L3)(e, async () => {
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
                                n.e("285802"),
                                n.e("65200"),
                                n.e("703869"),
                                n.e("51212"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, r.jsx)(e, { ...t, channel: l });
                        });
                },
                [t.id],
            ),
            _ = null == d ? 0 : d.length,
            { role: S, ...I } = (0, c.rm)(t.id),
            b = a.useRef(null),
            j =
                A > 0
                    ? er.intl.formatToPlainString(er.t["ZL7+I6"], { channelName: m, mentionCount: A })
                    : g
                      ? er.intl.formatToPlainString(er.t.YlVvmc, { channelName: m })
                      : er.intl.formatToPlainString(er.t["0nZpiF"], { channelName: m });
        return (0, r.jsxs)("li", {
            role: S,
            className: eV()(eo.fx, { [eo.wH]: l }),
            children: [
                (0, r.jsx)(l1, { withGuildIcon: o }),
                s
                    ? null
                    : (0, r.jsx)(l1, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, r.jsx)(tX.vN, {
                    focusTarget: b,
                    ringTarget: b,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, r.jsxs)("div", {
                        className: eV()(eo.Ki, n6.iE, n6.ZS, {
                            [n6.J1]: l,
                            [n6.F4]: !l && p,
                            [n6.V2]: !p && !l && g,
                            [n6.lY]: o,
                        }),
                        onMouseDown: E,
                        onContextMenu: N,
                        children: [
                            !g || p || l ? null : (0, r.jsx)("div", { className: eV()(n6.gy, n6.WS) }),
                            (0, r.jsx)(J.D, {
                                ...I,
                                innerRef: b,
                                className: n6.nf,
                                onClick: C,
                                onAuxClick: x,
                                "aria-label": j,
                                focusProps: { enabled: !1 },
                                children: (0, r.jsxs)("div", {
                                    className: eV()(n6.Y5, n6.__invalid_threadMainContent),
                                    children: [
                                        (0, r.jsx)(e2.E, {
                                            variant: "text-sm/medium",
                                            color: "none",
                                            className: n6.UU,
                                            children: (0, r.jsx)(tK.A, { "aria-hidden": !0, children: m }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: n6.Y_,
                                            onClick: nz.dG,
                                            onKeyDown: nz.dG,
                                            children: [
                                                (0, r.jsx)(l0, {
                                                    thread: t,
                                                    countInVoice: _,
                                                    hasVideo: u,
                                                    mentionCount: A,
                                                    isMentionLowImportance: f,
                                                }),
                                                (0, r.jsx)(lB, { thread: t, tabIndex: I.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(l$.A, {
                    channel: t,
                    collapsed: !i && 1 !== d.length,
                    collapsedMax: 6,
                    voiceStates: d,
                    isThread: !0,
                }),
            ],
        });
    }),
    l2 = a.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: s } = e,
            a = (0, tQ.Ay)(t),
            { density: o } = (0, E.wR)(),
            d = (0, h.yK)([U.A], () => i.map((e) => U.A.getChannel(e)).filter(tu.Vq), [i]),
            c = (0, h.bG)([tc.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = tc.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, r.jsx)("li", {
            className: lQ.kL,
            children: (0, r.jsxs)("ul", {
                role: "group",
                "aria-label": er.intl.formatToPlainString(er.t.EiyIi6, { channelName: a }),
                children: [
                    (0, r.jsx)("div", {
                        className: eV()(lQ.eh, { [lQ.ET]: s }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, r.jsx)(
                            l3,
                            {
                                thread: e,
                                isSelectedChannel: n?.id === e.id,
                                isSelectedVoice: l === e.id,
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
var l9 = n(265872),
    l5 = n(367513),
    l6 = n(296216),
    l7 = n(657043),
    l4 = n(963027),
    l8 = n(202384),
    ie = n(51758),
    it = n(139033),
    il = n(305866),
    ii = n(123292),
    is = n(830215),
    ir = n(315982),
    ia = n(480900),
    io = n(557722),
    id = n(834942),
    ic = n(287809),
    iu = n(53516),
    ih = n(648580),
    im = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let ig = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        s = (0, Y.GV)(),
        a = (0, h.bG)([id.A], () => id.A.getCheck(l), [l]),
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
                        notPhoneVerified: l,
                        notEmailVerified: i,
                        newMember: s,
                        newAccount: r,
                        missingVerificationRole: a,
                        verificationRole: o,
                    } = t;
                return n
                    ? { header: e, body: er.intl.string(er.t.IRxUlG), buttonText: er.intl.string(er.t.fiNVin) }
                    : l
                      ? { header: e, body: er.intl.string(er.t.vW8iUF), buttonText: er.intl.string(er.t["50gfOv"]) }
                      : i
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
        : (0, r.jsxs)(il.l, {
              className: ih.kL,
              "aria-labelledby": s,
              children: [
                  (0, r.jsx)("img", { alt: "", className: ih.Sl, src: n(303528) }),
                  (0, r.jsxs)("div", {
                      className: ih.Qs,
                      children: [
                          (0, r.jsx)(la.D, { variant: "heading-md/semibold", id: s, children: g }),
                          (0, r.jsx)(e2.E, { color: "text-default", variant: "text-sm/normal", children: A }),
                          (0, r.jsxs)("div", {
                              className: ih.UD,
                              children: [
                                  null != f
                                      ? (0, r.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: ih.FS,
                                            children: (0, r.jsx)(tW.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? ir.R()
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
                                                                            reason: io.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: iu.V },
                                                            )
                                                          : d
                                                            ? (is.A.verifyResend(),
                                                              (0, it.A)({
                                                                  title: er.intl.string(er.t.LykQYk),
                                                                  subtitle: er.intl.format(er.t.azKEPy, {
                                                                      email: ic.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : u && null != m && (0, ia.b)(m, l),
                                                        i());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, r.jsx)(ii.Q, {
                                            onClick: i,
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
var iA = n(824865),
    ip = n(378570),
    iC = n(747376),
    iE = n(113783),
    ix = n(96566),
    iN = n(280450),
    i_ = n(312006),
    iS = n(505543),
    iI = n(994500),
    ib = n(685399),
    ij = n(475889),
    iv = n(693879),
    iG = n(435470),
    iR = n(35275),
    iy = n(300596);
function iL(e) {
    let { locked: t } = e;
    return (0, r.jsx)("div", {
        className: eV()(eo.Xs, iy.U),
        children: (0, r.jsx)(iR.A, {
            className: eo.gE,
            color: t ? m.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var iT = n(863005),
    iM = n(669715),
    iU = n(769015),
    iD = n(217223);
function iP(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, r.jsx)("div", {
                className: eV()(iD.kL, t, l && iD.F4),
                children: (0, r.jsx)(iU.A, { game: n[0].application, className: iD.wK }),
            });
        let e = n.length - 1;
        return (0, r.jsxs)("div", {
            className: eV()(iD.kL, t, l && iD.F4),
            children: [
                (0, r.jsx)(iU.A, { game: n[0].application, className: iD.wK }),
                2 === n.length
                    ? (0, r.jsx)(iU.A, { game: n[1].application, className: iD.wK })
                    : (0, r.jsx)(e2.E, {
                          className: iD.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var iO = n(905695);
function iw(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: l,
            voiceStates: i,
            enableConnectedUserLimit: s,
            enableActivities: a,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: u,
            resolvedUnreadSetting: m,
        } = e,
        g = (0, h.bG)([np.Ay], () => np.Ay.getMentionCount(t.id)),
        A = (0, h.bG)([np.Ay], () => np.Ay.getIsMentionLowImportance(t.id)),
        f = (0, ib.Ay)(t),
        p = (0, h.bG)([O.A], () => !O.A.can(H.xBc.CONNECT, t)),
        C = (0, ij.H)(t),
        E = (0, h.bG)([lV.A], () => lV.A.hasVideo(t.id)),
        x = (0, ix.qT)(t.id) && t.isGuildStageVoice(),
        N = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lY.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && i > 0 && (s = s > 0 ? Math.min(s, i) : i),
                    l && s === H.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: l }) > 0 &&
                !n &&
                !i
            );
        })({ channel: t, locked: p, video: (E || x) && null == C, selected: n }),
        _ = (0, h.bG)([iT.A], () => iT.A.getNewThreadCount(t.guild_id, t.id)),
        S = (0, iG.ed)(t.guild_id, t.id),
        I = (0, h.bG)([P.A], () => P.A.getGuild(t.guild_id)?.features.has(H.GuildFeatures.COMMUNITY) ?? !1);
    if (lW(g)) return (0, r.jsx)(nb, { mentionsCount: g, isMentionLowImportance: A });
    if (o) return (0, r.jsx)(iL, { locked: d });
    if (c) return (0, r.jsx)($.E, { type: "new", variant: "primary" });
    if (!u && m === nN.e.ALL_MESSAGES && t.isForumLikeChannel() && null != _ && _ > 0)
        return (0, r.jsx)(e2.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: iO.O,
            children: er.intl.format(er.t.GkAbqY, { count: (0, eA.Gu)(_) }),
        });
    if (!u && t.isForumLikeChannel() && null != S && S > 0)
        return (0, r.jsx)(e2.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, eA.Gu)(S) });
    let b = i?.length ?? 0;
    return null != s && s && N
        ? (0, r.jsx)(lZ, { userCount: b, video: E || x, channel: t })
        : l && (0, iM.t)(i) && I
          ? (0, r.jsx)($.E, { type: { text: er.intl.string(er.t.dI3q4h) }, variant: "notification" })
          : null != C
            ? (0, r.jsx)(iv.z, { textColor: "text-feedback-positive", entry: { start: C } })
            : null != a && a && f.length > 0
              ? (0, r.jsx)(iP, { embeddedApps: f, muted: u })
              : null;
}
var iV = n(714619);
class iH extends nF {
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
        return (0, nh.Pd)(e, lV.A, P.A);
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
                unverifiedAccount: l,
                isSuggestedSection: i,
                openChatOnClick: s,
            } = this.props,
            r = e.getGuildId();
        (null != r && (0, ie.V)(r) && (0, l8.Ze)(r),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? l5.A.updateChatOpen(e.id, !0) : (0, iC.av)(e)),
            __OVERLAY__ || (0, ip.iN)(e.id, i ? { source: iA.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, ip.iN)(e.id, n ? { source: iA.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = P.A.getGuild(t.getGuildId());
        null != l &&
            (0, e9.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("474610"),
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
                return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: i } = this.props;
        return (0, r.jsx)(l$.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, r.jsx)(ig, {
                type: im.VOICE,
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
                    className: eV()(eo.Xs, n ? eo.Tf : null),
                    onClick: () => {
                        (l5.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": er.intl.string(er.t.ZXxLQg),
                    children: (0, r.jsx)(lU.ChatIcon, { size: "xs", color: "currentColor", className: eo.gE }),
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
        return null == e ? null : (0, r.jsx)(tK.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: l,
                connectChannelDropTarget: i,
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
                className: eV()(this.getModeClass(), { [eo.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tQ.m1)(e, ic.default, iI.A),
                children: [
                    (0, r.jsx)(l9.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, r.jsx)(q.m, {
                                text: this.getTooltipText(),
                                children: (0, r.jsxs)(nz.Ay, {
                                    ref: this.channelItemRef,
                                    className: eo.Ki,
                                    iconClassName: eV()({ [iV.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? g : void 0,
                                    resolvedUnreadSetting: A,
                                    mentionCount: f,
                                    locked: l,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: o,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: p,
                                    "aria-label": (0, l4.Ay)({
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
        return (c && (E = a(E)), d && (E = i(s(E))), E);
    }
}
let ik = F((0, l6.F)(iH));
function iB(e) {
    var t;
    let n,
        l,
        { guild: i, channel: s, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        u = (0, h.cf)([np.Ay], () => ({ unread: np.Ay.hasUnread(s.id), mentionCount: np.Ay.getMentionCount(s.id) })),
        m = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(s)),
        g = (0, h.cf)([U.A, id.A, O.A], () => {
            let e = U.A.getChannel(s.parent_id),
                t = id.A.getCheck(s.guild_id);
            return {
                canManageChannel: null != i && O.A.can(H.xBc.MANAGE_CHANNELS, s),
                canReorderChannel:
                    !0 !== a &&
                    ((0, L.ai)(i.id) ||
                        (null != e ? O.A.can(H.xBc.MANAGE_CHANNELS, e) : O.A.can(H.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: O.A.can(H.xBc.MOVE_MEMBERS, s),
                locked: !O.A.can(H.xBc.CONNECT, s),
                bypassLimit: O.A.can(H.xBc.MOVE_MEMBERS, s),
                unverifiedAccount: !t.canChat,
            };
        }),
        A = (0, h.bG)([M.A], () => M.A.isCollapsed(s.parent_id)),
        f =
            ((t = s.id),
            (n = (0, iS.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, h.cf)(
                    [i_.Ay, iN.default],
                    () => {
                        let n = iN.default.getId();
                        return i_.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, h.bG)([nD.A], () => nD.A.getStageInstanceByChannel(s.id), [s.id]),
        C = (0, iE.zy)(s.id, tA.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lP.A)(s.id),
        N = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(i.id, s.id)),
        _ = (0, ix.xn)(s.id),
        S = iw({
            channel: s,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (s.userLimit > 0 && s.userLimit < H.RCc),
        }),
        I = e.connected && null == S,
        b = i.features.has(H.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        j = (0, l7.BX)("StageChannel");
    return (0, r.jsx)(ik, {
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
        shouldEnlargeTargets: j,
    });
}
function iF(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lM.A.preload(n, t.id);
}
let iz = F(
        class extends nF {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = P.A.getGuild(t.getGuildId());
                null != l &&
                    (0, e9.L3)(e, async () => {
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
                        return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: l });
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
                        connectChannelDragSource: l,
                        connectDragPreview: i,
                        canReorderChannel: s,
                    } = this.props,
                    a = (0, r.jsx)("li", {
                        className: eV()(this.getClassName(), { [eo.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tQ.m1)(e, ic.default, iI.A),
                        children: (0, r.jsxs)(nz.Ay, {
                            className: eo.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iF,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: s ? i : null,
                            "aria-label": (0, l4.Ay)({ channel: e }),
                            resolvedUnreadSetting: nN.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return s ? n(l(a)) : a;
            }
        },
    ),
    iK = a.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, h.cf)([U.A, O.A], () => {
                let e = U.A.getChannel(t.parent_id);
                return {
                    canManageChannel: O.A.can(H.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? O.A.can(H.xBc.MANAGE_CHANNELS, e) : O.A.can(H.xBc.MANAGE_CHANNELS, n),
                };
            }),
            s = (0, l7.BX)("StoreChannel");
        return (0, r.jsx)(iz, { ...i, ...e, shouldEnlargeTargets: s });
    });
var iW = n(811024),
    iY = n(323073),
    iX = n(91242),
    iq = n(964404),
    iJ = n(326843),
    iZ = n(165610);
function i$(e) {
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
var iQ = n(621466),
    i0 = n(323384),
    i1 = n(331322),
    i3 = n(627363),
    i2 = n(421773),
    i9 = n(11044),
    i5 = n(503275),
    i6 = n(793480),
    i7 = n(97808),
    i4 = n(778712),
    i8 = n(402860),
    se = n(427262),
    st = n(95264),
    sn = n(41799);
function sl(e) {
    let { creator: t, remixProject: n, guildId: l, onClose: i } = e;
    return (0, r.jsxs)("div", {
        className: sn.qr,
        children: [
            (0, r.jsxs)("div", {
                className: sn.Pq,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)("span", { className: sn.ly }),
                    (0, r.jsxs)("span", {
                        className: sn.f5,
                        children: [
                            Array.from({ length: 6 }, (e, t) => (0, r.jsx)("span", { className: sn.Dg }, t)),
                            (0, r.jsx)("span", { className: sn.n4 }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: sn.OZ,
                children: [
                    (0, r.jsxs)(J.D, {
                        className: sn.xL,
                        onClick: function () {
                            (i(),
                                (0, i8.openUserProfileModal)({
                                    userId: t.id,
                                    guildId: l ?? void 0,
                                    appContext: H.BRT.APP,
                                }));
                        },
                        children: [
                            (0, r.jsx)(i7.eu, { src: t.getAvatarURL(l, 32), size: i4._3.SIZE_16, "aria-hidden": !0 }),
                            (0, r.jsx)(e2.E, {
                                variant: "text-sm/normal",
                                color: "none",
                                lineClamp: 1,
                                children: er.intl.formatToPlainString(nj.default["6/x9LD"], { name: (0, se.mG)(t) }),
                            }),
                        ],
                    }),
                    null != n
                        ? (0, r.jsx)(ii.Q, {
                              variant: "primary",
                              textVariant: "text-sm/medium",
                              text: er.intl.string(nj.default.KMwCb7),
                              onClick: function () {
                                  null != n && null != l && (i(), (0, st.A)(n, l));
                              },
                          })
                        : null,
                ],
            }),
        ],
    });
}
function si(e) {
    let { applicationId: t, guildId: n, targetElementRef: l, disabled: i = !1, ...s } = e,
        { isHovered: o, setIsHovered: d, onMouseEnter: c, onMouseLeave: u, cancelTimers: h } = (0, i2.A)(500, 150),
        [m, g] = a.useState(!1),
        [A, f] = a.useState(!1),
        p = a.useRef(null),
        C = a.useCallback(() => {
            (h(), d(!1), f(!1));
        }, [h, d]);
    a.useEffect(() => {
        let e = l.current;
        if (!i && null != e)
            return (
                e.addEventListener("mouseenter", t),
                e.addEventListener("mouseleave", n),
                e.addEventListener("mousedown", C),
                () => {
                    (e.removeEventListener("mouseenter", t),
                        e.removeEventListener("mouseleave", n),
                        e.removeEventListener("mousedown", C),
                        C());
                }
            );
        function t() {
            (g(!0), f(!0), c());
        }
        function n(e) {
            ((0, iQ.vq)(e.relatedTarget, Node) && p.current?.contains(e.relatedTarget) === !0) || (f(!1), u());
        }
    }, [i, l, c, u, C]);
    let E = a.useCallback(() => {
            (f(!0), c());
        }, [c]),
        x = a.useCallback(() => {
            (f(!1), u());
        }, [u]);
    return m
        ? (0, r.jsx)(ss, {
              ...s,
              applicationId: t,
              guildId: n ?? null,
              targetElementRef: l,
              isHovered: o,
              isPointerOver: A,
              cardRef: p,
              onCardEnter: E,
              onCardLeave: x,
              onClose: C,
          })
        : null;
}
function ss(e) {
    let {
            applicationId: t,
            guildId: n,
            targetElementRef: l,
            isHovered: i,
            isPointerOver: s,
            cardRef: o,
            onCardEnter: d,
            onCardLeave: c,
            onClose: u,
            position: m,
            animationPosition: g,
            spacing: A,
        } = e,
        f = (0, i3.YY)(t).data,
        p = f?.conjureProjectId != null ? f : null,
        C = null != p,
        {
            creator: E,
            remixProject: x,
            isSettled: N,
        } = (function (e, t, n) {
            let {
                    project: l,
                    remixProject: i,
                    isSettled: s,
                } = (function (e, t, n) {
                    let l = (0, i6.m0)({ guildId: t ?? void 0, location: "ConjureAppHoverCard" }) && null != t;
                    a.useEffect(() => {
                        n && null != e && (0, nC.tF)([e]);
                    }, [n, e]);
                    let { project: i, isUnavailable: s } = (0, h.cf)(
                        [nE.Ay],
                        () => ({
                            project: null != e ? (nE.Ay.getProject(e) ?? null) : null,
                            isUnavailable: null != e && (0, nC.su)(e),
                        }),
                        [e],
                    );
                    return a.useMemo(
                        () => ({
                            project: i,
                            remixProject: l && null != i && (0, nE.H_)(i) ? i : null,
                            isSettled: null == e || null != i || s,
                        }),
                        [i, l, e, s],
                    );
                })(e?.conjureProjectId ?? null, t, n),
                r = l?.owner_user_id ?? null;
            a.useEffect(() => {
                n && (0, i5.Y_)(r);
            }, [n, r]);
            let o = (0, h.bG)([ic.default], () => (null != r ? (ic.default.getUser(r) ?? null) : null), [r]),
                d = o?.getAvatarURL(t, 32);
            return (
                a.useEffect(() => {
                    n && null != d && (0, i9.N)(d);
                }, [n, d]),
                a.useMemo(
                    () => ({ creator: o, remixProject: i, isSettled: null != e && s && (null == r || null != o) }),
                    [o, i, e, s, r],
                )
            );
        })(p, n, s || i),
        [_, S] = a.useState(null);
    (a.useEffect(() => {
        if (!i || !C || N || null == t) return;
        let e = setTimeout(() => S(t), 300);
        return () => clearTimeout(e);
    }, [i, C, N, t]),
        i || null == _ || S(null));
    let [I, b] = a.useState(null),
        j = I?.isOpen === !0 && I.applicationId === t,
        v = i && C && (N || _ === t || j);
    (v && !j && b({ applicationId: t, creator: E, remixProject: x, isOpen: !0 }),
        v || I?.isOpen !== !0 || b({ ...I, isOpen: !1 }));
    let G = v && !j ? { creator: E, remixProject: x } : I;
    return (0, r.jsx)(l9.Y, {
        targetElementRef: l,
        position: m,
        animationPosition: g,
        spacing: A,
        shouldShow: v,
        onRequestClose: u,
        renderPopout: () =>
            null != p
                ? (0, r.jsx)(sa, {
                      application: p,
                      creator: G?.creator ?? null,
                      remixProject: G?.remixProject ?? null,
                      guildId: n,
                      cardRef: o,
                      onMouseEnter: d,
                      onMouseLeave: c,
                      onClose: u,
                  })
                : null,
        children: () => null,
    });
}
function sr(e) {
    e.stopPropagation();
}
function sa(e) {
    let {
            application: t,
            creator: n,
            remixProject: l,
            guildId: i,
            cardRef: s,
            onMouseEnter: a,
            onMouseLeave: o,
            onClose: d,
        } = e,
        c = t.getIconURL(96),
        u = t.description?.trim();
    return (0, r.jsxs)("div", {
        ref: s,
        className: sn.Nr,
        onMouseEnter: a,
        onMouseLeave: o,
        onClick: sr,
        onMouseDown: sr,
        onContextMenu: sr,
        children: [
            (0, r.jsxs)("div", {
                className: sn.rf,
                children: [
                    null != c
                        ? (0, r.jsx)("img", { alt: "", src: c, className: eV()(sn.Kk, sn.Dp) })
                        : (0, r.jsx)("div", {
                              className: eV()(sn.Kk, sn.Pz),
                              "aria-hidden": !0,
                              children: (0, r.jsx)(i0.k, {
                                  size: "custom",
                                  width: 24,
                                  height: 24,
                                  color: m.A.colors.INTERACTIVE_ICON_DEFAULT,
                              }),
                          }),
                    (0, r.jsxs)(i1.B, {
                        gap: 4,
                        className: sn.zH,
                        children: [
                            (0, r.jsx)(e2.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            null != u && u.length > 0
                                ? (0, r.jsx)(e2.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      lineClamp: 3,
                                      children: u,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != n ? (0, r.jsx)(sl, { creator: n, remixProject: l, guildId: i, onClose: d }) : null,
        ],
    });
}
var so = n(730602),
    sd = n(956518),
    sc = n(982844),
    su = n(197184),
    sh = n(288254),
    sm = n(696451),
    sg = n(763827),
    sA = n(56059),
    sf = n(163328),
    sp = n(730134),
    sC = n(707539),
    sE = n(486020),
    sx = n(98098);
function sN(e) {
    let { channel: t } = e,
        l = (0, h.yK)([iT.A, np.Ay, O.A], () => {
            let e = iT.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return d()(iT.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(d().values(iT.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && O.A.can(H.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = np.Ay.lastMessageId(e.id),
                        l = np.Ay.lastMessageId(t.id);
                    return tm.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        s = t.isForumLikeChannel() ? sA.b : sf.y;
    return (
        a.useEffect(() => {
            (0, sC.TE)();
        }, []),
        (0, r.jsxs)("div", {
            className: sx.SW,
            children: [
                (0, r.jsx)(e2.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: sx.DD,
                    children: t.isForumLikeChannel() ? er.intl.string(er.t.ioVdO2) : er.intl.string(er.t.VNYs2v),
                }),
                (0, r.jsxs)("div", {
                    className: sx.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, r.jsx)(s_, { thread: e }, e.id))
                            .filter((e) => a.isValidElement(e))
                            .slice(0, i),
                        (0, r.jsxs)(J.D, {
                            className: sx.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, ip.iN)(t.id)
                                    : (0, I.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("327744"),
                                              n.e("374962"),
                                              n.e("649500"),
                                              n.e("683426"),
                                              n.e("524434"),
                                              n.e("849162"),
                                              n.e("927517"),
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
                                    className: sx.R4,
                                    children: (0, r.jsx)(s, { size: "custom", className: sx.Kk }),
                                }),
                                (0, r.jsx)("div", {
                                    className: sx.Pf,
                                    children: (0, r.jsx)(e2.E, {
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
function s_(e) {
    let { thread: t } = e,
        n = (0, h.bG)([ic.default], () => ic.default.getUser(t.ownerId)),
        l = (0, sC.JO)(t);
    return (0, r.jsxs)(J.D, {
        className: sx.nM,
        onClick: function (e) {
            (0, lw.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lk.H9.POPOUT);
        },
        children: [
            (0, r.jsx)("div", {
                className: sx.R4,
                children:
                    null == n
                        ? (0, r.jsx)("img", {
                              className: sx.my,
                              src: sE.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, r.jsx)(sp.A, { className: sx.my, user: n, size: i4._3.SIZE_16 }),
            }),
            (0, r.jsxs)("div", {
                className: sx.Pf,
                children: [
                    (0, r.jsx)(e2.E, { className: sx.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, r.jsx)(e2.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, r.jsx)(e2.E, {
                        className: sx.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, sC.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var sS = n(70688),
    sI = n(545691);
function sb(e) {
    let { frameId: t } = e;
    return (0, r.jsx)(q.m, {
        asContainer: !0,
        text: er.intl.string(er.t.VkMnR2),
        children: (0, r.jsx)(J.D, {
            className: eo.Xs,
            onClick: () => (0, sI.A)(t),
            "aria-label": er.intl.string(er.t.VkMnR2),
            children: (0, r.jsx)(sS.DoorExitIcon, { size: "xs", color: "currentColor", className: eo.gE }),
        }),
    });
}
var sj = n(664699);
function sv(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, r.jsx)(q.m, {
        asContainer: !0,
        text: er.intl.string(er.t.ZXxLQg),
        children: (0, r.jsx)(J.D, {
            className: eo.Xs,
            onClick: () => (0, sj.A)(t, n ? iA.A.CHANNEL_LIST_SUGGESTED_SECTION : void 0),
            "aria-label": er.intl.string(er.t.ZXxLQg),
            children: (0, r.jsx)(lU.ChatIcon, { size: "xs", color: "currentColor", className: eo.gE }),
        }),
    });
}
var sG = n(364522),
    sR = n(302959),
    sy = n(709899),
    sL = n(970928),
    sT = n(641635);
let sM = nd.DN.SIZE_24;
function sU(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = sE.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, r.jsx)(q.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, r.jsx)("img", { alt: t, src: e, className: sT.P3 }),
        });
    }
    let s = l.large_image ?? l.small_image;
    return null != s
        ? (0, r.jsx)("img", { alt: l.large_text ?? "", src: (0, sL.uD)(i, s, [128, 128]), className: sT.P3 })
        : null;
}
function sD(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        s = (0, h.yK)([ic.default], () => i.map((e) => ic.default.getUser(e)).filter(tu.Vq));
    return (0, r.jsx)("div", {
        className: sT.ec,
        children: (0, r.jsxs)("div", {
            className: sT.Wh,
            children: [
                (0, r.jsx)(sU, { activity: t, embeddedApp: n }),
                (0, r.jsxs)("div", {
                    className: sT.X0,
                    children: [
                        (0, r.jsx)(la.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: sT.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, r.jsx)(e2.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, r.jsx)(e2.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, r.jsx)(nd.Ay, {
                                className: sT.TN,
                                guildId: l.guild_id,
                                users: s,
                                size: sM,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nd.mt) return null;
                                    let t = se.Ay.getName(e);
                                    return (0, r.jsx)(
                                        q.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, r.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, sM),
                                                alt: t,
                                                className: sT.my,
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
var sP = n(584960);
function sO(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        s = Array.from(l.embeddedActivity.userIds),
        a = (0, h.bG)([ic.default], () => ic.default.getUser(s[0]));
    return null == a
        ? null
        : (0, r.jsxs)("div", {
              className: sP.Eb,
              children: [
                  (0, r.jsx)("div", {
                      className: sP.Il,
                      children: (0, r.jsx)(sD, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, r.jsx)("div", {
                      className: sP.M4,
                      children: (0, r.jsx)(sy.A, {
                          type: sR.M.VOICE_CHANNEL,
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
var sw = n(713654),
    sV = n(744399);
function sH(e) {
    let { channel: t } = e,
        n = (0, h.bG)([P.A], () => P.A.getGuild(t.guild_id)),
        l = (0, tQ.Ay)(t),
        i = (0, sw.gU)(t, n);
    return null == i
        ? null
        : (0, r.jsxs)("div", {
              className: sV.hY,
              children: [
                  (0, r.jsx)(i, { className: sV.p }),
                  (0, r.jsx)(e2.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: sV.HA,
                      children: l,
                  }),
              ],
          });
}
var sk = n(220650);
function sB(e) {
    let { channel: t, onAction: n } = e,
        l = (0, ib.Ay)(t),
        i = Array.from((0, ib.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, r.jsxs)(sG.Ip, {
              className: sk.kL,
              children: [
                  (0, r.jsx)("div", { className: sk.oT, children: (0, r.jsx)(sH, { channel: t }) }),
                  (0, r.jsx)("div", { className: sk.zN }),
                  i.map((e, l) =>
                      (0, r.jsx)(
                          sO,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class sF extends nF {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = a.createRef();
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
    handleClosePopout = () => {
        (this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose());
    };
    handleMouseDown = () => {
        var e;
        let t, n, l;
        (this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose());
        let { channel: i } = this.props,
            s = i.getGuildId();
        (lM.A.preload(s ?? H.ME, i.id),
            (e = i.id),
            (t = U.A.getChannel(e)),
            (n = t?.application_id),
            (l = t?.type === H.rbe.GUILD_APP ? (0, iZ.HD)(t) : null),
            null == t ||
                null == n ||
                null == l ||
                null != iX.A.getFrame((0, iZ.VA)(n, l)) ||
                !O.A.can(H.xBc.VIEW_CHANNEL, t) ||
                (0, iY.qR)(t) ||
                (0, sh.BV)(t) ||
                (null != (0, sd.Ay)(n) &&
                    ((0, so.M)(n, (0, su.A)(l), l.type),
                    (0, sc.A)(n).catch(H.tEg),
                    i3.YY.fetchMany([n]).catch(H.tEg))));
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: s } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && s && !n
              ? (0, r.jsx)(sB, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, r.jsx)(sN, { ...e, channel: this.props.channel });
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
            return void (0, e9.L3)(e, async () => {
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
            let l = ic.default.getUser(t.getRecipientId());
            null != l &&
                (0, e9.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("339715"),
                        n.e("790484"),
                        n.e("108888"),
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
                        n.e("28102"),
                        n.e("189673"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("955557"),
                        n.e("571210"),
                        n.e("691994"),
                        n.e("229787"),
                        n.e("576665"),
                        n.e("88342"),
                        n.e("311802"),
                        n.e("698965"),
                        n.e("235313"),
                        n.e("947502"),
                        n.e("474610"),
                        n.e("436564"),
                        n.e("245996"),
                        n.e("700792"),
                        n.e("965789"),
                        n.e("592822"),
                        n.e("529422"),
                        n.e("823427"),
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
                    return (n) => (0, r.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, e9.L3)(e, async () => {
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
        let l = P.A.getGuild(t.getGuildId());
        null != l &&
            (0, e9.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("474610"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("198415"),
                    n.e("309004"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("356664"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("285802"),
                    n.e("65200"),
                    n.e("591377"),
                    n.e("356675"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("337341"),
                    n.e("29542"),
                    n.e("333730"),
                    n.e("248804"),
                    n.e("174489"),
                    n.e("335517"),
                ]).then(n.bind(n, 317804));
                return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: l });
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
                muted: l,
                unread: i,
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
                isSuggestedSection: x,
                sorting: N,
                appFrameId: _,
                appRunningLabel: S,
            } = this.props,
            { shouldShowThreadsPopout: I, shouldShowActivities: b } = this.state,
            j = E && null != p && p.length > 0,
            v = i$(A),
            G = x ? { source: iA.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            R = (0, l4.Ay)({
                channel: e,
                unread: i,
                mentionCount: o,
                isSubscriptionGated: m,
                embeddedActivitiesCount: p?.length,
            }),
            y = (0, r.jsxs)("li", {
                className: eV()(this.getClassName(), { [eo.r9]: this.isDisabled(), [eo.wH]: n }),
                "data-dnd-name": (0, tQ.m1)(e, ic.default, iI.A),
                onMouseEnter: a || j ? this.handleMouseEnter : void 0,
                onMouseLeave: a || j ? this.handleMouseLeave : void 0,
                children: [
                    (0, r.jsx)(l9.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (a && this.state.shouldShowThreadsPopout) || (j && this.state.shouldShowActivities),
                        children: () =>
                            (0, r.jsxs)(nz.Ay, {
                                ref: this.channelItemRef,
                                className: eo.Ki,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: l,
                                unread: i,
                                mentionCount: o,
                                hasActiveThreads: s,
                                subtitle: v?.subtitle,
                                subtitleColor: v?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: f ? H.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: G,
                                iconClassName: null != S ? eo.Gj : void 0,
                                iconTooltipText: S ?? void 0,
                                "aria-label": null != S ? `${R}, ${S}` : R,
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
                                                    ? (0, r.jsx)(sv, { channel: e, isSuggestedSection: x })
                                                    : null,
                                                this.renderInviteButton(),
                                                null != _ ? (0, r.jsx)(sb, { frameId: _ }) : null,
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    e.type !== H.rbe.GUILD_APP || g
                        ? null
                        : (0, r.jsx)(si, {
                              applicationId: e.application_id,
                              guildId: e.guild_id,
                              targetElementRef: this.channelItemRef,
                              disabled: !0 === N || I || b,
                              position: "right",
                              animationPosition: "left",
                              spacing: 17,
                          }),
                ],
            });
        return h ? d(c(y)) : y;
    }
}
let sz = F(sF);
function sK(e) {
    let t,
        n,
        { channel: l, guild: i, disableSorting: s, isFavoriteCategory: a, muted: o, selected: d } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, lO.NR)(l),
        m = (0, h.cf)([np.Ay], () => ({
            unread: np.Ay.hasUnread(l.id),
            ackMessageId: np.Ay.ackMessageId(l.id),
            isLowImportanceMention: np.Ay.getIsMentionLowImportance(l.id),
        })),
        g = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(l)),
        A = (0, h.cf)([U.A, O.A], () => {
            let e = U.A.getChannel(l.parent_id);
            return {
                canManageChannel: O.A.can(H.xBc.MANAGE_CHANNELS, l),
                canReorderChannel:
                    !0 !== s &&
                    ((0, L.ai)(i.id) ||
                        (null != e ? O.A.can(H.xBc.MANAGE_CHANNELS, e) : O.A.can(H.xBc.MANAGE_CHANNELS, i))),
            };
        }),
        f = (0, h.bG)([ll.A], () => ll.A.shouldIndicateNewChannel(i.id, l.id)),
        { needSubscriptionToAccess: p, isSubscriptionGated: C } = (0, lP.A)(l.id),
        E = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(i.id, l.id)),
        x = (0, iY.ni)(l),
        N = (0, iW.Gp)(l.id),
        _ = iw({
            channel: l,
            isChannelCollapsed: !1,
            isChannelSelected: d,
            isSubscriptionGated: C,
            needSubscriptionToAccess: p,
            isNewChannel: f,
            muted: o,
            enableActivities: N,
            resolvedUnreadSetting: g,
        }),
        S = (0, ib.Ay)(l),
        I = (0, h.bG)([sg.A, sm.Ay], () => sg.A.getChannelId() !== l.id && sm.Ay.isCurrentUserGuest(l.getGuildId())),
        b = (0, l7.BX)("ConnectedTextChannel"),
        { frameId: j, runningLabel: v } =
            ((t = (0, h.bG)(
                [iX.A],
                () => {
                    let e = l.type === H.rbe.GUILD_APP ? (0, iZ.HD)(l) : null;
                    return (null != e ? iX.A.getFramesForSurface(e)[0]?.id : void 0) ?? null;
                },
                [l],
            )),
            (n = (0, h.bG)([iX.A, iq.Ay], () => (0, iJ.A)(iX.A.getFrame(t), iq.Ay), [t])),
            { frameId: t, runningLabel: n ? er.intl.string(er.t["1yCkJY"]) : null });
    return I
        ? null
        : (0, r.jsx)(sz, {
              ...m,
              ...A,
              ...e,
              hasActiveThreads: c,
              hasMoreActiveThreads: u,
              isSubscriptionGated: C,
              needSubscriptionToAccess: p,
              isNewChannel: f && e.canBeNewChannel,
              isFavoriteSuggestion: a && !E,
              channelIsContentGated: x,
              channelInfo: _,
              embeddedApps: S,
              resolvedUnreadSetting: g,
              hasChannelInfo: null != _,
              enableActivities: N,
              shouldEnlargeTargets: b,
              appFrameId: j,
              appRunningLabel: v,
          });
}
var sW = n(900797),
    sY = n(636585),
    sX = n(531685),
    sq =
        (((s = {}).HIDDEN = "hidden"),
        (s.UNREAD = "unread"),
        (s.MENTIONS = "mentions"),
        (s.VOICE_CHANNELS = "voice-channels"),
        s);
let sJ = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sZ = { topBar: sJ, bottomBar: sJ },
    s$ = {},
    sQ = {};
function s0(e) {
    let t = U.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lK.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, to.Y)(t)
    );
}
function s1(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = V.Ay.isGuildCollapsed(n),
        i = V.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && np.Ay.getMentionCount(e) > 0;
}
function s3(e) {
    return (
        !V.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tg.A.getMutableParticipants(e.id, tA.ip.SPEAKER).length > 0
            : tc.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function s2(e) {
    let { guildChannels: t } = tI.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sQ[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let l = null,
        i = null,
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
            ((s0(t.id) || d().some(t.threadIds, s0)) && (o = !1),
            (s1(t.id) || d().some(t.threadIds, s1)) && (a = !1),
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
            ((s0(t.id) || d().some(t.threadIds, s0)) && (null == i && (i = t.id), (p = !0)),
                (s1(t.id) || d().some(t.threadIds, s1)) &&
                    (null == l && (l = t.id),
                    (f += np.Ay.getMentionCount(t.id)),
                    (f += d().sumBy(t.threadIds, np.Ay.getMentionCount))));
        }
    if (o || a)
        for (let e = 0; e < A.length; e++) {
            let t = A[e];
            if (!o && !a) break;
            ((s0(t.id) || d().some(t.threadIds, s0)) && (null == r && (r = t.id), (E = !0)),
                (s1(t.id) || d().some(t.threadIds, s1)) &&
                    (null == s && (s = t.id),
                    (C += np.Ay.getMentionCount(t.id)),
                    (C += d().sumBy(t.threadIds, np.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && d().some(_, s3)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : o && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : o && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i }));
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return ((s$[e] = { topBar: S ? (N ?? sJ) : sJ, bottomBar: I ? (x ?? sJ) : sJ }), !0);
}
let s9 = d().throttle(s2, 200);
function s5(e) {
    let { guildId: t } = e,
        n = P.A.getGuild(t);
    return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && s9(t);
}
function s6(e) {
    let { id: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let l = P.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(H.GuildFeatures.COMMUNITY) && s9(n.guild_id);
}
function s7(e) {
    let { channel: t } = e,
        n = U.A.getChannel(t.id);
    if (null == n) return !1;
    let l = P.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(H.GuildFeatures.COMMUNITY) && s9(n.guild_id);
}
function s4(e) {
    let { channelId: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let l = P.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(H.GuildFeatures.COMMUNITY) && w.A.getGuildId() === n.guild_id && s9(n.guild_id)
    );
}
function s8(e) {
    let { guildId: t } = e;
    return null != t && s9(t);
}
class re extends h.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tI.A, U.A, P.A, lK.A, np.Ay, w.A, tc.Ay, tg.A, V.Ay, ic.default);
    }
    getUnreadStateForGuildId(e) {
        return s$[e] ?? sZ;
    }
}
let rt = new re(e6.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = P.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(H.GuildFeatures.COMMUNITY) &&
            null != n &&
            !d().isEqual(sQ[t], n) &&
            ((sQ[t] = n), s2(t))
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
                .filter(tu.Vq)
                .uniq()
                .forEach((e) => {
                    let t = P.A.getGuild(e);
                    null != t && t.features.has(H.GuildFeatures.COMMUNITY) && s9(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: s4,
    CHANNEL_DELETE: s7,
    CHANNEL_LOCAL_ACK: s4,
    MESSAGE_ACK: s4,
    MESSAGE_CREATE: s4,
    MESSAGE_DELETE_BULK: s4,
    MESSAGE_DELETE: s4,
    PASSIVE_UPDATE_V2: function (e) {
        let t = P.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(H.GuildFeatures.COMMUNITY)) && s9(e.guildId);
    },
    RESORT_THREADS: s4,
    THREAD_CREATE: s7,
    THREAD_DELETE: s7,
    THREAD_LIST_SYNC: s5,
    THREAD_MEMBER_UPDATE: s6,
    THREAD_MEMBERS_UPDATE: s6,
    THREAD_UPDATE: s7,
    BULK_CLEAR_RECENTS: s5,
    CATEGORY_COLLAPSE_ALL: s5,
    CATEGORY_EXPAND_ALL: s5,
    CURRENT_USER_UPDATE: function () {
        let e = ic.default.getCurrentUser()?.nsfwAllowed;
        if (e === l) return !1;
        l = e;
        let t = w.A.getGuildId();
        if (null == t) return !1;
        let n = P.A.getGuild(t);
        return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && s9(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = w.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = s$[n];
        return null != l && "voice-channels" === l.bottomBar.mode && s9(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: s8,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: s8,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && s9(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: s8,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: s8,
});
var rn = n(350536);
let rl = { friction: 30, tension: 300 };
function ri(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, h.bG)([tc.Ay], () => tc.Ay.getVoiceStates(t.id), [t.id]),
        s = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nh.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, r.jsxs)(J.D, {
        className: eV()(rn.M0, rn.OF),
        onClick: s,
        children: [
            (0, r.jsx)(tZ.H, { size: "custom", className: rn.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, r.jsx)(e2.E, {
                variant: "text-xs/semibold",
                className: rn.pM,
                children: er.intl.format(er.t["fDlr+F"], { count: d.length }),
            }),
            (0, r.jsx)(sY.A, {
                guildId: t.id,
                className: rn.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: i4._3.SIZE_16,
            }),
        ],
    });
}
function rs(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: s } = e,
        { bottomBar: o, topBar: d } = (0, h.cf)([rt], () => rt.getUnreadStateForGuildId(n.id)),
        c = (0, h.bG)([sX.A], () => sX.A.isFocused()),
        { mode: u, mentionCount: m, targetChannelId: g } = "bottom" === t ? o : d,
        A = u === sq.HIDDEN,
        f = (0, e3.z)(
            {
                to: { transform: A ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: rl,
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
        className: eV()(rn.kL, { [rn.Mn]: "top" === t, [rn.sQ]: "bottom" === t }),
        children: (0, r.jsx)(e1.animated.div, {
            className: rn.pK,
            style: f,
            "aria-hidden": A,
            children: (function () {
                switch (u) {
                    case sq.HIDDEN:
                        return (0, r.jsx)("div", { className: eV()(rn.M0, rn.Te) });
                    case sq.UNREAD:
                        return (0, r.jsxs)(J.D, {
                            className: rn.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, r.jsx)(tq.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: rn.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, r.jsx)(sW.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: rn.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, r.jsx)(e2.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: rn.pM,
                                    children: er.intl.string(er.t.FCRiT3),
                                }),
                            ],
                        });
                    case sq.MENTIONS:
                        return (0, r.jsx)(J.D, {
                            className: eV()(rn.M0, rn.vU),
                            onClick: p,
                            children: (0, r.jsx)(e2.E, {
                                variant: "text-xs/semibold",
                                color: "badge-primary-text",
                                className: rn.pM,
                                children: er.intl.format(er.t.EQcLyp, { count: m }),
                            }),
                        });
                    case sq.VOICE_CHANNELS:
                        return (0, r.jsx)(ri, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var rr = n(310953),
    ra = n(173860);
function ro(e) {
    let t = U.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lK.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, to.Y)(t)
    );
}
function rd(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = V.Ay.isGuildCollapsed(n),
        i = V.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && np.Ay.getMentionCount(e) > 0;
}
function rc(e) {
    let { guildId: t, guildChannels: n, guildChannelsVersion: l, ref: i, ...s } = e,
        a = (0, rr.W)(t, n, l, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, h.bG)([sX.A], () => sX.A.isFocused());
    return (0, r.jsx)(ra.A, { ref: i, ...s, isUnread: ro, isMentioned: rd, items: a, animate: o });
}
var ru = n(81466);
function rh(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: s } = (0, h.cf)(
            [np.Ay],
            () => ({
                hasUnread: np.Ay.hasUnread(t.id, nN.P.GUILD_EVENT),
                mentionCount: np.Ay.getMentionCount(t.id, nN.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, h.bG)([V.Ay], () => V.Ay.isMuteScheduledEventsEnabled(t.id));
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
    let d = (0, tk.Ay)(t.id),
        c = d.length > 0 ? er.intl.formatToPlainString(er.t.IBdqSu, { number: d.length }) : er.intl.string(er.t.tlopTM);
    return (0, r.jsx)(et.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(ru.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: function (e) {
            (0, e9.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && s > 0 ? (0, r.jsx)(eA.hV, { className: n6.Do, disableColor: !0, count: s }) : null,
    });
}
var rm = n(845056),
    rg = n(765379),
    rA = n(271683),
    rf = n(725613),
    rp = n(857253),
    rC = n(360729),
    rE = n(22231),
    rx = n(241326),
    rN = n(750943),
    r_ = n(743674),
    rS = n(888697),
    rI = n(26741),
    rb = n(493819),
    rj = n(722884),
    rv = n(579129),
    rG = n(176431);
function rR(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: s, canModifyHangout: o } = e,
        d = (0, r_.S)(l),
        c = (0, eM.je)(t),
        u = (0, rI.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: s }),
        h = a.useCallback(() => {
            ((0, rI.J_)({ guildId: t.guild_id, channelId: t.id }), (0, rj.A)({ channel: t }));
        }, [t]),
        m = a.useCallback(() => {
            ((0, rI.nK)({ guildId: t.guild_id, channelId: t.id }), (0, rS.e2)(t.id));
        }, [t.guild_id, t.id]),
        g = a.useCallback(
            (e) => {
                c
                    ? (0, e9.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, r.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, r.jsxs)("div", {
        ref: u,
        className: rG.rs,
        onContextMenu: g,
        children: [
            (0, r.jsx)("div", {
                className: rG.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, r.jsx)(rb.A, { imageUrl: l, animatedUrl: i, className: rG.Sl }),
            }),
            o
                ? (0, r.jsxs)("div", {
                      className: rG.n_,
                      children: [
                          (0, r.jsx)(q.m, {
                              text: er.intl.string(rv.default.XJ4UpB),
                              children: (0, r.jsx)(J.D, {
                                  className: rG.HF,
                                  onClick: h,
                                  children: (0, r.jsx)(rE.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, r.jsx)(q.m, {
                              text: er.intl.string(rv.default.XV4qT6),
                              children: (0, r.jsx)(J.D, {
                                  className: rG.HF,
                                  onClick: m,
                                  children: (0, r.jsx)(rx.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ry(e) {
    let { channel: t } = e,
        n = (0, rI.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = a.useCallback(() => {
            ((0, rI.J_)({ guildId: t.guild_id, channelId: t.id }), (0, rj.A)({ channel: t }));
        }, [t]);
    return (0, r.jsx)("div", {
        ref: n,
        className: rG._o,
        children: (0, r.jsxs)(J.D, {
            className: rG.hH,
            onClick: l,
            children: [
                (0, r.jsx)(rN.X, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(e2.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: er.intl.string(rv.default.NGcIOF),
                }),
            ],
        }),
    });
}
function rL(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, eT.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, eM.W6)(t),
        s = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = a.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eM.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return l
        ? null != c
            ? (0, r.jsx)(rR, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: s,
              })
            : s
              ? (0, r.jsx)(ry, { channel: t })
              : null
        : null;
}
var rT = n(290863),
    rM = n(461213),
    rU = n(532622),
    rD = n(882840),
    rP = n(208971),
    rO = n(46054),
    rw = n(569381),
    rV = n(165648);
function rH(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: s } = e,
        o = (0, rP.G)((0, rD.l)(t)),
        { enableHangoutWindow: d } = (0, eT.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, eM.lr)(t),
        u = null != o && o.length > 0,
        h = (0, rU.Ay)(t, !0),
        m = null != i && i.length > 0;
    if (
        (a.useEffect(() => {
            u && lG.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = eV()(rw.Ui, n && h ? rw.BI : null);
    return u
        ? (0, r.jsx)(J.D, {
              className: g,
              onClick: h ? s : void 0,
              children: (0, r.jsx)(e2.E, {
                  variant: "text-xs/medium",
                  className: eV()(rw.qS, rV.PT),
                  children: (0, r.jsx)(tK.A, { children: rO.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!m || l)
          ? (0, r.jsxs)(J.D, {
                className: g,
                onClick: s,
                children: [
                    (0, r.jsx)(e2.E, {
                        variant: "text-xs/medium",
                        className: rw.qS,
                        children: er.intl.string(er.t.Mgpxiw),
                    }),
                    (0, r.jsx)(rE.PencilIcon, { color: "currentColor", className: rw.rD, size: "xxs" }),
                ],
            })
          : m
            ? (0, r.jsx)(tK.A, { children: i })
            : null;
}
class rk extends nF {
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
            unverifiedAccount: l,
            needSubscriptionToAccess: i,
            mentionCount: s,
            isSuggestedSection: r,
            guildRoomsEnabled: a,
        } = this.props;
        l && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = s > 0;
        (o && l5.A.updateChatOpen(n.id, !0),
            lD.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: iA.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = P.A.getGuild(t.getGuildId());
        null != l &&
            (0, e9.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("474610"),
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
                return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: l });
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
        return (0, nh.Pd)(e, lV.A, P.A);
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
        (null != t && (0, ie.V)(t) && (0, l8.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, rA.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = i$(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, r.jsx)(rH, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, r.jsx)(l$.A, {
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
        return !(null != n && n.length > 0) || l ? null : (0, r.jsx)(rL, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, r.jsx)(ig, { type: im.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l, shouldEnlargeTargets: i } = this.props;
        if (!t)
            return (0, r.jsx)(q.m, {
                asContainer: !0,
                text: er.intl.string(er.t.ZXxLQg),
                children: (0, r.jsx)(J.D, {
                    className: eV()(eo.Xs, { [eo.Tf]: n }),
                    onClick: () => {
                        (l5.A.updateChatOpen(e.id, !0),
                            (0, ip.iN)(e.id, l ? { source: iA.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": er.intl.string(er.t.ZXxLQg),
                    focusProps: i ? { offset: 2 } : void 0,
                    children: (0, r.jsx)(lU.ChatIcon, { size: "xs", color: "currentColor", className: eo.gE }),
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
                unread: l,
                resolvedUnreadSetting: i,
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
            j = _ || S,
            v = (0, r.jsxs)("li", {
                ref: this.ref,
                className: eV()(this.getModeClass(), { [eo.r9]: this.isDisabled(), [eo.fy]: _ }),
                "data-dnd-name": (0, tQ.m1)(e, ic.default, iI.A),
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
                        children: (0, r.jsx)(l9.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, r.jsx)(q.m, {
                                    text: this.getTooltipText(),
                                    children: (0, r.jsxs)(nz.Ay, {
                                        ref: this.channelItemRef,
                                        className: eo.Ki,
                                        iconClassName: eV()({ [eo.Gj]: A || x || j }),
                                        hasActiveEvent: A,
                                        channel: e,
                                        selected: !C && t,
                                        connected: n,
                                        unread: n ? l : void 0,
                                        resolvedUnreadSetting: i,
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
                                        "aria-label": (0, l4.Ay)({
                                            channel: e,
                                            unread: l,
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
            m && (v = c(v)),
            h && (v = o(d(v))),
            g &&
                (v = (0, r.jsx)(ni.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: v,
                })),
            v
        );
    }
}
let rB = F((0, l6.F)(rk));
function rF(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: s,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, h.cf)([np.Ay], () => ({ unread: np.Ay.hasUnread(n.id), mentionCount: np.Ay.getMentionCount(n.id) })),
        c = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        u = (0, h.cf)([U.A, id.A, O.A], () => {
            let e = U.A.getChannel(n.parent_id),
                i = id.A.getCheck(n.guild_id);
            return {
                canManageChannel: O.A.can(H.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    ((0, L.ai)(t.id) ||
                        (null != e ? O.A.can(H.xBc.MANAGE_CHANNELS, e) : O.A.can(H.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: O.A.can(H.xBc.MOVE_MEMBERS, n),
                locked: !O.A.can(H.xBc.CONNECT, n),
                bypassLimit: O.A.can(H.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        m = (0, h.bG)([lV.A], () => lV.A.hasVideo(n.id)),
        { enabled: g } = (0, rC.mf)({ guildId: t.id, location: "VoiceChannel" }),
        A = (0, ib.Ay)(n),
        f = (0, h.yK)(
            [rM.A, rT.A, iN.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = iN.default.getId(),
                    t = [];
                for (let { user: l } of o)
                    for (let i of l.id === e ? rM.A.getActivities() : rT.A.getActivities(l.id, n.guild_id))
                        !(0, rm.N)(i) || (0, rg.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, tQ.Ay)(n),
        C = (0, tk.Qs)(n.id),
        E = (0, h.bG)([rf.A], () => rf.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, lP.A)(n.id),
        _ = (0, rp.A)(),
        S = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: j } = (0, nc.b)(t.id, "VoiceChannel"),
        v = null != o && o.length > 0,
        G = b && v,
        R = j && v,
        y = iw({
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
        M = (0, l7.BX)("VoiceChannel");
    return (0, r.jsx)(rB, {
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
        isFavoriteSuggestion: i && !S,
        forceShowButtons: T,
        channelInfo: y,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != y,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: G,
        shouldUseAnimatedWaveform: R,
        guildRoomsEnabled: g,
        shouldEnlargeTargets: M,
    });
}
n(131955);
function rz(e) {
    return (
        m.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * m.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rK extends a.PureComponent {
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
        (this.setState({ initialized: !0 }), (0, tb.Ei)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tN.A.getGuildDimensions(l);
        (null != n
            ? (this.scrollToChannel(n), x.A.clearChannelListScrollTo(l))
            : l !== e.guildId
              ? null != r && this.scrollTo(r)
              : i !== e.selectedChannelId
                ? this.scrollToChannel(i)
                : !t.initialized &&
                  s &&
                  (null == r && null != i
                      ? this.scrollToChannel(i, !1, 8, this.handleListScroll)
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
            l = arguments.length > 3 ? arguments[3] : void 0,
            i = this._list,
            s = this.getSectionRowsFromChannel(e)[0];
        if (null != s && null != i)
            if (null != s.threadOffset) {
                let [e] = i.getScrollPosition(s.section, s.row),
                    { density: r = "default" } = this.props,
                    a = s.threadOffset * rz(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + rz(r), padding: n, animate: t, callback: l });
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
            if ((0, g.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
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
            (null != e && e(t), this.updateChannelListScroll(n));
        }
        (null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(),
            null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState());
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
                if (l < tS.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, tx.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, to.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, o.throttle)((e) => {
        x.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: l } = this.props,
            i = "compact" === l ? 8 : 12;
        if (e === tS.PU) return i;
        if (e === tS.bK) return t.features.has(H.GuildFeatures.HUB) ? 0 : i;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let l = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == l || l.record.type === H.rbe.GUILD_CATEGORY ? 9 : 25;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nm(n, r, t),
                u = d ? (a ? 9 : m.A.space.SPACE_SM.resolve({ density: o ?? "default" })) : 0;
            if (!c || t === tS.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== M.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!O.A.can(H.xBc.VIEW_CHANNEL, e)) return !1;
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
            a = rz(r);
        if (e === tS.PU) {
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
        if (d.record.type === H.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += rz(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eD.Ln)(d.record) && (t += 32),
                    (a += t + m.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eT.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, eM.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
                }
            }
            d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != d.subtitle || s === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = l[d.id] ?? [],
                t = i[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                (d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8));
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
        (null != n && s.includes(n) && (i = (0, eP.xb)(t)), (0, eP.DD)(e.id, s, i));
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                guild: i,
                selectedChannelId: s,
                disableManageChannels: a,
            } = this.props;
        return (0, r.jsx)(
            no,
            {
                sectionIndex: t,
                guild: i,
                guildChannels: n,
                guildChannelsVersion: l,
                selectedChannelId: s,
                disableManageChannels: a,
            },
            (function (e, t) {
                switch (e) {
                    case tS.PU:
                        return "hoisted-spacer";
                    case tS.bK:
                        return "uncategorized-spacer";
                    case tS.HP:
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
        if (t === tS.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tz.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, r.jsx)(
                        eU.A,
                        { guild: l, channel: t_.Ay.getDefaultChannel(l.id) },
                        tz.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tz.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, r.jsx)(ta, { guild: l, withMargin: i.length > 1 }, tz.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tz.n.GUILD_SPACE:
                    return (0, r.jsx)(eL, { guild: l, selected: s === el.VV.GUILD_SPACE }, tz.n.GUILD_SPACE);
                case tz.n.GUILD_HOME:
                    return (0, r.jsx)(lr, { guild: l, selected: s === el.VV.GUILD_HOME }, tz.n.GUILD_HOME);
                case tz.n.GUILD_SCHEDULED_EVENTS:
                    return (0, r.jsx)(
                        rh,
                        { guild: l, selected: s === tz.n.GUILD_SCHEDULED_EVENTS },
                        tz.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tz.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, r.jsx)(
                        lN,
                        { guild: l, selected: s === el.VV.ROLE_SUBSCRIPTIONS },
                        tz.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tz.n.GUILD_SHOP:
                    return (0, r.jsx)(lT, { guild: l, selected: s === el.VV.GUILD_SHOP }, tz.n.GUILD_SHOP);
                case tz.n.GUILD_GAME_SHOP:
                    return (0, r.jsx)(n4, { guild: l, selected: s === el.VV.GAME_SHOP }, tz.n.GUILD_GAME_SHOP);
                case tz.n.GUILD_CONJURE:
                    return (0, r.jsx)(nv, { guild: l, selected: s === el.VV.CONJURE }, tz.n.GUILD_CONJURE);
                case tz.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, r.jsx)(lh, { guild: l });
                case tz.n.GUILD_ONBOARDING_SETUP_PROGRESS:
                    return (0, r.jsx)(lE, { guild: l }, tz.n.GUILD_ONBOARDING_SETUP_PROGRESS);
                case tz.n.CHANNELS_AND_ROLES:
                    return (0, r.jsx)(
                        li,
                        { guild: l, selected: s === el.VV.CHANNEL_BROWSER || s === el.VV.CUSTOMIZE_COMMUNITY },
                        tz.n.CHANNELS_AND_ROLES,
                    );
                case tz.n.GUILD_DIRECTORY:
                    return (0, r.jsx)(
                        nK,
                        { guild: l, selectedChannelId: s, disableManageChannels: h },
                        tz.n.GUILD_DIRECTORY,
                    );
                case tz.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, r.jsx)(
                        eN,
                        { guild: l, selected: s === el.VV.MEMBER_SAFETY },
                        tz.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tz.n.GUILD_BOOSTS:
                    return (0, r.jsx)(e0, { guildId: l.id, selected: s === el.VV.GUILD_BOOSTS }, tz.n.GUILD_BOOSTS);
                case tz.n.GAME_SERVERS:
                    return (0, r.jsx)(em, { guildId: l.id, selected: s === el.VV.GAME_SERVERS }, tz.n.GAME_SERVERS);
                case tz.n.GAME_SERVERS_EMPTY:
                    return (0, r.jsx)(
                        ed,
                        { guildId: l.id, selected: s === el.VV.GAME_SERVERS },
                        tz.n.GAME_SERVERS_EMPTY,
                    );
                case tz.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, r.jsx)(
                        lg,
                        { guild: l, selected: s === el.VV.GUILD_OFFICIAL_MESSAGES },
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
            E = p instanceof tS.xu,
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
                            (0, r.jsx)(sK, {
                                channel: x,
                                guild: l,
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
                                ? (0, r.jsx)(l2, {
                                      withGuildIcon: A,
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
            case H.rbe.GUILD_STAGE_VOICE:
                return (0, r.jsx)(
                    iB,
                    {
                        channel: x,
                        guild: l,
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
                    rF,
                    {
                        channel: x,
                        guild: l,
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
                return (0, r.jsx)(iK, { channel: x, guild: l, position: C.position, selected: s === C.id }, N);
            case H.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, r.jsx)(nl, { channel: x }, `readonly-${x.id}`);
            case H.rbe.PUBLIC_THREAD:
            case H.rbe.PRIVATE_THREAD:
            case H.rbe.ANNOUNCEMENT_THREAD:
                return (0, r.jsx)(
                    sK,
                    {
                        channel: x,
                        guild: l,
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
                guildChannelsVersion: l,
                voiceStates: i,
                selectedChannelId: s,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, r.jsx)(
            nA,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: l,
                sectionIndex: t,
                voiceStates: i,
                selectedChannelId: s,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: l, canHaveVoiceSummary: i } = nm(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: s, guildChannelsVersion: a } = this.props;
        return (0, r.jsx)("div", {
            className: na.Eo,
            children: (0, r.jsx)(rc, {
                ref: this.unreadTopRef,
                textUnread: er.intl.string(er.t.FCRiT3),
                textMention: er.intl.string(er.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: na.Vq,
                barClassName: na.bu,
                guildId: i,
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
            { bottomMention: l, isUnreadVisible: i } = this.state;
        return (0, r.jsx)(rc, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: er.intl.string(er.t.FCRiT3),
            textMention: er.intl.string(er.t["8zH0LJ"]),
            hide: null == l && i,
            className: na.di,
            barClassName: na.bu,
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
        if (e !== tS.PU) {
            if (null == t)
                return e === tS.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tS.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            i = {};
        (0, L.ai)(n) && (i["data-favorites"] = !0);
        let { ref: s, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === l ? 8 : 12;
        return (0, r.jsx)(A.sk, {
            children: (t) =>
                (0, r.jsx)(
                    f.OZ,
                    {
                        ref: this.setListRef,
                        className: na.XG,
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
                        ...i,
                    },
                    "guild-channels",
                ),
        });
    }
    testShouldSkipTutorial = () => {
        if (!tC.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tp.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || tp.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, r.jsx)(Y.V0, {
            children: (l) =>
                (0, r.jsx)(p.F, {
                    component: (0, r.jsx)(C.A, {
                        children: (0, r.jsx)(p.H, { id: l, children: er.intl.string(er.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, r.jsxs)(a.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: na.Eo,
                                      children: (0, r.jsx)(rs, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, r.jsx)(rs, {
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
let rW = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, h.bG)([z.Ay], () => z.Ay.keyboardModeEnabled),
        { analyticsLocations: s } = (0, W.Ay)(K.A.GUILD_CHANNEL_LIST),
        o = (0, h.bG)([U.A], () => U.A.getChannel(n)),
        d = (0, h.bG)([U.A], () => U.A.getChannel(l)),
        m = (0, h.bG)([w.A], () => w.A.getGuildId()),
        g = (0, eO.jN)(t),
        A = a.useRef(null),
        f = a.useCallback((e, t) => {
            let n = A.current;
            null != n &&
                (H.Ut1.test(t) || (0, el.jq)(t)
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
            isEnabled: i,
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
            [tg.A, U.A, td.A],
            () => {
                let t;
                return [
                    (t = (0, L.ai)(e)
                        ? tm.default
                              .keys(td.A.getFavoriteChannels())
                              .map((e) => U.A.getChannel(e))
                              .filter(tu.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tg.A.getChannels(e)).reduce((e, t) => {
                        let n = tg.A.getMutableParticipants(t.id, tA.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === tA.wY.VOICE).map(tf)), e);
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tg.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            th.D,
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
                    (0, r.jsx)(tE.q, { containerRef: E.containerProps.ref, itemType: k }),
                    (0, r.jsx)(rK, {
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
function rY(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tH.A)(t)),
                    (l = (0, tk.Ay)(t)),
                    !(0, h.bG)(
                        [P.A],
                        () => {
                            if (null == t) return !1;
                            let e = P.A.getGuild(t);
                            return e?.features.has(H.GuildFeatures.HUB) ?? !1;
                        },
                        [t],
                    ) &&
                        (n || l.length > 0)),
                s = (0, tL.W)(e.id),
                r = (0, tV.vz)(e.id),
                a = (0, tG.r)(e),
                o = (0, tF.jz)(e),
                d = (0, tD.d)(e.id),
                c = (0, tj.bG)([tM.h], () => tM.h.getNewMemberActions(e.id), [e.id]),
                u = (0, tv.Q9)(e, "useGuildActionRows"),
                m = (0, tw.A)(e.id),
                g = (0, tU.jY)(e.id),
                A = (0, tO.A)(e.id),
                { showSetupProgressRow: f } = (0, tP.D)(`useGuildActionRows${A ? "" : "-DISABLED"}`),
                p = (0, tT.fw)(e.id),
                C = (0, eb.Uq)(e.id, "useGuildActionRows"),
                E = [],
                x = e.features.has(H.GuildFeatures.HUB),
                N = e.features.has(H.GuildFeatures.COMMUNITY),
                _ = e.features.has(H.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                S = (0, tt.A)(e.id),
                I = tl(e),
                b = (0, tB.bW)(e.id, "useGuildActionRows"),
                j = (0, tR.C$)(e.id, "useGuildActionRows"),
                v = e.features.has(H.GuildFeatures.GAME_SERVERS),
                G = (0, ty.N)("useGuildActionRows"),
                [R] = (0, ee.kn)(j && G && !v ? [X.M.EMPTY_GAME_SERVER_TAB] : [], { bypassAutoDismiss: !0 });
            return (
                x && E.push(tz.n.GUILD_HUB_HEADER_OPTIONS),
                A && f
                    ? E.push(tz.n.GUILD_ONBOARDING_SETUP_PROGRESS)
                    : !g && d && m && null != c && c.length > 0
                      ? E.push(tz.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                      : e.premiumProgressBarEnabled && I > 0 && E.push(tz.n.GUILD_PREMIUM_PROGRESS_BAR),
                !x && d && E.push(tz.n.GUILD_HOME),
                C && E.push(tz.n.GUILD_SPACE),
                i && E.push(tz.n.GUILD_SCHEDULED_EVENTS),
                !x && N && E.push(tz.n.CHANNELS_AND_ROLES),
                r && E.push(tz.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && E.push(tz.n.GUILD_SHOP),
                o && E.push(tz.n.GUILD_GAME_SHOP),
                ((p && (N || _)) || (s && e.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    E.push(tz.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                S && E.push(tz.n.GUILD_BOOSTS),
                b && E.push(tz.n.GUILD_OFFICIAL_MESSAGES),
                j && (v ? E.push(tz.n.GAME_SERVERS) : null != R && E.push(tz.n.GAME_SERVERS_EMPTY)),
                u && E.push(tz.n.GUILD_CONJURE),
                E
            );
        })(e.guild),
        n = (0, h.cf)([tI.A], () => tI.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, E.wR)();
    return (0, r.jsx)(rW, { ...e, ...n, density: l });
}
