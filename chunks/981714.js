let l, i;
n.d(t, { A: () => ol });
var s,
    a,
    r = n(627968),
    o = n(64700),
    c = n(503698),
    d = n.n(c),
    u = n(580929),
    h = n(837381),
    m = n(17928),
    g = n(446837),
    p = n(187322),
    A = n(536804),
    f = n(789279),
    C = n(584648),
    x = n(448539),
    E = n(45596);
let S =
    ((s = d()(E.qZ, E.Vl)),
    (a = window.ResizeObserver ?? g.t),
    (l = new Map()),
    (i = new a((e) => {
        e.forEach((e) => {
            let { target: t } = e;
            l.get(t)?.(e);
        });
    })),
    o.forwardRef(function (e, t) {
        let {
                children: n,
                className: a,
                onResize: c,
                contentClassName: u,
                onScroll: h,
                dir: m = "ltr",
                fade: g = !1,
                customTheme: S = !1,
                style: _,
                ...I
            } = e,
            j = o.useRef(null),
            y = o.useRef(null),
            [b, v] = o.useState(!1),
            { scrollerRef: N, getScrollerState: T } = (0, A.A)(),
            M = (0, f.A)(N);
        o.useImperativeHandle(
            t,
            () => ({
                getScrollerNode: () => N.current,
                isScrolling: () => null != j.current,
                getScrollerState: T,
                ...(0, C.A)(N, T, M),
            }),
            [N, T, M],
        );
        let R = o.useCallback(
            (e) => {
                null == j.current ? v(!0) : clearTimeout(j.current),
                    (j.current = setTimeout(() => {
                        (j.current = null), v(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h],
        );
        return (
            o.useEffect(() => () => clearTimeout(j.current), []),
            (0, x.A)({ ref: N, key: "container", onUpdate: c, resizeObserver: i, listenerMap: l }),
            (0, x.A)({ ref: y, key: "content", onUpdate: c, resizeObserver: i, listenerMap: l }),
            (0, r.jsx)("div", {
                ref: N,
                className: d()(a, { [E.Rv]: g, [E.D8]: S, [s]: !0, [E.fs]: !0, [E.qw]: b && g }),
                style: _,
                dir: m,
                onScroll: R,
                ...I,
                children: (0, r.jsx)(p.xp, {
                    containerRef: y,
                    children: (0, r.jsxs)("div", {
                        ref: y,
                        className: d()(u, E.Qs),
                        children: [n, b && (0, r.jsx)("div", { className: E.X3 })],
                    }),
                }),
            })
        );
    }));
var _ = n(312138),
    I = n(493336),
    j = n(432371),
    y = n(765548),
    b = n(775602);
n(321073);
var v = n(228366),
    N = n(911411),
    T = n(290863);
let M = [],
    R = [],
    D = [];
var L = n(429913),
    k = n(47167),
    P = n(828488),
    O = n(619065),
    G = n(623562),
    U = n(727011),
    w = n(319365);
let F = o.createContext(null);
function H(e) {
    let { channel: t, scrollManager: n, children: l } = e,
        i = o.useRef(null),
        s = o.useRef(null),
        { isFocused: a, setIsFocused: c } = (0, w.D7)(),
        d = o.useCallback(
            async (e) => {
                (a && O.A.getSelectedConversationId(t.id) === e) ||
                    ((s.current = e),
                    await new Promise((l) => {
                        let i = () => {
                            n.removeScrollCompleteCallback(i), l();
                        };
                        n.addScrollCompleteCallback(i), (0, G.xI)(t.id, t.guild_id, e);
                    }),
                    s.current === e && (s.current = null),
                    e === O.A.getSelectedConversationId(t.id) &&
                        (c(!0), U.X.trackFocusModeImpression({ channelId: t.id, conversationId: e })));
            },
            [t.id, t.guild_id, n, c, a],
        ),
        u = o.useMemo(
            () => ({ bannerMeasurementRef: i, conversationJumpInProgressRef: s, selectAndFocusConversation: d }),
            [i, d],
        );
    return (0, r.jsx)(F.Provider, { value: u, children: l });
}
function B() {
    let e = o.useContext(F);
    if (null == e) throw Error("useConversationScroll must be used inside <ConversationScrollProvider>");
    return e;
}
let V = o.createContext(null);
function K() {
    let e = o.useContext(V);
    if (null == e) throw Error("useConversationFocusDismiss must be used inside <ConversationFocusDismissProvider>");
    return e;
}
function z(e) {
    let { children: t } = e,
        [n, l] = o.useState(null),
        i = o.useMemo(() => ({ dismissReason: n, setDismissReason: l }), [n, l]);
    return (0, r.jsx)(V.Provider, { value: i, children: t });
}
var W = n(661531),
    q = n(602853),
    $ = n(717421),
    J = n(689175),
    Z = n(866323),
    Y = n(448761),
    X = n(559149),
    Q = n(58703),
    ee = n(935208),
    et = n(857069),
    en = n(694318);
n(938796);
var el = n(253506),
    ei = n(665260),
    es = n(704844),
    ea = n(280450),
    er = n(320095),
    eo = n(963852),
    ec = n(652215);
let ed = new Map();
function eu(e, t) {
    let n = (0, eo.Ay)({
            channelId: t,
            type: ec.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: ec.pr7.EPHEMERAL,
            state: ec.cmJ.SENT,
        }),
        l = (0, er.rh)(n);
    return (l.applicationId = e.applicationId), (l.timestamp = e.timestamp), l;
}
function eh(e, t, n) {
    if (Y.M.NON_COLLAPSIBLE.has(t.type));
    else if (t.hasFlag(ec.pr7.HIDDEN_SUSPENDED_USER)) return ec.TZK.MESSAGE_GROUP_SUSPENDED_USER;
    else if (t.blocked) return ec.TZK.MESSAGE_GROUP_BLOCKED;
    else if (t.ignored) return ec.TZK.MESSAGE_GROUP_IGNORED;
    else if ((0, en.iJ)(e) && n) return ec.TZK.MESSAGE_GROUP_SPAMMER;
    return null;
}
var em = n(232835),
    eg = n(625494),
    ep = n(990078),
    eA = n(446576),
    ef = n(26430),
    eC = n(939249),
    ex = n(53788),
    eE = n(922016),
    eS = n(148795),
    e_ = n(834730),
    eI = n(534514),
    ej = n(260598),
    ey = n(691540),
    eb = n(857250),
    ev = n(97483),
    eN = n(789645),
    eT = n(821609),
    eM = n(802986),
    eR = n(375708),
    eD = n(58693);
let eL = [
    { value: "not_useful", label: eM.default.HcSKAh },
    { value: "off_topic", label: eM.default["1cHvxU"] },
    { value: "missing_messages", label: eM.default.ZAJcv4 },
    { value: "misleading_title", label: eM.default.omVRS3 },
    { value: "inappropriate", label: eM.default.dRzDTy },
    { value: "too_cluttered", label: eM.default.wb6DmY },
    { value: "hard_to_use", label: eM.default.NUVZB6 },
    { value: "too_old", label: eM.default.kAFQd3 },
    { value: "other", label: eM.default.OSgZpc },
];
function ek(e) {
    let { channel: t, conversation: n, isFocusMode: l, onClose: i } = e,
        [s, a] = o.useState(() => new Set()),
        [c, u] = o.useState(""),
        h = s.size > 0,
        m = s.has("other"),
        g = o.useCallback((e) => {
            a((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        p = o.useCallback(() => {
            U.X.trackThumbsDownReasonSelected({
                channelId: t.id,
                conversationId: n.id,
                isFocusMode: l,
                reasons: Array.from(s),
                otherText: m && c.length > 0 ? c : null,
            }),
                (0, ey.P0)((0, eb.o)(eR.intl.string(eM.default.xrEgG0), ev.Ck.SUCCESS)),
                i();
        }, [t.id, n.id, l, s, c, m, i]);
    return (0, r.jsxs)("div", {
        className: eD.oO,
        children: [
            (0, r.jsxs)("div", {
                className: eD.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: eD.TK,
                        children: [
                            (0, r.jsx)(eI.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eR.intl.string(eM.default.C3suOL),
                            }),
                            (0, r.jsx)(e_.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                className: eD.VA,
                                children: eR.intl.string(eM.default["Lp/NZo"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)(eC.D, {
                        className: eD.b,
                        "aria-label": eR.intl.string(eM.default.HLYa5G),
                        onClick: i,
                        children: (0, r.jsx)(eN.P, { size: "xs", color: W.A.colors.ICON_STRONG }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: eD.Ip,
                role: "group",
                "aria-label": eR.intl.string(eM.default["Lp/NZo"]),
                children: eL.map((e) => {
                    let { value: t, label: n } = e;
                    return (0, r.jsx)(
                        eC.D,
                        {
                            className: d()(eD.jw, s.has(t) && eD.gM),
                            onClick: () => g(t),
                            children: (0, r.jsx)(e_.E, {
                                variant: "text-md/normal",
                                color: "text-strong",
                                children: eR.intl.string(n),
                            }),
                        },
                        t,
                    );
                }),
            }),
            m &&
                (0, r.jsxs)("div", {
                    className: eD.Su,
                    children: [
                        (0, r.jsx)(ej.f, {
                            value: c,
                            onChange: (e) => u(e.slice(0, 200)),
                            placeholder: eR.intl.string(eM.default["qQ/xHO"]),
                            maxLength: 200,
                            rows: 3,
                        }),
                        (0, r.jsxs)("div", {
                            className: eD.rP,
                            children: [
                                (0, r.jsx)(e_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: eR.intl.string(eM.default.xZzxfK),
                                }),
                                (0, r.jsxs)(e_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: [c.length, "/", 200],
                                }),
                            ],
                        }),
                    ],
                }),
            (0, r.jsx)(eT.$, {
                text: eR.intl.string(eM.default.boNboC),
                variant: "primary",
                fullWidth: !0,
                disabled: !h,
                onClick: p,
            }),
        ],
    });
}
var eP = n(549569);
function eO(e) {
    return d()(eP.FW, { [eP.Jl]: "positive" === e, [eP.vF]: "critical" === e });
}
function eG(e) {
    let { channel: t, conversation: n, actionsShifted: l, suppressBorder: i, onFocusToggle: s } = e,
        [a, c] = o.useState(!1),
        u = o.useRef(null),
        h = (0, m.bG)([O.A], () => O.A.getConversationFeedbackRating(t.id, n.id), [t.id, n.id]),
        { isFocused: g } = (0, w.D7)(),
        p = o.useCallback(() => c(!1), []),
        A = o.useCallback(() => {
            (0, G.oq)(t.id, n.id, "up"),
                U.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !0, isFocusMode: g });
        }, [t.id, n.id, g]),
        f = o.useCallback(() => {
            (0, G.oq)(t.id, n.id, "down"),
                c(!0),
                U.X.trackThumbsClicked({ channelId: t.id, conversationId: n.id, isThumbsUp: !1, isFocusMode: g });
        }, [t.id, n.id, g]),
        C = o.useCallback(
            () => (0, r.jsx)(ek, { channel: t, conversation: n, isFocusMode: g, onClose: p }),
            [t, n, g, p],
        ),
        x = g ? eA.g : ef._,
        E = g ? eR.intl.string(eM.default.pDD8E1) : eR.intl.string(eM.default["o+pmGy"]),
        S = g ? eR.intl.string(eM.default.XaJ3qC) : eR.intl.string(eM.default.pU5Dut),
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ep.m, {
                    text: eR.intl.string(eM.default.sBwxOY),
                    children: (0, r.jsx)(eC.D, {
                        "aria-label": eR.intl.string(eM.default.vjJjMc),
                        onClick: A,
                        className: eO("up" === h ? "positive" : void 0),
                        children: (0, r.jsx)(ex.G, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
                (0, r.jsx)(eE.Y, {
                    targetElementRef: u,
                    shouldShow: a,
                    position: "bottom",
                    align: "right",
                    spacing: 8,
                    animation: eE.Y.Animation.FADE,
                    onRequestClose: p,
                    renderPopout: C,
                    children: () =>
                        (0, r.jsx)("div", {
                            ref: u,
                            children: (0, r.jsx)(ep.m, {
                                text: eR.intl.string(eM.default.tbhdqW),
                                children: (0, r.jsx)(eC.D, {
                                    "aria-label": eR.intl.string(eM.default.TGK5M0),
                                    onClick: f,
                                    className: eO("down" === h ? "critical" : void 0),
                                    children: (0, r.jsx)(eS.d, { color: "currentColor", size: "refresh_sm" }),
                                }),
                            }),
                        }),
                }),
                (0, r.jsx)(ep.m, {
                    text: E,
                    children: (0, r.jsx)(eC.D, {
                        "aria-label": S,
                        onClick: s,
                        className: eO(),
                        children: (0, r.jsx)(x, { color: "currentColor", size: "refresh_sm" }),
                    }),
                }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: d()(eP.zr, { [eP.e8]: i }),
        children: [
            (0, r.jsx)(e_.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: eP.DD,
                children: n.title,
            }),
            (0, r.jsx)("div", { className: d()(eP.o1, { [eP.jF]: l }), children: _ }),
        ],
    });
}
var eU = n(990986);
function ew(e) {
    let { channel: t, conversation: n, requestDismiss: l } = e,
        i = o.useCallback(() => {
            l("return");
        }, [l]);
    return (0, r.jsx)("div", {
        className: eU.A,
        children: (0, r.jsx)(eG, { channel: t, conversation: n, onFocusToggle: i, suppressBorder: !0 }),
    });
}
var eF = n(284009),
    eH = n.n(eF),
    eB = n(807884),
    eV = n(93474),
    eK = n(201275),
    ez = n(384231),
    eW = n(959698),
    eq = n(853145),
    e$ = n(9842),
    eJ = n(976860),
    eZ = n(885386),
    eY = n(734057),
    eX = n(540999),
    eQ = n(580745),
    e0 = n(521427),
    e1 = n(375901),
    e2 = n(143413),
    e3 = n(763754),
    e4 = n(33453);
function e7(e) {
    let { children: t, className: n, flashKey: l } = e,
        [i, s] = o.useState(!1),
        a = o.useRef(null);
    return (
        o.useEffect(
            () => (
                s(!0),
                (a.current = window.setTimeout(() => {
                    s(!1);
                }, 2e3)),
                () => {
                    null != a.current && clearTimeout(a.current);
                }
            ),
            [l],
        ),
        (0, r.jsx)("div", { "data-flash": i, className: d()(e4.j, n), children: t })
    );
}
var e8 = n(491182),
    e5 = n(860227),
    e6 = n(537174),
    e9 = n(837528),
    te = n(516287),
    tt = n(843626),
    tn = n(294454),
    tl = n(857071),
    ti = n(517997),
    ts = n(406704),
    ta = n(747926),
    tr = n(54570),
    to = n(8880),
    tc = n(834942),
    td = n(576705),
    tu = n(957565),
    th = n(723702),
    tm = n(697470),
    tg = n(492841),
    tp = n(707985),
    tA = n(519222);
let tf = function (e, t, n) {
    let l = o.useRef(n);
    return (
        (l.current = n),
        o.useCallback(
            (n) => {
                if (!l.current || n.target !== n.currentTarget) return;
                let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    s = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    a = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    r = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    o = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    c = em.A.getMessage(t, e),
                    d = eY.A.getChannel(t);
                if (null == c || null == d) return;
                let u = ea.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (td.A.can(ec.xBc.MANAGE_MESSAGES, d) || c.canDeleteOwnMessage(u)) &&
                            (n.preventDefault(), (0, tA.RC)(d, c, n));
                        break;
                    case "c":
                        ((0, th.isMac)() ? r : a) && tu.p5 && (n.preventDefault(), (0, tu.C)(c.content));
                        break;
                    case "e":
                        i && !d.isSystemDM() && (0, tm.A)(c, u) && (n.preventDefault(), (0, tA.u_)(d, c));
                        break;
                    case "p":
                        (i || o) && (0, tg.A)(c, d) && (n.preventDefault(), (0, tA.rS)(d, c, n));
                        break;
                    case "+":
                        (i || o) &&
                            (function (e) {
                                let t = null == e.guild_id || tc.A.canChatInGuild(e.guild_id),
                                    n = eZ.jW.getSetting(),
                                    { disableReactionCreates: l } = (0, tp.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && td.A.can(ec.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && tl.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, ts.jr)(e),
                                    });
                                return !l && n;
                            })(d) &&
                            (n.preventDefault(),
                            eg._.dispatchKeyed(ec.zOV.TOGGLE_REACTION_POPOUT, c.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || o) && (0, ti.r)(d, c) && (n.preventDefault(), (0, tA.$b)(d, c, n));
                        break;
                    case "f":
                        (i || o) &&
                            (0, tt.p)(c) &&
                            (n.preventDefault(), (0, tn.fO)({ message: c, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== c.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            to.A.isSpeakingMessage(t, e) ? (0, tr.pr)() : (0, tr.kP)(d, c));
                        break;
                    case "t":
                        if (i && (0, ts.D1)(d, c)) n.preventDefault(), (0, ta.Tv)(d, c, "Message Shortcut");
                        else if (c.hasFlag(ec.pr7.HAS_THREAD)) {
                            let e = eY.A.getChannel(ee.default.castMessageIdAsChannelId(c.id));
                            null != e && (i || o) && (n.preventDefault(), (0, ta.JA)(e, o));
                        }
                        break;
                    case "enter":
                        s && (n.preventDefault(), (0, tA.cl)(d, c));
                        break;
                    case "escape":
                        eQ.A.isEditing(d.id, c.id) ? I.A.endEditMessage(d.id) : eg._.dispatch(ec.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
var tC = n(754459),
    tx = n(375199),
    tE = n(824556),
    tS = n(886737),
    t_ = n(699352),
    tI = n(877413),
    tj = n.n(tI),
    ty = n(231483),
    tb = n(975571),
    tv = n(465364),
    tN = n(164664),
    tT = n(438729),
    tM = n(606049),
    tR = n(147860),
    tD = n(334211),
    tL = n(992595);
let tk = o.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: d()(tR.K1, { [tR.oE]: l }),
                    children: [
                        (0, r.jsx)("div", {
                            className: tR.Oz,
                            children: (0, r.jsx)(ty.l, { size: "xs", color: "currentColor", className: tR.F_ }),
                        }),
                        (0, r.jsx)("div", {
                            className: tR.jC,
                            children: (0, r.jsx)(e_.E, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, tv.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: d()(tR.ah, { [tR.oE]: l }),
                    children: (0, r.jsx)(tN.A, {
                        message: t,
                        onDeleteMessage: i,
                        children: (0, r.jsx)(e_.E, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: tR.C2,
                            children: eR.intl.format(eR.t["Nd3Gh+"], {
                                helpUrl: tb.A.getArticleURL(ec.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    tP = o.memo(function (e) {
        let { className: t, compact: n, message: l, children: i, content: s, onUpdate: a } = e,
            c = l.editedTimestamp?.toString(),
            u = o.useRef(!1),
            h = (0, m.bG)([eV.A], () => eV.A.getMessage(l.id), [l.id]),
            g = o.useCallback(() => {
                if (h?.isBlockedEdit) {
                    var e;
                    (e = l.id), v.h.dispatch({ type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: e });
                } else I.A.deleteMessage(l.channel_id, l.id, !0);
            }, [l, h]);
        return (
            o.useLayoutEffect(() => {
                u.current ? null != a && a() : (u.current = !0);
            }, [a, l.content, s, c, i]),
            (0, r.jsxs)("div", {
                id: (0, e5.CJ)(l),
                className: d()(t, tL.PT, {
                    [tD.BK]: !0,
                    [tD.nB]: "rtl" === tj()(l.content),
                    [tR.Dy]: h?.isBlockedEdit,
                    [tR.bv]: !h?.isBlockedEdit,
                }),
                children: [
                    i ?? (0, tT._A)(l, s),
                    h?.isBlockedEdit &&
                        null != l.timestamp &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " ",
                                (0, r.jsx)(tM.A, {
                                    timestamp: l.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, r.jsxs)("span", {
                                        className: tD.oh,
                                        children: ["(", eR.intl.string(eR.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(tk, {
                        notice: h?.errorMessage ?? eR.intl.string(eR.t.zQ69pv),
                        message: l,
                        compact: n,
                        onDismiss: g,
                    }),
                ],
            })
        );
    }, tT.sP);
var tO = n(111956),
    tG = n.n(tO),
    tU = n(311283),
    tw = n(473935),
    tF = n(173936),
    tH = n(290136),
    tB = n(666492),
    tV = n(606096),
    tK = n(997146),
    tz = n(366605),
    tW = n(163328),
    tq = n(110384),
    t$ = n(22231),
    tJ = n(563119),
    tZ = n(581925),
    tY = n(778492),
    tX = n(241326),
    tQ = n(365199),
    t0 = n(417270),
    t1 = n(565645),
    t2 = n(812930),
    t3 = n(822123),
    t4 = n(7584),
    t7 = n(635222),
    t8 = n(969043),
    t5 = n(427209),
    t6 = n(743738),
    t9 = n(649963),
    ne = n(815807),
    nt = n(429433),
    nn = n(966597),
    nl = n(85109),
    ni = n(71393),
    ns = n(174459),
    na = n(690521),
    nr = n(403362),
    no = n(628691),
    nc = n(194085),
    nd = n(607399),
    nu = n(460905);
function nh(e) {
    let { channel: t, message: n, togglePopout: l, renderEmojiPicker: i, shouldShow: s } = e,
        a = o.useRef(null);
    return (0, r.jsx)(eE.Y, {
        targetElementRef: a,
        animation: eE.Y.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return i(t, n, l, !1);
        },
        shouldShow: s,
        onRequestClose: l,
        position: nd.Fr ? "top" : "left",
        align: nd.Fr ? "center" : "top",
        clickTrap: !0,
        children: () =>
            (0, r.jsx)(nc.qv, { ref: a, label: eR.intl.string(eR.t.lfIHs4), icon: nu.n, onClick: l }, "add-reaction"),
    });
}
var nm = n(720882),
    ng = n(307731),
    np = n(237774);
let nA = [t4.Ay.getByName("100"), t4.Ay.getByName("laughing"), t4.Ay.getByName("sparkling_heart")].filter(nr.Vq);
function nf(e) {
    e.stopPropagation();
}
function nC(e) {
    let { message: t, channel: n, canReport: l, onClose: i, updatePosition: s } = e;
    return (0, nm.c)({
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
        ariaLabel: eR.intl.string(eR.t.Lv7LxN),
    });
}
let nx = o.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, t3.QZ)(t.guild_id).filter(
            (e) =>
                !na.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: ng.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        i = (l.length >= 3 ? l : [...(0, t7.A)(l.concat(nA)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: i.map((e) => {
            let l = s.find((t) => (0, ne.i6)(t.emoji, (0, ne.jq)(e))),
                i = null != l ? eR.intl.string(eR.t.wunKKA) : eR.intl.string(eR.t.XVx5BN),
                a = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? eR.intl.formatToPlainString(eR.t.vjeruO, { emojiName: a })
                        : eR.intl.formatToPlainString(eR.t.L1JQwE, { emojiName: a });
            return (0, r.jsx)(
                nc.qv,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(e_.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: np.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, r.jsx)(e_.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: np.zM,
                                children: i,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: function () {
                        return n_({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: t9.qN.MESSAGE_HOVER_BAR,
                        });
                    },
                    children: (0, r.jsx)(t1.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: np.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function nE(e) {
    let {
            channel: t,
            message: n,
            canCopy: l,
            canPin: i,
            canDelete: s,
            canReport: a,
            canEdit: c,
            canPublish: d,
            canReact: u,
            canConfigureJoin: h,
            canReply: g,
            canStartThread: p,
            canViewThread: A,
            canForward: f,
            canManageOfficialMessages: C,
            isGuildOfficial: x,
            isExpanded: E,
            showMoreUtilities: S,
            showEmojiPicker: _,
            showMessageBookmarksActions: j,
            isMessageBookmark: y,
            setPopout: v,
            hasDeveloperMode: N,
            isFocused: T,
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
                d = (0, m.bG)([ni.A], () => ni.A.getGuild(t.guild_id), [t.guild_id]),
                u = (0, m.bG)([ea.default], () => ea.default.getId()),
                h = (0, ts.Id)(t),
                g = (0, ts.s5)(t),
                { firstMessage: p } = (0, m.bG)([t8.A], () => t8.A.getMessage(t.id), [t.id]),
                A = eZ.jW.useSetting(),
                f = eZ.Q_.useSetting(),
                C = (0, m.bG)([tc.A], () => null == t.guild_id || tc.A.canChatInGuild(t.guild_id), [t]),
                {
                    canManageMessages: x,
                    canAddNewReactions: E,
                    canSendMessages: S,
                } = (0, m.cf)(
                    [td.A],
                    () => ({
                        canAddNewReactions: C && td.A.can(ec.xBc.ADD_REACTIONS, t),
                        canManageMessages: td.A.can(ec.xBc.MANAGE_MESSAGES, t),
                        canSendMessages: td.A.can(ec.xBc.SEND_MESSAGES, t),
                    }),
                    [t, C],
                ),
                _ = (0, ti.u)(t, n),
                I = (0, ts.n)(t, n),
                j = (0, ts.R)(n),
                y = (0, m.bG)([tl.A], () => null != t.guild_id && tl.A.isLurking(t.guild_id), [t]),
                v = c.id === u,
                N = (x || n.canDeleteOwnMessage(u)) && h && !ec.MRS.UNDELETABLE.has(n.type);
            n.type === ec.lAJ.AUTO_MODERATION_ACTION && (N = N && x),
                t.isModeratorReportChannel() && (N = N && n.id !== p?.id && !(0, e2.A)(n));
            let T = (0, no.ul)(n),
                M = (0, tg.A)(n, t),
                R = !t.isSystemDM() && (0, tm.A)(n, u) && h && !g,
                { disableReactionCreates: D } = (0, tp.A)({
                    channel: t,
                    canChat: C,
                    renderReactions: A,
                    canAddNewReactions: E,
                    isLurking: y,
                    isActiveChannelOrUnarchivableThread: h,
                }),
                L =
                    t.type === ec.rbe.GUILD_ANNOUNCEMENT &&
                    null != d &&
                    d.features.has(ec.GuildFeatures.NEWS) &&
                    S &&
                    (v || x) &&
                    (0, t2.A)(n),
                k = t.getGuildId(),
                P =
                    null != k &&
                    n.type === ec.lAJ.USER_JOIN &&
                    td.A.canWithPartialContext(ec.xBc.MANAGE_GUILD, { guildId: k }),
                O = (0, tt.m)(n),
                G = (0, e0.kn)(n, t, "MessageHoverBar"),
                U = n.hasFlag(ec.pr7.IS_GUILD_OFFICIAL),
                { enabled: w } = nn.A.useConfig({ location: "message_utilities" }),
                F = (0, m.bG)([nl.A], () => null != nl.A.getSavedMessage(t.id, n.id)),
                H = (0, tU.A)(a),
                B = (0, m.bG)([b.Ay], () => b.Ay.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: M,
                canEdit: R,
                canDelete: N,
                canReport: T,
                canReply: _,
                canStartThread: I,
                canViewThread: j,
                canForward: O,
                canManageOfficialMessages: G,
                isGuildOfficial: U,
                canCopy: tu.p5,
                hasDeveloperMode: f,
                canReact: !D && A,
                canPublish: L,
                canConfigureJoin: P,
                isExpanded: H && !B && !l && !i && !s,
                showEmojiPicker: l,
                showEmojiBurstPicker: i,
                showMoreUtilities: s,
                showMessageBookmarksActions: w,
                isMessageBookmark: F,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        M = o.useRef(null),
        R = o.useCallback(() => {
            S ||
                ns.default.track(ec.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                v({ moreUtilities: !S });
        }, [S, v, n]),
        D = o.useCallback(() => {
            v({ emojiPicker: !_ });
        }, [_, v]),
        L = (0, ts.Id)(t),
        k = n.hasFlag(ec.pr7.CROSSPOSTED);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            E
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l && N
                              ? (0, r.jsx)(
                                    nc.qv,
                                    {
                                        label: eR.intl.string(eR.t.zBoHlf),
                                        icon: tw.L,
                                        onClick: (e) => (0, tA.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          l
                              ? (0, r.jsx)(
                                    nc.qv,
                                    { label: eR.intl.string(eR.t.WqhZss), icon: tF.q, onClick: () => (0, tA.S)(t, n) },
                                    "copy-link",
                                )
                              : null,
                          h
                              ? (0, r.jsx)(
                                    nc.qv,
                                    { label: eR.intl.string(eR.t.NpHUi1), icon: tH.c, onClick: () => (0, tA.vc)(t) },
                                    "configure",
                                )
                              : null,
                          L
                              ? (0, r.jsx)(
                                    nc.qv,
                                    { label: eR.intl.string(eR.t.RpE9k7), icon: tB.Q, onClick: () => (0, tA.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          j
                              ? (0, r.jsx)(
                                    nc.qv,
                                    {
                                        label: y ? eR.intl.string(eR.t.LHUP9D) : eR.intl.string(eR.t["9p3D9p"]),
                                        icon: y ? tV.c : tK.c,
                                        onClick: () => (y ? (0, tA.r7)(t, n) : (0, tA.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          i
                              ? (0, r.jsx)(
                                    nc.qv,
                                    {
                                        label: n.pinned ? eR.intl.string(eR.t["Bse+F/"]) : eR.intl.string(eR.t.CvQ18w),
                                        icon: tz.t,
                                        onClick: (e) => (0, tA.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          p && f
                              ? (0, r.jsx)(
                                    nc.qv,
                                    { label: eR.intl.string(eR.t.rBIGBL), icon: tW.y, onClick: () => (0, tA.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          g && c
                              ? (0, r.jsx)(
                                    nc.qv,
                                    {
                                        label: eR.intl.string(eR.t["5IEsGx"]),
                                        icon: tq.W,
                                        onClick: (e) => (0, tA.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            u
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          E
                              ? null
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(nx, { channel: t, message: n }), (0, r.jsx)(nc.$$, {})],
                                }),
                          (0, r.jsx)(nh, {
                              togglePopout: D,
                              renderEmojiPicker: nI,
                              shouldShow: _,
                              isFocused: T,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            g && !c
                ? (0, r.jsx)(
                      nc.qv,
                      { label: eR.intl.string(eR.t["5IEsGx"]), icon: tq.W, onClick: (e) => (0, tA.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            c
                ? (0, r.jsx)(
                      nc.qv,
                      { label: eR.intl.string(eR.t.bt75uw), icon: t$.R, onClick: () => (0, tA.u_)(t, n) },
                      "edit",
                  )
                : null,
            f
                ? (0, r.jsx)(
                      nc.qv,
                      { label: eR.intl.string(eR.t.I3ltXO), icon: t5.A, onClick: () => (0, tA.Z4)(t, n) },
                      "forward",
                  )
                : null,
            p && !f
                ? (0, r.jsx)(
                      nc.qv,
                      { label: eR.intl.string(eR.t.rBIGBL), icon: tW.y, onClick: () => (0, tA.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !p && A
                ? (0, r.jsx)(
                      nc.qv,
                      { label: eR.intl.string(eR.t["39d0Wj"]), icon: tW.y, onClick: () => (0, tA.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            C
                ? (0, r.jsx)(
                      nc.qv,
                      {
                          label: x ? eR.intl.string(eR.t["2km5Gf"]) : eR.intl.string(eR.t["lE/PG3"]),
                          icon: x ? tJ.$ : tZ.L,
                          onClick: () => I.A.patchMessageGuildOfficial(t.id, n.id, !x),
                      },
                      "guild-official",
                  )
                : null,
            d
                ? (0, r.jsx)(
                      nc.qv,
                      {
                          label: k ? eR.intl.string(eR.t["1kWJAr"]) : eR.intl.string(eR.t.MFGE51),
                          icon: tY.k,
                          onClick: () => (0, tA.Le)(t, n),
                          disabled: k,
                      },
                      "publish",
                  )
                : null,
            s && E
                ? (0, r.jsx)(
                      nc.qv,
                      {
                          label: eR.intl.string(eR.t.oyYWHE),
                          icon: tX.u,
                          onClick: (e) => (0, tA.RC)(t, n, e),
                          dangerous: !0,
                          separator: !E,
                      },
                      "delete",
                  )
                : null,
            E && s
                ? null
                : (0, r.jsx)(eE.Y, {
                      targetElementRef: M,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: i } = e;
                          return (0, r.jsx)(nC, {
                              channel: t,
                              message: n,
                              canReport: a,
                              onClose: i,
                              updatePosition: l,
                          });
                      },
                      shouldShow: S,
                      onRequestClose: R,
                      position: "left",
                      align: "top",
                      animation: eE.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: i } = t;
                          return (0, r.jsx)(
                              nc.qv,
                              {
                                  ref: M,
                                  label: eR.intl.string(eR.t["UKOtz+"]),
                                  icon: tQ.j,
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
function nS(e) {
    let { channel: t, message: n } = e,
        l = (0, m.bG)([eV.A], () => null != eV.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, t6.Bl)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l &&
                i &&
                (0, r.jsx)(
                    nc.qv,
                    { label: eR.intl.string(eR.t["5911Lb"]), icon: t0.m, onClick: () => (0, tA.Io)(t, n) },
                    "retry",
                ),
            (0, r.jsx)(
                nc.qv,
                { label: eR.intl.string(eR.t.oyYWHE), icon: tX.u, onClick: (e) => (0, tA.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function n_(e) {
    let { type: t, emoji: n, channel: l, message: i, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, ne.jq)(n);
    "add" === t
        ? (0, t9.BB)(l.id, i.id, r, s, { burst: a })
        : (0, t9.et)({ channelId: l.id, messageId: i.id, emoji: r, location: s, options: { burst: a } });
}
function nI(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? ec.liQ.GUILD_CHANNEL : ec.liQ.DM_CHANNEL,
                section: (0, ne.sn)(e),
                object: ec.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, r.jsx)(nt.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (l) => {
            let { emoji: i, willClose: s, isBurst: a } = l;
            n_({ type: "add", emoji: i, channel: e, message: t, location: t9.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? tG()(n, 150)() : n());
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let nj = o.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, m.bG)([eQ.A], () => eQ.A.isEditing(t.id, n.id), [t.id, n.id]),
        a = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === ec.cmJ.SEND_FAILED ? (0, r.jsx)(nS, { channel: t, message: n }) : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== ec.cmJ.SEND_FAILED ? (0, r.jsx)(nE, { ...e }) : null;
        })(e);
    return s || (null == a && null == o)
        ? null
        : (0, r.jsx)("div", {
              className: d()(e.className, { [np.kL]: !0, [np.gN]: l, [np.nK]: i }),
              onClick: nf,
              onContextMenu: nf,
              role: "group",
              "aria-label": eR.intl.string(eR.t.Lv7LxN),
              children: (0, r.jsxs)(nc.Ay, { className: e.innerClassName, children: [a, o] }),
          });
});
var ny = n(701628),
    nb = n(639288),
    nv = n(10364);
let nN = o.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: l = !1,
                groupId: i,
                isGroupStart: s,
                usernameProfile: a,
                avatarProfile: c,
                setPopout: d,
                author: u,
                repliedMessage: h,
                roleIcon: m,
            } = e,
            g = (0, e9.r4)(t.author.id, n.id),
            p = (0, e9.m)(t, n, a, d),
            A = (0, e9.Jo)(c, d),
            f = o.useCallback(() => {
                d({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 });
            }, [d]);
        return (0, r.jsx)(nb.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: h,
            author: u,
            compact: l,
            subscribeToGroupId: i,
            showTimestampOnHover: !s && l && t.type !== ec.lAJ.REPLY,
            renderPopout: nv.A,
            showAvatarPopout: c,
            showUsernamePopout: a,
            onClickAvatar: A,
            onClickUsername: p,
            onContextMenu: g,
            onPopoutRequestClose: f,
            roleIcon: m,
        });
    }),
    nT = o.memo(tM.A);
function nM(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: l,
            replyReference: i,
            author: s,
            repliedMessage: a,
            roleIcon: o,
        } = e,
        { message: c, compact: d, channel: u, groupId: h } = t,
        { usernameProfile: m, avatarProfile: g } = l;
    if ((0, e2.A)(c)) return null;
    let p = c.id === h;
    return p || d || null != i
        ? (0, r.jsx)(nN, {
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
              repliedMessage: a,
              roleIcon: o,
          })
        : (0, r.jsx)(nT, {
              compact: !0,
              timestamp: c.timestamp,
              isInline: !1,
              id: (0, e5.xl)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
var nR = n(141268),
    nD = n(155718),
    nL = n(168186),
    nk = n(994500),
    nP = n(217424),
    nO = n(807081),
    nG = n(387408),
    nU = n(942075),
    nw = n(808829),
    nF = n(552691),
    nH = n(861464),
    nB = n(805964);
let nV = o.memo(function (e) {
    let {
            baseMessage: t,
            referencedMessage: n,
            channel: l,
            compact: i = !1,
            referencedUsernameProfile: s,
            referencedAvatarProfile: a,
            setPopout: c,
            isReplySpineClickable: d,
            showReplySpine: u,
        } = e,
        h = n.state === e$.a.LOADED ? n.message : void 0,
        g = (0, e3.X4)(h),
        p = (0, ez.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, eW.U)(),
        f = o.useMemo(() => {
            if (null == h) return null;
            let e = (0, nG.A)(h);
            if (e.type === ec.lAJ.USER_JOIN)
                return (0, nO.$)(
                    eR.intl.formatToParts(nH.A.getSystemMessageUserJoin(e.id), {
                        username: null != g ? g.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === ec.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, nO.$)(
                    (0, nU.WC)({
                        username: null != g ? g.nick : e.author.username,
                        guildId: l?.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === ec.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, nO.$)((0, nw.P)({ application: e?.application, username: g?.nick }));
            if (e.type === ec.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, nO.$)((0, nF.g6)({ application: e?.application, username: g?.nick }));
            if (e.type === ec.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, nO.$)((0, nF.uk)({ application: e?.application, username: g?.nick }));
            if (null != e.content && "" !== e.content) {
                let t = { formatInline: !0, allowLinks: !0, postProcessor: A ? tS.A : void 0 },
                    n = e.isFirstMessageInForumPost(l)
                        ? { ...t, noStyleAndInteraction: !0, allowHeading: !0, allowList: !0, allowGameMentions: !0 }
                        : { ...t, formatInline: !0, allowHeading: p, allowList: p, allowGameMentions: !0 };
                return (0, tv.Ay)(e, n).content;
            }
            return null;
        }, [h, g, l, p, A]),
        { isReplyAuthorBlocked: C, isReplyAuthorIgnored: x } = (0, m.cf)(
            [nk.A],
            () => ({
                isReplyAuthorBlocked: null != h && nk.A.isBlockedForMessage(h),
                isReplyAuthorIgnored: null != h && nk.A.isIgnoredForMessage(h),
            }),
            [h],
        ),
        E = (0, e9.r4)(h?.author.id, l.id),
        S = (0, e9.Ck)(t, n, l),
        _ = (0, e9.H9)(h, l, s, c),
        I = (0, e9.Ge)(a, c),
        j = o.useCallback(() => {
            c({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 });
        }, [c]),
        y = (0, e3.X4)(t);
    return (0, r.jsx)(nB.A, {
        repliedAuthor: g,
        baseMessage: t,
        channel: l,
        baseAuthor: y,
        referencedMessage: n,
        content: f,
        compact: i,
        isReplyAuthorBlocked: C,
        isReplyAuthorIgnored: x,
        showAvatarPopout: a,
        showUsernamePopout: s,
        renderPopout: nv.A,
        onClickAvatar: I,
        onClickUsername: _,
        onClickReply: S,
        onContextMenu: E,
        onPopoutRequestClose: j,
        isReplySpineClickable: d,
        showReplySpine: u,
    });
});
function nK(e) {
    let {
        message: t,
        channel: n,
        compact: l,
        setPopout: i,
        referencedUsernameProfile: s,
        referencedAvatarProfile: a,
        replyReference: o,
        replyMessage: c,
        isReplySpineClickable: d,
        showReplySpine: u = !0,
    } = e;
    return (
        null != o &&
        (0, r.jsx)(nV, {
            baseMessage: t,
            replyReference: o,
            referencedMessage: c,
            channel: n,
            compact: l,
            setPopout: i,
            referencedUsernameProfile: s,
            referencedAvatarProfile: a,
            isReplySpineClickable: d,
            showReplySpine: u,
        })
    );
}
let nz = o.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: l = !1,
            interactionUsernameProfile: i,
            interactionAvatarProfile: s,
            interactionData: a,
            referencedUsernameProfile: c,
            referencedAvatarProfile: d,
            setPopout: u,
        } = e,
        { isInteractionUserBlocked: h, isInteractionUserIgnored: g } = (0, m.cf)(
            [nk.A],
            () => ({
                isInteractionUserBlocked: nk.A.isBlockedForMessage(t),
                isInteractionUserIgnored: nk.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = (0, m.bG)([e$.A], () => e$.A.getMessageByReference(t?.messageReference)),
        A = (0, e9.r4)(t.interaction?.user.id, n.id),
        f = (0, e9.T0)(t.interaction, n, i, u),
        C = (0, e9.Yq)(s, u),
        x = (0, nL.Am)(t),
        E = x?.type === nD.G4.APPLICATION_COMMAND ? x.target_user?.id : void 0,
        S = (0, e9.r4)(E, n.id),
        _ = (0, e9.I)(E, n, c, u),
        I = (0, e9.Ge)(d, u),
        j = (0, e9.U_)(a, u),
        y = o.useCallback(() => {
            u({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [u]),
        b = o.useCallback(
            () =>
                nK({
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
    return (0, r.jsx)(nP.A, {
        message: t,
        channel: n,
        compact: l,
        isInteractionUserBlocked: h,
        isInteractionUserIgnored: g,
        showAvatarPopout: s,
        showUsernamePopout: i,
        showDataPopout: a,
        showTargetAvatarPopout: d,
        showTargetUsernamePopout: c,
        onClickAvatar: C,
        onClickUsername: f,
        onClickCommand: j,
        onUserContextMenu: A,
        onClickTargetAvatar: I,
        onClickTargetUsername: _,
        onTargetUserContextMenu: S,
        onPopoutRequestClose: y,
        renderTargetMessage: b,
    });
});
var nW = n(352043),
    nq = n(381941);
function n$(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: i = !1,
        className: s,
    } = e;
    eH()(n.type === ec.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...a } = (0, h.rm)(e.id ?? ""),
        o = (0, m.bG)([e$.A], () => e$.A.getMessageByReference(l)),
        { popouts: c, setPopout: u } = (0, tC.A)(n.id, nq.Fd),
        g = (0, e3.Ay)(n),
        p = (0, e5.fF)(n),
        A = (0, e5.ZD)(n);
    if (null != o)
        switch (o.state) {
            case e$.a.LOADED:
                return (0, r.jsx)(nJ, {
                    ...e,
                    viewingChannelId: n.channel_id,
                    message: o.message,
                    groupId: o.message.id,
                });
            case e$.a.NOT_LOADED:
            case e$.a.DELETED:
        }
    return (0, r.jsx)(e8.A, {
        ...a,
        id: t,
        compact: i,
        className: d()(s, { [ny.iU]: !0, [ny.HJ]: !i, [ny.H4]: !0, [ny._A]: !0 }),
        childrenHeader: nM({ messageProps: e, setPopout: u, messagePopouts: c, replyReference: l, author: g }),
        childrenSystemMessage: (0, nW.A)(e),
        childrenMessageContent: null,
        "aria-labelledby": p,
        "aria-describedby": A,
        hasThread: !1,
        author: g,
    });
}
function nJ(e) {
    let {
            id: t,
            message: n,
            message: { id: l, channel_id: i },
            channel: { guild_id: s },
            compact: a = !1,
            className: c,
            groupId: u,
            viewingChannelId: g,
        } = e,
        p = n.type === ec.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: A, ...f } = (0, h.rm)(e.id ?? ""),
        { isFocused: C, handleFocus: x, handleBlur: E } = (0, e9.G8)(A),
        { popouts: S, selected: _, setPopout: I } = (0, tC.A)(n.id, nq.Fd),
        j = eZ.hD.useSetting(),
        y = eZ.rs.useSetting(),
        v = (0, m.bG)([e$.A], () => e$.A.getMessageByReference(p)),
        N = (0, ez.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: T,
            handleMouseLeave: M,
            isHovered: R,
        } = (0, e9.yp)({ groupId: u, message: n, defaultValue: _ }),
        D = (0, m.bG)([b.Ay], () => b.Ay.keyboardModeEnabled),
        L = _ || (D && C),
        k = L || R,
        P = (0, m.bG)([eX.A], () => eX.A.isDeveloper),
        {
            content: O,
            hasSpoilerEmbeds: G,
            hasBailedAst: U,
        } = (0, tx.A)(n, {
            hideSimpleEmbedContent: j && y,
            formatInline: !1,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            allowDevLinks: P,
            previewLinkTarget: !0,
            viewingChannelId: g,
        }),
        w = tf(l, i, D),
        F = (0, e3.Ay)(n),
        H = (0, e5.fF)(n, u),
        B = (0, e5.ZD)(n),
        V = (0, r.jsx)(te.x, { value: k, children: (0, nR.A)(e, O, !1) }),
        K = o.useCallback(() => (0, eJ.uh)(s, i, l), [s, i, l]),
        z = (0, eK.$7)({ guildId: s, roleId: F.iconRoleId });
    return (0, r.jsxs)("div", {
        className: ny.m5,
        children: [
            (0, r.jsx)(eC.D, {
                className: ny.lA,
                onClick: K,
                "aria-label": eR.intl.string(eR.t.k5WiPf),
                children: eR.intl.string(eR.t.k5WiPf),
            }),
            (0, r.jsx)(e8.A, {
                ...f,
                id: t,
                compact: a,
                className: d()(c, {
                    [ny.iU]: !0,
                    [ny.HJ]: !a,
                    [ny.mK]: n.mentioned,
                    [ny.M1]: (0, er.ec)(n),
                    [ny.H4]: (0, e2.A)(n),
                    [ny._A]: n.id === u || n.type === ec.lAJ.REPLY,
                    [ny.wH]: L,
                }),
                zalgo: !0,
                onKeyDown: w,
                onFocus: x,
                onBlur: E,
                childrenRepliedMessage:
                    n.type === ec.lAJ.REPLY &&
                    nK({
                        ...e,
                        setPopout: I,
                        referencedUsernameProfile: S.referencedUsernameProfile,
                        referencedAvatarProfile: S.referencedAvatarProfile,
                        replyReference: p,
                        replyMessage: v,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: nM({
                    messageProps: e,
                    setPopout: I,
                    messagePopouts: S,
                    replyReference: p,
                    author: F,
                    repliedMessage: v,
                    roleIcon: z,
                }),
                childrenAccessories: (0, t_.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: G,
                    hasBailedAst: U,
                    isInteracting: k,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                }),
                childrenSystemMessage: (0, nW.A)(e),
                childrenMessageContent: V,
                onMouseMove: T,
                onMouseLeave: M,
                "aria-labelledby": H,
                "aria-describedby": B,
                hasThread: !1,
                author: F,
            }),
        ],
    });
}
let nZ = o.memo(function (e) {
    let t,
        n,
        {
            id: l,
            message: i,
            message: { id: s },
            channel: a,
            channel: { id: c },
            compact: u = !1,
            className: g,
            flashKey: A,
            groupId: f,
            renderContentOnly: C,
            hideInviteEmbedBanner: x,
            hideActivityInvite: E,
        } = e;
    eH()(i.type !== ec.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let S = ec.sl8.has(i.type) ? i.messageReference : void 0,
        { onFocus: _, ...I } = (0, h.rm)(e.id ?? ""),
        j = eZ.hD.useSetting(),
        y = eZ.rs.useSetting(),
        v = (0, m.bG)([e$.A], () => e$.A.getMessageByReference(S)),
        { popouts: N, selected: T, setPopout: M } = (0, tC.A)(i.id, nq.Fd),
        R = (0, e9.VL)(i, a, M),
        D = (0, e9.ri)(i, a),
        {
            handleMouseEnter: L,
            handleMouseLeave: k,
            hasHovered: P,
            isHovered: O,
        } = (0, e9.yp)({ groupId: f, message: i, defaultValue: T }),
        { isFocused: G, hasFocused: U, handleFocus: w, handleBlur: F } = (0, e9.G8)(_),
        H = o.useCallback(
            (e) => {
                w(e), L(e);
            },
            [w, L],
        ),
        B = o.useCallback(
            (e) => {
                F(e), k();
            },
            [F, k],
        ),
        V = (0, m.bG)([eQ.A], () => eQ.A.isEditing(c, s), [c, s]),
        K = (0, m.bG)([b.Ay], () => b.Ay.keyboardModeEnabled),
        z = T || V || (K && G),
        W = z || O,
        q = (0, m.bG)(
            [eY.A],
            () => i.hasFlag(ec.pr7.HAS_THREAD) && eY.A.getChannel(ee.default.castMessageIdAsChannelId(i.id)),
        ),
        $ = i.isFirstMessageInForumPost(a),
        J = (0, ez.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        Z = (0, m.bG)([eX.A], () => eX.A.isDeveloper),
        Y = (0, eW.U)(),
        {
            content: X,
            hasSpoilerEmbeds: Q,
            hasBailedAst: et,
        } = (0, tx.A)(i, {
            hideSimpleEmbedContent: j && y,
            formatInline: !1,
            allowList: $ || J,
            allowHeading: $ || J,
            allowLinks: !0,
            allowDevLinks: Z,
            previewLinkTarget: !0,
            postProcessor: Y ? tS.A : void 0,
        }),
        en = tf(s, c, K),
        el = (0, e3.Ay)(i),
        es = (0, m.bG)([eq.A], () => eq.A.getPendingReply(c)),
        ea =
            ((t = o.useRef(A)),
            o.useEffect(() => {
                t.current = A ?? t.current;
            }),
            A ?? t.current),
        eo = (0, eK.$7)({ guildId: a.guild_id, roleId: el.iconRoleId }),
        ed = (0, eB.A)(c, s)?.color ?? null,
        eu = (0, e5.fF)(i, f),
        eh = (0, e5.ZD)(i),
        em = (0, m.bG)([eV.A], () => eV.A.getMessage(s), [s]),
        eg = (0, e0.bW)(a.guild_id, "ChatMessage"),
        ep = (0, e6.o)(),
        eA = (0, tE.A)({ message: i, channel: a, officialMessagesEnabled: eg }),
        ef = o.useRef(window),
        eC = null != em;
    (n =
        i.type === ec.lAJ.CUSTOM_GIFT
            ? ""
            : !V && eC
              ? (function (e, t) {
                    let { message: n, compact: l } = e;
                    return (0, r.jsx)(tP, { message: n, content: t, compact: l ?? !1 });
                })(e, X)
              : (0, nR.A)(e, X, V)),
        (n = (0, r.jsx)(te.x, { value: W, children: n }));
    let ex = i.id === f,
        eE = (0, r.jsx)(p.vN, {
            offset: { left: 4, right: 4 },
            children: (0, r.jsx)("li", {
                id: l,
                className: ny.Nt,
                "aria-setsize": -1,
                style: null != ed ? { backgroundColor: ed } : void 0,
                children: (0, r.jsx)(e8.A, {
                    ...I,
                    "aria-setsize": -1,
                    "aria-roledescription": eR.intl.string(eR.t.BAB0yK),
                    "aria-labelledby": eu,
                    "aria-describedby": eh,
                    onFocus: H,
                    onBlur: B,
                    onContextMenu: R,
                    onKeyDown: en,
                    onClick: D,
                    compact: u,
                    contentOnly: C,
                    className: d()(g, {
                        [ny.iU]: !0,
                        [ny.HJ]: !u,
                        [ny.mK]: i.mentioned,
                        [ny.M1]: (0, er.ec)(i),
                        [ny.SH]: i.type === ec.lAJ.NITRO_NOTIFICATION,
                        [ny.Sg]: i.hasFlag(ec.pr7.IS_GUILD_OFFICIAL) && eg && !ep,
                        [ny.H4]: (0, e2.A)(i),
                        [ny._A]: !C && (ex || i.type === ec.lAJ.REPLY),
                        [ny.wH]: z,
                        [ny.$n]: es?.message.id === i.id,
                        [ny.$w]: i.isCommandType() && i.state === ec.cmJ.SENDING,
                        [ny.DX]: eC,
                    }),
                    zalgo: !V,
                    childrenRepliedMessage:
                        C || i.type !== ec.lAJ.REPLY
                            ? void 0
                            : nK({
                                  ...e,
                                  setPopout: M,
                                  referencedUsernameProfile: N.referencedUsernameProfile,
                                  referencedAvatarProfile: N.referencedAvatarProfile,
                                  replyReference: S,
                                  replyMessage: v,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (function (e, t, n) {
                        let { message: l, channel: i, compact: s } = e;
                        return null != l.interaction && "" !== l.interaction.displayName
                            ? (0, r.jsx)(nz, { message: l, channel: i, compact: s, setPopout: t, ...n })
                            : null;
                    })(e, M, N),
                    childrenHeader: C
                        ? void 0
                        : nM({
                              messageProps: e,
                              setPopout: M,
                              messagePopouts: N,
                              replyReference: S,
                              author: el,
                              repliedMessage: v,
                              roleIcon: eo,
                          }),
                    childrenAccessories: (0, t_.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: Q,
                        hasBailedAst: et,
                        handleContextMenu: R,
                        isInteracting: W,
                        isAutomodBlockedMessage: eC,
                        hideInviteEmbedBanner: x,
                        hideActivityInvite: E,
                    }),
                    childrenButtons:
                        P || U
                            ? (function (e) {
                                  let {
                                          setPopout: t,
                                          messagePopouts: { emojiPicker: n, emojiBurstPicker: l, moreUtilities: i },
                                          isFocused: s,
                                          buttonProps: { message: a, channel: o, groupId: c, compact: d = !1 },
                                          messageWindow: u,
                                      } = e,
                                      h = a.state === ec.cmJ.SENDING,
                                      m = a.id === c,
                                      g = (0, ei.Lt)(a.flags, ec.pr7.EPHEMERAL),
                                      p = a.state === ec.cmJ.SEND_FAILED;
                                  return h || (g && !p)
                                      ? null
                                      : (0, r.jsx)(nj, {
                                            className: ny.Uo,
                                            innerClassName: ny.Mc,
                                            isHeader: !d && m && !(0, e2.A)(a),
                                            isReply: !d && a.type === ec.lAJ.REPLY && null != a.messageReference,
                                            channel: o,
                                            message: a,
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
                                  messagePopouts: N,
                                  isFocused: O || G,
                                  messageWindow: ef.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, nW.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: L,
                    onMouseLeave: k,
                    hasThread: !C && i.hasFlag(ec.pr7.HAS_THREAD) && null != q,
                    isSystemMessage: (0, e2.A)(i),
                    hasReply: i.type === ec.lAJ.REPLY,
                    messageRef: (e) => {
                        (eA.current = e), (ef.current = e?.ownerDocument?.defaultView ?? window);
                    },
                    author: el,
                }),
            }),
        });
    return null != ea
        ? (0, r.jsx)(
              e7,
              { flashKey: ea, className: d()({ [ny.bB]: !0, [ny._A]: !u && i.id === f }), children: eE },
              `bg-flash-${l}`,
          )
        : eE;
});
n(801541);
var nY = n(889137),
    nX = n(952270),
    nQ = n(428678),
    n0 = n(353182),
    n1 = n(922529),
    n2 = n(888675),
    n3 = n(21623);
function n4(e) {
    let { expanded: t, onClick: n, count: l, compact: i, collapsedReason: s, canUncollapse: a = !0 } = e,
        o = (0, nY.YW)({ collapsedReason: s })
            .with({ collapsedReason: eR.t["VFWjc+"] }, () =>
                (0, r.jsx)(nX.G, { size: "md", color: "currentColor", className: n3.Q6 }),
            )
            .with({ collapsedReason: eR.t["+FcYM/"] }, () =>
                (0, r.jsx)(nQ.K, { size: "md", color: "currentColor", className: n3.Q6 }),
            )
            .with({ collapsedReason: eR.t.rHRovo }, () =>
                (0, r.jsx)(n0._, { size: "md", color: "currentColor", className: n3.TG }),
            )
            .otherwise(() => (0, r.jsx)(eN.P, { size: "md", color: "currentColor", className: n3.Q6 }));
    return (0, r.jsx)(e8.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, r.jsx)(n2.A, {
            compact: i,
            className: n3.L9,
            iconNode: o,
            children: (0, r.jsxs)("div", {
                className: a ? n3.Fo : n3.GU,
                children: [
                    eR.intl.format(s, { count: l }),
                    a &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " \u2014 ",
                                (0, r.jsx)(eC.D, {
                                    tag: "span",
                                    onClick: n,
                                    className: n3.rB,
                                    children: t ? eR.intl.string(eR.t.fgq1gs) : eR.intl.string(eR.t.XJuakA),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
let n7 = o.memo(function (e) {
    let { messages: t, channel: n, compact: l = !1, unreadId: i, collapsedReason: s, canUncollapse: a = !0 } = e,
        { hasJumpTarget: c = !1 } = t,
        [u, h] = o.useState(c && a),
        m = o.useCallback(() => {
            a && h((e) => !e);
        }, [a]);
    o.useEffect(() => {
        c && a && h(!0);
    }, [c, a]);
    let g = t.hasUnread ? t.content.length - 1 : t.content.length;
    return (0, r.jsxs)("div", {
        className: d()({ [ny._A]: !0, [n3.sz]: u }),
        children: [
            t.hasUnread && (!u || t.content[0]?.type === ec.TZK.DIVIDER)
                ? (0, r.jsx)(n1.A, { isUnread: !0, id: i }, "divider")
                : null,
            (0, r.jsx)(
                n4,
                { count: g, compact: l, expanded: u, onClick: m, collapsedReason: s, canUncollapse: a },
                "collapsed-message-item",
            ),
            u
                ? t.content.map((e, s) => {
                      if (e.type === ec.TZK.DIVIDER && s > 0) {
                          let e = t.content[s + 1]?.isGroupStart ?? !1;
                          return (0, r.jsx)(n1.A, { isUnread: !0, isBeforeGroup: e, id: i }, "divider");
                      }
                      if (e.type === ec.TZK.MESSAGE || e.type === ec.TZK.THREAD_STARTER_MESSAGE) {
                          let t = e.type === ec.TZK.THREAD_STARTER_MESSAGE ? n$ : nZ;
                          return (0, r.jsx)(
                              t,
                              {
                                  id: (0, e1.j)(n.id, e.content.id),
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
var n8 = n(114212),
    n5 = n(999803);
function n6(e) {
    let { isCollapsed: t, children: n } = e;
    return (0, r.jsx)("div", {
        className: d()(n5.dU, t && n5.yZ),
        children: (0, r.jsx)("div", { className: n5.JN, children: n }),
    });
}
let n9 = o.memo(function (e) {
    let { isOnTopic: t, isCollapsed: n, children: l } = e;
    return t ? l : (0, r.jsx)(n6, { isCollapsed: n, children: l });
});
var le = n(283243);
function lt(e) {
    return "group" in e;
}
let ln = (0, r.jsxs)(r.Fragment, {
    children: [
        (0, r.jsx)(n8.Ay, { messages: 4, groupSpacing: 16, className: le.Xb }),
        (0, r.jsx)(n8.Ay, { messages: 2, groupSpacing: 16, className: le.Xb }),
        (0, r.jsx)(n8.Ay, { messages: 3, groupSpacing: 16, className: le.Xb }),
    ],
});
function ll(e) {
    let { channel: t, conversation: n, focusStream: l, isCollapsed: i } = e,
        s = (0, m.bG)([O.A], () => O.A.isConversationFetchPending(n.id, !0), [n]);
    return (0, r.jsxs)("div", {
        className: le.XT,
        children: [
            (0, r.jsx)("ol", {
                className: le.cl,
                children: l.map((e) => {
                    if (lt(e)) {
                        var n;
                        return (0, r.jsx)(
                            n9,
                            {
                                isOnTopic: e.isOnTopic,
                                isCollapsed: i,
                                children: (0, r.jsx)(n7, {
                                    messages: e.group,
                                    channel: t,
                                    unreadId: "",
                                    collapsedReason:
                                        (n = e.group.type) === ec.TZK.MESSAGE_GROUP_BLOCKED
                                            ? eR.t["+FcYM/"]
                                            : n === ec.TZK.MESSAGE_GROUP_IGNORED
                                              ? eR.t["VFWjc+"]
                                              : n === ec.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                                ? eR.t.rHRovo
                                                : eR.t.xfkfTK,
                                    canUncollapse: e.group.type !== ec.TZK.MESSAGE_GROUP_SUSPENDED_USER,
                                }),
                            },
                            e.group.key,
                        );
                    }
                    return (0, r.jsx)(
                        n9,
                        {
                            isOnTopic: e.isOnTopic,
                            isCollapsed: i,
                            children: (0, r.jsx)(nZ, {
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
            s && ln,
        ],
    });
}
n(30146);
var li = n(735438),
    ls = n.n(li);
let la = { tension: 240, friction: 30 },
    lr = { tension: 320, friction: 28 },
    lo = { tension: 280, friction: 24, clamp: !0 },
    lc = { tension: 170, friction: 22, clamp: !0 },
    ld = { tension: 220, friction: 28, clamp: !0 },
    lu = 6,
    lh = -3,
    lm = 9;
var lg = n(798531);
async function lp(e) {
    let t = e.current,
        n = t?.getScrollerNode();
    null == t ||
        null == n ||
        n.scrollTop <= 5 ||
        (await new Promise((e) => {
            t.scrollTo({ to: 0, animate: !0, callback: () => e() });
        }));
}
function lA(e) {
    let { style: t, channel: n, conversation: l, scrollerRef: i, requestDismiss: s } = e,
        { isFocused: a } = (0, w.D7)(),
        { dismissReason: c } = K(),
        d = a ? lo : "navigation" === c ? ld : lc,
        h = (0, q.r)(W.A.colors.BORDER_SUBTLE).spring(),
        g = (0, q.r)(W.A.colors.BORDER_SUBTLE).spring({ opacity: 0 }),
        {
            borderTopRadius: p,
            shadowAlpha: A,
            contentPadding: f,
        } = (0, $.z)(
            { borderTopRadius: a ? 12 : 8, shadowAlpha: 0.4 * !!a, contentPadding: 4 * !!a, config: d },
            "respect-motion-settings",
        ),
        { borderColor: C } = (0, $.z)({ borderColor: a ? h : g, config: d }, "respect-motion-settings"),
        [x, E] = o.useState(!1),
        [S, _] = o.useState(!0),
        I = o.useCallback(() => {
            let e = i.current;
            null != e && (E(e.getDistanceFromTop() > 5), _(e.getDistanceFromBottom() > 5));
        }, [i]),
        j = (0, m.bG)([em.A], () => em.A.getMessages(n.id), [n.id]),
        y = (0, m.bG)([O.A], () => {
            if (l?.id == null) return null;
            let e = O.A.getConversationMetadata(n.id, l.id);
            return e?.fullyHydrated === !0 ? e.hydratedMessages : null;
        }, [n.id, l]),
        b = o.useMemo(
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
                                          0 > ee.default.compare(t.id, e.startMessageId) ||
                                              ee.default.compare(t.id, e.endMessageId) > 0 ||
                                              (l.has(t.id)
                                                  ? i.push({ record: t, isOnTopic: !0 })
                                                  : a < 10 && (i.push({ record: t, isOnTopic: !1 }), a++),
                                              s.add(t.id));
                                      }),
                                      null != n)
                                  )
                                      for (let e of n)
                                          s.has(e.id) || (i.push({ record: e, isOnTopic: !0 }), s.add(e.id));
                                  return i.sort((e, t) => ee.default.compare(e.record.id, t.record.id)), i;
                              })(t, n, l),
                              s = [],
                              a = null,
                              r = "";
                          for (let t of i) {
                              (null == a || (0, et.A)(e, a, t.record)) && (r = t.record.id);
                              let n = eh(e, t.record, (0, en.kf)(t.record));
                              if (null != n) {
                                  let e,
                                      l = s[s.length - 1];
                                  null != l && lt(l) && l.group.type === n
                                      ? (e = l)
                                      : ((e = { group: { type: n, content: [], key: t.record.id }, isOnTopic: !1 }),
                                        s.push(e));
                                  let i = { type: ec.TZK.MESSAGE, content: t.record, groupId: r };
                                  e.group.content.push(i), t.isOnTopic && (e.isOnTopic = !0);
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
        : (0, r.jsxs)(u.animated.div, {
              className: lg.Nr,
              style: {
                  top: t.cardTop,
                  bottom: 0,
                  left: t.cardInsetLeft,
                  right: t.cardInsetRight,
                  opacity: t.cardOpacity,
                  borderColor: C,
                  borderRadius: p.to((e) => `${e}px ${e}px 0 0`),
                  boxShadow: A.to((e) => `0 8px 24px rgba(0, 0, 0, ${e})`),
              },
              children: [
                  (0, r.jsx)(u.animated.div, { className: lg.sB, style: { opacity: t.bodyTintOpacity } }),
                  (0, r.jsx)(u.animated.div, {
                      style: { paddingTop: f, paddingLeft: f, paddingRight: f },
                      children: (0, r.jsx)(ew, { channel: n, conversation: l, requestDismiss: s }),
                  }),
                  (0, r.jsxs)("div", {
                      className: lg.gk,
                      children: [
                          (0, r.jsx)(J.zC, {
                              className: lg.XG,
                              ref: i,
                              onScroll: I,
                              children: (0, r.jsxs)(u.animated.div, {
                                  style: { paddingLeft: f, paddingRight: f },
                                  children: [
                                      (0, r.jsx)(ll, {
                                          channel: n,
                                          conversation: l,
                                          focusStream: b,
                                          isCollapsed: a || "navigation" === c,
                                      }),
                                      (0, r.jsx)("div", { className: lg.lB }),
                                  ],
                              }),
                          }),
                          x && (0, r.jsx)("div", { className: lg.iX, "aria-hidden": !0 }),
                          S && (0, r.jsx)("div", { className: lg.aE, "aria-hidden": !0 }),
                      ],
                  }),
              ],
          });
}
function lf(e) {
    let { channel: t } = e,
        { dismissReason: n, setDismissReason: l } = K(),
        { bannerMeasurementRef: i } = B(),
        { isFocused: s, setIsFocused: a } = (0, w.D7)(),
        c = o.useRef(!1),
        u = o.useRef(null),
        h = (0, m.bG)([O.A], () => O.A.getSelectedConversationId(t.id), [t.id]),
        g = o.useCallback(
            async (e) => {
                if (null != h && !c.current) {
                    if (
                        ((c.current = !0),
                        U.X.trackFocusModeDismissed({ channelId: t.id, conversationId: h, dismissReason: e }),
                        "return" === e)
                    ) {
                        let e = O.A.getConversationMetadata(t.id, h)?.conversation;
                        if (null != e)
                            try {
                                await I.A.jumpToMessage({ channelId: t.id, messageId: e.startMessageId, flash: !1 });
                            } catch (e) {}
                        await lp(u);
                    }
                    l(e), a(!1), (c.current = !1);
                }
            },
            [t.id, a, l, u, h],
        );
    !(function (e, t) {
        let { isFocused: n } = (0, w.D7)(),
            l = (0, m.cf)([em.A], () => {
                let t = em.A.getMessages(e.id);
                return { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
            }, [e.id]),
            i = o.useRef(l);
        o.useEffect(() => {
            if (!n) return;
            let t = em.A.getMessages(e.id);
            i.current = { jumpTargetId: t.jumpTargetId ?? null, jumpSequenceId: t.jumpSequenceId };
        }, [n, e.id]),
            o.useEffect(() => {
                if (!n) return;
                let { jumpTargetId: e, jumpSequenceId: s } = i.current;
                (l.jumpTargetId !== e || l.jumpSequenceId !== s) && t("navigation");
            }, [n, l, t]);
    })(t, g),
        o.useEffect(() => {
            if (s)
                return (
                    eg._.subscribe(ec.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e),
                    () => {
                        eg._.unsubscribe(ec.jej.CONVERSATIONS_FOCUS_MODE_CLOSE, e);
                    }
                );
            function e() {
                g("return");
            }
        }, [s, g]);
    let p = o.useCallback(() => {
            g("return");
        }, [g]),
        A = o.useMemo(
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
                config: () => (e) => ("leave" !== e ? lo : "navigation" === n ? ld : lc),
                onRest: (e, t) => {
                    "leave" === t.phase && l(null);
                },
            }),
            [n, i, l],
        ),
        f = (0, Z.p)(s ? h : null, A, "respect-motion-settings");
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: d()(lg.tB, !s && lg.Vq, {
                    [lg.Em]: !s && "navigation" === n,
                    [lg.Zp]: !s && "navigation" !== n,
                }),
                onClick: p,
                "aria-hidden": !0,
            }),
            f((e, n) => {
                if (null == n) return null;
                let l = O.A.getConversationMetadata(t.id, n)?.conversation ?? null;
                return (0, r.jsx)(lA, { style: e, channel: t, conversation: l, scrollerRef: u, requestDismiss: g });
            }),
        ],
    });
}
function lC(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, w.D7)(),
        { dismissReason: l } = K();
    return n || null !== l ? (0, r.jsx)(lf, { channel: t }) : null;
}
var lx = n(708988),
    lE = n(872351),
    lS = n(839181);
let l_ = (0, u.animated)("button"),
    lI = (0, u.animated)(e_.E);
function lj(e) {
    e.preventDefault();
}
let ly = o.memo(function (e) {
    let t,
        n,
        l,
        i,
        s,
        {
            conversation: a,
            layout: c,
            isExpanded: h,
            anchorId: m,
            hoveredConversationId: g,
            selectedConversationId: p,
            isFocusOverlayOpen: A,
            onHoverConversationChange: f,
            onJump: C,
        } = e,
        x = p === a.id,
        E = g === a.id,
        S = null != g && !E,
        _ = null == m ? "up" : ee.default.compare(a.startMessageId, m) > 0 ? "down" : "up",
        I = a.title,
        j = Math.min(16, Math.max(4, Math.round(0.6 * I.length))),
        y = (0, $.z)({ y: c.y, opacity: +!c.hidden, config: la }, "respect-motion-settings"),
        b = (0, $.z)(
            {
                ...((t = h && x),
                (n = 0),
                h && (x && E ? (n = -17) : x ? (n = -13) : E && (n = -24)),
                (l = 0),
                (i = 4),
                (s = 1),
                x && E ? ((l = 0), (i = 0), (s = 0.5)) : h && E && ((l = 1), (i = 0), (s = 1)),
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
                lineWidth: j,
                lineOpacity: +(!h && !c.hidden),
                config: lr,
            },
            "respect-motion-settings",
        ),
        v = o.useCallback(() => f(a.id), [f, a.id]),
        N = o.useCallback(() => f(null), [f]),
        T = o.useCallback(() => C(a.id), [C, a.id]),
        M = c.hidden || c.edge;
    return (0, r.jsxs)(l_, {
        "aria-current": x ? "true" : void 0,
        "aria-hidden": M ? "true" : void 0,
        className: d()(lS.ng, { [lS._D]: x, [lS.DJ]: E, [lS.KZ]: S }),
        style: {
            transform: y.y.to((e) => `translateY(${e}px)`),
            opacity: y.opacity,
            pointerEvents: M ? "none" : void 0,
        },
        onMouseDown: lj,
        onMouseEnter: v,
        onMouseLeave: N,
        onClick: T,
        children: [
            (0, r.jsx)(u.animated.span, {
                className: d()(lS.Og, A && lS.v7),
                style: {
                    opacity: b.pillOpacity,
                    transform: (0, u.to)(
                        [b.pillX, b.pillScale],
                        (e, t) => `translateY(-50%) translateX(${e}px) scale(${t})`,
                    ),
                },
                children: (0, r.jsx)(e_.E, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "none",
                    className: lS.B6,
                    children: I,
                }),
            }),
            (0, r.jsx)(lI, {
                tag: "span",
                variant: x ? "text-md/semibold" : "text-md/normal",
                color: x ? "text-strong" : E ? "text-default" : S ? "text-muted" : "text-subtle",
                className: lS.QV,
                lineClamp: 1,
                style: {
                    opacity: b.textOpacity,
                    transform: (0, u.to)([b.textScale, b.textX], (e, t) => `scale(${e}) translateX(${t}px)`),
                },
                children: I,
            }),
            (0, r.jsx)("span", {
                className: lS.iF,
                children: (0, r.jsx)(u.animated.span, {
                    className: lS.iN,
                    style: {
                        width: b.lineWidth,
                        opacity: b.lineOpacity,
                        transform: b.lineScaleX.to((e) => `scaleX(${e})`),
                    },
                }),
            }),
            (0, r.jsx)(u.animated.span, {
                className: lS.$N,
                "aria-hidden": "true",
                style: {
                    opacity: b.arrowOpacity,
                    transform: (0, u.to)([b.arrowX, b.arrowScale], (e, t) => `translateX(${e}px) scale(${t})`),
                },
                children:
                    "down" === _
                        ? (0, r.jsx)(lx.M, { size: "refresh_sm", color: "currentColor" })
                        : (0, r.jsx)(lE.z, { size: "refresh_sm", color: "currentColor" }),
            }),
        ],
    });
});
function lb(e) {
    let {
            items: t,
            isExpanded: n,
            anchorId: l,
            hoveredConversationId: i,
            selectedConversationId: s,
            showTopFade: a,
            showBottomFade: c,
            isFocusOverlayOpen: u,
            onHoverConversationChange: h,
            onJump: m,
        } = e,
        g = o.useMemo(() => (n && null != s ? (t.find((e) => e.conversation.id === s)?.slot ?? -1) : -1), [n, t, s]),
        p = o.useMemo(() => {
            let e = new Map();
            for (let t = lh; t <= lm; t++)
                e.set(
                    t,
                    (function (e) {
                        let t,
                            { slot: n, jumpedSlot: l, isExpanded: i, showTopFade: s, showBottomFade: a } = e,
                            r = n < 0 || n > 6;
                        return (
                            i ? ((t = 28 * n), l >= 0 && n !== l && (t += n < l ? -8 : 8)) : (t = 42 + 14 * n),
                            {
                                y: t,
                                hidden: r,
                                edge: i ? !r && ((0 === n && s) || (6 === n && a)) : (n <= 0 && s) || (n >= 6 && a),
                            }
                        );
                    })({ slot: t, jumpedSlot: g, isExpanded: n, showTopFade: a, showBottomFade: c }),
                );
            return e;
        }, [g, n, a, c]);
    return (0, r.jsx)("div", {
        className: d()(lS._R, n && lS.h1),
        role: "list",
        "aria-label": eR.intl.string(eM.default["Sw/4fg"]),
        children: t.map((e) => {
            let { conversation: t, slot: a } = e,
                o = p.get(a);
            return null == o
                ? null
                : (0, r.jsx)(
                      ly,
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
var lv = n(778712),
    lN = n(97808),
    lT = n(854627),
    lM = n(562153);
n(575279);
var lR = n(57004);
let lD = [
    { name: "40%", l1: "75%", l2: "50%" },
    { name: "55%", l1: "90%", l2: null },
    { name: "30%", l1: "60%", l2: "80%" },
    { name: "65%", l1: "45%", l2: "70%" },
];
function lL(e) {
    let { channel: t, message: n } = e,
        l = lM.Ay.useName(t.guild_id, t.id, n.author),
        { avatarSrc: i, avatarDecorationSrc: s } = (0, lT.A)({
            userId: n.author.id,
            guildId: t.guild_id,
            size: lv._3.SIZE_32,
        }),
        a = o.useMemo(() => (0, tv.Ay)(n).content, [n]),
        c = eZ.PZ.useSetting(),
        d = o.useMemo(() => (0, Q.mk)(n.timestamp, !0, c), [n.timestamp, c]);
    return (0, r.jsxs)("div", {
        className: lR.QS,
        children: [
            (0, r.jsx)(lN.eu, {
                className: lR.MM,
                src: i,
                avatarDecoration: s,
                size: lv._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, r.jsxs)("div", {
                className: lR.gp,
                children: [
                    (0, r.jsxs)("div", {
                        className: lR.yl,
                        children: [
                            (0, r.jsx)(e_.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: l,
                            }),
                            (0, r.jsx)(e_.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: d,
                            }),
                        ],
                    }),
                    (0, r.jsx)(e_.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            }),
        ],
    });
}
function lk() {
    return (0, r.jsx)("div", {
        className: lR.Rq,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) => {
            let n = lD[t % lD.length];
            return (0, r.jsxs)(
                "div",
                {
                    className: lR.uA,
                    children: [
                        (0, r.jsx)("div", { className: lR.h }),
                        (0, r.jsxs)("div", {
                            className: lR.jE,
                            children: [
                                (0, r.jsx)("div", { className: lR.zw, style: { width: n.name } }),
                                (0, r.jsx)("div", { className: lR.P4, style: { width: n.l1 } }),
                                null != n.l2 && (0, r.jsx)("div", { className: lR.P4, style: { width: n.l2 } }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function lP(e) {
    let { channel: t, conversationId: n } = e,
        { isFocused: l } = (0, w.D7)(),
        i = (0, m.bG)([O.A], () => O.A.getHydratedMessages(t.id, n), [n, t.id]),
        s = o.useMemo(() => i?.slice(0, 4) ?? null, [i]);
    return (0, r.jsx)("div", {
        className: d()(lR.Zt, l && lR.CU),
        children: (0, r.jsx)("div", {
            className: lR.eU,
            children:
                null == s
                    ? (0, r.jsx)(lk, {})
                    : s.length > 0
                      ? (0, r.jsx)("div", {
                            className: lR.z0,
                            children: s.map((e) => (0, r.jsx)(lL, { channel: t, message: e }, e.id)),
                        })
                      : null,
        }),
    });
}
var lO = n(311394);
function lG(e) {
    let { channel: t, scrollManager: n, conversations: l } = e,
        i = (0, m.bG)([O.A], () => O.A.getSelectedConversation(t.id)?.id ?? null, [t.id]),
        { selectAndFocusConversation: s } = B(),
        { isFocused: a } = (0, w.D7)(),
        { dismissReason: c } = K(),
        u = (function (e) {
            let [t, n] = o.useState(null);
            return (
                o.useEffect(() => {
                    function t(e) {
                        return n(e?.id ?? null);
                    }
                    return e.addAutomaticAnchorCallback(t, !0), () => e.removeAutomaticAnchorCallback(t);
                }, [e]),
                t
            );
        })(n),
        h = o.useMemo(
            () =>
                0 === l.length
                    ? null
                    : (l[
                          (function (e, t) {
                              if (0 === e.length) return 0;
                              if (null == t) return e.length - 1;
                              let n = e.findLastIndex((e) => 0 >= ee.default.compare(e.startMessageId, t));
                              return n >= 0 ? n : 0;
                          })(l, u)
                      ]?.id ?? null),
            [u, l],
        ),
        g = o.useMemo(
            () =>
                0 === l.length
                    ? null
                    : null != i && l.some((e) => e.id === i)
                      ? i
                      : null != h && l.some((e) => e.id === h)
                        ? h
                        : l[l.length - 1].id,
            [h, l, i],
        ),
        { clampLow: p, clampHigh: A } = (function (e) {
            if (0 === e) return { clampLow: 0, clampHigh: 0 };
            let t = Math.min(2, e - 1),
                n = Math.max(t, e - 1 - 2);
            return { clampLow: t, clampHigh: n };
        })(l.length),
        f = o.useMemo(
            () =>
                (function (e, t, n, l) {
                    if (0 === e.length) return 0;
                    let i = null != t ? e.findIndex((e) => e.id === t) : -1,
                        s = i >= 0 ? i : e.length - 1;
                    return (0, li.clamp)(s, n, l);
                })(l, g, p, A),
            [l, g, p, A],
        ),
        [C, x] = o.useState(!1),
        E = o.useCallback(() => x(!1), []),
        S = o.useMemo(
            () =>
                (function (e, t) {
                    let n = [];
                    for (let l = -6; l <= lu; l++) {
                        let i = t + l;
                        i >= 0 && i < e.length && n.push({ conversation: e[i], index: i, slot: 3 + l });
                    }
                    return n;
                })(l, f),
            [l, f],
        ),
        _ = o.useMemo(() => S.filter((e) => e.slot >= 0 && e.slot <= 6).map((e) => e.conversation), [S]),
        { showTopFade: I, showBottomFade: j } = o.useMemo(
            () => ({ showTopFade: f >= 3, showBottomFade: f < l.length - 3 }),
            [f, l.length],
        ),
        y = o.useRef(null),
        [b, v] = o.useState(null),
        N = null != b && b !== i ? b : null;
    o.useEffect(() => {
        (0, G.p7)(t, t.guild_id, _.length);
    }, [t.id]);
    let T = o.useCallback(
            (e) => {
                null != e &&
                    e !== i &&
                    U.X.trackPreviewImpression({ channelId: t.id, conversationId: e, isFocusMode: a }),
                    v(e),
                    null != e && e !== i && (0, G.qC)(t.id, t.guild_id, e);
            },
            [t.id, t.guild_id, a, i],
        ),
        M = o.useCallback(() => {
            v(null), E();
        }, [E]),
        R = o.useCallback(
            (e) => {
                U.X.trackTopicsUnitClicked({ channelId: t.id, conversationId: e, isFocusMode: a }), s(e), E();
            },
            [t.id, E, a, s],
        ),
        D = o.useCallback(() => (null != N ? (0, r.jsx)(lP, { channel: t, conversationId: N }) : null), [t, N]),
        L = o.useCallback(
            (e) => {
                let t;
                null != (t = n.ref.current?.getScrollerNode?.()) && 0 === e.deltaMode && (t.scrollTop += e.deltaY),
                    C && (v(null), E());
            },
            [n, C, E],
        ),
        k = o.useCallback(() => {
            x(!0),
                U.X.trackTopicsUnitImpression({ channelId: t.id, conversationIds: _.map((e) => e.id), isFocusMode: a });
        }, [t.id, _, a]);
    return 0 === l.length
        ? null
        : (0, r.jsx)("div", {
              className: d()(lO.kL, a && lO.tW, { [lO._Y]: !a && "navigation" === c, [lO.J_]: !a && "return" === c }),
              children: (0, r.jsxs)("div", {
                  className: d()(lO.rI, C && lO.RK),
                  onMouseEnter: k,
                  onMouseLeave: M,
                  onWheel: a ? void 0 : L,
                  children: [
                      (0, r.jsx)("div", { className: d()(lO.oT, C && lO.RK), "aria-hidden": !0 }),
                      (0, r.jsx)(eE.Y, {
                          targetElementRef: y,
                          shouldShow: C && null != N,
                          position: "top",
                          align: "right",
                          spacing: 12,
                          animation: eE.Y.Animation.FADE,
                          renderPopout: D,
                          children: () =>
                              (0, r.jsx)("div", {
                                  ref: y,
                                  className: d()(lO.nd, { [lO.mc]: C, [lO._z]: !C, [lO.OP]: C && I, [lO.yc]: C && j }),
                                  style: { height: 188 },
                                  children: (0, r.jsx)(lb, {
                                      items: S,
                                      isExpanded: C,
                                      anchorId: u,
                                      hoveredConversationId: b,
                                      selectedConversationId: i,
                                      showTopFade: I,
                                      showBottomFade: j,
                                      isFocusOverlayOpen: a,
                                      onHoverConversationChange: T,
                                      onJump: R,
                                  }),
                              }),
                      }),
                  ],
              }),
          });
}
function lU(e) {
    let { channel: t, scrollManager: n } = e,
        l = (0, P.sV)(t.guild_id, "scrollbar_chips"),
        i = (0, m.yK)([O.A], () => (l ? (O.A.getChannelConversations(t.id) ?? []) : []), [t.id, l]);
    return l && 0 !== i.length ? (0, r.jsx)(lG, { channel: t, scrollManager: n, conversations: i }) : null;
}
function lw(e) {
    let { channel: t, scrollManager: n } = e;
    return (0, P.sV)(t.guild_id, "scrollbar_chips")
        ? (0, r.jsxs)(z, {
              children: [(0, r.jsx)(lC, { channel: t }), (0, r.jsx)(lU, { channel: t, scrollManager: n })],
          })
        : null;
}
var lF = n(354328),
    lH = n(807632),
    lB = n(875317),
    lV = n(164956),
    lK = n(302031),
    lz = n(822074),
    lW = n(617617),
    lq = n(72314),
    l$ = n(568548),
    lJ = n(399263),
    lZ = n(287809),
    lY = n(234320),
    lX = n(863439),
    lQ = n(326337),
    l0 = n(615170);
function l1(e) {
    let { compact: t, messages: n, attachmentSpecs: l, totalHeight: i, groupSpacing: s } = e;
    return o.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l) e[t] = n;
        return (0, r.jsx)("div", {
            className: l0.i,
            style: { height: i },
            children: n.map((n, l) =>
                (0, r.jsx)(n8.Ay, { groupSpacing: s, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, l, i, s]);
}
var l2 = n(830178),
    l3 = n(887129),
    l4 = n(621466),
    l7 = n(315710),
    l8 = n(951001),
    l5 = n(334738),
    l6 = n(267102),
    l9 = n(863922),
    ie = n(965407);
function it(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, l4.vq)(l, HTMLElement); ) (n += l.offsetTop ?? 0), (l = l.offsetParent);
    return n;
}
function il(e) {
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: t, jumpTargetOffset: n } = e;
    if (e.has(t) || (!e.hasMoreBefore && t === ee.default.castChannelIdAsMessageId(e.channelId))) {
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
        ].sort(ee.default.compare),
        i = l.indexOf(t),
        s = l[i + (Math.abs(n) > 0 ? n : 1)] ?? l[i - 1];
    return null != s ? s : null;
}
let ii = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
class is {
    props;
    ref = o.createRef();
    automaticAnchor = null;
    messageFetchAnchor = null;
    focusAnchor = null;
    loading;
    jumping = !1;
    pinned;
    dragging = !1;
    isAtBottom = !1;
    prevScrollTop = null;
    anchorTimeout = null;
    initialScrollTop = null;
    acking = !1;
    scrollCounter = 0;
    offsetHeightCache = 0;
    scrollHeightCache = 0;
    scrollTopCache = -1;
    scrollHeightBeforeLoad = 0;
    loadMorePausedUntilUserScroll = !1;
    _bottomAnchor = null;
    _automaticAnchorCallbacks = [];
    _scrollCompleteCallbacks = [];
    constructor(e) {
        if (((this.props = e), (this.loading = e.messages.loadingMore), null != e.messages.jumpTargetId))
            this.pinned = !1;
        else {
            const t = lq.A.isAtBottom(e.channel.id);
            (this.pinned = t ?? !0),
                (this.initialScrollTop = t ? null : (lq.A.getChannelDimensions(e.channel.id)?.scrollTop ?? null));
        }
    }
    isReady() {
        return this.props.messages.ready;
    }
    isLoading() {
        return this.loading || this.props.messages.loadingMore;
    }
    isPinned() {
        return this.pinned;
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
        return null == t ? null : t.getElementById((0, e1.j)(n, e));
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
        this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck();
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
            this.loadMorePausedUntilUserScroll = !1;
        else if (t.loadingMore && !e.messages.loadingMore) {
            let e = Math.abs(i - this.scrollHeightBeforeLoad);
            this.loadMorePausedUntilUserScroll = e < 100;
        }
        if (this.isInitialized() || this.isReady()) {
            if (!this.isInitialized()) return void this.restoreScroll();
        } else {
            null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
            return;
        }
        if (null != e.messages.jumpTargetId) {
            if (this.isLoading()) return;
            let n = il(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping())
                    return void (null != n
                        ? this.scrollToMessage({ jumpTargetId: n, animate: !0 })
                        : (this.jumping = !1));
            } else {
                let l,
                    i = t.first();
                null != i &&
                    e.messages.last() !== t.last() &&
                    e.messages.first() !== t.first() &&
                    (l = ee.default.extractTimestamp(i.id)),
                    this.scrollToMessage({
                        jumpTargetId: n,
                        animate: !0,
                        fromTimestamp: l,
                        onJumpComplete: e.messages.onJumpComplete,
                    });
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let a = e.messages.last(),
            r = t.last(),
            o = ie.A.getOptions(a?.id ?? "");
        if (null != a && a.state === ec.cmJ.SENDING && r?.id !== a.id && o?.doNotScroll !== !0)
            return void this.setScrollToBottom();
        let { focusId: c } = this.props;
        if (null != c && n !== c) {
            let e = this.getElementFromMessageId(c);
            if (null != e)
                return void this.ref.current?.scrollIntoViewNode({
                    node: e,
                    padding: nq.mZ + this.props.additionalMessagePadding,
                    callback: this.handleScroll,
                });
        }
        s && this.fixScrollPosition(l, i);
    }
    getAnchorData(e, t, n) {
        let l = this.getElementFromMessageId(e),
            i = this.ref.current?.getScrollerNode();
        if (!(0, l4.vq)(l) || null == i) return null;
        let { offsetHeight: s } = l,
            a = it(l, i),
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
        return this.props.channel.isForumPost() ? nq.Gt : nq.k8;
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
            let t = -1 === (c = r) ? ee.default.castChannelIdAsMessageId(n.id) : e._array[c]?.id;
            if (null == t) break;
            let d = this.getAnchorData(t, i);
            if (((this._bottomAnchor = d), o && null != d && d.offsetTop > i + s + l.offsetHeight)) break;
            if (o) {
                r++;
                continue;
            }
            null != d && (d.offsetTop >= i + s || r === e.length - 1) && ((a = d), (o = !0)), r++;
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
            if (!(0, l4.vq)(t)) continue;
            let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
            return { node: t, fixedScrollTop: t.offsetTop - (e.offsetFromTop + n) };
        }
        return null;
    }
    fixAnchorScrollPosition() {
        let e = this.getAnchorFixData();
        if (null == e) return void this.handleScroll();
        let { node: t, fixedScrollTop: n } = e;
        null != this.focusAnchor
            ? (this.isPinned()
                  ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                  : this.mergeTo(n, this.handleScroll),
              this.ref.current?.scrollIntoViewNode({
                  node: t,
                  padding: nq.mZ + this.props.additionalMessagePadding,
                  callback: this.handleScroll,
              }))
            : this.mergeTo(n, this.handleScroll),
            this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()),
            this.isLoading() || (this.messageFetchAnchor = null);
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
        t && null != l && null != this.automaticAnchor && (l.offsetFromTop = this.automaticAnchor.offsetFromTop),
            this.setAutomaticAnchor(l);
    }
    updateVisibleMessagesDebounced = ls().debounce(l9.s_, 300);
    setAutomaticAnchor(e) {
        (this.automaticAnchor = e),
            this._automaticAnchorCallbacks?.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(e?.id, this._bottomAnchor?.id);
    }
    getScrollerState() {
        return this.ref.current?.getScrollerState() ?? ii;
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
            (this.scrollCounter = 0),
                clearTimeout(this.anchorTimeout),
                this.isPinned() ||
                    (null == this.automaticAnchor
                        ? this.setAutomaticAnchor(this.findAnchor())
                        : this.updateAutomaticAnchor(t.scrollTop, !0)),
                clearTimeout(this.anchorTimeout),
                this.fixScrollPosition(t.offsetHeight, t.scrollHeight),
                (this.scrollTopCache = t.scrollTop);
        else {
            if (null != e && e.target !== this.ref.current?.getScrollerNode()) return;
            this.scrollTopCache !== t.scrollTop &&
                (this.loadMorePausedUntilUserScroll && null != e && (this.loadMorePausedUntilUserScroll = !1),
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
                    (this.scrollCounter = 0), (this.anchorTimeout = null), (this.prevScrollTop = null);
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
            return this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(t);
        let l = this.isInScrollTriggerLoadingRegion(t);
        1 === l ? this.loadMore() : 2 === l ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(t);
    };
    handleResize = (e, t) => {
        let { offsetHeightCache: n, scrollHeightCache: l } = this;
        "container" === t ? (n = e.contentRect.height) : "content" === t && (l = e.contentRect.height),
            this.isHeightChange(n, l) && this.fixScrollPosition(n, l);
    };
    handleMouseDown = (e) => {
        e.target === e.currentTarget && (this.dragging = !0);
    };
    handleMouseUp = () => {
        (this.dragging = !1), this.handleScroll();
    };
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            { messages: i, placeholderHeight: s } = this.props;
        return i.hasMoreBefore && t < s && l > n ? 1 : i.hasMoreAfter && t >= l - n - s ? 2 : 0;
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
                props: { placeholderHeight: s },
            } = this;
        if (((this.prevScrollTop = t), null == i)) return;
        let a = this.isInPlaceholderRegion(e),
            r = t - i;
        0 !== a &&
            0 !== r &&
            (1 === a && t + r <= 0
                ? (this.mergeTo(s - n), (this.prevScrollTop = s - n))
                : 2 === a && t + r >= l - n && (this.mergeTo(l - s), (this.prevScrollTop = l - s)));
    }
    enableAutomaticAck() {
        this.isInitialized() &&
            !this.acking &&
            ((this.acking = !0),
            this.updateStoreDimensions(() => {
                (0, l5._9)(this.props.channel.id, this.props.windowId);
            }));
    }
    fixScrollPosition(e, t) {
        (this.offsetHeightCache = e),
            (this.scrollHeightCache = t),
            this.fixJumpTarget(),
            this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor
                ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                : this.fixAnchorScrollPosition();
    }
    fixJumpTarget() {
        if (!this.isJumping()) return;
        let { messages: e, hasUnreads: t } = this.props;
        if (null != e.jumpTargetId) {
            let n = il(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, l4.vq)(l)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : nq.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = this.getDocument()?.getElementById(nq.q4),
            i = () => {
                (this.jumping = !1), this.setAutomaticAnchor(this.findAnchor()), null != n && n(), this.handleScroll();
            };
        (this.pinned = !1),
            (this.jumping = e),
            null != l
                ? this.scrollTo(this.getOffsetOrientationFromNode(l, t, this.newMessageBarBuffer()), e, i)
                : this.scrollTo(this.getOffsetToPreventLoading("top"), e, i);
    }
    getOffsetOrientationFromNode(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            l = this.ref.current?.getScrollerNode();
        if (null == l) return 0;
        let i = this.getScrollerState(),
            s = it(e, l);
        return "middle" === t ? Math.min(s - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, s - n) : s - n;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = il(this.props.messages);
        null != t
            ? this.scrollToMessage({ jumpTargetId: t, animate: !1, onJumpComplete: this.props.messages.onJumpComplete })
            : this.props.hasUnreads &&
                this.props.channel.type !== ec.rbe.GUILD_VOICE &&
                this.props.channel.type !== ec.rbe.GUILD_STAGE_VOICE
              ? this.scrollToNewMessages()
              : null != e
                ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll)
                : this.setScrollToBottom();
    }
    loadMore = (() => {
        var e = this;
        return function () {
            let t,
                n,
                l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { messages: i } = e.props;
            if (l) {
                let e = i.last();
                null != e && (n = e.id);
            } else {
                let e = i.first();
                null != e && (t = e.id);
            }
            (e.messageFetchAnchor = e.findFetchAnchor(l)),
                (e.scrollHeightBeforeLoad = e.scrollHeightCache),
                (e.loading = !0),
                I.A.fetchMessages({
                    channelId: e.props.channel.id,
                    before: t,
                    after: n,
                    limit: Math.min(ec.EMb, 2 * (0, lQ.h)("scrollManager.loadMore")),
                    truncate: !0,
                });
        };
    })();
    scrollTo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        this.ref.current?.scrollTo({ to: e, animate: !b.Ay.useReducedMotion && t, callback: n }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    mergeTo(e, t) {
        this.ref.current?.mergeTo({ to: e, callback: t }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    setScrollToBottom() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { messages: t, channel: n } = this.props;
        if (t.hasMoreAfter)
            I.A.jumpToPresent(n.id, (0, lQ.h)("scrollManager.jumpToPresent")),
                (0, eJ.uh)(n.getGuildId() ?? ec.ME, n.id);
        else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                (this.jumping = !1), this.handleScroll();
            });
    }
    updateStoreDimensionsDebounced = ls().debounce(this.updateStoreDimensions, 200);
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) l8.A.updateChannelDimensions(t.id, Date.now(), 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: i, offsetHeight: s } = this.getScrollerState();
            l8.A.updateChannelDimensions(t.id, Date.now(), l - n, i - n, s, e);
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
        this.isJumping() ||
            !n ||
            null == l ||
            b.Ay.useReducedMotion ||
            (ee.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0);
        let a = () => {
            (this.jumping = !1),
                (0, l4.vq)(s) && ((s.tabIndex = -1), (0, l7.se)() || s.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                i?.(),
                this._scrollCompleteCallbacks.forEach((e) => e());
        };
        (0, l4.vq)(s)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      s,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : nq.mZ,
                  ),
                  n,
                  a,
              )
            : this.scrollToNewMessages(n, "middle", a);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: l } = t,
            { messages: i, hasUnreads: s, placeholderHeight: a } = this.props;
        if ("top" === e)
            if (!i.hasMoreBefore) return 0;
            else return s ? a - nq.N0 - 2 : a + 500;
        return i.hasMoreAfter ? n - l - a - 500 : n - l;
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
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, l), this.updateAutomaticAnchor(t);
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this._automaticAnchorCallbacks.push(e),
            (this._automaticAnchorCallbacks = ls().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = ls().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = ls().uniq(this._scrollCompleteCallbacks));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = ls().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        (this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, l5.Z5)(this.props.channel.id, this.props.windowId);
    }
}
n(667532);
var ia = n(95561),
    ir = n(486227),
    io = n(731738),
    ic = n(192308),
    id = n(832712),
    iu = n(807393),
    ih = n(381689),
    im = n(754302),
    ig = n(632738),
    ip = n(544231),
    iA = n(349435),
    iC = n(665909);
function ix(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/41b06cc820452b3b01d2a90f76b9ba4007cf4c795b2647fc3f0ff7d6a0632785.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
var iE = n(834581);
function iS(e) {
    let { header: t, description: n, onDismiss: l, buttons: i, dismissible: s = !0 } = e,
        a = o.useCallback(() => {
            l?.();
        }, [l]);
    return (0, r.jsxs)("div", {
        className: iE.HZ,
        children: [
            (0, r.jsxs)("div", {
                className: iE.Be,
                children: [
                    (0, r.jsx)(ix, { alt: "", size: 32 }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(eI.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, r.jsx)(e_.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: iE.Uo,
                children: i?.map((e, t) =>
                    (0, r.jsx)(
                        eT.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            s
                ? (0, r.jsx)(eC.D, {
                      className: iE.b,
                      onClick: a,
                      role: "button",
                      "aria-label": eR.intl.string(eR.t.WAI6xu),
                      children: (0, r.jsx)(eN.P, { size: "md", color: "currentColor", className: iE.b }),
                  })
                : null,
        ],
    });
}
function i_(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: l,
        warningType: i,
        header: s,
        description: a,
        onDismiss: c,
        buttons: d,
    } = e;
    o.useEffect(() => {
        iu.A.increment({ name: io.K.SAFETY_WARNING_VIEW });
    }, []);
    let u = o.useCallback(() => {
        c?.(), (0, iC._$)({ channelId: t, warningId: n, senderId: l, warningType: i, cta: iC.Wm.USER_BANNER_DISMISS });
    }, [c, t, n, l, i]);
    return (0, r.jsx)(iS, { buttons: d, description: a, header: s, onDismiss: u });
}
var iI = n(477427);
function ij(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = [
            { title: eR.intl.string(eR.t.wSZfJR), description: eR.intl.string(eR.t.CRwzW5) },
            { title: eR.intl.string(eR.t.cmMUaB), description: eR.intl.string(eR.t.n6G1ue) },
            { title: eR.intl.string(eR.t["5SPKSy"]), description: eR.intl.string(eR.t.eyjeJQ) },
        ],
        a = o.useCallback(() => {
            (0, ip.xi)(t, [l]);
        }, [t, l]);
    function c(e) {
        id.A.updateChannelOverrideSettings(null, t, { muted: !0 }, iI.fd.Muted),
            ih.A.showMuteSuccessToast(i, t),
            (0, iC._$)({ channelId: t, warningId: l, senderId: i, warningType: iA._j.LIKELY_ATO, cta: e }),
            a();
    }
    return (
        o.useEffect(() => {
            (0, iC.mO)(ec.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: iA._j.LIKELY_ATO,
            }),
                iu.A.increment({ name: io.K.SAFETY_WARNING_VIEW });
        }, [t, l, i]),
        (0, r.jsx)(i_, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: iA._j.LIKELY_ATO,
            header: eR.intl.string(eR.t.R8UsiI),
            description: eR.intl.string(eR.t.lI8nQl),
            onDismiss: a,
            buttons: [
                {
                    text: eR.intl.string(eR.t.tC1pvL),
                    variant: "primary",
                    onClick: function () {
                        (0, ic.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("55941"), n.e("82911"), n.e("47894")]).then(
                                n.bind(n, 129493),
                            );
                            return (n) => {
                                let { transitionState: a, onClose: o } = n;
                                return (0, r.jsx)(e, {
                                    transitionState: a,
                                    onClose: o,
                                    channelId: t,
                                    warningId: l,
                                    senderId: i,
                                    description: eR.intl.string(eR.t["/uid3p"]),
                                    safetyTipRows: s.map((e, t) =>
                                        (0, r.jsx)(
                                            im.B,
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
                                        (0, r.jsx)(
                                            ig.PQ,
                                            {
                                                title: eR.intl.string(eR.t.ftIK2A),
                                                description: eR.intl.string(eR.t.w2ve0t),
                                                buttonText: eR.intl.string(eR.t.ftIK2A),
                                                onButtonPress: () => {
                                                    c(iC.Wm.USER_MODAL_MUTE), o();
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, r.jsx)(eC.D, {
                                        onClick: () =>
                                            (0, iC._$)({
                                                channelId: t,
                                                warningId: l,
                                                senderId: i,
                                                warningType: iA._j.LIKELY_ATO,
                                                cta: iC.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, r.jsx)(eI.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: eR.intl.format(eR.t.UkH122, {
                                                learnMoreLink:
                                                    "https://discord.com/safety/understanding-and-avoiding-common-scams",
                                            }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, iC._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iA._j.LIKELY_ATO,
                                cta: iC.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                { text: eR.intl.string(eR.t.ftIK2A), onClick: () => c(iC.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
var iy = n(564771),
    ib = n(625333);
function iv(e) {
    let { channel: t, scrollManager: n } = e,
        l = o.useRef(null),
        { selectAndFocusConversation: i } = B(),
        s = (0, m.bG)([O.A], () => O.A.getSelectedConversation(t.id)),
        { isShifted: a } = (function (e) {
            let { bannerRef: t, scrollManager: n, channelId: l, selectedConversationId: i } = e,
                { bannerMeasurementRef: s, conversationJumpInProgressRef: a } = B(),
                [r, c] = o.useState(!1),
                d = o.useRef(!1);
            return (
                o.useEffect(() => {
                    if (null != t.current)
                        return () => {
                            (0, G.P7)(l, i);
                        };
                }, [l, t, i]),
                o.useEffect(() => {
                    if (null == t.current || null == s) return;
                    let e = n.ref.current?.getScrollerNode();
                    if (null == e) return;
                    let i = () => {
                        if (null == t.current) return;
                        let n = t.current.getBoundingClientRect().top - e.getBoundingClientRect().top;
                        s.current = n;
                        let i = e.clientHeight / 2,
                            r = n < i + 50 && n + 40 > i - 50;
                        if ((r !== d.current && ((d.current = r), c(r)), null != a.current)) return;
                        let o = e.getBoundingClientRect(),
                            u = t.current.getBoundingClientRect();
                        (u.bottom < o.top || u.top > o.bottom) && (0, G.P7)(l);
                    };
                    return (
                        e.addEventListener("scroll", i, { passive: !0 }),
                        () => {
                            e.removeEventListener("scroll", i), (s.current = null), (d.current = !1), c(!1);
                        }
                    );
                }, [s, t, n, c, l, a]),
                { isShifted: r }
            );
        })({ bannerRef: l, scrollManager: n, channelId: t.id, selectedConversationId: s?.id ?? null }),
        c = o.useCallback(() => {
            null != s && i(s.id);
        }, [i, s]);
    return null == s
        ? null
        : (0, r.jsx)("div", {
              ref: l,
              className: ib.A,
              children: (0, r.jsx)(eG, {
                  channel: t,
                  conversation: s,
                  actionsShifted: a,
                  onFocusToggle: c,
                  suppressBorder: !0,
              }),
          });
}
var iN = n(495273),
    iT = n(429933),
    iM = n(176781),
    iR = n(314307),
    iD = n(463930),
    iL = n(442433),
    ik = n(793574),
    iP = n(688810),
    iO = n(967144),
    iG = n(342296),
    iU = n(696451),
    iw = n(427262),
    iF = n(741887);
function iH(e) {
    let { userId: t, channel: l, noUserFallback: i = null } = e,
        s = o.useRef(null),
        { analyticsLocations: a } = (0, iP.Ay)(ik.A.USERNAME),
        c = (0, m.bG)([lZ.default], () => lZ.default.getUser(t)),
        d = (0, m.bG)([iU.Ay], () => (null != t ? iU.Ay.getMember(l.guild_id, t) : null)),
        u = (0, iO.gn)(l.guild_id, t ?? void 0, d?.colorStrings ?? null);
    function h(e) {
        if (null == c) return null;
        (0, iL.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("71406"),
                n.e("94881"),
                n.e("26132"),
                n.e("46652"),
                n.e("93190"),
                n.e("8757"),
                n.e("85968"),
                n.e("29787"),
                n.e("82073"),
                n.e("91994"),
                n.e("76665"),
                n.e("76273"),
                n.e("24198"),
                n.e("23427"),
                n.e("72883"),
                n.e("43116"),
                n.e("70515"),
                n.e("66939"),
                n.e("85802"),
                n.e("24966"),
            ]).then(n.bind(n, 175269));
            return (t) => (0, r.jsx)(e, { ...t, user: c, guildId: l.guild_id, channel: l });
        });
    }
    let g = d?.nick ?? iw.Ay.getName(c) ?? "???",
        p = d?.colorString;
    return null == c
        ? i
        : (0, r.jsx)(iP.f5, {
              value: a,
              children: (0, r.jsx)(iG.A, {
                  targetElementRef: s,
                  user: c,
                  guildId: l.guild_id,
                  channelId: l.id,
                  roleId: d?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(eC.D, {
                          ...e,
                          innerRef: s,
                          tag: "span",
                          onContextMenu: h,
                          children: (0, r.jsx)(e_.E, {
                              className: iF.e,
                              tag: "span",
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: (0, r.jsx)(iD.g, { name: g, colorString: p ?? null, colorStrings: u }),
                          }),
                      }),
              }),
          });
}
var iB = n(16590),
    iV = n(912553);
function iK(e) {
    let { channel: t } = e,
        n = (0, k.Ay)(t);
    return (0, r.jsxs)(iR.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)("div", {
                className: iV.P,
                children: (0, r.jsx)(iM.x, { size: "lg", color: W.A.colors.ICON_SUBTLE }),
            }),
            (0, r.jsx)(iR.cr, { children: n }),
            null != t.ownerId &&
                (0, r.jsx)(e_.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eR.intl.format(iB.default["UocED+"], {
                        usernameHook: (e, n) =>
                            (0, r.jsx)(iH, { userId: t.ownerId, channel: t, noUserFallback: null }, n),
                    }),
                }),
        ],
    });
}
var iz = n(93246),
    iW = n(95701),
    iq = n(808728),
    i$ = n(534890),
    iJ = n(713654),
    iZ = n(691060),
    iY = n(376310),
    iX = n(42362);
function iQ(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: l } = e,
        i =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, r.jsx)("div", {
        className: d()(iX._, { [iX.L]: l }),
        children: Array.from(t).map((e) =>
            (0, r.jsx)(iY.A, { tag: e, onRemove: i, size: null == i ? iY.A.Sizes.SMALL : iY.A.Sizes.MEDIUM }, e.id),
        ),
    });
}
var i0 = n(873185);
function i1(e) {
    let { channel: t } = e,
        n = (0, iZ.kt)(t),
        { firstMessage: l } = (0, m.cf)([t8.A], () => t8.A.getMessage(t.id)),
        i = new Set((0, iZ.zt)(t, n)),
        s = (0, iJ.gU)(t) ?? i$.o,
        a = (0, k.Ay)(t);
    return (0, r.jsxs)(iR.Ay, {
        channelId: t.id,
        className: i0.kL,
        children: [
            (0, r.jsx)("div", { className: i0.P0, children: (0, r.jsx)(s, { className: i0.Kk, strokeWidth: 1.75 }) }),
            (0, r.jsx)(iR.cr, { className: i0.wx, children: a }),
            null == l &&
                (0, r.jsx)(e_.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eR.intl.string(eR.t.mE3KJN),
                }),
            (0, r.jsx)(iQ, { appliedTags: i, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
var i2 = n(289873),
    i3 = n(548118),
    i4 = n(513461),
    i7 = n(654265),
    i8 = n(561446),
    i5 = n(806700);
function i6(e) {
    let { joinRequest: t, guild: n } = e,
        l = (0, m.bG)([lZ.default], () => lZ.default.getUser(t.userId));
    return (0, r.jsxs)("div", {
        className: i5.I8,
        children: [
            (0, r.jsxs)("div", {
                className: i5.Ov,
                children: [
                    null != n &&
                        (0, r.jsxs)("div", {
                            className: i5.yB,
                            children: [
                                (0, r.jsx)(i3.Ay, { guild: n, active: !0, size: i3.Ay.Sizes.SMOL, className: i5.$f }),
                                (0, r.jsx)(eI.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                    null != l &&
                        (0, r.jsx)(eI.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: eR.intl.format(eR.t.jDV3i6, { username: l.globalName }),
                        }),
                ],
            }),
            t.formResponses
                ?.filter((e) => e.field_type !== i4.rX.TERMS)
                .map((e) => {
                    let t =
                        e.field_type === i4.rX.MULTIPLE_CHOICE && null != e.response
                            ? e.choices[e.response]
                            : e.response;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("hr", { className: i5.g2 }),
                            (0, r.jsxs)("div", {
                                className: i5.fs,
                                children: [
                                    (0, r.jsx)(e_.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: e.label,
                                    }),
                                    (0, r.jsx)(e_.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                ],
                            }),
                        ],
                    });
                }),
        ],
    });
}
function i9(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: i } = (0, i7.A)(t.id);
    return (0, r.jsx)(iR.Ay, {
        channelId: t.id,
        className: i5.kL,
        children:
            null != l && null != l.formResponses
                ? (0, r.jsxs)("div", {
                      className: i5.KJ,
                      children: [
                          (0, r.jsx)("div", { children: (0, r.jsx)(i6, { guild: i, joinRequest: l }) }),
                          (0, r.jsx)(i8.A, { channelId: t.id, showProfile: !0 }),
                      ],
                  })
                : n
                  ? (0, r.jsx)(i2.y, {})
                  : null,
    });
}
var se = n(825484),
    st = n(241541),
    sn = n(571694),
    sl = n(922301),
    si = n(660184),
    ss = n(598104),
    sa = n(396787),
    sr = n(817789);
function so(e) {
    let { channel: t, children: n, className: l, editable: i, location: s } = e;
    return i
        ? (0, r.jsx)(ep.m, {
              position: "bottom",
              text: eR.intl.string(eR.t["0qPSMV"]),
              children: (0, r.jsxs)(eC.D, {
                  className: d()(sr.e, l),
                  onClick: () => (0, sa.jv)(t.id, s),
                  children: [
                      n,
                      (0, r.jsx)("div", {
                          className: sr.Z,
                          children: (0, r.jsx)(t$.R, { size: "xs", color: "currentColor" }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("div", { className: l, children: n });
}
var sc = n(73028),
    sd = n(277370),
    su = n(322923);
function sh(e) {
    let t,
        { channel: n, children: l, user: i } = e,
        s = (0, m.bG)([b.Ay], () => b.Ay.useReducedMotion),
        a = (0, k.Ay)(n) ?? "",
        {
            avatarDecorationSrc: c,
            eventHandlers: d,
            isAnimating: u,
        } = (0, lT.A)({ userId: i?.id, size: lv._3.SIZE_80, animateOnHover: !0 }),
        [h, g] = o.useState(!1),
        p = o.useCallback(() => {
            d.onMouseEnter(), g(!0);
        }, [d]),
        A = o.useCallback(() => {
            d.onMouseLeave(), g(!1);
        }, [d]),
        f = !n.isMultiUserDM() && i?.displayNameStyles != null;
    return (0, r.jsxs)(iR.Ay, {
        channelId: n.id,
        onMouseEnter: p,
        onMouseLeave: A,
        children: [
            ((t = !s && u),
            n.isMultiUserDM()
                ? (0, r.jsx)(so, {
                      channel: n,
                      editable: !0,
                      location: ik.A.EMPTY_GROUP_DM,
                      children: (0, r.jsx)(ss.A, { channel: n, size: lv._3.SIZE_80, animated: t, "aria-label": a }),
                  })
                : (0, r.jsx)(lN.eu, {
                      "aria-label": a,
                      size: lv._3.SIZE_80,
                      src: (0, sn.Y)(n, 80, t),
                      avatarDecoration: c,
                  })),
            (0, r.jsx)(iR.cr, {
                children: f
                    ? (0, r.jsx)(si.A, {
                          userName: a,
                          displayNameStyles: i?.displayNameStyles,
                          effectDisplayType: h ? sl.G.ANIMATED : sl.G.STATIC,
                          loop: !0,
                      })
                    : a,
            }),
            (0, r.jsx)(iR.j1, { children: l }),
            n.isMultiUserDM() &&
                (0, r.jsxs)(se.e, {
                    className: su.U,
                    children: [
                        (0, r.jsx)(sd.NE, { channel: n, text: eR.intl.string(eR.t.NB5DFD), icon: st.D }),
                        (0, r.jsx)(eT.$, {
                            icon: t$.R,
                            variant: "secondary",
                            text: eR.intl.string(eR.t["5Q9+/L"]),
                            "aria-label": eR.intl.string(eR.t["5Q9+/L"]),
                            onClick: () => (0, sc.U)(n.id, ik.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
var sm = n(136722),
    sg = n(342952),
    sp = n(177953),
    sA = n(725570),
    sf = n(435183),
    sC = n(685374),
    sx = n(63104),
    sE = n(474462);
function sS(e) {
    let t,
        { className: n, children: l, verified: i, roleColor: s, roleName: a } = e;
    return (
        (t = i
            ? (0, r.jsx)(sx.A, { size: 12, color: s, className: sE.TS })
            : (0, r.jsx)("div", { className: sE.yY, style: { backgroundColor: s } })),
        (0, r.jsxs)("div", { className: d()(n, sE.JC), style: { "--custom-role-label-color": s }, children: [t, a, l] })
    );
}
var s_ = n(468689),
    sI = n(46054),
    sj = n(34457),
    sy = n(317525),
    sb = n(488926),
    sv = n(84476);
function sN(e) {
    let {
        className: t,
        roleColor: n,
        roleName: l,
        hasRemoveIcon: i = !1,
        onClick: s,
        disabled: a = !1,
        verified: o = !1,
    } = e;
    return (0, r.jsx)(eC.D, {
        className: d()(t, sv.x6, { [sv.r9]: a }),
        onClick: a ? void 0 : s,
        "aria-disabled": a,
        role: "button",
        children: (0, r.jsx)(sS, {
            className: sv.JC,
            roleColor: n,
            roleName: l,
            verified: o,
            children:
                i &&
                (0, r.jsx)(eN.P, {
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
var sT = n(516757);
function sM(e) {
    let { channel: t } = e,
        [n, l] = o.useState(!1),
        i = (0, k.Ay)(t, !0),
        s = t.guild_id,
        a = (0, m.bG)([sy.A], () => (null != s ? sy.A.getSortedRoles(s) : void 0)),
        c = (0, m.bG)([lZ.default, ni.A], () => lZ.default.getUser(ni.A.getGuild(s)?.ownerId)),
        u = o.useMemo(() => (null != a ? a.filter((e) => !(0, sj.Oy)(e)) : []), [a]),
        h = o.useMemo(
            () =>
                ls()(u)
                    .filter((e) => {
                        if (null == s) return !1;
                        let n = sb.aH({ forceRoles: { [e.id]: e }, context: t });
                        return sm.X8(n, sm.kg(ec.xBc.ADMINISTRATOR, ec.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, s, u],
        ),
        g = (0, m.yK)([lZ.default], () => {
            let e = {};
            for (let n of (null != c && (e[c.id] = c), Object.values(t.permissionOverwrites))) {
                if (n.type !== nD.r2.MEMBER || null != e[n.id]) continue;
                let t = lZ.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return ls()(e)
                .filter((e) => {
                    let n = sb.$3({ permission: ec.xBc.ADMINISTRATOR, user: e, context: t }),
                        l = t.permissionOverwrites[e.id] ?? sb.x3,
                        i = sm.zy(l.allow, ec.xBc.VIEW_CHANNEL);
                    return n || i;
                })
                .value();
        }, [t, c]),
        p = td.A.can(ec.xBc.MANAGE_CHANNELS, t) || td.A.can(ec.xBc.MANAGE_ROLES, t),
        A = o.useCallback(() => l(!1), []);
    return (0, r.jsxs)(iR.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(iR.WK, { locked: !0, channelType: t.type }),
            (0, r.jsx)(iR.cr, { children: eR.intl.format(eR.t.I3R7Vn, { channelName: i }) }),
            (0, r.jsx)(iR.j1, {
                className: tL.PT,
                children: eR.intl.format(eR.t.QuwqjG, {
                    channelName: i,
                    topicHook: () => sI.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            p
                ? (0, r.jsxs)("div", {
                      className: sT.$x,
                      children: [
                          (0, r.jsx)(eT.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eR.intl.string(eR.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: sp.n,
                          }),
                          (0, r.jsx)(eT.$, {
                              size: "sm",
                              variant: "secondary",
                              text: eR.intl.string(eR.t["3gUsJb"]),
                              onClick: function () {
                                  sf.Ay.open(t.id);
                              },
                              icon: t$.R,
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: sT.ol,
                children: [
                    (function () {
                        if (1 !== g.length || h.length > 0)
                            return (0, r.jsx)(sg.A, { guildId: t.guild_id, className: sT.HD, maxUsers: 5, users: g });
                        let e = g[0],
                            n = iw.Ay.getName(e);
                        return (0, r.jsxs)("div", {
                            className: sT.HD,
                            children: [
                                (0, r.jsx)(lN.eu, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: lv._3.SIZE_24,
                                }),
                                (0, r.jsx)(e_.E, {
                                    tag: "span",
                                    className: sT.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xa0",
                                (0, r.jsx)(e_.E, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: eR.intl.string(eR.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    h.map((e, n) => {
                        let l = e.colorString ?? ec.TpD,
                            i = e.tags?.guild_connections !== void 0;
                        return p
                            ? (0, r.jsx)(
                                  sN,
                                  {
                                      className: d()(sT.JC, { [sT.HV]: n === h.length - 1 }),
                                      roleName: e.name,
                                      roleColor: l,
                                      disabled: !p,
                                      verified: i,
                                      onClick: () => {
                                          s_.A.open(t.guild_id, ec.BEX.MEMBERS), s_.A.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, r.jsx)(
                                  sS,
                                  {
                                      className: d()(sT.JC, { [sT.HV]: n === h.length - 1 }),
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
                ? (0, r.jsx)(sA.aF, {
                      renderModal: (e) =>
                          (0, r.jsx)(sC.default, { ...e, onClose: () => (A(), e.onClose()), channelId: t.id }),
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
var sR = n(329856);
function sD(e) {
    let { channel: t } = e,
        n = (0, k.Ay)(t, !0),
        l = (0, m.bG)([td.A], () => td.A.can(ec.xBc.MANAGE_CHANNELS, t) && iW.bk.has(t.type));
    return (0, r.jsxs)(iR.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(iR.WK, { channelType: t.type }),
            (0, r.jsx)(iR.cr, { children: eR.intl.format(eR.t.I3R7Vn, { channelName: n }) }),
            (0, r.jsx)(iR.j1, {
                className: tL.PT,
                children: eR.intl.format(eR.t.pYMVRT, {
                    channelName: n,
                    topicHook: () => sI.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            l
                ? (0, r.jsx)("div", {
                      className: sR.U,
                      children: (0, r.jsx)(eT.$, {
                          size: "sm",
                          variant: "secondary",
                          text: eR.intl.string(eR.t["3gUsJb"]),
                          onClick: () => {
                              sf.Ay.open(t.id);
                          },
                          icon: t$.R,
                      }),
                  })
                : null,
        ],
    });
}
var sL = n(415296);
function sk(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, r.jsx)("div", { style: { marginTop: -8 } })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(e_.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, r.jsx)("div", {
                          className: sL.VA,
                          children: eR.intl.format(eR.t.imPXd5, {
                              usernameHook: (e, n) =>
                                  (0, r.jsx)(
                                      iH,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                          noUserFallback: (0, r.jsx)("span", {
                                              className: d()(sL.eM, sL.sL),
                                              children: "???",
                                          }),
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === ec.rbe.PRIVATE_THREAD
                      ? (0, r.jsx)(e_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eR.intl.string(eR.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function sP(e) {
    let { channel: t } = e,
        n = (0, iJ.gU)(t) ?? tW.y,
        l = (0, k.Ay)(t);
    return (0, r.jsxs)(iR.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)("div", { className: sL.P0, children: (0, r.jsx)(n, { className: sL.Kk }) }),
            (0, r.jsx)(iR.cr, { children: l }),
            (0, r.jsx)(sk, { channel: t }),
        ],
    });
}
var sO = n(328857),
    sG = n(157550),
    sU = n(957283),
    sw = n(189213),
    sF = n(824552),
    sH = n(933958),
    sB = n(869003),
    sV = n(321191),
    sK = n(546183),
    sz = n(543465),
    sW = n(308528),
    sq = n(928658),
    s$ = n(978914),
    sJ = n(977347);
function sZ(e) {
    let { channel: t, user: n } = e,
        l = !0 === n.bot,
        {
            message: i,
            isReportable: s,
            isLoaded: a,
        } = (function (e, t, n) {
            let l,
                i =
                    (l = (0, m.bG)([nk.A], () => nk.A.getRelationshipType(t), [t])) === ec.eA$.NONE ||
                    l === ec.eA$.BLOCKED ||
                    l === ec.eA$.PENDING_INCOMING,
                s = n || i,
                a = (0, sJ.D)(e.id, t),
                { message: r, loaded: o, error: c } = (0, s$.I)(e, { enabled: s }),
                d = a ?? (r?.author?.id === t ? r : null);
            return { message: d, isReportable: s, isLoaded: null != d || o || c };
        })(t, n.id, l),
        { channelId: c } = (0, sU.N)(),
        d = t.id === c,
        u = !nd.Fr && !d,
        h = o.useCallback(() => {
            null != i &&
                (0, sq.b8)(i, () => {
                    sW.A.closePrivateChannel(t.id, u);
                });
        }, [t.id, i, u]);
    return !s || (null == i && a)
        ? null
        : (0, r.jsx)(eT.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == i,
              onClick: h,
              text: eR.intl.string(eR.t.HHZmDn),
          });
}
function sY(e) {
    let { channel: t } = e,
        l = (0, m.bG)([sz.Ay], () => sz.Ay.isChannelMuted(null, t.id));
    return (0, r.jsx)(eT.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? eR.intl.string(eR.t.YqAjXy) : eR.intl.string(eR.t.w4m945),
        onClick: function () {
            (0, ic.openModalLazy)(async () => {
                let { default: e } = await n.e("99312").then(n.bind(n, 259763));
                return (n) => (0, r.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function sX(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        i = (0, m.bG)([sH.Ay], () => sH.Ay.getSelfEmbeddedActivities());
    function s() {
        sF.A.delete(l.id);
        let e = i.get(n.id);
        null != e && sB.A.leaveActivity({ location: e.location, applicationId: n.id });
    }
    return (0, r.jsx)(eT.$, {
        variant: "secondary",
        text: eR.intl.string(eR.t["5S3sQF"]),
        onClick: () => {
            (0, ic.openModal)((e) =>
                (0, r.jsx)(sw.Modal, {
                    title: eR.intl.string(eR.t["DT39A+"]),
                    subtitle: eR.intl.formatToPlainString(eR.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: eR.intl.string(eR.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: eR.intl.string(eR.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                s(), e.onClose();
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                ns.default.track(ec.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
}
function sQ(e) {
    var t;
    let { channel: n, user: l } = e,
        i =
            ((t = l?.id ?? ec.dJq),
            (0, m.bG)([sV.A], () => (null !== t ? sV.A.getUserProfile(t ?? ec.dJq)?.application : void 0)) ?? void 0),
        { authorizedAppToken: s, authorizedAppsFetchState: a } = (0, m.cf)([sK.default], () => ({
            authorizedAppToken: sK.default.getNewestTokenForApplication(i?.id),
            authorizedAppsFetchState: sK.default.getFetchState(),
        }));
    return (o.useEffect(() => {
        l.bot && a === sK.FetchState.NOT_FETCHED && sF.A.fetch();
    }, [l.bot, a]),
    l.bot && null != i && null != s)
        ? (0, r.jsxs)(se.e, {
              size: "sm",
              children: [
                  (0, r.jsx)(sY, { channel: n }),
                  (0, r.jsx)(sX, { application: i, channel: n, oauth2Token: s }),
                  (0, r.jsx)(sZ, { channel: n, user: l }),
              ],
          })
        : (0, r.jsx)(se.e, { size: "sm", children: (0, r.jsx)(sZ, { channel: n, user: l }) });
}
var s0 = n(692617),
    s1 = n(854378),
    s2 = n(573435),
    s3 = n(903209),
    s4 = n(975732),
    s7 = n(486020),
    s8 = n(518477),
    s5 = n(864401);
function s6(e) {
    let { userId: t, channelId: n, showDivider: l = !1, shouldStackGuildIcons: i = !1 } = e,
        s = (0, m.bG)([sV.A], () => sV.A.getMutualGuilds(t), [t]),
        a = lZ.default.getUser(t);
    o.useEffect(() => {
        null == s && null != a && (0, s3.A)(t, a.getAvatarURL(null, 80), { withMutualGuilds: !0 });
    }, [s, t, a]);
    let c = o.useMemo(() => {
            if (null == s) return [];
            let e = s.slice(0, 3),
                t = e.length - 1;
            return e
                .map((e, n) => {
                    let { guild: l } = e,
                        i = s7.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 24 });
                    if (null == i) return null;
                    let s = (0, r.jsx)("img", { src: i, alt: "", className: s5.my }, l.id);
                    return n === t
                        ? s
                        : (0, r.jsx)(
                              s2.Ay,
                              {
                                  className: s5.cp,
                                  mask: s2.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                                  width: 24,
                                  height: 24,
                                  children: s,
                              },
                              l.id,
                          );
                })
                .filter(nr.Vq);
        }, [s]),
        u = o.useMemo(
            () =>
                (s ?? []).map((e) => {
                    let { guild: t } = e;
                    return t;
                }),
            [s],
        );
    return null == s || 0 === s.length
        ? (0, r.jsx)("div", {
              className: d()(s5.kL, l ? s5.yF : null),
              children: (0, r.jsx)(e_.E, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: eR.intl.string(eR.t.zjVh8h),
              }),
          })
        : (0, r.jsxs)(eC.D, {
              className: d()(s5.kL, s5.vk, { [s5.yF]: l }),
              onClick: function () {
                  (0, s4.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: s8.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [ik.A.DM_CHANNEL],
                  });
              },
              children: [
                  i
                      ? (0, r.jsx)(s0.A, { guilds: u, maxGuilds: 3, size: s1.$v.Sizes.SMOL, hideOverflowCount: !0 })
                      : (0, r.jsx)("div", { className: s5.H, children: c }),
                  (0, r.jsx)(e_.E, {
                      className: s5.NI,
                      variant: "text-sm/normal",
                      children: eR.intl.format(eR.t.eE3oep, { count: s.length }),
                  }),
              ],
          });
}
var s9 = n(717398),
    ae = n(327166),
    at = n(390848),
    an = n(175709);
function al(e) {
    let { userId: t } = e;
    return (0, r.jsx)(eT.$, {
        size: "sm",
        variant: "secondary",
        onClick: function () {
            s9.A.blockUser(t, { location: ec.liQ.DM_CHANNEL });
        },
        text: eR.intl.string(eR.t.l4Emac),
    });
}
function ai(e) {
    let { userId: t, showingBanner: n, variant: l = "primary", label: i } = e,
        s = (0, ae.D)(t, i),
        a = (0, m.bG)([nk.A], () => nk.A.getRelationshipType(t), [t]),
        o = (0, m.bG)([nk.A], () => nk.A.getOriginApplicationId(t), [t]),
        { acceptFriendRequest: c } = (0, at.I)({
            userId: t,
            applicationId: o,
            isGameRelationship: !1,
            location: ec.liQ.DM_CHANNEL,
        });
    return n
        ? null
        : (0, r.jsx)(eT.$, {
              variant: l,
              onClick: function () {
                  a === ec.eA$.PENDING_INCOMING
                      ? c()
                      : s9.A.addRelationship({ userId: t, context: { location: ec.liQ.DM_CHANNEL } });
              },
              text: s,
          });
}
function as(e) {
    let { userId: t } = e;
    return (0, r.jsx)(eT.$, {
        variant: "secondary",
        onClick: function () {
            s9.A.removeFriend(t, { location: ec.liQ.DM_CHANNEL });
        },
        text: eR.intl.string(eR.t.cvSt1J),
    });
}
function aa(e) {
    let { userId: t } = e;
    return (0, r.jsx)(eT.$, {
        variant: "secondary",
        onClick: function () {
            s9.A.unblockUser(t, { location: ec.liQ.DM_CHANNEL });
        },
        text: eR.intl.string(eR.t.XyHpKH),
    });
}
function ar(e) {
    let { channel: t, user: n, showingBanner: l } = e,
        i = (0, m.bG)([nk.A], () => nk.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: s } = (0, at.I)({
            userId: n.id,
            applicationId: i,
            isGameRelationship: !1,
            location: ec.liQ.DM_CHANNEL,
        });
    return (0, r.jsxs)("div", {
        className: an.K,
        children: [
            (0, r.jsx)(e_.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: eR.intl.format(eR.t.uIomXw, { username: iw.Ay.getName(n) }),
            }),
            (0, r.jsxs)(se.e, {
                size: "sm",
                children: [
                    (0, r.jsx)(eT.$, { variant: "primary", onClick: s, text: eR.intl.string(eR.t["+WbSn5"]) }),
                    (0, r.jsx)(eT.$, {
                        variant: "secondary",
                        onClick: function () {
                            s9.A.cancelFriendRequest(n.id, { location: ec.liQ.DM_CHANNEL });
                        },
                        text: eR.intl.string(eR.t.rQSndv),
                    }),
                    (0, r.jsx)(al, { userId: n.id }),
                    l ? null : (0, r.jsx)(sZ, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function ao(e) {
    let t,
        {
            channel: n,
            user: l,
            showingBanner: i,
            addFriendVariant: s = "primary",
            addFriendLabel: a,
            compactPendingIncoming: o = !1,
        } = e,
        c = (0, m.bG)([nk.A], () => nk.A.getRelationshipType(l.id), [l.id]);
    if (c === ec.eA$.PENDING_INCOMING && !o) return (0, r.jsx)(ar, { channel: n, user: l, showingBanner: i });
    switch (c) {
        case ec.eA$.NONE:
        case ec.eA$.PENDING_INCOMING:
            l.bot || (t = (0, r.jsx)(ai, { userId: l.id, showingBanner: i, variant: s, label: a }));
            break;
        case ec.eA$.FRIEND:
            t = (0, r.jsx)(as, { userId: l.id });
            break;
        case ec.eA$.BLOCKED:
            t = (0, r.jsx)(aa, { userId: l.id });
            break;
        case ec.eA$.PENDING_OUTGOING:
            t = (0, r.jsx)(eT.$, { variant: "primary", disabled: !0, text: eR.intl.string(eR.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let d = c !== ec.eA$.BLOCKED;
    return (0, r.jsxs)(se.e, {
        size: "sm",
        children: [t, d ? (0, r.jsx)(al, { userId: l.id }) : null, i ? null : (0, r.jsx)(sZ, { channel: n, user: l })],
    });
}
var ac = n(92650),
    ad = n(138298),
    au = n(761640);
function ah(e) {
    let { channel: t, user: n } = e,
        l = o.useCallback(() => {
            (0, ey.P0)((0, eb.o)(eR.intl.string(eR.t.a2j0hv), ev.Ck.FAILURE));
        }, []),
        i = o.useCallback(() => {
            ad.A.closeChannelSidebar(au.fe);
        }, []),
        s = o.useCallback(() => {
            ad.A.closeChannelSidebar(au.fe);
        }, []),
        {
            acceptMessageRequest: a,
            rejectMessageRequest: c,
            isAcceptLoading: d,
            isRejectLoading: u,
            isOptimisticAccepted: h,
            isOptimisticRejected: m,
        } = (0, ac.t)({ user: lZ.default.getUser(n.id), onError: l, onAcceptSuccess: s, onRejectSuccess: i }),
        g = d || u || h || m;
    return (0, r.jsxs)(se.e, {
        size: "sm",
        children: [
            (0, r.jsx)(eT.$, {
                variant: "primary",
                disabled: g,
                onClick: () => a(t.id),
                loading: d,
                text: eR.intl.string(eR.t.Kz8Pwr),
            }),
            (0, r.jsx)(eT.$, {
                variant: "secondary",
                disabled: g,
                onClick: () => c(t.id),
                loading: u,
                text: eR.intl.string(eR.t.B2nygW),
            }),
            (0, r.jsx)(sZ, { channel: t, user: n }),
        ],
    });
}
var am = n(331674);
function ag(e) {
    let t,
        { channel: n, user: l, showingBanner: i } = e,
        { channelId: s } = (0, sU.N)(),
        a = (0, m.bG)([sG.A], () => null != s && sG.A.isSpam(s), [s]),
        o = (0, m.bG)([nk.A], () => nk.A.getRelationshipType(l.id), [l.id]),
        c = n.id === s,
        d = !0 === l.bot,
        u = l.isNonUserBot(),
        h = (0, eW.U)(),
        g = am.n;
    return (
        u
            ? (t = null)
            : h
              ? ((t = (0, r.jsx)(ao, {
                    channel: n,
                    user: l,
                    showingBanner: i,
                    addFriendVariant: "active",
                    addFriendLabel: eR.intl.string(eR.t["PMsq/b"]),
                    compactPendingIncoming: !0,
                })),
                (g = am.O))
              : a || c
                ? (t = (0, r.jsx)(ah, { channel: n, user: l }))
                : d
                  ? (t = (0, r.jsx)(sQ, { channel: n, user: l }))
                  : ((t = (0, r.jsx)(ao, { channel: n, user: l, showingBanner: i })),
                    o === ec.eA$.PENDING_INCOMING && (g = am.O)),
        (0, r.jsxs)("div", {
            className: g,
            children: [
                (0, r.jsx)(s6, { userId: l.id, channelId: n.id, showDivider: g !== am.O, shouldStackGuildIcons: h }),
                t,
            ],
        })
    );
}
var ap = n(746080),
    aA = n(818050);
function af(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, iN.Ae)(n),
        i = (0, m.bG)([iq.Ay], () => null != n.guild_id && n === iq.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, iT.A)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(i1, { channel: n });
    if (n.isMediaThread()) return (0, r.jsx)(iK, { channel: n });
    if (iW.Le.has(n.type)) return (0, r.jsx)(sP, { channel: n });
    if (i) return (0, r.jsx)(sO.A, { channel: n });
    else if (l) return (0, r.jsx)(sM, { channel: n });
    return (0, r.jsx)(sD, { channel: n });
}
function aC(e) {
    let { channel: t, showingBanner: n } = e,
        l = (0, k.Ay)(t),
        { type: i } = t,
        s = (0, m.bG)([lZ.default], () => (t.isPrivate() ? lZ.default.getUser(t.getRecipientId()) : null)),
        a = iw.Ay.useUserTag(s),
        { canManageRoles: o, canReadMessageHistory: c } = (0, m.cf)([td.A], () => ({
            canManageRoles: td.A.can(ec.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: td.A.can(ec.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, r.jsx)(sh, { channel: t, children: eR.intl.string(eR.t.Rzvnig) });
    if (i === ec.rbe.DM)
        return (0, r.jsxs)(sh, {
            channel: t,
            user: s,
            children: [
                null == s || s.isProvisional
                    ? null
                    : (0, r.jsx)(eI.D, { variant: "heading-xl/medium", className: aA.SX, children: a }),
                eR.intl.format(eR.t["Qvg+6+"], { username: l }),
                s?.isProvisional ? (0, r.jsx)(iz.Y, { userId: s.id }) : null,
                null != s ? (0, r.jsx)(ag, { channel: t, user: s, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, r.jsxs)(iR.Ay, {
                channelId: t.id,
                children: [
                    (0, r.jsx)(iR.cr, { children: eR.intl.format(eR.t.I3R7Vn, { channelName: l }) }),
                    (0, r.jsx)(iR.j1, { children: eR.intl.string(eR.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(ap.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(i9, { channel: t });
        else return (0, r.jsx)(sh, { channel: t, children: eR.intl.format(eR.t.MFwcqO, { name: l }) });
    return c
        ? (0, r.jsx)(af, { channel: t, canManageRoles: o })
        : (0, r.jsx)(iR.Ay, {
              channelId: t.id,
              children: (0, r.jsx)(iR.j1, { children: eR.intl.format(eR.t.hPVEQG, { channelName: l }) }),
          });
}
var ax = n(506774),
    aE = n(933832),
    aS = n(782603),
    a_ = n(408278),
    aI = n(763175),
    aj = n(56562),
    ay = n(765671),
    ab = n(304072),
    av = n(578623),
    aN = n(702841),
    aT = n(696986),
    aM = n(871237),
    aR = n(36491),
    aD = n(953727);
function aL(e) {
    let { width: t = 45, height: n = 46, ...l } = e;
    return (0, r.jsxs)("svg", {
        ...(0, aD.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 49 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, r.jsx)("path", {
                d: "M29.424 22.375L30.9908 17.9974C31.6183 16.242 32.8917 14.792 34.5514 13.943L46.105 8.03515C47.7328 7.19988 49.3851 9.15697 48.2694 10.6141C47.1536 12.0713 45.1905 13.7662 42.0689 15.0465L45.5563 15.0222C46.9464 15.01 47.4829 16.8268 46.3123 17.5767C44.3247 18.8632 41.3372 19.924 37.4962 18.8144L38.9229 20.1557C39.6728 20.863 39.1119 22.1128 38.0815 22.0397C36.6183 21.9238 34.8746 21.4909 33.6857 20.2106C33.6857 20.2106 32.8992 22.375 30.8201 23.5639C30.0397 24.0089 29.1252 23.2224 29.424 22.375Z",
                fill: "white",
            }),
            (0, r.jsx)("path", {
                d: "M19.5767 46.8513C20.112 45.2515 18.84 43.3838 16.7357 42.6798C14.6314 41.9757 12.4916 42.7018 11.9563 44.3016C11.421 45.9014 12.6929 47.769 14.7973 48.4731C16.9016 49.1772 19.0414 48.4511 19.5767 46.8513Z",
                fill: "#66B9FF",
            }),
            (0, r.jsx)("path", {
                d: "M25.2658 39.551C25.0403 40.2339 24.4915 40.7521 23.7172 41.0996C23.9001 41.6423 23.9184 42.1788 23.7477 42.6848C23.577 43.1909 23.1685 43.6847 22.6198 44.0261C22.7379 44.4329 22.7336 44.8655 22.6076 45.2699C21.9918 47.0929 18.791 47.666 15.456 46.5441C12.121 45.4223 9.90783 43.0384 10.5175 41.2155C10.6648 40.8046 10.9325 40.4476 11.2857 40.1912C11.0662 39.6059 11.0236 39.0206 11.2065 38.478C11.3894 37.9354 11.7186 37.5574 12.1881 37.2342C11.7796 36.4904 11.6576 35.7405 11.8832 35.0637C12.56 33.0457 16.1083 32.4116 19.803 33.6493C23.4978 34.8869 25.9426 37.533 25.2658 39.551Z",
                fill: "#89D6FF",
            }),
            (0, r.jsx)("path", {
                d: "M9.76155 19.8454C11.6089 14.3277 19.0166 11.8341 26.2963 14.279C33.5759 16.7238 37.984 23.1743 36.1366 28.692C34.9294 32.2891 31.3628 34.5998 27.0096 35.0998C26.5376 35.1499 26.0849 35.3144 25.6908 35.5789C25.2966 35.8435 24.9729 36.2001 24.7477 36.6179L23.9855 38.0506C23.1686 39.3737 20.6079 39.7517 17.9557 38.8615C15.1146 37.9104 13.2368 35.868 13.694 34.2584L13.9318 33.0207C14.0215 32.5411 13.9898 32.0467 13.8397 31.5824C13.6895 31.1181 13.4257 30.6988 13.0722 30.3625C9.97494 27.3506 8.56657 23.406 9.76155 19.8454Z",
                fill: "#FFEFA3",
            }),
            (0, r.jsx)("path", {
                d: "M21.0407 42.2577C19.8335 42.2577 18.5166 42.0321 17.2119 41.5932C15.1755 40.9164 13.4013 39.7763 12.3344 38.4716C12.2837 38.4193 12.2444 38.3572 12.2191 38.289C12.1938 38.2207 12.1829 38.148 12.1872 38.0754C12.1915 38.0027 12.2109 37.9318 12.2441 37.8671C12.2773 37.8023 12.3236 37.7452 12.3801 37.6993C12.4366 37.6535 12.502 37.6199 12.5722 37.6006C12.6423 37.5814 12.7158 37.577 12.7877 37.5877C12.8597 37.5984 12.9287 37.624 12.9902 37.6628C13.0518 37.7016 13.1046 37.7528 13.1453 37.8131C14.0903 38.9654 15.6938 39.9836 17.5411 40.6055C19.2848 41.1908 21.0895 41.3615 22.504 41.0749C22.5736 41.0547 22.6467 41.0491 22.7186 41.0586C22.7905 41.068 22.8597 41.0923 22.9217 41.1298C22.9838 41.1674 23.0374 41.2174 23.0791 41.2767C23.1208 41.336 23.1498 41.4033 23.1642 41.4744C23.1786 41.5455 23.1781 41.6188 23.1627 41.6897C23.1473 41.7605 23.1174 41.8275 23.0748 41.8862C23.0322 41.9449 22.9779 41.9941 22.9154 42.0308C22.8528 42.0675 22.7833 42.0908 22.7113 42.0992C22.1613 42.2092 21.6015 42.2623 21.0407 42.2577V42.2577ZM20.8761 45.0745C21.0147 45.062 21.1429 44.9956 21.233 44.8896C21.3231 44.7835 21.3679 44.6463 21.3577 44.5075C21.3453 44.3693 21.2787 44.2417 21.1725 44.1526C21.0662 44.0635 20.9289 44.0201 20.7907 44.0319C19.5043 44.1416 17.9862 43.9283 16.5229 43.4344C14.9377 42.904 13.5233 42.0931 12.5478 41.1481C12.4458 41.0675 12.3175 41.0276 12.1878 41.0362C12.058 41.0448 11.9361 41.1014 11.8457 41.1948C11.7553 41.2882 11.7029 41.4119 11.6985 41.5419C11.6942 41.6718 11.7383 41.7987 11.8222 41.898C12.9075 42.9528 14.4622 43.849 16.1876 44.4282C17.5228 44.8733 18.858 45.105 20.0957 45.105C20.364 45.105 20.62 45.0928 20.8761 45.0745V45.0745Z",
                fill: "#3F96EF",
            }),
            (0, r.jsx)("path", {
                d: "M11.6396 20.8698C13.2065 16.1813 19.4924 14.0657 25.6746 16.1386C31.8568 18.2116 35.5942 23.6865 34.0212 28.375C32.9969 31.4296 29.9729 33.3867 26.2782 33.8074C25.8773 33.851 25.493 33.9914 25.1584 34.2166C24.8238 34.4418 24.549 34.7449 24.3577 35.0999L23.7114 36.3193C23.0163 37.4411 20.8459 37.7642 18.59 37.0082C16.1817 36.1973 14.5844 34.4658 14.9746 33.1001L15.1819 32.0454C15.2562 31.6382 15.2283 31.2189 15.1006 30.8252C14.9729 30.4314 14.7494 30.0756 14.4502 29.7895C11.8164 27.2349 10.6275 23.8877 11.6396 20.8698Z",
                fill: "url(#paint0_linear_859_60333)",
            }),
            (0, r.jsx)("path", {
                d: "M18.8521 39.1186C19.1939 39.1973 19.54 39.2563 19.8886 39.2954C21.5042 33.412 23.2053 28.7905 24.7234 26.0652C28.1254 27.1627 29.3875 26.6993 29.8387 26.1018C30.2898 25.5043 30.1374 24.6691 29.3875 23.5838C28.6376 22.4986 27.9121 22.151 27.0341 22.3096C26.1562 22.4681 25.2111 23.2851 24.2539 24.8032C23.3483 24.4754 22.4627 24.0947 21.6018 23.6631C21.7908 21.6572 21.553 20.3098 20.9007 19.5965C20.5105 19.1697 19.7666 18.749 18.468 19.1575C17.1694 19.566 16.9316 20.2305 16.9255 20.7183C16.9072 21.9072 18.5351 23.1997 20.48 24.2545C19.9617 28.0589 18.1571 33.6985 16.4377 38.2041C16.7412 38.3718 17.0547 38.5205 17.3767 38.6492C18.0412 36.8933 18.9801 34.3021 19.8032 31.6073C20.6263 28.9125 21.1994 26.5896 21.4677 24.7605C22.2298 25.1263 22.998 25.4495 23.7174 25.7177C22.9187 27.1688 22.0895 29.0954 21.2421 31.4549C20.6507 33.0949 19.7971 35.6556 18.8521 39.1186ZM27.217 23.3399C27.3816 23.3095 27.8694 23.2241 28.5278 24.1752C29.0766 24.9739 29.0887 25.3641 29.0095 25.4677C28.8022 25.7421 27.6133 25.8579 25.2782 25.1446C25.9854 24.0655 26.6439 23.4375 27.217 23.3399ZM20.6019 23.1204C18.9862 22.1876 17.962 21.2548 17.9681 20.7366C17.9742 20.4439 18.5412 20.2366 18.785 20.1574C19.0013 20.0837 19.2273 20.0426 19.4557 20.0354C19.8825 20.0354 20.0593 20.2244 20.1263 20.3037C20.5653 20.7793 20.6995 21.7791 20.6019 23.1204Z",
                fill: "#FFC31A",
            }),
            (0, r.jsx)("path", {
                d: "M32.5883 3.43255C32.9256 3.21613 33.2127 2.93007 33.4304 2.59358C33.648 2.25708 33.7912 1.87793 33.8503 1.48156L34.0515 0.115857C34.0573 0.0830328 34.0746 0.0533456 34.1003 0.0321176C34.126 0.0108896 34.1584 -0.000490999 34.1918 1.62532e-05C34.2244 -0.000288277 34.256 0.0113057 34.2807 0.032628C34.3054 0.0539503 34.3215 0.0835394 34.3259 0.115857L34.5271 1.48156C34.5862 1.87793 34.7294 2.25708 34.9471 2.59358C35.1647 2.93007 35.4519 3.21613 35.7892 3.43255L35.966 3.54839C35.9867 3.55964 36.004 3.57641 36.0158 3.59685C36.0277 3.6173 36.0336 3.64062 36.033 3.66423C36.0336 3.68785 36.0277 3.71117 36.0158 3.73162C36.004 3.75206 35.9867 3.76883 35.966 3.78007L35.7892 3.90201C35.4524 4.11903 35.1657 4.40525 34.9481 4.74163C34.7305 5.07802 34.587 5.45688 34.5271 5.85301L34.3259 7.21871C34.3216 7.25162 34.3057 7.28194 34.2812 7.30426C34.2566 7.32659 34.2249 7.33948 34.1918 7.34065V7.34065C34.1579 7.33971 34.1254 7.32703 34.0998 7.30479C34.0742 7.28256 34.0572 7.25213 34.0515 7.21871L33.8503 5.85301C33.7905 5.45688 33.647 5.07802 33.4294 4.74163C33.2118 4.40525 32.9251 4.11903 32.5883 3.90201L32.4115 3.78617C32.3918 3.77413 32.3758 3.75702 32.3651 3.73663C32.3543 3.71624 32.3493 3.69334 32.3505 3.67033V3.67033C32.3493 3.64732 32.3543 3.62442 32.3651 3.60403C32.3758 3.58364 32.3918 3.56653 32.4115 3.55449L32.5883 3.43255Z",
                fill: "#55EF84",
            }),
            (0, r.jsx)("path", {
                d: "M39.3804 39.3185C39.7181 39.1011 40.0054 38.8141 40.2231 38.4765C40.4408 38.139 40.5837 37.7588 40.6424 37.3614L40.8497 35.9957C40.8541 35.9634 40.8702 35.9338 40.8949 35.9125C40.9196 35.8912 40.9512 35.8796 40.9838 35.8799V35.8799C41.0165 35.8796 41.0481 35.8912 41.0728 35.9125C41.0974 35.9338 41.1135 35.9634 41.118 35.9957L41.3253 37.3614C41.3851 37.7584 41.5285 38.1382 41.7461 38.4755C41.9636 38.8129 42.2504 39.1003 42.5873 39.3185L42.7641 39.4283C42.7826 39.4415 42.7977 39.4589 42.8083 39.479C42.8189 39.4991 42.8246 39.5214 42.8251 39.5441V39.5563C42.8246 39.5782 42.8189 39.5996 42.8082 39.6187C42.7976 39.6379 42.7825 39.6541 42.7641 39.666L42.5873 39.7819C42.2498 39.9996 41.9627 40.2867 41.7451 40.6242C41.5274 40.9617 41.3843 41.3418 41.3253 41.739L41.118 43.0986C41.1137 43.1315 41.0978 43.1618 41.0733 43.1841C41.0487 43.2065 41.017 43.2194 40.9838 43.2205V43.2205C40.9507 43.2194 40.919 43.2065 40.8944 43.1841C40.8699 43.1618 40.854 43.1315 40.8497 43.0986L40.6424 41.739C40.5845 41.3414 40.4419 40.9609 40.2241 40.6233C40.0064 40.2856 39.7186 39.9987 39.3804 39.7819L39.2035 39.666C39.1852 39.6541 39.1701 39.6379 39.1594 39.6187C39.1488 39.5996 39.143 39.5782 39.1426 39.5563V39.5441C39.143 39.5214 39.1488 39.4991 39.1594 39.479C39.17 39.4589 39.1851 39.4415 39.2035 39.4283L39.3804 39.3185Z",
                fill: "#FF78B5",
            }),
            (0, r.jsx)("path", {
                d: "M26.5035 8.52263C26.7308 8.37742 26.9245 8.18538 27.0717 7.95934C27.2189 7.73329 27.3162 7.47844 27.3571 7.2118L27.4912 6.29118C27.4953 6.2696 27.5065 6.25004 27.5231 6.23565C27.5397 6.22127 27.5607 6.21291 27.5826 6.21192V6.21192C27.6049 6.21172 27.6265 6.21966 27.6433 6.23426C27.6602 6.24885 27.6711 6.26909 27.6741 6.29118L27.8143 7.2118C27.8541 7.47805 27.9503 7.73273 28.0964 7.95879C28.2426 8.18486 28.4353 8.37709 28.6618 8.52263L28.7776 8.60189C28.7914 8.60981 28.8027 8.62143 28.8103 8.63544C28.8178 8.64944 28.8213 8.66527 28.8203 8.68115C28.8208 8.69613 28.8171 8.71096 28.8096 8.72391C28.802 8.73686 28.7909 8.7474 28.7776 8.75431L28.6618 8.83357C28.4353 8.97911 28.2426 9.17135 28.0964 9.39741C27.9503 9.62348 27.8541 9.87815 27.8143 10.1444L27.6741 11.065C27.6711 11.0871 27.6602 11.1074 27.6433 11.1219C27.6265 11.1365 27.6049 11.1445 27.5826 11.1443V11.1443C27.5607 11.1433 27.5397 11.1349 27.5231 11.1206C27.5065 11.1062 27.4953 11.0866 27.4912 11.065L27.3571 10.1444C27.3162 9.87776 27.2189 9.62291 27.0717 9.39686C26.9245 9.17082 26.7308 8.97878 26.5035 8.83357L26.3876 8.75431C26.3752 8.74646 26.3648 8.73571 26.3573 8.72297C26.3499 8.71023 26.3457 8.69588 26.345 8.68115V8.68115C26.3452 8.66548 26.3492 8.6501 26.3566 8.6363C26.364 8.62251 26.3747 8.6107 26.3876 8.60189L26.5035 8.52263Z",
                fill: "#89D6FF",
            }),
            (0, r.jsx)("path", {
                d: "M0.524839 29.6125C0.752168 29.4673 0.945898 29.2752 1.09309 29.0492C1.24028 28.8231 1.33755 28.5683 1.3784 28.3016L1.51253 27.381C1.51663 27.3594 1.52789 27.3399 1.54448 27.3255C1.56108 27.3111 1.58204 27.3027 1.60399 27.3018V27.3018C1.62627 27.3016 1.64786 27.3095 1.6647 27.3241C1.68154 27.3387 1.69247 27.3589 1.69544 27.381L1.83567 28.3016C1.87543 28.5679 1.9716 28.8226 2.11776 29.0486C2.26391 29.2747 2.45667 29.4669 2.68313 29.6125L2.79897 29.6917C2.81276 29.6997 2.82407 29.7113 2.83161 29.7253C2.83915 29.7393 2.84263 29.7551 2.84165 29.771V29.771C2.84218 29.786 2.83846 29.8008 2.8309 29.8138C2.82335 29.8267 2.81228 29.8372 2.79897 29.8442L2.68313 29.9295C2.45667 30.0751 2.26391 30.2673 2.11776 30.4934C1.9716 30.7194 1.87543 30.9741 1.83567 31.2403L1.69544 32.161C1.69247 32.1831 1.68154 32.2033 1.6647 32.2179C1.64786 32.2325 1.62627 32.2404 1.60399 32.2402C1.58204 32.2392 1.56108 32.2309 1.54448 32.2165C1.52789 32.2021 1.51663 32.1825 1.51253 32.161L1.3784 31.2403C1.33755 30.9737 1.24028 30.7189 1.09309 30.4928C0.945898 30.2668 0.752168 30.0747 0.524839 29.9295L0.408999 29.8503C0.396513 29.8424 0.386111 29.8317 0.378679 29.8189C0.371248 29.8062 0.367008 29.7918 0.366321 29.7771V29.7771C0.365528 29.7604 0.369036 29.7438 0.37651 29.7288C0.383983 29.7139 0.39517 29.7011 0.408999 29.6917L0.524839 29.6125Z",
                fill: "#3541D6",
            }),
            (0, r.jsx)("path", {
                d: "M14.5781 21.0834L14.8647 16.6449C14.9792 14.8659 14.41 13.1103 13.2734 11.7369L5.37186 2.17094C4.25003 0.823536 2.06735 1.91488 2.49413 3.6159C2.92091 5.31693 3.99396 7.55448 6.2559 9.8591L3.20137 8.51778C1.98809 7.98126 0.829688 9.37135 1.57351 10.4749C2.83556 12.3527 5.05482 14.4135 8.84707 14.8951L7.08508 15.5353C6.15835 15.8706 6.17664 17.1814 7.10946 17.5046C8.43858 17.9618 10.1335 18.2423 11.6638 17.5655C11.6638 17.5655 11.5297 19.7604 12.9076 21.5956C13.4258 22.2845 14.5233 21.9431 14.5781 21.0834Z",
                fill: "white",
            }),
            (0, r.jsx)("path", {
                d: "M32.7407 25.4545C32.9236 27.1067 32.9663 28.3992 33.6369 28.3261C34.3076 28.2529 35.3441 26.8384 35.1611 25.1862C34.9782 23.5339 33.643 22.2658 32.9724 22.339C32.3017 22.4121 32.5578 23.8022 32.7407 25.4545Z",
                fill: "white",
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                    id: "paint0_linear_859_60333",
                    x1: "34.2419",
                    y1: "5.70262",
                    x2: "5.61649",
                    y2: "53.1558",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, r.jsx)("stop", { offset: "0.14", stopColor: "#FFE45C" }),
                        (0, r.jsx)("stop", { offset: "0.83", stopColor: "#FFC31A" }),
                    ],
                }),
            }),
        ],
    });
}
var ak = n(788780);
function aP(e) {
    let { threadId: t } = e,
        n = (0, aN.bG)([eY.A], () => eY.A.getChannel(t)),
        l = (0, aN.bG)([eY.A], () => eY.A.getChannel(n?.parent_id)),
        i = o.useCallback(() => {
            null != n &&
                null != l &&
                ((0, ia.zV)(ec.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }),
                (0, tu.C)((0, aM.af)(n, l)));
        }, [n, l]);
    return (0, r.jsxs)("div", {
        className: ak.BQ,
        children: [
            (0, r.jsx)(aL, {}),
            (0, r.jsxs)("div", {
                className: ak.BB,
                children: [
                    (0, r.jsx)(e_.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: eR.intl.string(eR.t["5uAO7d"]),
                    }),
                    (0, r.jsx)(e_.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eR.intl.format(eR.t.WnfPV3, {
                            helpArticleUrl: tb.A.getCreatorSupportArticleURL(ec.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, r.jsx)(aT.h, { size: 4 }),
                    (0, r.jsx)(eT.$, { text: eR.intl.string(eR.t.C5UQC9), variant: "primary", icon: tF.q, onClick: i }),
                ],
            }),
            (0, r.jsx)(eC.D, {
                className: ak.b,
                onClick: function () {
                    (0, aR.sF)(t);
                },
                "aria-label": eR.intl.string(eR.t["0+xZH0"]),
                children: (0, r.jsx)(eN.P, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
var aO = n(505527),
    aG = n(467073),
    aU = n(960538),
    aw = n(604121),
    aF = n(238301);
function aH() {
    return n
        .e("15423")
        .then(n.t.bind(n, 155147, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let aB = o.memo(function (e) {
    let { channel: t, isLastItem: n } = e,
        l = (0, m.bG)([b.Ay], () => b.Ay.useReducedMotion),
        i = (0, m.bG)([td.A], () => td.A.can(ec.xBc.SEND_MESSAGES_IN_THREADS, t)),
        s = (0, ts.s5)(t),
        a = (0, m.bG)([ea.default], () => ea.default.getId());
    return n
        ? i && !s && t.ownerId !== a
            ? (0, r.jsxs)("div", {
                  className: aF.aP,
                  children: [
                      (0, r.jsx)(aw.a, { importData: aH, shouldAnimate: !l, className: aF.lY }),
                      (0, r.jsxs)("div", {
                          className: aF.FS,
                          children: [
                              (0, r.jsx)(eI.D, {
                                  variant: "heading-md/semibold",
                                  children: eR.intl.string(eR.t.OmBThA),
                              }),
                              (0, r.jsx)(e_.E, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: eR.intl.string(eR.t.zcs5ko),
                              }),
                          ],
                      }),
                  ],
              })
            : null
        : (0, r.jsx)("div", { className: aF.yF });
});
var aV = n(930390),
    aK = n(831688),
    az = n(226698),
    aW = n(892340),
    aq = n(715757),
    a$ = n(390897),
    aJ = n(862482),
    aZ = n(215026),
    aY = n(66834),
    aX = n(964486),
    aQ = n(351001),
    a0 = n(400528);
function a1(e) {
    let { text: t, icon: n, onClick: l, disabled: i, submitting: s } = e;
    return (0, r.jsx)(ep.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, r.jsx)(a_.K, {
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
var a2 = n(221314),
    a3 = n(145530),
    a4 = n(905499),
    a7 = n(406810),
    a8 = n(991982),
    a5 = n(838111),
    a6 = n(870136);
function a9(e) {
    let { channel: t, message: l, snapshot: i } = e,
        { moderatorReport: s } = i,
        a = s?.reported_user_id,
        c = (0, m.bG)([lZ.default], () => (null != a ? lZ.default.getUser(a) : null)),
        d = (0, m.bG)([ni.A], () => ni.A.getGuild(t.guild_id));
    (0, aq.ml)(l);
    let u = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, m.bG)([a0.A], () => null != l && a0.A.isUserBanned(l.id)),
                a = null != l && null == s,
                [c, d] = o.useState(a),
                u = (0, m.bG)([td.A], () => null != l && null != i && (0, aQ.fJ)(l, i, [td.A]));
            if (
                ((0, aX.Ay)(() => {
                    a && aY.A.searchGuildBans(t.guild_id, void 0, [l?.id]).finally(() => d(!1));
                }),
                !u)
            )
                return null;
            let h = !0 === s ? eR.intl.string(a2.default.dpfwQ1) : eR.intl.string(a2.default.ASv23S),
                g = `ban-user-${l?.id}`;
            return (0, r.jsx)(
                a1,
                {
                    text: h,
                    icon: aZ.w,
                    onClick: () => {
                        null != l &&
                            (0, ic.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("33847"), n.e("2504")]).then(
                                    n.bind(n, 333179),
                                );
                                return (n) => (0, r.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: !0 === s || c,
                    submitting: c,
                    color: aJ.$n.Colors.RED,
                },
                g,
            );
        })({ channel: t, user: c, guild: d }),
        h = (function (e) {
            let { channel: t, user: l, guild: i } = e,
                s = (0, m.bG)([td.A], () => null != l && null != i && (0, aQ.KX)(l, i, [td.A])),
                a = (0, m.bG)([iU.Ay], () => null == l || null == iU.Ay.getMember(t.guild_id, l.id));
            if (!s) return null;
            let o = a ? eR.intl.string(a2.default.Ux67nW) : eR.intl.string(a2.default["snp/lJ"]),
                c = `kick-user-${l?.id}`;
            return (0, r.jsx)(
                a1,
                {
                    text: o,
                    icon: a4.N,
                    onClick: () => {
                        null != l &&
                            (0, ic.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("97660"), n.e("40243")]).then(
                                    n.bind(n, 547166),
                                );
                                return (n) => (0, r.jsx)(e, { ...n, guildId: t.guild_id, user: l, modReportId: t.id });
                            });
                    },
                    disabled: a,
                },
                c,
            );
        })({ channel: t, user: c, guild: d }),
        g = [
            (function (e) {
                let { message: t, user: n, guild: l, channel: i } = e,
                    s = (0, m.bG)([td.A], () => null != n && null != l && (0, aQ.Kd)(n, l, [td.A])),
                    { messageReference: a } = t,
                    o = (0, m.bG)([em.A], () => (null != a ? em.A.getMessage(a.channel_id, a.message_id) : null)),
                    c = (0, m.bG)([eY.A], () => (null != o ? eY.A.getChannel(o.channel_id) : null)),
                    d = (0, m.bG)([eY.A], () => eY.A.getChannel(i.id)?.isArchivedThread() ?? !1);
                if (!s) return null;
                let u = null == o ? eR.intl.string(a2.default["0IZbwC"]) : eR.intl.string(a2.default.Uj6oD4),
                    h = null == o,
                    g = `delete-message-${t.id}`;
                return (0, r.jsx)(
                    a1,
                    {
                        text: u,
                        icon: tX.u,
                        onClick: () => {
                            null != c &&
                                null != o &&
                                a3.A.confirmDelete(c, o, !1, { isFlagResolved: d, moderatorReportChannelId: i.id });
                        },
                        disabled: h,
                        color: aJ.$n.Colors.RED,
                    },
                    g,
                );
            })({ channel: t, message: l, user: c, guild: d }),
            u,
            h,
            (function (e) {
                let { channel: t, user: n, guild: l } = e,
                    i = (0, m.bG)(
                        [lZ.default, ni.A, td.A],
                        () => null != n && null != l && (0, a5.b)(l.id, n.id, [lZ.default, ni.A, td.A]),
                    ),
                    [s, a] = (0, a6.Ay)(n?.id, t.guild_id),
                    o = (0, m.bG)([iU.Ay], () => null != l && null != n && null != iU.Ay.getMember(l.id, n.id));
                if (!i || !o) return null;
                let c = `timeout-user-${n?.id}`;
                return (0, r.jsx)(
                    a1,
                    {
                        text: a ? eR.intl.string(a2.default["6uMZbv"]) : eR.intl.string(a2.default["Sgg/uI"]),
                        icon: a7.O,
                        onClick: () => {
                            null != n && (0, a8.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
                        },
                        disabled: a,
                    },
                    c,
                );
            })({ channel: t, user: c, guild: d }),
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== g.length
        ? (0, r.jsx)(r.Fragment, { children: g.map((e, t) => (0, r.jsx)(o.Fragment, { children: e }, t)) })
        : null;
}
function re(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, r.jsx)(a9, { channel: n, message: t, snapshot: e }, l)),
    });
}
var rt = n(152007),
    rn = n(867455),
    rl = n(435470),
    ri = n(473503),
    rs = n(853742),
    ra = n(189971),
    rr = n(347353),
    ro = n(518229);
function rc(e) {
    let { channel: t } = e,
        l = t.isArchivedThread(),
        i = (0, aW.uW)(t),
        [s, a] = o.useState(!1);
    function c() {
        a(!0),
            az.A.resolveFlag(t.id).then(() => {
                a(!1);
            });
    }
    return i
        ? (0, r.jsx)(eT.$, {
              size: "sm",
              variant: "secondary",
              text: l ? eR.intl.string(a2.default["2Y4vkk"]) : eR.intl.string(a2.default.YIbR4r),
              onClick: function () {
                  !0 === ax.w.get(a$.f)
                      ? c()
                      : (0, ic.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, r.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: c });
                            };
                        });
              },
              loading: s,
              icon: aE.A,
              disabled: l,
          })
        : null;
}
function rd(e) {
    let {
            postId: t,
            isFirstMessage: n,
            isLastItem: l = !1,
            parentChannelId: i,
            hideDivider: s = !1,
            hideFollowButton: a = !1,
            hideUnfollowButton: c = !1,
            className: u,
        } = e,
        { ref: h, width: g } = (0, ay.Ay)(),
        [p, A] = o.useState(3),
        [f, C] = o.useState(!n),
        [x, E] = (0, ab.A)(!1, 2e3),
        S = (0, m.bG)([eY.A], () => eY.A.getChannel(t), [t]),
        { firstMessage: _ } = (0, ri.OA)(S),
        j = (0, m.bG)([rt.A], () => rt.A.hasJoined(t)),
        { disableReactionUpdates: y, disableReactionCreates: b, isLurking: v, isPendingMember: N } = (0, aG.A)(S),
        T = (0, aq.W1)(S),
        M = (0, m.bG)([eY.A], () => eY.A.getChannel(i)),
        R = (0, rl.Ck)(M),
        D = (0, m.bG)([av.A], () => av.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        L = o.useCallback(
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
        (o.useLayoutEffect(() => {
            let e = h.current;
            if (null == e || !n) return;
            let t = new IntersectionObserver(L, { threshold: 1 });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }),
        o.useLayoutEffect(() => {
            null == g || A(Math.floor((g - 280) / 58));
        }, [g]),
        null == S)
    )
        return null;
    let k = null != _ && _.reactions.length > 0,
        P = () => {
            (0, rs.jC)({ postId: S.id, location: { section: ec.JJy.CHANNEL_HEADER } }),
                (0, tu.C)((0, aM.af)(S, M), () => E(!0));
        },
        O = j ? aE.A : aS.X;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: d()(ra.kL, { [ra.wx]: f }, u),
                ref: h,
                children: [
                    T
                        ? (0, r.jsx)("div", {
                              className: ra.kX,
                              children: null != _ && (0, r.jsx)(re, { message: _, channel: S }),
                          })
                        : (0, r.jsx)("div", {
                              className: ra.hY,
                              children:
                                  null != _ &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          !k &&
                                              !b &&
                                              null != R &&
                                              (0, r.jsx)("div", {
                                                  className: rr.reactions,
                                                  children: (0, r.jsx)(aK.qT, {
                                                      message: _,
                                                      readOnly: !1,
                                                      useChatFontScaling: !1,
                                                      isLurking: v,
                                                      isPendingMember: N,
                                                      emoji: R,
                                                      type: aO.v.NORMAL,
                                                      hideCount: !0,
                                                      count: 0,
                                                      me: !1,
                                                      burst_count: 0,
                                                      me_burst: !1,
                                                      emojiSize: "reaction",
                                                  }),
                                              }),
                                          (0, r.jsx)(aV.A, {
                                              message: _,
                                              channel: S,
                                              disableReactionCreates: !0,
                                              disableReactionUpdates: y,
                                              isLurking: v,
                                              isPendingMember: N,
                                              maxReactions: p,
                                              className: ra.Br,
                                              useChatFontScaling: !1,
                                              isForumToolbar: !0,
                                              forceHideReactionCreates: !0,
                                          }),
                                          !b &&
                                              (0, r.jsx)(aU.t, {
                                                  message: _,
                                                  channel: S,
                                                  useChatFontScaling: !1,
                                                  className: d()(ro.secondary, ra.vU, rr.visible, { [ra.w$]: !k }),
                                                  isForumToolbar: !0,
                                                  children: !k && eR.intl.string(eR.t.xpOyTO),
                                              }),
                                      ],
                                  }),
                          }),
                    (0, r.jsxs)("div", {
                        className: ra.Uo,
                        children: [
                            T
                                ? (0, r.jsx)(rc, { channel: S })
                                : !v &&
                                  (!a || j) &&
                                  (!c || !j) &&
                                  (0, r.jsx)(ep.m, {
                                      text: eR.intl.string(eR.t.F7oeDv),
                                      children: (0, r.jsx)(eT.$, {
                                          icon: O,
                                          size: "sm",
                                          variant: "secondary",
                                          text: j ? eR.intl.string(eR.t["7OkUzs"]) : eR.intl.string(eR.t["3aOv+h"]),
                                          onClick: () => {
                                              j
                                                  ? rn.A.leaveThread(S, "Forum Toolbar")
                                                  : rn.A.joinThread(S, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, r.jsx)(ep.m, {
                                text: eR.intl.string(eR.t.WqhZss),
                                children: x
                                    ? (0, r.jsx)(eT.$, {
                                          icon: aE.A,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          text: eR.intl.string(eR.t.t5VZ88),
                                      })
                                    : (0, r.jsx)(a_.K, {
                                          icon: tF.q,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: P,
                                          "aria-label": eR.intl.string(eR.t.WqhZss),
                                      }),
                            }),
                            !n &&
                                (0, r.jsx)(ep.m, {
                                    text: eR.intl.string(eR.t.nFP4oa),
                                    children: (0, r.jsx)(a_.K, {
                                        icon: aI.D,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => {
                                            I.A.jumpToMessage({
                                                channelId: S.id,
                                                messageId: S.id,
                                                flash: !0,
                                                jumpType: aj.vx.INSTANT,
                                            });
                                        },
                                        "aria-label": eR.intl.string(eR.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            D && (0, r.jsx)(aP, { threadId: t }),
            !s && (0, r.jsx)(aB, { channel: S, isLastItem: l }),
        ],
    });
}
var ru = n(364522),
    rh = n(80682),
    rm = n(763899),
    rg = n(983851),
    rp = n(104171),
    rA = n(262763),
    rf = n(499211),
    rC = n(763827),
    rx = n(977997),
    rE = n(607567),
    rS = n(917592),
    r_ = n(774418),
    rI = n(556114);
function rj(e) {
    let { channel: t, className: n } = e,
        l = (0, ts._M)(t),
        i = (0, m.bG)([rx.A], () => rx.A.isInChannel(t.id)),
        s = (0, m.bG)([rE.Ay], () => rE.Ay.getVoiceStatesForChannel(t), [t]),
        { needSubscriptionToAccess: a } = (0, rf.A)(t.id),
        c = (0, m.bG)([rC.A], () => (rC.A.getChannelId() === t.id ? rC.A.getState() : ec.S7L.RTC_DISCONNECTED), [t.id]),
        d = o.useCallback(() => {
            rA.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: a, locked: !1 });
        }, [t, i, a]),
        u = o.useMemo(() => s.map((e) => e.user.id), [s]),
        h = (0, rl.$I)(t, u),
        g = h.length > 0;
    if (!l && !g) return null;
    let { connectionStatusText: p } = rS.A.getStatus(c, !1);
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsxs)(eC.D, {
                className: rI.Xt,
                onClick: d,
                children: [
                    (0, r.jsx)(rg.H, {
                        size: "refresh_sm",
                        color: i ? W.A.colors.STATUS_POSITIVE : W.A.colors.ICON_MUTED,
                    }),
                    (0, r.jsx)(e_.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: rI.Gp,
                        children: c === ec.S7L.RTC_DISCONNECTED ? eR.intl.string(r_.default.ficpp7) : p,
                    }),
                ],
            }),
            g
                ? (0, r.jsx)(rp.Ay, {
                      className: rI.L_,
                      guildId: t.guild_id,
                      users: h,
                      size: rp.DN.SIZE_24,
                      showUserPopout: !0,
                  })
                : null,
        ],
    });
}
var ry = n(974963);
function rb(e) {
    let { message: t, compact: n, channel: l, id: i } = e,
        s = (0, iZ.kt)(l),
        a = (0, lH.IO)(l),
        c = t?.author.id,
        d = (0, o.useMemo)(() => (null != c ? { [l.guild_id]: [c] } : {}), [l.guild_id, c]);
    return (
        (0, rh.Eq)(d, "GameInviteChannelFirstMessage"),
        (0, r.jsxs)("div", {
            className: ry.TX,
            children: [
                (0, r.jsxs)(ru.Ar, {
                    children: [
                        null != t
                            ? (0, r.jsx)("ol", {
                                  children: (0, r.jsx)(nZ, {
                                      className: ry.iU,
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
                        (0, r.jsxs)("div", {
                            className: ry.iQ,
                            children: [
                                null == t &&
                                    (0, r.jsx)(e_.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: eR.intl.string(eR.t.mE3KJN),
                                    }),
                                s.length > 0 &&
                                    (0, r.jsx)("div", {
                                        className: ry.GA,
                                        children: s.map((e) =>
                                            (0, r.jsx)(iY.A, { tag: e, size: iY.A.Sizes.SMALL }, e.id),
                                        ),
                                    }),
                                t?.activity != null &&
                                    (0, r.jsx)(rm.A, {
                                        channel: l,
                                        message: t,
                                        hideParty: !1,
                                        hideInviteEmbedBanner: !0,
                                    }),
                                (0, r.jsx)("div", { className: ry.b1 }),
                                (0, r.jsx)(rd, {
                                    className: ry.Jr,
                                    parentChannelId: l.parent_id,
                                    postId: l.id,
                                    isFirstMessage: !0,
                                    isLastItem: !0,
                                    hideDivider: !0,
                                    hideFollowButton: !0,
                                }),
                                a &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: ry.b1 }),
                                            (0, r.jsx)(rj, { channel: l }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", { className: ry.ld }),
            ],
        })
    );
}
var rv = n(640708),
    rN = n(378570),
    rT = n(229701),
    rM = n(327337);
function rR(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        s = o.useCallback(() => {
            (0, ip.xi)(t, [l]);
        }, [t, l]),
        a = (0, m.bG)([nk.A], () => nk.A.isBlocked(i)),
        c = o.useMemo(
            () => ({ channelId: t, warningId: l, senderId: i, warningType: iA._j.INAPPROPRIATE_CONVERSATION_TIER_2 }),
            [t, l, i],
        );
    o.useEffect(() => {
        (0, iC.QF)({ ...c, viewName: iC.gN.SAFETY_WARNING_BANNER }), iu.A.increment({ name: io.K.SAFETY_WARNING_VIEW });
    }, [c]);
    let d = o.useCallback(
            (e) => {
                (0, iC._$)({ ...c, cta: e });
            },
            [c],
        ),
        u = o.useCallback(() => {
            (0, ic.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("25028"),
                        n.e("6627"),
                        n.e("70940"),
                        n.e("2033"),
                        n.e("82830"),
                        n.e("19959"),
                        n.e("20516"),
                    ]).then(n.bind(n, 131882));
                    return (n) => {
                        let { transitionState: s, onClose: a } = n;
                        return (0, r.jsx)(e, {
                            otherUserId: i,
                            channelId: t,
                            warningId: l,
                            warningType: iA._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: a,
                        });
                    };
                },
                { modalKey: rM.V },
            ),
                d(iC.Wm.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, i, l, d]),
        h = o.useCallback(() => {
            s(), d(iC.Wm.USER_BANNER_BLOCK_CONFIRM);
        }, [s, d]),
        g = o.useCallback(() => {
            s(), d(iC.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [s, d]),
        p = o.useCallback(() => {
            (0, ic.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70940"), n.e("84938")]).then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: s } = n;
                    return (0, r.jsx)(e, {
                        transitionState: l,
                        onBlock: h,
                        onBlockAndReport: g,
                        onCancel: () => {
                            s?.(), d(iC.Wm.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: s,
                        userId: i,
                        channelId: t,
                    });
                };
            });
        }, [h, g, i, t, d]);
    return (0, r.jsx)(i_, {
        channelId: t,
        warningId: l,
        senderId: i,
        warningType: iA._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: eR.intl.string(eR.t.ZzlB5p),
        description: eR.intl.string(eR.t["D1aU+h"]),
        onDismiss: s,
        buttons: [
            { text: eR.intl.string(eR.t.Qyu4UK), variant: "primary", onClick: u },
            ...(a ? [] : [{ text: eR.intl.string(eR.t["7q0bNY"]), variant: "secondary", onClick: p }]),
        ],
    });
}
var rD = n(74114);
function rL(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: i } = (0, m.cf)([nk.A], () => ({ isIgnored: nk.A.isIgnored(t) }), [t]),
        s = o.useCallback(() => {
            (0, iC._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: iA._j.STRANGER_DANGER,
                cta: iC.Wm.USER_MODAL_IGNORE,
            }),
                s9.A.ignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]),
        a = o.useCallback(() => {
            (0, iC._$)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: iA._j.STRANGER_DANGER,
                cta: iC.Wm.USER_MODAL_UNIGNORE,
            }),
                s9.A.unignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]);
    return (0, r.jsx)(ig.PQ, {
        title: eR.intl.string(eR.t.avyV7P),
        description: eR.intl.string(eR.t.naWE6W),
        buttonText: i ? eR.intl.string(eR.t["3SrzRT"]) : eR.intl.string(eR.t.avyV7P),
        onButtonPress: i ? a : s,
    });
}
function rk(e) {
    let { channelId: t, warningId: l, senderId: i } = e,
        { isBlocked: s } = (0, m.cf)([nk.A], () => ({ isBlocked: nk.A.isBlocked(i) }), [i]),
        a = o.useCallback(() => {
            (0, ip.xi)(t, [l]);
        }, [t, l]),
        c = (0, rM.eT)(),
        d = o.useCallback(
            (e) => () => {
                s9.A.blockUser(i, { location: rM.Rx }).then(() => {
                    a();
                }),
                    (0, iC._$)({ channelId: t, warningId: l, senderId: i, warningType: iA._j.STRANGER_DANGER, cta: e });
            },
            [a, t, l, i],
        );
    function u(e, s, a) {
        (0, ic.openModalLazy)(async () => {
            let { default: o } = await Promise.all([n.e("74370"), n.e("14788"), n.e("67554")]).then(n.bind(n, 219801));
            return (n) =>
                (0, r.jsx)(o, {
                    ...n,
                    userId: i,
                    confirmBlock: d(e),
                    onCancel: () => {
                        a?.(),
                            (0, iC._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iA._j.STRANGER_DANGER,
                                cta: s,
                            });
                    },
                });
        });
    }
    return (
        o.useEffect(() => {
            (0, iC.mO)(ec.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: l,
                senderId: i,
                warningType: iA._j.STRANGER_DANGER,
            }),
                iu.A.increment({ name: io.K.SAFETY_WARNING_VIEW });
        }, [t, l, i]),
        (0, r.jsx)(i_, {
            channelId: t,
            warningId: l,
            senderId: i,
            warningType: iA._j.STRANGER_DANGER,
            header: eR.intl.string(eR.t.iOkDpM),
            description: eR.intl.string(eR.t.ISUbcM),
            onDismiss: a,
            buttons: [
                {
                    text: eR.intl.string(eR.t["Qk/c48"]),
                    variant: "primary",
                    onClick: function () {
                        (function e() {
                            (0, ic.openModalLazy)(async () => {
                                let { default: s } = await Promise.all([n.e("55941"), n.e("82911"), n.e("47894")]).then(
                                    n.bind(n, 129493),
                                );
                                return (n) => {
                                    let { transitionState: a, onClose: o } = n;
                                    return (0, r.jsx)(s, {
                                        transitionState: a,
                                        onClose: o,
                                        channelId: t,
                                        warningId: l,
                                        senderId: i,
                                        description: eR.intl.string(eR.t.DJMZX6),
                                        safetyTipRows: c.map((e, t) =>
                                            (0, r.jsx)(im.B, { index: t, listType: "numbered", title: e }, t),
                                        ),
                                        actionRows: (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    rL,
                                                    { senderId: i, channelId: t, warningId: l },
                                                    "more-tips-button",
                                                ),
                                                (0, r.jsx)(
                                                    ig.PQ,
                                                    {
                                                        title: eR.intl.string(eR.t["5QYPO2"]),
                                                        description: eR.intl.string(eR.t.G08MKu),
                                                        buttonText: eR.intl.string(eR.t["5QYPO2"]),
                                                        buttonVariant: "critical-primary",
                                                        onButtonPress: () => {
                                                            o(),
                                                                u(
                                                                    iC.Wm.USER_MODAL_BLOCK_CONFIRM,
                                                                    iC.Wm.USER_MODAL_BLOCK_CANCEL,
                                                                    e,
                                                                );
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
                            (0, iC._$)({
                                channelId: t,
                                warningId: l,
                                senderId: i,
                                warningType: iA._j.STRANGER_DANGER,
                                cta: iC.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                ...(s
                    ? []
                    : [
                          {
                              text: eR.intl.string(eR.t.ie0QdN),
                              variant: "critical-primary",
                              onClick: () => u(iC.Wm.USER_BANNER_BLOCK_CONFIRM, iC.Wm.USER_BANNER_BLOCK_CANCEL),
                          },
                      ]),
            ],
        })
    );
}
var rP = n(306788),
    rO = n(340833),
    rG = n(913642),
    rU = n(453302),
    rw = n(670455),
    rF = n(182147);
function rH(e) {
    let { summary: t, channel: n } = e,
        l = (0, aN.bG)([lz.A], () => lz.A.summaryFeedback(t));
    function i(e, l) {
        e.stopPropagation(), (0, rU.A)({ summary: t, channel: n, rating: l });
    }
    let s = (0, Z.p)(
        null == l,
        {
            enter: { from: { opacity: 0 }, to: { opacity: 1 } },
            leave: { opacity: 0 },
            config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
        },
        "animate-always",
    );
    return (0, r.jsx)(r.Fragment, {
        children: s((e, t) =>
            t
                ? (0, r.jsx)("div", {
                      className: rF.RD,
                      children: (0, r.jsxs)(u.animated.div, {
                          style: e,
                          className: rF.GK,
                          children: [
                              (0, r.jsx)(e_.E, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: eR.intl.string(eR.t["5ZsiE9"]),
                              }),
                              (0, r.jsx)(eC.D, {
                                  onClick: (e) => i(e, rw.P0.GOOD),
                                  children: (0, r.jsx)(rG.A, { className: rF.O1, width: 12, height: 12 }),
                              }),
                              (0, r.jsx)(eC.D, {
                                  onClick: (e) => i(e, rw.P0.BAD),
                                  children: (0, r.jsx)(rO.A, { className: rF.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function rB(e) {
    let t,
        { item: n, channel: l, index: i } = e,
        s = (0, aN.bG)([lz.A], () => lz.A.selectedSummary(l.id));
    if (null == s) return null;
    let a = null != n.unreadId,
        o = null != n.content;
    return (
        (t = o
            ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(rP.K, { size: "xs", color: "currentColor", className: rF.cR }), n.content],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(rH, { summary: s, channel: l }),
                      (0, r.jsx)(rP.K, { size: "xs", color: "currentColor", className: rF.Jq }),
                  ],
              })),
        (0, r.jsx)(
            n1.A,
            {
                className: d()(rF.aK, o ? rF.Ke : rF.hO),
                contentClassName: o ? rF.Ew : rF.rD,
                isUnread: a,
                id: a ? nq.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? i}`,
        )
    );
}
var rV = n(383233),
    rK = n(309010),
    rz = n(927813),
    rW = n(675171),
    rq = n(806621),
    r$ = n(636922),
    rJ = n(756773);
let rZ = o.memo(function (e) {
    let { loading: t, onClick: n } = e,
        l = o.useCallback(() => {
            t || n();
        }, [t, n]);
    return (0, r.jsx)(eC.D, {
        className: d()(rJ.XI, { [rJ.Lq]: t }),
        onClick: l,
        "aria-label": eR.intl.string(t ? eR.t.hC8KHg : eR.t.XBlaiC),
        children: (0, r.jsx)(e_.E, {
            variant: "text-sm/normal",
            color: "text-link",
            className: rJ.Qq,
            children: t ? eR.intl.string(eR.t.hC8KHg) : eR.intl.string(eR.t.XBlaiC),
        }),
    });
});
var rY = n(34337),
    rX = n(330001),
    rQ = n(631576),
    r0 = n(750385),
    r1 = n(148355),
    r2 = n(310876);
let r3 = "749054660769218631";
function r4(e) {
    let { channel: t } = e,
        [n, l] = o.useState("");
    o.useEffect(() => {
        (0, rQ.zk)("847199849233514549", !0);
    }, []);
    let i = (0, m.bG)(
            [em.A, ea.default],
            () =>
                !!ls()(em.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== ea.default.getId() && e.state === ec.cmJ.SENT && !(0, e2.A)(e)),
        ),
        s = (0, m.bG)([lZ.default], () => lZ.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        a = iw.Ay.useName(s) ?? eR.intl.string(eR.t.y1Wu2f),
        c = (0, m.bG)([r0.A], () => r0.A.getStickerById(r3)),
        d = o.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    (0, rX.W)({ channelId: t.id, source: "In-channel greet" }), await I.A.sendGreetMessage(t.id, r3);
                } catch (e) {
                    e.ok || 429 !== e.status || l(eR.intl.string(eR.t.Whhv4w));
                }
        }, [t.id, n]),
        u = eR.intl.formatToPlainString(eR.t.m0zYbV, { username: a }),
        h =
            null != n && "" !== n
                ? (0, r.jsx)(e_.E, {
                      className: r2.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return i
        ? (0, r.jsxs)("div", {
              className: r2.ft,
              children: [
                  (0, r.jsxs)(eC.D, {
                      className: null != n && "" !== n ? r2.AO : r2.Iq,
                      "aria-label": eR.intl.string(eR.t.pJObYI),
                      onClick: d,
                      children: [
                          (0, r.jsx)(r1.A, { sticker: c, size: 24 }),
                          (0, r.jsx)(e_.E, { className: r2.Qq, variant: "text-md/medium", children: u }),
                      ],
                  }),
                  h,
              ],
          })
        : (0, r.jsxs)("div", {
              className: r2.nj,
              children: [
                  (0, r.jsx)(r1.A, { sticker: c, size: 160, className: r2.Xr }),
                  (0, r.jsx)(eT.$, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: d,
                      disabled: !!n,
                      text: u,
                  }),
                  h,
              ],
          });
}
var r7 = n(900210),
    r8 = n(626360);
function r5(e) {
    return null != e && e.type === ec.TZK.MESSAGE && e.content.id === e.groupId;
}
function r6(e) {
    return (
        e.type === ec.TZK.MESSAGE_GROUP_BLOCKED ||
        e.type === ec.TZK.MESSAGE_GROUP_IGNORED ||
        e.type === ec.TZK.MESSAGE_GROUP_SPAMMER ||
        e.type === ec.TZK.MESSAGE_GROUP_SUSPENDED_USER
    );
}
let r9 = o.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: i, compact: s } = e;
    return (0, r.jsx)(r$.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new rV.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: ec.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, r.jsx)(iy.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
var oe = n(408899);
let ot = (0, u.animated)(S),
    on = o.memo(
        function (e) {
            var t;
            let n,
                l,
                i,
                {
                    className: s,
                    messageGroupSpacing: a,
                    scrollerClassName: c,
                    channel: u,
                    messages: g,
                    unreadCount: p,
                    showNewMessagesBar: A,
                    messageDisplayCompact: f,
                    channelStream: C,
                    uploads: x,
                    hasUnreads: E,
                    editingMessageId: S,
                    fontSize: N,
                    keyboardModeEnabled: T,
                    filterAfterTimestamp: M,
                    showingQuarantineBanner: R,
                    hideSummaries: D = !1,
                    jumpBarClassName: L,
                    typingGradient: O,
                    isGameInvitesPost: G,
                } = e,
                [U, w] = o.useState(lq.A.isAtBottom(u.id) ?? !1),
                F = (0, k.Ay)(u),
                B = (0, lQ.I)(f, N),
                V = f ? B : Math.round(0.87 * B),
                K = Math.max(1, Math.round((V / 30) * 8)),
                z = o.useMemo(
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
                                throw Error(
                                    `generateMessageSpecs: too many attachments relative to messageGroups: ${n}, ${i}`,
                                );
                            let r = s / ec.hH7.FONT_SIZE_DEFAULT,
                                o = t ? n8.BP : n8.B5,
                                c = t ? n8.Uj : n8._G,
                                d = 0,
                                u = Array(n)
                                    .fill(null)
                                    .map(() => {
                                        let e = ls().random(1, l);
                                        return (d += a * r), (d += o * r), (d += (e - 1) * c * r), e;
                                    }),
                                h = u.map((e, t) => t),
                                m = [];
                            for (; m.length < i; ) {
                                let e = { width: ls().random(140, 400), height: ls().random(100, 320) };
                                m.push([h.splice(ls().random(0, h.length - 1), 1)[0], e]), (d += e.height + n8.VF * r);
                            }
                            return { messages: u, attachmentSpecs: m, totalHeight: d, groupSpacing: a };
                        })({
                            compact: f,
                            messageGroups: V,
                            groupRange: 4,
                            attachments: K,
                            fontSize: N,
                            groupSpacing: a,
                        }),
                    [f, V, K, N, a],
                ),
                W = (function (e) {
                    let {
                            messages: t,
                            channel: n,
                            compact: l,
                            hasUnreads: i,
                            focusId: s,
                            placeholderHeight: a,
                            canLoadMore: r = !0,
                            handleScrollToBottom: c,
                            handleScrollFromBottom: d,
                            additionalMessagePadding: u = 0,
                        } = e,
                        { windowId: h } = o.useContext(l6.Ay),
                        [m] = o.useState(
                            () =>
                                new is({
                                    messages: t,
                                    channel: n,
                                    compact: l,
                                    hasUnreads: i,
                                    focusId: s,
                                    placeholderHeight: a,
                                    canLoadMore: r,
                                    windowId: h,
                                    handleScrollToBottom: c,
                                    handleScrollFromBottom: d,
                                    additionalMessagePadding: u,
                                }),
                        );
                    return (
                        m.getSnapshotBeforeUpdate(s),
                        o.useLayoutEffect(() =>
                            m.mergePropsAndUpdate({
                                messages: t,
                                channel: n,
                                compact: l,
                                hasUnreads: i,
                                focusId: s,
                                placeholderHeight: a,
                                canLoadMore: r,
                                windowId: h,
                                handleScrollToBottom: c,
                                handleScrollFromBottom: d,
                                additionalMessagePadding: u,
                            }),
                        ),
                        o.useLayoutEffect(() => () => m.cleanup(), [m]),
                        m
                    );
                })({
                    messages: g,
                    channel: u,
                    compact: f,
                    hasUnreads: E,
                    focusId: S,
                    placeholderHeight: z.totalHeight,
                    canLoadMore: null == M,
                    handleScrollToBottom: o.useCallback(() => w(!0), [w]),
                    handleScrollFromBottom: o.useCallback(() => w(!1), [w]),
                    additionalMessagePadding: 48,
                }),
                q = (0, P.sV)(u.guild_id, "message_stream"),
                $ = (function (e) {
                    let { scrollerRef: t, ...n } = e,
                        l = (0, y.A)(() => {
                            let e = t.current;
                            return null == e
                                ? Promise.resolve()
                                : new Promise((t) => {
                                      e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                                  });
                        }),
                        i = (0, y.A)(() => {
                            let e = t.current;
                            return null == e
                                ? Promise.resolve()
                                : new Promise((t) => {
                                      e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                                  });
                        }),
                        s = o.useCallback(
                            (e) => {
                                if (!n.keyboardModeEnabled) return;
                                let l = t.current?.getScrollerNode()?.ownerDocument,
                                    i = l?.querySelector(e);
                                null != i &&
                                    t.current?.scrollIntoViewNode({
                                        node: i,
                                        padding: 4 * nq.mZ,
                                        callback: () => i?.focus(),
                                    });
                            },
                            [n.keyboardModeEnabled, t],
                        ),
                        a = o.useCallback(() => {
                            n.hasMoreAfter || eg._.dispatchToLastSubscribed(ec.jej.TEXTAREA_FOCUS);
                        }, [n.hasMoreAfter]),
                        r = (0, l3.Ay)({
                            id: e1.D,
                            preserveFocusPosition: !1,
                            setFocus: s,
                            isEnabled: n.keyboardModeEnabled && !n.isEditing,
                            scrollToStart: i,
                            scrollToEnd: l,
                            onNavigateNextAtEnd: a,
                        }),
                        c = o.useCallback(
                            (e) => {
                                let { atEnd: t = !1 } = e;
                                t ? r.focusLastVisibleItem() : r.focusFirstVisibleItem();
                            },
                            [r],
                        );
                    return (0, lY.Vo)({ event: ec.jej.FOCUS_MESSAGES, handler: c }), r;
                })({ scrollerRef: W.ref, isEditing: null != S, keyboardModeEnabled: T, hasMoreAfter: g.hasMoreAfter }),
                J = (0, m.bG)([lV.A], () =>
                    td.A.can(ec.xBc.READ_MESSAGE_HISTORY, u) ? null : lV.A.getViewingRolesTimestamp(u.getGuildId()),
                ),
                {
                    channelStreamMarkup: Z,
                    newMessagesBar: Y,
                    jumpToPresentBar: X,
                    forumPostActionBar: en,
                    pinnedFirstMessage: el,
                    safetyWarningBanner: ei,
                } = (function (e) {
                    let t,
                        n,
                        l,
                        i,
                        {
                            channel: s,
                            messages: a,
                            unreadCount: c,
                            showNewMessagesBar: d,
                            messageDisplayCompact: u,
                            channelStream: h,
                            uploads: g,
                            loadMore: p,
                            scrollManager: A,
                            specs: f,
                            filterAfterTimestamp: C,
                            showingQuarantineBanner: x,
                            hideSummaries: E,
                            jumpBarClassName: S,
                            isGameInvitesPost: _,
                        } = e,
                        y = lZ.default.getCurrentUser();
                    function N() {
                        return A.isInitialized() || a.ready;
                    }
                    let T = (0, rq.r)(s),
                        M = a.length > 0 && a.first()?.isFirstMessageInForumPost(s),
                        R = (0, j.cI)(s),
                        D = (0, m.bG)([lz.A], () => lz.A.shouldShowTopicsBar() && !E),
                        L = (0, rD.l)(s.id),
                        k = (0, rT.j)(s.id, rM.Rx),
                        P = (0, ir.E)(s.id),
                        O = (0, rW.A)(),
                        G = (function (e, t) {
                            if (e.isDM() && null != t)
                                if (t.type === iA._j.STRANGER_DANGER)
                                    return (0, r.jsx)(rk, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                                else if (t.type === iA._j.LIKELY_ATO)
                                    return (0, r.jsx)(ij, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                                else
                                    return (0, r.jsx)(rR, {
                                        channelId: e.id,
                                        warningId: t.id,
                                        senderId: e.getRecipientId(),
                                    });
                            return null;
                        })(s, L ?? k ?? P),
                        U = !s.isForumPost() || M || _ ? null : (0, r.jsx)(rd, { postId: s.id }),
                        { firstMessage: w, loaded: F } = (0, lH.n5)(s, _),
                        H =
                            _ && F
                                ? (0, r.jsx)(
                                      rb,
                                      {
                                          compact: u,
                                          channel: s,
                                          message: w,
                                          id: null != w ? (0, e1.j)(s.id, w.id) : `deleted-${s.id}`,
                                      },
                                      w?.id ?? `deleted-${s.id}`,
                                  )
                                : null,
                        B = (0, iT.A)(s.id),
                        V = (0, aq.W1)(s);
                    (t = eZ.Sf.useSetting()),
                        (n = (0, aN.bG)([b.Ay], () => b.Ay.useReducedMotion)),
                        o.useEffect(() => {
                            function e(e) {
                                let { messageId: l, channelId: i, emoji: s, optimistic: a, reactionType: r } = e;
                                a ||
                                    r !== aO.v.BURST ||
                                    !t ||
                                    n ||
                                    (0, t9.on)({ channelId: i, messageId: l, emoji: s, key: r7.W.EXTERNAL });
                            }
                            return (
                                v.h.subscribe("MESSAGE_REACTION_ADD", e),
                                () => {
                                    v.h.unsubscribe("MESSAGE_REACTION_ADD", e);
                                }
                            );
                        }, [t, n]);
                    let K = null,
                        z = [],
                        W = h.map((e, t) => {
                            if (e.type === ec.TZK.DIVIDER) {
                                let n = null != e.unreadId;
                                return null != C
                                    ? null
                                    : e.isConversationChannelHeader
                                      ? (0, r.jsx)(
                                            iv,
                                            { channel: s, scrollManager: A },
                                            `conversation-${e.contentKey ?? t}`,
                                        )
                                      : e.isSummaryDivider
                                        ? (0, r.jsx)(rB, {
                                              index: t,
                                              item: e,
                                              channel: s,
                                              isBeforeGroup: null == e.content && r5(h[t + 1]),
                                          })
                                        : (0, r.jsx)(
                                              n1.A,
                                              {
                                                  isUnread: n,
                                                  isBeforeGroup: null == e.content && r5(h[t + 1]),
                                                  id: n ? nq.q4 : void 0,
                                                  itemId: null != e.content ? `divider-${e.contentKey ?? t}` : void 0,
                                                  children: e.content,
                                              },
                                              `divider-${e.contentKey ?? e.unreadId ?? t}`,
                                          );
                            }
                            if (e.type === ec.TZK.FORUM_POST_ACTION_BAR)
                                return (0, r.jsx)(
                                    rd,
                                    {
                                        parentChannelId: s.parent_id,
                                        postId: s.id,
                                        isLastItem: t + 1 === h.length,
                                        isFirstMessage: !0,
                                    },
                                    `forum-post-action-bar-${s.id}`,
                                );
                            if (r6(e)) {
                                let t,
                                    n = !0;
                                return (
                                    e.type === ec.TZK.MESSAGE_GROUP_BLOCKED
                                        ? (t = eR.t["+FcYM/"])
                                        : e.type === ec.TZK.MESSAGE_GROUP_IGNORED
                                          ? (t = eR.t["VFWjc+"])
                                          : e.type === ec.TZK.MESSAGE_GROUP_SUSPENDED_USER
                                            ? ((t = eR.t.rHRovo), (n = !1))
                                            : (t = eR.t.xfkfTK),
                                    (0, r.jsx)(
                                        n7,
                                        {
                                            unreadId: nq.q4,
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
                            if (null != C && C > e.content.timestamp.getTime() * rz.A.Millis.SECOND) return;
                            e.type === ec.TZK.MESSAGE && null == K && (K = e);
                            let n = e.groupId === K?.groupId ? K.content.id : e.groupId,
                                l = V && e.content.isFirstMessageInForumPost(s),
                                i = e.type === ec.TZK.THREAD_STARTER_MESSAGE ? n$ : nZ;
                            return (0, r.jsx)(
                                i,
                                {
                                    compact: u && !l,
                                    channel: s,
                                    message: e.content,
                                    groupId: n,
                                    flashKey: e.flashKey,
                                    id: (0, e1.j)(s.id, e.content.id),
                                    isLastItem: t >= h.length - 1,
                                    renderContentOnly: B || l,
                                },
                                e.content.id,
                            );
                        });
                    z.push(...W);
                    let q = h[h.length - 1];
                    if (
                        (null != y &&
                            g.forEach((e, t) => {
                                let n = 0 === t && (0, et.l)(s, q, new rV.Ay({ type: ec.lAJ.DEFAULT, author: y }));
                                z.push(
                                    (0, r.jsx)(
                                        r9,
                                        { file: e, channel: s, user: y, isGroupStart: n, compact: u },
                                        `upload-${e.id}`,
                                    ),
                                );
                            }),
                        a.hasMoreBefore && null == C)
                    ) {
                        a.length > 0 &&
                            (a.length > 1 &&
                                (function (e) {
                                    let t = !1;
                                    for (let n of e)
                                        if (n.type !== ec.TZK.DIVIDER) {
                                            if (!r6(n)) return !1;
                                            t = !0;
                                        }
                                    return t;
                                })(h) &&
                                z.unshift(
                                    (0, r.jsx)(rZ, { loading: a.loadingMore, onClick: () => p() }, "load-more-before"),
                                ),
                            z.unshift((0, r.jsx)("div", { style: { height: nq.N0, flex: "0 0 auto" } }, "buffer")));
                        let { useReducedMotion: e } = b.Ay;
                        ((e && N()) || !e) && z.unshift((0, r.jsx)(l1, { compact: u, ...f }, "has-more"));
                    }
                    if (
                        ((a.hasMoreBefore && null == C) ||
                            _ ||
                            z.unshift((0, r.jsx)(aC, { channel: s, showingBanner: x }, "empty-message")),
                        a.hasMoreAfter && z.push((0, r.jsx)(l1, { compact: u, ...f }, "has-more-after")),
                        !x && T && N() && z.push((0, r.jsx)(r4, { channel: s })),
                        c > 0 && d && N())
                    ) {
                        let e,
                            t,
                            n = l$.Ay.getOldestUnreadTimestamp(s.id),
                            i = 0 !== n ? n : ee.default.extractTimestamp(s.id),
                            a = (0, Q.ro)(new Date(), new Date(i));
                        if (
                            (l$.Ay.isEstimated(s.id)
                                ? ((e = a ? eR.t.wvtbbG : eR.t.tHqbtg), (t = eR.t.vaPWFe))
                                : ((e = a ? eR.t["BctFH/"] : eR.t["3wXb9P"]), (t = eR.t["4H8ldG"])),
                            R && (0, j.Kc)(s) && O.includes(r8.i.SUMMARIES))
                        ) {
                            let n = l$.Ay.ackMessageId(s.id),
                                a = (function (e, t) {
                                    let n = lz.A.summaries(e) ?? [],
                                        l = 0;
                                    for (let e of n) ee.default.compare(e.endId, t) > 0 && (l += 1);
                                    return l;
                                })(s.id, l$.Ay.getOldestUnreadMessageId(s.id));
                            if (
                                ((0, ia.zV)(ec.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                                    num_unread_summaries: a,
                                    num_unread_messages: c,
                                    last_ack_message_id: n,
                                    summaries_enabled_by_user: D,
                                    summaries_enabled_for_channel: (0, j.pk)(s),
                                }),
                                (0, j.pk)(s))
                            ) {
                                let n = D
                                    ? eR.intl.format(t, { count: c })
                                    : eR.intl.format(e, { count: c, timestamp: i });
                                if (D) {
                                    let e =
                                        a > 0
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(e_.E, {
                                                          variant: "text-sm/medium",
                                                          color: "currentColor",
                                                          children: eR.intl.format(t, { count: c }),
                                                      }),
                                                      (0, r.jsx)(rv.A, {
                                                          style: { paddingLeft: 8, paddingRight: 8 },
                                                          height: 4,
                                                          width: 4,
                                                      }),
                                                      (0, r.jsx)(e_.E, {
                                                          variant: "text-sm/medium",
                                                          color: "currentColor",
                                                          children: eR.intl.format(eR.t.CBftDc, { count: a }),
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(e_.E, {
                                                  variant: "text-sm/medium",
                                                  color: "currentColor",
                                                  children: n,
                                              });
                                    l = (0, r.jsx)(rY.OZ, { scrollManager: A, content: e, channel: s });
                                } else {
                                    let e = (0, r.jsx)("div", {
                                        style: { display: "flex", textTransform: "none", alignItems: "center" },
                                        children:
                                            a > 0
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(e_.E, {
                                                              variant: "text-sm/medium",
                                                              color: "currentColor",
                                                              children: eR.intl.format(t, { count: c }),
                                                          }),
                                                          (0, r.jsx)(rv.A, {
                                                              style: { paddingLeft: 8, paddingRight: 8 },
                                                              height: 4,
                                                              width: 4,
                                                          }),
                                                          (0, r.jsx)(e_.E, {
                                                              variant: "text-sm/medium",
                                                              color: "currentColor",
                                                              children: eR.intl.format(eR.t.CBftDc, { count: a }),
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(e_.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: n,
                                                  }),
                                    });
                                    l = (0, r.jsx)(rY.GN, { content: e, channelId: s.id });
                                }
                            }
                        } else
                            O.includes(r8.i.NEW_MESSAGES) &&
                                (l = (0, r.jsx)(rY.GN, {
                                    content: eR.intl.format(e, { count: c, timestamp: i }),
                                    channelId: s.id,
                                }));
                    }
                    if (
                        (null == l &&
                            (0, j.pk)(s) &&
                            D &&
                            O.includes(r8.i.SUMMARIES) &&
                            (l = (0, r.jsx)(rY.UK, { channel: s, scrollManager: A })),
                        a.error)
                    )
                        i = (0, r.jsx)(rY.Ez, {
                            loading: a.loadingMore,
                            onClick: () => {
                                var e;
                                return (
                                    (e = s.id),
                                    void I.A.fetchMessages({
                                        channelId: e,
                                        limit: (0, lQ.h)("renderStream.reload"),
                                        truncate: !0,
                                    })
                                );
                            },
                            className: S,
                        });
                    else if (a.hasMoreAfter && N()) {
                        let { jumpReturnTargetId: e } = a;
                        i =
                            a.loadingMore && a.jumpedToPresent
                                ? (0, r.jsx)(rY.Ab, { className: S })
                                : null != e
                                  ? (0, r.jsx)(rY.Ab, {
                                        type: rY.ks.REPLY,
                                        onClick: () => {
                                            I.A.jumpToMessage({ channelId: s.id, messageId: e, flash: !0 });
                                        },
                                        className: S,
                                    })
                                  : (0, r.jsx)(rY.Ab, {
                                        onClick: () => {
                                            let e;
                                            return (
                                                I.A.jumpToPresent(s.id, (0, lQ.h)("renderStream.jumpToPresent")),
                                                (e = rK.A.getChannelId()),
                                                void (s.id === e && (0, rN.iN)(s.id))
                                            );
                                        },
                                        className: S,
                                    });
                    }
                    return {
                        channelStreamMarkup: z,
                        newMessagesBar: l,
                        jumpToPresentBar: i,
                        forumPostActionBar: U,
                        pinnedFirstMessage: H,
                        safetyWarningBanner: G,
                    };
                })({
                    channel: u,
                    messages: g,
                    unreadCount: p,
                    showNewMessagesBar: A,
                    messageDisplayCompact: f,
                    channelStream: C,
                    uploads: x,
                    loadMore: W.loadMore,
                    scrollManager: W,
                    specs: z,
                    filterAfterTimestamp: M ?? J,
                    showingQuarantineBanner: R,
                    hideSummaries: D,
                    jumpToPresent: function () {
                        g.hasPresent()
                            ? W.ref.current?.scrollToBottom({ animate: !b.Ay.useReducedMotion })
                            : I.A.jumpToPresent(u.id, B);
                    },
                    jumpBarClassName: L,
                    isGameInvitesPost: G,
                });
            (t = W.ref),
                (n = o.useCallback(() => t.current?.scrollToBottom(), [t])),
                (l = o.useCallback(() => t.current?.scrollPageUp({ animate: !b.Ay.useReducedMotion }), [t])),
                (i = o.useCallback(() => t.current?.scrollPageDown({ animate: !b.Ay.useReducedMotion }), [t])),
                (0, lY.Vo)({ event: ec.jej.SCROLLTO_PRESENT, handler: n }),
                (0, lY.Vo)({ event: ec.jej.SCROLL_PAGE_UP, handler: l }),
                (0, lY.Vo)({ event: ec.jej.SCROLL_PAGE_DOWN, handler: i });
            let es = (0, _.R7)(),
                { ref: ea, ...er } = (0, h.LT)($),
                eo = (0, y.A)((e) => {
                    (W.ref.current = e), (ea.current = e?.getScrollerNode() ?? null);
                }),
                ed = (0, m.bG)([lW.A], () => {
                    let e = lW.A.settings.appearance?.clientThemeSettings;
                    return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null;
                }),
                eu = (0, lB.Q)(),
                eh = ed || null != eu,
                em = o.useMemo(() => (O ? (U ? oe.gA : oe.ru) : oe.Zd), [O, U]),
                ep = o.useMemo(() => (O ? (U ? oe.cz : oe.XF) : oe.U6), [O, U]);
            return (0, r.jsxs)(h.hD, {
                navigator: $,
                children: [
                    el,
                    null != ei && ei,
                    (0, r.jsxs)("div", {
                        className: d()(oe.Og, s, `group-spacing-${a}`),
                        children: [
                            null == ei && Y,
                            (0, r.jsxs)(H, {
                                channel: u,
                                scrollManager: W,
                                children: [
                                    (0, r.jsxs)(ot, {
                                        ref: eo,
                                        customTheme: !0,
                                        className: d()(c, oe.XG, eh ? ep : void 0),
                                        contentClassName: oe.gT,
                                        onResize: W.handleResize,
                                        onScroll: W.handleScroll,
                                        onMouseDown: W.handleMouseDown,
                                        onMouseUp: W.handleMouseUp,
                                        ...es,
                                        tabIndex: -1,
                                        role: "group",
                                        children: [
                                            en,
                                            (0, r.jsxs)("ol", {
                                                className: oe.bv,
                                                "aria-label": eR.intl.formatToPlainString(eR.t.XarRiL, {
                                                    channelName: F ?? "",
                                                }),
                                                ...er,
                                                children: [
                                                    (0, r.jsx)("span", {
                                                        className: oe.$4,
                                                        id: "messagesNavigationDescription",
                                                        "aria-hidden": !0,
                                                        children: eR.intl.string(eR.t["Spb3s/"]),
                                                    }),
                                                    Z,
                                                    (0, r.jsx)("div", {
                                                        className: d()({
                                                            [oe.lB]: !R,
                                                            [oe.Ie]: 0 === g.length && !g.loadingMore,
                                                            [oe.Fb]:
                                                                1 === g.length &&
                                                                !g.loadingMore &&
                                                                u.isForumPost() &&
                                                                g.first()?.isFirstMessageInForumPost(u),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    eh ? null : (0, r.jsx)("div", { className: em }),
                                    X,
                                    q && (0, r.jsx)(lw, { channel: u, scrollManager: W }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
        (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden,
    ),
    ol = o.memo(function (e) {
        let {
                channel: t,
                showingQuarantineBanner: n,
                hideSummaries: l = !1,
                forceCompact: i = !1,
                forceCozy: s = !1,
                typingGradient: a = !1,
                ...c
            } = e,
            {
                canManageMessages: d,
                permissionVersion: u,
                canChat: h,
            } = (function (e) {
                let t = e.getGuildId(),
                    n = (0, m.bG)([tc.A], () => null == t || tc.A.canChatInGuild(t), [t]),
                    { canManageMessages: l, permissionVersion: i } = (0, m.cf)(
                        [td.A],
                        () => ({
                            canManageMessages: td.A.can(ec.xBc.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? td.A.getGuildVersion(t) : null,
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
                let e = eZ.hH.useSetting(),
                    t = eZ.gs.useSetting(),
                    {
                        messageGroupSpacing: n,
                        fontSize: l,
                        keyboardModeEnabled: i,
                    } = (0, m.cf)([b.Ay], () => {
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
                messages: x,
                channelStream: E,
                oldestUnreadMessageId: S,
                editingMessageId: _,
                isGameInvitesPost: I,
            } = (function (e) {
                var t;
                let n,
                    l = (0, m.bG)([em.A], () => em.A.getMessages(e.id), [e.id]),
                    i = (0, m.bG)([l$.Ay], () => l$.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                    { enabled: s } = X.A.useExperiment({ location: "41de6d_1" }, { autoTrackExposure: !1 }),
                    a = lZ.default.getUser(ea.default.getId())?.hasFlag(ec.nhx.SPAMMER) ?? !1,
                    r = (0, j.cI)(e),
                    c = (0, lF.A)("use_topic_dividers_in_chat"),
                    d = (0, m.yK)([lz.A], () => (r && c ? (lz.A.summaries(e.id) ?? []) : []), [r, e.id, c]),
                    u = (0, m.bG)([lz.A], () => (r ? lz.A.selectedSummary(e.id) : null), [r, e.id]),
                    h = (0, P.sV)(e.guild_id, "message_stream"),
                    g = (0, m.bG)([O.A], () => (h ? O.A.getSelectedConversation(e.id) : null), [h, e.id]),
                    p =
                        ((t = l),
                        (n = o.useMemo(() => {
                            let e = new Set();
                            return (
                                t.forEach((t) => {
                                    null != t.applicationId && null == t.application && e.add(t.applicationId);
                                }),
                                Array.from(e)
                            );
                        }, [t])),
                        (0, L.A)(n));
                !(function (e, t) {
                    let [n, l] = (function (e, t) {
                        let [n, l] = o.useMemo(
                                () =>
                                    (function (e, t) {
                                        if (!t.isPrivate()) return [D, R];
                                        let n = e.filter(
                                                (e) => e.application?.id != null && e.activity?.party_id != null,
                                            ),
                                            l = n.map((e) => e.id);
                                        return [n, l];
                                    })(e, t),
                                [e, t],
                            ),
                            i = (0, m.yK)([T.A], () => {
                                let e = [];
                                return (
                                    n.forEach((t) => {
                                        null !=
                                            T.A.findActivity(
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
                            }, [n]);
                        return [
                            l,
                            o.useMemo(
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
                    o.useEffect(() => {
                        for (let e of l)
                            N.A.isSubscribed(e) ||
                                v.h.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription: e });
                    }, [l]);
                })(l, e);
                let A = (0, lH.YG)(e),
                    f = o.useMemo(
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
                                    p = null != a ? ee.default.extractTimestamp(a) : null,
                                    A = null;
                                return (
                                    s.forEach((e) => {
                                        var f, C;
                                        let x, E, S;
                                        if (u && e.isFirstMessageInForumPost(i)) return;
                                        if (null != o && o.length > 0) {
                                            let t = ee.default.extractTimestamp(e.id);
                                            for (let e = 0; e < o?.length; e++) {
                                                if (null == o[e]) continue;
                                                let n = ee.default.extractTimestamp(o[e].startId),
                                                    l = ee.default.extractTimestamp(o[e].endId);
                                                if (t >= n && t <= l) {
                                                    if (A === o[e].id) break;
                                                    m.push({
                                                        type: ec.TZK.DIVIDER,
                                                        content: o[e].topic,
                                                        contentKey: o[e].id,
                                                    }),
                                                        (A = o[e].id);
                                                    break;
                                                }
                                            }
                                        }
                                        let _ = (0, Q.i$)(e.timestamp, "LL");
                                        _ !== t &&
                                            null == A &&
                                            (m.push({ type: ec.TZK.DIVIDER, content: _, contentKey: _ }), (t = _));
                                        let I = m[m.length - 1],
                                            j = null,
                                            y = (0, en.kf)(e);
                                        g = g || y;
                                        let b = eh(i, e, y && r);
                                        (null !== b &&
                                            ([j, I] =
                                                ((E = f = I),
                                                null == f || f.type !== b
                                                    ? ((x = { type: b, content: [], key: e.id }), m.push(x))
                                                    : (E = (x = f).content[x.content.length - 1]),
                                                [x, E])),
                                        a === e.id && null != p)
                                            ? (null != I && I.type === ec.TZK.DIVIDER
                                                  ? (I.unreadId = e.id)
                                                  : null !== j
                                                    ? ((C = j),
                                                      e.isFirstMessageInForumPost(i) ||
                                                          C.content.push({ type: ec.TZK.DIVIDER, unreadId: e.id }),
                                                      (C.hasUnread = !0))
                                                    : e.isFirstMessageInForumPost(i) ||
                                                      m.push({ type: ec.TZK.DIVIDER, unreadId: e.id }),
                                              (p = null))
                                            : null != p &&
                                              ee.default.extractTimestamp(e.id) > p &&
                                              (e.isFirstMessageInForumPost(i) ||
                                                  m.push({ type: ec.TZK.DIVIDER, unreadId: e.id }),
                                              (p = null));
                                        let v =
                                            null !=
                                            (S = (function (e, t) {
                                                if (ed.get(t.id) === e.id) return eu(e, t.id);
                                                if (
                                                    null == e.applicationId ||
                                                    !(0, ei.Lt)(e.flags, ec.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
                                                    !t.isDM() ||
                                                    e.author.id === ea.default.getId() ||
                                                    null != e.activity ||
                                                    (0, ei.Lt)(
                                                        t.recipientFlags ?? 0,
                                                        el.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                    ) ||
                                                    ed.has(t.id)
                                                )
                                                    return null;
                                                let n = eu(e, t.id);
                                                ed.set(t.id, e.id);
                                                let l = (0, ei.lA)(
                                                    t.recipientFlags ?? 0,
                                                    el.o.DISMISSED_IN_GAME_MESSAGE_NUX,
                                                    !0,
                                                );
                                                return es.A.updatePrivateChannelRecipientFlags(t.id, l), n;
                                            })(e, i))
                                                ? { message: S, position: "before" }
                                                : null;
                                        null != v &&
                                            "before" === v.position &&
                                            m.push({ type: ec.TZK.MESSAGE, content: v.message, groupId: v.message.id });
                                        let N = I?.type === ec.TZK.MESSAGE ? l : I;
                                        (0, et.l)(i, N, e) && (n = e.id);
                                        let T = {
                                            type:
                                                e.type === ec.lAJ.THREAD_STARTER_MESSAGE
                                                    ? ec.TZK.THREAD_STARTER_MESSAGE
                                                    : ec.TZK.MESSAGE,
                                            content: e,
                                            groupId: n,
                                        };
                                        n === e.id && (l = T);
                                        let { jumpSequenceId: M, jumpFlash: R, jumpTargetId: D } = s;
                                        R && e.id === D && null != M && (T.flashKey = M),
                                            s.jumpTargetId === e.id && (T.jumpTarget = !0),
                                            null != c &&
                                                e.id === c.startId &&
                                                c.count > 1 &&
                                                m.push({
                                                    type: ec.TZK.DIVIDER,
                                                    content: c.topic,
                                                    contentKey: c.startId,
                                                    isSummaryDivider: !0,
                                                }),
                                            h &&
                                                null != d &&
                                                e.id === d.startMessageId &&
                                                d.messageCount > 1 &&
                                                m.push({
                                                    type: ec.TZK.DIVIDER,
                                                    content: d.title,
                                                    contentKey: `conv-start-${d.id}`,
                                                    isConversationChannelHeader: !0,
                                                }),
                                            null !== j
                                                ? (j.content.push(T), T.jumpTarget && (j.hasJumpTarget = !0))
                                                : m.push(T),
                                            e.isFirstMessageInForumPost(i) &&
                                                m.push({ type: ec.TZK.FORUM_POST_ACTION_BAR }),
                                            null != v &&
                                                "after" === v.position &&
                                                m.push({
                                                    type: ec.TZK.MESSAGE,
                                                    content: v.message,
                                                    groupId: v.message.id,
                                                }),
                                            null != c &&
                                                e.id === c.endId &&
                                                c.count > 1 &&
                                                m.push({
                                                    type: ec.TZK.DIVIDER,
                                                    contentKey: c.endId,
                                                    isSummaryDivider: !0,
                                                });
                                    }),
                                    g && (0, en.iJ)(i) && X.A.trackExposure({ location: "416cc9_1" }),
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
                                isTopicalNavEnabled: h,
                            }),
                        [l, e, i, s, d, u, g, p, a, A, h],
                    );
                return {
                    messages: l,
                    channelStream: f,
                    oldestUnreadMessageId: i,
                    editingMessageId: (0, m.bG)([eQ.A], () => eQ.A.getEditingMessage(e.id)?.id),
                    isGameInvitesPost: A,
                };
            })(t);
        return (0, r.jsx)(lK.Bs.Provider, {
            value: (0, lX.A)(f, d),
            children: (0, r.jsx)(l2.t, {
                children: (0, r.jsx)(on, {
                    ...c,
                    messageGroupSpacing: g,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !s && (i || A),
                    messages: x,
                    channelStream: E,
                    permissionVersion: u,
                    uploads: (0, m.bG)([lJ.A], () => lJ.A.getFiles(t.id), [t]),
                    unreadCount: (0, m.bG)([l$.Ay], () => l$.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != S,
                    canChat: h,
                    editingMessageId: _,
                    fontSize: p,
                    keyboardModeEnabled: C,
                    showingQuarantineBanner: n,
                    hideSummaries: l,
                    typingGradient: a,
                    isGameInvitesPost: I,
                }),
            }),
        });
    });
