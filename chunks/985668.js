n.d(t, { A: () => n_ }), n(321073);
var i,
    a = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(284009),
    d = n.n(o),
    c = n(110259),
    _ = n(172218),
    E = n(17928),
    u = n(554146),
    A = n(116833),
    I = n(43105),
    T = n(939249),
    h = n(403581),
    S = n(228366),
    N = n(298990),
    f = n(367513),
    p = n(951001),
    m = n(492684),
    O = n(707606),
    C = n(475743),
    R = n(646865),
    g = n(795816),
    L = n(933958),
    D = n(379848),
    b = n(832248),
    M = n(201805),
    P = n(253932),
    U = n(904481),
    v = n(461213),
    y = n(954571),
    G = n(821609),
    w = n(652215),
    x = n(834730),
    V = n(133171),
    B = n(243721),
    F = n(315710),
    k = n(404778),
    H = n(331322),
    j = n(534514),
    Y = n(922016),
    W = n(827827),
    K = n(481045),
    $ = n(395277),
    Z = n(985018),
    q = n(982375);
function Q(e) {
    let { closePopout: t } = e;
    return (0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: q.K2,
        children: (0, a.jsx)(G.$, {
            variant: "primary",
            size: "sm",
            text: Z.intl.string($.default.Poezn1),
            onClick: () => {
                t(), (0, W.A)({ nextStatus: w.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function z(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, E.bG)([v.A], () => v.A.getStatus());
    return (0, a.jsxs)("div", {
        className: q.E3,
        children: [
            (0, a.jsxs)("div", {
                className: q.fu,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: Z.intl.string($.default.WhdCGP),
                    }),
                    n &&
                        (0, a.jsxs)("div", {
                            className: q.$v,
                            children: [
                                (0, a.jsx)(V.nW, { status: w.clD.ONLINE, size: 8 }),
                                (0, a.jsx)(x.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === w.clD.INVISIBLE
                                            ? Z.intl.string($.default.a3AofS)
                                            : Z.intl.string(Z.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)(B.d, {
                onChange: (e) => {
                    P.tz.updateSetting(e), n && (0, W.A)({ nextStatus: e ? w.clD.ONLINE : w.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function X(e) {
    let { children: t } = e,
        n = (0, r.useRef)(null);
    return (
        (0, F.t)(n),
        (0, a.jsx)("div", { className: q.iE, ref: n, children: (0, a.jsx)("div", { className: q.Qs, children: t }) })
    );
}
function J(e) {
    let { closePopout: t } = e,
        n = P.tz.useSetting();
    return (0, a.jsxs)(X, {
        children: [
            (0, a.jsx)(z, { showCurrentGame: n }),
            (0, a.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: Z.intl.string($.default["7cfFob"]),
            }),
            (0, a.jsx)(k.c, { className: q.yF }),
            (0, a.jsx)(K.qA, { onClosePopout: t }),
        ],
    });
}
function ee(e) {
    let { closePopout: t } = e;
    return (0, a.jsxs)(X, {
        children: [
            (0, a.jsxs)(H.B, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, a.jsx)(j.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: q._M,
                        children: Z.intl.string($.default["5YsmGI"]),
                    }),
                    (0, a.jsxs)("div", {
                        className: q.$v,
                        children: [
                            (0, a.jsx)(V.nW, { status: w.clD.ONLINE, size: 8 }),
                            (0, a.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: Z.intl.string($.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: Z.intl.string($.default.Yl0mh4),
            }),
            (0, a.jsx)(Q, { closePopout: t }),
        ],
    });
}
function et(e) {
    let { closePopout: t } = e,
        n = P.tz.useSetting();
    return (0, a.jsxs)(X, {
        children: [
            (0, a.jsx)(z, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, a.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: Z.intl.string($.default["7cfFob"]),
            }),
            (0, a.jsx)(k.c, { className: q.yF }),
            (0, a.jsx)(K.qA, { onClosePopout: t }),
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
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: s, children: l } = e,
        [o, d] = (0, r.useState)(n),
        c = (0, r.useRef)(null),
        _ = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: Z.intl.string($.default.vxVbGP),
                        body: [Z.intl.string($.default["7cfFob"])],
                        action: {
                            text: Z.intl.string($.default.k4tCg2),
                            onClick: () => {
                                P.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: Z.intl.string(Z.t["ZrN+DT"]), onClick: K.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: Z.intl.string($.default.qKDqet),
                        body: [Z.intl.string($.default.Yl0mh4)],
                        action: {
                            text: Z.intl.string($.default.Poezn1),
                            onClick: () => {
                                (0, W.A)({ nextStatus: w.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: Z.intl.string($.default["6cA8HZ"]),
                        body: [Z.intl.string($.default["7cfFob"])],
                        action: {
                            text: Z.intl.string($.default.k4tCg2),
                            onClick: () => {
                                P.tz.updateSetting(!0), (0, W.A)({ nextStatus: w.clD.ONLINE });
                            },
                        },
                        textLink: { text: Z.intl.string(Z.t["ZrN+DT"]), onClick: K.L7 },
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
        })(o),
        E = (0, r.useRef)(t);
    if (
        ((0, r.useEffect)(() => {
            t && !E.current && d(n), t !== E.current && (E.current = t);
        }, [n, t]),
        null == _ || !t)
    )
        return l;
    if ("popover" === _.type) {
        let { action: e, title: t, body: n, textLink: r } = _;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(I.A, {
                    targetElementRef: s,
                    shouldShow: !0,
                    position: "top",
                    align: "center",
                    onRequestClose: i,
                    title: t,
                    body: n,
                    textLink: r,
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
                l,
            ],
        });
    }
    let { children: u } = _;
    return (0, a.jsx)(Y.Y, {
        targetElementRef: c,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(u, { closePopout: t });
        },
        onRequestClose: i,
        children: () => (0, a.jsx)(T.D, { innerRef: c, onClick: i, children: l }),
    });
}
var ea = n(49999);
let er = (e) => {
    let {
            children: t,
            isForceShowSharingPopout: n,
            setIsForceShowSharingPopout: i,
            popoutTargetRef: s,
            hidePopout: l = !1,
        } = e,
        o = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, M.c9)(),
                a = P.tz.useSetting(),
                r = (0, U.G)(),
                s = (0, E.bG)([v.A], () => v.A.getStatus()),
                { isOpen: l } = (0, b.A)();
            if (((n && i) || t) && !r && !l && !__OVERLAY__) {
                if (!a && s === w.clD.INVISIBLE) return t ? en.ActivityAndStatus : en.ActivityAndStatusNux;
                if (!a) return t ? en.Activity : en.ActivityNux;
                if (s === w.clD.INVISIBLE) return t ? en.Status : en.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, r.useEffect)(() => {
        n && y.default.track(w.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let d = n || l ? [] : [u.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, a.jsx)(D.Ay, {
        contentTypes: d,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: l } = e,
                d = r === u.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, a.jsx)(ei, {
                showPopout: d,
                popoutState: o,
                handleClose: () => {
                    l(ea.i.USER_DISMISS), i(!1);
                },
                popoutTargetRef: s,
                children: t,
            });
        },
    });
};
var es = n(688810),
    el = n(139286),
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
var e_ = n(941314),
    eE = n(46225),
    eu = n(627363),
    eA = n(429913),
    eI = n(568598),
    eT = n(384059),
    eh = n(47167),
    eS = n(404374),
    eN = n(932001),
    ef = n(625180),
    ep = n(91242),
    em = n(686956);
function eO(e) {
    let { targetElementRef: t, gameId: n, gameName: i, gameCommunityGuildId: s, markAsDismissed: l } = e,
        { analyticsLocations: o } = (0, es.Ay)();
    return (
        r.useEffect(() => {
            y.default.track(w.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: o, application_id: n, guild_id: s });
        }, [n, s, o]),
        (0, a.jsx)(I.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                y.default.track(w.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: o,
                    application_id: n,
                    guild_id: s,
                }),
                    l(ea.i.USER_DISMISS);
            },
            title: Z.intl.formatToPlainString(Z.t.ry9SJw, { gameName: i }),
            body: Z.intl.string(Z.t.YPpOov),
            actions: [
                {
                    text: Z.intl.string(Z.t.RVfNGU),
                    onClick: () => {
                        y.default.track(w.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: s,
                        }),
                            l(ea.i.TAKE_ACTION),
                            em.A.joinGuild(s, { source: w.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
let eC = (0, eo.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eR = n(328153);
let eg = eR.Ay.getRunningGames(),
    eL = [];
class eD extends E.Ay.Store {
    initialize() {
        this.syncWith([eR.Ay], () =>
            (function () {
                let e = eR.Ay.getRunningGames();
                if (eg === e) return !1;
                let t = eg.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((eg = e), 0 === t.length)) return !1;
                eL = [...eL, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return eL;
    }
    getLastPreviouslyRunningGame() {
        return eL[eL.length - 1] ?? null;
    }
}
let eb = new eD(S.h, {});
var eM = n(137177);
let eP = { gameUpsellsDismissal: {} },
    eU = { ...eP };
class ev extends E.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
        eU = e ?? eU;
    }
    getState() {
        return eU;
    }
    getGameUpsellDismissal(e, t) {
        return eU.gameUpsellsDismissal[t]?.[e] ?? null;
    }
}
let ey = new ev(S.h, {
    LOGOUT: function () {
        eU = { ...eP };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationId: t, dismissedAt: n, dismissibleContent: i } = e,
            a = eU.gameUpsellsDismissal[i]?.[t],
            r = null != a ? a.timesDismissed + 1 : 1;
        eU = {
            gameUpsellsDismissal: {
                ...eU.gameUpsellsDismissal,
                [i]: { ...eU.gameUpsellsDismissal[i], [t]: { dismissedAt: n, timesDismissed: r } },
            },
        };
    },
});
var eG = n(279250),
    ew = n(880144),
    ex = n(277680),
    eV = n(118277),
    eB = n(905552),
    eF = n(95035),
    ek = n(716965),
    eH = n(567249),
    ej = n(929921),
    eY = n(650338),
    eW = n(753070),
    eK = n(194368);
function e$(e) {
    let { className: t, color: n, ...i } = e;
    return (0, a.jsx)(x.E, { className: l()({ [eK.Q]: null == n }, t), color: n, ...i });
}
var eZ = n(95701),
    eq = n(616356),
    eQ = n(495544),
    ez = n(734057),
    eX = n(184989),
    eJ = n(71393),
    e0 = n(51760),
    e1 = n(576705),
    e2 = n(290863),
    e3 = n(994500),
    e4 = n(309010),
    e5 = n(287809),
    e6 = n(157257),
    e8 = n(975571),
    e7 = n(723702);
let e9 = (0, eo.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var te = n(994314),
    tt = n(485599),
    tn = n(141628),
    ti = n(192308),
    ta = n(959988),
    tr = n(183623),
    ts = n(241541),
    tl = n(70688),
    to = n(687966),
    td = n(34188),
    tc = n(942857),
    t_ = n(833349),
    tE = n(869003),
    tu = n(521588),
    tA = n(702841),
    tI = n(475358),
    tT = n(176781),
    th = n(442433),
    tS = n(42473),
    tN = n(186111),
    tf = n(532624),
    tp = n(350535),
    tm = n(274372),
    tO = n(572164),
    tC = n(399925),
    tR = n(646693);
function tg(e) {
    (0, th.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 562733));
        return (t) => (0, a.jsx)(e, { ...t });
    });
}
let tL = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [i, s] = r.useState(!1),
            l = r.useCallback(() => s(!1), []);
        return (0, a.jsx)(I.A, {
            shouldShow: i,
            targetElementRef: n,
            position: "top",
            title: Z.intl.format(Z.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, a.jsx)("span", {
                        className: tR.E,
                        children: (0, a.jsx)(tI.e, { className: tR.d, shortcut: t }),
                    }),
            }),
            body: Z.intl.format(Z.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
            caretConfig: { align: "center" },
            onRequestClose: l,
        });
    },
    tD = () => {
        let e = r.useRef(null),
            { parentAnalyticsLocation: t } = (0, es.Ay)(),
            n = (0, tA.bG)([tN.A], () => tN.A.hasLayers()),
            i = (0, tO.Et)(),
            s = (0, tA.bG)([tm.A], () => tm.A.getIsAtMaxSaveClipOperations()),
            l = (0, tA.bG)([tf.Ay], () => tf.Ay.getKeybindForAction(w.hCu.SAVE_CLIP));
        if (!i || null == l || n) return null;
        let o = tp.dI(l.shortcut, !0);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(tL, { keybindString: o, targetElementRef: e }),
                (0, a.jsx)(tS.A, {
                    ref: e,
                    disabled: s,
                    tooltipText:
                        null != l
                            ? Z.intl.formatToPlainString(Z.t.HIMcv1, { hotkey: tp.dI(l?.shortcut, !0) })
                            : Z.intl.string(Z.t.s52pju),
                    onClick: () => {
                        (0, tC.l0)(), (0, eT.X)(t, eT.O.CLIP);
                    },
                    onContextMenu: tg,
                    icon: tT.x,
                }),
            ],
        });
    };
var tb = n(338771),
    tM = n(212637),
    tP = n(397400),
    tU = n(488803);
let tv = (0, eo.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ty = n(823748),
    tG = n(522055),
    tw = n(576709);
function tx(e) {
    let { title: t, body: n, ctaText: i, runningGameId: r, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, E.bG)([tG.A], () => null != r && tG.A.getGlobalCatalogGame(r)?.can_market === !0, [r]);
    return (0, a.jsx)(I.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            d && null != r
                ? {
                      type: "dynamic",
                      component: A.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: r },
                      aspectRatio: "6/4",
                  }
                : {
                      type: "image",
                      src: "https://cdn.discordapp.com/assets/content/24bc847e3e4dae2b04997ce7374d99a3d11da678af3c9d7664bbff99ed1bfdb1.svg",
                      aspectRatio: "6/4",
                  },
        actions: [{ text: i, variant: "primary", onClick: l }],
        targetElementRef: s,
        shouldShow: !0,
        position: "top",
        onRequestClose: o,
    });
}
function tV(e) {
    let { gameName: t, ...n } = e;
    return (0, a.jsx)(tx, {
        title: Z.intl.formatToPlainString(tw.default.lKzVNu, { gameName: t }),
        body: Z.intl.string(tw.default.qqjm8O),
        ctaText: Z.intl.string(tw.default["eJg+Zm"]),
        ...n,
    });
}
function tB(e) {
    let { gameName: t, ...n } = e;
    return (0, a.jsx)(tx, {
        title: Z.intl.formatToPlainString(tw.default.lwwiHE, { gameName: t }),
        body: Z.intl.string(tw.default.B33GXN),
        ctaText: Z.intl.string(tw.default["968/QC"]),
        ...n,
    });
}
var tF = n(453774),
    tk = n(44724),
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
              t.type === w.$pd.PLAYING &&
              (0, t_.A)(t, w.jUm.JOIN))
    );
}
let t$ = r.memo(function (e) {
        let {
                stream: t,
                canGoLive: i,
                guildId: s,
                isStreaming: l,
                channel: o,
                canStream: c,
                runningGame: _,
                embeddedActivity: u,
                frame: A,
                activity: T,
                application: h,
                analyticsContext: S,
                inviteButtonRef: f,
                accountLinkButtonRef: p,
                startAuthorization: m,
                canStartAuthorization: O,
                hasAlreadyLinked: C,
                connectionApp: g,
            } = e,
            { parentAnalyticsLocation: L, analyticsLocations: D } = (0, es.Ay)(),
            b = (0, tF.A)(h?.id),
            M = tK(h, T, u),
            { enabled: P } = tv.useConfig({ location: "activity-panel" }),
            U = (0, ty.Bp)("activity-panel"),
            v = (0, tU.C$)(s ?? void 0, "activity-panel"),
            G = (0, E.bG)([tj.A], () => tj.A.hasConsented(w.YAq.PERSONALIZATION)),
            x = (0, ty.TF)(_?.id, { shouldFetch: U || v }),
            V = P && G && x,
            B = V && U,
            F = V && v,
            k = r.useCallback(() => {
                d()(null != T, "Received null activity"),
                    y.default.track(w.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: _?.id ?? null,
                        application_id: T.application_id,
                    }),
                    (0, eT.X)(L, eT.O.INVITE),
                    y.default.track(w.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: T.application_id,
                        location: S.location,
                    }),
                    (0, N.qf)(T, !1);
            }, [T, S, L, _]),
            H = r.useCallback(
                (e, t) => () => {
                    (0, eT.X)(L, eT.O.LEAVE_ACTIVITY),
                        tE.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [L],
            ),
            j = r.useCallback(
                (e) => () => {
                    (0, eT.X)(L, eT.O.LEAVE_ACTIVITY), ef.A.stopFrame({ applicationId: e });
                },
                [L],
            ),
            Y = r.useCallback(() => {
                (0, tb.A)(t);
            }, [t]),
            W = r.useCallback(() => {
                (0, ti.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("80848"),
                        n.e("17918"),
                        n.e("98552"),
                        n.e("86672"),
                        n.e("38601"),
                        n.e("36946"),
                        n.e("44727"),
                        n.e("6565"),
                        n.e("14304"),
                        n.e("82001"),
                    ]).then(n.bind(n, 266536));
                    return (t) =>
                        (0, a.jsx)(e, {
                            ...t,
                            sourcePID: _?.pid,
                            selectSource: null != e4.A.getVoiceChannelId(),
                            analyticsLocations: D,
                        });
                });
            }, [_, D]),
            K = h?.name ?? _?.name ?? "",
            $ = r.useCallback(() => {
                (0, tP.pK)({ gameApplicationId: _?.id, buttonVariant: "admin" }),
                    (0, ti.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("42209"), n.e("37084"), n.e("74132")]).then(
                            n.bind(n, 279871),
                        );
                        return (t) => (0, a.jsx)(e, { gameName: K, gameApplicationId: _?.id, ...t });
                    });
            }, [K, _?.id]),
            q = r.useCallback(() => {
                d()(null != s, "Received null guildId"),
                    (0, tP.pK)({ gameApplicationId: _?.id, buttonVariant: "member" }),
                    (0, tM.A)({ analyticsLocations: D, analyticsLocation: S.location, guildId: s });
            }, [s, D, S.location, _?.id]),
            Q = r.useRef(null),
            [z, X] = r.useState(!1);
        r.useEffect(
            () => () => {
                null != Q.current && clearTimeout(Q.current);
            },
            [],
        ),
            r.useEffect(() => {
                C && (X(!1), null != Q.current && (clearTimeout(Q.current), (Q.current = null)));
            }, [C]);
        let J =
                b?.guildId == null || null == h
                    ? null
                    : (0, a.jsx)(tQ, { guildId: b.guildId, applicationId: b.id, applicationName: b.name }),
            ee = B
                ? (0, a.jsx)(tq, {
                      tooltipText: Z.intl.formatToPlainString(tw.default.YhnUVO, { gameName: K }),
                      onClick: $,
                      onViewed: () => (0, tP.ET)({ gameApplicationId: _?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, a.jsx)(tV, {
                              gameName: K,
                              runningGameId: _?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  $(), n(ea.i.TAKE_ACTION), i(ea.i.TAKE_ACTION);
                              },
                              onClose: () => n(ea.i.USER_DISMISS),
                          });
                      },
                  })
                : F
                  ? (0, a.jsx)(tq, {
                        tooltipText: Z.intl.formatToPlainString(tw.default.lwwiHE, { gameName: K }),
                        onClick: q,
                        onViewed: () => (0, tP.ET)({ gameApplicationId: _?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, a.jsx)(tB, {
                                gameName: K,
                                runningGameId: _?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    q(), n(ea.i.TAKE_ACTION), i(ea.i.TAKE_ACTION);
                                },
                                onClose: () => n(ea.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            et = (function () {
                let e, t, n;
                if ((null == _ && null != u && !(0, R.f)()) || (!l && !i)) return null;
                let r = null;
                return (
                    l
                        ? ((e = !1),
                          (t = () => {
                              Y(), (0, eT.X)(L, eT.O.STREAM, !1);
                          }),
                          (n = ta.G),
                          (r = Z.intl.string(Z.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                W(), (0, eT.X)(L, eT.O.STREAM, !0);
                            }),
                            (n = tr.F),
                            (r =
                                null != _
                                    ? Z.intl.formatToPlainString(Z.t.AB5gTy, { game: _.name })
                                    : Z.intl.string(Z.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = tr.F),
                            null != o && (0, eZ.gV)(o.type) && (r = Z.intl.string(Z.t.uQn9B8))),
                    (0, a.jsx)("div", {
                        className: tW.IF,
                        children: (0, a.jsx)(tS.A, { tooltipText: r, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                M && null == u
                    ? (0, a.jsx)(tS.A, { ref: f, tooltipText: Z.intl.string(Z.t["hC/Zey"]), onClick: k, icon: ts.D })
                    : null,
            ei =
                null == u
                    ? null
                    : (0, a.jsx)(tS.A, {
                          tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                          onClick: H(u.applicationId, u.location),
                          icon: tl.o,
                      }),
            er =
                null == A
                    ? null
                    : (0, a.jsx)(tS.A, {
                          tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                          onClick: j(A.applicationId),
                          icon: tl.o,
                      }),
            el = null == t ? null : (0, a.jsx)(tD, {}),
            eo =
                !O || C
                    ? null
                    : (0, a.jsx)(tZ, {
                          runningGame: _,
                          startAuthorization: () => {
                              m({ analyticsLocations: D }) === tY._.RPC &&
                                  (X(!0),
                                  null != Q.current && clearTimeout(Q.current),
                                  (Q.current = setTimeout(() => {
                                      X(!1);
                                  }, 9e4)));
                          },
                          connectionApp: g,
                          ref: p,
                      }),
            ed =
                !O || C
                    ? null
                    : (0, a.jsx)(I.A, {
                          title: Z.intl.string(Z.t.ULvRFd),
                          body: Z.intl.string(Z.t["HJJDr+"]),
                          targetElementRef: p,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: z,
                          onRequestClose: () => {
                              X(!1), null != Q.current && (clearTimeout(Q.current), (Q.current = null));
                          },
                      });
        return null == et && null == en && null == ei && null == er && null == eo && null == J && null == ee
            ? null
            : (0, a.jsxs)("div", { className: tW.o1, children: [J ?? eo ?? en, ee, et, ei ?? er ?? el, ed] });
    }),
    tZ = r.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: r } = e;
        return (0, a.jsx)(tS.A, {
            ref: t,
            onClick: () => {
                y.default.track(w.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: r?.id ?? null,
                }),
                    i();
            },
            icon: tn.A,
            tooltipText: Z.intl.string(Z.t.sbdnpw),
        });
    });
function tq(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: s } = e,
        l = r.useRef(null),
        o = r.useRef(!1);
    r.useEffect(() => {
        o.current || ((o.current = !0), i());
    }, [i]);
    let d = (0, tc.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: _ } = (0, M.c9)(),
        [E, A] = (0, eN.kn)(!d && c && _ ? [u.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [I, T] = (0, eN.kn)([u.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        h = r.useCallback(() => {
            A(ea.i.TAKE_ACTION), T(ea.i.TAKE_ACTION), n();
        }, [A, T, n]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: tW.IF,
                children: [
                    (0, a.jsx)("div", { className: tW.uD, children: (0, a.jsx)("div", { className: tW.Z9 }) }),
                    (0, a.jsx)(tS.A, { ref: l, tooltipText: t, onClick: h, icon: to._ }),
                    I === u.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, a.jsx)(tu.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != E && s({ targetElementRef: l, markAsDismissed: A, markBadgeAsDismissed: T }),
        ],
    });
}
function tQ(e) {
    let { applicationId: t, guildId: n, applicationName: i } = e,
        s = r.useRef(null);
    r.useEffect(() => {
        y.default.track(w.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [l, o] = (0, eN.kn)([u.M.GAME_SHOP_RTC_POPOVER], ea.m.ACCOUNT_NAME_ZONE, !0),
        d = r.useCallback(() => {
            (0, tk.X)({ guildId: n });
        }, [n]),
        c = r.useCallback(() => {
            (0, tk.default)({ guildId: n }), o(ea.i.USER_DISMISS);
        }, [n, o]),
        _ = r.useCallback(() => {
            y.default.track(w.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), c();
        }, [t, c]),
        E = r.useCallback(() => {
            o(ea.i.USER_DISMISS);
        }, [o]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tS.A, {
                tooltipText: Z.intl.string(Z.t.vyaWs7),
                onClick: _,
                onMouseDown: d,
                icon: td.U,
                ref: s,
            }),
            l === u.M.GAME_SHOP_RTC_POPOVER
                ? (0, a.jsx)(tH.A, {
                      onActionClick: c,
                      onRequestClose: E,
                      targetElementRef: s,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                      title: Z.intl.formatToPlainString(Z.t.N6ZkPd, { applicationName: i }),
                      body: Z.intl.formatToPlainString(Z.t.V3jyQq, { applicationName: i }),
                  })
                : null,
        ],
    });
}
var tz = n(428689),
    tX = n(673294);
function tJ(e) {
    let { onClick: t } = e;
    return (0, a.jsx)(T.D, {
        className: tX.kL,
        onClick: t,
        children: (0, a.jsx)(x.E, {
            className: tX.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: Z.intl.string(Z.t.jfrLLb),
        }),
    });
}
function t0(e) {
    let { onClick: t } = e,
        n = P.tz.useSetting(),
        i = (0, E.bG)([v.A], () => v.A.getStatus());
    return __OVERLAY__ || (n && i !== w.clD.INVISIBLE) ? null : (0, a.jsx)(tJ, { onClick: t });
}
var t1 = n(409626),
    t2 = n(692969),
    t3 = n(379414);
function t4(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t2.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t1.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, a.jsx)(T.D, {
        onClick: i,
        className: l()(null != i && t3.On),
        children: (0, a.jsx)(tt.A, { className: t3.mO, children: t }),
    });
}
function t5(e) {
    let t,
        n,
        {
            isStreaming: i,
            application: s,
            game: l,
            onClickNotSharing: o,
            isForceShowSharingPopout: d,
            setIsForceShowSharingPopout: c,
            ref: _,
            popoutTargetRef: u,
            isCurrentlyRunningGame: A,
        } = e,
        I = null != s ? s.name : null != l ? l.name : Z.intl.string(Z.t["UQMV/E"]);
    return (
        (t = P.tz.useSetting()),
        (n = (0, E.bG)([v.A], () => v.A.getStatus())),
        (0, r.useEffect)(() => {
            y.default.track(w.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === w.clD.INVISIBLE,
            });
        }, [t, n]),
        (0, a.jsxs)("div", {
            className: t3.cm,
            children: [
                (0, a.jsxs)("div", {
                    className: t3.f9,
                    children: [
                        (0, a.jsx)(eM.A, { className: t3.Gt, game: s, pid: l?.pid, ref: _ }),
                        i ? (0, a.jsx)(tz.n, { size: "md", color: "currentColor", className: t3.it }) : null,
                    ],
                }),
                (0, a.jsx)(er, {
                    popoutTargetRef: u,
                    isForceShowSharingPopout: d,
                    setIsForceShowSharingPopout: c,
                    hidePopout: !A,
                    children: (0, a.jsxs)("div", {
                        className: t3.pq,
                        children: [
                            null != I ? (0, a.jsx)(t4, { name: I, applicationId: s?.id }) : null,
                            A
                                ? (0, a.jsx)(t0, { onClick: o })
                                : (0, a.jsx)(x.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: Z.intl.string(Z.t.W4N1ru),
                                  }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var t6 = n(5867),
    t8 = n(165610);
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
var t9 = n(911070),
    ne = n(490696),
    nt = n(268920),
    nn = n(633217);
function ni(e) {
    let t,
        n,
        {
            application: i,
            connectionApp: r,
            isEligibleForIncentivizedAccountLinking: s,
            incentivizedAccountLinkingDisplayedApp: l,
            markAccountLinkingUpsellAsDismissed: o,
            startAuthorization: d,
            analyticsLocations: _,
            accountLinkButtonRef: E,
        } = e,
        u = e9.useConfig({ location: "ActivityPanelGameCard" }),
        { defaultBody: T } = e_.A.useConfig({ location: "ActivityPanelGameCard" }),
        h = s ? l : i,
        S = null == h;
    if (
        ((0, el.A)(
            {
                type: c.ImpressionTypes.POPOUT,
                name: c.ImpressionNames.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                properties: {
                    application_id: i?.id,
                    parent_application_id: r?.parentId,
                    type: s ? "incentivized" : "default",
                },
            },
            { disableTrack: S },
        ),
        S)
    )
        return null;
    let N = Z.intl.formatToPlainString(u.altTitle ? Z.t.hUbQT2 : Z.t["lo6H6+"], { gameName: h.name }),
        f = Z.intl.string(T ?? (u.altBody ? Z.t["JKqu+4"] : Z.t.qYAzOp)),
        p = Z.intl.string(u.altCta ? Z.t.jynBQ5 : Z.t.lw71Nf);
    s && (p = Z.intl.string(t9.default["2cOIOr"]));
    let m = [
        {
            text: p,
            onClick: () => {
                o(ea.i.TAKE_ACTION), d({ analyticsLocations: _ });
            },
        },
    ];
    return (
        s &&
            ((t = "beta"),
            (N = Z.intl.formatToPlainString(t9.default.dPuaZE, { applicationName: h.name })),
            (f = Z.intl.string(t9.default.jR3bbS)),
            (n = {
                text: Z.intl.string(Z.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, a.jsx)(I.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: A.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: h, isIncentivizedAccountLinking: s },
            },
            badge: t,
            title: N,
            body: f,
            textLink: n,
            targetElementRef: E,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(ea.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: m,
        })
    );
}
function na(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: r } = e,
        s = Z.intl.string(Z.t.MxAlrB),
        l = Z.intl.string(Z.t["/UTTEg"]),
        o = [
            {
                text: Z.intl.string(Z.t.aRIFWD),
                onClick: () => {
                    i(ea.i.TAKE_ACTION), window.open(e8.A.getArticleURL(w.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((s = Z.intl.string(t9.default.ublzTG)),
            (l = Z.intl.string(t9.default.JgM2xu)),
            (t = { type: "video", src: nn.A, fallbackImageSrc: nt.A, aspectRatio: "2/1", loop: !0 })),
        (0, a.jsx)(I.A, {
            graphic: t,
            title: s,
            body: l,
            targetElementRef: r,
            position: "top",
            align: "left",
            caretConfig: { align: "start" },
            actions: o,
            shouldShow: !0,
            onRequestClose: () => i(ea.i.USER_DISMISS),
        })
    );
}
function nr(e) {
    let {
        activity: t,
        game: n,
        markAsDismissed: i,
        inviteButtonRef: r,
        parentAnalyticsLocation: s,
        analyticsContext: l,
    } = e;
    return (0, a.jsx)(I.A, {
        title: Z.intl.string(Z.t["0l2pEt"]),
        body: Z.intl.string(Z.t["DSZUK/"]),
        targetElementRef: r,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(ea.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: Z.intl.string(Z.t.YdkBCH),
                onClick: () => {
                    i(ea.i.TAKE_ACTION),
                        d()(null != t, "Received null activity"),
                        y.default.track(w.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, eT.X)(s, eT.O.INVITE),
                        y.default.track(w.HAw.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: t.application_id,
                            location: l.location,
                        }),
                        (0, N.qf)(t, !1);
                },
            },
        ],
    });
}
function ns(e) {
    let {
            popover: t,
            dismissPopover: n,
            application: i,
            connectionApp: s,
            activity: l,
            runningGame: o,
            hasAlreadyLinked: c,
            didStartAuthorization: _,
            startAuthorization: E,
            accountLinkUpsellTargetRef: u,
            inviteButtonRef: A,
            accountLinkButtonRef: I,
            gameCommunityGuildId: T,
            parentAnalyticsLocation: h,
            analyticsLocations: S,
            analyticsContext: N,
        } = e,
        { isEligible: f, displayedApp: p } = (function (e) {
            let { connectionApp: t } = e,
                { enabled: n } = e_.A.useConfig({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, eu.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && tY.Y.has(t.id), displayedApp: i };
        })({ connectionApp: s }),
        { rewarded: m } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: a } = e,
                [s, l] = r.useState(!1);
            return (
                r.useEffect(() => {
                    if (!t || !n || !i || s || null == a) return;
                    let e = !1;
                    return (
                        (0, ek.RI)({
                            applicationId: a.id,
                            onSuccess: () => {
                                e || l(!0);
                            },
                            onError: () => {},
                        }),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, i, s, a]),
                { rewarded: s }
            );
        })({ isEligible: f, hasAlreadyLinked: c, didStartAuthorization: _, application: s });
    switch (t) {
        case 0:
            return (0, a.jsx)(ni, {
                application: i,
                connectionApp: s,
                isEligibleForIncentivizedAccountLinking: f,
                incentivizedAccountLinkingDisplayedApp: p,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: E,
                analyticsLocations: S,
                accountLinkButtonRef: I,
            });
        case 1:
            return (0, a.jsx)(na, {
                incentivizedAccountLinkingRewarded: m,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: u,
            });
        case 2:
            return (0, a.jsx)(nr, {
                activity: l,
                game: o,
                markAsDismissed: n,
                inviteButtonRef: A,
                parentAnalyticsLocation: h,
                analyticsContext: N,
            });
        case 3:
            return (
                d()(o?.id != null && o?.name != null && null != T, "Game community upsell requires these as non null"),
                (0, a.jsx)(eO, {
                    targetElementRef: u,
                    gameId: o.id,
                    gameName: o.name,
                    gameCommunityGuildId: T,
                    markAsDismissed: n,
                })
            );
        default:
            return null;
    }
}
let nl = (0, m.A)(function (e) {
    let { message: t } = e;
    return (0, a.jsx)(te.A, { children: t });
});
function no(e) {
    let t,
        {
            application: n,
            embeddedActivity: i,
            channel: r,
            channelName: s,
            guildForConnectedChannel: l,
            isForceShowSharingPopout: o,
            setIsForceShowSharingPopout: c,
            accountLinkUpsellTargetRef: _,
            activityPopoutTargetRef: E,
            isActivityPopoutOpen: u,
        } = e,
        A = { start: i.connectedSince },
        I = s;
    null != l && null != r
        ? ((t = w.BVt.CHANNEL(l.id, r.id)), (I = `${I} / ${l.name}`))
        : null != r && (t = w.BVt.CHANNEL(w.ME, r.id));
    let T = () => {
            d()(null != r, "Channel cannot be null during navigation click"),
                p.A.channelListScrollTo(r.guild_id ?? w.ME, r.id),
                !u &&
                    ((0, eZ.gV)(r.type) &&
                        f.A.selectParticipant(
                            r.id,
                            (0, eI.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                        ),
                    (0, eZ.pQ)(r.type) && (0, g.gk)(t6.Gd.PANEL));
        },
        h = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(eM.A, { className: ne.Gt, game: n, size: eM.M.SMALL, ref: _ }),
                (0, a.jsx)(er, {
                    popoutTargetRef: E,
                    isForceShowSharingPopout: o,
                    setIsForceShowSharingPopout: c,
                    children: (0, a.jsxs)("div", {
                        className: ne.pq,
                        children: [
                            (0, a.jsx)(eF.A, {
                                href: t,
                                onClick: () => {
                                    T(), u && S.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                },
                                children: (0, a.jsx)(tt.A, { className: ne._W, children: n.name }),
                            }),
                            null != r && (0, eZ.pQ)(r.type)
                                ? (0, a.jsx)(eF.A, {
                                      href: t,
                                      onClick: T,
                                      children: (0, a.jsx)(te.A, { className: ne.Ix, children: I }),
                                  })
                                : (0, a.jsx)(nl, { timestamps: A }),
                        ],
                    }),
                }),
            ],
        });
    return (0, a.jsx)("div", { className: ne.cm, children: h });
}
function nd(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = r.useMemo(() => ({ start: t.connectedSince }), [t.connectedSince]),
        o = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(eM.A, { className: ne.Gt, game: n, size: eM.M.SMALL, ref: i }),
                (0, a.jsxs)("div", {
                    className: ne.pq,
                    children: [
                        (0, a.jsx)(T.D, {
                            onClick: () => {
                                s
                                    ? S.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : ef.A.updateFrameLayoutMode({
                                          applicationId: t.applicationId,
                                          layoutMode: t8.y.FOCUSED,
                                      });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: ne.rB,
                            children: (0, a.jsx)(tt.A, { className: ne._W, children: n.name }),
                        }),
                        (0, a.jsx)(nl, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, a.jsx)("div", { className: ne.cm, children: o });
}
function nc(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: r, sanitizedTitle: s } = (0, ex.A)(t);
    return (0, a.jsxs)("div", {
        className: ne.cm,
        ref: n,
        children: [
            (0, a.jsx)(eV.A, { title: s, icon: t?.sourceIcon }),
            (0, a.jsxs)("div", {
                className: ne.pq,
                children: [
                    (0, a.jsx)(tt.A, { children: r }),
                    null != i &&
                        (0, a.jsxs)("div", {
                            className: ne.qi,
                            children: [
                                (0, a.jsx)(h.t, { size: "xxs", color: eS.k0.PREMIUM_TIER_2 }),
                                (0, a.jsx)(e$, { className: ne.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let n_ = (0, O.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = r.useRef(null),
        o = r.useRef(null),
        d = r.useRef(null),
        c = (0, E.bG)([eQ.default], () => eQ.default.getId()),
        A = (0, E.bG)([eR.Ay, e6.A], () => (0, eB.A)(eR.Ay, e6.A)),
        { previouslyRunningGame: I, isWithinThreshold: T } = (function () {
            let [e, t] = (0, r.useState)(Date.now()),
                n = (0, E.bG)([eb], () => eb.getLastPreviouslyRunningGame()),
                { allowAccountLinkingUpsellPostGameClose: i, timeToShowUpsellPostGameCloseMs: a } = ec.useConfig({
                    location: "ActivityPanelGameCard",
                });
            if (
                ((0, r.useEffect)(() => {
                    if (null == n || !i || Date.now() - n.endedAt >= a) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + a - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [i, n, a]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let s = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i && s < a };
        })(),
        h = (0, E.bG)([e4.A, ez.A], () => ez.A.getChannel(e4.A.getVoiceChannelId())),
        N = (0, E.bG)([L.Ay], () => L.Ay.getConnectedActivityChannelId()),
        f = (0, E.bG)([ez.A], () => ez.A.getChannel(N)),
        p = (0, E.bG)([eJ.A], () => eJ.A.getGuild(f?.guild_id)),
        [m, O] = (0, E.yK)([eq.A], () => [eq.A.getCurrentUserActiveStream(), eq.A.getStreamerActiveStreamMetadata()]),
        R = (0, E.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
        g = (0, E.bG)([ep.A], () => ep.A.getConnectedFrame()),
        D = (0, E.bG)([eJ.A, e1.A], () => null == h || eG.vz(h, eJ.A, e1.A, !1)),
        [b] = (0, eA.A)([
            (function () {
                if (null != O && null != O.id) return O.id;
                if (null != A && null != A.id) return A.id;
                if (null != R) return R.applicationId;
                if (null != g) return g.applicationId;
                if (null != I && null != I.id) return I.id;
            })(),
        ]),
        P =
            ((0, E.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
            (0, E.bG)([e0.Ay], () => (0, ew.A)(e0.Ay) && (0, e7.isWindows)()) || !1),
        U = (0, E.bG)([e2.A], () => (null != c ? e2.A.findActivity(c, (e) => e.type === w.$pd.PLAYING) : null)),
        v = null != m && m.ownerId === c && m.state !== w.XYD.ENDED,
        G = (0, E.bG)([e5.default, e3.A], () => (null != f ? (0, eh.m1)(f, e5.default, e3.A) : void 0)),
        x = (function () {
            let { resolution: e, fps: t } = (0, E.cf)([ej.A], () => ej.A.getState());
            if (e !== eW.on.RESOLUTION_720 || t === eW.kn.FPS_60) return `${(0, eW.zr)(e)} ${(0, eY.Bs)(t)}`;
        })(),
        [V, B] = r.useState(!1),
        F = (0, E.bG)([eH.A], () => eH.A.getWindowOpen(w.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: k, analyticsLocations: H } = (0, es.Ay)(),
        {
            hasAlreadyLinked: j,
            canStartAuthorization: Y,
            connectionApp: W,
            startAuthorization: K,
        } = (0, eE.RD)(b, { allowedFlows: [tY._.RPC, tY._.WEB] }),
        [$, Z] = r.useState(null),
        q = null != $,
        Q = r.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Z(b?.id ?? null), K(...t);
            },
            [b?.id, K],
        ),
        z = (0, C.A)(b?.id);
    r.useEffect(() => {
        null != b && z !== b?.id && Z(null);
    }, [b, z]);
    let X = (0, _.K)((e) => {
            e &&
                null != W &&
                y.default.track(w.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: A?.id ?? null, application_id: W.id });
        }),
        { allowAccountLinkingUpsellPostGameClose: J } = ec.useConfig({ location: "ActivityPanelGameCard" }),
        { enabled: ee } = eC.useConfig({ location: "ActivityPanelGameCard" }),
        et = r.useMemo(() => (A?.id != null ? t7[A.id] : void 0), [A?.id]),
        en = (0, E.bG)([eX.A], () => null != et && eX.A.isMember(et), [et]),
        ei = ee && null != et && !en ? et : void 0,
        [er, el] = (function (e) {
            let {
                    application: t,
                    activity: n,
                    embeddedActivity: i,
                    runningGame: a,
                    connectingGameId: s,
                    setConnectingGameId: l,
                    canStartAuthorization: o,
                    hasAlreadyLinked: d,
                    didStartAuthorization: c,
                    gameCommunityGuildId: _,
                } = e,
                { isQuestBarEmpty: A, hasLoadedQuestBar: I } = (0, M.c9)(),
                T = !I || !A,
                h = !T && !d && null == s && o && null != t,
                { shouldShow: N, markAsDismissed: f } = (function (e) {
                    let {
                            application: t,
                            disabled: n = !1,
                            dismissibleContent: i,
                            dismissibleContentGroupName: a,
                            bypassAutoDismiss: s = !1,
                        } = e,
                        l = (0, E.bG)([ey], () => (null != t ? ey.getGameUpsellDismissal(t.id, i) : null)),
                        [o, d] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        let e =
                                null != l
                                    ? l.dismissedAt + Math.min(864e5 * Math.pow(2, l.timesDismissed - 1), 24192e5)
                                    : 0,
                            t = 0,
                            n = () => {
                                d(Date.now() >= e);
                                let i = Math.min(e - Date.now(), w.mnr);
                                i > 0 && (t = setTimeout(n, i));
                            };
                        return n(), () => clearTimeout(t);
                    }, [l]);
                    let c = !n && null != t && o,
                        [_, u] = (0, eN.Wl)(c ? i : null, { cooldownDurationMs: 864e5 }, a, s);
                    return {
                        shouldShow: _ === i,
                        markAsDismissed: (e) => {
                            if (null != t) {
                                var n;
                                (n = t.id),
                                    S.h.dispatch({
                                        type: "GAME_UPSELL_DISMISS",
                                        applicationId: n,
                                        dismissedAt: Date.now(),
                                        dismissibleContent: i,
                                    }),
                                    u(e);
                            }
                        },
                    };
                })({
                    application: t,
                    disabled: !h,
                    dismissibleContent: u.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: ea.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                }),
                p = !T && null != s && d,
                m = r.useMemo(() => {
                    if (T || N) return [];
                    let e = [];
                    return (
                        d && c && tK(t, n, i) && null == i && e.push(u.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != _ && a?.id != null && a?.name != null && e.push(u.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, T, c, i, a?.id, a?.name, _, d, N]),
                [O, C] = (0, eN.kn)(m, ea.m.ACCOUNT_NAME_ZONE, !0);
            return r.useMemo(() => {
                if (null != O)
                    switch (O) {
                        case u.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    l(null), C(e);
                                },
                            ];
                        case u.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, C];
                        default:
                            return [null, C];
                    }
                return N ? [0, f] : p ? [1, () => l(null)] : [null, () => {}];
            }, [f, C, l, N, p, O]);
        })({
            application: b,
            activity: U,
            embeddedActivity: R,
            runningGame: A,
            connectingGameId: $,
            setConnectingGameId: Z,
            canStartAuthorization: Y,
            hasAlreadyLinked: j,
            didStartAuthorization: q,
            gameCommunityGuildId: ei,
        }),
        eo = null != I && ((T && 0 === er) || 1 === er) ? I : null,
        ed = r.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, a.jsx)(t5, {
                    isStreaming: v,
                    application: e,
                    game: t,
                    onClickNotSharing: () => B(!0),
                    isForceShowSharingPopout: V,
                    setIsForceShowSharingPopout: B,
                    ref: o,
                    popoutTargetRef: s,
                    isCurrentlyRunningGame: i,
                });
            },
            [V, v],
        ),
        e_ = r.useMemo(
            () =>
                null != A && (P || Y) && (!v || O?.pid != null)
                    ? ed(b, A, { isGameRunning: !0 })
                    : null != R && null != b && tK(b, U, R)
                      ? (0, a.jsx)(no, {
                            application: b,
                            embeddedActivity: R,
                            channel: f,
                            channelName: G,
                            guildForConnectedChannel: p,
                            isForceShowSharingPopout: V,
                            setIsForceShowSharingPopout: B,
                            accountLinkUpsellTargetRef: o,
                            activityPopoutTargetRef: s,
                            isActivityPopoutOpen: F,
                        })
                      : null != g &&
                          null != b &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: b, frame: g })
                        ? (0, a.jsx)(nd, {
                              application: b,
                              accountLinkUpsellTargetRef: o,
                              frame: g,
                              isActivityPopoutOpen: F,
                          })
                        : v
                          ? (0, a.jsx)(nc, {
                                streamMetadata: O,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: x,
                            })
                          : J && null != eo
                            ? ed(b, eo, { isGameRunning: !1 })
                            : null,
            [O, U, J, b, P, Y, G, f, R, g, p, F, V, v, eo, ed, A, x],
        );
    return null == e_
        ? null
        : (0, a.jsx)("div", {
              className: l()(ne.nd, i),
              ref: s,
              children: (0, a.jsxs)("div", {
                  className: ne.rf,
                  children: [
                      e_,
                      (0, a.jsx)(t$, {
                          stream: m,
                          canGoLive: P,
                          guildId: t,
                          isStreaming: v,
                          channel: f,
                          canStream: D,
                          runningGame: A,
                          activity: U,
                          application: b,
                          embeddedActivity: R,
                          frame: g,
                          analyticsContext: n,
                          inviteButtonRef: d,
                          accountLinkButtonRef: X,
                          canStartAuthorization: Y,
                          startAuthorization: Q,
                          hasAlreadyLinked: j,
                          connectionApp: W,
                      }),
                      (0, a.jsx)(ns, {
                          popover: er,
                          dismissPopover: el,
                          application: b,
                          connectionApp: W,
                          activity: U,
                          runningGame: A,
                          hasAlreadyLinked: j,
                          didStartAuthorization: q,
                          startAuthorization: Q,
                          accountLinkUpsellTargetRef: o,
                          inviteButtonRef: d,
                          accountLinkButtonRef: X,
                          gameCommunityGuildId: ei,
                          parentAnalyticsLocation: k,
                          analyticsLocations: H,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
