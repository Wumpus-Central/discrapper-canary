n.d(t, {
    Tk: () => T,
    ZP: () => P,
    ef: () => C,
    r8: () => I
}),
    n(388685),
    n(314940);
var r = n(278074),
    i = n(263568),
    a = n(607070),
    l = n(339085),
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
    x = n(839963),
    y = n(897325),
    v = n(57101),
    E = n(562293),
    O = n(981631),
    N = n(388032);
let j = {
    channelId: O.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1
};
function C(e, t) {
    for (let n of e) if (('number' == typeof n.emoji.id ? ''.concat(n.emoji.id) : n.emoji.id) === t) return n;
}
let S = (e) =>
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
function I(e) {
    return null == e.poll || p.Z.getMessage(e.channel_id, e.id) === e;
}
function T(e, t) {
    var n, r, i, a;
    let { formattedExpirationLabel: l } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: o } = e;
    if (null == o) return;
    let m = e.state === O.yb.SENT,
        f = m ? (null != l ? l : (0, E.H)(o.expiry)) : '',
        h = null == f && m,
        { selectedAnswerIds: g, submitting: b, editing: x, showResults: y } = null != (i = null != t ? t : (0, _.fU)(e.getChannelId(), e.id)) ? i : j,
        v = e.reactions,
        N = !0;
    if (!I(e)) {
        let t = p.Z.getMessage(e.channel_id, e.id);
        (N = !e.isSearchHit && null != t), (v = null != (a = null == t ? void 0 : t.reactions) ? a : v);
    }
    let C = g.size > 0,
        S = v.some((e) => !0 === e.me_vote),
        T = !x && S,
        P = T || h || y,
        A = m && N && (!S || x || P),
        w = null == (r = u.Z.getChannel(e.getChannelId())) || null == (n = r.getGuildId) ? void 0 : n.call(r),
        Z = null != w ? d.ZP.getSelfMember(w) : null,
        R = (0, s.EY)(Z),
        k = (0, c.b)(Z),
        D = !b && C && !T && m && !R && !k;
    return {
        poll: o,
        canTapAnswers: A,
        canRemoveVote: T && m && !h,
        canShowVoteCounts: P,
        canSubmitVote: D,
        expirationLabel: f,
        hasSelectedAnswer: C,
        hasVoted: T,
        hasVoteRecorded: S,
        isEditingVote: x,
        isExpired: h,
        isInteractive: N,
        isSent: m,
        reactions: v,
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
    let E = m.default.getCurrentUser();
    if (null == E) return;
    let O = a.Z.useReducedMotion,
        j = null == (s = u.Z.getChannel(e.getChannelId())) || null == (n = s.getGuildId) ? void 0 : n.call(s),
        I = (0, y.E)(E, j),
        P = _.answers,
        A = _.layout_type,
        w = T(e, t, { formattedExpirationLabel: p });
    if (null == w) return;
    let { canTapAnswers: Z, canRemoveVote: R, canShowVoteCounts: k, canSubmitVote: D, expirationLabel: L = N.NW.string(N.t['e+J3JS']), hasSelectedAnswer: M, hasVoted: W, isEditingVote: U, isExpired: F, isInteractive: B, reactions: G, selectedAnswerIds: H, submitting: V, tapShouldOpenVotersModal: z, showResults: K } = w,
        Y = (0, b.cZ)(G),
        X = N.NW.formatToPlainString(N.t.XRkuoa, { count: Y.toLocaleString() }),
        q = Math.max(
            ...P.map((e) => {
                var t, n;
                let r = C(G, ''.concat(e.answer_id));
                return null != (n = null == r || null == (t = r.count_details) ? void 0 : t.vote) ? n : 0;
            })
        ),
        Q = P.map((e) => {
            var t, n, a;
            let s = ''.concat(e.answer_id),
                u = C(G, s),
                d = null != (n = null == u || null == (t = u.count_details) ? void 0 : t.vote) ? n : 0,
                p = 0 === Y ? 0 : d / Y,
                m = H.has(s),
                g = d >= q && 0 !== d,
                _ = W && null != (a = null == u ? void 0 : u.me_vote) && a,
                b = S({
                    didSelfVote: _,
                    hasVoted: W,
                    isExpired: F,
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
                            r = null != (a = null == (i = l.ZP.getCustomEmojiById(e.id)) ? void 0 : i.animated) && a;
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
                isVictor: F && g,
                didSelfVote: _,
                style: b,
                shouldAnimateTransition: V && !O,
                votesPercentage: Math.round(100 * p),
                votes: (0, r.EQ)(A)
                    .with(i.C.IMAGE_ONLY_ANSWERS, () => '('.concat(d.toLocaleString(), ')'))
                    .otherwise(() => N.NW.formatToPlainString(N.t.XRkuoa, { count: d.toLocaleString() }))
            };
        }),
        J = (0, r.EQ)({
            isExpired: F,
            canSubmitVote: D,
            hasVoted: W,
            isEditingVote: U,
            canRemoveVote: R,
            isInteractive: B,
            showResults: K
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: N.NW.string(N.t.JwkNU1),
                presentation: 'button',
                enabled: M,
                type: 'submit'
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: N.NW.string(N.t.XhQEh4),
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
                    label: N.NW.string(N.t.gNj6Ii),
                    presentation: 'secondaryButton',
                    enabled: !0,
                    type: 'showVotes'
                })
            )
            .otherwise(() => ({
                label: N.NW.string(N.t.JwkNU1),
                presentation: 'button',
                enabled: D,
                type: 'submit'
            })),
        $ = (0, g.isIOS)() ? N.NW.string(N.t.PVATMz) : N.NW.string(N.t.cHfFqq),
        ee = (0, r.EQ)({
            isExpired: F,
            isInteractive: B,
            isEditingVote: U
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1
                },
                () => ({
                    label: N.NW.string(N.t.trrip6),
                    presentation: 'text',
                    enabled: !1
                })
            )
            .with({ isEditingVote: !0 }, () => ({
                label: N.NW.string(N.t['ETE/oK']),
                presentation: 'textButton',
                enabled: !0,
                type: 'cancel'
            }))
            .otherwise(() => ({
                label: X,
                secondaryLabel: L,
                accessibilityHint: $,
                presentation: 'text',
                enabled: !0,
                type: 'showVoterDetails'
            })),
        et =
            !B || F || W || K
                ? void 0
                : {
                      label: N.NW.string(N.t['/KHAUF']),
                      presentation: 'textButton',
                      enabled: !0,
                      type: 'showVotes'
                  },
        en = _.allow_multiselect,
        er = (0, r.EQ)({
            isInteractive: B,
            isExpired: F,
            canSelectMultipleAnswers: en
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => N.NW.string(N.t.yCXvxc))
            .otherwise(() => N.NW.string(N.t['9Y2wKC']));
    return {
        question: _.question,
        promptLabel: er,
        answers: Q,
        answersInteraction: (0, r.EQ)({
            tapShouldOpenVotersModal: z,
            canTapAnswers: Z,
            canSelectMultipleAnswers: en
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => x.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => x.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => x.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => x.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: z ? $ : void 0,
        layoutType: A,
        resources: (0, v.Z)({
            theme: d,
            layoutType: A
        }),
        containerStyle: 'normal',
        primaryAction: J,
        isInteractive: B,
        canTapAnswers: Z,
        canSelectMultipleAnswers: en,
        hasSelectedAnswer: M,
        canShowVoteCounts: k,
        hasVoted: W,
        isExpired: F,
        myAvatarUrl: I,
        secondaryAction: ee,
        tertiaryAction: et
    };
}
