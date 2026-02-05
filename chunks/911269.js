n.d(t, { ForwardModal: () => _ });
var l = n(627968),
    a = n(64700),
    s = n(735438),
    i = n(158954),
    r = n(311907),
    o = n(397927),
    u = n(465532),
    c = n(408018),
    d = n(547),
    h = n(135621),
    m = n(378570),
    g = n(223863),
    f = n(151054),
    x = n(734057),
    p = n(31717),
    C = n(320501),
    A = n(403362),
    b = n(885918),
    v = n(513480),
    w = n(530912),
    T = n(938557),
    j = n(190338),
    k = n(294454),
    y = n(980490),
    R = n(61916);
n(577616);
var S = n(985018),
    M = n(967789);
function N() {
    return (0, l.jsx)("div", {
        className: M.wV,
        children: (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: S.intl.string(S.t.V6nAfF),
        }),
    });
}
function _(e) {
    let {
            message: t,
            initialSelectedDestinations: _ = [],
            forwardOptions: P,
            onClose: D,
            onRequestSent: E,
            customTitle: I,
            customSubtitle: F,
            customPreview: L,
            customSendHandler: O,
            customValidateDestination: V,
            additionalActions: U,
            source: G,
            ...B
        } = e,
        W = t?.channel_id,
        H = t?.id,
        Q = a.useMemo(() => (null != W ? (0, g._5)(W) : void 0), [W]),
        [q, X] = a.useState(!1),
        Y = (0, r.bG)(
            [C.A],
            () => ("checkpoint" === G ? t : null != t ? (C.A.getMessage(t.channel_id, t.id) ?? t) : void 0),
            [t, G],
        ),
        J = (0, r.bG)([x.A], () => (null != W ? x.A.getChannel(W) : void 0), [W]),
        K = (0, w.Jf)(),
        Z = (0, w.nL)(),
        z = a.useRef(0),
        $ = a.useRef(0),
        [ee, et] = a.useState(_),
        en = ee.length,
        el = en >= 5,
        ea = (0, v.QK)(ee),
        es = (0, r.bG)([p.A], () => (null != Y ? p.A.getDraft(Y.channel_id, p.C.ForwardContextMessage) : "")),
        [ei, er] = a.useState(() => (0, c.ur)(es)),
        eo = (0, v.M6)(ee),
        eu = (0, h.A)(),
        [ec, ed] = a.useState(""),
        { results: eh, updateSearchText: em } = (0, f.R)({
            selectedDestinations: ee,
            originDestination: Q,
            includeMissingDMs: !0,
        }),
        eg = a.useCallback(
            (e) => {
                ed(e), em(e);
            },
            [em],
        ),
        ef = a.useCallback(
            (e) => {
                eg(e), ($.current += 1), "" !== e && null != W && null != H && Z(W, H);
            },
            [W, H, Z, eg],
        ),
        ex = a.useCallback(() => {
            eg("");
        }, [eg]),
        ep = a.useCallback(async () => {
            null != W &&
                null != H &&
                (0, w.hH)({ channelId: W, messageId: H, numDestinationChanges: z.current, numQueryChanges: $.current }),
                await D();
        }, [W, H, D]),
        eC = a.useRef(null);
    a.useEffect(() => {
        "" === ec && eC.current?.focus();
    }, [ec]);
    let eA = a.useMemo(
            () =>
                (0, s.throttle)(
                    () => {
                        (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.kwmYkt), o.ToastType.FORWARD));
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eb = a.useCallback(
            (e) => {
                null != W && null != H && K(W, H, "" !== ec),
                    et((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return el ? t : (eg(""), (z.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (z.current += 1), l;
                    });
            },
            [W, el, H, ec, eg, K],
        ),
        ev = a.useCallback(
            async function (e) {
                let {
                    withMessage: a,
                    transitionToDestination: s,
                    closeAfterSend: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != O)
                    return void (await O(e, { withMessage: a, transitionToDestination: s, closeAfterSend: i }, X));
                if (null == W || null == H)
                    return void (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.R0RpRX), o.ToastType.FAILURE));
                let r = C.A.getMessage(W, H) ?? t;
                if (null == r)
                    return void (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.R0RpRX), o.ToastType.FAILURE));
                X(!0);
                let u = (await Promise.all(e.map(g.pk))).filter(A.Vq);
                if (
                    (0, T.A)(r, u) &&
                    !(await new Promise((e) => {
                        (0, o.mMO)(async () => {
                            let { default: t } = await n.e("51954").then(n.bind(n, 156073));
                            return (n) => (0, l.jsx)(t, { ...n, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void X(!1);
                i && (0, k.Be)(),
                    E?.(),
                    s &&
                        (await d.A.fetchMessages({ channelId: u[0] }),
                        (0, m.iN)(u[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let c = await b.A.sendForwards(r, u, { ...P, withMessage: a }),
                    h = u.some((e) => {
                        let t = x.A.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    c.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, w.TA)({
                        channelId: W,
                        messageId: H,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: u.length,
                        numDestinationChanges: z.current,
                        numQueryChanges: $.current,
                        anyDestinationHasSlowmode: h,
                    }),
                        eA();
                    return;
                }
                (0, w.TA)({
                    channelId: W,
                    messageId: H,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: u.length,
                    numDestinationChanges: z.current,
                    numQueryChanges: $.current,
                    anyDestinationHasSlowmode: h,
                });
                let f = e.filter((e, t) => "rejected" === c[t].status);
                (0, k.vK)({ message: r, failedDestinations: f, forwardOptions: P });
            },
            [W, P, H, t, E, eA, O],
        ),
        ew = a.useCallback(
            (e) => {
                ev(ee, { withMessage: e, transitionToDestination: 1 === ee.length, closeAfterSend: !0 });
            },
            [ev, ee],
        ),
        eT = a.useCallback(() => {
            null != Y && u.A.clearDraft(Y.channel_id, p.C.ForwardContextMessage), ew(ei.textValue);
        }, [Y, ei.textValue, ew]),
        ej = (0, R.s)({
            rowData: eh,
            message: Y,
            originChannel: J,
            selectedDestinations: ee,
            handleToggleDestination: eb,
            disableSelection: el,
            validateDestination: V,
        }),
        ek = a.useMemo(
            () =>
                eh.length > 0
                    ? ej
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(N, {}), rowHeight: 72 },
            [eh, ej],
        ),
        ey = en <= 1 ? S.intl.string(S.t.TXNS7S) : S.intl.formatToPlainString(S.t.jWtYUm, { count: en });
    return (0, l.jsx)(i.Modal, {
        ...B,
        onClose: ep,
        title: I ?? S.intl.string(S.t["+SkRRj"]),
        subtitle: F ?? (el ? S.intl.formatToPlainString(S.t["3Fbkir"], { count: 5 }) : S.intl.string(S.t["VA+btJ"])),
        input: (0, l.jsx)(o.IWV, {
            ref: eC,
            query: ec,
            onChange: ef,
            onClear: ex,
            placeholder: S.intl.string(S.t["5h0QOP"]),
            "aria-label": S.intl.string(S.t["5h0QOP"]),
            autoFocus: !0,
        }),
        preview:
            L ??
            (null != Y &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(y.q, { message: Y, forwardOptions: P, channel: ea }),
                        eo.length > 0 &&
                            ei.textValue.length > 0 &&
                            (0, l.jsx)(o.Text, {
                                className: M.Lt,
                                variant: "text-sm/normal",
                                color: "text-feedback-warning",
                                children: S.intl.format(S.t.xJFpij, { count: eo.length, channelNames: eo.join(", ") }),
                            }),
                    ],
                })),
        actionBarInput: (0, l.jsx)(j.m, {
            message: Y,
            canSend: en > 0,
            selectedDestinations: ee,
            isSending: q,
            onSend: ew,
            inputValue: ei,
            setInputValue: er,
        }),
        actions: [
            ...(U ?? []),
            {
                variant: "primary",
                text: ey,
                onClick: eT,
                disabled: en <= 0 || ei.textValue.length > eu,
                loading: q,
                icon: o.lX7,
                iconPosition: "end",
            },
        ],
        actionBarInputLayout: "chat-input",
        listProps: ek,
    });
}
