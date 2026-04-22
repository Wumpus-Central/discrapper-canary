n.d(t, { ForwardModal: () => R });
var l = n(627968),
    a = n(64700),
    i = n(735438),
    s = n(837381),
    r = n(189213),
    u = n(311907),
    o = n(834730),
    c = n(691540),
    A = n(857250),
    d = n(97483),
    h = n(192308),
    _ = n(892547),
    I = n(559647),
    E = n(465532),
    C = n(928039),
    m = n(408018),
    g = n(547),
    L = n(135621),
    f = n(378570),
    N = n(223863),
    x = n(151054),
    P = n(734057),
    p = n(31717),
    b = n(320501),
    S = n(403362),
    D = n(885918),
    F = n(513480),
    G = n(530912),
    y = n(938557),
    O = n(190338),
    T = n(294454),
    k = n(980490),
    v = n(61916);
n(577616);
var j = n(985018),
    W = n(745812);
function w() {
    return (0, l.jsx)("div", {
        className: W.wV,
        children: (0, l.jsx)(o.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: j.intl.string(j.t.V6nAfF),
        }),
    });
}
function R(e) {
    let {
            message: t,
            initialSelectedDestinations: R = [],
            forwardOptions: M,
            onClose: U,
            onRequestSent: B,
            customTitle: V,
            customSubtitle: K,
            customPreview: Y,
            customSendHandler: z,
            customValidateDestination: Z,
            additionalActions: q,
            source: H,
            ...Q
        } = e,
        X = t?.channel_id,
        J = t?.id,
        $ = a.useMemo(() => (null != X ? (0, N._5)(X) : void 0), [X]),
        [ee, et] = a.useState(!1),
        en = (0, u.bG)(
            [b.A],
            () => ("checkpoint" === H ? t : null != t ? (b.A.getMessage(t.channel_id, t.id) ?? t) : void 0),
            [t, H],
        ),
        el = (0, u.bG)([P.A], () => (null != X ? P.A.getChannel(X) : void 0), [X]),
        ea = (0, G.Jf)(),
        ei = (0, G.nL)(),
        es = a.useRef(0),
        er = a.useRef(0),
        [eu, eo] = a.useState(R),
        ec = eu.length,
        eA = ec >= 5,
        ed = (0, F.QK)(eu),
        eh = (0, u.bG)([p.A], () => (null != en ? p.A.getDraft(en.channel_id, p.C.ForwardContextMessage) : "")),
        [e_, eI] = a.useState(() => (0, m.ur)(eh)),
        eE = (0, F.M6)(eu),
        eC = (0, L.A)(),
        [em, eg] = a.useState(""),
        { results: eL, updateSearchText: ef } = (0, x.R)({
            selectedDestinations: eu,
            originDestination: $,
            includeMissingDMs: !0,
        }),
        eN = a.useCallback(
            (e) => {
                eg(e), ef(e);
            },
            [ef],
        ),
        ex = a.useCallback(
            (e) => {
                eN(e), (er.current += 1), "" !== e && null != X && null != J && ei(X, J);
            },
            [X, J, ei, eN],
        ),
        eP = a.useCallback(() => {
            eN("");
        }, [eN]),
        ep = a.useCallback(async () => {
            null != X &&
                null != J &&
                (0, G.hH)({
                    channelId: X,
                    messageId: J,
                    numDestinationChanges: es.current,
                    numQueryChanges: er.current,
                }),
                await U();
        }, [X, J, U]),
        eb = a.useRef(null);
    a.useEffect(() => {
        "" === em && eb.current?.focus();
    }, [em]);
    let eS = a.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, c.P0)((0, A.o)(j.intl.string(j.t.kwmYkt), d.Ck.FORWARD));
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eD = a.useCallback(
            (e) => {
                null != X && null != J && ea(X, J, "" !== em),
                    eo((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return eA ? t : (eN(""), (es.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (es.current += 1), l;
                    });
            },
            [X, eA, J, em, eN, ea],
        ),
        eF = a.useCallback(
            async function (e) {
                let {
                    withMessage: a,
                    transitionToDestination: i,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != z)
                    return void (await z(e, { withMessage: a, transitionToDestination: i, closeAfterSend: s }, et));
                if (null == X || null == J) return void (0, c.P0)((0, A.o)(j.intl.string(j.t.R0RpRX), d.Ck.FAILURE));
                let r = b.A.getMessage(X, J) ?? t;
                if (null == r) return void (0, c.P0)((0, A.o)(j.intl.string(j.t.R0RpRX), d.Ck.FAILURE));
                et(!0);
                let u = (await Promise.all(e.map(N.pk))).filter(S.Vq);
                if (
                    (0, y.A)(r, u) &&
                    !(await new Promise((e) => {
                        (0, h.openModalLazy)(async () => {
                            let { default: t } = await n.e("51954").then(n.bind(n, 156073));
                            return (n) => (0, l.jsx)(t, { ...n, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void et(!1);
                s && (0, T.Be)(),
                    B?.(),
                    i &&
                        (await g.A.fetchMessages({ channelId: u[0] }),
                        (0, f.iN)(u[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let o = await D.A.sendForwards(r, u, { ...M, withMessage: a }),
                    _ = u.some((e) => {
                        let t = P.A.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    o.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, G.TA)({
                        channelId: X,
                        messageId: J,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: u.length,
                        numDestinationChanges: es.current,
                        numQueryChanges: er.current,
                        anyDestinationHasSlowmode: _,
                    }),
                        eS();
                    return;
                }
                (0, G.TA)({
                    channelId: X,
                    messageId: J,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: u.length,
                    numDestinationChanges: es.current,
                    numQueryChanges: er.current,
                    anyDestinationHasSlowmode: _,
                });
                let I = e.filter((e, t) => "rejected" === o[t].status);
                (0, T.vK)({ message: r, failedDestinations: I, forwardOptions: M });
            },
            [X, M, J, t, B, eS, z],
        ),
        eG = a.useCallback(
            (e) => {
                eF(eu, { withMessage: e, transitionToDestination: 1 === eu.length, closeAfterSend: !0 });
            },
            [eF, eu],
        ),
        ey = a.useCallback(() => {
            null != en && E.A.clearDraft(en.channel_id, p.C.ForwardContextMessage), eG(e_.textValue);
        }, [en, e_.textValue, eG]),
        eO = (0, v.s)({
            rowData: eL,
            message: en,
            originChannel: el,
            selectedDestinations: eu,
            handleToggleDestination: eD,
            disableSelection: eA,
            validateDestination: Z,
        }),
        eT = a.useRef(null),
        ek = (0, C.A)("forward-modal", eT),
        ev = a.useMemo(
            () =>
                eL.length > 0
                    ? eO
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(w, {}), rowHeight: 72 },
            [eL, eO],
        ),
        ej = ec <= 1 ? j.intl.string(j.t.TXNS7S) : j.intl.formatToPlainString(j.t.jWtYUm, { count: ec });
    return (0, l.jsx)(s.hD, {
        navigator: ek,
        children: (0, l.jsx)(s.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, l.jsx)(r.Modal, {
                    ...Q,
                    onClose: ep,
                    title: V ?? j.intl.string(j.t["+SkRRj"]),
                    subtitle:
                        K ??
                        (eA ? j.intl.formatToPlainString(j.t["3Fbkir"], { count: 5 }) : j.intl.string(j.t["VA+btJ"])),
                    input: (0, l.jsx)(_.I, {
                        ref: eb,
                        query: em,
                        onChange: ex,
                        onClear: eP,
                        placeholder: j.intl.string(j.t["5h0QOP"]),
                        "aria-label": j.intl.string(j.t["5h0QOP"]),
                        autoFocus: !0,
                    }),
                    preview:
                        Y ??
                        (null != en &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(k.q, { message: en, forwardOptions: M, channel: ed }),
                                    eE.length > 0 &&
                                        e_.textValue.length > 0 &&
                                        (0, l.jsx)(o.E, {
                                            className: W.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: j.intl.format(j.t.xJFpij, {
                                                count: eE.length,
                                                channelNames: eE.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, l.jsx)(O.m, {
                        message: en,
                        canSend: ec > 0,
                        selectedDestinations: eu,
                        isSending: ee,
                        onSend: eG,
                        inputValue: e_,
                        setInputValue: eI,
                    }),
                    actions: [
                        ...(q ?? []),
                        {
                            variant: "primary",
                            text: ej,
                            onClick: ey,
                            disabled: ec <= 0 || e_.textValue.length > eC,
                            loading: ee,
                            icon: I.l,
                            iconPosition: "end",
                        },
                    ],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...ev,
                        ...n,
                        innerRole: void 0,
                        ref: (e) => {
                            (eT.current = e), (t.current = e?.getScrollerNode() ?? null);
                        },
                    },
                });
            },
        }),
    });
}
