n.d(t, { Ay: () => j, Ej: () => S, Ls: () => b, j8: () => y }), n(801541);
var i = n(889137),
    l = n(966974),
    a = n(775602),
    r = n(508675),
    s = n(7584),
    o = n(229527),
    d = n(316031),
    c = n(734057),
    u = n(696451),
    m = n(320501),
    _ = n(287809),
    h = n(486020),
    p = n(690521),
    g = n(723702),
    A = n(862780),
    f = n(969632),
    x = n(438437),
    E = n(842901),
    C = n(589590),
    I = n(708676),
    T = n(652215),
    v = n(985018);
let N = { channelId: T.dJq, selectedAnswerIds: new Set(), submitting: !1, editing: !1, showResults: !1 };
function S(e, t) {
    for (let n of e) if (("number" == typeof n.emoji.id ? `${n.emoji.id}` : n.emoji.id) === t) return n;
}
function b(e) {
    return null == e.poll || m.A.getMessage(e.channel_id, e.id) === e;
}
function y(e, t) {
    let { formattedExpirationLabel: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: i } = e;
    if (null == i) return;
    let l = e.state === T.cmJ.SENT,
        a = l ? (n ?? (0, I.J)(i.expiry)) : "",
        r = null == a && l,
        {
            selectedAnswerIds: s,
            submitting: _,
            editing: h,
            showResults: p,
        } = t ?? (0, A.xt)(e.getChannelId(), e.id) ?? N,
        g = e.reactions,
        f = !0;
    if (!b(e)) {
        let t = m.A.getMessage(e.channel_id, e.id);
        (f = !e.isSearchHit && null != t), (g = t?.reactions ?? g);
    }
    let x = s.size > 0,
        E = g.some((e) => !0 === e.me_vote),
        C = !h && E,
        v = C || r || p,
        S = l && f && (!E || h || v),
        y = c.A.getChannel(e.getChannelId())?.getGuildId?.(),
        j = null != y ? u.Ay.getSelfMember(y) : null,
        R = (0, o.TR)(j),
        L = (0, d.Z)(j),
        M = !_ && x && !C && l && !R && !L;
    return {
        poll: i,
        canTapAnswers: S,
        canRemoveVote: C && l && !r,
        canShowVoteCounts: v,
        canSubmitVote: M,
        expirationLabel: a,
        hasSelectedAnswer: x,
        hasVoted: C,
        hasVoteRecorded: E,
        isEditingVote: h,
        isExpired: r,
        isInteractive: f,
        isSent: l,
        reactions: g,
        selectedAnswerIds: s,
        submitting: _,
        tapShouldOpenVotersModal: v,
        showResults: p,
    };
}
function j(e, t) {
    let {
            animateEmoji: n = !1,
            theme: o = "dark",
            formattedExpirationLabel: d,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: u } = e;
    if (null == u) return;
    let m = _.default.getCurrentUser();
    if (null == m) return;
    let A = a.A.useReducedMotion,
        I = c.A.getChannel(e.getChannelId())?.getGuildId?.(),
        T = (0, E.T)(m, I),
        N = u.answers,
        b = u.layout_type,
        j = y(e, t, { formattedExpirationLabel: d });
    if (null == j) return;
    let {
            canTapAnswers: R,
            canRemoveVote: L,
            canShowVoteCounts: M,
            canSubmitVote: O,
            expirationLabel: P = v.intl.string(v.t["e+J3JZ"]),
            hasSelectedAnswer: D,
            hasVoted: k,
            isEditingVote: U,
            isExpired: w,
            isInteractive: G,
            reactions: B,
            selectedAnswerIds: F,
            submitting: H,
            tapShouldOpenVotersModal: V,
            showResults: z,
        } = j,
        W = (0, f.aw)(B),
        Y = v.intl.formatToPlainString(v.t.XRkuof, { count: W }),
        q = Math.max(
            ...N.map((e) => {
                let t = S(B, `${e.answer_id}`);
                return t?.count_details?.vote ?? 0;
            }),
        ),
        K = N.map((e) => {
            let t,
                a = `${e.answer_id}`,
                o = S(B, a),
                d = o?.count_details?.vote ?? 0,
                c = 0 === W ? 0 : d / W,
                u = F.has(a),
                m = d >= q && 0 !== d,
                _ = k && (o?.me_vote ?? !1),
                g =
                    ((t = { didSelfVote: _, hasVoted: k, isExpired: w, isSelected: u, isLeader: m, showResults: z }),
                    (0, i.YW)(t)
                        .with({ isExpired: !0, isLeader: !0, didSelfVote: !0 }, () => "victorSelected")
                        .with({ isExpired: !0, isLeader: !0, didSelfVote: !1 }, () => "victorNotSelected")
                        .with({ isExpired: !0, didSelfVote: !0 }, () => "loserSelected")
                        .with({ isExpired: !0 }, () => "notVoted")
                        .with({ didSelfVote: !0, isExpired: !1 }, () => "voted")
                        .with({ hasVoted: !0, isExpired: !1 }, () => "notVoted")
                        .with({ isSelected: !0 }, () => "selected")
                        .with({ isExpired: !1, showResults: !0 }, () => "notVoted")
                        .otherwise(() => "normalVote"));
            return {
                answerId: a,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: (function (e) {
                        let { animateEmoji: t = !1, size: n = 48 } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (null == e) return;
                        let i = e.animated;
                        null == i && null != e.id && (i = r.Ay.getCustomEmojiById(e.id)?.animated ?? !1);
                        let l = t && (i ?? !1);
                        return {
                            id: null == e.id ? null : `${e.id}`,
                            name: e.name,
                            displayName: null == e.id ? s.Ay.convertSurrogateToName(e.name) : e.name,
                            src:
                                null == e.id
                                    ? p.Ay.getURL(e.name)
                                    : h.Ay.getEmojiURL({ id: e.id, animated: l, size: n }),
                            animated: l,
                        };
                    })(e.poll_media.emoji, { animateEmoji: n }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids,
                },
                isSelected: u,
                isVictor: w && m,
                didSelfVote: _,
                style: g,
                shouldAnimateTransition: H && !A,
                votesPercentage: Math.round(100 * c),
                votes: (0, i.YW)(b)
                    .with(l.Z.IMAGE_ONLY_ANSWERS, () => `(${d.toLocaleString()})`)
                    .otherwise(() => v.intl.formatToPlainString(v.t.XRkuof, { count: d })),
            };
        }),
        Q = (0, i.YW)({
            isExpired: w,
            canSubmitVote: O,
            hasVoted: k,
            isEditingVote: U,
            canRemoveVote: L,
            isInteractive: G,
            showResults: z,
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: v.intl.string(v.t.JwkNU4),
                presentation: "button",
                enabled: D,
                type: "submit",
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: v.intl.string(v.t.XhQEh8),
                presentation: "secondaryButton",
                enabled: !0,
                type: "remove",
            }))
            .with({ hasVoted: !1, showResults: !0 }, () => ({
                label: v.intl.string(v.t.gNj6In),
                presentation: "secondaryButton",
                enabled: !0,
                type: "showVotes",
            }))
            .otherwise(() => ({
                label: v.intl.string(v.t.JwkNU4),
                presentation: "button",
                enabled: O,
                type: "submit",
            })),
        J = (0, g.isIOS)() ? v.intl.string(v.t["PVATM/"]) : v.intl.string(v.t.cHfFql),
        X = (0, i.YW)({ isExpired: w, isInteractive: G, isEditingVote: U })
            .with({ isInteractive: !1, isExpired: !1 }, () => ({
                label: v.intl.string(v.t.trrip0),
                presentation: "text",
                enabled: !1,
            }))
            .with({ isEditingVote: !0 }, () => ({
                label: v.intl.string(v.t["ETE/oC"]),
                presentation: "textButton",
                enabled: !0,
                type: "cancel",
            }))
            .otherwise(() => ({
                label: Y,
                secondaryLabel: P,
                accessibilityHint: J,
                presentation: "text",
                enabled: !0,
                type: "showVoterDetails",
            })),
        Z =
            !G || w || k || z
                ? void 0
                : { label: v.intl.string(v.t["/KHAUF"]), presentation: "textButton", enabled: !0, type: "showVotes" },
        $ = u.allow_multiselect,
        ee = (0, i.YW)({ isInteractive: G, isExpired: w, canSelectMultipleAnswers: $ })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => v.intl.string(v.t.yCXvxa))
            .otherwise(() => v.intl.string(v.t["9Y2wKO"]));
    return {
        question: u.question,
        promptLabel: ee,
        answers: K,
        answersInteraction: (0, i.YW)({ tapShouldOpenVotersModal: V, canTapAnswers: R, canSelectMultipleAnswers: $ })
            .with({ tapShouldOpenVotersModal: !0 }, () => x.CQ.LIST)
            .with({ canTapAnswers: !1 }, () => x.CQ.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => x.CQ.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => x.CQ.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: V ? J : void 0,
        layoutType: b,
        resources: (0, C.A)({ theme: o, layoutType: b }),
        containerStyle: "normal",
        primaryAction: Q,
        isInteractive: G,
        canTapAnswers: R,
        canSelectMultipleAnswers: $,
        hasSelectedAnswer: D,
        canShowVoteCounts: M,
        hasVoted: k,
        isExpired: w,
        myAvatarUrl: T,
        secondaryAction: X,
        tertiaryAction: Z,
    };
}
