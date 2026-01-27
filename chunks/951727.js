n.d(t, {
    Ay: () => T,
    Ej: () => C,
    Ls: () => I,
    j8: () => S,
}),
    n(896048),
    n(801541);
var r = n(889137),
    i = n(966974),
    l = n(775602),
    a = n(508675),
    s = n(7584),
    o = n(229527),
    c = n(316031),
    u = n(734057),
    d = n(696451),
    p = n(320501),
    m = n(287809),
    f = n(486020),
    g = n(690521),
    h = n(723702),
    _ = n(862780),
    b = n(969632),
    A = n(438437),
    y = n(842901),
    v = n(589590),
    x = n(708676),
    O = n(652215),
    E = n(985018);
let j = {
    channelId: O.dJq,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: !1,
};

function C(e, t) {
    for (let n of e) if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n;
}

function I(e) {
    return null == e.poll || p.A.getMessage(e.channel_id, e.id) === e;
}

function S(e, t) {
    var n, r, i, l;
    let { formattedExpirationLabel: a } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: s } = e;
    if (null == s) return;
    let m = e.state === O.cmJ.SENT,
        f = m ? (null != a ? a : (0, x.J)(s.expiry)) : "",
        g = null == f && m,
        {
            selectedAnswerIds: h,
            submitting: b,
            editing: A,
            showResults: y,
        } = null != (n = null != t ? t : (0, _.xt)(e.getChannelId(), e.id)) ? n : j,
        v = e.reactions,
        E = !0;
    if (!I(e)) {
        let t = p.A.getMessage(e.channel_id, e.id);
        (E = !e.isSearchHit && null != t), (v = null != (l = null == t ? void 0 : t.reactions) ? l : v);
    }
    let C = h.size > 0,
        S = v.some((e) => !0 === e.me_vote),
        T = !A && S,
        N = T || g || y,
        P = m && E && (!S || A || N),
        w = null == (i = u.A.getChannel(e.getChannelId())) || null == (r = i.getGuildId) ? void 0 : r.call(i),
        R = null != w ? d.Ay.getSelfMember(w) : null,
        D = (0, o.TR)(R),
        L = (0, c.Z)(R),
        M = !b && C && !T && m && !D && !L;
    return {
        poll: s,
        canTapAnswers: P,
        canRemoveVote: T && m && !g,
        canShowVoteCounts: N,
        canSubmitVote: M,
        expirationLabel: f,
        hasSelectedAnswer: C,
        hasVoted: T,
        hasVoteRecorded: S,
        isEditingVote: A,
        isExpired: g,
        isInteractive: E,
        isSent: m,
        reactions: v,
        selectedAnswerIds: h,
        submitting: b,
        tapShouldOpenVotersModal: N,
        showResults: y,
    };
}

function T(e, t) {
    var n, o;
    let {
            animateEmoji: c = !1,
            theme: d = "dark",
            formattedExpirationLabel: p,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: _ } = e;
    if (null == _) return;
    let x = m.default.getCurrentUser();
    if (null == x) return;
    let O = l.A.useReducedMotion,
        j = null == (o = u.A.getChannel(e.getChannelId())) || null == (n = o.getGuildId) ? void 0 : n.call(o),
        I = (0, y.T)(x, j),
        T = _.answers,
        N = _.layout_type,
        P = S(e, t, {
            formattedExpirationLabel: p,
        });
    if (null == P) return;
    let {
            canTapAnswers: w,
            canRemoveVote: R,
            canShowVoteCounts: D,
            canSubmitVote: L,
            expirationLabel: M = E.intl.string(E.t["e+J3JZ"]),
            hasSelectedAnswer: k,
            hasVoted: U,
            isEditingVote: G,
            isExpired: B,
            isInteractive: F,
            reactions: H,
            selectedAnswerIds: V,
            submitting: z,
            tapShouldOpenVotersModal: W,
            showResults: K,
        } = P,
        Y = (0, b.aw)(H),
        q = E.intl.formatToPlainString(E.t.XRkuof, {
            count: Y,
        }),
        J = Math.max(
            ...T.map((e) => {
                var t, n;
                let r = C(H, "".concat(e.answer_id));
                return null != (t = null == r || null == (n = r.count_details) ? void 0 : n.vote) ? t : 0;
            }),
        ),
        Q = T.map((e) => {
            var t, n, l;
            let o,
                u = "".concat(e.answer_id),
                d = C(H, u),
                p = null != (t = null == d || null == (l = d.count_details) ? void 0 : l.vote) ? t : 0,
                m = 0 === Y ? 0 : p / Y,
                h = V.has(u),
                _ = p >= J && 0 !== p,
                b = U && null != (n = null == d ? void 0 : d.me_vote) && n,
                A =
                    ((o = {
                        didSelfVote: b,
                        hasVoted: U,
                        isExpired: B,
                        isSelected: h,
                        isLeader: _,
                        showResults: K,
                    }),
                    (0, r.YW)(o)
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
                            r = null != (i = null == (l = a.Ay.getCustomEmojiById(e.id)) ? void 0 : l.animated) && i;
                        }
                        let o = t && null != r && r;
                        return {
                            id: null == e.id ? null : "".concat(e.id),
                            name: e.name,
                            displayName: null == e.id ? s.Ay.convertSurrogateToName(e.name) : e.name,
                            src:
                                null == e.id
                                    ? g.Ay.getURL(e.name)
                                    : f.Ay.getEmojiURL({
                                          id: e.id,
                                          animated: o,
                                          size: n,
                                      }),
                            animated: o,
                        };
                    })(e.poll_media.emoji, {
                        animateEmoji: c,
                    }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids,
                },
                isSelected: h,
                isVictor: B && _,
                didSelfVote: b,
                style: A,
                shouldAnimateTransition: z && !O,
                votesPercentage: Math.round(100 * m),
                votes: (0, r.YW)(N)
                    .with(i.Z.IMAGE_ONLY_ANSWERS, () => "(".concat(p.toLocaleString(), ")"))
                    .otherwise(() =>
                        E.intl.formatToPlainString(E.t.XRkuof, {
                            count: p,
                        }),
                    ),
            };
        }),
        Z = (0, r.YW)({
            isExpired: B,
            canSubmitVote: L,
            hasVoted: U,
            isEditingVote: G,
            canRemoveVote: R,
            isInteractive: F,
            showResults: K,
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
                    label: E.intl.string(E.t.JwkNU4),
                    presentation: "button",
                    enabled: k,
                    type: "submit",
                }),
            )
            .with(
                {
                    canRemoveVote: !0,
                },
                () => ({
                    label: E.intl.string(E.t.XhQEh8),
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
                    label: E.intl.string(E.t.gNj6In),
                    presentation: "secondaryButton",
                    enabled: !0,
                    type: "showVotes",
                }),
            )
            .otherwise(() => ({
                label: E.intl.string(E.t.JwkNU4),
                presentation: "button",
                enabled: L,
                type: "submit",
            })),
        X = (0, h.isIOS)() ? E.intl.string(E.t["PVATM/"]) : E.intl.string(E.t.cHfFql),
        $ = (0, r.YW)({
            isExpired: B,
            isInteractive: F,
            isEditingVote: G,
        })
            .with(
                {
                    isInteractive: !1,
                    isExpired: !1,
                },
                () => ({
                    label: E.intl.string(E.t.trrip0),
                    presentation: "text",
                    enabled: !1,
                }),
            )
            .with(
                {
                    isEditingVote: !0,
                },
                () => ({
                    label: E.intl.string(E.t["ETE/oC"]),
                    presentation: "textButton",
                    enabled: !0,
                    type: "cancel",
                }),
            )
            .otherwise(() => ({
                label: q,
                secondaryLabel: M,
                accessibilityHint: X,
                presentation: "text",
                enabled: !0,
                type: "showVoterDetails",
            })),
        ee =
            !F || B || U || K
                ? void 0
                : {
                      label: E.intl.string(E.t["/KHAUF"]),
                      presentation: "textButton",
                      enabled: !0,
                      type: "showVotes",
                  },
        et = _.allow_multiselect,
        en = (0, r.YW)({
            isInteractive: F,
            isExpired: B,
            canSelectMultipleAnswers: et,
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
                () => E.intl.string(E.t.yCXvxa),
            )
            .otherwise(() => E.intl.string(E.t["9Y2wKO"]));
    return {
        question: _.question,
        promptLabel: en,
        answers: Q,
        answersInteraction: (0, r.YW)({
            tapShouldOpenVotersModal: W,
            canTapAnswers: w,
            canSelectMultipleAnswers: et,
        })
            .with(
                {
                    tapShouldOpenVotersModal: !0,
                },
                () => A.CQ.LIST,
            )
            .with(
                {
                    canTapAnswers: !1,
                },
                () => A.CQ.LIST,
            )
            .with(
                {
                    canSelectMultipleAnswers: !1,
                },
                () => A.CQ.RADIO_BUTTONS,
            )
            .with(
                {
                    canSelectMultipleAnswers: !0,
                },
                () => A.CQ.CHECKBOXES,
            )
            .exhaustive(),
        answerTapAccessibilityLabel: W ? X : void 0,
        layoutType: N,
        resources: (0, v.A)({
            theme: d,
            layoutType: N,
        }),
        containerStyle: "normal",
        primaryAction: Z,
        isInteractive: F,
        canTapAnswers: w,
        canSelectMultipleAnswers: et,
        hasSelectedAnswer: k,
        canShowVoteCounts: D,
        hasVoted: U,
        isExpired: B,
        myAvatarUrl: I,
        secondaryAction: $,
        tertiaryAction: ee,
    };
}
