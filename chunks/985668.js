"use strict";
n.d(t, { A: () => nd }), n(321073);
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
    w = n(904481),
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
    el = n(945810),
    eu = n(927813);
let ec = (0, el.mj)({
    name: "2026-04-game-account-linking-post-game-close",
    kind: "user",
    defaultConfig: { allowAccountLinkingUpsellPostGameClose: !1, timeToShowUpsellPostGameCloseMs: 0 },
    variations: {
        0: { allowAccountLinkingUpsellPostGameClose: !1, timeToShowUpsellPostGameCloseMs: 0 },
        1: { allowAccountLinkingUpsellPostGameClose: !0, timeToShowUpsellPostGameCloseMs: 5 * eu.A.Millis.MINUTE },
    },
});
var ed = n(941314),
    e_ = n(46225),
    ef = n(627363),
    eh = n(429913),
    ep = n(568598),
    eE = n(384059),
    em = n(47167),
    eg = n(404374),
    eA = n(131607),
    eI = n(113854),
    eT = n(91242),
    eS = n(66834);
function eN(e) {
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
                            eS.A.joinGuild(a, { source: U.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
let ey = (0, el.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eC = n(952818);
let ev = eC.Ay.getRunningGames(),
    eO = [];
class eR extends _.Ay.Store {
    initialize() {
        this.syncWith([eC.Ay], () =>
            (function () {
                let e = eC.Ay.getRunningGames();
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
let eb = new eR(g.h, {});
var eD = n(137177);
let eL = { gameUpsellsDismissal: {} },
    ew = { ...eL };
class eM extends _.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
        ew = e ?? ew;
    }
    getState() {
        return ew;
    }
    getGameUpsellDismissal(e, t) {
        return ew.gameUpsellsDismissal[t]?.[e] ?? null;
    }
}
let eP = new eM(g.h, {
    LOGOUT: function () {
        ew = { ...eL };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationId: t, dismissedAt: n, dismissibleContent: i } = e,
            r = ew.gameUpsellsDismissal[i]?.[t],
            s = null != r ? r.timesDismissed + 1 : 1;
        ew = {
            gameUpsellsDismissal: {
                ...ew.gameUpsellsDismissal,
                [i]: { ...ew.gameUpsellsDismissal[i], [t]: { dismissedAt: n, timesDismissed: s } },
            },
        };
    },
});
var ex = n(279250),
    eU = n(880144),
    ek = n(277680),
    eG = n(118277),
    eF = n(905552),
    eV = n(95035),
    eB = n(716965),
    eH = n(567249),
    ej = n(929921),
    eY = n(650338),
    eW = n(753070),
    eK = n(194368);
function ez(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(k.E, { className: o()({ [eK.Q]: null == n }, t), color: n, ...i });
}
var e$ = n(95701),
    eq = n(616356),
    eZ = n(495544),
    eX = n(734057),
    eQ = n(184989),
    eJ = n(71393),
    e0 = n(235058),
    e1 = n(576705),
    e2 = n(290863),
    e3 = n(994500),
    e6 = n(309010),
    e4 = n(287809),
    e5 = n(157257),
    e7 = n(975571),
    e8 = n(723702);
let e9 = (0, el.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var te = n(994314),
    tt = n(485599),
    tn = n(141628),
    ti = n(192308),
    tr = n(959988),
    ts = n(183623),
    ta = n(241541),
    to = n(70688),
    tl = n(687966),
    tu = n(34188),
    tc = n(942857),
    td = n(55730),
    t_ = n(869003),
    tf = n(521588),
    th = n(702841),
    tp = n(475358),
    tE = n(176781),
    tm = n(442433),
    tg = n(42473),
    tA = n(186111),
    tI = n(532624),
    tT = n(350535),
    tS = n(274372),
    tN = n(572164),
    ty = n(948138),
    tC = n(646693);
function tv(e) {
    (0, tm.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 562733));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tO = (e) => {
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
                        className: tC.E,
                        children: (0, r.jsx)(tp.e, { className: tC.d, shortcut: t }),
                    }),
            }),
            body: $.intl.format($.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
            caretConfig: { align: "center" },
            onRequestClose: o,
        });
    },
    tR = () => {
        let e = s.useRef(null),
            { parentAnalyticsLocation: t } = (0, ea.Ay)(),
            n = (0, th.bG)([tA.A], () => tA.A.hasLayers()),
            i = (0, tN.Et)(),
            a = (0, th.bG)([tS.A], () => tS.A.getIsAtMaxSaveClipOperations()),
            o = (0, th.bG)([tI.Ay], () => tI.Ay.getKeybindForAction(U.hCu.SAVE_CLIP));
        if (!i || null == o || n) return null;
        let l = tT.dI(o.shortcut, !0);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tO, { keybindString: l, targetElementRef: e }),
                (0, r.jsx)(tg.A, {
                    ref: e,
                    disabled: a,
                    tooltipText:
                        null != o
                            ? $.intl.formatToPlainString($.t.HIMcv1, { hotkey: tT.dI(o?.shortcut, !0) })
                            : $.intl.string($.t.s52pju),
                    onClick: () => {
                        (0, ty.l0)(), (0, eE.X)(t, eE.O.CLIP);
                    },
                    onContextMenu: tv,
                    icon: tE.x,
                }),
            ],
        });
    };
var tb = n(338771),
    tD = n(212637),
    tL = n(397400),
    tw = n(488803);
let tM = (0, el.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tP = n(823748),
    tx = n(522055),
    tU = n(576709);
function tk(e) {
    let { title: t, body: n, ctaText: i, runningGameId: s, targetElementRef: a, onClick: o, onClose: l } = e,
        u = (0, _.bG)([tx.A], () => null != s && tx.A.getGlobalCatalogGame(s)?.can_market === !0, [s]);
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
function tG(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tk, {
        title: $.intl.formatToPlainString(tU.default.lKzVNu, { gameName: t }),
        body: $.intl.string(tU.default.qqjm8O),
        ctaText: $.intl.string(tU.default["eJg+Zm"]),
        ...n,
    });
}
function tF(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tk, {
        title: $.intl.formatToPlainString(tU.default.lwwiHE, { gameName: t }),
        body: $.intl.string(tU.default.B33GXN),
        ctaText: $.intl.string(tU.default["968/QC"]),
        ...n,
    });
}
var tV = n(453774),
    tB = n(44724),
    tH = n(84764),
    tj = n(153488),
    tY = n(942370),
    tW = n(610861);
function tK(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === U.$pd.PLAYING &&
              (0, td.A)(t, U.jUm.JOIN))
    );
}
let tz = s.memo(function (e) {
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
            b = (0, tV.A)(m?.id),
            D = tK(m, E, f),
            { enabled: L } = tM.useConfig({ location: "activity-panel" }),
            w = (0, tP.Bp)("activity-panel"),
            M = (0, tw.C$)(a ?? void 0, "activity-panel"),
            x = (0, _.bG)([tj.A], () => tj.A.hasConsented(U.YAq.PERSONALIZATION)),
            k = (0, tP.TF)(d?.id, { shouldFetch: w || M }),
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
                    (0, eE.X)(O, eE.O.INVITE),
                    P.default.track(U.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: E.application_id,
                        location: g.location,
                    }),
                    (0, A.qf)(E, !1);
            }, [E, g, O, d]),
            H = s.useCallback(
                (e, t) => () => {
                    (0, eE.X)(O, eE.O.LEAVE_ACTIVITY),
                        t_.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [O],
            ),
            j = s.useCallback(
                (e) => () => {
                    (0, eE.X)(O, eE.O.LEAVE_ACTIVITY), eI.A.stopFrame({ applicationId: e });
                },
                [O],
            ),
            Y = s.useCallback(() => {
                (0, tb.A)(t);
            }, [t]),
            W = s.useCallback(() => {
                (0, ti.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("758"),
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
                            selectSource: null != e6.A.getVoiceChannelId(),
                            analyticsLocations: R,
                        });
                });
            }, [d, R]),
            K = m?.name ?? d?.name ?? "",
            z = s.useCallback(() => {
                (0, tL.pK)({ gameApplicationId: d?.id, buttonVariant: "admin" }),
                    (0, ti.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("42209"), n.e("37084"), n.e("74132")]).then(
                            n.bind(n, 279871),
                        );
                        return (t) => (0, r.jsx)(e, { gameName: K, gameApplicationId: d?.id, ...t });
                    });
            }, [K, d?.id]),
            q = s.useCallback(() => {
                u()(null != a, "Received null guildId"),
                    (0, tL.pK)({ gameApplicationId: d?.id, buttonVariant: "member" }),
                    (0, tD.A)({ analyticsLocations: R, analyticsLocation: g.location, guildId: a });
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
                    : (0, r.jsx)(tZ, { guildId: b.guildId, applicationId: b.id, applicationName: b.name }),
            ee = F
                ? (0, r.jsx)(tq, {
                      tooltipText: $.intl.formatToPlainString(tU.default.YhnUVO, { gameName: K }),
                      onClick: z,
                      onViewed: () => (0, tL.ET)({ gameApplicationId: d?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, r.jsx)(tG, {
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
                  ? (0, r.jsx)(tq, {
                        tooltipText: $.intl.formatToPlainString(tU.default.lwwiHE, { gameName: K }),
                        onClick: q,
                        onViewed: () => (0, tL.ET)({ gameApplicationId: d?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, r.jsx)(tF, {
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
                              Y(), (0, eE.X)(O, eE.O.STREAM, !1);
                          }),
                          (n = tr.G),
                          (s = $.intl.string($.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                W(), (0, eE.X)(O, eE.O.STREAM, !0);
                            }),
                            (n = ts.F),
                            (s =
                                null != d
                                    ? $.intl.formatToPlainString($.t.AB5gTy, { game: d.name })
                                    : $.intl.string($.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = ts.F),
                            null != l && (0, e$.gV)(l.type) && (s = $.intl.string($.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: tW.IF,
                        children: (0, r.jsx)(tg.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                D && null == f
                    ? (0, r.jsx)(tg.A, { ref: I, tooltipText: $.intl.string($.t["hC/Zey"]), onClick: B, icon: ta.D })
                    : null,
            ei =
                null == f
                    ? null
                    : (0, r.jsx)(tg.A, {
                          tooltipText: $.intl.string($.t["R/FK4A"]),
                          onClick: H(f.applicationId, f.location),
                          icon: to.o,
                      }),
            es =
                null == h
                    ? null
                    : (0, r.jsx)(tg.A, {
                          tooltipText: $.intl.string($.t["R/FK4A"]),
                          onClick: j(h.applicationId),
                          icon: to.o,
                      }),
            eo = null == t ? null : (0, r.jsx)(tR, {}),
            el =
                !N || y
                    ? null
                    : (0, r.jsx)(t$, {
                          runningGame: d,
                          startAuthorization: () => {
                              S({ analyticsLocations: R }) === tY._M.RPC &&
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
            : (0, r.jsxs)("div", { className: tW.o1, children: [J ?? el ?? en, ee, et, ei ?? es ?? eo, eu] });
    }),
    t$ = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: s } = e;
        return (0, r.jsx)(tg.A, {
            ref: t,
            onClick: () => {
                P.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    i();
            },
            icon: tn.A,
            tooltipText: $.intl.string($.t.sbdnpw),
        });
    });
function tq(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: a } = e,
        o = s.useRef(null),
        l = s.useRef(!1);
    s.useEffect(() => {
        l.current || ((l.current = !0), i());
    }, [i]);
    let u = (0, tc.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: d } = (0, D.c9)(),
        [_, h] = (0, eA.kn)(!u && c && d ? [f.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [p, E] = (0, eA.kn)([f.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        m = s.useCallback(() => {
            h(er.i.TAKE_ACTION), E(er.i.TAKE_ACTION), n();
        }, [h, E, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tW.IF,
                children: [
                    (0, r.jsx)("div", { className: tW.uD, children: (0, r.jsx)("div", { className: tW.Z9 }) }),
                    (0, r.jsx)(tg.A, { ref: o, tooltipText: t, onClick: m, icon: tl._ }),
                    p === f.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, r.jsx)(tf.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != _ && a({ targetElementRef: o, markAsDismissed: h, markBadgeAsDismissed: E }),
        ],
    });
}
function tZ(e) {
    let { applicationId: t, guildId: n, applicationName: i } = e,
        a = s.useRef(null);
    s.useEffect(() => {
        P.default.track(U.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [o, l] = (0, eA.kn)([f.M.GAME_SHOP_RTC_POPOVER], er.m.ACCOUNT_NAME_ZONE, !0),
        u = s.useCallback(() => {
            (0, tB.X)({ guildId: n });
        }, [n]),
        c = s.useCallback(() => {
            (0, tB.default)({ guildId: n }), l(er.i.USER_DISMISS);
        }, [n, l]),
        d = s.useCallback(() => {
            P.default.track(U.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), c();
        }, [t, c]),
        _ = s.useCallback(() => {
            l(er.i.USER_DISMISS);
        }, [l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tg.A, {
                tooltipText: $.intl.string($.t.vyaWs7),
                onClick: d,
                onMouseDown: u,
                icon: tu.U,
                ref: a,
            }),
            o === f.M.GAME_SHOP_RTC_POPOVER
                ? (0, r.jsx)(tH.A, {
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
var tX = n(428689),
    tQ = n(673294);
function tJ(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(E.D, {
        className: tQ.kL,
        onClick: t,
        children: (0, r.jsx)(k.E, {
            className: tQ.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: $.intl.string($.t.jfrLLb),
        }),
    });
}
function t0(e) {
    let { onClick: t } = e,
        n = L.tz.useSetting(),
        i = (0, _.bG)([M.A], () => M.A.getStatus());
    return __OVERLAY__ || (n && i !== U.clD.INVISIBLE) ? null : (0, r.jsx)(tJ, { onClick: t });
}
var t1 = n(409626),
    t2 = n(692969),
    t3 = n(379414);
function t6(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t2.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t1.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(E.D, {
        onClick: i,
        className: o()(null != i && t3.On),
        children: (0, r.jsx)(tt.A, { className: t3.mO, children: t }),
    });
}
function t4(e) {
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
            className: t3.cm,
            children: [
                (0, r.jsxs)("div", {
                    className: t3.f9,
                    children: [
                        (0, r.jsx)(eD.A, { className: t3.Gt, game: a, pid: o?.pid, ref: d }),
                        i ? (0, r.jsx)(tX.n, { size: "md", color: "currentColor", className: t3.it }) : null,
                    ],
                }),
                (0, r.jsx)(es, {
                    popoutTargetRef: f,
                    isForceShowSharingPopout: u,
                    setIsForceShowSharingPopout: c,
                    hidePopout: !h,
                    children: (0, r.jsxs)("div", {
                        className: t3.pq,
                        children: [
                            null != p ? (0, r.jsx)(t6, { name: p, applicationId: a?.id }) : null,
                            h
                                ? (0, r.jsx)(t0, { onClick: l })
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
var t5 = n(5867),
    t7 = n(165610);
let t8 = {
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
var t9 = n(911070),
    ne = n(490696),
    nt = n(268920),
    nn = n(633217);
function ni(e) {
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
        f = e9.useConfig({ location: "ActivityPanelGameCard" }),
        { defaultBody: E } = ed.A.useConfig({ location: "ActivityPanelGameCard" }),
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
    a && (T = $.intl.string(t9.default["2cOIOr"]));
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
            (A = $.intl.formatToPlainString(t9.default.dPuaZE, { applicationName: m.name })),
            (I = $.intl.string(t9.default.jR3bbS)),
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
function nr(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: s } = e,
        a = $.intl.string($.t.MxAlrB),
        o = $.intl.string($.t["/UTTEg"]),
        l = [
            {
                text: $.intl.string($.t.aRIFWD),
                onClick: () => {
                    i(er.i.TAKE_ACTION), window.open(e7.A.getArticleURL(U.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((a = $.intl.string(t9.default.ublzTG)),
            (o = $.intl.string(t9.default.JgM2xu)),
            (t = { type: "video", src: nn.A, fallbackImageSrc: nt.A, aspectRatio: "2/1", loop: !0 })),
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
function ns(e) {
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
                        (0, eE.X)(a, eE.O.INVITE),
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
function na(e) {
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
                { enabled: n } = ed.A.useConfig({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, ef.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && tY.YJ.has(t.id), displayedApp: i };
        })({ connectionApp: a }),
        { rewarded: S } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: r } = e,
                [a, o] = s.useState(!1);
            return (
                s.useEffect(() => {
                    if (!t || !n || !i || a || null == r) return;
                    let e = !1;
                    return (
                        (0, eB.RI)({
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
            return (0, r.jsx)(ni, {
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
            return (0, r.jsx)(nr, {
                incentivizedAccountLinkingRewarded: S,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: f,
            });
        case 2:
            return (0, r.jsx)(ns, {
                activity: o,
                game: l,
                markAsDismissed: n,
                inviteButtonRef: h,
                parentAnalyticsLocation: m,
                analyticsContext: A,
            });
        case 3:
            return (
                u()(l?.id != null && l?.name != null && null != E, "Game community upsell requires these as non null"),
                (0, r.jsx)(eN, {
                    targetElementRef: f,
                    gameId: l.id,
                    gameName: l.name,
                    gameCommunityGuildId: E,
                    markAsDismissed: n,
                })
            );
        default:
            return null;
    }
}
let no = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(te.A, { children: t });
});
function nl(e) {
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
                    ((0, e$.gV)(s.type) &&
                        I.A.selectParticipant(
                            s.id,
                            (0, ep.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                        ),
                    (0, e$.pQ)(s.type) && (0, v.gk)(t5.Gd.PANEL));
        },
        m = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eD.A, { className: ne.Gt, game: n, size: eD.M.SMALL, ref: d }),
                (0, r.jsx)(es, {
                    popoutTargetRef: _,
                    isForceShowSharingPopout: l,
                    setIsForceShowSharingPopout: c,
                    children: (0, r.jsxs)("div", {
                        className: ne.pq,
                        children: [
                            (0, r.jsx)(eV.A, {
                                href: t,
                                onClick: () => {
                                    E(), f && g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                },
                                children: (0, r.jsx)(tt.A, { className: ne._W, children: n.name }),
                            }),
                            null != s && (0, e$.pQ)(s.type)
                                ? (0, r.jsx)(eV.A, {
                                      href: t,
                                      onClick: E,
                                      children: (0, r.jsx)(te.A, { className: ne.Ix, children: p }),
                                  })
                                : (0, r.jsx)(no, { timestamps: h }),
                        ],
                    }),
                }),
            ],
        });
    return (0, r.jsx)("div", { className: ne.cm, children: m });
}
function nu(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: a } = e,
        o = s.useMemo(() => ({ start: t.connectedSince }), [t.connectedSince]),
        l = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eD.A, { className: ne.Gt, game: n, size: eD.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: ne.pq,
                    children: [
                        (0, r.jsx)(E.D, {
                            onClick: () => {
                                a
                                    ? g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : eI.A.updateFrameLayoutMode({
                                          applicationId: t.applicationId,
                                          layoutMode: t7.y.FOCUSED,
                                      });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: ne.rB,
                            children: (0, r.jsx)(tt.A, { className: ne._W, children: n.name }),
                        }),
                        (0, r.jsx)(no, { timestamps: o }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: ne.cm, children: l });
}
function nc(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: s, sanitizedTitle: a } = (0, ek.A)(t);
    return (0, r.jsxs)("div", {
        className: ne.cm,
        ref: n,
        children: [
            (0, r.jsx)(eG.A, { title: a, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: ne.pq,
                children: [
                    (0, r.jsx)(tt.A, { children: s }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: ne.qi,
                            children: [
                                (0, r.jsx)(m.t, { size: "xxs", color: eg.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(ez, { className: ne.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nd = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        a = s.useRef(null),
        l = s.useRef(null),
        u = s.useRef(null),
        c = (0, _.bG)([eZ.default], () => eZ.default.getId()),
        h = (0, _.bG)([eC.Ay, e5.A], () => (0, eF.A)(eC.Ay, e5.A)),
        { previouslyRunningGame: p, isWithinThreshold: E } = (function () {
            let [e, t] = (0, s.useState)(Date.now()),
                n = (0, _.bG)([eb], () => eb.getLastPreviouslyRunningGame()),
                { allowAccountLinkingUpsellPostGameClose: i, timeToShowUpsellPostGameCloseMs: r } = ec.useConfig({
                    location: "ActivityPanelGameCard",
                });
            if (
                ((0, s.useEffect)(() => {
                    if (null == n || !i || Date.now() - n.endedAt >= r) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + r - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [i, n, r]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let a = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i && a < r };
        })(),
        m = (0, _.bG)([e6.A, eX.A], () => eX.A.getChannel(e6.A.getVoiceChannelId())),
        A = (0, _.bG)([O.Ay], () => O.Ay.getConnectedActivityChannelId()),
        I = (0, _.bG)([eX.A], () => eX.A.getChannel(A)),
        T = (0, _.bG)([eJ.A], () => eJ.A.getGuild(I?.guild_id)),
        [S, N] = (0, _.yK)([eq.A], () => [eq.A.getCurrentUserActiveStream(), eq.A.getStreamerActiveStreamMetadata()]),
        C = (0, _.bG)([O.Ay], () => O.Ay.getCurrentEmbeddedActivity()),
        v = (0, _.bG)([eT.A], () => eT.A.getConnectedFrame()),
        R = (0, _.bG)([eJ.A, e1.A], () => null == m || ex.vz(m, eJ.A, e1.A, !1)),
        [b] = (0, eh.A)([
            (function () {
                if (null != N && null != N.id) return N.id;
                if (null != h && null != h.id) return h.id;
                if (null != C) return C.applicationId;
                if (null != v) return v.applicationId;
                if (null != p && null != p.id) return p.id;
            })(),
        ]),
        L =
            ((0, _.bG)([O.Ay], () => O.Ay.getCurrentEmbeddedActivity()),
            (0, _.bG)([e0.Ay], () => (0, eU.A)(e0.Ay) && (0, e8.isWindows)()) || !1),
        w = (0, _.bG)([e2.A], () => (null != c ? e2.A.findActivity(c, (e) => e.type === U.$pd.PLAYING) : null)),
        M = null != S && S.ownerId === c && S.state !== U.XYD.ENDED,
        x = (0, _.bG)([e4.default, e3.A], () => (null != I ? (0, em.m1)(I, e4.default, e3.A) : void 0)),
        k = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([ej.A], () => ej.A.getState());
            if (e !== eW.on.RESOLUTION_720 || t === eW.kn.FPS_60) return `${(0, eW.zr)(e)} ${(0, eY.Bs)(t)}`;
        })(),
        [G, F] = s.useState(!1),
        V = (0, _.bG)([eH.A], () => eH.A.getWindowOpen(U.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: B, analyticsLocations: H } = (0, ea.Ay)(),
        {
            hasAlreadyLinked: j,
            canStartAuthorization: Y,
            connectionApp: W,
            startAuthorization: K,
        } = (0, e_.RD)(b, { allowedFlows: [tY._M.RPC, tY._M.WEB] }),
        [z, $] = s.useState(null),
        q = null != z,
        Z = s.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return $(b?.id ?? null), K(...t);
            },
            [b?.id, K],
        ),
        X = (0, y.A)(b?.id);
    s.useEffect(() => {
        null != b && X !== b?.id && $(null);
    }, [b, X]);
    let Q = (0, d.K)((e) => {
            e &&
                null != W &&
                P.default.track(U.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: h?.id ?? null, application_id: W.id });
        }),
        { allowAccountLinkingUpsellPostGameClose: J } = ec.useConfig({ location: "ActivityPanelGameCard" }),
        { enabled: ee } = ey.useConfig({ location: "ActivityPanelGameCard" }),
        et = s.useMemo(() => (h?.id != null ? t8[h.id] : void 0), [h?.id]),
        en = (0, _.bG)([eQ.A], () => null != et && eQ.A.isMember(et), [et]),
        ei = ee && null != et && !en ? et : void 0,
        [es, eo] = (function (e) {
            let {
                    application: t,
                    activity: n,
                    embeddedActivity: i,
                    runningGame: r,
                    connectingGameId: a,
                    setConnectingGameId: o,
                    canStartAuthorization: l,
                    hasAlreadyLinked: u,
                    didStartAuthorization: c,
                    gameCommunityGuildId: d,
                } = e,
                { isQuestBarEmpty: h, hasLoadedQuestBar: p } = (0, D.c9)(),
                E = !p || !h,
                m = !E && !u && null == a && l && null != t,
                { shouldShow: A, markAsDismissed: I } = (function (e) {
                    let {
                            application: t,
                            disabled: n = !1,
                            dismissibleContent: i,
                            dismissibleContentGroupName: r,
                            bypassAutoDismiss: a = !1,
                        } = e,
                        o = (0, _.bG)([eP], () => (null != t ? eP.getGameUpsellDismissal(t.id, i) : null)),
                        [l, u] = (0, s.useState)(!1);
                    (0, s.useEffect)(() => {
                        let e =
                                null != o
                                    ? o.dismissedAt + Math.min(864e5 * Math.pow(2, o.timesDismissed - 1), 24192e5)
                                    : 0,
                            t = 0,
                            n = () => {
                                u(Date.now() >= e);
                                let i = Math.min(e - Date.now(), U.mnr);
                                i > 0 && (t = setTimeout(n, i));
                            };
                        return n(), () => clearTimeout(t);
                    }, [o]);
                    let c = !n && null != t && l,
                        [d, f] = (0, eA.Wl)(c ? i : null, { cooldownDurationMs: 864e5 }, r, a);
                    return {
                        shouldShow: d === i,
                        markAsDismissed: (e) => {
                            if (null != t) {
                                var n;
                                (n = t.id),
                                    g.h.dispatch({
                                        type: "GAME_UPSELL_DISMISS",
                                        applicationId: n,
                                        dismissedAt: Date.now(),
                                        dismissibleContent: i,
                                    }),
                                    f(e);
                            }
                        },
                    };
                })({
                    application: t,
                    disabled: !m,
                    dismissibleContent: f.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: er.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                }),
                T = !E && null != a && u,
                S = s.useMemo(() => {
                    if (E || A) return [];
                    let e = [];
                    return (
                        u && c && tK(t, n, i) && null == i && e.push(f.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != d && r?.id != null && r?.name != null && e.push(f.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, E, c, i, r?.id, r?.name, d, u, A]),
                [N, y] = (0, eA.kn)(S, er.m.ACCOUNT_NAME_ZONE, !0);
            return s.useMemo(() => {
                if (null != N)
                    switch (N) {
                        case f.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    o(null), y(e);
                                },
                            ];
                        case f.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, y];
                        default:
                            return [null, y];
                    }
                return A ? [0, I] : T ? [1, () => o(null)] : [null, () => {}];
            }, [I, y, o, A, T, N]);
        })({
            application: b,
            activity: w,
            embeddedActivity: C,
            runningGame: h,
            connectingGameId: z,
            setConnectingGameId: $,
            canStartAuthorization: Y,
            hasAlreadyLinked: j,
            didStartAuthorization: q,
            gameCommunityGuildId: ei,
        }),
        el = null != p && ((E && 0 === es) || 1 === es) ? p : null,
        eu = s.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(t4, {
                    isStreaming: M,
                    application: e,
                    game: t,
                    onClickNotSharing: () => F(!0),
                    isForceShowSharingPopout: G,
                    setIsForceShowSharingPopout: F,
                    ref: l,
                    popoutTargetRef: a,
                    isCurrentlyRunningGame: i,
                });
            },
            [G, M],
        ),
        ed = s.useMemo(
            () =>
                null != h && (L || Y) && (!M || N?.pid != null)
                    ? eu(b, h, { isGameRunning: !0 })
                    : null != C && null != b && tK(b, w, C)
                      ? (0, r.jsx)(nl, {
                            application: b,
                            embeddedActivity: C,
                            channel: I,
                            channelName: x,
                            guildForConnectedChannel: T,
                            isForceShowSharingPopout: G,
                            setIsForceShowSharingPopout: F,
                            accountLinkUpsellTargetRef: l,
                            activityPopoutTargetRef: a,
                            isActivityPopoutOpen: V,
                        })
                      : null != v &&
                          null != b &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: b, frame: v })
                        ? (0, r.jsx)(nu, {
                              application: b,
                              accountLinkUpsellTargetRef: l,
                              frame: v,
                              isActivityPopoutOpen: V,
                          })
                        : M
                          ? (0, r.jsx)(nc, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: l,
                                streamQualityIndicator: k,
                            })
                          : J && null != el
                            ? eu(b, el, { isGameRunning: !1 })
                            : null,
            [N, w, J, b, L, Y, x, I, C, v, T, V, G, M, el, eu, h, k],
        );
    return null == ed
        ? null
        : (0, r.jsx)("div", {
              className: o()(ne.nd, i),
              ref: a,
              children: (0, r.jsxs)("div", {
                  className: ne.rf,
                  children: [
                      ed,
                      (0, r.jsx)(tz, {
                          stream: S,
                          canGoLive: L,
                          guildId: t,
                          isStreaming: M,
                          channel: I,
                          canStream: R,
                          runningGame: h,
                          activity: w,
                          application: b,
                          embeddedActivity: C,
                          frame: v,
                          analyticsContext: n,
                          inviteButtonRef: u,
                          accountLinkButtonRef: Q,
                          canStartAuthorization: Y,
                          startAuthorization: Z,
                          hasAlreadyLinked: j,
                          connectionApp: W,
                      }),
                      (0, r.jsx)(na, {
                          popover: es,
                          dismissPopover: eo,
                          application: b,
                          connectionApp: W,
                          activity: w,
                          runningGame: h,
                          hasAlreadyLinked: j,
                          didStartAuthorization: q,
                          startAuthorization: Z,
                          accountLinkUpsellTargetRef: l,
                          inviteButtonRef: u,
                          accountLinkButtonRef: Q,
                          gameCommunityGuildId: ei,
                          parentAnalyticsLocation: B,
                          analyticsLocations: H,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
