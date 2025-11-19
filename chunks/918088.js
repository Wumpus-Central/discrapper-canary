n.d(t, {
    Tk: () => P,
    ZP: () => D,
    ef: () => A,
    r8: () => R,
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
    _ = n(594174),
    p = n(768581),
    h = n(176354),
    m = n(358085),
    g = n(798628),
    E = n(79390),
    b = n(839963),
    y = n(897325),
    O = n(57101),
    v = n(562293),
    I = n(981631),
    T = n(388032);
let S = {
    channelId: I.lds,
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
                ? h.ZP.getURL(e.name)
                : p.ZP.getEmojiURL({
                      id: e.id,
                      animated: l,
                      size: n,
                  }),
        animated: l,
    };
}
function R(e) {
    return null == e.poll || f.Z.getMessage(e.channel_id, e.id) === e;
}
function P(e, t) {
    var n, r, i, a;
    let { formattedExpirationLabel: o } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: s } = e;
    if (null == s) return;
    let _ = e.state === I.yb.SENT,
        p = _ ? (null != o ? o : (0, v.H)(s.expiry)) : "",
        h = null == p && _,
        {
            selectedAnswerIds: m,
            submitting: E,
            editing: b,
            showResults: y,
        } = null != (i = null != t ? t : (0, g.fU)(e.getChannelId(), e.id)) ? i : S,
        O = e.reactions,
        T = !0;
    if (!R(e)) {
        let t = f.Z.getMessage(e.channel_id, e.id);
        (T = !e.isSearchHit && null != t), (O = null != (a = null == t ? void 0 : t.reactions) ? a : O);
    }
    let A = m.size > 0,
        C = O.some((e) => !0 === e.me_vote),
        N = !b && C,
        P = N || h || y,
        D = _ && T && (!C || b || P),
        w = null == (r = u.Z.getChannel(e.getChannelId())) || null == (n = r.getGuildId) ? void 0 : n.call(r),
        L = null != w ? d.ZP.getSelfMember(w) : null,
        x = (0, l.EY)(L),
        M = (0, c.b)(L),
        k = !E && A && !N && _ && !x && !M;
    return {
        poll: s,
        canTapAnswers: D,
        canRemoveVote: N && _ && !h,
        canShowVoteCounts: P,
        canSubmitVote: k,
        expirationLabel: p,
        hasSelectedAnswer: A,
        hasVoted: N,
        hasVoteRecorded: C,
        isEditingVote: b,
        isExpired: h,
        isInteractive: T,
        isSent: _,
        reactions: O,
        selectedAnswerIds: m,
        submitting: E,
        tapShouldOpenVotersModal: P,
        showResults: y,
    };
}
function D(e, t) {
    var n, o;
    let {
            animateEmoji: s = !1,
            theme: l = "dark",
            formattedExpirationLabel: c,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: d } = e;
    if (null == d) return;
    let f = _.default.getCurrentUser();
    if (null == f) return;
    let p = a.Z.useReducedMotion,
        h = null == (o = u.Z.getChannel(e.getChannelId())) || null == (n = o.getGuildId) ? void 0 : n.call(o),
        g = (0, y.E)(f, h),
        v = d.answers,
        I = d.layout_type,
        S = P(e, t, { formattedExpirationLabel: c });
    if (null == S) return;
    let {
            canTapAnswers: R,
            canRemoveVote: D,
            canShowVoteCounts: w,
            canSubmitVote: L,
            expirationLabel: x = T.intl.string(T.t["e+J3JZ"]),
            hasSelectedAnswer: M,
            hasVoted: k,
            isEditingVote: j,
            isExpired: U,
            isInteractive: G,
            reactions: B,
            selectedAnswerIds: Z,
            submitting: F,
            tapShouldOpenVotersModal: V,
            showResults: H,
        } = S,
        Y = (0, E.cZ)(B),
        W = T.intl.formatToPlainString(T.t.XRkuof, { count: Y }),
        K = Math.max(
            ...v.map((e) => {
                var t, n;
                let r = A(B, "".concat(e.answer_id));
                return null != (n = null == r || null == (t = r.count_details) ? void 0 : t.vote) ? n : 0;
            }),
        ),
        z = v.map((e) => {
            var t, n, a;
            let o = "".concat(e.answer_id),
                l = A(B, o),
                c = null != (n = null == l || null == (t = l.count_details) ? void 0 : t.vote) ? n : 0,
                u = 0 === Y ? 0 : c / Y,
                d = Z.has(o),
                f = c >= K && 0 !== c,
                _ = k && null != (a = null == l ? void 0 : l.me_vote) && a,
                h = C({
                    didSelfVote: _,
                    hasVoted: k,
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
                didSelfVote: _,
                style: h,
                shouldAnimateTransition: F && !p,
                votesPercentage: Math.round(100 * u),
                votes: (0, r.EQ)(I)
                    .with(i.C.IMAGE_ONLY_ANSWERS, () => "(".concat(c.toLocaleString(), ")"))
                    .otherwise(() => T.intl.formatToPlainString(T.t.XRkuof, { count: c })),
            };
        }),
        q = (0, r.EQ)({
            isExpired: U,
            canSubmitVote: L,
            hasVoted: k,
            isEditingVote: j,
            canRemoveVote: D,
            isInteractive: G,
            showResults: H,
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: T.intl.string(T.t.JwkNU4),
                presentation: "button",
                enabled: M,
                type: "submit",
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: T.intl.string(T.t.XhQEh8),
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
                    label: T.intl.string(T.t.gNj6In),
                    presentation: "secondaryButton",
                    enabled: !0,
                    type: "showVotes",
                }),
            )
            .otherwise(() => ({
                label: T.intl.string(T.t.JwkNU4),
                presentation: "button",
                enabled: L,
                type: "submit",
            })),
        X = (0, m.isIOS)() ? T.intl.string(T.t["PVATM/"]) : T.intl.string(T.t.cHfFql),
        Q = (0, r.EQ)({
            isExpired: U,
            isInteractive: G,
            isEditingVote: j,
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1,
                },
                () => ({
                    label: T.intl.string(T.t.trrip0),
                    presentation: "text",
                    enabled: !1,
                }),
            )
            .with({ isEditingVote: !0 }, () => ({
                label: T.intl.string(T.t["ETE/oC"]),
                presentation: "textButton",
                enabled: !0,
                type: "cancel",
            }))
            .otherwise(() => ({
                label: W,
                secondaryLabel: x,
                accessibilityHint: X,
                presentation: "text",
                enabled: !0,
                type: "showVoterDetails",
            })),
        J =
            !G || U || k || H
                ? void 0
                : {
                      label: T.intl.string(T.t["/KHAUF"]),
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
            .with({ canSelectMultipleAnswers: !0 }, () => T.intl.string(T.t.yCXvxa))
            .otherwise(() => T.intl.string(T.t["9Y2wKO"]));
    return {
        question: d.question,
        promptLabel: ee,
        answers: z,
        answersInteraction: (0, r.EQ)({
            tapShouldOpenVotersModal: V,
            canTapAnswers: R,
            canSelectMultipleAnswers: $,
        })
            .with({ tapShouldOpenVotersModal: !0 }, () => b.Y7.LIST)
            .with({ canTapAnswers: !1 }, () => b.Y7.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => b.Y7.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => b.Y7.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: V ? X : void 0,
        layoutType: I,
        resources: (0, O.Z)({
            theme: l,
            layoutType: I,
        }),
        containerStyle: "normal",
        primaryAction: q,
        isInteractive: G,
        canTapAnswers: R,
        canSelectMultipleAnswers: $,
        hasSelectedAnswer: M,
        canShowVoteCounts: w,
        hasVoted: k,
        isExpired: U,
        myAvatarUrl: g,
        secondaryAction: Q,
        tertiaryAction: J,
    };
}
