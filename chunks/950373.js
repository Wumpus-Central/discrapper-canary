"use strict";
n.d(t, { A: () => nc }), n(321073);
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
    h = n(554146),
    f = n(116833),
    p = n(43105),
    E = n(939249),
    m = n(403581),
    g = n(228366),
    A = n(298990),
    I = n(367513),
    T = n(951001),
    S = n(492684),
    y = n(707606),
    N = n(475743),
    v = n(646865),
    C = n(795816),
    R = n(933958),
    O = n(379848),
    b = n(832248),
    D = n(371912),
    L = n(885386),
    w = n(843010),
    M = n(461213),
    P = n(174459),
    x = n(821609),
    k = n(652215),
    U = n(834730),
    G = n(133171),
    F = n(243721),
    V = n(315710),
    B = n(404778),
    H = n(331322),
    j = n(534514),
    Y = n(922016),
    W = n(827827),
    K = n(481045),
    $ = n(395277),
    z = n(375708),
    q = n(982375);
function X(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: q.K2,
        children: (0, r.jsx)(x.$, {
            variant: "primary",
            size: "sm",
            text: z.intl.string($.default.Poezn1),
            onClick: () => {
                t(), (0, W.A)({ nextStatus: k.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function Z(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, _.bG)([M.A], () => M.A.getStatus());
    return (0, r.jsxs)("div", {
        className: q.E3,
        children: [
            (0, r.jsxs)("div", {
                className: q.fu,
                children: [
                    (0, r.jsx)(U.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: z.intl.string($.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: q.$v,
                            children: [
                                (0, r.jsx)(G.nW, { status: k.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(U.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === k.clD.INVISIBLE
                                            ? z.intl.string($.default.a3AofS)
                                            : z.intl.string(z.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(F.d, {
                onChange: (e) => {
                    L.tz.updateSetting(e), n && (0, W.A)({ nextStatus: e ? k.clD.ONLINE : k.clD.INVISIBLE });
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
            (0, r.jsx)(Z, { showCurrentGame: n }),
            (0, r.jsx)(U.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: z.intl.string($.default["7cfFob"]),
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
                        children: z.intl.string($.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: q.$v,
                        children: [
                            (0, r.jsx)(G.nW, { status: k.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(U.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: z.intl.string($.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(U.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: z.intl.string($.default.Yl0mh4),
            }),
            (0, r.jsx)(X, { closePopout: t }),
        ],
    });
}
function et(e) {
    let { closePopout: t } = e,
        n = L.tz.useSetting();
    return (0, r.jsxs)(Q, {
        children: [
            (0, r.jsx)(Z, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, r.jsx)(U.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: z.intl.string($.default["7cfFob"]),
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
                        title: z.intl.string($.default.vxVbGP),
                        body: [z.intl.string($.default["7cfFob"])],
                        action: {
                            text: z.intl.string($.default.k4tCg2),
                            onClick: () => {
                                L.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: z.intl.string(z.t["ZrN+DT"]), onClick: K.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: z.intl.string($.default.qKDqet),
                        body: [z.intl.string($.default.Yl0mh4)],
                        action: {
                            text: z.intl.string($.default.Poezn1),
                            onClick: () => {
                                (0, W.A)({ nextStatus: k.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: z.intl.string($.default["6cA8HZ"]),
                        body: [z.intl.string($.default["7cfFob"])],
                        action: {
                            text: z.intl.string($.default.k4tCg2),
                            onClick: () => {
                                L.tz.updateSetting(!0), (0, W.A)({ nextStatus: k.clD.ONLINE });
                            },
                        },
                        textLink: { text: z.intl.string(z.t["ZrN+DT"]), onClick: K.L7 },
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
    let { children: h } = d;
    return (0, r.jsx)(Y.Y, {
        targetElementRef: c,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(h, { closePopout: t });
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
                if (!r && a === k.clD.INVISIBLE) return t ? en.ActivityAndStatus : en.ActivityAndStatusNux;
                if (!r) return t ? en.Activity : en.ActivityNux;
                if (a === k.clD.INVISIBLE) return t ? en.Status : en.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, s.useEffect)(() => {
        n && P.default.track(k.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let u = n || o ? [] : [h.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(O.Ay, {
        contentTypes: u,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: o } = e,
                u = s === h.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
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
    eh = n(429913),
    ef = n(568598),
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
            P.default.track(k.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: l, application_id: n, guild_id: a });
        }, [n, a, l]),
        (0, r.jsx)(p.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                P.default.track(k.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: l,
                    application_id: n,
                    guild_id: a,
                }),
                    o(er.i.USER_DISMISS);
            },
            title: z.intl.formatToPlainString(z.t.ry9SJw, { gameName: i }),
            body: z.intl.string(z.t.YPpOov),
            actions: [
                {
                    text: z.intl.string(z.t.RVfNGU),
                    onClick: () => {
                        P.default.track(k.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: l,
                            application_id: n,
                            guild_id: a,
                        }),
                            o(er.i.TAKE_ACTION),
                            eT.A.joinGuild(a, { source: k.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
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
var eN = n(952818),
    ev = n(927813);
let eC = eN.Ay.getRunningGames(),
    eR = [];
class eO extends _.Ay.Store {
    initialize() {
        this.syncWith([eN.Ay], () =>
            (function () {
                let e = eN.Ay.getRunningGames();
                if (eC === e) return !1;
                let t = eC.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((eC = e), 0 === t.length)) return !1;
                eR = [...eR, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return eR;
    }
    getLastPreviouslyRunningGame() {
        return eR[eR.length - 1] ?? null;
    }
}
let eb = new eO(g.h, {}),
    eD = 5 * ev.A.Millis.MINUTE;
var eL = n(137177),
    ew = n(334074),
    eM = n(279250),
    eP = n(880144),
    ex = n(277680),
    ek = n(118277),
    eU = n(905552),
    eG = n(95035),
    eF = n(716965),
    eV = n(567249),
    eB = n(929921),
    eH = n(650338),
    ej = n(753070),
    eY = n(194368);
function eW(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(U.E, { className: o()({ [eY.Q]: null == n }, t), color: n, ...i });
}
var eK = n(95701),
    e$ = n(616356),
    ez = n(495544),
    eq = n(734057),
    eX = n(184989),
    eZ = n(71393),
    eQ = n(761853),
    eJ = n(576705),
    e0 = n(290863),
    e1 = n(994500),
    e2 = n(309010),
    e3 = n(287809),
    e6 = n(157257),
    e4 = n(975571),
    e5 = n(723702);
let e7 = (0, el.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var e8 = n(994314),
    e9 = n(485599),
    te = n(141628),
    tt = n(192308),
    tn = n(959988),
    ti = n(183623),
    tr = n(241541),
    ts = n(70688),
    ta = n(687966),
    to = n(34188),
    tl = n(942857),
    tu = n(55730),
    tc = n(869003),
    td = n(521588),
    t_ = n(702841),
    th = n(475358),
    tf = n(176781),
    tp = n(442433),
    tE = n(42473),
    tm = n(186111),
    tg = n(532624),
    tA = n(350535),
    tI = n(274372),
    tT = n(572164),
    tS = n(61302),
    ty = n(646693);
function tN(e) {
    (0, tp.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 562733));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tv = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [i, a] = s.useState(!1),
            o = s.useCallback(() => a(!1), []);
        return (0, r.jsx)(p.A, {
            shouldShow: i,
            targetElementRef: n,
            position: "top",
            title: z.intl.format(z.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, r.jsx)("span", {
                        className: ty.E,
                        children: (0, r.jsx)(th.e, { className: ty.d, shortcut: t }),
                    }),
            }),
            body: z.intl.format(z.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
            caretConfig: { align: "center" },
            onRequestClose: o,
        });
    },
    tC = () => {
        let e = s.useRef(null),
            { parentAnalyticsLocation: t } = (0, ea.Ay)(),
            n = (0, t_.bG)([tm.A], () => tm.A.hasLayers()),
            i = (0, tT.Et)(),
            a = (0, t_.bG)([tI.Ay], () => tI.Ay.getIsAtMaxSaveClipOperations()),
            o = (0, t_.bG)([tg.Ay], () => tg.Ay.getKeybindForAction(k.hCu.SAVE_CLIP));
        if (!i || null == o || n) return null;
        let l = tA.dI(o.shortcut, !0);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tv, { keybindString: l, targetElementRef: e }),
                (0, r.jsx)(tE.A, {
                    ref: e,
                    disabled: a,
                    tooltipText:
                        null != o
                            ? z.intl.formatToPlainString(z.t.HIMcv1, { hotkey: tA.dI(o?.shortcut, !0) })
                            : z.intl.string(z.t.s52pju),
                    onClick: () => {
                        (0, tS.l0)(), (0, ep.X)(t, ep.O.CLIP);
                    },
                    onContextMenu: tN,
                    icon: tf.x,
                }),
            ],
        });
    };
var tR = n(338771),
    tO = n(212637),
    tb = n(397400),
    tD = n(488803);
let tL = (0, el.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tw = n(823748),
    tM = n(522055),
    tP = n(576709);
function tx(e) {
    let { title: t, body: n, ctaText: i, runningGameId: s, targetElementRef: a, onClick: o, onClose: l } = e,
        u = (0, _.bG)([tM.A], () => null != s && tM.A.getGlobalCatalogGame(s)?.can_market === !0, [s]);
    return (0, r.jsx)(p.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            u && null != s
                ? {
                      type: "dynamic",
                      component: f.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
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
function tk(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tx, {
        title: z.intl.formatToPlainString(tP.default.lKzVNu, { gameName: t }),
        body: z.intl.string(tP.default.qqjm8O),
        ctaText: z.intl.string(tP.default["eJg+Zm"]),
        ...n,
    });
}
function tU(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tx, {
        title: z.intl.formatToPlainString(tP.default.lwwiHE, { gameName: t }),
        body: z.intl.string(tP.default.B33GXN),
        ctaText: z.intl.string(tP.default["968/QC"]),
        ...n,
    });
}
var tG = n(453774),
    tF = n(44724),
    tV = n(153488),
    tB = n(942370),
    tH = n(610861);
function tj(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === k.$pd.PLAYING &&
              (0, tu.A)(t, k.jUm.JOIN))
    );
}
let tY = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: i,
                guildId: a,
                isStreaming: o,
                channel: l,
                canStream: c,
                runningGame: d,
                embeddedActivity: h,
                frame: f,
                activity: E,
                application: m,
                analyticsContext: g,
                inviteButtonRef: I,
                accountLinkButtonRef: T,
                startAuthorization: S,
                canStartAuthorization: y,
                hasAlreadyLinked: N,
                connectionApp: C,
            } = e,
            { parentAnalyticsLocation: R, analyticsLocations: O } = (0, ea.Ay)(),
            b = (0, tG.A)(m?.id),
            D = tj(m, E, h),
            { enabled: L } = tL.useConfig({ location: "activity-panel" }),
            w = (0, tw.Bp)("activity-panel"),
            M = (0, tD.C$)(a ?? void 0, "activity-panel"),
            x = (0, _.bG)([tV.A], () => tV.A.hasConsented(k.YAq.PERSONALIZATION)),
            U = (0, tw.TF)(d?.id, { shouldFetch: w || M }),
            G = L && x && U,
            F = G && w,
            V = G && M,
            B = s.useCallback(() => {
                u()(null != E, "Received null activity"),
                    P.default.track(k.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: d?.id ?? null,
                        application_id: E.application_id,
                    }),
                    (0, ep.X)(R, ep.O.INVITE),
                    P.default.track(k.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: E.application_id,
                        location: g.location,
                    }),
                    (0, A.qf)(E, !1);
            }, [E, g, R, d]),
            H = s.useCallback(
                (e, t) => () => {
                    (0, ep.X)(R, ep.O.LEAVE_ACTIVITY),
                        tc.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [R],
            ),
            j = s.useCallback(
                (e) => () => {
                    (0, ep.X)(R, ep.O.LEAVE_ACTIVITY), eA.A.stopFrame({ applicationId: e });
                },
                [R],
            ),
            Y = s.useCallback(() => {
                (0, tR.A)(t);
            }, [t]),
            W = s.useCallback(() => {
                (0, tt.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("63434"),
                        n.e("17918"),
                        n.e("76171"),
                        n.e("86672"),
                        n.e("38601"),
                        n.e("36946"),
                        n.e("44727"),
                        n.e("6565"),
                        n.e("14304"),
                        n.e("76229"),
                    ]).then(n.bind(n, 477156));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourcePID: d?.pid,
                            selectSource: null != e2.A.getVoiceChannelId(),
                            analyticsLocations: O,
                        });
                });
            }, [d, O]),
            K = m?.name ?? d?.name ?? "",
            $ = s.useCallback(() => {
                (0, tb.pK)({ gameApplicationId: d?.id, buttonVariant: "admin" }),
                    (0, tt.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("42209"), n.e("37084"), n.e("74132")]).then(
                            n.bind(n, 279871),
                        );
                        return (t) => (0, r.jsx)(e, { gameName: K, gameApplicationId: d?.id, ...t });
                    });
            }, [K, d?.id]),
            q = s.useCallback(() => {
                u()(null != a, "Received null guildId"),
                    (0, tb.pK)({ gameApplicationId: d?.id, buttonVariant: "member" }),
                    (0, tO.A)({ analyticsLocations: O, analyticsLocation: g.location, guildId: a });
            }, [a, O, g.location, d?.id]),
            X = s.useRef(null),
            [Z, Q] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != X.current && clearTimeout(X.current);
            },
            [],
        ),
            s.useEffect(() => {
                N && (Q(!1), null != X.current && (clearTimeout(X.current), (X.current = null)));
            }, [N]);
        let J = null == b || null == m ? null : (0, r.jsx)(t$, { applicationId: b.id }),
            ee = F
                ? (0, r.jsx)(tK, {
                      tooltipText: z.intl.formatToPlainString(tP.default.YhnUVO, { gameName: K }),
                      onClick: $,
                      onViewed: () => (0, tb.ET)({ gameApplicationId: d?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, r.jsx)(tk, {
                              gameName: K,
                              runningGameId: d?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  $(), n(er.i.TAKE_ACTION), i(er.i.TAKE_ACTION);
                              },
                              onClose: () => n(er.i.USER_DISMISS),
                          });
                      },
                  })
                : V
                  ? (0, r.jsx)(tK, {
                        tooltipText: z.intl.formatToPlainString(tP.default.lwwiHE, { gameName: K }),
                        onClick: q,
                        onViewed: () => (0, tb.ET)({ gameApplicationId: d?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, r.jsx)(tU, {
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
                if ((null == d && null != h && !(0, v.f)()) || (!o && !i)) return null;
                let s = null;
                return (
                    o
                        ? ((e = !1),
                          (t = () => {
                              Y(), (0, ep.X)(R, ep.O.STREAM, !1);
                          }),
                          (n = tn.G),
                          (s = z.intl.string(z.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                W(), (0, ep.X)(R, ep.O.STREAM, !0);
                            }),
                            (n = ti.F),
                            (s =
                                null != d
                                    ? z.intl.formatToPlainString(z.t.AB5gTy, { game: d.name })
                                    : z.intl.string(z.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = ti.F),
                            null != l && (0, eK.gV)(l.type) && (s = z.intl.string(z.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: tH.IF,
                        children: (0, r.jsx)(tE.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                D && null == h
                    ? (0, r.jsx)(tE.A, { ref: I, tooltipText: z.intl.string(z.t["hC/Zey"]), onClick: B, icon: tr.D })
                    : null,
            ei =
                null == h
                    ? null
                    : (0, r.jsx)(tE.A, {
                          tooltipText: z.intl.string(z.t["R/FK4A"]),
                          onClick: H(h.applicationId, h.location),
                          icon: ts.o,
                      }),
            es =
                null == f
                    ? null
                    : (0, r.jsx)(tE.A, {
                          tooltipText: z.intl.string(z.t["R/FK4A"]),
                          onClick: j(f.applicationId),
                          icon: ts.o,
                      }),
            eo = null == t ? null : (0, r.jsx)(tC, {}),
            el =
                !y || N
                    ? null
                    : (0, r.jsx)(tW, {
                          runningGame: d,
                          startAuthorization: () => {
                              S({ analyticsLocations: O }) === tB._M.RPC &&
                                  (Q(!0),
                                  null != X.current && clearTimeout(X.current),
                                  (X.current = setTimeout(() => {
                                      Q(!1);
                                  }, 9e4)));
                          },
                          connectionApp: C,
                          ref: T,
                      }),
            eu =
                !y || N
                    ? null
                    : (0, r.jsx)(p.A, {
                          title: z.intl.string(z.t.ULvRFd),
                          body: z.intl.string(z.t["HJJDr+"]),
                          targetElementRef: T,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: Z,
                          onRequestClose: () => {
                              Q(!1), null != X.current && (clearTimeout(X.current), (X.current = null));
                          },
                      });
        return null == et && null == en && null == ei && null == es && null == el && null == J && null == ee
            ? null
            : (0, r.jsxs)("div", { className: tH.o1, children: [el ?? J ?? en, ee, et, ei ?? es ?? eo, eu] });
    }),
    tW = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: s } = e;
        return (0, r.jsx)(tE.A, {
            ref: t,
            onClick: () => {
                P.default.track(k.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    i();
            },
            icon: te.A,
            tooltipText: z.intl.string(z.t.sbdnpw),
        });
    });
function tK(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: a } = e,
        o = s.useRef(null),
        l = s.useRef(!1);
    s.useEffect(() => {
        l.current || ((l.current = !0), i());
    }, [i]);
    let u = (0, tl.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: d } = (0, D.c9)(),
        [_, f] = (0, eg.kn)(!u && c && d ? [h.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [p, E] = (0, eg.kn)([h.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        m = s.useCallback(() => {
            f(er.i.TAKE_ACTION), E(er.i.TAKE_ACTION), n();
        }, [f, E, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tH.IF,
                children: [
                    (0, r.jsx)("div", { className: tH.uD, children: (0, r.jsx)("div", { className: tH.Z9 }) }),
                    (0, r.jsx)(tE.A, { ref: o, tooltipText: t, onClick: m, icon: ta._ }),
                    p === h.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, r.jsx)(td.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != _ && a({ targetElementRef: o, markAsDismissed: f, markBadgeAsDismissed: E }),
        ],
    });
}
function t$(e) {
    let { applicationId: t } = e,
        n = s.useRef(null);
    s.useEffect(() => {
        P.default.track(k.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = s.useCallback(() => {
            (0, tF.G)({ applicationId: t });
        }, [t]),
        a = s.useCallback(() => {
            (0, tF.default)({ applicationId: t });
        }, [t]),
        o = s.useCallback(() => {
            P.default.track(k.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), a();
        }, [t, a]);
    return (0, r.jsx)(tE.A, { tooltipText: z.intl.string(z.t.vyaWs7), onClick: o, onMouseDown: i, icon: to.U, ref: n });
}
var tz = n(428689),
    tq = n(673294);
function tX(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(E.D, {
        className: tq.kL,
        onClick: t,
        children: (0, r.jsx)(U.E, {
            className: tq.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: z.intl.string(z.t.jfrLLb),
        }),
    });
}
function tZ(e) {
    let { onClick: t } = e,
        n = L.tz.useSetting(),
        i = (0, _.bG)([M.A], () => M.A.getStatus());
    return __OVERLAY__ || (n && i !== k.clD.INVISIBLE) ? null : (0, r.jsx)(tX, { onClick: t });
}
var tQ = n(138082),
    tJ = n(409626),
    t0 = n(692969),
    t1 = n(16590),
    t2 = n(379414);
function t3(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t0.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: tJ.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(E.D, {
        onClick: i,
        className: o()(null != i && t2.On),
        children: (0, r.jsx)(e9.A, { className: t2.mO, children: t }),
    });
}
function t6(e) {
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
            popoutTargetRef: h,
            isCurrentlyRunningGame: f,
        } = e,
        p = null != a ? a.name : null != o ? o.name : z.intl.string(z.t["UQMV/E"]),
        { enableQuickBar: E } = tQ.h.useConfig({ location: "RunningGameCard" }),
        m = (0, _.bG)([tg.Ay], () => tg.Ay.getKeybindForAction(k.hCu.SAVE_CLIP)),
        g = null != m && m.shortcut.length > 0 ? tA.dI(m.shortcut, !0) : null,
        A = (0, tT.Et)(),
        I = (0, tT.XT)(),
        T = A && (i || I) && E && f && null != g;
    return (
        (t = L.tz.useSetting()),
        (n = (0, _.bG)([M.A], () => M.A.getStatus())),
        (0, s.useEffect)(() => {
            P.default.track(k.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === k.clD.INVISIBLE,
            });
        }, [t, n]),
        (0, r.jsxs)("div", {
            className: t2.cm,
            children: [
                (0, r.jsxs)("div", {
                    className: t2.f9,
                    children: [
                        (0, r.jsx)(eL.A, { className: t2.Gt, game: a, pid: o?.pid, ref: d }),
                        i ? (0, r.jsx)(tz.n, { size: "md", color: "currentColor", className: t2.it }) : null,
                    ],
                }),
                (0, r.jsx)(es, {
                    popoutTargetRef: h,
                    isForceShowSharingPopout: u,
                    setIsForceShowSharingPopout: c,
                    hidePopout: !f,
                    children: (0, r.jsxs)("div", {
                        className: t2.pq,
                        children: [
                            null != p ? (0, r.jsx)(t3, { name: p, applicationId: a?.id }) : null,
                            T
                                ? (0, r.jsx)(U.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      className: t2.En,
                                      tag: "div",
                                      children: z.intl.format(t1.default.ESZwQX, {
                                          keybind: g,
                                          keybindHook: () =>
                                              (0, r.jsx)(th.e, { shortcut: g, className: t2.oH, keyClassName: t2.Bj }),
                                      }),
                                  })
                                : f
                                  ? (0, r.jsx)(tZ, { onClick: l })
                                  : (0, r.jsx)(U.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: z.intl.string(z.t.W4N1ru),
                                    }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var t4 = n(5867),
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
var t8 = n(911070),
    t9 = n(490696),
    ne = n(268920),
    nt = n(633217);
function nn(e) {
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
        h = e7.useConfig({ location: "ActivityPanelGameCard" }),
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
    let A = z.intl.formatToPlainString(h.altTitle ? z.t.hUbQT2 : z.t["lo6H6+"], { gameName: m.name }),
        I = z.intl.string(E ?? (h.altBody ? z.t["JKqu+4"] : z.t.qYAzOp)),
        T = z.intl.string(h.altCta ? z.t.jynBQ5 : z.t.lw71Nf);
    a && (T = z.intl.string(t8.default["2cOIOr"]));
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
            (A = z.intl.formatToPlainString(t8.default.dPuaZE, { applicationName: m.name })),
            (I = z.intl.string(t8.default.jR3bbS)),
            (n = {
                text: z.intl.string(z.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, r.jsx)(p.A, {
            size: a ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: f.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
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
function ni(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: s } = e,
        a = z.intl.string(z.t.MxAlrB),
        o = z.intl.string(z.t["/UTTEg"]),
        l = [
            {
                text: z.intl.string(z.t.aRIFWD),
                onClick: () => {
                    i(er.i.TAKE_ACTION), window.open(e4.A.getArticleURL(k.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((a = z.intl.string(t8.default.ublzTG)),
            (o = z.intl.string(t8.default.JgM2xu)),
            (t = { type: "video", src: nt.A, fallbackImageSrc: ne.A, aspectRatio: "2/1", loop: !0 })),
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
function nr(e) {
    let {
        activity: t,
        game: n,
        markAsDismissed: i,
        inviteButtonRef: s,
        parentAnalyticsLocation: a,
        analyticsContext: o,
    } = e;
    return (0, r.jsx)(p.A, {
        title: z.intl.string(z.t["0l2pEt"]),
        body: z.intl.string(z.t["DSZUK/"]),
        targetElementRef: s,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(er.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: z.intl.string(z.t.YdkBCH),
                onClick: () => {
                    i(er.i.TAKE_ACTION),
                        u()(null != t, "Received null activity"),
                        P.default.track(k.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, ep.X)(a, ep.O.INVITE),
                        P.default.track(k.HAw.OPEN_MODAL, {
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
function ns(e) {
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
            accountLinkUpsellTargetRef: h,
            inviteButtonRef: f,
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
            return { isEligible: n && null != t && tB.YJ.has(t.id), displayedApp: i };
        })({ connectionApp: a }),
        { rewarded: S } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: r } = e,
                [a, o] = s.useState(!1);
            return (
                s.useEffect(() => {
                    if (!t || !n || !i || a || null == r) return;
                    let e = !1;
                    return (
                        (0, eF.RI)({
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
            return (0, r.jsx)(nn, {
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
            return (0, r.jsx)(ni, {
                incentivizedAccountLinkingRewarded: S,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: h,
            });
        case 2:
            return (0, r.jsx)(nr, {
                activity: o,
                game: l,
                markAsDismissed: n,
                inviteButtonRef: f,
                parentAnalyticsLocation: m,
                analyticsContext: A,
            });
        case 3:
            return (
                u()(i?.id != null && i?.name != null && null != E, "Game community upsell requires these as non null"),
                (0, r.jsx)(eS, {
                    targetElementRef: h,
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
let na = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(e8.A, { children: t });
});
function no(e) {
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
            isActivityPopoutOpen: h,
        } = e,
        f = { start: i.connectedSince },
        p = a;
    null != o && null != s
        ? ((t = k.BVt.CHANNEL(o.id, s.id)), (p = `${p} / ${o.name}`))
        : null != s && (t = k.BVt.CHANNEL(k.ME, s.id));
    let E = () => {
            u()(null != s, "Channel cannot be null during navigation click"),
                T.A.channelListScrollTo(s.guild_id ?? k.ME, s.id),
                !h &&
                    ((0, eK.gV)(s.type) &&
                        I.A.selectParticipant(
                            s.id,
                            (0, ef.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                        ),
                    (0, eK.pQ)(s.type) && (0, C.gk)(t4.Gd.PANEL));
        },
        m = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eL.A, { className: t9.Gt, game: n, size: eL.M.SMALL, ref: d }),
                (0, r.jsx)(es, {
                    popoutTargetRef: _,
                    isForceShowSharingPopout: l,
                    setIsForceShowSharingPopout: c,
                    children: (0, r.jsxs)("div", {
                        className: t9.pq,
                        children: [
                            (0, r.jsx)(eG.A, {
                                href: t,
                                onClick: () => {
                                    E(), h && g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                },
                                children: (0, r.jsx)(e9.A, { className: t9._W, children: n.name }),
                            }),
                            null != s && (0, eK.pQ)(s.type)
                                ? (0, r.jsx)(eG.A, {
                                      href: t,
                                      onClick: E,
                                      children: (0, r.jsx)(e8.A, { className: t9.Ix, children: p }),
                                  })
                                : (0, r.jsx)(na, { timestamps: f }),
                        ],
                    }),
                }),
            ],
        });
    return (0, r.jsx)("div", { className: t9.cm, children: m });
}
function nl(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: a } = e,
        o = s.useMemo(() => ({ start: t.connectedSince }), [t.connectedSince]),
        l = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eL.A, { className: t9.Gt, game: n, size: eL.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: t9.pq,
                    children: [
                        (0, r.jsx)(E.D, {
                            onClick: () => {
                                a
                                    ? g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : eA.A.updateFrameLayoutMode({
                                          applicationId: t.applicationId,
                                          layoutMode: t5.y.FOCUSED,
                                      });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: t9.rB,
                            children: (0, r.jsx)(e9.A, { className: t9._W, children: n.name }),
                        }),
                        (0, r.jsx)(na, { timestamps: o }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: t9.cm, children: l });
}
function nu(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: s, sanitizedTitle: a } = (0, ex.A)(t);
    return (0, r.jsxs)("div", {
        className: t9.cm,
        ref: n,
        children: [
            (0, r.jsx)(ek.A, { title: a, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: t9.pq,
                children: [
                    (0, r.jsx)(e9.A, { children: s }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: t9.qi,
                            children: [
                                (0, r.jsx)(m.t, { size: "xxs", color: em.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(eW, { className: t9.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nc = (0, y.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        a = s.useRef(null),
        l = s.useRef(null),
        u = s.useRef(null),
        c = (0, _.bG)([ez.default], () => ez.default.getId()),
        f = (0, _.bG)([eN.Ay, e6.A], () => (0, eU.A)(eN.Ay, e6.A)),
        { allowAccountLinkingUpsellPostGameClose: p } = eu.useConfig({ location: "ActivityPanelGameCard" }),
        { enabled: E } = ey.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: m, isWithinThreshold: g } = (function (e) {
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
        A = (0, _.bG)([e2.A, eq.A], () => eq.A.getChannel(e2.A.getVoiceChannelId())),
        I = (0, _.bG)([R.Ay], () => R.Ay.getConnectedActivityChannelId()),
        T = (0, _.bG)([eq.A], () => eq.A.getChannel(I)),
        S = (0, _.bG)([eZ.A], () => eZ.A.getGuild(T?.guild_id)),
        [y, v] = (0, _.yK)([e$.A], () => [e$.A.getCurrentUserActiveStream(), e$.A.getStreamerActiveStreamMetadata()]),
        C = (0, _.bG)([R.Ay], () => R.Ay.getCurrentEmbeddedActivity()),
        O = (0, _.bG)([eI.A], () => eI.A.getConnectedFrame()),
        b = (0, _.bG)([eZ.A, eJ.A], () => null == A || eM.vz(A, eZ.A, eJ.A, !1)),
        [L] = (0, eh.A)([
            (function () {
                if (null != v && null != v.id) return v.id;
                if (null != f) return f.id;
                if (null != C) return C.applicationId;
                if (null != O) return O.applicationId;
                if (null != m && null != m.id) return m.id;
            })(),
        ]),
        w =
            ((0, _.bG)([R.Ay], () => R.Ay.getCurrentEmbeddedActivity()),
            (0, _.bG)([eQ.Ay], () => (0, eP.A)(eQ.Ay) && (0, e5.isWindows)()) || !1),
        M = (0, _.bG)([e0.A], () => (null != c ? e0.A.findActivity(c, (e) => e.type === k.$pd.PLAYING) : null)),
        x = null != y && y.ownerId === c && y.state !== k.XYD.ENDED,
        U = (0, _.bG)([e3.default, e1.A], () => (null != T ? (0, eE.m1)(T, e3.default, e1.A) : void 0)),
        G = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([eB.A], () => eB.A.getState());
            if (e !== ej.on.RESOLUTION_720 || t === ej.kn.FPS_60) return `${(0, ej.zr)(e)} ${(0, eH.Bs)(t)}`;
        })(),
        [F, V] = s.useState(!1),
        B = (0, _.bG)([eV.A], () => eV.A.getWindowOpen(k.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: H, analyticsLocations: j } = (0, ea.Ay)(),
        {
            hasAlreadyLinked: Y,
            canStartAuthorization: W,
            connectionApp: K,
            startAuthorization: $,
        } = (0, ed.RD)(L, { allowedFlows: [tB._M.RPC, tB._M.WEB] }),
        [z, q] = s.useState(null),
        X = null != z,
        Z = s.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return q(L?.id ?? null), $(...t);
            },
            [L?.id, $],
        ),
        Q = (0, N.A)(L?.id);
    s.useEffect(() => {
        null != L && Q !== L?.id && q(null);
    }, [L, Q]);
    let J = (0, d.K)((e) => {
            e &&
                null != K &&
                P.default.track(k.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: f?.id ?? null, application_id: K.id });
        }),
        ee = s.useMemo(() => {
            let e = f?.id ?? m?.id;
            return null != e ? t7[e] : void 0;
        }, [f?.id, m?.id]),
        et = (0, _.bG)([eX.A], () => null != ee && eX.A.isMember(ee), [ee]),
        en = E && null != ee && !et && (null != f || g) ? ee : void 0,
        [ei, es] = (function (e) {
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
                { isQuestBarEmpty: d, hasLoadedQuestBar: _ } = (0, D.c9)(),
                f = !_ || !d,
                p = !f && !l && null == r && o && null != t,
                { shouldShow: E, markAsDismissed: m } = (0, ew.D3)({
                    application: t,
                    disabled: !p,
                    dismissibleContent: h.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: er.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: ew.Yb,
                }),
                g = !f && null != r && l,
                A = s.useMemo(() => {
                    if (f || E) return [];
                    let e = [];
                    return (
                        l && u && tj(t, n, i) && null == i && e.push(h.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(h.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, f, u, i, c, l, E]),
                [I, T] = (0, eg.kn)(A, er.m.ACCOUNT_NAME_ZONE, !1);
            return s.useMemo(() => {
                if (null != I)
                    switch (I) {
                        case h.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    a(null), T(e);
                                },
                            ];
                        case h.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, T];
                        default:
                            return [null, T];
                    }
                return E ? [0, m] : g ? [1, () => a(null)] : [null, () => {}];
            }, [m, T, a, E, g, I]);
        })({
            application: L,
            activity: M,
            embeddedActivity: C,
            connectingGameId: z,
            setConnectingGameId: q,
            canStartAuthorization: W,
            hasAlreadyLinked: Y,
            didStartAuthorization: X,
            gameCommunityGuildId: en,
        }),
        eo = null != m && (1 === ei || (g && ((p && 0 === ei) || 3 === ei))) ? m : null,
        el = s.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(t6, {
                    isStreaming: x,
                    application: e,
                    game: t,
                    onClickNotSharing: () => V(!0),
                    isForceShowSharingPopout: F,
                    setIsForceShowSharingPopout: V,
                    ref: l,
                    popoutTargetRef: a,
                    isCurrentlyRunningGame: i,
                });
            },
            [F, x],
        ),
        ec = s.useMemo(
            () =>
                null != f && (w || W) && (!x || v?.pid != null)
                    ? el(L, f, { isGameRunning: !0 })
                    : null != C && null != L && tj(L, M, C)
                      ? (0, r.jsx)(no, {
                            application: L,
                            embeddedActivity: C,
                            channel: T,
                            channelName: U,
                            guildForConnectedChannel: S,
                            isForceShowSharingPopout: F,
                            setIsForceShowSharingPopout: V,
                            accountLinkUpsellTargetRef: l,
                            activityPopoutTargetRef: a,
                            isActivityPopoutOpen: B,
                        })
                      : null != O &&
                          null != L &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: L, frame: O })
                        ? (0, r.jsx)(nl, {
                              application: L,
                              accountLinkUpsellTargetRef: l,
                              frame: O,
                              isActivityPopoutOpen: B,
                          })
                        : x
                          ? (0, r.jsx)(nu, {
                                streamMetadata: v,
                                accountLinkUpsellTargetRef: l,
                                streamQualityIndicator: G,
                            })
                          : null != eo
                            ? el(L, eo, { isGameRunning: !1 })
                            : null,
            [v, M, L, w, W, U, T, C, O, S, B, F, x, eo, el, f, G],
        );
    return null == ec
        ? null
        : (0, r.jsx)("div", {
              className: o()(t9.nd, i),
              ref: a,
              children: (0, r.jsxs)("div", {
                  className: t9.rf,
                  children: [
                      ec,
                      (0, r.jsx)(tY, {
                          stream: y,
                          canGoLive: w,
                          guildId: t,
                          isStreaming: x,
                          channel: T,
                          canStream: b,
                          runningGame: f,
                          activity: M,
                          application: L,
                          embeddedActivity: C,
                          frame: O,
                          analyticsContext: n,
                          inviteButtonRef: u,
                          accountLinkButtonRef: J,
                          canStartAuthorization: W,
                          startAuthorization: Z,
                          hasAlreadyLinked: Y,
                          connectionApp: K,
                      }),
                      (0, r.jsx)(ns, {
                          popover: ei,
                          dismissPopover: es,
                          application: L,
                          connectionApp: K,
                          activity: M,
                          runningGame: f,
                          hasAlreadyLinked: Y,
                          didStartAuthorization: X,
                          startAuthorization: Z,
                          accountLinkUpsellTargetRef: l,
                          inviteButtonRef: u,
                          accountLinkButtonRef: J,
                          gameCommunityGuildId: en,
                          parentAnalyticsLocation: H,
                          analyticsLocations: j,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
