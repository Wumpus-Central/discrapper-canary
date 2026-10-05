let l, i;
n.d(t, { A: () => ou });
var s,
    a = n(477900),
    r = n(582128),
    o = n(503698),
    c = n.n(o),
    d = n(202091),
    u = n(837381),
    h = n(17928),
    m = n(446837),
    g = n(559106),
    p = n(448539),
    A = n(536804),
    f = n(789279),
    x = n(584648),
    C = n(6095);
let E = "u" < typeof window ? m.t : (window.ResizeObserver ?? m.t),
    S =
        ((s = c()(C.qZ, C.Vl)),
        (l = new Map()),
        (i =
            "u" < typeof document
                ? p.F
                : new E((e) => {
                      e.forEach((e) => {
                          let { target: t } = e;
                          l.get(t)?.(e);
                      });
                  })),
        r.forwardRef(function (e, t) {
            let {
                    children: n,
                    className: o,
                    onResize: d,
                    contentClassName: u,
                    onScroll: h,
                    dir: m = "ltr",
                    fade: E = !1,
                    customTheme: S = !1,
                    style: I,
                    ...j
                } = e,
                y = r.useRef(null),
                _ = r.useRef(null),
                [v, b] = r.useState(!1),
                { scrollerRef: T, getScrollerState: N } = (0, A.A)(),
                M = (0, f.A)(T);
            r.useImperativeHandle(
                t,
                () => ({
                    getScrollerNode: () => T.current,
                    isScrolling: () => null != y.current,
                    getScrollerState: N,
                    ...(0, x.A)(T, N, M),
                }),
                [T, N, M],
            );
            let R = r.useCallback(
                (e) => {
                    (null == y.current ? b(!0) : clearTimeout(y.current),
                        (y.current = setTimeout(() => {
                            ((y.current = null), b(!1));
                        }, 200)),
                        null != h && h(e));
                },
                [h],
            );
            return (
                r.useEffect(() => () => clearTimeout(y.current), []),
                (0, p.A)({ ref: T, key: "container", onUpdate: d, resizeObserver: i, listenerMap: l }),
                (0, p.A)({ ref: _, key: "content", onUpdate: d, resizeObserver: i, listenerMap: l }),
                (0, a.jsx)("div", {
                    ref: T,
                    className: c()(o, { [C.Rv]: E, [C.D8]: S, [s]: !0, [C.fs]: !0, [C.qw]: v && E }),
                    style: I,
                    dir: m,
                    onScroll: R,
                    ...j,
                    children: (0, a.jsx)(g.xp, {
                        containerRef: _,
                        children: (0, a.jsxs)("div", {
                            ref: _,
                            className: c()(u, C.Qs),
                            children: [n, v && (0, a.jsx)("div", { className: C.X3 })],
                        }),
                    }),
                })
            );
        }));
var I = n(312138),
    j = n(737992),
    y = n(148494),
    _ = n(432371),
    v = n(765548),
    b = n(775602);
n(321073);
var T = n(73153),
    N = n(911411),
    M = n(290863);
let R = [],
    D = [],
    L = [];
var k = n(429913),
    P = n(47167),
    O = n(147248),
    G = n(828488),
    U = n(623562),
    w = n(727011),
    F = n(120570),
    B = n(319365);
let H = r.createContext(null);
function K(e) {
    let { channel: t, scrollManager: n, children: l } = e,
        i = r.useRef(null),
        s = r.useRef(null),
        { isFocused: o, setIsFocused: c } = (0, B.D7)(),
        d = r.useCallback(
            async (e) => {
                (o && F.A.getSelectedConversationId(t.id) === e) ||
                    ((s.current = e),
                    await new Promise((l) => {
                        let i = () => {
                            (n.removeScrollCompleteCallback(i), l());
                        };
                        (n.addScrollCompleteCallback(i), (0, U.xI)(t.id, e));
                    }),
                    s.current === e && (s.current = null),
                    e === F.A.getSelectedConversationId(t.id) &&
                        (c(!0), w.X.trackFocusModeImpression({ channelId: t.id, conversationId: e })));
            },
            [t.id, n, c, o],
        ),
        u = r.useMemo(
            () => ({ bannerMeasurementRef: i, conversationJumpInProgressRef: s, selectAndFocusConversation: d }),
            [i, d],
        );
    return (0, a.jsx)(H.Provider, { value: u, children: l });
}
function V() {
    let e = r.useContext(H);
    if (null == e) throw Error("useConversationScroll must be used inside <ConversationScrollProvider>");
    return e;
}
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
var q = n(661531),
    Z = n(602853),
    J = n(717421),
    Y = n(689175),
    X = n(866323),
    Q = n(448761);
let ee = (0, n(600975).C)({
    kind: "user",
    id: "2021-12_inferno_spam_redaction",
    label: "Inferno Spam Redaction",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "Allow guild channel messages from spammers to be collapsed", config: { enabled: !0 } },
    ],
});
var et = n(58703),
    en = n(935208),
    el = n(857069),
    ei = n(694318);
n(938796);
var es = n(253506),
    ea = n(665260),
    er = n(704844),
    eo = n(280450),
    ec = n(320095),
    ed = n(963852),
    eu = n(652215);
let eh = new Map();
function em(e, t) {
    let n = (0, ed.Ay)({
            channelId: t,
            type: eu.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: eu.pr7.EPHEMERAL,
            state: eu.cmJ.SENT,
        }),
        l = (0, ec.rh)(n);
    return ((l.applicationId = e.applicationId), (l.timestamp = e.timestamp), l);
}
function eg(e, t, n) {
    if (Q.M.NON_COLLAPSIBLE.has(t.type));
    else if (t.hasFlag(eu.pr7.HIDDEN_SUSPENDED_USER)) return eu.TZK.MESSAGE_GROUP_SUSPENDED_USER;
    else if (t.blocked) return eu.TZK.MESSAGE_GROUP_BLOCKED;
    else if (t.ignored) return eu.TZK.MESSAGE_GROUP_IGNORED;
    else if ((0, ei.iJ)(e) && n) return eu.TZK.MESSAGE_GROUP_SPAMMER;
    return null;
}
var ep = n(232835),
    eA = n(625494),
    ef = n(181041);
function ex(e) {
    return (0, h.bG)([F.A], () => F.A.getSelectedConversation(e) ?? void 0, [e]);
}
var eC = n(446576),
    eE = n(26430),
    eS = n(866665),
    eI = n(939249),
    ej = n(53788),
    ey = n(922016),
    e_ = n(148795),
    ev = n(834730),
    eb = n(297264),
    eT = n(103557),
    eN = n(739187),
    eM = n(857250),
    eR = n(97483),
    eD = n(789645),
    eL = n(821609),
    ek = n(977110),
    eP = n(375708),
    eO = n(128904);
let eG = [
    { value: "not_useful", label: ek.default.HcSKAh },
    { value: "off_topic", label: ek.default["1cHvxU"] },
    { value: "missing_messages", label: ek.default.ZAJcv4 },
    { value: "misleading_title", label: ek.default.omVRS3 },
    { value: "inappropriate", label: ek.default.dRzDTy },
    { value: "too_cluttered", label: ek.default.wb6DmY },
    { value: "hard_to_use", label: ek.default.NUVZB6 },
    { value: "too_old", label: ek.default.kAFQd3 },
    { value: "other", label: ek.default.OSgZpc },
];
function eU(e) {
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
            (w.X.trackThumbsDownReasonSelected({
                channelId: t.id,
                conversationId: n.id,
                isFocusMode: l,
                reasons: Array.from(s),
                otherText: m && d.length > 0 ? d : null,
            }),
                (0, eN.P)((0, eM.o)(eP.intl.string(ek.default.xrEgG0), eR.Ck.SUCCESS)),
                i());
        }, [t.id, n.id, l, s, d, m, i]);
    return (0, a.jsxs)("div", {
        className: eO.oO,
        children: [
            (0, a.jsxs)("div", {
                className: eO.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: eO.TK,
                        children: [
                            (0, a.jsx)(eb.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eP.intl.string(ek.default.C3suOL),
                            }),
                            (0, a.jsx)(ev.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                className: eO.VA,
                                children: eP.intl.string(ek.default["Lp/NZo"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(eI.D, {
                        className: eO.b,
                        "aria-label": eP.intl.string(ek.default.HLYa5G),
                        onClick: i,
                        children: (0, a.jsx)(eD.P, { size: "xs", color: q.A.colors.ICON_STRONG }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: eO.Ip,
                role: "group",
                "aria-label": eP.intl.string(ek.default["Lp/NZo"]),
                children: eG.map((e) => {
                    let { value: t, label: n } = e;
                    return (0, a.jsx)(
                        eI.D,
                        {
                            className: c()(eO.jw, s.has(t) && eO.gM),
                            onClick: () => g(t),
                            children: (0, a.jsx)(ev.E, {
                                variant: "text-md/normal",
                                color: "text-strong",
                                children: eP.intl.string(n),
                            }),
                        },
                        t,
                    );
                }),
            }),
            m &&
                (0, a.jsxs)("div", {
                    className: eO.Su,
                    children: [
                        (0, a.jsx)(eT.f, {
                            value: d,
                            onChange: (e) => u(e.slice(0, 200)),
                            placeholder: eP.intl.string(ek.default["qQ/xHO"]),
                            maxLength: 200,
                            rows: 3,
                        }),
                        (0, a.jsxs)("div", {
                            className: eO.rP,
                            children: [
                                (0, a.jsx)(ev.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: eP.intl.string(ek.default.xZzxfK),
                                }),
                                (0, a.jsxs)(ev.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: [d.length, "/", 200],
                                }),
                            ],
                        }),
                    ],
                }),
            (0, a.jsx)(eL.$, {
                text: eP.intl.string(ek.default.boNboC),
                variant: "primary",
                fullWidth: !0,
                disabled: !h,
                onClick: p,
            }),
        ],
    });
}
var ew = n(808379);
function eF(e) {
    return c()(ew.FW, { [ew.Jl]: "positive" === e, [ew.vF]: "critical" === e });
}
function eB(e) {
    let { channel: t, conversation: n, actionsShifted: l, suppressBorder: i, onFocusToggle: s } = e,
        [o, d] = r.useState(!1),
        u = r.useRef(null),
        m = (0, h.bG)([ef.A], () => ef.A.getConversationFeedbackRating(t.id, n.id), [t.id, n.id]),
        { isFocused: g } = (0, B.D7)(),
        p = r.useCallback(() => d(!1), []),
        A = r.useCallback(() => {
            ((0, U.oq)(t.id, n.id, "up"),
                w.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !0, isFocusMode: g }));
        }, [t.id, n.id, g]),
        f = r.useCallback(() => {
            ((0, U.oq)(t.id, n.id, "down"),
                d(!0),
                w.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !1, isFocusMode: g }));
        }, [t.id, n.id, g]),
        x = r.useCallback(
            () => (0, a.jsx)(eU, { channel: t, conversation: n, isFocusMode: g, onClose: p }),
            [t, n, g, p],
        ),
        C = g ? eC.g : eE._,
        E = g ? eP.intl.string(ek.default.pDD8E1) : eP.intl.string(ek.default["o+pmGy"]),
        S = g ? eP.intl.string(ek.default.XaJ3qC) : eP.intl.string(ek.default.pU5Dut),
        I = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(eS.m, {
                    text: eP.intl.string(ek.default.sBwxOY),
                    children: (0, a.jsx)(eI.D, {
                        "aria-label": eP.intl.string(ek.default.vjJjMc),
                        onClick: A,
                        className: eF("up" === m ? "positive" : void 0),
                        children: (0, a.jsx)(ej.G, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
                (0, a.jsx)(ey.Y, {
                    targetElementRef: u,
                    shouldShow: o,
                    position: "bottom",
                    align: "right",
                    spacing: 8,
                    animation: ey.Y.Animation.FADE,
                    onRequestClose: p,
                    renderPopout: x,
                    children: () =>
                        (0, a.jsx)("div", {
                            ref: u,
                            children: (0, a.jsx)(eS.m, {
                                text: eP.intl.string(ek.default.tbhdqW),
                                children: (0, a.jsx)(eI.D, {
                                    "aria-label": eP.intl.string(ek.default.TGK5M0),
                                    onClick: f,
                                    className: eF("down" === m ? "critical" : void 0),
                                    children: (0, a.jsx)(e_.d, { color: "currentColor", size: "refresh_sm" }),
                                }),
                            }),
                        }),
                }),
                (0, a.jsx)(eS.m, {
                    text: E,
                    children: (0, a.jsx)(eI.D, {
                        "aria-label": S,
                        onClick: s,
                        className: eF(),
                        children: (0, a.jsx)(C, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
            ],
        });
    return (0, a.jsxs)("div", {
        className: c()(ew.zr, { [ew.e8]: i }),
        children: [
            (0, a.jsx)(ev.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: ew.DD,
                children: n.title,
            }),
            (0, a.jsx)("div", { className: c()(ew.o1, { [ew.jF]: l }), children: I }),
        ],
    });
}
var eH = n(599735);
function eK(e) {
    let { channel: t, conversation: n, requestDismiss: l } = e,
        i = r.useCallback(() => {
            l("return");
        }, [l]);
    return (0, a.jsx)("div", {
        className: eH.A,
        children: (0, a.jsx)(eB, { channel: t, conversation: n, onFocusToggle: i, suppressBorder: !0 }),
    });
}
var eV = n(284009),
    ez = n.n(eV),
    eW = n(807884),
    e$ = n(93474),
    eq = n(384231),
    eZ = n(959698),
    eJ = n(853145),
    eY = n(9842),
    eX = n(69282),
    eQ = n(976860),
    e0 = n(885386),
    e1 = n(734057),
    e2 = n(540999),
    e3 = n(580745),
    e4 = n(521427),
    e7 = n(375901),
    e8 = n(143413),
    e5 = n(763754),
    e6 = n(75668);
function e9(e) {
    let { children: t, className: n, flashKey: l } = e,
        [i, s] = r.useState(!1),
        o = r.useRef(null);
    return (
        r.useEffect(
            () => (
                s(!0),
                (o.current = window.setTimeout(() => {
                    s(!1);
                }, 2e3)),
                () => {
                    null != o.current && clearTimeout(o.current);
                }
            ),
            [l],
        ),
        (0, a.jsx)("div", { "data-flash": i, className: c()(e6.j, n), children: t })
    );
}
var te = n(491182),
    tt = n(860227),
    tn = n(537174),
    tl = n(837528),
    ti = n(516287),
    ts = n(843626),
    ta = n(294454),
    tr = n(857071),
    to = n(517997),
    tc = n(406704),
    td = n(747926),
    tu = n(54570),
    th = n(8880),
    tm = n(834942),
    tg = n(576705),
    tp = n(957565),
    tA = n(723702),
    tf = n(697470),
    tx = n(492841),
    tC = n(707985),
    tE = n(519222);
let tS = function (e, t, n) {
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
                    c = ep.A.getMessage(t, e),
                    d = e1.A.getChannel(t);
                if (null == c || null == d) return;
                let u = eo.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (tg.A.can(eu.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, tE.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, tA.isMac)() ? r : a) && tp.p5 && (n.preventDefault(), (0, tp.C)(c.content));
                        break;
                    case "e":
                        i && !d.isSystemDM() && (0, tf.A)(c, u) && (n.preventDefault(), (0, tE.u_)(d, c));
                        break;
                    case "p":
                        (i || o) && (0, tx.A)(c, d) && (n.preventDefault(), (0, tE.rS)(d, c, n));
                        break;
                    case "+":
                        (i || o) &&
                            (function (e) {
                                let t = null == e.guild_id || tm.A.canChatInGuild(e.guild_id),
                                    n = e0.jW.getSetting(),
                                    { disableReactionCreates: l } = (0, tC.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && tg.A.can(eu.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && tr.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, tc.jr)(e),
                                    });
                                return !l && n;
                            })(d) &&
                            (n.preventDefault(),
                            eA._.dispatchKeyed(eu.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || o) && (0, to.r)(d, c) && (n.preventDefault(), (0, tE.$b)(d, c, n));
                        break;
                    case "f":
                        (i || o) &&
                            (0, ts.p)(c) &&
                            (n.preventDefault(), (0, ta.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            th.A.isSpeakingMessage(t, e) ? (0, tu.pr)() : (0, tu.kP)(d, c));
                        break;
                    case "t":
                        if (i && (0, tc.D1)(d, c)) (n.preventDefault(), (0, td.Tv)(d, c, "Message Shortcut"));
                        else if (c.hasFlag(eu.pr7.HAS_THREAD)) {
                            let e = e1.A.getChannel(en.default.castMessageIdAsChannelId(c.id));
                            null != e && (i || o) && (n.preventDefault(), (0, td.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, tE.cl)(d, c));
                        break;
                    case "escape":
                        e3.A.isEditing(d.id, c.id) ? y.A.endEditMessage(d.id) : eA._.dispatch(eu.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var tI = n(754459),
    tj = n(439762),
    ty = n(824556),
    t_ = n(886737),
    tv = n(699352),
    tb = n(235227),
    tT = n(649852),
    tN = n.n(tT),
    tM = n(311283),
    tR = n(473935),
    tD = n(173936),
    tL = n(290136),
    tk = n(666492),
    tP = n(606096),
    tO = n(997146),
    tG = n(366605),
    tU = n(163328),
    tw = n(110384),
    tF = n(22231),
    tB = n(563119),
    tH = n(581925),
    tK = n(778492),
    tV = n(241326),
    tz = n(365199),
    tW = n(417270),
    t$ = n(565645),
    tq = n(812930),
    tZ = n(822123),
    tJ = n(7584),
    tY = n(635222),
    tX = n(969043),
    tQ = n(427209),
    t0 = n(743738),
    t1 = n(973196),
    t2 = n(649963),
    t3 = n(815807),
    t4 = n(429433),
    t7 = n(269073),
    t8 = n(738125),
    t5 = n(85109),
    t6 = n(71393),
    t9 = n(174459),
    ne = n(690521),
    nt = n(403362),
    nn = n(628691),
    nl = n(194085),
    ni = n(539206),
    ns = n(607399),
    na = n(460905);
function nr(e) {
    let { channel: t, message: n, togglePopout: l, renderEmojiPicker: i, shouldShow: s } = e,
        o = r.useRef(null);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: o,
        animation: ey.Y.Animation.FADE,
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
            (0, a.jsx)(nl.qv, { ref: o, label: eP.intl.string(eP.t.lfIHs4), icon: na.n, onClick: l }, "add-reaction"),
    });
}
var no = n(674447),
    nc = n(307731),
    nd = n(338373);
let nu = [tJ.Ay.getByName("100"), tJ.Ay.getByName("laughing"), tJ.Ay.getByName("sparkling_heart")].filter(nt.Vq);
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
        ariaLabel: eP.intl.string(eP.t.Lv7LxN),
    });
}
let ng = r.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, tZ.QZ)(t.guild_id).filter(
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
            let l = s.find((t) => (0, t3.i6)(t.emoji, (0, t3.jq)(e))),
                i = null != l ? eP.intl.string(eP.t.wunKKA) : eP.intl.string(eP.t.XVx5BN),
                r = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? eP.intl.formatToPlainString(eP.t.vjeruO, { emojiName: r })
                        : eP.intl.formatToPlainString(eP.t.L1JQwE, { emojiName: r });
            return (0, a.jsx)(
                nl.qv,
                {
                    tooltipText: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(ev.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: nd.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, a.jsx)(ev.E, {
                                variant: "text-xs/normal",
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
                            location: t2.qN.MESSAGE_HOVER_BAR,
                        });
                    },
                    children: (0, a.jsx)(t$.A, {
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
            canReact: u,
            canConfigureJoin: m,
            canReply: g,
            canStartThread: p,
            canViewThread: A,
            canForward: f,
            canManageOfficialMessages: x,
            isGuildOfficial: C,
            isExpanded: E,
            showMoreUtilities: S,
            showEmojiPicker: I,
            showMessageBookmarksActions: j,
            isMessageBookmark: _,
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
                d = (0, h.bG)([t6.A], () => t6.A.getGuild(t.guild_id), [t.guild_id]),
                u = (0, h.bG)([eo.default], () => eo.default.getId()),
                m = (0, tc.Id)(t),
                g = (0, tc.s5)(t),
                { firstMessage: p } = (0, h.bG)([tX.A], () => tX.A.getMessage(t.id), [t.id]),
                A = e0.jW.useSetting(),
                f = e0.Q_.useSetting(),
                x = (0, h.bG)([tm.A], () => null == t.guild_id || tm.A.canChatInGuild(t.guild_id), [t]),
                {
                    canManageMessages: C,
                    canAddNewReactions: E,
                    canSendMessages: S,
                } = (0, h.cf)(
                    [tg.A],
                    () => ({
                        canAddNewReactions: x && tg.A.can(eu.xBc.ADD_REACTIONS, t),
                        canManageMessages: tg.A.can(eu.xBc.MANAGE_MESSAGES, t),
                        canSendMessages: tg.A.can(eu.xBc.SEND_MESSAGES, t),
                    }),
                    [t, x],
                ),
                I = (0, t1.A)(),
                j = (0, to.u)(t, n) && !I,
                y = (0, tc.n)(t, n),
                _ = (0, tc.R)(n),
                v = (0, h.bG)([tr.A], () => null != t.guild_id && tr.A.isLurking(t.guild_id), [t]),
                T = c.id === u,
                N = (C || n.canDeleteOwnMessage(u)) && m && !eu.MRS.UNDELETABLE.has(n.type);
            (n.type === eu.lAJ.AUTO_MODERATION_ACTION && (N = N && C),
                t.isModeratorReportChannel() && (N = N && n.id !== p?.id && !(0, e8.A)(n)));
            let M = (0, nn.ul)(n),
                R = (0, tx.A)(n, t),
                D = !t.isSystemDM() && (0, tf.A)(n, u) && m && !g,
                { disableReactionCreates: L } = (0, tC.A)({
                    channel: t,
                    canChat: x,
                    renderReactions: A,
                    canAddNewReactions: E,
                    isLurking: v,
                    isActiveChannelOrUnarchivableThread: m,
                }),
                k =
                    t.type === eu.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(eu.GuildFeatures.NEWS) &&
                    S &&
                    (T || C) &&
                    (0, tq.A)(n),
                P = t.getGuildId(),
                O =
                    null != P &&
                    n.type === eu.lAJ.USER_JOIN &&
                    tg.A.canWithPartialContext(eu.xBc.MANAGE_GUILD, { guildId: P }),
                G = (0, ts.m)(n),
                U = (0, e4.kn)(n, t, "MessageHoverBar"),
                w = n.hasFlag(eu.pr7.IS_GUILD_OFFICIAL),
                F = (0, t7.jv)("message_utilities"),
                B = (0, h.bG)([t5.A], () => null != t5.A.getSavedMessage(t.id, n.id)),
                H = (0, tM.A)(a),
                K = (0, h.bG)([b.Ay], () => b.Ay.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: R,
                canEdit: D,
                canDelete: N,
                canReport: M,
                canReply: j,
                canStartThread: y,
                canViewThread: _,
                canForward: G,
                canManageOfficialMessages: U,
                isGuildOfficial: w,
                canCopy: tp.p5,
                hasDeveloperMode: f,
                canReact: !L && A,
                canPublish: k,
                canConfigureJoin: O,
                isExpanded: H && !K && !l && !i && !s,
                showEmojiPicker: l,
                showEmojiBurstPicker: i,
                showMoreUtilities: s,
                showMessageBookmarksActions: F,
                isMessageBookmark: B,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        M = r.useRef(null),
        R = r.useCallback(() => {
            (S ||
                t9.default.track(eu.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                v({ moreUtilities: !S }));
        }, [S, v, n]),
        D = r.useCallback(() => {
            v({ emojiPicker: !I });
        }, [I, v]),
        L = (0, tc.Id)(t),
        k = n.hasFlag(eu.pr7.CROSSPOSTED);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            E
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          l && T
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: eP.intl.string(eP.t.zBoHlf),
                                        icon: tR.L,
                                        onClick: (e) => (0, tE.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: eP.intl.string(eP.t.WqhZss),
                                        icon: tD.LinkIcon,
                                        onClick: () => (0, tE.S)(t, n),
                                    },
                                    "copy-link",
                                )
                              : null,
                          m
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: eP.intl.string(eP.t.NpHUi1),
                                        icon: tL.CircleQuestionIcon,
                                        onClick: () => (0, tE.vc)(t),
                                    },
                                    "configure",
                                )
                              : null,
                          L
                              ? (0, a.jsx)(
                                    nl.qv,
                                    { label: eP.intl.string(eP.t.RpE9k7), icon: tk.Q, onClick: () => (0, tE.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          j
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: _ ? eP.intl.string(eP.t.LHUP9D) : eP.intl.string(eP.t["9p3D9p"]),
                                        icon: _ ? tP.BookmarkIcon : tO.c,
                                        onClick: () => (_ ? (0, ni.r)(t, n) : (0, ni.w)(t, n, t8.r.MESSAGE_TOOLBAR)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          i
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: n.pinned ? eP.intl.string(eP.t["Bse+F/"]) : eP.intl.string(eP.t.CvQ18w),
                                        icon: tG.t,
                                        onClick: (e) => (0, tE.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          p && f
                              ? (0, a.jsx)(
                                    nl.qv,
                                    { label: eP.intl.string(eP.t.rBIGBL), icon: tU.y, onClick: () => (0, tE.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          g && c
                              ? (0, a.jsx)(
                                    nl.qv,
                                    {
                                        label: eP.intl.string(eP.t["5IEsGx"]),
                                        icon: tw.W,
                                        onClick: (e) => (0, tE.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            u
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          E
                              ? null
                              : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(ng, { channel: t, message: n }), (0, a.jsx)(nl.$$, {})],
                                }),
                          (0, a.jsx)(nr, {
                              togglePopout: D,
                              renderEmojiPicker: nx,
                              shouldShow: I,
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
                      { label: eP.intl.string(eP.t["5IEsGx"]), icon: tw.W, onClick: (e) => (0, tE.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            c
                ? (0, a.jsx)(
                      nl.qv,
                      { label: eP.intl.string(eP.t.bt75uw), icon: tF.PencilIcon, onClick: () => (0, tE.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, a.jsx)(
                      nl.qv,
                      { label: eP.intl.string(eP.t.I3ltXO), icon: tQ.A, onClick: () => (0, tE.Z4)(t, n) },
                      "forward",
                  )
                : null,
            p && !f
                ? (0, a.jsx)(
                      nl.qv,
                      { label: eP.intl.string(eP.t.rBIGBL), icon: tU.y, onClick: () => (0, tE.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !p && A
                ? (0, a.jsx)(
                      nl.qv,
                      { label: eP.intl.string(eP.t["39d0Wj"]), icon: tU.y, onClick: () => (0, tE.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            x
                ? (0, a.jsx)(
                      nl.qv,
                      {
                          label: C ? eP.intl.string(eP.t["2km5Gf"]) : eP.intl.string(eP.t["lE/PG3"]),
                          icon: C ? tB.$ : tH.L,
                          onClick: () => y.A.patchMessageGuildOfficial(t.id, n.id, !C),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, a.jsx)(
                      nl.qv,
                      {
                          label: k ? eP.intl.string(eP.t["1kWJAr"]) : eP.intl.string(eP.t.MFGE51),
                          icon: tK.k,
                          onClick: () => (0, tE.Le)(t, n),
                          disabled: k,
                      },
                      "publish",
                  )
                : null,
            s && E
                ? (0, a.jsx)(
                      nl.qv,
                      {
                          label: eP.intl.string(eP.t.oyYWHE),
                          icon: tV.TrashIcon,
                          onClick: (e) => (0, tE.RC)(t, n, e),
                          dangerous: !0,
                          separator: !E,
                      },
                      "delete",
                  )
                : null,
            E && s
                ? null
                : (0, a.jsx)(ey.Y, {
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
                      shouldShow: S,
                      onRequestClose: R,
                      position: "left",
                      align: "top",
                      animation: ey.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: i } = t;
                          return (0, a.jsx)(
                              nl.qv,
                              {
                                  ref: M,
                                  label: eP.intl.string(eP.t["UKOtz+"]),
                                  icon: tz.MoreHorizontalIcon,
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
        l = (0, h.bG)([e$.A], () => null != e$.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, t0.Bl)(n.interactionData));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !l &&
                i &&
                (0, a.jsx)(
                    nl.qv,
                    { label: eP.intl.string(eP.t["5911Lb"]), icon: tW.RetryIcon, onClick: () => (0, tE.Io)(t, n) },
                    "retry",
                ),
            (0, a.jsx)(
                nl.qv,
                { label: eP.intl.string(eP.t.oyYWHE), icon: tV.TrashIcon, onClick: (e) => (0, tE.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function nf(e) {
    let { type: t, emoji: n, channel: l, message: i, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, t3.jq)(n);
    "add" === t
        ? (0, t2.BB)(l.id, i.id, r, s, { burst: a })
        : (0, t2.et)({ channelId: l.id, messageId: i.id, emoji: r, location: s, options: { burst: a } });
}
function nx(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? eu.liQ.GUILD_CHANNEL : eu.liQ.DM_CHANNEL,
                section: (0, t3.sn)(e),
                object: eu.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, a.jsx)(t4.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (l) => {
            let { emoji: i, willClose: s, isBurst: a } = l;
            (nf({ type: "add", emoji: i, channel: e, message: t, location: t2.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? tN()(n, 150)() : n()));
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let nC = r.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, h.bG)([e3.A], () => e3.A.isEditing(t.id, n.id), [t.id, n.id]),
        r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === eu.cmJ.SEND_FAILED ? (0, a.jsx)(nA, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== eu.cmJ.SEND_FAILED ? (0, a.jsx)(np, { ...e }) : null;
        })(e);
    return s || (null == r && null == o)
        ? null
        : (0, a.jsx)("div", {
              className: c()(e.className, { [nd.kL]: !0, [nd.gN]: l, [nd.nK]: i }),
              onClick: nh,
              onContextMenu: nh,
              role: "group",
              "aria-label": eP.intl.string(eP.t.Lv7LxN),
              children: (0, a.jsxs)(nl.Ay, { className: e.innerClassName, children: [r, o] }),
          });
});
var nE = n(13673),
    nS = n(622868),
    nI = n(606049),
    nj = n(10364);
let ny = r.memo(function (e) {
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
            g = (0, tl.r4)(t.author.id, n.id),
            p = (0, tl.m)(t, n, o, d),
            A = (0, tl.Jo)(c, d),
            f = r.useCallback(() => {
                d({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 });
            }, [d]);
        return (0, a.jsx)(nS.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: h,
            author: u,
            compact: l,
            subscribeToGroupId: i,
            showTimestampOnHover: !s && l && t.type !== eu.lAJ.REPLY,
            renderPopout: nj.A,
            showAvatarPopout: c,
            showUsernamePopout: o,
            onClickAvatar: A,
            onClickUsername: p,
            onContextMenu: g,
            onPopoutRequestClose: f,
            roleIcon: m,
            enableScheduledBadge: !0,
        });
    }),
    n_ = r.memo(nI.A);
function nv(e) {
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
    if ((0, e8.A)(c)) return null;
    let p = c.id === h;
    return p || d || null != i
        ? (0, a.jsx)(ny, {
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
              id: (0, tt.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var nb = n(91624),
    nT = n(155718),
    nN = n(168186),
    nM = n(994500),
    nR = n(217424),
    nD = n(807081),
    nL = n(387408),
    nk = n(942075),
    nP = n(808829),
    nO = n(552691),
    nG = n(861464),
    nU = n(521981),
    nw = n(448368);
let nF = r.memo(function (e) {
    let {
            baseMessage: t,
            referencedMessage: n,
            channel: l,
            compact: i = !1,
            referencedUsernameProfile: s,
            referencedAvatarProfile: o,
            setPopout: c,
            isReplySpineClickable: d,
            showReplySpine: u,
        } = e,
        m = n.state === eY.a.LOADED ? n.message : void 0,
        g = (0, e5.X4)(m),
        p = (0, eq.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, eZ.U)(),
        f = r.useMemo(() => {
            if (null == m) return null;
            let e = (0, nL.A)(m);
            if (e.type === eu.lAJ.USER_JOIN)
                return (0, nD.$)(
                    eP.intl.formatToParts(nG.A.getSystemMessageUserJoin(e.id), {
                        username: null != g ? g.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === eu.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, nD.$)(
                    (0, nk.WC)({
                        username: null != g ? g.nick : e.author.username,
                        guildId: l?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === eu.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, nD.$)((0, nP.P)({ application: e?.application, username: g?.nick }));
            if (e.type === eu.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, nD.$)((0, nO.g6)({ application: e?.application, username: g?.nick }));
            if (e.type === eu.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, nD.$)((0, nO.uk)({ application: e?.application, username: g?.nick }));
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0, postProcessor: A ? t_.A : void 0 },
                    n = e.isFirstMessageInForumPost(l)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0, allowGameMentions: !0 }
                        : { ...t, formatInline: !0, allowHeading: p, allowList: p, allowGameMentions: !0 };
                return (0, nU.Ay)(e, n).content;
            }
            return null;
        }, [m, g, l, p, A]),
        { isReplyAuthorBlocked: x, isReplyAuthorIgnored: C } = (0, h.cf)(
            [nM.A],
            () => ({
                isReplyAuthorBlocked: null != m && nM.A.isBlockedForMessage(m),
                isReplyAuthorIgnored: null != m && nM.A.isIgnoredForMessage(m),
            }),
            [m],
        ),
        E = (0, tl.r4)(m?.author.id, l.id),
        S = (0, tl.Ck)(t, n, l),
        I = (0, tl.H9)(m, l, s, c),
        j = (0, tl.Ge)(o, c),
        y = r.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        _ = (0, e5.X4)(t);
    return (0, a.jsx)(nw.A, {
        repliedAuthor: g,
        baseMessage: t,
        channel: l,
        baseAuthor: _,
        referencedMessage: n,
        content: f,
        compact: i,
        isReplyAuthorBlocked: x,
        isReplyAuthorIgnored: C,
        showAvatarPopout: o,
        showUsernamePopout: s,
        renderPopout: nj.A,
        onClickAvatar: j,
        onClickUsername: I,
        onClickReply: S,
        onContextMenu: E,
        onPopoutRequestClose: y,
        isReplySpineClickable: d,
        showReplySpine: u,
    });
});
function nB(e) {
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
        (0, a.jsx)(nF, {
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
let nH = r.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: l = !1,
            interactionUsernameProfile: i,
            interactionAvatarProfile: s,
            interactionData: o,
            referencedUsernameProfile: c,
            referencedAvatarProfile: d,
            setPopout: u,
        } = e,
        { isInteractionUserBlocked: m, isInteractionUserIgnored: g } = (0, h.cf)(
            [nM.A],
            () => ({
                isInteractionUserBlocked: nM.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nM.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = (0, h.bG)([eY.A], () => eY.A.getMessageByReference(t?.messageReference)),
        A = (0, tl.r4)(t.interaction?.user.id, n.id),
        f = (0, tl.T0)(t.interaction, n, i, u),
        x = (0, tl.Yq)(s, u),
        C = (0, nN.Am)(t),
        E = C?.type === nT.G4.APPLICATION_COMMAND ? C.target_user?.id : void 0,
        S = (0, tl.r4)(E, n.id),
        I = (0, tl.I)(E, n, c, u),
        j = (0, tl.Ge)(d, u),
        y = (0, tl.U_)(o, u),
        _ = r.useCallback(() => {
            u({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [u]),
        v = r.useCallback(
            () =>
                nB({
                    message: t,
                    channel: n,
                    compact: l,
                    setPopout: u,
                    referencedAvatarProfile: d,
                    referencedUsernameProfile: c,
                    replyReference: t.messageReference,
                    replyMessage: p,
                    isReplySpineClickable: !1,
                    showReplySpine: !1,
                }),
            [n, l, t, d, p, c, u],
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
        onClickAvatar: x,
        onClickUsername: f,
        onClickCommand: y,
        onUserContextMenu: A,
        onClickTargetAvatar: j,
        onClickTargetUsername: I,
        onTargetUserContextMenu: S,
        onPopoutRequestClose: _,
        renderTargetMessage: v,
    });
});
var nK = n(270642),
    nV = n(381941);
function nz(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: i = !1,
        className: s,
    } = e;
    ez()(n.type === eu.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...r } = (0, u.rm)(e.id ?? ""),
        o = (0, h.bG)([eY.A], () => eY.A.getMessageByReference(l)),
        { popouts: d, setPopout: m } = (0, tI.A)(n.id, nV.Fd),
        g = (0, e5.Ay)(n),
        p = (0, tt.fF)(n),
        A = (0, tt.ZD)(n);
    if (null != o)
        switch (o.state) {
            case eY.a.LOADED:
                return (0, a.jsx)(nW, {
                    ...e,
                    viewingChannelId: n.channel_id,
                    message: o.message,
                    groupId: o.message.id,
                });
            case eY.a.NOT_LOADED:
            case eY.a.DELETED:
        }
    return (0, a.jsx)(te.A, {
        ...r,
        id: t,
        compact: i,
        className: c()(s, { [nE.iU]: !0, [nE.HJ]: !i, [nE.H4]: !0, [nE._A]: !0 }),
        childrenHeader: nv({ messageProps: e, setPopout: m, messagePopouts: d, replyReference: l, author: g }),
        childrenSystemMessage: (0, nK.A)(e),
        childrenMessageContent: null,
        "aria-labelledby": p,
        "aria-describedby": A,
        hasThread: !1,
        author: g,
    });
}
function nW(e) {
    let {
            id: t,
            message: n,
            message: { id: l, channel_id: i },
            channel: { guild_id: s },
            compact: o = !1,
            className: d,
            groupId: m,
            viewingChannelId: g,
        } = e,
        p = n.type === eu.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: A, ...f } = (0, u.rm)(e.id ?? ""),
        { isFocused: x, handleFocus: C, handleBlur: E } = (0, tl.G8)(A),
        { popouts: S, selected: I, setPopout: j } = (0, tI.A)(n.id, nV.Fd),
        y = e0.hD.useSetting(),
        _ = e0.rs.useSetting(),
        v = (0, h.bG)([eY.A], () => eY.A.getMessageByReference(p)),
        T = (0, eq.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: N,
            handleMouseLeave: M,
            isHovered: R,
        } = (0, tl.yp)({ groupId: m, message: n, defaultValue: I }),
        D = (0, h.bG)([b.Ay], () => b.Ay.keyboardModeEnabled),
        L = I || (D && x),
        k = L || R,
        P = (0, h.bG)([e2.A], () => e2.A.isDeveloper),
        {
            content: O,
            hasSpoilerEmbeds: G,
            hasBailedAst: U,
        } = (0, tj.A)(n, {
            hideSimpleEmbedContent: y && _,
            formatInline: !1,
            allowList: T,
            allowHeading: T,
            allowLinks: !0,
            allowDevLinks: P,
            previewLinkTarget: !0,
            viewingChannelId: g,
        }),
        w = tS(l, i, D),
        F = (0, e5.Ay)(n),
        B = (0, tt.fF)(n, m),
        H = (0, tt.ZD)(n),
        K = (0, a.jsx)(ti.x, { value: k, children: (0, nb.Ay)(e, O, !1) }),
        V = r.useCallback(() => (0, eQ.uh)(s, i, l), [s, i, l]),
        z = (0, eX.Xx)({ guildId: s, roleId: F.iconRoleId });
    return (0, a.jsxs)("div", {
        className: nE.m5,
        children: [
            (0, a.jsx)(eI.D, {
                className: nE.lA,
                onClick: V,
                "aria-label": eP.intl.string(eP.t.k5WiPf),
                children: eP.intl.string(eP.t.k5WiPf),
            }),
            (0, a.jsx)(te.A, {
                ...f,
                id: t,
                compact: o,
                className: c()(d, {
                    [nE.iU]: !0,
                    [nE.HJ]: !o,
                    [nE.mK]: n.mentioned,
                    [nE.M1]: (0, ec.ec)(n),
                    [nE.H4]: (0, e8.A)(n),
                    [nE._A]: n.id === m || n.type === eu.lAJ.REPLY,
                    [nE.wH]: L,
                }),
                zalgo: !0,
                onKeyDown: w,
                onFocus: C,
                onBlur: E,
                childrenRepliedMessage:
                    n.type === eu.lAJ.REPLY &&
                    nB({
                        ...e,
                        setPopout: j,
                        referencedUsernameProfile: S.referencedUsernameProfile,
                        referencedAvatarProfile: S.referencedAvatarProfile,
                        replyReference: p,
                        replyMessage: v,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: nv({
                    messageProps: e,
                    setPopout: j,
                    messagePopouts: S,
                    replyReference: p,
                    author: F,
                    repliedMessage: v,
                    roleIcon: z,
                }),
                childrenAccessories: (0, tv.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: G,
                    hasBailedAst: U,
                    isInteracting: k,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                }),
                childrenSystemMessage: (0, nK.A)(e),
                childrenMessageContent: K,
                onMouseMove: N,
                onMouseLeave: M,
                "aria-labelledby": B,
                "aria-describedby": H,
                hasThread: !1,
                author: F,
            }),
        ],
    });
}
let n$ = r.memo(function (e) {
    let t,
        n,
        {
            id: l,
            message: i,
            message: { id: s },
            channel: o,
            channel: { id: d },
            compact: m = !1,
            className: p,
            flashKey: A,
            groupId: f,
            renderContentOnly: x,
            hideInviteEmbedBanner: C,
            hideActivityInvite: E,
        } = e;
    ez()(i.type !== eu.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let S = eu.sl8.has(i.type) ? i.messageReference : void 0,
        { onFocus: I, ...j } = (0, u.rm)(e.id ?? ""),
        y = e0.hD.useSetting(),
        _ = e0.rs.useSetting(),
        v = (0, h.bG)([eY.A], () => eY.A.getMessageByReference(S)),
        { popouts: T, selected: N, setPopout: M } = (0, tI.A)(i.id, nV.Fd),
        R = (0, tl.VL)(i, o, M),
        D = (0, tl.ri)(i, o),
        {
            handleMouseEnter: L,
            handleMouseLeave: k,
            hasHovered: P,
            isHovered: O,
        } = (0, tl.yp)({ groupId: f, message: i, defaultValue: N }),
        { isFocused: G, hasFocused: U, handleFocus: w, handleBlur: F } = (0, tl.G8)(I),
        B = r.useCallback(
            (e) => {
                (w(e), L(e));
            },
            [w, L],
        ),
        H = r.useCallback(
            (e) => {
                (F(e), k());
            },
            [F, k],
        ),
        K = (0, h.bG)([e3.A], () => e3.A.isEditing(d, s), [d, s]),
        V = (0, h.bG)([b.Ay], () => b.Ay.keyboardModeEnabled),
        z = N || K || (V && G),
        W = z || O,
        $ = (0, h.bG)(
            [e1.A],
            () => i.hasFlag(eu.pr7.HAS_THREAD) && e1.A.getChannel(en.default.castMessageIdAsChannelId(i.id)),
        ),
        q = i.isFirstMessageInForumPost(o),
        Z = (0, eq.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        J = (0, h.bG)([e2.A], () => e2.A.isDeveloper),
        Y = (0, eZ.U)(),
        {
            content: X,
            hasSpoilerEmbeds: Q,
            hasBailedAst: ee,
        } = (0, tj.A)(i, {
            hideSimpleEmbedContent: y && _,
            formatInline: !1,
            allowList: q || Z,
            allowHeading: q || Z,
            allowLinks: !0,
            allowDevLinks: J,
            previewLinkTarget: !0,
            postProcessor: Y ? t_.A : void 0,
        }),
        et = tS(s, d, V),
        el = (0, e5.Ay)(i),
        ei = (0, h.bG)([eJ.A], () => eJ.A.getPendingReply(d)),
        es =
            ((t = r.useRef(A)),
            r.useEffect(() => {
                t.current = A ?? t.current;
            }),
            A ?? t.current),
        er = (0, eX.Xx)({ guildId: o.guild_id, roleId: el.iconRoleId }),
        eo = (0, eW.A)(d, s)?.color ?? null,
        ed = (0, tt.fF)(i, f),
        eh = (0, tt.ZD)(i),
        em = (0, h.bG)([e$.A], () => e$.A.getMessage(s), [s]),
        eg = (0, e4.bW)(o.guild_id, "ChatMessage"),
        ep = (0, tn.o)(),
        eA = (0, ty.A)({ message: i, channel: o, officialMessagesEnabled: eg }),
        ef = r.useRef(window),
        ex = null != em;
    ((n = i.type === eu.lAJ.CUSTOM_GIFT ? "" : !K && ex ? (0, tb.A)(e, X) : (0, nb.Ay)(e, X, K)),
        (n = (0, a.jsx)(ti.x, { value: W, children: n })));
    let eC = i.id === f,
        eE = (0, a.jsx)(g.vN, {
            offset: { left: 4, right: 4 },
            children: (0, a.jsx)("li", {
                id: l,
                className: nE.Nt,
                "aria-setsize": -1,
                style: null != eo ? { backgroundColor: eo } : void 0,
                children: (0, a.jsx)(te.A, {
                    ...j,
                    "aria-setsize": -1,
                    "aria-roledescription": eP.intl.string(eP.t.BAB0yK),
                    "aria-labelledby": ed,
                    "aria-describedby": eh,
                    onFocus: B,
                    onBlur: H,
                    onContextMenu: R,
                    onKeyDown: et,
                    onClick: D,
                    compact: m,
                    contentOnly: x,
                    className: c()(p, {
                        [nE.iU]: !0,
                        [nE.HJ]: !m,
                        [nE.mK]: i.mentioned,
                        [nE.M1]: (0, ec.ec)(i),
                        [nE.SH]: i.type === eu.lAJ.NITRO_NOTIFICATION,
                        [nE.Sg]: i.hasFlag(eu.pr7.IS_GUILD_OFFICIAL) && eg && !ep,
                        [nE.H4]: (0, e8.A)(i),
                        [nE._A]: !x && (eC || i.type === eu.lAJ.REPLY),
                        [nE.wH]: z,
                        [nE.$n]: ei?.message.id === i.id,
                        [nE.$w]: i.isCommandType() && i.state === eu.cmJ.SENDING,
                        [nE.DX]: ex,
                    }),
                    zalgo: !K,
                    childrenRepliedMessage:
                        x || i.type !== eu.lAJ.REPLY
                            ? void 0
                            : nB({
                                  ...e,
                                  setPopout: M,
                                  referencedUsernameProfile: T.referencedUsernameProfile,
                                  referencedAvatarProfile: T.referencedAvatarProfile,
                                  replyReference: S,
                                  replyMessage: v,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (function (e, t, n) {
                        let { message: l, channel: i, compact: s } = e;
                        return null != l.interaction && "" !== l.interaction.displayName
                            ? (0, a.jsx)(nH, { message: l, channel: i, compact: s, setPopout: t, ...n })
                            : null;
                    })(e, M, T),
                    childrenHeader: x
                        ? void 0
                        : nv({
                              messageProps: e,
                              setPopout: M,
                              messagePopouts: T,
                              replyReference: S,
                              author: el,
                              repliedMessage: v,
                              roleIcon: er,
                          }),
                    childrenAccessories: (0, tv.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: Q,
                        hasBailedAst: ee,
                        handleContextMenu: R,
                        isInteracting: W,
                        isAutomodBlockedMessage: ex,
                        hideInviteEmbedBanner: C,
                        hideActivityInvite: E,
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
                                      h = r.state === eu.cmJ.SENDING,
                                      m = r.id === c,
                                      g = (0, ea.Lt)(r.flags, eu.pr7.EPHEMERAL),
                                      p = r.state === eu.cmJ.SEND_FAILED;
                                  return h || (g && !p)
                                      ? null
                                      : (0, a.jsx)(nC, {
                                            className: nE.Uo,
                                            innerClassName: nE.Mc,
                                            isHeader: !d && m && !(0, e8.A)(r),
                                            isReply: !d && r.type === eu.lAJ.REPLY && null != r.messageReference,
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
                                  messageWindow: ef.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, nK.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: L,
                    onMouseLeave: k,
                    hasThread: !x && i.hasFlag(eu.pr7.HAS_THREAD) && null != $,
                    isSystemMessage: (0, e8.A)(i),
                    hasReply: i.type === eu.lAJ.REPLY,
                    messageRef: (e) => {
                        ((eA.current = e), (ef.current = e?.ownerDocument?.defaultView ?? window));
                    },
                    author: el,
                }),
            }),
        });
    return null != es
        ? (0, a.jsx)(
              e9,
              { flashKey: es, className: c()({ [nE.bB]: !0, [nE._A]: !m && i.id === f }), children: eE },
              `bg-flash-${l}`,
          )
        : eE;
});
n(801541);
var nq = n(889137),
    nZ = n(952270),
    nJ = n(428678),
    nY = n(353182),
    nX = n(922529),
    nQ = n(888675),
    n0 = n(845806);
function n1(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: s, canUncollapse: r = !0 } = e,
        o = (0, nq.YW)({ collapsedReason: s })
            .with({ collapsedReason: eP.t["VFWjc+"] }, () =>
                (0, a.jsx)(nZ.EyeSlashIcon, { size: "md", color: "currentColor", className: n0.Q6 }),
            )
            .with({ collapsedReason: eP.t["+FcYM/"] }, () =>
                (0, a.jsx)(nJ.K, { size: "md", color: "currentColor", className: n0.Q6 }),
            )
            .with({ collapsedReason: eP.t.rHRovo }, () =>
                (0, a.jsx)(nY._, { size: "md", color: "currentColor", className: n0.TG }),
            )
            .otherwise(() => (0, a.jsx)(eD.P, { size: "md", color: "currentColor", className: n0.Q6 }));
    return (0, a.jsx)(te.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, a.jsx)(nQ.A, {
            compact: i,
            className: n0.L9,
            iconNode: o,
            children: (0, a.jsxs)("div", {
                className: r ? n0.Fo : n0.GU,
                children: [
                    eP.intl.format(s, { count: l }),
                    r &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                " \u2014 ",
                                (0, a.jsx)(eI.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: n0.rB,
                                    children: t ? eP.intl.string(eP.t.fgq1gs) : eP.intl.string(eP.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let n2 = r.memo(function (e) {
    let { messages: t, channel: n, compact: l = !1, unreadId: i, collapsedReason: s, canUncollapse: o = !0 } = e,
        { hasJumpTarget: d = !1 } = t,
        [u, h] = r.useState(d && o),
        m = r.useCallback(() => {
            o && h((e) => !e);
        }, [o]);
    r.useEffect(() => {
        d && o && h(!0);
    }, [d, o]);
    let g = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, a.jsxs)("div", {
        className: c()({ [nE._A]: !0, [n0.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === eu.TZK.DIVIDER)
                ? (0, a.jsx)(nX.A, { isUnread: !0, id: i }, "divider")
                : null,
            (0, a.jsx)(
                n1,
                { count: g, compact: l, expanded: u, onClick: m, collapsedReason: s, canUncollapse: o },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === eu.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, a.jsx)(nX.A, { isUnread: !0, isBeforeGroup: e, id: i }, "divider");
                      }
                      if (e.type === eu.TZK.MESSAGE || e.type === eu.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === eu.TZK.THREAD_STARTER_MESSAGE ? nz : n$;
                          return (0, a.jsx)(
                              t,
                              {
                                  id: (0, e7.j)(n.id, e.content.id),
                                  className: n0.__invalid_blocked,
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
var n3 = n(114212),
    n4 = n(248432);
function n7(e) {
    let { isCollapsed: t, children: n } = e;
    return (0, a.jsx)("div", {
        className: c()(n4.dU, t && n4.yZ),
        children: (0, a.jsx)("div", { className: n4.JN, children: n }),
    });
}
let n8 = r.memo(function (e) {
    let { isOnTopic: t, isCollapsed: n, children: l } = e;
    return t ? l : (0, a.jsx)(n7, { isCollapsed: n, children: l });
});
var n5 = n(708510);
function n6(e) {
    return "group" in e;
}
let n9 = (0, a.jsxs)(a.Fragment, {
    children: [
        (0, a.jsx)(n3.Ay, { messages: 4, groupSpacing: 16, className: n5.Xb }),
        (0, a.jsx)(n3.Ay, { messages: 2, groupSpacing: 16, className: n5.Xb }),
        (0, a.jsx)(n3.Ay, { messages: 3, groupSpacing: 16, className: n5.Xb }),
    ],
});
function le(e) {
    let { channel: t, conversation: n, focusStream: l, isCollapsed: i } = e,
        s = (0, h.bG)([ef.A], () => ef.A.isConversationFetchPending(n.id, !0), [n]);
    return (0, a.jsxs)("div", {
        className: n5.XT,
        children: [
            (0, a.jsx)("ol", {
                className: n5.cl,
                children: l.map((e) => {
                    if (n6(e)) {
                        var n;
                        return (0, a.jsx)(
                            n8,
                            {
                                isOnTopic: e.isOnTopic,
                                isCollapsed: i,
                                children: (0, a.jsx)(n2, {
                                    messages: e.group,
                                    channel: t,
                                    unreadId: "",
                                    collapsedReason:
                                        (n = e.group.type) === eu.TZK.MESSAGE_GROUP_BLOCKED
                                            ? eP.t["+FcYM/"]
                                            : n === eu.TZK.MESSAGE_GROUP_IGNORED
                                              ? eP.t["VFWjc+"]
                                              : n === eu.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                                ? eP.t.rHRovo
                                                : eP.t.xfkfTK,
                                    canUncollapse: e.group.type !== eu.TZK.MESSAGE_GROUP_SUSPENDED_USER,
                                }),
                            },
                            e.group.key,
                        );
                    }
                    return (0, a.jsx)(
                        n8,
                        {
                            isOnTopic: e.isOnTopic,
                            isCollapsed: i,
                            children: (0, a.jsx)(n$, {
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
            s && n9,
        ],
    });
}
n(30146);
var lt = n(435558),
    ln = n.n(lt);
let ll = { tension: 240, friction: 30 },
    li = { tension: 320, friction: 28 },
    ls = { tension: 280, friction: 24, clamp: !0 },
    la = { tension: 170, friction: 22, clamp: !0 },
    lr = { tension: 220, friction: 28, clamp: !0 },
    lo = 6,
    lc = -3,
    ld = 9;
function lu(e) {
    return (188 - (6 * e + 36)) / 2;
}
var lh = n(419828);
async function lm(e) {
    let t = e.current,
        n = t?.getScrollerNode();
    null == t ||
        null == n ||
        n.scrollTop <= 5 ||
        (await new Promise((e) => {
            t.scrollTo({ to: 0, animate: !0, callback: () => e() });
        }));
}
function lg(e) {
    let { style: t, channel: n, conversation: l, scrollerRef: i, requestDismiss: s } = e,
        { isFocused: o } = (0, B.D7)(),
        { dismissReason: c } = W(),
        u = o ? ls : "navigation" === c ? lr : la,
        m = (0, Z.r)(q.A.colors.BORDER_SUBTLE).spring(),
        g = (0, Z.r)(q.A.colors.BORDER_SUBTLE).spring({ opacity: 0 }),
        {
            borderTopRadius: p,
            shadowAlpha: A,
            contentPadding: f,
        } = (0, J.z)(
            { borderTopRadius: o ? 12 : 8, shadowAlpha: 0.4 * !!o, contentPadding: 4 * !!o, config: u },
            "respect-motion-settings",
        ),
        { borderColor: x } = (0, J.z)({ borderColor: o ? m : g, config: u }, "respect-motion-settings"),
        [C, E] = r.useState(!0),
        S = r.useRef(null),
        I = r.useCallback(() => {
            let e = i.current;
            null != e &&
                (null != S.current && (S.current.style.opacity = String(Math.min(1, e.getDistanceFromTop() / 16))),
                E(e.getDistanceFromBottom() > 5));
        }, [i]),
        j = (0, h.bG)([ep.A], () => ep.A.getMessages(n.id), [n.id]),
        y = (0, h.bG)(
            [ef.A],
            () => {
                if (l?.id == null) return null;
                let e = ef.A.getConversationMetadata(n.id, l.id);
                return e?.fullyHydrated === !0 ? e.hydratedMessages : null;
            },
            [n.id, l],
        ),
        _ = r.useMemo(
            () =>
                null != l
                    ? (function (e, t, n, l) {
                          let i = (function (e, t, n) {
                                  let l = new Set(e.messageIds),
                                      i = [],
                                      s = new Set(),
                                      a = 0;
                                  if (
                                      (t.forEach((t) => {
                                          0 > en.default.compare(t.id, e.startMessageId) ||
                                              en.default.compare(t.id, e.endMessageId) > 0 ||
                                              (l.has(t.id)
                                                  ? i.push({ record: t, isOnTopic: !0 })
                                                  : a < 10 && (i.push({ record: t, isOnTopic: !1 }), a++),
                                              s.add(t.id));
                                      }),
                                      null != n)
                                  )
                                      for (let e of n)
                                          s.has(e.id) || (i.push({ record: e, isOnTopic: !0 }), s.add(e.id));
                                  return (i.sort((e, t) => en.default.compare(e.record.id, t.record.id)), i);
                              })(t, n, l),
                              s = [],
                              a = null,
                              r = "";
                          for (let t of i) {
                              (null == a || (0, el.A)(e, a, t.record)) && (r = t.record.id);
                              let n = eg(e, t.record, (0, ei.kf)(t.record));
                              if (null != n) {
                                  let e,
                                      l = s[s.length - 1];
                                  null != l && n6(l) && l.group.type === n
                                      ? (e = l)
                                      : ((e = { group: { type: n, content: [], key: t.record.id }, isOnTopic: !1 }),
                                        s.push(e));
                                  let i = { type: eu.TZK.MESSAGE, content: t.record, groupId: r };
                                  (e.group.content.push(i), t.isOnTopic && (e.isOnTopic = !0));
                              } else s.push({ record: t.record, isOnTopic: t.isOnTopic, groupId: r });
                              a = t.record;
                          }
                          return s;
                      })(n, l, j, y)
                    : [],
            [n, l, j, y],
        );
    return null == l
        ? null
        : (0, a.jsxs)(d.animated.div, {
              className: lh.Nr,
              style: {
                  top: t.cardTop,
                  bottom: 0,
                  left: t.cardInsetLeft,
                  right: t.cardInsetRight,
                  opacity: t.cardOpacity,
                  borderColor: x,
                  borderRadius: p.to((e) => `${e}px ${e}px 0 0`),
                  boxShadow: A.to((e) => `0 8px 24px rgba(0, 0, 0, ${e})`),
              },
              children: [
                  (0, a.jsx)(d.animated.div, { className: lh.sB, style: { opacity: t.bodyTintOpacity } }),
                  (0, a.jsx)(d.animated.div, {
                      style: { paddingTop: f, paddingLeft: f, paddingRight: f },
                      children: (0, a.jsx)(eK, { channel: n, conversation: l, requestDismiss: s }),
                  }),
                  (0, a.jsxs)("div", {
                      className: lh.gk,
                      children: [
                          (0, a.jsx)(Y.zC, {
                              className: lh.XG,
                              ref: i,
                              onScroll: I,
                              children: (0, a.jsxs)(d.animated.div, {
                                  style: { paddingLeft: f, paddingRight: f },
                                  children: [
                                      (0, a.jsx)(le, {
                                          channel: n,
                                          conversation: l,
                                          focusStream: _,
                                          isCollapsed: o || "navigation" === c,
                                      }),
                                      (0, a.jsx)("div", { className: lh.lB }),
                                  ],
                              }),
                          }),
                          (0, a.jsx)("div", { ref: S, className: lh.iX, "aria-hidden": !0 }),
                          C && (0, a.jsx)("div", { className: lh.aE, "aria-hidden": !0 }),
                      ],
                  }),
              ],
          });
}
function lp(e) {
    let { channel: t } = e,
        { dismissReason: n, setDismissReason: l } = W(),
        { bannerMeasurementRef: i } = V(),
        { isFocused: s, isFocusedRef: o, setIsFocused: d } = (0, B.D7)(),
        u = r.useRef(!1),
        m = r.useRef(null),
        g = ex(t.id)?.id ?? null,
        p = r.useCallback(
            async (e) => {
                if (o.current && !u.current) {
                    if (
                        ((u.current = !0),
                        null != g &&
                            w.X.trackFocusModeDismissed({ channelId: t.id, conversationId: g, dismissReason: e }),
                        "return" === e && null != g)
                    ) {
                        let e = ef.A.getConversationMetadata(t.id, g)?.conversation;
                        if (null != e)
                            try {
                                await y.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 });
                            } catch (e) {}
                        await lm(m);
                    }
                    (l(e), d(!1), (u.current = !1));
                }
            },
            [t.id, o, d, l, m, g],
        );
    (!(function (e, t) {
        let { isFocused: n } = (0, B.D7)(),
            l = (0, h.cf)(
                [ep.A],
                () => {
                    let t = ep.A.getMessages(e.id);
                    return { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
                },
                [e.id],
            ),
            i = r.useRef(l);
        (r.useEffect(() => {
            if (!n) return;
            let t = ep.A.getMessages(e.id);
            i.current = { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
        }, [n, e.id]),
            r.useEffect(() => {
                if (!n) return;
                let { jumpTargetId: e, jumpSequenceId: s } = i.current;
                (l.jumpTargetId !== e || l.jumpSequenceId !== s) && t("navigation");
            }, [n, l, t]));
    })(t, p),
        r.useEffect(() => {
            if (s)
                return (
                    eA._.subscribe(eu.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e),
                    () => {
                        eA._.unsubscribe(eu.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e);
                    }
                );
            function e() {
                p("return");
            }
        }, [s, p]));
    let A = r.useCallback(() => {
            p("return");
        }, [p]),
        f = r.useMemo(
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
                config: () => (e) => ("leave" !== e ? ls : "navigation" === n ? lr : la),
                onRest: (e, t) => {
                    "leave" === t.phase && l(null);
                },
            }),
            [n, i, l],
        ),
        x = (0, X.p)(s ? g : null, f, "respect-motion-settings");
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: c()(lh.tB, !s && lh.Vq, {
                    [lh.Em]: !s && "navigation" === n,
                    [lh.Zp]: !s && "navigation" !== n,
                }),
                onClick: A,
                "aria-hidden": !0,
            }),
            x((e, n) => {
                if (null == n) return null;
                let l = ef.A.getConversationMetadata(t.id, n)?.conversation ?? null;
                return (0, a.jsx)(lg, { style: e, channel: t, conversation: l, scrollerRef: m, requestDismiss: p });
            }),
        ],
    });
}
function lA(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, B.D7)(),
        { dismissReason: l } = W();
    return n || null !== l ? (0, a.jsx)(lp, { channel: t }) : null;
}
var lf = n(708988),
    lx = n(872351),
    lC = n(359144);
let lE = (0, d.animated)("button"),
    lS = (0, d.animated)(ev.E);
function lI(e) {
    e.preventDefault();
}
let lj = r.memo(function (e) {
    let t,
        n,
        l,
        i,
        s,
        {
            conversation: o,
            layout: u,
            isExpanded: h,
            anchorId: m,
            hoveredConversationId: g,
            selectedConversationId: p,
            isFocusOverlayOpen: A,
            onHoverConversationChange: f,
            onJump: x,
        } = e,
        C = p === o.id,
        E = g === o.id,
        S = null != g && !E,
        I = null == m ? "up" : en.default.compare(o.startMessageId, m) > 0 ? "down" : "up",
        j = o.title,
        y = Math.min(16, Math.max(4, Math.round(0.6 * j.length))),
        _ = (0, J.z)({ y: u.y, opacity: +!u.hidden, config: ll }, "respect-motion-settings"),
        v = (0, J.z)(
            {
                ...((t = h && C),
                (n = 0),
                h && (C && E ? (n = -17) : C ? (n = -13) : E && (n = -24)),
                (l = 0),
                (i = 4),
                (s = 1),
                C && E ? ((l = 0), (i = 0), (s = 0.5)) : h && E && ((l = 1), (i = 0), (s = 1)),
                {
                    textScale: h ? 1 : 0.5,
                    textX: n,
                    textOpacity: +!!h,
                    lineScaleX: h ? 3 : 1,
                    pillOpacity: +!!t,
                    pillX: t ? (E ? -4 : 0) : 8,
                    pillScale: t ? 1 : 0.85,
                    arrowOpacity: l,
                    arrowX: i,
                    arrowScale: s,
                }),
                lineWidth: y,
                lineOpacity: +(!h && !u.hidden),
                config: li,
            },
            "respect-motion-settings",
        ),
        b = r.useCallback(() => f(o.id), [f, o.id]),
        T = r.useCallback(() => f(null), [f]),
        N = r.useCallback(() => x(o.id), [x, o.id]),
        M = u.hidden || u.edge;
    return (0, a.jsxs)(lE, {
        "aria-current": C ? "true" : void 0,
        "aria-hidden": M ? "true" : void 0,
        className: c()(lC.ng, { [lC._D]: C, [lC.DJ]: E, [lC.KZ]: S }),
        style: {
            transform: _.y.to((e) => `translateY(${e}px)`),
            opacity: _.opacity,
            pointerEvents: M ? "none" : void 0,
        },
        onMouseDown: lI,
        onMouseEnter: b,
        onMouseLeave: T,
        onClick: N,
        children: [
            (0, a.jsx)(d.animated.span, {
                className: c()(lC.Og, A && lC.v7),
                style: {
                    opacity: v.pillOpacity,
                    transform: (0, d.to)(
                        [v.pillX, v.pillScale],
                        (e, t) => `translateY(-50%) translateX(${e}px) scale(${t})`,
                    ),
                },
                children: (0, a.jsx)(ev.E, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "none",
                    className: lC.B6,
                    children: j,
                }),
            }),
            (0, a.jsx)(lS, {
                tag: "span",
                variant: C ? "text-md/semibold" : "text-md/normal",
                color: C ? "text-strong" : E ? "text-default" : S ? "text-muted" : "text-subtle",
                className: lC.QV,
                lineClamp: 1,
                style: {
                    opacity: v.textOpacity,
                    transform: (0, d.to)([v.textScale, v.textX], (e, t) => `scale(${e}) translateX(${t}px)`),
                },
                children: j,
            }),
            (0, a.jsx)("span", {
                className: lC.iF,
                children: (0, a.jsx)(d.animated.span, {
                    className: lC.iN,
                    style: {
                        width: v.lineWidth,
                        opacity: v.lineOpacity,
                        transform: v.lineScaleX.to((e) => `scaleX(${e})`),
                    },
                }),
            }),
            (0, a.jsx)(d.animated.span, {
                className: lC.$N,
                "aria-hidden": "true",
                style: {
                    opacity: v.arrowOpacity,
                    transform: (0, d.to)([v.arrowX, v.arrowScale], (e, t) => `translateX(${e}px) scale(${t})`),
                },
                children:
                    "down" === I
                        ? (0, a.jsx)(lf.M, { size: "refresh_sm", color: "currentColor" })
                        : (0, a.jsx)(lx.z, { size: "refresh_sm", color: "currentColor" }),
            }),
        ],
    });
});
function ly(e) {
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
            for (let t = lc; t <= ld; t++)
                e.set(
                    t,
                    (function (e) {
                        let t,
                            { slot: n, jumpedSlot: l, isExpanded: i, showTopFade: s, showBottomFade: a } = e,
                            r = n < 0 || n > 6;
                        return (
                            i
                                ? ((t = lu(28) + 28 * n), l >= 0 && n !== l && (t += n < l ? -8 : 8))
                                : (t = lu(14) + 14 * n),
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
        className: c()(lC._R, n && lC.h1),
        role: "list",
        "aria-label": eP.intl.string(ek.default["Sw/4fg"]),
        children: t.map((e) => {
            let { conversation: t, slot: r } = e,
                o = p.get(r);
            return null == o
                ? null
                : (0, a.jsx)(
                      lj,
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
var l_ = n(778712),
    lv = n(97808),
    lb = n(854627),
    lT = n(562153);
n(575279);
var lN = n(437057);
let lM = [
    { name: "40%", l1: "75%", l2: "50%" },
    { name: "55%", l1: "90%", l2: null },
    { name: "30%", l1: "60%", l2: "80%" },
    { name: "65%", l1: "45%", l2: "70%" },
];
function lR(e) {
    let { channel: t, message: n } = e,
        l = lT.Ay.useName(t.guild_id, t.id, n.author),
        { avatarSrc: i, avatarDecorationSrc: s } = (0, lb.A)({
            userId: n.author.id,
            guildId: t.guild_id,
            size: l_._3.SIZE_32,
        }),
        o = r.useMemo(() => (0, nU.Ay)(n).content, [n]),
        c = e0.PZ.useSetting(),
        d = r.useMemo(() => (0, et.mk)(n.timestamp, !0, c), [n.timestamp, c]);
    return (0, a.jsxs)("div", {
        className: lN.QS,
        children: [
            (0, a.jsx)(lv.eu, {
                className: lN.MM,
                src: i,
                avatarDecoration: s,
                size: l_._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, a.jsxs)("div", {
                className: lN.gp,
                children: [
                    (0, a.jsxs)("div", {
                        className: lN.yl,
                        children: [
                            (0, a.jsx)(ev.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: l,
                            }),
                            (0, a.jsx)(ev.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: d,
                            }),
                        ],
                    }),
                    (0, a.jsx)(ev.E, { variant: "text-sm/normal", color: "text-default", children: o }),
                ],
            }),
        ],
    });
}
function lD() {
    return (0, a.jsx)("div", {
        className: lN.Rq,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) => {
            let n = lM[t % lM.length];
            return (0, a.jsxs)(
                "div",
                {
                    className: lN.uA,
                    children: [
                        (0, a.jsx)("div", { className: lN.h }),
                        (0, a.jsxs)("div", {
                            className: lN.jE,
                            children: [
                                (0, a.jsx)("div", { className: lN.zw, style: { width: n.name } }),
                                (0, a.jsx)("div", { className: lN.P4, style: { width: n.l1 } }),
                                null != n.l2 && (0, a.jsx)("div", { className: lN.P4, style: { width: n.l2 } }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function lL(e) {
    let { channel: t, conversationId: n } = e,
        { isFocused: l } = (0, B.D7)(),
        i = (0, h.bG)([ef.A], () => ef.A.getHydratedMessages(t.id, n), [n, t.id]),
        s = r.useMemo(() => i?.slice(0, 4) ?? null, [i]);
    return (0, a.jsx)("div", {
        className: c()(lN.Zt, l && lN.CU),
        children: (0, a.jsx)("div", {
            className: lN.eU,
            children:
                null == s
                    ? (0, a.jsx)(lD, {})
                    : s.length > 0
                      ? (0, a.jsx)("div", {
                            className: lN.z0,
                            children: s.map((e) => (0, a.jsx)(lR, { channel: t, message: e }, e.id)),
                        })
                      : null,
        }),
    });
}
var lk = n(130791);
function lP(e) {
    let { channel: t, scrollManager: n, conversations: l } = e,
        i = (0, h.bG)([F.A], () => F.A.getSelectedConversation(t.id)?.id ?? null, [t.id]),
        { selectAndFocusConversation: s } = V(),
        { isFocused: o } = (0, B.D7)(),
        { dismissReason: d } = W(),
        u = (function (e) {
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
                              let n = e.findLastIndex((e) => 0 >= en.default.compare(e.startMessageId, t));
                              return n >= 0 ? n : 0;
                          })(l, u)
                      ]?.id ?? null),
            [u, l],
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
                    return (0, lt.clamp)(s, n, l);
                })(l, g, p, A),
            [l, g, p, A],
        ),
        [x, C] = r.useState(!1),
        E = r.useCallback(() => C(!1), []),
        S = r.useMemo(
            () =>
                (function (e, t) {
                    let n = [];
                    for (let l = -6; l <= lo; l++) {
                        let i = t + l;
                        i >= 0 && i < e.length && n.push({ conversation: e[i], index: i, slot: 3 + l });
                    }
                    return n;
                })(l, f),
            [l, f],
        ),
        I = r.useMemo(() => S.filter((e) => e.slot >= 0 && e.slot <= 6).map((e) => e.conversation), [S]),
        { showTopFade: j, showBottomFade: y } = r.useMemo(
            () => ({ showTopFade: f >= 3, showBottomFade: f < l.length - 3 }),
            [f, l.length],
        ),
        _ = r.useRef(null),
        [v, b] = r.useState(null),
        T = null != v && v !== i ? v : null;
    r.useEffect(() => {
        (0, U.p7)(t.id, I.length);
    }, [t.id]);
    let N = r.useCallback(
            (e) => {
                (null != e &&
                    e !== i &&
                    w.X.trackPreviewImpression({ channelId: t.id, conversationId: e, isFocusMode: o }),
                    b(e),
                    null != e && e !== i && (0, U.qC)(t.id, e, { previewLimit: 4 }));
            },
            [t.id, o, i],
        ),
        M = r.useCallback(() => {
            (b(null), E());
        }, [E]),
        R = r.useCallback(
            (e) => {
                (w.X.trackTopicsUnitClicked({ channelId: t.id, conversationId: e, isFocusMode: o }), s(e), E());
            },
            [t.id, E, o, s],
        ),
        D = r.useCallback(() => (null != T ? (0, a.jsx)(lL, { channel: t, conversationId: T }) : null), [t, T]),
        L = r.useCallback(
            (e) => {
                let t;
                (null != (t = n.ref.current?.getScrollerNode?.()) && 0 === e.deltaMode && (t.scrollTop += e.deltaY),
                    x && (b(null), E()));
            },
            [n, x, E],
        ),
        k = r.useCallback(() => {
            (C(!0),
                w.X.trackTopicsUnitImpression({
                    channelId: t.id,
                    conversationIds: I.map((e) => e.id),
                    isFocusMode: o,
                }));
        }, [t.id, I, o]);
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: c()(lk.kL, o && lk.tW, { [lk._Y]: !o && "navigation" === d, [lk.J_]: !o && "return" === d }),
              children: (0, a.jsxs)("div", {
                  className: c()(lk.rI, x && lk.RK),
                  onMouseEnter: k,
                  onMouseLeave: M,
                  onWheel: o ? void 0 : L,
                  children: [
                      (0, a.jsx)("div", { className: c()(lk.oT, x && lk.RK), "aria-hidden": !0 }),
                      (0, a.jsx)(ey.Y, {
                          targetElementRef: _,
                          shouldShow: x && null != T,
                          position: "top",
                          align: "right",
                          spacing: 12,
                          animation: ey.Y.Animation.FADE,
                          renderPopout: D,
                          children: () =>
                              (0, a.jsx)("div", {
                                  ref: _,
                                  className: c()(lk.nd, { [lk.mc]: x, [lk._z]: !x, [lk.OP]: x && j, [lk.yc]: x && y }),
                                  style: { height: 188 },
                                  children: (0, a.jsx)(ly, {
                                      items: S,
                                      isExpanded: x,
                                      anchorId: u,
                                      hoveredConversationId: v,
                                      selectedConversationId: i,
                                      showTopFade: j,
                                      showBottomFade: y,
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
function lO(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, G.sV)(t.guild_id, "scrollbar_chips"),
        i = (0, h.yK)([ef.A], () => (l ? (ef.A.getChannelConversations(t.id) ?? []) : []), [t.id, l]);
    return l && 0 !== i.length ? (0, a.jsx)(lP, { channel: t, scrollManager: n, conversations: i }) : null;
}
function lG(e) {
    let { channel: t, scrollManager: n } = e;
    return (0, G.sV)(t.guild_id, "scrollbar_chips")
        ? (0, a.jsxs)($, {
              children: [(0, a.jsx)(lA, { channel: t }), (0, a.jsx)(lO, { channel: t, scrollManager: n })],
          })
        : null;
}
var lU = n(354328),
    lw = n(807632),
    lF = n(875317),
    lB = n(164956),
    lH = n(302031),
    lK = n(822074),
    lV = n(141343),
    lz = n(72314),
    lW = n(573163),
    l$ = n(399263),
    lq = n(287809),
    lZ = n(234320),
    lJ = n(863439),
    lY = n(326337),
    lX = n(125435);
function lQ(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: i, groupSpacing: s } = e;
    return r.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, a.jsx)("div", {
            className: lX.i,
            style: { height: i },
            children: n.map((n, l) =>
                (0, a.jsx)(n3.Ay, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, l, i, s]);
}
var l0 = n(830178),
    l1 = n(887129),
    l2 = n(621466),
    l3 = n(315710),
    l4 = n(951001),
    l7 = n(334738),
    l8 = n(267102),
    l5 = n(863922),
    l6 = n(965407);
function l9(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, l2.vq)(l, HTMLElement);) ((n += l.offsetTop ?? 0), (l = l.offsetParent));
    return n;
}
let ie = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"]);
function it(e) {
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: t, jumpTargetOffset: n } = e;
    if (e.has(t) || (!e.hasMoreBefore && t === en.default.castChannelIdAsMessageId(e.channelId))) {
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
        ].sort(en.default.compare),
        i = l.indexOf(t),
        s = l[i + (Math.abs(n) > 0 ? n : 1)] ?? l[i - 1];
    return null != s ? s : null;
}
let il = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class ii {
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
            const t = lz.A.isAtBottom(e.channel.id);
            ((this.pinned = t ?? !0),
                (this.initialScrollTop = t ? null : (lz.A.getChannelDimensions(e.channel.id)?.scrollTop ?? null)));
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
        return null == t ? null : t.getElementById((0, e7.j)(n, e));
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
        (this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck());
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
            let n = it(e.messages);
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
                    (l = en.default.extractTimestamp(i.id)),
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
            o = l6.A.getOptions(a?.id ?? "");
        if (null != a && a.state === eu.cmJ.SENDING && r?.id !== a.id && o?.doNotScroll !== !0)
            return void this.setScrollToBottom();
        let { focusId: c } = this.props;
        if (null != c && n !== c) {
            let e = this.getElementFromMessageId(c);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: nV.mZ + this.props.additionalMessagePadding,
                    callback: this.handleScroll,
                });
        }
        s && this.fixScrollPosition(l, i);
    }
    getAnchorData(e, t, n) {
        let l = this.getElementFromMessageId(e),
            i = this.ref.current?.getScrollerNode();
        if (!(0, l2.vq)(l) || null == i) return null;
        let { offsetHeight: s } = l,
            a = l9(l, i),
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
        return this.props.channel.isForumPost() ? nV.Gt : nV.k8;
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
            let t = -1 === (c = r) ? en.default.castChannelIdAsMessageId(n.id) : e._array[c]?.id;
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
        for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == e) continue;
            let t = this.getElementFromMessageId(e.id);
            if (!(0, l2.vq)(t)) continue;
            let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
            return { node: t, fixedScrollTop: t.offsetTop - (e.offsetFromTop + n) };
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
                  padding: nV.mZ + this.props.additionalMessagePadding,
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
    updateVisibleMessagesDebounced = ln().debounce(l5.s_, 300);
    setAutomaticAnchor(e) {
        ((this.automaticAnchor = e),
            this._automaticAnchorCallbacks?.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(e?.id, this._bottomAnchor?.id));
    }
    getScrollerState() {
        return this.ref.current?.getScrollerState() ?? il;
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
        ie.has(e.key) && this.handleUserScrollGesture();
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
                (0, l7._9)(this.props.channel.id, this.props.windowId);
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
            let n = it(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, l2.vq)(l)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : nV.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = this.getDocument()?.getElementById(nV.q4),
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
            s = l9(e, l);
        return "middle" === t ? Math.min(s - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = it(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1, onJumpComplete: this.props.messages.onJumpComplete })
            : this.props.hasUnreads &&
                this.props.channel.type !== eu.rbe.GUILD_VOICE &&
                this.props.channel.type !== eu.rbe.GUILD_STAGE_VOICE
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
                    limit: Math.min(eu.EMb, 2 * (0, lY.h)("scrollManager.loadMore")),
                    ...(i?.truncate === !1 ? null : { truncate: !0 }),
                }));
        };
    })();
    scrollTo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        (this.ref.current?.scrollTo({ to: e, animate: !b.Ay.useReducedMotion && t, callback: n }),
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
            (y.A.jumpToPresent(n.id, (0, lY.h)("scrollManager.jumpToPresent")),
                (0, eQ.uh)(n.getGuildId() ?? eu.ME, n.id));
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                ((this.jumping = !1), this.handleScroll());
            });
    }
    updateStoreDimensionsDebounced = ln().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) l4.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { topPlaceholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: i, offsetHeight: s } = this.getScrollerState();
            l4.A.updateChannelDimensions(t.id, Date.now(), l - n, i - n, s, e);
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
            b.Ay.useReducedMotion ||
            (en.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0));
        let a = () => {
            ((this.jumping = !1),
                (0, l2.vq)(s) && ((s.tabIndex = -1), (0, l3.se)() || s.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                i?.(),
                this._scrollCompleteCallbacks.forEach((e) => e()));
        };
        (0, l2.vq)(s)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      s,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : nV.mZ,
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
            else return s ? a - nV.N0 - 2 : a + 500;
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
            (this._automaticAnchorCallbacks = ln().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor()));
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = ln().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        (this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = ln().uniq(this._scrollCompleteCallbacks)));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = ln().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        ((this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, l7.Z5)(this.props.channel.id, this.props.windowId));
    }
}
n(667532);
var is = n(95561),
    ia = n(486227),
    ir = n(731738),
    io = n(192308),
    ic = n(832712),
    id = n(807393),
    iu = n(381689),
    ih = n(754302),
    im = n(632738),
    ig = n(544231),
    ip = n(349435),
    iA = n(665909);
function ix(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/8bebc44873d2e7c35f88dbb91386484816332e49b46e9379ef31b1fd9d01e85c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var iC = n(771800);
function iE(e) {
    let { header: t, description: n, onDismiss: l, buttons: i, dismissible: s = !0 } = e,
        o = r.useCallback(() => {
            l?.();
        }, [l]);
    return (0, a.jsxs)("div", {
        className: iC.HZ,
        children: [
            (0, a.jsxs)("div", {
                className: iC.Be,
                children: [
                    (0, a.jsx)(ix, { alt: "", size: 32 }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(eb.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, a.jsx)(ev.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: iC.Uo,
                children: i?.map((e, t) =>
                    (0, a.jsx)(
                        eL.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            s
                ? (0, a.jsx)(eI.D, {
                      className: iC.b,
                      onClick: o,
                      role: "button",
                      "aria-label": eP.intl.string(eP.t.WAI6xu),
                      children: (0, a.jsx)(eD.P, { size: "md", color: "currentColor", className: iC.b }),
                  })
                : null,
        ],
    });
}
function iS(e) {
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
        id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = r.useCallback(() => {
        (c?.(),
            (0, iA._$)({ channelId: t, warningId: n, senderId: l, warningType: i, cta: iA.Wm.USER_BANNER_DISMISS }));
    }, [c, t, n, l, i]);
    return (0, a.jsx)(iE, { buttons: d, description: o, header: s, onDismiss: u });
}
var iI = n(477427);
function ij(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = [
            { title: eP.intl.string(eP.t.wSZfJR), description: eP.intl.string(eP.t.CRwzW5) },
            { title: eP.intl.string(eP.t.cmMUaB), description: eP.intl.string(eP.t.n6G1ue) },
            { title: eP.intl.string(eP.t["5SPKSy"]), description: eP.intl.string(eP.t.eyjeJQ) },
        ],
        o = r.useCallback(() => {
            (0, ig.xi)(t, [l]);
        }, [t, l]);
    function c(e) {
        (ic.A.updateChannelOverrideSettings({
            guildId: null,
            channelId: t,
            settings: { muted: !0 },
            label: iI.fd.Muted,
        }),
            iu.A.showMuteSuccessToast(i, t),
            (0, iA._$)({ channelId: t, warningId: l, senderId: i, warningType: ip._j.LIKELY_ATO, cta: e }),
            o());
    }
    return (
        r.useEffect(() => {
            ((0, iA.mO)(eu.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: ip._j.LIKELY_ATO,
            }),
                id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW }));
        }, [t, l, i]),
        (0, a.jsx)(iS, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: ip._j.LIKELY_ATO,
            header: eP.intl.string(eP.t.R8UsiI),
            description: eP.intl.string(eP.t.lI8nQl),
            onDismiss: o,
            buttons: [
                {
                    text: eP.intl.string(eP.t.tC1pvL),
                    variant: "primary",
                    onClick: function () {
                        ((0, io.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("532648"), n.e("482911"), n.e("547894")]).then(
                                n.bind(n, 129493),
                            );
                            return (n) => {
                                let { transitionState: r, onClose: o } = n;
                                return (0, a.jsx)(e, {
                                    transitionState: r,
                                    onClose: o,
                                    channelId: t,
                                    warningId: l,
                                    senderId: i,
                                    description: eP.intl.string(eP.t["/uid3p"]),
                                    safetyTipRows: s.map((e, t) =>
                                        (0, a.jsx)(
                                            ih.B,
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
                                            im.PQ,
                                            {
                                                title: eP.intl.string(eP.t.ftIK2A),
                                                description: eP.intl.string(eP.t.w2ve0t),
                                                buttonText: eP.intl.string(eP.t.ftIK2A),
                                                onButtonPress: () => {
                                                    (c(iA.Wm.USER_MODAL_MUTE), o());
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, a.jsx)(eI.D, {
                                        onClick: () =>
                                            (0, iA._$)({
                                                channelId: t,
                                                warningId: l,
                                                senderId: i,
                                                warningType: ip._j.LIKELY_ATO,
                                                cta: iA.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, a.jsx)(eb.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: eP.intl.format(eP.t.UkH122, {
                                                learnMoreLink:
                                                    "https://discord.com/safety/understanding-and-avoiding-common-scams",
                                            }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, iA._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: ip._j.LIKELY_ATO,
                                cta: iA.Wm.OPEN_MORE_TIPS,
                            }));
                    },
                },
                { text: eP.intl.string(eP.t.ftIK2A), onClick: () => c(iA.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var iy = n(564771),
    i_ = n(866660);
function iv(e) {
    let { channel: t, scrollManager: n } = e,
        l = r.useRef(null),
        { selectAndFocusConversation: i } = V(),
        s = (0, h.bG)([F.A], () => F.A.getSelectedConversation(t.id)),
        { isShifted: o } = (function (e) {
            let { bannerRef: t, scrollManager: n, channelId: l, selectedConversationId: i } = e,
                { bannerMeasurementRef: s, conversationJumpInProgressRef: a } = V(),
                { isFocusedRef: o } = (0, B.D7)(),
                [c, d] = r.useState(!1),
                u = r.useRef(!1);
            return (
                r.useEffect(() => {
                    if (null != t.current)
                        return () => {
                            (0, U.P7)(l, i);
                        };
                }, [l, t, i]),
                r.useEffect(() => {
                    if (null == t.current || null == s) return;
                    let e = n.ref.current?.getScrollerNode();
                    if (null != e)
                        return (
                            e.addEventListener("scroll", i, { passive: !0 }),
                            () => {
                                (e.removeEventListener("scroll", i), (s.current = null), (u.current = !1), d(!1));
                            }
                        );
                    function i() {
                        if (null == e || null == t.current) return;
                        let n = t.current.getBoundingClientRect().top - e.getBoundingClientRect().top;
                        s.current = n;
                        let i = e.clientHeight / 2,
                            r = n < i + 50 && n + 40 > i - 50;
                        if ((r !== u.current && ((u.current = r), d(r)), null != a.current || o.current)) return;
                        let c = e.getBoundingClientRect(),
                            h = t.current.getBoundingClientRect();
                        (h.bottom < c.top || h.top > c.bottom) && (0, U.P7)(l);
                    }
                }, [s, t, n, d, l, a, o]),
                { isShifted: c }
            );
        })({ bannerRef: l, scrollManager: n, channelId: t.id, selectedConversationId: s?.id ?? null }),
        c = r.useCallback(() => {
            null != s && i(s.id);
        }, [i, s]);
    return null == s
        ? null
        : (0, a.jsx)("div", {
              ref: l,
              className: i_.A,
              children: (0, a.jsx)(eB, {
                  channel: t,
                  conversation: s,
                  actionsShifted: o,
                  onFocusToggle: c,
                  suppressBorder: !0,
              }),
          });
}
var ib = n(495273),
    iT = n(429933),
    iN = n(176781),
    iM = n(314307),
    iR = n(463930),
    iD = n(442433),
    iL = n(793574),
    ik = n(688810),
    iP = n(967144),
    iO = n(342296),
    iG = n(696451),
    iU = n(427262),
    iw = n(209516);
function iF(e) {
    let { userId: t, channel: l, noUserFallback: i = null } = e,
        s = r.useRef(null),
        { analyticsLocations: o } = (0, ik.Ay)(iL.A.USERNAME),
        c = (0, h.bG)([lq.default], () => lq.default.getUser(t)),
        d = (0, h.bG)([iG.Ay], () => (null != t ? iG.Ay.getMember(l.guild_id, t) : null)),
        u = (0, iP.gn)(l.guild_id, t ?? void 0, d?.colorStrings ?? null);
    function m(e) {
        if (null == c) return null;
        (0, iD.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("926132"),
                n.e("146652"),
                n.e("893190"),
                n.e("882073"),
                n.e("691994"),
                n.e("229787"),
                n.e("576665"),
                n.e("715038"),
                n.e("624198"),
                n.e("823427"),
                n.e("343116"),
                n.e("70515"),
                n.e("666939"),
                n.e("285802"),
                n.e("424966"),
            ]).then(n.bind(n, 175269));
            return (t) => (0, a.jsx)(e, { ...t, user: c, guildId: l.guild_id, channel: l });
        });
    }
    let g = d?.nick ?? iU.Ay.getName(c) ?? "???",
        p = d?.colorString;
    return null == c
        ? i
        : (0, a.jsx)(ik.f5, {
              value: o,
              children: (0, a.jsx)(iO.A, {
                  targetElementRef: s,
                  user: c,
                  guildId: l.guild_id,
                  channelId: l.id,
                  roleId: d?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, a.jsx)(eI.D, {
                          ...e,
                          innerRef: s,
                          tag: "span",
                          onContextMenu: m,
                          children: (0, a.jsx)(ev.E, {
                              className: iw.e,
                              tag: "span",
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: (0, a.jsx)(iR.g, { name: g, colorString: p ?? null, colorStrings: u }),
                          }),
                      }),
              }),
          });
}
var iB = n(268378),
    iH = n(91172);
function iK(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t);
    return (0, a.jsxs)(iM.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", {
                className: iH.P,
                children: (0, a.jsx)(iN.x, { size: "lg", color: q.A.colors.ICON_SUBTLE }),
            }),
            (0, a.jsx)(iM.cr, { children: n }),
            null != t.ownerId &&
                (0, a.jsx)(ev.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eP.intl.format(iB.default["UocED+"], {
                        usernameHook: (e, n) =>
                            (0, a.jsx)(iF, { userId: t.ownerId, channel: t, noUserFallback: null }, n),
                    }),
                }),
        ],
    });
}
var iV = n(93246),
    iz = n(95701),
    iW = n(808728),
    i$ = n(534890),
    iq = n(713654),
    iZ = n(691060),
    iJ = n(376310),
    iY = n(959717);
function iX(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: l } = e,
        i =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, a.jsx)("div", {
        className: c()(iY._, { [iY.L]: l }),
        children: Array.from(t).map((e) =>
            (0, a.jsx)(iJ.Ay, { tag: e, onRemove: i, size: null == i ? iJ.Ay.Sizes.SMALL : iJ.Ay.Sizes.MEDIUM }, e.id),
        ),
    });
}
var iQ = n(151582);
function i0(e) {
    let { channel: t } = e,
        n = (0, iZ.kt)(t),
        { firstMessage: l } = (0, h.cf)([tX.A], () => tX.A.getMessage(t.id)),
        i = new Set((0, iZ.zt)(t, n)),
        s = (0, iq.gU)(t) ?? i$.ChatIcon,
        r = (0, P.Ay)(t);
    return (0, a.jsxs)(iM.Ay, {
        channelId: t.id,
        className: iQ.kL,
        children: [
            (0, a.jsx)("div", { className: iQ.P0, children: (0, a.jsx)(s, { className: iQ.Kk, strokeWidth: 1.75 }) }),
            (0, a.jsx)(iM.cr, { className: iQ.wx, children: r }),
            null == l &&
                (0, a.jsx)(ev.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eP.intl.string(eP.t.mE3KJN),
                }),
            (0, a.jsx)(iX, { appliedTags: i, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var i1 = n(289873),
    i2 = n(548118),
    i3 = n(513461),
    i4 = n(654265),
    i7 = n(561446),
    i8 = n(881817);
function i5(e) {
    let { joinRequest: t, guild: n } = e,
        l = (0, h.bG)([lq.default], () => lq.default.getUser(t.userId));
    return (0, a.jsxs)("div", {
        className: i8.I8,
        children: [
            (0, a.jsxs)("div", {
                className: i8.Ov,
                children: [
                    null != n &&
                        (0, a.jsxs)("div", {
                            className: i8.yB,
                            children: [
                                (0, a.jsx)(i2.Ay, { guild: n, active: !0, size: i2.Ay.Sizes.SMOL, className: i8.$f }),
                                (0, a.jsx)(eb.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != l &&
                        (0, a.jsx)(eb.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: eP.intl.format(eP.t.jDV3i6, { username: l.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== i3.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === i3.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("hr", { className: i8.g2 }),
                            (0, a.jsxs)("div", {
                                className: i8.fs,
                                children: [
                                    (0, a.jsx)(ev.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, a.jsx)(ev.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function i6(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: i } = (0, i4.A)(t.id);
    return (0, a.jsx)(iM.Ay, {
        channelId: t.id,
        className: i8.kL,
        children:
            null != l && null != l.formResponses
                ? (0, a.jsxs)("div", {
                      className: i8.KJ,
                      children: [
                          (0, a.jsx)("div", { children: (0, a.jsx)(i5, { guild: i, joinRequest: l }) }),
                          (0, a.jsx)(i7.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, a.jsx)(i1.y, {})
                  : null,
    });
}
var i9 = n(825484),
    se = n(241541),
    st = n(571694),
    sn = n(922301),
    sl = n(660184),
    si = n(598104),
    ss = n(396787),
    sa = n(117534);
function sr(e) {
    let { channel: t, children: n, className: l, editable: i, location: s } = e;
    return i
        ? (0, a.jsx)(eS.m, {
              position: "bottom",
              text: eP.intl.string(eP.t["0qPSMV"]),
              children: (0, a.jsxs)(eI.D, {
                  className: c()(sa.e, l),
                  onClick: () => (0, ss.jv)(t.id, s),
                  children: [
                      n,
                      (0, a.jsx)("div", {
                          className: sa.Z,
                          children: (0, a.jsx)(tF.PencilIcon, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, a.jsx)("div", { className: l, children: n });
}
var so = n(73028),
    sc = n(452015),
    sd = n(151440);
function su(e) {
    let t,
        { channel: n, children: l, user: i } = e,
        s = (0, h.bG)([b.Ay], () => b.Ay.useReducedMotion),
        o = (0, P.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: u,
        } = (0, lb.A)({ userId: i?.id, size: l_._3.SIZE_80, animateOnHover: !0 }),
        [m, g] = r.useState(!1),
        p = r.useCallback(() => {
            (d.onMouseEnter(), g(!0));
        }, [d]),
        A = r.useCallback(() => {
            (d.onMouseLeave(), g(!1));
        }, [d]),
        f = !n.isMultiUserDM() && i?.displayNameStyles != null;
    return (0, a.jsxs)(iM.Ay, {
        channelId: n.id,
        onMouseEnter: p,
        onMouseLeave: A,
        children: [
            ((t = !s && u),
            n.isMultiUserDM()
                ? (0, a.jsx)(sr, {
                      channel: n,
                      editable: !0,
                      location: iL.A.EMPTY_GROUP_DM,
                      children: (0, a.jsx)(si.A, { channel: n, size: l_._3.SIZE_80, animated: t, "aria-label": o }),
                  })
                : (0, a.jsx)(lv.eu, {
                      "aria-label": o,
                      size: l_._3.SIZE_80,
                      src: (0, st.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, a.jsx)(iM.cr, {
                children: f
                    ? (0, a.jsx)(sl.A, {
                          userName: o,
                          displayNameStyles: i?.displayNameStyles,
                          effectDisplayType: m ? sn.G.ANIMATED : sn.G.STATIC,
                          loop: !0,
                      })
                    : o,
            }),
            (0, a.jsx)(iM.j1, { children: l }),
            n.isMultiUserDM() &&
                (0, a.jsxs)(i9.e, {
                    className: sd.U,
                    children: [
                        (0, a.jsx)(sc.NE, { channel: n, text: eP.intl.string(eP.t.NB5DFD), icon: se.D }),
                        (0, a.jsx)(eL.$, {
                            icon: tF.PencilIcon,
                            variant: "secondary",
                            text: eP.intl.string(eP.t["5Q9+/L"]),
                            "aria-label": eP.intl.string(eP.t["5Q9+/L"]),
                            onClick: () => (0, so.U)(n.id, iL.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var sh = n(136722),
    sm = n(342952),
    sg = n(177953),
    sp = n(725570),
    sA = n(435183),
    sf = n(685374),
    sx = n(63104),
    sC = n(597367);
function sE(e) {
    let t,
        { className: n, children: l, verified: i, roleColor: s, roleName: r } = e;
    return (
        (t = i
            ? (0, a.jsx)(sx.A, { size: 12, color: s, className: sC.TS })
            : (0, a.jsx)("div", { className: sC.yY, style: { backgroundColor: s } })),
        (0, a.jsxs)("div", { className: c()(n, sC.JC), style: { "--custom-role-label-color": s }, children: [t, r, l] })
    );
}
var sS = n(468689),
    sI = n(46054),
    sj = n(34457),
    sy = n(317525),
    s_ = n(488926),
    sv = n(869685);
function sb(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: i = !1,
        onClick: s,
        disabled: r = !1,
        verified: o = !1,
    } = e;
    return (0, a.jsx)(eI.D, {
        className: c()(t, sv.x6, { [sv.r9]: r }),
        onClick: r ? void 0 : s,
        "aria-disabled": r,
        role: "button",
        children: (0, a.jsx)(sE, {
            className: sv.JC,
            roleColor: n,
            roleName: l,
            verified: o,
            children:
                i &&
                (0, a.jsx)(eD.P, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: sv.Tj,
                    colorClass: sv.eG,
                }),
        }),
    });
}
var sT = n(314040),
    sN = n(165648);
function sM(e) {
    let { channel: t } = e,
        [n, l] = r.useState(!1),
        i = (0, P.Ay)(t, !0),
        s = t.guild_id,
        o = (0, h.bG)([sy.A], () => (null != s ? sy.A.getSortedRoles(s) : void 0)),
        d = (0, h.bG)([lq.default, t6.A], () => lq.default.getUser(t6.A.getGuild(s)?.ownerId)),
        u = r.useMemo(() => (null != o ? o.filter((e) => !(0, sj.Oy)(e)) : []), [o]),
        m = r.useMemo(
            () =>
                ln()(u)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = s_.aH({ forceRoles: { [e.id]: e }, context: t });
                        return sh.X8(n, sh.kg(eu.xBc.ADMINISTRATOR, eu.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, u],
        ),
        g = (0, h.yK)(
            [lq.default],
            () => {
                let e = {};
                for (let n of (null != d && (e[d.id] = d), Object.values(t.permissionOverwrites))) {
                    if (n.type !== nT.r2.MEMBER || null != e[n.id]) continue;
                    let t = lq.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return ln()(e)
                    .filter((e) => {
                        let n = s_.$3({ permission: eu.xBc.ADMINISTRATOR, user: e, context: t }),
                            l = t.permissionOverwrites[e.id] ?? s_.x3,
                            i = sh.zy(l.allow, eu.xBc.VIEW_CHANNEL);
                        return n || i;
                    })
                    .value();
            },
            [t, d],
        ),
        p = tg.A.can(eu.xBc.MANAGE_CHANNELS, t) || tg.A.can(eu.xBc.MANAGE_ROLES, t),
        A = r.useCallback(() => l(!1), []);
    return (0, a.jsxs)(iM.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(iM.WK, { locked: !0, channelType: t.type }),
            (0, a.jsx)(iM.cr, { children: eP.intl.format(eP.t.I3R7Vn, { channelName: i }) }),
            (0, a.jsx)(iM.j1, {
                className: sN.PT,
                children: eP.intl.format(eP.t.QuwqjG, {
                    channelName: i,
                    topicHook: () => sI.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            p
                ? (0, a.jsxs)("div", {
                      className: sT.$x,
                      children: [
                          (0, a.jsx)(eL.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eP.intl.string(eP.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: sg.n,
                          }),
                          (0, a.jsx)(eL.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eP.intl.string(eP.t["3gUsJb"]),
                              onClick: function () {
                                  sA.Ay.open(t.id);
                              },
                              icon: tF.PencilIcon,
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("div", {
                className: sT.ol,
                children: [
                    (function () {
                        if (1 !== g.length || m.length > 0)
                            return (0, a.jsx)(sm.A, { guildId: t.guild_id, className: sT.HD, maxUsers: 5, users: g });
                        let e = g[0],
                            n = iU.Ay.getName(e);
                        return (0, a.jsxs)("div", {
                            className: sT.HD,
                            children: [
                                (0, a.jsx)(lv.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: l_._3.SIZE_24,
                                }),
                                (0, a.jsx)(ev.E, {
                                    tag: "span",
                                    className: sT.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, a.jsx)(ev.E, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: eP.intl.string(eP.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    m.map((e, n) => {
                        let l = e.colorString ?? eu.TpD,
                            i = e.tags?.guild_connections !== void 0;
                        return p
                            ? (0, a.jsx)(
                                  sb,
                                  {
                                      className: c()(sT.JC, { [sT.HV]: n === m.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      disabled: !p,
                                      verified: i,
                                      onClick: () => {
                                          (sS.default.open(t.guild_id, eu.BEX.MEMBERS), sS.default.selectRole(e.id));
                                      },
                                  },
                                  e.id,
                              )
                            : (0, a.jsx)(
                                  sE,
                                  {
                                      className: c()(sT.JC, { [sT.HV]: n === m.length - 1 }),
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
                ? (0, a.jsx)(sp.aF, {
                      renderModal: (e) =>
                          (0, a.jsx)(sf.default, { ...e, onClose: () => (A(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
var sR = n(270171);
function sD(e) {
    let { channel: t } = e,
        n = (0, P.Ay)(t, !0),
        l = (0, h.bG)([tg.A], () => tg.A.can(eu.xBc.MANAGE_CHANNELS, t) && iz.bk.has(t.type));
    return (0, a.jsxs)(iM.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)(iM.WK, { channelType: t.type }),
            (0, a.jsx)(iM.cr, { children: eP.intl.format(eP.t.I3R7Vn, { channelName: n }) }),
            (0, a.jsx)(iM.j1, {
                className: sN.PT,
                children: eP.intl.format(eP.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => sI.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            l
                ? (0, a.jsx)("div", {
                      className: sR.U,
                      children: (0, a.jsx)(eL.$, {
                          size: "sm",
                          variant: "secondary",
                          text: eP.intl.string(eP.t["3gUsJb"]),
                          onClick: () => {
                              sA.Ay.open(t.id);
                          },
                          icon: tF.PencilIcon,
                      }),
                  })
                : null,
        ],
    });
}
var sL = n(909833);
function sk(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, a.jsx)("div", { style: { marginTop: -8 } })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(ev.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, a.jsx)("div", {
                          className: sL.VA,
                          children: eP.intl.format(eP.t.imPXd5, {
                              usernameHook: (e, n) =>
                                  (0, a.jsx)(
                                      iF,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                          noUserFallback: (0, a.jsx)("span", {
                                              className: c()(sL.eM, sL.sL),
                                              children: "???",
                                          }),
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === eu.rbe.PRIVATE_THREAD
                      ? (0, a.jsx)(ev.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eP.intl.string(eP.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function sP(e) {
    let { channel: t } = e,
        n = (0, iq.gU)(t) ?? tU.y,
        l = (0, P.Ay)(t);
    return (0, a.jsxs)(iM.Ay, {
        channelId: t.id,
        children: [
            (0, a.jsx)("div", { className: sL.P0, children: (0, a.jsx)(n, { className: sL.Kk }) }),
            (0, a.jsx)(iM.cr, { children: l }),
            (0, a.jsx)(sk, { channel: t }),
        ],
    });
}
var sO = n(825244),
    sG = n(321404),
    sU = n(957283),
    sw = n(189213),
    sF = n(933958),
    sB = n(869003),
    sH = n(321191);
function sK(e) {
    return (0, h.bG)([sH.A], () => (null !== e ? sH.A.getUserProfile(e ?? eu.dJq)?.application : void 0)) ?? void 0;
}
var sV = n(260498),
    sz = n(5960),
    sW = n(616334),
    s$ = n(246338),
    sq = n(434279),
    sZ = n(941985),
    sJ = n(712440),
    sY = n(733110),
    sX = n(543465),
    sQ = n(308528),
    s0 = n(928658),
    s1 = n(10779),
    s2 = n(978914),
    s3 = n(977347);
function s4(e) {
    let { channel: t, user: n } = e,
        l = !0 === n.bot,
        {
            message: i,
            isReportable: s,
            isLoaded: o,
        } = (function (e, t, n) {
            let l,
                i =
                    (l = (0, h.bG)([nM.A], () => nM.A.getRelationshipType(t), [t])) === eu.eA$.NONE ||
                    l === eu.eA$.BLOCKED ||
                    l === eu.eA$.PENDING_INCOMING,
                s = sK(n ? t : null),
                a = (0, s1.A)(n ? (s?.id ?? t) : null),
                r = n ? !a : i,
                o = (0, s3.D)(e.id, t),
                { message: c, loaded: d, error: u } = (0, s2.I)(e, { enabled: r }),
                m = o ?? (c?.author?.id === t ? c : null);
            return { message: m, isReportable: r, isLoaded: null != m || d || u };
        })(t, n.id, l),
        { channelId: c } = (0, sU.N)(),
        d = t.id === c,
        u = !ns.Fr && !d,
        m = r.useCallback(() => {
            null != i &&
                (0, s0.b8)(i, () => {
                    sQ.A.closePrivateChannel(t.id, u);
                });
        }, [t.id, i, u]);
    return !s || (null == i && o)
        ? null
        : (0, a.jsx)(eL.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == i,
              onClick: m,
              text: eP.intl.string(eP.t.HHZmDn),
          });
}
var s7 = n(248675);
function s8(e) {
    let { channel: t } = e,
        l = (0, h.bG)([sX.Ay], () => sX.Ay.isChannelMuted(null, t.id));
    return (0, a.jsx)(eL.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? eP.intl.string(eP.t.YqAjXy) : eP.intl.string(eP.t.w4m945),
        onClick: function () {
            (0, io.openModalLazy)(async () => {
                let { default: e } = await n.e("499312").then(n.bind(n, 259763));
                return (n) => (0, a.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function s5(e) {
    let { application: t, project: n } = e;
    return (0, a.jsx)(eL.$, {
        variant: "secondary",
        text: eP.intl.string(s7.default.jMMrDM),
        onClick: () =>
            (function (e, t) {
                let n;
                (null == (n = (0, sq.wu)(e) ?? (0, s$.oX)("openVibegrationsProjectInBuilder")) ||
                    ((0, sZ.g7)(n, e.id), 0)) &&
                    (0, sW.A)(e.id, { initialTab: "app", isPreview: e.preview_application_id === t });
            })(n, t.id),
    });
}
function s6(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        i = (0, h.bG)([sF.Ay], () => sF.Ay.getSelfEmbeddedActivities());
    function s() {
        sJ.A.delete(l.id);
        let e = i.get(n.id);
        null != e && sB.A.leaveActivity({ location: e.location, applicationId: n.id });
    }
    return (0, a.jsx)(eL.$, {
        variant: "secondary",
        text: eP.intl.string(eP.t.xUqheM),
        onClick: () => {
            ((0, io.openModal)((e) =>
                (0, a.jsx)(sw.a, {
                    title: eP.intl.string(eP.t["DT39A+"]),
                    subtitle: eP.intl.formatToPlainString(eP.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: eP.intl.string(eP.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: eP.intl.string(eP.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                (s(), e.onClose());
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                t9.default.track(eu.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                }));
        },
    });
}
function s9(e) {
    var t, n;
    let l,
        i,
        { channel: s, user: o } = e,
        c = sK(o?.id ?? eu.dJq),
        { authorizedAppToken: d, authorizedAppsFetchState: u } = (0, h.cf)([sY.default], () => ({
            authorizedAppToken: sY.default.getNewestTokenForApplication(c?.id),
            authorizedAppsFetchState: sY.default.getFetchState(),
        })),
        { isOwned: m, project: g } =
            ((t = c?.id),
            (n = o.bot),
            (l = (0, sz.A)(t, n)),
            (i = (0, h.bG)([sV.Ay], () => (!0 === l && null != t ? sV.Ay.findProjectByApplicationId(t) : null), [
                l,
                t,
            ])),
            { isOwned: l, project: i });
    return (r.useEffect(() => {
        o.bot && u === sY.FetchState.NOT_FETCHED && sJ.A.fetch();
    }, [o.bot, u]),
    o.bot && null != c && (null != d || null != g))
        ? (0, a.jsxs)(i9.e, {
              size: "sm",
              children: [
                  (0, a.jsx)(s8, { channel: s }),
                  null != g
                      ? (0, a.jsx)(s5, { application: c, project: g })
                      : null != d && !1 === m
                        ? (0, a.jsx)(s6, { application: c, channel: s, oauth2Token: d })
                        : null,
                  (0, a.jsx)(s4, { channel: s, user: o }),
              ],
          })
        : (0, a.jsx)(i9.e, { size: "sm", children: (0, a.jsx)(s4, { channel: s, user: o }) });
}
var ae = n(692617),
    at = n(903209),
    an = n(402860),
    al = n(518477),
    ai = n(976926);
function as(e) {
    let { userId: t, channelId: n, showDivider: l = !1, compact: i = !1 } = e,
        s = (0, h.bG)([sH.A], () => sH.A.getMutualGuilds(t), [t]),
        o = lq.default.getUser(t);
    r.useEffect(() => {
        null == s && null != o && (0, at.A)(t, o.getAvatarURL(null, 80), { withMutualGuilds: !0 });
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
              className: c()(ai.kL, l ? ai.yF : null),
              children: (0, a.jsx)(ev.E, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: eP.intl.string(eP.t.zjVh8h),
              }),
          })
        : (0, a.jsxs)(eI.D, {
              className: c()(ai.kL, ai.vk, { [ai.yF]: l }),
              onClick: function () {
                  (0, an.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: al.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [iL.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, a.jsx)(ae.A, {
                      guilds: d,
                      maxGuilds: 3,
                      size: i ? i2.Ay.Sizes.SMOL : i2.Ay.Sizes.SMALLER,
                      hideOverflowCount: !0,
                  }),
                  (0, a.jsx)(ev.E, {
                      className: ai.NI,
                      variant: "text-sm/normal",
                      children: eP.intl.format(eP.t.eE3oep, { count: s.length }),
                  }),
              ],
          });
}
var aa = n(717398),
    ar = n(327166),
    ao = n(390848),
    ac = n(156328);
function ad(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eL.$, {
        size: "sm",
        variant: "secondary",
        onClick: function () {
            aa.A.blockUser(t, { location: eu.liQ.DM_CHANNEL });
        },
        text: eP.intl.string(eP.t.l4Emac),
    });
}
function au(e) {
    let { userId: t, showingBanner: n, variant: l = "primary", label: i } = e,
        s = (0, ar.D)(t, i),
        r = (0, h.bG)([nM.A], () => nM.A.getRelationshipType(t), [t]),
        o = (0, h.bG)([nM.A], () => nM.A.getOriginApplicationId(t), [t]),
        { acceptFriendRequest: c } = (0, ao.I)({
            userId: t,
            applicationId: o,
            isGameRelationship: !1,
            location: eu.liQ.DM_CHANNEL,
        });
    return n
        ? null
        : (0, a.jsx)(eL.$, {
              variant: l,
              onClick: function () {
                  r === eu.eA$.PENDING_INCOMING
                      ? c()
                      : aa.A.addRelationship({ userId: t, context: { location: eu.liQ.DM_CHANNEL } });
              },
              text: s,
          });
}
function ah(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eL.$, {
        variant: "secondary",
        onClick: function () {
            aa.A.removeFriend(t, { location: eu.liQ.DM_CHANNEL });
        },
        text: eP.intl.string(eP.t.cvSt1J),
    });
}
function am(e) {
    let { userId: t } = e;
    return (0, a.jsx)(eL.$, {
        variant: "secondary",
        onClick: function () {
            aa.A.unblockUser(t, { location: eu.liQ.DM_CHANNEL });
        },
        text: eP.intl.string(eP.t.XyHpKH),
    });
}
function ag(e) {
    let { channel: t, user: n, showingBanner: l } = e,
        i = (0, h.bG)([nM.A], () => nM.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, ao.I)({
            userId: n.id,
            applicationId: i,
            isGameRelationship: !1,
            location: eu.liQ.DM_CHANNEL,
        });
    return (0, a.jsxs)("div", {
        className: ac.K,
        children: [
            (0, a.jsx)(ev.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: eP.intl.format(eP.t.uIomXw, { username: iU.Ay.getName(n) }),
            }),
            (0, a.jsxs)(i9.e, {
                size: "sm",
                children: [
                    (0, a.jsx)(eL.$, { variant: "primary", onClick: s, text: eP.intl.string(eP.t["+WbSn5"]) }),
                    (0, a.jsx)(eL.$, {
                        variant: "secondary",
                        onClick: function () {
                            aa.A.cancelFriendRequest(n.id, { location: eu.liQ.DM_CHANNEL });
                        },
                        text: eP.intl.string(eP.t.rQSndv),
                    }),
                    (0, a.jsx)(ad, { userId: n.id }),
                    l ? null : (0, a.jsx)(s4, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function ap(e) {
    let t,
        {
            channel: n,
            user: l,
            showingBanner: i,
            addFriendVariant: s = "primary",
            addFriendLabel: r,
            compactPendingIncoming: o = !1,
        } = e,
        c = (0, h.bG)([nM.A], () => nM.A.getRelationshipType(l.id), [l.id]);
    if (c === eu.eA$.PENDING_INCOMING && !o) return (0, a.jsx)(ag, { channel: n, user: l, showingBanner: i });
    switch (c) {
        case eu.eA$.NONE:
        case eu.eA$.PENDING_INCOMING:
            l.bot || (t = (0, a.jsx)(au, { userId: l.id, showingBanner: i, variant: s, label: r }));
            break;
        case eu.eA$.FRIEND:
            t = (0, a.jsx)(ah, { userId: l.id });
            break;
        case eu.eA$.BLOCKED:
            t = (0, a.jsx)(am, { userId: l.id });
            break;
        case eu.eA$.PENDING_OUTGOING:
            t = (0, a.jsx)(eL.$, { variant: "primary", disabled: !0, text: eP.intl.string(eP.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let d = c !== eu.eA$.BLOCKED;
    return (0, a.jsxs)(i9.e, {
        size: "sm",
        children: [t, d ? (0, a.jsx)(ad, { userId: l.id }) : null, i ? null : (0, a.jsx)(s4, { channel: n, user: l })],
    });
}
var aA = n(92650),
    af = n(138298),
    ax = n(761640);
function aC(e) {
    let { channel: t, user: n } = e,
        l = r.useCallback(() => {
            (0, eN.P)((0, eM.o)(eP.intl.string(eP.t.a2j0hv), eR.Ck.FAILURE));
        }, []),
        i = r.useCallback(() => {
            af.A.closeChannelSidebar(ax.fe);
        }, []),
        s = r.useCallback(() => {
            af.A.closeChannelSidebar(ax.fe);
        }, []),
        {
            acceptMessageRequest: o,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, aA.t)({ user: lq.default.getUser(n.id), onError: l, onAcceptSuccess: s, onRejectSuccess: i }),
        g = d || u || h || m;
    return (0, a.jsxs)(i9.e, {
        size: "sm",
        children: [
            (0, a.jsx)(eL.$, {
                variant: "primary",
                disabled: g,
                onClick: () => o(t.id),
                loading: d,
                text: eP.intl.string(eP.t.Kz8Pwr),
            }),
            (0, a.jsx)(eL.$, {
                variant: "secondary",
                disabled: g,
                onClick: () => c(t.id),
                loading: u,
                text: eP.intl.string(eP.t.B2nygW),
            }),
            (0, a.jsx)(s4, { channel: t, user: n }),
        ],
    });
}
var aE = n(693833);
function aS(e) {
    let t,
        { channel: n, user: l, showingBanner: i } = e,
        { channelId: s } = (0, sU.N)(),
        r = (0, h.bG)([nM.A], () => nM.A.getRelationshipType(l.id), [l.id]),
        o = n.id === s,
        c = (0, sG.c)(n.id),
        d = !0 === l.bot,
        u = l.isNonUserBot(),
        m = (0, eZ.U)(),
        g = aE.n;
    return (
        u
            ? (t = null)
            : m
              ? ((t = (0, a.jsx)(ap, {
                    channel: n,
                    user: l,
                    showingBanner: i,
                    addFriendVariant: "active",
                    addFriendLabel: eP.intl.string(eP.t["PMsq/b"]),
                    compactPendingIncoming: !0,
                })),
                (g = aE.O))
              : o && c
                ? (t = (0, a.jsx)(aC, { channel: n, user: l }))
                : d
                  ? (t = (0, a.jsx)(s9, { channel: n, user: l }))
                  : ((t = (0, a.jsx)(ap, { channel: n, user: l, showingBanner: i })),
                    r === eu.eA$.PENDING_INCOMING && (g = aE.O)),
        (0, a.jsxs)("div", {
            className: g,
            children: [(0, a.jsx)(as, { userId: l.id, channelId: n.id, showDivider: g !== aE.O, compact: m }), t],
        })
    );
}
var aI = n(746080),
    aj = n(221851);
function ay(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, ib.Ae)(n),
        i = (0, h.bG)([iW.Ay], () => null != n.guild_id && n === iW.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, iT.A)(n.id)) return null;
    if (n.isForumPost()) return (0, a.jsx)(i0, { channel: n });
    if (n.isMediaThread()) return (0, a.jsx)(iK, { channel: n });
    if (iz.Le.has(n.type)) return (0, a.jsx)(sP, { channel: n });
    if (i) return (0, a.jsx)(sO.A, { channel: n });
    else if (l) return (0, a.jsx)(sM, { channel: n });
    return (0, a.jsx)(sD, { channel: n });
}
function a_(e) {
    let { channel: t, showingBanner: n } = e,
        l = (0, P.Ay)(t),
        { type: i } = t,
        s = (0, h.bG)([lq.default], () => (t.isPrivate() ? lq.default.getUser(t.getRecipientId()) : null)),
        r = iU.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, h.cf)([tg.A], () => ({
            canManageRoles: tg.A.can(eu.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: tg.A.can(eu.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, a.jsx)(su, { channel: t, children: eP.intl.string(eP.t.Rzvnig) });
    if (i === eu.rbe.DM)
        return (0, a.jsxs)(su, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, a.jsx)(eb.D, { variant: "heading-xl/medium", className: aj.SX, children: r }),
                eP.intl.format(eP.t["Qvg+6+"], { username: l }),
                s?.isProvisional ? (0, a.jsx)(iV.Y, { userId: s.id }) : null,
                null != s ? (0, a.jsx)(aS, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, a.jsxs)(iM.Ay, {
                channelId: t.id,
                children: [
                    (0, a.jsx)(iM.cr, { children: eP.intl.format(eP.t.I3R7Vn, { channelName: l }) }),
                    (0, a.jsx)(iM.j1, { children: eP.intl.string(eP.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(aI.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, a.jsx)(i6, { channel: t });
        else return (0, a.jsx)(su, { channel: t, children: eP.intl.format(eP.t.MFwcqO, { name: l }) });
    return c
        ? (0, a.jsx)(ay, { channel: t, canManageRoles: o })
        : (0, a.jsx)(iM.Ay, {
              channelId: t.id,
              children: (0, a.jsx)(iM.j1, { children: eP.intl.format(eP.t.hPVEQG, { channelName: l }) }),
          });
}
var av = n(506774),
    ab = n(933832),
    aT = n(782603),
    aN = n(408278),
    aM = n(763175),
    aR = n(56562),
    aD = n(765671),
    aL = n(304072),
    ak = n(578623),
    aP = n(702841),
    aO = n(696986),
    aG = n(147036),
    aU = n(975571),
    aw = n(36491),
    aF = n(953727);
function aB(e) {
    let { width: t = 45, height: n = 46, ...l } = e;
    return (0, a.jsxs)("svg", {
        ...(0, aF.A)(l),
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
var aH = n(423382);
function aK(e) {
    let { threadId: t } = e,
        n = (0, aP.bG)([e1.A], () => e1.A.getChannel(t)),
        l = (0, aP.bG)([e1.A], () => e1.A.getChannel(n?.parent_id)),
        i = r.useCallback(() => {
            null != n &&
                null != l &&
                ((0, is.zV)(eu.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, tp.C)((0, aG.af)(n, l)));
        }, [n, l]);
    return (0, a.jsxs)("div", {
        className: aH.BQ,
        children: [
            (0, a.jsx)(aB, {}),
            (0, a.jsxs)("div", {
                className: aH.BB,
                children: [
                    (0, a.jsx)(ev.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: eP.intl.string(eP.t["5uAO7d"]),
                    }),
                    (0, a.jsx)(ev.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eP.intl.format(eP.t.WnfPV3, {
                            helpArticleUrl: aU.A.getCreatorSupportArticleURL(eu.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, a.jsx)(aO.h, { size: 4 }),
                    (0, a.jsx)(eL.$, {
                        text: eP.intl.string(eP.t.C5UQC9),
                        variant: "primary",
                        icon: tD.LinkIcon,
                        onClick: i,
                    }),
                ],
            }),
            (0, a.jsx)(eI.D, {
                className: aH.b,
                onClick: function () {
                    (0, aw.sF)(t);
                },
                "aria-label": eP.intl.string(eP.t["0+xZH0"]),
                children: (0, a.jsx)(eD.P, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var aV = n(505527),
    az = n(467073),
    aW = n(960538),
    a$ = n(604121),
    aq = n(988904);
function aZ() {
    return n
        .e("515423")
        .then(n.t.bind(n, 155147, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let aJ = r.memo(function (e) {
    let { channel: t, isLastItem: n } = e,
        l = (0, h.bG)([b.Ay], () => b.Ay.useReducedMotion),
        i = (0, h.bG)([tg.A], () => tg.A.can(eu.xBc.SEND_MESSAGES_IN_THREADS, t)),
        s = (0, tc.s5)(t),
        r = (0, h.bG)([eo.default], () => eo.default.getId());
    return n
        ? i && !s && t.ownerId !== r
            ? (0, a.jsxs)("div", {
                  className: aq.aP,
                  children: [
                      (0, a.jsx)(a$.a, { importData: aZ, shouldAnimate: !l, className: aq.lY }),
                      (0, a.jsxs)("div", {
                          className: aq.FS,
                          children: [
                              (0, a.jsx)(eb.D, {
                                  variant: "heading-md/semibold",
                                  children: eP.intl.string(eP.t.OmBThA),
                              }),
                              (0, a.jsx)(ev.E, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: eP.intl.string(eP.t.zcs5ko),
                              }),
                          ],
                      }),
                  ],
              })
            : null
        : (0, a.jsx)("div", { className: aq.yF });
});
var aY = n(279182),
    aX = n(831688),
    aQ = n(226698),
    a0 = n(892340),
    a1 = n(715757),
    a2 = n(390897),
    a3 = n(862482),
    a4 = n(215026),
    a7 = n(66834),
    a8 = n(964486),
    a5 = n(351001),
    a6 = n(400528);
function a9(e) {
    let { text: t, icon: n, onClick: l, disabled: i, submitting: s } = e;
    return (0, a.jsx)(eS.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, a.jsx)(aN.K, {
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
var re = n(39470),
    rt = n(145530),
    rn = n(905499),
    rl = n(406810),
    ri = n(991982),
    rs = n(838111),
    ra = n(870136);
function rr(e) {
    let { channel: t, message: l, snapshot: i } = e,
        { moderatorReport: s } = i,
        o = s?.reported_user_id,
        c = (0, h.bG)([lq.default], () => (null != o ? lq.default.getUser(o) : null)),
        d = (0, h.bG)([t6.A], () => t6.A.getGuild(t.guild_id));
    (0, a1.ml)(l);
    let u = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, h.bG)([a6.A], () => null != l && a6.A.isUserBanned(l.id)),
                o = null != l && null == s,
                [c, d] = r.useState(o),
                u = (0, h.bG)([tg.A], () => null != l && null != i && (0, a5.fJ)(l, i, [tg.A]));
            if (
                ((0, a8.Ay)(() => {
                    o && a7.A.searchGuildBans(t.guild_id, void 0, [l?.id]).finally(() => d(!1));
                }),
                !u)
            )
                return null;
            let m = !0 === s ? eP.intl.string(re.default.dpfwQ1) : eP.intl.string(re.default.ASv23S),
                g = `ban-user-${l?.id}`;
            return (0, a.jsx)(
                a9,
                {
                    text: m,
                    icon: a4.w,
                    onClick: function () {
                        null != l &&
                            (0, io.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("420282"), n.e("802504")]).then(
                                    n.bind(n, 333179),
                                );
                                return (n) => (0, a.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: !0 === s || c,
                    submitting: c,
                    color: a3.$n.Colors.RED,
                },
                g,
            );
        })({ channel: t, user: c, guild: d }),
        m = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, h.bG)([tg.A], () => null != l && null != i && (0, a5.KX)(l, i, [tg.A])),
                r = (0, h.bG)([iG.Ay], () => null == l || null == iG.Ay.getMember(t.guild_id, l.id));
            if (!s) return null;
            let o = r ? eP.intl.string(re.default.Ux67nW) : eP.intl.string(re.default["snp/lJ"]),
                c = `kick-user-${l?.id}`;
            return (0, a.jsx)(
                a9,
                {
                    text: o,
                    icon: rn.N,
                    onClick: function () {
                        null != l &&
                            (0, io.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("253335"), n.e("140243")]).then(
                                    n.bind(n, 547166),
                                );
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
                    s = (0, h.bG)([tg.A], () => null != n && null != l && (0, a5.Kd)(n, l, [tg.A])),
                    { messageReference: r } = t,
                    o = (0, h.bG)([ep.A], () => (null != r ? ep.A.getMessage(r.channel_id, r.message_id) : null)),
                    c = (0, h.bG)([e1.A], () => (null != o ? e1.A.getChannel(o.channel_id) : null)),
                    d = (0, h.bG)([e1.A], () => e1.A.getChannel(i.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let u = null == o ? eP.intl.string(re.default["0IZbwC"]) : eP.intl.string(re.default.Uj6oD4),
                    m = null == o,
                    g = `delete-message-${t.id}`;
                return (0, a.jsx)(
                    a9,
                    {
                        text: u,
                        icon: tV.TrashIcon,
                        onClick: function () {
                            null != c &&
                                null != o &&
                                rt.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: i.id });
                        },
                        disabled: m,
                        color: a3.$n.Colors.RED,
                    },
                    g,
                );
            })({ channel: t, message: l, user: c, guild: d }),
            u,
            m,
            (function (e) {
                let { channel: t, user: n, guild: l } = e,
                    i = (0, h.bG)(
                        [lq.default, t6.A, tg.A],
                        () => null != n && null != l && (0, rs.b)(l.id, n.id, [lq.default, t6.A, tg.A]),
                    ),
                    [s, r] = (0, ra.Ay)(n?.id, t.guild_id),
                    o = (0, h.bG)([iG.Ay], () => null != l && null != n && null != iG.Ay.getMember(l.id, n.id));
                if (!i || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, a.jsx)(
                    a9,
                    {
                        text: r ? eP.intl.string(re.default["6uMZbv"]) : eP.intl.string(re.default["Sgg/uI"]),
                        icon: rl.ClockIcon,
                        onClick: function () {
                            null != n && (0, ri.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
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
function ro(e) {
    let { message: t, channel: n } = e;
    return (0, a.jsx)(a.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, a.jsx)(rr, { channel: n, message: t, snapshot: e }, l)),
    });
}
var rc = n(152007),
    rd = n(867455),
    ru = n(435470),
    rh = n(473503),
    rm = n(853742),
    rg = n(371476),
    rp = n(356974),
    rA = n(65406);
function rf(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        i = (0, a0.uW)(t),
        [s, o] = r.useState(!1);
    function c() {
        (o(!0),
            aQ.A.resolveFlag(t.id).then(() => {
                o(!1);
            }));
    }
    return i
        ? (0, a.jsx)(eL.$, {
              size: "sm",
              variant: "secondary",
              text: l ? eP.intl.string(re.default["2Y4vkk"]) : eP.intl.string(re.default.YIbR4r),
              onClick: function () {
                  !0 === av.w.get(a2.f)
                      ? c()
                      : (0, io.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, a.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: ab.CheckmarkLargeIcon,
              disabled: l,
          })
        : null;
}
function rx(e) {
    let {
            postId: t,
            isFirstMessage: n,
            isLastItem: l = !1,
            parentChannelId: i,
            hideDivider: s = !1,
            hideFollowButton: o = !1,
            hideUnfollowButton: d = !1,
            className: u,
        } = e,
        { ref: m, width: g } = (0, aD.Ay)(),
        [p, A] = r.useState(3),
        [f, x] = r.useState(!n),
        [C, E] = (0, aL.A)(!1, 2e3),
        S = (0, h.bG)([e1.A], () => e1.A.getChannel(t), [t]),
        { firstMessage: I } = (0, rh.OA)(S),
        j = (0, h.bG)([rc.A], () => rc.A.hasJoined(t)),
        { disableReactionUpdates: _, disableReactionCreates: v, isLurking: b, isPendingMember: T } = (0, az.A)(S),
        N = (0, a1.W1)(S),
        M = (0, h.bG)([e1.A], () => e1.A.getChannel(i)),
        R = (0, ru.Ck)(M),
        D = (0, h.bG)([ak.A], () => ak.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        L = r.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    x((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    if (
        (r.useLayoutEffect(() => {
            let e = m.current;
            if (null == e || !n) return;
            let t = new IntersectionObserver(L, { threshold: 1 });
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
        null == S)
    )
        return null;
    let k = null != I && I.reactions.length > 0;
    function P() {
        null != S &&
            ((0, rm.jC)({ postId: S.id, location: { section: eu.JJy.CHANNEL_HEADER } }),
            (0, tp.C)((0, aG.af)(S, M), () => E(!0)));
    }
    let O = j ? ab.CheckmarkLargeIcon : aT.BellIcon;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: c()(rg.kL, { [rg.wx]: f }, u),
                ref: m,
                children: [
                    N
                        ? (0, a.jsx)("div", {
                              className: rg.kX,
                              children: null != I && (0, a.jsx)(ro, { message: I, channel: S }),
                          })
                        : (0, a.jsx)("div", {
                              className: rg.hY,
                              children:
                                  null != I &&
                                  (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          !k &&
                                              !v &&
                                              null != R &&
                                              (0, a.jsx)("div", {
                                                  className: rp.reactions,
                                                  children: (0, a.jsx)(aX.q, {
                                                      message: I,
                                                      readOnly: !1,
                                                      useChatFontScaling: !1,
                                                      isLurking: b,
                                                      isPendingMember: T,
                                                      emoji: R,
                                                      type: aV.v.NORMAL,
                                                      hideCount: !0,
                                                      count: 0,
                                                      me: !1,
                                                      burst_count: 0,
                                                      me_burst: !1,
                                                      emojiSize: "reaction",
                                                  }),
                                              }),
                                          (0, a.jsx)(aY.A, {
                                              message: I,
                                              channel: S,
                                              disableReactionCreates: !0,
                                              disableReactionUpdates: _,
                                              isLurking: b,
                                              isPendingMember: T,
                                              maxReactions: p,
                                              className: rg.Br,
                                              useChatFontScaling: !1,
                                              isForumToolbar: !0,
                                              forceHideReactionCreates: !0,
                                          }),
                                          !v &&
                                              (0, a.jsx)(aW.t, {
                                                  message: I,
                                                  channel: S,
                                                  useChatFontScaling: !1,
                                                  className: c()(rA.secondary, rg.vU, rp.visible, { [rg.w$]: !k }),
                                                  isForumToolbar: !0,
                                                  children: !k && eP.intl.string(eP.t.xpOyTO),
                                              }),
                                      ],
                                  }),
                          }),
                    (0, a.jsxs)("div", {
                        className: rg.Uo,
                        children: [
                            N
                                ? (0, a.jsx)(rf, { channel: S })
                                : !b &&
                                  (!o || j) &&
                                  (!d || !j) &&
                                  (0, a.jsx)(eS.m, {
                                      text: eP.intl.string(eP.t.F7oeDv),
                                      children: (0, a.jsx)(eL.$, {
                                          icon: O,
                                          size: "sm",
                                          variant: "secondary",
                                          text: j ? eP.intl.string(eP.t["7OkUzs"]) : eP.intl.string(eP.t["3aOv+h"]),
                                          onClick: function () {
                                              null != S &&
                                                  (j
                                                      ? rd.A.leaveThread(S, "Forum Toolbar")
                                                      : rd.A.joinThread(S, "Forum Toolbar"));
                                          },
                                      }),
                                  }),
                            (0, a.jsx)(eS.m, {
                                text: eP.intl.string(eP.t.WqhZss),
                                children: C
                                    ? (0, a.jsx)(eL.$, {
                                          icon: ab.CheckmarkLargeIcon,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          text: eP.intl.string(eP.t.t5VZ88),
                                      })
                                    : (0, a.jsx)(aN.K, {
                                          icon: tD.LinkIcon,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          "aria-label": eP.intl.string(eP.t.WqhZss),
                                      }),
                            }),
                            f &&
                                (0, a.jsx)(eS.m, {
                                    text: eP.intl.string(eP.t.nFP4oa),
                                    children: (0, a.jsx)(aN.K, {
                                        icon: aM.D,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: function () {
                                            null != S &&
                                                y.A.jumpToMessage({
                                                    channelId: S.id,
                                                    messageId: S.id,
                                                    flash: !0,
                                                    jumpType: aR.vx.INSTANT,
                                                });
                                        },
                                        "aria-label": eP.intl.string(eP.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            D && (0, a.jsx)(aK, { threadId: t }),
            !s && (0, a.jsx)(aJ, { channel: S, isLastItem: l }),
        ],
    });
}
var rC = n(364522),
    rE = n(80682),
    rS = n(763899),
    rI = n(983851),
    rj = n(104171),
    ry = n(262763),
    r_ = n(499211),
    rv = n(763827),
    rb = n(977997),
    rT = n(607567),
    rN = n(917592),
    rM = n(490094),
    rR = n(477569);
function rD(e) {
    let { channel: t, className: n } = e,
        l = (0, tc._M)(t),
        i = (0, tc.gZ)(t),
        s = (0, h.bG)([rb.A], () => rb.A.isInChannel(t.id)),
        o = (0, h.bG)([rT.Ay], () => rT.Ay.getVoiceStatesForChannel(t), [t]),
        { needSubscriptionToAccess: d } = (0, r_.A)(t.id),
        u = (0, h.bG)([rv.A], () => (rv.A.getChannelId() === t.id ? rv.A.getState() : eu.S7L.RTC_DISCONNECTED), [t.id]),
        m = r.useCallback(() => {
            ry.A.handleVoiceConnect({ channel: t, connected: s, needSubscriptionToAccess: d, locked: !1 });
        }, [t, s, d]),
        g = r.useMemo(() => o.map((e) => e.user.id), [o]),
        p = (0, ru.$I)(t, g),
        A = p.length > 0,
        { connectionStatusText: f } = rN.A.getStatus(u, !1);
    return (0, a.jsxs)("div", {
        className: n,
        children: [
            (0, a.jsx)(eS.m, {
                text: i ? (l ? void 0 : eP.intl.string(rM.default.yaoRu1)) : eP.intl.string(rM.default.yBjQ3q),
                caretConfig: { position: "bottom", align: "start" },
                align: "left",
                children: (0, a.jsxs)(eI.D, {
                    className: c()(rR.Xt, l ? null : rR.tW),
                    onClick: l ? m : void 0,
                    children: [
                        (0, a.jsx)(rI.H, {
                            size: "refresh_sm",
                            color: s ? q.A.colors.STATUS_POSITIVE : q.A.colors.ICON_MUTED,
                        }),
                        (0, a.jsx)(ev.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: rR.Gp,
                            children: u === eu.S7L.RTC_DISCONNECTED ? eP.intl.string(rM.default.ficpp7) : f,
                        }),
                    ],
                }),
            }),
            A
                ? (0, a.jsx)(rj.Ay, {
                      className: rR.L_,
                      guildId: t.guild_id,
                      users: p,
                      size: rj.DN.SIZE_24,
                      showUserPopout: !0,
                  })
                : null,
        ],
    });
}
var rL = n(950490);
function rk(e) {
    let { message: t, compact: n, channel: l, id: i } = e,
        s = (0, iZ.kt)(l),
        o = (0, lw.IO)(l),
        c = t?.author.id,
        d = (0, r.useMemo)(() => (null != c ? { [l.guild_id]: [c] } : {}), [l.guild_id, c]);
    return (
        (0, rE.Eq)(d, "GameInviteChannelFirstMessage"),
        (0, a.jsxs)("div", {
            className: rL.TX,
            children: [
                (0, a.jsxs)(rC.Ar, {
                    children: [
                        null != t
                            ? (0, a.jsx)("ol", {
                                  children: (0, a.jsx)(n$, {
                                      className: rL.iU,
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
                            className: rL.iQ,
                            children: [
                                null == t &&
                                    (0, a.jsx)(ev.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: eP.intl.string(eP.t.mE3KJN),
                                    }),
                                s.length > 0 &&
                                    (0, a.jsx)("div", {
                                        className: rL.GA,
                                        children: s.map((e) =>
                                            (0, a.jsx)(iJ.Ay, { tag: e, size: iJ.Ay.Sizes.SMALL }, e.id),
                                        ),
                                    }),
                                t?.activity != null &&
                                    (0, a.jsx)(rS.A, {
                                        channel: l,
                                        message: t,
                                        hideParty: !1,
                                        hideInviteEmbedBanner: !0,
                                    }),
                                (0, a.jsx)("div", { className: rL.b1 }),
                                (0, a.jsx)(rx, {
                                    className: rL.Jr,
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
                                            (0, a.jsx)("div", { className: rL.b1 }),
                                            (0, a.jsx)(rD, { channel: l }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", { className: rL.ld }),
            ],
        })
    );
}
var rP = n(640708),
    rO = n(378570),
    rG = n(452082),
    rU = n(327337);
function rw(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = r.useCallback(() => {
            (0, ig.xi)(t, [l]);
        }, [t, l]),
        o = (0, h.bG)([nM.A], () => nM.A.isBlocked(i)),
        c = r.useMemo(
            () => ({ channelId: t, warningId: l, senderId: i, warningType: ip._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, l, i],
        );
    r.useEffect(() => {
        ((0, iA.QF)({ ...c, viewName: iA.gN.SAFETY_WARNING_BANNER }),
            id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW }));
    }, [c]);
    let d = r.useCallback(
            (e) => {
                (0, iA._$)({ ...c, cta: e });
            },
            [c],
        ),
        u = r.useCallback(() => {
            ((0, io.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("456510"),
                        n.e("506627"),
                        n.e("770940"),
                        n.e("302033"),
                        n.e("882830"),
                        n.e("623068"),
                        n.e("720516"),
                    ]).then(n.bind(n, 516567));
                    return (n) => {
                        let { transitionState: s, onClose: r } = n;
                        return (0, a.jsx)(e, {
                            otherUserId: i,
                            channelId: t,
                            warningId: l,
                            warningType: ip._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: r,
                        });
                    };
                },
                { modalKey: rU.V },
            ),
                d(iA.Wm.USER_BANNER_OPEN_SAFETY_TOOLS));
        }, [t, i, l, d]),
        m = r.useCallback(() => {
            (s(), d(iA.Wm.USER_BANNER_BLOCK_CONFIRM));
        }, [s, d]),
        g = r.useCallback(() => {
            (s(), d(iA.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM));
        }, [s, d]),
        p = r.useCallback(() => {
            (0, io.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("770940"), n.e("784938")]).then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: s } = n;
                    return (0, a.jsx)(e, {
                        transitionState: l,
                        onBlock: m,
                        onBlockAndReport: g,
                        onCancel: () => {
                            (s?.(), d(iA.Wm.USER_BANNER_BLOCK_CANCEL));
                        },
                        onClose: s,
                        userId: i,
                        channelId: t,
                    });
                };
            });
        }, [m, g, i, t, d]);
    return (0, a.jsx)(iS, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: ip._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: eP.intl.string(eP.t.ZzlB5p),
        description: eP.intl.string(eP.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: eP.intl.string(eP.t.Qyu4UK), variant: "primary", onClick: u },
            ...(o ? [] : [{ text: eP.intl.string(eP.t["7q0bNY"]), variant: "secondary", onClick: p }]),
        ],
    });
}
var rF = n(74114);
function rB(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: i } = (0, h.cf)([nM.A], () => ({ isIgnored: nM.A.isIgnored(t) }), [t]),
        s = r.useCallback(() => {
            ((0, iA._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: ip._j.STRANGER_DANGER,
                cta: iA.Wm.USER_MODAL_IGNORE,
            }),
                aa.A.ignoreUser(t, "web_stranger_danger_more", n));
        }, [n, l, t]),
        o = r.useCallback(() => {
            ((0, iA._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: ip._j.STRANGER_DANGER,
                cta: iA.Wm.USER_MODAL_UNIGNORE,
            }),
                aa.A.unignoreUser(t, "web_stranger_danger_more", n));
        }, [n, l, t]);
    return (0, a.jsx)(im.PQ, {
        title: eP.intl.string(eP.t.avyV7P),
        description: eP.intl.string(eP.t.naWE6W),
        buttonText: i ? eP.intl.string(eP.t["3SrzRT"]) : eP.intl.string(eP.t.avyV7P),
        onButtonPress: i ? o : s,
    });
}
function rH(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        { isBlocked: s } = (0, h.cf)([nM.A], () => ({ isBlocked: nM.A.isBlocked(i) }), [i]),
        o = r.useCallback(() => {
            (0, ig.xi)(t, [l]);
        }, [t, l]),
        c = (0, rU.eT)(),
        d = r.useCallback(
            (e) => () => {
                (aa.A.blockUser(i, { location: rU.Rx }).then(() => {
                    o();
                }),
                    (0, iA._$)({
                        channelId: t,
                        warningId: l,
                        senderId: i,
                        warningType: ip._j.STRANGER_DANGER,
                        cta: e,
                    }));
            },
            [o, t, l, i],
        );
    function u(e, s, r) {
        (0, io.openModalLazy)(async () => {
            let { default: o } = await Promise.all([n.e("283887"), n.e("14788"), n.e("367554")]).then(
                n.bind(n, 219801),
            );
            return (n) =>
                (0, a.jsx)(o, {
                    ...n,
                    userId: i,
                    confirmBlock: d(e),
                    onCancel: () => {
                        (r?.(),
                            (0, iA._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: ip._j.STRANGER_DANGER,
                                cta: s,
                            }));
                    },
                });
        });
    }
    return (
        r.useEffect(() => {
            ((0, iA.mO)(eu.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: ip._j.STRANGER_DANGER,
            }),
                id.A.increment({ name: ir.K.SAFETY_WARNING_VIEW }));
        }, [t, l, i]),
        (0, a.jsx)(iS, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: ip._j.STRANGER_DANGER,
            header: eP.intl.string(eP.t.iOkDpM),
            description: eP.intl.string(eP.t.ISUbcM),
            onDismiss: o,
            buttons: [
                {
                    text: eP.intl.string(eP.t["Qk/c48"]),
                    variant: "primary",
                    onClick: function () {
                        ((function e() {
                            (0, io.openModalLazy)(async () => {
                                let { default: s } = await Promise.all([
                                    n.e("532648"),
                                    n.e("482911"),
                                    n.e("547894"),
                                ]).then(n.bind(n, 129493));
                                return (n) => {
                                    let { transitionState: r, onClose: o } = n;
                                    return (0, a.jsx)(s, {
                                        transitionState: r,
                                        onClose: o,
                                        channelId: t,
                                        warningId: l,
                                        senderId: i,
                                        description: eP.intl.string(eP.t.DJMZX6),
                                        safetyTipRows: c.map((e, t) =>
                                            (0, a.jsx)(ih.B, { index: t, listType: "numbered", title: e }, t),
                                        ),
                                        actionRows: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(
                                                    rB,
                                                    { senderId: i, channelId: t, warningId: l },
                                                    "more-tips-button",
                                                ),
                                                (0, a.jsx)(
                                                    im.PQ,
                                                    {
                                                        title: eP.intl.string(eP.t["5QYPO2"]),
                                                        description: eP.intl.string(eP.t.G08MKu),
                                                        buttonText: eP.intl.string(eP.t["5QYPO2"]),
                                                        buttonVariant: "critical-primary",
                                                        onButtonPress: () => {
                                                            (o(),
                                                                u(
                                                                    iA.Wm.USER_MODAL_BLOCK_CONFIRM,
                                                                    iA.Wm.USER_MODAL_BLOCK_CANCEL,
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
                            (0, iA._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: ip._j.STRANGER_DANGER,
                                cta: iA.Wm.OPEN_MORE_TIPS,
                            }));
                    },
                },
                ...(s
                    ? []
                    : [
                          {
                              text: eP.intl.string(eP.t.ie0QdN),
                              variant: "critical-primary",
                              onClick: () => u(iA.Wm.USER_BANNER_BLOCK_CONFIRM, iA.Wm.USER_BANNER_BLOCK_CANCEL),
                          },
                      ]),
            ],
        })
    );
}
var rK = n(306788),
    rV = n(340833),
    rz = n(913642),
    rW = n(453302),
    r$ = n(670455),
    rq = n(912104);
function rZ(e) {
    let { summary: t, channel: n } = e,
        l = (0, aP.bG)([lK.A], () => lK.A.summaryFeedback(t));
    function i(e, l) {
        (e.stopPropagation(), (0, rW.A)({ summary: t, channel: n, rating: l }));
    }
    let s = (0, X.p)(
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
                      className: rq.RD,
                      children: (0, a.jsxs)(d.animated.div, {
                          style: e,
                          className: rq.GK,
                          children: [
                              (0, a.jsx)(ev.E, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: eP.intl.string(eP.t["5ZsiE9"]),
                              }),
                              (0, a.jsx)(eI.D, {
                                  onClick: (e) => i(e, r$.P0.GOOD),
                                  children: (0, a.jsx)(rz.A, { className: rq.O1, width: 12, height: 12 }),
                              }),
                              (0, a.jsx)(eI.D, {
                                  onClick: (e) => i(e, r$.P0.BAD),
                                  children: (0, a.jsx)(rV.A, { className: rq.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function rJ(e) {
    let t,
        { item: n, channel: l, index: i } = e,
        s = (0, aP.bG)([lK.A], () => lK.A.selectedSummary(l.id));
    if (null == s) return null;
    let r = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(rK.K, { size: "xs", color: "currentColor", className: rq.cR }), n.content],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(rZ, { summary: s, channel: l }),
                      (0, a.jsx)(rK.K, { size: "xs", color: "currentColor", className: rq.Jq }),
                  ],
              })),
        (0, a.jsx)(
            nX.A,
            {
                className: c()(rq.aK, o ? rq.Ke : rq.hO),
                contentClassName: o ? rq.Ew : rq.rD,
                isUnread: r,
                id: r ? nV.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? i}`,
        )
    );
}
var rY = n(383233),
    rX = n(309010),
    rQ = n(675171),
    r0 = n(806621),
    r1 = n(636922),
    r2 = n(857740);
let r3 = r.memo(function (e) {
    let { loading: t, onClick: n } = e,
        l = r.useCallback(() => {
            t || n();
        }, [t, n]);
    return (0, a.jsx)(eI.D, {
        className: c()(r2.XI, { [r2.Lq]: t }),
        onClick: l,
        "aria-label": eP.intl.string(t ? eP.t.hC8KHg : eP.t.XBlaiC),
        children: (0, a.jsx)(ev.E, {
            variant: "text-sm/normal",
            color: "text-link",
            className: r2.Qq,
            children: t ? eP.intl.string(eP.t.hC8KHg) : eP.intl.string(eP.t.XBlaiC),
        }),
    });
});
var r4 = n(684519),
    r7 = n(330001),
    r8 = n(631576),
    r5 = n(750385),
    r6 = n(148355),
    r9 = n(845321);
let oe = "749054660769218631";
function ot(e) {
    let { channel: t } = e,
        [n, l] = r.useState("");
    r.useEffect(() => {
        (0, r8.zk)("847199849233514549", !0);
    }, []);
    let i = (0, h.bG)(
            [ep.A, eo.default],
            () =>
                !!ln()(ep.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== eo.default.getId() && e.state === eu.cmJ.SENT && !(0, e8.A)(e)),
        ),
        s = (0, h.bG)([lq.default], () => lq.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        o = iU.Ay.useName(s) ?? eP.intl.string(eP.t.y1Wu2f),
        c = (0, h.bG)([r5.A], () => r5.A.getStickerById(oe)),
        d = r.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    ((0, r7.W)({ channelId: t.id, source: "In-channel greet" }), await y.A.sendGreetMessage(t.id, oe));
                } catch (e) {
                    e.ok || 429 !== e.status || l(eP.intl.string(eP.t.Whhv4w));
                }
        }, [t.id, n]),
        u = eP.intl.formatToPlainString(eP.t.m0zYbV, { username: o }),
        m =
            null != n && "" !== n
                ? (0, a.jsx)(ev.E, {
                      className: r9.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return i
        ? (0, a.jsxs)("div", {
              className: r9.ft,
              children: [
                  (0, a.jsxs)(eI.D, {
                      className: null != n && "" !== n ? r9.AO : r9.Iq,
                      "aria-label": eP.intl.string(eP.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, a.jsx)(r6.A, { sticker: c, size: 24 }),
                          (0, a.jsx)(ev.E, { className: r9.Qq, variant: "text-md/medium", children: u }),
                      ],
                  }),
                  m,
              ],
          })
        : (0, a.jsxs)("div", {
              className: r9.nj,
              children: [
                  (0, a.jsx)(r6.A, { sticker: c, size: 160, className: r9.Xr }),
                  (0, a.jsx)(eL.$, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: d,
                      disabled: !!n,
                      text: u,
                  }),
                  m,
              ],
          });
}
var on = n(900210),
    ol = n(626360);
function oi(e) {
    return null != e && e.type === eu.TZK.MESSAGE && e.content.id === e.groupId;
}
function os(e) {
    return (
        e.type === eu.TZK.MESSAGE_GROUP_BLOCKED ||
        e.type === eu.TZK.MESSAGE_GROUP_IGNORED ||
        e.type === eu.TZK.MESSAGE_GROUP_SPAMMER ||
        e.type === eu.TZK.MESSAGE_GROUP_SUSPENDED_USER
    );
}
let oa = r.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: i, compact: s } = e;
    return (0, a.jsx)(r1.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new rY.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: eu.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, a.jsx)(iy.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var or = n(33176);
let oo = { bottom: 16 },
    oc = (0, d.animated)(S);
function od(e) {
    let t,
        n,
        l,
        i,
        {
            className: s,
            messageGroupSpacing: o,
            scrollerClassName: d,
            channel: m,
            messages: g,
            unreadCount: p,
            showNewMessagesBar: A,
            messageDisplayCompact: f,
            channelStream: x,
            uploads: C,
            hasUnreads: E,
            editingMessageId: S,
            fontSize: N,
            keyboardModeEnabled: M,
            filterAfterTimestamp: R,
            showingQuarantineBanner: D,
            hideSummaries: L = !1,
            jumpBarClassName: k,
            typingGradient: U,
            isGameInvitesPost: w,
        } = e,
        [F, B] = r.useState(lz.A.isAtBottom(m.id) ?? !0),
        H = (0, P.Ay)(m),
        V = (0, lY.I)(f, N),
        z = f ? V : Math.round(0.87 * V),
        W = Math.max(1, Math.round((z / 30) * 8)),
        $ = r.useMemo(
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
                    let r = s / eu.hH7.FONT_SIZE_DEFAULT,
                        o = t ? n3.BP : n3.B5,
                        c = t ? n3.Uj : n3._G,
                        d = 0,
                        u = Array(n)
                            .fill(null)
                            .map(() => {
                                let e = ln().random(1, l);
                                return ((d += a * r), (d += o * r), (d += (e - 1) * c * r), e);
                            }),
                        h = u.map((e, t) => t),
                        m = [];
                    for (; m.length < i;) {
                        let e = { width: ln().random(140, 400), height: ln().random(100, 320) };
                        (m.push([h.splice(ln().random(0, h.length - 1), 1)[0], e]), (d += e.height + n3.VF * r));
                    }
                    return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                })({ compact: f, messageGroups: z, groupRange: 4, attachments: W, fontSize: N, groupSpacing: o }),
            [f, z, W, N, o],
        ),
        q = (0, h.bG)([lB.A], () =>
            tg.A.can(eu.xBc.READ_MESSAGE_HISTORY, m) ? null : lB.A.getViewingRolesTimestamp(m.getGuildId()),
        ),
        Z = R ?? q,
        J = g.hasMoreBefore && null == Z,
        Y = J ? $.totalHeight : 0,
        X = g.hasMoreAfter ? $.totalHeight : 0,
        Q = (function (e) {
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
                { windowId: m } = r.useContext(l8.Ay),
                [g] = r.useState(
                    () =>
                        new ii({
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
            hasUnreads: E,
            focusId: S,
            topPlaceholderHeight: Y,
            bottomPlaceholderHeight: X,
            canLoadMore: null == R,
            handleScrollToBottom: r.useCallback(() => B(!0), [B]),
            handleScrollFromBottom: r.useCallback(() => B(!1), [B]),
            additionalMessagePadding: 48,
        }),
        ee = (0, G.sV)(m.guild_id, "message_stream"),
        ei = (function (e) {
            let { scrollerRef: t, ...n } = e,
                l = (0, v.A)(() => {
                    let e = t.current;
                    return null == e
                        ? Promise.resolve()
                        : new Promise((t) => {
                              e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                          });
                }),
                i = (0, v.A)(() => {
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
                            t.current?.scrollIntoViewNode({ node: i, padding: 4 * nV.mZ, callback: () => i?.focus() });
                    },
                    [n.keyboardModeEnabled, t],
                ),
                a = r.useCallback(() => {
                    n.hasMoreAfter || eA._.dispatchToLastSubscribed(eu.jej.TEXTAREA_FOCUS);
                }, [n.hasMoreAfter]),
                o = (0, l1.Ay)({
                    id: e7.D,
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
            return ((0, lZ.Vo)({ event: eu.jej.FOCUS_MESSAGES, handler: c }), o);
        })({ scrollerRef: Q.ref, isEditing: null != S, keyboardModeEnabled: M, hasMoreAfter: g.hasMoreAfter }),
        {
            channelStreamMarkup: es,
            newMessagesBar: ea,
            jumpToPresentBar: er,
            forumPostActionBar: eo,
            pinnedFirstMessage: ec,
            safetyWarningBanner: ed,
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
                    messageDisplayCompact: u,
                    channelStream: m,
                    uploads: g,
                    loadMore: p,
                    scrollManager: A,
                    specs: f,
                    filterAfterTimestamp: x,
                    hasTopPlaceholders: C,
                    showingQuarantineBanner: E,
                    hideSummaries: S,
                    jumpBarClassName: I,
                    isGameInvitesPost: j,
                } = e,
                v = lq.default.getCurrentUser();
            function N() {
                return A.isInitialized() || o.ready;
            }
            let M = (0, r0.r)(s),
                R = m.some((e) => e.type === eu.TZK.FORUM_POST_ACTION_BAR),
                D = (0, _.cI)(s),
                L = (0, h.bG)([lK.A], () => lK.A.shouldShowTopicsBar() && !S),
                k = (0, rF.l)(s.id),
                P = (0, rG.j)(s.id, rU.Rx),
                O = (0, ia.E)(s.id),
                G = (0, rQ.A)(),
                U = (function (e, t) {
                    if (e.isDM() && null != t)
                        if (t.type === ip._j.STRANGER_DANGER)
                            return (0, a.jsx)(rH, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else if (t.type === ip._j.LIKELY_ATO)
                            return (0, a.jsx)(ij, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                        else return (0, a.jsx)(rw, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                    return null;
                })(s, k ?? P ?? O),
                w = !s.isForumPost() || R || j ? null : (0, a.jsx)(rx, { postId: s.id }),
                { firstMessage: F, loaded: B } = (0, lw.n5)(s, j),
                H =
                    j && B
                        ? (0, a.jsx)(
                              rk,
                              {
                                  compact: u,
                                  channel: s,
                                  message: F,
                                  id: null != F ? (0, e7.j)(s.id, F.id) : `deleted-${s.id}`,
                              },
                              F?.id ?? `deleted-${s.id}`,
                          )
                        : null,
                K = (0, iT.A)(s.id),
                V = (0, a1.W1)(s);
            ((t = e0.Sf.useSetting()),
                (n = (0, aP.bG)([b.Ay], () => b.Ay.useReducedMotion)),
                r.useEffect(() => {
                    function e(e) {
                        let { messageId: l, channelId: i, emoji: s, optimistic: a, reactionType: r } = e;
                        a ||
                            r !== aV.v.BURST ||
                            !t ||
                            n ||
                            (0, t2.on)({ channelId: i, messageId: l, emoji: s, key: on.W.EXTERNAL });
                    }
                    return (
                        T.h.subscribe("MESSAGE_REACTION_ADD", e),
                        () => {
                            T.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                        }
                    );
                }, [t, n]));
            let z = null,
                W = [],
                $ = m.map((e, t) => {
                    if (e.type === eu.TZK.DIVIDER) {
                        let n = null != e.unreadId;
                        return null != x
                            ? null
                            : e.isConversationChannelHeader
                              ? (0, a.jsx)(iv, { channel: s, scrollManager: A }, `conversation-${e.contentKey ?? t}`)
                              : e.isSummaryDivider
                                ? (0, a.jsx)(
                                      rJ,
                                      {
                                          index: t,
                                          item: e,
                                          channel: s,
                                          isBeforeGroup: null == e.content && oi(m[t + 1]),
                                      },
                                      `summary-divider-${e.contentKey ?? t}`,
                                  )
                                : (0, a.jsx)(
                                      nX.A,
                                      {
                                          isUnread: n,
                                          isBeforeGroup: null == e.content && oi(m[t + 1]),
                                          id: n ? nV.q4 : void 0,
                                          itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                          children: e.content,
                                      },
                                      `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                  );
                    }
                    if (e.type === eu.TZK.FORUM_POST_ACTION_BAR)
                        return (0, a.jsx)(
                            rx,
                            {
                                parentChannelId: s.parent_id,
                                postId: s.id,
                                isLastItem: t + 1 === m.length,
                                isFirstMessage: !0,
                            },
                            `forum-post-action-bar-${s.id}`,
                        );
                    if (os(e)) {
                        let t,
                            n = !0;
                        return (
                            e.type === eu.TZK.MESSAGE_GROUP_BLOCKED
                                ? (t = eP.t["+FcYM/"])
                                : e.type === eu.TZK.MESSAGE_GROUP_IGNORED
                                  ? (t = eP.t["VFWjc+"])
                                  : e.type === eu.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                    ? ((t = eP.t.rHRovo), (n = !1))
                                    : (t = eP.t.xfkfTK),
                            (0, a.jsx)(
                                n2,
                                {
                                    unreadId: nV.q4,
                                    messages: e,
                                    channel: s,
                                    compact: u,
                                    collapsedReason: t,
                                    canUncollapse: n,
                                },
                                e.key,
                            )
                        );
                    }
                    if (null != x && x > e.content.timestamp.getTime()) return;
                    e.type === eu.TZK.MESSAGE && null == z && (z = e);
                    let n = e.groupId === z?.groupId ? z.content.id : e.groupId,
                        l = V && e.content.isFirstMessageInForumPost(s),
                        i = e.type === eu.TZK.THREAD_STARTER_MESSAGE ? nz : n$;
                    return (0, a.jsx)(
                        i,
                        {
                            compact: u && !l,
                            channel: s,
                            message: e.content,
                            groupId: n,
                            flashKey: e.flashKey,
                            id: (0, e7.j)(s.id, e.content.id),
                            isLastItem: t >= m.length - 1,
                            renderContentOnly: K || l,
                        },
                        e.content.id,
                    );
                });
            W.push(...$);
            let q = m[m.length - 1];
            if (
                (null != v &&
                    g.forEach((e, t) => {
                        let n = 0 === t && (0, el.l)(s, q, new rY.Ay({ type: eu.lAJ.DEFAULT, author: v }));
                        W.push(
                            (0, a.jsx)(
                                oa,
                                { file: e, channel: s, user: v, isGroupStart: n, compact: u },
                                `upload-${e.id}`,
                            ),
                        );
                    }),
                C)
            ) {
                o.length > 0 &&
                    (o.length > 1 &&
                        o.length < eu.UNo &&
                        (function (e) {
                            let t = 0,
                                n = 0;
                            for (let l of e)
                                l.type !== eu.TZK.DIVIDER &&
                                    (os(l)
                                        ? (t += l.content.filter((e) => e.type !== eu.TZK.DIVIDER).length)
                                        : (n += 1));
                            return t > n;
                        })(m) &&
                        W.unshift(
                            (0, a.jsx)(
                                r3,
                                {
                                    loading: o.loadingMore,
                                    onClick: () => p(!1, { pauseUntilUserScroll: !0, truncate: !1 }),
                                },
                                "load-more-before",
                            ),
                        ),
                    W.unshift((0, a.jsx)("div", { style: { height: nV.N0, flex: "0 0 auto" } }, "buffer")));
                let { useReducedMotion: e } = b.Ay;
                ((e && N()) || !e) && W.unshift((0, a.jsx)(lQ, { compact: u, ...f }, "has-more"));
            }
            if (
                (C || j || W.unshift((0, a.jsx)(a_, { channel: s, showingBanner: E }, "empty-message")),
                o.hasMoreAfter && W.push((0, a.jsx)(lQ, { compact: u, ...f }, "has-more-after")),
                !E && M && N() && W.push((0, a.jsx)(ot, { channel: s })),
                c > 0 && d && N())
            ) {
                let e,
                    t,
                    n = lW.Ay.getOldestUnreadTimestamp(s.id),
                    i = 0 !== n ? n : en.default.extractTimestamp(s.id),
                    r = (0, et.ro)(new Date(), new Date(i));
                if (
                    (lW.Ay.isEstimated(s.id)
                        ? ((e = r ? eP.t.wvtbbG : eP.t.tHqbtg), (t = eP.t.vaPWFe))
                        : ((e = r ? eP.t["BctFH/"] : eP.t["3wXb9P"]), (t = eP.t["4H8ldG"])),
                    D && (0, _.Kc)(s) && G.includes(ol.i.SUMMARIES))
                ) {
                    let n = lW.Ay.ackMessageId(s.id),
                        r = (function (e, t) {
                            let n = lK.A.summaries(e) ?? [],
                                l = 0;
                            for (let e of n) en.default.compare(e.endId, t) > 0 && (l += 1);
                            return l;
                        })(s.id, lW.Ay.getOldestUnreadMessageId(s.id));
                    if (
                        ((0, is.zV)(eu.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                            num_unread_summaries: r,
                            num_unread_messages: c,
                            last_ack_message_id: n,
                            summaries_enabled_by_user: L,
                            summaries_enabled_for_channel: (0, _.pk)(s),
                        }),
                        (0, _.pk)(s))
                    ) {
                        let n = L ? eP.intl.format(t, { count: c }) : eP.intl.format(e, { count: c, timestamp: i });
                        if (L) {
                            let e =
                                r > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(ev.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: eP.intl.format(t, { count: c }),
                                              }),
                                              (0, a.jsx)(rP.A, {
                                                  style: { paddingLeft: 8, paddingRight: 8 },
                                                  height: 4,
                                                  width: 4,
                                              }),
                                              (0, a.jsx)(ev.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: eP.intl.format(eP.t.CBftDc, { count: r }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(ev.E, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: n,
                                      });
                            l = (0, a.jsx)(r4.OZ, { scrollManager: A, content: e, channel: s });
                        } else {
                            let e = (0, a.jsx)("div", {
                                style: { display: "flex", textTransform: "none", alignItems: "center" },
                                children:
                                    r > 0
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(ev.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eP.intl.format(t, { count: c }),
                                                  }),
                                                  (0, a.jsx)(rP.A, {
                                                      style: { paddingLeft: 8, paddingRight: 8 },
                                                      height: 4,
                                                      width: 4,
                                                  }),
                                                  (0, a.jsx)(ev.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eP.intl.format(eP.t.CBftDc, { count: r }),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsx)(ev.E, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: n,
                                          }),
                            });
                            l = (0, a.jsx)(r4.GN, { content: e, channelId: s.id });
                        }
                    }
                } else
                    G.includes(ol.i.NEW_MESSAGES) &&
                        (l = (0, a.jsx)(r4.GN, {
                            content: eP.intl.format(e, { count: c, timestamp: i }),
                            channelId: s.id,
                        }));
            }
            if (
                (null == l &&
                    (0, _.pk)(s) &&
                    L &&
                    G.includes(ol.i.SUMMARIES) &&
                    (l = (0, a.jsx)(r4.UK, { channel: s, scrollManager: A })),
                o.error)
            )
                i = (0, a.jsx)(r4.Ez, {
                    loading: o.loadingMore,
                    onClick: () => {
                        var e;
                        return (
                            (e = s.id),
                            void y.A.fetchMessages({
                                channelId: e,
                                limit: (0, lY.h)("renderStream.reload"),
                                truncate: !0,
                            })
                        );
                    },
                    className: I,
                });
            else if (o.hasMoreAfter && N()) {
                let { jumpReturnTargetId: e } = o;
                i =
                    o.loadingMore && o.jumpedToPresent
                        ? (0, a.jsx)(r4.Ab, { className: I })
                        : null != e
                          ? (0, a.jsx)(r4.Ab, {
                                type: r4.ks.REPLY,
                                onClick: () => {
                                    y.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                },
                                className: I,
                            })
                          : (0, a.jsx)(r4.Ab, {
                                onClick: () => {
                                    let e;
                                    return (
                                        y.A.jumpToPresent(s.id, (0, lY.h)("renderStream.jumpToPresent")),
                                        (e = rX.Ay.getChannelId()),
                                        void (s.id === e && (0, rO.iN)(s.id))
                                    );
                                },
                                className: I,
                            });
            }
            return {
                channelStreamMarkup: W,
                newMessagesBar: l,
                jumpToPresentBar: i,
                forumPostActionBar: w,
                pinnedFirstMessage: H,
                safetyWarningBanner: U,
            };
        })({
            channel: m,
            messages: g,
            unreadCount: p,
            showNewMessagesBar: A,
            messageDisplayCompact: f,
            channelStream: x,
            uploads: C,
            loadMore: Q.loadMore,
            scrollManager: Q,
            specs: $,
            hasTopPlaceholders: J,
            filterAfterTimestamp: Z,
            showingQuarantineBanner: D,
            hideSummaries: L,
            jumpToPresent: function () {
                g.hasPresent()
                    ? Q.ref.current?.scrollToBottom({ animate: !b.Ay.useReducedMotion })
                    : y.A.jumpToPresent(m.id, V);
            },
            jumpBarClassName: k,
            isGameInvitesPost: w,
        });
    ((t = Q.ref),
        (n = r.useCallback(() => t.current?.scrollToBottom(), [t])),
        (l = r.useCallback(() => {
            (Q.handleUserScrollGesture(), t.current?.scrollPageUp({ animate: !b.Ay.useReducedMotion }));
        }, [Q, t])),
        (i = r.useCallback(() => {
            (Q.handleUserScrollGesture(), t.current?.scrollPageDown({ animate: !b.Ay.useReducedMotion }));
        }, [Q, t])),
        (0, lZ.Vo)({ event: eu.jej.SCROLLTO_PRESENT, handler: n }),
        (0, lZ.Vo)({ event: eu.jej.SCROLL_PAGE_UP, handler: l }),
        (0, lZ.Vo)({ event: eu.jej.SCROLL_PAGE_DOWN, handler: i }));
    let eh = (0, I.R7)(),
        { ref: em, ...eg } = (0, u.LT)(ei),
        ep = r.useRef(null),
        ef = r.useMemo(() => ({ ref: ep, padding: oo }), []),
        ex = (0, v.A)((e) => {
            let t = e?.getScrollerNode() ?? null;
            ((Q.ref.current = e), (em.current = t), (ep.current = t));
        }),
        eC = (0, h.bG)([O.A], () => O.A.gradientPreset),
        eE = e0.eh.useSetting().customUserThemeSettings,
        eS = (0, lV.V)(),
        eI = (0, lF.Q)(),
        ej = null != eC || (null != eE && !eS) || null != eI,
        ey = r.useMemo(() => (U ? (F ? or.gA : or.ru) : or.Zd), [U, F]),
        e_ = r.useMemo(() => (U ? (F ? or.cz : or.XF) : or.U6), [U, F]);
    return (0, a.jsxs)(u.hD, {
        navigator: ei,
        children: [
            ec,
            null != ed && ed,
            (0, a.jsxs)("div", {
                className: c()(or.Og, s, `group-spacing-${o}`),
                children: [
                    null == ed && ea,
                    (0, a.jsxs)(K, {
                        channel: m,
                        scrollManager: Q,
                        children: [
                            (0, a.jsx)(oc, {
                                ref: ex,
                                customTheme: !0,
                                className: c()(d, or.XG, ej ? e_ : void 0),
                                contentClassName: or.gT,
                                onResize: Q.handleResize,
                                onScroll: Q.handleScroll,
                                onMouseDown: Q.handleMouseDown,
                                onMouseUp: Q.handleMouseUp,
                                onWheel: Q.handleUserScrollGesture,
                                onTouchMove: Q.handleUserScrollGesture,
                                onKeyDown: Q.handleKeyDown,
                                ...eh,
                                tabIndex: -1,
                                role: "group",
                                children: (0, a.jsxs)(j.W.Provider, {
                                    value: ef,
                                    children: [
                                        eo,
                                        (0, a.jsxs)("ol", {
                                            className: or.bv,
                                            "aria-label": eP.intl.formatToPlainString(eP.t.XarRiL, {
                                                channelName: H ?? "",
                                            }),
                                            ...eg,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: or.$4,
                                                    id: "messagesNavigationDescription",
                                                    "aria-hidden": !0,
                                                    children: eP.intl.string(eP.t["Spb3s/"]),
                                                }),
                                                es,
                                                (0, a.jsx)("div", {
                                                    className: c()({
                                                        [or.lB]: !D,
                                                        [or.Ie]: 0 === g.length && !g.loadingMore,
                                                        [or.Fb]:
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
                            ej ? null : (0, a.jsx)("div", { className: ey }),
                            er,
                            ee && (0, a.jsx)(lG, { channel: m, scrollManager: Q }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let ou = r.memo(function (e) {
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
            permissionVersion: u,
            canChat: m,
        } = (function (e) {
            let t = e.getGuildId(),
                n = (0, h.bG)([tm.A], () => null == t || tm.A.canChatInGuild(t), [t]),
                { canManageMessages: l, permissionVersion: i } = (0, h.cf)(
                    [tg.A],
                    () => ({
                        canManageMessages: tg.A.can(eu.xBc.MANAGE_MESSAGES, e),
                        permissionVersion: null != t ? tg.A.getGuildVersion(t) : null,
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
            keyboardModeEnabled: x,
        } = (function () {
            let e = e0.hH.useSetting(),
                t = e0.gs.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: l,
                    keyboardModeEnabled: i,
                } = (0, h.cf)([b.Ay], () => {
                    let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = b.Ay;
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
            messages: C,
            channelStream: E,
            oldestUnreadMessageId: S,
            editingMessageId: I,
            isGameInvitesPost: j,
        } = (function (e) {
            var t;
            let n,
                l = (0, h.bG)([ep.A], () => ep.A.getMessages(e.id), [e.id]),
                i = (0, h.bG)([lW.Ay], () => lW.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                { enabled: s } = ee.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                a = lq.default.getUser(eo.default.getId())?.hasFlag(eu.nhx.SPAMMER) ?? !1,
                o = (0, _.cI)(e),
                c = (0, lU.A)("use_topic_dividers_in_chat"),
                d = (0, h.yK)([lK.A], () => (o && c ? (lK.A.summaries(e.id) ?? []) : []), [o, e.id, c]),
                u = (0, h.bG)([lK.A], () => (o ? lK.A.selectedSummary(e.id) : null), [o, e.id]),
                m = (0, G.sV)(e.guild_id, "message_stream"),
                g = ex(e.id),
                p =
                    ((t = l),
                    (n = r.useMemo(() => {
                        let e = new Set();
                        return (
                            t.forEach((t) => {
                                null != t.applicationId && null == t.application && e.add(t.applicationId);
                            }),
                            Array.from(e)
                        );
                    }, [t])),
                    (0, k.A)(n));
            !(function (e, t) {
                let [n, l] = (function (e, t) {
                    let [n, l] = r.useMemo(
                            () =>
                                (function (e, t) {
                                    if (!t.isPrivate()) return [L, D];
                                    let n = e.filter((e) => e.application?.id != null && e.activity?.party_id != null),
                                        l = n.map((e) => e.id);
                                    return [n, l];
                                })(e, t),
                            [e, t],
                        ),
                        i = (0, h.yK)(
                            [M.A],
                            () => {
                                let e = [];
                                return (
                                    n.forEach((t) => {
                                        null !=
                                            M.A.findActivity(
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
                                    if (0 === e.length) return R;
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
                        N.A.isSubscribed(e) || T.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                }, [l]);
            })(l, e);
            let A = (0, lw.YG)(e),
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
                                    isTopicalNavEnabled: h = !1,
                                } = e,
                                m = [],
                                g = !1,
                                p = null != a ? en.default.extractTimestamp(a) : null,
                                A = null;
                            return (
                                !u &&
                                    i.isForumPost() &&
                                    !s.hasMoreBefore &&
                                    !s.first()?.isFirstMessageInForumPost(i) &&
                                    m.push({ type: eu.TZK.FORUM_POST_ACTION_BAR }),
                                s.forEach((e) => {
                                    var f, x;
                                    let C, E, S;
                                    if (u && e.isFirstMessageInForumPost(i)) return;
                                    if (null != o && o.length > 0) {
                                        let t = en.default.extractTimestamp(e.id);
                                        for (let e = 0; e < o?.length; e++) {
                                            if (null == o[e]) continue;
                                            let n = en.default.extractTimestamp(o[e].startId),
                                                l = en.default.extractTimestamp(o[e].endId);
                                            if (t >= n && t <= l) {
                                                if (A === o[e].id) break;
                                                (m.push({
                                                    type: eu.TZK.DIVIDER,
                                                    content: o[e].topic,
                                                    contentKey: o[e].id,
                                                }),
                                                    (A = o[e].id));
                                                break;
                                            }
                                        }
                                    }
                                    let I = (0, et.i$)(e.timestamp, "LL");
                                    I !== t &&
                                        null == A &&
                                        (m.push({ type: eu.TZK.DIVIDER, content: I, contentKey: I }), (t = I));
                                    let j = m[m.length - 1],
                                        y = null,
                                        _ = (0, ei.kf)(e);
                                    g = g || _;
                                    let v = eg(i, e, _ && r);
                                    (null !== v &&
                                        ([y, j] =
                                            ((E = f = j),
                                            null == f || f.type !== v
                                                ? ((C = { type: v, content: [], key: e.id }), m.push(C))
                                                : (E = (C = f).content[C.content.length - 1]),
                                            [C, E])),
                                    a === e.id && null != p)
                                        ? (null != j && j.type === eu.TZK.DIVIDER
                                              ? (j.unreadId = e.id)
                                              : null !== y
                                                ? ((x = y),
                                                  e.isFirstMessageInForumPost(i) ||
                                                      x.content.push({ type: eu.TZK.DIVIDER, unreadId: e.id }),
                                                  (x.hasUnread = !0))
                                                : e.isFirstMessageInForumPost(i) ||
                                                  m.push({ type: eu.TZK.DIVIDER, unreadId: e.id }),
                                          (p = null))
                                        : null != p &&
                                          en.default.extractTimestamp(e.id) > p &&
                                          (e.isFirstMessageInForumPost(i) ||
                                              m.push({ type: eu.TZK.DIVIDER, unreadId: e.id }),
                                          (p = null));
                                    let b =
                                        null !=
                                        (S = (function (e, t) {
                                            if (eh.get(t.id) === e.id) return em(e, t.id);
                                            if (
                                                null == e.applicationId ||
                                                !(0, ea.Lt)(e.flags, eu.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                !t.isDM() ||
                                                e.author.id === eo.default.getId() ||
                                                null != e.activity ||
                                                (0, ea.Lt)(t.recipientFlags ?? 0, es.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
                                                eh.has(t.id)
                                            )
                                                return null;
                                            let n = em(e, t.id);
                                            eh.set(t.id, e.id);
                                            let l = (0, ea.lA)(
                                                t.recipientFlags ?? 0,
                                                es.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                !0,
                                            );
                                            return (er.A.updatePrivateChannelRecipientFlags(t.id, l), n);
                                        })(e, i))
                                            ? { message: S, position: "before" }
                                            : null;
                                    null != b &&
                                        "before" === b.position &&
                                        m.push({ type: eu.TZK.MESSAGE, content: b.message, groupId: b.message.id });
                                    let T = j?.type === eu.TZK.MESSAGE ? l : j;
                                    (0, el.l)(i, T, e) && (n = e.id);
                                    let N = {
                                        type:
                                            e.type === eu.lAJ.THREAD_STARTER_MESSAGE
                                                ? eu.TZK.THREAD_STARTER_MESSAGE
                                                : eu.TZK.MESSAGE,
                                        content: e,
                                        groupId: n,
                                    };
                                    n === e.id && (l = N);
                                    let { jumpSequenceId: M, jumpFlash: R, jumpTargetId: D } = s;
                                    (R && e.id === D && null != M && (N.flashKey = M),
                                        s.jumpTargetId === e.id && (N.jumpTarget = !0),
                                        null != c &&
                                            e.id === c.startId &&
                                            c.count > 1 &&
                                            m.push({
                                                type: eu.TZK.DIVIDER,
                                                content: c.topic,
                                                contentKey: c.startId,
                                                isSummaryDivider: !0,
                                            }),
                                        h &&
                                            null != d &&
                                            e.id === d.startMessageId &&
                                            d.messageCount > 1 &&
                                            m.push({
                                                type: eu.TZK.DIVIDER,
                                                content: d.title,
                                                contentKey: `conv-start-${d.id}`,
                                                isConversationChannelHeader: !0,
                                            }),
                                        null !== y
                                            ? (y.content.push(N), N.jumpTarget && (y.hasJumpTarget = !0))
                                            : m.push(N),
                                        e.isFirstMessageInForumPost(i) &&
                                            m.push({ type: eu.TZK.FORUM_POST_ACTION_BAR }),
                                        null != b &&
                                            "after" === b.position &&
                                            m.push({ type: eu.TZK.MESSAGE, content: b.message, groupId: b.message.id }),
                                        null != c &&
                                            e.id === c.endId &&
                                            c.count > 1 &&
                                            m.push({
                                                type: eu.TZK.DIVIDER,
                                                contentKey: c.endId,
                                                isSummaryDivider: !0,
                                            }));
                                }),
                                g && (0, ei.iJ)(i) && ee.trackExposure({ location: "416cc9_1" }),
                                m
                            );
                        })({
                            channel: e,
                            messages: l,
                            oldestUnreadMessageId: i,
                            treatSpam: s && !a,
                            summaries: d,
                            selectedSummary: u,
                            selectedConversation: g,
                            pinFirstMessage: A,
                            isTopicalNavEnabled: m,
                        }),
                    [l, e, i, s, d, u, g, p, a, A, m],
                );
            return {
                messages: l,
                channelStream: f,
                oldestUnreadMessageId: i,
                editingMessageId: (0, h.bG)([e3.A], () => e3.A.getEditingMessage(e.id)?.id),
                isGameInvitesPost: A,
            };
        })(t);
    return (0, a.jsx)(lH.Bs.Provider, {
        value: (0, lJ.A)(f, d),
        children: (0, a.jsx)(l0.t, {
            children: (0, a.jsx)(od, {
                ...c,
                messageGroupSpacing: g,
                showNewMessagesBar: !0,
                channel: t,
                messageDisplayCompact: !s && (i || A),
                messages: C,
                channelStream: E,
                permissionVersion: u,
                uploads: (0, h.bG)([l$.A], () => l$.A.getFiles(t.id), [t]),
                unreadCount: (0, h.bG)([lW.Ay], () => lW.Ay.getUnreadCount(t.id), [t]),
                hasUnreads: null != S,
                canChat: m,
                editingMessageId: I,
                fontSize: p,
                keyboardModeEnabled: x,
                showingQuarantineBanner: n,
                hideSummaries: l,
                typingGradient: o,
                isGameInvitesPost: j,
            }),
        }),
    });
});
