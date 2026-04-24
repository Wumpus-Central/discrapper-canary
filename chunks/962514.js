n.d(t, { A: () => z, e: () => O });
var i = n(284009),
    l = n.n(i),
    a = n(735438),
    r = n.n(a),
    s = n(966974),
    o = n(17928),
    c = n(765178),
    d = n(228366),
    u = n(157559),
    _ = n(686956),
    m = n(720149),
    h = n(845584),
    p = n(58149),
    g = n(857071),
    f = n(301169),
    x = n(505527),
    A = n(9842),
    C = n(495544),
    v = n(734057),
    I = n(31717),
    E = n(834942),
    b = n(232835),
    y = n(522602),
    T = n(627968);
n(64700);
var j = n(192308),
    N = n(636537),
    S = n(652215);
async function k(e) {
    let { channelId: t, messageId: n, answerIds: i } = e;
    try {
        await N.Bo.put({ url: S.Rsh.POLL_ANSWERS(t, n), body: { answer_ids: i }, rejectWithError: !1 });
    } catch (e) {
        throw new h.LG(e);
    }
}
async function L(e) {
    let { channelId: t, messageId: n } = e;
    try {
        await N.Bo.post({ url: S.Rsh.POLL_EXPIRE(t, n), rejectWithError: !1 });
    } catch (e) {
        throw new h.LG(e);
    }
}
var R = n(862780),
    w = n(951727),
    P = n(985018);
function D(e, t) {
    let n = [...t],
        i = 0,
        l = 0;
    for (let t of n) {
        let n = e?.find((e) => e.answer_id === parseInt(t))?.poll_media;
        n?.text != null && (i += 1), n?.emoji != null && (l += 1);
    }
    return { analyticsSelectedAnswerIds: n, selectedTextAnswersCount: i, selectedEmojiAnswersCount: l };
}
function M(e) {
    let { guildId: t, title: n, body: i } = e;
    u.A.show({
        title: n,
        body: i,
        confirmText: P.intl.string(P.t["9VLmlZ"]),
        cancelText: P.intl.string(P.t["2m+Sqk"]),
        onConfirm: () => {
            _.A.joinGuild(t, { source: S.Q4z.POLL_ALERT });
        },
    });
}
function O(e) {
    let { channelId: t, messageId: i, answerId: l } = e,
        a = v.A.getChannel(t);
    if (null == a) return;
    if (g.A.isLurking(a.guild_id))
        return void M({ guildId: a.guild_id, title: P.intl.string(P.t["7LpysO"]), body: P.intl.string(P.t["5sHHoy"]) });
    let r = b.A.getMessage(t, i);
    if (null == r || null == r.poll || 0 === r.poll.answers.length) return;
    let s = l ?? String(r.poll.answers[0].answer_id);
    !(function (e) {
        let { message: t, initialAnswerId: i } = e;
        (0, j.openModalLazy)(async () => {
            let { default: e } = await n.e("19794").then(n.bind(n, 716936));
            return (n) => (0, T.jsx)(e, { ...n, message: t, initialAnswerId: i });
        });
    })({ message: r, initialAnswerId: s });
}
function U(e) {
    let { channelId: t, messageId: n, isEditing: i } = e;
    (0, R.A2)(t, n, (e) => ({
        channelId: t,
        selectedAnswerIds: new Set(),
        submitting: !1,
        editing: i,
        showResults: e?.showResults ?? !1,
    }));
}
function G(e) {
    let { channelId: t, messageId: n } = e,
        i = b.A.getMessage(t, n);
    return null == i ? [] : i.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function B(e) {
    let { channelId: t, messageId: n, answerIds: i } = e,
        l = G({ channelId: t, messageId: n }),
        a = r().difference(l, i),
        s = r().difference(i, l),
        c = C.default.getId(),
        u = [
            ...a.map((e) => ({ type: "MESSAGE_REACTION_REMOVE", id: e })),
            ...s.map((e) => ({ type: "MESSAGE_REACTION_ADD", id: e })),
        ],
        _ = o.Ay.Emitter.batched(() => {
            let e;
            for (let { id: i, type: l } of u)
                e = d.h.dispatch({
                    type: l,
                    channelId: t,
                    messageId: n,
                    emoji: { id: i, name: i },
                    userId: c,
                    optimistic: !0,
                    reactionType: x.v.VOTE,
                });
            return e;
        });
    null != _ && (await _);
}
async function V(e) {
    let { channelId: t, messageId: n } = e,
        i = v.A.getChannel(t);
    if (null == i) return;
    if (g.A.isLurking(i.guild_id))
        return void M({ guildId: i.guild_id, title: P.intl.string(P.t.Qic1FD), body: P.intl.string(P.t["5sHHoy"]) });
    if (!E.A.canChatInGuild(i.guild_id))
        return void u.A.show({ title: P.intl.string(P.t.p245wu), body: P.intl.string(P.t["U/uodt"]) });
    let a = (0, R.xt)(t, n);
    l()(null != a, "Must not be able to vote without existing state!");
    let r = G({ channelId: t, messageId: n });
    try {
        let e = [...a.selectedAnswerIds.values()];
        (0, R.A2)(
            t,
            n,
            (e) => (
                l()(null != e, "Must not be able to vote without existing state!"),
                { ...e, submitting: !0, editing: !1 }
            ),
        ),
            await B({ channelId: t, messageId: n, answerIds: e }),
            await k({ channelId: t, messageId: n, answerIds: e }),
            (0, R.A2)(t, n, () => void 0),
            c.O.announce(0 === e.length ? P.intl.string(P.t["xcvy+3"]) : P.intl.string(P.t.o20GSo));
    } catch (e) {
        u.A.show({
            title: P.intl.string(P.t.iufib1),
            body: e.getAnyErrorMessage?.() ?? e.message ?? P.intl.string(P.t.eAn6z2),
        }),
            await B({ channelId: t, messageId: n, answerIds: r }),
            (0, R.A2)(t, n, (e) => {
                if (null != e) return { ...e, submitting: !1, editing: !1 };
            });
    }
}
async function F(e) {
    let { channelId: t, messageId: n } = e,
        i = v.A.getChannel(t);
    if (null != i)
        return g.A.isLurking(i.guild_id)
            ? void M({ guildId: i.guild_id, title: P.intl.string(P.t.B9QnBp), body: P.intl.string(P.t.BVZCTn) })
            : ((0, R.A2)(t, n, (e) => ({
                  channelId: t,
                  selectedAnswerIds: new Set(),
                  submitting: !1,
                  editing: !1,
                  showResults: e?.showResults ?? !1,
              })),
              await V({ channelId: t, messageId: n }));
}
async function H(e) {
    let { channelId: t, messageId: n, type: i } = e;
    switch (i) {
        case "submit":
            await V({ channelId: t, messageId: n });
            break;
        case "remove":
            await F({ channelId: t, messageId: n });
            break;
        case "cancel":
            U({ channelId: t, messageId: n, isEditing: !1 });
            break;
        case "showVotes":
            !(function (e) {
                let { channelId: t, messageId: n } = e;
                (0, R.A2)(t, n, (e) => {
                    let i = null == e || !e.showResults,
                        l = b.A.getMessage(t, n),
                        a = null != l ? l.reactions.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0) : 0;
                    return (
                        p.Ay.trackWithMetadata(S.HAw.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: i,
                            votes_count: a,
                        }),
                        {
                            channelId: t,
                            selectedAnswerIds: new Set(),
                            submitting: e?.submitting ?? !1,
                            editing: e?.submitting ?? !1,
                            showResults: i,
                        }
                    );
                });
            })({ channelId: t, messageId: n });
            break;
        case "showVoterDetails":
            O({ channelId: t, messageId: n });
            break;
        default:
            l()(!1, `Unknown poll action type: ${i}`);
    }
}
let z = {
    handlePollAnswerTapped: function (e) {
        let { answerId: t, ...n } = e,
            {
                channelId: i,
                messageId: a,
                message: r,
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    i = b.A.getMessage(t, n);
                if (null != i) return { message: i, channelId: t, messageId: n };
                let a = A.A.getMessage(t, n);
                if (null != a.message) return { channelId: t, messageId: n, message: a.message };
                throw (l()(null != i, "Tapped on a non-existent poll message"), Error());
            })(n),
            { tapShouldOpenVotersModal: s } = (0, w.j8)(r) ?? {};
        if (!0 === s) return void O({ channelId: i, messageId: a, answerId: t });
        let o = r.poll?.allow_multiselect;
        (0, R.A2)(i, a, (e) => {
            if (null == e) {
                let e = new Set([t]),
                    {
                        analyticsSelectedAnswerIds: n,
                        selectedTextAnswersCount: l,
                        selectedEmojiAnswersCount: s,
                    } = D(r.poll?.answers, e);
                return (
                    p.Ay.trackWithMetadata(S.HAw.POLL_VOTE_SELECTED, {
                        channel_id: i,
                        message_id: a,
                        selected_answer_ids: n,
                        selected_text_answers_count: l,
                        selected_emoji_answers_count: s,
                    }),
                    { channelId: i, selectedAnswerIds: e, submitting: !1, editing: !1, showResults: !1 }
                );
            }
            let n = { ...e },
                l = new Set(n.selectedAnswerIds);
            if (((n.selectedAnswerIds = l), l.has(t))) l.delete(t);
            else {
                if (!o) for (let e of l) l.delete(e);
                l.add(t);
            }
            let {
                analyticsSelectedAnswerIds: s,
                selectedTextAnswersCount: c,
                selectedEmojiAnswersCount: d,
            } = D(r.poll?.answers, l);
            return (
                p.Ay.trackWithMetadata(S.HAw.POLL_VOTE_SELECTED, {
                    channel_id: i,
                    message_id: a,
                    selected_answer_ids: s,
                    selected_text_answers_count: c,
                    selected_emoji_answers_count: d,
                }),
                n
            );
        });
    },
    handlePollSubmitVote: V,
    handleUpdateVoteEditingState: U,
    handlePollActionTapped: H,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: i, allowMultiSelect: l, duration: a, layout: r, onClose: o } = e,
            c = y.A.getUploads(t.id, I.C.Poll),
            d = i.map((e) => {
                let t = c?.findIndex((t) => t.id === e.localCreationAnswerId),
                    n = { attachment_ids: -1 !== t ? [`${t}`] : void 0 };
                r === s.Z.DEFAULT && (n.text = e.text?.trim());
                let i = e.image?.emoji;
                return (
                    null != i &&
                        (null != i.id
                            ? (n.emoji = { id: i.id, name: "" })
                            : null != i.optionallyDiverseSequence && (n.emoji = { name: i.optionallyDiverseSequence })),
                    { poll_media: n }
                );
            }),
            u = { question: { text: n.trim() }, answers: d, allow_multiselect: l, duration: a, layout_type: r };
        try {
            await m.A.sendPollMessage(t.id, u, {
                attachmentsToUpload: c,
                onAttachmentUploadError: (e, n, i) => {
                    (0, f.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
                },
            }),
                o?.();
        } catch (e) {
            if ("poll" === (e instanceof h.LG ? e : new h.LG(e)).getAnyErrorMessage() && null != e.text)
                throw { ...e, body: JSON.parse(e.text) };
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await u.A.confirm({ title: P.intl.string(P.t["+rfkTK"]), body: P.intl.string(P.t.H2I1gL) })) &&
            (await L({ channelId: t, messageId: n }));
    },
};
