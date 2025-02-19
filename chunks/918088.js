n.d(t, {
    Tk: () => P,
    ZP: () => T,
    ef: () => C,
    r8: () => S
}),
    n(47120),
    n(627341);
var r = n(278074),
    i = n(263568),
    a = n(607070),
    o = n(339085),
    l = n(633302),
    s = n(715903),
    c = n(69882),
    d = n(592125),
    u = n(271383),
    p = n(375954),
    m = n(594174),
    f = n(768581),
    h = n(176354),
    g = n(358085),
    _ = n(798628),
    b = n(79390),
    v = n(839963),
    y = n(897325),
    x = n(57101),
    O = n(562293),
    E = n(981631),
    j = n(388032);
let N = {
    channelId: E.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1
};
function C(e, t) {
    for (let n of e) if (('number' == typeof n.emoji.id ? ''.concat(n.emoji.id) : n.emoji.id) === t) return n;
}
let I = (e) =>
    (0, r.EQ)(e)
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
function S(e) {
    return null == e.poll || p.Z.getMessage(e.channel_id, e.id) === e;
}
function P(e, t) {
    var n, r, i, a;
    let { formattedExpirationLabel: o } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: l } = e;
    if (null == l) return;
    let m = e.state === E.yb.SENT,
        f = m ? (null != o ? o : (0, O.H)(l.expiry)) : '',
        h = null == f && m,
        { selectedAnswerIds: g, submitting: b, editing: v, showResults: y } = null !== (i = null != t ? t : (0, _.fU)(e.getChannelId(), e.id)) && void 0 !== i ? i : N,
        x = e.reactions,
        j = !0;
    if (!S(e)) {
        let t = p.Z.getMessage(e.channel_id, e.id);
        (j = !e.isSearchHit && null != t), (x = null !== (a = null == t ? void 0 : t.reactions) && void 0 !== a ? a : x);
    }
    let C = g.size > 0,
        I = x.some((e) => !0 === e.me_vote),
        P = !v && I,
        T = P || h || y,
        A = m && j && (!I || v || T),
        w = null === (r = d.Z.getChannel(e.getChannelId())) || void 0 === r ? void 0 : null === (n = r.getGuildId) || void 0 === n ? void 0 : n.call(r),
        Z = null != w ? u.ZP.getSelfMember(w) : null,
        k = (0, s.EY)(Z),
        R = (0, c.b)(Z),
        L = !b && C && !P && m && !k && !R;
    return {
        poll: l,
        canTapAnswers: A,
        canRemoveVote: P && m && !h,
        canShowVoteCounts: T,
        canSubmitVote: L,
        expirationLabel: f,
        hasSelectedAnswer: C,
        hasVoted: P,
        hasVoteRecorded: I,
        isEditingVote: v,
        isExpired: h,
        isInteractive: j,
        isSent: m,
        reactions: x,
        selectedAnswerIds: g,
        submitting: b,
        tapShouldOpenVotersModal: T,
        showResults: y
    };
}
function T(e, t) {
    var n, s;
    let { animateEmoji: c = !1, theme: u = 'dark', formattedExpirationLabel: p } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: _ } = e;
    if (null == _) return;
    let O = m.default.getCurrentUser();
    if (null == O) return;
    let E = a.Z.useReducedMotion,
        N = null === (s = d.Z.getChannel(e.getChannelId())) || void 0 === s ? void 0 : null === (n = s.getGuildId) || void 0 === n ? void 0 : n.call(s),
        S = (0, y.E)(O, N),
        T = _.answers,
        A = _.layout_type,
        w = P(e, t, { formattedExpirationLabel: p });
    if (null == w) return;
    let { canTapAnswers: Z, canRemoveVote: k, canShowVoteCounts: R, canSubmitVote: L, expirationLabel: D = j.NW.string(j.t['e+J3JS']), hasSelectedAnswer: M, hasVoted: W, isEditingVote: F, isExpired: U, isInteractive: B, reactions: G, selectedAnswerIds: H, submitting: V, tapShouldOpenVotersModal: z, showResults: K } = w,
        Y = (0, b.cZ)(G),
        X = j.NW.formatToPlainString(j.t.XRkuoa, { count: Y.toLocaleString() }),
        q = Math.max(
            ...T.map((e) => {
                var t, n;
                let r = C(G, ''.concat(e.answer_id));
                return null !== (n = null == r ? void 0 : null === (t = r.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0;
            })
        ),
        Q = T.map((e) => {
            var t, n, a;
            let s = ''.concat(e.answer_id),
                d = C(G, s),
                u = null !== (n = null == d ? void 0 : null === (t = d.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
                p = 0 === Y ? 0 : u / Y,
                m = H.has(s),
                g = u >= q && 0 !== u,
                _ = W && null !== (a = null == d ? void 0 : d.me_vote) && void 0 !== a && a,
                b = I({
                    didSelfVote: _,
                    hasVoted: W,
                    isExpired: U,
                    isSelected: m,
                    isLeader: g,
                    showResults: K
                });
            return {
                answerId: s,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: (function (e) {
                        let { animateEmoji: t = !1, size: n = 48 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (null == e) return;
                        let r = e.animated;
                        if (null == r && null != e.id) {
                            var i, a;
                            r = null !== (a = null === (i = o.ZP.getCustomEmojiById(e.id)) || void 0 === i ? void 0 : i.animated) && void 0 !== a && a;
                        }
                        let s = t && null != r && r;
                        return {
                            id: null == e.id ? null : ''.concat(e.id),
                            name: e.name,
                            displayName: null == e.id ? l.ZP.convertSurrogateToName(e.name) : e.name,
                            src:
                                null == e.id
                                    ? h.ZP.getURL(e.name)
                                    : f.ZP.getEmojiURL({
                                          id: e.id,
                                          animated: s,
                                          size: n
                                      }),
                            animated: s
                        };
                    })(e.poll_media.emoji, { animateEmoji: c }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids
                },
                isSelected: m,
                isVictor: U && g,
                didSelfVote: _,
                style: b,
                shouldAnimateTransition: V && !E,
                votesPercentage: Math.round(100 * p),
                votes: (0, r.EQ)(A)
                    .with(i.C.IMAGE_ONLY_ANSWERS, () => '('.concat(u.toLocaleString(), ')'))
                    .otherwise(() => j.NW.formatToPlainString(j.t.XRkuoa, { count: u.toLocaleString() }))
            };
        }),
        J = (0, r.EQ)({
            isExpired: U,
            canSubmitVote: L,
            hasVoted: W,
            isEditingVote: F,
            canRemoveVote: k,
            isInteractive: B,
            showResults: K
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: j.NW.string(j.t.JwkNU1),
                presentation: 'button',
                enabled: M,
                type: 'submit'
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: j.NW.string(j.t.XhQEh4),
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
                    label: j.NW.string(j.t.gNj6Ii),
                    presentation: 'secondaryButton',
                    enabled: !0,
                    type: 'showVotes'
                })
            )
            .otherwise(() => ({
                label: j.NW.string(j.t.JwkNU1),
                presentation: 'button',
                enabled: L,
                type: 'submit'
            })),
        $ = (0, g.isIOS)() ? j.NW.string(j.t.PVATMz) : j.NW.string(j.t.cHfFqq),
        ee = (0, r.EQ)({
            isExpired: U,
            isInteractive: B,
            isEditingVote: F
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1
                },
                () => ({
                    label: j.NW.string(j.t.trrip6),
                    presentation: 'text',
                    enabled: !1
                })
            )
            .with({ isEditingVote: !0 }, () => ({
                label: j.NW.string(j.t['ETE/oK']),
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
            !B || U || W || K
                ? void 0
                : {
                      label: j.NW.string(j.t['/KHAUF']),
                      presentation: 'textButton',
                      enabled: !0,
                      type: 'showVotes'
                  },
        en = _.allow_multiselect,
        er = (0, r.EQ)({
            isInteractive: B,
            isExpired: U,
            canSelectMultipleAnswers: en
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => j.NW.string(j.t.yCXvxc))
            .otherwise(() => j.NW.string(j.t['9Y2wKC']));
    return {
        question: _.question,
        promptLabel: er,
        answers: Q,
        answersInteraction: (0, r.EQ)({
            tapShouldOpenVotersModal: z,
            canTapAnswers: Z,
            canSelectMultipleAnswers: en
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => v.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => v.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => v.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => v.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: z ? $ : void 0,
        layoutType: A,
        resources: (0, x.Z)({
            theme: u,
            layoutType: A
        }),
        containerStyle: 'normal',
        primaryAction: J,
        isInteractive: B,
        canTapAnswers: Z,
        canSelectMultipleAnswers: en,
        hasSelectedAnswer: M,
        canShowVoteCounts: R,
        hasVoted: W,
        isExpired: U,
        myAvatarUrl: S,
        secondaryAction: ee,
        tertiaryAction: et
    };
}
