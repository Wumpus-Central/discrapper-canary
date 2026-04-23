n.d(t, { ForwardModal: () => eu });
var a = n(627968),
    r = n(64700),
    s = n(735438),
    l = n(837381),
    o = n(189213),
    i = n(17928),
    c = n(834730),
    _ = n(691540),
    u = n(857250),
    d = n(97483),
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
    b = n(232835),
    R = n(403362),
    S = n(885918),
    L = n(513480),
    y = n(530912),
    w = n(71393),
    D = n(287809),
    x = n(652215);
function v(e) {
    if (!e.isPrivate()) {
        let t = w.A.getGuild(e.guild_id);
        return null != t && t.features.has(x.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = D.default.getUser(e);
        return null != t && t.isStaff();
    });
}
var G = n(355622),
    k = n(201349),
    F = n(294454),
    M = n(985018),
    j = n(745812);
function H(e) {
    let { message: t, canSend: n, selectedDestinations: s, onSend: l, inputValue: o, setInputValue: i } = e,
        c = (0, p.A)(),
        _ = (0, L.QK)(s),
        u = (0, y.VF)(),
        { textValue: d, richValue: A } = o,
        [E, C] = r.useState(!1),
        m = r.useCallback(() => C(!0), []),
        I = r.useCallback(() => C(!1), []),
        N = r.useCallback(
            (e, n, a) => {
                i({ textValue: n, richValue: a }),
                    null != t && (h.A.saveDraft(t.channel_id, n, P.C.ForwardContextMessage), u(t.channel_id, t.id));
            },
            [u, t, i],
        ),
        f = r.useCallback(() => {
            null != t && (h.A.clearDraft(t.channel_id, P.C.ForwardContextMessage), l(d));
        }, [t, l, d]),
        g = r.useCallback(
            () => (!n || d.length > c || f(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [f, d, c, n],
        );
    return (0, a.jsx)(k.Ay, {
        innerClassName: j.OG,
        onChange: N,
        placeholder: M.intl.string(M.t.ZroO3G),
        channel: _,
        textValue: d,
        richValue: A,
        type: G.oU.FORWARD_MESSAGE_INPUT,
        onBlur: I,
        onFocus: m,
        focused: E,
        onSubmit: g,
        parentModalKey: F.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
var K = n(503698),
    W = n.n(K),
    U = n(602853),
    V = n(477262),
    Y = n(65154),
    B = n(191023),
    $ = n(588975),
    z = n(661531),
    J = n(155718),
    Z = n(222713),
    X = n(783465),
    Q = n(573435),
    q = n(619517),
    ee = n(448381),
    et = n(465364),
    en = n(291812),
    ea = n(253932),
    er = n(576705),
    es = n(659674),
    el = n(582068),
    eo = n(28289);
function ei(e) {
    let { message: t, forwardOptions: n, channel: l } = e,
        o = ea.hH.useSetting(),
        {
            attachments: _,
            embeds: u,
            hasContent: d,
            contentMessage: A,
        } = (function (e) {
            let { message: t, channel: n, forwardOptions: a } = e,
                r = a?.onlyAttachmentIds,
                s = a?.onlyEmbedIndices,
                l = t.messageSnapshots[0]?.message ?? t,
                o = l.attachments;
            null != r ? (o = l.attachments.filter((e) => r.includes(e.id))) : null != s && (o = []);
            let c = [];
            return (
                (0, i.bG)([er.A], () => null != n && !(0, es.fS)(n, er.A) && (0, es.ax)(t)) ||
                    ((c = l.embeds),
                    null != s ? (c = l.embeds.filter((e, t) => s.includes(t))) : null != r && (c = [])),
                (null != s || ("" === l.content && c.length > 0)) &&
                    (l = l.set("content", c.map((e) => e.url).join("\n"))),
                "" === l.content &&
                    l.embeds[0]?.rawDescription != null &&
                    (l = l.set("content", l.embeds[0].rawDescription)),
                { attachments: o, embeds: c, hasContent: "" !== l.content && null == r, contentMessage: l }
            );
        })({ message: t, channel: l, forwardOptions: n }),
        E =
            A.components.length > 0 && A.components[0].type === J.I5.CHECKPOINT_CARD
                ? A.components[0].checkpointData
                : null,
        C = Z.f[E?.cardId ?? 0],
        h = (0, U.r)(C.primaryColor).hex(),
        m = r.useMemo(
            () =>
                d
                    ? (0, et.Ay)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: A,
                      }).content
                    : null,
            [A, d, t],
        ),
        I = _.length,
        N = null,
        p = null,
        f = null;
    if (I > 0 || u.length > 0) {
        let e = (0, s.countBy)(_, (e) => (0, ee.NI)(e, !0)),
            t = e.IMAGE ?? 0,
            n = e.VIDEO ?? 0;
        t > 0 && n > 0
            ? ((N = M.intl.formatToPlainString(M.t.Lr0Top, { image_count: t, video_count: n })), (p = V.s))
            : n > 0
              ? ((N = M.intl.formatToPlainString(M.t.SJ6pPX, { count: n })), (p = Y.S))
              : t > 0
                ? ((N = M.intl.formatToPlainString(M.t.h4pFfU, { count: t })), (p = 1 === t ? B.x : V.s))
                : ((N = M.intl.formatToPlainString(M.t["89ihS8"], { count: I })), (p = $.P)),
            n > 0 && I === n
                ? (f = (0, a.jsxs)("div", {
                      className: W()(eo.cR, eo.JZ),
                      children: [
                          (0, a.jsx)(q.Ay, { className: eo.xn, src: _[0].proxy_url, width: 56, height: 56 }),
                          (0, a.jsx)(Y.S, { className: eo.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : I > 0
                  ? (f = (0, a.jsx)("div", {
                        className: eo.cR,
                        children: (0, a.jsx)(q.Ay, { src: _[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : u[0]?.thumbnail?.proxyURL != null &&
                    (f = (0, a.jsx)("div", {
                        className: eo.cR,
                        children: (0, a.jsx)(q.Ay, { src: u[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    }));
    }
    return (
        I > 1 &&
            null != f &&
            (f = (0, a.jsxs)("div", {
                className: eo.EW,
                children: [
                    (0, a.jsx)(Q.Ay, {
                        mask: Q.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: f,
                    }),
                    (0, a.jsxs)(c.E, {
                        className: eo.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", I - 1],
                    }),
                ],
            })),
        (0, a.jsxs)("div", {
            className: eo.sq,
            children: [
                (0, a.jsxs)("div", {
                    className: eo.FG,
                    children: [
                        null != E &&
                            (0, a.jsx)(c.E, { variant: "text-md/medium", children: M.intl.string(el.default.goiR2u) }),
                        d &&
                            (0, a.jsx)(en.Ay, {
                                className: W()(eo.vp, I > 0 && eo.NL),
                                message: t,
                                content: m,
                                compact: o,
                            }),
                        I > 0 &&
                            (0, a.jsxs)("div", {
                                className: eo.kp,
                                children: [
                                    null != p &&
                                        (0, a.jsx)(p, {
                                            size: "custom",
                                            width: d ? 18 : 20,
                                            color: z.A.colors.TEXT_MUTED,
                                        }),
                                    null != N &&
                                        (0, a.jsx)(c.E, {
                                            variant: d ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: N,
                                        }),
                                ],
                            }),
                    ],
                }),
                f,
                null != E &&
                    (0, a.jsx)("div", {
                        className: eo.cR,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            style: { backgroundColor: h },
                            width: 56,
                            height: 56,
                            src: (0, X.OW)(E.cardId ?? 0),
                        }),
                    }),
            ],
        })
    );
}
var ec = n(61916);
function e_() {
    return (0, a.jsx)("div", {
        className: j.wV,
        children: (0, a.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: M.intl.string(M.t.V6nAfF),
        }),
    });
}
function eu(e) {
    let {
            message: t,
            initialSelectedDestinations: w = [],
            forwardOptions: x,
            onClose: G,
            onRequestSent: k,
            customTitle: K,
            customSubtitle: W,
            customPreview: U,
            customSendHandler: V,
            customValidateDestination: Y,
            additionalActions: B,
            source: $,
            ...z
        } = e,
        J = t?.channel_id,
        Z = t?.id,
        X = r.useMemo(() => (null != J ? (0, g._5)(J) : void 0), [J]),
        [Q, q] = r.useState(!1),
        ee = (0, i.bG)(
            [b.A],
            () => ("checkpoint" === $ ? t : null != t ? (b.A.getMessage(t.channel_id, t.id) ?? t) : void 0),
            [t, $],
        ),
        et = (0, i.bG)([T.A], () => (null != J ? T.A.getChannel(J) : void 0), [J]),
        en = (0, y.Jf)(),
        ea = (0, y.nL)(),
        er = r.useRef(0),
        es = r.useRef(0),
        [el, eo] = r.useState(w),
        eu = el.length,
        ed = eu >= 5,
        eA = (0, L.QK)(el),
        eE = (0, i.bG)([P.A], () => (null != ee ? P.A.getDraft(ee.channel_id, P.C.ForwardContextMessage) : "")),
        [eC, eh] = r.useState(() => (0, I.ur)(eE)),
        em = (0, L.M6)(el),
        eI = (0, p.A)(),
        [eN, ep] = r.useState(""),
        { results: ef, updateSearchText: eg } = (0, O.R)({
            selectedDestinations: el,
            originDestination: X,
            includeMissingDMs: !0,
        }),
        eO = r.useCallback(
            (e) => {
                ep(e), eg(e);
            },
            [eg],
        ),
        eT = r.useCallback(
            (e) => {
                eO(e), (es.current += 1), "" !== e && null != J && null != Z && ea(J, Z);
            },
            [J, Z, ea, eO],
        ),
        eP = r.useCallback(() => {
            eO("");
        }, [eO]),
        eb = r.useCallback(async () => {
            null != J &&
                null != Z &&
                (0, y.hH)({
                    channelId: J,
                    messageId: Z,
                    numDestinationChanges: er.current,
                    numQueryChanges: es.current,
                }),
                await G();
        }, [J, Z, G]),
        eR = r.useRef(null);
    r.useEffect(() => {
        "" === eN && eR.current?.focus();
    }, [eN]);
    let eS = r.useMemo(
            () =>
                (0, s.throttle)(
                    () => {
                        (0, _.P0)((0, u.o)(M.intl.string(M.t.kwmYkt), d.Ck.FORWARD));
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eL = r.useCallback(
            (e) => {
                null != J && null != Z && en(J, Z, "" !== eN),
                    eo((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: a } = t;
                            return n === e.type && a === e.id;
                        });
                        if (-1 === n) return ed ? t : (eO(""), (er.current += 1), [e, ...t]);
                        let a = [...t];
                        return a.splice(n, 1), (er.current += 1), a;
                    });
            },
            [J, ed, Z, eN, eO, en],
        ),
        ey = r.useCallback(
            async function (e) {
                let {
                    withMessage: r,
                    transitionToDestination: s,
                    closeAfterSend: l,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != V)
                    return void (await V(e, { withMessage: r, transitionToDestination: s, closeAfterSend: l }, q));
                if (null == J || null == Z) return void (0, _.P0)((0, u.o)(M.intl.string(M.t.R0RpRX), d.Ck.FAILURE));
                let o = b.A.getMessage(J, Z) ?? t;
                if (null == o) return void (0, _.P0)((0, u.o)(M.intl.string(M.t.R0RpRX), d.Ck.FAILURE));
                q(!0);
                let i = (await Promise.all(e.map(g.pk))).filter(R.Vq);
                if (
                    (function (e, t) {
                        if (!D.default.getCurrentUser()?.isStaff()) return !1;
                        let n = T.A.getChannel(e.channel_id);
                        return (
                            null != n &&
                            !!v(n) &&
                            t.some((e) => {
                                let t = T.A.getChannel(e);
                                return !(null == t || t.isPrivate()) && !v(t);
                            })
                        );
                    })(o, i) &&
                    !(await new Promise((e) => {
                        (0, A.openModalLazy)(async () => {
                            let { default: t } = await n.e("51954").then(n.bind(n, 156073));
                            return (n) => (0, a.jsx)(t, { ...n, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void q(!1);
                l && (0, F.Be)(),
                    k?.(),
                    s &&
                        (await N.A.fetchMessages({ channelId: i[0] }),
                        (0, f.iN)(i[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let c = await S.A.sendForwards(o, i, { ...x, withMessage: r }),
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
                        channelId: J,
                        messageId: Z,
                        hasError: !1,
                        hasContextMessage: null != r && "" !== r,
                        numDestinations: i.length,
                        numDestinationChanges: er.current,
                        numQueryChanges: es.current,
                        anyDestinationHasSlowmode: E,
                    }),
                        eS();
                    return;
                }
                (0, y.TA)({
                    channelId: J,
                    messageId: Z,
                    hasError: !0,
                    hasContextMessage: null != r && "" !== r,
                    numDestinations: i.length,
                    numDestinationChanges: er.current,
                    numQueryChanges: es.current,
                    anyDestinationHasSlowmode: E,
                });
                let C = e.filter((e, t) => "rejected" === c[t].status);
                (0, F.vK)({ message: o, failedDestinations: C, forwardOptions: x });
            },
            [J, x, Z, t, k, eS, V],
        ),
        ew = r.useCallback(
            (e) => {
                ey(el, { withMessage: e, transitionToDestination: 1 === el.length, closeAfterSend: !0 });
            },
            [ey, el],
        ),
        eD = r.useCallback(() => {
            null != ee && h.A.clearDraft(ee.channel_id, P.C.ForwardContextMessage), ew(eC.textValue);
        }, [ee, eC.textValue, ew]),
        ex = (0, ec.s)({
            rowData: ef,
            message: ee,
            originChannel: et,
            selectedDestinations: el,
            handleToggleDestination: eL,
            disableSelection: ed,
            validateDestination: Y,
        }),
        ev = r.useRef(null),
        eG = (0, m.A)("forward-modal", ev),
        ek = r.useMemo(
            () =>
                ef.length > 0
                    ? ex
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, a.jsx)(e_, {}), rowHeight: 72 },
            [ef, ex],
        ),
        eF = eu <= 1 ? M.intl.string(M.t.TXNS7S) : M.intl.formatToPlainString(M.t.jWtYUm, { count: eu });
    return (0, a.jsx)(l.hD, {
        navigator: eG,
        children: (0, a.jsx)(l.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsx)(o.Modal, {
                    ...z,
                    onClose: eb,
                    title: K ?? M.intl.string(M.t["+SkRRj"]),
                    subtitle:
                        W ??
                        (ed ? M.intl.formatToPlainString(M.t["3Fbkir"], { count: 5 }) : M.intl.string(M.t["VA+btJ"])),
                    input: (0, a.jsx)(E.I, {
                        ref: eR,
                        query: eN,
                        onChange: eT,
                        onClear: eP,
                        placeholder: M.intl.string(M.t["5h0QOP"]),
                        "aria-label": M.intl.string(M.t["5h0QOP"]),
                        autoFocus: !0,
                    }),
                    preview:
                        U ??
                        (null != ee &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(ei, { message: ee, forwardOptions: x, channel: eA }),
                                    em.length > 0 &&
                                        eC.textValue.length > 0 &&
                                        (0, a.jsx)(c.E, {
                                            className: j.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: M.intl.format(M.t.xJFpij, {
                                                count: em.length,
                                                channelNames: em.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, a.jsx)(H, {
                        message: ee,
                        canSend: eu > 0,
                        selectedDestinations: el,
                        isSending: Q,
                        onSend: ew,
                        inputValue: eC,
                        setInputValue: eh,
                    }),
                    actions: [
                        ...(B ?? []),
                        {
                            variant: "primary",
                            text: eF,
                            onClick: eD,
                            disabled: eu <= 0 || eC.textValue.length > eI,
                            loading: Q,
                            icon: C.l,
                            iconPosition: "end",
                        },
                    ],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...ek,
                        ...n,
                        innerRole: void 0,
                        ref: (e) => {
                            (ev.current = e), (t.current = e?.getScrollerNode() ?? null);
                        },
                    },
                });
            },
        }),
    });
}
