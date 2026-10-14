t.d(n, { ForwardModal: () => eS });
var l = t(477900),
    a = t(582128),
    i = t(435558),
    s = t(837381),
    r = t(17928),
    o = t(189213),
    u = t(765178),
    c = t(834730),
    d = t(858899),
    h = t(292801),
    m = t(661531),
    g = t(192308),
    f = t(683438),
    x = t(140735),
    C = t(559647),
    p = t(465532),
    A = t(928039),
    w = t(408018),
    v = t(915089),
    b = t(547),
    y = t(135621),
    j = t(378570),
    S = t(446244),
    k = t(151054),
    _ = t(734057),
    I = t(31717),
    R = t(232835),
    E = t(403362),
    P = t(975975),
    M = t.n(P),
    N = t(762230),
    F = t(665260),
    D = t(148494),
    T = t(596720),
    O = t(451909),
    V = t(677413),
    L = t(576705),
    G = t(473511),
    U = t(652215),
    B = t(381941);
let H = {
    async sendForward(e, n, t) {
        let l = _.A.getChannel(n),
            a = _.A.getChannel(e.channel_id),
            i = t?.isICYMIGameContentForwarding ? T.VL : a?.guild_id;
        if (null == a && null == i) throw Error("Unable to find original channel for message");
        if (null == l) throw Error("Unable to find destination channel for message");
        let s = O.Ay.parse(l, ""),
            r = {
                guild_id: i,
                channel_id: e.channel_id,
                message_id: e.id,
                type: N.S.FORWARD,
                forward_only:
                    t?.onlyAttachmentIds != null || t?.onlyEmbedIndices != null
                        ? { attachment_ids: t.onlyAttachmentIds, embed_indices: t.onlyEmbedIndices }
                        : void 0,
            },
            o = 0,
            u = t?.withMessage;
        if (null != u) {
            let [e, n] = (0, V.Ay)(u);
            e && ((u = n), (o = (0, F.UI)(o, U.pr7.SUPPRESS_NOTIFICATIONS)));
        }
        (await D.A.sendMessage(l.id, s, !1, {
            messageReference: r,
            location: B.Hx.FORWARDING,
            eagerDispatch: !1,
            flags: o,
        }),
            null == u ||
                "" === u ||
                (0, G.lP)(l, L.A) ||
                (await D.A.sendMessage(l.id, O.Ay.parse(l, u), !1, { location: B.Hx.FORWARDING, flags: o })));
    },
    sendForwards: (e, n, t) => M()(n.map((n) => H.sendForward(e, n, t))),
};
var W = t(530912),
    Q = t(71393),
    X = t(287809);
function J(e) {
    if (!e.isPrivate()) {
        let n = Q.A.getGuild(e.guild_id);
        return null != n && n.features.has(U.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let n = X.default.getUser(e);
        return null != n && n.isStaff();
    });
}
var K = t(355622),
    Y = t(479909),
    q = t(294454),
    z = t(660183),
    Z = t(837695);
function $(e) {
    let {
            message: n,
            canSend: t,
            selectedDestinations: i,
            isSending: s,
            onSend: r,
            inputValue: o,
            setInputValue: u,
        } = e,
        c = (0, y.A)(),
        d = (0, G.QK)(i),
        h = (0, W.VF)(),
        { textValue: m, richValue: g } = o,
        [f, x] = a.useState(!1),
        C = a.useCallback(() => x(!0), []),
        A = a.useCallback(() => x(!1), []),
        w = a.useCallback(
            (e, t, l) => {
                (u({ textValue: t, richValue: l }),
                    null != n && (p.A.saveDraft(n.channel_id, t, I.C.ForwardContextMessage), h(n.channel_id, n.id)));
            },
            [h, n, u],
        ),
        v = a.useCallback(() => {
            (null != n && p.A.clearDraft(n.channel_id, I.C.ForwardContextMessage), r(m));
        }, [n, r, m]),
        b = a.useCallback(
            () => (s || !t || m.length > c || v(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [v, m, c, t, s],
        );
    return (0, l.jsx)(Y.Ay, {
        innerClassName: Z.OG,
        onChange: w,
        placeholder: z.intl.string(z.t.ZroO3G),
        channel: d,
        textValue: m,
        richValue: g,
        type: K.oU.FORWARD_MESSAGE_INPUT,
        onBlur: A,
        onFocus: C,
        focused: f,
        onSubmit: b,
        parentModalKey: q.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
var ee = t(503698),
    en = t.n(ee),
    et = t(477262),
    el = t(65154),
    ea = t(191023),
    ei = t(588975),
    es = t(614529),
    er = t(602853),
    eo = t(606348),
    eu = t(957806);
function ec(e) {
    let { checkpointData: n } = e,
        t = n.cardId ?? 0,
        a = (0, er.r)(eo.f[t].primaryColor).hex();
    return (0, l.jsx)("img", { alt: "", style: { backgroundColor: a }, width: 56, height: 56, src: (0, eu.OW)(t) });
}
var ed = t(443155);
function eh(e) {
    let { checkpointData: n } = e;
    switch (n.version) {
        case ed.wk.V2025:
            return (0, l.jsx)(ec, { checkpointData: n });
        case ed.wk.V2026:
        default:
            return null;
    }
}
var em = t(573435),
    eg = t(619517),
    ef = t(448381),
    ex = t(521981),
    eC = t(438729),
    ep = t(885386),
    eA = t(659674),
    ew = t(739126);
function ev(e) {
    let { message: n, forwardOptions: t, channel: s } = e,
        o = ep.hH.useSetting(),
        {
            attachments: u,
            embeds: d,
            hasContent: h,
            contentMessage: g,
        } = (function (e) {
            let { message: n, channel: t, forwardOptions: l } = e,
                a = l?.onlyAttachmentIds,
                i = l?.onlyEmbedIndices,
                s = n.messageSnapshots[0]?.message ?? n,
                o = s.attachments;
            null != a ? (o = s.attachments.filter((e) => a.includes(e.id))) : null != i && (o = []);
            let u = [];
            return (
                (0, r.bG)([L.A], () => null != t && !(0, eA.fS)(t, L.A) && (0, eA.ax)(n)) ||
                    ((u = s.embeds),
                    null != i ? (u = s.embeds.filter((e, n) => i.includes(n))) : null != a && (u = [])),
                (null != i || ("" === s.content && u.length > 0)) &&
                    (s = s.set("content", u.map((e) => e.url).join("\n"))),
                "" === s.content &&
                    s.embeds[0]?.rawDescription != null &&
                    (s = s.set("content", s.embeds[0].rawDescription)),
                { attachments: o, embeds: u, hasContent: "" !== s.content && null == a, contentMessage: s }
            );
        })({ message: n, channel: s, forwardOptions: t }),
        f = (0, es._S)(g),
        x = a.useMemo(
            () =>
                h
                    ? (0, ex.Ay)(n, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: g,
                      }).content
                    : null,
            [g, h, n],
        ),
        C = u.length,
        p = null,
        A = null,
        w = null;
    if (C > 0 || d.length > 0) {
        let e = (0, i.countBy)(u, (e) => (0, ef.NI)(e, !0)),
            n = e.IMAGE ?? 0,
            t = e.VIDEO ?? 0;
        (n > 0 && t > 0
            ? ((p = z.intl.formatToPlainString(z.t.Lr0Top, { image_count: n, video_count: t })), (A = et.s))
            : t > 0
              ? ((p = z.intl.formatToPlainString(z.t.SJ6pPX, { count: t })), (A = el.S))
              : n > 0
                ? ((p = z.intl.formatToPlainString(z.t.h4pFfU, { count: n })), (A = 1 === n ? ea.ImageIcon : et.s))
                : ((p = z.intl.formatToPlainString(z.t["89ihS8"], { count: C })), (A = ei.P)),
            t > 0 && C === t
                ? (w = (0, l.jsxs)("div", {
                      className: en()(ew.cR, ew.JZ),
                      children: [
                          (0, l.jsx)(eg.Ay, { className: ew.xn, src: u[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(el.S, { className: ew.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : C > 0
                  ? (w = (0, l.jsx)("div", {
                        className: ew.cR,
                        children: (0, l.jsx)(eg.Ay, { src: u[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : d[0]?.thumbnail?.proxyURL != null &&
                    (w = (0, l.jsx)("div", {
                        className: ew.cR,
                        children: (0, l.jsx)(eg.Ay, { src: d[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    })));
    }
    return (
        C > 1 &&
            null != w &&
            (w = (0, l.jsxs)("div", {
                className: ew.EW,
                children: [
                    (0, l.jsx)(em.Ay, {
                        mask: em.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: w,
                    }),
                    (0, l.jsxs)(c.E, {
                        className: ew.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", C - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: ew.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: ew.FG,
                    children: [
                        null != f && (0, l.jsx)(c.E, { variant: "text-md/medium", children: (0, es.b5)(f) }),
                        h &&
                            (0, l.jsx)(eC.Ay, {
                                className: en()(ew.vp, C > 0 && ew.NL),
                                message: n,
                                content: x,
                                compact: o,
                            }),
                        C > 0 &&
                            (0, l.jsxs)("div", {
                                className: ew.kp,
                                children: [
                                    null != A &&
                                        (0, l.jsx)(A, {
                                            size: "custom",
                                            width: h ? 18 : 20,
                                            color: m.A.colors.TEXT_MUTED,
                                        }),
                                    null != p &&
                                        (0, l.jsx)(c.E, {
                                            variant: h ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: p,
                                        }),
                                ],
                            }),
                    ],
                }),
                w,
                null != f && (0, l.jsx)("div", { className: ew.cR, children: (0, l.jsx)(eh, { checkpointData: f }) }),
            ],
        })
    );
}
var eb = t(61916);
let ey = (0, v.Ld)();
function ej() {
    return (0, l.jsx)("div", {
        className: Z.wV,
        children: (0, l.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: z.intl.string(z.t.V6nAfF),
        }),
    });
}
function eS(e) {
    let {
            message: n,
            initialSelectedDestinations: v = [],
            forwardOptions: P,
            onClose: M,
            onRequestSent: N,
            customTitle: F,
            customSubtitle: D,
            customPreview: T,
            customSendHandler: O,
            customValidateDestination: V,
            additionalActions: L,
            channelFilter: U,
            source: B,
            ...Q
        } = e,
        K = n?.channel_id,
        Y = n?.id,
        ee = a.useMemo(() => (null != K ? (0, S._5)(K) : void 0), [K]),
        [en, et] = a.useState(!1),
        el = (0, r.bG)(
            [R.A],
            () => ("checkpoint" === B ? n : null != n ? (R.A.getMessage(n.channel_id, n.id) ?? n) : void 0),
            [n, B],
        ),
        ea = (0, r.bG)([_.A], () => (null != K ? _.A.getChannel(K) : void 0), [K]),
        ei = (0, W.Jf)(),
        es = (0, W.nL)(),
        er = a.useRef(0),
        eo = a.useRef(0),
        [eu, ec] = a.useState(v),
        ed = eu.length,
        eh = ed >= 5,
        em = (0, G.QK)(eu),
        eg = (0, G.l2)(eu),
        ef = (0, r.bG)([I.A], () => (null != el ? I.A.getDraft(el.channel_id, I.C.ForwardContextMessage) : "")),
        [ex, eC] = a.useState(() => (0, w.ur)(ef)),
        ep = (0, G.M6)(eu),
        eA = (0, y.A)(),
        [ew, eS] = a.useState(""),
        { results: ek, updateSearchText: e_ } = (0, k.R)({
            selectedDestinations: eu,
            originDestination: ee,
            includeMissingDMs: !0,
            channelFilter: U,
        }),
        eI = a.useCallback(
            (e) => {
                (eS(e), e_(e));
            },
            [e_],
        ),
        eR = a.useCallback(
            (e) => {
                (eI(e), (eo.current += 1), "" !== e && null != K && null != Y && es(K, Y));
            },
            [K, Y, es, eI],
        ),
        eE = a.useCallback(() => {
            eI("");
        }, [eI]),
        eP = a.useCallback(async () => {
            (null != K &&
                null != Y &&
                (0, W.hH)({
                    channelId: K,
                    messageId: Y,
                    numDestinationChanges: er.current,
                    numQueryChanges: eo.current,
                }),
                await M());
        }, [K, Y, M]),
        eM = a.useRef(null);
    a.useEffect(() => {
        "" === ew && eM.current?.focus();
    }, [ew]);
    let eN = a.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, d.P0)({
                            text: z.intl.string(z.t.kwmYkt),
                            icon: h.t,
                            iconColor: m.A.colors.ICON_FEEDBACK_POSITIVE,
                        });
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eF = a.useCallback(
            (e, n) => {
                null != K && null != Y && ei(K, Y, "" !== ew);
                let t = !eu.some((n) => {
                    let { type: t, id: l } = n;
                    return t === e.type && l === e.id;
                });
                if (!t || !eh) {
                    if (null != n) {
                        let e = t ? z.t.u2qHzE : z.t["+yF0ds"];
                        u.O.announce(z.intl.formatToPlainString(e, { name: n, count: t ? ed + 1 : ed - 1 }), "polite");
                    }
                    ((er.current += 1),
                        t && eI(""),
                        ec((n) => {
                            let t = n.findIndex((n) => {
                                let { type: t, id: l } = n;
                                return t === e.type && l === e.id;
                            });
                            if (-1 === t) return [e, ...n];
                            let l = [...n];
                            return (l.splice(t, 1), l);
                        }));
                }
            },
            [K, ed, eh, Y, ew, eu, eI, ei],
        ),
        eD = a.useCallback(
            async function (e) {
                let {
                    withMessage: a,
                    transitionToDestination: i,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != O)
                    return void (await O(e, { withMessage: a, transitionToDestination: i, closeAfterSend: s }, et));
                if (null == K || null == Y)
                    return void (0, d.P0)({ text: z.intl.string(z.t.R0RpRX), variant: "critical" });
                let r = R.A.getMessage(K, Y) ?? n;
                if (null == r) return void (0, d.P0)({ text: z.intl.string(z.t.R0RpRX), variant: "critical" });
                et(!0);
                let o = (await Promise.all(e.map(S.pk))).filter(E.Vq);
                if (
                    (function (e, n) {
                        if (!X.default.getCurrentUser()?.isStaff()) return !1;
                        let t = _.A.getChannel(e.channel_id);
                        return (
                            null != t &&
                            !!J(t) &&
                            n.some((e) => {
                                let n = _.A.getChannel(e);
                                return !(null == n || n.isPrivate()) && !J(n);
                            })
                        );
                    })(r, o) &&
                    !(await new Promise((e) => {
                        (0, g.openModalLazy)(async () => {
                            let { default: n } = await t.e("351954").then(t.bind(t, 156073));
                            return (t) => (0, l.jsx)(n, { ...t, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void et(!1);
                (s && (0, q.Be)(),
                    N?.(),
                    i &&
                        (await b.A.fetchMessages({ channelId: o[0] }),
                        (0, j.iN)(o[0], { openTextInVoiceIfVoiceChannel: !0 })));
                let u = await H.sendForwards(r, o, { ...P, withMessage: a }),
                    c = o.some((e) => {
                        let n = _.A.getChannel(e);
                        return null != n && n.rateLimitPerUser > 0;
                    });
                if (
                    u.every((e) => {
                        let { status: n } = e;
                        return "fulfilled" === n;
                    })
                ) {
                    ((0, W.TA)({
                        channelId: K,
                        messageId: Y,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: o.length,
                        numDestinationChanges: er.current,
                        numQueryChanges: eo.current,
                        anyDestinationHasSlowmode: c,
                    }),
                        eN());
                    return;
                }
                (0, W.TA)({
                    channelId: K,
                    messageId: Y,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: o.length,
                    numDestinationChanges: er.current,
                    numQueryChanges: eo.current,
                    anyDestinationHasSlowmode: c,
                });
                let h = e.filter((e, n) => "rejected" === u[n].status);
                (0, q.vK)({ message: r, failedDestinations: h, forwardOptions: P });
            },
            [K, P, Y, n, N, eN, O],
        ),
        eT = a.useCallback(
            (e) => {
                eD(eu, { withMessage: e, transitionToDestination: 1 === eu.length, closeAfterSend: !0 });
            },
            [eD, eu],
        ),
        eO = a.useCallback(() => {
            (null != el && p.A.clearDraft(el.channel_id, I.C.ForwardContextMessage), eT(ex.textValue));
        }, [el, ex.textValue, eT]),
        eV = (0, eb.s)({
            rowData: ek,
            message: el,
            originChannel: ea,
            selectedDestinations: eu,
            handleToggleDestination: eF,
            disableSelection: eh,
            validateDestination: V,
        }),
        eL = a.useRef(null),
        eG = (0, A.A)("forward-modal", eL),
        eU = a.useMemo(
            () =>
                ek.length > 0
                    ? eV
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(ej, {}), rowHeight: 72 },
            [ek, eV],
        ),
        eB = ed <= 1 ? z.intl.string(z.t.TXNS7S) : z.intl.formatToPlainString(z.t.jWtYUm, { count: ed });
    return (0, l.jsx)(s.hD, {
        navigator: eG,
        children: (0, l.jsx)(s.PR, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, l.jsx)(o.a, {
                    ...Q,
                    onClose: eP,
                    title: F ?? z.intl.string(z.t["+SkRRj"]),
                    subtitle:
                        D ??
                        (eh ? z.intl.formatToPlainString(z.t["3Fbkir"], { count: 5 }) : z.intl.string(z.t["VA+btJ"])),
                    input: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(f.I, {
                                ref: eM,
                                query: ew,
                                onChange: eR,
                                onClear: eE,
                                placeholder: z.intl.string(z.t["5h0QOP"]),
                                "aria-label": z.intl.string(z.t["5h0QOP"]),
                                autoFocus: !0,
                            }),
                            eg.length > 0 &&
                                (0, l.jsx)(x.A, {
                                    id: ey,
                                    children: z.intl.formatToPlainString(z.t["5X5Oe2"], { names: eg.join(", ") }),
                                }),
                        ],
                    }),
                    preview:
                        T ??
                        (null != el &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ev, { message: el, forwardOptions: P, channel: em }),
                                    ep.length > 0 &&
                                        ex.textValue.length > 0 &&
                                        (0, l.jsx)(c.E, {
                                            className: Z.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: z.intl.format(z.t.xJFpij, {
                                                count: ep.length,
                                                channelNames: ep.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, l.jsx)($, {
                        message: el,
                        canSend: ed > 0,
                        selectedDestinations: eu,
                        isSending: en,
                        onSend: eT,
                        inputValue: ex,
                        setInputValue: eC,
                    }),
                    actions: [
                        ...(L ?? []),
                        {
                            variant: "primary",
                            text: eB,
                            "aria-describedby": eg.length > 0 ? ey : void 0,
                            onClick: eO,
                            disabled: ed <= 0 || ex.textValue.length > eA,
                            loading: en,
                            icon: C.SendMessageIcon,
                            iconPosition: "end",
                        },
                    ],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...eU,
                        ...t,
                        innerRole: void 0,
                        ref: (e) => {
                            ((eL.current = e), (n.current = e?.getScrollerNode() ?? null));
                        },
                    },
                });
            },
        }),
    });
}
