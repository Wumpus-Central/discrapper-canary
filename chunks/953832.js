n.d(t, { ForwardModal: () => ef });
var l = n(627968),
    a = n(64700),
    i = n(735438),
    s = n(837381),
    r = n(189213),
    o = n(17928),
    u = n(765178),
    c = n(834730),
    d = n(691540),
    h = n(857250),
    m = n(97483),
    g = n(192308),
    f = n(892547),
    x = n(140735),
    C = n(559647),
    p = n(465532),
    A = n(928039),
    b = n(408018),
    j = n(915089),
    v = n(547),
    k = n(135621),
    w = n(378570),
    y = n(223863),
    R = n(151054),
    S = n(734057),
    P = n(31717),
    E = n(232835),
    M = n(403362),
    N = n(885918),
    _ = n(513480),
    D = n(530912),
    F = n(71393),
    T = n(287809),
    I = n(652215);
function L(e) {
    if (!e.isPrivate()) {
        let t = F.A.getGuild(e.guild_id);
        return null != t && t.features.has(I.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = T.default.getUser(e);
        return null != t && t.isStaff();
    });
}
var O = n(355622),
    V = n(138617),
    U = n(294454),
    G = n(375708),
    B = n(745812);
function H(e) {
    let {
            message: t,
            canSend: n,
            selectedDestinations: i,
            isSending: s,
            onSend: r,
            inputValue: o,
            setInputValue: u,
        } = e,
        c = (0, k.A)(),
        d = (0, _.QK)(i),
        h = (0, D.VF)(),
        { textValue: m, richValue: g } = o,
        [f, x] = a.useState(!1),
        C = a.useCallback(() => x(!0), []),
        A = a.useCallback(() => x(!1), []),
        b = a.useCallback(
            (e, n, l) => {
                u({ textValue: n, richValue: l }),
                    null != t && (p.A.saveDraft(t.channel_id, n, P.C.ForwardContextMessage), h(t.channel_id, t.id));
            },
            [h, t, u],
        ),
        j = a.useCallback(() => {
            null != t && p.A.clearDraft(t.channel_id, P.C.ForwardContextMessage), r(m);
        }, [t, r, m]),
        v = a.useCallback(
            () => (s || !n || m.length > c || j(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [j, m, c, n, s],
        );
    return (0, l.jsx)(V.Ay, {
        innerClassName: B.OG,
        onChange: b,
        placeholder: G.intl.string(G.t.ZroO3G),
        channel: d,
        textValue: m,
        richValue: g,
        type: O.oU.FORWARD_MESSAGE_INPUT,
        onBlur: A,
        onFocus: C,
        focused: f,
        onSubmit: v,
        parentModalKey: U.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
var Q = n(503698),
    W = n.n(Q),
    X = n(602853),
    J = n(477262),
    K = n(65154),
    q = n(191023),
    z = n(588975),
    Y = n(661531),
    Z = n(155718),
    $ = n(222713),
    ee = n(783465),
    et = n(573435),
    en = n(619517),
    el = n(448381),
    ea = n(465364),
    ei = n(438729),
    es = n(885386),
    er = n(576705),
    eo = n(659674),
    eu = n(582068),
    ec = n(28289);
function ed(e) {
    let { message: t, forwardOptions: n, channel: s } = e,
        r = es.hH.useSetting(),
        {
            attachments: u,
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
                (0, o.bG)([er.A], () => null != n && !(0, eo.fS)(n, er.A) && (0, eo.ax)(t)) ||
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
            m.components.length > 0 && m.components[0].type === Z.I5.CHECKPOINT_CARD
                ? m.components[0].checkpointData
                : null,
        f = $.f[g?.cardId ?? 0],
        x = (0, X.r)(f.primaryColor).hex(),
        C = a.useMemo(
            () =>
                h
                    ? (0, ea.Ay)(t, {
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
        p = u.length,
        A = null,
        b = null,
        j = null;
    if (p > 0 || d.length > 0) {
        let e = (0, i.countBy)(u, (e) => (0, el.NI)(e, !0)),
            t = e.IMAGE ?? 0,
            n = e.VIDEO ?? 0;
        t > 0 && n > 0
            ? ((A = G.intl.formatToPlainString(G.t.Lr0Top, { image_count: t, video_count: n })), (b = J.s))
            : n > 0
              ? ((A = G.intl.formatToPlainString(G.t.SJ6pPX, { count: n })), (b = K.S))
              : t > 0
                ? ((A = G.intl.formatToPlainString(G.t.h4pFfU, { count: t })), (b = 1 === t ? q.x : J.s))
                : ((A = G.intl.formatToPlainString(G.t["89ihS8"], { count: p })), (b = z.P)),
            n > 0 && p === n
                ? (j = (0, l.jsxs)("div", {
                      className: W()(ec.cR, ec.JZ),
                      children: [
                          (0, l.jsx)(en.Ay, { className: ec.xn, src: u[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(K.S, { className: ec.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : p > 0
                  ? (j = (0, l.jsx)("div", {
                        className: ec.cR,
                        children: (0, l.jsx)(en.Ay, { src: u[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : d[0]?.thumbnail?.proxyURL != null &&
                    (j = (0, l.jsx)("div", {
                        className: ec.cR,
                        children: (0, l.jsx)(en.Ay, { src: d[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    }));
    }
    return (
        p > 1 &&
            null != j &&
            (j = (0, l.jsxs)("div", {
                className: ec.EW,
                children: [
                    (0, l.jsx)(et.Ay, {
                        mask: et.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: j,
                    }),
                    (0, l.jsxs)(c.E, {
                        className: ec.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", p - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: ec.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: ec.FG,
                    children: [
                        null != g &&
                            (0, l.jsx)(c.E, { variant: "text-md/medium", children: G.intl.string(eu.default.goiR2u) }),
                        h &&
                            (0, l.jsx)(ei.Ay, {
                                className: W()(ec.vp, p > 0 && ec.NL),
                                message: t,
                                content: C,
                                compact: r,
                            }),
                        p > 0 &&
                            (0, l.jsxs)("div", {
                                className: ec.kp,
                                children: [
                                    null != b &&
                                        (0, l.jsx)(b, {
                                            size: "custom",
                                            width: h ? 18 : 20,
                                            color: Y.A.colors.TEXT_MUTED,
                                        }),
                                    null != A &&
                                        (0, l.jsx)(c.E, {
                                            variant: h ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: A,
                                        }),
                                ],
                            }),
                    ],
                }),
                j,
                null != g &&
                    (0, l.jsx)("div", {
                        className: ec.cR,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            style: { backgroundColor: x },
                            width: 56,
                            height: 56,
                            src: (0, ee.OW)(g.cardId ?? 0),
                        }),
                    }),
            ],
        })
    );
}
var eh = n(61916);
let em = (0, j.Ld)();
function eg() {
    return (0, l.jsx)("div", {
        className: B.wV,
        children: (0, l.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: G.intl.string(G.t.V6nAfF),
        }),
    });
}
function ef(e) {
    let {
            message: t,
            initialSelectedDestinations: j = [],
            forwardOptions: F,
            onClose: I,
            onRequestSent: O,
            customTitle: V,
            customSubtitle: Q,
            customPreview: W,
            customSendHandler: X,
            customValidateDestination: J,
            additionalActions: K,
            channelFilter: q,
            source: z,
            ...Y
        } = e,
        Z = t?.channel_id,
        $ = t?.id,
        ee = a.useMemo(() => (null != Z ? (0, y._5)(Z) : void 0), [Z]),
        [et, en] = a.useState(!1),
        el = (0, o.bG)(
            [E.A],
            () => ("checkpoint" === z ? t : null != t ? (E.A.getMessage(t.channel_id, t.id) ?? t) : void 0),
            [t, z],
        ),
        ea = (0, o.bG)([S.A], () => (null != Z ? S.A.getChannel(Z) : void 0), [Z]),
        ei = (0, D.Jf)(),
        es = (0, D.nL)(),
        er = a.useRef(0),
        eo = a.useRef(0),
        [eu, ec] = a.useState(j),
        ef = eu.length,
        ex = ef >= 5,
        eC = (0, _.QK)(eu),
        ep = (0, _.l2)(eu),
        eA = (0, o.bG)([P.A], () => (null != el ? P.A.getDraft(el.channel_id, P.C.ForwardContextMessage) : "")),
        [eb, ej] = a.useState(() => (0, b.ur)(eA)),
        ev = (0, _.M6)(eu),
        ek = (0, k.A)(),
        [ew, ey] = a.useState(""),
        { results: eR, updateSearchText: eS } = (0, R.R)({
            selectedDestinations: eu,
            originDestination: ee,
            includeMissingDMs: !0,
            channelFilter: q,
        }),
        eP = a.useCallback(
            (e) => {
                ey(e), eS(e);
            },
            [eS],
        ),
        eE = a.useCallback(
            (e) => {
                eP(e), (eo.current += 1), "" !== e && null != Z && null != $ && es(Z, $);
            },
            [Z, $, es, eP],
        ),
        eM = a.useCallback(() => {
            eP("");
        }, [eP]),
        eN = a.useCallback(async () => {
            null != Z &&
                null != $ &&
                (0, D.hH)({
                    channelId: Z,
                    messageId: $,
                    numDestinationChanges: er.current,
                    numQueryChanges: eo.current,
                }),
                await I();
        }, [Z, $, I]),
        e_ = a.useRef(null);
    a.useEffect(() => {
        "" === ew && e_.current?.focus();
    }, [ew]);
    let eD = a.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, d.P0)((0, h.o)(G.intl.string(G.t.kwmYkt), m.Ck.FORWARD));
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eF = a.useCallback(
            (e, t) => {
                null != Z && null != $ && ei(Z, $, "" !== ew);
                let n = !eu.some((t) => {
                    let { type: n, id: l } = t;
                    return n === e.type && l === e.id;
                });
                if (!n || !ex) {
                    if (null != t) {
                        let e = n ? G.t.u2qHzE : G.t["+yF0ds"];
                        u.O.announce(G.intl.formatToPlainString(e, { name: t, count: n ? ef + 1 : ef - 1 }), "polite");
                    }
                    (er.current += 1),
                        n && eP(""),
                        ec((t) => {
                            let n = t.findIndex((t) => {
                                let { type: n, id: l } = t;
                                return n === e.type && l === e.id;
                            });
                            if (-1 === n) return [e, ...t];
                            let l = [...t];
                            return l.splice(n, 1), l;
                        });
                }
            },
            [Z, ef, ex, $, ew, eu, eP, ei],
        ),
        eT = a.useCallback(
            async function (e) {
                let {
                    withMessage: a,
                    transitionToDestination: i,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != X)
                    return void (await X(e, { withMessage: a, transitionToDestination: i, closeAfterSend: s }, en));
                if (null == Z || null == $) return void (0, d.P0)((0, h.o)(G.intl.string(G.t.R0RpRX), m.Ck.FAILURE));
                let r = E.A.getMessage(Z, $) ?? t;
                if (null == r) return void (0, d.P0)((0, h.o)(G.intl.string(G.t.R0RpRX), m.Ck.FAILURE));
                en(!0);
                let o = (await Promise.all(e.map(y.pk))).filter(M.Vq);
                if (
                    (function (e, t) {
                        if (!T.default.getCurrentUser()?.isStaff()) return !1;
                        let n = S.A.getChannel(e.channel_id);
                        return (
                            null != n &&
                            !!L(n) &&
                            t.some((e) => {
                                let t = S.A.getChannel(e);
                                return !(null == t || t.isPrivate()) && !L(t);
                            })
                        );
                    })(r, o) &&
                    !(await new Promise((e) => {
                        (0, g.openModalLazy)(async () => {
                            let { default: t } = await n.e("51954").then(n.bind(n, 156073));
                            return (n) => (0, l.jsx)(t, { ...n, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void en(!1);
                s && (0, U.Be)(),
                    O?.(),
                    i &&
                        (await v.A.fetchMessages({ channelId: o[0] }),
                        (0, w.iN)(o[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let u = await N.A.sendForwards(r, o, { ...F, withMessage: a }),
                    c = o.some((e) => {
                        let t = S.A.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    u.every((e) => {
                        let { status: t } = e;
                        return "fulfilled" === t;
                    })
                ) {
                    (0, D.TA)({
                        channelId: Z,
                        messageId: $,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: o.length,
                        numDestinationChanges: er.current,
                        numQueryChanges: eo.current,
                        anyDestinationHasSlowmode: c,
                    }),
                        eD();
                    return;
                }
                (0, D.TA)({
                    channelId: Z,
                    messageId: $,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: o.length,
                    numDestinationChanges: er.current,
                    numQueryChanges: eo.current,
                    anyDestinationHasSlowmode: c,
                });
                let f = e.filter((e, t) => "rejected" === u[t].status);
                (0, U.vK)({ message: r, failedDestinations: f, forwardOptions: F });
            },
            [Z, F, $, t, O, eD, X],
        ),
        eI = a.useCallback(
            (e) => {
                eT(eu, { withMessage: e, transitionToDestination: 1 === eu.length, closeAfterSend: !0 });
            },
            [eT, eu],
        ),
        eL = a.useCallback(() => {
            null != el && p.A.clearDraft(el.channel_id, P.C.ForwardContextMessage), eI(eb.textValue);
        }, [el, eb.textValue, eI]),
        eO = (0, eh.s)({
            rowData: eR,
            message: el,
            originChannel: ea,
            selectedDestinations: eu,
            handleToggleDestination: eF,
            disableSelection: ex,
            validateDestination: J,
        }),
        eV = a.useRef(null),
        eU = (0, A.A)("forward-modal", eV),
        eG = a.useMemo(
            () =>
                eR.length > 0
                    ? eO
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(eg, {}), rowHeight: 72 },
            [eR, eO],
        ),
        eB = ef <= 1 ? G.intl.string(G.t.TXNS7S) : G.intl.formatToPlainString(G.t.jWtYUm, { count: ef });
    return (0, l.jsx)(s.hD, {
        navigator: eU,
        children: (0, l.jsx)(s.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, l.jsx)(r.Modal, {
                    ...Y,
                    onClose: eN,
                    title: V ?? G.intl.string(G.t["+SkRRj"]),
                    subtitle:
                        Q ??
                        (ex ? G.intl.formatToPlainString(G.t["3Fbkir"], { count: 5 }) : G.intl.string(G.t["VA+btJ"])),
                    input: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(f.I, {
                                ref: e_,
                                query: ew,
                                onChange: eE,
                                onClear: eM,
                                placeholder: G.intl.string(G.t["5h0QOP"]),
                                "aria-label": G.intl.string(G.t["5h0QOP"]),
                                autoFocus: !0,
                            }),
                            ep.length > 0 &&
                                (0, l.jsx)(x.A, {
                                    id: em,
                                    children: G.intl.formatToPlainString(G.t["5X5Oe2"], { names: ep.join(", ") }),
                                }),
                        ],
                    }),
                    preview:
                        W ??
                        (null != el &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ed, { message: el, forwardOptions: F, channel: eC }),
                                    ev.length > 0 &&
                                        eb.textValue.length > 0 &&
                                        (0, l.jsx)(c.E, {
                                            className: B.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: G.intl.format(G.t.xJFpij, {
                                                count: ev.length,
                                                channelNames: ev.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, l.jsx)(H, {
                        message: el,
                        canSend: ef > 0,
                        selectedDestinations: eu,
                        isSending: et,
                        onSend: eI,
                        inputValue: eb,
                        setInputValue: ej,
                    }),
                    actions: [
                        ...(K ?? []),
                        {
                            variant: "primary",
                            text: eB,
                            "aria-describedby": ep.length > 0 ? em : void 0,
                            onClick: eL,
                            disabled: ef <= 0 || eb.textValue.length > ek,
                            loading: et,
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
                            (eV.current = e), (t.current = e?.getScrollerNode() ?? null);
                        },
                    },
                });
            },
        }),
    });
}
