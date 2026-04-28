n.d(t, { c: () => tF, default: () => tB });
var i,
    l = n(627968),
    a = n(64700),
    s = n(621466),
    r = n(477782),
    o = n(550079),
    d = n(442433),
    c = n(155718),
    u = n(793574),
    g = n(688810),
    A = n(50268),
    m = n(486503),
    f = n(373963),
    p = n(115184),
    y = n(777933),
    h = n(826308),
    E = n(337358),
    _ = n(962514);
n(321073);
var S = n(17928),
    b = n(495544),
    x = (((i = {})[(i.END_EARLY = 0)] = "END_EARLY"), i);
let j = [];
var I = n(985018);
let M = {
    [x.END_EARLY]: (e) =>
        (0, l.jsx)(r.Dr, {
            id: "end-poll-early",
            label: I.intl.string(I.t.grdwwt),
            icon: E.O,
            leadingAccessory: { type: "icon", icon: E.O },
            action: () => {
                _.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
        }),
};
var D = n(646911),
    v = n(954571),
    T = n(691540),
    C = n(857250),
    G = n(97483),
    L = n(834730),
    N = n(231483),
    O = n(627794),
    R = n(928348),
    w = n(53594),
    k = n(979816),
    U = n(268749),
    P = n(239705),
    B = n(264349),
    F = n(997509),
    X = n(652215),
    H = n(243277),
    q = n(365863);
let z = H.uh.KEYWORD;
var K = n(880457),
    V = n(503698),
    J = n.n(V),
    Z = n(844222),
    W = n(460905),
    $ = n(217306),
    Y = n(822123),
    Q = n(649963),
    ee = n(815807),
    et = n(406704),
    en = n(253932),
    ei = n(576705),
    el = n(486020),
    ea = n(625494),
    es = n(690521),
    er = n(307731),
    eo = n(666833);
function ed(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: J()(i, eo.Z),
        src:
            null != t.id
                ? el.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : es.Ay.getURL(t.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
var ec = n(290136),
    eu = n(519222),
    eg = n(345254),
    eA = n(624479),
    em = n(814890),
    ef = n(383233),
    ep = n(957565),
    ey = n(483768),
    eh = n(885574),
    eE = n(473935),
    e_ = n(173936),
    eS = n(93688),
    eb = n(509434),
    ex = n(975807),
    ej = n(22231),
    eI = n(720149),
    eM = n(697470),
    eD = n(253925),
    ev = n(843626),
    eT = n(427209);
n(938796);
var eC = n(665260),
    eG = n(563119),
    eL = n(581925),
    eN = n(780574),
    eO = n(20883),
    eR = n(979766),
    ew = n(990078),
    ek = n(827319);
let eU = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function eP(e) {
    let { emoji: t, isFocused: n } = e,
        { animated: i, src: a, surrogates: s } = t;
    return (
        null == a && null != t.id
            ? (a = el.Ay.getEmojiURL({ id: t.id, animated: !!i, size: 20 }))
            : null == a && (a = es.Ay.getURL(s)),
        (0, l.jsx)(ew.m, {
            text: (0, es.N)(t),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: n,
            children: (0, l.jsx)("div", {
                "aria-label": I.intl.formatToPlainString(I.t["/iYSo6"], { emojiName: t.name }),
                className: J()(ek.x6, { [ek.in]: n }),
                children:
                    null == a || "" === a.trim()
                        ? (0, l.jsx)("span", { className: J()("emoji", "emoji-text", ek.Kk), children: s })
                        : (0, l.jsx)("img", { className: ek.Kk, src: a, alt: "" }),
            }),
        })
    );
}
var eB = n(192308),
    eF = n(969632),
    eX = n(997571),
    eH = n(157559),
    eq = n(769297);
function ez(e) {
    let { emoji: t, reducedMotionEnabled: n, className: i = "", isFocused: a = !1 } = e;
    return (0, l.jsx)("img", {
        className: i,
        src:
            null != t.id
                ? el.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : es.Ay.getURL(t.name ?? ""),
        alt: "",
    });
}
var eK = n(110384),
    eV = n(517997),
    eJ = n(554146),
    eZ = n(111159),
    eW = n(138134),
    e$ = n(964486),
    eY = n(865116),
    eQ = n(932001),
    e0 = n(928658),
    e7 = n(400528),
    e1 = n(376708),
    e5 = n(715757),
    e9 = n(967198),
    e2 = n(287809),
    e8 = n(628691),
    e4 = n(49999),
    e6 = n(221314),
    e3 = n(663417),
    te = n(965407),
    tt = n(249700),
    tn = n(556112),
    ti = n(54570),
    tl = n(8880),
    ta = n(163328),
    ts = n(636537),
    tr = n(37646),
    to = n(228366),
    td = n(147087),
    tc = n(773669),
    tu = n(535456);
let tg = new Map();
var tA = n(534890),
    tm = n(604681),
    tf = n(828488),
    tp = n(141850),
    ty = n(958720),
    th = n(485845),
    tE = n(778712),
    t_ = n(803306),
    tS = n(966327),
    tb = n(597929),
    tx = n(548118),
    tj = n(975732),
    tI = n(260509),
    tM = n(889227),
    tD = n(734057),
    tv = n(71393),
    tT = n(87221),
    tC = n(930125),
    tG = n(282108),
    tL = n(32880),
    tN = n(803316),
    tO = n(76843),
    tR = n(945810);
let tw = (0, tR.mj)({
    name: "2026-04-save-voice-message-menu-item",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tk = n(953584);
let tU = (0, tR.mj)({
    name: "2025-12-video-stats-for-nerds",
    kind: "user",
    defaultConfig: { enableVideoStatsForNerds: !1 },
    variations: { 0: { enableVideoStatsForNerds: !1 }, 1: { enableVideoStatsForNerds: !0 } },
});
var tP = n(77350);
function tB(e) {
    let t,
        n,
        i,
        a,
        {
            channel: r,
            message: o,
            target: c,
            mediaItem: A,
            shouldHideMediaOptions: m,
            onSelect: f,
            onHeightUpdate: p,
        } = e,
        { analyticsLocations: y } = (0, g.Ay)([u.A.MESSAGE_CONTEXT_MENU]),
        h = c,
        E = c.getAttribute("data-type"),
        _ = c.getAttribute("data-id"),
        S = c.getAttribute("data-name");
    if (null != A) n = t = i = A.url;
    else
        for (; (0, s.vq)(h); )
            (0, s.vq)(h, HTMLImageElement) && null != h.src && (n = h.src),
                (0, s.vq)(h, HTMLAnchorElement) &&
                    null != h.href &&
                    ((t = h.href),
                    (a = h.textContent),
                    null == n &&
                        "img" === h.getAttribute("data-role") &&
                        ((n = t),
                        h.hasAttribute("data-safe-src") &&
                            "" !== h.getAttribute("data-safe-src") &&
                            (i = h.getAttribute("data-safe-src")))),
                (h = h.parentNode);
    let b = document.getSelection()?.toString() ?? "";
    return (0, l.jsx)(g.f5, {
        value: y,
        children: tF({
            message: o,
            channel: r,
            mediaItem: A,
            textSelection: b,
            favoriteableType: E,
            favoriteableId: _,
            favoriteableName: S,
            itemHref: t,
            itemSrc: n,
            itemSafeSrc: i,
            itemTextContent: a,
            canReport: !0,
            onHeightUpdate: p,
            onSelect: f,
            onClose: d.Z_,
            navId: "message",
            ariaLabel: I.intl.string(I.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function tF(e) {
    let t,
        i,
        s,
        u,
        E,
        _,
        x,
        V,
        J,
        el,
        eo,
        ew,
        tR,
        tB,
        tF,
        tX,
        tH,
        tq,
        tz,
        tK,
        tV,
        tJ,
        {
            message: tZ,
            channel: tW,
            mediaItem: t$,
            textSelection: tY,
            favoriteableType: tQ,
            favoriteableId: t0,
            favoriteableName: t7,
            itemHref: t1,
            itemSrc: t5,
            itemSafeSrc: t9,
            itemTextContent: t2,
            canReport: t8,
            onHeightUpdate: t4,
            onSelect: t6,
            onClose: t3,
            navId: ne,
            ariaLabel: nt,
            shouldHideMediaOptions: nn = !1,
        } = e,
        ni = a.useRef(null);
    a.useEffect(() => {
        ni.current = Date.now();
    }, []),
        a.useEffect(
            () => () => {
                if (null != ni.current) {
                    let e = Date.now() - ni.current;
                    v.default.track(X.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: tW.id,
                        guild_id: tW.getGuildId() ?? void 0,
                        message_id: tZ.id,
                    });
                }
            },
            [tW, tZ],
        );
    let nl = a.useCallback(() => {
            if (null != ni.current) {
                let e = Date.now() - ni.current;
                v.default.track(X.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: tW.id,
                    guild_id: tW.getGuildId() ?? void 0,
                    message_id: tZ.id,
                });
            }
            t6?.();
        }, [t6, tW, tZ]),
        { tidaWebformEnabled: na } = m.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        ns =
            ((t = (0, Y.D6)(tW.guild_id).filter(
                (e) =>
                    !(e.useSpriteSheet && eU.indexOf(e.uniqueName ?? "") >= 0) &&
                    !es.Ay.isEmojiPremiumLocked({ emoji: e, channel: tW, intention: er.EmojiIntention.REACTION }),
            )).length > 4 && (t.length = 4),
            (i = en.jW.useSetting()),
            (s = (0, et.Id)(tW)),
            (0, S.bG)([ei.A], () => i && s && (tW.isPrivate() || ei.A.can(X.xBc.ADD_REACTIONS, tW)), [tW, s, i]) &&
            t.length > 0
                ? (0, l.jsx)(r.rX, {
                      className: ek.iE,
                      children: t.map((e, t) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `quickreact-${e.id ?? t}`,
                                  render: (t) => {
                                      let { isFocused: n } = t;
                                      return (0, l.jsx)(eP, { emoji: e, isFocused: n });
                                  },
                                  action: () => {
                                      (0, Q.BB)(tW.id, tZ.id, (0, ee.jq)(e), Q.qN.MESSAGE_CONTEXT_MENU);
                                  },
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              t,
                          ),
                      ),
                  })
                : null),
        nr = (0, f.A)(tY),
        no = (0, h.A)(tY),
        nd = (function (e, t) {
            let { reducedMotion: n } = a.useContext(Z.C),
                i = (0, et.Id)(t),
                s = (0, S.bG)([ei.A], () => (t.isPrivate() || ei.A.can(X.xBc.ADD_REACTIONS, t)) && i, [t, i]),
                o = (0, Y.D6)(t.getGuildId());
            if (!en.jW.getSetting() || !s) return null;
            let d = o
                .filter(
                    (e) =>
                        !es.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: t, intention: er.EmojiIntention.REACTION }),
                )
                .slice(0, 12)
                .map((i, a) =>
                    (0, l.jsx)(
                        r.Dr,
                        {
                            color: "default",
                            id: i.id ?? i.optionallyDiverseSequence ?? i.name,
                            label: `:${i.name}:`,
                            icon: (e) => (0, l.jsx)(ed, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                            leadingAccessory: {
                                type: "emoji",
                                emojiId: i.id,
                                src: null == i.id ? es.Ay.getURL(i.optionallyDiverseSequence ?? "") : void 0,
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
            return (0, l.jsx)(r.Dr, {
                id: "add-reaction",
                label: I.intl.string(I.t.lfIHs4),
                leadingAccessory: { type: "icon", icon: W.n },
                action: () => {
                    ea._.dispatchKeyed(X.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                },
                color: "default",
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        d,
                        (0, l.jsx)(r.bX, {}),
                        (0, l.jsx)(r.Dr, {
                            color: "default",
                            id: "other-reactions",
                            label: I.intl.string(I.t["OBCR+p"]),
                            icon: W.n,
                            leadingAccessory: { type: "icon", icon: $.S },
                            action: () => {
                                ea._.dispatchKeyed(X.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                            },
                        }),
                    ],
                }),
            });
        })(tZ, tW),
        nc =
            ((u = (0, S.bG)([b.default], () => b.default.getId())),
            (E = (0, et.Id)(tW)),
            (_ = (0, et.s5)(tW)),
            (0, eM.A)(tZ, u) && E && !_
                ? (0, l.jsx)(r.Dr, {
                      id: "edit",
                      label: I.intl.string(I.t.fsBWmS),
                      action: () => eI.A.startEditMessageRecord(tW.id, tZ),
                      leadingAccessory: { type: "icon", icon: ej.R },
                      icon: ej.R,
                  })
                : null),
        nu = (0, eV.u)(tW, tZ)
            ? (0, l.jsx)(r.Dr, {
                  id: "reply",
                  label: I.intl.string(I.t["5IEsGx"]),
                  leadingAccessory: { type: "icon", icon: eK.W },
                  icon: eK.W,
                  action: (e) => {
                      (0, eu.$b)(tW, tZ, e);
                  },
              })
            : null,
        ng = (0, ev.m)(tZ)
            ? (0, l.jsx)(r.Dr, {
                  id: "forward",
                  label: I.intl.string(I.t.I3ltXO),
                  leadingAccessory: { type: "icon", icon: eT.A },
                  icon: eT.A,
                  action: () => {
                      (0, eu.Z4)(tW, tZ);
                  },
              })
            : null,
        nA = (0, et.n)(tW, tZ)
            ? (0, l.jsx)(r.Dr, {
                  id: "thread",
                  label: I.intl.string(I.t.rBIGBL),
                  leadingAccessory: { type: "icon", icon: ta.y },
                  icon: ta.y,
                  action: () => {
                      (0, eu.Nw)(tW, tZ);
                  },
              })
            : null,
        nm = (function (e) {
            if (!ep.p5) return null;
            let t = e.getContentMessage(),
                n = (0, ef._c)(t) ? (0, em.kC)(t.components) : t.content;
            return null == n || 0 === n.length
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "copy-text",
                      label: I.intl.string(I.t.JrGD7E),
                      leadingAccessory: { type: "icon", icon: eA.T },
                      icon: eA.T,
                      action: () => {
                          (0, ep.C)(n);
                      },
                  });
        })(tZ),
        nf = (function (e) {
            let t,
                {
                    handleTranslate: i,
                    handleRevertTranslation: s,
                    isTranslating: o,
                    isTranslated: d,
                } = (function (e) {
                    let [t, n] = a.useState(!1),
                        i = (0, S.bG)([tc.default], () => tc.default.locale);
                    return {
                        handleTranslate: a.useCallback(
                            async (l, a) => {
                                if (t) return;
                                let s = l ?? i;
                                n(!0);
                                let r = a ?? (0, I.getAvailableLocales)().find((e) => e.value === s)?.name ?? s;
                                tg.has(e.id) || tg.set(e.id, e.content),
                                    (0, T.P0)(
                                        (0, C.o)(
                                            I.intl.formatToPlainString(I.t.Znl8Z8, { targetLanguage: r }),
                                            G.Ck.AI,
                                        ),
                                    );
                                try {
                                    let t = await ts.Bo.post({
                                        url: X.Rsh.AI_TRANSLATE,
                                        body: { content: e.content, locale: s },
                                        rejectWithError: !1,
                                    });
                                    t.ok &&
                                        t.body &&
                                        (to.h.dispatch({
                                            type: "MESSAGE_UPDATE",
                                            message: { id: e.id, channel_id: e.channel_id, content: t.body.content },
                                        }),
                                        (0, T.P0)(
                                            (0, C.o)(
                                                I.intl.formatToPlainString(I.t.FtVUqm, { targetLanguage: r }),
                                                G.Ck.SUCCESS,
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
                c =
                    ((t = (0, I.getAvailableLocales)()),
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
                                    r.Dr,
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
                u = (0, td.b)();
            return null != e.content && "" !== e.content.trim() && u
                ? d
                    ? (0, l.jsx)(r.Dr, {
                          id: "revert-translation",
                          label: I.intl.string(I.t.JC9BXn),
                          leadingAccessory: { type: "icon", icon: tr.U },
                          icon: tr.U,
                          action: s,
                          disabled: o,
                      })
                    : (0, l.jsx)(r.Dr, {
                          id: "translate",
                          label: o ? I.intl.string(I.t.SVKIdU) : I.intl.string(I.t["6epDlR"]),
                          action: () => i(),
                          leadingAccessory: { type: "icon", icon: tr.U },
                          disabled: o,
                          children: c,
                      })
                : null;
        })(tZ),
        np = (0, eR.A)(tZ, tW),
        ny =
            ((x = (0, eN.Vc)(tW.guild_id, tW, "MessageContextMenu")),
            (V = (0, eC.Lt)(tZ.flags, X.pr7.IS_GUILD_OFFICIAL)),
            x
                ? V
                    ? (0, l.jsx)(r.Dr, {
                          id: "guild-official-unset",
                          action: () => {
                              eI.A.patchMessageGuildOfficial(tW.id, tZ.id, !1);
                          },
                          label: I.intl.string(I.t["2km5Gf"]),
                          leadingAccessory: { type: "icon", icon: eG.$ },
                      })
                    : (0, l.jsx)(r.Dr, {
                          id: "guild-official-set",
                          action: () => {
                              eI.A.patchMessageGuildOfficial(tW.id, tZ.id, !0);
                          },
                          label: I.intl.string(I.t["lE/PG3"]),
                          leadingAccessory: { type: "icon", icon: eL.L },
                      })
                : null),
        nh = (0, K.A)(tZ),
        nE = (0, D.A)({
            commandType: c.kc.MESSAGE,
            commandTargetId: tZ.id,
            channel: tW,
            guildId: void 0,
            onHeightUpdate: t4,
            showIcon: !0,
        }),
        n_ =
            tZ.state !== X.cmJ.SEND_FAILED
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "resend",
                      label: I.intl.string(I.t.lXHojr),
                      leadingAccessory: { type: "icon", icon: e3.f },
                      action: () => (0, tt.A)(tW, tZ, void 0, te.A.getOptions(tZ.id)),
                  }),
        nS = (0, eO.A)(tZ, tW),
        nb =
            null != (J = tW.getGuildId()) &&
            tZ.type === X.lAJ.USER_JOIN &&
            ei.A.canWithPartialContext(X.xBc.MANAGE_GUILD, { guildId: J })
                ? (0, l.jsx)(r.Dr, {
                      id: "configure",
                      label: I.intl.string(I.t.NpHUi1),
                      leadingAccessory: { type: "icon", icon: ec.c },
                      icon: ec.c,
                      action: () => (0, eu.vc)(tW),
                  })
                : null,
        nx = (0, eg.A)(tZ, tW),
        nj =
            ((el = (0, tf.ac)("message_context_menu")),
            (eo = (0, S.bG)([ty.A], () => ty.A.getConversationForMessage(tW.id, tZ.id) ?? null, [tW.id, tZ.id])),
            (ew = a.useCallback(() => {
                tm.A.openConversationsSection(), (0, tp.xI)(tW.id, eo);
            }, [tW.id, eo])),
            el && null != eo
                ? (0, l.jsx)(r.Dr, {
                      id: "view-conversation",
                      label: "View Conversation",
                      leadingAccessory: { type: "icon", icon: tA.o },
                      icon: tA.o,
                      action: ew,
                  })
                : null),
        nI =
            ((tR = (0, S.bG)([tl.A], () => tl.A.isSpeakingMessage(tW.id, tZ.id), [tW, tZ])),
            "" === tZ.content
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "tts",
                      label: tR ? I.intl.string(I.t.CJ30BP) : I.intl.string(I.t.yGLjXF),
                      leadingAccessory: { type: "icon", icon: tn._ },
                      icon: tn._,
                      action: () => (tR ? (0, ti.pr)() : (0, ti.kP)(tW, tZ)),
                  })),
        nM =
            null == tZ.reactions || 0 === tZ.reactions.length || (tZ.isPoll() && !(0, eF.Gh)(tZ))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "reactions",
                      label: I.intl.string(I.t.wikODq),
                      leadingAccessory: { type: "icon", icon: $.S },
                      icon: $.S,
                      action: () =>
                          (0, eB.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("77067"), n.e("39241")]).then(
                                  n.bind(n, 475152),
                              );
                              return (t) => (0, l.jsx)(e, { ...t, message: tZ });
                          }),
                  }),
        nD =
            0 ===
            (tB = (function (e) {
                let t = (0, S.bG)([b.default], () => b.default.getId()),
                    { poll: n } = e;
                if (!e.isPoll() || null == n) return j;
                let i = [];
                return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || i.push(0), i;
            })(tZ)).length
                ? null
                : (0, l.jsx)(l.Fragment, { children: tB.map((e) => M[e](tZ)) }),
        nv = (function (e) {
            let { analyticsLocations: t } = (0, g.Ay)(),
                n = e.interactionMetadata?.authorizing_integration_owners[th.b.USER_INSTALL],
                i = e.interactionMetadata?.authorizing_integration_owners[th.b.GUILD_INSTALL],
                s = e.interactionMetadata?.user.id,
                o = (0, S.bG)([e2.default], () => e2.default.getUser(n)),
                d = (0, S.bG)([tv.A], () => tv.A.getGuild(i)),
                c = tD.A.getChannel(e.channel_id),
                u = c?.getGuildId(),
                A = (0, S.bG)([e2.default], () => e2.default.getUser(s));
            if (
                (a.useEffect(() => {
                    null == o && null != n && (0, t_.wz)(n);
                }, [o, n]),
                !(0, tb._)(e))
            )
                return null;
            null == A && (A = new tM.A(e.interactionMetadata?.user));
            let m = null;
            if (null != d) {
                let t = (0, tI.Iv)(d, 18, !0);
                m = (0, l.jsx)(r.Dr, {
                    disabled: !0,
                    iconLeft: () => (0, l.jsx)(tx.Ay, { guild: d, size: tx.Ay.Sizes.MINI }),
                    leadingAccessory: null != t ? { type: "image", src: t } : void 0,
                    id: "integration-owner",
                    label: d.name,
                    subtext: I.intl.formatToPlainString(I.t.ShLXXB, { application: e.author.username }),
                });
            } else
                null != o &&
                    (m = (0, l.jsx)(r.Dr, {
                        action: () =>
                            (0, tj.openUserProfileModal)({
                                userId: o.id,
                                guildId: u,
                                channelId: e.channel_id,
                                sourceAnalyticsLocations: t,
                            }),
                        leadingAccessory: { type: "avatar", src: o.getAvatarURL(u, 18) },
                        id: "integration-owner",
                        label: o.username,
                        iconLeft: () => (0, l.jsx)(tS.A, { user: o, size: tE._3.SIZE_20 }),
                        subtext: I.intl.formatToPlainString(I.t.ShLXXB, { application: e.author.username }),
                    }));
            return (0, l.jsxs)(r.Dr, {
                id: "view-interaction-info",
                label: I.intl.string(I.t.Rjezbz),
                leadingAccessory: { type: "icon", icon: eh.m },
                children: [
                    m,
                    null != A
                        ? (0, l.jsx)(r.Dr, {
                              action: () =>
                                  (0, tj.openUserProfileModal)({
                                      userId: A.id,
                                      guildId: u,
                                      channelId: e.channel_id,
                                      sourceAnalyticsLocations: t,
                                  }),
                              leadingAccessory: { type: "avatar", src: A.getAvatarURL(u, 18) },
                              iconLeft: () => (0, l.jsx)(tS.A, { user: A, size: tE._3.SIZE_20 }),
                              id: "interaction-user",
                              label: A.username,
                              subtext: I.intl.string(I.t["04gxNg"]),
                          })
                        : null,
                ],
            });
        })(tZ),
        nT = (function (e, t) {
            let { reducedMotion: n } = a.useContext(Z.C),
                i = (0, et.Id)(t),
                s = (0, S.bG)([ei.A], () => ei.A.can(X.xBc.MANAGE_MESSAGES, t) && i, [t, i]),
                o = e.reactions.reduce(
                    (e, t) =>
                        t.count_details?.vote != null ||
                        null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                            ? e
                            : [...e, t.emoji],
                    [],
                );
            return !s || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, eF.Gh)(e))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-emoji-reactions",
                      label: I.intl.string(I.t["zx/e4P"]),
                      leadingAccessory: { type: "icon", icon: eq.F },
                      color: "danger",
                      children: o.map((i) =>
                          (0, l.jsx)(
                              r.Dr,
                              {
                                  id: `remove-emoji-reactions-${i.name ?? i.id}`,
                                  label: (0, ee.b3)(i),
                                  action: (n) => {
                                      n.shiftKey
                                          ? (0, Q.Jf)(t.id, e.id, i)
                                          : eH.A.show({
                                                title: I.intl.string(I.t["73GqTz"]),
                                                body: I.intl.string(I.t.dmy5bn),
                                                confirmText: I.intl.string(I.t.p89ACt),
                                                confirmVariant: "critical-primary",
                                                cancelText: I.intl.string(I.t.gm1Vej),
                                                onConfirm: () => {
                                                    (0, Q.Jf)(t.id, e.id, i);
                                                },
                                            });
                                  },
                                  leadingAccessory: {
                                      type: "emoji",
                                      emojiId: i.id,
                                      src: null == i.id ? es.Ay.getURL(i.name ?? "") : void 0,
                                      animated: i.animated,
                                  },
                                  icon: (e) => (0, l.jsx)(ez, { ...e, reducedMotionEnabled: n.enabled, emoji: i }),
                                  dontCloseOnActionIfHoldingShiftKey: !0,
                              },
                              i.name ?? i.id,
                          ),
                      ),
                  });
        })(tZ, tW),
        nC =
            ((tF = (0, et.Id)(tW)),
            !(0, S.bG)([ei.A], () => ei.A.can(X.xBc.MANAGE_MESSAGES, tW) && tF, [tW, tF]) ||
            null == tZ.reactions ||
            0 === tZ.reactions.length ||
            (tZ.isPoll() && !(0, eF.Gh)(tZ))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "remove-reactions",
                      label: I.intl.string(I.t.ZbtGBm),
                      leadingAccessory: { type: "icon", icon: eX.t },
                      action: function (e) {
                          e.shiftKey
                              ? (0, Q.Go)(tW.id, tZ.id)
                              : eH.A.show({
                                    title: I.intl.string(I.t.iz3vYX),
                                    body: I.intl.string(I.t.VpjOCo),
                                    confirmText: I.intl.string(I.t.p89ACt),
                                    confirmVariant: "critical-primary",
                                    cancelText: I.intl.string(I.t.gm1Vej),
                                    onConfirm: () => {
                                        (0, Q.Go)(tW.id, tZ.id);
                                    },
                                });
                      },
                      color: "danger",
                  })),
        nG = (0, ey.A)(tZ, tW),
        nL =
            ((tX = (0, S.bG)([e9.A], () => e9.A.getGuildId())),
            (tH = (0, e5.Qo)(tX)),
            (0, e8.ul)(tZ)
                ? (0, l.jsx)(r.Dr, {
                      id: "report",
                      label: tH ? I.intl.string(I.t.n5EBAJ) : I.intl.string(I.t.GwbdGe),
                      action: () => (0, e0.V2)(tZ, "web_message_context_menu"),
                      icon: tH ? eZ.p : eW.i,
                      leadingAccessory: { type: "icon", icon: tH ? eZ.p : eW.i },
                      color: "danger",
                  })
                : null),
        nN =
            ((tq = (0, S.bG)([eY.Ay], () => eY.Ay.get("iar_testing"))),
            (tz = (0, S.bG)([e2.default], () => e2.default.getCurrentUser())),
            (0, e8.ul)(tZ) && null != tz && tz.isStaff() && tq
                ? (0, l.jsx)(r.Dr, {
                      id: "staff-test-message-report",
                      label: "[STAFF] Test Message Report",
                      action: () => (0, e0.Rj)(tZ, "web_message_context_menu"),
                      icon: eW.i,
                      leadingAccessory: { type: "icon", icon: eW.i },
                      color: "danger",
                  })
                : null),
        nO = (function (e) {
            let t = (0, S.bG)([e7.A], () => e7.A.hasReportedMessage(e.channel_id, e.id)),
                n = (0, e1.KB)(e),
                i = n ? [eJ.M.REPORT_TO_MOD_NEW_TAG] : [],
                [a, s] = (0, eQ.kn)(i);
            return ((0, e$.l0)(() => {
                n && s(e4.i.AUTO_DISMISS);
            }),
            n)
                ? (0, l.jsx)(r.Dr, {
                      id: "report-to-mod",
                      label: t ? I.intl.string(e6.default["8wsdng"]) : I.intl.string(e6.default["1D+vqy"]),
                      action: () => {
                          s(e4.i.USER_DISMISS), (0, e0.dy)(e);
                      },
                      icon: eW.i,
                      disabled: t,
                      leadingAccessory: { type: "icon", icon: eW.i },
                      badge: a === eJ.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                      color: "danger",
                  })
                : null;
        })(tZ),
        nR = (0, eD.A)({ type: tQ, id: t0, name: t7 }),
        nw = (function (e, t) {
            let { perGuildMaxCount: n } = w.i$[z],
                { isLoading: i, saveRule: s, errorMessage: o } = (0, U.S)(),
                { createNewEditingRule: c } = (0, U.U)(),
                [u, g] = a.useState(!1),
                [A, m] = (0, R.H6)(t),
                { rulesByTriggerType: f, updateRule: p } = (0, R.wP)(t),
                y = a.useMemo(() => f[z] ?? [], [f]),
                h = 0 === y.length,
                E = n > y.length && !h;
            if (!a.useMemo(() => (0, k.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
            let _ = e.split(" "),
                S = _.length;
            try {
                (0, O.wk)(_, H.bV);
            } catch (e) {
                return null;
            }
            let b = () => {
                    null != t &&
                        ((0, d.Z_)(),
                        F.A.open(t, X.BEX.GUILD_AUTOMOD),
                        setTimeout(() => {
                            c(t, z, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                        }, 400));
                },
                x = async (t) => {
                    if (((0, d.Z_)(), !(await (0, B.Zy)(t.name, e)))) return;
                    let n = {
                        ...t,
                        triggerMetadata: {
                            ...t.triggerMetadata,
                            keywordFilter: [...(t.triggerMetadata?.keywordFilter ?? []), e],
                        },
                    };
                    await s(n, y),
                        p(n),
                        null != o
                            ? (0, T.P0)((0, C.o)(I.intl.string(I.t.wH6L0r), G.Ck.FAILURE))
                            : (0, T.P0)((0, C.o)(I.intl.string(I.t["0rdYm2"]), G.Ck.SUCCESS));
                },
                j = (0, l.jsx)(r.Dr, { id: "automod-rules-loading", label: I.intl.string(I.t.ZTNur7) });
            return (
                A ||
                    (j = (0, l.jsxs)(l.Fragment, {
                        children: [
                            h &&
                                (0, l.jsx)(r.Dr, {
                                    id: "add-first-rule",
                                    label: I.intl.string(I.t.f72Zqb),
                                    action: b,
                                    disabled: i,
                                }),
                            y.map((e) => {
                                let t = (0, w.J6)(z).reduce((t, n) => {
                                    let i = e.actions.find((e) => {
                                        let { type: t } = e;
                                        return n === t;
                                    });
                                    if (null == i) return t;
                                    let l = (0, P.x)(n, i);
                                    return t + `, ${l?.headerText}`;
                                }, "");
                                return (0, l.jsx)(
                                    r.iD,
                                    {
                                        id: e.id,
                                        label: e.name,
                                        subtext: (0, l.jsx)(L.E, {
                                            color: "text-muted",
                                            className: q.XX,
                                            variant: "text-xs/normal",
                                            children: t.slice(2),
                                        }),
                                        group: "automod-rule-selection",
                                        checked: !1,
                                        disabled: i,
                                        action: () => x(e),
                                    },
                                    e.id,
                                );
                            }),
                            E &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(r.bX, {}),
                                        (0, l.jsx)(r.Dr, {
                                            id: "add-another-rule",
                                            label: I.intl.string(I.t["0K5jDE"]),
                                            action: b,
                                            disabled: i,
                                        }),
                                    ],
                                }),
                        ],
                    })),
                (0, l.jsx)(r.Dr, {
                    id: "guild-automod-add-selection",
                    label: I.intl.formatToPlainString(I.t.Kkjv1m, { keywordCount: S }),
                    leadingAccessory: { type: "icon", icon: N.l },
                    onFocus: () => {
                        u || (g(!0), m());
                    },
                    children: j,
                })
            );
        })(tY, tW.getGuildId()),
        nk = (0, p.A)(t9, tZ, {
            shouldHideMediaOptions: nn,
            contentType: t$?.contentType,
            originalContentType: t$?.originalContentType,
        }),
        nU =
            ((tK = (0, tG.Fg)(tZ)),
            (tV = null != t$ && (0, tG.qo)({ type: tC.D.GenericMedia, media: t$ }, tK)),
            null != t$ && tV
                ? (0, l.jsx)(
                      r.Dr,
                      {
                          id: "report-image-false-positive",
                          label: I.intl.string(I.t.ZH7P2h),
                          action: () => {
                              (0, eB.openModalLazy)(async () => {
                                  let { default: e } = await n(679276);
                                  return (t) =>
                                      (0, l.jsx)(e, {
                                          channelId: tZ.channel_id,
                                          messageId: tZ.id,
                                          mediaItemUrl: t$.url,
                                          ...t,
                                      });
                              });
                          },
                          leadingAccessory: { type: "icon", icon: tT.D },
                          icon: tT.D,
                      },
                      "report-image-false-positive",
                  )
                : null),
        nP =
            ((tJ = tw.useConfig({ location: "use-save-voice-message-audio" }).enabled),
            (0, eC.Lt)(tZ.flags, X.pr7.IS_VOICE_MESSAGE) && tJ
                ? (0, l.jsx)(r.Dr, {
                      id: "save-voice-message-audio",
                      label: I.intl.string(I.t.vbAEaA),
                      leadingAccessory: { type: "icon", icon: tL.s },
                      icon: tL.s,
                      action: () => {
                          let e = (0, tN.XW)(tZ.attachments[0].url);
                          (0, tO.h)({ href: e });
                      },
                  })
                : null),
        nB = (function (e, t) {
            let n = e?.url ?? "",
                i = (0, S.bG)([tk.Ay], () => tk.Ay.isVideoStatsEnabled(n)),
                s = a.useCallback(() => {
                    "" !== n && (0, tk.FM)(n);
                }, [n]);
            if (null == e || !(0, tP.XB)(e.contentType) || t?.shouldHideMediaOptions === !0) return null;
            let { enableVideoStatsForNerds: o } = (function (e) {
                let { location: t } = e;
                return tU.getConfig({ location: t });
            })({ location: "useVideoStatsMenuItem" });
            return o
                ? (0, l.jsx)(r.sL, {
                      id: "video-stats-for-nerds",
                      label: "Stats for Nerds",
                      leadingAccessory: { type: "icon", icon: eh.m },
                      checked: i,
                      action: s,
                  })
                : null;
        })(t$, { shouldHideMediaOptions: nn }),
        nF = (0, y.A)(t1 ?? t5, t2, tZ, { shouldHideMediaOptions: nn }),
        nX = (0, A.A)({ id: tZ.id, label: I.intl.string(I.t.zBoHlf), shiftId: `${tZ.channel_id}-${tZ.id}` }),
        nH = (function (e) {
            let { messageId: t, itemId: n, type: i, imageSrc: s } = e,
                o = en.Q_.useSetting(),
                { tidaWebformEnabled: d } = m.A.useExperiment(
                    { location: "useMessageDetailsItem" },
                    { autoTrackExposure: !1 },
                ),
                c = a.useCallback(() => {
                    (0, ep.C)(t);
                }, [t]),
                u = a.useCallback(() => {
                    null != n && (0, ep.C)(n);
                }, [n]),
                g = a.useCallback(() => {
                    null != s && (0, ep.C)(s);
                }, [s]),
                A = a.useCallback(() => {
                    null != s && (0, ex.A)(s);
                }, [s]),
                f = "sticker" === i;
            if (!o || !ep.p5 || !d || ("emoji" !== i && !f) || null == n) return null;
            let p = f ? I.intl.string(I.t.SJ3249) : I.intl.string(I.t.Ap2oVy),
                y = f ? I.intl.string(I.t.B1ubHx) : I.intl.string(I.t.cIoudn),
                h = f ? I.intl.string(I.t["qAEi+C"]) : I.intl.string(I.t.gDAM2n);
            return (0, l.jsxs)(r.Dr, {
                id: "message-details",
                label: I.intl.string(I.t.IqqJNI),
                leadingAccessory: { type: "icon", icon: eh.m },
                children: [
                    (0, l.jsx)(r.Dr, {
                        id: "copy-message-id",
                        label: I.intl.string(I.t.zBoHlf),
                        action: c,
                        leadingAccessory: { type: "icon", icon: eE.L },
                    }),
                    (0, l.jsx)(r.Dr, {
                        id: "copy-item-id",
                        label: p,
                        action: u,
                        leadingAccessory: { type: "icon", icon: eE.L },
                    }),
                    null != s &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.Dr, {
                                    id: "copy-image-link",
                                    label: y,
                                    action: g,
                                    leadingAccessory: { type: "icon", icon: e_.q },
                                }),
                                (0, l.jsx)(r.Dr, {
                                    id: "open-image-link",
                                    label: h,
                                    action: A,
                                    leadingAccessory: { type: "icon", icon: eS.W },
                                    trailingIndicator: { type: "icon", icon: eb.I },
                                }),
                            ],
                        }),
                ],
            });
        })({ messageId: tZ.id, itemId: t0, type: tQ, imageSrc: t5 }),
        nq = (0, l.jsx)(r.rX, { children: nH ?? nX }),
        nz = (0, l.jsxs)(r.rX, { children: [nR, nw, nk, nU, nP, nB] });
    return (0, l.jsxs)(o.W, {
        "data-menu-migrated": !0,
        navId: ne,
        onClose: t3,
        "aria-label": nt,
        onSelect: nl,
        children: [
            (0, l.jsx)(r.rX, { children: nr }),
            (0, l.jsx)(r.rX, { children: no }),
            (0, l.jsxs)(r.rX, { children: ["" === tY ? ns : null, nd, nM] }),
            (0, l.jsxs)(r.rX, { children: [nc, nu, ng, nA] }),
            (0, l.jsxs)(r.rX, { children: [nm, nf, np, ny, nh, nE, n_, nS, nb, nx, nj, nI, nD, nv] }),
            (0, l.jsxs)(r.rX, { children: [nT, nC, nG, t8 && nL, t8 && nN, nO] }),
            na
                ? (0, l.jsxs)(l.Fragment, { children: [nq, nz, null == nH && (0, l.jsx)(r.rX, { children: nF })] })
                : (0, l.jsxs)(l.Fragment, { children: [nz, (0, l.jsx)(r.rX, { children: nF }), nq] }),
        ],
    });
}
