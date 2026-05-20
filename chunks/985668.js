"use strict";
n.d(t, { A: () => nf }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(284009),
    u = n.n(l),
    c = n(562708),
    d = n(172218),
    _ = n(17928),
    f = n(554146),
    h = n(116833),
    p = n(43105),
    E = n(939249),
    m = n(403581),
    g = n(228366),
    A = n(298990),
    I = n(367513),
    T = n(951001),
    S = n(492684),
    N = n(707606),
    y = n(475743),
    C = n(646865),
    v = n(795816),
    O = n(933958),
    R = n(379848),
    b = n(832248),
    D = n(371912),
    L = n(885386),
    w = n(843010),
    M = n(461213),
    P = n(174459),
    x = n(821609),
    U = n(652215),
    k = n(834730),
    G = n(133171),
    F = n(243721),
    V = n(315710),
    B = n(404778),
    H = n(331322),
    j = n(534514),
    Y = n(922016),
    W = n(827827),
    K = n(481045),
    z = n(395277),
    $ = n(375708),
    q = n(982375);
function Z(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: q.K2,
        children: (0, r.jsx)(x.$, {
            variant: "primary",
            size: "sm",
            text: $.intl.string(z.default.Poezn1),
            onClick: () => {
                t(), (0, W.A)({ nextStatus: U.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function X(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, _.bG)([M.A], () => M.A.getStatus());
    return (0, r.jsxs)("div", {
        className: q.E3,
        children: [
            (0, r.jsxs)("div", {
                className: q.fu,
                children: [
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: $.intl.string(z.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: q.$v,
                            children: [
                                (0, r.jsx)(G.nW, { status: U.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === U.clD.INVISIBLE
                                            ? $.intl.string(z.default.a3AofS)
                                            : $.intl.string($.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(F.d, {
                onChange: (e) => {
                    L.tz.updateSetting(e), n && (0, W.A)({ nextStatus: e ? U.clD.ONLINE : U.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function Q(e) {
    let { children: t } = e,
        n = (0, s.useRef)(null);
    return (
        (0, V.t)(n),
        (0, r.jsx)("div", { className: q.iE, ref: n, children: (0, r.jsx)("div", { className: q.Qs, children: t }) })
    );
}
function J(e) {
    let { closePopout: t } = e,
        n = L.tz.useSetting();
    return (0, r.jsxs)(Q, {
        children: [
            (0, r.jsx)(X, { showCurrentGame: n }),
            (0, r.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: $.intl.string(z.default["7cfFob"]),
            }),
            (0, r.jsx)(B.c, { className: q.yF }),
            (0, r.jsx)(K.qA, { onClosePopout: t }),
        ],
    });
}
function ee(e) {
    let { closePopout: t } = e;
    return (0, r.jsxs)(Q, {
        children: [
            (0, r.jsxs)(H.B, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, r.jsx)(j.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: q._M,
                        children: $.intl.string(z.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: q.$v,
                        children: [
                            (0, r.jsx)(G.nW, { status: U.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(k.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: $.intl.string(z.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: $.intl.string(z.default.Yl0mh4),
            }),
            (0, r.jsx)(Z, { closePopout: t }),
        ],
    });
}
function et(e) {
    let { closePopout: t } = e,
        n = L.tz.useSetting();
    return (0, r.jsxs)(Q, {
        children: [
            (0, r.jsx)(X, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, r.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: $.intl.string(z.default["7cfFob"]),
            }),
            (0, r.jsx)(B.c, { className: q.yF }),
            (0, r.jsx)(K.qA, { onClosePopout: t }),
        ],
    });
}
var en =
    (((i = {})[(i.ActivityNux = 0)] = "ActivityNux"),
    (i[(i.StatusNux = 1)] = "StatusNux"),
    (i[(i.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (i[(i.Activity = 3)] = "Activity"),
    (i[(i.Status = 4)] = "Status"),
    (i[(i.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    i);
function ei(e) {
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: a, children: o } = e,
        [l, u] = (0, s.useState)(n),
        c = (0, s.useRef)(null),
        d = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: $.intl.string(z.default.vxVbGP),
                        body: [$.intl.string(z.default["7cfFob"])],
                        action: {
                            text: $.intl.string(z.default.k4tCg2),
                            onClick: () => {
                                L.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: $.intl.string($.t["ZrN+DT"]), onClick: K.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: $.intl.string(z.default.qKDqet),
                        body: [$.intl.string(z.default.Yl0mh4)],
                        action: {
                            text: $.intl.string(z.default.Poezn1),
                            onClick: () => {
                                (0, W.A)({ nextStatus: U.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: $.intl.string(z.default["6cA8HZ"]),
                        body: [$.intl.string(z.default["7cfFob"])],
                        action: {
                            text: $.intl.string(z.default.k4tCg2),
                            onClick: () => {
                                L.tz.updateSetting(!0), (0, W.A)({ nextStatus: U.clD.ONLINE });
                            },
                        },
                        textLink: { text: $.intl.string($.t["ZrN+DT"]), onClick: K.L7 },
                    };
                case 3:
                    return { type: "popout", children: J };
                case 4:
                    return { type: "popout", children: ee };
                case 5:
                    return { type: "popout", children: et };
                default:
                    return null;
            }
        })(l),
        _ = (0, s.useRef)(t);
    if (
        ((0, s.useEffect)(() => {
            t && !_.current && u(n), t !== _.current && (_.current = t);
        }, [n, t]),
        null == d || !t)
    )
        return o;
    if ("popover" === d.type) {
        let { action: e, title: t, body: n, textLink: s } = d;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(p.A, {
                    targetElementRef: a,
                    shouldShow: !0,
                    position: "top",
                    align: "center",
                    onRequestClose: i,
                    title: t,
                    body: n,
                    textLink: s,
                    gradientColor: "purple",
                    graphic: {
                        type: "image",
                        src: "https://cdn.discordapp.com/assets/content/355f009edf130bbd113eb59339cf96fbf3ec337388a7da2dd296fb3b6e7b4b7c.png",
                    },
                    actions: [
                        {
                            ...e,
                            onClick: (t) => {
                                e.onClick?.(t), i();
                            },
                        },
                    ],
                }),
                o,
            ],
        });
    }
    let { children: f } = d;
    return (0, r.jsx)(Y.Y, {
        targetElementRef: c,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(f, { closePopout: t });
        },
        onRequestClose: i,
        children: () => (0, r.jsx)(E.D, { innerRef: c, onClick: i, children: o }),
    });
}
var er = n(49999);
let es = (e) => {
    let {
            children: t,
            isForceShowSharingPopout: n,
            setIsForceShowSharingPopout: i,
            popoutTargetRef: a,
            hidePopout: o = !1,
        } = e,
        l = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, D.c9)(),
                r = L.tz.useSetting(),
                s = (0, w.G)(),
                a = (0, _.bG)([M.A], () => M.A.getStatus()),
                { isOpen: o } = (0, b.A)();
            if (((n && i) || t) && !s && !o && !__OVERLAY__) {
                if (!r && a === U.clD.INVISIBLE) return t ? en.ActivityAndStatus : en.ActivityAndStatusNux;
                if (!r) return t ? en.Activity : en.ActivityNux;
                if (a === U.clD.INVISIBLE) return t ? en.Status : en.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, s.useEffect)(() => {
        n && P.default.track(U.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let u = n || o ? [] : [f.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(R.Ay, {
        contentTypes: u,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: o } = e,
                u = s === f.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(ei, {
                showPopout: u,
                popoutState: l,
                handleClose: () => {
                    o(er.i.USER_DISMISS), i(!1);
                },
                popoutTargetRef: a,
                children: t,
            });
        },
    });
};
var ea = n(688810),
    eo = n(139286),
    el = n(945810);
let eu = (0, el.mj)({
    name: "2026-04-game-account-linking-post-game-close",
    kind: "user",
    defaultConfig: { allowAccountLinkingUpsellPostGameClose: !1 },
    variations: {
        0: { allowAccountLinkingUpsellPostGameClose: !1 },
        1: { allowAccountLinkingUpsellPostGameClose: !0 },
    },
});
var ec = n(941314),
    ed = n(46225),
    e_ = n(627363),
    ef = n(429913),
    eh = n(568598),
    ep = n(384059),
    eE = n(47167),
    em = n(404374),
    eg = n(131607),
    eA = n(113854),
    eI = n(91242),
    eT = n(66834);
function eS(e) {
    let { targetElementRef: t, gameId: n, gameName: i, gameCommunityGuildId: a, markAsDismissed: o } = e,
        { analyticsLocations: l } = (0, ea.Ay)();
    return (
        s.useEffect(() => {
            P.default.track(U.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: l, application_id: n, guild_id: a });
        }, [n, a, l]),
        (0, r.jsx)(p.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                P.default.track(U.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: l,
                    application_id: n,
                    guild_id: a,
                }),
                    o(er.i.USER_DISMISS);
            },
            title: $.intl.formatToPlainString($.t.ry9SJw, { gameName: i }),
            body: $.intl.string($.t.YPpOov),
            actions: [
                {
                    text: $.intl.string($.t.RVfNGU),
                    onClick: () => {
                        P.default.track(U.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: l,
                            application_id: n,
                            guild_id: a,
                        }),
                            o(er.i.TAKE_ACTION),
                            eT.A.joinGuild(a, { source: U.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
let eN = (0, el.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ey = n(952818),
    eC = n(927813);
let ev = ey.Ay.getRunningGames(),
    eO = [];
class eR extends _.Ay.Store {
    initialize() {
        this.syncWith([ey.Ay], () =>
            (function () {
                let e = ey.Ay.getRunningGames();
                if (ev === e) return !1;
                let t = ev.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((ev = e), 0 === t.length)) return !1;
                eO = [...eO, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return eO;
    }
    getLastPreviouslyRunningGame() {
        return eO[eO.length - 1] ?? null;
    }
}
let eb = new eR(g.h, {}),
    eD = 5 * eC.A.Millis.MINUTE;
var eL = n(137177);
let ew = { gameUpsellsDismissal: {} },
    eM = { ...ew };
class eP extends _.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
        eM = e ?? eM;
    }
    getState() {
        return eM;
    }
    getGameUpsellDismissal(e, t) {
        return eM.gameUpsellsDismissal[t]?.[e] ?? null;
    }
}
let ex = new eP(g.h, {
        LOGOUT: function () {
            eM = { ...ew };
        },
        GAME_UPSELL_DISMISS: function (e) {
            let { applicationIds: t, dismissedAt: n, dismissibleContent: i } = e;
            if (0 === t.length) return !1;
            let r = {
                ...eM,
                gameUpsellsDismissal: { ...eM.gameUpsellsDismissal, [i]: { ...eM.gameUpsellsDismissal[i] } },
            };
            for (let e of t) {
                let t = eM.gameUpsellsDismissal[i]?.[e],
                    s = null != t ? t.timesDismissed + 1 : 1;
                r.gameUpsellsDismissal[i][e] = { dismissedAt: n, timesDismissed: s };
            }
            eM = r;
        },
    }),
    eU = {
        globalCooldownMs: 864e5,
        perGameInitialCooldownMs: 864e5,
        perGameCooldownBackoffBase: 2,
        perGameMaxCooldownMs: 24192e5,
    };
var ek = n(279250),
    eG = n(880144),
    eF = n(277680),
    eV = n(118277),
    eB = n(905552),
    eH = n(95035),
    ej = n(716965),
    eY = n(567249),
    eW = n(929921),
    eK = n(650338),
    ez = n(753070),
    e$ = n(194368);
function eq(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(k.E, { className: o()({ [e$.Q]: null == n }, t), color: n, ...i });
}
var eZ = n(95701),
    eX = n(616356),
    eQ = n(495544),
    eJ = n(734057),
    e0 = n(184989),
    e1 = n(71393),
    e2 = n(761853),
    e3 = n(576705),
    e6 = n(290863),
    e4 = n(994500),
    e5 = n(309010),
    e7 = n(287809),
    e8 = n(157257),
    e9 = n(975571),
    te = n(723702);
let tt = (0, el.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var tn = n(994314),
    ti = n(485599),
    tr = n(141628),
    ts = n(192308),
    ta = n(959988),
    to = n(183623),
    tl = n(241541),
    tu = n(70688),
    tc = n(687966),
    td = n(34188),
    t_ = n(942857),
    tf = n(55730),
    th = n(869003),
    tp = n(521588),
    tE = n(702841),
    tm = n(475358),
    tg = n(176781),
    tA = n(442433),
    tI = n(42473),
    tT = n(186111),
    tS = n(532624),
    tN = n(350535),
    ty = n(274372),
    tC = n(572164),
    tv = n(607814),
    tO = n(646693);
function tR(e) {
    (0, tA.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 562733));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tb = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [i, a] = s.useState(!1),
            o = s.useCallback(() => a(!1), []);
        return (0, r.jsx)(p.A, {
            shouldShow: i,
            targetElementRef: n,
            position: "top",
            title: $.intl.format($.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, r.jsx)("span", {
                        className: tO.E,
                        children: (0, r.jsx)(tm.e, { className: tO.d, shortcut: t }),
                    }),
            }),
            body: $.intl.format($.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
            caretConfig: { align: "center" },
            onRequestClose: o,
        });
    },
    tD = () => {
        let e = s.useRef(null),
            { parentAnalyticsLocation: t } = (0, ea.Ay)(),
            n = (0, tE.bG)([tT.A], () => tT.A.hasLayers()),
            i = (0, tC.Et)(),
            a = (0, tE.bG)([ty.A], () => ty.A.getIsAtMaxSaveClipOperations()),
            o = (0, tE.bG)([tS.Ay], () => tS.Ay.getKeybindForAction(U.hCu.SAVE_CLIP));
        if (!i || null == o || n) return null;
        let l = tN.dI(o.shortcut, !0);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tb, { keybindString: l, targetElementRef: e }),
                (0, r.jsx)(tI.A, {
                    ref: e,
                    disabled: a,
                    tooltipText:
                        null != o
                            ? $.intl.formatToPlainString($.t.HIMcv1, { hotkey: tN.dI(o?.shortcut, !0) })
                            : $.intl.string($.t.s52pju),
                    onClick: () => {
                        (0, tv.l0)(), (0, ep.X)(t, ep.O.CLIP);
                    },
                    onContextMenu: tR,
                    icon: tg.x,
                }),
            ],
        });
    };
var tL = n(338771),
    tw = n(212637),
    tM = n(397400),
    tP = n(488803);
let tx = (0, el.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tU = n(823748),
    tk = n(522055),
    tG = n(576709);
function tF(e) {
    let { title: t, body: n, ctaText: i, runningGameId: s, targetElementRef: a, onClick: o, onClose: l } = e,
        u = (0, _.bG)([tk.A], () => null != s && tk.A.getGlobalCatalogGame(s)?.can_market === !0, [s]);
    return (0, r.jsx)(p.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            u && null != s
                ? {
                      type: "dynamic",
                      component: h.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: s },
                      aspectRatio: "6/4",
                  }
                : {
                      type: "image",
                      src: "https://cdn.discordapp.com/assets/content/24bc847e3e4dae2b04997ce7374d99a3d11da678af3c9d7664bbff99ed1bfdb1.svg",
                      aspectRatio: "6/4",
                  },
        actions: [{ text: i, variant: "primary", onClick: o }],
        targetElementRef: a,
        shouldShow: !0,
        position: "top",
        onRequestClose: l,
    });
}
function tV(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tF, {
        title: $.intl.formatToPlainString(tG.default.lKzVNu, { gameName: t }),
        body: $.intl.string(tG.default.qqjm8O),
        ctaText: $.intl.string(tG.default["eJg+Zm"]),
        ...n,
    });
}
function tB(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tF, {
        title: $.intl.formatToPlainString(tG.default.lwwiHE, { gameName: t }),
        body: $.intl.string(tG.default.B33GXN),
        ctaText: $.intl.string(tG.default["968/QC"]),
        ...n,
    });
}
var tH = n(453774),
    tj = n(44724),
    tY = n(84764),
    tW = n(153488),
    tK = n(942370),
    tz = n(610861);
function t$(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === U.$pd.PLAYING &&
              (0, tf.A)(t, U.jUm.JOIN))
    );
}
let tq = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: i,
                guildId: a,
                isStreaming: o,
                channel: l,
                canStream: c,
                runningGame: d,
                embeddedActivity: f,
                frame: h,
                activity: E,
                application: m,
                analyticsContext: g,
                inviteButtonRef: I,
                accountLinkButtonRef: T,
                startAuthorization: S,
                canStartAuthorization: N,
                hasAlreadyLinked: y,
                connectionApp: v,
            } = e,
            { parentAnalyticsLocation: O, analyticsLocations: R } = (0, ea.Ay)(),
            b = (0, tH.A)(m?.id),
            D = t$(m, E, f),
            { enabled: L } = tx.useConfig({ location: "activity-panel" }),
            w = (0, tU.Bp)("activity-panel"),
            M = (0, tP.C$)(a ?? void 0, "activity-panel"),
            x = (0, _.bG)([tW.A], () => tW.A.hasConsented(U.YAq.PERSONALIZATION)),
            k = (0, tU.TF)(d?.id, { shouldFetch: w || M }),
            G = L && x && k,
            F = G && w,
            V = G && M,
            B = s.useCallback(() => {
                u()(null != E, "Received null activity"),
                    P.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: d?.id ?? null,
                        application_id: E.application_id,
                    }),
                    (0, ep.X)(O, ep.O.INVITE),
                    P.default.track(U.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: E.application_id,
                        location: g.location,
                    }),
                    (0, A.qf)(E, !1);
            }, [E, g, O, d]),
            H = s.useCallback(
                (e, t) => () => {
                    (0, ep.X)(O, ep.O.LEAVE_ACTIVITY),
                        th.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [O],
            ),
            j = s.useCallback(
                (e) => () => {
                    (0, ep.X)(O, ep.O.LEAVE_ACTIVITY), eA.A.stopFrame({ applicationId: e });
                },
                [O],
            ),
            Y = s.useCallback(() => {
                (0, tL.A)(t);
            }, [t]),
            W = s.useCallback(() => {
                (0, ts.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("8516"),
                        n.e("17918"),
                        n.e("76171"),
                        n.e("86672"),
                        n.e("38601"),
                        n.e("36946"),
                        n.e("44727"),
                        n.e("6565"),
                        n.e("14304"),
                        n.e("82001"),
                    ]).then(n.bind(n, 266536));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourcePID: d?.pid,
                            selectSource: null != e5.A.getVoiceChannelId(),
                            analyticsLocations: R,
                        });
                });
            }, [d, R]),
            K = m?.name ?? d?.name ?? "",
            z = s.useCallback(() => {
                (0, tM.pK)({ gameApplicationId: d?.id, buttonVariant: "admin" }),
                    (0, ts.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("42209"), n.e("37084"), n.e("74132")]).then(
                            n.bind(n, 279871),
                        );
                        return (t) => (0, r.jsx)(e, { gameName: K, gameApplicationId: d?.id, ...t });
                    });
            }, [K, d?.id]),
            q = s.useCallback(() => {
                u()(null != a, "Received null guildId"),
                    (0, tM.pK)({ gameApplicationId: d?.id, buttonVariant: "member" }),
                    (0, tw.A)({ analyticsLocations: R, analyticsLocation: g.location, guildId: a });
            }, [a, R, g.location, d?.id]),
            Z = s.useRef(null),
            [X, Q] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != Z.current && clearTimeout(Z.current);
            },
            [],
        ),
            s.useEffect(() => {
                y && (Q(!1), null != Z.current && (clearTimeout(Z.current), (Z.current = null)));
            }, [y]);
        let J =
                b?.guildId == null || null == m
                    ? null
                    : (0, r.jsx)(tQ, { guildId: b.guildId, applicationId: b.id, applicationName: b.name }),
            ee = F
                ? (0, r.jsx)(tX, {
                      tooltipText: $.intl.formatToPlainString(tG.default.YhnUVO, { gameName: K }),
                      onClick: z,
                      onViewed: () => (0, tM.ET)({ gameApplicationId: d?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, r.jsx)(tV, {
                              gameName: K,
                              runningGameId: d?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  z(), n(er.i.TAKE_ACTION), i(er.i.TAKE_ACTION);
                              },
                              onClose: () => n(er.i.USER_DISMISS),
                          });
                      },
                  })
                : V
                  ? (0, r.jsx)(tX, {
                        tooltipText: $.intl.formatToPlainString(tG.default.lwwiHE, { gameName: K }),
                        onClick: q,
                        onViewed: () => (0, tM.ET)({ gameApplicationId: d?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, r.jsx)(tB, {
                                gameName: K,
                                runningGameId: d?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    q(), n(er.i.TAKE_ACTION), i(er.i.TAKE_ACTION);
                                },
                                onClose: () => n(er.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            et = (function () {
                let e, t, n;
                if ((null == d && null != f && !(0, C.f)()) || (!o && !i)) return null;
                let s = null;
                return (
                    o
                        ? ((e = !1),
                          (t = () => {
                              Y(), (0, ep.X)(O, ep.O.STREAM, !1);
                          }),
                          (n = ta.G),
                          (s = $.intl.string($.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                W(), (0, ep.X)(O, ep.O.STREAM, !0);
                            }),
                            (n = to.F),
                            (s =
                                null != d
                                    ? $.intl.formatToPlainString($.t.AB5gTy, { game: d.name })
                                    : $.intl.string($.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = to.F),
                            null != l && (0, eZ.gV)(l.type) && (s = $.intl.string($.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: tz.IF,
                        children: (0, r.jsx)(tI.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                D && null == f
                    ? (0, r.jsx)(tI.A, { ref: I, tooltipText: $.intl.string($.t["hC/Zey"]), onClick: B, icon: tl.D })
                    : null,
            ei =
                null == f
                    ? null
                    : (0, r.jsx)(tI.A, {
                          tooltipText: $.intl.string($.t["R/FK4A"]),
                          onClick: H(f.applicationId, f.location),
                          icon: tu.o,
                      }),
            es =
                null == h
                    ? null
                    : (0, r.jsx)(tI.A, {
                          tooltipText: $.intl.string($.t["R/FK4A"]),
                          onClick: j(h.applicationId),
                          icon: tu.o,
                      }),
            eo = null == t ? null : (0, r.jsx)(tD, {}),
            el =
                !N || y
                    ? null
                    : (0, r.jsx)(tZ, {
                          runningGame: d,
                          startAuthorization: () => {
                              S({ analyticsLocations: R }) === tK._M.RPC &&
                                  (Q(!0),
                                  null != Z.current && clearTimeout(Z.current),
                                  (Z.current = setTimeout(() => {
                                      Q(!1);
                                  }, 9e4)));
                          },
                          connectionApp: v,
                          ref: T,
                      }),
            eu =
                !N || y
                    ? null
                    : (0, r.jsx)(p.A, {
                          title: $.intl.string($.t.ULvRFd),
                          body: $.intl.string($.t["HJJDr+"]),
                          targetElementRef: T,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: X,
                          onRequestClose: () => {
                              Q(!1), null != Z.current && (clearTimeout(Z.current), (Z.current = null));
                          },
                      });
        return null == et && null == en && null == ei && null == es && null == el && null == J && null == ee
            ? null
            : (0, r.jsxs)("div", { className: tz.o1, children: [J ?? el ?? en, ee, et, ei ?? es ?? eo, eu] });
    }),
    tZ = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: s } = e;
        return (0, r.jsx)(tI.A, {
            ref: t,
            onClick: () => {
                P.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    i();
            },
            icon: tr.A,
            tooltipText: $.intl.string($.t.sbdnpw),
        });
    });
function tX(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: a } = e,
        o = s.useRef(null),
        l = s.useRef(!1);
    s.useEffect(() => {
        l.current || ((l.current = !0), i());
    }, [i]);
    let u = (0, t_.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: d } = (0, D.c9)(),
        [_, h] = (0, eg.kn)(!u && c && d ? [f.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [p, E] = (0, eg.kn)([f.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        m = s.useCallback(() => {
            h(er.i.TAKE_ACTION), E(er.i.TAKE_ACTION), n();
        }, [h, E, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tz.IF,
                children: [
                    (0, r.jsx)("div", { className: tz.uD, children: (0, r.jsx)("div", { className: tz.Z9 }) }),
                    (0, r.jsx)(tI.A, { ref: o, tooltipText: t, onClick: m, icon: tc._ }),
                    p === f.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, r.jsx)(tp.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != _ && a({ targetElementRef: o, markAsDismissed: h, markBadgeAsDismissed: E }),
        ],
    });
}
function tQ(e) {
    let { applicationId: t, guildId: n, applicationName: i } = e,
        a = s.useRef(null);
    s.useEffect(() => {
        P.default.track(U.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [o, l] = (0, eg.kn)([f.M.GAME_SHOP_RTC_POPOVER], er.m.ACCOUNT_NAME_ZONE, !0),
        u = s.useCallback(() => {
            (0, tj.X)({ guildId: n });
        }, [n]),
        c = s.useCallback(() => {
            (0, tj.default)({ guildId: n }), l(er.i.USER_DISMISS);
        }, [n, l]),
        d = s.useCallback(() => {
            P.default.track(U.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), c();
        }, [t, c]),
        _ = s.useCallback(() => {
            l(er.i.USER_DISMISS);
        }, [l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tI.A, {
                tooltipText: $.intl.string($.t.vyaWs7),
                onClick: d,
                onMouseDown: u,
                icon: td.U,
                ref: a,
            }),
            o === f.M.GAME_SHOP_RTC_POPOVER
                ? (0, r.jsx)(tY.A, {
                      onActionClick: c,
                      onRequestClose: _,
                      targetElementRef: a,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                      title: $.intl.formatToPlainString($.t.N6ZkPd, { applicationName: i }),
                      body: $.intl.formatToPlainString($.t.V3jyQq, { applicationName: i }),
                  })
                : null,
        ],
    });
}
var tJ = n(428689),
    t0 = n(673294);
function t1(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(E.D, {
        className: t0.kL,
        onClick: t,
        children: (0, r.jsx)(k.E, {
            className: t0.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: $.intl.string($.t.jfrLLb),
        }),
    });
}
function t2(e) {
    let { onClick: t } = e,
        n = L.tz.useSetting(),
        i = (0, _.bG)([M.A], () => M.A.getStatus());
    return __OVERLAY__ || (n && i !== U.clD.INVISIBLE) ? null : (0, r.jsx)(t1, { onClick: t });
}
var t3 = n(409626),
    t6 = n(692969),
    t4 = n(379414);
function t5(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t6.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t3.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(E.D, {
        onClick: i,
        className: o()(null != i && t4.On),
        children: (0, r.jsx)(ti.A, { className: t4.mO, children: t }),
    });
}
function t7(e) {
    let t,
        n,
        {
            isStreaming: i,
            application: a,
            game: o,
            onClickNotSharing: l,
            isForceShowSharingPopout: u,
            setIsForceShowSharingPopout: c,
            ref: d,
            popoutTargetRef: f,
            isCurrentlyRunningGame: h,
        } = e,
        p = null != a ? a.name : null != o ? o.name : $.intl.string($.t["UQMV/E"]);
    return (
        (t = L.tz.useSetting()),
        (n = (0, _.bG)([M.A], () => M.A.getStatus())),
        (0, s.useEffect)(() => {
            P.default.track(U.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === U.clD.INVISIBLE,
            });
        }, [t, n]),
        (0, r.jsxs)("div", {
            className: t4.cm,
            children: [
                (0, r.jsxs)("div", {
                    className: t4.f9,
                    children: [
                        (0, r.jsx)(eL.A, { className: t4.Gt, game: a, pid: o?.pid, ref: d }),
                        i ? (0, r.jsx)(tJ.n, { size: "md", color: "currentColor", className: t4.it }) : null,
                    ],
                }),
                (0, r.jsx)(es, {
                    popoutTargetRef: f,
                    isForceShowSharingPopout: u,
                    setIsForceShowSharingPopout: c,
                    hidePopout: !h,
                    children: (0, r.jsxs)("div", {
                        className: t4.pq,
                        children: [
                            null != p ? (0, r.jsx)(t5, { name: p, applicationId: a?.id }) : null,
                            h
                                ? (0, r.jsx)(t2, { onClick: l })
                                : (0, r.jsx)(k.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: $.intl.string($.t.W4N1ru),
                                  }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var t8 = n(5867),
    t9 = n(165610);
let ne = {
    "356942674672091136": "398627612299362304",
    "1402418491272986635": "302094807046684672",
    "1402418571715543120": "187363008610041857",
    "1421154726023532544": "1164979454557290546",
    "1432419613165228174": "1107589599045361695",
    "1458530944955973852": "523059903812599811",
    "357607133254254632": "153566829380370432",
    "1402418344912752671": "251072485095636994",
    "356877880938070016": "152517096104919042",
    "1314395942253756416": "1193841000108531764",
    "1247227126416146462": "963760374543450182",
    "1257819671114289184": "951972846152859699",
    "762434991303950386": "522681957373575168",
    "1425690433018925056": "140933721929940992",
    "1402418714716143646": "618327687701725194",
    "1402418440685486130": "446735637413101578",
    "1402418703554842694": "322850917248663552",
    "1437509662303059998": "1180042348755963924",
    "363413743335374859": "710082165253079061",
    "1384276457596911676": "1368870708335083650",
    "1205090671527071784": "1102970375731691612",
    "1137125502985961543": "98922182746329088",
    "1402418103702524046": "435431947963990026",
    "1121201675240210523": "884849473329692723",
    "1402418594532298837": "560127830160048128",
};
var nt = n(911070),
    nn = n(490696),
    ni = n(268920),
    nr = n(633217);
function ns(e) {
    let t,
        n,
        {
            application: i,
            connectionApp: s,
            isEligibleForIncentivizedAccountLinking: a,
            incentivizedAccountLinkingDisplayedApp: o,
            markAccountLinkingUpsellAsDismissed: l,
            startAuthorization: u,
            analyticsLocations: d,
            accountLinkButtonRef: _,
        } = e,
        f = tt.useConfig({ location: "ActivityPanelGameCard" }),
        E = (0, ec.useRiotSocialSDKMigrationDefaultBody)({ location: "ActivityPanelGameCard" }),
        m = a ? o : i,
        g = null == m;
    if (
        ((0, eo.A)(
            {
                type: c.ImpressionTypes.POPOUT,
                name: c.ImpressionNames.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                properties: {
                    application_id: i?.id,
                    parent_application_id: s?.parentId,
                    type: a ? "incentivized" : "default",
                },
            },
            { disableTrack: g },
        ),
        g)
    )
        return null;
    let A = $.intl.formatToPlainString(f.altTitle ? $.t.hUbQT2 : $.t["lo6H6+"], { gameName: m.name }),
        I = $.intl.string(E ?? (f.altBody ? $.t["JKqu+4"] : $.t.qYAzOp)),
        T = $.intl.string(f.altCta ? $.t.jynBQ5 : $.t.lw71Nf);
    a && (T = $.intl.string(nt.default["2cOIOr"]));
    let S = [
        {
            text: T,
            onClick: () => {
                l(er.i.TAKE_ACTION), u({ analyticsLocations: d });
            },
        },
    ];
    return (
        a &&
            ((t = "beta"),
            (A = $.intl.formatToPlainString(nt.default.dPuaZE, { applicationName: m.name })),
            (I = $.intl.string(nt.default.jR3bbS)),
            (n = {
                text: $.intl.string($.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, r.jsx)(p.A, {
            size: a ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: m, isIncentivizedAccountLinking: a },
            },
            badge: t,
            title: A,
            body: I,
            textLink: n,
            targetElementRef: _,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => l(er.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: S,
        })
    );
}
function na(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: s } = e,
        a = $.intl.string($.t.MxAlrB),
        o = $.intl.string($.t["/UTTEg"]),
        l = [
            {
                text: $.intl.string($.t.aRIFWD),
                onClick: () => {
                    i(er.i.TAKE_ACTION), window.open(e9.A.getArticleURL(U.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((a = $.intl.string(nt.default.ublzTG)),
            (o = $.intl.string(nt.default.JgM2xu)),
            (t = { type: "video", src: nr.A, fallbackImageSrc: ni.A, aspectRatio: "2/1", loop: !0 })),
        (0, r.jsx)(p.A, {
            graphic: t,
            title: a,
            body: o,
            targetElementRef: s,
            position: "top",
            align: "left",
            caretConfig: { align: "start" },
            actions: l,
            shouldShow: !0,
            onRequestClose: () => i(er.i.USER_DISMISS),
        })
    );
}
function no(e) {
    let {
        activity: t,
        game: n,
        markAsDismissed: i,
        inviteButtonRef: s,
        parentAnalyticsLocation: a,
        analyticsContext: o,
    } = e;
    return (0, r.jsx)(p.A, {
        title: $.intl.string($.t["0l2pEt"]),
        body: $.intl.string($.t["DSZUK/"]),
        targetElementRef: s,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(er.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: $.intl.string($.t.YdkBCH),
                onClick: () => {
                    i(er.i.TAKE_ACTION),
                        u()(null != t, "Received null activity"),
                        P.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, ep.X)(a, ep.O.INVITE),
                        P.default.track(U.HAw.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: t.application_id,
                            location: o.location,
                        }),
                        (0, A.qf)(t, !1);
                },
            },
        ],
    });
}
function nl(e) {
    let {
            popover: t,
            dismissPopover: n,
            application: i,
            connectionApp: a,
            activity: o,
            runningGame: l,
            hasAlreadyLinked: c,
            didStartAuthorization: d,
            startAuthorization: _,
            accountLinkUpsellTargetRef: f,
            inviteButtonRef: h,
            accountLinkButtonRef: p,
            gameCommunityGuildId: E,
            parentAnalyticsLocation: m,
            analyticsLocations: g,
            analyticsContext: A,
        } = e,
        { isEligible: I, displayedApp: T } = (function (e) {
            let { connectionApp: t } = e,
                n = (0, ec.useIsRiotSocialSDKMigrationEnabled)({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, e_.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && tK.YJ.has(t.id), displayedApp: i };
        })({ connectionApp: a }),
        { rewarded: S } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: r } = e,
                [a, o] = s.useState(!1);
            return (
                s.useEffect(() => {
                    if (!t || !n || !i || a || null == r) return;
                    let e = !1;
                    return (
                        (0, ej.RI)({
                            applicationId: r.id,
                            onSuccess: () => {
                                e || o(!0);
                            },
                            onError: () => {},
                        }),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, i, a, r]),
                { rewarded: a }
            );
        })({ isEligible: I, hasAlreadyLinked: c, didStartAuthorization: d, application: a });
    switch (t) {
        case 0:
            return (0, r.jsx)(ns, {
                application: i,
                connectionApp: a,
                isEligibleForIncentivizedAccountLinking: I,
                incentivizedAccountLinkingDisplayedApp: T,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: _,
                analyticsLocations: g,
                accountLinkButtonRef: p,
            });
        case 1:
            return (0, r.jsx)(na, {
                incentivizedAccountLinkingRewarded: S,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: f,
            });
        case 2:
            return (0, r.jsx)(no, {
                activity: o,
                game: l,
                markAsDismissed: n,
                inviteButtonRef: h,
                parentAnalyticsLocation: m,
                analyticsContext: A,
            });
        case 3:
            return (
                u()(i?.id != null && i?.name != null && null != E, "Game community upsell requires these as non null"),
                (0, r.jsx)(eS, {
                    targetElementRef: f,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: E,
                    markAsDismissed: n,
                })
            );
        default:
            return null;
    }
}
let nu = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(tn.A, { children: t });
});
function nc(e) {
    let t,
        {
            application: n,
            embeddedActivity: i,
            channel: s,
            channelName: a,
            guildForConnectedChannel: o,
            isForceShowSharingPopout: l,
            setIsForceShowSharingPopout: c,
            accountLinkUpsellTargetRef: d,
            activityPopoutTargetRef: _,
            isActivityPopoutOpen: f,
        } = e,
        h = { start: i.connectedSince },
        p = a;
    null != o && null != s
        ? ((t = U.BVt.CHANNEL(o.id, s.id)), (p = `${p} / ${o.name}`))
        : null != s && (t = U.BVt.CHANNEL(U.ME, s.id));
    let E = () => {
            u()(null != s, "Channel cannot be null during navigation click"),
                T.A.channelListScrollTo(s.guild_id ?? U.ME, s.id),
                !f &&
                    ((0, eZ.gV)(s.type) &&
                        I.A.selectParticipant(
                            s.id,
                            (0, eh.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                        ),
                    (0, eZ.pQ)(s.type) && (0, v.gk)(t8.Gd.PANEL));
        },
        m = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eL.A, { className: nn.Gt, game: n, size: eL.M.SMALL, ref: d }),
                (0, r.jsx)(es, {
                    popoutTargetRef: _,
                    isForceShowSharingPopout: l,
                    setIsForceShowSharingPopout: c,
                    children: (0, r.jsxs)("div", {
                        className: nn.pq,
                        children: [
                            (0, r.jsx)(eH.A, {
                                href: t,
                                onClick: () => {
                                    E(), f && g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                },
                                children: (0, r.jsx)(ti.A, { className: nn._W, children: n.name }),
                            }),
                            null != s && (0, eZ.pQ)(s.type)
                                ? (0, r.jsx)(eH.A, {
                                      href: t,
                                      onClick: E,
                                      children: (0, r.jsx)(tn.A, { className: nn.Ix, children: p }),
                                  })
                                : (0, r.jsx)(nu, { timestamps: h }),
                        ],
                    }),
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nn.cm, children: m });
}
function nd(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: a } = e,
        o = s.useMemo(() => ({ start: t.connectedSince }), [t.connectedSince]),
        l = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eL.A, { className: nn.Gt, game: n, size: eL.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: nn.pq,
                    children: [
                        (0, r.jsx)(E.D, {
                            onClick: () => {
                                a
                                    ? g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : eA.A.updateFrameLayoutMode({
                                          applicationId: t.applicationId,
                                          layoutMode: t9.y.FOCUSED,
                                      });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nn.rB,
                            children: (0, r.jsx)(ti.A, { className: nn._W, children: n.name }),
                        }),
                        (0, r.jsx)(nu, { timestamps: o }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nn.cm, children: l });
}
function n_(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: s, sanitizedTitle: a } = (0, eF.A)(t);
    return (0, r.jsxs)("div", {
        className: nn.cm,
        ref: n,
        children: [
            (0, r.jsx)(eV.A, { title: a, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nn.pq,
                children: [
                    (0, r.jsx)(ti.A, { children: s }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nn.qi,
                            children: [
                                (0, r.jsx)(m.t, { size: "xxs", color: em.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(eq, { className: nn.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nf = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        a = s.useRef(null),
        l = s.useRef(null),
        u = s.useRef(null),
        c = (0, _.bG)([eQ.default], () => eQ.default.getId()),
        h = (0, _.bG)([ey.Ay, e8.A], () => (0, eB.A)(ey.Ay, e8.A)),
        { allowAccountLinkingUpsellPostGameClose: p } = eu.useConfig({ location: "ActivityPanelGameCard" }),
        { enabled: E } = eN.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: m, isWithinThreshold: A } = (function (e) {
            let { enabled: t } = e,
                [n, i] = (0, s.useState)(Date.now()),
                r = (0, _.bG)([eb], () => eb.getLastPreviouslyRunningGame());
            if (
                ((0, s.useEffect)(() => {
                    if (!t || null == r || Date.now() - r.endedAt >= eD) return;
                    let e = setTimeout(
                        () => {
                            i(Date.now());
                        },
                        r.endedAt + eD - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [t, r]),
                null == r)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let a = n - r.endedAt;
            return { previouslyRunningGame: r, isWithinThreshold: t && a < eD };
        })({ enabled: p || E }),
        I = (0, _.bG)([e5.A, eJ.A], () => eJ.A.getChannel(e5.A.getVoiceChannelId())),
        T = (0, _.bG)([O.Ay], () => O.Ay.getConnectedActivityChannelId()),
        S = (0, _.bG)([eJ.A], () => eJ.A.getChannel(T)),
        N = (0, _.bG)([e1.A], () => e1.A.getGuild(S?.guild_id)),
        [C, v] = (0, _.yK)([eX.A], () => [eX.A.getCurrentUserActiveStream(), eX.A.getStreamerActiveStreamMetadata()]),
        R = (0, _.bG)([O.Ay], () => O.Ay.getCurrentEmbeddedActivity()),
        b = (0, _.bG)([eI.A], () => eI.A.getConnectedFrame()),
        L = (0, _.bG)([e1.A, e3.A], () => null == I || ek.vz(I, e1.A, e3.A, !1)),
        [w] = (0, ef.A)([
            (function () {
                if (null != v && null != v.id) return v.id;
                if (null != h && null != h.id) return h.id;
                if (null != R) return R.applicationId;
                if (null != b) return b.applicationId;
                if (null != m && null != m.id) return m.id;
            })(),
        ]),
        M =
            ((0, _.bG)([O.Ay], () => O.Ay.getCurrentEmbeddedActivity()),
            (0, _.bG)([e2.Ay], () => (0, eG.A)(e2.Ay) && (0, te.isWindows)()) || !1),
        x = (0, _.bG)([e6.A], () => (null != c ? e6.A.findActivity(c, (e) => e.type === U.$pd.PLAYING) : null)),
        k = null != C && C.ownerId === c && C.state !== U.XYD.ENDED,
        G = (0, _.bG)([e7.default, e4.A], () => (null != S ? (0, eE.m1)(S, e7.default, e4.A) : void 0)),
        F = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([eW.A], () => eW.A.getState());
            if (e !== ez.on.RESOLUTION_720 || t === ez.kn.FPS_60) return `${(0, ez.zr)(e)} ${(0, eK.Bs)(t)}`;
        })(),
        [V, B] = s.useState(!1),
        H = (0, _.bG)([eY.A], () => eY.A.getWindowOpen(U.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: j, analyticsLocations: Y } = (0, ea.Ay)(),
        {
            hasAlreadyLinked: W,
            canStartAuthorization: K,
            connectionApp: z,
            startAuthorization: $,
        } = (0, ed.RD)(w, { allowedFlows: [tK._M.RPC, tK._M.WEB] }),
        [q, Z] = s.useState(null),
        X = null != q,
        Q = s.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Z(w?.id ?? null), $(...t);
            },
            [w?.id, $],
        ),
        J = (0, y.A)(w?.id);
    s.useEffect(() => {
        null != w && J !== w?.id && Z(null);
    }, [w, J]);
    let ee = (0, d.K)((e) => {
            e &&
                null != z &&
                P.default.track(U.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: h?.id ?? null, application_id: z.id });
        }),
        et = s.useMemo(() => {
            let e = h?.id ?? m?.id;
            return null != e ? ne[e] : void 0;
        }, [h?.id, m?.id]),
        en = (0, _.bG)([e0.A], () => null != et && e0.A.isMember(et), [et]),
        ei = E && null != et && !en && (null != h || A) ? et : void 0,
        [es, eo] = (function (e) {
            let {
                    application: t,
                    activity: n,
                    embeddedActivity: i,
                    connectingGameId: r,
                    setConnectingGameId: a,
                    canStartAuthorization: o,
                    hasAlreadyLinked: l,
                    didStartAuthorization: u,
                    gameCommunityGuildId: c,
                } = e,
                { isQuestBarEmpty: d, hasLoadedQuestBar: h } = (0, D.c9)(),
                p = !h || !d,
                E = !p && !l && null == r && o && null != t,
                { shouldShow: m, markAsDismissed: A } = (function (e) {
                    let {
                            application: t,
                            disabled: n = !1,
                            dismissibleContent: i,
                            dismissibleContentGroupName: r,
                            bypassAutoDismiss: a = !1,
                            cooldownConfig: o,
                        } = e,
                        { eligibleToShow: l, markAsDismissed: u } = (function (e) {
                            let {
                                    applications: t,
                                    disabled: n = !1,
                                    dismissibleContent: i,
                                    dismissibleContentGroupName: r,
                                    bypassAutoDismiss: a = !1,
                                    cooldownConfig: o,
                                } = e,
                                l = (0, _.yK)([ex], () => t.map((e) => ex.getGameUpsellDismissal(e.id, i))),
                                [u, c] = (0, s.useState)(() => new Set());
                            (0, s.useEffect)(() => {
                                let e = t.map((e, t) => {
                                        var n;
                                        return {
                                            id: e.id,
                                            nextTime:
                                                ((n = l[t]),
                                                null == n
                                                    ? 0
                                                    : n.dismissedAt +
                                                      Math.min(
                                                          o.perGameInitialCooldownMs *
                                                              Math.pow(
                                                                  o.perGameCooldownBackoffBase,
                                                                  n.timesDismissed - 1,
                                                              ),
                                                          o.perGameMaxCooldownMs,
                                                      )),
                                        };
                                    }),
                                    n = 0,
                                    i = () => {
                                        let t = Date.now();
                                        c(
                                            new Set(
                                                e
                                                    .filter((e) => {
                                                        let { nextTime: n } = e;
                                                        return t >= n;
                                                    })
                                                    .map((e) => {
                                                        let { id: t } = e;
                                                        return t;
                                                    }),
                                            ),
                                        );
                                        let r = e
                                            .map((e) => {
                                                let { nextTime: t } = e;
                                                return t;
                                            })
                                            .filter((e) => e > t);
                                        r.length > 0 && (n = setTimeout(i, Math.min(Math.min(...r) - t, U.mnr)));
                                    };
                                return i(), () => clearTimeout(n);
                            }, [t, l, o]);
                            let d = n ? [] : t.filter((e) => u.has(e.id)).map((e) => e.id),
                                [f, h] = (0, eg.Wl)(
                                    d.length > 0 ? i : null,
                                    { cooldownDurationMs: o.globalCooldownMs },
                                    r,
                                    a,
                                );
                            return {
                                eligibleToShow: f === i ? d : [],
                                markAsDismissed: (e, t) => {
                                    g.h.dispatch({
                                        type: "GAME_UPSELL_DISMISS",
                                        applicationIds: e,
                                        dismissedAt: Date.now(),
                                        dismissibleContent: i,
                                    }),
                                        h(t);
                                },
                            };
                        })({
                            applications: (0, s.useMemo)(() => (null != t ? [t] : []), [t]),
                            disabled: n,
                            dismissibleContent: i,
                            dismissibleContentGroupName: r,
                            bypassAutoDismiss: a,
                            cooldownConfig: o,
                        });
                    return {
                        shouldShow: l.length > 0,
                        markAsDismissed: (e) => {
                            null != t && u([t.id], e);
                        },
                    };
                })({
                    application: t,
                    disabled: !E,
                    dismissibleContent: f.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: er.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eU,
                }),
                I = !p && null != r && l,
                T = s.useMemo(() => {
                    if (p || m) return [];
                    let e = [];
                    return (
                        l && u && t$(t, n, i) && null == i && e.push(f.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(f.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, p, u, i, c, l, m]),
                [S, N] = (0, eg.kn)(T, er.m.ACCOUNT_NAME_ZONE, !1);
            return s.useMemo(() => {
                if (null != S)
                    switch (S) {
                        case f.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    a(null), N(e);
                                },
                            ];
                        case f.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, N];
                        default:
                            return [null, N];
                    }
                return m ? [0, A] : I ? [1, () => a(null)] : [null, () => {}];
            }, [A, N, a, m, I, S]);
        })({
            application: w,
            activity: x,
            embeddedActivity: R,
            connectingGameId: q,
            setConnectingGameId: Z,
            canStartAuthorization: K,
            hasAlreadyLinked: W,
            didStartAuthorization: X,
            gameCommunityGuildId: ei,
        }),
        el = null != m && (1 === es || (A && ((p && 0 === es) || 3 === es))) ? m : null,
        ec = s.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(t7, {
                    isStreaming: k,
                    application: e,
                    game: t,
                    onClickNotSharing: () => B(!0),
                    isForceShowSharingPopout: V,
                    setIsForceShowSharingPopout: B,
                    ref: l,
                    popoutTargetRef: a,
                    isCurrentlyRunningGame: i,
                });
            },
            [V, k],
        ),
        e_ = s.useMemo(
            () =>
                null != h && (M || K) && (!k || v?.pid != null)
                    ? ec(w, h, { isGameRunning: !0 })
                    : null != R && null != w && t$(w, x, R)
                      ? (0, r.jsx)(nc, {
                            application: w,
                            embeddedActivity: R,
                            channel: S,
                            channelName: G,
                            guildForConnectedChannel: N,
                            isForceShowSharingPopout: V,
                            setIsForceShowSharingPopout: B,
                            accountLinkUpsellTargetRef: l,
                            activityPopoutTargetRef: a,
                            isActivityPopoutOpen: H,
                        })
                      : null != b &&
                          null != w &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: w, frame: b })
                        ? (0, r.jsx)(nd, {
                              application: w,
                              accountLinkUpsellTargetRef: l,
                              frame: b,
                              isActivityPopoutOpen: H,
                          })
                        : k
                          ? (0, r.jsx)(n_, {
                                streamMetadata: v,
                                accountLinkUpsellTargetRef: l,
                                streamQualityIndicator: F,
                            })
                          : null != el
                            ? ec(w, el, { isGameRunning: !1 })
                            : null,
            [v, x, w, M, K, G, S, R, b, N, H, V, k, el, ec, h, F],
        );
    return null == e_
        ? null
        : (0, r.jsx)("div", {
              className: o()(nn.nd, i),
              ref: a,
              children: (0, r.jsxs)("div", {
                  className: nn.rf,
                  children: [
                      e_,
                      (0, r.jsx)(tq, {
                          stream: C,
                          canGoLive: M,
                          guildId: t,
                          isStreaming: k,
                          channel: S,
                          canStream: L,
                          runningGame: h,
                          activity: x,
                          application: w,
                          embeddedActivity: R,
                          frame: b,
                          analyticsContext: n,
                          inviteButtonRef: u,
                          accountLinkButtonRef: ee,
                          canStartAuthorization: K,
                          startAuthorization: Q,
                          hasAlreadyLinked: W,
                          connectionApp: z,
                      }),
                      (0, r.jsx)(nl, {
                          popover: es,
                          dismissPopover: eo,
                          application: w,
                          connectionApp: z,
                          activity: x,
                          runningGame: h,
                          hasAlreadyLinked: W,
                          didStartAuthorization: X,
                          startAuthorization: Q,
                          accountLinkUpsellTargetRef: l,
                          inviteButtonRef: u,
                          accountLinkButtonRef: ee,
                          gameCommunityGuildId: ei,
                          parentAnalyticsLocation: j,
                          analyticsLocations: Y,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
