n.d(t, { Ay: () => T, Ej: () => N, Ls: () => E, j8: () => I }), n(801541);
var s = n(889137),
    i = n(744593),
    a = n(775602),
    r = n(159273),
    l = n(7584),
    o = n(229527),
    c = n(316031),
    d = n(734057),
    u = n(696451),
    h = n(232835),
    m = n(287809),
    x = n(486020),
    w = n(690521),
    p = n(723702),
    g = n(862780),
    A = n(969632),
    f = n(438437),
    j = n(842901),
    S = n(589590),
    y = n(708676),
    v = n(652215),
    C = n(375708);
let b = { channelId: v.dJq, selectedAnswerIds: new Set(), submitting: !1, editing: !1, showResults: !1 };
function N(e, t) {
    for (let n of e) if (("number" == typeof n.emoji.id ? `${n.emoji.id}` : n.emoji.id) === t) return n;
}
function E(e) {
    return null == e.poll || h.A.getMessage(e.channel_id, e.id) === e;
}
function I(e, t) {
    let { formattedExpirationLabel: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: s } = e;
    if (null == s) return;
    let i = e.state === v.cmJ.SENT,
        a = i ? (n ?? (0, y.J)(s.expiry)) : "",
        r = null == a && i,
        {
            selectedAnswerIds: l,
            submitting: m,
            editing: x,
            showResults: w,
        } = t ?? (0, g.xt)(e.getChannelId(), e.id) ?? b,
        p = e.reactions,
        A = !0;
    if (!E(e)) {
        let t = h.A.getMessage(e.channel_id, e.id);
        (A = !e.isSearchHit && null != t), (p = t?.reactions ?? p);
    }
    let f = l.size > 0,
        j = p.some((e) => !0 === e.me_vote),
        S = !x && j,
        C = S || r || w,
        N = i && A && (!j || x || C),
        I = d.A.getChannel(e.getChannelId())?.getGuildId?.(),
        T = null != I ? u.Ay.getSelfMember(I) : null,
        _ = (0, o.TR)(T),
        V = (0, c.Z)(T),
        k = !m && f && !S && i && !_ && !V;
    return {
        poll: s,
        canTapAnswers: N,
        canRemoveVote: S && i && !r,
        canShowVoteCounts: C,
        canSubmitVote: k,
        expirationLabel: a,
        hasSelectedAnswer: f,
        hasVoted: S,
        hasVoteRecorded: j,
        isEditingVote: x,
        isExpired: r,
        isInteractive: A,
        isSent: i,
        reactions: p,
        selectedAnswerIds: l,
        submitting: m,
        tapShouldOpenVotersModal: C,
        showResults: w,
    };
}
function T(e, t) {
    let {
            animateEmoji: n = !1,
            theme: o = "dark",
            formattedExpirationLabel: c,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: u } = e;
    if (null == u) return;
    let h = m.default.getCurrentUser();
    if (null == h) return;
    let g = a.Ay.useReducedMotion,
        y = d.A.getChannel(e.getChannelId())?.getGuildId?.(),
        v = (0, j.T)(h, y),
        b = u.answers,
        E = u.layout_type,
        T = I(e, t, { formattedExpirationLabel: c });
    if (null == T) return;
    let {
            canTapAnswers: _,
            canRemoveVote: V,
            canShowVoteCounts: k,
            canSubmitVote: L,
            expirationLabel: M = C.intl.string(C.t["e+J3JZ"]),
            hasSelectedAnswer: R,
            hasVoted: F,
            isEditingVote: O,
            isExpired: U,
            isInteractive: B,
            reactions: D,
            selectedAnswerIds: W,
            submitting: P,
            tapShouldOpenVotersModal: Q,
            showResults: Y,
        } = T,
        z = (0, A.aw)(D),
        K = C.intl.formatToPlainString(C.t.XRkuof, { count: z }),
        G = Math.max(
            ...b.map((e) => {
                let t = N(D, `${e.answer_id}`);
                return t?.count_details?.vote ?? 0;
            }),
        ),
        H = b.map((e) => {
            let t,
                a = `${e.answer_id}`,
                o = N(D, a),
                c = o?.count_details?.vote ?? 0,
                d = 0 === z ? 0 : c / z,
                u = W.has(a),
                h = c >= G && 0 !== c,
                m = F && (o?.me_vote ?? !1),
                p =
                    ((t = { didSelfVote: m, hasVoted: F, isExpired: U, isSelected: u, isLeader: h, showResults: Y }),
                    (0, s.YW)(t)
                        .with({ isExpired: !0, isLeader: !0, didSelfVote: !0 }, () => "victorSelected")
                        .with({ isExpired: !0, isLeader: !0, didSelfVote: !1 }, () => "victorNotSelected")
                        .with({ isExpired: !0, didSelfVote: !0 }, () => "loserSelected")
                        .with({ isExpired: !0 }, () => "notVoted")
                        .with({ didSelfVote: !0, isExpired: !1 }, () => "voted")
                        .with({ hasVoted: !0, isExpired: !1 }, () => "notVoted")
                        .with({ isSelected: !0 }, () => "selected")
                        .with({ isExpired: !1, showResults: !0 }, () => "notVoted")
                        .otherwise(() => "normalVote"));
            return {
                answerId: a,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: (function (e) {
                        let { animateEmoji: t = !1, size: n = 48 } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (null == e) return;
                        let s = e.animated;
                        null == s && null != e.id && (s = r.Ay.getCustomEmojiById(e.id)?.animated ?? !1);
                        let i = t && (s ?? !1);
                        return {
                            id: null == e.id ? null : `${e.id}`,
                            name: e.name,
                            displayName: null == e.id ? l.Ay.convertSurrogateToName(e.name) : e.name,
                            src:
                                null == e.id
                                    ? w.Ay.getURL(e.name)
                                    : x.Ay.getEmojiURL({ id: e.id, animated: i, size: n }),
                            animated: i,
                        };
                    })(e.poll_media.emoji, { animateEmoji: n }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids,
                },
                isSelected: u,
                isVictor: U && h,
                didSelfVote: m,
                style: p,
                shouldAnimateTransition: P && !g,
                votesPercentage: Math.round(100 * d),
                votes: (0, s.YW)(E)
                    .with(i.Z.IMAGE_ONLY_ANSWERS, () => `(${c.toLocaleString()})`)
                    .otherwise(() => C.intl.formatToPlainString(C.t.XRkuof, { count: c })),
            };
        }),
        J = (0, s.YW)({
            isExpired: U,
            canSubmitVote: L,
            hasVoted: F,
            isEditingVote: O,
            canRemoveVote: V,
            isInteractive: B,
            showResults: Y,
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: C.intl.string(C.t.JwkNU4),
                presentation: "button",
                enabled: R,
                type: "submit",
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: C.intl.string(C.t.XhQEh8),
                presentation: "secondaryButton",
                enabled: !0,
                type: "remove",
            }))
            .with({ hasVoted: !1, showResults: !0 }, () => ({
                label: C.intl.string(C.t.gNj6In),
                presentation: "secondaryButton",
                enabled: !0,
                type: "showVotes",
            }))
            .otherwise(() => ({
                label: C.intl.string(C.t.JwkNU4),
                presentation: "button",
                enabled: L,
                type: "submit",
            })),
        Z = (0, p.isIOS)() ? C.intl.string(C.t["PVATM/"]) : C.intl.string(C.t.cHfFql),
        $ = (0, s.YW)({ isExpired: U, isInteractive: B, isEditingVote: O })
            .with({ isInteractive: !1, isExpired: !1 }, () => ({
                label: C.intl.string(C.t.trrip0),
                presentation: "text",
                enabled: !1,
            }))
            .with({ isEditingVote: !0 }, () => ({
                label: C.intl.string(C.t["ETE/oC"]),
                presentation: "textButton",
                enabled: !0,
                type: "cancel",
            }))
            .otherwise(() => ({
                label: K,
                secondaryLabel: M,
                accessibilityHint: Z,
                presentation: "text",
                enabled: !0,
                type: "showVoterDetails",
            })),
        X =
            !B || U || F || Y
                ? void 0
                : { label: C.intl.string(C.t["/KHAUF"]), presentation: "textButton", enabled: !0, type: "showVotes" },
        q = u.allow_multiselect,
        ee = (0, s.YW)({ isInteractive: B, isExpired: U, canSelectMultipleAnswers: q })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => C.intl.string(C.t.yCXvxa))
            .otherwise(() => C.intl.string(C.t["9Y2wKO"]));
    return {
        question: u.question,
        promptLabel: ee,
        answers: H,
        answersInteraction: (0, s.YW)({ tapShouldOpenVotersModal: Q, canTapAnswers: _, canSelectMultipleAnswers: q })
            .with({ tapShouldOpenVotersModal: !0 }, () => f.CQ.LIST)
            .with({ canTapAnswers: !1 }, () => f.CQ.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => f.CQ.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => f.CQ.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: Q ? Z : void 0,
        layoutType: E,
        resources: (0, S.A)({ theme: o, layoutType: E }),
        containerStyle: "normal",
        primaryAction: J,
        isInteractive: B,
        canTapAnswers: _,
        canSelectMultipleAnswers: q,
        hasSelectedAnswer: R,
        canShowVoteCounts: k,
        hasVoted: F,
        isExpired: U,
        myAvatarUrl: v,
        secondaryAction: $,
        tertiaryAction: X,
    };
}
