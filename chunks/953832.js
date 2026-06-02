n.d(t, { ForwardModal: () => ed });
var l = n(627968),
    a = n(64700),
    i = n(735438),
    s = n(837381),
    r = n(189213),
    o = n(17928),
    u = n(834730),
    c = n(691540),
    d = n(857250),
    h = n(97483),
    m = n(192308),
    g = n(892547),
    f = n(559647),
    x = n(465532),
    C = n(928039),
    p = n(408018),
    A = n(547),
    b = n(135621),
    v = n(378570),
    j = n(223863),
    k = n(151054),
    w = n(734057),
    R = n(31717),
    y = n(232835),
    S = n(403362),
    M = n(885918),
    P = n(513480),
    E = n(530912),
    N = n(71393),
    _ = n(287809),
    D = n(652215);
function I(e) {
    if (!e.isPrivate()) {
        let t = N.A.getGuild(e.guild_id);
        return null != t && t.features.has(D.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = _.default.getUser(e);
        return null != t && t.isStaff();
    });
}
var F = n(355622),
    T = n(331159),
    L = n(294454),
    O = n(375708),
    V = n(745812);
function U(e) {
    let { message: t, canSend: n, selectedDestinations: i, onSend: s, inputValue: r, setInputValue: o } = e,
        u = (0, b.A)(),
        c = (0, P.QK)(i),
        d = (0, E.VF)(),
        { textValue: h, richValue: m } = r,
        [g, f] = a.useState(!1),
        C = a.useCallback(() => f(!0), []),
        p = a.useCallback(() => f(!1), []),
        A = a.useCallback(
            (e, n, l) => {
                o({ textValue: n, richValue: l }),
                    null != t && (x.A.saveDraft(t.channel_id, n, R.C.ForwardContextMessage), d(t.channel_id, t.id));
            },
            [d, t, o],
        ),
        v = a.useCallback(() => {
            null != t && (x.A.clearDraft(t.channel_id, R.C.ForwardContextMessage), s(h));
        }, [t, s, h]),
        j = a.useCallback(
            () => (!n || h.length > u || v(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [v, h, u, n],
        );
    return (0, l.jsx)(T.Ay, {
        innerClassName: V.OG,
        onChange: A,
        placeholder: O.intl.string(O.t.ZroO3G),
        channel: c,
        textValue: h,
        richValue: m,
        type: F.oU.FORWARD_MESSAGE_INPUT,
        onBlur: p,
        onFocus: C,
        focused: g,
        onSubmit: j,
        parentModalKey: L.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
var G = n(503698),
    B = n.n(G),
    H = n(602853),
    Q = n(477262),
    W = n(65154),
    J = n(191023),
    K = n(588975),
    X = n(661531),
    Y = n(155718),
    q = n(222713),
    z = n(783465),
    Z = n(573435),
    $ = n(619517),
    ee = n(448381),
    et = n(465364),
    en = n(291812),
    el = n(885386),
    ea = n(576705),
    ei = n(659674),
    es = n(582068),
    er = n(28289);
function eo(e) {
    let { message: t, forwardOptions: n, channel: s } = e,
        r = el.hH.useSetting(),
        {
            attachments: c,
            embeds: d,
            hasContent: h,
            contentMessage: m,
        } = (function (e) {
            let { message: t, channel: n, forwardOptions: l } = e,
                a = l?.onlyAttachmentIds,
                i = l?.onlyEmbedIndices,
                s = t.messageSnapshots[0]?.message ?? t,
                r = s.attachments;
            null != a ? (r = s.attachments.filter((e) => a.includes(e.id))) : null != i && (r = []);
            let u = [];
            return (
                (0, o.bG)([ea.A], () => null != n && !(0, ei.fS)(n, ea.A) && (0, ei.ax)(t)) ||
                    ((u = s.embeds),
                    null != i ? (u = s.embeds.filter((e, t) => i.includes(t))) : null != a && (u = [])),
                (null != i || ("" === s.content && u.length > 0)) &&
                    (s = s.set("content", u.map((e) => e.url).join("\n"))),
                "" === s.content &&
                    s.embeds[0]?.rawDescription != null &&
                    (s = s.set("content", s.embeds[0].rawDescription)),
                { attachments: r, embeds: u, hasContent: "" !== s.content && null == a, contentMessage: s }
            );
        })({ message: t, channel: s, forwardOptions: n }),
        g =
            m.components.length > 0 && m.components[0].type === Y.I5.CHECKPOINT_CARD
                ? m.components[0].checkpointData
                : null,
        f = q.f[g?.cardId ?? 0],
        x = (0, H.r)(f.primaryColor).hex(),
        C = a.useMemo(
            () =>
                h
                    ? (0, et.Ay)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: m,
                      }).content
                    : null,
            [m, h, t],
        ),
        p = c.length,
        A = null,
        b = null,
        v = null;
    if (p > 0 || d.length > 0) {
        let e = (0, i.countBy)(c, (e) => (0, ee.NI)(e, !0)),
            t = e.IMAGE ?? 0,
            n = e.VIDEO ?? 0;
        t > 0 && n > 0
            ? ((A = O.intl.formatToPlainString(O.t.Lr0Top, { image_count: t, video_count: n })), (b = Q.s))
            : n > 0
              ? ((A = O.intl.formatToPlainString(O.t.SJ6pPX, { count: n })), (b = W.S))
              : t > 0
                ? ((A = O.intl.formatToPlainString(O.t.h4pFfU, { count: t })), (b = 1 === t ? J.x : Q.s))
                : ((A = O.intl.formatToPlainString(O.t["89ihS8"], { count: p })), (b = K.P)),
            n > 0 && p === n
                ? (v = (0, l.jsxs)("div", {
                      className: B()(er.cR, er.JZ),
                      children: [
                          (0, l.jsx)($.Ay, { className: er.xn, src: c[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(W.S, { className: er.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : p > 0
                  ? (v = (0, l.jsx)("div", {
                        className: er.cR,
                        children: (0, l.jsx)($.Ay, { src: c[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : d[0]?.thumbnail?.proxyURL != null &&
                    (v = (0, l.jsx)("div", {
                        className: er.cR,
                        children: (0, l.jsx)($.Ay, { src: d[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    }));
    }
    return (
        p > 1 &&
            null != v &&
            (v = (0, l.jsxs)("div", {
                className: er.EW,
                children: [
                    (0, l.jsx)(Z.Ay, {
                        mask: Z.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: v,
                    }),
                    (0, l.jsxs)(u.E, {
                        className: er.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", p - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: er.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: er.FG,
                    children: [
                        null != g &&
                            (0, l.jsx)(u.E, { variant: "text-md/medium", children: O.intl.string(es.default.goiR2u) }),
                        h &&
                            (0, l.jsx)(en.Ay, {
                                className: B()(er.vp, p > 0 && er.NL),
                                message: t,
                                content: C,
                                compact: r,
                            }),
                        p > 0 &&
                            (0, l.jsxs)("div", {
                                className: er.kp,
                                children: [
                                    null != b &&
                                        (0, l.jsx)(b, {
                                            size: "custom",
                                            width: h ? 18 : 20,
                                            color: X.A.colors.TEXT_MUTED,
                                        }),
                                    null != A &&
                                        (0, l.jsx)(u.E, {
                                            variant: h ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: A,
                                        }),
                                ],
                            }),
                    ],
                }),
                v,
                null != g &&
                    (0, l.jsx)("div", {
                        className: er.cR,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            style: { backgroundColor: x },
                            width: 56,
                            height: 56,
                            src: (0, z.OW)(g.cardId ?? 0),
                        }),
                    }),
            ],
        })
    );
}
var eu = n(61916);
function ec() {
    return (0, l.jsx)("div", {
        className: V.wV,
        children: (0, l.jsx)(u.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: O.intl.string(O.t.V6nAfF),
        }),
    });
}
function ed(e) {
    let {
            message: t,
            initialSelectedDestinations: N = [],
            forwardOptions: D,
            onClose: F,
            onRequestSent: T,
            customTitle: G,
            customSubtitle: B,
            customPreview: H,
            customSendHandler: Q,
            customValidateDestination: W,
            additionalActions: J,
            source: K,
            ...X
        } = e,
        Y = t?.channel_id,
        q = t?.id,
        z = a.useMemo(() => (null != Y ? (0, j._5)(Y) : void 0), [Y]),
        [Z, $] = a.useState(!1),
        ee = (0, o.bG)(
            [y.A],
            () => ("checkpoint" === K ? t : null != t ? (y.A.getMessage(t.channel_id, t.id) ?? t) : void 0),
            [t, K],
        ),
        et = (0, o.bG)([w.A], () => (null != Y ? w.A.getChannel(Y) : void 0), [Y]),
        en = (0, E.Jf)(),
        el = (0, E.nL)(),
        ea = a.useRef(0),
        ei = a.useRef(0),
        [es, er] = a.useState(N),
        ed = es.length,
        eh = ed >= 5,
        em = (0, P.QK)(es),
        eg = (0, o.bG)([R.A], () => (null != ee ? R.A.getDraft(ee.channel_id, R.C.ForwardContextMessage) : "")),
        [ef, ex] = a.useState(() => (0, p.ur)(eg)),
        eC = (0, P.M6)(es),
        ep = (0, b.A)(),
        [eA, eb] = a.useState(""),
        { results: ev, updateSearchText: ej } = (0, k.R)({
            selectedDestinations: es,
            originDestination: z,
            includeMissingDMs: !0,
        }),
        ek = a.useCallback(
            (e) => {
                eb(e), ej(e);
            },
            [ej],
        ),
        ew = a.useCallback(
            (e) => {
                ek(e), (ei.current += 1), "" !== e && null != Y && null != q && el(Y, q);
            },
            [Y, q, el, ek],
        ),
        eR = a.useCallback(() => {
            ek("");
        }, [ek]),
        ey = a.useCallback(async () => {
            null != Y &&
                null != q &&
                (0, E.hH)({
                    channelId: Y,
                    messageId: q,
                    numDestinationChanges: ea.current,
                    numQueryChanges: ei.current,
                }),
                await F();
        }, [Y, q, F]),
        eS = a.useRef(null);
    a.useEffect(() => {
        "" === eA && eS.current?.focus();
    }, [eA]);
    let eM = a.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, c.P0)((0, d.o)(O.intl.string(O.t.kwmYkt), h.Ck.FORWARD));
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eP = a.useCallback(
            (e) => {
                null != Y && null != q && en(Y, q, "" !== eA),
                    er((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return eh ? t : (ek(""), (ea.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (ea.current += 1), l;
                    });
            },
            [Y, eh, q, eA, ek, en],
        ),
        eE = a.useCallback(
            async function (e) {
                let {
                    withMessage: a,
                    transitionToDestination: i,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != Q)
                    return void (await Q(e, { withMessage: a, transitionToDestination: i, closeAfterSend: s }, $));
                if (null == Y || null == q) return void (0, c.P0)((0, d.o)(O.intl.string(O.t.R0RpRX), h.Ck.FAILURE));
                let r = y.A.getMessage(Y, q) ?? t;
                if (null == r) return void (0, c.P0)((0, d.o)(O.intl.string(O.t.R0RpRX), h.Ck.FAILURE));
                $(!0);
                let o = (await Promise.all(e.map(j.pk))).filter(S.Vq);
                if (
                    (function (e, t) {
                        if (!_.default.getCurrentUser()?.isStaff()) return !1;
                        let n = w.A.getChannel(e.channel_id);
                        return (
                            null != n &&
                            !!I(n) &&
                            t.some((e) => {
                                let t = w.A.getChannel(e);
                                return !(null == t || t.isPrivate()) && !I(t);
                            })
                        );
                    })(r, o) &&
                    !(await new Promise((e) => {
                        (0, m.openModalLazy)(async () => {
                            let { default: t } = await n.e("51954").then(n.bind(n, 156073));
                            return (n) => (0, l.jsx)(t, { ...n, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void $(!1);
                s && (0, L.Be)(),
                    T?.(),
                    i &&
                        (await A.A.fetchMessages({ channelId: o[0] }),
                        (0, v.iN)(o[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let u = await M.A.sendForwards(r, o, { ...D, withMessage: a }),
                    g = o.some((e) => {
                        let t = w.A.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    u.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, E.TA)({
                        channelId: Y,
                        messageId: q,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: o.length,
                        numDestinationChanges: ea.current,
                        numQueryChanges: ei.current,
                        anyDestinationHasSlowmode: g,
                    }),
                        eM();
                    return;
                }
                (0, E.TA)({
                    channelId: Y,
                    messageId: q,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: o.length,
                    numDestinationChanges: ea.current,
                    numQueryChanges: ei.current,
                    anyDestinationHasSlowmode: g,
                });
                let f = e.filter((e, t) => "rejected" === u[t].status);
                (0, L.vK)({ message: r, failedDestinations: f, forwardOptions: D });
            },
            [Y, D, q, t, T, eM, Q],
        ),
        eN = a.useCallback(
            (e) => {
                eE(es, { withMessage: e, transitionToDestination: 1 === es.length, closeAfterSend: !0 });
            },
            [eE, es],
        ),
        e_ = a.useCallback(() => {
            null != ee && x.A.clearDraft(ee.channel_id, R.C.ForwardContextMessage), eN(ef.textValue);
        }, [ee, ef.textValue, eN]),
        eD = (0, eu.s)({
            rowData: ev,
            message: ee,
            originChannel: et,
            selectedDestinations: es,
            handleToggleDestination: eP,
            disableSelection: eh,
            validateDestination: W,
        }),
        eI = a.useRef(null),
        eF = (0, C.A)("forward-modal", eI),
        eT = a.useMemo(
            () =>
                ev.length > 0
                    ? eD
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(ec, {}), rowHeight: 72 },
            [ev, eD],
        ),
        eL = ed <= 1 ? O.intl.string(O.t.TXNS7S) : O.intl.formatToPlainString(O.t.jWtYUm, { count: ed });
    return (0, l.jsx)(s.hD, {
        navigator: eF,
        children: (0, l.jsx)(s.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, l.jsx)(r.Modal, {
                    ...X,
                    onClose: ey,
                    title: G ?? O.intl.string(O.t["+SkRRj"]),
                    subtitle:
                        B ??
                        (eh ? O.intl.formatToPlainString(O.t["3Fbkir"], { count: 5 }) : O.intl.string(O.t["VA+btJ"])),
                    input: (0, l.jsx)(g.I, {
                        ref: eS,
                        query: eA,
                        onChange: ew,
                        onClear: eR,
                        placeholder: O.intl.string(O.t["5h0QOP"]),
                        "aria-label": O.intl.string(O.t["5h0QOP"]),
                        autoFocus: !0,
                    }),
                    preview:
                        H ??
                        (null != ee &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(eo, { message: ee, forwardOptions: D, channel: em }),
                                    eC.length > 0 &&
                                        ef.textValue.length > 0 &&
                                        (0, l.jsx)(u.E, {
                                            className: V.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: O.intl.format(O.t.xJFpij, {
                                                count: eC.length,
                                                channelNames: eC.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, l.jsx)(U, {
                        message: ee,
                        canSend: ed > 0,
                        selectedDestinations: es,
                        isSending: Z,
                        onSend: eN,
                        inputValue: ef,
                        setInputValue: ex,
                    }),
                    actions: [
                        ...(J ?? []),
                        {
                            variant: "primary",
                            text: eL,
                            onClick: e_,
                            disabled: ed <= 0 || ef.textValue.length > ep,
                            loading: Z,
                            icon: f.l,
                            iconPosition: "end",
                        },
                    ],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...eT,
                        ...n,
                        innerRole: void 0,
                        ref: (e) => {
                            (eI.current = e), (t.current = e?.getScrollerNode() ?? null);
                        },
                    },
                });
            },
        }),
    });
}
