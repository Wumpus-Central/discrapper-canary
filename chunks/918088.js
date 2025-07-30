(n.d(t, {
    Tk: () => N,
    ZP: () => P,
    ef: () => j,
    r8: () => T
}),
    n(388685),
    n(314940));
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
    _ = n(176354),
    g = n(358085),
    h = n(798628),
    b = n(79390),
    E = n(839963),
    C = n(897325),
    O = n(57101),
    y = n(562293),
    v = n(981631),
    x = n(388032);
let I = {
    channelId: v.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1
};
function j(e, t) {
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
function T(e) {
    return null == e.poll || p.Z.getMessage(e.channel_id, e.id) === e;
}
function N(e, t) {
    var n, r, i, l;
    let { formattedExpirationLabel: a } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: o } = e;
    if (null == o) return;
    let m = e.state === v.yb.SENT,
        f = m ? (null != a ? a : (0, y.H)(o.expiry)) : '',
        _ = null == f && m,
        { selectedAnswerIds: g, submitting: b, editing: E, showResults: C } = null != (i = null != t ? t : (0, h.fU)(e.getChannelId(), e.id)) ? i : I,
        O = e.reactions,
        x = !0;
    if (!T(e)) {
        let t = p.Z.getMessage(e.channel_id, e.id);
        ((x = !e.isSearchHit && null != t), (O = null != (l = null == t ? void 0 : t.reactions) ? l : O));
    }
    let j = g.size > 0,
        S = O.some((e) => !0 === e.me_vote),
        N = !E && S,
        P = N || _ || C,
        A = m && x && (!S || E || P),
        w = null == (r = u.Z.getChannel(e.getChannelId())) || null == (n = r.getGuildId) ? void 0 : n.call(r),
        Z = null != w ? d.ZP.getSelfMember(w) : null,
        R = (0, s.EY)(Z),
        D = (0, c.b)(Z),
        L = !b && j && !N && m && !R && !D;
    return {
        poll: o,
        canTapAnswers: A,
        canRemoveVote: N && m && !_,
        canShowVoteCounts: P,
        canSubmitVote: L,
        expirationLabel: f,
        hasSelectedAnswer: j,
        hasVoted: N,
        hasVoteRecorded: S,
        isEditingVote: E,
        isExpired: _,
        isInteractive: x,
        isSent: m,
        reactions: O,
        selectedAnswerIds: g,
        submitting: b,
        tapShouldOpenVotersModal: P,
        showResults: C
    };
}
function P(e, t) {
    var n, s;
    let { animateEmoji: c = !1, theme: d = 'dark', formattedExpirationLabel: p } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: h } = e;
    if (null == h) return;
    let y = m.default.getCurrentUser();
    if (null == y) return;
    let v = l.Z.useReducedMotion,
        I = null == (s = u.Z.getChannel(e.getChannelId())) || null == (n = s.getGuildId) ? void 0 : n.call(s),
        T = (0, C.E)(y, I),
        P = h.answers,
        A = h.layout_type,
        w = N(e, t, { formattedExpirationLabel: p });
    if (null == w) return;
    let { canTapAnswers: Z, canRemoveVote: R, canShowVoteCounts: D, canSubmitVote: L, expirationLabel: M = x.intl.string(x.t['e+J3JS']), hasSelectedAnswer: k, hasVoted: U, isEditingVote: F, isExpired: B, isInteractive: G, reactions: H, selectedAnswerIds: V, submitting: z, tapShouldOpenVotersModal: W, showResults: K } = w,
        Y = (0, b.cZ)(H),
        X = x.intl.formatToPlainString(x.t.XRkuoa, { count: Y.toLocaleString() }),
        q = Math.max(
            ...P.map((e) => {
                var t, n;
                let r = j(H, ''.concat(e.answer_id));
                return null != (n = null == r || null == (t = r.count_details) ? void 0 : t.vote) ? n : 0;
            })
        ),
        Q = P.map((e) => {
            var t, n, l;
            let s = ''.concat(e.answer_id),
                u = j(H, s),
                d = null != (n = null == u || null == (t = u.count_details) ? void 0 : t.vote) ? n : 0,
                p = 0 === Y ? 0 : d / Y,
                m = V.has(s),
                g = d >= q && 0 !== d,
                h = U && null != (l = null == u ? void 0 : u.me_vote) && l,
                b = S({
                    didSelfVote: h,
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
                                    ? _.ZP.getURL(e.name)
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
                didSelfVote: h,
                style: b,
                shouldAnimateTransition: z && !v,
                votesPercentage: Math.round(100 * p),
                votes: (0, r.EQ)(A)
                    .with(i.C.IMAGE_ONLY_ANSWERS, () => '('.concat(d.toLocaleString(), ')'))
                    .otherwise(() => x.intl.formatToPlainString(x.t.XRkuoa, { count: d.toLocaleString() }))
            };
        }),
        J = (0, r.EQ)({
            isExpired: B,
            canSubmitVote: L,
            hasVoted: U,
            isEditingVote: F,
            canRemoveVote: R,
            isInteractive: G,
            showResults: K
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: x.intl.string(x.t.JwkNU1),
                presentation: 'button',
                enabled: k,
                type: 'submit'
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: x.intl.string(x.t.XhQEh4),
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
                    label: x.intl.string(x.t.gNj6Ii),
                    presentation: 'secondaryButton',
                    enabled: !0,
                    type: 'showVotes'
                })
            )
            .otherwise(() => ({
                label: x.intl.string(x.t.JwkNU1),
                presentation: 'button',
                enabled: L,
                type: 'submit'
            })),
        $ = (0, g.isIOS)() ? x.intl.string(x.t.PVATMz) : x.intl.string(x.t.cHfFqq),
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
                    label: x.intl.string(x.t.trrip6),
                    presentation: 'text',
                    enabled: !1
                })
            )
            .with({ isEditingVote: !0 }, () => ({
                label: x.intl.string(x.t['ETE/oK']),
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
                      label: x.intl.string(x.t['/KHAUF']),
                      presentation: 'textButton',
                      enabled: !0,
                      type: 'showVotes'
                  },
        en = h.allow_multiselect,
        er = (0, r.EQ)({
            isInteractive: G,
            isExpired: B,
            canSelectMultipleAnswers: en
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => x.intl.string(x.t.yCXvxc))
            .otherwise(() => x.intl.string(x.t['9Y2wKC']));
    return {
        question: h.question,
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
        resources: (0, O.Z)({
            theme: d,
            layoutType: A
        }),
        containerStyle: 'normal',
        primaryAction: J,
        isInteractive: G,
        canTapAnswers: Z,
        canSelectMultipleAnswers: en,
        hasSelectedAnswer: k,
        canShowVoteCounts: D,
        hasVoted: U,
        isExpired: B,
        myAvatarUrl: T,
        secondaryAction: ee,
        tertiaryAction: et
    };
}
