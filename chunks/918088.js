n.d(t, {
    Tk: () => T,
    ZP: () => P,
    ef: () => S,
    r8: () => N
}),
    n(388685),
    n(314940);
var r = n(278074),
    i = n(263568),
    l = n(607070),
    a = n(339085),
    o = n(633302),
    s = n(715903),
    c = n(69882),
    u = n(592125),
    d = n(271383),
    p = n(375954),
    m = n(594174),
    f = n(768581),
    h = n(176354),
    g = n(358085),
    _ = n(798628),
    b = n(79390),
    E = n(839963),
    y = n(897325),
    x = n(57101),
    v = n(562293),
    O = n(981631),
    C = n(388032);
let j = {
    channelId: O.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1
};
function S(e, t) {
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
function N(e) {
    return null == e.poll || p.Z.getMessage(e.channel_id, e.id) === e;
}
function T(e, t) {
    var n, r, i, l;
    let { formattedExpirationLabel: a } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: o } = e;
    if (null == o) return;
    let m = e.state === O.yb.SENT,
        f = m ? (null != a ? a : (0, v.H)(o.expiry)) : '',
        h = null == f && m,
        { selectedAnswerIds: g, submitting: b, editing: E, showResults: y } = null != (i = null != t ? t : (0, _.fU)(e.getChannelId(), e.id)) ? i : j,
        x = e.reactions,
        C = !0;
    if (!N(e)) {
        let t = p.Z.getMessage(e.channel_id, e.id);
        (C = !e.isSearchHit && null != t), (x = null != (l = null == t ? void 0 : t.reactions) ? l : x);
    }
    let S = g.size > 0,
        I = x.some((e) => !0 === e.me_vote),
        T = !E && I,
        P = T || h || y,
        A = m && C && (!I || E || P),
        w = null == (r = u.Z.getChannel(e.getChannelId())) || null == (n = r.getGuildId) ? void 0 : n.call(r),
        Z = null != w ? d.ZP.getSelfMember(w) : null,
        R = (0, s.EY)(Z),
        k = (0, c.b)(Z),
        D = !b && S && !T && m && !R && !k;
    return {
        poll: o,
        canTapAnswers: A,
        canRemoveVote: T && m && !h,
        canShowVoteCounts: P,
        canSubmitVote: D,
        expirationLabel: f,
        hasSelectedAnswer: S,
        hasVoted: T,
        hasVoteRecorded: I,
        isEditingVote: E,
        isExpired: h,
        isInteractive: C,
        isSent: m,
        reactions: x,
        selectedAnswerIds: g,
        submitting: b,
        tapShouldOpenVotersModal: P,
        showResults: y
    };
}
function P(e, t) {
    var n, s;
    let { animateEmoji: c = !1, theme: d = 'dark', formattedExpirationLabel: p } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: _ } = e;
    if (null == _) return;
    let v = m.default.getCurrentUser();
    if (null == v) return;
    let O = l.Z.useReducedMotion,
        j = null == (s = u.Z.getChannel(e.getChannelId())) || null == (n = s.getGuildId) ? void 0 : n.call(s),
        N = (0, y.E)(v, j),
        P = _.answers,
        A = _.layout_type,
        w = T(e, t, { formattedExpirationLabel: p });
    if (null == w) return;
    let { canTapAnswers: Z, canRemoveVote: R, canShowVoteCounts: k, canSubmitVote: D, expirationLabel: M = C.intl.string(C.t['e+J3JS']), hasSelectedAnswer: L, hasVoted: U, isEditingVote: F, isExpired: B, isInteractive: G, reactions: H, selectedAnswerIds: V, submitting: z, tapShouldOpenVotersModal: W, showResults: K } = w,
        Y = (0, b.cZ)(H),
        X = C.intl.formatToPlainString(C.t.XRkuoa, { count: Y.toLocaleString() }),
        q = Math.max(
            ...P.map((e) => {
                var t, n;
                let r = S(H, ''.concat(e.answer_id));
                return null != (n = null == r || null == (t = r.count_details) ? void 0 : t.vote) ? n : 0;
            })
        ),
        Q = P.map((e) => {
            var t, n, l;
            let s = ''.concat(e.answer_id),
                u = S(H, s),
                d = null != (n = null == u || null == (t = u.count_details) ? void 0 : t.vote) ? n : 0,
                p = 0 === Y ? 0 : d / Y,
                m = V.has(s),
                g = d >= q && 0 !== d,
                _ = U && null != (l = null == u ? void 0 : u.me_vote) && l,
                b = I({
                    didSelfVote: _,
                    hasVoted: U,
                    isExpired: B,
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
                            var i, l;
                            r = null != (l = null == (i = a.ZP.getCustomEmojiById(e.id)) ? void 0 : i.animated) && l;
                        }
                        let s = t && null != r && r;
                        return {
                            id: null == e.id ? null : ''.concat(e.id),
                            name: e.name,
                            displayName: null == e.id ? o.ZP.convertSurrogateToName(e.name) : e.name,
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
                isVictor: B && g,
                didSelfVote: _,
                style: b,
                shouldAnimateTransition: z && !O,
                votesPercentage: Math.round(100 * p),
                votes: (0, r.EQ)(A)
                    .with(i.C.IMAGE_ONLY_ANSWERS, () => '('.concat(d.toLocaleString(), ')'))
                    .otherwise(() => C.intl.formatToPlainString(C.t.XRkuoa, { count: d.toLocaleString() }))
            };
        }),
        J = (0, r.EQ)({
            isExpired: B,
            canSubmitVote: D,
            hasVoted: U,
            isEditingVote: F,
            canRemoveVote: R,
            isInteractive: G,
            showResults: K
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: C.intl.string(C.t.JwkNU1),
                presentation: 'button',
                enabled: L,
                type: 'submit'
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: C.intl.string(C.t.XhQEh4),
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
                    label: C.intl.string(C.t.gNj6Ii),
                    presentation: 'secondaryButton',
                    enabled: !0,
                    type: 'showVotes'
                })
            )
            .otherwise(() => ({
                label: C.intl.string(C.t.JwkNU1),
                presentation: 'button',
                enabled: D,
                type: 'submit'
            })),
        $ = (0, g.isIOS)() ? C.intl.string(C.t.PVATMz) : C.intl.string(C.t.cHfFqq),
        ee = (0, r.EQ)({
            isExpired: B,
            isInteractive: G,
            isEditingVote: F
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1
                },
                () => ({
                    label: C.intl.string(C.t.trrip6),
                    presentation: 'text',
                    enabled: !1
                })
            )
            .with({ isEditingVote: !0 }, () => ({
                label: C.intl.string(C.t['ETE/oK']),
                presentation: 'textButton',
                enabled: !0,
                type: 'cancel'
            }))
            .otherwise(() => ({
                label: X,
                secondaryLabel: M,
                accessibilityHint: $,
                presentation: 'text',
                enabled: !0,
                type: 'showVoterDetails'
            })),
        et =
            !G || B || U || K
                ? void 0
                : {
                      label: C.intl.string(C.t['/KHAUF']),
                      presentation: 'textButton',
                      enabled: !0,
                      type: 'showVotes'
                  },
        en = _.allow_multiselect,
        er = (0, r.EQ)({
            isInteractive: G,
            isExpired: B,
            canSelectMultipleAnswers: en
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => C.intl.string(C.t.yCXvxc))
            .otherwise(() => C.intl.string(C.t['9Y2wKC']));
    return {
        question: _.question,
        promptLabel: er,
        answers: Q,
        answersInteraction: (0, r.EQ)({
            tapShouldOpenVotersModal: W,
            canTapAnswers: Z,
            canSelectMultipleAnswers: en
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => E.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => E.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => E.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => E.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: W ? $ : void 0,
        layoutType: A,
        resources: (0, x.Z)({
            theme: d,
            layoutType: A
        }),
        containerStyle: 'normal',
        primaryAction: J,
        isInteractive: G,
        canTapAnswers: Z,
        canSelectMultipleAnswers: en,
        hasSelectedAnswer: L,
        canShowVoteCounts: k,
        hasVoted: U,
        isExpired: B,
        myAvatarUrl: N,
        secondaryAction: ee,
        tertiaryAction: et
    };
}
