n.d(t, { A: () => nu }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(284009),
    d = n.n(o),
    c = n(110259),
    u = n(172218),
    h = n(17928),
    A = n(554146),
    g = n(116833),
    _ = n(43105),
    m = n(939249),
    p = n(403581),
    f = n(228366),
    E = n(298990),
    C = n(367513),
    x = n(951001),
    I = n(492684),
    b = n(707606),
    S = n(475743),
    N = n(646865),
    T = n(795816),
    v = n(933958),
    y = n(379848),
    R = n(832248),
    j = n(371912),
    L = n(253932),
    O = n(904481),
    G = n(461213),
    M = n(954571),
    D = n(821609),
    U = n(652215),
    P = n(834730),
    w = n(133171),
    k = n(243721),
    V = n(315710),
    B = n(404778),
    H = n(331322),
    F = n(534514),
    W = n(922016),
    K = n(827827),
    Y = n(481045),
    z = n(395277),
    q = n(985018),
    X = n(982375);
function Q(e) {
    let { closePopout: t } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: X.K2,
        children: (0, l.jsx)(D.$, {
            variant: "primary",
            size: "sm",
            text: q.intl.string(z.default.Poezn1),
            onClick: () => {
                t(), (0, K.A)({ nextStatus: U.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function J(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, h.bG)([G.A], () => G.A.getStatus());
    return (0, l.jsxs)("div", {
        className: X.E3,
        children: [
            (0, l.jsxs)("div", {
                className: X.fu,
                children: [
                    (0, l.jsx)(P.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: q.intl.string(z.default.WhdCGP),
                    }),
                    n &&
                        (0, l.jsxs)("div", {
                            className: X.$v,
                            children: [
                                (0, l.jsx)(w.nW, { status: U.clD.ONLINE, size: 8 }),
                                (0, l.jsx)(P.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === U.clD.INVISIBLE
                                            ? q.intl.string(z.default.a3AofS)
                                            : q.intl.string(q.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsx)(k.d, {
                onChange: (e) => {
                    L.tz.updateSetting(e), n && (0, K.A)({ nextStatus: e ? U.clD.ONLINE : U.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function Z(e) {
    let { children: t } = e,
        n = (0, s.useRef)(null);
    return (
        (0, V.t)(n),
        (0, l.jsx)("div", { className: X.iE, ref: n, children: (0, l.jsx)("div", { className: X.Qs, children: t }) })
    );
}
function $(e) {
    let { closePopout: t } = e,
        n = L.tz.useSetting();
    return (0, l.jsxs)(Z, {
        children: [
            (0, l.jsx)(J, { showCurrentGame: n }),
            (0, l.jsx)(P.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: q.intl.string(z.default["7cfFob"]),
            }),
            (0, l.jsx)(B.c, { className: X.yF }),
            (0, l.jsx)(Y.qA, { onClosePopout: t }),
        ],
    });
}
function ee(e) {
    let { closePopout: t } = e;
    return (0, l.jsxs)(Z, {
        children: [
            (0, l.jsxs)(H.B, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, l.jsx)(F.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: X._M,
                        children: q.intl.string(z.default["5YsmGI"]),
                    }),
                    (0, l.jsxs)("div", {
                        className: X.$v,
                        children: [
                            (0, l.jsx)(w.nW, { status: U.clD.ONLINE, size: 8 }),
                            (0, l.jsx)(P.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: q.intl.string(z.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(P.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: q.intl.string(z.default.Yl0mh4),
            }),
            (0, l.jsx)(Q, { closePopout: t }),
        ],
    });
}
function et(e) {
    let { closePopout: t } = e,
        n = L.tz.useSetting();
    return (0, l.jsxs)(Z, {
        children: [
            (0, l.jsx)(J, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, l.jsx)(P.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: q.intl.string(z.default["7cfFob"]),
            }),
            (0, l.jsx)(B.c, { className: X.yF }),
            (0, l.jsx)(Y.qA, { onClosePopout: t }),
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
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: a, children: r } = e,
        [o, d] = (0, s.useState)(n),
        c = (0, s.useRef)(null),
        u = (function (e) {
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
                                L.tz.updateSetting(!0);
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
                                (0, K.A)({ nextStatus: U.clD.ONLINE });
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
                                L.tz.updateSetting(!0), (0, K.A)({ nextStatus: U.clD.ONLINE });
                            },
                        },
                        textLink: { text: q.intl.string(q.t["ZrN+DT"]), onClick: Y.L7 },
                    };
                case 3:
                    return { type: "popout", children: $ };
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
            t && !h.current && d(n), t !== h.current && (h.current = t);
        }, [n, t]),
        null == u || !t)
    )
        return r;
    if ("popover" === u.type) {
        let { action: e, title: t, body: n, textLink: s } = u;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(_.A, {
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
                r,
            ],
        });
    }
    let { children: A } = u;
    return (0, l.jsx)(W.Y, {
        targetElementRef: c,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(A, { closePopout: t });
        },
        onRequestClose: i,
        children: () => (0, l.jsx)(m.D, { innerRef: c, onClick: i, children: r }),
    });
}
var el = n(49999);
let es = (e) => {
    let {
            children: t,
            isForceShowSharingPopout: n,
            setIsForceShowSharingPopout: i,
            popoutTargetRef: a,
            hidePopout: r = !1,
        } = e,
        o = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, j.c9)(),
                l = L.tz.useSetting(),
                s = (0, O.G)(),
                a = (0, h.bG)([G.A], () => G.A.getStatus()),
                { isOpen: r } = (0, R.A)();
            if (((n && i) || t) && !s && !r && !__OVERLAY__) {
                if (!l && a === U.clD.INVISIBLE) return t ? en.ActivityAndStatus : en.ActivityAndStatusNux;
                if (!l) return t ? en.Activity : en.ActivityNux;
                if (a === U.clD.INVISIBLE) return t ? en.Status : en.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, s.useEffect)(() => {
        n && M.default.track(U.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let d = n || r ? [] : [A.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, l.jsx)(y.Ay, {
        contentTypes: d,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: r } = e,
                d = s === A.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, l.jsx)(ei, {
                showPopout: d,
                popoutState: o,
                handleClose: () => {
                    r(el.i.USER_DISMISS), i(!1);
                },
                popoutTargetRef: a,
                children: t,
            });
        },
    });
};
var ea = n(688810),
    er = n(139286),
    eo = n(945810),
    ed = n(927813);
let ec = (0, eo.mj)({
    name: "2026-04-game-account-linking-post-game-close",
    kind: "user",
    defaultConfig: { allowAccountLinkingUpsellPostGameClose: !1, timeToShowUpsellPostGameCloseMs: 0 },
    variations: {
        0: { allowAccountLinkingUpsellPostGameClose: !1, timeToShowUpsellPostGameCloseMs: 0 },
        1: { allowAccountLinkingUpsellPostGameClose: !0, timeToShowUpsellPostGameCloseMs: 5 * ed.A.Millis.MINUTE },
    },
});
var eu = n(941314),
    eh = n(46225),
    eA = n(627363),
    eg = n(429913),
    e_ = n(568598),
    em = n(384059),
    ep = n(47167),
    ef = n(404374),
    eE = n(932001),
    eC = n(625180),
    ex = n(91242),
    eI = n(686956);
function eb(e) {
    let { targetElementRef: t, gameId: n, gameName: i, gameCommunityGuildId: a, markAsDismissed: r } = e,
        { analyticsLocations: o } = (0, ea.Ay)();
    return (
        s.useEffect(() => {
            M.default.track(U.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: o, application_id: n, guild_id: a });
        }, [n, a, o]),
        (0, l.jsx)(_.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                M.default.track(U.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: o,
                    application_id: n,
                    guild_id: a,
                }),
                    r(el.i.USER_DISMISS);
            },
            title: q.intl.formatToPlainString(q.t.ry9SJw, { gameName: i }),
            body: q.intl.string(q.t.YPpOov),
            actions: [
                {
                    text: q.intl.string(q.t.RVfNGU),
                    onClick: () => {
                        M.default.track(U.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: a,
                        }),
                            r(el.i.TAKE_ACTION),
                            eI.A.joinGuild(a, { source: U.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
let eS = (0, eo.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eN = n(328153);
let eT = eN.Ay.getRunningGames(),
    ev = [];
class ey extends h.Ay.Store {
    initialize() {
        this.syncWith([eN.Ay], () =>
            (function () {
                let e = eN.Ay.getRunningGames();
                if (eT === e) return !1;
                let t = eT.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((eT = e), 0 === t.length)) return !1;
                ev = [...ev, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return ev;
    }
    getLastPreviouslyRunningGame() {
        return ev[ev.length - 1] ?? null;
    }
}
let eR = new ey(f.h, {});
var ej = n(137177);
let eL = { gameUpsellsDismissal: {} },
    eO = { ...eL };
class eG extends h.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
        eO = e ?? eO;
    }
    getState() {
        return eO;
    }
    getGameUpsellDismissal(e, t) {
        return eO.gameUpsellsDismissal[t]?.[e] ?? null;
    }
}
let eM = new eG(f.h, {
    LOGOUT: function () {
        eO = { ...eL };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationId: t, dismissedAt: n, dismissibleContent: i } = e,
            l = eO.gameUpsellsDismissal[i]?.[t],
            s = null != l ? l.timesDismissed + 1 : 1;
        eO = {
            gameUpsellsDismissal: {
                ...eO.gameUpsellsDismissal,
                [i]: { ...eO.gameUpsellsDismissal[i], [t]: { dismissedAt: n, timesDismissed: s } },
            },
        };
    },
});
var eD = n(279250),
    eU = n(880144),
    eP = n(277680),
    ew = n(118277),
    ek = n(905552),
    eV = n(95035),
    eB = n(716965),
    eH = n(567249),
    eF = n(929921),
    eW = n(650338),
    eK = n(753070),
    eY = n(194368);
function ez(e) {
    let { className: t, color: n, ...i } = e;
    return (0, l.jsx)(P.E, { className: r()({ [eY.Q]: null == n }, t), color: n, ...i });
}
var eq = n(95701),
    eX = n(616356),
    eQ = n(495544),
    eJ = n(734057),
    eZ = n(184989),
    e$ = n(71393),
    e0 = n(969341),
    e1 = n(576705),
    e2 = n(290863),
    e6 = n(994500),
    e9 = n(309010),
    e3 = n(287809),
    e7 = n(157257),
    e4 = n(975571),
    e5 = n(723702);
let e8 = (0, eo.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var te = n(994314),
    tt = n(485599),
    tn = n(141628),
    ti = n(192308),
    tl = n(959988),
    ts = n(183623),
    ta = n(241541),
    tr = n(70688),
    to = n(687966),
    td = n(34188),
    tc = n(942857),
    tu = n(833349),
    th = n(869003),
    tA = n(521588),
    tg = n(702841),
    t_ = n(475358),
    tm = n(176781),
    tp = n(442433),
    tf = n(42473),
    tE = n(186111),
    tC = n(532624),
    tx = n(350535),
    tI = n(274372),
    tb = n(572164),
    tS = n(399925),
    tN = n(646693);
function tT(e) {
    (0, tp.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 562733));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
let tv = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [i, a] = s.useState(!1),
            r = s.useCallback(() => a(!1), []);
        return (0, l.jsx)(_.A, {
            shouldShow: i,
            targetElementRef: n,
            position: "top",
            title: q.intl.format(q.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, l.jsx)("span", {
                        className: tN.E,
                        children: (0, l.jsx)(t_.e, { className: tN.d, shortcut: t }),
                    }),
            }),
            body: q.intl.format(q.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
            caretConfig: { align: "center" },
            onRequestClose: r,
        });
    },
    ty = () => {
        let e = s.useRef(null),
            { parentAnalyticsLocation: t } = (0, ea.Ay)(),
            n = (0, tg.bG)([tE.A], () => tE.A.hasLayers()),
            i = (0, tb.Et)(),
            a = (0, tg.bG)([tI.A], () => tI.A.getIsAtMaxSaveClipOperations()),
            r = (0, tg.bG)([tC.Ay], () => tC.Ay.getKeybindForAction(U.hCu.SAVE_CLIP));
        if (!i || null == r || n) return null;
        let o = tx.dI(r.shortcut, !0);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tv, { keybindString: o, targetElementRef: e }),
                (0, l.jsx)(tf.A, {
                    ref: e,
                    disabled: a,
                    tooltipText:
                        null != r
                            ? q.intl.formatToPlainString(q.t.HIMcv1, { hotkey: tx.dI(r?.shortcut, !0) })
                            : q.intl.string(q.t.s52pju),
                    onClick: () => {
                        (0, tS.l0)(), (0, em.X)(t, em.O.CLIP);
                    },
                    onContextMenu: tT,
                    icon: tm.x,
                }),
            ],
        });
    };
var tR = n(338771),
    tj = n(212637),
    tL = n(397400),
    tO = n(488803);
let tG = (0, eo.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tM = n(823748),
    tD = n(522055),
    tU = n(576709);
function tP(e) {
    let { title: t, body: n, ctaText: i, runningGameId: s, targetElementRef: a, onClick: r, onClose: o } = e,
        d = (0, h.bG)([tD.A], () => null != s && tD.A.getGlobalCatalogGame(s)?.can_market === !0, [s]);
    return (0, l.jsx)(_.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            d && null != s
                ? {
                      type: "dynamic",
                      component: g.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: s },
                      aspectRatio: "6/4",
                  }
                : {
                      type: "image",
                      src: "https://cdn.discordapp.com/assets/content/24bc847e3e4dae2b04997ce7374d99a3d11da678af3c9d7664bbff99ed1bfdb1.svg",
                      aspectRatio: "6/4",
                  },
        actions: [{ text: i, variant: "primary", onClick: r }],
        targetElementRef: a,
        shouldShow: !0,
        position: "top",
        onRequestClose: o,
    });
}
function tw(e) {
    let { gameName: t, ...n } = e;
    return (0, l.jsx)(tP, {
        title: q.intl.formatToPlainString(tU.default.lKzVNu, { gameName: t }),
        body: q.intl.string(tU.default.qqjm8O),
        ctaText: q.intl.string(tU.default["eJg+Zm"]),
        ...n,
    });
}
function tk(e) {
    let { gameName: t, ...n } = e;
    return (0, l.jsx)(tP, {
        title: q.intl.formatToPlainString(tU.default.lwwiHE, { gameName: t }),
        body: q.intl.string(tU.default.B33GXN),
        ctaText: q.intl.string(tU.default["968/QC"]),
        ...n,
    });
}
var tV = n(453774),
    tB = n(44724),
    tH = n(84764),
    tF = n(153488),
    tW = n(942370),
    tK = n(610861);
function tY(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === U.$pd.PLAYING &&
              (0, tu.A)(t, U.jUm.JOIN))
    );
}
let tz = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: i,
                guildId: a,
                isStreaming: r,
                channel: o,
                canStream: c,
                runningGame: u,
                embeddedActivity: A,
                frame: g,
                activity: m,
                application: p,
                analyticsContext: f,
                inviteButtonRef: C,
                accountLinkButtonRef: x,
                startAuthorization: I,
                canStartAuthorization: b,
                hasAlreadyLinked: S,
                connectionApp: T,
            } = e,
            { parentAnalyticsLocation: v, analyticsLocations: y } = (0, ea.Ay)(),
            R = (0, tV.A)(p?.id),
            j = tY(p, m, A),
            { enabled: L } = tG.useConfig({ location: "activity-panel" }),
            O = (0, tM.Bp)("activity-panel"),
            G = (0, tO.C$)(a ?? void 0, "activity-panel"),
            D = (0, h.bG)([tF.A], () => tF.A.hasConsented(U.YAq.PERSONALIZATION)),
            P = (0, tM.TF)(u?.id, { shouldFetch: O || G }),
            w = L && D && P,
            k = w && O,
            V = w && G,
            B = s.useCallback(() => {
                d()(null != m, "Received null activity"),
                    M.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: u?.id ?? null,
                        application_id: m.application_id,
                    }),
                    (0, em.X)(v, em.O.INVITE),
                    M.default.track(U.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: m.application_id,
                        location: f.location,
                    }),
                    (0, E.qf)(m, !1);
            }, [m, f, v, u]),
            H = s.useCallback(
                (e, t) => () => {
                    (0, em.X)(v, em.O.LEAVE_ACTIVITY),
                        th.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [v],
            ),
            F = s.useCallback(
                (e) => () => {
                    (0, em.X)(v, em.O.LEAVE_ACTIVITY), eC.A.stopFrame({ applicationId: e });
                },
                [v],
            ),
            W = s.useCallback(() => {
                (0, tR.A)(t);
            }, [t]),
            K = s.useCallback(() => {
                (0, ti.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("27713"), n.e("45150")]).then(n.bind(n, 301400));
                    return (t) =>
                        (0, l.jsx)(e, {
                            ...t,
                            sourcePID: u?.pid,
                            selectSource: null != e9.A.getVoiceChannelId(),
                            analyticsLocations: y,
                        });
                });
            }, [u, y]),
            Y = p?.name ?? u?.name ?? "",
            z = s.useCallback(() => {
                (0, tL.pK)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                    (0, ti.openModalLazy)(async () => {
                        let { default: e } = await n.e("74132").then(n.bind(n, 279871));
                        return (t) => (0, l.jsx)(e, { gameName: Y, gameApplicationId: u?.id, ...t });
                    });
            }, [Y, u?.id]),
            X = s.useCallback(() => {
                d()(null != a, "Received null guildId"),
                    (0, tL.pK)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                    (0, tj.A)({ analyticsLocations: y, analyticsLocation: f.location, guildId: a });
            }, [a, y, f.location, u?.id]),
            Q = s.useRef(null),
            [J, Z] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != Q.current && clearTimeout(Q.current);
            },
            [],
        ),
            s.useEffect(() => {
                S && (Z(!1), null != Q.current && (clearTimeout(Q.current), (Q.current = null)));
            }, [S]);
        let $ = R?.guildId == null || null == p ? null : (0, l.jsx)(tQ, { guildId: R.guildId, applicationId: R.id }),
            ee = k
                ? (0, l.jsx)(tX, {
                      tooltipText: q.intl.formatToPlainString(tU.default.YhnUVO, { gameName: Y }),
                      onClick: z,
                      onViewed: () => (0, tL.ET)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, l.jsx)(tw, {
                              gameName: Y,
                              runningGameId: u?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  z(), n(el.i.TAKE_ACTION), i(el.i.TAKE_ACTION);
                              },
                              onClose: () => n(el.i.USER_DISMISS),
                          });
                      },
                  })
                : V
                  ? (0, l.jsx)(tX, {
                        tooltipText: q.intl.formatToPlainString(tU.default.lwwiHE, { gameName: Y }),
                        onClick: X,
                        onViewed: () => (0, tL.ET)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, l.jsx)(tk, {
                                gameName: Y,
                                runningGameId: u?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    X(), n(el.i.TAKE_ACTION), i(el.i.TAKE_ACTION);
                                },
                                onClose: () => n(el.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            et = (function () {
                let e, t, n;
                if ((null == u && null != A && !(0, N.f)()) || (!r && !i)) return null;
                let s = null;
                return (
                    r
                        ? ((e = !1),
                          (t = () => {
                              W(), (0, em.X)(v, em.O.STREAM, !1);
                          }),
                          (n = tl.G),
                          (s = q.intl.string(q.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                K(), (0, em.X)(v, em.O.STREAM, !0);
                            }),
                            (n = ts.F),
                            (s =
                                null != u
                                    ? q.intl.formatToPlainString(q.t.AB5gTy, { game: u.name })
                                    : q.intl.string(q.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = ts.F),
                            null != o && (0, eq.gV)(o.type) && (s = q.intl.string(q.t.uQn9B8))),
                    (0, l.jsx)("div", {
                        className: tK.IF,
                        children: (0, l.jsx)(tf.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                j && null == A
                    ? (0, l.jsx)(tf.A, { ref: C, tooltipText: q.intl.string(q.t["hC/Zey"]), onClick: B, icon: ta.D })
                    : null,
            ei =
                null == A
                    ? null
                    : (0, l.jsx)(tf.A, {
                          tooltipText: q.intl.string(q.t["R/FK4A"]),
                          onClick: H(A.applicationId, A.location),
                          icon: tr.o,
                      }),
            es =
                null == g
                    ? null
                    : (0, l.jsx)(tf.A, {
                          tooltipText: q.intl.string(q.t["R/FK4A"]),
                          onClick: F(g.applicationId),
                          icon: tr.o,
                      }),
            er = null == t ? null : (0, l.jsx)(ty, {}),
            eo =
                !b || S
                    ? null
                    : (0, l.jsx)(tq, {
                          runningGame: u,
                          startAuthorization: () => {
                              I({ analyticsLocations: y }) === tW._.RPC &&
                                  (Z(!0),
                                  null != Q.current && clearTimeout(Q.current),
                                  (Q.current = setTimeout(() => {
                                      Z(!1);
                                  }, 9e4)));
                          },
                          connectionApp: T,
                          ref: x,
                      }),
            ed =
                !b || S
                    ? null
                    : (0, l.jsx)(_.A, {
                          title: q.intl.string(q.t.ULvRFd),
                          body: q.intl.string(q.t["HJJDr+"]),
                          targetElementRef: x,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: J,
                          onRequestClose: () => {
                              Z(!1), null != Q.current && (clearTimeout(Q.current), (Q.current = null));
                          },
                      });
        return null == et && null == en && null == ei && null == es && null == eo && null == $ && null == ee
            ? null
            : (0, l.jsxs)("div", { className: tK.o1, children: [$ ?? eo ?? en, ee, et, ei ?? es ?? er, ed] });
    }),
    tq = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: s } = e;
        return (0, l.jsx)(tf.A, {
            ref: t,
            onClick: () => {
                M.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    i();
            },
            icon: tn.A,
            tooltipText: q.intl.string(q.t.sbdnpw),
        });
    });
function tX(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: a } = e,
        r = s.useRef(null),
        o = s.useRef(!1);
    s.useEffect(() => {
        o.current || ((o.current = !0), i());
    }, [i]);
    let d = (0, tc.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: u } = (0, j.c9)(),
        [h, g] = (0, eE.kn)(!d && c && u ? [A.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [_, m] = (0, eE.kn)([A.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        p = s.useCallback(() => {
            g(el.i.TAKE_ACTION), m(el.i.TAKE_ACTION), n();
        }, [g, m, n]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: tK.IF,
                children: [
                    (0, l.jsx)("div", { className: tK.uD, children: (0, l.jsx)("div", { className: tK.Z9 }) }),
                    (0, l.jsx)(tf.A, { ref: r, tooltipText: t, onClick: p, icon: to._ }),
                    _ === A.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, l.jsx)(tA.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != h && a({ targetElementRef: r, markAsDismissed: g, markBadgeAsDismissed: m }),
        ],
    });
}
function tQ(e) {
    let { applicationId: t, guildId: n } = e,
        i = s.useRef(null);
    s.useEffect(() => {
        M.default.track(U.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, r] = (0, eE.kn)([A.M.GAME_SHOP_RTC_POPOVER], el.m.ACCOUNT_NAME_ZONE, !0),
        o = s.useCallback(() => {
            (0, tB.X)({ guildId: n });
        }, [n]),
        d = s.useCallback(() => {
            (0, tB.default)({ guildId: n }), r(el.i.USER_DISMISS);
        }, [n, r]),
        c = s.useCallback(() => {
            M.default.track(U.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        u = s.useCallback(() => {
            r(el.i.USER_DISMISS);
        }, [r]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tf.A, {
                tooltipText: q.intl.string(q.t.vyaWs7),
                onClick: c,
                onMouseDown: o,
                icon: td.U,
                ref: i,
            }),
            a === A.M.GAME_SHOP_RTC_POPOVER
                ? (0, l.jsx)(tH.A, {
                      onActionClick: d,
                      onRequestClose: u,
                      targetElementRef: i,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        ],
    });
}
var tJ = n(428689),
    tZ = n(673294);
function t$(e) {
    let { onClick: t } = e;
    return (0, l.jsx)(m.D, {
        className: tZ.kL,
        onClick: t,
        children: (0, l.jsx)(P.E, {
            className: tZ.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: q.intl.string(q.t.jfrLLb),
        }),
    });
}
function t0(e) {
    let { onClick: t } = e,
        n = L.tz.useSetting(),
        i = (0, h.bG)([G.A], () => G.A.getStatus());
    return __OVERLAY__ || (n && i !== U.clD.INVISIBLE) ? null : (0, l.jsx)(t$, { onClick: t });
}
var t1 = n(409626),
    t2 = n(692969),
    t6 = n(379414);
function t9(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t2.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t1.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, l.jsx)(m.D, {
        onClick: i,
        className: r()(null != i && t6.On),
        children: (0, l.jsx)(tt.A, { className: t6.mO, children: t }),
    });
}
function t3(e) {
    let t,
        n,
        {
            isStreaming: i,
            application: a,
            game: r,
            onClickNotSharing: o,
            isForceShowSharingPopout: d,
            setIsForceShowSharingPopout: c,
            ref: u,
            popoutTargetRef: A,
            isCurrentlyRunningGame: g,
        } = e,
        _ = null != a ? a.name : null != r ? r.name : q.intl.string(q.t["UQMV/E"]);
    return (
        (t = L.tz.useSetting()),
        (n = (0, h.bG)([G.A], () => G.A.getStatus())),
        (0, s.useEffect)(() => {
            M.default.track(U.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === U.clD.INVISIBLE,
            });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: t6.cm,
            children: [
                (0, l.jsxs)("div", {
                    className: t6.f9,
                    children: [
                        (0, l.jsx)(ej.A, { className: t6.Gt, game: a, pid: r?.pid, ref: u }),
                        i ? (0, l.jsx)(tJ.n, { size: "md", color: "currentColor", className: t6.it }) : null,
                    ],
                }),
                (0, l.jsx)(es, {
                    popoutTargetRef: A,
                    isForceShowSharingPopout: d,
                    setIsForceShowSharingPopout: c,
                    hidePopout: !g,
                    children: (0, l.jsxs)("div", {
                        className: t6.pq,
                        children: [
                            null != _ ? (0, l.jsx)(t9, { name: _, applicationId: a?.id }) : null,
                            g
                                ? (0, l.jsx)(t0, { onClick: o })
                                : (0, l.jsx)(P.E, {
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
var t7 = n(5867),
    t4 = n(165610);
let t5 = {
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
var t8 = n(911070),
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
            incentivizedAccountLinkingDisplayedApp: r,
            markAccountLinkingUpsellAsDismissed: o,
            startAuthorization: d,
            analyticsLocations: u,
            accountLinkButtonRef: h,
        } = e,
        A = e8.useConfig({ location: "ActivityPanelGameCard" }),
        { defaultBody: m } = eu.A.useConfig({ location: "ActivityPanelGameCard" }),
        p = a ? r : i,
        f = null == p;
    if (
        ((0, er.A)(
            {
                type: c.ImpressionTypes.POPOUT,
                name: c.ImpressionNames.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                properties: {
                    application_id: i?.id,
                    parent_application_id: s?.parentId,
                    type: a ? "incentivized" : "default",
                },
            },
            { disableTrack: f },
        ),
        f)
    )
        return null;
    let E = q.intl.formatToPlainString(A.altTitle ? q.t.hUbQT2 : q.t["lo6H6+"], { gameName: p.name }),
        C = q.intl.string(m ?? (A.altBody ? q.t["JKqu+4"] : q.t.qYAzOp)),
        x = q.intl.string(A.altCta ? q.t.jynBQ5 : q.t.lw71Nf);
    a && (x = q.intl.string(t8.default["2cOIOr"]));
    let I = [
        {
            text: x,
            onClick: () => {
                o(el.i.TAKE_ACTION), d({ analyticsLocations: u });
            },
        },
    ];
    return (
        a &&
            ((t = "beta"),
            (E = q.intl.formatToPlainString(t8.default.dPuaZE, { applicationName: p.name })),
            (C = q.intl.string(t8.default.jR3bbS)),
            (n = {
                text: q.intl.string(q.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, l.jsx)(_.A, {
            size: a ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: g.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: p, isIncentivizedAccountLinking: a },
            },
            badge: t,
            title: E,
            body: C,
            textLink: n,
            targetElementRef: h,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(el.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: I,
        })
    );
}
function nl(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: s } = e,
        a = q.intl.string(q.t.MxAlrB),
        r = q.intl.string(q.t["/UTTEg"]),
        o = [
            {
                text: q.intl.string(q.t.aRIFWD),
                onClick: () => {
                    i(el.i.TAKE_ACTION), window.open(e4.A.getArticleURL(U.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((a = q.intl.string(t8.default.ublzTG)),
            (r = q.intl.string(t8.default.JgM2xu)),
            (t = { type: "video", src: nn.A, fallbackImageSrc: nt.A, aspectRatio: "2/1", loop: !0 })),
        (0, l.jsx)(_.A, {
            graphic: t,
            title: a,
            body: r,
            targetElementRef: s,
            position: "top",
            align: "left",
            caretConfig: { align: "start" },
            actions: o,
            shouldShow: !0,
            onRequestClose: () => i(el.i.USER_DISMISS),
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
        analyticsContext: r,
    } = e;
    return (0, l.jsx)(_.A, {
        title: q.intl.string(q.t["0l2pEt"]),
        body: q.intl.string(q.t["DSZUK/"]),
        targetElementRef: s,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(el.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: q.intl.string(q.t.YdkBCH),
                onClick: () => {
                    i(el.i.TAKE_ACTION),
                        d()(null != t, "Received null activity"),
                        M.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, em.X)(a, em.O.INVITE),
                        M.default.track(U.HAw.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: t.application_id,
                            location: r.location,
                        }),
                        (0, E.qf)(t, !1);
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
            activity: r,
            runningGame: o,
            hasAlreadyLinked: c,
            didStartAuthorization: u,
            startAuthorization: h,
            accountLinkUpsellTargetRef: A,
            inviteButtonRef: g,
            accountLinkButtonRef: _,
            gameCommunityGuildId: m,
            parentAnalyticsLocation: p,
            analyticsLocations: f,
            analyticsContext: E,
        } = e,
        { isEligible: C, displayedApp: x } = (function (e) {
            let { connectionApp: t } = e,
                { enabled: n } = eu.A.useConfig({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, eA.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && tW.Y.has(t.id), displayedApp: i };
        })({ connectionApp: a }),
        { rewarded: I } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: l } = e,
                [a, r] = s.useState(!1);
            return (
                s.useEffect(() => {
                    if (!t || !n || !i || a || null == l) return;
                    let e = !1;
                    return (
                        (0, eB.RI)({
                            applicationId: l.id,
                            onSuccess: () => {
                                e || r(!0);
                            },
                            onError: () => {},
                        }),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, i, a, l]),
                { rewarded: a }
            );
        })({ isEligible: C, hasAlreadyLinked: c, didStartAuthorization: u, application: a });
    switch (t) {
        case 0:
            return (0, l.jsx)(ni, {
                application: i,
                connectionApp: a,
                isEligibleForIncentivizedAccountLinking: C,
                incentivizedAccountLinkingDisplayedApp: x,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: h,
                analyticsLocations: f,
                accountLinkButtonRef: _,
            });
        case 1:
            return (0, l.jsx)(nl, {
                incentivizedAccountLinkingRewarded: I,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: A,
            });
        case 2:
            return (0, l.jsx)(ns, {
                activity: r,
                game: o,
                markAsDismissed: n,
                inviteButtonRef: g,
                parentAnalyticsLocation: p,
                analyticsContext: E,
            });
        case 3:
            return (
                d()(o?.id != null && o?.name != null && null != m, "Game community upsell requires these as non null"),
                (0, l.jsx)(eb, {
                    targetElementRef: A,
                    gameId: o.id,
                    gameName: o.name,
                    gameCommunityGuildId: m,
                    markAsDismissed: n,
                })
            );
        default:
            return null;
    }
}
let nr = (0, I.A)(function (e) {
    let { message: t } = e;
    return (0, l.jsx)(te.A, { children: t });
});
function no(e) {
    let t,
        {
            application: n,
            embeddedActivity: i,
            channel: s,
            channelName: a,
            guildForConnectedChannel: r,
            isForceShowSharingPopout: o,
            setIsForceShowSharingPopout: c,
            accountLinkUpsellTargetRef: u,
            activityPopoutTargetRef: h,
            isActivityPopoutOpen: A,
        } = e,
        g = { start: i.connectedSince },
        _ = a;
    null != r && null != s
        ? ((t = U.BVt.CHANNEL(r.id, s.id)), (_ = `${_} / ${r.name}`))
        : null != s && (t = U.BVt.CHANNEL(U.ME, s.id));
    let m = () => {
            d()(null != s, "Channel cannot be null during navigation click"),
                x.A.channelListScrollTo(s.guild_id ?? U.ME, s.id),
                !A &&
                    ((0, eq.gV)(s.type) &&
                        C.A.selectParticipant(
                            s.id,
                            (0, e_.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                        ),
                    (0, eq.pQ)(s.type) && (0, T.gk)(t7.Gd.PANEL));
        },
        p = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ej.A, { className: ne.Gt, game: n, size: ej.M.SMALL, ref: u }),
                (0, l.jsx)(es, {
                    popoutTargetRef: h,
                    isForceShowSharingPopout: o,
                    setIsForceShowSharingPopout: c,
                    children: (0, l.jsxs)("div", {
                        className: ne.pq,
                        children: [
                            (0, l.jsx)(eV.A, {
                                href: t,
                                onClick: () => {
                                    m(), A && f.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                },
                                children: (0, l.jsx)(tt.A, { className: ne._W, children: n.name }),
                            }),
                            null != s && (0, eq.pQ)(s.type)
                                ? (0, l.jsx)(eV.A, {
                                      href: t,
                                      onClick: m,
                                      children: (0, l.jsx)(te.A, { className: ne.Ix, children: _ }),
                                  })
                                : (0, l.jsx)(nr, { timestamps: g }),
                        ],
                    }),
                }),
            ],
        });
    return (0, l.jsx)("div", { className: ne.cm, children: p });
}
function nd(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: a } = e,
        r = s.useMemo(() => ({ start: t.connectedSince }), [t.connectedSince]),
        o = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ej.A, { className: ne.Gt, game: n, size: ej.M.SMALL, ref: i }),
                (0, l.jsxs)("div", {
                    className: ne.pq,
                    children: [
                        (0, l.jsx)(m.D, {
                            onClick: () => {
                                a
                                    ? f.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : eC.A.updateFrameLayoutMode({
                                          applicationId: t.applicationId,
                                          layoutMode: t4.y.FOCUSED,
                                      });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: ne.rB,
                            children: (0, l.jsx)(tt.A, { className: ne._W, children: n.name }),
                        }),
                        (0, l.jsx)(nr, { timestamps: r }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)("div", { className: ne.cm, children: o });
}
function nc(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: s, sanitizedTitle: a } = (0, eP.A)(t);
    return (0, l.jsxs)("div", {
        className: ne.cm,
        ref: n,
        children: [
            (0, l.jsx)(ew.A, { title: a, icon: t?.sourceIcon }),
            (0, l.jsxs)("div", {
                className: ne.pq,
                children: [
                    (0, l.jsx)(tt.A, { children: s }),
                    null != i &&
                        (0, l.jsxs)("div", {
                            className: ne.qi,
                            children: [
                                (0, l.jsx)(p.t, { size: "xxs", color: ef.k0.PREMIUM_TIER_2 }),
                                (0, l.jsx)(ez, { className: ne.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nu = (0, b.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        a = s.useRef(null),
        o = s.useRef(null),
        d = s.useRef(null),
        c = (0, h.bG)([eQ.default], () => eQ.default.getId()),
        g = (0, h.bG)([eN.Ay, e7.A], () => (0, ek.A)(eN.Ay, e7.A)),
        { previouslyRunningGame: _, isWithinThreshold: m } = (function () {
            let [e, t] = (0, s.useState)(Date.now()),
                n = (0, h.bG)([eR], () => eR.getLastPreviouslyRunningGame()),
                { allowAccountLinkingUpsellPostGameClose: i, timeToShowUpsellPostGameCloseMs: l } = ec.useConfig({
                    location: "ActivityPanelGameCard",
                });
            if (
                ((0, s.useEffect)(() => {
                    if (null == n || !i || Date.now() - n.endedAt >= l) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + l - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [i, n, l]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let a = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i && a < l };
        })(),
        p = (0, h.bG)([e9.A, eJ.A], () => eJ.A.getChannel(e9.A.getVoiceChannelId())),
        E = (0, h.bG)([v.Ay], () => v.Ay.getConnectedActivityChannelId()),
        C = (0, h.bG)([eJ.A], () => eJ.A.getChannel(E)),
        x = (0, h.bG)([e$.A], () => e$.A.getGuild(C?.guild_id)),
        [I, b] = (0, h.yK)([eX.A], () => [eX.A.getCurrentUserActiveStream(), eX.A.getStreamerActiveStreamMetadata()]),
        N = (0, h.bG)([v.Ay], () => v.Ay.getCurrentEmbeddedActivity()),
        T = (0, h.bG)([ex.A], () => ex.A.getConnectedFrame()),
        y = (0, h.bG)([e$.A, e1.A], () => null == p || eD.vz(p, e$.A, e1.A, !1)),
        [R] = (0, eg.A)([
            (function () {
                if (null != b && null != b.id) return b.id;
                if (null != g && null != g.id) return g.id;
                if (null != N) return N.applicationId;
                if (null != T) return T.applicationId;
                if (null != _ && null != _.id) return _.id;
            })(),
        ]),
        L =
            ((0, h.bG)([v.Ay], () => v.Ay.getCurrentEmbeddedActivity()),
            (0, h.bG)([e0.Ay], () => (0, eU.A)(e0.Ay) && (0, e5.isWindows)()) || !1),
        O = (0, h.bG)([e2.A], () => (null != c ? e2.A.findActivity(c, (e) => e.type === U.$pd.PLAYING) : null)),
        G = null != I && I.ownerId === c && I.state !== U.XYD.ENDED,
        D = (0, h.bG)([e3.default, e6.A], () => (null != C ? (0, ep.m1)(C, e3.default, e6.A) : void 0)),
        P = (function () {
            let { resolution: e, fps: t } = (0, h.cf)([eF.A], () => eF.A.getState());
            if (e !== eK.on.RESOLUTION_720 || t === eK.kn.FPS_60) return `${(0, eK.zr)(e)} ${(0, eW.Bs)(t)}`;
        })(),
        [w, k] = s.useState(!1),
        V = (0, h.bG)([eH.A], () => eH.A.getWindowOpen(U.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: B, analyticsLocations: H } = (0, ea.Ay)(),
        {
            hasAlreadyLinked: F,
            canStartAuthorization: W,
            connectionApp: K,
            startAuthorization: Y,
        } = (0, eh.RD)(R, { allowedFlows: [tW._.RPC, tW._.WEB] }),
        [z, q] = s.useState(null),
        X = null != z,
        Q = s.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return q(R?.id ?? null), Y(...t);
            },
            [R?.id, Y],
        ),
        J = (0, S.A)(R?.id);
    s.useEffect(() => {
        null != R && J !== R?.id && q(null);
    }, [R, J]);
    let Z = (0, u.K)((e) => {
            e &&
                null != K &&
                M.default.track(U.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: g?.id ?? null, application_id: K.id });
        }),
        { allowAccountLinkingUpsellPostGameClose: $ } = ec.useConfig({ location: "ActivityPanelGameCard" }),
        { enabled: ee } = eS.useConfig({ location: "ActivityPanelGameCard" }),
        et = s.useMemo(() => (g?.id != null ? t5[g.id] : void 0), [g?.id]),
        en = (0, h.bG)([eZ.A], () => null != et && eZ.A.isMember(et), [et]),
        ei = ee && null != et && !en ? et : void 0,
        [es, er] = (function (e) {
            let {
                    application: t,
                    activity: n,
                    embeddedActivity: i,
                    runningGame: l,
                    connectingGameId: a,
                    setConnectingGameId: r,
                    canStartAuthorization: o,
                    hasAlreadyLinked: d,
                    didStartAuthorization: c,
                    gameCommunityGuildId: u,
                } = e,
                { isQuestBarEmpty: g, hasLoadedQuestBar: _ } = (0, j.c9)(),
                m = !_ || !g,
                p = !m && !d && null == a && o && null != t,
                { shouldShow: E, markAsDismissed: C } = (function (e) {
                    let {
                            application: t,
                            disabled: n = !1,
                            dismissibleContent: i,
                            dismissibleContentGroupName: l,
                            bypassAutoDismiss: a = !1,
                        } = e,
                        r = (0, h.bG)([eM], () => (null != t ? eM.getGameUpsellDismissal(t.id, i) : null)),
                        [o, d] = (0, s.useState)(!1);
                    (0, s.useEffect)(() => {
                        let e =
                                null != r
                                    ? r.dismissedAt + Math.min(864e5 * Math.pow(2, r.timesDismissed - 1), 24192e5)
                                    : 0,
                            t = 0,
                            n = () => {
                                d(Date.now() >= e);
                                let i = Math.min(e - Date.now(), U.mnr);
                                i > 0 && (t = setTimeout(n, i));
                            };
                        return n(), () => clearTimeout(t);
                    }, [r]);
                    let c = !n && null != t && o,
                        [u, A] = (0, eE.Wl)(c ? i : null, { cooldownDurationMs: 864e5 }, l, a);
                    return {
                        shouldShow: u === i,
                        markAsDismissed: (e) => {
                            if (null != t) {
                                var n;
                                (n = t.id),
                                    f.h.dispatch({
                                        type: "GAME_UPSELL_DISMISS",
                                        applicationId: n,
                                        dismissedAt: Date.now(),
                                        dismissibleContent: i,
                                    }),
                                    A(e);
                            }
                        },
                    };
                })({
                    application: t,
                    disabled: !p,
                    dismissibleContent: A.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: el.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                }),
                x = !m && null != a && d,
                I = s.useMemo(() => {
                    if (m || E) return [];
                    let e = [];
                    return (
                        d && c && tY(t, n, i) && null == i && e.push(A.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != u && l?.id != null && l?.name != null && e.push(A.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, m, c, i, l?.id, l?.name, u, d, E]),
                [b, S] = (0, eE.kn)(I, el.m.ACCOUNT_NAME_ZONE, !0);
            return s.useMemo(() => {
                if (null != b)
                    switch (b) {
                        case A.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    r(null), S(e);
                                },
                            ];
                        case A.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, S];
                        default:
                            return [null, S];
                    }
                return E ? [0, C] : x ? [1, () => r(null)] : [null, () => {}];
            }, [C, S, r, E, x, b]);
        })({
            application: R,
            activity: O,
            embeddedActivity: N,
            runningGame: g,
            connectingGameId: z,
            setConnectingGameId: q,
            canStartAuthorization: W,
            hasAlreadyLinked: F,
            didStartAuthorization: X,
            gameCommunityGuildId: ei,
        }),
        eo = null != _ && ((m && 0 === es) || 1 === es) ? _ : null,
        ed = s.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, l.jsx)(t3, {
                    isStreaming: G,
                    application: e,
                    game: t,
                    onClickNotSharing: () => k(!0),
                    isForceShowSharingPopout: w,
                    setIsForceShowSharingPopout: k,
                    ref: o,
                    popoutTargetRef: a,
                    isCurrentlyRunningGame: i,
                });
            },
            [w, G],
        ),
        eu = s.useMemo(
            () =>
                null != g && (L || W) && (!G || b?.pid != null)
                    ? ed(R, g, { isGameRunning: !0 })
                    : null != N && null != R && tY(R, O, N)
                      ? (0, l.jsx)(no, {
                            application: R,
                            embeddedActivity: N,
                            channel: C,
                            channelName: D,
                            guildForConnectedChannel: x,
                            isForceShowSharingPopout: w,
                            setIsForceShowSharingPopout: k,
                            accountLinkUpsellTargetRef: o,
                            activityPopoutTargetRef: a,
                            isActivityPopoutOpen: V,
                        })
                      : null != T &&
                          null != R &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: R, frame: T })
                        ? (0, l.jsx)(nd, {
                              application: R,
                              accountLinkUpsellTargetRef: o,
                              frame: T,
                              isActivityPopoutOpen: V,
                          })
                        : G
                          ? (0, l.jsx)(nc, {
                                streamMetadata: b,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: P,
                            })
                          : $ && null != eo
                            ? ed(R, eo, { isGameRunning: !1 })
                            : null,
            [b, O, $, R, L, W, D, C, N, T, x, V, w, G, eo, ed, g, P],
        );
    return null == eu
        ? null
        : (0, l.jsx)("div", {
              className: r()(ne.nd, i),
              ref: a,
              children: (0, l.jsxs)("div", {
                  className: ne.rf,
                  children: [
                      eu,
                      (0, l.jsx)(tz, {
                          stream: I,
                          canGoLive: L,
                          guildId: t,
                          isStreaming: G,
                          channel: C,
                          canStream: y,
                          runningGame: g,
                          activity: O,
                          application: R,
                          embeddedActivity: N,
                          frame: T,
                          analyticsContext: n,
                          inviteButtonRef: d,
                          accountLinkButtonRef: Z,
                          canStartAuthorization: W,
                          startAuthorization: Q,
                          hasAlreadyLinked: F,
                          connectionApp: K,
                      }),
                      (0, l.jsx)(na, {
                          popover: es,
                          dismissPopover: er,
                          application: R,
                          connectionApp: K,
                          activity: O,
                          runningGame: g,
                          hasAlreadyLinked: F,
                          didStartAuthorization: X,
                          startAuthorization: Q,
                          accountLinkUpsellTargetRef: o,
                          inviteButtonRef: d,
                          accountLinkButtonRef: Z,
                          gameCommunityGuildId: ei,
                          parentAnalyticsLocation: B,
                          analyticsLocations: H,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
