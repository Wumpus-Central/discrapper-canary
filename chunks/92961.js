t.d(n, { ForwardModal: () => eP });
var l = t(477900),
    a = t(582128),
    i = t(435558),
    r = t(837381),
    s = t(855986),
    o = t(189213),
    c = t(765178),
    u = t(834730),
    d = t(858899),
    h = t(292801),
    m = t(646514),
    g = t(192308),
    f = t(683438),
    x = t(140735),
    C = t(559647),
    A = t(465532),
    p = t(928039),
    b = t(408018),
    w = t(915089),
    y = t(123363),
    v = t(135621),
    j = t(378570),
    I = t(223863),
    S = t(151054),
    k = t(734057),
    R = t(31717),
    _ = t(596344),
    P = t(403362),
    E = t(762230),
    N = t(665260),
    F = t(138399),
    M = t(596720),
    D = t(451909),
    O = t(677413),
    T = t(576705),
    V = t(969223),
    L = t(652215),
    U = t(381941);
let G = {
    async sendForward(e, n, t) {
        let l = k.A.getChannel(n),
            a = k.A.getChannel(e.channel_id),
            i = t?.isICYMIGameContentForwarding ? M.VL : a?.guild_id;
        if (null == a && null == i) throw Error("Unable to find original channel for message");
        if (null == l) throw Error("Unable to find destination channel for message");
        let r = D.Ay.parse(l, ""),
            s = {
                guild_id: i,
                channel_id: e.channel_id,
                message_id: e.id,
                type: E.S.FORWARD,
                forward_only:
                    t?.onlyAttachmentIds != null || t?.onlyEmbedIndices != null
                        ? { attachment_ids: t.onlyAttachmentIds, embed_indices: t.onlyEmbedIndices }
                        : void 0,
            },
            o = 0,
            c = t?.withMessage;
        if (null != c) {
            let [e, n] = (0, O.Ay)(c);
            e && ((c = n), (o = (0, N.UI)(o, L.pr7.SUPPRESS_NOTIFICATIONS)));
        }
        (await F.A.sendMessage(l.id, r, !1, {
            messageReference: s,
            location: U.Hx.FORWARDING,
            eagerDispatch: !1,
            flags: o,
        }),
            null == c ||
                "" === c ||
                (0, V.lP)(l, T.A) ||
                (await F.A.sendMessage(l.id, D.Ay.parse(l, c), !1, { location: U.Hx.FORWARDING, flags: o })));
    },
    sendForwards: (e, n, t) => Promise.allSettled(n.map((n) => G.sendForward(e, n, t))),
};
var H = t(530912),
    B = t(71393),
    W = t(287809);
function Q(e) {
    if (!e.isPrivate()) {
        let n = B.A.getGuild(e.guild_id);
        return null != n && n.features.has(L.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let n = W.default.getUser(e);
        return null != n && n.isStaff();
    });
}
var K = t(355622),
    X = t(989161),
    Y = t(294454),
    J = t(792996),
    q = t(837695);
function z(e) {
    let {
            message: n,
            canSend: t,
            selectedDestinations: i,
            isSending: r,
            onSend: s,
            inputValue: o,
            setInputValue: c,
        } = e,
        u = (0, v.A)(),
        d = (0, V.QK)(i),
        h = (0, H.VF)(),
        { textValue: m, richValue: g } = o,
        [f, x] = a.useState(!1),
        C = a.useCallback(() => x(!0), []),
        p = a.useCallback(() => x(!1), []),
        b = a.useCallback(
            (e, t, l) => {
                (c({ textValue: t, richValue: l }),
                    null != n && (A.A.saveDraft(n.channel_id, t, R.C.ForwardContextMessage), h(n.channel_id, n.id)));
            },
            [h, n, c],
        ),
        w = a.useCallback(() => {
            (null != n && A.A.clearDraft(n.channel_id, R.C.ForwardContextMessage), s(m));
        }, [n, s, m]),
        y = a.useCallback(
            () => (r || !t || m.length > u || w(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [w, m, u, t, r],
        );
    return (0, l.jsx)(X.Ay, {
        innerClassName: q.OG,
        onChange: b,
        placeholder: J.intl.string(J.t.ZroO3G),
        channel: d,
        textValue: m,
        richValue: g,
        type: K.oU.FORWARD_MESSAGE_INPUT,
        onBlur: p,
        onFocus: C,
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
    ea = t(819648),
    ei = t(602853),
    er = t(252307),
    es = t(989238);
function eo(e) {
    let { checkpointData: n } = e,
        t = n.cardId ?? 0,
        a = (0, ei.r)(er.f[t].primaryColor).hex();
    return (0, l.jsx)("img", { alt: "", style: { backgroundColor: a }, width: 56, height: 56, src: (0, es.OW)(t) });
}
var ec = t(366056),
    eu = t(373955),
    ed = t(142617),
    eh = t(259204),
    em = t(663302);
function eg(e) {
    let { checkpointData: n } = e,
        t = (0, ed.Hd)("Checkpoint2026ForwardPreview"),
        { character: a } = n,
        { secondaryBackgroundColor: i } = (0, eu.j)(n.cardColorPalette);
    return t
        ? (0, l.jsx)("div", {
              className: em.V,
              style: { backgroundColor: i },
              children:
                  null != a
                      ? (0, l.jsx)(eh.A, { character: a, size: 56, className: em.G })
                      : (0, l.jsx)(ec.ExperimentalCheckpointIcon, { color: m.A.colors.ICON_OVERLAY_DARK }),
          })
        : null;
}
var ef = t(532294);
function ex(e) {
    let { checkpointData: n } = e;
    switch (n.version) {
        case ef.wk.V2025:
            return (0, l.jsx)(eo, { checkpointData: n });
        case ef.wk.V2026:
            return (0, l.jsx)(eg, { checkpointData: n });
        default:
            return null;
    }
}
var eC = t(573435),
    eA = t(619517),
    ep = t(949244),
    eb = t(74096),
    ew = t(538355),
    ey = t(253932),
    ev = t(659674),
    ej = t(739126);
let eI = { formatInline: !0, allowLinks: !0, allowHeading: !0, allowList: !0, hideSimpleEmbedContent: !1 };
function eS(e) {
    let { message: n, forwardOptions: t, channel: r } = e,
        o = ey.hH.useSetting(),
        {
            attachments: c,
            embeds: d,
            hasContent: h,
            contentMessage: g,
        } = (function (e) {
            let { message: n, channel: t, forwardOptions: l } = e,
                a = l?.onlyAttachmentIds,
                i = l?.onlyEmbedIndices,
                r = n.messageSnapshots[0]?.message ?? n,
                o = r.attachments;
            null != a ? (o = r.attachments.filter((e) => a.includes(e.id))) : null != i && (o = []);
            let c = [];
            return (
                (0, s.bG)([T.A], () => null != t && !(0, ev.fS)(t, T.A) && (0, ev.ax)(n)) ||
                    ((c = r.embeds),
                    null != i ? (c = r.embeds.filter((e, n) => i.includes(n))) : null != a && (c = [])),
                (null != i || ("" === r.content && c.length > 0)) &&
                    (r = r.set("content", c.map((e) => e.url).join("\n"))),
                "" === r.content &&
                    r.embeds[0]?.rawDescription != null &&
                    (r = r.set("content", r.embeds[0].rawDescription)),
                { attachments: o, embeds: c, hasContent: "" !== r.content && null == a, contentMessage: r }
            );
        })({ message: n, channel: r, forwardOptions: t }),
        f = (0, ea._S)(g),
        x = a.useMemo(() => n.merge({ content: g.content, embeds: g.embeds, customRenderedContent: null }), [g, n]),
        { content: C } = (0, ew.A)(h ? x : null, eI),
        A = c.length,
        p = null,
        b = null,
        w = null;
    if (A > 0 || d.length > 0) {
        let e = (0, i.countBy)(c, (e) => (0, ep.NI)(e, !0)),
            n = e.IMAGE ?? 0,
            t = e.VIDEO ?? 0;
        (n > 0 && t > 0
            ? ((p = J.intl.formatToPlainString(J.t.Lr0Top, { image_count: n, video_count: t })), (b = ee.ImagesIcon))
            : t > 0
              ? ((p = J.intl.formatToPlainString(J.t.SJ6pPX, { count: t })), (b = en.CirclePlayIcon))
              : n > 0
                ? ((p = J.intl.formatToPlainString(J.t.h4pFfU, { count: n })),
                  (b = 1 === n ? et.ImageIcon : ee.ImagesIcon))
                : ((p = J.intl.formatToPlainString(J.t["89ihS8"], { count: A })), (b = el.AttachmentIcon)),
            t > 0 && A === t
                ? (w = (0, l.jsxs)("div", {
                      className: $()(ej.cR, ej.JZ),
                      children: [
                          (0, l.jsx)(eA.Ay, { className: ej.xn, src: c[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(en.CirclePlayIcon, { className: ej.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : A > 0
                  ? (w = (0, l.jsx)("div", {
                        className: ej.cR,
                        children: (0, l.jsx)(eA.Ay, { src: c[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : d[0]?.thumbnail?.proxyURL != null &&
                    (w = (0, l.jsx)("div", {
                        className: ej.cR,
                        children: (0, l.jsx)(eA.Ay, { src: d[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    })));
    }
    return (
        A > 1 &&
            null != w &&
            (w = (0, l.jsxs)("div", {
                className: ej.EW,
                children: [
                    (0, l.jsx)(eC.Ay, {
                        mask: eC.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: w,
                    }),
                    (0, l.jsxs)(u.E, {
                        className: ej.mB,
                        variant: "body-xs/semibold",
                        color: "text-default",
                        children: ["+", A - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: ej.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: ej.FG,
                    children: [
                        null != f && (0, l.jsx)(u.E, { variant: "body-md/medium", children: (0, ea.b5)(f) }),
                        h &&
                            (0, l.jsx)(eb.Ay, {
                                className: $()(ej.vp, A > 0 && ej.NL),
                                message: n,
                                content: C,
                                compact: o,
                            }),
                        A > 0 &&
                            (0, l.jsxs)("div", {
                                className: ej.kp,
                                children: [
                                    null != b &&
                                        (0, l.jsx)(b, {
                                            size: "custom",
                                            width: h ? 18 : 20,
                                            color: m.A.colors.TEXT_MUTED,
                                        }),
                                    null != p &&
                                        (0, l.jsx)(u.E, {
                                            variant: h ? "body-sm/medium" : "body-md/medium",
                                            color: "text-muted",
                                            children: p,
                                        }),
                                ],
                            }),
                    ],
                }),
                w,
                null != f && (0, l.jsx)("div", { className: ej.cR, children: (0, l.jsx)(ex, { checkpointData: f }) }),
            ],
        })
    );
}
var ek = t(61916);
let eR = (0, w.Ld)();
function e_() {
    return (0, l.jsx)("div", {
        className: q.wV,
        children: (0, l.jsx)(u.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: J.intl.string(J.t.V6nAfF),
        }),
    });
}
function eP(e) {
    let {
            message: n,
            initialSelectedDestinations: w = [],
            forwardOptions: E,
            onClose: N,
            onRequestSent: F,
            customTitle: M,
            customSubtitle: D,
            customPreview: O,
            customSendHandler: T,
            customValidateDestination: L,
            additionalActions: U,
            channelFilter: B,
            source: K,
            ...X
        } = e,
        Z = n?.channel_id,
        $ = n?.id,
        ee = a.useMemo(() => (null != Z ? (0, I._5)(Z) : void 0), [Z]),
        [en, et] = a.useState(!1),
        el = (0, s.bG)(
            [_.A],
            () => ("checkpoint" === K ? n : null != n ? (_.A.getMessage(n.channel_id, n.id) ?? n) : void 0),
            [n, K],
        ),
        ea = (0, s.bG)([k.A], () => (null != Z ? k.A.getChannel(Z) : void 0), [Z]),
        ei = (0, H.Jf)(),
        er = (0, H.nL)(),
        es = a.useRef(0),
        eo = a.useRef(0),
        [ec, eu] = a.useState(w),
        ed = ec.length,
        eh = ed >= 5,
        em = (0, V.QK)(ec),
        eg = (0, V.l2)(ec),
        ef = (0, s.bG)([R.A], () => (null != el ? R.A.getDraft(el.channel_id, R.C.ForwardContextMessage) : "")),
        [ex, eC] = a.useState(() => (0, b.ur)(ef)),
        eA = (0, V.M6)(ec),
        ep = (0, v.A)(),
        [eb, ew] = a.useState(""),
        { results: ey, updateSearchText: ev } = (0, S.R)({
            selectedDestinations: ec,
            originDestination: ee,
            includeMissingDMs: !0,
            channelFilter: B,
        }),
        ej = a.useCallback(
            (e) => {
                (ew(e), ev(e));
            },
            [ev],
        ),
        eI = a.useCallback(
            (e) => {
                (ej(e), (eo.current += 1), "" !== e && null != Z && null != $ && er(Z, $));
            },
            [Z, $, er, ej],
        ),
        eP = a.useCallback(() => {
            ej("");
        }, [ej]),
        eE = a.useCallback(async () => {
            (null != Z &&
                null != $ &&
                (0, H.hH)({
                    channelId: Z,
                    messageId: $,
                    numDestinationChanges: es.current,
                    numQueryChanges: eo.current,
                }),
                await N());
        }, [Z, $, N]),
        eN = a.useRef(null);
    a.useEffect(() => {
        "" === eb && eN.current?.focus();
    }, [eb]);
    let eF = a.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, d.P0)({
                            text: J.intl.string(J.t.kwmYkt),
                            icon: h.ArrowAngleRightUpIcon,
                            iconColor: m.A.colors.ICON_FEEDBACK_POSITIVE,
                        });
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eM = a.useCallback(
            (e, n) => {
                null != Z && null != $ && ei(Z, $, "" !== eb);
                let t = !ec.some((n) => {
                    let { type: t, id: l } = n;
                    return t === e.type && l === e.id;
                });
                if (!t || !eh) {
                    if (null != n) {
                        let e = t ? J.t.u2qHzE : J.t["+yF0ds"];
                        c.O.announce(J.intl.formatToPlainString(e, { name: n, count: t ? ed + 1 : ed - 1 }), "polite");
                    }
                    ((es.current += 1),
                        t && ej(""),
                        eu((n) => {
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
            [Z, ed, eh, $, eb, ec, ej, ei],
        ),
        eD = a.useCallback(
            async function (e) {
                let {
                    withMessage: a,
                    transitionToDestination: i,
                    closeAfterSend: r,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != T)
                    return void (await T(e, { withMessage: a, transitionToDestination: i, closeAfterSend: r }, et));
                if (null == Z || null == $)
                    return void (0, d.P0)({ text: J.intl.string(J.t.R0RpRX), variant: "critical" });
                let s = _.A.getMessage(Z, $) ?? n;
                if (null == s) return void (0, d.P0)({ text: J.intl.string(J.t.R0RpRX), variant: "critical" });
                et(!0);
                let o = (await Promise.all(e.map(I.pk))).filter(P.Vq);
                if (
                    (function (e, n) {
                        if (!W.default.getCurrentUser()?.isStaff()) return !1;
                        let t = k.A.getChannel(e.channel_id);
                        return (
                            null != t &&
                            !!Q(t) &&
                            n.some((e) => {
                                let n = k.A.getChannel(e);
                                return !(null == n || n.isPrivate()) && !Q(n);
                            })
                        );
                    })(s, o) &&
                    !(await new Promise((e) => {
                        (0, g.mM)(async () => {
                            let { default: n } = await t.e(351954).then(t.bind(t, 156073));
                            return (t) => (0, l.jsx)(n, { ...t, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void et(!1);
                (r && (0, Y.Be)(),
                    F?.(),
                    i &&
                        (await y.A.fetchMessages({ channelId: o[0] }),
                        (0, j.iN)(o[0], { openTextInVoiceIfVoiceChannel: !0 })));
                let c = await G.sendForwards(s, o, { ...E, withMessage: a }),
                    u = o.some((e) => {
                        let n = k.A.getChannel(e);
                        return null != n && n.rateLimitPerUser > 0;
                    });
                if (
                    c.every((e) => {
                        let { status: n } = e;
                        return "fulfilled" === n;
                    })
                ) {
                    ((0, H.TA)({
                        channelId: Z,
                        messageId: $,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: o.length,
                        numDestinationChanges: es.current,
                        numQueryChanges: eo.current,
                        anyDestinationHasSlowmode: u,
                    }),
                        eF());
                    return;
                }
                (0, H.TA)({
                    channelId: Z,
                    messageId: $,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: o.length,
                    numDestinationChanges: es.current,
                    numQueryChanges: eo.current,
                    anyDestinationHasSlowmode: u,
                });
                let h = e.filter((e, n) => "rejected" === c[n].status);
                (0, Y.vK)({ message: s, failedDestinations: h, forwardOptions: E });
            },
            [Z, E, $, n, F, eF, T],
        ),
        eO = a.useCallback(
            (e) => {
                eD(ec, { withMessage: e, transitionToDestination: 1 === ec.length, closeAfterSend: !0 });
            },
            [eD, ec],
        ),
        eT = a.useCallback(() => {
            (null != el && A.A.clearDraft(el.channel_id, R.C.ForwardContextMessage), eO(ex.textValue));
        }, [el, ex.textValue, eO]),
        eV = (0, ek.s)({
            rowData: ey,
            message: el,
            originChannel: ea,
            selectedDestinations: ec,
            handleToggleDestination: eM,
            disableSelection: eh,
            validateDestination: L,
        }),
        eL = a.useRef(null),
        eU = (0, p.A)("forward-modal", eL),
        eG = a.useMemo(
            () =>
                ey.length > 0
                    ? eV
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(e_, {}), rowHeight: 72 },
            [ey, eV],
        ),
        eH = ed <= 1 ? J.intl.string(J.t.TXNS7S) : J.intl.formatToPlainString(J.t.jWtYUm, { count: ed });
    return (0, l.jsx)(r.hD, {
        navigator: eU,
        children: (0, l.jsx)(r.PR, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, l.jsx)(o.a, {
                    ...X,
                    onClose: eE,
                    title: M ?? J.intl.string(J.t["+SkRRj"]),
                    subtitle:
                        D ??
                        (eh ? J.intl.formatToPlainString(J.t["3Fbkir"], { count: 5 }) : J.intl.string(J.t["VA+btJ"])),
                    input: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(f.I, {
                                ref: eN,
                                query: eb,
                                onChange: eI,
                                onClear: eP,
                                placeholder: J.intl.string(J.t["5h0QOP"]),
                                "aria-label": J.intl.string(J.t["5h0QOP"]),
                                autoFocus: !0,
                            }),
                            eg.length > 0 &&
                                (0, l.jsx)(x.A, {
                                    id: eR,
                                    children: J.intl.formatToPlainString(J.t["5X5Oe2"], { names: eg.join(", ") }),
                                }),
                        ],
                    }),
                    preview:
                        O ??
                        (null != el &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(eS, { message: el, forwardOptions: E, channel: em }),
                                    eA.length > 0 &&
                                        ex.textValue.length > 0 &&
                                        (0, l.jsx)(u.E, {
                                            className: q.Lt,
                                            variant: "body-sm/normal",
                                            color: "text-feedback-warning",
                                            children: J.intl.format(J.t.xJFpij, {
                                                count: eA.length,
                                                channelNames: eA.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, l.jsx)(z, {
                        message: el,
                        canSend: ed > 0,
                        selectedDestinations: ec,
                        isSending: en,
                        onSend: eO,
                        inputValue: ex,
                        setInputValue: eC,
                    }),
                    actions: [
                        ...(U ?? []),
                        {
                            variant: "primary",
                            text: eH,
                            "aria-describedby": eg.length > 0 ? eR : void 0,
                            onClick: eT,
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
                            ((eL.current = e), (n.current = e?.getScrollerNode() ?? null));
                        },
                    },
                });
            },
        }),
    });
}
