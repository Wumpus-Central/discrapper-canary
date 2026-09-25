t.d(n, { ForwardModal: () => ek });
var l = t(477900),
    a = t(582128),
    i = t(435558),
    s = t(837381),
    r = t(17928),
    o = t(189213),
    u = t(765178),
    c = t(834730),
    d = t(691540),
    h = t(857250),
    m = t(97483),
    g = t(192308),
    f = t(683438),
    x = t(140735),
    C = t(559647),
    A = t(465532),
    p = t(928039),
    w = t(408018),
    b = t(915089),
    v = t(547),
    y = t(135621),
    j = t(378570),
    S = t(446244),
    k = t(151054),
    R = t(734057),
    I = t(31717),
    _ = t(232835),
    E = t(403362),
    F = t(975975),
    M = t.n(F),
    P = t(762230),
    N = t(665260),
    D = t(148494),
    T = t(596720),
    O = t(451909),
    L = t(677413),
    V = t(576705),
    U = t(473511),
    G = t(652215),
    W = t(381941);
let H = {
    async sendForward(e, n, t) {
        let l = R.A.getChannel(n),
            a = R.A.getChannel(e.channel_id),
            i = t?.isICYMIGameContentForwarding ? T.VL : a?.guild_id;
        if (null == a && null == i) throw Error("Unable to find original channel for message");
        if (null == l) throw Error("Unable to find destination channel for message");
        let s = O.Ay.parse(l, ""),
            r = {
                guild_id: i,
                channel_id: e.channel_id,
                message_id: e.id,
                type: P.S.FORWARD,
                forward_only:
                    t?.onlyAttachmentIds != null || t?.onlyEmbedIndices != null
                        ? { attachment_ids: t.onlyAttachmentIds, embed_indices: t.onlyEmbedIndices }
                        : void 0,
            },
            o = 0,
            u = t?.withMessage;
        if (null != u) {
            let [e, n] = (0, L.Ay)(u);
            e && ((u = n), (o = (0, N.UI)(o, G.pr7.SUPPRESS_NOTIFICATIONS)));
        }
        (await D.A.sendMessage(l.id, s, !1, {
            messageReference: r,
            location: W.Hx.FORWARDING,
            eagerDispatch: !1,
            flags: o,
        }),
            null == u ||
                "" === u ||
                (0, U.lP)(l, V.A) ||
                (await D.A.sendMessage(l.id, O.Ay.parse(l, u), !1, { location: W.Hx.FORWARDING, flags: o })));
    },
    sendForwards: (e, n, t) => M()(n.map((n) => H.sendForward(e, n, t))),
};
var B = t(530912),
    Q = t(71393),
    X = t(287809);
function J(e) {
    if (!e.isPrivate()) {
        let n = Q.A.getGuild(e.guild_id);
        return null != n && n.features.has(G.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let n = X.default.getUser(e);
        return null != n && n.isStaff();
    });
}
var Y = t(355622),
    q = t(959070),
    z = t(294454),
    K = t(375708),
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
        d = (0, U.QK)(i),
        h = (0, B.VF)(),
        { textValue: m, richValue: g } = o,
        [f, x] = a.useState(!1),
        C = a.useCallback(() => x(!0), []),
        p = a.useCallback(() => x(!1), []),
        w = a.useCallback(
            (e, t, l) => {
                (u({ textValue: t, richValue: l }),
                    null != n && (A.A.saveDraft(n.channel_id, t, I.C.ForwardContextMessage), h(n.channel_id, n.id)));
            },
            [h, n, u],
        ),
        b = a.useCallback(() => {
            (null != n && A.A.clearDraft(n.channel_id, I.C.ForwardContextMessage), r(m));
        }, [n, r, m]),
        v = a.useCallback(
            () => (s || !t || m.length > c || b(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [b, m, c, t, s],
        );
    return (0, l.jsx)(q.Ay, {
        innerClassName: Z.OG,
        onChange: w,
        placeholder: K.intl.string(K.t.ZroO3G),
        channel: d,
        textValue: m,
        richValue: g,
        type: Y.oU.FORWARD_MESSAGE_INPUT,
        onBlur: p,
        onFocus: C,
        focused: f,
        onSubmit: v,
        parentModalKey: z.aU,
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
    es = t(661531),
    er = t(114070),
    eo = t(602853),
    eu = t(606348),
    ec = t(957806);
function ed(e) {
    let { checkpointData: n } = e,
        t = n.cardId ?? 0,
        a = (0, eo.r)(eu.f[t].primaryColor).hex();
    return (0, l.jsx)("img", { alt: "", style: { backgroundColor: a }, width: 56, height: 56, src: (0, ec.OW)(t) });
}
var eh = t(532294);
function em(e) {
    let { checkpointData: n } = e;
    switch (n.version) {
        case eh.wk.V2025:
            return (0, l.jsx)(ed, { checkpointData: n });
        case eh.wk.V2026:
        default:
            return null;
    }
}
var eg = t(573435),
    ef = t(619517),
    ex = t(448381),
    eC = t(521981),
    eA = t(438729),
    ep = t(885386),
    ew = t(659674),
    eb = t(739126);
function ev(e) {
    let { message: n, forwardOptions: t, channel: s } = e,
        o = ep.hH.useSetting(),
        {
            attachments: u,
            embeds: d,
            hasContent: h,
            contentMessage: m,
        } = (function (e) {
            let { message: n, channel: t, forwardOptions: l } = e,
                a = l?.onlyAttachmentIds,
                i = l?.onlyEmbedIndices,
                s = n.messageSnapshots[0]?.message ?? n,
                o = s.attachments;
            null != a ? (o = s.attachments.filter((e) => a.includes(e.id))) : null != i && (o = []);
            let u = [];
            return (
                (0, r.bG)([V.A], () => null != t && !(0, ew.fS)(t, V.A) && (0, ew.ax)(n)) ||
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
        g = (0, er._S)(m),
        f = a.useMemo(
            () =>
                h
                    ? (0, eC.Ay)(n, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: m,
                      }).content
                    : null,
            [m, h, n],
        ),
        x = u.length,
        C = null,
        A = null,
        p = null;
    if (x > 0 || d.length > 0) {
        let e = (0, i.countBy)(u, (e) => (0, ex.NI)(e, !0)),
            n = e.IMAGE ?? 0,
            t = e.VIDEO ?? 0;
        (n > 0 && t > 0
            ? ((C = K.intl.formatToPlainString(K.t.Lr0Top, { image_count: n, video_count: t })), (A = et.s))
            : t > 0
              ? ((C = K.intl.formatToPlainString(K.t.SJ6pPX, { count: t })), (A = el.S))
              : n > 0
                ? ((C = K.intl.formatToPlainString(K.t.h4pFfU, { count: n })), (A = 1 === n ? ea.ImageIcon : et.s))
                : ((C = K.intl.formatToPlainString(K.t["89ihS8"], { count: x })), (A = ei.P)),
            t > 0 && x === t
                ? (p = (0, l.jsxs)("div", {
                      className: en()(eb.cR, eb.JZ),
                      children: [
                          (0, l.jsx)(ef.Ay, { className: eb.xn, src: u[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(el.S, { className: eb.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : x > 0
                  ? (p = (0, l.jsx)("div", {
                        className: eb.cR,
                        children: (0, l.jsx)(ef.Ay, { src: u[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : d[0]?.thumbnail?.proxyURL != null &&
                    (p = (0, l.jsx)("div", {
                        className: eb.cR,
                        children: (0, l.jsx)(ef.Ay, { src: d[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    })));
    }
    return (
        x > 1 &&
            null != p &&
            (p = (0, l.jsxs)("div", {
                className: eb.EW,
                children: [
                    (0, l.jsx)(eg.Ay, {
                        mask: eg.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: p,
                    }),
                    (0, l.jsxs)(c.E, {
                        className: eb.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", x - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: eb.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: eb.FG,
                    children: [
                        null != g && (0, l.jsx)(c.E, { variant: "text-md/medium", children: (0, er.b5)(g) }),
                        h &&
                            (0, l.jsx)(eA.Ay, {
                                className: en()(eb.vp, x > 0 && eb.NL),
                                message: n,
                                content: f,
                                compact: o,
                            }),
                        x > 0 &&
                            (0, l.jsxs)("div", {
                                className: eb.kp,
                                children: [
                                    null != A &&
                                        (0, l.jsx)(A, {
                                            size: "custom",
                                            width: h ? 18 : 20,
                                            color: es.A.colors.TEXT_MUTED,
                                        }),
                                    null != C &&
                                        (0, l.jsx)(c.E, {
                                            variant: h ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: C,
                                        }),
                                ],
                            }),
                    ],
                }),
                p,
                null != g && (0, l.jsx)("div", { className: eb.cR, children: (0, l.jsx)(em, { checkpointData: g }) }),
            ],
        })
    );
}
var ey = t(61916);
let ej = (0, b.Ld)();
function eS() {
    return (0, l.jsx)("div", {
        className: Z.wV,
        children: (0, l.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: K.intl.string(K.t.V6nAfF),
        }),
    });
}
function ek(e) {
    let {
            message: n,
            initialSelectedDestinations: b = [],
            forwardOptions: F,
            onClose: M,
            onRequestSent: P,
            customTitle: N,
            customSubtitle: D,
            customPreview: T,
            customSendHandler: O,
            customValidateDestination: L,
            additionalActions: V,
            channelFilter: G,
            source: W,
            ...Q
        } = e,
        Y = n?.channel_id,
        q = n?.id,
        ee = a.useMemo(() => (null != Y ? (0, S._5)(Y) : void 0), [Y]),
        [en, et] = a.useState(!1),
        el = (0, r.bG)(
            [_.A],
            () => ("checkpoint" === W ? n : null != n ? (_.A.getMessage(n.channel_id, n.id) ?? n) : void 0),
            [n, W],
        ),
        ea = (0, r.bG)([R.A], () => (null != Y ? R.A.getChannel(Y) : void 0), [Y]),
        ei = (0, B.Jf)(),
        es = (0, B.nL)(),
        er = a.useRef(0),
        eo = a.useRef(0),
        [eu, ec] = a.useState(b),
        ed = eu.length,
        eh = ed >= 5,
        em = (0, U.QK)(eu),
        eg = (0, U.l2)(eu),
        ef = (0, r.bG)([I.A], () => (null != el ? I.A.getDraft(el.channel_id, I.C.ForwardContextMessage) : "")),
        [ex, eC] = a.useState(() => (0, w.ur)(ef)),
        eA = (0, U.M6)(eu),
        ep = (0, y.A)(),
        [ew, eb] = a.useState(""),
        { results: ek, updateSearchText: eR } = (0, k.R)({
            selectedDestinations: eu,
            originDestination: ee,
            includeMissingDMs: !0,
            channelFilter: G,
        }),
        eI = a.useCallback(
            (e) => {
                (eb(e), eR(e));
            },
            [eR],
        ),
        e_ = a.useCallback(
            (e) => {
                (eI(e), (eo.current += 1), "" !== e && null != Y && null != q && es(Y, q));
            },
            [Y, q, es, eI],
        ),
        eE = a.useCallback(() => {
            eI("");
        }, [eI]),
        eF = a.useCallback(async () => {
            (null != Y &&
                null != q &&
                (0, B.hH)({
                    channelId: Y,
                    messageId: q,
                    numDestinationChanges: er.current,
                    numQueryChanges: eo.current,
                }),
                await M());
        }, [Y, q, M]),
        eM = a.useRef(null);
    a.useEffect(() => {
        "" === ew && eM.current?.focus();
    }, [ew]);
    let eP = a.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, d.P0)((0, h.o)(K.intl.string(K.t.kwmYkt), m.Ck.FORWARD));
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eN = a.useCallback(
            (e, n) => {
                null != Y && null != q && ei(Y, q, "" !== ew);
                let t = !eu.some((n) => {
                    let { type: t, id: l } = n;
                    return t === e.type && l === e.id;
                });
                if (!t || !eh) {
                    if (null != n) {
                        let e = t ? K.t.u2qHzE : K.t["+yF0ds"];
                        u.O.announce(K.intl.formatToPlainString(e, { name: n, count: t ? ed + 1 : ed - 1 }), "polite");
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
            [Y, ed, eh, q, ew, eu, eI, ei],
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
                if (null == Y || null == q) return void (0, d.P0)((0, h.o)(K.intl.string(K.t.R0RpRX), m.Ck.FAILURE));
                let r = _.A.getMessage(Y, q) ?? n;
                if (null == r) return void (0, d.P0)((0, h.o)(K.intl.string(K.t.R0RpRX), m.Ck.FAILURE));
                et(!0);
                let o = (await Promise.all(e.map(S.pk))).filter(E.Vq);
                if (
                    (function (e, n) {
                        if (!X.default.getCurrentUser()?.isStaff()) return !1;
                        let t = R.A.getChannel(e.channel_id);
                        return (
                            null != t &&
                            !!J(t) &&
                            n.some((e) => {
                                let n = R.A.getChannel(e);
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
                (s && (0, z.Be)(),
                    P?.(),
                    i &&
                        (await v.A.fetchMessages({ channelId: o[0] }),
                        (0, j.iN)(o[0], { openTextInVoiceIfVoiceChannel: !0 })));
                let u = await H.sendForwards(r, o, { ...F, withMessage: a }),
                    c = o.some((e) => {
                        let n = R.A.getChannel(e);
                        return null != n && n.rateLimitPerUser > 0;
                    });
                if (
                    u.every((e) => {
                        let { status: n } = e;
                        return "fulfilled" === n;
                    })
                ) {
                    ((0, B.TA)({
                        channelId: Y,
                        messageId: q,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: o.length,
                        numDestinationChanges: er.current,
                        numQueryChanges: eo.current,
                        anyDestinationHasSlowmode: c,
                    }),
                        eP());
                    return;
                }
                (0, B.TA)({
                    channelId: Y,
                    messageId: q,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: o.length,
                    numDestinationChanges: er.current,
                    numQueryChanges: eo.current,
                    anyDestinationHasSlowmode: c,
                });
                let f = e.filter((e, n) => "rejected" === u[n].status);
                (0, z.vK)({ message: r, failedDestinations: f, forwardOptions: F });
            },
            [Y, F, q, n, P, eP, O],
        ),
        eT = a.useCallback(
            (e) => {
                eD(eu, { withMessage: e, transitionToDestination: 1 === eu.length, closeAfterSend: !0 });
            },
            [eD, eu],
        ),
        eO = a.useCallback(() => {
            (null != el && A.A.clearDraft(el.channel_id, I.C.ForwardContextMessage), eT(ex.textValue));
        }, [el, ex.textValue, eT]),
        eL = (0, ey.s)({
            rowData: ek,
            message: el,
            originChannel: ea,
            selectedDestinations: eu,
            handleToggleDestination: eN,
            disableSelection: eh,
            validateDestination: L,
        }),
        eV = a.useRef(null),
        eU = (0, p.A)("forward-modal", eV),
        eG = a.useMemo(
            () =>
                ek.length > 0
                    ? eL
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(eS, {}), rowHeight: 72 },
            [ek, eL],
        ),
        eW = ed <= 1 ? K.intl.string(K.t.TXNS7S) : K.intl.formatToPlainString(K.t.jWtYUm, { count: ed });
    return (0, l.jsx)(s.hD, {
        navigator: eU,
        children: (0, l.jsx)(s.PR, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, l.jsx)(o.a, {
                    ...Q,
                    onClose: eF,
                    title: N ?? K.intl.string(K.t["+SkRRj"]),
                    subtitle:
                        D ??
                        (eh ? K.intl.formatToPlainString(K.t["3Fbkir"], { count: 5 }) : K.intl.string(K.t["VA+btJ"])),
                    input: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(f.I, {
                                ref: eM,
                                query: ew,
                                onChange: e_,
                                onClear: eE,
                                placeholder: K.intl.string(K.t["5h0QOP"]),
                                "aria-label": K.intl.string(K.t["5h0QOP"]),
                                autoFocus: !0,
                            }),
                            eg.length > 0 &&
                                (0, l.jsx)(x.A, {
                                    id: ej,
                                    children: K.intl.formatToPlainString(K.t["5X5Oe2"], { names: eg.join(", ") }),
                                }),
                        ],
                    }),
                    preview:
                        T ??
                        (null != el &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ev, { message: el, forwardOptions: F, channel: em }),
                                    eA.length > 0 &&
                                        ex.textValue.length > 0 &&
                                        (0, l.jsx)(c.E, {
                                            className: Z.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: K.intl.format(K.t.xJFpij, {
                                                count: eA.length,
                                                channelNames: eA.join(", "),
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
                        ...(V ?? []),
                        {
                            variant: "primary",
                            text: eW,
                            "aria-describedby": eg.length > 0 ? ej : void 0,
                            onClick: eO,
                            disabled: ed <= 0 || ex.textValue.length > ep,
                            loading: en,
                            icon: C.SendMessageIcon,
                            iconPosition: "end",
                        },
                    ],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...eG,
                        ...t,
                        innerRole: void 0,
                        ref: (e) => {
                            ((eV.current = e), (n.current = e?.getScrollerNode() ?? null));
                        },
                    },
                });
            },
        }),
    });
}
