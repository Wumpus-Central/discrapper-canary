t.d(n, { ForwardModal: () => ej });
var l = t(477900),
    a = t(582128),
    i = t(435558),
    s = t(837381),
    r = t(17928),
    o = t(189213),
    u = t(765178),
    c = t(834730),
    d = t(376357),
    h = t(192308),
    m = t(683438),
    g = t(140735),
    f = t(559647),
    x = t(465532),
    C = t(928039),
    A = t(408018),
    p = t(915089),
    w = t(547),
    b = t(135621),
    v = t(378570),
    y = t(446244),
    j = t(151054),
    S = t(734057),
    k = t(31717),
    R = t(232835),
    I = t(403362),
    _ = t(975975),
    E = t.n(_),
    F = t(762230),
    M = t(665260),
    P = t(148494),
    N = t(596720),
    D = t(451909),
    T = t(677413),
    O = t(576705),
    L = t(473511),
    V = t(652215),
    U = t(381941);
let G = {
    async sendForward(e, n, t) {
        let l = S.A.getChannel(n),
            a = S.A.getChannel(e.channel_id),
            i = t?.isICYMIGameContentForwarding ? N.VL : a?.guild_id;
        if (null == a && null == i) throw Error("Unable to find original channel for message");
        if (null == l) throw Error("Unable to find destination channel for message");
        let s = D.Ay.parse(l, ""),
            r = {
                guild_id: i,
                channel_id: e.channel_id,
                message_id: e.id,
                type: F.S.FORWARD,
                forward_only:
                    t?.onlyAttachmentIds != null || t?.onlyEmbedIndices != null
                        ? { attachment_ids: t.onlyAttachmentIds, embed_indices: t.onlyEmbedIndices }
                        : void 0,
            },
            o = 0,
            u = t?.withMessage;
        if (null != u) {
            let [e, n] = (0, T.Ay)(u);
            e && ((u = n), (o = (0, M.UI)(o, V.pr7.SUPPRESS_NOTIFICATIONS)));
        }
        (await P.A.sendMessage(l.id, s, !1, {
            messageReference: r,
            location: U.Hx.FORWARDING,
            eagerDispatch: !1,
            flags: o,
        }),
            null == u ||
                "" === u ||
                (0, L.lP)(l, O.A) ||
                (await P.A.sendMessage(l.id, D.Ay.parse(l, u), !1, { location: U.Hx.FORWARDING, flags: o })));
    },
    sendForwards: (e, n, t) => E()(n.map((n) => G.sendForward(e, n, t))),
};
var W = t(530912),
    H = t(71393),
    B = t(287809);
function Q(e) {
    if (!e.isPrivate()) {
        let n = H.A.getGuild(e.guild_id);
        return null != n && n.features.has(V.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let n = B.default.getUser(e);
        return null != n && n.isStaff();
    });
}
var X = t(355622),
    J = t(479909),
    Y = t(294454),
    q = t(660183),
    z = t(837695);
function K(e) {
    let {
            message: n,
            canSend: t,
            selectedDestinations: i,
            isSending: s,
            onSend: r,
            inputValue: o,
            setInputValue: u,
        } = e,
        c = (0, b.A)(),
        d = (0, L.QK)(i),
        h = (0, W.VF)(),
        { textValue: m, richValue: g } = o,
        [f, C] = a.useState(!1),
        A = a.useCallback(() => C(!0), []),
        p = a.useCallback(() => C(!1), []),
        w = a.useCallback(
            (e, t, l) => {
                (u({ textValue: t, richValue: l }),
                    null != n && (x.A.saveDraft(n.channel_id, t, k.C.ForwardContextMessage), h(n.channel_id, n.id)));
            },
            [h, n, u],
        ),
        v = a.useCallback(() => {
            (null != n && x.A.clearDraft(n.channel_id, k.C.ForwardContextMessage), r(m));
        }, [n, r, m]),
        y = a.useCallback(
            () => (s || !t || m.length > c || v(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [v, m, c, t, s],
        );
    return (0, l.jsx)(J.Ay, {
        innerClassName: z.OG,
        onChange: w,
        placeholder: q.intl.string(q.t.ZroO3G),
        channel: d,
        textValue: m,
        richValue: g,
        type: X.oU.FORWARD_MESSAGE_INPUT,
        onBlur: p,
        onFocus: A,
        focused: f,
        onSubmit: y,
        parentModalKey: Y.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
var Z = t(503698),
    $ = t.n(Z),
    ee = t(477262),
    en = t(65154),
    et = t(191023),
    el = t(588975),
    ea = t(661531),
    ei = t(918909),
    es = t(602853),
    er = t(606348),
    eo = t(957806);
function eu(e) {
    let { checkpointData: n } = e,
        t = n.cardId ?? 0,
        a = (0, es.r)(er.f[t].primaryColor).hex();
    return (0, l.jsx)("img", { alt: "", style: { backgroundColor: a }, width: 56, height: 56, src: (0, eo.OW)(t) });
}
var ec = t(443155);
function ed(e) {
    let { checkpointData: n } = e;
    switch (n.version) {
        case ec.wk.V2025:
            return (0, l.jsx)(eu, { checkpointData: n });
        case ec.wk.V2026:
        default:
            return null;
    }
}
var eh = t(573435),
    em = t(619517),
    eg = t(448381),
    ef = t(521981),
    ex = t(438729),
    eC = t(885386),
    eA = t(659674),
    ep = t(739126);
function ew(e) {
    let { message: n, forwardOptions: t, channel: s } = e,
        o = eC.hH.useSetting(),
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
                (0, r.bG)([O.A], () => null != t && !(0, eA.fS)(t, O.A) && (0, eA.ax)(n)) ||
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
        g = (0, ei._S)(m),
        f = a.useMemo(
            () =>
                h
                    ? (0, ef.Ay)(n, {
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
        let e = (0, i.countBy)(u, (e) => (0, eg.NI)(e, !0)),
            n = e.IMAGE ?? 0,
            t = e.VIDEO ?? 0;
        (n > 0 && t > 0
            ? ((C = q.intl.formatToPlainString(q.t.Lr0Top, { image_count: n, video_count: t })), (A = ee.s))
            : t > 0
              ? ((C = q.intl.formatToPlainString(q.t.SJ6pPX, { count: t })), (A = en.S))
              : n > 0
                ? ((C = q.intl.formatToPlainString(q.t.h4pFfU, { count: n })), (A = 1 === n ? et.ImageIcon : ee.s))
                : ((C = q.intl.formatToPlainString(q.t["89ihS8"], { count: x })), (A = el.P)),
            t > 0 && x === t
                ? (p = (0, l.jsxs)("div", {
                      className: $()(ep.cR, ep.JZ),
                      children: [
                          (0, l.jsx)(em.Ay, { className: ep.xn, src: u[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(en.S, { className: ep.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : x > 0
                  ? (p = (0, l.jsx)("div", {
                        className: ep.cR,
                        children: (0, l.jsx)(em.Ay, { src: u[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : d[0]?.thumbnail?.proxyURL != null &&
                    (p = (0, l.jsx)("div", {
                        className: ep.cR,
                        children: (0, l.jsx)(em.Ay, { src: d[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    })));
    }
    return (
        x > 1 &&
            null != p &&
            (p = (0, l.jsxs)("div", {
                className: ep.EW,
                children: [
                    (0, l.jsx)(eh.Ay, {
                        mask: eh.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: p,
                    }),
                    (0, l.jsxs)(c.E, {
                        className: ep.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", x - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: ep.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: ep.FG,
                    children: [
                        null != g && (0, l.jsx)(c.E, { variant: "text-md/medium", children: (0, ei.b5)(g) }),
                        h &&
                            (0, l.jsx)(ex.Ay, {
                                className: $()(ep.vp, x > 0 && ep.NL),
                                message: n,
                                content: f,
                                compact: o,
                            }),
                        x > 0 &&
                            (0, l.jsxs)("div", {
                                className: ep.kp,
                                children: [
                                    null != A &&
                                        (0, l.jsx)(A, {
                                            size: "custom",
                                            width: h ? 18 : 20,
                                            color: ea.A.colors.TEXT_MUTED,
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
                null != g && (0, l.jsx)("div", { className: ep.cR, children: (0, l.jsx)(ed, { checkpointData: g }) }),
            ],
        })
    );
}
var eb = t(61916);
let ev = (0, p.Ld)();
function ey() {
    return (0, l.jsx)("div", {
        className: z.wV,
        children: (0, l.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: q.intl.string(q.t.V6nAfF),
        }),
    });
}
function ej(e) {
    let {
            message: n,
            initialSelectedDestinations: p = [],
            forwardOptions: _,
            onClose: E,
            onRequestSent: F,
            customTitle: M,
            customSubtitle: P,
            customPreview: N,
            customSendHandler: D,
            customValidateDestination: T,
            additionalActions: O,
            channelFilter: V,
            source: U,
            ...H
        } = e,
        X = n?.channel_id,
        J = n?.id,
        Z = a.useMemo(() => (null != X ? (0, y._5)(X) : void 0), [X]),
        [$, ee] = a.useState(!1),
        en = (0, r.bG)(
            [R.A],
            () => ("checkpoint" === U ? n : null != n ? (R.A.getMessage(n.channel_id, n.id) ?? n) : void 0),
            [n, U],
        ),
        et = (0, r.bG)([S.A], () => (null != X ? S.A.getChannel(X) : void 0), [X]),
        el = (0, W.Jf)(),
        ea = (0, W.nL)(),
        ei = a.useRef(0),
        es = a.useRef(0),
        [er, eo] = a.useState(p),
        eu = er.length,
        ec = eu >= 5,
        ed = (0, L.QK)(er),
        eh = (0, L.l2)(er),
        em = (0, r.bG)([k.A], () => (null != en ? k.A.getDraft(en.channel_id, k.C.ForwardContextMessage) : "")),
        [eg, ef] = a.useState(() => (0, A.ur)(em)),
        ex = (0, L.M6)(er),
        eC = (0, b.A)(),
        [eA, ep] = a.useState(""),
        { results: ej, updateSearchText: eS } = (0, j.R)({
            selectedDestinations: er,
            originDestination: Z,
            includeMissingDMs: !0,
            channelFilter: V,
        }),
        ek = a.useCallback(
            (e) => {
                (ep(e), eS(e));
            },
            [eS],
        ),
        eR = a.useCallback(
            (e) => {
                (ek(e), (es.current += 1), "" !== e && null != X && null != J && ea(X, J));
            },
            [X, J, ea, ek],
        ),
        eI = a.useCallback(() => {
            ek("");
        }, [ek]),
        e_ = a.useCallback(async () => {
            (null != X &&
                null != J &&
                (0, W.hH)({
                    channelId: X,
                    messageId: J,
                    numDestinationChanges: ei.current,
                    numQueryChanges: es.current,
                }),
                await E());
        }, [X, J, E]),
        eE = a.useRef(null);
    a.useEffect(() => {
        "" === eA && eE.current?.focus();
    }, [eA]);
    let eF = a.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, d.P0)((0, d.ox)(q.intl.string(q.t.kwmYkt), d.Ck.FORWARD));
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eM = a.useCallback(
            (e, n) => {
                null != X && null != J && el(X, J, "" !== eA);
                let t = !er.some((n) => {
                    let { type: t, id: l } = n;
                    return t === e.type && l === e.id;
                });
                if (!t || !ec) {
                    if (null != n) {
                        let e = t ? q.t.u2qHzE : q.t["+yF0ds"];
                        u.O.announce(q.intl.formatToPlainString(e, { name: n, count: t ? eu + 1 : eu - 1 }), "polite");
                    }
                    ((ei.current += 1),
                        t && ek(""),
                        eo((n) => {
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
            [X, eu, ec, J, eA, er, ek, el],
        ),
        eP = a.useCallback(
            async function (e) {
                let {
                    withMessage: a,
                    transitionToDestination: i,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != D)
                    return void (await D(e, { withMessage: a, transitionToDestination: i, closeAfterSend: s }, ee));
                if (null == X || null == J) return void (0, d.P0)((0, d.ox)(q.intl.string(q.t.R0RpRX), d.Ck.FAILURE));
                let r = R.A.getMessage(X, J) ?? n;
                if (null == r) return void (0, d.P0)((0, d.ox)(q.intl.string(q.t.R0RpRX), d.Ck.FAILURE));
                ee(!0);
                let o = (await Promise.all(e.map(y.pk))).filter(I.Vq);
                if (
                    (function (e, n) {
                        if (!B.default.getCurrentUser()?.isStaff()) return !1;
                        let t = S.A.getChannel(e.channel_id);
                        return (
                            null != t &&
                            !!Q(t) &&
                            n.some((e) => {
                                let n = S.A.getChannel(e);
                                return !(null == n || n.isPrivate()) && !Q(n);
                            })
                        );
                    })(r, o) &&
                    !(await new Promise((e) => {
                        (0, h.openModalLazy)(async () => {
                            let { default: n } = await t.e("351954").then(t.bind(t, 156073));
                            return (t) => (0, l.jsx)(n, { ...t, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void ee(!1);
                (s && (0, Y.Be)(),
                    F?.(),
                    i &&
                        (await w.A.fetchMessages({ channelId: o[0] }),
                        (0, v.iN)(o[0], { openTextInVoiceIfVoiceChannel: !0 })));
                let u = await G.sendForwards(r, o, { ..._, withMessage: a }),
                    c = o.some((e) => {
                        let n = S.A.getChannel(e);
                        return null != n && n.rateLimitPerUser > 0;
                    });
                if (
                    u.every((e) => {
                        let { status: n } = e;
                        return "fulfilled" === n;
                    })
                ) {
                    ((0, W.TA)({
                        channelId: X,
                        messageId: J,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: o.length,
                        numDestinationChanges: ei.current,
                        numQueryChanges: es.current,
                        anyDestinationHasSlowmode: c,
                    }),
                        eF());
                    return;
                }
                (0, W.TA)({
                    channelId: X,
                    messageId: J,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: o.length,
                    numDestinationChanges: ei.current,
                    numQueryChanges: es.current,
                    anyDestinationHasSlowmode: c,
                });
                let m = e.filter((e, n) => "rejected" === u[n].status);
                (0, Y.vK)({ message: r, failedDestinations: m, forwardOptions: _ });
            },
            [X, _, J, n, F, eF, D],
        ),
        eN = a.useCallback(
            (e) => {
                eP(er, { withMessage: e, transitionToDestination: 1 === er.length, closeAfterSend: !0 });
            },
            [eP, er],
        ),
        eD = a.useCallback(() => {
            (null != en && x.A.clearDraft(en.channel_id, k.C.ForwardContextMessage), eN(eg.textValue));
        }, [en, eg.textValue, eN]),
        eT = (0, eb.s)({
            rowData: ej,
            message: en,
            originChannel: et,
            selectedDestinations: er,
            handleToggleDestination: eM,
            disableSelection: ec,
            validateDestination: T,
        }),
        eO = a.useRef(null),
        eL = (0, C.A)("forward-modal", eO),
        eV = a.useMemo(
            () =>
                ej.length > 0
                    ? eT
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(ey, {}), rowHeight: 72 },
            [ej, eT],
        ),
        eU = eu <= 1 ? q.intl.string(q.t.TXNS7S) : q.intl.formatToPlainString(q.t.jWtYUm, { count: eu });
    return (0, l.jsx)(s.hD, {
        navigator: eL,
        children: (0, l.jsx)(s.PR, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, l.jsx)(o.a, {
                    ...H,
                    onClose: e_,
                    title: M ?? q.intl.string(q.t["+SkRRj"]),
                    subtitle:
                        P ??
                        (ec ? q.intl.formatToPlainString(q.t["3Fbkir"], { count: 5 }) : q.intl.string(q.t["VA+btJ"])),
                    input: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(m.I, {
                                ref: eE,
                                query: eA,
                                onChange: eR,
                                onClear: eI,
                                placeholder: q.intl.string(q.t["5h0QOP"]),
                                "aria-label": q.intl.string(q.t["5h0QOP"]),
                                autoFocus: !0,
                            }),
                            eh.length > 0 &&
                                (0, l.jsx)(g.A, {
                                    id: ev,
                                    children: q.intl.formatToPlainString(q.t["5X5Oe2"], { names: eh.join(", ") }),
                                }),
                        ],
                    }),
                    preview:
                        N ??
                        (null != en &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ew, { message: en, forwardOptions: _, channel: ed }),
                                    ex.length > 0 &&
                                        eg.textValue.length > 0 &&
                                        (0, l.jsx)(c.E, {
                                            className: z.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: q.intl.format(q.t.xJFpij, {
                                                count: ex.length,
                                                channelNames: ex.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, l.jsx)(K, {
                        message: en,
                        canSend: eu > 0,
                        selectedDestinations: er,
                        isSending: $,
                        onSend: eN,
                        inputValue: eg,
                        setInputValue: ef,
                    }),
                    actions: [
                        ...(O ?? []),
                        {
                            variant: "primary",
                            text: eU,
                            "aria-describedby": eh.length > 0 ? ev : void 0,
                            onClick: eD,
                            disabled: eu <= 0 || eg.textValue.length > eC,
                            loading: $,
                            icon: f.SendMessageIcon,
                            iconPosition: "end",
                        },
                    ],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...eV,
                        ...t,
                        innerRole: void 0,
                        ref: (e) => {
                            ((eO.current = e), (n.current = e?.getScrollerNode() ?? null));
                        },
                    },
                });
            },
        }),
    });
}
