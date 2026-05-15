n.d(t, { A: () => Y, e: () => O });
var i = n(284009),
    l = n.n(i),
    s = n(735438),
    r = n.n(s),
    a = n(744593),
    o = n(17928),
    d = n(765178),
    c = n(228366),
    u = n(157559),
    m = n(66834),
    h = n(720149),
    g = n(913122),
    p = n(95561),
    A = n(857071),
    x = n(567231),
    f = n(505527),
    E = n(9842),
    C = n(495544),
    I = n(734057),
    v = n(31717),
    _ = n(834942),
    j = n(232835),
    N = n(522602),
    y = n(627968);
n(64700);
var T = n(192308),
    S = n(636537),
    b = n(652215);
async function L(e) {
    let { channelId: t, messageId: n, answerIds: i } = e;
    try {
        await S.Bo.put({ url: b.Rsh.POLL_ANSWERS(t, n), body: { answer_ids: i }, rejectWithError: !1 });
    } catch (e) {
        throw new g.LG(e);
    }
}
async function R(e) {
    let { channelId: t, messageId: n } = e;
    try {
        await S.Bo.post({ url: b.Rsh.POLL_EXPIRE(t, n), rejectWithError: !1 });
    } catch (e) {
        throw new g.LG(e);
    }
}
var k = n(862780),
    M = n(555034),
    P = n(375708);
function w(e, t) {
    let n = [...t],
        i = 0,
        l = 0;
    for (let t of n) {
        let n = e?.find((e) => e.answer_id === parseInt(t))?.poll_media;
        n?.text != null && (i += 1), n?.emoji != null && (l += 1);
    }
    return { analyticsSelectedAnswerIds: n, selectedTextAnswersCount: i, selectedEmojiAnswersCount: l };
}
function D(e) {
    let { guildId: t, title: n, body: i } = e;
    u.A.show({
        title: n,
        body: i,
        confirmText: P.intl.string(P.t["9VLmlZ"]),
        cancelText: P.intl.string(P.t["2m+Sqk"]),
        onConfirm: () => {
            m.A.joinGuild(t, { source: b.Q4z.POLL_ALERT });
        },
    });
}
function O(e) {
    let { channelId: t, messageId: i, answerId: l } = e,
        s = I.A.getChannel(t);
    if (null == s) return;
    if (A.A.isLurking(s.guild_id))
        return void D({ guildId: s.guild_id, title: P.intl.string(P.t["7LpysO"]), body: P.intl.string(P.t["5sHHoy"]) });
    let r = j.A.getMessage(t, i);
    if (null == r || null == r.poll || 0 === r.poll.answers.length) return;
    let a = l ?? String(r.poll.answers[0].answer_id);
    !(function (e) {
        let { message: t, initialAnswerId: i } = e;
        (0, T.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("74389"), n.e("40183"), n.e("78195"), n.e("19794")]).then(
                n.bind(n, 716936),
            );
            return (n) => (0, y.jsx)(e, { ...n, message: t, initialAnswerId: i });
        });
    })({ message: r, initialAnswerId: a });
}
function U(e) {
    let { channelId: t, messageId: n, isEditing: i } = e;
    (0, k.A2)(t, n, (e) => ({
        channelId: t,
        selectedAnswerIds: new Set(),
        submitting: !1,
        editing: i,
        showResults: e?.showResults ?? !1,
    }));
}
function G(e) {
    let { channelId: t, messageId: n } = e,
        i = j.A.getMessage(t, n);
    return null == i ? [] : i.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function V(e) {
    let { channelId: t, messageId: n, answerIds: i } = e,
        l = G({ channelId: t, messageId: n }),
        s = r().difference(l, i),
        a = r().difference(i, l),
        d = C.default.getId(),
        u = [
            ...s.map((e) => ({ type: "MESSAGE_REACTION_REMOVE", id: e })),
            ...a.map((e) => ({ type: "MESSAGE_REACTION_ADD", id: e })),
        ],
        m = o.Ay.Emitter.batched(() => {
            let e;
            for (let { id: i, type: l } of u)
                e = c.h.dispatch({
                    type: l,
                    channelId: t,
                    messageId: n,
                    emoji: { id: i, name: i },
                    userId: d,
                    optimistic: !0,
                    reactionType: f.v.VOTE,
                });
            return e;
        });
    null != m && (await m);
}
async function B(e) {
    let { channelId: t, messageId: n } = e,
        i = I.A.getChannel(t);
    if (null == i) return;
    if (A.A.isLurking(i.guild_id))
        return void D({ guildId: i.guild_id, title: P.intl.string(P.t.Qic1FD), body: P.intl.string(P.t["5sHHoy"]) });
    if (!_.A.canChatInGuild(i.guild_id))
        return void u.A.show({ title: P.intl.string(P.t.p245wu), body: P.intl.string(P.t["U/uodt"]) });
    let s = (0, k.xt)(t, n);
    l()(null != s, "Must not be able to vote without existing state!");
    let r = G({ channelId: t, messageId: n });
    try {
        let e = [...s.selectedAnswerIds.values()];
        (0, k.A2)(
            t,
            n,
            (e) => (
                l()(null != e, "Must not be able to vote without existing state!"),
                { ...e, submitting: !0, editing: !1 }
            ),
        ),
            await V({ channelId: t, messageId: n, answerIds: e }),
            await L({ channelId: t, messageId: n, answerIds: e }),
            (0, k.A2)(t, n, () => void 0),
            d.O.announce(0 === e.length ? P.intl.string(P.t["xcvy+3"]) : P.intl.string(P.t.o20GSo));
    } catch (e) {
        u.A.show({
            title: P.intl.string(P.t.iufib1),
            body: e.getAnyErrorMessage?.() ?? e.message ?? P.intl.string(P.t.eAn6z2),
        }),
            await V({ channelId: t, messageId: n, answerIds: r }),
            (0, k.A2)(t, n, (e) => {
                if (null != e) return { ...e, submitting: !1, editing: !1 };
            });
    }
}
async function H(e) {
    let { channelId: t, messageId: n } = e,
        i = I.A.getChannel(t);
    if (null != i)
        return A.A.isLurking(i.guild_id)
            ? void D({ guildId: i.guild_id, title: P.intl.string(P.t.B9QnBp), body: P.intl.string(P.t.BVZCTn) })
            : ((0, k.A2)(t, n, (e) => ({
                  channelId: t,
                  selectedAnswerIds: new Set(),
                  submitting: !1,
                  editing: !1,
                  showResults: e?.showResults ?? !1,
              })),
              await B({ channelId: t, messageId: n }));
}
async function F(e) {
    let { channelId: t, messageId: n, type: i } = e;
    switch (i) {
        case "submit":
            await B({ channelId: t, messageId: n });
            break;
        case "remove":
            await H({ channelId: t, messageId: n });
            break;
        case "cancel":
            U({ channelId: t, messageId: n, isEditing: !1 });
            break;
        case "showVotes":
            !(function (e) {
                let { channelId: t, messageId: n } = e;
                (0, k.A2)(t, n, (e) => {
                    let i = null == e || !e.showResults,
                        l = j.A.getMessage(t, n),
                        s = null != l ? l.reactions.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0) : 0;
                    return (
                        p.Ay.trackWithMetadata(b.HAw.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: i,
                            votes_count: s,
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
let Y = {
    handlePollAnswerTapped: function (e) {
        let { answerId: t, ...n } = e,
            {
                channelId: i,
                messageId: s,
                message: r,
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    i = j.A.getMessage(t, n);
                if (null != i) return { message: i, channelId: t, messageId: n };
                let s = E.A.getMessage(t, n);
                if (null != s.message) return { channelId: t, messageId: n, message: s.message };
                throw (l()(null != i, "Tapped on a non-existent poll message"), Error());
            })(n),
            { tapShouldOpenVotersModal: a } = (0, M.j8)(r) ?? {};
        if (!0 === a) return void O({ channelId: i, messageId: s, answerId: t });
        let o = r.poll?.allow_multiselect;
        (0, k.A2)(i, s, (e) => {
            if (null == e) {
                let e = new Set([t]),
                    {
                        analyticsSelectedAnswerIds: n,
                        selectedTextAnswersCount: l,
                        selectedEmojiAnswersCount: a,
                    } = w(r.poll?.answers, e);
                return (
                    p.Ay.trackWithMetadata(b.HAw.POLL_VOTE_SELECTED, {
                        channel_id: i,
                        message_id: s,
                        selected_answer_ids: n,
                        selected_text_answers_count: l,
                        selected_emoji_answers_count: a,
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
                analyticsSelectedAnswerIds: a,
                selectedTextAnswersCount: d,
                selectedEmojiAnswersCount: c,
            } = w(r.poll?.answers, l);
            return (
                p.Ay.trackWithMetadata(b.HAw.POLL_VOTE_SELECTED, {
                    channel_id: i,
                    message_id: s,
                    selected_answer_ids: a,
                    selected_text_answers_count: d,
                    selected_emoji_answers_count: c,
                }),
                n
            );
        });
    },
    handlePollSubmitVote: B,
    handleUpdateVoteEditingState: U,
    handlePollActionTapped: F,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: i, allowMultiSelect: l, duration: s, layout: r, onClose: o } = e,
            d = N.A.getUploads(t.id, v.C.Poll),
            c = i.map((e) => {
                let t = d?.findIndex((t) => t.id === e.localCreationAnswerId),
                    n = { attachment_ids: -1 !== t ? [`${t}`] : void 0 };
                r === a.Z.DEFAULT && (n.text = e.text?.trim());
                let i = e.image?.emoji;
                return (
                    null != i &&
                        (null != i.id
                            ? (n.emoji = { id: i.id, name: "" })
                            : null != i.optionallyDiverseSequence && (n.emoji = { name: i.optionallyDiverseSequence })),
                    { poll_media: n }
                );
            }),
            u = { question: { text: n.trim() }, answers: c, allow_multiselect: l, duration: s, layout_type: r };
        try {
            await h.A.sendPollMessage(t.id, u, {
                attachmentsToUpload: d,
                onAttachmentUploadError: (e, n, i) => {
                    (0, x.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
                },
            }),
                o?.();
        } catch (e) {
            if ("poll" === (e instanceof g.LG ? e : new g.LG(e)).getAnyErrorMessage() && null != e.text)
                throw { ...e, body: JSON.parse(e.text) };
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await u.A.confirm({ title: P.intl.string(P.t["+rfkTK"]), body: P.intl.string(P.t.H2I1gL) })) &&
            (await R({ channelId: t, messageId: n }));
    },
};
