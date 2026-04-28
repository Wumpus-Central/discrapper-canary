n.d(t, { A: () => nc }), n(321073);
var l,
    i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(284009),
    u = n.n(o),
    d = n(110259),
    c = n(172218),
    h = n(17928),
    A = n(554146),
    m = n(116833),
    g = n(43105),
    p = n(939249),
    f = n(403581),
    E = n(228366),
    I = n(298990),
    _ = n(367513),
    C = n(951001),
    S = n(492684),
    x = n(707606),
    N = n(475743),
    T = n(646865),
    R = n(795816),
    y = n(933958),
    b = n(379848),
    v = n(832248),
    j = n(201805),
    O = n(253932),
    M = n(904481),
    L = n(461213),
    D = n(954571),
    G = n(821609),
    P = n(652215),
    w = n(834730),
    U = n(133171),
    k = n(243721),
    V = n(315710),
    F = n(404778),
    B = n(331322),
    H = n(534514),
    K = n(922016),
    W = n(827827),
    Y = n(481045),
    z = n(395277),
    q = n(985018),
    Q = n(982375);
function J(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: Q.K2,
        children: (0, i.jsx)(G.$, {
            variant: "primary",
            size: "sm",
            text: q.intl.string(z.default.Poezn1),
            onClick: () => {
                t(), (0, W.A)({ nextStatus: P.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function X(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        l = (0, h.bG)([L.A], () => L.A.getStatus());
    return (0, i.jsxs)("div", {
        className: Q.E3,
        children: [
            (0, i.jsxs)("div", {
                className: Q.fu,
                children: [
                    (0, i.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: q.intl.string(z.default.WhdCGP),
                    }),
                    n &&
                        (0, i.jsxs)("div", {
                            className: Q.$v,
                            children: [
                                (0, i.jsx)(U.nW, { status: P.clD.ONLINE, size: 8 }),
                                (0, i.jsx)(w.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        l === P.clD.INVISIBLE
                                            ? q.intl.string(z.default.a3AofS)
                                            : q.intl.string(q.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(k.d, {
                onChange: (e) => {
                    O.tz.updateSetting(e), n && (0, W.A)({ nextStatus: e ? P.clD.ONLINE : P.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function $(e) {
    let { children: t } = e,
        n = (0, s.useRef)(null);
    return (
        (0, V.t)(n),
        (0, i.jsx)("div", { className: Q.iE, ref: n, children: (0, i.jsx)("div", { className: Q.Qs, children: t }) })
    );
}
function Z(e) {
    let { closePopout: t } = e,
        n = O.tz.useSetting();
    return (0, i.jsxs)($, {
        children: [
            (0, i.jsx)(X, { showCurrentGame: n }),
            (0, i.jsx)(w.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: q.intl.string(z.default["7cfFob"]),
            }),
            (0, i.jsx)(F.c, { className: Q.yF }),
            (0, i.jsx)(Y.qA, { onClosePopout: t }),
        ],
    });
}
function ee(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)($, {
        children: [
            (0, i.jsxs)(B.B, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, i.jsx)(H.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: Q._M,
                        children: q.intl.string(z.default["5YsmGI"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: Q.$v,
                        children: [
                            (0, i.jsx)(U.nW, { status: P.clD.ONLINE, size: 8 }),
                            (0, i.jsx)(w.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: q.intl.string(z.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(w.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: q.intl.string(z.default.Yl0mh4),
            }),
            (0, i.jsx)(J, { closePopout: t }),
        ],
    });
}
function et(e) {
    let { closePopout: t } = e,
        n = O.tz.useSetting();
    return (0, i.jsxs)($, {
        children: [
            (0, i.jsx)(X, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, i.jsx)(w.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: q.intl.string(z.default["7cfFob"]),
            }),
            (0, i.jsx)(F.c, { className: Q.yF }),
            (0, i.jsx)(Y.qA, { onClosePopout: t }),
        ],
    });
}
var en =
    (((l = {})[(l.ActivityNux = 0)] = "ActivityNux"),
    (l[(l.StatusNux = 1)] = "StatusNux"),
    (l[(l.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (l[(l.Activity = 3)] = "Activity"),
    (l[(l.Status = 4)] = "Status"),
    (l[(l.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    l);
function el(e) {
    let { showPopout: t, popoutState: n, handleClose: l, popoutTargetRef: r, children: a } = e,
        [o, u] = (0, s.useState)(n),
        d = (0, s.useRef)(null),
        c = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: q.intl.string(z.default.vxVbGP),
                        body: [q.intl.string(z.default["7cfFob"])],
                        action: {
                            text: q.intl.string(z.default.k4tCg2),
                            onClick: () => {
                                O.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: q.intl.string(q.t["ZrN+DT"]), onClick: Y.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: q.intl.string(z.default.qKDqet),
                        body: [q.intl.string(z.default.Yl0mh4)],
                        action: {
                            text: q.intl.string(z.default.Poezn1),
                            onClick: () => {
                                (0, W.A)({ nextStatus: P.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: q.intl.string(z.default["6cA8HZ"]),
                        body: [q.intl.string(z.default["7cfFob"])],
                        action: {
                            text: q.intl.string(z.default.k4tCg2),
                            onClick: () => {
                                O.tz.updateSetting(!0), (0, W.A)({ nextStatus: P.clD.ONLINE });
                            },
                        },
                        textLink: { text: q.intl.string(q.t["ZrN+DT"]), onClick: Y.L7 },
                    };
                case 3:
                    return { type: "popout", children: Z };
                case 4:
                    return { type: "popout", children: ee };
                case 5:
                    return { type: "popout", children: et };
                default:
                    return null;
            }
        })(o),
        h = (0, s.useRef)(t);
    if (
        ((0, s.useEffect)(() => {
            t && !h.current && u(n), t !== h.current && (h.current = t);
        }, [n, t]),
        null == c || !t)
    )
        return a;
    if ("popover" === c.type) {
        let { action: e, title: t, body: n, textLink: s } = c;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.A, {
                    targetElementRef: r,
                    shouldShow: !0,
                    position: "top",
                    align: "center",
                    onRequestClose: l,
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
                                e.onClick?.(t), l();
                            },
                        },
                    ],
                }),
                a,
            ],
        });
    }
    let { children: A } = c;
    return (0, i.jsx)(K.Y, {
        targetElementRef: d,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(A, { closePopout: t });
        },
        onRequestClose: l,
        children: () => (0, i.jsx)(p.D, { innerRef: d, onClick: l, children: a }),
    });
}
var ei = n(49999);
let es = (e) => {
    let {
            children: t,
            isForceShowSharingPopout: n,
            setIsForceShowSharingPopout: l,
            popoutTargetRef: r,
            hidePopout: a = !1,
        } = e,
        o = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: l } = (0, j.c9)(),
                i = O.tz.useSetting(),
                s = (0, M.G)(),
                r = (0, h.bG)([L.A], () => L.A.getStatus()),
                { isOpen: a } = (0, v.A)();
            if (((n && l) || t) && !s && !a && !__OVERLAY__) {
                if (!i && r === P.clD.INVISIBLE) return t ? en.ActivityAndStatus : en.ActivityAndStatusNux;
                if (!i) return t ? en.Activity : en.ActivityNux;
                if (r === P.clD.INVISIBLE) return t ? en.Status : en.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, s.useEffect)(() => {
        n && D.default.track(P.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let u = n || a ? [] : [A.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, i.jsx)(b.Ay, {
        contentTypes: u,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: a } = e,
                u = s === A.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, i.jsx)(el, {
                showPopout: u,
                popoutState: o,
                handleClose: () => {
                    a(ei.i.USER_DISMISS), l(!1);
                },
                popoutTargetRef: r,
                children: t,
            });
        },
    });
};
var er = n(688810),
    ea = n(139286),
    eo = n(945810),
    eu = n(927813);
let ed = (0, eo.mj)({
    name: "2026-04-game-account-linking-post-game-close",
    kind: "user",
    defaultConfig: { allowAccountLinkingUpsellPostGameClose: !1, timeToShowUpsellPostGameCloseMs: 0 },
    variations: {
        0: { allowAccountLinkingUpsellPostGameClose: !1, timeToShowUpsellPostGameCloseMs: 0 },
        1: { allowAccountLinkingUpsellPostGameClose: !0, timeToShowUpsellPostGameCloseMs: 5 * eu.A.Millis.MINUTE },
    },
});
var ec = n(941314),
    eh = n(46225),
    eA = n(627363),
    em = n(429913),
    eg = n(568598),
    ep = n(384059),
    ef = n(47167),
    eE = n(404374),
    eI = n(932001),
    e_ = n(625180),
    eC = n(91242),
    eS = n(686956);
function ex(e) {
    let { targetElementRef: t, gameId: n, gameName: l, gameCommunityGuildId: r, markAsDismissed: a } = e,
        { analyticsLocations: o } = (0, er.Ay)();
    return (
        s.useEffect(() => {
            D.default.track(P.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: o, application_id: n, guild_id: r });
        }, [n, r, o]),
        (0, i.jsx)(g.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                D.default.track(P.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: o,
                    application_id: n,
                    guild_id: r,
                }),
                    a(ei.i.USER_DISMISS);
            },
            title: q.intl.formatToPlainString(q.t.ry9SJw, { gameName: l }),
            body: q.intl.string(q.t.YPpOov),
            actions: [
                {
                    text: q.intl.string(q.t.RVfNGU),
                    onClick: () => {
                        D.default.track(P.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: r,
                        }),
                            a(ei.i.TAKE_ACTION),
                            eS.A.joinGuild(r, { source: P.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
let eN = (0, eo.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eT = n(328153);
let eR = eT.Ay.getRunningGames(),
    ey = [];
class eb extends h.Ay.Store {
    initialize() {
        this.syncWith([eT.Ay], () =>
            (function () {
                let e = eT.Ay.getRunningGames();
                if (eR === e) return !1;
                let t = eR.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((eR = e), 0 === t.length)) return !1;
                ey = [...ey, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return ey;
    }
    getLastPreviouslyRunningGame() {
        return ey[ey.length - 1] ?? null;
    }
}
let ev = new eb(E.h, {});
var ej = n(137177);
let eO = { gameUpsellsDismissal: {} },
    eM = { ...eO };
class eL extends h.Ay.PersistedStore {
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
let eD = new eL(E.h, {
    LOGOUT: function () {
        eM = { ...eO };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationId: t, dismissedAt: n, dismissibleContent: l } = e,
            i = eM.gameUpsellsDismissal[l]?.[t],
            s = null != i ? i.timesDismissed + 1 : 1;
        eM = {
            gameUpsellsDismissal: {
                ...eM.gameUpsellsDismissal,
                [l]: { ...eM.gameUpsellsDismissal[l], [t]: { dismissedAt: n, timesDismissed: s } },
            },
        };
    },
});
var eG = n(279250),
    eP = n(880144),
    ew = n(277680),
    eU = n(118277),
    ek = n(905552),
    eV = n(95035),
    eF = n(716965),
    eB = n(567249),
    eH = n(929921),
    eK = n(650338),
    eW = n(753070),
    eY = n(194368);
function ez(e) {
    let { className: t, color: n, ...l } = e;
    return (0, i.jsx)(w.E, { className: a()({ [eY.Q]: null == n }, t), color: n, ...l });
}
var eq = n(95701),
    eQ = n(616356),
    eJ = n(495544),
    eX = n(734057),
    e$ = n(184989),
    eZ = n(71393),
    e0 = n(969341),
    e1 = n(576705),
    e3 = n(290863),
    e2 = n(994500),
    e9 = n(309010),
    e6 = n(287809),
    e8 = n(157257),
    e5 = n(975571),
    e7 = n(723702);
let e4 = (0, eo.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var te = n(994314),
    tt = n(485599),
    tn = n(141628),
    tl = n(192308),
    ti = n(959988),
    ts = n(183623),
    tr = n(241541),
    ta = n(70688),
    to = n(687966),
    tu = n(34188),
    td = n(942857),
    tc = n(833349),
    th = n(869003),
    tA = n(521588),
    tm = n(702841),
    tg = n(475358),
    tp = n(176781),
    tf = n(442433),
    tE = n(42473),
    tI = n(186111),
    t_ = n(532624),
    tC = n(350535),
    tS = n(274372),
    tx = n(572164),
    tN = n(399925),
    tT = n(646693);
function tR(e) {
    (0, tf.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 562733));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
let ty = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [l, r] = s.useState(!1),
            a = s.useCallback(() => r(!1), []);
        return (0, i.jsx)(g.A, {
            shouldShow: l,
            targetElementRef: n,
            position: "top",
            title: q.intl.format(q.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, i.jsx)("span", {
                        className: tT.E,
                        children: (0, i.jsx)(tg.e, { className: tT.d, shortcut: t }),
                    }),
            }),
            body: q.intl.format(q.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
            caretConfig: { align: "center" },
            onRequestClose: a,
        });
    },
    tb = () => {
        let e = s.useRef(null),
            { parentAnalyticsLocation: t } = (0, er.Ay)(),
            n = (0, tm.bG)([tI.A], () => tI.A.hasLayers()),
            l = (0, tx.Et)(),
            r = (0, tm.bG)([tS.A], () => tS.A.getIsAtMaxSaveClipOperations()),
            a = (0, tm.bG)([t_.Ay], () => t_.Ay.getKeybindForAction(P.hCu.SAVE_CLIP));
        if (!l || null == a || n) return null;
        let o = tC.dI(a.shortcut, !0);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ty, { keybindString: o, targetElementRef: e }),
                (0, i.jsx)(tE.A, {
                    ref: e,
                    disabled: r,
                    tooltipText:
                        null != a
                            ? q.intl.formatToPlainString(q.t.HIMcv1, { hotkey: tC.dI(a?.shortcut, !0) })
                            : q.intl.string(q.t.s52pju),
                    onClick: () => {
                        (0, tN.l0)(), (0, ep.X)(t, ep.O.CLIP);
                    },
                    onContextMenu: tR,
                    icon: tp.x,
                }),
            ],
        });
    };
var tv = n(338771),
    tj = n(212637),
    tO = n(397400),
    tM = n(488803);
let tL = (0, eo.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tD = n(823748),
    tG = n(522055),
    tP = n(576709);
function tw(e) {
    let { title: t, body: n, ctaText: l, runningGameId: s, targetElementRef: r, onClick: a, onClose: o } = e,
        u = (0, h.bG)([tG.A], () => null != s && tG.A.getGlobalCatalogGame(s)?.can_market === !0, [s]);
    return (0, i.jsx)(g.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            u && null != s
                ? {
                      type: "dynamic",
                      component: m.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: s },
                      aspectRatio: "6/4",
                  }
                : {
                      type: "image",
                      src: "https://cdn.discordapp.com/assets/content/24bc847e3e4dae2b04997ce7374d99a3d11da678af3c9d7664bbff99ed1bfdb1.svg",
                      aspectRatio: "6/4",
                  },
        actions: [{ text: l, variant: "primary", onClick: a }],
        targetElementRef: r,
        shouldShow: !0,
        position: "top",
        onRequestClose: o,
    });
}
function tU(e) {
    let { gameName: t, ...n } = e;
    return (0, i.jsx)(tw, {
        title: q.intl.formatToPlainString(tP.default.lKzVNu, { gameName: t }),
        body: q.intl.string(tP.default.qqjm8O),
        ctaText: q.intl.string(tP.default["eJg+Zm"]),
        ...n,
    });
}
function tk(e) {
    let { gameName: t, ...n } = e;
    return (0, i.jsx)(tw, {
        title: q.intl.formatToPlainString(tP.default.lwwiHE, { gameName: t }),
        body: q.intl.string(tP.default.B33GXN),
        ctaText: q.intl.string(tP.default["968/QC"]),
        ...n,
    });
}
var tV = n(453774),
    tF = n(44724),
    tB = n(84764),
    tH = n(153488),
    tK = n(942370),
    tW = n(610861);
function tY(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === P.$pd.PLAYING &&
              (0, tc.A)(t, P.jUm.JOIN))
    );
}
let tz = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: l,
                guildId: r,
                isStreaming: a,
                channel: o,
                canStream: d,
                runningGame: c,
                embeddedActivity: A,
                frame: m,
                activity: p,
                application: f,
                analyticsContext: E,
                inviteButtonRef: _,
                accountLinkButtonRef: C,
                startAuthorization: S,
                canStartAuthorization: x,
                hasAlreadyLinked: N,
                connectionApp: R,
            } = e,
            { parentAnalyticsLocation: y, analyticsLocations: b } = (0, er.Ay)(),
            v = (0, tV.A)(f?.id),
            j = tY(f, p, A),
            { enabled: O } = tL.useConfig({ location: "activity-panel" }),
            M = (0, tD.Bp)("activity-panel"),
            L = (0, tM.C$)(r ?? void 0, "activity-panel"),
            G = (0, h.bG)([tH.A], () => tH.A.hasConsented(P.YAq.PERSONALIZATION)),
            w = (0, tD.TF)(c?.id, { shouldFetch: M || L }),
            U = O && G && w,
            k = U && M,
            V = U && L,
            F = s.useCallback(() => {
                u()(null != p, "Received null activity"),
                    D.default.track(P.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: c?.id ?? null,
                        application_id: p.application_id,
                    }),
                    (0, ep.X)(y, ep.O.INVITE),
                    D.default.track(P.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: p.application_id,
                        location: E.location,
                    }),
                    (0, I.qf)(p, !1);
            }, [p, E, y, c]),
            B = s.useCallback(
                (e, t) => () => {
                    (0, ep.X)(y, ep.O.LEAVE_ACTIVITY),
                        th.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [y],
            ),
            H = s.useCallback(
                (e) => () => {
                    (0, ep.X)(y, ep.O.LEAVE_ACTIVITY), e_.A.stopFrame({ applicationId: e });
                },
                [y],
            ),
            K = s.useCallback(() => {
                (0, tv.A)(t);
            }, [t]),
            W = s.useCallback(() => {
                (0, tl.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("63397"),
                        n.e("17918"),
                        n.e("98552"),
                        n.e("86672"),
                        n.e("44801"),
                        n.e("38601"),
                        n.e("36946"),
                        n.e("25241"),
                        n.e("44727"),
                        n.e("6565"),
                        n.e("14304"),
                        n.e("13337"),
                        n.e("82001"),
                    ]).then(n.bind(n, 266536));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: c?.pid,
                            selectSource: null != e9.A.getVoiceChannelId(),
                            analyticsLocations: b,
                        });
                });
            }, [c, b]),
            Y = f?.name ?? c?.name ?? "",
            z = s.useCallback(() => {
                (0, tO.pK)({ gameApplicationId: c?.id, buttonVariant: "admin" }),
                    (0, tl.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("42209"), n.e("37084"), n.e("74132")]).then(
                            n.bind(n, 279871),
                        );
                        return (t) => (0, i.jsx)(e, { gameName: Y, gameApplicationId: c?.id, ...t });
                    });
            }, [Y, c?.id]),
            Q = s.useCallback(() => {
                u()(null != r, "Received null guildId"),
                    (0, tO.pK)({ gameApplicationId: c?.id, buttonVariant: "member" }),
                    (0, tj.A)({ analyticsLocations: b, analyticsLocation: E.location, guildId: r });
            }, [r, b, E.location, c?.id]),
            J = s.useRef(null),
            [X, $] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != J.current && clearTimeout(J.current);
            },
            [],
        ),
            s.useEffect(() => {
                N && ($(!1), null != J.current && (clearTimeout(J.current), (J.current = null)));
            }, [N]);
        let Z =
                v?.guildId == null || null == f
                    ? null
                    : (0, i.jsx)(tJ, { guildId: v.guildId, applicationId: v.id, applicationName: v.name }),
            ee = k
                ? (0, i.jsx)(tQ, {
                      tooltipText: q.intl.formatToPlainString(tP.default.YhnUVO, { gameName: Y }),
                      onClick: z,
                      onViewed: () => (0, tO.ET)({ gameApplicationId: c?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: l } = e;
                          return (0, i.jsx)(tU, {
                              gameName: Y,
                              runningGameId: c?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  z(), n(ei.i.TAKE_ACTION), l(ei.i.TAKE_ACTION);
                              },
                              onClose: () => n(ei.i.USER_DISMISS),
                          });
                      },
                  })
                : V
                  ? (0, i.jsx)(tQ, {
                        tooltipText: q.intl.formatToPlainString(tP.default.lwwiHE, { gameName: Y }),
                        onClick: Q,
                        onViewed: () => (0, tO.ET)({ gameApplicationId: c?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: l } = e;
                            return (0, i.jsx)(tk, {
                                gameName: Y,
                                runningGameId: c?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    Q(), n(ei.i.TAKE_ACTION), l(ei.i.TAKE_ACTION);
                                },
                                onClose: () => n(ei.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            et = (function () {
                let e, t, n;
                if ((null == c && null != A && !(0, T.f)()) || (!a && !l)) return null;
                let s = null;
                return (
                    a
                        ? ((e = !1),
                          (t = () => {
                              K(), (0, ep.X)(y, ep.O.STREAM, !1);
                          }),
                          (n = ti.G),
                          (s = q.intl.string(q.t.S5anIc)))
                        : d
                          ? ((e = !1),
                            (t = () => {
                                W(), (0, ep.X)(y, ep.O.STREAM, !0);
                            }),
                            (n = ts.F),
                            (s =
                                null != c
                                    ? q.intl.formatToPlainString(q.t.AB5gTy, { game: c.name })
                                    : q.intl.string(q.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = ts.F),
                            null != o && (0, eq.gV)(o.type) && (s = q.intl.string(q.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: tW.IF,
                        children: (0, i.jsx)(tE.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                j && null == A
                    ? (0, i.jsx)(tE.A, { ref: _, tooltipText: q.intl.string(q.t["hC/Zey"]), onClick: F, icon: tr.D })
                    : null,
            el =
                null == A
                    ? null
                    : (0, i.jsx)(tE.A, {
                          tooltipText: q.intl.string(q.t["R/FK4A"]),
                          onClick: B(A.applicationId, A.location),
                          icon: ta.o,
                      }),
            es =
                null == m
                    ? null
                    : (0, i.jsx)(tE.A, {
                          tooltipText: q.intl.string(q.t["R/FK4A"]),
                          onClick: H(m.applicationId),
                          icon: ta.o,
                      }),
            ea = null == t ? null : (0, i.jsx)(tb, {}),
            eo =
                !x || N
                    ? null
                    : (0, i.jsx)(tq, {
                          runningGame: c,
                          startAuthorization: () => {
                              S({ analyticsLocations: b }) === tK._.RPC &&
                                  ($(!0),
                                  null != J.current && clearTimeout(J.current),
                                  (J.current = setTimeout(() => {
                                      $(!1);
                                  }, 9e4)));
                          },
                          connectionApp: R,
                          ref: C,
                      }),
            eu =
                !x || N
                    ? null
                    : (0, i.jsx)(g.A, {
                          title: q.intl.string(q.t.ULvRFd),
                          body: q.intl.string(q.t["HJJDr+"]),
                          targetElementRef: C,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: X,
                          onRequestClose: () => {
                              $(!1), null != J.current && (clearTimeout(J.current), (J.current = null));
                          },
                      });
        return null == et && null == en && null == el && null == es && null == eo && null == Z && null == ee
            ? null
            : (0, i.jsxs)("div", { className: tW.o1, children: [Z ?? eo ?? en, ee, et, el ?? es ?? ea, eu] });
    }),
    tq = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: l, connectionApp: s } = e;
        return (0, i.jsx)(tE.A, {
            ref: t,
            onClick: () => {
                D.default.track(P.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    l();
            },
            icon: tn.A,
            tooltipText: q.intl.string(q.t.sbdnpw),
        });
    });
function tQ(e) {
    let { tooltipText: t, onClick: n, onViewed: l, renderCoachmark: r } = e,
        a = s.useRef(null),
        o = s.useRef(!1);
    s.useEffect(() => {
        o.current || ((o.current = !0), l());
    }, [l]);
    let u = (0, td.A)(),
        { isQuestBarEmpty: d, hasLoadedQuestBar: c } = (0, j.c9)(),
        [h, m] = (0, eI.kn)(!u && d && c ? [A.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [g, p] = (0, eI.kn)([A.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        f = s.useCallback(() => {
            m(ei.i.TAKE_ACTION), p(ei.i.TAKE_ACTION), n();
        }, [m, p, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: tW.IF,
                children: [
                    (0, i.jsx)("div", { className: tW.uD, children: (0, i.jsx)("div", { className: tW.Z9 }) }),
                    (0, i.jsx)(tE.A, { ref: a, tooltipText: t, onClick: f, icon: to._ }),
                    g === A.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, i.jsx)(tA.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != h && r({ targetElementRef: a, markAsDismissed: m, markBadgeAsDismissed: p }),
        ],
    });
}
function tJ(e) {
    let { applicationId: t, guildId: n, applicationName: l } = e,
        r = s.useRef(null);
    s.useEffect(() => {
        D.default.track(P.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, o] = (0, eI.kn)([A.M.GAME_SHOP_RTC_POPOVER], ei.m.ACCOUNT_NAME_ZONE, !0),
        u = s.useCallback(() => {
            (0, tF.X)({ guildId: n });
        }, [n]),
        d = s.useCallback(() => {
            (0, tF.default)({ guildId: n }), o(ei.i.USER_DISMISS);
        }, [n, o]),
        c = s.useCallback(() => {
            D.default.track(P.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        h = s.useCallback(() => {
            o(ei.i.USER_DISMISS);
        }, [o]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(tE.A, {
                tooltipText: q.intl.string(q.t.vyaWs7),
                onClick: c,
                onMouseDown: u,
                icon: tu.U,
                ref: r,
            }),
            a === A.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(tB.A, {
                      onActionClick: d,
                      onRequestClose: h,
                      targetElementRef: r,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                      title: q.intl.formatToPlainString(q.t.N6ZkPd, { applicationName: l }),
                      body: q.intl.formatToPlainString(q.t.V3jyQq, { applicationName: l }),
                  })
                : null,
        ],
    });
}
var tX = n(428689),
    t$ = n(673294);
function tZ(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(p.D, {
        className: t$.kL,
        onClick: t,
        children: (0, i.jsx)(w.E, {
            className: t$.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: q.intl.string(q.t.jfrLLb),
        }),
    });
}
function t0(e) {
    let { onClick: t } = e,
        n = O.tz.useSetting(),
        l = (0, h.bG)([L.A], () => L.A.getStatus());
    return __OVERLAY__ || (n && l !== P.clD.INVISIBLE) ? null : (0, i.jsx)(tZ, { onClick: t });
}
var t1 = n(409626),
    t3 = n(692969),
    t2 = n(379414);
function t9(e) {
    let { name: t, applicationId: n } = e,
        l = (0, t3.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t1.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, i.jsx)(p.D, {
        onClick: l,
        className: a()(null != l && t2.On),
        children: (0, i.jsx)(tt.A, { className: t2.mO, children: t }),
    });
}
function t6(e) {
    let t,
        n,
        {
            isStreaming: l,
            application: r,
            game: a,
            onClickNotSharing: o,
            isForceShowSharingPopout: u,
            setIsForceShowSharingPopout: d,
            ref: c,
            popoutTargetRef: A,
            isCurrentlyRunningGame: m,
        } = e,
        g = null != r ? r.name : null != a ? a.name : q.intl.string(q.t["UQMV/E"]);
    return (
        (t = O.tz.useSetting()),
        (n = (0, h.bG)([L.A], () => L.A.getStatus())),
        (0, s.useEffect)(() => {
            D.default.track(P.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === P.clD.INVISIBLE,
            });
        }, [t, n]),
        (0, i.jsxs)("div", {
            className: t2.cm,
            children: [
                (0, i.jsxs)("div", {
                    className: t2.f9,
                    children: [
                        (0, i.jsx)(ej.A, { className: t2.Gt, game: r, pid: a?.pid, ref: c }),
                        l ? (0, i.jsx)(tX.n, { size: "md", color: "currentColor", className: t2.it }) : null,
                    ],
                }),
                (0, i.jsx)(es, {
                    popoutTargetRef: A,
                    isForceShowSharingPopout: u,
                    setIsForceShowSharingPopout: d,
                    hidePopout: !m,
                    children: (0, i.jsxs)("div", {
                        className: t2.pq,
                        children: [
                            null != g ? (0, i.jsx)(t9, { name: g, applicationId: r?.id }) : null,
                            m
                                ? (0, i.jsx)(t0, { onClick: o })
                                : (0, i.jsx)(w.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: q.intl.string(q.t.W4N1ru),
                                  }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var t8 = n(5867),
    t5 = n(165610);
let t7 = {
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
var t4 = n(911070),
    ne = n(490696),
    nt = n(268920),
    nn = n(633217);
function nl(e) {
    let t,
        n,
        {
            application: l,
            connectionApp: s,
            isEligibleForIncentivizedAccountLinking: r,
            incentivizedAccountLinkingDisplayedApp: a,
            markAccountLinkingUpsellAsDismissed: o,
            startAuthorization: u,
            analyticsLocations: c,
            accountLinkButtonRef: h,
        } = e,
        A = e4.useConfig({ location: "ActivityPanelGameCard" }),
        { defaultBody: p } = ec.A.useConfig({ location: "ActivityPanelGameCard" }),
        f = r ? a : l,
        E = null == f;
    if (
        ((0, ea.A)(
            {
                type: d.ImpressionTypes.POPOUT,
                name: d.ImpressionNames.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                properties: {
                    application_id: l?.id,
                    parent_application_id: s?.parentId,
                    type: r ? "incentivized" : "default",
                },
            },
            { disableTrack: E },
        ),
        E)
    )
        return null;
    let I = q.intl.formatToPlainString(A.altTitle ? q.t.hUbQT2 : q.t["lo6H6+"], { gameName: f.name }),
        _ = q.intl.string(p ?? (A.altBody ? q.t["JKqu+4"] : q.t.qYAzOp)),
        C = q.intl.string(A.altCta ? q.t.jynBQ5 : q.t.lw71Nf);
    r && (C = q.intl.string(t4.default["2cOIOr"]));
    let S = [
        {
            text: C,
            onClick: () => {
                o(ei.i.TAKE_ACTION), u({ analyticsLocations: c });
            },
        },
    ];
    return (
        r &&
            ((t = "beta"),
            (I = q.intl.formatToPlainString(t4.default.dPuaZE, { applicationName: f.name })),
            (_ = q.intl.string(t4.default.jR3bbS)),
            (n = {
                text: q.intl.string(q.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, i.jsx)(g.A, {
            size: r ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: m.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: f, isIncentivizedAccountLinking: r },
            },
            badge: t,
            title: I,
            body: _,
            textLink: n,
            targetElementRef: h,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(ei.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: S,
        })
    );
}
function ni(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: l, accountLinkUpsellTargetRef: s } = e,
        r = q.intl.string(q.t.MxAlrB),
        a = q.intl.string(q.t["/UTTEg"]),
        o = [
            {
                text: q.intl.string(q.t.aRIFWD),
                onClick: () => {
                    l(ei.i.TAKE_ACTION), window.open(e5.A.getArticleURL(P.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((r = q.intl.string(t4.default.ublzTG)),
            (a = q.intl.string(t4.default.JgM2xu)),
            (t = { type: "video", src: nn.A, fallbackImageSrc: nt.A, aspectRatio: "2/1", loop: !0 })),
        (0, i.jsx)(g.A, {
            graphic: t,
            title: r,
            body: a,
            targetElementRef: s,
            position: "top",
            align: "left",
            caretConfig: { align: "start" },
            actions: o,
            shouldShow: !0,
            onRequestClose: () => l(ei.i.USER_DISMISS),
        })
    );
}
function ns(e) {
    let {
        activity: t,
        game: n,
        markAsDismissed: l,
        inviteButtonRef: s,
        parentAnalyticsLocation: r,
        analyticsContext: a,
    } = e;
    return (0, i.jsx)(g.A, {
        title: q.intl.string(q.t["0l2pEt"]),
        body: q.intl.string(q.t["DSZUK/"]),
        targetElementRef: s,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => l(ei.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: q.intl.string(q.t.YdkBCH),
                onClick: () => {
                    l(ei.i.TAKE_ACTION),
                        u()(null != t, "Received null activity"),
                        D.default.track(P.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, ep.X)(r, ep.O.INVITE),
                        D.default.track(P.HAw.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: t.application_id,
                            location: a.location,
                        }),
                        (0, I.qf)(t, !1);
                },
            },
        ],
    });
}
function nr(e) {
    let {
            popover: t,
            dismissPopover: n,
            application: l,
            connectionApp: r,
            activity: a,
            runningGame: o,
            hasAlreadyLinked: d,
            didStartAuthorization: c,
            startAuthorization: h,
            accountLinkUpsellTargetRef: A,
            inviteButtonRef: m,
            accountLinkButtonRef: g,
            gameCommunityGuildId: p,
            parentAnalyticsLocation: f,
            analyticsLocations: E,
            analyticsContext: I,
        } = e,
        { isEligible: _, displayedApp: C } = (function (e) {
            let { connectionApp: t } = e,
                { enabled: n } = ec.A.useConfig({ location: "ActivityPanelGameCard" }),
                { data: l } = (0, eA.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && tK.Y.has(t.id), displayedApp: l };
        })({ connectionApp: r }),
        { rewarded: S } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: l, application: i } = e,
                [r, a] = s.useState(!1);
            return (
                s.useEffect(() => {
                    if (!t || !n || !l || r || null == i) return;
                    let e = !1;
                    return (
                        (0, eF.RI)({
                            applicationId: i.id,
                            onSuccess: () => {
                                e || a(!0);
                            },
                            onError: () => {},
                        }),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, l, r, i]),
                { rewarded: r }
            );
        })({ isEligible: _, hasAlreadyLinked: d, didStartAuthorization: c, application: r });
    switch (t) {
        case 0:
            return (0, i.jsx)(nl, {
                application: l,
                connectionApp: r,
                isEligibleForIncentivizedAccountLinking: _,
                incentivizedAccountLinkingDisplayedApp: C,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: h,
                analyticsLocations: E,
                accountLinkButtonRef: g,
            });
        case 1:
            return (0, i.jsx)(ni, {
                incentivizedAccountLinkingRewarded: S,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: A,
            });
        case 2:
            return (0, i.jsx)(ns, {
                activity: a,
                game: o,
                markAsDismissed: n,
                inviteButtonRef: m,
                parentAnalyticsLocation: f,
                analyticsContext: I,
            });
        case 3:
            return (
                u()(o?.id != null && o?.name != null && null != p, "Game community upsell requires these as non null"),
                (0, i.jsx)(ex, {
                    targetElementRef: A,
                    gameId: o.id,
                    gameName: o.name,
                    gameCommunityGuildId: p,
                    markAsDismissed: n,
                })
            );
        default:
            return null;
    }
}
let na = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(te.A, { children: t });
});
function no(e) {
    let t,
        {
            application: n,
            embeddedActivity: l,
            channel: s,
            channelName: r,
            guildForConnectedChannel: a,
            isForceShowSharingPopout: o,
            setIsForceShowSharingPopout: d,
            accountLinkUpsellTargetRef: c,
            activityPopoutTargetRef: h,
            isActivityPopoutOpen: A,
        } = e,
        m = { start: l.connectedSince },
        g = r;
    null != a && null != s
        ? ((t = P.BVt.CHANNEL(a.id, s.id)), (g = `${g} / ${a.name}`))
        : null != s && (t = P.BVt.CHANNEL(P.ME, s.id));
    let p = () => {
            u()(null != s, "Channel cannot be null during navigation click"),
                C.A.channelListScrollTo(s.guild_id ?? P.ME, s.id),
                !A &&
                    ((0, eq.gV)(s.type) &&
                        _.A.selectParticipant(
                            s.id,
                            (0, eg.Qt)({ applicationId: l.applicationId, instanceId: l.compositeInstanceId }),
                        ),
                    (0, eq.pQ)(s.type) && (0, R.gk)(t8.Gd.PANEL));
        },
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ej.A, { className: ne.Gt, game: n, size: ej.M.SMALL, ref: c }),
                (0, i.jsx)(es, {
                    popoutTargetRef: h,
                    isForceShowSharingPopout: o,
                    setIsForceShowSharingPopout: d,
                    children: (0, i.jsxs)("div", {
                        className: ne.pq,
                        children: [
                            (0, i.jsx)(eV.A, {
                                href: t,
                                onClick: () => {
                                    p(), A && E.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                },
                                children: (0, i.jsx)(tt.A, { className: ne._W, children: n.name }),
                            }),
                            null != s && (0, eq.pQ)(s.type)
                                ? (0, i.jsx)(eV.A, {
                                      href: t,
                                      onClick: p,
                                      children: (0, i.jsx)(te.A, { className: ne.Ix, children: g }),
                                  })
                                : (0, i.jsx)(na, { timestamps: m }),
                        ],
                    }),
                }),
            ],
        });
    return (0, i.jsx)("div", { className: ne.cm, children: f });
}
function nu(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: l, isActivityPopoutOpen: r } = e,
        a = s.useMemo(() => ({ start: t.connectedSince }), [t.connectedSince]),
        o = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ej.A, { className: ne.Gt, game: n, size: ej.M.SMALL, ref: l }),
                (0, i.jsxs)("div", {
                    className: ne.pq,
                    children: [
                        (0, i.jsx)(p.D, {
                            onClick: () => {
                                r
                                    ? E.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : e_.A.updateFrameLayoutMode({
                                          applicationId: t.applicationId,
                                          layoutMode: t5.y.FOCUSED,
                                      });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: ne.rB,
                            children: (0, i.jsx)(tt.A, { className: ne._W, children: n.name }),
                        }),
                        (0, i.jsx)(na, { timestamps: a }),
                    ],
                }),
            ],
        });
    return (0, i.jsx)("div", { className: ne.cm, children: o });
}
function nd(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: l } = e,
        { title: s, sanitizedTitle: r } = (0, ew.A)(t);
    return (0, i.jsxs)("div", {
        className: ne.cm,
        ref: n,
        children: [
            (0, i.jsx)(eU.A, { title: r, icon: t?.sourceIcon }),
            (0, i.jsxs)("div", {
                className: ne.pq,
                children: [
                    (0, i.jsx)(tt.A, { children: s }),
                    null != l &&
                        (0, i.jsxs)("div", {
                            className: ne.qi,
                            children: [
                                (0, i.jsx)(f.t, { size: "xxs", color: eE.k0.PREMIUM_TIER_2 }),
                                (0, i.jsx)(ez, { className: ne.s, variant: "text-xxs/semibold", children: l }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nc = (0, x.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: l } = e,
        r = s.useRef(null),
        o = s.useRef(null),
        u = s.useRef(null),
        d = (0, h.bG)([eJ.default], () => eJ.default.getId()),
        m = (0, h.bG)([eT.Ay, e8.A], () => (0, ek.A)(eT.Ay, e8.A)),
        { previouslyRunningGame: g, isWithinThreshold: p } = (function () {
            let [e, t] = (0, s.useState)(Date.now()),
                n = (0, h.bG)([ev], () => ev.getLastPreviouslyRunningGame()),
                { allowAccountLinkingUpsellPostGameClose: l, timeToShowUpsellPostGameCloseMs: i } = ed.useConfig({
                    location: "ActivityPanelGameCard",
                });
            if (
                ((0, s.useEffect)(() => {
                    if (null == n || !l || Date.now() - n.endedAt >= i) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + i - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [l, n, i]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let r = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: l && r < i };
        })(),
        f = (0, h.bG)([e9.A, eX.A], () => eX.A.getChannel(e9.A.getVoiceChannelId())),
        I = (0, h.bG)([y.Ay], () => y.Ay.getConnectedActivityChannelId()),
        _ = (0, h.bG)([eX.A], () => eX.A.getChannel(I)),
        C = (0, h.bG)([eZ.A], () => eZ.A.getGuild(_?.guild_id)),
        [S, x] = (0, h.yK)([eQ.A], () => [eQ.A.getCurrentUserActiveStream(), eQ.A.getStreamerActiveStreamMetadata()]),
        T = (0, h.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        R = (0, h.bG)([eC.A], () => eC.A.getConnectedFrame()),
        b = (0, h.bG)([eZ.A, e1.A], () => null == f || eG.vz(f, eZ.A, e1.A, !1)),
        [v] = (0, em.A)([
            (function () {
                if (null != x && null != x.id) return x.id;
                if (null != m && null != m.id) return m.id;
                if (null != T) return T.applicationId;
                if (null != R) return R.applicationId;
                if (null != g && null != g.id) return g.id;
            })(),
        ]),
        O =
            ((0, h.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
            (0, h.bG)([e0.Ay], () => (0, eP.A)(e0.Ay) && (0, e7.isWindows)()) || !1),
        M = (0, h.bG)([e3.A], () => (null != d ? e3.A.findActivity(d, (e) => e.type === P.$pd.PLAYING) : null)),
        L = null != S && S.ownerId === d && S.state !== P.XYD.ENDED,
        G = (0, h.bG)([e6.default, e2.A], () => (null != _ ? (0, ef.m1)(_, e6.default, e2.A) : void 0)),
        w = (function () {
            let { resolution: e, fps: t } = (0, h.cf)([eH.A], () => eH.A.getState());
            if (e !== eW.on.RESOLUTION_720 || t === eW.kn.FPS_60) return `${(0, eW.zr)(e)} ${(0, eK.Bs)(t)}`;
        })(),
        [U, k] = s.useState(!1),
        V = (0, h.bG)([eB.A], () => eB.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: F, analyticsLocations: B } = (0, er.Ay)(),
        {
            hasAlreadyLinked: H,
            canStartAuthorization: K,
            connectionApp: W,
            startAuthorization: Y,
        } = (0, eh.RD)(v, { allowedFlows: [tK._.RPC, tK._.WEB] }),
        [z, q] = s.useState(null),
        Q = null != z,
        J = s.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return q(v?.id ?? null), Y(...t);
            },
            [v?.id, Y],
        ),
        X = (0, N.A)(v?.id);
    s.useEffect(() => {
        null != v && X !== v?.id && q(null);
    }, [v, X]);
    let $ = (0, c.K)((e) => {
            e &&
                null != W &&
                D.default.track(P.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: m?.id ?? null, application_id: W.id });
        }),
        { allowAccountLinkingUpsellPostGameClose: Z } = ed.useConfig({ location: "ActivityPanelGameCard" }),
        { enabled: ee } = eN.useConfig({ location: "ActivityPanelGameCard" }),
        et = s.useMemo(() => (m?.id != null ? t7[m.id] : void 0), [m?.id]),
        en = (0, h.bG)([e$.A], () => null != et && e$.A.isMember(et), [et]),
        el = ee && null != et && !en ? et : void 0,
        [es, ea] = (function (e) {
            let {
                    application: t,
                    activity: n,
                    embeddedActivity: l,
                    runningGame: i,
                    connectingGameId: r,
                    setConnectingGameId: a,
                    canStartAuthorization: o,
                    hasAlreadyLinked: u,
                    didStartAuthorization: d,
                    gameCommunityGuildId: c,
                } = e,
                { isQuestBarEmpty: m, hasLoadedQuestBar: g } = (0, j.c9)(),
                p = !g || !m,
                f = !p && !u && null == r && o && null != t,
                { shouldShow: I, markAsDismissed: _ } = (function (e) {
                    let {
                            application: t,
                            disabled: n = !1,
                            dismissibleContent: l,
                            dismissibleContentGroupName: i,
                            bypassAutoDismiss: r = !1,
                        } = e,
                        a = (0, h.bG)([eD], () => (null != t ? eD.getGameUpsellDismissal(t.id, l) : null)),
                        [o, u] = (0, s.useState)(!1);
                    (0, s.useEffect)(() => {
                        let e =
                                null != a
                                    ? a.dismissedAt + Math.min(864e5 * Math.pow(2, a.timesDismissed - 1), 24192e5)
                                    : 0,
                            t = 0,
                            n = () => {
                                u(Date.now() >= e);
                                let l = Math.min(e - Date.now(), P.mnr);
                                l > 0 && (t = setTimeout(n, l));
                            };
                        return n(), () => clearTimeout(t);
                    }, [a]);
                    let d = !n && null != t && o,
                        [c, A] = (0, eI.Wl)(d ? l : null, { cooldownDurationMs: 864e5 }, i, r);
                    return {
                        shouldShow: c === l,
                        markAsDismissed: (e) => {
                            if (null != t) {
                                var n;
                                (n = t.id),
                                    E.h.dispatch({
                                        type: "GAME_UPSELL_DISMISS",
                                        applicationId: n,
                                        dismissedAt: Date.now(),
                                        dismissibleContent: l,
                                    }),
                                    A(e);
                            }
                        },
                    };
                })({
                    application: t,
                    disabled: !f,
                    dismissibleContent: A.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: ei.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                }),
                C = !p && null != r && u,
                S = s.useMemo(() => {
                    if (p || I) return [];
                    let e = [];
                    return (
                        u && d && tY(t, n, l) && null == l && e.push(A.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && i?.id != null && i?.name != null && e.push(A.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, p, d, l, i?.id, i?.name, c, u, I]),
                [x, N] = (0, eI.kn)(S, ei.m.ACCOUNT_NAME_ZONE, !0);
            return s.useMemo(() => {
                if (null != x)
                    switch (x) {
                        case A.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    a(null), N(e);
                                },
                            ];
                        case A.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, N];
                        default:
                            return [null, N];
                    }
                return I ? [0, _] : C ? [1, () => a(null)] : [null, () => {}];
            }, [_, N, a, I, C, x]);
        })({
            application: v,
            activity: M,
            embeddedActivity: T,
            runningGame: m,
            connectingGameId: z,
            setConnectingGameId: q,
            canStartAuthorization: K,
            hasAlreadyLinked: H,
            didStartAuthorization: Q,
            gameCommunityGuildId: el,
        }),
        eo = null != g && ((p && 0 === es) || 1 === es) ? g : null,
        eu = s.useCallback(
            (e, t, n) => {
                let { isGameRunning: l } = n;
                return (0, i.jsx)(t6, {
                    isStreaming: L,
                    application: e,
                    game: t,
                    onClickNotSharing: () => k(!0),
                    isForceShowSharingPopout: U,
                    setIsForceShowSharingPopout: k,
                    ref: o,
                    popoutTargetRef: r,
                    isCurrentlyRunningGame: l,
                });
            },
            [U, L],
        ),
        ec = s.useMemo(
            () =>
                null != m && (O || K) && (!L || x?.pid != null)
                    ? eu(v, m, { isGameRunning: !0 })
                    : null != T && null != v && tY(v, M, T)
                      ? (0, i.jsx)(no, {
                            application: v,
                            embeddedActivity: T,
                            channel: _,
                            channelName: G,
                            guildForConnectedChannel: C,
                            isForceShowSharingPopout: U,
                            setIsForceShowSharingPopout: k,
                            accountLinkUpsellTargetRef: o,
                            activityPopoutTargetRef: r,
                            isActivityPopoutOpen: V,
                        })
                      : null != R &&
                          null != v &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: v, frame: R })
                        ? (0, i.jsx)(nu, {
                              application: v,
                              accountLinkUpsellTargetRef: o,
                              frame: R,
                              isActivityPopoutOpen: V,
                          })
                        : L
                          ? (0, i.jsx)(nd, {
                                streamMetadata: x,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: w,
                            })
                          : Z && null != eo
                            ? eu(v, eo, { isGameRunning: !1 })
                            : null,
            [x, M, Z, v, O, K, G, _, T, R, C, V, U, L, eo, eu, m, w],
        );
    return null == ec
        ? null
        : (0, i.jsx)("div", {
              className: a()(ne.nd, l),
              ref: r,
              children: (0, i.jsxs)("div", {
                  className: ne.rf,
                  children: [
                      ec,
                      (0, i.jsx)(tz, {
                          stream: S,
                          canGoLive: O,
                          guildId: t,
                          isStreaming: L,
                          channel: _,
                          canStream: b,
                          runningGame: m,
                          activity: M,
                          application: v,
                          embeddedActivity: T,
                          frame: R,
                          analyticsContext: n,
                          inviteButtonRef: u,
                          accountLinkButtonRef: $,
                          canStartAuthorization: K,
                          startAuthorization: J,
                          hasAlreadyLinked: H,
                          connectionApp: W,
                      }),
                      (0, i.jsx)(nr, {
                          popover: es,
                          dismissPopover: ea,
                          application: v,
                          connectionApp: W,
                          activity: M,
                          runningGame: m,
                          hasAlreadyLinked: H,
                          didStartAuthorization: Q,
                          startAuthorization: J,
                          accountLinkUpsellTargetRef: o,
                          inviteButtonRef: u,
                          accountLinkButtonRef: $,
                          gameCommunityGuildId: el,
                          parentAnalyticsLocation: F,
                          analyticsLocations: B,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
