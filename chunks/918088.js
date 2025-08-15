n.d(t, {
    Tk: () => T,
    ZP: () => P,
    ef: () => I,
    r8: () => S,
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
    _ = n(176354),
    g = n(358085),
    h = n(798628),
    b = n(79390),
    E = n(839963),
    C = n(897325),
    v = n(57101),
    O = n(562293),
    y = n(981631),
    x = n(388032);
let j = {
    channelId: y.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1,
};
function I(e, t) {
    for (let n of e) if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n;
}
function S(e) {
    return null == e.poll || p.Z.getMessage(e.channel_id, e.id) === e;
}
function T(e, t) {
    var n, r, i, l;
    let { formattedExpirationLabel: a } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: o } = e;
    if (null == o) return;
    let m = e.state === y.yb.SENT,
        f = m ? (null != a ? a : (0, O.H)(o.expiry)) : "",
        _ = null == f && m,
        {
            selectedAnswerIds: g,
            submitting: b,
            editing: E,
            showResults: C,
        } = null != (i = null != t ? t : (0, h.fU)(e.getChannelId(), e.id)) ? i : j,
        v = e.reactions,
        x = !0;
    if (!S(e)) {
        let t = p.Z.getMessage(e.channel_id, e.id);
        (x = !e.isSearchHit && null != t), (v = null != (l = null == t ? void 0 : t.reactions) ? l : v);
    }
    let I = g.size > 0,
        T = v.some((e) => !0 === e.me_vote),
        P = !E && T,
        N = P || _ || C,
        A = m && x && (!T || E || N),
        w = null == (r = u.Z.getChannel(e.getChannelId())) || null == (n = r.getGuildId) ? void 0 : n.call(r),
        Z = null != w ? d.ZP.getSelfMember(w) : null,
        R = (0, s.EY)(Z),
        L = (0, c.b)(Z),
        D = !b && I && !P && m && !R && !L;
    return {
        poll: o,
        canTapAnswers: A,
        canRemoveVote: P && m && !_,
        canShowVoteCounts: N,
        canSubmitVote: D,
        expirationLabel: f,
        hasSelectedAnswer: I,
        hasVoted: P,
        hasVoteRecorded: T,
        isEditingVote: E,
        isExpired: _,
        isInteractive: x,
        isSent: m,
        reactions: v,
        selectedAnswerIds: g,
        submitting: b,
        tapShouldOpenVotersModal: N,
        showResults: C,
    };
}
function P(e, t) {
    var n, s;
    let {
            animateEmoji: c = !1,
            theme: d = "dark",
            formattedExpirationLabel: p,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: h } = e;
    if (null == h) return;
    let O = m.default.getCurrentUser();
    if (null == O) return;
    let y = l.Z.useReducedMotion,
        j = null == (s = u.Z.getChannel(e.getChannelId())) || null == (n = s.getGuildId) ? void 0 : n.call(s),
        S = (0, C.E)(O, j),
        P = h.answers,
        N = h.layout_type,
        A = T(e, t, { formattedExpirationLabel: p });
    if (null == A) return;
    let {
            canTapAnswers: w,
            canRemoveVote: Z,
            canShowVoteCounts: R,
            canSubmitVote: L,
            expirationLabel: D = x.intl.string(x.t["e+J3JS"]),
            hasSelectedAnswer: M,
            hasVoted: k,
            isEditingVote: U,
            isExpired: F,
            isInteractive: B,
            reactions: G,
            selectedAnswerIds: H,
            submitting: V,
            tapShouldOpenVotersModal: z,
            showResults: W,
        } = A,
        Y = (0, b.cZ)(G),
        K = x.intl.formatToPlainString(x.t.XRkuoa, { count: Y.toLocaleString() }),
        X = Math.max(
            ...P.map((e) => {
                var t, n;
                let r = I(G, "".concat(e.answer_id));
                return null != (n = null == r || null == (t = r.count_details) ? void 0 : t.vote) ? n : 0;
            }),
        ),
        q = P.map((e) => {
            var t, n, l;
            let s,
                u = "".concat(e.answer_id),
                d = I(G, u),
                p = null != (n = null == d || null == (t = d.count_details) ? void 0 : t.vote) ? n : 0,
                m = 0 === Y ? 0 : p / Y,
                g = H.has(u),
                h = p >= X && 0 !== p,
                b = k && null != (l = null == d ? void 0 : d.me_vote) && l,
                E =
                    ((s = {
                        didSelfVote: b,
                        hasVoted: k,
                        isExpired: F,
                        isSelected: g,
                        isLeader: h,
                        showResults: W,
                    }),
                    (0, r.EQ)(s)
                        .with(
                            {
                                isExpired: !0,
                                isLeader: !0,
                                didSelfVote: !0,
                            },
                            () => "victorSelected",
                        )
                        .with(
                            {
                                isExpired: !0,
                                isLeader: !0,
                                didSelfVote: !1,
                            },
                            () => "victorNotSelected",
                        )
                        .with(
                            {
                                isExpired: !0,
                                didSelfVote: !0,
                            },
                            () => "loserSelected",
                        )
                        .with({ isExpired: !0 }, () => "notVoted")
                        .with(
                            {
                                didSelfVote: !0,
                                isExpired: !1,
                            },
                            () => "voted",
                        )
                        .with(
                            {
                                hasVoted: !0,
                                isExpired: !1,
                            },
                            () => "notVoted",
                        )
                        .with({ isSelected: !0 }, () => "selected")
                        .with(
                            {
                                isExpired: !1,
                                showResults: !0,
                            },
                            () => "notVoted",
                        )
                        .otherwise(() => "normalVote"));
            return {
                answerId: u,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: (function (e) {
                        let { animateEmoji: t = !1, size: n = 48 } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (null == e) return;
                        let r = e.animated;
                        if (null == r && null != e.id) {
                            var i, l;
                            r = null != (l = null == (i = a.ZP.getCustomEmojiById(e.id)) ? void 0 : i.animated) && l;
                        }
                        let s = t && null != r && r;
                        return {
                            id: null == e.id ? null : "".concat(e.id),
                            name: e.name,
                            displayName: null == e.id ? o.ZP.convertSurrogateToName(e.name) : e.name,
                            src:
                                null == e.id
                                    ? _.ZP.getURL(e.name)
                                    : f.ZP.getEmojiURL({
                                          id: e.id,
                                          animated: s,
                                          size: n,
                                      }),
                            animated: s,
                        };
                    })(e.poll_media.emoji, { animateEmoji: c }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids,
                },
                isSelected: g,
                isVictor: F && h,
                didSelfVote: b,
                style: E,
                shouldAnimateTransition: V && !y,
                votesPercentage: Math.round(100 * m),
                votes: (0, r.EQ)(N)
                    .with(i.C.IMAGE_ONLY_ANSWERS, () => "(".concat(p.toLocaleString(), ")"))
                    .otherwise(() => x.intl.formatToPlainString(x.t.XRkuoa, { count: p.toLocaleString() })),
            };
        }),
        Q = (0, r.EQ)({
            isExpired: F,
            canSubmitVote: L,
            hasVoted: k,
            isEditingVote: U,
            canRemoveVote: Z,
            isInteractive: B,
            showResults: W,
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: x.intl.string(x.t.JwkNU1),
                presentation: "button",
                enabled: M,
                type: "submit",
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: x.intl.string(x.t.XhQEh4),
                presentation: "secondaryButton",
                enabled: !0,
                type: "remove",
            }))
            .with(
                {
                    hasVoted: !1,
                    showResults: !0,
                },
                () => ({
                    label: x.intl.string(x.t.gNj6Ii),
                    presentation: "secondaryButton",
                    enabled: !0,
                    type: "showVotes",
                }),
            )
            .otherwise(() => ({
                label: x.intl.string(x.t.JwkNU1),
                presentation: "button",
                enabled: L,
                type: "submit",
            })),
        J = (0, g.isIOS)() ? x.intl.string(x.t.PVATMz) : x.intl.string(x.t.cHfFqq),
        $ = (0, r.EQ)({
            isExpired: F,
            isInteractive: B,
            isEditingVote: U,
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1,
                },
                () => ({
                    label: x.intl.string(x.t.trrip6),
                    presentation: "text",
                    enabled: !1,
                }),
            )
            .with({ isEditingVote: !0 }, () => ({
                label: x.intl.string(x.t["ETE/oK"]),
                presentation: "textButton",
                enabled: !0,
                type: "cancel",
            }))
            .otherwise(() => ({
                label: K,
                secondaryLabel: D,
                accessibilityHint: J,
                presentation: "text",
                enabled: !0,
                type: "showVoterDetails",
            })),
        ee =
            !B || F || k || W
                ? void 0
                : {
                      label: x.intl.string(x.t["/KHAUF"]),
                      presentation: "textButton",
                      enabled: !0,
                      type: "showVotes",
                  },
        et = h.allow_multiselect,
        en = (0, r.EQ)({
            isInteractive: B,
            isExpired: F,
            canSelectMultipleAnswers: et,
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => x.intl.string(x.t.yCXvxc))
            .otherwise(() => x.intl.string(x.t["9Y2wKC"]));
    return {
        question: h.question,
        promptLabel: en,
        answers: q,
        answersInteraction: (0, r.EQ)({
            tapShouldOpenVotersModal: z,
            canTapAnswers: w,
            canSelectMultipleAnswers: et,
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => E.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => E.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => E.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => E.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: z ? J : void 0,
        layoutType: N,
        resources: (0, v.Z)({
            theme: d,
            layoutType: N,
        }),
        containerStyle: "normal",
        primaryAction: Q,
        isInteractive: B,
        canTapAnswers: w,
        canSelectMultipleAnswers: et,
        hasSelectedAnswer: M,
        canShowVoteCounts: R,
        hasVoted: k,
        isExpired: F,
        myAvatarUrl: S,
        secondaryAction: $,
        tertiaryAction: ee,
    };
}
