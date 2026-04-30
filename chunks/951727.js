n.d(t, { Ay: () => w, Ej: () => y, Ls: () => M, j8: () => T }), n(801541);
var s = n(889137),
    i = n(966974),
    r = n(775602),
    l = n(159273),
    a = n(7584),
    d = n(229527),
    o = n(316031),
    u = n(734057),
    c = n(696451),
    h = n(232835),
    p = n(287809),
    m = n(486020),
    g = n(690521),
    A = n(723702),
    f = n(862780),
    I = n(969632),
    E = n(438437),
    x = n(842901),
    S = n(589590),
    _ = n(708676),
    b = n(652215),
    v = n(985018);
let C = { channelId: b.dJq, selectedAnswerIds: new Set(), submitting: !1, editing: !1, showResults: !1 };
function y(e, t) {
    for (let n of e) if (("number" == typeof n.emoji.id ? `${n.emoji.id}` : n.emoji.id) === t) return n;
}
function M(e) {
    return null == e.poll || h.A.getMessage(e.channel_id, e.id) === e;
}
function T(e, t) {
    let { formattedExpirationLabel: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: s } = e;
    if (null == s) return;
    let i = e.state === b.cmJ.SENT,
        r = i ? (n ?? (0, _.J)(s.expiry)) : "",
        l = null == r && i,
        {
            selectedAnswerIds: a,
            submitting: p,
            editing: m,
            showResults: g,
        } = t ?? (0, f.xt)(e.getChannelId(), e.id) ?? C,
        A = e.reactions,
        I = !0;
    if (!M(e)) {
        let t = h.A.getMessage(e.channel_id, e.id);
        (I = !e.isSearchHit && null != t), (A = t?.reactions ?? A);
    }
    let E = a.size > 0,
        x = A.some((e) => !0 === e.me_vote),
        S = !m && x,
        v = S || l || g,
        y = i && I && (!x || m || v),
        T = u.A.getChannel(e.getChannelId())?.getGuildId?.(),
        w = null != T ? c.Ay.getSelfMember(T) : null,
        j = (0, d.TR)(w),
        R = (0, o.Z)(w),
        P = !p && E && !S && i && !j && !R;
    return {
        poll: s,
        canTapAnswers: y,
        canRemoveVote: S && i && !l,
        canShowVoteCounts: v,
        canSubmitVote: P,
        expirationLabel: r,
        hasSelectedAnswer: E,
        hasVoted: S,
        hasVoteRecorded: x,
        isEditingVote: m,
        isExpired: l,
        isInteractive: I,
        isSent: i,
        reactions: A,
        selectedAnswerIds: a,
        submitting: p,
        tapShouldOpenVotersModal: v,
        showResults: g,
    };
}
function w(e, t) {
    let {
            animateEmoji: n = !1,
            theme: d = "dark",
            formattedExpirationLabel: o,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: c } = e;
    if (null == c) return;
    let h = p.default.getCurrentUser();
    if (null == h) return;
    let f = r.A.useReducedMotion,
        _ = u.A.getChannel(e.getChannelId())?.getGuildId?.(),
        b = (0, x.T)(h, _),
        C = c.answers,
        M = c.layout_type,
        w = T(e, t, { formattedExpirationLabel: o });
    if (null == w) return;
    let {
            canTapAnswers: j,
            canRemoveVote: R,
            canShowVoteCounts: P,
            canSubmitVote: N,
            expirationLabel: L = v.intl.string(v.t["e+J3JZ"]),
            hasSelectedAnswer: O,
            hasVoted: k,
            isEditingVote: D,
            isExpired: B,
            isInteractive: F,
            reactions: U,
            selectedAnswerIds: H,
            submitting: V,
            tapShouldOpenVotersModal: G,
            showResults: Y,
        } = w,
        W = (0, I.aw)(U),
        z = v.intl.formatToPlainString(v.t.XRkuof, { count: W }),
        X = Math.max(
            ...C.map((e) => {
                let t = y(U, `${e.answer_id}`);
                return t?.count_details?.vote ?? 0;
            }),
        ),
        K = C.map((e) => {
            let t,
                r = `${e.answer_id}`,
                d = y(U, r),
                o = d?.count_details?.vote ?? 0,
                u = 0 === W ? 0 : o / W,
                c = H.has(r),
                h = o >= X && 0 !== o,
                p = k && (d?.me_vote ?? !1),
                A =
                    ((t = { didSelfVote: p, hasVoted: k, isExpired: B, isSelected: c, isLeader: h, showResults: Y }),
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
                answerId: r,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: (function (e) {
                        let { animateEmoji: t = !1, size: n = 48 } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (null == e) return;
                        let s = e.animated;
                        null == s && null != e.id && (s = l.Ay.getCustomEmojiById(e.id)?.animated ?? !1);
                        let i = t && (s ?? !1);
                        return {
                            id: null == e.id ? null : `${e.id}`,
                            name: e.name,
                            displayName: null == e.id ? a.Ay.convertSurrogateToName(e.name) : e.name,
                            src:
                                null == e.id
                                    ? g.Ay.getURL(e.name)
                                    : m.Ay.getEmojiURL({ id: e.id, animated: i, size: n }),
                            animated: i,
                        };
                    })(e.poll_media.emoji, { animateEmoji: n }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids,
                },
                isSelected: c,
                isVictor: B && h,
                didSelfVote: p,
                style: A,
                shouldAnimateTransition: V && !f,
                votesPercentage: Math.round(100 * u),
                votes: (0, s.YW)(M)
                    .with(i.Z.IMAGE_ONLY_ANSWERS, () => `(${o.toLocaleString()})`)
                    .otherwise(() => v.intl.formatToPlainString(v.t.XRkuof, { count: o })),
            };
        }),
        J = (0, s.YW)({
            isExpired: B,
            canSubmitVote: N,
            hasVoted: k,
            isEditingVote: D,
            canRemoveVote: R,
            isInteractive: F,
            showResults: Y,
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: v.intl.string(v.t.JwkNU4),
                presentation: "button",
                enabled: O,
                type: "submit",
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: v.intl.string(v.t.XhQEh8),
                presentation: "secondaryButton",
                enabled: !0,
                type: "remove",
            }))
            .with({ hasVoted: !1, showResults: !0 }, () => ({
                label: v.intl.string(v.t.gNj6In),
                presentation: "secondaryButton",
                enabled: !0,
                type: "showVotes",
            }))
            .otherwise(() => ({
                label: v.intl.string(v.t.JwkNU4),
                presentation: "button",
                enabled: N,
                type: "submit",
            })),
        $ = (0, A.isIOS)() ? v.intl.string(v.t["PVATM/"]) : v.intl.string(v.t.cHfFql),
        q = (0, s.YW)({ isExpired: B, isInteractive: F, isEditingVote: D })
            .with({ isInteractive: !1, isExpired: !1 }, () => ({
                label: v.intl.string(v.t.trrip0),
                presentation: "text",
                enabled: !1,
            }))
            .with({ isEditingVote: !0 }, () => ({
                label: v.intl.string(v.t["ETE/oC"]),
                presentation: "textButton",
                enabled: !0,
                type: "cancel",
            }))
            .otherwise(() => ({
                label: z,
                secondaryLabel: L,
                accessibilityHint: $,
                presentation: "text",
                enabled: !0,
                type: "showVoterDetails",
            })),
        Q =
            !F || B || k || Y
                ? void 0
                : { label: v.intl.string(v.t["/KHAUF"]), presentation: "textButton", enabled: !0, type: "showVotes" },
        Z = c.allow_multiselect,
        ee = (0, s.YW)({ isInteractive: F, isExpired: B, canSelectMultipleAnswers: Z })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => v.intl.string(v.t.yCXvxa))
            .otherwise(() => v.intl.string(v.t["9Y2wKO"]));
    return {
        question: c.question,
        promptLabel: ee,
        answers: K,
        answersInteraction: (0, s.YW)({ tapShouldOpenVotersModal: G, canTapAnswers: j, canSelectMultipleAnswers: Z })
            .with({ tapShouldOpenVotersModal: !0 }, () => E.CQ.LIST)
            .with({ canTapAnswers: !1 }, () => E.CQ.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => E.CQ.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => E.CQ.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: G ? $ : void 0,
        layoutType: M,
        resources: (0, S.A)({ theme: d, layoutType: M }),
        containerStyle: "normal",
        primaryAction: J,
        isInteractive: F,
        canTapAnswers: j,
        canSelectMultipleAnswers: Z,
        hasSelectedAnswer: O,
        canShowVoteCounts: P,
        hasVoted: k,
        isExpired: B,
        myAvatarUrl: b,
        secondaryAction: q,
        tertiaryAction: Q,
    };
}
