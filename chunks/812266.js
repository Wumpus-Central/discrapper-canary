let l, i;
n.d(t, { A: () => oC });
var s,
    a = n(477900),
    r = n(582128),
    o = n(503698),
    c = n.n(o),
    d = n(837381),
    u = n(855986),
    h = n(643580),
    m = n(559106),
    g = n(448539),
    p = n(536804),
    A = n(354730),
    f = n(584648),
    C = n(6095);
let E = "u" < typeof window ? h.t : (window.ResizeObserver ?? h.t),
    x =
        ((s = c()(C.qZ, C.Vl)),
        (l = new Map()),
        (i =
            "u" < typeof document
                ? g.F
                : new E((e) => {
                      e.forEach((e) => {
                          let { target: t } = e;
                          l.get(t)?.(e);
                      });
                  })),
        function (e) {
            let {
                    children: t,
                    className: n,
                    onResize: o,
                    contentClassName: d,
                    onScroll: u,
                    dir: h = "ltr",
                    fade: E = !1,
                    customTheme: x = !1,
                    style: I,
                    ref: S,
                    ...y
                } = e,
                b = r.useRef(null),
                _ = r.useRef(null),
                [j, v] = r.useState(!1),
                { scrollerRef: T, getScrollerState: N } = (0, p.A)(),
                M = (0, A.A)(T);
            r.useImperativeHandle(
                S,
                () => ({
                    getScrollerNode: () => T.current,
                    isScrolling: () => null != b.current,
                    getScrollerState: N,
                    ...(0, f.A)(T, N, M),
                }),
                [T, N, M],
            );
            let R = r.useCallback(
                (e) => {
                    (null == b.current ? v(!0) : clearTimeout(b.current),
                        (b.current = setTimeout(() => {
                            ((b.current = null), v(!1));
                        }, 200)),
                        null != u && u(e));
                },
                [u],
            );
            return (
                r.useEffect(() => () => clearTimeout(b.current), []),
                (0, g.A)({ ref: T, key: "container", onUpdate: o, resizeObserver: i, listenerMap: l }),
                (0, g.A)({ ref: _, key: "content", onUpdate: o, resizeObserver: i, listenerMap: l }),
                (0, a.jsx)("div", {
                    ref: T,
                    className: c()(n, { [C.Rv]: E, [C.D8]: x, [s]: !0, [C.fs]: !0, [C.qw]: j && E }),
                    style: I,
                    dir: h,
                    onScroll: R,
                    ...y,
                    children: (0, a.jsx)(m.xp, {
                        containerRef: _,
                        children: (0, a.jsxs)("div", {
                            ref: _,
                            className: c()(d, C.Qs),
                            children: [t, j && (0, a.jsx)("div", { className: C.X3 })],
                        }),
                    }),
                })
            );
        });
var I = n(312138),
    S = n(737992),
    y = n(138399),
    b = n(432371),
    _ = n(765548),
    j = n(775602);
n(321073);
var v = n(73153),
    T = n(911411),
    N = n(290863);
let M = [],
    R = [],
    D = [];
var k = n(717117),
    L = n(429913),
    P = n(47167),
    O = n(47671),
    G = n(856896),
    U = n(727011),
    w = n(120570),
    F = n(319365);
let H = r.createContext(null);
function B(e) {
    let { channel: t, scrollManager: n, children: l } = e,
        i = r.useRef(null),
        { isFocused: s, setIsFocused: o } = (0, F.D7)(),
        c = r.useCallback(
            async (e, l) => {
                (s && w.A.getSelectedConversationId(t.id) === e) ||
                    (await new Promise((e) => {
                        let t = () => {
                            (n.removeScrollCompleteCallback(t), e());
                        };
                        (n.addScrollCompleteCallback(t), l());
                    }),
                    e === w.A.getSelectedConversationId(t.id) &&
                        (o(!0), U.X.trackFocusModeImpression({ channelId: t.id, conversationId: e })));
            },
            [t.id, n, o, s],
        ),
        d = r.useCallback(
            async (e, n) => {
                let { cacheType: l } = n;
                await c(e, () => (0, G.xI)(t.id, e, { cacheType: l }));
            },
            [t.id, c],
        ),
        u = r.useCallback(async () => {
            let e = w.A.getConversation(t.id);
            null != e &&
                (await c(e.id, () => y.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 })));
        }, [t.id, c]),
        h = r.useMemo(
            () => ({ bannerMeasurementRef: i, selectAndFocusConversation: d, refocusSelectedConversation: u }),
            [i, d, u],
        );
    return (0, a.jsx)(H.Provider, { value: h, children: l });
}
function K() {
    let e = r.useContext(H);
    if (null == e) throw Error("useConversationScroll must be used inside <ConversationScrollProvider>");
    return e;
}
var V = n(828488);
let z = r.createContext(null);
function W() {
    let e = r.useContext(z);
    if (null == e) throw Error("useConversationFocusDismiss must be used inside <ConversationFocusDismissProvider>");
    return e;
}
function $(e) {
    let { children: t } = e,
        [n, l] = r.useState(null),
        i = r.useMemo(() => ({ dismissReason: n, setDismissReason: l }), [n, l]);
    return (0, a.jsx)(z.Provider, { value: i, children: t });
}
var q = n(156150),
    Z = n(646514),
    J = n(602853),
    X = n(717421),
    Y = n(516521),
    Q = n(866323),
    ee = n(475743),
    et = n(448761);
let en = (0, n(600975).C)({
    kind: "user",
    id: "2021-12_inferno_spam_redaction",
    label: "Inferno Spam Redaction",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "Allow guild channel messages from spammers to be collapsed", config: { enabled: !0 } },
    ],
});
var el = n(5377),
    ei = n(661191),
    es = n(652215);
let ea = /^Sent a message to .+ but has not yet linked their Discord account\.$/;
var er = n(857069),
    eo = n(694318);
n(938796);
var ec = n(253506),
    ed = n(665260),
    eu = n(704844),
    eh = n(46653),
    em = n(432005),
    eg = n(963852);
let ep = new Map();
function eA(e, t) {
    let n = (0, eg.Ay)({
            channelId: t,
            type: es.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: es.pr7.EPHEMERAL,
            state: es.cmJ.SENT,
        }),
        l = (0, em.rh)(n);
    return ((l.applicationId = e.applicationId), (l.timestamp = e.timestamp), l);
}
function ef(e, t, n) {
    if (et.M.NON_COLLAPSIBLE.has(t.type));
    else {
        if (t.hasFlag(es.pr7.HIDDEN_SUSPENDED_USER)) return es.TZK.MESSAGE_GROUP_SUSPENDED_USER;
        if (t.blocked) return es.TZK.MESSAGE_GROUP_BLOCKED;
        if (t.ignored) return es.TZK.MESSAGE_GROUP_IGNORED;
        if (
            null != e.linkedLobby &&
            t.type === es.lAJ.DEFAULT &&
            "1384671873593512078" === t.applicationId &&
            (null == t.additionalName || "" === t.additionalName) &&
            t.author.isProvisional &&
            0 === t.attachments.length &&
            0 === t.embeds.length &&
            ea.test(t.content)
        )
            return es.TZK.MESSAGE_GROUP_UNLINKED_GAME_PLAYERS;
        if ((0, eo.iJ)(e) && n) return es.TZK.MESSAGE_GROUP_SPAMMER;
    }
    return null;
}
var eC = n(596344),
    eE = n(188567),
    ex = n(446576),
    eI = n(26430),
    eS = n(866665),
    ey = n(939249),
    eb = n(53788),
    e_ = n(265872),
    ej = n(148795),
    ev = n(834730),
    eT = n(181041),
    eN = n(858899),
    eM = n(165862),
    eR = n(477782),
    eD = n(173936),
    ek = n(365199),
    eL = n(957565),
    eP = n(58241),
    eO = n(423661),
    eG = n(792996);
function eU(e) {
    let { conversation: t, feedbackRating: n, onThumbsUp: l, onThumbsDown: i, className: s } = e,
        o = r.useRef(null),
        c = r.useCallback(() => {
            (0, eL.C)((0, eP.zZ)(t), () => (0, eN.P0)({ text: eG.intl.string(eG.t["L/PwZf"]), variant: "success" }));
        }, [t]);
    return (0, a.jsx)(e_.Y, {
        targetElementRef: o,
        position: "bottom",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(eM.W, {
                "data-menu-migrated": !0,
                navId: "conversation-more-menu",
                onClose: t,
                onSelect: void 0,
                "aria-label": eG.intl.string(eG.t.DEoVWZ),
                children: (0, a.jsxs)(eR.rX, {
                    children: [
                        (0, a.jsx)(eR.Dr, {
                            id: "thumbs-up",
                            label: eG.intl.string(eO.default.sBwxOY),
                            icon: eb.ThumbsUpIcon,
                            leadingAccessory: {
                                type: "icon",
                                icon: eb.ThumbsUpIcon,
                                color: "up" === n ? Z.A.colors.ICON_FEEDBACK_POSITIVE : "currentColor",
                            },
                            action: l,
                        }),
                        (0, a.jsx)(eR.Dr, {
                            id: "thumbs-down",
                            label: eG.intl.string(eO.default.tbhdqW),
                            icon: ej.ThumbsDownIcon,
                            leadingAccessory: {
                                type: "icon",
                                icon: ej.ThumbsDownIcon,
                                color: "down" === n ? Z.A.colors.ICON_FEEDBACK_CRITICAL : "currentColor",
                            },
                            action: i,
                        }),
                        eL.p5 &&
                            (0, a.jsx)(eR.Dr, {
                                id: "copy-link",
                                label: eG.intl.string(eG.t.WqhZss),
                                icon: eD.LinkIcon,
                                leadingAccessory: { type: "icon", icon: eD.LinkIcon },
                                action: c,
                            }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, a.jsx)(eS.m, {
                text: eG.intl.string(eG.t["6Ic4Ev"]),
                children: (0, a.jsx)(ey.D, {
                    ...e,
                    innerRef: o,
                    "aria-label": eG.intl.string(eG.t["6Ic4Ev"]),
                    className: s,
                    children: (0, a.jsx)(ek.MoreHorizontalIcon, { color: "currentColor", size: "refresh_sm" }),
                }),
            }),
    });
}
var ew = n(534514),
    eF = n(103557),
    eH = n(789645),
    eB = n(821609),
    eK = n(128904);
let eV = [
    { value: "not_useful", label: eO.default.HcSKAh },
    { value: "off_topic", label: eO.default["1cHvxU"] },
    { value: "missing_messages", label: eO.default.ZAJcv4 },
    { value: "misleading_title", label: eO.default.omVRS3 },
    { value: "inappropriate", label: eO.default.dRzDTy },
    { value: "too_cluttered", label: eO.default.wb6DmY },
    { value: "hard_to_use", label: eO.default.NUVZB6 },
    { value: "too_old", label: eO.default.kAFQd3 },
    { value: "other", label: eO.default.OSgZpc },
];
function ez(e) {
    let { channel: t, conversation: n, isFocusMode: l, onClose: i } = e,
        [s, o] = r.useState(() => new Set()),
        [d, u] = r.useState(""),
        h = s.size > 0,
        m = s.has("other"),
        g = r.useCallback((e) => {
            o((t) => {
                let n = new Set(t);
                return (n.has(e) ? n.delete(e) : n.add(e), n);
            });
        }, []),
        p = r.useCallback(() => {
            (U.X.trackThumbsDownReasonSelected({
                channelId: t.id,
                conversationId: n.id,
                isFocusMode: l,
                reasons: Array.from(s),
                otherText: m && d.length > 0 ? d : null,
            }),
                (0, eN.P0)({ text: eG.intl.string(eO.default.xrEgG0), variant: "success" }),
                i());
        }, [t.id, n.id, l, s, d, m, i]);
    return (0, a.jsxs)("div", {
        className: eK.oO,
        children: [
            (0, a.jsxs)("div", {
                className: eK.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: eK.TK,
                        children: [
                            (0, a.jsx)(ew.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eG.intl.string(eO.default.C3suOL),
                            }),
                            (0, a.jsx)(ev.E, {
                                variant: "body-md/medium",
                                color: "text-subtle",
                                className: eK.VA,
                                children: eG.intl.string(eO.default["Lp/NZo"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(ey.D, {
                        className: eK.b,
                        "aria-label": eG.intl.string(eO.default.HLYa5G),
                        onClick: i,
                        children: (0, a.jsx)(eH.XSmallIcon, { size: "xs", color: Z.A.colors.ICON_STRONG }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: eK.Ip,
                role: "group",
                "aria-label": eG.intl.string(eO.default["Lp/NZo"]),
                children: eV.map((e) => {
                    let { value: t, label: n } = e;
                    return (0, a.jsx)(
                        ey.D,
                        {
                            className: c()(eK.jw, s.has(t) && eK.gM),
                            onClick: () => g(t),
                            children: (0, a.jsx)(ev.E, {
                                variant: "body-md/normal",
                                color: "text-strong",
                                children: eG.intl.string(n),
                            }),
                        },
                        t,
                    );
                }),
            }),
            m &&
                (0, a.jsxs)("div", {
                    className: eK.Su,
                    children: [
                        (0, a.jsx)(eF.f, {
                            value: d,
                            onChange: (e) => u(e.slice(0, 200)),
                            placeholder: eG.intl.string(eO.default["qQ/xHO"]),
                            maxLength: 200,
                            rows: 3,
                        }),
                        (0, a.jsxs)("div", {
                            className: eK.rP,
                            children: [
                                (0, a.jsx)(ev.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: eG.intl.string(eO.default.xZzxfK),
                                }),
                                (0, a.jsxs)(ev.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: [d.length, "/", 200],
                                }),
                            ],
                        }),
                    ],
                }),
            (0, a.jsx)(eB.$, {
                text: eG.intl.string(eO.default.boNboC),
                variant: "primary",
                fullWidth: !0,
                disabled: !h,
                onClick: p,
            }),
        ],
    });
}
var eW = n(808379);
function e$(e) {
    return c()(eW.FW, { [eW.Jl]: "positive" === e, [eW.vF]: "critical" === e });
}
function eq(e) {
    let { channel: t, conversation: n, actionsShifted: l, suppressBorder: i, onFocusToggle: s } = e,
        [o, d] = r.useState(!1),
        h = r.useRef(null),
        m = (0, u.bG)([eT.A], () => eT.A.getConversationFeedbackRating(t.id, n.id), [t.id, n.id]),
        { isFocused: g } = (0, F.D7)(),
        p = r.useCallback(() => d(!1), []),
        A = r.useCallback(() => {
            ((0, G.oq)(t.id, n.id, "up"),
                U.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !0, isFocusMode: g }));
        }, [t.id, n.id, g]),
        f = r.useCallback(() => {
            ((0, G.oq)(t.id, n.id, "down"),
                d(!0),
                U.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !1, isFocusMode: g }));
        }, [t.id, n.id, g]),
        C = r.useCallback(
            () => (0, a.jsx)(ez, { channel: t, conversation: n, isFocusMode: g, onClose: p }),
            [t, n, g, p],
        ),
        E = g ? ex.MinimizeIcon : eI.MaximizeIcon,
        x = g ? eG.intl.string(eO.default.pDD8E1) : eG.intl.string(eO.default["o+pmGy"]),
        I = g ? eG.intl.string(eO.default.XaJ3qC) : eG.intl.string(eO.default.pU5Dut),
        S = (0, a.jsxs)(a.Fragment, {
            children: [
                !g &&
                    (0, a.jsx)(eS.m, {
                        text: eG.intl.string(eO.default.sBwxOY),
                        children: (0, a.jsx)(ey.D, {
                            "aria-label": eG.intl.string(eO.default.vjJjMc),
                            onClick: A,
                            className: e$("up" === m ? "positive" : void 0),
                            children: (0, a.jsx)(eb.ThumbsUpIcon, { color: "currentColor", size: "refresh_sm" }),
                        }),
                    }),
                (0, a.jsx)(e_.Y, {
                    targetElementRef: h,
                    shouldShow: o,
                    position: "bottom",
                    align: "right",
                    spacing: 8,
                    animation: e_.Y.Animation.FADE,
                    onRequestClose: p,
                    renderPopout: C,
                    children: () =>
                        (0, a.jsx)("div", {
                            ref: h,
                            children: g
                                ? (0, a.jsx)(eU, {
                                      conversation: n,
                                      feedbackRating: m,
                                      onThumbsUp: A,
                                      onThumbsDown: f,
                                      className: e$(),
                                  })
                                : (0, a.jsx)(eS.m, {
                                      text: eG.intl.string(eO.default.tbhdqW),
                                      children: (0, a.jsx)(ey.D, {
                                          "aria-label": eG.intl.string(eO.default.TGK5M0),
                                          onClick: f,
                                          className: e$("down" === m ? "critical" : void 0),
                                          children: (0, a.jsx)(ej.ThumbsDownIcon, {
                                              color: "currentColor",
                                              size: "refresh_sm",
                                          }),
                                      }),
                                  }),
                        }),
                }),
                (0, a.jsx)(eS.m, {
                    text: x,
                    children: (0, a.jsx)(ey.D, {
                        "aria-label": I,
                        onClick: s,
                        className: e$(),
                        children: (0, a.jsx)(E, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
            ],
        });
    return (0, a.jsxs)("div", {
        className: c()(eW.zr, { [eW.e8]: i }),
        children: [
            (0, a.jsx)(ev.E, {
                variant: "body-md/semibold",
                color: "text-strong",
                className: eW.DD,
                children: n.title,
            }),
            (0, a.jsx)("div", { className: c()(eW.o1, { [eW.jF]: l }), children: S }),
        ],
    });
}
var eZ = n(599735);
function eJ(e) {
    let { channel: t, conversation: n, requestDismiss: l } = e,
        i = r.useCallback(() => {
            l("return");
        }, [l]);
    return (0, a.jsx)("div", {
        className: eZ.A,
        children: (0, a.jsx)(eq, { channel: t, conversation: n, onFocusToggle: i, suppressBorder: !0 }),
    });
}
var eX = n(284009),
    eY = n.n(eX),
    eQ = n(256331),
    e0 = n(93474),
    e1 = n(384231),
    e2 = n(853145),
    e3 = n(9842),
    e4 = n(69282),
    e7 = n(976860),
    e5 = n(253932),
    e8 = n(734057),
    e6 = n(580745),
    e9 = n(521427),
    te = n(375901),
    tt = n(143413),
    tn = n(763754),
    tl = n(75668);
function ti(e) {
    let { children: t, className: n, flashKey: l } = e,
        [i, s] = r.useState(!1),
        [o, d] = r.useState(null),
        u = r.useRef(null),
        h = r.useRef(null);
    return (
        r.useEffect(() => {
            (s(!0),
                (u.current = window.setTimeout(() => {
                    s(!1);
                }, 2e3)));
            let e =
                null == h.current || j.Ay.useReducedMotion
                    ? null
                    : (function (e, t) {
                          let n = e.ownerDocument.defaultView ?? window,
                              l = !1,
                              i = -1,
                              s = null,
                              a = null,
                              r = 0,
                              o = null == n.IntersectionObserver,
                              c =
                                  null != n.IntersectionObserver
                                      ? new n.IntersectionObserver((e) => {
                                            o = e[e.length - 1]?.isIntersecting ?? o;
                                        })
                                      : null;
                          function d() {
                              ((l = !0), n.cancelAnimationFrame(i), c?.disconnect());
                          }
                          return (
                              c?.observe(e),
                              (i = n.requestAnimationFrame(function c(u) {
                                  if (l) return;
                                  if (((s ??= u), u - s >= 1e3)) return void d();
                                  let { top: h, left: m } = e.getBoundingClientRect(),
                                      g = null == a || h !== a.top || m !== a.left;
                                  if (((r = o && !g ? r + 1 : 0), (a = { top: h, left: m }), r >= 3)) {
                                      (d(), t());
                                      return;
                                  }
                                  i = n.requestAnimationFrame(c);
                              })),
                              d
                          );
                      })(h.current, () => d(l));
            return () => {
                (null != u.current && clearTimeout(u.current), e?.());
            };
        }, [l]),
        (0, a.jsxs)("div", {
            ref: h,
            "data-flash": i,
            className: c()(tl.jl, n),
            children: [t, (0, a.jsx)("span", { "data-pulse": o === l, className: tl.Vv, "aria-hidden": "true" }, l)],
        })
    );
}
var ts = n(491182),
    ta = n(860227),
    tr = n(537174),
    to = n(21299),
    tc = n(516287),
    td = n(843626),
    tu = n(294454),
    th = n(857071),
    tm = n(517997),
    tg = n(406704),
    tp = n(747926),
    tA = n(54570),
    tf = n(8880),
    tC = n(834942),
    tE = n(576705),
    tx = n(723702),
    tI = n(697470),
    tS = n(492841),
    ty = n(707985),
    tb = n(519222);
let t_ = function (e, t, n) {
    let l = r.useRef(n);
    return (
        (l.current = n),
        r.useCallback(
            (n) => {
                if (!l.current || n.target !== n.currentTarget) return;
                let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    s = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    a = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    r = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    o = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    c = eC.A.getMessage(t, e),
                    d = e8.A.getChannel(t);
                if (null == c || null == d) return;
                let u = eh.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (tE.A.can(es.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, tb.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, tx.cX)() ? r : a) && eL.p5 && (n.preventDefault(), (0, eL.C)(c.content));
                        break;
                    case "e":
                        i && !d.isSystemDM() && (0, tI.A)(c, u) && (n.preventDefault(), (0, tb.u_)(d, c));
                        break;
                    case "p":
                        (i || o) && (0, tS.A)(c, d) && (n.preventDefault(), (0, tb.rS)(d, c, n));
                        break;
                    case "+":
                        (i || o) &&
                            (function (e) {
                                let t = null == e.guild_id || tC.A.canChatInGuild(e.guild_id),
                                    n = e5.jW.getSetting(),
                                    { disableReactionCreates: l } = (0, ty.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && tE.A.can(es.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && th.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, tg.jr)(e),
                                    });
                                return !l && n;
                            })(d) &&
                            (n.preventDefault(),
                            eE._.dispatchKeyed(es.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || o) && (0, tm.r)(d, c) && (n.preventDefault(), (0, tb.$b)(d, c, n));
                        break;
                    case "f":
                        (i || o) &&
                            (0, td.p)(c) &&
                            (n.preventDefault(), (0, tu.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            tf.A.isSpeakingMessage(t, e) ? (0, tA.pr)() : (0, tA.kP)(d, c));
                        break;
                    case "t":
                        if (i && (0, tg.D1)(d, c)) (n.preventDefault(), (0, tp.Tv)(d, c, "Message Shortcut"));
                        else if (c.hasFlag(es.pr7.HAS_THREAD)) {
                            let e = e8.A.getChannel(ei.default.castMessageIdAsChannelId(c.id));
                            null != e && (i || o) && (n.preventDefault(), (0, tp.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, tb.cl)(d, c));
                        break;
                    case "escape":
                        e6.A.isEditing(d.id, c.id) ? y.A.endEditMessage(d.id) : eE._.dispatch(es.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var tj = n(754459),
    tv = n(538355),
    tT = n(824556),
    tN = n(699352),
    tM = n(469759),
    tR = n(649852),
    tD = n.n(tR),
    tk = n(311283),
    tL = n(473935),
    tP = n(290136),
    tO = n(666492),
    tG = n(606096),
    tU = n(997146),
    tw = n(366605),
    tF = n(163328),
    tH = n(110384),
    tB = n(22231),
    tK = n(563119),
    tV = n(581925),
    tz = n(778492),
    tW = n(241326),
    t$ = n(417270),
    tq = n(565645),
    tZ = n(812930),
    tJ = n(822123),
    tX = n(7584),
    tY = n(635222),
    tQ = n(969043),
    t0 = n(427209),
    t1 = n(964363),
    t2 = n(973196),
    t3 = n(649963),
    t4 = n(815807),
    t7 = n(429433),
    t5 = n(738125),
    t8 = n(85109),
    t6 = n(71393),
    t9 = n(129230),
    ne = n(690521),
    nt = n(403362),
    nn = n(628691),
    nl = n(194085),
    ni = n(81612),
    ns = n(607399),
    na = n(460905);
function nr(e) {
    let { channel: t, message: n, togglePopout: l, renderEmojiPicker: i, shouldShow: s } = e,
        o = r.useRef(null);
    return (0, a.jsx)(e_.Y, {
        targetElementRef: o,
        animation: e_.Y.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return i(t, n, l, !1);
        },
        shouldShow: s,
        onRequestClose: l,
        position: ns.Fr ? "top" : "left",
        align: ns.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, a.jsx)(
                nl.qv,
                { ref: o, label: eG.intl.string(eG.t.lfIHs4), icon: na.ReactionIcon, onClick: l },
                "add-reaction",
            ),
    });
}
var no = n(333881),
    nc = n(307731),
    nd = n(338373);
let nu = [tX.Ay.getByName("100"), tX.Ay.getByName("laughing"), tX.Ay.getByName("sparkling_heart")].filter(nt.Vq);
function nh(e) {
    e.stopPropagation();
}
function nm(e) {
    let { message: t, channel: n, canReport: l, onClose: i, updatePosition: s } = e;
    return (0, no.c)({
        message: t,
        channel: n,
        textSelection: "",
        favoriteableType: null,
        favoriteableId: null,
        favoriteableName: null,
        itemHref: void 0,
        itemSrc: void 0,
        itemSafeSrc: void 0,
        itemTextContent: void 0,
        canReport: l,
        onHeightUpdate: s,
        onClose: i,
        navId: "message-actions",
        ariaLabel: eG.intl.string(eG.t.Lv7LxN),
    });
}
let ng = r.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, tJ.QZ)(t.guild_id).filter(
            (e) =>
                !ne.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: nc.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        i = (l.length >= 3 ? l : [...(0, tY.A)(l.concat(nu)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, a.jsx)(a.Fragment, {
        children: i.map((e) => {
            let l = s.find((t) => (0, t4.i6)(t.emoji, (0, t4.jq)(e))),
                i = null != l ? eG.intl.string(eG.t.wunKKA) : eG.intl.string(eG.t.XVx5BN),
                r = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? eG.intl.formatToPlainString(eG.t.vjeruO, { emojiName: r })
                        : eG.intl.formatToPlainString(eG.t.L1JQwE, { emojiName: r });
            return (0, a.jsx)(
                nl.qv,
                {
                    tooltipText: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(ev.E, {
                                variant: "body-sm/medium",
                                color: "text-strong",
                                className: nd.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, a.jsx)(ev.E, {
                                variant: "body-xs/normal",
                                color: "text-default",
                                className: nd.zM,
                                children: i,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: function () {
                        return nf({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: t3.qN.MESSAGE_HOVER_BAR,
                        });
                    },
                    children: (0, a.jsx)(tq.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: nd.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function np(e) {
    let {
            channel: t,
            message: n,
            canCopy: l,
            canPin: i,
            canDelete: s,
            canReport: o,
            canEdit: c,
            canPublish: d,
            canReact: h,
            canConfigureJoin: m,
            canReply: g,
            canStartThread: p,
            canViewThread: A,
            canForward: f,
            canManageOfficialMessages: C,
            isGuildOfficial: E,
            isExpanded: x,
            showMoreUtilities: I,
            showEmojiPicker: S,
            isMessageBookmark: b,
            isMessageReminder: _,
            setPopout: v,
            hasDeveloperMode: T,
            isFocused: N,
        } = (function (e) {
            let {
                    channel: t,
                    message: n,
                    showEmojiPicker: l,
                    showEmojiBurstPicker: i,
                    showMoreUtilities: s,
                    messageWindow: a,
                    setPopout: r,
                    isFocused: o,
                } = e,
                { author: c } = n,
                d = (0, u.bG)([t6.A], () => t6.A.getGuild(t.guild_id), [t.guild_id]),
                h = (0, u.bG)([eh.default], () => eh.default.getId()),
                m = (0, tg.Id)(t),
                g = (0, tg.s5)(t),
                { firstMessage: p } = (0, u.bG)([tQ.A], () => tQ.A.getMessage(t.id), [t.id]),
                A = e5.jW.useSetting(),
                f = e5.Q_.useSetting(),
                C = (0, u.bG)([tC.A], () => null == t.guild_id || tC.A.canChatInGuild(t.guild_id), [t]),
                {
                    canManageMessages: E,
                    canAddNewReactions: x,
                    canSendMessages: I,
                } = (0, u.cf)(
                    [tE.A],
                    () => ({
                        canAddNewReactions: C && tE.A.can(es.xBc.ADD_REACTIONS, t),
                        canManageMessages: tE.A.can(es.xBc.MANAGE_MESSAGES, t),
                        canSendMessages: tE.A.can(es.xBc.SEND_MESSAGES, t),
                    }),
                    [t, C],
                ),
                S = (0, t2.A)(),
                y = (0, tm.u)(t, n) && !S,
                b = (0, tg.n)(t, n),
                _ = (0, tg.R)(n),
                v = (0, u.bG)([th.A], () => null != t.guild_id && th.A.isLurking(t.guild_id), [t]),
                T = c.id === h,
                N = (E || n.canDeleteOwnMessage(h)) && m && !es.MRS.UNDELETABLE.has(n.type);
            (n.type === es.lAJ.AUTO_MODERATION_ACTION && (N = N && E),
                t.isModeratorReportChannel() && (N = N && n.id !== p?.id && !(0, tt.A)(n)));
            let M = (0, nn.ul)(n),
                R = (0, tS.A)(n, t),
                D = !t.isSystemDM() && (0, tI.A)(n, h) && m && !g,
                { disableReactionCreates: k } = (0, ty.A)({
                    channel: t,
                    canChat: C,
                    renderReactions: A,
                    canAddNewReactions: x,
                    isLurking: v,
                    isActiveChannelOrUnarchivableThread: m,
                }),
                L =
                    t.type === es.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(es.GuildFeatures.NEWS) &&
                    I &&
                    (T || E) &&
                    (0, tZ.A)(n),
                P = t.getGuildId(),
                O =
                    null != P &&
                    n.type === es.lAJ.USER_JOIN &&
                    tE.A.canWithPartialContext(es.xBc.MANAGE_GUILD, { guildId: P }),
                G = (0, td.m)(n),
                U = (0, e9.kn)(n, t, "MessageHoverBar"),
                w = n.hasFlag(es.pr7.IS_GUILD_OFFICIAL),
                { isMessageBookmark: F, isMessageReminder: H } = (0, u.cf)([t8.A], () => ({
                    isMessageBookmark: t8.A.isMessageBookmarked(t.id, n.id),
                    isMessageReminder: t8.A.isMessageReminder(t.id, n.id),
                })),
                B = (0, tk.A)(a),
                K = (0, u.bG)([j.Ay], () => j.Ay.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: R,
                canEdit: D,
                canDelete: N,
                canReport: M,
                canReply: y,
                canStartThread: b,
                canViewThread: _,
                canForward: G,
                canManageOfficialMessages: U,
                isGuildOfficial: w,
                canCopy: eL.p5,
                hasDeveloperMode: f,
                canReact: !k && A,
                canPublish: L,
                canConfigureJoin: O,
                isExpanded: B && !K && !l && !i && !s,
                showEmojiPicker: l,
                showEmojiBurstPicker: i,
                showMoreUtilities: s,
                isMessageBookmark: F,
                isMessageReminder: H,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        M = r.useRef(null),
        R = r.useCallback(() => {
            (I ||
                t9.default.track(es.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                v({ moreUtilities: !I }));
        }, [I, v, n]),
        D = r.useCallback(() => {
            v({ emojiPicker: !S });
        }, [S, v]),
        k = (0, tg.Id)(t),
        L = n.hasFlag(es.pr7.CROSSPOSTED);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            x
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          l && T
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: eG.intl.string(eG.t.zBoHlf),
                                        icon: tL.IdIcon,
                                        onClick: (e) => (0, tb.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: eG.intl.string(eG.t.WqhZss),
                                        icon: eD.LinkIcon,
                                        onClick: () => (0, tb.S)(t, n),
                                    },
                                    "copy-link",
                                )
                              : null,
                          m
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: eG.intl.string(eG.t.NpHUi1),
                                        icon: tP.CircleQuestionIcon,
                                        onClick: () => (0, tb.vc)(t),
                                    },
                                    "configure",
                                )
                              : null,
                          k
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: eG.intl.string(eG.t.RpE9k7),
                                        icon: tO.ChatMarkUnreadIcon,
                                        onClick: () => (0, tb.cl)(t, n),
                                    },
                                    "mark-unread",
                                )
                              : null,
                          _
                              ? null
                              : (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: b ? eG.intl.string(eG.t.LHUP9D) : eG.intl.string(eG.t["9p3D9p"]),
                                        icon: b ? tG.BookmarkIcon : tU.BookmarkOutlineIcon,
                                        onClick: () => {
                                            var e;
                                            return b
                                                ? void (0, ni.x)({ channelId: t.id, messageId: n.id, displayToast: !0 })
                                                : ((e = t5.r.MESSAGE_TOOLBAR),
                                                  void (0, ni.Y)({
                                                      channelId: t.id,
                                                      messageId: n.id,
                                                      displayToast: !0,
                                                      source: e,
                                                  }));
                                        },
                                    },
                                    "bookmark",
                                ),
                          i
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: n.pinned ? eG.intl.string(eG.t["Bse+F/"]) : eG.intl.string(eG.t.CvQ18w),
                                        icon: tw.PinIcon,
                                        onClick: (e) => (0, tb.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          p && f
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: eG.intl.string(eG.t.rBIGBL),
                                        icon: tF.ThreadIcon,
                                        onClick: () => (0, tb.Nw)(t, n),
                                    },
                                    "thread",
                                )
                              : null,
                          g && c
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: eG.intl.string(eG.t["5IEsGx"]),
                                        icon: tH.ArrowAngleLeftUpIcon,
                                        onClick: (e) => (0, tb.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            h
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          x
                              ? null
                              : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(ng, { channel: t, message: n }), (0, a.jsx)(nl.$$, {})],
                                }),
                          (0, a.jsx)(nr, {
                              togglePopout: D,
                              renderEmojiPicker: nC,
                              shouldShow: S,
                              isFocused: N,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            g && !c
                ? (0, a.jsx)(
                      nl.qv,
                      {
                          label: eG.intl.string(eG.t["5IEsGx"]),
                          icon: tH.ArrowAngleLeftUpIcon,
                          onClick: (e) => (0, tb.$b)(t, n, e),
                      },
                      "reply-other",
                  )
                : null,
            c
                ? (0, a.jsx)(
                      nl.qv,
                      { label: eG.intl.string(eG.t.bt75uw), icon: tB.PencilIcon, onClick: () => (0, tb.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, a.jsx)(
                      nl.qv,
                      { label: eG.intl.string(eG.t.I3ltXO), icon: t0.A, onClick: () => (0, tb.Z4)(t, n) },
                      "forward",
                  )
                : null,
            p && !f
                ? (0, a.jsx)(
                      nl.qv,
                      { label: eG.intl.string(eG.t.rBIGBL), icon: tF.ThreadIcon, onClick: () => (0, tb.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !p && A
                ? (0, a.jsx)(
                      nl.qv,
                      { label: eG.intl.string(eG.t["39d0Wj"]), icon: tF.ThreadIcon, onClick: () => (0, tb.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            C
                ? (0, a.jsx)(
                      nl.qv,
                      {
                          label: E ? eG.intl.string(eG.t["2km5Gf"]) : eG.intl.string(eG.t["lE/PG3"]),
                          icon: E ? tK.StampXIcon : tV.StampIcon,
                          onClick: () => y.A.patchMessageGuildOfficial(t.id, n.id, !E),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, a.jsx)(
                      nl.qv,
                      {
                          label: L ? eG.intl.string(eG.t["1kWJAr"]) : eG.intl.string(eG.t.MFGE51),
                          icon: tz.AnnouncementsIcon,
                          onClick: () => (0, tb.Le)(t, n),
                          disabled: L,
                      },
                      "publish",
                  )
                : null,
            s && x
                ? (0, a.jsx)(
                      nl.qv,
                      {
                          label: eG.intl.string(eG.t.oyYWHE),
                          icon: tW.TrashIcon,
                          onClick: (e) => (0, tb.RC)(t, n, e),
                          dangerous: !0,
                          separator: !x,
                      },
                      "delete",
                  )
                : null,
            x && s
                ? null
                : (0, a.jsx)(e_.Y, {
                      targetElementRef: M,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: i } = e;
                          return (0, a.jsx)(nm, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: i,
                              updatePosition: l,
                          });
                      },
                      shouldShow: I,
                      onRequestClose: R,
                      position: "left",
                      align: "top",
                      animation: e_.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: i } = t;
                          return (0, a.jsx)(
                              nl.qv,
                              {
                                  ref: M,
                                  label: eG.intl.string(eG.t["UKOtz+"]),
                                  icon: ek.MoreHorizontalIcon,
                                  selected: i,
                                  onClick: R,
                                  ...l,
                              },
                              "more",
                          );
                      },
                  }),
        ],
    });
}
function nA(e) {
    let { channel: t, message: n } = e,
        l = (0, u.bG)([e0.A], () => null != e0.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, t1.Bl)(n.interactionData));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !l &&
                i &&
                (0, a.jsx)(
                    nl.qv,
                    { label: eG.intl.string(eG.t["5911Lb"]), icon: t$.RetryIcon, onClick: () => (0, tb.Io)(t, n) },
                    "retry",
                ),
            (0, a.jsx)(
                nl.qv,
                { label: eG.intl.string(eG.t.oyYWHE), icon: tW.TrashIcon, onClick: (e) => (0, tb.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function nf(e) {
    let { type: t, emoji: n, channel: l, message: i, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, t4.jq)(n);
    "add" === t
        ? (0, t3.BB)(l.id, i.id, r, s, { burst: a })
        : (0, t3.et)({ channelId: l.id, messageId: i.id, emoji: r, location: s, options: { burst: a } });
}
function nC(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? es.liQ.GUILD_CHANNEL : es.liQ.DM_CHANNEL,
                section: (0, t4.sn)(e),
                object: es.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, a.jsx)(t7.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (l) => {
            let { emoji: i, willClose: s, isBurst: a } = l;
            (nf({ type: "add", emoji: i, channel: e, message: t, location: t3.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? tD()(n, 150)() : n()));
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let nE = r.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, u.bG)([e6.A], () => e6.A.isEditing(t.id, n.id), [t.id, n.id]),
        r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === es.cmJ.SEND_FAILED ? (0, a.jsx)(nA, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== es.cmJ.SEND_FAILED ? (0, a.jsx)(np, { ...e }) : null;
        })(e);
    return s || (null == r && null == o)
        ? null
        : (0, a.jsx)("div", {
              className: c()(e.className, { [nd.kL]: !0, [nd.gN]: l, [nd.nK]: i }),
              onClick: nh,
              onContextMenu: nh,
              role: "group",
              "aria-label": eG.intl.string(eG.t.Lv7LxN),
              children: (0, a.jsxs)(nl.Ay, { className: e.innerClassName, children: [r, o] }),
          });
});
var nx = n(13673),
    nI = n(549587),
    nS = n(776579),
    ny = n(54391);
let nb = r.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: l = !1,
                groupId: i,
                isGroupStart: s,
                usernameProfile: o,
                avatarProfile: c,
                setPopout: d,
                author: u,
                repliedMessage: h,
                roleIcon: m,
            } = e,
            g = (0, to.r4)(t.author.id, n.id),
            p = (0, to.m)(t, n, o, d),
            A = (0, to.Jo)(c, d),
            f = r.useCallback(() => {
                d({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 });
            }, [d]);
        return (0, a.jsx)(nI.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: h,
            author: u,
            compact: l,
            subscribeToGroupId: i,
            showTimestampOnHover: !s && l && t.type !== es.lAJ.REPLY,
            renderPopout: ny.A,
            showAvatarPopout: c,
            showUsernamePopout: o,
            onClickAvatar: A,
            onClickUsername: p,
            onContextMenu: g,
            onPopoutRequestClose: f,
            roleIcon: m,
        });
    }),
    n_ = r.memo(nS.A);
function nj(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: l,
            replyReference: i,
            author: s,
            repliedMessage: r,
            roleIcon: o,
        } = e,
        { message: c, compact: d, channel: u, groupId: h } = t,
        { usernameProfile: m, avatarProfile: g } = l;
    if ((0, tt.A)(c)) return null;
    let p = c.id === h;
    return p || d || null != i
        ? (0, a.jsx)(nb, {
              message: c,
              channel: u,
              compact: d,
              subscribeToGroupId: h,
              isGroupStart: p,
              groupId: h,
              setPopout: n,
              usernameProfile: m,
              avatarProfile: g,
              author: s,
              repliedMessage: r,
              roleIcon: o,
          })
        : (0, a.jsx)(n_, {
              compact: !0,
              timestamp: c.timestamp,
              isInline: !1,
              id: (0, ta.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var nv = n(91624),
    nT = n(127258),
    nN = n(168186),
    nM = n(994500),
    nR = n(267508),
    nD = n(826059),
    nk = n(387408),
    nL = n(942075),
    nP = n(747407),
    nO = n(808829),
    nG = n(552691),
    nU = n(779014),
    nw = n(448368),
    nF = n(448767),
    nH = n(354777);
function nB(e) {
    let { message: t, options: n } = e;
    return (0, tv.A)(t, n).content;
}
let nK = r.memo(function (e) {
    let {
            baseMessage: t,
            referencedMessage: n,
            channel: l,
            compact: i = !1,
            referencedUsernameProfile: s,
            referencedAvatarProfile: o,
            setPopout: c,
            isReplySpineClickable: d,
            showReplySpine: h,
        } = e,
        m = n.state === e3.a.LOADED ? n.message : void 0,
        g = (0, tn.X4)(m),
        p = (0, tn.d8)(m?.actor, l).nick,
        A = (0, e1.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        f = r.useMemo(() => {
            if (null == m) return null;
            let e = (0, nk.A)(m);
            if (e.type === es.lAJ.USER_JOIN)
                return e.author.bot
                    ? nU.A.getSystemMessageAppAdded(null != g ? g.nick : e.author.username, null != e.actor ? p : null)
                    : (0, nD.$)(
                          eG.intl.formatToParts(nU.A.getSystemMessageUserJoin(e.id), {
                              username: null != g ? g.nick : e.author.username,
                              usernameHook: (e) => e,
                          }),
                      );
            if (e.type === es.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, nD.$)(
                    (0, nL.WC)({
                        username: null != g ? g.nick : e.author.username,
                        guildId: l?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === es.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, nD.$)((0, nO.P)({ application: e?.application, username: g?.nick }));
            if (e.type === es.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, nD.$)((0, nG.g6)({ application: e?.application, username: g?.nick }));
            if (e.type === es.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, nD.$)((0, nG.uk)({ application: e?.application, username: g?.nick }));
            else if (e.type === es.lAJ.GUILD_SPACE_MESSAGE) return (0, nP.X)(e, l);
            if (
                null != e.content &&
                "" !== e.content &&
                !(function (e) {
                    if (!(0, nF.k5)(e.embeds)) return !1;
                    let { content: t } = (0, nH.b6)(e, { formatInline: !0, allowLinks: !0 });
                    return Array.isArray(t) && 0 === t.length;
                })(e)
            ) {
                let t = e.isFirstMessageInForumPost(l)
                    ? { formatInline: !0, noStyleAndInteraction: !0, allowLinks: !0, allowHeading: !0, allowList: !0 }
                    : { formatInline: !0, allowLinks: !0, allowHeading: A, allowList: A };
                return (0, a.jsx)(nB, { message: e, options: t });
            }
            return null;
        }, [m, g, p, l, A]),
        { isReplyAuthorBlocked: C, isReplyAuthorIgnored: E } = (0, u.cf)(
            [nM.A],
            () => ({
                isReplyAuthorBlocked: null != m && nM.A.isBlockedForMessage(m),
                isReplyAuthorIgnored: null != m && nM.A.isIgnoredForMessage(m),
            }),
            [m],
        ),
        x = (0, to.r4)(m?.author.id, l.id),
        I = (0, to.Ck)(t, n, l),
        S = (0, to.H9)(m, l, s, c),
        y = (0, to.Ge)(o, c),
        b = r.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        _ = (0, tn.X4)(t);
    return (0, a.jsx)(nw.A, {
        repliedAuthor: g,
        baseMessage: t,
        channel: l,
        baseAuthor: _,
        referencedMessage: n,
        content: f,
        compact: i,
        isReplyAuthorBlocked: C,
        isReplyAuthorIgnored: E,
        showAvatarPopout: o,
        showUsernamePopout: s,
        renderPopout: ny.A,
        onClickAvatar: y,
        onClickUsername: S,
        onClickReply: I,
        onContextMenu: x,
        onPopoutRequestClose: b,
        isReplySpineClickable: d,
        showReplySpine: h,
    });
});
function nV(e) {
    let {
        message: t,
        channel: n,
        compact: l,
        setPopout: i,
        referencedUsernameProfile: s,
        referencedAvatarProfile: r,
        replyReference: o,
        replyMessage: c,
        isReplySpineClickable: d,
        showReplySpine: u = !0,
    } = e;
    return (
        null != o &&
        (0, a.jsx)(nK, {
            baseMessage: t,
            replyReference: o,
            referencedMessage: c,
            channel: n,
            compact: l,
            setPopout: i,
            referencedUsernameProfile: s,
            referencedAvatarProfile: r,
            isReplySpineClickable: d,
            showReplySpine: u,
        })
    );
}
let nz = r.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: l = !1,
            interactionUsernameProfile: i,
            interactionAvatarProfile: s,
            interactionData: o,
            referencedUsernameProfile: c,
            referencedAvatarProfile: d,
            setPopout: h,
        } = e,
        { isInteractionUserBlocked: m, isInteractionUserIgnored: g } = (0, u.cf)(
            [nM.A],
            () => ({
                isInteractionUserBlocked: nM.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nM.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = (0, u.bG)([e3.A], () => e3.A.getMessageByReference(t?.messageReference)),
        A = (0, to.r4)(t.interaction?.user.id, n.id),
        f = (0, to.T0)(t.interaction, n, i, h),
        C = (0, to.Yq)(s, h),
        E = (0, nN.Am)(t),
        x = E?.type === nT.G.APPLICATION_COMMAND ? E.target_user?.id : void 0,
        I = (0, to.r4)(x, n.id),
        S = (0, to.I)(x, n, c, h),
        y = (0, to.Ge)(d, h),
        b = (0, to.U_)(o, h),
        _ = r.useCallback(() => {
            h({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [h]),
        j = r.useCallback(
            () =>
                nV({
                    message: t,
                    channel: n,
                    compact: l,
                    setPopout: h,
                    referencedAvatarProfile: d,
                    referencedUsernameProfile: c,
                    replyReference: t.messageReference,
                    replyMessage: p,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [n, l, t, d, p, c, h],
        );
    return (0, a.jsx)(nR.A, {
        message: t,
        channel: n,
        compact: l,
        isInteractionUserBlocked: m,
        isInteractionUserIgnored: g,
        showAvatarPopout: s,
        showUsernamePopout: i,
        showDataPopout: o,
        showTargetAvatarPopout: d,
        showTargetUsernamePopout: c,
        onClickAvatar: C,
        onClickUsername: f,
        onClickCommand: b,
        onUserContextMenu: A,
        onClickTargetAvatar: y,
        onClickTargetUsername: S,
        onTargetUserContextMenu: I,
        onPopoutRequestClose: _,
        renderTargetMessage: j,
    });
});
var nW = n(117096),
    n$ = n(381941);
function nq(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: i = !1,
        className: s,
    } = e;
    eY()(n.type === es.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...r } = (0, d.rm)(e.id ?? ""),
        o = (0, u.bG)([e3.A], () => e3.A.getMessageByReference(l)),
        { popouts: h, setPopout: m } = (0, tj.A)(n.id, n$.Fd),
        g = (0, tn.Ay)(n),
        p = (0, ta.fF)(n),
        A = (0, ta.ZD)(n);
    if (null != o)
        switch (o.state) {
            case e3.a.LOADED:
                return (0, a.jsx)(nZ, {
                    ...e,
                    viewingChannelId: n.channel_id,
                    message: o.message,
                    groupId: o.message.id,
                });
            case e3.a.NOT_LOADED:
            case e3.a.DELETED:
        }
    return (0, a.jsx)(ts.A, {
        ...r,
        id: t,
        compact: i,
        className: c()(s, { [nx.iU]: !0, [nx.HJ]: !i, [nx.H4]: !0, [nx._A]: !0 }),
        childrenHeader: nj({ messageProps: e, setPopout: m, messagePopouts: h, replyReference: l, author: g }),
        childrenSystemMessage: (0, nW.A)(e),
        childrenMessageContent: null,
        "aria-labelledby": p,
        "aria-describedby": A,
        hasThread: !1,
        author: g,
    });
}
function nZ(e) {
    let {
            id: t,
            message: n,
            message: { id: l, channel_id: i },
            channel: { guild_id: s },
            compact: o = !1,
            className: h,
            groupId: m,
            viewingChannelId: g,
        } = e,
        p = n.type === es.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: A, ...f } = (0, d.rm)(e.id ?? ""),
        { isFocused: C, handleFocus: E, handleBlur: x } = (0, to.G8)(A),
        { popouts: I, selected: S, setPopout: y } = (0, tj.A)(n.id, n$.Fd),
        b = e5.hD.useSetting(),
        _ = e5.rs.useSetting(),
        v = (0, u.bG)([e3.A], () => e3.A.getMessageByReference(p)),
        T = (0, e1.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: N,
            handleMouseLeave: M,
            isHovered: R,
        } = (0, to.yp)({ groupId: m, message: n, defaultValue: S }),
        D = (0, u.bG)([j.Ay], () => j.Ay.keyboardModeEnabled),
        k = S || (D && C),
        L = k || R,
        {
            content: P,
            hasSpoilerEmbeds: O,
            hasBailedAst: G,
        } = (0, tv.A)(n, {
            hideSimpleEmbedContent: b && _,
            allowList: T,
            allowHeading: T,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: g,
        }),
        U = t_(l, i, D),
        w = (0, tn.Ay)(n),
        F = (0, ta.fF)(n, m),
        H = (0, ta.ZD)(n),
        B = (0, a.jsx)(tc.x, { value: L, children: (0, nv.Ay)(e, P, !1) }),
        K = r.useCallback(() => (0, e7.uh)(s, i, l), [s, i, l]),
        V = (0, e4.Xx)({ guildId: s, roleId: w.iconRoleId });
    return (0, a.jsxs)("div", {
        className: nx.m5,
        children: [
            (0, a.jsx)(ey.D, {
                className: nx.lA,
                onClick: K,
                "aria-label": eG.intl.string(eG.t.k5WiPf),
                children: eG.intl.string(eG.t.k5WiPf),
            }),
            (0, a.jsx)(ts.A, {
                ...f,
                id: t,
                compact: o,
                className: c()(h, {
                    [nx.iU]: !0,
                    [nx.HJ]: !o,
                    [nx.mK]: n.mentioned,
                    [nx.M1]: (0, em.ec)(n),
                    [nx.H4]: (0, tt.A)(n),
                    [nx._A]: n.id === m || n.type === es.lAJ.REPLY,
                    [nx.wH]: k,
                }),
                zalgo: !0,
                onKeyDown: U,
                onFocus: E,
                onBlur: x,
                childrenRepliedMessage:
                    n.type === es.lAJ.REPLY &&
                    nV({
                        ...e,
                        setPopout: y,
                        referencedUsernameProfile: I.referencedUsernameProfile,
                        referencedAvatarProfile: I.referencedAvatarProfile,
                        replyReference: p,
                        replyMessage: v,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: nj({
                    messageProps: e,
                    setPopout: y,
                    messagePopouts: I,
                    replyReference: p,
                    author: w,
                    repliedMessage: v,
                    roleIcon: V,
                }),
                childrenAccessories: (0, tN.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: O,
                    hasBailedAst: G,
                    isInteracting: L,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                    allowFullScreen: !0,
                }),
                childrenSystemMessage: (0, nW.A)(e),
                childrenMessageContent: B,
                onMouseMove: N,
                onMouseLeave: M,
                "aria-labelledby": F,
                "aria-describedby": H,
                hasThread: !1,
                author: w,
            }),
        ],
    });
}
let nJ = r.memo(function (e) {
    let t,
        n,
        {
            id: l,
            message: i,
            message: { id: s },
            channel: o,
            channel: { id: h },
            compact: g = !1,
            className: p,
            flashKey: A,
            groupId: f,
            renderContentOnly: C,
            hideInviteEmbedBanner: E,
            hideActivityInvite: x,
        } = e;
    eY()(i.type !== es.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let I = es.sl8.has(i.type) ? i.messageReference : void 0,
        { onFocus: S, ...y } = (0, d.rm)(e.id ?? ""),
        b = e5.hD.useSetting(),
        _ = e5.rs.useSetting(),
        v = (0, u.bG)([e3.A], () => e3.A.getMessageByReference(I)),
        { popouts: T, selected: N, setPopout: M } = (0, tj.A)(i.id, n$.Fd),
        R = (0, to.VL)(i, o, M),
        D = (0, to.ri)(i, o),
        {
            handleMouseEnter: k,
            handleMouseLeave: L,
            hasHovered: P,
            isHovered: O,
        } = (0, to.yp)({ groupId: f, message: i, defaultValue: N }),
        { isFocused: G, hasFocused: U, handleFocus: w, handleBlur: F } = (0, to.G8)(S),
        H = r.useCallback(
            (e) => {
                (w(e), k(e));
            },
            [w, k],
        ),
        B = r.useCallback(
            (e) => {
                (F(e), L());
            },
            [F, L],
        ),
        K = (0, u.bG)([e6.A], () => e6.A.isEditing(h, s), [h, s]),
        z = (0, u.bG)([j.Ay], () => j.Ay.keyboardModeEnabled),
        W = N || K || (z && G),
        $ = W || O,
        q = (0, u.bG)(
            [e8.A],
            () => i.hasFlag(es.pr7.HAS_THREAD) && e8.A.getChannel(ei.default.castMessageIdAsChannelId(i.id)),
        ),
        Z = i.isFirstMessageInForumPost(o),
        J = (0, e1.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        {
            content: X,
            hasSpoilerEmbeds: Y,
            hasBailedAst: Q,
        } = (0, tv.A)(i, {
            hideSimpleEmbedContent: b && _,
            allowList: Z || J,
            allowHeading: Z || J,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        ee = t_(s, h, z),
        et = (0, tn.Ay)(i),
        en = (0, u.bG)([e2.A], () => e2.A.getPendingReply(h)),
        el =
            ((t = r.useRef(A)),
            r.useEffect(() => {
                t.current = A ?? t.current;
            }),
            A ?? t.current),
        ea = (0, e4.Xx)({ guildId: o.guild_id, roleId: et.iconRoleId }),
        er = (function (e, t) {
            let { enabled: n } = V.LX.useConfig({ location: "useMessageConversation" });
            return (0, u.bG)(
                [eT.A, eQ.A],
                () => {
                    if (!n || !eQ.A.isHighlightingEnabled()) return null;
                    let l = eT.A.getConversationForMessage(e, t);
                    return null == l ? null : eT.A.getConversationColor(e, l);
                },
                [e, t, n],
            );
        })(h, s),
        eo = (0, ta.fF)(i, f),
        ec = (0, ta.ZD)(i),
        eu = (0, u.bG)([e0.A], () => e0.A.getMessage(s), [s]),
        eh = (0, e9.bW)(o.guild_id, "ChatMessage"),
        eg = (0, tr.o)(),
        ep = (0, tT.A)({ message: i, channel: o, officialMessagesEnabled: eh }),
        eA = r.useRef(window),
        ef = null != eu;
    ((n = i.type === es.lAJ.CUSTOM_GIFT ? "" : !K && ef ? (0, tM.A)(e, X) : (0, nv.Ay)(e, X, K)),
        (n = (0, a.jsx)(tc.x, { value: $, children: n })));
    let eC = i.id === f,
        eE = (0, a.jsx)(m.vN, {
            offset: { left: 4, right: 4 },
            children: (0, a.jsx)("li", {
                id: l,
                className: nx.Nt,
                "aria-setsize": -1,
                style: null != er ? { backgroundColor: er } : void 0,
                children: (0, a.jsx)(ts.A, {
                    ...y,
                    "aria-setsize": -1,
                    "aria-roledescription": eG.intl.string(eG.t.BAB0yK),
                    "aria-labelledby": eo,
                    "aria-describedby": ec,
                    onFocus: H,
                    onBlur: B,
                    onContextMenu: R,
                    onKeyDown: ee,
                    onClick: D,
                    compact: g,
                    contentOnly: C,
                    className: c()(p, {
                        [nx.iU]: !0,
                        [nx.HJ]: !g,
                        [nx.mK]: i.mentioned,
                        [nx.M1]: (0, em.ec)(i),
                        [nx.SH]: i.type === es.lAJ.NITRO_NOTIFICATION,
                        [nx.Sg]: i.hasFlag(es.pr7.IS_GUILD_OFFICIAL) && eh && !eg,
                        [nx.H4]: (0, tt.A)(i),
                        [nx._A]: !C && (eC || i.type === es.lAJ.REPLY),
                        [nx.wH]: W,
                        [nx.$n]: en?.message.id === i.id,
                        [nx.$w]: i.isCommandType() && i.state === es.cmJ.SENDING,
                        [nx.DX]: ef,
                    }),
                    zalgo: !K,
                    childrenRepliedMessage:
                        C || i.type !== es.lAJ.REPLY
                            ? void 0
                            : nV({
                                  ...e,
                                  setPopout: M,
                                  referencedUsernameProfile: T.referencedUsernameProfile,
                                  referencedAvatarProfile: T.referencedAvatarProfile,
                                  replyReference: I,
                                  replyMessage: v,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (function (e, t, n) {
                        let { message: l, channel: i, compact: s } = e;
                        return null != l.interaction && "" !== l.interaction.displayName
                            ? (0, a.jsx)(nz, { message: l, channel: i, compact: s, setPopout: t, ...n })
                            : null;
                    })(e, M, T),
                    childrenHeader: C
                        ? void 0
                        : nj({
                              messageProps: e,
                              setPopout: M,
                              messagePopouts: T,
                              replyReference: I,
                              author: et,
                              repliedMessage: v,
                              roleIcon: ea,
                          }),
                    childrenAccessories: (0, tN.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: Y,
                        hasBailedAst: Q,
                        handleContextMenu: R,
                        isInteracting: $,
                        isAutomodBlockedMessage: ef,
                        hideInviteEmbedBanner: E,
                        hideActivityInvite: x,
                    }),
                    childrenButtons:
                        P || U
                            ? (function (e) {
                                  let {
                                          setPopout: t,
                                          messagePopouts: { emojiPicker: n, emojiBurstPicker: l, moreUtilities: i },
                                          isFocused: s,
                                          buttonProps: { message: r, channel: o, groupId: c, compact: d = !1 },
                                          messageWindow: u,
                                      } = e,
                                      h = r.state === es.cmJ.SENDING,
                                      m = r.id === c,
                                      g = (0, ed.Lt)(r.flags, es.pr7.EPHEMERAL),
                                      p = r.state === es.cmJ.SEND_FAILED;
                                  return h || (g && !p)
                                      ? null
                                      : (0, a.jsx)(nE, {
                                            className: nx.Uo,
                                            innerClassName: nx.Mc,
                                            isHeader: !d && m && !(0, tt.A)(r),
                                            isReply: !d && r.type === es.lAJ.REPLY && null != r.messageReference,
                                            channel: o,
                                            message: r,
                                            messageWindow: u,
                                            setPopout: t,
                                            showEmojiPicker: n,
                                            showEmojiBurstPicker: l,
                                            showMoreUtilities: i,
                                            isFocused: s,
                                        });
                              })({
                                  buttonProps: e,
                                  setPopout: M,
                                  messagePopouts: T,
                                  isFocused: O || G,
                                  messageWindow: eA.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, nW.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: k,
                    onMouseLeave: L,
                    hasThread: !C && i.hasFlag(es.pr7.HAS_THREAD) && null != q,
                    isSystemMessage: (0, tt.A)(i),
                    hasReply: i.type === es.lAJ.REPLY,
                    messageRef: (e) => {
                        ((ep.current = e), (eA.current = e?.ownerDocument?.defaultView ?? window));
                    },
                    author: et,
                }),
            }),
        });
    return null != el
        ? (0, a.jsx)(
              ti,
              { flashKey: el, className: c()({ [nx.bB]: !0, [nx._A]: !g && i.id === f }), children: eE },
              `bg-flash-${l}`,
          )
        : eE;
});
n(801541);
var nX = n(889137),
    nY = n(952270),
    nQ = n(428678),
    n0 = n(353182),
    n1 = n(922529),
    n2 = n(888675),
    n3 = n(845806);
function n4(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: s, canUncollapse: r = !0 } = e,
        o = null != e.collapsedReason ? eG.intl.format(e.collapsedReason, { count: l }) : e.collapsedText,
        c =
            e.icon ??
            (0, nX.YW)({ collapsedReason: s })
                .with({ collapsedReason: eG.t["VFWjc+"] }, () =>
                    (0, a.jsx)(nY.EyeSlashIcon, { size: "md", color: "currentColor", className: n3.Q6 }),
                )
                .with({ collapsedReason: eG.t["+FcYM/"] }, () =>
                    (0, a.jsx)(nQ.DenyIcon, { size: "md", color: "currentColor", className: n3.Q6 }),
                )
                .with({ collapsedReason: eG.t.rHRovo }, () =>
                    (0, a.jsx)(n0.ChatXIcon, { size: "md", color: "currentColor", className: n3.TG }),
                )
                .otherwise(() => (0, a.jsx)(eH.XSmallIcon, { size: "md", color: "currentColor", className: n3.Q6 }));
    return (0, a.jsx)(ts.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, a.jsx)(n2.A, {
            compact: i,
            className: n3.L9,
            iconNode: c,
            children: (0, a.jsxs)("div", {
                className: r ? n3.Fo : n3.GU,
                children: [
                    o,
                    r &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                " \u2014 ",
                                (0, a.jsx)(ey.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: n3.rB,
                                    children: t ? eG.intl.string(eG.t.fgq1gs) : eG.intl.string(eG.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let n7 = r.memo(function (e) {
    let { messages: t, channel: n, compact: l = !1, unreadId: i, canUncollapse: s = !0, ...o } = e,
        { hasJumpTarget: d = !1 } = t,
        [u, h] = r.useState(d && s),
        m = r.useCallback(() => {
            s && h((e) => !e);
        }, [s]);
    r.useEffect(() => {
        d && s && h(!0);
    }, [d, s]);
    let g = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, a.jsxs)("div", {
        className: c()({ [nx._A]: !0, [n3.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === es.TZK.DIVIDER)
                ? (0, a.jsx)(n1.A, { isUnread: !0, id: i }, "divider")
                : null,
            (0, a.jsx)(
                n4,
                { count: g, compact: l, expanded: u, onClick: m, canUncollapse: s, ...o },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === es.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, a.jsx)(n1.A, { isUnread: !0, isBeforeGroup: e, id: i }, "divider");
                      }
                      if (e.type === es.TZK.MESSAGE || e.type === es.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === es.TZK.THREAD_STARTER_MESSAGE ? nq : nJ;
                          return (0, a.jsx)(
                              t,
                              {
                                  id: (0, te.j)(n.id, e.content.id),
                                  className: n3.__invalid_blocked,
                                  compact: l,
                                  channel: n,
                                  message: e.content,
                                  groupId: e.groupId,
                                  flashKey: e.flashKey,
                                  isLastItem: !1,
                                  renderContentOnly: !1,
                              },
                              e.content.id,
                          );
                      }
                  })
                : null,
        ],
    });
});
var n5 = n(114212),
    n8 = n(687966),
    n6 = n(696451),
    n9 = n(427262),
    le = n(447215);
let lt = r.memo(function (e) {
    let t,
        { channel: n, messages: l, compact: i, unreadId: s } = e,
        o = r.useMemo(() => {
            let e = [];
            for (let t of l.content) t.type === es.TZK.MESSAGE && e.push(t.content);
            return e;
        }, [l]),
        c = r.useMemo(
            () =>
                (function (e) {
                    let t = new Set(),
                        n = [];
                    for (let l of e) t.has(l.author.id) || (t.add(l.author.id), n.push(l));
                    return n;
                })(o),
            [o],
        ),
        d = (0, u.yK)([n6.Ay], () => c.map((e) => n6.Ay.getNick(n.guild_id, e.author.id) ?? n9.Ay.getName(e.author)), [
            c,
            n.guild_id,
        ]),
        [h, m] = c,
        g = (0, le.P)({ user: h?.author, channelId: n.id, guildId: n.guild_id, messageId: h?.id }),
        p = (0, le.P)({ user: m?.author, channelId: n.id, guildId: n.guild_id, messageId: m?.id }),
        [A = "", f = ""] = d;
    return (
        (t =
            d.length <= 1
                ? eG.intl.format(eG.t.eyrHuJ, { a: A, aHook: g(), count: o.length })
                : d.length <= 2
                  ? eG.intl.format(eG.t["RjbAw/"], { a: A, aHook: g(), b: f, bHook: p() })
                  : eG.intl.format(eG.t["YDqd/d"], { a: A, aHook: g(), b: f, bHook: p(), count: d.length - 2 })),
        (0, a.jsx)(n7, {
            channel: n,
            messages: l,
            compact: i,
            unreadId: s,
            collapsedText: t,
            icon: (0, a.jsx)(n8.GameControllerIcon, { size: "md", color: "currentColor", className: n3.Q6 }),
        })
    );
});
var ln = n(248432);
function ll(e) {
    let { isCollapsed: t, children: n } = e;
    return (0, a.jsx)("div", {
        className: c()(ln.dU, t && ln.yZ),
        children: (0, a.jsx)("div", { className: ln.JN, children: n }),
    });
}
let li = r.memo(function (e) {
    let { isOnTopic: t, isCollapsed: n, children: l } = e;
    return t ? l : (0, a.jsx)(ll, { isCollapsed: n, children: l });
});
var ls = n(708510);
function la(e) {
    return "group" in e;
}
let lr = (0, a.jsxs)(a.Fragment, {
    children: [
        (0, a.jsx)(n5.A, { messages: 4, groupSpacing: 16, className: ls.Xb }),
        (0, a.jsx)(n5.A, { messages: 2, groupSpacing: 16, className: ls.Xb }),
        (0, a.jsx)(n5.A, { messages: 3, groupSpacing: 16, className: ls.Xb }),
    ],
});
function lo(e) {
    let { channel: t, focusStream: n, isCollapsed: l, isHydrating: i } = e;
    return (0, a.jsxs)("div", {
        className: ls.XT,
        children: [
            (0, a.jsx)("ol", {
                className: ls.cl,
                children: n.map((e) => {
                    if (la(e)) {
                        var n;
                        return e.group.type === es.TZK.MESSAGE_GROUP_UNLINKED_GAME_PLAYERS
                            ? (0, a.jsx)(
                                  li,
                                  {
                                      isOnTopic: e.isOnTopic,
                                      isCollapsed: l,
                                      children: (0, a.jsx)(lt, { messages: e.group, channel: t, unreadId: "" }),
                                  },
                                  e.group.key,
                              )
                            : (0, a.jsx)(
                                  li,
                                  {
                                      isOnTopic: e.isOnTopic,
                                      isCollapsed: l,
                                      children: (0, a.jsx)(n7, {
                                          messages: e.group,
                                          channel: t,
                                          unreadId: "",
                                          collapsedReason:
                                              (n = e.group.type) === es.TZK.MESSAGE_GROUP_BLOCKED
                                                  ? eG.t["+FcYM/"]
                                                  : n === es.TZK.MESSAGE_GROUP_IGNORED
                                                    ? eG.t["VFWjc+"]
                                                    : n === es.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                                      ? eG.t.rHRovo
                                                      : eG.t.xfkfTK,
                                          canUncollapse: e.group.type !== es.TZK.MESSAGE_GROUP_SUSPENDED_USER,
                                      }),
                                  },
                                  e.group.key,
                              );
                    }
                    return (0, a.jsx)(
                        li,
                        {
                            isOnTopic: e.isOnTopic,
                            isCollapsed: l,
                            children: (0, a.jsx)(nJ, {
                                id: `overlay-msg-${e.record.id}`,
                                message: e.record,
                                channel: t,
                                groupId: e.groupId,
                                isLastItem: !1,
                                renderContentOnly: !1,
                            }),
                        },
                        e.record.id,
                    );
                }),
            }),
            i && lr,
        ],
    });
}
n(30146);
var lc = n(435558),
    ld = n.n(lc);
let lu = { tension: 240, friction: 30 },
    lh = { tension: 320, friction: 28 },
    lm = { tension: 280, friction: 24, clamp: !0 },
    lg = { tension: 170, friction: 22, clamp: !0 },
    lp = { tension: 220, friction: 28, clamp: !0 },
    lA = 6;
function lf(e) {
    return (188 - (6 * e + 36)) / 2;
}
var lC = n(419828);
function lE(e) {
    let { style: t, channel: n, conversationId: l, scrollerRef: i, requestDismiss: s } = e,
        { isFocused: o } = (0, F.D7)(),
        { dismissReason: c } = W(),
        d = o ? lm : "navigation" === c ? lp : lg,
        h = (0, J.r)(Z.A.colors.BORDER_SUBTLE).spring(),
        m = (0, J.r)(Z.A.colors.BORDER_SUBTLE).spring({ opacity: 0 }),
        {
            borderTopRadius: g,
            shadowAlpha: p,
            contentPadding: A,
        } = (0, X.z)(
            { borderTopRadius: o ? 12 : 8, shadowAlpha: 0.4 * !!o, contentPadding: 4 * !!o, config: d },
            "respect-motion-settings",
        ),
        { borderColor: f } = (0, X.z)({ borderColor: o ? h : m, config: d }, "respect-motion-settings"),
        [C, E] = r.useState(!0),
        x = r.useRef(null),
        I = r.useCallback(() => {
            let e = i.current;
            null != e &&
                (null != x.current && (x.current.style.opacity = String(Math.min(1, e.getDistanceFromTop() / 16))),
                E(e.getDistanceFromBottom() > 5));
        }, [i]),
        S = (0, u.bG)([eC.A], () => eC.A.getMessages(n.id), [n.id]),
        {
            isSelected: y,
            selectedConversation: b,
            selectedHydratedMessages: _,
            isSelectionHydrating: j,
        } = (0, u.cf)(
            [w.A],
            () => ({
                isSelected: w.A.getSelectedConversationId(n.id) === l,
                selectedConversation: w.A.getConversation(n.id),
                selectedHydratedMessages: w.A.isFullyHydrated(n.id) ? w.A.getHydratedMessages(n.id) : null,
                isSelectionHydrating: w.A.isConversationFetchPending(n.id, !0),
            }),
            [n.id, l],
        ),
        v = (0, ee.p0)({ value: b, shouldUpdate: y }),
        T = (0, ee.p0)({ value: _, shouldUpdate: y }),
        N = r.useMemo(
            () =>
                null != v
                    ? (function (e, t, n, l) {
                          let i = (function (e, t, n) {
                                  let l = new Set(e.messageIds),
                                      i = [],
                                      s = new Set(),
                                      a = 0;
                                  if (
                                      (t.forEach((t) => {
                                          0 > ei.default.compare(t.id, e.startMessageId) ||
                                              ei.default.compare(t.id, e.endMessageId) > 0 ||
                                              (l.has(t.id)
                                                  ? i.push({ record: t, isOnTopic: !0 })
                                                  : a < 10 && (i.push({ record: t, isOnTopic: !1 }), a++),
                                              s.add(t.id));
                                      }),
                                      null != n)
                                  )
                                      for (let e of n)
                                          s.has(e.id) || (i.push({ record: e, isOnTopic: !0 }), s.add(e.id));
                                  return (i.sort((e, t) => ei.default.compare(e.record.id, t.record.id)), i);
                              })(t, n, l),
                              s = [],
                              a = null,
                              r = "";
                          for (let t of i) {
                              (null == a || (0, er.A)(e, a, t.record)) && (r = t.record.id);
                              let n = ef(e, t.record, (0, eo.kf)(t.record));
                              if (null != n) {
                                  let e,
                                      l = s[s.length - 1];
                                  null != l && la(l) && l.group.type === n
                                      ? (e = l)
                                      : ((e = { group: { type: n, content: [], key: t.record.id }, isOnTopic: !1 }),
                                        s.push(e));
                                  let i = { type: es.TZK.MESSAGE, content: t.record, groupId: r };
                                  (e.group.content.push(i), t.isOnTopic && (e.isOnTopic = !0));
                              } else s.push({ record: t.record, isOnTopic: t.isOnTopic, groupId: r });
                              a = t.record;
                          }
                          return s;
                      })(n, v, S, T)
                    : [],
            [n, v, S, T],
        );
    return null == v
        ? null
        : (0, a.jsxs)(q.animated.div, {
              className: lC.Nr,
              style: {
                  top: t.cardTop,
                  bottom: 0,
                  left: t.cardInsetLeft,
                  right: t.cardInsetRight,
                  opacity: t.cardOpacity,
                  borderColor: f,
                  borderRadius: g.to((e) => `${e}px ${e}px 0 0`),
                  boxShadow: p.to((e) => `0 8px 24px rgba(0, 0, 0, ${e})`),
              },
              children: [
                  (0, a.jsx)(q.animated.div, { className: lC.sB, style: { opacity: t.bodyTintOpacity } }),
                  (0, a.jsx)(q.animated.div, {
                      style: { paddingTop: A, paddingLeft: A, paddingRight: A },
                      children: (0, a.jsx)(eJ, { channel: n, conversation: v, requestDismiss: s }),
                  }),
                  (0, a.jsxs)("div", {
                      className: lC.gk,
                      children: [
                          (0, a.jsx)(Y.zC, {
                              className: lC.XG,
                              ref: i,
                              onScroll: I,
                              children: (0, a.jsxs)(q.animated.div, {
                                  style: { paddingLeft: A, paddingRight: A },
                                  children: [
                                      (0, a.jsx)(lo, {
                                          channel: n,
                                          focusStream: N,
                                          isCollapsed: o || "navigation" === c,
                                          isHydrating: y && j,
                                      }),
                                      (0, a.jsx)("div", { className: lC.lB }),
                                  ],
                              }),
                          }),
                          (0, a.jsx)("div", { ref: x, className: lC.iX, "aria-hidden": !0 }),
                          C && (0, a.jsx)("div", { className: lC.aE, "aria-hidden": !0 }),
                      ],
                  }),
              ],
          });
}
function lx(e) {
    let { channel: t } = e,
        { dismissReason: n, setDismissReason: l } = W(),
        { bannerMeasurementRef: i } = K(),
        { isFocused: s, setIsFocused: o } = (0, F.D7)(),
        d = r.useRef(!1),
        h = r.useRef(null),
        m = (0, u.bG)([w.A], () => w.A.getSelectedConversationId(t.id), [t.id]),
        g = r.useCallback(
            async (e) => {
                if (s && !d.current) {
                    if (
                        ((d.current = !0),
                        null != m &&
                            U.X.trackFocusModeDismissed({ channelId: t.id, conversationId: m, dismissReason: e }),
                        "return" === e && null != m)
                    ) {
                        let e = w.A.getConversation(t.id);
                        if (null != e)
                            try {
                                await y.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 });
                            } catch (e) {}
                        await (async function (e) {
                            let t = e.current,
                                n = t?.getScrollerNode();
                            null == t ||
                                null == n ||
                                n.scrollTop <= 5 ||
                                (await new Promise((e) => {
                                    t.scrollTo({ to: 0, animate: !0, callback: () => e() });
                                }));
                        })(h);
                    }
                    (l(e), o(!1), (d.current = !1));
                }
            },
            [t.id, s, o, l, h, m],
        );
    (!(function (e, t) {
        let { isFocused: n } = (0, F.D7)(),
            l = (0, u.cf)(
                [eC.A],
                () => {
                    let t = eC.A.getMessages(e.id);
                    return { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
                },
                [e.id],
            ),
            i = r.useRef(l),
            s = r.useRef(null);
        (r.useEffect(() => {
            if (!n) return;
            let t = eC.A.getMessages(e.id);
            ((i.current = { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId }),
                (s.current = w.A.getConversation(e.id)));
        }, [n, e.id]),
            r.useEffect(() => {
                if (!n) return;
                let { jumpTargetId: e, jumpSequenceId: a } = i.current;
                (l.jumpTargetId === e && l.jumpSequenceId === a) ||
                    s.current?.messageIds.some((e) => e === l.jumpTargetId) ||
                    t("navigation");
            }, [n, l, t]));
    })(t, g),
        r.useEffect(() => {
            if (s)
                return (
                    eE._.subscribe(es.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e),
                    () => {
                        eE._.unsubscribe(es.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e);
                    }
                );
            function e() {
                g("return");
            }
        }, [s, g]));
    let p = r.useCallback(() => {
            g("return");
        }, [g]),
        A = r.useMemo(
            () => ({
                from: () => ({
                    cardTop: i.current ?? 0,
                    cardInsetLeft: 4,
                    cardInsetRight: 16,
                    bodyTintOpacity: 0,
                    cardOpacity: 1,
                }),
                enter: { cardTop: 32, cardInsetLeft: 32, cardInsetRight: 32, bodyTintOpacity: 1, cardOpacity: 1 },
                leave: () => {
                    var e;
                    return (
                        (e = i.current),
                        "navigation" === n
                            ? { cardTop: 32, cardInsetLeft: 32, cardInsetRight: 32, bodyTintOpacity: 0, cardOpacity: 0 }
                            : {
                                  cardTop: e ?? 0,
                                  cardInsetLeft: 4,
                                  cardInsetRight: 16,
                                  bodyTintOpacity: 0,
                                  cardOpacity: 1,
                              }
                    );
                },
                config: () => (e) => ("leave" !== e ? lm : "navigation" === n ? lp : lg),
                onRest: (e, t) => {
                    "leave" === t.phase && l(null);
                },
            }),
            [n, i, l],
        ),
        f = (0, Q.p)(s ? m : null, A, "respect-motion-settings");
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: c()(lC.tB, !s && lC.Vq, {
                    [lC.Em]: !s && "navigation" === n,
                    [lC.Zp]: !s && "navigation" !== n,
                }),
                onClick: p,
                "aria-hidden": !0,
            }),
            f((e, n) =>
                null == n
                    ? null
                    : (0, a.jsx)(lE, { style: e, channel: t, conversationId: n, scrollerRef: h, requestDismiss: g }),
            ),
        ],
    });
}
function lI(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, F.D7)(),
        { dismissReason: l } = W();
    return n || null !== l ? (0, a.jsx)(lx, { channel: t }) : null;
}
var lS = n(708988),
    ly = n(872351),
    lb = n(359144);
let l_ = (0, q.animated)("button"),
    lj = (0, k.P)(ev.E);
function lv(e) {
    e.preventDefault();
}
let lT = r.memo(function (e) {
    let t,
        n,
        l,
        i,
        s,
        {
            conversation: o,
            layout: d,
            isExpanded: u,
            anchorId: h,
            hoveredConversationId: m,
            selectedConversationId: g,
            isFocusOverlayOpen: p,
            onHoverConversationChange: A,
            onJump: f,
        } = e,
        C = g === o.id,
        E = m === o.id,
        x = null != m && !E,
        I = null == h ? "up" : ei.default.compare(o.startMessageId, h) > 0 ? "down" : "up",
        S = o.title,
        y = Math.min(16, Math.max(4, Math.round(0.6 * S.length))),
        b = (0, X.z)({ y: d.y, opacity: +!d.hidden, config: lu }, "respect-motion-settings"),
        _ = (0, X.z)(
            {
                ...((t = u && C),
                (n = 0),
                u && (C && E ? (n = -17) : C ? (n = -13) : E && (n = -24)),
                (l = 0),
                (i = 4),
                (s = 1),
                C && E ? ((l = 0), (i = 0), (s = 0.5)) : u && E && ((l = 1), (i = 0), (s = 1)),
                {
                    textScale: u ? 1 : 0.5,
                    textX: n,
                    textOpacity: +!!u,
                    lineScaleX: u ? 3 : 1,
                    pillOpacity: +!!t,
                    pillX: t ? (E ? -4 : 0) : 8,
                    pillScale: t ? 1 : 0.85,
                    arrowOpacity: l,
                    arrowX: i,
                    arrowScale: s,
                }),
                lineWidth: y,
                lineOpacity: +(!u && !d.hidden),
                config: lh,
            },
            "respect-motion-settings",
        ),
        j = r.useCallback(() => A(o.id), [A, o.id]),
        v = r.useCallback(() => A(null), [A]),
        T = r.useCallback(() => f(o.id), [f, o.id]),
        N = d.hidden || d.edge;
    return (0, a.jsxs)(l_, {
        "aria-current": C ? "true" : void 0,
        "aria-hidden": N ? "true" : void 0,
        className: c()(lb.ng, { [lb._D]: C, [lb.DJ]: E, [lb.KZ]: x }),
        style: {
            transform: b.y.to((e) => `translateY(${e}px)`),
            opacity: b.opacity,
            pointerEvents: N ? "none" : void 0,
        },
        onMouseDown: lv,
        onMouseEnter: j,
        onMouseLeave: v,
        onClick: T,
        children: [
            (0, a.jsx)(q.animated.span, {
                className: c()(lb.Og, p && lb.v7),
                style: {
                    opacity: _.pillOpacity,
                    transform: (0, q.to)(
                        [_.pillX, _.pillScale],
                        (e, t) => `translateY(-50%) translateX(${e}px) scale(${t})`,
                    ),
                },
                children: (0, a.jsx)(ev.E, {
                    tag: "span",
                    variant: "body-md/semibold",
                    color: "none",
                    className: lb.B6,
                    children: S,
                }),
            }),
            (0, a.jsx)(lj, {
                tag: "span",
                variant: C ? "body-md/semibold" : "body-md/normal",
                color: C ? "text-strong" : E ? "text-default" : x ? "text-muted" : "text-subtle",
                className: lb.QV,
                lineClamp: 1,
                style: {
                    opacity: _.textOpacity,
                    transform: (0, q.to)([_.textScale, _.textX], (e, t) => `scale(${e}) translateX(${t}px)`),
                },
                children: S,
            }),
            (0, a.jsx)("span", {
                className: lb.iF,
                children: (0, a.jsx)(q.animated.span, {
                    className: lb.iN,
                    style: {
                        width: _.lineWidth,
                        opacity: _.lineOpacity,
                        transform: _.lineScaleX.to((e) => `scaleX(${e})`),
                    },
                }),
            }),
            (0, a.jsx)(q.animated.span, {
                className: lb.$N,
                "aria-hidden": "true",
                style: {
                    opacity: _.arrowOpacity,
                    transform: (0, q.to)([_.arrowX, _.arrowScale], (e, t) => `translateX(${e}px) scale(${t})`),
                },
                children:
                    "down" === I
                        ? (0, a.jsx)(lS.ArrowSmallDownIcon, { size: "refresh_sm", color: "currentColor" })
                        : (0, a.jsx)(ly.ArrowSmallUpIcon, { size: "refresh_sm", color: "currentColor" }),
            }),
        ],
    });
});
function lN(e) {
    let {
            items: t,
            isExpanded: n,
            anchorId: l,
            hoveredConversationId: i,
            selectedConversationId: s,
            showTopFade: o,
            showBottomFade: d,
            isFocusOverlayOpen: u,
            onHoverConversationChange: h,
            onJump: m,
        } = e,
        g = r.useMemo(() => (n && null != s ? (t.find((e) => e.conversation.id === s)?.slot ?? -1) : -1), [n, t, s]),
        p = r.useMemo(() => {
            let e = new Map();
            for (let t = -3; t <= 9; t++)
                e.set(
                    t,
                    (function (e) {
                        let t,
                            { slot: n, jumpedSlot: l, isExpanded: i, showTopFade: s, showBottomFade: a } = e,
                            r = n < 0 || n > 6;
                        return (
                            i
                                ? ((t = lf(28) + 28 * n), l >= 0 && n !== l && (t += n < l ? -8 : 8))
                                : (t = lf(14) + 14 * n),
                            {
                                y: t,
                                hidden: r,
                                edge: i ? !r && ((0 === n && s) || (6 === n && a)) : (n <= 0 && s) || (n >= 6 && a),
                            }
                        );
                    })({ slot: t, jumpedSlot: g, isExpanded: n, showTopFade: o, showBottomFade: d }),
                );
            return e;
        }, [g, n, o, d]);
    return (0, a.jsx)("div", {
        className: c()(lb._R, n && lb.h1),
        role: "list",
        "aria-label": eG.intl.string(eO.default["Sw/4fg"]),
        children: t.map((e) => {
            let { conversation: t, slot: r } = e,
                o = p.get(r);
            return null == o
                ? null
                : (0, a.jsx)(
                      lT,
                      {
                          conversation: t,
                          layout: o,
                          isExpanded: n,
                          anchorId: l,
                          hoveredConversationId: i,
                          selectedConversationId: s,
                          isFocusOverlayOpen: u,
                          onHoverConversationChange: h,
                          onJump: m,
                      },
                      t.id,
                  );
        }),
    });
}
var lM = n(778712),
    lR = n(97808),
    lD = n(854627),
    lk = n(562153);
n(575279);
var lL = n(437057);
let lP = [
        { name: "40%", l1: "75%", l2: "50%" },
        { name: "55%", l1: "90%", l2: null },
        { name: "30%", l1: "60%", l2: "80%" },
        { name: "65%", l1: "45%", l2: "70%" },
    ],
    lO = {};
function lG(e) {
    let { channel: t, message: n } = e,
        l = lk.Ay.useName(t.guild_id, t.id, n.author),
        { avatarSrc: i, avatarDecorationSrc: s } = (0, lD.A)({
            userId: n.author.id,
            guildId: t.guild_id,
            size: lM._3.SIZE_32,
        }),
        { content: o } = (0, tv.A)(n, lO),
        c = e5.PZ.useSetting(),
        d = r.useMemo(() => (0, el.mk)(n.timestamp, !0, c), [n.timestamp, c]);
    return (0, a.jsxs)("div", {
        className: lL.QS,
        children: [
            (0, a.jsx)(lR.eu, {
                className: lL.MM,
                src: i,
                avatarDecoration: s,
                size: lM._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, a.jsxs)("div", {
                className: lL.gp,
                children: [
                    (0, a.jsxs)("div", {
                        className: lL.yl,
                        children: [
                            (0, a.jsx)(ev.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: l,
                            }),
                            (0, a.jsx)(ev.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: d,
                            }),
                        ],
                    }),
                    (0, a.jsx)(ev.E, { variant: "body-sm/normal", color: "text-default", children: o }),
                ],
            }),
        ],
    });
}
function lU() {
    return (0, a.jsx)("div", {
        className: lL.Rq,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) => {
            let n = lP[t % lP.length];
            return (0, a.jsxs)(
                "div",
                {
                    className: lL.uA,
                    children: [
                        (0, a.jsx)("div", { className: lL.h }),
                        (0, a.jsxs)("div", {
                            className: lL.jE,
                            children: [
                                (0, a.jsx)("div", { className: lL.zw, style: { width: n.name } }),
                                (0, a.jsx)("div", { className: lL.P4, style: { width: n.l1 } }),
                                null != n.l2 && (0, a.jsx)("div", { className: lL.P4, style: { width: n.l2 } }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function lw(e) {
    let { channel: t, conversationId: n } = e,
        { isFocused: l } = (0, F.D7)(),
        i = (0, u.bG)([eT.A], () => eT.A.getHydratedMessages(t.id, n), [n, t.id]),
        s = r.useMemo(() => i?.slice(0, 4) ?? null, [i]);
    return (0, a.jsx)("div", {
        className: c()(lL.Zt, l && lL.CU),
        children: (0, a.jsx)("div", {
            className: lL.eU,
            children:
                null == s
                    ? (0, a.jsx)(lU, {})
                    : s.length > 0
                      ? (0, a.jsx)("div", {
                            className: lL.z0,
                            children: s.map((e) => (0, a.jsx)(lG, { channel: t, message: e }, e.id)),
                        })
                      : null,
        }),
    });
}
var lF = n(130791);
function lH(e) {
    let { channel: t, scrollManager: n, conversations: l } = e,
        i = (0, u.bG)([w.A], () => w.A.getSelectedConversationId(t.id), [t.id]),
        { selectAndFocusConversation: s } = K(),
        { isFocused: o } = (0, F.D7)(),
        { dismissReason: d } = W(),
        h = (function (e) {
            let [t, n] = r.useState(null);
            return (
                r.useEffect(() => {
                    function t(e) {
                        return n(e?.id ?? null);
                    }
                    return (e.addAutomaticAnchorCallback(t, !0), () => e.removeAutomaticAnchorCallback(t));
                }, [e]),
                t
            );
        })(n),
        m = r.useMemo(
            () =>
                0 === l.length
                    ? null
                    : (l[
                          (function (e, t) {
                              if (0 === e.length) return 0;
                              if (null == t) return e.length - 1;
                              let n = e.findLastIndex((e) => 0 >= ei.default.compare(e.startMessageId, t));
                              return n >= 0 ? n : 0;
                          })(l, h)
                      ]?.id ?? null),
            [h, l],
        ),
        g = r.useMemo(
            () =>
                0 === l.length
                    ? null
                    : null != i && l.some((e) => e.id === i)
                      ? i
                      : null != m && l.some((e) => e.id === m)
                        ? m
                        : l[l.length - 1].id,
            [m, l, i],
        ),
        { clampLow: p, clampHigh: A } = (function (e) {
            if (0 === e) return { clampLow: 0, clampHigh: 0 };
            let t = Math.min(2, e - 1),
                n = Math.max(t, e - 1 - 2);
            return { clampLow: t, clampHigh: n };
        })(l.length),
        f = r.useMemo(
            () =>
                (function (e, t, n, l) {
                    if (0 === e.length) return 0;
                    let i = null != t ? e.findIndex((e) => e.id === t) : -1,
                        s = i >= 0 ? i : e.length - 1;
                    return (0, lc.clamp)(s, n, l);
                })(l, g, p, A),
            [l, g, p, A],
        ),
        [C, E] = r.useState(!1),
        x = r.useCallback(() => E(!1), []),
        I = r.useMemo(
            () =>
                (function (e, t) {
                    let n = [];
                    for (let l = -6; l <= lA; l++) {
                        let i = t + l;
                        i >= 0 && i < e.length && n.push({ conversation: e[i], index: i, slot: 3 + l });
                    }
                    return n;
                })(l, f),
            [l, f],
        ),
        S = r.useMemo(() => I.filter((e) => e.slot >= 0 && e.slot <= 6).map((e) => e.conversation), [I]),
        { showTopFade: y, showBottomFade: b } = r.useMemo(
            () => ({ showTopFade: f >= 3, showBottomFade: f < l.length - 3 }),
            [f, l.length],
        ),
        _ = r.useRef(null),
        [j, v] = r.useState(null),
        T = null != j && j !== i ? j : null;
    r.useEffect(() => {
        (0, G.p7)(t.id, S.length);
    }, [t.id]);
    let N = r.useCallback(
            (e) => {
                (null != e &&
                    e !== i &&
                    U.X.trackPreviewImpression({ channelId: t.id, conversationId: e, isFocusMode: o }),
                    v(e),
                    null != e && e !== i && (0, G.qC)(t.id, e, { previewLimit: 4, cacheType: "channel" }));
            },
            [t.id, o, i],
        ),
        M = r.useCallback(() => {
            (v(null), x());
        }, [x]),
        R = r.useCallback(
            (e) => {
                (U.X.trackTopicsUnitClicked({ channelId: t.id, conversationId: e, isFocusMode: o }),
                    s(e, { cacheType: "channel" }),
                    x());
            },
            [t.id, x, o, s],
        ),
        D = r.useCallback(() => (null != T ? (0, a.jsx)(lw, { channel: t, conversationId: T }) : null), [t, T]),
        k = r.useCallback(
            (e) => {
                let t;
                (null != (t = n.ref.current?.getScrollerNode?.()) && 0 === e.deltaMode && (t.scrollTop += e.deltaY),
                    C && (v(null), x()));
            },
            [n, C, x],
        ),
        L = r.useCallback(() => {
            (E(!0),
                U.X.trackTopicsUnitImpression({
                    channelId: t.id,
                    conversationIds: S.map((e) => e.id),
                    isFocusMode: o,
                }));
        }, [t.id, S, o]);
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: c()(lF.kL, o && lF.tW, { [lF._Y]: !o && "navigation" === d, [lF.J_]: !o && "return" === d }),
              children: (0, a.jsxs)("div", {
                  className: c()(lF.rI, C && lF.RK),
                  onMouseEnter: L,
                  onMouseLeave: M,
                  onWheel: o ? void 0 : k,
                  children: [
                      (0, a.jsx)("div", { className: c()(lF.oT, C && lF.RK), "aria-hidden": !0 }),
                      (0, a.jsx)(e_.Y, {
                          targetElementRef: _,
                          shouldShow: C && null != T,
                          position: "top",
                          align: "right",
                          spacing: 12,
                          animation: e_.Y.Animation.FADE,
                          renderPopout: D,
                          children: () =>
                              (0, a.jsx)("div", {
                                  ref: _,
                                  className: c()(lF.nd, { [lF.mc]: C, [lF._z]: !C, [lF.OP]: C && y, [lF.yc]: C && b }),
                                  style: { height: 188 },
                                  children: (0, a.jsx)(lN, {
                                      items: I,
                                      isExpanded: C,
                                      anchorId: h,
                                      hoveredConversationId: j,
                                      selectedConversationId: i,
                                      showTopFade: y,
                                      showBottomFade: b,
                                      isFocusOverlayOpen: o,
                                      onHoverConversationChange: N,
                                      onJump: R,
                                  }),
                              }),
                      }),
                  ],
              }),
          });
}
function lB(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, V.sV)(t.guild_id, "scrollbar_chips"),
        i = (0, u.yK)([eT.A], () => (l ? (eT.A.getChannelConversations(t.id) ?? []) : []), [t.id, l]);
    return l && 0 !== i.length ? (0, a.jsx)(lH, { channel: t, scrollManager: n, conversations: i }) : null;
}
function lK(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, V.sV)(t.guild_id, "scrollbar_chips");
    return (0, a.jsxs)($, {
        children: [(0, a.jsx)(lI, { channel: t }), l && (0, a.jsx)(lB, { channel: t, scrollManager: n })],
    });
}
var lV = n(354328),
    lz = n(807632),
    lW = n(875317),
    l$ = n(164956),
    lq = n(302031),
    lZ = n(391820),
    lJ = n(141343),
    lX = n(72314),
    lY = n(218461),
    lQ = n(399263),
    l0 = n(287809),
    l1 = n(234320),
    l2 = n(863439),
    l3 = n(326337),
    l4 = n(125435);
function l7(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: i, groupSpacing: s } = e;
    return r.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, a.jsx)("div", {
            className: l4.i,
            style: { height: i },
            children: n.map((n, l) =>
                (0, a.jsx)(n5.A, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, l, i, s]);
}
var l5 = n(830178),
    l8 = n(116903),
    l6 = n(621466),
    l9 = n(315710),
    ie = n(951001),
    it = n(334738),
    il = n(267102),
    ii = n(863922),
    is = n(965407);
function ia(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, l6.vq)(l, HTMLElement);) ((n += l.offsetTop ?? 0), (l = l.offsetParent));
    return n;
}
let ir = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"]);
function io(e) {
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: t, jumpTargetOffset: n } = e;
    if (e.has(t) || (!e.hasMoreBefore && t === ei.default.castChannelIdAsMessageId(e.channelId))) {
        if (0 === n) return t;
        let l = e.getByIndex(e.indexOf(t) + n);
        return l?.id ?? t;
    }
    let l = [
            t,
            ...e.map((e) => {
                let { id: t } = e;
                return t;
            }),
        ].sort(ei.default.compare),
        i = l.indexOf(t),
        s = l[i + (Math.abs(n) > 0 ? n : 1)] ?? l[i - 1];
    return null != s ? s : null;
}
let ic = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class id {
    props;
    ref = r.createRef();
    automaticAnchor = null;
    messageFetchAnchor = null;
    focusAnchor = null;
    loading;
    jumping = !1;
    pinned;
    dragging = !1;
    isAtBottom = null;
    prevScrollTop = null;
    anchorTimeout = null;
    initialScrollTop = null;
    acking = !1;
    scrollCounter = 0;
    offsetHeightCache = 0;
    scrollHeightCache = 0;
    scrollTopCache = -1;
    scrollHeightBeforeLoad = null;
    loadMorePausedUntilUserScroll = !1;
    _bottomAnchor = null;
    _automaticAnchorCallbacks = [];
    _scrollCompleteCallbacks = [];
    constructor(e) {
        if (((this.props = e), (this.loading = e.messages.loadingMore), null != e.messages.jumpTargetId))
            this.pinned = !1;
        else {
            let t = lX.A.isAtBottom(e.channel.id);
            ((this.pinned = t ?? !0),
                (this.initialScrollTop = t ? null : (lX.A.getChannelDimensions(e.channel.id)?.scrollTop ?? null)));
        }
    }
    isReady() {
        return this.props.messages.ready;
    }
    isLoading() {
        return this.loading || this.props.messages.loadingMore;
    }
    isPinned() {
        return this.pinned && !this.props.messages.hasMoreAfter;
    }
    isJumping() {
        return this.jumping;
    }
    isDragging() {
        return this.dragging;
    }
    isInitialized() {
        return void 0 === this.initialScrollTop;
    }
    isScrollLoadingDisabled() {
        return (
            !!this.loadMorePausedUntilUserScroll ||
            this.isLoading() ||
            !this.isInitialized() ||
            this.isJumping() ||
            this.isDragging() ||
            !this.props.canLoadMore
        );
    }
    isActivelyScrolling() {
        return this.scrollCounter >= 5;
    }
    getDocument() {
        return this.ref.current?.getScrollerNode()?.ownerDocument;
    }
    getElementFromMessageId(e) {
        let t = this.getDocument(),
            {
                channel: { id: n },
            } = this.props;
        return null == t ? null : t.getElementById((0, te.j)(n, e));
    }
    isScrolledToBottom() {
        let {
            scrollTop: e,
            scrollHeight: t,
            offsetHeight: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
        return e >= t - n - 2 && !this.props.messages.hasMoreAfter;
    }
    mergePropsAndUpdate(e) {
        let t = this.props.windowId;
        (this.mergePropsAndUpdate_(e),
            this.acking && t !== this.props.windowId && ((this.acking = !1), (0, it.Z5)(this.props.channel.id, t)),
            this.props.messages.ready && this.enableAutomaticAck());
    }
    mergePropsAndUpdate_(e) {
        let t = this.props.messages,
            n = this.props.focusId;
        this.props = { ...e };
        let { offsetHeight: l, scrollHeight: i } = this.getScrollerState(),
            s = this.isHeightChange(l, i);
        if (
            ((this.offsetHeightCache = l),
            (this.scrollHeightCache = i),
            (this.loading = e.messages.loadingMore),
            t.channelId !== e.messages.channelId)
        )
            ((this.loadMorePausedUntilUserScroll = !1), (this.scrollHeightBeforeLoad = null));
        else if (null != this.scrollHeightBeforeLoad && !e.messages.loadingMore) {
            let e = i - this.scrollHeightBeforeLoad;
            ((this.scrollHeightBeforeLoad = null),
                (this.loadMorePausedUntilUserScroll = this.loadMorePausedUntilUserScroll || e < 100));
        }
        if (this.isInitialized() || this.isReady()) {
            if (!this.isInitialized()) return void this.restoreScroll();
        } else {
            null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
            return;
        }
        if (null != e.messages.jumpTargetId) {
            if (this.isLoading()) return;
            let n = io(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping())
                    return void (null != n
                        ? this.scrollToMessage({ jumpTargetId: n, animate: !0 })
                        : (this.jumping = !1));
            } else {
                let l,
                    i = t.first();
                (null != i &&
                    e.messages.last() !== t.last() &&
                    e.messages.first() !== t.first() &&
                    (l = ei.default.extractTimestamp(i.id)),
                    this.scrollToMessage({
                        jumpTargetId: n,
                        animate: !0,
                        fromTimestamp: l,
                        onJumpComplete: e.messages.onJumpComplete,
                    }));
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            ((this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0));
            return;
        }
        let a = e.messages.last(),
            r = t.last(),
            o = is.A.getOptions(a?.id ?? "");
        if (null != a && a.state === es.cmJ.SENDING && r?.id !== a.id && o?.doNotScroll !== !0)
            return void this.setScrollToBottom();
        let { focusId: c } = this.props;
        if (null != c && n !== c) {
            let e = this.getElementFromMessageId(c);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: 16 + this.props.additionalMessagePadding,
                    callback: this.handleScroll,
                });
        }
        s && this.fixScrollPosition(l, i);
    }
    getAnchorData(e, t, n) {
        let l = this.getElementFromMessageId(e),
            i = this.ref.current?.getScrollerNode();
        if (!(0, l6.vq)(l) || null == i) return null;
        let { offsetHeight: s } = l,
            a = ia(l, i),
            r = a - t;
        return (
            null != n && (r = Math.max(-s, Math.min(n, r))),
            { id: e, offsetFromTop: r, offsetTop: a, offsetHeight: s, clamped: null != r }
        );
    }
    cleanAutomaticAnchor() {
        this.setAutomaticAnchor(null);
    }
    newMessageBarBuffer() {
        return this.props.channel.isForumPost() ? 64 : 32;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            l = this.getScrollerState(),
            { scrollTop: i } = l,
            s = t && i >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            a = null,
            r = -1,
            o = !1;
        for (;;) {
            var c;
            let t = -1 === (c = r) ? ei.default.castChannelIdAsMessageId(n.id) : e._array[c]?.id;
            if (null == t) break;
            let d = this.getAnchorData(t, i);
            if (((this._bottomAnchor = d), o && null != d && d.offsetTop > i + s + l.offsetHeight)) break;
            if (o) {
                r++;
                continue;
            }
            (null != d && (d.offsetTop >= i + s || r === e.length - 1) && ((a = d), (o = !0)), r++);
        }
        return a;
    }
    findFetchAnchor(e) {
        let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            l = e ? -1 : 1,
            i = null,
            s = t._array.length - 1;
        for (let a = e ? s : 0; null != t._array[a]; a += l) {
            let e = t._array[a],
                l = this.getAnchorData(e.id, n);
            if (null != l) {
                i = l;
                break;
            }
        }
        return i;
    }
    getAnchorFixData() {
        let e = this.ref.current?.getScrollerNode();
        if (null == e) return null;
        for (let t of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == t) continue;
            let n = this.getElementFromMessageId(t.id);
            if (!(0, l6.vq)(n)) continue;
            let l = t === this.messageFetchAnchor ? t.offsetHeight - n.offsetHeight : 0;
            return { node: n, fixedScrollTop: ia(n, e) - (t.offsetFromTop + l) };
        }
        return null;
    }
    fixAnchorScrollPosition() {
        let e = this.getAnchorFixData();
        if (null == e) return void this.handleScroll();
        let { node: t, fixedScrollTop: n } = e;
        (null != this.focusAnchor
            ? (this.isPinned()
                  ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                  : this.mergeTo(n, this.handleScroll),
              this.ref.current?.scrollIntoViewNode({
                  node: t,
                  padding: 16 + this.props.additionalMessagePadding,
                  callback: this.handleScroll,
              }))
            : this.mergeTo(n, this.handleScroll),
            this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()));
    }
    hasAnchor() {
        return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor;
    }
    updateFocusAnchor(e, t, n) {
        let l = (this.focusAnchor = null != e ? this.getAnchorData(e, t) : null);
        null != l && (l.offsetFromTop >= n || t > l.offsetTop + l.offsetHeight) && (this.focusAnchor = null);
    }
    handleFocusAnchorScroll(e, t) {
        this.updateFocusAnchor(this.focusAnchor?.id, e, t);
    }
    updateFetchAnchor(e, t, n) {
        let l = this.ref.current?.getScrollerNode();
        null != this.messageFetchAnchor &&
            null != l &&
            (this.messageFetchAnchor = this.getAnchorData(
                this.messageFetchAnchor.id,
                e,
                this.isInPlaceholderRegion({ scrollTop: e, offsetHeight: t, scrollHeight: n }) > 0 ? t : void 0,
            ));
    }
    updateAutomaticAnchor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.ref.current?.getScrollerNode();
        if (null == this.automaticAnchor || null == n) return;
        let l = this.getAnchorData(this.automaticAnchor.id, e);
        (t && null != l && null != this.automaticAnchor && (l.offsetFromTop = this.automaticAnchor.offsetFromTop),
            this.setAutomaticAnchor(l));
    }
    updateVisibleMessagesDebounced = ld().debounce(ii.s_, 300);
    setAutomaticAnchor(e) {
        ((this.automaticAnchor = e),
            this._automaticAnchorCallbacks?.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(e?.id, this._bottomAnchor?.id));
    }
    getScrollerState() {
        return this.ref.current?.getScrollerState() ?? ic;
    }
    handleScroll = (e) => {
        if (!this.isInitialized()) return;
        let t = this.getScrollerState(),
            n = this.isScrolledToBottom(t);
        if (
            (n !== this.isAtBottom &&
                (n
                    ? ((this.isAtBottom = !0), this.props.handleScrollToBottom())
                    : ((this.isAtBottom = !1), this.props.handleScrollFromBottom())),
            t.offsetHeight !== this.offsetHeightCache || t.scrollHeight !== this.scrollHeightCache)
        )
            ((this.scrollCounter = 0),
                clearTimeout(this.anchorTimeout),
                this.isPinned() ||
                    (null == this.automaticAnchor
                        ? this.setAutomaticAnchor(this.findAnchor())
                        : this.updateAutomaticAnchor(t.scrollTop, !0)),
                clearTimeout(this.anchorTimeout),
                this.fixScrollPosition(t.offsetHeight, t.scrollHeight),
                (this.scrollTopCache = t.scrollTop));
        else {
            if (null != e && e.target !== this.ref.current?.getScrollerNode()) return;
            this.scrollTopCache !== t.scrollTop &&
                (this.loadMorePausedUntilUserScroll &&
                    null != e &&
                    0 === this.isInScrollTriggerLoadingRegion(t) &&
                    (this.loadMorePausedUntilUserScroll = !1),
                (this.pinned = n),
                (this.scrollCounter = Math.min(this.scrollCounter + 1, 5)),
                this.pinned
                    ? this.cleanAutomaticAnchor()
                    : null != this.automaticAnchor
                      ? this.updateAutomaticAnchor(t.scrollTop, !0)
                      : this.setAutomaticAnchor(this.findAnchor()),
                (this.scrollTopCache = t.scrollTop),
                clearTimeout(this.anchorTimeout),
                (this.anchorTimeout = setTimeout(() => {
                    ((this.scrollCounter = 0), (this.anchorTimeout = null), (this.prevScrollTop = null));
                    let { scrollHeight: e, offsetHeight: t } = this.getScrollerState();
                    this.isHeightChange(t, e)
                        ? this.handleScroll()
                        : (this.cleanAutomaticAnchor(), this.isPinned() || this.setAutomaticAnchor(this.findAnchor()));
                }, 35)));
        }
        if (
            (this.handleFocusAnchorScroll(t.scrollTop, t.offsetHeight),
            this.updateStoreDimensionsDebounced(),
            this.isScrollLoadingDisabled())
        )
            return (this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(t));
        let l = this.isInScrollTriggerLoadingRegion(t);
        (1 === l ? this.loadMore() : 2 === l ? this.loadMore(!0) : this.enableAutomaticAck(),
            this.handleScrollSpeed(t));
    };
    handleResize = (e, t) => {
        let { offsetHeightCache: n, scrollHeightCache: l } = this;
        ("container" === t ? (n = e.contentRect.height) : "content" === t && (l = e.contentRect.height),
            this.isHeightChange(n, l) && this.fixScrollPosition(n, l));
    };
    handleMouseDown = (e) => {
        e.target === e.currentTarget && (this.dragging = !0);
    };
    handleMouseUp = () => {
        (this.dragging && (this.loadMorePausedUntilUserScroll = !1), (this.dragging = !1), this.handleScroll());
    };
    handleUserScrollGesture = () => {
        this.loadMorePausedUntilUserScroll && ((this.loadMorePausedUntilUserScroll = !1), this.handleScroll());
    };
    handleKeyDown = (e) => {
        ir.has(e.key) && this.handleUserScrollGesture();
    };
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            { messages: i, topPlaceholderHeight: s, bottomPlaceholderHeight: a } = this.props;
        return i.hasMoreBefore && t < s && l > n ? 1 : i.hasMoreAfter && t >= l - n - a ? 2 : 0;
    }
    isInScrollTriggerLoadingRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            { messages: i } = this.props;
        return i.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && l > n
            ? 1
            : i.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e)
              ? 2
              : 0;
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            {
                prevScrollTop: i,
                props: { topPlaceholderHeight: s, bottomPlaceholderHeight: a },
            } = this;
        if (((this.prevScrollTop = t), null == i || this.isPinned() || this.isScrolledToBottom(e))) return;
        let r = this.isInPlaceholderRegion(e),
            o = t - i;
        0 !== r &&
            0 !== o &&
            (1 === r && t + o <= 0
                ? (this.mergeTo(s - n), (this.prevScrollTop = s - n))
                : 2 === r && t + o >= l - n && (this.mergeTo(l - a), (this.prevScrollTop = l - a)));
    }
    enableAutomaticAck() {
        this.isInitialized() &&
            !this.acking &&
            ((this.acking = !0),
            this.updateStoreDimensions(() => {
                (0, it._9)(this.props.channel.id, this.props.windowId);
            }));
    }
    fixScrollPosition(e, t) {
        ((this.offsetHeightCache = e),
            (this.scrollHeightCache = t),
            (this.prevScrollTop = null),
            this.fixJumpTarget(),
            this.isPinned() && null == this.focusAnchor
                ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                : this.fixAnchorScrollPosition(),
            this.isLoading() || (this.messageFetchAnchor = null));
    }
    fixJumpTarget() {
        if (!this.isJumping()) return;
        let { messages: e, hasUnreads: t } = this.props;
        if (null != e.jumpTargetId) {
            let n = io(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, l6.vq)(l)
                ? this.scrollTo(this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : 16), !0)
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = this.getDocument()?.getElementById(n$.q4),
            i = () => {
                ((this.jumping = !1),
                    this.setAutomaticAnchor(this.findAnchor()),
                    null != n && n(),
                    this.handleScroll());
            };
        ((this.pinned = !1),
            (this.jumping = e),
            null != l
                ? this.scrollTo(this.getOffsetOrientationFromNode(l, t, this.newMessageBarBuffer()), e, i)
                : this.scrollTo(this.getOffsetToPreventLoading("top"), e, i));
    }
    getOffsetOrientationFromNode(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            l = this.ref.current?.getScrollerNode();
        if (null == l) return 0;
        let i = this.getScrollerState(),
            s = ia(e, l);
        return "middle" === t ? Math.min(s - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = io(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1, onJumpComplete: this.props.messages.onJumpComplete })
            : this.props.hasUnreads &&
                this.props.channel.type !== es.rbe.GUILD_VOICE &&
                this.props.channel.type !== es.rbe.GUILD_STAGE_VOICE
              ? this.scrollToNewMessages()
              : null != e
                ? this.scrollTo(e + this.props.topPlaceholderHeight, !1, this.handleScroll)
                : this.setScrollToBottom();
    }
    loadMore = (() => {
        var e = this;
        return function () {
            let t,
                n,
                l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                i = arguments.length > 1 ? arguments[1] : void 0,
                { messages: s } = e.props;
            if (l) {
                let e = s.last();
                null != e && (n = e.id);
            } else {
                let e = s.first();
                null != e && (t = e.id);
            }
            (i?.pauseUntilUserScroll === !0 && (e.loadMorePausedUntilUserScroll = !0),
                (e.messageFetchAnchor = e.findFetchAnchor(l)),
                (e.scrollHeightBeforeLoad = e.scrollHeightCache),
                (e.loading = !0),
                y.A.fetchMessages({
                    channelId: e.props.channel.id,
                    before: t,
                    after: n,
                    limit: Math.min(30, 2 * (0, l3.h)("scrollManager.loadMore")),
                    ...(i?.truncate === !1 ? null : { truncate: !0 }),
                }));
        };
    })();
    scrollTo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        (this.ref.current?.scrollTo({ to: e, animate: !j.Ay.useReducedMotion && t, callback: n }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced());
    }
    mergeTo(e, t) {
        (this.ref.current?.mergeTo({ to: e, callback: t }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced());
    }
    setScrollToBottom() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { messages: t, channel: n } = this.props;
        if (t.hasMoreAfter)
            (y.A.jumpToPresent(n.id, (0, l3.h)("scrollManager.jumpToPresent")),
                (0, e7.uh)(n.getGuildId() ?? es.ME, n.id));
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                ((this.jumping = !1), this.handleScroll());
            });
    }
    updateStoreDimensionsDebounced = ld().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) ie.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { topPlaceholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: i, offsetHeight: s } = this.getScrollerState();
            ie.A.updateChannelDimensions(t.id, Date.now(), l - n, i - n, s, e);
        }
    }
    scrollIntoViewRect() {}
    scrollPageUp() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.ref.current?.scrollPageUp({ animate: e });
    }
    scrollPageDown() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.ref.current?.scrollPageDown({ animate: e });
    }
    scrollToMessage(e) {
        let { jumpTargetId: t, animate: n = !1, fromTimestamp: l, onJumpComplete: i } = e;
        if (null == this.ref.current) return;
        if (t === this.props.channel.id) return void this.scrollTo(0);
        let s = this.getElementFromMessageId(t);
        (this.isJumping() ||
            !n ||
            null == l ||
            j.Ay.useReducedMotion ||
            (ei.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0));
        let a = () => {
            ((this.jumping = !1),
                (0, l6.vq)(s) && ((s.tabIndex = -1), (0, l9.se)() || s.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                i?.(),
                this._scrollCompleteCallbacks.forEach((e) => e()));
        };
        (0, l6.vq)(s)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      s,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : 16,
                  ),
                  n,
                  a,
              )
            : this.scrollToNewMessages(n, "middle", a);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: l } = t,
            { messages: i, hasUnreads: s, topPlaceholderHeight: a, bottomPlaceholderHeight: r } = this.props;
        if ("top" === e)
            if (!i.hasMoreBefore) return 0;
            else return s ? a - 16 - 2 : a + 500;
        return i.hasMoreAfter ? n - l - r - 500 : n - l;
    }
    getOffsetToPreventLoading(e) {
        let { messages: t } = this.props,
            n = 0;
        return (
            "top" === e && t.hasMoreBefore ? (n = 2) : "bottom" === e && t.hasMoreAfter && (n = -2),
            this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
        );
    }
    getSnapshotBeforeUpdate(e) {
        if (this.hasAnchor() || null != e) {
            let { scrollTop: t, offsetHeight: n, scrollHeight: l } = this.getScrollerState();
            (this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, l), this.updateAutomaticAnchor(t));
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        (this._automaticAnchorCallbacks.push(e),
            (this._automaticAnchorCallbacks = ld().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor()));
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = ld().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        (this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = ld().uniq(this._scrollCompleteCallbacks)));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = ld().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        ((this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, it.Z5)(this.props.channel.id, this.props.windowId));
    }
}
n(667532);
var iu = n(149468),
    ih = n(486227),
    im = n(731738),
    ig = n(192308),
    ip = n(832712),
    iA = n(913379),
    iC = n(662502),
    iE = n(754302),
    ix = n(632738),
    iI = n(544231),
    iS = n(349435),
    iy = n(665909),
    ib = n(62617);
function i_(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e,
        o = r.useMemo(() => (0, ib.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }), [s]);
    return (0, a.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/8bebc44873d2e7c35f88dbb91386484816332e49b46e9379ef31b1fd9d01e85c.svg",
        className: (0, ib.Z)(),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var ij = n(771800);
function iv(e) {
    let { header: t, description: n, onDismiss: l, buttons: i, dismissible: s = !0 } = e,
        o = r.useCallback(() => {
            l?.();
        }, [l]);
    return (0, a.jsxs)("div", {
        className: ij.HZ,
        children: [
            (0, a.jsxs)("div", {
                className: ij.Be,
                children: [
                    (0, a.jsx)(i_, { alt: "", size: 32 }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(ew.D, { variant: "heading-sm/semibold", color: "text-strong", children: t }),
                            (0, a.jsx)(ev.E, { variant: "body-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ij.Uo,
                children: i?.map((e, t) =>
                    (0, a.jsx)(
                        eB.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            s
                ? (0, a.jsx)(ey.D, {
                      className: ij.b,
                      onClick: o,
                      role: "button",
                      "aria-label": eG.intl.string(eG.t.WAI6xu),
                      children: (0, a.jsx)(eH.XSmallIcon, { size: "md", color: "currentColor", className: ij.b }),
                  })
                : null,
        ],
    });
}
function iT(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: l,
        warningType: i,
        header: s,
        description: o,
        onDismiss: c,
        buttons: d,
    } = e;
    r.useEffect(() => {
        iA.A.increment({ name: im.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = r.useCallback(() => {
        (c?.(),
            (0, iy._$)({ channelId: t, warningId: n, senderId: l, warningType: i, cta: iy.Wm.USER_BANNER_DISMISS }));
    }, [c, t, n, l, i]);
    return (0, a.jsx)(iv, { buttons: d, description: o, header: s, onDismiss: u });
}
var iN = n(477427);
function iM(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = [
            { title: eG.intl.string(eG.t.wSZfJR), description: eG.intl.string(eG.t.CRwzW5) },
            { title: eG.intl.string(eG.t.cmMUaB), description: eG.intl.string(eG.t.n6G1ue) },
            { title: eG.intl.string(eG.t["5SPKSy"]), description: eG.intl.string(eG.t.eyjeJQ) },
        ],
        o = r.useCallback(() => {
            (0, iI.xi)(t, [l]);
        }, [t, l]);
    function c(e) {
        (ip.A.updateChannelOverrideSettings({
            guildId: null,
            channelId: t,
            settings: { muted: !0 },
            label: iN.fd.Muted,
        }),
            iC.A.showMuteSuccessToast(i, t),
            (0, iy._$)({ channelId: t, warningId: l, senderId: i, warningType: iS._j.LIKELY_ATO, cta: e }),
            o());
    }
    return (
        r.useEffect(() => {
            ((0, iy.mO)(es.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: iS._j.LIKELY_ATO,
            }),
                iA.A.increment({ name: im.K.SAFETY_WARNING_VIEW }));
        }, [t, l, i]),
        (0, a.jsx)(iT, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: iS._j.LIKELY_ATO,
            header: eG.intl.string(eG.t.R8UsiI),
            description: eG.intl.string(eG.t.lI8nQl),
            onDismiss: o,
            buttons: [
                {
                    text: eG.intl.string(eG.t.tC1pvL),
                    variant: "primary",
                    onClick: function () {
                        ((0, ig.mM)(async () => {
                            let { default: e } = await Promise.all([n.e(532648), n.e(482911), n.e(741029)]).then(
                                n.bind(n, 198916),
                            );
                            return (n) => {
                                let { transitionState: r, onClose: o } = n;
                                return (0, a.jsx)(e, {
                                    transitionState: r,
                                    onClose: o,
                                    channelId: t,
                                    warningId: l,
                                    senderId: i,
                                    description: eG.intl.string(eG.t["/uid3p"]),
                                    safetyTipRows: s.map((e, t) =>
                                        (0, a.jsx)(
                                            iE.B,
                                            {
                                                listType: "numbered",
                                                index: t,
                                                title: e.title,
                                                description: e.description,
                                            },
                                            t,
                                        ),
                                    ),
                                    actionRows: [
                                        (0, a.jsx)(
                                            ix.PQ,
                                            {
                                                title: eG.intl.string(eG.t.ftIK2A),
                                                description: eG.intl.string(eG.t.w2ve0t),
                                                buttonText: eG.intl.string(eG.t.ftIK2A),
                                                onButtonPress: () => {
                                                    (c(iy.Wm.USER_MODAL_MUTE), o());
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, a.jsx)(ey.D, {
                                        onClick: () =>
                                            (0, iy._$)({
                                                channelId: t,
                                                warningId: l,
                                                senderId: i,
                                                warningType: iS._j.LIKELY_ATO,
                                                cta: iy.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, a.jsx)(ew.D, {
                                            variant: "heading-xs/medium",
                                            color: "text-link",
                                            children: eG.intl.format(eG.t.UkH122, {
                                                learnMoreLink:
                                                    "https://discord.com/safety/understanding-and-avoiding-common-scams",
                                            }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, iy._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iS._j.LIKELY_ATO,
                                cta: iy.Wm.OPEN_MORE_TIPS,
                            }));
                    },
                },
                { text: eG.intl.string(eG.t.ftIK2A), onClick: () => c(iy.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var iR = n(905394),
    iD = n(866660);
function ik(e) {
    let { channel: t, scrollManager: n, flashKey: l } = e,
        i = r.useRef(null),
        { refocusSelectedConversation: s } = K(),
        o = (0, u.bG)([w.A], () => w.A.getConversation(t.id)),
        { isShifted: c } = (function (e) {
            let { bannerRef: t, scrollManager: n } = e,
                { bannerMeasurementRef: l } = K(),
                [i, s] = r.useState(!1),
                a = r.useRef(!1);
            return (
                r.useEffect(() => {
                    if (null == t.current) return;
                    let e = n.ref.current?.getScrollerNode();
                    if (null != e)
                        return (
                            e.addEventListener("scroll", i, { passive: !0 }),
                            () => {
                                (e.removeEventListener("scroll", i), (l.current = null), (a.current = !1), s(!1));
                            }
                        );
                    function i() {
                        if (null == e || null == t.current) return;
                        let n = t.current.getBoundingClientRect().top - e.getBoundingClientRect().top;
                        l.current = n;
                        let i = e.clientHeight / 2,
                            r = n < i + 50 && n + 40 > i - 50;
                        r !== a.current && ((a.current = r), s(r));
                    }
                }, [l, t, n]),
                { isShifted: i }
            );
        })({ bannerRef: i, scrollManager: n }),
        d = r.useRef(o?.id ?? null);
    if (
        (r.useEffect(() => {
            let e = d.current;
            if (null != e)
                return () => {
                    (0, G.P7)(t.id, e);
                };
        }, [t.id]),
        null == o)
    )
        return null;
    let h = (0, a.jsx)("div", {
        ref: i,
        className: iD.A,
        children: (0, a.jsx)(eq, {
            channel: t,
            conversation: o,
            actionsShifted: c,
            onFocusToggle: s,
            suppressBorder: !0,
        }),
    });
    return null != l ? (0, a.jsx)(ti, { flashKey: l, className: iD.j, children: h }) : h;
}
var iL = n(495273),
    iP = n(885071),
    iO = n(176781),
    iG = n(314307),
    iU = n(463930),
    iw = n(442433),
    iF = n(793574),
    iH = n(688810),
    iB = n(967144),
    iK = n(342296),
    iV = n(209516);
function iz(e) {
    let { userId: t, channel: l, noUserFallback: i = null } = e,
        s = r.useRef(null),
        { analyticsLocations: o } = (0, iH.Ay)(iF.A.USERNAME),
        c = (0, u.bG)([l0.default], () => l0.default.getUser(t)),
        d = (0, u.bG)([n6.Ay], () => (null != t ? n6.Ay.getMember(l.guild_id, t) : null)),
        h = (0, iB.gn)(l.guild_id, t ?? void 0, d?.colorStrings ?? null);
    function m(e) {
        if (null == c) return null;
        (0, iw.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e(926132),
                n.e(893190),
                n.e(146652),
                n.e(576432),
                n.e(451162),
                n.e(229787),
                n.e(576665),
                n.e(624198),
                n.e(715038),
                n.e(144472),
                n.e(823427),
                n.e(242204),
                n.e(343116),
                n.e(70515),
                n.e(666939),
                n.e(278544),
            ]).then(n.bind(n, 202643));
            return (t) => (0, a.jsx)(e, { ...t, user: c, guildId: l.guild_id, channel: l });
        });
    }
    let g = d?.nick ?? n9.Ay.getName(c) ?? "???",
        p = d?.colorString;
    return null == c
        ? i
        : (0, a.jsx)(iH.f5, {
              value: o,
              children: (0, a.jsx)(iK.A, {
                  targetElementRef: s,
                  user: c,
                  guildId: l.guild_id,
                  channelId: l.id,
                  roleId: d?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, a.jsx)(ey.D, {
                          ...e,
                          innerRef: s,
                          tag: "span",
                          onContextMenu: m,
                          children: (0, a.jsx)(ev.E, {
                              className: iV.e,
                              tag: "span",
                              variant: "body-md/semibold",
                              color: "text-strong",
                              children: (0, a.jsx)(iU.g, { name: g, colorString: p ?? null, colorStrings: h }),
                          }),
                      }),
              }),
          });
}
var iW = n(683825),
    i$ = n(91172);
function iq(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t);
    return (0, a.jsxs)(iG.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", {
                className: i$.P,
                children: (0, a.jsx)(iO.ClipsIcon, { size: "lg", color: Z.A.colors.ICON_SUBTLE }),
            }),
            (0, a.jsx)(iG.cr, { children: n }),
            null != t.ownerId &&
                (0, a.jsx)(ev.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: eG.intl.format(iW.default["UocED+"], {
                        usernameHook: (e, n) =>
                            (0, a.jsx)(iz, { userId: t.ownerId, channel: t, noUserFallback: null }, n),
                    }),
                }),
        ],
    });
}
var iZ = n(433380),
    iJ = n(95701),
    iX = n(808728),
    iY = n(534890),
    iQ = n(713654),
    i0 = n(691060),
    i1 = n(376310),
    i2 = n(959717);
function i3(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: l } = e,
        i =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, a.jsx)("div", {
        className: c()(i2._, { [i2.L]: l }),
        children: Array.from(t).map((e) =>
            (0, a.jsx)(i1.Ay, { tag: e, onRemove: i, size: null == i ? i1.Ay.Sizes.SMALL : i1.Ay.Sizes.MEDIUM }, e.id),
        ),
    });
}
var i4 = n(151582);
function i7(e) {
    let { channel: t } = e,
        n = (0, i0.kt)(t),
        { firstMessage: l } = (0, u.cf)([tQ.A], () => tQ.A.getMessage(t.id)),
        i = new Set((0, i0.zt)(t, n)),
        s = (0, iQ.gU)(t) ?? iY.ChatIcon,
        r = (0, P.Ay)(t);
    return (0, a.jsxs)(iG.Ay, {
        channelId: t.id,
        className: i4.kL,
        children: [
            (0, a.jsx)("div", { className: i4.P0, children: (0, a.jsx)(s, { className: i4.Kk, strokeWidth: 1.75 }) }),
            (0, a.jsx)(iG.cr, { className: i4.wx, children: r }),
            null == l &&
                (0, a.jsx)(ev.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: eG.intl.string(eG.t.mE3KJN),
                }),
            (0, a.jsx)(i3, { appliedTags: i, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var i5 = n(289873),
    i8 = n(682163),
    i6 = n(513461),
    i9 = n(654265),
    se = n(561446),
    st = n(881817);
function sn(e) {
    let { joinRequest: t, guild: n } = e,
        l = (0, u.bG)([l0.default], () => l0.default.getUser(t.userId));
    return (0, a.jsxs)("div", {
        className: st.I8,
        children: [
            (0, a.jsxs)("div", {
                className: st.Ov,
                children: [
                    null != n &&
                        (0, a.jsxs)("div", {
                            className: st.yB,
                            children: [
                                (0, a.jsx)(i8.Ay, { guild: n, active: !0, size: i8.Ay.Sizes.SMOL, className: st.$f }),
                                (0, a.jsx)(ew.D, {
                                    variant: "heading-xs/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != l &&
                        (0, a.jsx)(ew.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: eG.intl.format(eG.t.jDV3i6, { username: l.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== i6.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === i6.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("hr", { className: st.g2 }),
                            (0, a.jsxs)("div", {
                                className: st.fs,
                                children: [
                                    (0, a.jsx)(ev.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, a.jsx)(ev.E, { variant: "body-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function sl(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: i } = (0, i9.A)(t.id);
    return (0, a.jsx)(iG.Ay, {
        channelId: t.id,
        className: st.kL,
        children:
            null != l && null != l.formResponses
                ? (0, a.jsxs)("div", {
                      className: st.KJ,
                      children: [
                          (0, a.jsx)("div", { children: (0, a.jsx)(sn, { guild: i, joinRequest: l }) }),
                          (0, a.jsx)(se.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, a.jsx)(i5.y, {})
                  : null,
    });
}
var si = n(825484),
    ss = n(241541),
    sa = n(571694),
    sr = n(922301),
    so = n(16371),
    sc = n(598104),
    sd = n(396787),
    su = n(117534);
function sh(e) {
    let { channel: t, children: n, className: l, editable: i, location: s } = e;
    return i
        ? (0, a.jsx)(eS.m, {
              position: "bottom",
              text: eG.intl.string(eG.t["0qPSMV"]),
              children: (0, a.jsxs)(ey.D, {
                  className: c()(su.e, l),
                  onClick: () => (0, sd.jv)(t.id, s),
                  children: [
                      n,
                      (0, a.jsx)("div", {
                          className: su.Z,
                          children: (0, a.jsx)(tB.PencilIcon, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, a.jsx)("div", { className: l, children: n });
}
var sm = n(73028),
    sg = n(753190),
    sp = n(151440);
function sA(e) {
    let t,
        { channel: n, children: l, user: i } = e,
        s = (0, u.bG)([j.Ay], () => j.Ay.useReducedMotion),
        o = (0, P.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: h,
        } = (0, lD.A)({ userId: i?.id, size: lM._3.SIZE_80, animateOnHover: !0 }),
        [m, g] = r.useState(!1),
        p = r.useCallback(() => {
            (d.onMouseEnter(), g(!0));
        }, [d]),
        A = r.useCallback(() => {
            (d.onMouseLeave(), g(!1));
        }, [d]),
        f = !n.isMultiUserDM() && i?.displayNameStyles != null;
    return (0, a.jsxs)(iG.Ay, {
        channelId: n.id,
        onMouseEnter: p,
        onMouseLeave: A,
        children: [
            ((t = !s && h),
            n.isMultiUserDM()
                ? (0, a.jsx)(sh, {
                      channel: n,
                      editable: !0,
                      location: iF.A.EMPTY_GROUP_DM,
                      children: (0, a.jsx)(sc.A, { channel: n, size: lM._3.SIZE_80, animated: t, "aria-label": o }),
                  })
                : (0, a.jsx)(lR.eu, {
                      "aria-label": o,
                      size: lM._3.SIZE_80,
                      src: (0, sa.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, a.jsx)(iG.cr, {
                children: f
                    ? (0, a.jsx)(so.A, {
                          userName: o,
                          displayNameStyles: i?.displayNameStyles,
                          effectDisplayType: m ? sr.G.ANIMATED : sr.G.STATIC,
                          loop: !0,
                      })
                    : o,
            }),
            (0, a.jsx)(iG.j1, { children: l }),
            n.isMultiUserDM() &&
                (0, a.jsxs)(si.e, {
                    className: sp.U,
                    children: [
                        (0, a.jsx)(sg.NE, { channel: n, text: eG.intl.string(eG.t.NB5DFD), icon: ss.GroupPlusIcon }),
                        (0, a.jsx)(eB.$, {
                            icon: tB.PencilIcon,
                            variant: "secondary",
                            text: eG.intl.string(eG.t["5Q9+/L"]),
                            "aria-label": eG.intl.string(eG.t["5Q9+/L"]),
                            onClick: () => (0, sm.U)(n.id, iF.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var sf = n(136722),
    sC = n(342952),
    sE = n(177953),
    sx = n(725570),
    sI = n(435183),
    sS = n(155718),
    sy = n(685374),
    sb = n(63104),
    s_ = n(597367);
function sj(e) {
    let t,
        { className: n, children: l, verified: i, roleColor: s, roleName: r } = e;
    return (
        (t = i
            ? (0, a.jsx)(sb.A, { size: 12, color: s, className: s_.TS })
            : (0, a.jsx)("div", { className: s_.yY, style: { backgroundColor: s } })),
        (0, a.jsxs)("div", { className: c()(n, s_.JC), style: { "--custom-role-label-color": s }, children: [t, r, l] })
    );
}
var sv = n(727419),
    sT = n(46054),
    sN = n(34457),
    sM = n(317525),
    sR = n(488926),
    sD = n(869685);
function sk(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: i = !1,
        onClick: s,
        disabled: r = !1,
        verified: o = !1,
    } = e;
    return (0, a.jsx)(ey.D, {
        className: c()(t, sD.x6, { [sD.r9]: r }),
        onClick: r ? void 0 : s,
        "aria-disabled": r,
        role: "button",
        children: (0, a.jsx)(sj, {
            className: sD.JC,
            roleColor: n,
            roleName: l,
            verified: o,
            children:
                i &&
                (0, a.jsx)(eH.XSmallIcon, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: sD.Tj,
                    colorClass: sD.eG,
                }),
        }),
    });
}
var sL = n(314040),
    sP = n(165648);
function sO(e) {
    let { channel: t } = e,
        [n, l] = r.useState(!1),
        i = (0, P.Ay)(t, !0),
        s = t.guild_id,
        o = (0, u.bG)([sM.A], () => (null != s ? sM.A.getSortedRoles(s) : void 0)),
        d = (0, u.bG)([l0.default, t6.A], () => l0.default.getUser(t6.A.getGuild(s)?.ownerId)),
        h = r.useMemo(() => (null != o ? o.filter((e) => !(0, sN.Oy)(e)) : []), [o]),
        m = r.useMemo(
            () =>
                ld()(h)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = sR.aH({ forceRoles: { [e.id]: e }, context: t });
                        return sf.X8(n, sf.kg(es.xBc.ADMINISTRATOR, es.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, h],
        ),
        g = (0, u.yK)(
            [l0.default],
            () => {
                let e = {};
                for (let n of (null != d && (e[d.id] = d), Object.values(t.permissionOverwrites))) {
                    if (n.type !== sS.r2.MEMBER || null != e[n.id]) continue;
                    let t = l0.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return ld()(e)
                    .filter((e) => {
                        let n = sR.$3({ permission: es.xBc.ADMINISTRATOR, user: e, context: t }),
                            l = t.permissionOverwrites[e.id] ?? sR.x3,
                            i = sf.zy(l.allow, es.xBc.VIEW_CHANNEL);
                        return n || i;
                    })
                    .value();
            },
            [t, d],
        ),
        p = tE.A.can(es.xBc.MANAGE_CHANNELS, t) || tE.A.can(es.xBc.MANAGE_ROLES, t),
        A = (0, u.bG)([t6.A, tE.A], () => {
            let e = t6.A.getGuild(s);
            return null != e && tE.A.canAccessGuildSettings(e) && tE.A.canAccessMemberSafetyPage(e);
        }),
        f = r.useCallback(() => l(!1), []);
    return (0, a.jsxs)(iG.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(iG.WK, { locked: !0, channelType: t.type }),
            (0, a.jsx)(iG.cr, { children: eG.intl.format(eG.t.I3R7Vn, { channelName: i }) }),
            (0, a.jsx)(iG.j1, {
                className: sP.PT,
                children: eG.intl.format(eG.t.QuwqjG, {
                    channelName: i,
                    topicHook: () => sT.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            p
                ? (0, a.jsxs)("div", {
                      className: sL.$x,
                      children: [
                          (0, a.jsx)(eB.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eG.intl.string(eG.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: sE.GroupIcon,
                          }),
                          (0, a.jsx)(eB.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eG.intl.string(eG.t["3gUsJb"]),
                              onClick: function () {
                                  sI.Ay.open(t.id);
                              },
                              icon: tB.PencilIcon,
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("div", {
                className: sL.ol,
                children: [
                    (function () {
                        if (1 !== g.length || m.length > 0)
                            return (0, a.jsx)(sC.A, { guildId: t.guild_id, className: sL.HD, maxUsers: 5, users: g });
                        let e = g[0],
                            n = n9.Ay.getName(e);
                        return (0, a.jsxs)("div", {
                            className: sL.HD,
                            children: [
                                (0, a.jsx)(lR.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: lM._3.SIZE_24,
                                }),
                                (0, a.jsx)(ev.E, {
                                    tag: "span",
                                    className: sL.Jk,
                                    variant: "body-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, a.jsx)(ev.E, {
                                    tag: "span",
                                    variant: "body-md/normal",
                                    color: "text-muted",
                                    children: eG.intl.string(eG.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    m.map((e, n) => {
                        let l = e.colorString ?? es.TpD,
                            i = e.tags?.guild_connections !== void 0;
                        return A
                            ? (0, a.jsx)(
                                  sk,
                                  {
                                      className: c()(sL.JC, { [sL.HV]: n === m.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      verified: i,
                                      onClick: () => {
                                          (sv.A.open(t.guild_id, es.BEX.MEMBERS), sv.A.selectRole(e.id));
                                      },
                                  },
                                  e.id,
                              )
                            : (0, a.jsx)(
                                  sj,
                                  {
                                      className: c()(sL.JC, { [sL.HV]: n === m.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      verified: i,
                                  },
                                  e.id,
                              );
                    }),
                ],
            }),
            n
                ? (0, a.jsx)(sx.aF, {
                      renderModal: (e) =>
                          (0, a.jsx)(sy.default, { ...e, onClose: () => (f(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
var sG = n(270171);
function sU(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t, !0),
        l = (0, u.bG)([tE.A], () => tE.A.can(es.xBc.MANAGE_CHANNELS, t) && iJ.bk.has(t.type));
    return (0, a.jsxs)(iG.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(iG.WK, { channelType: t.type }),
            (0, a.jsx)(iG.cr, { children: eG.intl.format(eG.t.I3R7Vn, { channelName: n }) }),
            (0, a.jsx)(iG.j1, {
                className: sP.PT,
                children: eG.intl.format(eG.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => sT.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            l
                ? (0, a.jsx)("div", {
                      className: sG.U,
                      children: (0, a.jsx)(eB.$, {
                          size: "sm",
                          variant: "secondary",
                          text: eG.intl.string(eG.t["3gUsJb"]),
                          onClick: () => {
                              sI.Ay.open(t.id);
                          },
                          icon: tB.PencilIcon,
                      }),
                  })
                : null,
        ],
    });
}
var sw = n(909833);
function sF(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, a.jsx)("div", { style: { marginTop: -8 } })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(ev.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      children: (0, a.jsx)("div", {
                          className: sw.VA,
                          children: eG.intl.format(eG.t.imPXd5, {
                              usernameHook: (e, n) =>
                                  (0, a.jsx)(
                                      iz,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                          noUserFallback: (0, a.jsx)("span", {
                                              className: c()(sw.eM, sw.sL),
                                              children: "???",
                                          }),
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === es.rbe.PRIVATE_THREAD
                      ? (0, a.jsx)(ev.E, {
                            variant: "body-md/normal",
                            color: "text-default",
                            children: eG.intl.string(eG.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function sH(e) {
    let { channel: t } = e,
        n = (0, iQ.gU)(t) ?? tF.ThreadIcon,
        l = (0, P.Ay)(t);
    return (0, a.jsxs)(iG.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", { className: sw.P0, children: (0, a.jsx)(n, { className: sw.Kk }) }),
            (0, a.jsx)(iG.cr, { children: l }),
            (0, a.jsx)(sF, { channel: t }),
        ],
    });
}
var sB = n(302125),
    sK = n(321404),
    sV = n(957283),
    sz = n(436726);
function sW() {
    return (0, a.jsx)("div", {
        className: sz.k,
        children: (0, a.jsx)(ev.E, {
            variant: "body-md/normal",
            color: "text-muted",
            className: sz.Q,
            children: eG.intl.string(eG.t.eeJvfA),
        }),
    });
}
var s$ = n(959698),
    sq = n(189213),
    sZ = n(933958),
    sJ = n(988534),
    sX = n(851767);
function sY(e) {
    return (0, u.bG)([sX.A], () => (null !== e ? sX.A.getUserProfile(e ?? "")?.application : void 0)) ?? void 0;
}
var sQ = n(260498),
    s0 = n(5960),
    s1 = n(32639),
    s2 = n(712440),
    s3 = n(733110),
    s4 = n(543465),
    s7 = n(308528),
    s5 = n(928658),
    s8 = n(978914),
    s6 = n(977347);
function s9(e) {
    let { channel: t, user: n } = e,
        l = !0 === n.bot,
        {
            message: i,
            isReportable: s,
            isLoaded: o,
        } = (function (e, t, n) {
            let l,
                i =
                    (l = (0, u.bG)([nM.A], () => nM.A.getRelationshipType(t), [t])) === es.eA$.NONE ||
                    l === es.eA$.BLOCKED ||
                    l === es.eA$.PENDING_INCOMING,
                s = sY(n ? t : null),
                a = !0 === (0, s0.A)(n ? (s?.id ?? t) : null, n),
                r = n ? !a : i,
                o = (0, s6.D)(e.id, t),
                { message: c, loaded: d, error: h } = (0, s8.I)(e, { enabled: r }),
                m = o ?? (c?.author?.id === t ? c : null);
            return { message: m, isReportable: r, isLoaded: null != m || d || h };
        })(t, n.id, l),
        { channelId: c } = (0, sV.N)(),
        d = t.id === c,
        h = !ns.Fr && !d,
        m = r.useCallback(() => {
            null != i &&
                (0, s5.b8)(i, () => {
                    s7.A.closePrivateChannel(t.id, h);
                });
        }, [t.id, i, h]);
    return !s || (null == i && o)
        ? null
        : (0, a.jsx)(eB.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == i,
              onClick: m,
              text: eG.intl.string(eG.t.HHZmDn),
          });
}
var ae = n(191850);
function at(e) {
    let { channel: t } = e,
        l = (0, u.bG)([s4.Ay], () => s4.Ay.isChannelMuted(null, t.id));
    return (0, a.jsx)(eB.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? eG.intl.string(eG.t.YqAjXy) : eG.intl.string(eG.t.w4m945),
        onClick: function () {
            (0, ig.mM)(async () => {
                let { default: e } = await n.e(499312).then(n.bind(n, 259763));
                return (n) => (0, a.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function an(e) {
    let { application: t, project: n } = e;
    return (0, a.jsx)(eB.$, {
        variant: "secondary",
        text: eG.intl.string(ae.default.jMMrDM),
        onClick: () => (0, s1.A)(n, t.id),
    });
}
function al(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        i = (0, u.bG)([sZ.Ay], () => sZ.Ay.getSelfEmbeddedActivities());
    function s() {
        s2.A.delete(l.id);
        let e = i.get(n.id);
        null != e && (0, sJ.d)({ location: e.location, applicationId: n.id });
    }
    return (0, a.jsx)(eB.$, {
        variant: "secondary",
        text: eG.intl.string(eG.t.xUqheM),
        onClick: () => {
            ((0, ig.qf)((e) =>
                (0, a.jsx)(sq.a, {
                    title: eG.intl.string(eG.t["DT39A+"]),
                    subtitle: eG.intl.formatToPlainString(eG.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: eG.intl.string(eG.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: eG.intl.string(eG.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                (s(), e.onClose());
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                t9.default.track(es.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                }));
        },
    });
}
function ai(e) {
    var t, n;
    let l,
        i,
        { channel: s, user: o } = e,
        c = sY(o?.id ?? ""),
        { authorizedAppToken: d, authorizedAppsFetchState: h } = (0, u.cf)([s3.A], () => ({
            authorizedAppToken: s3.A.getNewestTokenForApplication(c?.id),
            authorizedAppsFetchState: s3.A.getFetchState(),
        })),
        { isOwned: m, project: g } =
            ((t = c?.id),
            (n = o.bot),
            (l = (0, s0.A)(t, n)),
            (i = (0, u.bG)([sQ.Ay], () => (!0 === l && null != t ? sQ.Ay.findProjectByApplicationId(t) : null), [
                l,
                t,
            ])),
            { isOwned: l, project: i });
    return (r.useEffect(() => {
        o.bot && h === s3.FetchState.NOT_FETCHED && s2.A.fetch();
    }, [o.bot, h]),
    o.bot && null != c && (null != d || null != g))
        ? (0, a.jsxs)(si.e, {
              size: "sm",
              children: [
                  (0, a.jsx)(at, { channel: s }),
                  null != g
                      ? (0, a.jsx)(an, { application: c, project: g })
                      : null != d && !1 === m
                        ? (0, a.jsx)(al, { application: c, channel: s, oauth2Token: d })
                        : null,
                  (0, a.jsx)(s9, { channel: s, user: o }),
              ],
          })
        : (0, a.jsx)(si.e, { size: "sm", children: (0, a.jsx)(s9, { channel: s, user: o }) });
}
var as = n(692617),
    aa = n(917445),
    ar = n(100663),
    ao = n(518477),
    ac = n(976926);
function ad(e) {
    let { userId: t, channelId: n, showDivider: l = !1, compact: i = !1 } = e,
        s = (0, u.bG)([sX.A], () => sX.A.getMutualGuilds(t), [t]),
        o = l0.default.getUser(t);
    r.useEffect(() => {
        null == s && null != o && (0, aa.A)(t, o.getAvatarURL(null, 80), { withMutualGuilds: !0 });
    }, [s, t, o]);
    let d = r.useMemo(
        () =>
            (s ?? []).map((e) => {
                let { guild: t } = e;
                return t;
            }),
        [s],
    );
    return null == s || 0 === s.length
        ? (0, a.jsx)("div", {
              className: c()(ac.kL, l ? ac.yF : null),
              children: (0, a.jsx)(ev.E, {
                  color: "text-default",
                  variant: "body-sm/normal",
                  children: eG.intl.string(eG.t.zjVh8h),
              }),
          })
        : (0, a.jsxs)(ey.D, {
              className: c()(ac.kL, ac.vk, { [ac.yF]: l }),
              onClick: function () {
                  (0, ar.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: ao.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [iF.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, a.jsx)(as.A, {
                      guilds: d,
                      maxGuilds: 3,
                      size: i ? i8.Ay.Sizes.SMOL : i8.Ay.Sizes.SMALLER,
                      hideOverflowCount: !0,
                  }),
                  (0, a.jsx)(ev.E, {
                      className: ac.NI,
                      variant: "body-sm/normal",
                      children: eG.intl.format(eG.t.eE3oep, { count: s.length }),
                  }),
              ],
          });
}
var au = n(49229),
    ah = n(327166),
    am = n(390848),
    ag = n(156328);
function ap(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eB.$, {
        size: "sm",
        variant: "secondary",
        onClick: async function () {
            (await au.A.blockUser(t, { location: es.liQ.DM_CHANNEL }), iC.A.showBlockSuccessToast(t));
        },
        text: eG.intl.string(eG.t.l4Emac),
    });
}
function aA(e) {
    let { userId: t, showingBanner: n, variant: l = "primary", label: i } = e,
        s = (0, ah.D)(t, i),
        r = (0, u.bG)([nM.A], () => nM.A.getRelationshipType(t), [t]),
        o = (0, u.bG)([nM.A], () => nM.A.getOriginApplicationId(t), [t]),
        { acceptFriendRequest: c } = (0, am.I)({
            userId: t,
            applicationId: o,
            isGameRelationship: !1,
            location: es.liQ.DM_CHANNEL,
        });
    return n
        ? null
        : (0, a.jsx)(eB.$, {
              variant: l,
              onClick: function () {
                  r === es.eA$.PENDING_INCOMING
                      ? c()
                      : au.A.addRelationship({ userId: t, context: { location: es.liQ.DM_CHANNEL } });
              },
              text: s,
          });
}
function af(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eB.$, {
        variant: "secondary",
        onClick: function () {
            au.A.removeFriend(t, { location: es.liQ.DM_CHANNEL });
        },
        text: eG.intl.string(eG.t.cvSt1J),
    });
}
function aC(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eB.$, {
        variant: "secondary",
        onClick: function () {
            au.A.unblockUser(t, { location: es.liQ.DM_CHANNEL });
        },
        text: eG.intl.string(eG.t.XyHpKH),
    });
}
function aE(e) {
    let { channel: t, user: n, showingBanner: l } = e,
        i = (0, u.bG)([nM.A], () => nM.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, am.I)({
            userId: n.id,
            applicationId: i,
            isGameRelationship: !1,
            location: es.liQ.DM_CHANNEL,
        });
    return (0, a.jsxs)("div", {
        className: ag.K,
        children: [
            (0, a.jsx)(ev.E, {
                color: "text-default",
                variant: "body-sm/normal",
                children: eG.intl.format(eG.t.uIomXw, { username: n9.Ay.getName(n) }),
            }),
            (0, a.jsxs)(si.e, {
                size: "sm",
                children: [
                    (0, a.jsx)(eB.$, { variant: "primary", onClick: s, text: eG.intl.string(eG.t["+WbSn5"]) }),
                    (0, a.jsx)(eB.$, {
                        variant: "secondary",
                        onClick: function () {
                            au.A.cancelFriendRequest(n.id, { location: es.liQ.DM_CHANNEL });
                        },
                        text: eG.intl.string(eG.t.rQSndv),
                    }),
                    (0, a.jsx)(ap, { userId: n.id }),
                    l ? null : (0, a.jsx)(s9, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function ax(e) {
    let t,
        {
            channel: n,
            user: l,
            showingBanner: i,
            addFriendVariant: s = "primary",
            addFriendLabel: r,
            compactPendingIncoming: o = !1,
        } = e,
        c = (0, u.bG)([nM.A], () => nM.A.getRelationshipType(l.id), [l.id]);
    if (c === es.eA$.PENDING_INCOMING && !o) return (0, a.jsx)(aE, { channel: n, user: l, showingBanner: i });
    switch (c) {
        case es.eA$.NONE:
        case es.eA$.PENDING_INCOMING:
            l.bot || (t = (0, a.jsx)(aA, { userId: l.id, showingBanner: i, variant: s, label: r }));
            break;
        case es.eA$.FRIEND:
            t = (0, a.jsx)(af, { userId: l.id });
            break;
        case es.eA$.BLOCKED:
            t = (0, a.jsx)(aC, { userId: l.id });
            break;
        case es.eA$.PENDING_OUTGOING:
            t = (0, a.jsx)(eB.$, { variant: "primary", disabled: !0, text: eG.intl.string(eG.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let d = c !== es.eA$.BLOCKED;
    return (0, a.jsxs)(si.e, {
        size: "sm",
        children: [t, d ? (0, a.jsx)(ap, { userId: l.id }) : null, i ? null : (0, a.jsx)(s9, { channel: n, user: l })],
    });
}
var aI = n(190857),
    aS = n(138298),
    ay = n(799704);
function ab(e) {
    let { channel: t, user: n } = e,
        l = r.useCallback(() => {
            (0, eN.P0)({ text: eG.intl.string(eG.t.a2j0hv), variant: "critical" });
        }, []),
        i = r.useCallback(() => {
            aS.A.closeChannelSidebar(ay.fe);
        }, []),
        s = r.useCallback(() => {
            aS.A.closeChannelSidebar(ay.fe);
        }, []),
        {
            acceptMessageRequest: o,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, aI.t)({ user: l0.default.getUser(n.id), onError: l, onAcceptSuccess: s, onRejectSuccess: i }),
        g = d || u || h || m;
    return (0, a.jsxs)(si.e, {
        size: "sm",
        children: [
            (0, a.jsx)(eB.$, {
                variant: "primary",
                disabled: g,
                onClick: () => o(t.id),
                loading: d,
                text: eG.intl.string(eG.t.Kz8Pwr),
            }),
            (0, a.jsx)(eB.$, {
                variant: "secondary",
                disabled: g,
                onClick: () => c(t.id),
                loading: u,
                text: eG.intl.string(eG.t.B2nygW),
            }),
            (0, a.jsx)(s9, { channel: t, user: n }),
        ],
    });
}
var a_ = n(693833);
function aj(e) {
    var t;
    let n,
        { channel: l, user: i, showingBanner: s } = e,
        { channelId: r } = (0, sV.N)(),
        o = (0, u.bG)([nM.A], () => nM.A.getRelationshipType(i.id), [i.id]),
        c = l.id === r,
        d = (0, sK.c)(l.id),
        h =
            ((t = l.id),
            (0, u.bG)(
                [eC.A],
                () => {
                    var e;
                    return (e = eC.A.getMessages(t)).ready && 0 === e.length && !e.hasMoreBefore && !e.hasMoreAfter;
                },
                [t],
            )),
        m = !0 === i.bot,
        g = i.isNonUserBot(),
        p = (0, s$.U)(),
        A = a_.n;
    return (
        g
            ? (n = null)
            : p
              ? ((n = (0, a.jsx)(ax, {
                    channel: l,
                    user: i,
                    showingBanner: s,
                    addFriendVariant: "active",
                    addFriendLabel: eG.intl.string(eG.t["PMsq/b"]),
                    compactPendingIncoming: !0,
                })),
                (A = a_.O))
              : c && d
                ? (n = (0, a.jsx)(ab, { channel: l, user: i }))
                : m
                  ? (n = (0, a.jsx)(ai, { channel: l, user: i }))
                  : ((n = (0, a.jsx)(ax, { channel: l, user: i, showingBanner: s })),
                    o === es.eA$.PENDING_INCOMING && (A = a_.O)),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: A,
                    children: [
                        (0, a.jsx)(ad, { userId: i.id, channelId: l.id, showDivider: A !== a_.O, compact: p }),
                        n,
                    ],
                }),
                d && h ? (0, a.jsx)(sW, {}) : null,
            ],
        })
    );
}
var av = n(746080),
    aT = n(221851);
function aN(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, iL.Ae)(n),
        i = (0, u.bG)([iX.A], () => null != n.guild_id && n === iX.A.getDefaultChannel(n.guild_id), [n]);
    if ((0, iP.A)(n.id)) return null;
    if (n.isForumPost()) return (0, a.jsx)(i7, { channel: n });
    if (n.isMediaThread()) return (0, a.jsx)(iq, { channel: n });
    if (iJ.Le.has(n.type)) return (0, a.jsx)(sH, { channel: n });
    if (i) return (0, a.jsx)(sB.A, { channel: n });
    else if (l) return (0, a.jsx)(sO, { channel: n });
    return (0, a.jsx)(sU, { channel: n });
}
function aM(e) {
    let { channel: t, showingBanner: n } = e,
        l = (0, P.Ay)(t),
        { type: i } = t,
        s = (0, u.bG)([l0.default], () => (t.isPrivate() ? l0.default.getUser(t.getRecipientId()) : null)),
        r = n9.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, u.cf)([tE.A], () => ({
            canManageRoles: tE.A.can(es.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: tE.A.can(es.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, a.jsx)(sA, { channel: t, children: eG.intl.string(eG.t.Rzvnig) });
    if (i === es.rbe.DM)
        return (0, a.jsxs)(sA, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, a.jsx)(ew.D, { variant: "heading-xl/medium", className: aT.SX, children: r }),
                eG.intl.format(eG.t["Qvg+6+"], { username: l }),
                s?.isProvisional ? (0, a.jsx)(iZ.Y, { userId: s.id }) : null,
                null != s ? (0, a.jsx)(aj, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, a.jsxs)(iG.Ay, {
                channelId: t.id,
                children: [
                    (0, a.jsx)(iG.cr, { children: eG.intl.format(eG.t.I3R7Vn, { channelName: l }) }),
                    (0, a.jsx)(iG.j1, { children: eG.intl.string(eG.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(av.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, a.jsx)(sl, { channel: t });
        else return (0, a.jsx)(sA, { channel: t, children: eG.intl.format(eG.t.MFwcqO, { name: l }) });
    return c
        ? (0, a.jsx)(aN, { channel: t, canManageRoles: o })
        : (0, a.jsx)(iG.Ay, {
              channelId: t.id,
              children: (0, a.jsx)(iG.j1, { children: eG.intl.format(eG.t.hPVEQG, { channelName: l }) }),
          });
}
var aR = n(506774),
    aD = n(933832),
    ak = n(782603),
    aL = n(408278),
    aP = n(763175),
    aO = n(56562),
    aG = n(765671),
    aU = n(304072),
    aw = n(265072),
    aF = n(164636),
    aH = n(696986),
    aB = n(147036),
    aK = n(975571),
    aV = n(36491),
    az = n(953727);
function aW(e) {
    let { width: t = 45, height: n = 46, ...l } = e;
    return (0, a.jsxs)("svg", {
        ...(0, az.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 49 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, a.jsx)("path", {
                d: "M29.424 22.375L30.9908 17.9974C31.6183 16.242 32.8917 14.792 34.5514 13.943L46.105 8.03515C47.7328 7.19988 49.3851 9.15697 48.2694 10.6141C47.1536 12.0713 45.1905 13.7662 42.0689 15.0465L45.5563 15.0222C46.9464 15.01 47.4829 16.8268 46.3123 17.5767C44.3247 18.8632 41.3372 19.924 37.4962 18.8144L38.9229 20.1557C39.6728 20.863 39.1119 22.1128 38.0815 22.0397C36.6183 21.9238 34.8746 21.4909 33.6857 20.2106C33.6857 20.2106 32.8992 22.375 30.8201 23.5639C30.0397 24.0089 29.1252 23.2224 29.424 22.375Z",
                fill: "white",
            }),
            (0, a.jsx)("path", {
                d: "M19.5767 46.8513C20.112 45.2515 18.84 43.3838 16.7357 42.6798C14.6314 41.9757 12.4916 42.7018 11.9563 44.3016C11.421 45.9014 12.6929 47.769 14.7973 48.4731C16.9016 49.1772 19.0414 48.4511 19.5767 46.8513Z",
                fill: "#66B9FF",
            }),
            (0, a.jsx)("path", {
                d: "M25.2658 39.551C25.0403 40.2339 24.4915 40.7521 23.7172 41.0996C23.9001 41.6423 23.9184 42.1788 23.7477 42.6848C23.577 43.1909 23.1685 43.6847 22.6198 44.0261C22.7379 44.4329 22.7336 44.8655 22.6076 45.2699C21.9918 47.0929 18.791 47.666 15.456 46.5441C12.121 45.4223 9.90783 43.0384 10.5175 41.2155C10.6648 40.8046 10.9325 40.4476 11.2857 40.1912C11.0662 39.6059 11.0236 39.0206 11.2065 38.478C11.3894 37.9354 11.7186 37.5574 12.1881 37.2342C11.7796 36.4904 11.6576 35.7405 11.8832 35.0637C12.56 33.0457 16.1083 32.4116 19.803 33.6493C23.4978 34.8869 25.9426 37.533 25.2658 39.551Z",
                fill: "#89D6FF",
            }),
            (0, a.jsx)("path", {
                d: "M9.76155 19.8454C11.6089 14.3277 19.0166 11.8341 26.2963 14.279C33.5759 16.7238 37.984 23.1743 36.1366 28.692C34.9294 32.2891 31.3628 34.5998 27.0096 35.0998C26.5376 35.1499 26.0849 35.3144 25.6908 35.5789C25.2966 35.8435 24.9729 36.2001 24.7477 36.6179L23.9855 38.0506C23.1686 39.3737 20.6079 39.7517 17.9557 38.8615C15.1146 37.9104 13.2368 35.868 13.694 34.2584L13.9318 33.0207C14.0215 32.5411 13.9898 32.0467 13.8397 31.5824C13.6895 31.1181 13.4257 30.6988 13.0722 30.3625C9.97494 27.3506 8.56657 23.406 9.76155 19.8454Z",
                fill: "#FFEFA3",
            }),
            (0, a.jsx)("path", {
                d: "M21.0407 42.2577C19.8335 42.2577 18.5166 42.0321 17.2119 41.5932C15.1755 40.9164 13.4013 39.7763 12.3344 38.4716C12.2837 38.4193 12.2444 38.3572 12.2191 38.289C12.1938 38.2207 12.1829 38.148 12.1872 38.0754C12.1915 38.0027 12.2109 37.9318 12.2441 37.8671C12.2773 37.8023 12.3236 37.7452 12.3801 37.6993C12.4366 37.6535 12.502 37.6199 12.5722 37.6006C12.6423 37.5814 12.7158 37.577 12.7877 37.5877C12.8597 37.5984 12.9287 37.624 12.9902 37.6628C13.0518 37.7016 13.1046 37.7528 13.1453 37.8131C14.0903 38.9654 15.6938 39.9836 17.5411 40.6055C19.2848 41.1908 21.0895 41.3615 22.504 41.0749C22.5736 41.0547 22.6467 41.0491 22.7186 41.0586C22.7905 41.068 22.8597 41.0923 22.9217 41.1298C22.9838 41.1674 23.0374 41.2174 23.0791 41.2767C23.1208 41.336 23.1498 41.4033 23.1642 41.4744C23.1786 41.5455 23.1781 41.6188 23.1627 41.6897C23.1473 41.7605 23.1174 41.8275 23.0748 41.8862C23.0322 41.9449 22.9779 41.9941 22.9154 42.0308C22.8528 42.0675 22.7833 42.0908 22.7113 42.0992C22.1613 42.2092 21.6015 42.2623 21.0407 42.2577V42.2577ZM20.8761 45.0745C21.0147 45.062 21.1429 44.9956 21.233 44.8896C21.3231 44.7835 21.3679 44.6463 21.3577 44.5075C21.3453 44.3693 21.2787 44.2417 21.1725 44.1526C21.0662 44.0635 20.9289 44.0201 20.7907 44.0319C19.5043 44.1416 17.9862 43.9283 16.5229 43.4344C14.9377 42.904 13.5233 42.0931 12.5478 41.1481C12.4458 41.0675 12.3175 41.0276 12.1878 41.0362C12.058 41.0448 11.9361 41.1014 11.8457 41.1948C11.7553 41.2882 11.7029 41.4119 11.6985 41.5419C11.6942 41.6718 11.7383 41.7987 11.8222 41.898C12.9075 42.9528 14.4622 43.849 16.1876 44.4282C17.5228 44.8733 18.858 45.105 20.0957 45.105C20.364 45.105 20.62 45.0928 20.8761 45.0745V45.0745Z",
                fill: "#3F96EF",
            }),
            (0, a.jsx)("path", {
                d: "M11.6396 20.8698C13.2065 16.1813 19.4924 14.0657 25.6746 16.1386C31.8568 18.2116 35.5942 23.6865 34.0212 28.375C32.9969 31.4296 29.9729 33.3867 26.2782 33.8074C25.8773 33.851 25.493 33.9914 25.1584 34.2166C24.8238 34.4418 24.549 34.7449 24.3577 35.0999L23.7114 36.3193C23.0163 37.4411 20.8459 37.7642 18.59 37.0082C16.1817 36.1973 14.5844 34.4658 14.9746 33.1001L15.1819 32.0454C15.2562 31.6382 15.2283 31.2189 15.1006 30.8252C14.9729 30.4314 14.7494 30.0756 14.4502 29.7895C11.8164 27.2349 10.6275 23.8877 11.6396 20.8698Z",
                fill: "url(#paint0_linear_859_60333)",
            }),
            (0, a.jsx)("path", {
                d: "M18.8521 39.1186C19.1939 39.1973 19.54 39.2563 19.8886 39.2954C21.5042 33.412 23.2053 28.7905 24.7234 26.0652C28.1254 27.1627 29.3875 26.6993 29.8387 26.1018C30.2898 25.5043 30.1374 24.6691 29.3875 23.5838C28.6376 22.4986 27.9121 22.151 27.0341 22.3096C26.1562 22.4681 25.2111 23.2851 24.2539 24.8032C23.3483 24.4754 22.4627 24.0947 21.6018 23.6631C21.7908 21.6572 21.553 20.3098 20.9007 19.5965C20.5105 19.1697 19.7666 18.749 18.468 19.1575C17.1694 19.566 16.9316 20.2305 16.9255 20.7183C16.9072 21.9072 18.5351 23.1997 20.48 24.2545C19.9617 28.0589 18.1571 33.6985 16.4377 38.2041C16.7412 38.3718 17.0547 38.5205 17.3767 38.6492C18.0412 36.8933 18.9801 34.3021 19.8032 31.6073C20.6263 28.9125 21.1994 26.5896 21.4677 24.7605C22.2298 25.1263 22.998 25.4495 23.7174 25.7177C22.9187 27.1688 22.0895 29.0954 21.2421 31.4549C20.6507 33.0949 19.7971 35.6556 18.8521 39.1186ZM27.217 23.3399C27.3816 23.3095 27.8694 23.2241 28.5278 24.1752C29.0766 24.9739 29.0887 25.3641 29.0095 25.4677C28.8022 25.7421 27.6133 25.8579 25.2782 25.1446C25.9854 24.0655 26.6439 23.4375 27.217 23.3399ZM20.6019 23.1204C18.9862 22.1876 17.962 21.2548 17.9681 20.7366C17.9742 20.4439 18.5412 20.2366 18.785 20.1574C19.0013 20.0837 19.2273 20.0426 19.4557 20.0354C19.8825 20.0354 20.0593 20.2244 20.1263 20.3037C20.5653 20.7793 20.6995 21.7791 20.6019 23.1204Z",
                fill: "#FFC31A",
            }),
            (0, a.jsx)("path", {
                d: "M32.5883 3.43255C32.9256 3.21613 33.2127 2.93007 33.4304 2.59358C33.648 2.25708 33.7912 1.87793 33.8503 1.48156L34.0515 0.115857C34.0573 0.0830328 34.0746 0.0533456 34.1003 0.0321176C34.126 0.0108896 34.1584 -0.000490999 34.1918 1.62532e-05C34.2244 -0.000288277 34.256 0.0113057 34.2807 0.032628C34.3054 0.0539503 34.3215 0.0835394 34.3259 0.115857L34.5271 1.48156C34.5862 1.87793 34.7294 2.25708 34.9471 2.59358C35.1647 2.93007 35.4519 3.21613 35.7892 3.43255L35.966 3.54839C35.9867 3.55964 36.004 3.57641 36.0158 3.59685C36.0277 3.6173 36.0336 3.64062 36.033 3.66423C36.0336 3.68785 36.0277 3.71117 36.0158 3.73162C36.004 3.75206 35.9867 3.76883 35.966 3.78007L35.7892 3.90201C35.4524 4.11903 35.1657 4.40525 34.9481 4.74163C34.7305 5.07802 34.587 5.45688 34.5271 5.85301L34.3259 7.21871C34.3216 7.25162 34.3057 7.28194 34.2812 7.30426C34.2566 7.32659 34.2249 7.33948 34.1918 7.34065V7.34065C34.1579 7.33971 34.1254 7.32703 34.0998 7.30479C34.0742 7.28256 34.0572 7.25213 34.0515 7.21871L33.8503 5.85301C33.7905 5.45688 33.647 5.07802 33.4294 4.74163C33.2118 4.40525 32.9251 4.11903 32.5883 3.90201L32.4115 3.78617C32.3918 3.77413 32.3758 3.75702 32.3651 3.73663C32.3543 3.71624 32.3493 3.69334 32.3505 3.67033V3.67033C32.3493 3.64732 32.3543 3.62442 32.3651 3.60403C32.3758 3.58364 32.3918 3.56653 32.4115 3.55449L32.5883 3.43255Z",
                fill: "#55EF84",
            }),
            (0, a.jsx)("path", {
                d: "M39.3804 39.3185C39.7181 39.1011 40.0054 38.8141 40.2231 38.4765C40.4408 38.139 40.5837 37.7588 40.6424 37.3614L40.8497 35.9957C40.8541 35.9634 40.8702 35.9338 40.8949 35.9125C40.9196 35.8912 40.9512 35.8796 40.9838 35.8799V35.8799C41.0165 35.8796 41.0481 35.8912 41.0728 35.9125C41.0974 35.9338 41.1135 35.9634 41.118 35.9957L41.3253 37.3614C41.3851 37.7584 41.5285 38.1382 41.7461 38.4755C41.9636 38.8129 42.2504 39.1003 42.5873 39.3185L42.7641 39.4283C42.7826 39.4415 42.7977 39.4589 42.8083 39.479C42.8189 39.4991 42.8246 39.5214 42.8251 39.5441V39.5563C42.8246 39.5782 42.8189 39.5996 42.8082 39.6187C42.7976 39.6379 42.7825 39.6541 42.7641 39.666L42.5873 39.7819C42.2498 39.9996 41.9627 40.2867 41.7451 40.6242C41.5274 40.9617 41.3843 41.3418 41.3253 41.739L41.118 43.0986C41.1137 43.1315 41.0978 43.1618 41.0733 43.1841C41.0487 43.2065 41.017 43.2194 40.9838 43.2205V43.2205C40.9507 43.2194 40.919 43.2065 40.8944 43.1841C40.8699 43.1618 40.854 43.1315 40.8497 43.0986L40.6424 41.739C40.5845 41.3414 40.4419 40.9609 40.2241 40.6233C40.0064 40.2856 39.7186 39.9987 39.3804 39.7819L39.2035 39.666C39.1852 39.6541 39.1701 39.6379 39.1594 39.6187C39.1488 39.5996 39.143 39.5782 39.1426 39.5563V39.5441C39.143 39.5214 39.1488 39.4991 39.1594 39.479C39.17 39.4589 39.1851 39.4415 39.2035 39.4283L39.3804 39.3185Z",
                fill: "#FF78B5",
            }),
            (0, a.jsx)("path", {
                d: "M26.5035 8.52263C26.7308 8.37742 26.9245 8.18538 27.0717 7.95934C27.2189 7.73329 27.3162 7.47844 27.3571 7.2118L27.4912 6.29118C27.4953 6.2696 27.5065 6.25004 27.5231 6.23565C27.5397 6.22127 27.5607 6.21291 27.5826 6.21192V6.21192C27.6049 6.21172 27.6265 6.21966 27.6433 6.23426C27.6602 6.24885 27.6711 6.26909 27.6741 6.29118L27.8143 7.2118C27.8541 7.47805 27.9503 7.73273 28.0964 7.95879C28.2426 8.18486 28.4353 8.37709 28.6618 8.52263L28.7776 8.60189C28.7914 8.60981 28.8027 8.62143 28.8103 8.63544C28.8178 8.64944 28.8213 8.66527 28.8203 8.68115C28.8208 8.69613 28.8171 8.71096 28.8096 8.72391C28.802 8.73686 28.7909 8.7474 28.7776 8.75431L28.6618 8.83357C28.4353 8.97911 28.2426 9.17135 28.0964 9.39741C27.9503 9.62348 27.8541 9.87815 27.8143 10.1444L27.6741 11.065C27.6711 11.0871 27.6602 11.1074 27.6433 11.1219C27.6265 11.1365 27.6049 11.1445 27.5826 11.1443V11.1443C27.5607 11.1433 27.5397 11.1349 27.5231 11.1206C27.5065 11.1062 27.4953 11.0866 27.4912 11.065L27.3571 10.1444C27.3162 9.87776 27.2189 9.62291 27.0717 9.39686C26.9245 9.17082 26.7308 8.97878 26.5035 8.83357L26.3876 8.75431C26.3752 8.74646 26.3648 8.73571 26.3573 8.72297C26.3499 8.71023 26.3457 8.69588 26.345 8.68115V8.68115C26.3452 8.66548 26.3492 8.6501 26.3566 8.6363C26.364 8.62251 26.3747 8.6107 26.3876 8.60189L26.5035 8.52263Z",
                fill: "#89D6FF",
            }),
            (0, a.jsx)("path", {
                d: "M0.524839 29.6125C0.752168 29.4673 0.945898 29.2752 1.09309 29.0492C1.24028 28.8231 1.33755 28.5683 1.3784 28.3016L1.51253 27.381C1.51663 27.3594 1.52789 27.3399 1.54448 27.3255C1.56108 27.3111 1.58204 27.3027 1.60399 27.3018V27.3018C1.62627 27.3016 1.64786 27.3095 1.6647 27.3241C1.68154 27.3387 1.69247 27.3589 1.69544 27.381L1.83567 28.3016C1.87543 28.5679 1.9716 28.8226 2.11776 29.0486C2.26391 29.2747 2.45667 29.4669 2.68313 29.6125L2.79897 29.6917C2.81276 29.6997 2.82407 29.7113 2.83161 29.7253C2.83915 29.7393 2.84263 29.7551 2.84165 29.771V29.771C2.84218 29.786 2.83846 29.8008 2.8309 29.8138C2.82335 29.8267 2.81228 29.8372 2.79897 29.8442L2.68313 29.9295C2.45667 30.0751 2.26391 30.2673 2.11776 30.4934C1.9716 30.7194 1.87543 30.9741 1.83567 31.2403L1.69544 32.161C1.69247 32.1831 1.68154 32.2033 1.6647 32.2179C1.64786 32.2325 1.62627 32.2404 1.60399 32.2402C1.58204 32.2392 1.56108 32.2309 1.54448 32.2165C1.52789 32.2021 1.51663 32.1825 1.51253 32.161L1.3784 31.2403C1.33755 30.9737 1.24028 30.7189 1.09309 30.4928C0.945898 30.2668 0.752168 30.0747 0.524839 29.9295L0.408999 29.8503C0.396513 29.8424 0.386111 29.8317 0.378679 29.8189C0.371248 29.8062 0.367008 29.7918 0.366321 29.7771V29.7771C0.365528 29.7604 0.369036 29.7438 0.37651 29.7288C0.383983 29.7139 0.39517 29.7011 0.408999 29.6917L0.524839 29.6125Z",
                fill: "#3541D6",
            }),
            (0, a.jsx)("path", {
                d: "M14.5781 21.0834L14.8647 16.6449C14.9792 14.8659 14.41 13.1103 13.2734 11.7369L5.37186 2.17094C4.25003 0.823536 2.06735 1.91488 2.49413 3.6159C2.92091 5.31693 3.99396 7.55448 6.2559 9.8591L3.20137 8.51778C1.98809 7.98126 0.829688 9.37135 1.57351 10.4749C2.83556 12.3527 5.05482 14.4135 8.84707 14.8951L7.08508 15.5353C6.15835 15.8706 6.17664 17.1814 7.10946 17.5046C8.43858 17.9618 10.1335 18.2423 11.6638 17.5655C11.6638 17.5655 11.5297 19.7604 12.9076 21.5956C13.4258 22.2845 14.5233 21.9431 14.5781 21.0834Z",
                fill: "white",
            }),
            (0, a.jsx)("path", {
                d: "M32.7407 25.4545C32.9236 27.1067 32.9663 28.3992 33.6369 28.3261C34.3076 28.2529 35.3441 26.8384 35.1611 25.1862C34.9782 23.5339 33.643 22.2658 32.9724 22.339C32.3017 22.4121 32.5578 23.8022 32.7407 25.4545Z",
                fill: "white",
            }),
            (0, a.jsx)("defs", {
                children: (0, a.jsxs)("linearGradient", {
                    id: "paint0_linear_859_60333",
                    x1: "34.2419",
                    y1: "5.70262",
                    x2: "5.61649",
                    y2: "53.1558",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, a.jsx)("stop", { offset: "0.14", stopColor: "#FFE45C" }),
                        (0, a.jsx)("stop", { offset: "0.83", stopColor: "#FFC31A" }),
                    ],
                }),
            }),
        ],
    });
}
var a$ = n(201001);
function aq(e) {
    let { threadId: t } = e,
        n = (0, aF.bG)([e8.A], () => e8.A.getChannel(t)),
        l = (0, aF.bG)([e8.A], () => e8.A.getChannel(n?.parent_id)),
        i = r.useCallback(() => {
            null != n &&
                null != l &&
                ((0, iu.zV)(es.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, eL.C)((0, aB.af)(n, l)));
        }, [n, l]);
    return (0, a.jsxs)("div", {
        className: a$.BQ,
        children: [
            (0, a.jsx)(aW, {}),
            (0, a.jsxs)("div", {
                className: a$.BB,
                children: [
                    (0, a.jsx)(ev.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: eG.intl.string(eG.t["5uAO7d"]),
                    }),
                    (0, a.jsx)(ev.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: eG.intl.format(eG.t.WnfPV3, {
                            helpArticleUrl: aK.A.getCreatorSupportArticleURL(es.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, a.jsx)(aH.h, { size: 4 }),
                    (0, a.jsx)(eB.$, {
                        text: eG.intl.string(eG.t.C5UQC9),
                        variant: "primary",
                        icon: eD.LinkIcon,
                        onClick: i,
                    }),
                ],
            }),
            (0, a.jsx)(ey.D, {
                className: a$.b,
                onClick: function () {
                    (0, aV.sF)(t);
                },
                "aria-label": eG.intl.string(eG.t["0+xZH0"]),
                children: (0, a.jsx)(eH.XSmallIcon, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var aZ = n(505527),
    aJ = n(467073),
    aX = n(960538),
    aY = n(604121),
    aQ = n(31717),
    a0 = n(988904);
function a1() {
    return n
        .e(515423)
        .then(n.t.bind(n, 155147, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function a2(e) {
    return (
        v.h.subscribe("DRAFT_CHANGE", e),
        v.h.subscribe("DRAFT_SAVE", e),
        v.h.subscribe("DRAFT_CLEAR", e),
        () => {
            (v.h.unsubscribe("DRAFT_CHANGE", e), v.h.unsubscribe("DRAFT_SAVE", e), v.h.unsubscribe("DRAFT_CLEAR", e));
        }
    );
}
let a3 = r.memo(function (e) {
    var t;
    let { channel: n, isLastItem: l } = e,
        i = (0, u.bG)([j.Ay], () => j.Ay.useReducedMotion),
        s = (0, u.bG)([tE.A], () => tE.A.can(es.xBc.SEND_MESSAGES_IN_THREADS, n)),
        o = (0, tg.s5)(n),
        c = (0, u.bG)([eh.default], () => eh.default.getId()),
        d = ((t = n.id), r.useSyncExternalStore(a2, () => "" !== aQ.A.getDraft(t, aQ.C.ChannelMessage)));
    return l
        ? !s || o || d || n.ownerId === c
            ? null
            : (0, a.jsxs)("div", {
                  className: a0.aP,
                  children: [
                      (0, a.jsx)(aY.a, { importData: a1, shouldAnimate: !i, className: a0.lY, loop: 2 }),
                      (0, a.jsxs)("div", {
                          className: a0.FS,
                          children: [
                              (0, a.jsx)(ew.D, {
                                  variant: "heading-sm/semibold",
                                  children: eG.intl.string(eG.t.OmBThA),
                              }),
                              (0, a.jsx)(ev.E, {
                                  variant: "body-sm/normal",
                                  color: "text-default",
                                  children: eG.intl.string(eG.t.zcs5ko),
                              }),
                          ],
                      }),
                  ],
              })
        : (0, a.jsx)("div", { className: a0.yF });
});
var a4 = n(367790),
    a7 = n(30492),
    a5 = n(226698),
    a8 = n(374710),
    a6 = n(715757),
    a9 = n(390897),
    re = n(862482),
    rt = n(215026),
    rn = n(778858),
    rl = n(964486),
    ri = n(351001),
    rs = n(400528);
function ra(e) {
    let { text: t, icon: n, onClick: l, disabled: i, submitting: s } = e;
    return (0, a.jsx)(eS.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, a.jsx)(aL.K, {
            icon: n,
            variant: "secondary",
            onClick: l,
            disabled: i,
            loading: s,
            "aria-label": t,
            size: "sm",
        }),
    });
}
var rr = n(307805),
    ro = n(145530),
    rc = n(905499),
    rd = n(406810),
    ru = n(991982),
    rh = n(838111),
    rm = n(870136);
function rg(e) {
    let { channel: t, message: l, snapshot: i } = e,
        { moderatorReport: s } = i,
        o = s?.reported_user_id,
        c = (0, u.bG)([l0.default], () => (null != o ? l0.default.getUser(o) : null)),
        d = (0, u.bG)([t6.A], () => t6.A.getGuild(t.guild_id));
    (0, a6.ml)(l);
    let h = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, u.bG)([rs.A], () => null != l && rs.A.isUserBanned(l.id)),
                o = null != l && null == s,
                [c, d] = r.useState(o),
                h = (0, u.bG)([tE.A], () => null != l && null != i && (0, ri.fJ)(l, i, [tE.A]));
            if (
                ((0, rl.Ay)(() => {
                    o && rn.A.searchGuildBans(t.guild_id, void 0, [l?.id]).finally(() => d(!1));
                }),
                !h)
            )
                return null;
            let m = !0 === s ? eG.intl.string(rr.default.dpfwQ1) : eG.intl.string(rr.default.ASv23S),
                g = `ban-user-${l?.id}`;
            return (0, a.jsx)(
                ra,
                {
                    text: m,
                    icon: rt.HammerIcon,
                    onClick: function () {
                        null != l &&
                            (0, ig.mM)(async () => {
                                let { default: e } = await Promise.all([n.e(420282), n.e(802504)]).then(
                                    n.bind(n, 333179),
                                );
                                return (n) => (0, a.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: !0 === s || c,
                    submitting: c,
                    color: re.$n.Colors.RED,
                },
                g,
            );
        })({ channel: t, user: c, guild: d }),
        m = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, u.bG)([tE.A], () => null != l && null != i && (0, ri.KX)(l, i, [tE.A])),
                r = (0, u.bG)([n6.Ay], () => null == l || null == n6.Ay.getMember(t.guild_id, l.id));
            if (!s) return null;
            let o = r ? eG.intl.string(rr.default.Ux67nW) : eG.intl.string(rr.default["snp/lJ"]),
                c = `kick-user-${l?.id}`;
            return (0, a.jsx)(
                ra,
                {
                    text: o,
                    icon: rc.UserMinusIcon,
                    onClick: function () {
                        null != l &&
                            (0, ig.mM)(async () => {
                                let { default: e } = await Promise.all([
                                    n.e(921596),
                                    n.e(253335),
                                    n.e(916758),
                                    n.e(947802),
                                    n.e(807476),
                                    n.e(967874),
                                    n.e(202622),
                                    n.e(479971),
                                    n.e(736621),
                                    n.e(376675),
                                    n.e(140243),
                                ]).then(n.bind(n, 547166));
                                return (n) => (0, a.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: r,
                },
                c,
            );
        })({ channel: t, user: c, guild: d }),
        g = [
            (function (e) {
                let { message: t, user: n, guild: l, channel: i } = e,
                    s = (0, u.bG)([tE.A], () => null != n && null != l && (0, ri.Kd)(n, l, [tE.A])),
                    { messageReference: r } = t,
                    o = (0, u.bG)([eC.A], () => (null != r ? eC.A.getMessage(r.channel_id, r.message_id) : null)),
                    c = (0, u.bG)([e8.A], () => (null != o ? e8.A.getChannel(o.channel_id) : null)),
                    d = (0, u.bG)([e8.A], () => e8.A.getChannel(i.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let h = null == o ? eG.intl.string(rr.default["0IZbwC"]) : eG.intl.string(rr.default.Uj6oD4),
                    m = null == o,
                    g = `delete-message-${t.id}`;
                return (0, a.jsx)(
                    ra,
                    {
                        text: h,
                        icon: tW.TrashIcon,
                        onClick: function () {
                            null != c &&
                                null != o &&
                                ro.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: i.id });
                        },
                        disabled: m,
                        color: re.$n.Colors.RED,
                    },
                    g,
                );
            })({ channel: t, message: l, user: c, guild: d }),
            h,
            m,
            (function (e) {
                let { channel: t, user: n, guild: l } = e,
                    i = (0, u.bG)(
                        [l0.default, t6.A, tE.A],
                        () => null != n && null != l && (0, rh.b)(l.id, n.id, [l0.default, t6.A, tE.A]),
                    ),
                    [s, r] = (0, rm.Ay)(n?.id, t.guild_id),
                    o = (0, u.bG)([n6.Ay], () => null != l && null != n && null != n6.Ay.getMember(l.id, n.id));
                if (!i || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, a.jsx)(
                    ra,
                    {
                        text: r ? eG.intl.string(rr.default["6uMZbv"]) : eG.intl.string(rr.default["Sgg/uI"]),
                        icon: rd.ClockIcon,
                        onClick: function () {
                            null != n && (0, ru.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
                        },
                        disabled: r,
                    },
                    c,
                );
            })({ channel: t, user: c, guild: d }),
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== g.length
        ? (0, a.jsx)(a.Fragment, { children: g.map((e, t) => (0, a.jsx)(r.Fragment, { children: e }, t)) })
        : null;
}
function rp(e) {
    let { message: t, channel: n } = e;
    return (0, a.jsx)(a.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, a.jsx)(rg, { channel: n, message: t, snapshot: e }, l)),
    });
}
var rA = n(152007),
    rf = n(7909),
    rC = n(435470),
    rE = n(473503),
    rx = n(853742),
    rI = n(371476),
    rS = n(356974),
    ry = n(65406);
function rb(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        i = (0, a8.uW)(t),
        [s, o] = r.useState(!1);
    function c() {
        (o(!0),
            a5.A.resolveFlag(t.id).then(() => {
                o(!1);
            }));
    }
    return i
        ? (0, a.jsx)(eB.$, {
              size: "sm",
              variant: "secondary",
              text: l ? eG.intl.string(rr.default["2Y4vkk"]) : eG.intl.string(rr.default.YIbR4r),
              onClick: function () {
                  !0 === aR.w.get(a9.f)
                      ? c()
                      : (0, ig.mM)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, a.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: aD.CheckmarkLargeIcon,
              disabled: l,
          })
        : null;
}
function r_(e) {
    let {
            postId: t,
            isFirstMessage: n,
            isLastItem: l = !1,
            parentChannelId: i,
            hideDivider: s = !1,
            hideFollowButton: o = !1,
            hideUnfollowButton: d = !1,
            className: h,
        } = e,
        { ref: m, width: g } = (0, aG.Ay)(),
        [p, A] = r.useState(3),
        [f, C] = r.useState(!n),
        [E, x] = (0, aU.A)(!1, 2e3),
        I = (0, u.bG)([e8.A], () => e8.A.getChannel(t), [t]),
        { firstMessage: S } = (0, rE.OA)(I),
        b = (0, u.bG)([rA.A], () => rA.A.hasJoined(t)),
        { disableReactionUpdates: _, disableReactionCreates: j, isLurking: v, isPendingMember: T } = (0, aJ.A)(I),
        N = (0, a6.W1)(I),
        M = (0, u.bG)([e8.A], () => e8.A.getChannel(i)),
        R = (0, rC.Ck)(M),
        D = (0, u.bG)([aw.A], () => aw.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        k = r.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    C((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    if (
        (r.useLayoutEffect(() => {
            let e = m.current;
            if (null == e || !n) return;
            let t = new IntersectionObserver(k, { threshold: 1 });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }),
        r.useLayoutEffect(() => {
            null == g || A(Math.floor((g - 280) / 58));
        }, [g]),
        null == I)
    )
        return null;
    let L = null != S && S.reactions.length > 0;
    function P() {
        null != I &&
            ((0, rx.jC)({ postId: I.id, location: { section: es.JJy.CHANNEL_HEADER } }),
            (0, eL.C)((0, aB.af)(I, M), () => x(!0)));
    }
    let O = b ? aD.CheckmarkLargeIcon : ak.BellIcon;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: c()(rI.kL, { [rI.wx]: f }, h),
                ref: m,
                children: [
                    N
                        ? (0, a.jsx)("div", {
                              className: rI.kX,
                              children: null != S && (0, a.jsx)(rp, { message: S, channel: I }),
                          })
                        : (0, a.jsx)("div", {
                              className: rI.hY,
                              children:
                                  null != S &&
                                  (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          !L &&
                                              !j &&
                                              null != R &&
                                              (0, a.jsx)("div", {
                                                  className: rS.reactions,
                                                  children: (0, a.jsx)(a7.q, {
                                                      message: S,
                                                      readOnly: !1,
                                                      useChatFontScaling: !1,
                                                      isLurking: v,
                                                      isPendingMember: T,
                                                      emoji: R,
                                                      type: aZ.v6.NORMAL,
                                                      hideCount: !0,
                                                      count: 0,
                                                      me: !1,
                                                      burst_count: 0,
                                                      me_burst: !1,
                                                      emojiSize: "reaction",
                                                  }),
                                              }),
                                          (0, a.jsx)(a4.A, {
                                              message: S,
                                              channel: I,
                                              disableReactionCreates: !0,
                                              disableReactionUpdates: _,
                                              isLurking: v,
                                              isPendingMember: T,
                                              maxReactions: p,
                                              className: rI.Br,
                                              useChatFontScaling: !1,
                                              isForumToolbar: !0,
                                              forceHideReactionCreates: !0,
                                          }),
                                          !j &&
                                              (0, a.jsx)(aX.t, {
                                                  message: S,
                                                  channel: I,
                                                  useChatFontScaling: !1,
                                                  className: c()(ry.secondary, rI.vU, rS.visible, { [rI.w$]: !L }),
                                                  isForumToolbar: !0,
                                                  children: !L && eG.intl.string(eG.t.xpOyTO),
                                              }),
                                      ],
                                  }),
                          }),
                    (0, a.jsxs)("div", {
                        className: rI.Uo,
                        children: [
                            N
                                ? (0, a.jsx)(rb, { channel: I })
                                : !v &&
                                  (!o || b) &&
                                  (!d || !b) &&
                                  (0, a.jsx)(eS.m, {
                                      text: eG.intl.string(eG.t.F7oeDv),
                                      children: (0, a.jsx)(eB.$, {
                                          icon: O,
                                          size: "sm",
                                          variant: "secondary",
                                          text: b ? eG.intl.string(eG.t["7OkUzs"]) : eG.intl.string(eG.t["3aOv+h"]),
                                          onClick: function () {
                                              null != I &&
                                                  (b
                                                      ? rf.A.leaveThread(I, "Forum Toolbar")
                                                      : rf.A.joinThread(I, "Forum Toolbar"));
                                          },
                                      }),
                                  }),
                            (0, a.jsx)(eS.m, {
                                text: eG.intl.string(eG.t.WqhZss),
                                children: E
                                    ? (0, a.jsx)(eB.$, {
                                          icon: aD.CheckmarkLargeIcon,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          text: eG.intl.string(eG.t.t5VZ88),
                                      })
                                    : (0, a.jsx)(aL.K, {
                                          icon: eD.LinkIcon,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          "aria-label": eG.intl.string(eG.t.WqhZss),
                                      }),
                            }),
                            f &&
                                (0, a.jsx)(eS.m, {
                                    text: eG.intl.string(eG.t.nFP4oa),
                                    children: (0, a.jsx)(aL.K, {
                                        icon: aP.ArrowLargeUpIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: function () {
                                            null != I &&
                                                y.A.jumpToMessage({
                                                    channelId: I.id,
                                                    messageId: I.id,
                                                    flash: !0,
                                                    jumpType: aO.vx.INSTANT,
                                                });
                                        },
                                        "aria-label": eG.intl.string(eG.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            D && (0, a.jsx)(aq, { threadId: t }),
            !s && (0, a.jsx)(a3, { channel: I, isLastItem: l }),
        ],
    });
}
var rj = n(95362),
    rv = n(80682),
    rT = n(656941),
    rN = n(983851),
    rM = n(104171),
    rR = n(262763),
    rD = n(499211),
    rk = n(495867),
    rL = n(977997),
    rP = n(607567),
    rO = n(917592),
    rG = n(354817),
    rU = n(477569);
function rw(e) {
    let { channel: t, className: n } = e,
        l = (0, tg._M)(t),
        i = (0, tg.gZ)(t),
        s = (0, u.bG)([rL.A], () => rL.A.isInChannel(t.id)),
        o = (0, u.bG)([rP.Ay], () => rP.Ay.getVoiceStatesForChannel(t), [t]),
        { needSubscriptionToAccess: d } = (0, rD.A)(t.id),
        h = (0, u.bG)([rk.A], () => (rk.A.getChannelId() === t.id ? rk.A.getState() : es.S7L.RTC_DISCONNECTED), [t.id]),
        m = r.useCallback(() => {
            rR.A.handleVoiceConnect({ channel: t, connected: s, needSubscriptionToAccess: d, locked: !1 });
        }, [t, s, d]),
        g = r.useMemo(() => o.map((e) => e.user.id), [o]),
        p = (0, rC.$I)(t, g),
        A = p.length > 0,
        { connectionStatusText: f } = rO.A.getStatus(h, !1);
    return (0, a.jsxs)("div", {
        className: n,
        children: [
            (0, a.jsx)(eS.m, {
                text: i ? (l ? void 0 : eG.intl.string(rG.default.yaoRu1)) : eG.intl.string(rG.default.yBjQ3q),
                caretConfig: { position: "bottom", align: "start" },
                align: "left",
                children: (0, a.jsxs)(ey.D, {
                    className: c()(rU.Xt, l ? null : rU.tW),
                    onClick: l ? m : void 0,
                    children: [
                        (0, a.jsx)(rN.VoiceNormalIcon, {
                            size: "refresh_sm",
                            color: s ? Z.A.colors.STATUS_POSITIVE : Z.A.colors.ICON_MUTED,
                        }),
                        (0, a.jsx)(ev.E, {
                            variant: "body-md/medium",
                            color: "text-strong",
                            className: rU.Gp,
                            children: h === es.S7L.RTC_DISCONNECTED ? eG.intl.string(rG.default.ficpp7) : f,
                        }),
                    ],
                }),
            }),
            A
                ? (0, a.jsx)(rM.Ay, {
                      className: rU.L_,
                      guildId: t.guild_id,
                      users: p,
                      size: rM.DN.SIZE_24,
                      showUserPopout: !0,
                  })
                : null,
        ],
    });
}
var rF = n(950490);
function rH(e) {
    let { message: t, compact: n, channel: l, id: i } = e,
        s = (0, i0.kt)(l),
        o = (0, lz.IO)(l),
        c = t?.author.id,
        d = (0, r.useMemo)(() => (null != c ? { [l.guild_id]: [c] } : {}), [l.guild_id, c]);
    return (
        (0, rv.Eq)(d, "GameInviteChannelFirstMessage"),
        (0, a.jsxs)("div", {
            className: rF.TX,
            children: [
                (0, a.jsxs)(rj.Ar, {
                    children: [
                        null != t
                            ? (0, a.jsx)("ol", {
                                  children: (0, a.jsx)(nJ, {
                                      className: rF.iU,
                                      compact: n,
                                      channel: l,
                                      message: t,
                                      groupId: t.id,
                                      id: i,
                                      isLastItem: !1,
                                      renderContentOnly: !1,
                                      hideInviteEmbedBanner: !0,
                                      hideActivityInvite: !0,
                                  }),
                              })
                            : null,
                        (0, a.jsxs)("div", {
                            className: rF.iQ,
                            children: [
                                null == t &&
                                    (0, a.jsx)(ev.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: eG.intl.string(eG.t.mE3KJN),
                                    }),
                                s.length > 0 &&
                                    (0, a.jsx)("div", {
                                        className: rF.GA,
                                        children: s.map((e) =>
                                            (0, a.jsx)(i1.Ay, { tag: e, size: i1.Ay.Sizes.SMALL }, e.id),
                                        ),
                                    }),
                                t?.activity != null &&
                                    (0, a.jsx)(rT.A, {
                                        channel: l,
                                        message: t,
                                        hideParty: !1,
                                        hideInviteEmbedBanner: !0,
                                    }),
                                (0, a.jsx)("div", { className: rF.b1 }),
                                (0, a.jsx)(r_, {
                                    className: rF.Jr,
                                    parentChannelId: l.parent_id,
                                    postId: l.id,
                                    isFirstMessage: !0,
                                    isLastItem: !0,
                                    hideDivider: !0,
                                    hideFollowButton: !0,
                                }),
                                o &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("div", { className: rF.b1 }),
                                            (0, a.jsx)(rw, { channel: l }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", { className: rF.ld }),
            ],
        })
    );
}
var rB = n(640708),
    rK = n(378570),
    rV = n(452082),
    rz = n(327337);
function rW(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = r.useCallback(() => {
            (0, iI.xi)(t, [l]);
        }, [t, l]),
        o = (0, u.bG)([nM.A], () => nM.A.isBlocked(i)),
        c = r.useMemo(
            () => ({ channelId: t, warningId: l, senderId: i, warningType: iS._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, l, i],
        );
    r.useEffect(() => {
        ((0, iy.QF)({ ...c, viewName: iy.gN.SAFETY_WARNING_BANNER }),
            iA.A.increment({ name: im.K.SAFETY_WARNING_VIEW }));
    }, [c]);
    let d = r.useCallback(
            (e) => {
                (0, iy._$)({ ...c, cta: e });
            },
            [c],
        ),
        h = r.useCallback(() => {
            ((0, ig.mM)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e(456510),
                        n.e(506627),
                        n.e(770940),
                        n.e(302033),
                        n.e(882830),
                        n.e(120884),
                    ]).then(n.bind(n, 556127));
                    return (n) => {
                        let { transitionState: s, onClose: r } = n;
                        return (0, a.jsx)(e, {
                            otherUserId: i,
                            channelId: t,
                            warningId: l,
                            warningType: iS._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: r,
                        });
                    };
                },
                { modalKey: rz.V },
            ),
                d(iy.Wm.USER_BANNER_OPEN_SAFETY_TOOLS));
        }, [t, i, l, d]),
        m = r.useCallback(() => {
            (s(), d(iy.Wm.USER_BANNER_BLOCK_CONFIRM));
        }, [s, d]),
        g = r.useCallback(() => {
            (s(), d(iy.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM));
        }, [s, d]),
        p = r.useCallback(() => {
            (0, ig.mM)(async () => {
                let { default: e } = await Promise.all([n.e(770940), n.e(784938)]).then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: s } = n;
                    return (0, a.jsx)(e, {
                        transitionState: l,
                        onBlock: m,
                        onBlockAndReport: g,
                        onCancel: () => {
                            (s?.(), d(iy.Wm.USER_BANNER_BLOCK_CANCEL));
                        },
                        onClose: s,
                        userId: i,
                        channelId: t,
                    });
                };
            });
        }, [m, g, i, t, d]);
    return (0, a.jsx)(iT, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: iS._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: eG.intl.string(eG.t.ZzlB5p),
        description: eG.intl.string(eG.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: eG.intl.string(eG.t.Qyu4UK), variant: "primary", onClick: h },
            ...(o ? [] : [{ text: eG.intl.string(eG.t["7q0bNY"]), variant: "secondary", onClick: p }]),
        ],
    });
}
var r$ = n(74114);
function rq(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: i } = (0, u.cf)([nM.A], () => ({ isIgnored: nM.A.isIgnored(t) }), [t]),
        s = r.useCallback(() => {
            ((0, iy._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: iS._j.STRANGER_DANGER,
                cta: iy.Wm.USER_MODAL_IGNORE,
            }),
                au.A.ignoreUser(t, "web_stranger_danger_more", n));
        }, [n, l, t]),
        o = r.useCallback(() => {
            ((0, iy._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: iS._j.STRANGER_DANGER,
                cta: iy.Wm.USER_MODAL_UNIGNORE,
            }),
                au.A.unignoreUser(t, "web_stranger_danger_more", n));
        }, [n, l, t]);
    return (0, a.jsx)(ix.PQ, {
        title: eG.intl.string(eG.t.avyV7P),
        description: eG.intl.string(eG.t.naWE6W),
        buttonText: i ? eG.intl.string(eG.t["3SrzRT"]) : eG.intl.string(eG.t.avyV7P),
        onButtonPress: i ? o : s,
    });
}
function rZ(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        { isBlocked: s } = (0, u.cf)([nM.A], () => ({ isBlocked: nM.A.isBlocked(i) }), [i]),
        o = r.useCallback(() => {
            (0, iI.xi)(t, [l]);
        }, [t, l]),
        c = (0, rz.eT)(),
        d = r.useCallback(
            (e) => () => {
                (au.A.blockUser(i, { location: rz.Rx }).then(() => {
                    (iC.A.showBlockSuccessToast(i, t), o());
                }),
                    (0, iy._$)({
                        channelId: t,
                        warningId: l,
                        senderId: i,
                        warningType: iS._j.STRANGER_DANGER,
                        cta: e,
                    }));
            },
            [o, t, l, i],
        );
    function h(e, s, r) {
        (0, ig.mM)(async () => {
            let { default: o } = await Promise.all([n.e(283887), n.e(164501), n.e(826696), n.e(367554)]).then(
                n.bind(n, 219801),
            );
            return (n) =>
                (0, a.jsx)(o, {
                    ...n,
                    userId: i,
                    confirmBlock: d(e),
                    onCancel: () => {
                        (r?.(),
                            (0, iy._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iS._j.STRANGER_DANGER,
                                cta: s,
                            }));
                    },
                });
        });
    }
    return (
        r.useEffect(() => {
            ((0, iy.mO)(es.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: iS._j.STRANGER_DANGER,
            }),
                iA.A.increment({ name: im.K.SAFETY_WARNING_VIEW }));
        }, [t, l, i]),
        (0, a.jsx)(iT, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: iS._j.STRANGER_DANGER,
            header: eG.intl.string(eG.t.iOkDpM),
            description: eG.intl.string(eG.t.ISUbcM),
            onDismiss: o,
            buttons: [
                {
                    text: eG.intl.string(eG.t["Qk/c48"]),
                    variant: "primary",
                    onClick: function () {
                        ((function e() {
                            (0, ig.mM)(async () => {
                                let { default: s } = await Promise.all([n.e(532648), n.e(482911), n.e(741029)]).then(
                                    n.bind(n, 198916),
                                );
                                return (n) => {
                                    let { transitionState: r, onClose: o } = n;
                                    return (0, a.jsx)(s, {
                                        transitionState: r,
                                        onClose: o,
                                        channelId: t,
                                        warningId: l,
                                        senderId: i,
                                        description: eG.intl.string(eG.t.DJMZX6),
                                        safetyTipRows: c.map((e, t) =>
                                            (0, a.jsx)(iE.B, { index: t, listType: "numbered", title: e }, t),
                                        ),
                                        actionRows: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(
                                                    rq,
                                                    { senderId: i, channelId: t, warningId: l },
                                                    "more-tips-button",
                                                ),
                                                (0, a.jsx)(
                                                    ix.PQ,
                                                    {
                                                        title: eG.intl.string(eG.t["5QYPO2"]),
                                                        description: eG.intl.string(eG.t.G08MKu),
                                                        buttonText: eG.intl.string(eG.t["5QYPO2"]),
                                                        buttonVariant: "critical-primary",
                                                        onButtonPress: () => {
                                                            (o(),
                                                                h(
                                                                    iy.Wm.USER_MODAL_BLOCK_CONFIRM,
                                                                    iy.Wm.USER_MODAL_BLOCK_CANCEL,
                                                                    e,
                                                                ));
                                                        },
                                                    },
                                                    "block-button",
                                                ),
                                            ],
                                        }),
                                    });
                                };
                            });
                        })(),
                            (0, iy._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iS._j.STRANGER_DANGER,
                                cta: iy.Wm.OPEN_MORE_TIPS,
                            }));
                    },
                },
                ...(s
                    ? []
                    : [
                          {
                              text: eG.intl.string(eG.t.ie0QdN),
                              variant: "critical-primary",
                              onClick: () => h(iy.Wm.USER_BANNER_BLOCK_CONFIRM, iy.Wm.USER_BANNER_BLOCK_CANCEL),
                          },
                      ]),
            ],
        })
    );
}
var rJ = n(306788),
    rX = n(340833),
    rY = n(913642),
    rQ = n(780061),
    r0 = n(670455),
    r1 = n(912104);
function r2(e) {
    let { summary: t, channel: n } = e,
        l = (0, aF.bG)([lZ.A], () => lZ.A.summaryFeedback(t));
    function i(e, l) {
        (e.stopPropagation(), (0, rQ.A)({ summary: t, channel: n, rating: l }));
    }
    let s = (0, Q.p)(
        null == l,
        {
            enter: { from: { opacity: 0 }, to: { opacity: 1 } },
            leave: { opacity: 0 },
            config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
        },
        "animate-always",
    );
    return (0, a.jsx)(a.Fragment, {
        children: s((e, t) =>
            t
                ? (0, a.jsx)("div", {
                      className: r1.RD,
                      children: (0, a.jsxs)(q.animated.div, {
                          style: e,
                          className: r1.GK,
                          children: [
                              (0, a.jsx)(ev.E, {
                                  variant: "body-xs/medium",
                                  color: "interactive-text-default",
                                  children: eG.intl.string(eG.t["5ZsiE9"]),
                              }),
                              (0, a.jsx)(ey.D, {
                                  onClick: (e) => i(e, r0.P0.GOOD),
                                  children: (0, a.jsx)(rY.A, { className: r1.O1, width: 12, height: 12 }),
                              }),
                              (0, a.jsx)(ey.D, {
                                  onClick: (e) => i(e, r0.P0.BAD),
                                  children: (0, a.jsx)(rX.A, { className: r1.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function r3(e) {
    let t,
        { item: n, channel: l, index: i } = e,
        s = (0, aF.bG)([lZ.A], () => lZ.A.selectedSummary(l.id));
    if (null == s) return null;
    let r = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(rJ.TopicsIcon, { size: "xs", color: "currentColor", className: r1.cR }),
                      (0, a.jsx)(ev.E, { variant: "body-sm/medium", color: "none", tag: "span", children: n.content }),
                  ],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(r2, { summary: s, channel: l }),
                      (0, a.jsx)(rJ.TopicsIcon, { size: "xs", color: "currentColor", className: r1.Jq }),
                  ],
              })),
        (0, a.jsx)(
            n1.A,
            {
                className: c()(r1.aK, o ? r1.Ke : r1.hO),
                contentClassName: o ? r1.Ew : r1.rD,
                isUnread: r,
                id: r ? n$.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? i}`,
        )
    );
}
var r4 = n(383233),
    r7 = n(309010),
    r5 = n(675171),
    r8 = n(806621),
    r6 = n(636922),
    r9 = n(857740);
let oe = r.memo(function (e) {
    let { loading: t, onClick: n } = e,
        l = r.useCallback(() => {
            t || n();
        }, [t, n]);
    return (0, a.jsx)(ey.D, {
        className: c()(r9.XI, { [r9.Lq]: t }),
        onClick: l,
        "aria-label": eG.intl.string(t ? eG.t.hC8KHg : eG.t.XBlaiC),
        children: (0, a.jsx)(ev.E, {
            variant: "body-sm/normal",
            color: "text-link",
            className: r9.Qq,
            children: t ? eG.intl.string(eG.t.hC8KHg) : eG.intl.string(eG.t.XBlaiC),
        }),
    });
});
var ot = n(383055),
    on = n(330001),
    ol = n(631576),
    oi = n(898578),
    os = n(148355),
    oa = n(845321);
let or = "749054660769218631";
function oo(e) {
    let { channel: t } = e,
        [n, l] = r.useState("");
    r.useEffect(() => {
        (0, ol.zk)("847199849233514549", !0);
    }, []);
    let i = (0, u.bG)(
            [eC.A, eh.default],
            () =>
                !!ld()(eC.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== eh.default.getId() && e.state === es.cmJ.SENT && !(0, tt.A)(e)),
        ),
        s = (0, u.bG)([l0.default], () => l0.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        o = n9.Ay.useName(s) ?? eG.intl.string(eG.t.y1Wu2f),
        c = (0, u.bG)([oi.A], () => oi.A.getStickerById(or)),
        d = r.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    ((0, on.W)({ channelId: t.id, source: "In-channel greet" }), await y.A.sendGreetMessage(t.id, or));
                } catch (e) {
                    e.ok || 429 !== e.status || l(eG.intl.string(eG.t.Whhv4w));
                }
        }, [t.id, n]),
        h = eG.intl.formatToPlainString(eG.t.m0zYbV, { username: o }),
        m =
            null != n && "" !== n
                ? (0, a.jsx)(ev.E, {
                      className: oa.z3,
                      color: "text-feedback-critical",
                      variant: "body-sm/normal",
                      children: n,
                  })
                : null;
    return i
        ? (0, a.jsxs)("div", {
              className: oa.ft,
              children: [
                  (0, a.jsxs)(ey.D, {
                      className: null != n && "" !== n ? oa.AO : oa.Iq,
                      "aria-label": eG.intl.string(eG.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, a.jsx)(os.A, { sticker: c, size: 24 }),
                          (0, a.jsx)(ev.E, { className: oa.Qq, variant: "body-md/medium", children: h }),
                      ],
                  }),
                  m,
              ],
          })
        : (0, a.jsxs)("div", {
              className: oa.nj,
              children: [
                  (0, a.jsx)(os.A, { sticker: c, size: 160, className: oa.Xr }),
                  (0, a.jsx)(eB.$, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: d,
                      disabled: !!n,
                      text: h,
                  }),
                  m,
              ],
          });
}
var oc = n(900210),
    od = n(626360);
function ou(e) {
    return null != e && e.type === es.TZK.MESSAGE && e.content.id === e.groupId;
}
function oh(e) {
    return (
        e.type === es.TZK.MESSAGE_GROUP_BLOCKED ||
        e.type === es.TZK.MESSAGE_GROUP_IGNORED ||
        e.type === es.TZK.MESSAGE_GROUP_SPAMMER ||
        e.type === es.TZK.MESSAGE_GROUP_SUSPENDED_USER ||
        e.type === es.TZK.MESSAGE_GROUP_UNLINKED_GAME_PLAYERS
    );
}
let om = r.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: i, compact: s } = e;
    return (0, a.jsx)(r6.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new r4.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: es.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, a.jsx)(iR.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var og = n(33176);
let op = { bottom: 16 },
    oA = (0, k.P)(x);
function of(e) {
    let t,
        n,
        l,
        i,
        {
            className: s,
            messageGroupSpacing: o,
            scrollerClassName: h,
            channel: m,
            messages: g,
            unreadCount: p,
            showNewMessagesBar: A,
            messageDisplayCompact: f,
            channelStream: C,
            uploads: E,
            hasUnreads: x,
            editingMessageId: T,
            fontSize: N,
            keyboardModeEnabled: M,
            filterAfterTimestamp: R,
            showingQuarantineBanner: D,
            hideSummaries: k = !1,
            jumpBarClassName: L,
            typingGradient: G,
            isGameInvitesPost: U,
        } = e,
        [w, F] = r.useState(lX.A.isAtBottom(m.id) ?? !0),
        H = (0, P.Ay)(m),
        K = (0, l3.I)(f, N),
        V = f ? K : Math.round(0.87 * K),
        z = Math.max(1, Math.round((V / 30) * 8)),
        W = r.useMemo(
            () =>
                (function (e) {
                    let {
                        compact: t,
                        messageGroups: n,
                        groupRange: l,
                        attachments: i,
                        fontSize: s,
                        groupSpacing: a,
                    } = e;
                    if (i > n)
                        throw Error(`generateMessageSpecs: too many attachments relative to messageGroups: ${n}, ${i}`);
                    let r = s / es.hH7.FONT_SIZE_DEFAULT,
                        o = t ? 26 : 44,
                        c = t ? 26 : 22,
                        d = 0,
                        u = Array(n)
                            .fill(null)
                            .map(() => {
                                let e = ld().random(1, l);
                                return ((d += a * r), (d += o * r), (d += (e - 1) * c * r), e);
                            }),
                        h = u.map((e, t) => t),
                        m = [];
                    for (; m.length < i;) {
                        let e = { width: ld().random(140, 400), height: ld().random(100, 320) };
                        (m.push([h.splice(ld().random(0, h.length - 1), 1)[0], e]), (d += e.height + 6 * r));
                    }
                    return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                })({ compact: f, messageGroups: V, groupRange: 4, attachments: z, fontSize: N, groupSpacing: o }),
            [f, V, z, N, o],
        ),
        $ = (0, u.bG)([l$.A], () =>
            tE.A.can(es.xBc.READ_MESSAGE_HISTORY, m) ? null : l$.A.getViewingRolesTimestamp(m.getGuildId()),
        ),
        q = R ?? $,
        Z = g.hasMoreBefore && null == q,
        J = Z ? W.totalHeight : 0,
        X = g.hasMoreAfter ? W.totalHeight : 0,
        Y = (function (e) {
            let {
                    messages: t,
                    channel: n,
                    compact: l,
                    hasUnreads: i,
                    focusId: s,
                    topPlaceholderHeight: a,
                    bottomPlaceholderHeight: o,
                    canLoadMore: c = !0,
                    handleScrollToBottom: d,
                    handleScrollFromBottom: u,
                    additionalMessagePadding: h = 0,
                } = e,
                { windowId: m } = r.useContext(il.Ay),
                [g] = r.useState(
                    () =>
                        new id({
                            messages: t,
                            channel: n,
                            compact: l,
                            hasUnreads: i,
                            focusId: s,
                            topPlaceholderHeight: a,
                            bottomPlaceholderHeight: o,
                            canLoadMore: c,
                            windowId: m,
                            handleScrollToBottom: d,
                            handleScrollFromBottom: u,
                            additionalMessagePadding: h,
                        }),
                );
            return (
                g.getSnapshotBeforeUpdate(s),
                r.useLayoutEffect(() =>
                    g.mergePropsAndUpdate({
                        messages: t,
                        channel: n,
                        compact: l,
                        hasUnreads: i,
                        focusId: s,
                        topPlaceholderHeight: a,
                        bottomPlaceholderHeight: o,
                        canLoadMore: c,
                        windowId: m,
                        handleScrollToBottom: d,
                        handleScrollFromBottom: u,
                        additionalMessagePadding: h,
                    }),
                ),
                r.useLayoutEffect(() => () => g.cleanup(), [g]),
                g
            );
        })({
            messages: g,
            channel: m,
            compact: f,
            hasUnreads: x,
            focusId: T,
            topPlaceholderHeight: J,
            bottomPlaceholderHeight: X,
            canLoadMore: null == R,
            handleScrollToBottom: r.useCallback(() => F(!0), [F]),
            handleScrollFromBottom: r.useCallback(() => F(!1), [F]),
            additionalMessagePadding: 48,
        }),
        Q = (function (e) {
            let { scrollerRef: t, ...n } = e,
                l = (0, _.A)(() => {
                    let e = t.current;
                    return null == e
                        ? Promise.resolve()
                        : new Promise((t) => {
                              e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                          });
                }),
                i = (0, _.A)(() => {
                    let e = t.current;
                    return null == e
                        ? Promise.resolve()
                        : new Promise((t) => {
                              e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                          });
                }),
                s = r.useCallback(
                    (e) => {
                        if (!n.keyboardModeEnabled) return;
                        let l = t.current?.getScrollerNode()?.ownerDocument,
                            i = l?.querySelector(e);
                        null != i &&
                            t.current?.scrollIntoViewNode({ node: i, padding: 64, callback: () => i?.focus() });
                    },
                    [n.keyboardModeEnabled, t],
                ),
                a = r.useCallback(() => {
                    n.hasMoreAfter || eE._.dispatchToLastSubscribed(es.jej.TEXTAREA_FOCUS);
                }, [n.hasMoreAfter]),
                o = (0, l8.Ay)({
                    id: te.D,
                    preserveFocusPosition: !1,
                    setFocus: s,
                    isEnabled: n.keyboardModeEnabled && !n.isEditing,
                    scrollToStart: i,
                    scrollToEnd: l,
                    onNavigateNextAtEnd: a,
                }),
                c = r.useCallback(
                    (e) => {
                        let { atEnd: t = !1 } = e;
                        t ? o.focusLastVisibleItem() : o.focusFirstVisibleItem();
                    },
                    [o],
                );
            return ((0, l1.Vo)({ event: es.jej.FOCUS_MESSAGES, handler: c }), o);
        })({ scrollerRef: Y.ref, isEditing: null != T, keyboardModeEnabled: M, hasMoreAfter: g.hasMoreAfter }),
        {
            channelStreamMarkup: ee,
            newMessagesBar: et,
            jumpToPresentBar: en,
            forumPostActionBar: ea,
            pinnedFirstMessage: eo,
            safetyWarningBanner: ec,
        } = (function (e) {
            let t,
                n,
                l,
                i,
                {
                    channel: s,
                    messages: o,
                    unreadCount: c,
                    showNewMessagesBar: d,
                    messageDisplayCompact: h,
                    channelStream: m,
                    uploads: g,
                    loadMore: p,
                    scrollManager: A,
                    specs: f,
                    filterAfterTimestamp: C,
                    hasTopPlaceholders: E,
                    showingQuarantineBanner: x,
                    hideSummaries: I,
                    jumpBarClassName: S,
                    isGameInvitesPost: _,
                } = e,
                T = l0.default.getCurrentUser();
            function N() {
                return A.isInitialized() || o.ready;
            }
            let M = (0, r8.r)(s),
                R = m.some((e) => e.type === es.TZK.FORUM_POST_ACTION_BAR),
                D = (0, b.cI)(s),
                k = (0, u.bG)([lZ.A], () => lZ.A.shouldShowTopicsBar() && !I),
                L = (0, r$.l)(s.id),
                P = (0, rV.j)(s.id, rz.Rx),
                O = (0, ih.E)(s.id),
                G = (0, r5.A)(),
                U = (function (e, t) {
                    if (e.isDM() && null != t)
                        if (t.type === iS._j.STRANGER_DANGER)
                            return (0, a.jsx)(rZ, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else if (t.type === iS._j.LIKELY_ATO)
                            return (0, a.jsx)(iM, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else return (0, a.jsx)(rW, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                    return null;
                })(s, L ?? P ?? O),
                w = !s.isForumPost() || R || _ ? null : (0, a.jsx)(r_, { postId: s.id }),
                { firstMessage: F, loaded: H } = (0, lz.n5)(s, _),
                B =
                    _ && H
                        ? (0, a.jsx)(
                              rH,
                              {
                                  compact: h,
                                  channel: s,
                                  message: F,
                                  id: null != F ? (0, te.j)(s.id, F.id) : `deleted-${s.id}`,
                              },
                              F?.id ?? `deleted-${s.id}`,
                          )
                        : null,
                K = (0, iP.A)(s.id),
                V = (0, a6.W1)(s);
            ((t = e5.Sf.useSetting()),
                (n = (0, aF.bG)([j.Ay], () => j.Ay.useReducedMotion)),
                r.useEffect(() => {
                    function e(e) {
                        let { messageId: l, channelId: i, emoji: s, optimistic: a, reactionType: r } = e;
                        a ||
                            r !== aZ.v6.BURST ||
                            !t ||
                            n ||
                            (0, t3.on)({ channelId: i, messageId: l, emoji: s, key: oc.W.EXTERNAL });
                    }
                    return (
                        v.h.subscribe("MESSAGE_REACTION_ADD", e),
                        () => {
                            v.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                        }
                    );
                }, [t, n]));
            let z = null,
                W = [],
                $ = m.map((e, t) => {
                    if (e.type === es.TZK.DIVIDER) {
                        let n = null != e.unreadId;
                        return null != C
                            ? null
                            : e.isConversationChannelHeader
                              ? (0, a.jsx)(
                                    ik,
                                    { channel: s, scrollManager: A, flashKey: e.flashKey },
                                    `conversation-${e.contentKey ?? t}`,
                                )
                              : e.isSummaryDivider
                                ? (0, a.jsx)(
                                      r3,
                                      {
                                          index: t,
                                          item: e,
                                          channel: s,
                                          isBeforeGroup: null == e.content && ou(m[t + 1]),
                                      },
                                      `summary-divider-${e.contentKey ?? t}`,
                                  )
                                : (0, a.jsx)(
                                      n1.A,
                                      {
                                          isUnread: n,
                                          isBeforeGroup: null == e.content && ou(m[t + 1]),
                                          id: n ? n$.q4 : void 0,
                                          itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                          children: e.content,
                                      },
                                      `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                  );
                    }
                    if (e.type === es.TZK.FORUM_POST_ACTION_BAR)
                        return (0, a.jsx)(
                            r_,
                            {
                                parentChannelId: s.parent_id,
                                postId: s.id,
                                isLastItem: t + 1 === m.length,
                                isFirstMessage: !0,
                            },
                            `forum-post-action-bar-${s.id}`,
                        );
                    if (e.type === es.TZK.MESSAGE_GROUP_UNLINKED_GAME_PLAYERS)
                        return (0, a.jsx)(lt, { unreadId: n$.q4, messages: e, channel: s, compact: h }, e.key);
                    if (oh(e)) {
                        let t,
                            n = !0;
                        return (
                            e.type === es.TZK.MESSAGE_GROUP_BLOCKED
                                ? (t = eG.t["+FcYM/"])
                                : e.type === es.TZK.MESSAGE_GROUP_IGNORED
                                  ? (t = eG.t["VFWjc+"])
                                  : e.type === es.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                    ? ((t = eG.t.rHRovo), (n = !1))
                                    : (t = eG.t.xfkfTK),
                            (0, a.jsx)(
                                n7,
                                {
                                    unreadId: n$.q4,
                                    messages: e,
                                    channel: s,
                                    compact: h,
                                    collapsedReason: t,
                                    canUncollapse: n,
                                },
                                e.key,
                            )
                        );
                    }
                    if (null != C && C > e.content.timestamp.getTime()) return;
                    e.type === es.TZK.MESSAGE && null == z && (z = e);
                    let n = e.groupId === z?.groupId ? z.content.id : e.groupId,
                        l = V && e.content.isFirstMessageInForumPost(s),
                        i = e.type === es.TZK.THREAD_STARTER_MESSAGE ? nq : nJ;
                    return (0, a.jsx)(
                        i,
                        {
                            compact: h && !l,
                            channel: s,
                            message: e.content,
                            groupId: n,
                            flashKey: e.flashKey,
                            id: (0, te.j)(s.id, e.content.id),
                            isLastItem: t >= m.length - 1,
                            renderContentOnly: K || l,
                        },
                        e.content.id,
                    );
                });
            W.push(...$);
            let q = m[m.length - 1];
            if (
                (null != T &&
                    g.forEach((e, t) => {
                        let n = 0 === t && (0, er.l)(s, q, new r4.Ay({ type: es.lAJ.DEFAULT, author: T }));
                        W.push(
                            (0, a.jsx)(
                                om,
                                { file: e, channel: s, user: T, isGroupStart: n, compact: h },
                                `upload-${e.id}`,
                            ),
                        );
                    }),
                E)
            ) {
                o.length > 0 &&
                    (o.length > 1 &&
                        o.length < 120 &&
                        (function (e) {
                            let t = 0,
                                n = 0;
                            for (let l of e)
                                l.type !== es.TZK.DIVIDER &&
                                    (oh(l)
                                        ? (t += l.content.filter((e) => e.type !== es.TZK.DIVIDER).length)
                                        : (n += 1));
                            return t > n;
                        })(m) &&
                        W.unshift(
                            (0, a.jsx)(
                                oe,
                                {
                                    loading: o.loadingMore,
                                    onClick: () => p(!1, { pauseUntilUserScroll: !0, truncate: !1 }),
                                },
                                "load-more-before",
                            ),
                        ),
                    W.unshift((0, a.jsx)("div", { style: { height: 16, flex: "0 0 auto" } }, "buffer")));
                let { useReducedMotion: e } = j.Ay;
                ((e && N()) || !e) && W.unshift((0, a.jsx)(l7, { compact: h, ...f }, "has-more"));
            }
            if (
                (E || _ || W.unshift((0, a.jsx)(aM, { channel: s, showingBanner: x }, "empty-message")),
                o.hasMoreAfter && W.push((0, a.jsx)(l7, { compact: h, ...f }, "has-more-after")),
                !x && M && N() && W.push((0, a.jsx)(oo, { channel: s })),
                c > 0 && d && N())
            ) {
                let e,
                    t,
                    n = lY.Ay.getOldestUnreadTimestamp(s.id),
                    i = 0 !== n ? n : ei.default.extractTimestamp(s.id),
                    r = (0, el.ro)(new Date(), new Date(i));
                if (
                    (lY.Ay.isEstimated(s.id)
                        ? ((e = r ? eG.t.wvtbbG : eG.t.tHqbtg), (t = eG.t.vaPWFe))
                        : ((e = r ? eG.t["BctFH/"] : eG.t["3wXb9P"]), (t = eG.t["4H8ldG"])),
                    D && (0, b.Kc)(s) && G.includes(od.i.SUMMARIES))
                ) {
                    let n = lY.Ay.ackMessageId(s.id),
                        r = (function (e, t) {
                            let n = lZ.A.summaries(e) ?? [],
                                l = 0;
                            for (let e of n) ei.default.compare(e.endId, t) > 0 && (l += 1);
                            return l;
                        })(s.id, lY.Ay.getOldestUnreadMessageId(s.id));
                    if (
                        ((0, iu.zV)(es.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                            num_unread_summaries: r,
                            num_unread_messages: c,
                            last_ack_message_id: n,
                            summaries_enabled_by_user: k,
                            summaries_enabled_for_channel: (0, b.pk)(s),
                        }),
                        (0, b.pk)(s))
                    ) {
                        let n = k ? eG.intl.format(t, { count: c }) : eG.intl.format(e, { count: c, timestamp: i });
                        if (k) {
                            let e =
                                r > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(ev.E, {
                                                  variant: "body-sm/medium",
                                                  color: "currentColor",
                                                  children: eG.intl.format(t, { count: c }),
                                              }),
                                              (0, a.jsx)(rB.A, {
                                                  style: { paddingLeft: 8, paddingRight: 8 },
                                                  height: 4,
                                                  width: 4,
                                              }),
                                              (0, a.jsx)(ev.E, {
                                                  variant: "body-sm/medium",
                                                  color: "currentColor",
                                                  children: eG.intl.format(eG.t.CBftDc, { count: r }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(ev.E, {
                                          variant: "body-sm/medium",
                                          color: "currentColor",
                                          children: n,
                                      });
                            l = (0, a.jsx)(ot.OZ, { scrollManager: A, content: e, channel: s });
                        } else {
                            let e = (0, a.jsx)("div", {
                                style: { display: "flex", textTransform: "none", alignItems: "center" },
                                children:
                                    r > 0
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(ev.E, {
                                                      variant: "body-sm/medium",
                                                      color: "currentColor",
                                                      children: eG.intl.format(t, { count: c }),
                                                  }),
                                                  (0, a.jsx)(rB.A, {
                                                      style: { paddingLeft: 8, paddingRight: 8 },
                                                      height: 4,
                                                      width: 4,
                                                  }),
                                                  (0, a.jsx)(ev.E, {
                                                      variant: "body-sm/medium",
                                                      color: "currentColor",
                                                      children: eG.intl.format(eG.t.CBftDc, { count: r }),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsx)(ev.E, {
                                              variant: "body-sm/medium",
                                              color: "currentColor",
                                              children: n,
                                          }),
                            });
                            l = (0, a.jsx)(ot.GN, { content: e, channelId: s.id });
                        }
                    }
                } else
                    G.includes(od.i.NEW_MESSAGES) &&
                        (l = (0, a.jsx)(ot.GN, {
                            content: eG.intl.format(e, { count: c, timestamp: i }),
                            channelId: s.id,
                        }));
            }
            if (
                (null == l &&
                    (0, b.pk)(s) &&
                    k &&
                    G.includes(od.i.SUMMARIES) &&
                    (l = (0, a.jsx)(ot.UK, { channel: s, scrollManager: A })),
                o.error)
            )
                i = (0, a.jsx)(ot.Ez, {
                    loading: o.loadingMore,
                    onClick: () => {
                        var e;
                        return (
                            (e = s.id),
                            void y.A.fetchMessages({
                                channelId: e,
                                limit: (0, l3.h)("renderStream.reload"),
                                truncate: !0,
                            })
                        );
                    },
                    className: S,
                });
            else if (o.hasMoreAfter && N()) {
                let { jumpReturnTargetId: e } = o;
                i =
                    o.loadingMore && o.jumpedToPresent
                        ? (0, a.jsx)(ot.Ab, { className: S })
                        : null != e
                          ? (0, a.jsx)(ot.Ab, {
                                type: ot.ks.REPLY,
                                onClick: () => {
                                    y.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                },
                                className: S,
                            })
                          : (0, a.jsx)(ot.Ab, {
                                onClick: () => {
                                    let e;
                                    return (
                                        y.A.jumpToPresent(s.id, (0, l3.h)("renderStream.jumpToPresent")),
                                        (e = r7.Ay.getChannelId()),
                                        void (s.id === e && (0, rK.iN)(s.id))
                                    );
                                },
                                className: S,
                            });
            }
            return {
                channelStreamMarkup: W,
                newMessagesBar: l,
                jumpToPresentBar: i,
                forumPostActionBar: w,
                pinnedFirstMessage: B,
                safetyWarningBanner: U,
            };
        })({
            channel: m,
            messages: g,
            unreadCount: p,
            showNewMessagesBar: A,
            messageDisplayCompact: f,
            channelStream: C,
            uploads: E,
            loadMore: Y.loadMore,
            scrollManager: Y,
            specs: W,
            hasTopPlaceholders: Z,
            filterAfterTimestamp: q,
            showingQuarantineBanner: D,
            hideSummaries: k,
            jumpToPresent: function () {
                g.hasPresent()
                    ? Y.ref.current?.scrollToBottom({ animate: !j.Ay.useReducedMotion })
                    : y.A.jumpToPresent(m.id, K);
            },
            jumpBarClassName: L,
            isGameInvitesPost: U,
        });
    ((t = Y.ref),
        (n = r.useCallback(() => t.current?.scrollToBottom(), [t])),
        (l = r.useCallback(() => {
            (Y.handleUserScrollGesture(), t.current?.scrollPageUp({ animate: !j.Ay.useReducedMotion }));
        }, [Y, t])),
        (i = r.useCallback(() => {
            (Y.handleUserScrollGesture(), t.current?.scrollPageDown({ animate: !j.Ay.useReducedMotion }));
        }, [Y, t])),
        (0, l1.Vo)({ event: es.jej.SCROLLTO_PRESENT, handler: n }),
        (0, l1.Vo)({ event: es.jej.SCROLL_PAGE_UP, handler: l }),
        (0, l1.Vo)({ event: es.jej.SCROLL_PAGE_DOWN, handler: i }));
    let ed = (0, I.R7)(),
        { ref: eu, ...eh } = (0, d.LT)(Q),
        em = r.useRef(null),
        eg = r.useMemo(() => ({ ref: em, padding: op }), []),
        ep = (0, _.A)((e) => {
            let t = e?.getScrollerNode() ?? null;
            ((Y.ref.current = e), (eu.current = t), (em.current = t));
        }),
        eA = (0, u.bG)([O.A], () => O.A.gradientPreset),
        ef = e5.eh.useSetting().customUserThemeSettings,
        eC = (0, lJ.V)(),
        ex = (0, lW.Q)(),
        eI = null != eA || (null != ef && !eC) || null != ex,
        eS = r.useMemo(() => (G ? (w ? og.gA : og.ru) : og.Zd), [G, w]),
        ey = r.useMemo(() => (G ? (w ? og.cz : og.XF) : og.U6), [G, w]);
    return (0, a.jsxs)(d.hD, {
        navigator: Q,
        children: [
            eo,
            null != ec && ec,
            (0, a.jsxs)("div", {
                className: c()(og.Og, s, `group-spacing-${o}`),
                children: [
                    null == ec && et,
                    (0, a.jsxs)(B, {
                        channel: m,
                        scrollManager: Y,
                        children: [
                            (0, a.jsx)(oA, {
                                ref: ep,
                                customTheme: !0,
                                className: c()(h, og.XG, eI ? ey : void 0),
                                contentClassName: og.gT,
                                onResize: Y.handleResize,
                                onScroll: Y.handleScroll,
                                onMouseDown: Y.handleMouseDown,
                                onMouseUp: Y.handleMouseUp,
                                onWheel: Y.handleUserScrollGesture,
                                onTouchMove: Y.handleUserScrollGesture,
                                onKeyDown: Y.handleKeyDown,
                                ...ed,
                                tabIndex: -1,
                                role: "group",
                                children: (0, a.jsxs)(S.W.Provider, {
                                    value: eg,
                                    children: [
                                        ea,
                                        (0, a.jsxs)("ol", {
                                            className: og.bv,
                                            "aria-label": eG.intl.formatToPlainString(eG.t.XarRiL, {
                                                channelName: H ?? "",
                                            }),
                                            ...eh,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: og.$4,
                                                    id: "messagesNavigationDescription",
                                                    "aria-hidden": !0,
                                                    children: eG.intl.string(eG.t["Spb3s/"]),
                                                }),
                                                ee,
                                                (0, a.jsx)("div", {
                                                    className: c()({
                                                        [og.lB]: !D,
                                                        [og.Ie]: 0 === g.length && !g.loadingMore,
                                                        [og.Fb]:
                                                            1 === g.length &&
                                                            !g.loadingMore &&
                                                            m.isForumPost() &&
                                                            g.first()?.isFirstMessageInForumPost(m),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            eI ? null : (0, a.jsx)("div", { className: eS }),
                            en,
                            (0, a.jsx)(lK, { channel: m, scrollManager: Y }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let oC = r.memo(function (e) {
    let {
            channel: t,
            showingQuarantineBanner: n,
            hideSummaries: l = !1,
            forceCompact: i = !1,
            forceCozy: s = !1,
            typingGradient: o = !1,
            ...c
        } = e,
        {
            canManageMessages: d,
            permissionVersion: h,
            canChat: m,
        } = (function (e) {
            let t = e.getGuildId(),
                n = (0, u.bG)([tC.A], () => null == t || tC.A.canChatInGuild(t), [t]),
                { canManageMessages: l, permissionVersion: i } = (0, u.cf)(
                    [tE.A],
                    () => ({
                        canManageMessages: tE.A.can(es.xBc.MANAGE_MESSAGES, e),
                        permissionVersion: null != t ? tE.A.getGuildVersion(t) : null,
                    }),
                    [e, t],
                );
            return { canChat: n, permissionVersion: i, canManageMessages: l };
        })(t),
        {
            messageGroupSpacing: g,
            fontSize: p,
            messageDisplayCompact: A,
            renderSpoilers: f,
            keyboardModeEnabled: C,
        } = (function () {
            let e = e5.hH.useSetting(),
                t = e5.gs.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: l,
                    keyboardModeEnabled: i,
                } = (0, u.cf)([j.Ay], () => {
                    let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = j.Ay;
                    return { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n };
                });
            return {
                messageGroupSpacing: n,
                messageDisplayCompact: e,
                renderSpoilers: t,
                fontSize: l,
                keyboardModeEnabled: i,
            };
        })(),
        {
            messages: E,
            channelStream: x,
            oldestUnreadMessageId: I,
            editingMessageId: S,
            isGameInvitesPost: y,
        } = (function (e) {
            var t, n;
            let l,
                i = (0, u.bG)([eC.A], () => eC.A.getMessages(e.id), [e.id]),
                s = (0, u.bG)([lY.Ay], () => lY.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                { enabled: a } = en.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                o = l0.default.getUser(eh.default.getId())?.hasFlag(es.nhx.SPAMMER) ?? !1,
                c = (0, b.cI)(e),
                d = (0, lV.A)("use_topic_dividers_in_chat"),
                h = (0, u.yK)([lZ.A], () => (c && d ? (lZ.A.summaries(e.id) ?? []) : []), [c, e.id, d]),
                m = (0, u.bG)([lZ.A], () => (c ? lZ.A.selectedSummary(e.id) : null), [c, e.id]),
                g = ((t = e.id), (0, u.bG)([w.A], () => w.A.getConversation(t) ?? void 0, [t])),
                p =
                    ((n = i),
                    (l = r.useMemo(() => {
                        let e = new Set();
                        return (
                            n.forEach((t) => {
                                null != t.applicationId && null == t.application && e.add(t.applicationId);
                            }),
                            Array.from(e)
                        );
                    }, [n])),
                    (0, L.A)(l));
            !(function (e, t) {
                let [n, l] = (function (e, t) {
                    let [n, l] = r.useMemo(
                            () =>
                                (function (e, t) {
                                    if (!t.isPrivate()) return [D, R];
                                    let n = e.filter((e) => e.application?.id != null && e.activity?.party_id != null),
                                        l = n.map((e) => e.id);
                                    return [n, l];
                                })(e, t),
                            [e, t],
                        ),
                        i = (0, u.yK)(
                            [N.A],
                            () => {
                                let e = [];
                                return (
                                    n.forEach((t) => {
                                        null !=
                                            N.A.findActivity(
                                                t.author.id,
                                                (e) =>
                                                    e.application_id === t.application?.id &&
                                                    e.party?.id === t.activity?.party_id,
                                                null,
                                                !0,
                                            ) && e.push(t.id);
                                    }),
                                    e
                                );
                            },
                            [n],
                        );
                    return [
                        l,
                        r.useMemo(
                            () =>
                                (function (e, t) {
                                    if (0 === e.length) return M;
                                    let n = [];
                                    return (
                                        e.forEach((e) => {
                                            let l = e.application?.id,
                                                i = e.activity?.party_id;
                                            if (e.id in t || null == l || null == i) return;
                                            let s = e.timestamp.getTime(),
                                                a = {
                                                    userId: e.author.id,
                                                    applicationId: l,
                                                    partyId: i,
                                                    messageId: e.id,
                                                    channelId: e.channel_id,
                                                    inviteTime: s,
                                                };
                                            n.push(a);
                                        }),
                                        n
                                    );
                                })(n, i),
                            [n, i],
                        ),
                    ];
                })(e, t);
                r.useEffect(() => {
                    for (let e of l)
                        T.A.isSubscribed(e) || v.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                }, [l]);
            })(i, e);
            let A = (0, lz.YG)(e),
                f = r.useMemo(
                    () =>
                        (function (e) {
                            let t,
                                n,
                                l,
                                {
                                    channel: i,
                                    messages: s,
                                    oldestUnreadMessageId: a,
                                    treatSpam: r,
                                    summaries: o,
                                    selectedSummary: c,
                                    selectedConversation: d,
                                    pinFirstMessage: u = !1,
                                } = e,
                                h = [],
                                m = !1,
                                g = null != a ? ei.default.extractTimestamp(a) : null,
                                p = null;
                            return (
                                !u &&
                                    i.isForumPost() &&
                                    !s.hasMoreBefore &&
                                    !s.first()?.isFirstMessageInForumPost(i) &&
                                    h.push({ type: es.TZK.FORUM_POST_ACTION_BAR }),
                                s.forEach((e) => {
                                    var A, f;
                                    let C, E, x;
                                    if (u && e.isFirstMessageInForumPost(i)) return;
                                    if (null != o && o.length > 0) {
                                        let t = ei.default.extractTimestamp(e.id);
                                        for (let e = 0; e < o.length; e++) {
                                            if (null == o[e]) continue;
                                            let n = ei.default.extractTimestamp(o[e].startId),
                                                l = ei.default.extractTimestamp(o[e].endId);
                                            if (t >= n && t <= l) {
                                                if (p === o[e].id) break;
                                                (h.push({
                                                    type: es.TZK.DIVIDER,
                                                    content: o[e].topic,
                                                    contentKey: o[e].id,
                                                }),
                                                    (p = o[e].id));
                                                break;
                                            }
                                        }
                                    }
                                    let I = (0, el.i$)(e.timestamp, "LL");
                                    I !== t &&
                                        null == p &&
                                        (h.push({ type: es.TZK.DIVIDER, content: I, contentKey: I }), (t = I));
                                    let S = h[h.length - 1],
                                        y = null,
                                        b = (0, eo.kf)(e);
                                    m = m || b;
                                    let _ = ef(i, e, b && r);
                                    (null !== _ &&
                                        ([y, S] =
                                            ((E = A = S),
                                            null == A || A.type !== _
                                                ? ((C = { type: _, content: [], key: e.id }), h.push(C))
                                                : (E = (C = A).content[C.content.length - 1]),
                                            [C, E])),
                                    a === e.id && null != g)
                                        ? (null != S && S.type === es.TZK.DIVIDER
                                              ? (S.unreadId = e.id)
                                              : null !== y
                                                ? ((f = y),
                                                  e.isFirstMessageInForumPost(i) ||
                                                      f.content.push({ type: es.TZK.DIVIDER, unreadId: e.id }),
                                                  (f.hasUnread = !0))
                                                : e.isFirstMessageInForumPost(i) ||
                                                  h.push({ type: es.TZK.DIVIDER, unreadId: e.id }),
                                          (g = null))
                                        : null != g &&
                                          ei.default.extractTimestamp(e.id) > g &&
                                          (e.isFirstMessageInForumPost(i) ||
                                              h.push({ type: es.TZK.DIVIDER, unreadId: e.id }),
                                          (g = null));
                                    let j =
                                        null !=
                                        (x = (function (e, t) {
                                            if (ep.get(t.id) === e.id) return eA(e, t.id);
                                            if (
                                                null == e.applicationId ||
                                                !(0, ed.Lt)(e.flags, es.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                !t.isDM() ||
                                                e.author.id === eh.default.getId() ||
                                                null != e.activity ||
                                                (0, ed.Lt)(t.recipientFlags ?? 0, ec.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
                                                ep.has(t.id)
                                            )
                                                return null;
                                            let n = eA(e, t.id);
                                            ep.set(t.id, e.id);
                                            let l = (0, ed.lA)(
                                                t.recipientFlags ?? 0,
                                                ec.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                !0,
                                            );
                                            return (eu.A.updatePrivateChannelRecipientFlags(t.id, l), n);
                                        })(e, i))
                                            ? { message: x, position: "before" }
                                            : null;
                                    null != j &&
                                        "before" === j.position &&
                                        h.push({ type: es.TZK.MESSAGE, content: j.message, groupId: j.message.id });
                                    let v = S?.type === es.TZK.MESSAGE ? l : S;
                                    (0, er.l)(i, v, e) && (n = e.id);
                                    let T = {
                                        type:
                                            e.type === es.lAJ.THREAD_STARTER_MESSAGE
                                                ? es.TZK.THREAD_STARTER_MESSAGE
                                                : es.TZK.MESSAGE,
                                        content: e,
                                        groupId: n,
                                    };
                                    n === e.id && (l = T);
                                    let { jumpSequenceId: N, jumpFlash: M, jumpTargetId: R } = s;
                                    (M && e.id === R && null != N && (T.flashKey = N),
                                        s.jumpTargetId === e.id && (T.jumpTarget = !0),
                                        null != c &&
                                            e.id === c.startId &&
                                            c.count > 1 &&
                                            h.push({
                                                type: es.TZK.DIVIDER,
                                                content: c.topic,
                                                contentKey: c.startId,
                                                isSummaryDivider: !0,
                                            }),
                                        null != d &&
                                            e.id === d.startMessageId &&
                                            d.messageCount > 1 &&
                                            (h.push({
                                                type: es.TZK.DIVIDER,
                                                content: d.title,
                                                contentKey: `conv-start-${d.id}`,
                                                isConversationChannelHeader: !0,
                                                flashKey: T.flashKey,
                                            }),
                                            (T.flashKey = void 0)),
                                        null !== y
                                            ? (y.content.push(T), T.jumpTarget && (y.hasJumpTarget = !0))
                                            : h.push(T),
                                        e.isFirstMessageInForumPost(i) &&
                                            h.push({ type: es.TZK.FORUM_POST_ACTION_BAR }),
                                        null != j &&
                                            "after" === j.position &&
                                            h.push({ type: es.TZK.MESSAGE, content: j.message, groupId: j.message.id }),
                                        null != c &&
                                            e.id === c.endId &&
                                            c.count > 1 &&
                                            h.push({
                                                type: es.TZK.DIVIDER,
                                                contentKey: c.endId,
                                                isSummaryDivider: !0,
                                            }));
                                }),
                                m && (0, eo.iJ)(i) && en.trackExposure({ location: "416cc9_1" }),
                                h
                            );
                        })({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: s,
                            treatSpam: a && !o,
                            summaries: h,
                            selectedSummary: m,
                            selectedConversation: g,
                            pinFirstMessage: A,
                        }),
                    [i, e, s, a, h, m, g, p, o, A],
                );
            return {
                messages: i,
                channelStream: f,
                oldestUnreadMessageId: s,
                editingMessageId: (0, u.bG)([e6.A], () => e6.A.getEditingMessage(e.id)?.id),
                isGameInvitesPost: A,
            };
        })(t),
        _ = (0, l2.A)(f, d);
    return (0, a.jsx)(lq.Bs.Provider, {
        value: _,
        children: (0, a.jsx)(l5.t, {
            children: (0, a.jsx)(of, {
                ...c,
                messageGroupSpacing: g,
                showNewMessagesBar: !0,
                channel: t,
                messageDisplayCompact: !s && (i || A),
                messages: E,
                channelStream: x,
                permissionVersion: h,
                uploads: (0, u.bG)([lQ.A], () => lQ.A.getFiles(t.id), [t]),
                unreadCount: (0, u.bG)([lY.Ay], () => lY.Ay.getUnreadCount(t.id), [t]),
                hasUnreads: null != I,
                canChat: m,
                editingMessageId: S,
                fontSize: p,
                keyboardModeEnabled: C,
                showingQuarantineBanner: n,
                hideSummaries: l,
                typingGradient: o,
                isGameInvitesPost: y,
            }),
        }),
    });
});
