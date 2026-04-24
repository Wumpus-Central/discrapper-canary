n.d(t, { c: () => tB, default: () => tF });
var i,
    l = n(627968),
    a = n(64700),
    r = n(621466),
    s = n(477782),
    o = n(550079),
    c = n(442433),
    d = n(155718),
    u = n(793574),
    g = n(688810),
    A = n(50268),
    m = n(486503),
    p = n(373963),
    f = n(115184),
    E = n(777933),
    y = n(826308),
    h = n(337358),
    _ = n(962514);
n(321073);
var S = n(17928),
    b = n(495544),
    I = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let x = [];
var D = n(985018);
let j = {
    [I.END_EARLY]: (e) =>
        (0, l.jsx)(s.Dr, {
            id: "end-poll-early",
            label: D.intl.string(D.t.grdwwt),
            icon: h.O,
            leadingAccessory: { type: "icon", icon: h.O },
            action: () => {
                _.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
        }),
};
var C = n(646911),
    v = n(954571),
    M = n(691540),
    T = n(857250),
    O = n(97483),
    R = n(834730),
    N = n(231483),
    G = n(627794),
    L = n(928348),
    P = n(53594),
    w = n(979816),
    k = n(268749),
    U = n(239705),
    F = n(264349),
    B = n(997509),
    X = n(652215),
    H = n(243277),
    K = n(365863);
let V = H.uh.KEYWORD;
var q = n(880457),
    W = n(503698),
    z = n.n(W),
    J = n(844222),
    Y = n(460905),
    Z = n(217306),
    $ = n(822123),
    Q = n(649963),
    ee = n(815807),
    et = n(406704),
    en = n(253932),
    ei = n(576705),
    el = n(486020),
    ea = n(625494),
    er = n(690521),
    es = n(307731),
    eo = n(666833);
function ec(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: z()(i, eo.Z),
        src:
            null != t.id
                ? el.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : er.Ay.getURL(t.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ed = n(290136),
    eu = n(519222),
    eg = n(345254),
    eA = n(624479),
    em = n(814890),
    ep = n(383233),
    ef = n(957565),
    eE = n(483768),
    ey = n(885574),
    eh = n(473935),
    e_ = n(173936),
    eS = n(93688),
    eb = n(509434),
    eI = n(975807),
    ex = n(22231),
    eD = n(720149),
    ej = n(697470),
    eC = n(253925),
    ev = n(843626),
    eM = n(427209);
n(938796);
var eT = n(665260),
    eO = n(563119),
    eR = n(581925),
    eN = n(780574),
    eG = n(20883),
    eL = n(979766),
    eP = n(990078),
    ew = n(827319);
let ek = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function eU(e) {
    let { emoji: t, isFocused: n } = e,
        { animated: i, src: a, surrogates: r } = t;
    return (
        null == a && null != t.id
            ? (a = el.Ay.getEmojiURL({ id: t.id, animated: !!i, size: 20 }))
            : null == a && (a = er.Ay.getURL(r)),
        (0, l.jsx)(eP.m, {
            text: (0, er.N)(t),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: n,
            children: (0, l.jsx)("div", {
                "aria-label": D.intl.formatToPlainString(D.t["/iYSo6"], { emojiName: t.name }),
                className: z()(ew.x6, { [ew.in]: n }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: z()("emoji", "emoji-text", ew.Kk), children: r })
                        : (0, l.jsx)("img", { className: ew.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eF = n(192308),
    eB = n(969632),
    eX = n(997571),
    eH = n(157559),
    eK = n(769297);
function eV(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != t.id
                ? el.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : er.Ay.getURL(t.name ?? ""),
        alt: "",
    });
}
var eq = n(110384),
    eW = n(517997),
    ez = n(554146),
    eJ = n(111159),
    eY = n(138134),
    eZ = n(964486),
    e$ = n(865116),
    eQ = n(932001),
    e0 = n(928658),
    e7 = n(400528),
    e1 = n(376708),
    e2 = n(715757),
    e5 = n(967198),
    e8 = n(287809),
    e9 = n(628691),
    e6 = n(49999),
    e4 = n(221314),
    e3 = n(663417),
    te = n(965407),
    tt = n(249700),
    tn = n(556112),
    ti = n(54570),
    tl = n(8880),
    ta = n(163328),
    tr = n(636537),
    ts = n(37646),
    to = n(228366),
    tc = n(147087),
    td = n(773669),
    tu = n(535456);
let tg = new Map();
var tA = n(534890),
    tm = n(604681),
    tp = n(17447),
    tf = n(141850),
    tE = n(736339),
    ty = n(485845),
    th = n(778712),
    t_ = n(803306),
    tS = n(966327),
    tb = n(597929),
    tI = n(548118),
    tx = n(975732),
    tD = n(260509),
    tj = n(889227),
    tC = n(734057),
    tv = n(71393),
    tM = n(87221),
    tT = n(930125),
    tO = n(282108),
    tR = n(32880),
    tN = n(803316),
    tG = n(76843),
    tL = n(945810);
let tP = (0, tL.mj)({
    name: "2026-04-save-voice-message-menu-item",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tw = n(953584);
let tk = (0, tL.mj)({
    name: "2025-12-video-stats-for-nerds",
    kind: "user",
    defaultConfig: { enableVideoStatsForNerds: !1 },
    variations: { 0: { enableVideoStatsForNerds: !1 }, 1: { enableVideoStatsForNerds: !0 } },
});
var tU = n(77350);
function tF(e) {
    let t,
        n,
        i,
        a,
        {
            channel: s,
            message: o,
            target: d,
            mediaItem: A,
            shouldHideMediaOptions: m,
            onSelect: p,
            onHeightUpdate: f,
        } = e,
        { analyticsLocations: E } = (0, g.Ay)([u.A.MESSAGE_CONTEXT_MENU]),
        y = d,
        h = d.getAttribute("data-type"),
        _ = d.getAttribute("data-id"),
        S = d.getAttribute("data-name");
    if (null != A) n = t = i = A.url;
    else
        for (; (0, r.vq)(y); )
            (0, r.vq)(y, HTMLImageElement) && null != y.src && (n = y.src),
                (0, r.vq)(y, HTMLAnchorElement) &&
                    null != y.href &&
                    ((t = y.href),
                    (a = y.textContent),
                    null == n &&
                        "img" === y.getAttribute("data-role") &&
                        ((n = t),
                        y.hasAttribute("data-safe-src") &&
                            "" !== y.getAttribute("data-safe-src") &&
                            (i = y.getAttribute("data-safe-src")))),
                (y = y.parentNode);
    let b = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: E,
        children: tB({
            message: o,
            channel: s,
            mediaItem: A,
            textSelection: b,
            favoriteableType: h,
            favoriteableId: _,
            favoriteableName: S,
            itemHref: t,
            itemSrc: n,
            itemSafeSrc: i,
            itemTextContent: a,
            canReport: !0,
            onHeightUpdate: f,
            onSelect: p,
            onClose: c.Z_,
            navId: "message",
            ariaLabel: D.intl.string(D.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function tB(e) {
    let t,
        i,
        r,
        u,
        h,
        _,
        I,
        W,
        z,
        el,
        eo,
        eP,
        tL,
        tF,
        tB,
        tX,
        tH,
        tK,
        tV,
        {
            message: tq,
            channel: tW,
            mediaItem: tz,
            textSelection: tJ,
            favoriteableType: tY,
            favoriteableId: tZ,
            favoriteableName: t$,
            itemHref: tQ,
            itemSrc: t0,
            itemSafeSrc: t7,
            itemTextContent: t1,
            canReport: t2,
            onHeightUpdate: t5,
            onSelect: t8,
            onClose: t9,
            navId: t6,
            ariaLabel: t4,
            shouldHideMediaOptions: t3 = !1,
        } = e,
        ne = a.useRef(null);
    a.useEffect(() => {
        ne.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != ne.current) {
                    let e = Date.now() - ne.current;
                    v.default.track(X.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: tW.id,
                        guild_id: tW.getGuildId() ?? void 0,
                        message_id: tq.id,
                    });
                }
            },
            [tW, tq],
        );
    let nt = a.useCallback(() => {
            if (null != ne.current) {
                let e = Date.now() - ne.current;
                v.default.track(X.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: tW.id,
                    guild_id: tW.getGuildId() ?? void 0,
                    message_id: tq.id,
                });
            }
            t8?.();
        }, [t8, tW, tq]),
        { tidaWebformEnabled: nn } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        ni =
            ((t = (0, $.D6)(tW.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && ek.indexOf(e.uniqueName ?? "") >= 0) &&
                    !er.Ay.isEmojiPremiumLocked({ emoji: e, channel: tW, intention: es.EmojiIntention.REACTION }),
            )).length > 4 && (t.length = 4),
            (i = en.jW.useSetting()),
            (r = (0, et.Id)(tW)),
            (0, S.bG)([ei.A], () => i && r && (tW.isPrivate() || ei.A.can(X.xBc.ADD_REACTIONS, tW)), [tW, r, i]) &&
            t.length > 0
                ? (0, l.jsx)(s.rX, {
                      className: ew.iE,
                      children: t.map((e, t) =>
                          (0, l.jsx)(
                              s.Dr,
                              {
                                  id: `quickreact-${e.id ?? t}`,
                                  render: (t) => {
                                      let { isFocused: n } = t;
                                      return (0, l.jsx)(eU, { emoji: e, isFocused: n });
                                  },
                                  action: () => {
                                      (0, Q.BB)(tW.id, tq.id, (0, ee.jq)(e), Q.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              t,
                          ),
                      ),
                  })
                : null),
        nl = (0, p.A)(tJ),
        na = (0, y.A)(tJ),
        nr = (function (e, t) {
            let { reducedMotion: n } = a.useContext(J.C),
                i = (0, et.Id)(t),
                r = (0, S.bG)([ei.A], () => (t.isPrivate() || ei.A.can(X.xBc.ADD_REACTIONS, t)) && i, [t, i]),
                o = (0, $.D6)(t.getGuildId());
            if (!en.jW.getSetting() || !r) return null;
            let c = o
                .filter(
                    (e) =>
                        !er.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: t, intention: es.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        s.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(ec, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? er.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
                                animated: i.animated,
                            },
                            action: () => {
                                (0, Q.BB)(t.id, e.id, (0, ee.jq)(i), Q.qN.MESSAGE_CONTEXT_MENU);
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0,
                        },
                        a,
                    ),
                );
            return (0, l.jsx)(s.Dr, {
                id: "add-reaction",
                label: D.intl.string(D.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: Y.n },
                action: () => {
                    ea._.dispatchKeyed(X.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                },
                color: "default",
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        c,
                        (0, l.jsx)(s.bX, {}),
                        (0, l.jsx)(s.Dr, {
                            color: "default",
                            id: "other-reactions",
                            label: D.intl.string(D.t["OBCR+p"]),
                            icon: Y.n,
                            leadingAccessory: { type: "icon", icon: Z.S },
                            action: () => {
                                ea._.dispatchKeyed(X.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(tq, tW),
        ns =
            ((u = (0, S.bG)([b.default], () => b.default.getId())),
            (h = (0, et.Id)(tW)),
            (_ = (0, et.s5)(tW)),
            (0, ej.A)(tq, u) && h && !_
                ? (0, l.jsx)(s.Dr, {
                      id: "edit",
                      label: D.intl.string(D.t.fsBWmS),
                      action: () => eD.A.startEditMessageRecord(tW.id, tq),
                      leadingAccessory: { type: "icon", icon: ex.R },
                      icon: ex.R,
                  })
                : null),
        no = (0, eW.u)(tW, tq)
            ? (0, l.jsx)(s.Dr, {
                  id: "reply",
                  label: D.intl.string(D.t["5IEsGx"]),
                  leadingAccessory: { type: "icon", icon: eq.W },
                  icon: eq.W,
                  action: (e) => {
                      (0, eu.$b)(tW, tq, e);
                  },
              })
            : null,
        nc = (0, ev.m)(tq)
            ? (0, l.jsx)(s.Dr, {
                  id: "forward",
                  label: D.intl.string(D.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eM.A },
                  icon: eM.A,
                  action: () => {
                      (0, eu.Z4)(tW, tq);
                  },
              })
            : null,
        nd = (0, et.n)(tW, tq)
            ? (0, l.jsx)(s.Dr, {
                  id: "thread",
                  label: D.intl.string(D.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: ta.y },
                  icon: ta.y,
                  action: () => {
                      (0, eu.Nw)(tW, tq);
                  },
              })
            : null,
        nu = (function (e) {
            if (!ef.p5) return null;
            let t = e.getContentMessage(),
                n = (0, ep._c)(t) ? (0, em.kC)(t.components) : t.content;
            return null == n || 0 === n.length
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "copy-text",
                      label: D.intl.string(D.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eA.T },
                      icon: eA.T,
                      action: () => {
                          (0, ef.C)(n);
                      },
                  });
        })(tq),
        ng = (function (e) {
            let t,
                {
                    handleTranslate: i,
                    handleRevertTranslation: r,
                    isTranslating: o,
                    isTranslated: c,
                } = (function (e) {
                    let [t, n] = a.useState(!1),
                        i = (0, S.bG)([td.default], () => td.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (t) return;
                                let r = l ?? i;
                                n(!0);
                                let s = a ?? (0, D.getAvailableLocales)().find((e) => e.value === r)?.name ?? r;
                                tg.has(e.id) || tg.set(e.id, e.content),
                                    (0, M.P0)(
                                        (0, T.o)(
                                            D.intl.formatToPlainString(D.t.Znl8Z8, { targetLanguage: s }),
                                            O.Ck.AI,
                                        ),
                                    );
                                try {
                                    let t = await tr.Bo.post({
                                        url: X.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: r },
                                        rejectWithError: !1,
                                    });
                                    t.ok &&
                                        t.body &&
                                        (to.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: t.body.content },
                                        }),
                                        (0, M.P0)(
                                            (0, T.o)(
                                                D.intl.formatToPlainString(D.t.FtVUqm, { targetLanguage: s }),
                                                O.Ck.SUCCESS,
                                            ),
                                        ));
                                } finally {
                                    n(!1);
                                }
                            },
                            [e, t, i],
                        ),
                        handleRevertTranslation: a.useCallback(() => {
                            let t = tg.get(e.id);
                            null != t &&
                                (to.h.dispatch({
                                    type: "MESSAGE_UPDATE",
                                    message: { id: e.id, channel_id: e.channel_id, content: t },
                                }),
                                tg.delete(e.id));
                        }, [e.id, e.channel_id]),
                        isTranslating: t,
                        isTranslated: tg.has(e.id),
                    };
                })(e),
                d =
                    ((t = (0, D.getAvailableLocales)()),
                    a.useMemo(
                        () =>
                            t.map((e) => {
                                let t;
                                try {
                                    t = n(579832)(`./${e.value}.png`);
                                } catch (e) {
                                    t = n(432706);
                                }
                                return (0, l.jsx)(
                                    s.Dr,
                                    {
                                        id: `translate-${e.value}`,
                                        label: e.name,
                                        icon: () => (0, l.jsx)("img", { alt: "", src: t, className: tu.M }),
                                        leadingAccessory: { type: "image", src: t },
                                        action: () => i(e.value, e.name),
                                        disabled: o,
                                    },
                                    e.value,
                                );
                            }),
                        [i, o, t],
                    )),
                u = (0, tc.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? c
                    ? (0, l.jsx)(s.Dr, {
                          id: "revert-translation",
                          label: D.intl.string(D.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: ts.U },
                          icon: ts.U,
                          action: r,
                          disabled: o,
                      })
                    : (0, l.jsx)(s.Dr, {
                          id: "translate",
                          label: o ? D.intl.string(D.t.SVKIdU) : D.intl.string(D.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: ts.U },
                          disabled: o,
                          children: d,
                      })
                : null;
        })(tq),
        nA = (0, eL.A)(tq, tW),
        nm =
            ((I = (0, eN.Vc)(tW.guild_id, tW, "MessageContextMenu")),
            (W = (0, eT.Lt)(tq.flags, X.pr7.IS_GUILD_OFFICIAL)),
            I
                ? W
                    ? (0, l.jsx)(s.Dr, {
                          id: "guild-official-unset",
                          action: () => {
                              eD.A.patchMessageGuildOfficial(tW.id, tq.id, !1);
                          },
                          label: D.intl.string(D.t["2km5Gf"]),
                          leadingAccessory: { type: "icon", icon: eO.$ },
                      })
                    : (0, l.jsx)(s.Dr, {
                          id: "guild-official-set",
                          action: () => {
                              eD.A.patchMessageGuildOfficial(tW.id, tq.id, !0);
                          },
                          label: D.intl.string(D.t["lE/PG3"]),
                          leadingAccessory: { type: "icon", icon: eR.L },
                      })
                : null),
        np = (0, q.A)(tq),
        nf = (0, C.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: tq.id,
            channel: tW,
            guildId: void 0,
            onHeightUpdate: t5,
            showIcon: !0,
        }),
        nE =
            tq.state !== X.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "resend",
                      label: D.intl.string(D.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: e3.f },
                      action: () => (0, tt.A)(tW, tq, void 0, te.A.getOptions(tq.id)),
                  }),
        ny = (0, eG.A)(tq, tW),
        nh =
            null != (z = tW.getGuildId()) &&
            tq.type === X.lAJ.USER_JOIN &&
            ei.A.canWithPartialContext(X.xBc.MANAGE_GUILD, { guildId: z })
                ? (0, l.jsx)(s.Dr, {
                      id: "configure",
                      label: D.intl.string(D.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ed.c },
                      icon: ed.c,
                      action: () => (0, eu.vc)(tW),
                  })
                : null,
        n_ = (0, eg.A)(tq, tW),
        nS = (function (e, t) {
            if (!(0, tp.f)("message_context_menu")) return null;
            let n = tE.A.getConversationForMessage(t.id, e.id);
            return null == n
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: tA.o },
                      icon: tA.o,
                      action: () => {
                          tm.A.openConversationsSection(), (0, tf.xI)(t.id, n);
                      },
                  });
        })(tq, tW),
        nb =
            ((el = (0, S.bG)([tl.A], () => tl.A.isSpeakingMessage(tW.id, tq.id), [tW, tq])),
            "" === tq.content
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "tts",
                      label: el ? D.intl.string(D.t.CJ30BP) : D.intl.string(D.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: tn._ },
                      icon: tn._,
                      action: () => (el ? (0, ti.pr)() : (0, ti.kP)(tW, tq)),
                  })),
        nI =
            null == tq.reactions || 0 === tq.reactions.length || (tq.isPoll() && !(0, eB.Gh)(tq))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "reactions",
                      label: D.intl.string(D.t.wikODq),
                      leadingAccessory: { type: "icon", icon: Z.S },
                      icon: Z.S,
                      action: () =>
                          (0, eF.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 475152));
                              return (t) => (0, l.jsx)(e, { ...t, message: tq });
                          }),
                  }),
        nx =
            0 ===
            (eo = (function (e) {
                let t = (0, S.bG)([b.default], () => b.default.getId()),
                    { poll: n } = e;
                if (!e.isPoll() || null == n) return x;
                let i = [];
                return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i;
            })(tq)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: eo.map((e) => j[e](tq)) }),
        nD = (function (e) {
            let { analyticsLocations: t } = (0, g.Ay)(),
                n = e.interactionMetadata?.authorizing_integration_owners[ty.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[ty.b.GUILD_INSTALL],
                r = e.interactionMetadata?.user.id,
                o = (0, S.bG)([e8.default], () => e8.default.getUser(n)),
                c = (0, S.bG)([tv.A], () => tv.A.getGuild(i)),
                d = tC.A.getChannel(e.channel_id),
                u = d?.getGuildId(),
                A = (0, S.bG)([e8.default], () => e8.default.getUser(r));
            if (
                (a.useEffect(() => {
                    null == o && null != n && (0, t_.wz)(n);
                }, [o, n]),
                !(0, tb._)(e))
            )
                return null;
            null == A && (A = new tj.A(e.interactionMetadata?.user));
            let m = null;
            if (null != c) {
                let t = (0, tD.Iv)(c, 18, !0);
                m = (0, l.jsx)(s.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(tI.Ay, { guild: c, size: tI.Ay.Sizes.MINI }),
                    leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                    id: "integration-owner",
                    label: c.name,
                    subtext: D.intl.formatToPlainString(D.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(s.Dr, {
                        action: () =>
                            (0, tx.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: t,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(tS.A, { user: o, size: th._3.SIZE_20 }),
                        subtext: D.intl.formatToPlainString(D.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(s.Dr, {
                id: "view-interaction-info",
                label: D.intl.string(D.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: ey.m },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(s.Dr, {
                              action: () =>
                                  (0, tx.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: t,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(tS.A, { user: A, size: th._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: D.intl.string(D.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(tq),
        nj = (function (e, t) {
            let { reducedMotion: n } = a.useContext(J.C),
                i = (0, et.Id)(t),
                r = (0, S.bG)([ei.A], () => ei.A.can(X.xBc.MANAGE_MESSAGES, t) && i, [t, i]),
                o = e.reactions.reduce(
                    (e, t) =>
                        t.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                            ? e
                            : [...e, t.emoji],
                    [],
                );
            return !r || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eB.Gh)(e))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-emoji-reactions",
                      label: D.intl.string(D.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: eK.F },
                      color: "danger",
                      children: o.map((i) =>
                          (0, l.jsx)(
                              s.Dr,
                              {
                                  id: `remove-emoji-reactions-${i.name ?? i.id}`,
                                  label: (0, ee.b3)(i),
                                  action: (n) => {
                                      n.shiftKey
                                          ? (0, Q.Jf)(t.id, e.id, i)
                                          : eH.A.show({
                                                title: D.intl.string(D.t["73GqTz"]),
                                                body: D.intl.string(D.t.dmy5bn),
                                                confirmText: D.intl.string(D.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: D.intl.string(D.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, Q.Jf)(t.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? er.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(eV, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(tq, tW),
        nC =
            ((eP = (0, et.Id)(tW)),
            !(0, S.bG)([ei.A], () => ei.A.can(X.xBc.MANAGE_MESSAGES, tW) && eP, [tW, eP]) ||
            null == tq.reactions ||
            0 === tq.reactions.length ||
            (tq.isPoll() && !(0, eB.Gh)(tq))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "remove-reactions",
                      label: D.intl.string(D.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eX.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, Q.Go)(tW.id, tq.id)
                              : eH.A.show({
                                    title: D.intl.string(D.t.iz3vYX),
                                    body: D.intl.string(D.t.VpjOCo),
                                    confirmText: D.intl.string(D.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: D.intl.string(D.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, Q.Go)(tW.id, tq.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        nv = (0, eE.A)(tq, tW),
        nM =
            ((tL = (0, S.bG)([e5.A], () => e5.A.getGuildId())),
            (tF = (0, e2.Qo)(tL)),
            (0, e9.ul)(tq)
                ? (0, l.jsx)(s.Dr, {
                      id: "report",
                      label: tF ? D.intl.string(D.t.n5EBAJ) : D.intl.string(D.t.GwbdGe),
                      action: () => (0, e0.V2)(tq, "web_message_context_menu"),
                      icon: tF ? eJ.p : eY.i,
                      leadingAccessory: { type: "icon", icon: tF ? eJ.p : eY.i },
                      color: "danger",
                  })
                : null),
        nT =
            ((tB = (0, S.bG)([e$.Ay], () => e$.Ay.get("iar_testing"))),
            (tX = (0, S.bG)([e8.default], () => e8.default.getCurrentUser())),
            (0, e9.ul)(tq) && null != tX && tX.isStaff() && tB
                ? (0, l.jsx)(s.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e0.Rj)(tq, "web_message_context_menu"),
                      icon: eY.i,
                      leadingAccessory: { type: "icon", icon: eY.i },
                      color: "danger",
                  })
                : null),
        nO = (function (e) {
            let t = (0, S.bG)([e7.A], () => e7.A.hasReportedMessage(e.channel_id, e.id)),
                n = (0, e1.KB)(e),
                i = n ? [ez.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, r] = (0, eQ.kn)(i);
            return ((0, eZ.l0)(() => {
                n && r(e6.i.AUTO_DISMISS);
            }),
            n)
                ? (0, l.jsx)(s.Dr, {
                      id: "report-to-mod",
                      label: t ? D.intl.string(e4.default["8wsdng"]) : D.intl.string(e4.default["1D+vqy"]),
                      action: () => {
                          r(e6.i.USER_DISMISS), (0, e0.dy)(e);
                      },
                      icon: eY.i,
                      disabled: t,
                      leadingAccessory: { type: "icon", icon: eY.i },
                      badge: a === ez.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(tq),
        nR = (0, eC.A)({ type: tY, id: tZ, name: t$ }),
        nN = (function (e, t) {
            let { perGuildMaxCount: n } = P.i$[V],
                { isLoading: i, saveRule: r, errorMessage: o } = (0, k.S)(),
                { createNewEditingRule: d } = (0, k.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, L.H6)(t),
                { rulesByTriggerType: p, updateRule: f } = (0, L.wP)(t),
                E = a.useMemo(() => p[V] ?? [], [p]),
                y = 0 === E.length,
                h = n > E.length && !y;
            if (!a.useMemo(() => (0, w.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
            let _ = e.split(" "),
                S = _.length;
            try {
                (0, G.wk)(_, H.bV);
            } catch (e) {
                return null;
            }
            let b = () => {
                    null != t &&
                        ((0, c.Z_)(),
                        B.A.open(t, X.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            d(t, V, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400));
                },
                I = async (t) => {
                    if (((0, c.Z_)(), !(await (0, F.Zy)(t.name, e)))) return;
                    let n = {
                        ...t,
                        triggerMetadata: {
                            ...t.triggerMetadata,
                            keywordFilter: [...(t.triggerMetadata?.keywordFilter ?? []), e],
                        },
                    };
                    await r(n, E),
                        f(n),
                        null != o
                            ? (0, M.P0)((0, T.o)(D.intl.string(D.t.wH6L0r), O.Ck.FAILURE))
                            : (0, M.P0)((0, T.o)(D.intl.string(D.t["0rdYm2"]), O.Ck.SUCCESS));
                },
                x = (0, l.jsx)(s.Dr, { id: "automod-rules-loading", label: D.intl.string(D.t.ZTNur7) });
            return (
                A ||
                    (x = (0, l.jsxs)(l.Fragment, {
                        children: [
                            y &&
                                (0, l.jsx)(s.Dr, {
                                    id: "add-first-rule",
                                    label: D.intl.string(D.t.f72Zqb),
                                    action: b,
                                    disabled: i,
                                }),
                            E.map((e) => {
                                let t = (0, P.J6)(V).reduce((t, n) => {
                                    let i = e.actions.find((e) => {
                                        let { type: t } = e;
                                        return n === t;
                                    });
                                    if (null == i) return t;
                                    let l = (0, U.x)(n, i);
                                    return t + `, ${l?.headerText}`;
                                }, "");
                                return (0, l.jsx)(
                                    s.iD,
                                    {
                                        id: e.id,
                                        label: e.name,
                                        subtext: (0, l.jsx)(R.E, {
                                            color: "text-muted",
                                            className: K.XX,
                                            variant: "text-xs/normal",
                                            children: t.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () => I(e),
                                    },
                                    e.id,
                                );
                            }),
                            h &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(s.bX, {}),
                                        (0, l.jsx)(s.Dr, {
                                            id: "add-another-rule",
                                            label: D.intl.string(D.t["0K5jDE"]),
                                            action: b,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(s.Dr, {
                    id: "guild-automod-add-selection",
                    label: D.intl.formatToPlainString(D.t.Kkjv1m, { keywordCount: S }),
                    leadingAccessory: { type: "icon", icon: N.l },
                    onFocus: () => {
                        u || (g(!0), m());
                    },
                    children: x,
                })
            );
        })(tJ, tW.getGuildId()),
        nG = (0, f.A)(t7, tq, {
            shouldHideMediaOptions: t3,
            contentType: tz?.contentType,
            originalContentType: tz?.originalContentType,
        }),
        nL =
            ((tH = (0, tO.Fg)(tq)),
            (tK = null != tz && (0, tO.qo)({ type: tT.D.GenericMedia, media: tz }, tH)),
            null != tz && tK
                ? (0, l.jsx)(
                      s.Dr,
                      {
                          id: "report-image-false-positive",
                          label: D.intl.string(D.t.ZH7P2h),
                          action: () => {
                              (0, eF.openModalLazy)(async () => {
                                  let { default: e } = await n(679276);
                                  return (t) =>
                                      (0, l.jsx)(e, {
                                          channelId: tq.channel_id,
                                          messageId: tq.id,
                                          mediaItemUrl: tz.url,
                                          ...t,
                                      });
                              });
                          },
                          leadingAccessory: { type: "icon", icon: tM.D },
                          icon: tM.D,
                      },
                      "report-image-false-positive",
                  )
                : null),
        nP =
            ((tV = tP.useConfig({ location: "use-save-voice-message-audio" }).enabled),
            (0, eT.Lt)(tq.flags, X.pr7.IS_VOICE_MESSAGE) && tV
                ? (0, l.jsx)(s.Dr, {
                      id: "save-voice-message-audio",
                      label: D.intl.string(D.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: tR.s },
                      icon: tR.s,
                      action: () => {
                          let e = (0, tN.XW)(tq.attachments[0].url);
                          (0, tG.h)({ href: e });
                      },
                  })
                : null),
        nw = (function (e, t) {
            let n = e?.url ?? "",
                i = (0, S.bG)([tw.Ay], () => tw.Ay.isVideoStatsEnabled(n)),
                r = a.useCallback(() => {
                    "" !== n && (0, tw.FM)(n);
                }, [n]);
            if (null == e || !(0, tU.XB)(e.contentType) || t?.shouldHideMediaOptions === !0) return null;
            let { enableVideoStatsForNerds: o } = (function (e) {
                let { location: t } = e;
                return tk.getConfig({ location: t });
            })({ location: "useVideoStatsMenuItem" });
            return o
                ? (0, l.jsx)(s.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: ey.m },
                      checked: i,
                      action: r,
                  })
                : null;
        })(tz, { shouldHideMediaOptions: t3 }),
        nk = (0, E.A)(tQ ?? t0, t1, tq, { shouldHideMediaOptions: t3 }),
        nU = (0, A.A)({ id: tq.id, label: D.intl.string(D.t.zBoHlf), shiftId: `${tq.channel_id}-${tq.id}` }),
        nF = (function (e) {
            let { messageId: t, itemId: n, type: i, imageSrc: r } = e,
                o = en.Q_.useSetting(),
                { tidaWebformEnabled: c } = m.A.useExperiment(
                    { location: "useMessageDetailsItem" },
                    { autoTrackExposure: !1 },
                ),
                d = a.useCallback(() => {
                    (0, ef.C)(t);
                }, [t]),
                u = a.useCallback(() => {
                    null != n && (0, ef.C)(n);
                }, [n]),
                g = a.useCallback(() => {
                    null != r && (0, ef.C)(r);
                }, [r]),
                A = a.useCallback(() => {
                    null != r && (0, eI.A)(r);
                }, [r]),
                p = "sticker" === i;
            if (!o || !ef.p5 || !c || ("emoji" !== i && !p) || null == n) return null;
            let f = p ? D.intl.string(D.t.SJ3249) : D.intl.string(D.t.Ap2oVy),
                E = p ? D.intl.string(D.t.B1ubHx) : D.intl.string(D.t.cIoudn),
                y = p ? D.intl.string(D.t["qAEi+C"]) : D.intl.string(D.t.gDAM2n);
            return (0, l.jsxs)(s.Dr, {
                id: "message-details",
                label: D.intl.string(D.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: ey.m },
                children: [
                    (0, l.jsx)(s.Dr, {
                        id: "copy-message-id",
                        label: D.intl.string(D.t.zBoHlf),
                        action: d,
                        leadingAccessory: { type: "icon", icon: eh.L },
                    }),
                    (0, l.jsx)(s.Dr, {
                        id: "copy-item-id",
                        label: f,
                        action: u,
                        leadingAccessory: { type: "icon", icon: eh.L },
                    }),
                    null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.Dr, {
                                    id: "copy-image-link",
                                    label: E,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: e_.q },
                                }),
                                (0, l.jsx)(s.Dr, {
                                    id: "open-image-link",
                                    label: y,
                                    action: A,
                                    leadingAccessory: { type: "icon", icon: eS.W },
                                    trailingIndicator: { type: "icon", icon: eb.I },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: tq.id, itemId: tZ, type: tY, imageSrc: t0 }),
        nB = (0, l.jsx)(s.rX, { children: nF ?? nU }),
        nX = (0, l.jsxs)(s.rX, { children: [nR, nN, nG, nL, nP, nw] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: t6,
        onClose: t9,
        "aria-label": t4,
        onSelect: nt,
        children: [
            (0, l.jsx)(s.rX, { children: nl }),
            (0, l.jsx)(s.rX, { children: na }),
            (0, l.jsxs)(s.rX, { children: ["" === tJ ? ni : null, nr, nI] }),
            (0, l.jsxs)(s.rX, { children: [ns, no, nc, nd] }),
            (0, l.jsxs)(s.rX, { children: [nu, ng, nA, nm, np, nf, nE, ny, nh, n_, nS, nb, nx, nD] }),
            (0, l.jsxs)(s.rX, { children: [nj, nC, nv, t2 && nM, t2 && nT, nO] }),
            nn
                ? (0, l.jsxs)(l.Fragment, { children: [nB, nX, null == nF && (0, l.jsx)(s.rX, { children: nk })] })
                : (0, l.jsxs)(l.Fragment, { children: [nX, (0, l.jsx)(s.rX, { children: nk }), nB] }),
        ],
    });
}
