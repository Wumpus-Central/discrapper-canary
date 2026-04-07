n.d(t, { ForwardModal: () => D });
var l = n(627968),
    a = n(64700),
    s = n(735438),
    i = n(837381),
    r = n(158954),
    o = n(311907),
    u = n(397927),
    c = n(465532),
    d = n(928039),
    h = n(408018),
    m = n(547),
    g = n(135621),
    f = n(378570),
    x = n(223863),
    C = n(151054),
    p = n(734057),
    A = n(31717),
    v = n(320501),
    b = n(403362),
    w = n(885918),
    j = n(513480),
    T = n(530912),
    k = n(938557),
    y = n(190338),
    R = n(294454),
    S = n(980490),
    M = n(61916);
n(577616);
var N = n(985018),
    P = n(337508);
function _() {
    return (0, l.jsx)("div", {
        className: P.wV,
        children: (0, l.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: N.intl.string(N.t.V6nAfF),
        }),
    });
}
function D(e) {
    let {
            message: t,
            initialSelectedDestinations: D = [],
            forwardOptions: I,
            onClose: E,
            onRequestSent: F,
            customTitle: L,
            customSubtitle: O,
            customPreview: V,
            customSendHandler: U,
            customValidateDestination: G,
            additionalActions: B,
            source: W,
            ...H
        } = e,
        Q = t?.channel_id,
        q = t?.id,
        X = a.useMemo(() => (null != Q ? (0, x._5)(Q) : void 0), [Q]),
        [Y, J] = a.useState(!1),
        K = (0, o.bG)(
            [v.A],
            () => ("checkpoint" === W ? t : null != t ? (v.A.getMessage(t.channel_id, t.id) ?? t) : void 0),
            [t, W],
        ),
        Z = (0, o.bG)([p.A], () => (null != Q ? p.A.getChannel(Q) : void 0), [Q]),
        z = (0, T.Jf)(),
        $ = (0, T.nL)(),
        ee = a.useRef(0),
        et = a.useRef(0),
        [en, el] = a.useState(D),
        ea = en.length,
        es = ea >= 5,
        ei = (0, j.QK)(en),
        er = (0, o.bG)([A.A], () => (null != K ? A.A.getDraft(K.channel_id, A.C.ForwardContextMessage) : "")),
        [eo, eu] = a.useState(() => (0, h.ur)(er)),
        ec = (0, j.M6)(en),
        ed = (0, g.A)(),
        [eh, em] = a.useState(""),
        { results: eg, updateSearchText: ef } = (0, C.R)({
            selectedDestinations: en,
            originDestination: X,
            includeMissingDMs: !0,
        }),
        ex = a.useCallback(
            (e) => {
                em(e), ef(e);
            },
            [ef],
        ),
        eC = a.useCallback(
            (e) => {
                ex(e), (et.current += 1), "" !== e && null != Q && null != q && $(Q, q);
            },
            [Q, q, $, ex],
        ),
        ep = a.useCallback(() => {
            ex("");
        }, [ex]),
        eA = a.useCallback(async () => {
            null != Q &&
                null != q &&
                (0, T.hH)({
                    channelId: Q,
                    messageId: q,
                    numDestinationChanges: ee.current,
                    numQueryChanges: et.current,
                }),
                await E();
        }, [Q, q, E]),
        ev = a.useRef(null);
    a.useEffect(() => {
        "" === eh && ev.current?.focus();
    }, [eh]);
    let eb = a.useMemo(
            () =>
                (0, s.throttle)(
                    () => {
                        (0, u.showToast)((0, u.createToast)(N.intl.string(N.t.kwmYkt), u.ToastType.FORWARD));
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        ew = a.useCallback(
            (e) => {
                null != Q && null != q && z(Q, q, "" !== eh),
                    el((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return es ? t : (ex(""), (ee.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (ee.current += 1), l;
                    });
            },
            [Q, es, q, eh, ex, z],
        ),
        ej = a.useCallback(
            async function (e) {
                let {
                    withMessage: a,
                    transitionToDestination: s,
                    closeAfterSend: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != U)
                    return void (await U(e, { withMessage: a, transitionToDestination: s, closeAfterSend: i }, J));
                if (null == Q || null == q)
                    return void (0, u.showToast)((0, u.createToast)(N.intl.string(N.t.R0RpRX), u.ToastType.FAILURE));
                let r = v.A.getMessage(Q, q) ?? t;
                if (null == r)
                    return void (0, u.showToast)((0, u.createToast)(N.intl.string(N.t.R0RpRX), u.ToastType.FAILURE));
                J(!0);
                let o = (await Promise.all(e.map(x.pk))).filter(b.Vq);
                if (
                    (0, k.A)(r, o) &&
                    !(await new Promise((e) => {
                        (0, u.mMO)(async () => {
                            let { default: t } = await n.e("51954").then(n.bind(n, 156073));
                            return (n) => (0, l.jsx)(t, { ...n, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void J(!1);
                i && (0, R.Be)(),
                    F?.(),
                    s &&
                        (await m.A.fetchMessages({ channelId: o[0] }),
                        (0, f.iN)(o[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let c = await w.A.sendForwards(r, o, { ...I, withMessage: a }),
                    d = o.some((e) => {
                        let t = p.A.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    c.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, T.TA)({
                        channelId: Q,
                        messageId: q,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: o.length,
                        numDestinationChanges: ee.current,
                        numQueryChanges: et.current,
                        anyDestinationHasSlowmode: d,
                    }),
                        eb();
                    return;
                }
                (0, T.TA)({
                    channelId: Q,
                    messageId: q,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: o.length,
                    numDestinationChanges: ee.current,
                    numQueryChanges: et.current,
                    anyDestinationHasSlowmode: d,
                });
                let h = e.filter((e, t) => "rejected" === c[t].status);
                (0, R.vK)({ message: r, failedDestinations: h, forwardOptions: I });
            },
            [Q, I, q, t, F, eb, U],
        ),
        eT = a.useCallback(
            (e) => {
                ej(en, { withMessage: e, transitionToDestination: 1 === en.length, closeAfterSend: !0 });
            },
            [ej, en],
        ),
        ek = a.useCallback(() => {
            null != K && c.A.clearDraft(K.channel_id, A.C.ForwardContextMessage), eT(eo.textValue);
        }, [K, eo.textValue, eT]),
        ey = (0, M.s)({
            rowData: eg,
            message: K,
            originChannel: Z,
            selectedDestinations: en,
            handleToggleDestination: ew,
            disableSelection: es,
            validateDestination: G,
        }),
        eR = a.useRef(null),
        eS = (0, d.A)("forward-modal", eR),
        eM = a.useMemo(
            () =>
                eg.length > 0
                    ? ey
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(_, {}), rowHeight: 72 },
            [eg, ey],
        ),
        eN = ea <= 1 ? N.intl.string(N.t.TXNS7S) : N.intl.formatToPlainString(N.t.jWtYUm, { count: ea });
    return (0, l.jsx)(i.hD, {
        navigator: eS,
        children: (0, l.jsx)(i.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, l.jsx)(r.Modal, {
                    ...H,
                    onClose: eA,
                    title: L ?? N.intl.string(N.t["+SkRRj"]),
                    subtitle:
                        O ??
                        (es ? N.intl.formatToPlainString(N.t["3Fbkir"], { count: 5 }) : N.intl.string(N.t["VA+btJ"])),
                    input: (0, l.jsx)(u.IWV, {
                        ref: ev,
                        query: eh,
                        onChange: eC,
                        onClear: ep,
                        placeholder: N.intl.string(N.t["5h0QOP"]),
                        "aria-label": N.intl.string(N.t["5h0QOP"]),
                        autoFocus: !0,
                    }),
                    preview:
                        V ??
                        (null != K &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(S.q, { message: K, forwardOptions: I, channel: ei }),
                                    ec.length > 0 &&
                                        eo.textValue.length > 0 &&
                                        (0, l.jsx)(u.Text, {
                                            className: P.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: N.intl.format(N.t.xJFpij, {
                                                count: ec.length,
                                                channelNames: ec.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, l.jsx)(y.m, {
                        message: K,
                        canSend: ea > 0,
                        selectedDestinations: en,
                        isSending: Y,
                        onSend: eT,
                        inputValue: eo,
                        setInputValue: eu,
                    }),
                    actions: [
                        ...(B ?? []),
                        {
                            variant: "primary",
                            text: eN,
                            onClick: ek,
                            disabled: ea <= 0 || eo.textValue.length > ed,
                            loading: Y,
                            icon: u.lX7,
                            iconPosition: "end",
                        },
                    ],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...eM,
                        ...n,
                        innerRole: void 0,
                        ref: (e) => {
                            (eR.current = e), (t.current = e?.getScrollerNode() ?? null);
                        },
                    },
                });
            },
        }),
    });
}
