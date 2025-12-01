n.d(t, {
    Tk: () => R,
    ZP: () => w,
    ef: () => A,
    r8: () => P,
}),
    n(388685),
    n(314940);
var r = n(278074),
    i = n(263568),
    a = n(607070),
    o = n(339085),
    s = n(633302),
    l = n(715903),
    c = n(69882),
    u = n(592125),
    d = n(271383),
    f = n(375954),
    p = n(594174),
    _ = n(768581),
    m = n(176354),
    h = n(358085),
    g = n(798628),
    E = n(79390),
    b = n(839963),
    y = n(897325),
    O = n(57101),
    v = n(562293),
    S = n(981631),
    I = n(388032);
let T = {
    channelId: S.lds,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1,
};
function A(e, t) {
    for (let n of e) if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n;
}
let C = (e) =>
    (0, r.EQ)(e)
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
        .otherwise(() => "normalVote");
function N(e) {
    let { animateEmoji: t = !1, size: n = 48 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (null == e) return;
    let r = e.animated;
    if (null == r && null != e.id) {
        var i, a;
        r = null != (a = null == (i = o.ZP.getCustomEmojiById(e.id)) ? void 0 : i.animated) && a;
    }
    let l = t && null != r && r;
    return {
        id: null == e.id ? null : "".concat(e.id),
        name: e.name,
        displayName: null == e.id ? s.ZP.convertSurrogateToName(e.name) : e.name,
        src:
            null == e.id
                ? m.ZP.getURL(e.name)
                : _.ZP.getEmojiURL({
                      id: e.id,
                      animated: l,
                      size: n,
                  }),
        animated: l,
    };
}
function P(e) {
    return null == e.poll || f.Z.getMessage(e.channel_id, e.id) === e;
}
function R(e, t) {
    var n, r, i, a;
    let { formattedExpirationLabel: o } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: s } = e;
    if (null == s) return;
    let p = e.state === S.yb.SENT,
        _ = p ? (null != o ? o : (0, v.H)(s.expiry)) : "",
        m = null == _ && p,
        {
            selectedAnswerIds: h,
            submitting: E,
            editing: b,
            showResults: y,
        } = null != (i = null != t ? t : (0, g.fU)(e.getChannelId(), e.id)) ? i : T,
        O = e.reactions,
        I = !0;
    if (!P(e)) {
        let t = f.Z.getMessage(e.channel_id, e.id);
        (I = !e.isSearchHit && null != t), (O = null != (a = null == t ? void 0 : t.reactions) ? a : O);
    }
    let A = h.size > 0,
        C = O.some((e) => !0 === e.me_vote),
        N = !b && C,
        R = N || m || y,
        w = p && I && (!C || b || R),
        D = null == (r = u.Z.getChannel(e.getChannelId())) || null == (n = r.getGuildId) ? void 0 : n.call(r),
        x = null != D ? d.ZP.getSelfMember(D) : null,
        L = (0, l.EY)(x),
        j = (0, c.b)(x),
        M = !E && A && !N && p && !L && !j;
    return {
        poll: s,
        canTapAnswers: w,
        canRemoveVote: N && p && !m,
        canShowVoteCounts: R,
        canSubmitVote: M,
        expirationLabel: _,
        hasSelectedAnswer: A,
        hasVoted: N,
        hasVoteRecorded: C,
        isEditingVote: b,
        isExpired: m,
        isInteractive: I,
        isSent: p,
        reactions: O,
        selectedAnswerIds: h,
        submitting: E,
        tapShouldOpenVotersModal: R,
        showResults: y,
    };
}
function w(e, t) {
    var n, o;
    let {
            animateEmoji: s = !1,
            theme: l = "dark",
            formattedExpirationLabel: c,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: d } = e;
    if (null == d) return;
    let f = p.default.getCurrentUser();
    if (null == f) return;
    let _ = a.Z.useReducedMotion,
        m = null == (o = u.Z.getChannel(e.getChannelId())) || null == (n = o.getGuildId) ? void 0 : n.call(o),
        g = (0, y.E)(f, m),
        v = d.answers,
        S = d.layout_type,
        T = R(e, t, { formattedExpirationLabel: c });
    if (null == T) return;
    let {
            canTapAnswers: P,
            canRemoveVote: w,
            canShowVoteCounts: D,
            canSubmitVote: x,
            expirationLabel: L = I.intl.string(I.t["e+J3JZ"]),
            hasSelectedAnswer: j,
            hasVoted: M,
            isEditingVote: k,
            isExpired: U,
            isInteractive: G,
            reactions: Z,
            selectedAnswerIds: B,
            submitting: F,
            tapShouldOpenVotersModal: V,
            showResults: H,
        } = T,
        Y = (0, E.cZ)(Z),
        W = I.intl.formatToPlainString(I.t.XRkuof, { count: Y }),
        K = Math.max(
            ...v.map((e) => {
                var t, n;
                let r = A(Z, "".concat(e.answer_id));
                return null != (n = null == r || null == (t = r.count_details) ? void 0 : t.vote) ? n : 0;
            }),
        ),
        z = v.map((e) => {
            var t, n, a;
            let o = "".concat(e.answer_id),
                l = A(Z, o),
                c = null != (n = null == l || null == (t = l.count_details) ? void 0 : t.vote) ? n : 0,
                u = 0 === Y ? 0 : c / Y,
                d = B.has(o),
                f = c >= K && 0 !== c,
                p = M && null != (a = null == l ? void 0 : l.me_vote) && a,
                m = C({
                    didSelfVote: p,
                    hasVoted: M,
                    isExpired: U,
                    isSelected: d,
                    isLeader: f,
                    showResults: H,
                });
            return {
                answerId: o,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: N(e.poll_media.emoji, { animateEmoji: s }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids,
                },
                isSelected: d,
                isVictor: U && f,
                didSelfVote: p,
                style: m,
                shouldAnimateTransition: F && !_,
                votesPercentage: Math.round(100 * u),
                votes: (0, r.EQ)(S)
                    .with(i.C.IMAGE_ONLY_ANSWERS, () => "(".concat(c.toLocaleString(), ")"))
                    .otherwise(() => I.intl.formatToPlainString(I.t.XRkuof, { count: c })),
            };
        }),
        q = (0, r.EQ)({
            isExpired: U,
            canSubmitVote: x,
            hasVoted: M,
            isEditingVote: k,
            canRemoveVote: w,
            isInteractive: G,
            showResults: H,
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: I.intl.string(I.t.JwkNU4),
                presentation: "button",
                enabled: j,
                type: "submit",
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: I.intl.string(I.t.XhQEh8),
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
                    label: I.intl.string(I.t.gNj6In),
                    presentation: "secondaryButton",
                    enabled: !0,
                    type: "showVotes",
                }),
            )
            .otherwise(() => ({
                label: I.intl.string(I.t.JwkNU4),
                presentation: "button",
                enabled: x,
                type: "submit",
            })),
        Q = (0, h.isIOS)() ? I.intl.string(I.t["PVATM/"]) : I.intl.string(I.t.cHfFql),
        X = (0, r.EQ)({
            isExpired: U,
            isInteractive: G,
            isEditingVote: k,
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1,
                },
                () => ({
                    label: I.intl.string(I.t.trrip0),
                    presentation: "text",
                    enabled: !1,
                }),
            )
            .with({ isEditingVote: !0 }, () => ({
                label: I.intl.string(I.t["ETE/oC"]),
                presentation: "textButton",
                enabled: !0,
                type: "cancel",
            }))
            .otherwise(() => ({
                label: W,
                secondaryLabel: L,
                accessibilityHint: Q,
                presentation: "text",
                enabled: !0,
                type: "showVoterDetails",
            })),
        J =
            !G || U || M || H
                ? void 0
                : {
                      label: I.intl.string(I.t["/KHAUF"]),
                      presentation: "textButton",
                      enabled: !0,
                      type: "showVotes",
                  },
        $ = d.allow_multiselect,
        ee = (0, r.EQ)({
            isInteractive: G,
            isExpired: U,
            canSelectMultipleAnswers: $,
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => I.intl.string(I.t.yCXvxa))
            .otherwise(() => I.intl.string(I.t["9Y2wKO"]));
    return {
        question: d.question,
        promptLabel: ee,
        answers: z,
        answersInteraction: (0, r.EQ)({
            tapShouldOpenVotersModal: V,
            canTapAnswers: P,
            canSelectMultipleAnswers: $,
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => b.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => b.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => b.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => b.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: V ? Q : void 0,
        layoutType: S,
        resources: (0, O.Z)({
            theme: l,
            layoutType: S,
        }),
        containerStyle: "normal",
        primaryAction: q,
        isInteractive: G,
        canTapAnswers: P,
        canSelectMultipleAnswers: $,
        hasSelectedAnswer: j,
        canShowVoteCounts: D,
        hasVoted: M,
        isExpired: U,
        myAvatarUrl: g,
        secondaryAction: X,
        tertiaryAction: J,
    };
}
