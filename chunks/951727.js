n.d(t, {
    Ay: () => P,
    Ej: () => T,
    Ls: () => R,
    j8: () => w,
}),
    n(896048),
    n(801541);
var r = n(889137),
    i = n(966974),
    a = n(775602),
    s = n(508675),
    o = n(7584),
    l = n(229527),
    c = n(316031),
    u = n(734057),
    d = n(696451),
    f = n(320501),
    p = n(287809),
    _ = n(486020),
    h = n(690521),
    m = n(723702),
    g = n(862780),
    E = n(969632),
    b = n(438437),
    y = n(842901),
    O = n(589590),
    A = n(708676),
    v = n(652215),
    S = n(985018);
let I = {
    channelId: v.dJq,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1,
};

function T(e, t) {
    for (let n of e) if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n;
}
let C = (e) =>
    (0, r.YW)(e)
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
        .with(
            {
                isExpired: !0,
            },
            () => "notVoted",
        )
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
        .with(
            {
                isSelected: !0,
            },
            () => "selected",
        )
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
        r = null != (i = null == (a = s.Ay.getCustomEmojiById(e.id)) ? void 0 : a.animated) && i;
    }
    let l = t && null != r && r;
    return {
        id: null == e.id ? null : "".concat(e.id),
        name: e.name,
        displayName: null == e.id ? o.Ay.convertSurrogateToName(e.name) : e.name,
        src:
            null == e.id
                ? h.Ay.getURL(e.name)
                : _.Ay.getEmojiURL({
                      id: e.id,
                      animated: l,
                      size: n,
                  }),
        animated: l,
    };
}

function R(e) {
    return null == e.poll || f.A.getMessage(e.channel_id, e.id) === e;
}

function w(e, t) {
    var n, r, i, a;
    let { formattedExpirationLabel: s } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: o } = e;
    if (null == o) return;
    let p = e.state === v.cmJ.SENT,
        _ = p ? (null != s ? s : (0, A.J)(o.expiry)) : "",
        h = null == _ && p,
        {
            selectedAnswerIds: m,
            submitting: E,
            editing: b,
            showResults: y,
        } = null != (n = null != t ? t : (0, g.xt)(e.getChannelId(), e.id)) ? n : I,
        O = e.reactions,
        S = !0;
    if (!R(e)) {
        let t = f.A.getMessage(e.channel_id, e.id);
        (S = !e.isSearchHit && null != t), (O = null != (a = null == t ? void 0 : t.reactions) ? a : O);
    }
    let T = m.size > 0,
        C = O.some((e) => !0 === e.me_vote),
        N = !b && C,
        w = N || h || y,
        P = p && S && (!C || b || w),
        D = null == (i = u.A.getChannel(e.getChannelId())) || null == (r = i.getGuildId) ? void 0 : r.call(i),
        x = null != D ? d.Ay.getSelfMember(D) : null,
        L = (0, l.TR)(x),
        j = (0, c.Z)(x),
        M = !E && T && !N && p && !L && !j;
    return {
        poll: o,
        canTapAnswers: P,
        canRemoveVote: N && p && !h,
        canShowVoteCounts: w,
        canSubmitVote: M,
        expirationLabel: _,
        hasSelectedAnswer: T,
        hasVoted: N,
        hasVoteRecorded: C,
        isEditingVote: b,
        isExpired: h,
        isInteractive: S,
        isSent: p,
        reactions: O,
        selectedAnswerIds: m,
        submitting: E,
        tapShouldOpenVotersModal: w,
        showResults: y,
    };
}

function P(e, t) {
    var n, s;
    let {
            animateEmoji: o = !1,
            theme: l = "dark",
            formattedExpirationLabel: c,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: d } = e;
    if (null == d) return;
    let f = p.default.getCurrentUser();
    if (null == f) return;
    let _ = a.A.useReducedMotion,
        h = null == (s = u.A.getChannel(e.getChannelId())) || null == (n = s.getGuildId) ? void 0 : n.call(s),
        g = (0, y.T)(f, h),
        A = d.answers,
        v = d.layout_type,
        I = w(e, t, {
            formattedExpirationLabel: c,
        });
    if (null == I) return;
    let {
            canTapAnswers: R,
            canRemoveVote: P,
            canShowVoteCounts: D,
            canSubmitVote: x,
            expirationLabel: L = S.intl.string(S.t["e+J3JZ"]),
            hasSelectedAnswer: j,
            hasVoted: M,
            isEditingVote: k,
            isExpired: U,
            isInteractive: G,
            reactions: V,
            selectedAnswerIds: F,
            submitting: B,
            tapShouldOpenVotersModal: H,
            showResults: Y,
        } = I,
        W = (0, E.aw)(V),
        K = S.intl.formatToPlainString(S.t.XRkuof, {
            count: W,
        }),
        z = Math.max(
            ...A.map((e) => {
                var t, n;
                let r = T(V, "".concat(e.answer_id));
                return null != (t = null == r || null == (n = r.count_details) ? void 0 : n.vote) ? t : 0;
            }),
        ),
        q = A.map((e) => {
            var t, n, a;
            let s = "".concat(e.answer_id),
                l = T(V, s),
                c = null != (t = null == l || null == (a = l.count_details) ? void 0 : a.vote) ? t : 0,
                u = 0 === W ? 0 : c / W,
                d = F.has(s),
                f = c >= z && 0 !== c,
                p = M && null != (n = null == l ? void 0 : l.me_vote) && n,
                h = C({
                    didSelfVote: p,
                    hasVoted: M,
                    isExpired: U,
                    isSelected: d,
                    isLeader: f,
                    showResults: Y,
                });
            return {
                answerId: s,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: N(e.poll_media.emoji, {
                        animateEmoji: o,
                    }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids,
                },
                isSelected: d,
                isVictor: U && f,
                didSelfVote: p,
                style: h,
                shouldAnimateTransition: B && !_,
                votesPercentage: Math.round(100 * u),
                votes: (0, r.YW)(v)
                    .with(i.Z.IMAGE_ONLY_ANSWERS, () => "(".concat(c.toLocaleString(), ")"))
                    .otherwise(() =>
                        S.intl.formatToPlainString(S.t.XRkuof, {
                            count: c,
                        }),
                    ),
            };
        }),
        X = (0, r.YW)({
            isExpired: U,
            canSubmitVote: x,
            hasVoted: M,
            isEditingVote: k,
            canRemoveVote: P,
            isInteractive: G,
            showResults: Y,
        })
            .with(
                {
                    isInteractive: !1,
                },
                () => void 0,
            )
            .with(
                {
                    isExpired: !0,
                },
                () => void 0,
            )
            .with(
                {
                    isEditingVote: !0,
                },
                () => ({
                    label: S.intl.string(S.t.JwkNU4),
                    presentation: "button",
                    enabled: j,
                    type: "submit",
                }),
            )
            .with(
                {
                    canRemoveVote: !0,
                },
                () => ({
                    label: S.intl.string(S.t.XhQEh8),
                    presentation: "secondaryButton",
                    enabled: !0,
                    type: "remove",
                }),
            )
            .with(
                {
                    hasVoted: !1,
                    showResults: !0,
                },
                () => ({
                    label: S.intl.string(S.t.gNj6In),
                    presentation: "secondaryButton",
                    enabled: !0,
                    type: "showVotes",
                }),
            )
            .otherwise(() => ({
                label: S.intl.string(S.t.JwkNU4),
                presentation: "button",
                enabled: x,
                type: "submit",
            })),
        Z = (0, m.isIOS)() ? S.intl.string(S.t["PVATM/"]) : S.intl.string(S.t.cHfFql),
        Q = (0, r.YW)({
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
                    label: S.intl.string(S.t.trrip0),
                    presentation: "text",
                    enabled: !1,
                }),
            )
            .with(
                {
                    isEditingVote: !0,
                },
                () => ({
                    label: S.intl.string(S.t["ETE/oC"]),
                    presentation: "textButton",
                    enabled: !0,
                    type: "cancel",
                }),
            )
            .otherwise(() => ({
                label: K,
                secondaryLabel: L,
                accessibilityHint: Z,
                presentation: "text",
                enabled: !0,
                type: "showVoterDetails",
            })),
        $ =
            !G || U || M || Y
                ? void 0
                : {
                      label: S.intl.string(S.t["/KHAUF"]),
                      presentation: "textButton",
                      enabled: !0,
                      type: "showVotes",
                  },
        J = d.allow_multiselect,
        ee = (0, r.YW)({
            isInteractive: G,
            isExpired: U,
            canSelectMultipleAnswers: J,
        })
            .with(
                {
                    isInteractive: !1,
                },
                () => void 0,
            )
            .with(
                {
                    isExpired: !0,
                },
                () => void 0,
            )
            .with(
                {
                    canSelectMultipleAnswers: !0,
                },
                () => S.intl.string(S.t.yCXvxa),
            )
            .otherwise(() => S.intl.string(S.t["9Y2wKO"]));
    return {
        question: d.question,
        promptLabel: ee,
        answers: q,
        answersInteraction: (0, r.YW)({
            tapShouldOpenVotersModal: H,
            canTapAnswers: R,
            canSelectMultipleAnswers: J,
        })
            .with(
                {
                    tapShouldOpenVotersModal: !0,
                },
                () => b.CQ.LIST,
            )
            .with(
                {
                    canTapAnswers: !1,
                },
                () => b.CQ.LIST,
            )
            .with(
                {
                    canSelectMultipleAnswers: !1,
                },
                () => b.CQ.RADIO_BUTTONS,
            )
            .with(
                {
                    canSelectMultipleAnswers: !0,
                },
                () => b.CQ.CHECKBOXES,
            )
            .exhaustive(),
        answerTapAccessibilityLabel: H ? Z : void 0,
        layoutType: v,
        resources: (0, O.A)({
            theme: l,
            layoutType: v,
        }),
        containerStyle: "normal",
        primaryAction: X,
        isInteractive: G,
        canTapAnswers: R,
        canSelectMultipleAnswers: J,
        hasSelectedAnswer: j,
        canShowVoteCounts: D,
        hasVoted: M,
        isExpired: U,
        myAvatarUrl: g,
        secondaryAction: Q,
        tertiaryAction: $,
    };
}
