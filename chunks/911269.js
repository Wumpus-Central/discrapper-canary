n.d(t, { ForwardModal: () => j });
var a = n(627968),
    r = n(64700),
    l = n(735438),
    s = n(837381),
    o = n(189213),
    i = n(311907),
    c = n(834730),
    d = n(691540),
    _ = n(857250),
    u = n(97483),
    A = n(192308),
    E = n(892547),
    C = n(559647),
    h = n(465532),
    m = n(928039),
    I = n(408018),
    N = n(547),
    p = n(135621),
    f = n(378570),
    g = n(223863),
    O = n(151054),
    T = n(734057),
    P = n(31717),
    b = n(320501),
    R = n(403362),
    S = n(885918),
    L = n(513480),
    y = n(530912),
    w = n(938557),
    D = n(190338),
    x = n(294454),
    v = n(980490),
    G = n(61916);
n(577616);
var k = n(985018),
    F = n(745812);
function M() {
    return (0, a.jsx)("div", {
        className: F.wV,
        children: (0, a.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: k.intl.string(k.t.V6nAfF),
        }),
    });
}
function j(e) {
    let {
            message: t,
            initialSelectedDestinations: j = [],
            forwardOptions: H,
            onClose: K,
            onRequestSent: W,
            customTitle: U,
            customSubtitle: V,
            customPreview: Y,
            customSendHandler: B,
            customValidateDestination: $,
            additionalActions: z,
            source: J,
            ...Z
        } = e,
        X = t?.channel_id,
        Q = t?.id,
        q = r.useMemo(() => (null != X ? (0, g._5)(X) : void 0), [X]),
        [ee, et] = r.useState(!1),
        en = (0, i.bG)(
            [b.A],
            () => ("checkpoint" === J ? t : null != t ? (b.A.getMessage(t.channel_id, t.id) ?? t) : void 0),
            [t, J],
        ),
        ea = (0, i.bG)([T.A], () => (null != X ? T.A.getChannel(X) : void 0), [X]),
        er = (0, y.Jf)(),
        el = (0, y.nL)(),
        es = r.useRef(0),
        eo = r.useRef(0),
        [ei, ec] = r.useState(j),
        ed = ei.length,
        e_ = ed >= 5,
        eu = (0, L.QK)(ei),
        eA = (0, i.bG)([P.A], () => (null != en ? P.A.getDraft(en.channel_id, P.C.ForwardContextMessage) : "")),
        [eE, eC] = r.useState(() => (0, I.ur)(eA)),
        eh = (0, L.M6)(ei),
        em = (0, p.A)(),
        [eI, eN] = r.useState(""),
        { results: ep, updateSearchText: ef } = (0, O.R)({
            selectedDestinations: ei,
            originDestination: q,
            includeMissingDMs: !0,
        }),
        eg = r.useCallback(
            (e) => {
                eN(e), ef(e);
            },
            [ef],
        ),
        eO = r.useCallback(
            (e) => {
                eg(e), (eo.current += 1), "" !== e && null != X && null != Q && el(X, Q);
            },
            [X, Q, el, eg],
        ),
        eT = r.useCallback(() => {
            eg("");
        }, [eg]),
        eP = r.useCallback(async () => {
            null != X &&
                null != Q &&
                (0, y.hH)({
                    channelId: X,
                    messageId: Q,
                    numDestinationChanges: es.current,
                    numQueryChanges: eo.current,
                }),
                await K();
        }, [X, Q, K]),
        eb = r.useRef(null);
    r.useEffect(() => {
        "" === eI && eb.current?.focus();
    }, [eI]);
    let eR = r.useMemo(
            () =>
                (0, l.throttle)(
                    () => {
                        (0, d.P0)((0, _.o)(k.intl.string(k.t.kwmYkt), u.Ck.FORWARD));
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eS = r.useCallback(
            (e) => {
                null != X && null != Q && er(X, Q, "" !== eI),
                    ec((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: a } = t;
                            return n === e.type && a === e.id;
                        });
                        if (-1 === n) return e_ ? t : (eg(""), (es.current += 1), [e, ...t]);
                        let a = [...t];
                        return a.splice(n, 1), (es.current += 1), a;
                    });
            },
            [X, e_, Q, eI, eg, er],
        ),
        eL = r.useCallback(
            async function (e) {
                let {
                    withMessage: r,
                    transitionToDestination: l,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != B)
                    return void (await B(e, { withMessage: r, transitionToDestination: l, closeAfterSend: s }, et));
                if (null == X || null == Q) return void (0, d.P0)((0, _.o)(k.intl.string(k.t.R0RpRX), u.Ck.FAILURE));
                let o = b.A.getMessage(X, Q) ?? t;
                if (null == o) return void (0, d.P0)((0, _.o)(k.intl.string(k.t.R0RpRX), u.Ck.FAILURE));
                et(!0);
                let i = (await Promise.all(e.map(g.pk))).filter(R.Vq);
                if (
                    (0, w.A)(o, i) &&
                    !(await new Promise((e) => {
                        (0, A.openModalLazy)(async () => {
                            let { default: t } = await n.e("51954").then(n.bind(n, 156073));
                            return (n) => (0, a.jsx)(t, { ...n, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void et(!1);
                s && (0, x.Be)(),
                    W?.(),
                    l &&
                        (await N.A.fetchMessages({ channelId: i[0] }),
                        (0, f.iN)(i[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let c = await S.A.sendForwards(o, i, { ...H, withMessage: r }),
                    E = i.some((e) => {
                        let t = T.A.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    c.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, y.TA)({
                        channelId: X,
                        messageId: Q,
                        hasError: !1,
                        hasContextMessage: null != r && "" !== r,
                        numDestinations: i.length,
                        numDestinationChanges: es.current,
                        numQueryChanges: eo.current,
                        anyDestinationHasSlowmode: E,
                    }),
                        eR();
                    return;
                }
                (0, y.TA)({
                    channelId: X,
                    messageId: Q,
                    hasError: !0,
                    hasContextMessage: null != r && "" !== r,
                    numDestinations: i.length,
                    numDestinationChanges: es.current,
                    numQueryChanges: eo.current,
                    anyDestinationHasSlowmode: E,
                });
                let C = e.filter((e, t) => "rejected" === c[t].status);
                (0, x.vK)({ message: o, failedDestinations: C, forwardOptions: H });
            },
            [X, H, Q, t, W, eR, B],
        ),
        ey = r.useCallback(
            (e) => {
                eL(ei, { withMessage: e, transitionToDestination: 1 === ei.length, closeAfterSend: !0 });
            },
            [eL, ei],
        ),
        ew = r.useCallback(() => {
            null != en && h.A.clearDraft(en.channel_id, P.C.ForwardContextMessage), ey(eE.textValue);
        }, [en, eE.textValue, ey]),
        eD = (0, G.s)({
            rowData: ep,
            message: en,
            originChannel: ea,
            selectedDestinations: ei,
            handleToggleDestination: eS,
            disableSelection: e_,
            validateDestination: $,
        }),
        ex = r.useRef(null),
        ev = (0, m.A)("forward-modal", ex),
        eG = r.useMemo(
            () =>
                ep.length > 0
                    ? eD
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, a.jsx)(M, {}), rowHeight: 72 },
            [ep, eD],
        ),
        ek = ed <= 1 ? k.intl.string(k.t.TXNS7S) : k.intl.formatToPlainString(k.t.jWtYUm, { count: ed });
    return (0, a.jsx)(s.hD, {
        navigator: ev,
        children: (0, a.jsx)(s.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsx)(o.Modal, {
                    ...Z,
                    onClose: eP,
                    title: U ?? k.intl.string(k.t["+SkRRj"]),
                    subtitle:
                        V ??
                        (e_ ? k.intl.formatToPlainString(k.t["3Fbkir"], { count: 5 }) : k.intl.string(k.t["VA+btJ"])),
                    input: (0, a.jsx)(E.I, {
                        ref: eb,
                        query: eI,
                        onChange: eO,
                        onClear: eT,
                        placeholder: k.intl.string(k.t["5h0QOP"]),
                        "aria-label": k.intl.string(k.t["5h0QOP"]),
                        autoFocus: !0,
                    }),
                    preview:
                        Y ??
                        (null != en &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(v.q, { message: en, forwardOptions: H, channel: eu }),
                                    eh.length > 0 &&
                                        eE.textValue.length > 0 &&
                                        (0, a.jsx)(c.E, {
                                            className: F.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: k.intl.format(k.t.xJFpij, {
                                                count: eh.length,
                                                channelNames: eh.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, a.jsx)(D.m, {
                        message: en,
                        canSend: ed > 0,
                        selectedDestinations: ei,
                        isSending: ee,
                        onSend: ey,
                        inputValue: eE,
                        setInputValue: eC,
                    }),
                    actions: [
                        ...(z ?? []),
                        {
                            variant: "primary",
                            text: ek,
                            onClick: ew,
                            disabled: ed <= 0 || eE.textValue.length > em,
                            loading: ee,
                            icon: C.l,
                            iconPosition: "end",
                        },
                    ],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...eG,
                        ...n,
                        innerRole: void 0,
                        ref: (e) => {
                            (ex.current = e), (t.current = e?.getScrollerNode() ?? null);
                        },
                    },
                });
            },
        }),
    });
}
