(n.d(t, { Ay: () => _, Ej: () => E, Ls: () => I, j8: () => T }), n(801541));
var s = n(889137),
    i = n(744593),
    a = n(775602),
    r = n(236285),
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
    C = n(818348),
    b = n(105292);
let N = { channelId: v.dJq, selectedAnswerIds: new Set(), submitting: !1, editing: !1, showResults: !1 };
function E(e, t) {
    for (let n of e) if (("number" == typeof n.emoji.id ? `${n.emoji.id}` : n.emoji.id) === t) return n;
}
function I(e) {
    return null == e.poll || h.A.getMessage(e.channel_id, e.id) === e;
}
function T(e, t) {
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
        } = t ?? (0, g.xt)(e.getChannelId(), e.id) ?? N,
        p = e.reactions,
        A = !0;
    if (!I(e)) {
        let t = h.A.getMessage(e.channel_id, e.id);
        ((A = !e.isSearchHit && null != t), (p = t?.reactions ?? p));
    }
    let f = l.size > 0,
        j = p.some((e) => !0 === e.me_vote),
        S = !x && j,
        C = S || r || w,
        b = i && A && (!j || x || C),
        E = d.A.getChannel(e.getChannelId())?.getGuildId?.(),
        T = null != E ? u.Ay.getSelfMember(E) : null,
        _ = (0, o.TR)(T),
        V = (0, c.Z)(T),
        k = !m && f && !S && i && !_ && !V;
    return {
        poll: s,
        canTapAnswers: b,
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
function _(e, t) {
    let {
            animateEmoji: n = !1,
            theme: o = C.NJ.DARK,
            formattedExpirationLabel: c,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: u } = e;
    if (null == u) return;
    let h = m.default.getCurrentUser();
    if (null == h) return;
    let g = a.Ay.useReducedMotion,
        y = d.A.getChannel(e.getChannelId())?.getGuildId?.(),
        v = (0, j.T)(h, y),
        N = u.answers,
        I = u.layout_type,
        _ = T(e, t, { formattedExpirationLabel: c });
    if (null == _) return;
    let {
            canTapAnswers: V,
            canRemoveVote: k,
            canShowVoteCounts: L,
            canSubmitVote: M,
            expirationLabel: R = b.intl.string(b.t["e+J3JZ"]),
            hasSelectedAnswer: F,
            hasVoted: O,
            isEditingVote: U,
            isExpired: B,
            isInteractive: D,
            reactions: W,
            selectedAnswerIds: P,
            submitting: Q,
            tapShouldOpenVotersModal: K,
            showResults: Y,
        } = _,
        z = (0, A.aw)(W),
        G = b.intl.formatToPlainString(b.t.XRkuof, { count: z }),
        J = Math.max(
            ...N.map((e) => {
                let t = E(W, `${e.answer_id}`);
                return t?.count_details?.vote ?? 0;
            }),
        ),
        H = N.map((e) => {
            let t,
                a = `${e.answer_id}`,
                o = E(W, a),
                c = o?.count_details?.vote ?? 0,
                d = 0 === z ? 0 : c / z,
                u = P.has(a),
                h = c >= J && 0 !== c,
                m = O && (o?.me_vote ?? !1),
                p =
                    ((t = { didSelfVote: m, hasVoted: O, isExpired: B, isSelected: u, isLeader: h, showResults: Y }),
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
                isVictor: B && h,
                didSelfVote: m,
                style: p,
                shouldAnimateTransition: Q && !g,
                votesPercentage: Math.round(100 * d),
                votes: (0, s.YW)(I)
                    .with(i.Z.IMAGE_ONLY_ANSWERS, () => `(${c.toLocaleString()})`)
                    .otherwise(() => b.intl.formatToPlainString(b.t.XRkuof, { count: c })),
            };
        }),
        Z = (0, s.YW)({
            isExpired: B,
            canSubmitVote: M,
            hasVoted: O,
            isEditingVote: U,
            canRemoveVote: k,
            isInteractive: D,
            showResults: Y,
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: b.intl.string(b.t.JwkNU4),
                presentation: "button",
                enabled: F,
                type: "submit",
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: b.intl.string(b.t.XhQEh8),
                presentation: "secondaryButton",
                enabled: !0,
                type: "remove",
            }))
            .with({ hasVoted: !1, showResults: !0 }, () => ({
                label: b.intl.string(b.t.gNj6In),
                presentation: "secondaryButton",
                enabled: !0,
                type: "showVotes",
            }))
            .otherwise(() => ({
                label: b.intl.string(b.t.JwkNU4),
                presentation: "button",
                enabled: M,
                type: "submit",
            })),
        $ = (0, p.isIOS)() ? b.intl.string(b.t["PVATM/"]) : b.intl.string(b.t.cHfFql),
        X = (0, s.YW)({ isExpired: B, isInteractive: D, isEditingVote: U })
            .with({ isInteractive: !1, isExpired: !1 }, () => ({
                label: b.intl.string(b.t.trrip0),
                presentation: "text",
                enabled: !1,
            }))
            .with({ isEditingVote: !0 }, () => ({
                label: b.intl.string(b.t["ETE/oC"]),
                presentation: "textButton",
                enabled: !0,
                type: "cancel",
            }))
            .otherwise(() => ({
                label: G,
                secondaryLabel: R,
                accessibilityHint: $,
                presentation: "text",
                enabled: !0,
                type: "showVoterDetails",
            })),
        q =
            !D || B || O || Y
                ? void 0
                : { label: b.intl.string(b.t["/KHAUF"]), presentation: "textButton", enabled: !0, type: "showVotes" },
        ee = u.allow_multiselect,
        et = (0, s.YW)({ isInteractive: D, isExpired: B, canSelectMultipleAnswers: ee })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => b.intl.string(b.t.yCXvxa))
            .otherwise(() => b.intl.string(b.t["9Y2wKO"]));
    return {
        question: u.question,
        promptLabel: et,
        answers: H,
        answersInteraction: (0, s.YW)({ tapShouldOpenVotersModal: K, canTapAnswers: V, canSelectMultipleAnswers: ee })
            .with({ tapShouldOpenVotersModal: !0 }, () => f.CQ.LIST)
            .with({ canTapAnswers: !1 }, () => f.CQ.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => f.CQ.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => f.CQ.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: K ? $ : void 0,
        layoutType: I,
        resources: (0, S.A)({ theme: o, layoutType: I }),
        containerStyle: "normal",
        primaryAction: Z,
        isInteractive: D,
        canTapAnswers: V,
        canSelectMultipleAnswers: ee,
        hasSelectedAnswer: F,
        canShowVoteCounts: L,
        hasVoted: O,
        isExpired: B,
        myAvatarUrl: v,
        secondaryAction: X,
        tertiaryAction: q,
    };
}
