n.d(t, {
    Tk: () => y,
    ZP: () => Z,
    ef: () => b,
    r8: () => j
}),
    n(47120),
    n(627341);
var i = n(278074),
    l = n(263568),
    a = n(607070),
    r = n(339085),
    s = n(633302),
    o = n(715903),
    c = n(69882),
    d = n(592125),
    u = n(271383),
    m = n(375954),
    _ = n(594174),
    h = n(768581),
    p = n(176354),
    g = n(358085),
    f = n(798628),
    x = n(79390),
    C = n(839963),
    v = n(897325),
    E = n(57101),
    I = n(562293),
    N = n(981631),
    S = n(388032);
let T = {
    channelId: N.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1
};
function b(e, t) {
    for (let n of e) if (('number' == typeof n.emoji.id ? ''.concat(n.emoji.id) : n.emoji.id) === t) return n;
}
let A = (e) =>
    (0, i.EQ)(e)
        .with(
            {
                isExpired: !0,
                isLeader: !0,
                didSelfVote: !0
            },
            () => 'victorSelected'
        )
        .with(
            {
                isExpired: !0,
                isLeader: !0,
                didSelfVote: !1
            },
            () => 'victorNotSelected'
        )
        .with(
            {
                isExpired: !0,
                didSelfVote: !0
            },
            () => 'loserSelected'
        )
        .with({ isExpired: !0 }, () => 'notVoted')
        .with(
            {
                didSelfVote: !0,
                isExpired: !1
            },
            () => 'voted'
        )
        .with(
            {
                hasVoted: !0,
                isExpired: !1
            },
            () => 'notVoted'
        )
        .with({ isSelected: !0 }, () => 'selected')
        .with(
            {
                isExpired: !1,
                showResults: !0
            },
            () => 'notVoted'
        )
        .otherwise(() => 'normalVote');
function j(e) {
    return null == e.poll || m.Z.getMessage(e.channel_id, e.id) === e;
}
function y(e, t) {
    var n, i, l, a;
    let { formattedExpirationLabel: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: s } = e;
    if (null == s) return;
    let _ = e.state === N.yb.SENT,
        h = _ ? (null != r ? r : (0, I.H)(s.expiry)) : '',
        p = null == h && _,
        { selectedAnswerIds: g, submitting: x, editing: C, showResults: v } = null !== (l = null != t ? t : (0, f.fU)(e.getChannelId(), e.id)) && void 0 !== l ? l : T,
        E = e.reactions,
        S = !0;
    if (!j(e)) {
        let t = m.Z.getMessage(e.channel_id, e.id);
        (S = !e.isSearchHit && null != t), (E = null !== (a = null == t ? void 0 : t.reactions) && void 0 !== a ? a : E);
    }
    let b = g.size > 0,
        A = E.some((e) => !0 === e.me_vote),
        y = !C && A,
        Z = y || p || v,
        R = _ && S && (!A || C || Z),
        L = null === (i = d.Z.getChannel(e.getChannelId())) || void 0 === i ? void 0 : null === (n = i.getGuildId) || void 0 === n ? void 0 : n.call(i),
        P = null != L ? u.ZP.getSelfMember(L) : null,
        k = (0, o.EY)(P),
        M = (0, c.b)(P);
    return {
        poll: s,
        canTapAnswers: R,
        canRemoveVote: y && _ && !p,
        canShowVoteCounts: Z,
        canSubmitVote: !x && b && !y && _ && !k && !M,
        expirationLabel: h,
        hasSelectedAnswer: b,
        hasVoted: y,
        hasVoteRecorded: A,
        isEditingVote: C,
        isExpired: p,
        isInteractive: S,
        isSent: _,
        reactions: E,
        selectedAnswerIds: g,
        submitting: x,
        tapShouldOpenVotersModal: Z,
        showResults: v
    };
}
function Z(e, t) {
    var n, o;
    let { animateEmoji: c = !1, theme: u = 'dark', formattedExpirationLabel: m } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: f } = e;
    if (null == f) return;
    let I = _.default.getCurrentUser();
    if (null == I) return;
    let N = a.Z.useReducedMotion,
        T = null === (o = d.Z.getChannel(e.getChannelId())) || void 0 === o ? void 0 : null === (n = o.getGuildId) || void 0 === n ? void 0 : n.call(o),
        j = (0, v.E)(I, T),
        Z = f.answers,
        R = f.layout_type,
        L = y(e, t, { formattedExpirationLabel: m });
    if (null == L) return;
    let { canTapAnswers: P, canRemoveVote: k, canShowVoteCounts: M, canSubmitVote: O, expirationLabel: D = S.intl.string(S.t['e+J3JS']), hasSelectedAnswer: w, hasVoted: F, isEditingVote: U, isExpired: B, isInteractive: G, reactions: H, selectedAnswerIds: V, submitting: z, tapShouldOpenVotersModal: W, showResults: K } = L,
        Y = (0, x.cZ)(H),
        X = S.intl.formatToPlainString(S.t.XRkuoa, { count: Y.toLocaleString() }),
        q = Math.max(
            ...Z.map((e) => {
                var t, n;
                let i = b(H, ''.concat(e.answer_id));
                return null !== (n = null == i ? void 0 : null === (t = i.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0;
            })
        ),
        Q = Z.map((e) => {
            var t, n, a;
            let o = ''.concat(e.answer_id),
                d = b(H, o),
                u = null !== (n = null == d ? void 0 : null === (t = d.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
                m = 0 === Y ? 0 : u / Y,
                _ = V.has(o),
                g = u >= q && 0 !== u,
                f = F && null !== (a = null == d ? void 0 : d.me_vote) && void 0 !== a && a,
                x = A({
                    didSelfVote: f,
                    hasVoted: F,
                    isExpired: B,
                    isSelected: _,
                    isLeader: g,
                    showResults: K
                });
            return {
                answerId: o,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: (function (e) {
                        let { animateEmoji: t = !1, size: n = 48 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (null == e) return;
                        let i = e.animated;
                        if (null == i && null != e.id) {
                            var l, a;
                            i = null !== (a = null === (l = r.ZP.getCustomEmojiById(e.id)) || void 0 === l ? void 0 : l.animated) && void 0 !== a && a;
                        }
                        let o = t && null != i && i;
                        return {
                            id: null == e.id ? null : ''.concat(e.id),
                            name: e.name,
                            displayName: null == e.id ? s.ZP.convertSurrogateToName(e.name) : e.name,
                            src:
                                null == e.id
                                    ? p.ZP.getURL(e.name)
                                    : h.ZP.getEmojiURL({
                                          id: e.id,
                                          animated: o,
                                          size: n
                                      }),
                            animated: o
                        };
                    })(e.poll_media.emoji, { animateEmoji: c }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids
                },
                isSelected: _,
                isVictor: B && g,
                didSelfVote: f,
                style: x,
                shouldAnimateTransition: z && !N,
                votesPercentage: Math.round(100 * m),
                votes: (0, i.EQ)(R)
                    .with(l.C.IMAGE_ONLY_ANSWERS, () => '('.concat(u.toLocaleString(), ')'))
                    .otherwise(() => S.intl.formatToPlainString(S.t.XRkuoa, { count: u.toLocaleString() }))
            };
        }),
        J = (0, i.EQ)({
            isExpired: B,
            canSubmitVote: O,
            hasVoted: F,
            isEditingVote: U,
            canRemoveVote: k,
            isInteractive: G,
            showResults: K
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: S.intl.string(S.t.JwkNU1),
                presentation: 'button',
                enabled: w,
                type: 'submit'
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: S.intl.string(S.t.XhQEh4),
                presentation: 'secondaryButton',
                enabled: !0,
                type: 'remove'
            }))
            .with(
                {
                    hasVoted: !1,
                    showResults: !0
                },
                () => ({
                    label: S.intl.string(S.t.gNj6Ii),
                    presentation: 'secondaryButton',
                    enabled: !0,
                    type: 'showVotes'
                })
            )
            .otherwise(() => ({
                label: S.intl.string(S.t.JwkNU1),
                presentation: 'button',
                enabled: O,
                type: 'submit'
            })),
        $ = (0, g.isIOS)() ? S.intl.string(S.t.PVATMz) : S.intl.string(S.t.cHfFqq),
        ee = (0, i.EQ)({
            isExpired: B,
            isInteractive: G,
            isEditingVote: U
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1
                },
                () => ({
                    label: S.intl.string(S.t.trrip6),
                    presentation: 'text',
                    enabled: !1
                })
            )
            .with({ isEditingVote: !0 }, () => ({
                label: S.intl.string(S.t['ETE/oK']),
                presentation: 'textButton',
                enabled: !0,
                type: 'cancel'
            }))
            .otherwise(() => ({
                label: X,
                secondaryLabel: D,
                accessibilityHint: $,
                presentation: 'text',
                enabled: !0,
                type: 'showVoterDetails'
            })),
        et =
            !G || B || F || K
                ? void 0
                : {
                      label: S.intl.string(S.t['/KHAUF']),
                      presentation: 'textButton',
                      enabled: !0,
                      type: 'showVotes'
                  },
        en = f.allow_multiselect,
        ei = (0, i.EQ)({
            isInteractive: G,
            isExpired: B,
            canSelectMultipleAnswers: en
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => S.intl.string(S.t.yCXvxc))
            .otherwise(() => S.intl.string(S.t['9Y2wKC']));
    return {
        question: f.question,
        promptLabel: ei,
        answers: Q,
        answersInteraction: (0, i.EQ)({
            tapShouldOpenVotersModal: W,
            canTapAnswers: P,
            canSelectMultipleAnswers: en
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => C.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => C.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => C.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => C.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: W ? $ : void 0,
        layoutType: R,
        resources: (0, E.Z)({
            theme: u,
            layoutType: R
        }),
        containerStyle: 'normal',
        primaryAction: J,
        isInteractive: G,
        canTapAnswers: P,
        canSelectMultipleAnswers: en,
        hasSelectedAnswer: w,
        canShowVoteCounts: M,
        hasVoted: F,
        isExpired: B,
        myAvatarUrl: j,
        secondaryAction: ee,
        tertiaryAction: et
    };
}
